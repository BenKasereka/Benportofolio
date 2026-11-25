// Module 03 — Contrats de Travail & Administration du Personnel
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (base de
// Goma, suite du Module 01), avec les deux templates remplis champ par champ.
// Les noms, chiffres et dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Contrats de Travail & Administration du Personnel',
    hook: "À la fin de ce module, vous aurez en main une fiche de décision de contrat pour chaque recrutement, un registre qui vous alerte avant qu'un CDD ne devienne un CDI, des dossiers individuels complets et sécurisés (taux de complétude à 100 %), un suivi des présences et des congés qui sert de preuve, et un avertissement écrit complet, signé et classé, qui rend la suite de la procédure disciplinaire possible sans sauter une étape. Tout cela étape par étape, sur un cas suivi de la base de Goma.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir le type de contrat (CDD, CDI ou contrat d'expatriation) pour chaque demande de recrutement en appliquant le test de recours au CDD, et produire une fiche de décision de contrat d'une page, validée par écrit.",
      "Tenir un registre du personnel et détecter, au plus tard au deuxième renouvellement, le risque de requalification d'un CDD en CDI, en produisant une note de recommandation (fin, renouvellement justifié ou passage en CDI).",
      "Constituer, archiver et sécuriser un dossier individuel complet avec checklist-dossier-individuel-personnel.xlsx, jusqu'à un taux de complétude de 100 %, et lire le tableau de bord d'équipe pour produire un plan de relance daté.",
      "Tenir le suivi des présences, des congés et des absences pour disposer de preuves datées : un tableau des retards reconstitué à partir des feuilles de pointage et des soldes de congés à jour.",
      "Situer un dossier dans la séquence disciplinaire, choisir l'étape légale applicable et produire la note de constat et, si l'étape le justifie, la note d'avertissement oral documenté.",
      "Rédiger, faire valider, remettre et classer un avertissement écrit complet (sections 1 à 7 de gabarit-procedure-disciplinaire-avertissement.docx) avec un droit de réponse réel, puis mettre à jour le dossier du salarié.",
      "Préparer la mise en demeure et le dossier de licenciement (ou reconnaître une faute grave) sans sauter d'étape, et expliquer à un superviseur pressé pourquoi cette discipline protège l'organisation.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de droit du travail : c'est la méthode d'une HR Officer qui doit, dans la même semaine, choisir le bon contrat, protéger les dossiers du personnel et conduire une procédure disciplinaire qui tienne devant une inspection du travail. Tout est appliqué à un seul cas suivi, du début à la fin. À la fin, vous aurez produit huit livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) : nous sommes le lundi 12 octobre 2026. Vous êtes N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS), à qui vous avez rendu l'organigramme corrigé au Module 01. Ce matin, trois choses arrivent en même temps : trois demandes de recrutement à traiter, la revue trimestrielle des dossiers du personnel à faire avant le 30 octobre, et le Superviseur Logistique L. Katembo, excédé, qui exige le licenciement immédiat du chauffeur Jean-Pierre Mwamba, en CDI depuis le 1er avril 2024, pour des retards répétés.",
    ],
    bullets: [
      "Livrable 1 — Une fiche de décision de contrat par recrutement (type, durée, motif, clauses), validée par écrit.",
      "Livrable 2 — Le registre du personnel avec alertes de fin de CDD, et la note de recommandation sur un CDD à risque de requalification.",
      "Livrable 3 — La checklist du dossier individuel remplie, le tableau de bord d'équipe lu et un plan de relance daté ; dossiers archivés et sécurisés.",
      "Livrable 4 — Le suivi des présences, congés et absences, avec le tableau des retards reconstitué à partir des feuilles de pointage.",
      "Livrable 5 — La note de constat, la décision d'étape disciplinaire et le message au superviseur.",
      "Livrable 6 — La note d'avertissement oral documenté, classée au dossier le jour même.",
      "Livrable 7 — L'avertissement écrit complet (gabarit sections 1 à 7), signé, répondu et classé, avec le dossier du chauffeur mis à jour.",
      "Livrable 8 — La mise en demeure et le dossier de licenciement prêts à être contrôlés, ou le signalement d'une faute grave.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '0 ligne écrite',
    caption: "d'avertissement dans le dossier d'un chauffeur en CDI depuis 2 ans et demi, alors que 8 retards sont consignés en six semaines sur les feuilles de pointage. C'est ce que vous découvrirez le lundi 12 octobre en ouvrant son dossier.",
    context: "Seule trace : une mention orale du superviseur, non datée, jamais formalisée. Noms et chiffres fictifs. Le fond du dossier est légitime ; c'est la forme qui manque, et c'est elle qui décide d'un contentieux devant l'inspection du travail.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: "CDD, CDI, contrat d'expatriation : trois logiques, trois niveaux de risque",
    body: [
      "Le CDD (Contrat à Durée Déterminée) est l'outil de la flexibilité contrôlée : remplacement d'un congé maternité, pic d'activité lié à une urgence, poste lié à la durée d'un financement bailleur. Il n'est légal que s'il correspond à un motif réel et temporaire. L'utiliser pour un poste permanent « parce que c'est plus simple à terminer si ça ne marche pas » coûte cher, précisément au moment de la clôture d'un projet, sous le regard d'un bailleur qui audite les dépenses de personnel.",
      "Le CDI (Contrat à Durée Indéterminée) est la norme pour tout poste structurel de la mission : coordination, support permanent, fonctions cœur de mandat. Il engage l'organisation sur la durée (préavis, indemnités, procédure de licenciement encadrée) et protège le mieux l'employé national qui construit une carrière avec vous.",
      "Le contrat d'expatriation combine souvent un droit du siège et des conditions propres à la mission : hardship, R&R (repos et récupération), assurance santé et évacuation, logement, transport. Il expose à un risque juridique croisé : celui du droit du travail local et celui du droit applicable au contrat lui-même. Les clauses d'évacuation et de couverture santé ne sont pas décoratives : elles déterminent qui paie quoi le jour d'une évacuation médicale en urgence.",
    ],
    example: {
      title: 'Appliqué aux demandes du lundi 12 octobre à Goma',
      lines: [
        "Remplacer B. Kahambu, infirmière en congé maternité du 26/10/2026 au 01/02/2027 : besoin temporaire et daté → logique CDD.",
        "Créer un poste d'Assistant(e) Paie pour réduire la dépendance à une seule Payroll Officer : besoin permanent → logique CDI.",
        "Accueillir un Coordinateur Logistique recruté hors RDC pour 12 mois : droit croisé, évacuation, hardship → logique contrat d'expatriation.",
      ],
    },
    highlight: "Réutiliser le même gabarit de contrat pour trois situations qui n'ont rien à voir est l'erreur la plus fréquente d'une HR Officer junior sur le terrain.",
  },
  {
    type: 'comparison-table',
    title: 'Trois types de contrat, trois risques différents',
    columns: ['Type de contrat', 'Usage correct', 'Risque principal si mal géré', 'Question à poser avant de signer'],
    rows: [
      ['CDD', "Motif réel et temporaire : remplacement, pic d'activité, durée liée à un financement", "Requalification automatique en CDI si renouvelé sans limite ni justification", "Quelle pièce prouve le motif, et quelle est la date de fin ?"],
      ['CDI', 'Tout poste structurel et permanent de la mission', "Procédure de rupture plus lourde si elle n'est pas anticipée dès l'embauche", "Ce poste existera-t-il encore dans 12 mois, quel que soit le projet ?"],
      ["Contrat d'expatriation", "Personnel international en mission, avec conditions spécifiques (hardship, évacuation, assurance)", "Clauses de sécurité et de santé absentes parce que copiées d'un gabarit national", "Qui paie quoi en cas d'évacuation, et quel droit s'applique ?"],
    ],
  },
  {
    type: 'concept',
    title: 'Le risque de requalification : la bombe à retardement du CDD répété',
    body: [
      "Un CDD renouvelé de façon répétée, sans motif objectif renouvelé à chaque fois, se transforme en CDI, automatiquement et souvent rétroactivement, au moment où un inspecteur du travail ou un tribunal l'examine. L'organisation se retrouve face à une obligation de licenciement en bonne et due forme, avec préavis et indemnités calculés depuis la date du tout premier contrat, pas depuis le dernier renouvellement.",
      "Le scénario est presque toujours le même : un poste financé par un projet à durée limitée est reconduit CDD après CDD, parce que le financement est reconduit d'année en année. Après le troisième ou quatrième renouvellement, le poste n'est plus temporaire : c'est un poste permanent financé par un flux de projets qui se succèdent. Le motif du contrat n'a plus rien de temporaire, même si la ligne budgétaire, elle, reste annuelle. C'est cette réalité que l'inspecteur regarde.",
    ],
    table: {
      columns: ['Contrat', 'Période', 'Rang', 'Motif écrit'],
      rows: [
        ['CDD n° 1', '01/12/2024 – 31/05/2025', 'Contrat initial', 'Projet nutrition, phase 1'],
        ['CDD n° 2', '01/06/2025 – 30/11/2025', '1er renouvellement', 'Projet nutrition, phase 1 prolongée'],
        ['CDD n° 3', '01/12/2025 – 31/05/2026', '2e renouvellement : le signal', 'Projet nutrition, phase 2'],
        ['CDD n° 4', '01/06/2026 – 30/11/2026', '3e renouvellement', 'Projet nutrition, phase 2'],
      ],
    },
    highlight: "Dès le deuxième renouvellement d'un CDD sur le même poste, demandez-vous si ce poste est réellement temporaire. Si la réponse est non, ouvrez la conversation sur un passage en CDI avant qu'une inspection du travail ne la tranche pour vous.",
    tip: "Le nombre maximal de renouvellements et la durée maximale cumulée sont fixés par le Code du travail de chaque pays : relevez-les dans le texte applicable et faites-les confirmer par le HR Manager. La règle du deuxième renouvellement est votre seuil d'alerte interne, pas un seuil légal.",
  },
  {
    type: 'concept',
    title: "La logique d'une procédure disciplinaire progressive",
    body: [
      "Une procédure disciplinaire n'est pas une sanction décidée dans l'urgence : c'est une séquence progressive où chaque étape doit être documentée avant de passer à la suivante. Elle donne à l'employé une chance réelle de corriger son comportement, et à l'organisation une trace écrite qui prouve, en cas de contestation, qu'elle a agi de façon proportionnée et de bonne foi.",
      "La séquence standard, sous des formes très proches dans la plupart des codes du travail : (1) avertissement oral documenté, qui reste oral mais est noté par écrit au dossier le jour même ; (2) avertissement écrit, remis à l'employé, qui décrit le fait, rappelle la règle et précise qu'une récidive expose à une sanction plus lourde ; (3) mise en demeure, qui constate une récidive ou un fait plus sérieux et avertit que la relation de travail est en jeu ; (4) licenciement, qui ne peut s'appuyer que sur un dossier disciplinaire déjà documenté, sauf faute grave caractérisée, qui suit une logique distincte et plus stricte encore en matière de preuve.",
    ],
    highlight: "Un avertissement qui n'est pas écrit, daté et classé n'existe pas, du point de vue de la preuve, le jour où vous en avez besoin.",
  },
  {
    type: 'comparison-table',
    title: 'La séquence disciplinaire : document, délai et validation à chaque étape',
    columns: ['Étape', 'Document requis', 'Délai à respecter', 'Qui valide (exemple KSS, à confirmer dans votre délégation)'],
    rows: [
      ['1. Avertissement oral documenté', "Note interne au dossier (peut ne pas être remise à l'employé, mais doit exister par écrit)", 'Rédigée le jour même du fait constaté', "Le HR Officer rédige ; le manager direct est présent ; le HR Manager est informé"],
      ['2. Avertissement écrit', "gabarit-procedure-disciplinaire-avertissement.docx, étape « Avertissement écrit »", "Remis à l'employé sous 5 jours ouvrables après le fait constaté", "HR Manager de mission (niveau 2) ; Base Manager consulté ; Head of Mission informé"],
      ['3. Mise en demeure', "Même gabarit, étape « Mise en demeure », avec référence explicite aux avertissements antérieurs", 'Remise sous 5 jours ouvrables après la récidive constatée', "HR Manager de mission ; Head of Mission informé avant la remise"],
      ['4. Licenciement', "Même gabarit, étape « Licenciement », avec le dossier disciplinaire complet en pièce jointe", "Selon le préavis légal applicable au type de contrat et à l'ancienneté", "Head of Mission avec le HR Manager ; siège si cadre international ou faute grave"],
    ],
  },
  {
    type: 'concept',
    title: 'Piège classique : sauter une étape « pour gagner du temps »',
    body: [
      "Un superviseur excédé qui veut un licenciement immédiat pour un problème répété depuis des mois pousse presque toujours à sauter une étape sous pression opérationnelle. C'est précisément là que l'absence de traçabilité écrite transforme un licenciement légitime sur le fond en licenciement abusif sur la forme.",
      "Lisez les trois phrases du Superviseur Logistique de Goma avec l'œil d'un inspecteur du travail : aucune ne constitue une preuve.",
    ],
    table: {
      columns: ['Ce que dit le superviseur', 'Ce que cela vaut comme preuve', 'Ce que vous faites'],
      rows: [
        ['« Il faut le licencier maintenant »', "Une demande, pas un fait. Une décision de licenciement ne se prend pas à la demande d'un manager", "Vous vérifiez le dossier avant de répondre : étape réellement atteinte, pièces disponibles"],
        ['« On n\'a pas le temps de faire tout un processus »', "Une contrainte opérationnelle réelle (convoi médical), mais qui n'autorise pas à supprimer la procédure", "Vous proposez une mesure opérationnelle immédiate (chauffeur de relève) et une procédure rapide mais complète"],
        ['« Je lui ai déjà dit oralement plusieurs fois »', "Aucune : sans date, sans témoin, sans note rédigée au moment des faits, l'employé peut tout nier", "Vous lui demandez de noter chaque nouveau fait le jour même, avec l'heure"],
      ],
    },
    highlight: "L'organisation perd le contentieux non pas parce que l'employé avait raison sur les faits, mais parce que la procédure n'a pas été respectée.",
  },
  {
    type: 'concept',
    title: 'Le dossier individuel : la preuve écrite de toute la relation de travail',
    body: [
      "Le dossier individuel regroupe les documents obligatoires de chaque employé, du recrutement à la séparation. Il sert quatre fois : au contrôle de l'inspection du travail, à l'audit du bailleur qui vérifie que les dépenses de personnel reposent sur de vrais contrats et de vraies qualifications, au litige (une sanction contestée, un licenciement) et à la continuité (n'importe quel membre de l'équipe RH doit pouvoir le retrouver et le comprendre).",
      "Il contient des données sensibles : pièce d'identité, coordonnées bancaires, aptitude médicale, mesures disciplinaires. La confidentialité fait donc partie de sa constitution, pas d'une option de sécurité ajoutée plus tard.",
    ],
    example: {
      title: 'Le piège des « 90 % »',
      body: "Un dossier « complet à 90 % » sur 12 documents applicables, c'est un document manquant (92 %) ou deux (83 %). Statistiquement, ce sont ceux qui vous manqueront le jour d'un contrôle, d'un audit ou d'un contentieux : un certificat médical d'aptitude, une vérification de références, un code de conduite signé. Dans ce module, le seuil de travail est 100 %.",
    },
    tip: "Ouvrez le dossier le jour de la signature du contrat, pas le jour où quelqu'un en a besoin. Un dossier réparé sous la pression d'un litige n'a plus la valeur d'un dossier tenu à jour.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'Requalification', definition: "Transformation légale, souvent automatique, d'un CDD en CDI lorsque les conditions de recours au CDD ne sont plus réunies dans les faits." },
      { term: 'Terme (d\'un CDD)', definition: "Date ou événement précis qui met fin au contrat. Sans terme identifiable, le motif temporaire est contestable." },
      { term: 'Faute grave', definition: "Fait d'une gravité telle qu'il rend impossible le maintien du salarié dans l'organisation, même pendant un préavis. Procédure accélérée, mais toujours documentée." },
      { term: 'Mise en demeure', definition: "Avertissement formel de dernier niveau avant licenciement, qui mentionne explicitement le risque de rupture du contrat en cas de récidive." },
      { term: 'Dossier individuel du personnel', definition: "Ensemble des documents obligatoires archivés pour chaque employé, du recrutement à la séparation : la preuve écrite de la relation de travail." },
      { term: 'Registre du personnel', definition: "Liste centrale de chaque employé actif : type de contrat, date d'entrée, date de fin (CDD) ou ancienneté (CDI), emplacement physique et numérique du dossier." },
      { term: 'Droit de réponse', definition: "Délai réel laissé à l'employé, après remise d'un document disciplinaire, pour répondre par écrit. Sa réponse est classée au dossier au même titre que le document." },
      { term: 'Jour ouvrable', definition: "Jour compté pour les délais de la procédure. Dans l'exemple de ce module : du lundi au vendredi, hors jours fériés. Vérifiez la définition de votre Code du travail." },
      { term: 'Hardship', definition: "Indemnité ou avantage compensant les conditions de vie difficiles d'une affectation. Traité au Module 04." },
      { term: 'R&R (repos et récupération)', definition: "Congés de récupération périodiques accordés au personnel international en zone difficile, prévus dans le contrat d'expatriation." },
      { term: 'PSEA', definition: "Protection contre l'exploitation et les abus sexuels : le code de conduite signé par chaque employé en intègre la politique." },
      { term: 'Matricule', definition: "Identifiant unique d'un employé (par exemple KSS-GOM-018). Il sert de clé commune entre registre, paie, dossier et tableaux de suivi." },
    ],
  },
  {
    type: 'checklist',
    title: "Documents obligatoires d'un dossier individuel (les 14 lignes de la checklist)",
    items: [
      "Contrat de travail signé (original).",
      "Copie de la pièce d'identité ou du passeport valide.",
      "CV à jour.",
      "Diplômes et certificats de qualification (copies certifiées).",
      "Certificat médical d'aptitude au travail.",
      "Vérification des références (au moins 2, documentée).",
      "Formulaire d'urgence (personne à contacter).",
      "Code de conduite signé, y compris la politique PSEA.",
      "Fiche de poste signée (Job Description).",
      "Photo d'identité.",
      "Coordonnées bancaires pour la paie (RIB).",
      "Affiliation à la sécurité sociale ou à la caisse locale.",
      "Copie du visa ou du permis de travail (personnel expatrié uniquement).",
      "Attestation de fin de période d'essai (selon profil).",
    ],
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module',
    body: [
      "Deux templates sont fournis dans le dossier 04-templates, utilisés champ par champ dans les procédures qui suivent. Deux autres outils, que toute administration RH sérieuse tient, sont décrits ici avec les champs que vous utiliserez : le registre du personnel et la feuille de pointage.",
    ],
    table: {
      columns: ['Outil', 'Ce qu\'il contient', 'Utilisé dans'],
      rows: [
        ['checklist-dossier-individuel-personnel.xlsx', "Onglet « Checklist Dossiers » : colonne A Document requis (14 lignes, 6 à 19), B Statut, une colonne par employé (C à H), taux de complétude en ligne 21 et documents manquants en ligne 22. Onglet « Tableau de bord équipe » : taux, documents manquants et statut par employé, synthèse équipe", 'Procédures 3 et 7'],
        ['gabarit-procedure-disciplinaire-avertissement.docx', "7 sections : identification, faits constatés, avertissements antérieurs, étape appliquée, droit de réponse, décision, signatures (avec témoin en cas de refus)", 'Procédures 7 et 8'],
        ['Registre du personnel', "Matricule, nom et poste, type de contrat, date d'entrée, date de fin (CDD) ou ancienneté (CDI), emplacement du dossier ; colonne de travail : nombre de renouvellements", 'Procédures 1, 2 et 5'],
        ['Feuille de pointage et suivi des congés', "Date, matricule, heure d'arrivée et de départ, motif d'écart, justificatif ; soldes de congés acquis, pris et restants", 'Procédures 4, 5 et 6'],
      ],
    },
    pitfall: "Dans la checklist, les cellules grisées (lignes 21 et 22, onglet Tableau de bord) contiennent des formules : ne les écrasez jamais. Seules les cellules C6 à H19 se remplissent, par liste déroulante Oui / Non / N/A.",
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Vous retrouvez l'équipe du Module 01, à laquelle s'ajoutent les personnes de ce module. Posez les noms sur les rôles avant d'agir : cela vous dit à qui parler, de quoi, et dans quel ordre.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Lieu', "Ce que cette personne attend de vous"],
      rows: [
        ['HR Officer de base', 'N. Mbusa (vous)', 'Goma', '—'],
        ['HR Manager de mission', 'A. Kavira', 'Kinshasa', "Valide les avertissements écrits et les contrats nationaux ; veut des dossiers complets et des décisions argumentées"],
        ['Head of Mission', 'H. Mwamba', 'Kinshasa', "Signe les contrats, décide des licenciements ; veut être informé avant, jamais après"],
        ['Base Manager', 'E. Kasongo', 'Goma', "Consulté sur toute procédure qui touche son équipe"],
        ['Superviseur Logistique', 'L. Katembo', 'Goma', "Veut régler le problème du chauffeur vite : convois du matin à tenir"],
        ['Chauffeur logistique (CDI)', 'Jean-Pierre Mwamba', 'Goma', "Matricule KSS-GOM-018, embauché le 01/04/2024 (sans lien de parenté avec le Head of Mission)"],
        ['Agent de distribution (CDD)', 'G. Bulongo', 'Goma', "Quatrième CDD consécutif sur le même poste"],
        ['Assistant RH', 'P. Sifa', 'Goma', "Classe les dossiers, tient les feuilles de pointage"],
        ['Finance Manager / Payroll Officer', 'R. Ilunga / C. Bahati', 'Kinshasa / Goma', "Reçoivent chaque mois les mouvements de personnel et d'absences avant le 20"],
        ['Head of HR siège', 'S. Lambert', 'Siège', "Valide les contrats d'expatriation et les cas à fort enjeu"],
      ],
    },
    tip: "Les noms sont fictifs et les personnes réelles de votre mission ont, elles, des attentes que vous découvrirez en les interrogeant. Construisez ce tableau dès votre arrivée, avec le Base Manager.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois niveaux de décision appliqués à ce module',
    columns: ['Niveau', 'Décision de ce module', 'Qui décide'],
    rows: [
      ['Niveau 1 : vous décidez ou exécutez seul', "Ouvrir un dossier individuel ; saisir la checklist ; tenir le registre et la feuille de pointage ; rédiger la note de constat et la note orale ; vérifier l'historique disciplinaire ; préparer un projet de contrat", 'HR Officer'],
      ['Niveau 2 : avis ou validation du HR Manager', "Signature d'un contrat national (avec le Head of Mission) ; avertissement écrit ; mise en demeure ; prolongation d'un CDD ; passage d'un CDD en CDI ; congé sans solde", 'HR Manager de mission (Head of Mission pour la signature)'],
      ['Niveau 3 : remonte au siège', "Contrat d'expatriation ; licenciement d'un cadre international ; faute grave ; suspicion de fraude ou de violation PSEA", 'Head of Mission avec RH siège'],
    ],
  },

  // ─── Procédure 1 — Choisir le type de contrat ──────────────────────────
  {
    type: 'concept',
    title: 'Procédure 1 — Choisir le type de contrat adapté à chaque recrutement',
    body: [
      "Avant d'écrire une ligne de contrat, vous décidez de sa nature. Cette décision se prend sur des faits (motif, durée, financement, profil), jamais sur une préférence administrative. Une décision écrite et justifiée vous protège le jour où un contrat est contesté.",
      "Fil rouge : lundi 12 octobre 2026, trois demandes de recrutement arrivent sur votre bureau. Vous les traitez avec la même méthode.",
    ],
    bullets: [
      'Étape 1 — Qualifier le besoin avant de choisir.',
      'Étape 2 — Passer le test de recours au CDD.',
      'Étape 3 — Fixer le type, la durée et les mentions du contrat national.',
      "Étape 4 — Si le profil est international : contrôler les clauses du contrat d'expatriation.",
      "Étape 5 — Faire valider, signer et déclencher l'ouverture du dossier.",
    ],
    result: "Livrable 1 : une fiche de décision de contrat d'une page par recrutement, validée par écrit avant toute signature.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Qualifier le besoin avant de choisir le contrat',
    intro: "Le type de contrat découle de la nature du besoin, pas l'inverse. Vous avez besoin de la demande de recrutement signée par le manager (Module 02), de la fiche de poste et de la ligne budgétaire qui finance le poste.",
    steps: [
      {
        title: 'Rassemblez les quatre faits du besoin',
        actions: [
          'Ouvrez la demande de recrutement et relevez : le poste, le manager demandeur, la date de démarrage souhaitée.',
          'Relevez la source de financement et sa date de fin (ligne de budget, convention du bailleur).',
          "Vérifiez dans l'organigramme validé si le poste existe déjà (structurel) ou s'il est créé pour un besoin ponctuel.",
          'Notez le profil visé : national (droit local seul) ou international (droit croisé).',
        ],
      },
      {
        title: 'Posez trois questions au manager demandeur',
        actions: [
          '« Que se passe-t-il à la fin de ce besoin : la tâche disparaît-elle ? »',
          '« Qui fait ce travail aujourd\'hui, et que devient cette personne ? »',
          '« Ce poste existera-t-il encore dans 12 mois, quel que soit le projet ? »',
          "Notez les réponses mot pour mot, avec la date : elles justifieront votre choix.",
        ],
      },
    ],
    table: {
      columns: ['Demande du 12/10/2026', 'Fait clé relevé', 'Financement', 'Profil'],
      rows: [
        ["(a) Remplacer B. Kahambu, infirmière, en congé maternité du 26/10/2026 au 01/02/2027", "Absence temporaire, retour de la titulaire prévu", "Ligne salaire de la titulaire (690 USD/mois)", 'National'],
        ["(b) Créer un poste d'Assistant(e) Paie", "Tâche permanente : réduire la dépendance à une seule Payroll Officer. Démarrage T1 2027", "Budget RH 2027 (700 USD/mois)", 'National'],
        ["(c) Coordinateur Logistique, 12 mois, démarrage le 01/12/2026", "Poste de coordination recruté hors RDC (candidat fictif : J. Moreau)", "Budget de la mission", 'International'],
      ],
    },
    result: "Fait quand : pour chaque demande, vous avez écrit en une phrase la nature du besoin (temporaire ou permanent), le profil et la source de l'information.",
    pitfall: "Ne choisissez pas un CDD « pour tester la personne » sur un poste permanent : c'est un motif qui ne résiste pas à un contrôle. Si vous doutez de la personne, la période d'essai du CDI est faite pour cela.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Passer le test de recours au CDD',
    intro: "Un CDD n'est légal que s'il correspond à un motif réel et temporaire. Le test comporte quatre questions : une seule réponse « non » écarte le CDD.",
    steps: [
      {
        title: 'Appliquez les quatre questions',
        actions: [
          'Q1 — Le motif relève-t-il d\'un remplacement, d\'un pic d\'activité lié à une urgence ou d\'un poste lié à une durée de financement précisément datée ?',
          'Q2 — Une pièce prouve-t-elle le motif (attestation de congé, plan de l\'opération, convention de financement) ?',
          'Q3 — La fin est-elle datable (une date, ou un événement précis) ?',
          'Q4 — La tâche disparaît-elle réellement à la fin du motif, même si un autre projet pourrait la reprendre ?',
        ],
      },
      {
        title: 'Consignez le résultat et vérifiez le droit local',
        actions: [
          'Ouvrez un tableau « Decision_contrat » : une ligne par demande, une colonne par question, une colonne Conclusion, une colonne Pièce.',
          'Relevez dans le Code du travail applicable les motifs autorisés, la durée maximale et le nombre de renouvellements possibles.',
          'Si vous ne trouvez pas la réponse, demandez-la par écrit au HR Manager : ne la devinez pas.',
        ],
      },
    ],
    table: {
      columns: ['Demande', 'Q1 Motif', 'Q2 Pièce', 'Q3 Fin datée', 'Q4 Tâche disparaît', 'Conclusion'],
      rows: [
        ['(a) Remplacement B. Kahambu', 'Oui : remplacement', 'Oui : attestation de congé du 05/10', 'Oui : retour 01/02/2027', 'Oui', 'CDD de remplacement'],
        ['(b) Assistant(e) Paie', 'Non : aucun motif temporaire', '—', 'Non', 'Non : tâche permanente', 'CDI (écarter le CDD)'],
        ['(c) Coordinateur Logistique', 'Mission de 12 mois à durée limitée', 'Convention du projet', 'Oui : 30/11/2027', 'Oui', "Contrat d'expatriation (étape 4)"],
      ],
    },
    result: "Fait quand : chaque demande a une conclusion écrite appuyée sur une pièce, et la limite légale locale de durée est notée dans la fiche.",
    pitfall: "Un motif « financement bailleur » ne suffit pas à lui seul : si le poste est reconduit à chaque nouveau projet, la tâche ne disparaît pas. C'est le piège de la Procédure 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Fixer le type, la durée et les mentions du contrat national',
    intro: "Pour (a) et (b), vous partez du gabarit de contrat national validé par le siège. Vous ne le réécrivez pas : vous remplissez ses variables et vous vérifiez que rien n'y manque.",
    steps: [
      {
        title: 'Fixez la durée',
        actions: [
          'CDD : une date de début et une date de fin précises, jamais « jusqu\'à nouvel ordre ». Durée = durée du motif plus la marge de passation.',
          'CDI : pas de date de fin. Notez la période d\'essai prévue par le Code du travail et la politique RH (lisez la valeur dans le texte, ne la supposez pas).',
          "Pour un remplacement : prévoyez une clause de prolongation par avenant écrit si le retour de la titulaire est retardé.",
        ],
      },
      {
        title: 'Complétez les mentions du gabarit',
        actions: [
          'Parties : identité complète, adresse, fonction, lieu de travail (base de Goma).',
          'Dates, rémunération (référence à la grille), horaires précis (heure de prise de poste), période d\'essai, préavis, congés.',
          'CDD : écrivez le motif en toutes lettres et citez la pièce.',
          "Annexes : fiche de poste signée, code de conduite avec PSEA, règlement intérieur.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — projet de contrat (a), CDD de remplacement',
      lines: [
        'Type : CDD de remplacement. Poste : Infirmière, base de Goma.',
        'Début : 19/10/2026 (une semaine de passation). Fin : 05/02/2027 (environ trois mois et demi).',
        'Motif : « Remplacement de B. Kahambu, Infirmière, en congé maternité du 26/10/2026 au 01/02/2027 ». Pièce : attestation de congé du 05/10/2026.',
        'Rémunération : 690 USD brut par mois (grille KSS, grade Infirmière).',
        'Prolongation : avenant écrit si le retour de la titulaire est retardé par un arrêt médical.',
        'Annexes : fiche de poste, code de conduite avec PSEA, règlement intérieur.',
      ],
    },
    result: "Fait quand : le projet de contrat porte toutes les mentions, les annexes sont listées et, pour un CDD, le motif et la pièce sont écrits dans le contrat.",
    tip: "Les horaires et les règles de présence doivent figurer au contrat ou au règlement intérieur annexé : une règle que le salarié n'a jamais reçue par écrit ne peut pas lui être reprochée. Vous le verrez dans le cas des retards.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Contrôler les clauses du contrat d'expatriation",
    intro: "Pour (c), un gabarit national avec simplement le nom et le salaire changés ignore les clauses qui comptent le jour d'une urgence. Vous contrôlez chaque clause, une par une.",
    steps: [
      {
        title: "Ne partez jamais du gabarit national",
        actions: [
          "Demandez au siège (S. Lambert, Head of HR) le gabarit de contrat d'expatriation applicable.",
          'Comparez-le au gabarit national et listez ce qui diffère avant de rédiger.',
        ],
      },
      {
        title: 'Vérifiez les dix clauses spécifiques',
        actions: [
          'Droit applicable et juridiction compétente en cas de litige.',
          'Durée de la mission, conditions de renouvellement et de fin anticipée, préavis.',
          'Hardship et R&R : montants, fréquence et conditions renvoyés à la politique de rémunération (Module 04).',
          "Assurance santé et évacuation médicale internationale : assureur, plafonds, numéro d'urgence.",
          'Évacuation sécuritaire et rapatriement : qui décide, qui paie.',
          'Logement et transport fournis, et ce qui est exclu des indemnités locales.',
          'Permis de travail et visa : qui fait la démarche, pour quelle date.',
          'Couverture sociale : régime du pays d\'origine, du siège ou local.',
          'Règles de sécurité à respecter (déplacements, couvre-feu, communication).',
          'Code de conduite et PSEA annexés.',
        ],
      },
      {
        title: 'Faites valider par le siège',
        actions: [
          "Envoyez le projet à S. Lambert avec votre liste de contrôle : le droit croisé n'est pas de votre niveau.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle du projet de contrat de J. Moreau (copié du gabarit national)',
      lines: [
        '✘ Évacuation médicale internationale : absente.',
        '✘ Droit applicable : « droit congolais » uniquement, sans clause de juridiction.',
        "✘ Indemnité locale de transport : appliquée à tort, alors que KSS fournit le transport.",
        '✘ Hardship et R&R : non mentionnés.',
        '✔ Rémunération, durée (12 mois), annexes : présentes.',
        '→ Projet retourné pour réécriture à partir du gabarit siège, validation S. Lambert avant signature.',
      ],
    },
    result: "Fait quand : chacune des dix clauses est cochée « présente » ou « renvoyée à la politique », et le siège a validé le projet par écrit.",
    pitfall: "L'erreur inverse existe aussi : appliquer les clauses d'expatriation (indemnités, assurance internationale) à un employé national. Un contrat se contrôle par rapport au profil de la personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Faire valider, signer et déclencher l'ouverture du dossier",
    intro: "La décision de contrat n'est pas la vôtre seule. Elle est écrite, validée au bon niveau, signée avant le premier jour de travail, et elle déclenche l'ouverture du dossier individuel (Procédure 3).",
    steps: [
      {
        title: 'Remplissez la fiche de décision de contrat (une page)',
        actions: [
          'Demande, date, manager demandeur.',
          'Nature du besoin et pièce justificative.',
          'Type de contrat, dates, rémunération.',
          'Clauses spécifiques contrôlées (expatriation) ou mentions clés (national).',
          'Qui a validé, et quand.',
        ],
      },
      {
        title: 'Faites valider selon la délégation d\'autorité',
        actions: [
          'Contrat national : avis du HR Manager, signature du Head of Mission.',
          "Contrat d'expatriation : validation supplémentaire du siège avant signature.",
          'Joignez la fiche à votre courriel de demande de validation et archivez la réponse.',
        ],
      },
      {
        title: "Faites signer et ouvrez le dossier",
        actions: [
          'Deux originaux signés et datés ; remettez-en un à l\'employé.',
          'Le jour de la signature, ouvrez le dossier individuel et la ligne du registre (Procédure 3, étape 1).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de décision, demande (a)',
      lines: [
        'Demande du 12/10/2026 (manager : superviseur médical). Besoin : remplacement de B. Kahambu, congé maternité du 26/10/2026 au 01/02/2027.',
        'Test CDD : 4 réponses « oui ». Pièce : attestation du 05/10/2026.',
        'Décision : CDD de remplacement du 19/10/2026 au 05/02/2027, 690 USD brut/mois, avenant possible.',
        'Validation : avis A. Kavira (HR Manager) le 13/10/2026 ; signature H. Mwamba (Head of Mission) le 16/10/2026.',
        'Dossier ouvert le 16/10/2026 : matricule KSS-GOM-041, ligne ajoutée au registre.',
      ],
    },
    result: "Fait quand : la fiche est signée par le valideur, le contrat est signé avant le premier jour de travail et le dossier est ouvert. C'est votre Livrable 1.",
    tip: "Ne laissez jamais quelqu'un commencer à travailler avant la signature. Dans de nombreux codes du travail, un CDD non écrit est présumé à durée indéterminée : vérifiez le vôtre.",
  },

  // ─── Procédure 2 — Registre et requalification ─────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Tenir le registre du personnel et neutraliser le risque de requalification',
    body: [
      "Un CDD ne devient pas un CDI le jour où l'inspecteur le constate : il le devient au fil des renouvellements, et personne ne le voit si personne ne les compte. Le registre du personnel est l'outil qui les compte. Vous le tenez à jour chaque mois, en même temps que la fiche RH-Finance.",
      "Fil rouge : en ouvrant le registre, vous vous apercevez que G. Bulongo, Agent de distribution, en est à son quatrième CDD sur le même poste. Le CDD n° 4 se termine le 30/11/2026 et le chef de projet vous demande déjà « un nouveau contrat de six mois ».",
    ],
    bullets: [
      'Étape 1 — Construire le registre du personnel.',
      'Étape 2 — Calculer les alertes de fin de CDD et de renouvellements.',
      'Étape 3 — Appliquer le test de temporalité au poste en alerte.',
      'Étape 4 — Décider et formaliser par une note de recommandation.',
    ],
    result: "Livrable 2 : le registre avec alertes et la note de recommandation au HR Manager sur le CDD de G. Bulongo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Construire le registre du personnel',
    intro: "Le registre répond en quelques minutes à la première question d'un bailleur ou d'un inspecteur : « combien de personnes employez-vous, sous quel statut, depuis quand ? ». Entrées : les contrats signés, les dossiers individuels, la masse salariale du mois.",
    steps: [
      {
        title: 'Créez le classeur et ses colonnes',
        actions: [
          'Ouvrez un classeur Excel « Registre_personnel_Goma_2026 » sur le serveur RH, accès restreint à l\'équipe RH.',
          'Saisissez les colonnes : A Matricule, B Nom et poste, C Type de contrat, D Date d\'entrée, E Date de fin (CDD) ou ancienneté (CDI), F Emplacement du dossier (physique et numérique).',
          'Ajoutez une colonne de travail G « Nb de renouvellements » (CDD uniquement) : elle n\'existe pas dans la source mais vous en avez besoin pour compter.',
        ],
      },
      {
        title: 'Remplissez une ligne par employé actif',
        actions: [
          'Une ligne par matricule, tiré du contrat et non d\'une mémoire.',
          'Pour un CDD, comptez les renouvellements à partir des contrats et avenants signés du dossier.',
          'Rapprochez le nombre de lignes de la masse salariale du mois : les deux listes doivent concorder.',
        ],
      },
    ],
    table: {
      columns: ['Matricule', 'Nom et poste', 'Type', "Date d'entrée", 'Fin (CDD) / ancienneté (CDI)', 'Renouvel.', 'Dossier (physique / numérique)'],
      rows: [
        ['KSS-GOM-018', 'J.-P. Mwamba, Chauffeur logistique', 'CDI', '01/04/2024', '2 ans 6 mois', '—', 'Armoire RH-A, tiroir M / RH-Dossiers\\Actifs\\KSS-GOM-018'],
        ['KSS-GOM-031', 'G. Bulongo, Agent de distribution', 'CDD n° 4', '01/12/2024', 'Fin 30/11/2026', '3', 'Armoire RH-A, tiroir B / RH-Dossiers\\Actifs\\KSS-GOM-031'],
        ['KSS-GOM-038', 'M. Kavugho, Agent de saisie (Kobo)', 'CDD n° 1', '17/08/2026', 'Fin 16/02/2027', '0', 'Armoire RH-A, tiroir K / RH-Dossiers\\Actifs\\KSS-GOM-038'],
      ],
    },
    result: "Fait quand : chaque employé actif a une ligne et un emplacement de dossier, et le nombre de lignes égale celui de la masse salariale du mois.",
    pitfall: "Ne retapez jamais un nom : copiez-le depuis le contrat. « Mwamba J.-P. » et « J.-P. Mwamba » sont deux personnes pour Excel. La clé, c'est le matricule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Calculer les alertes de fin de CDD et de renouvellements',
    intro: "Le registre ne sert à rien s'il ne vous prévient pas. Deux alertes suffisent : un CDD qui se termine dans moins de 60 jours, et un CDD au deuxième renouvellement ou plus.",
    steps: [
      {
        title: 'Ajoutez les colonnes de calcul',
        actions: [
          'H « Jours avant fin » : jours restants jusqu\'à la date de fin, pour les CDD seulement.',
          'I « Alerte » : texte qui s\'affiche si le CDD se termine dans moins de 60 jours ou si les renouvellements sont au moins 2.',
          'Ces colonnes sont des formules : ne les saisissez pas à la main.',
        ],
      },
      {
        title: 'Filtrez et traitez',
        actions: [
          'Filtrez la colonne I sur toutes les valeurs non vides.',
          'Pour chaque alerte, ouvrez la Procédure 2, étape 3 : un CDD en alerte ne se renouvelle pas par automatisme.',
          'Programmez un rappel d\'agenda mensuel pour recalculer (ouverture du registre = premier jour ouvré du mois).',
        ],
      },
    ],
    example: {
      title: 'Formules (Excel en français, séparateur point-virgule) et lecture au 12/10/2026',
      lines: [
        'H2 : =SI(C2="CDI";"";E2-AUJOURDHUI()) (E2 contient une vraie date pour un CDD)',
        'I2 : =SI(C2="CDI";"";SI(OU(H2<=60;G2>=2);"ALERTE";""))',
        'G. Bulongo : fin 30/11/2026 → 49 jours ; 3 renouvellements → ALERTE (double).',
        'M. Kavugho : fin 16/02/2027 → 127 jours ; 0 renouvellement → pas d\'alerte.',
        'J.-P. Mwamba : CDI → aucune alerte de contrat ; son ancienneté se calcule par DATEDIF(D2;AUJOURDHUI();"y") pour les années et DATEDIF(D2;AUJOURDHUI();"ym") pour les mois.',
      ],
    },
    result: "Fait quand : toute ligne CDD affiche « ALERTE » ou reste vide, jamais une erreur, et les alertes du mois sont listées dans votre agenda.",
    tip: "Le seuil de 60 jours laisse le temps de consulter le manager, la Finance et le HR Manager avant l'échéance. À 15 jours, vous ne décidez plus : vous subissez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Appliquer le test de temporalité au poste en alerte',
    intro: "L'alerte dit qu'il faut regarder ; le test dit ce que vous voyez. Il porte sur le poste, pas sur la personne, et se fait avec le manager et la Finance.",
    steps: [
      {
        title: 'Posez cinq questions',
        actions: [
          'Le poste existait-il avant le premier contrat de cette personne ?',
          'Les tâches ont-elles changé d\'un contrat à l\'autre, ou sont-elles les mêmes ?',
          'Le financement actuel couvre-t-il au moins 12 mois à venir ?',
          'Un autre projet ou bailleur prévoit-il ce même poste en 2027 ?',
          'Le poste serait-il pourvu si la personne partait demain ?',
        ],
      },
      {
        title: 'Concluez par écrit',
        actions: [
          'Trois « oui » ou plus à « poste permanent » : le poste n\'est plus temporaire.',
          'Joignez les contrats précédents et les lignes budgétaires qui le prouvent.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — poste d\'Agent de distribution (G. Bulongo)',
      lines: [
        '1. Poste existant avant le CDD n° 1 : oui, la distribution est une activité permanente de la base.',
        '2. Tâches identiques sur les quatre contrats : oui (fiche de poste inchangée).',
        '3. Financement couvrant 12 mois : oui, la phase 3 du projet nutrition est confirmée jusqu\'au 30/11/2027.',
        '4. Même poste prévu en 2027 : oui, dans la proposition au bailleur (R. Ilunga, Finance).',
        '5. Poste pourvu si Bulongo partait : oui, un recrutement serait lancé.',
        '→ Conclusion : poste permanent financé par des projets successifs. Le motif « durée du financement » n\'est plus réel.',
      ],
    },
    result: "Fait quand : les cinq réponses sont écrites, signées du manager, et la conclusion est datée.",
    pitfall: "Ne faites pas le test avec la seule personne qui veut renouveler. Le chef de projet, par définition, veut « de la flexibilité » : la Finance et le HR Manager doivent confirmer les faits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Décider et formaliser par une note de recommandation',
    intro: "Trois options existent. Vous ne choisissez pas seul : vous recommandez, chiffrez et demandez la validation du HR Manager (niveau 2).",
    steps: [
      {
        title: 'Comparez les trois options',
        actions: [
          'A. Terminer le contrat : légitime seulement si le poste disparaît vraiment.',
          'B. Renouveler en CDD : seulement avec un motif réel documenté, une validation écrite et une vérification de la limite légale.',
          'C. Passer en CDI : la réponse si le poste est permanent.',
        ],
      },
      {
        title: 'Rédigez la note (une demi-page) et envoyez-la',
        actions: [
          'Faits : les quatre contrats avec leurs dates.',
          'Analyse : résultat du test de temporalité.',
          'Recommandation : option C, avec date d\'effet, reprise d\'ancienneté et incidence budgétaire.',
          'Décision demandée : une question oui / non, avec une échéance.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note à A. Kavira, HR Manager, le mercredi 14/10/2026',
      lines: [
        'Objet : Contrat de G. Bulongo — recommandation avant le 30/11/2026.',
        'Faits : 4 CDD consécutifs sur le même poste depuis le 01/12/2024 ; le CDD n° 4 se termine le 30/11/2026.',
        'Analyse : le poste est permanent (test du 13/10 joint) ; un 5e CDD exposerait KSS à une requalification avec ancienneté calculée depuis le 01/12/2024.',
        'Recommandation : CDI à compter du 01/12/2026, avec reprise d\'ancienneté au 01/12/2024. Coût mensuel inchangé (380 USD) ; le risque évité porte sur 24 mois d\'ancienneté.',
        'Décision demandée : « Validez-vous le passage en CDI au 01/12/2026 ? » avant le 23/10/2026, pour informer la Finance avant le cut-off de novembre.',
      ],
    },
    result: "Fait quand : la décision du HR Manager est reçue par écrit, le contrat ou l'avenant est préparé et la Finance est informée. C'est votre Livrable 2.",
    tip: "Reprenez l'ancienneté dans le nouveau contrat : c'est la règle qui s'appliquerait de toute façon en cas de requalification, et elle évite un contentieux sur la date de départ des droits.",
  },

  // ─── Procédure 3 — Dossier individuel ──────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Constituer et sécuriser le dossier individuel complet',
    body: [
      "C'est la procédure centrale de la partie administrative. Vous allez ouvrir un dossier, le compléter document par document avec checklist-dossier-individuel-personnel.xlsx, l'archiver dans un ordre fixe, le sécuriser, puis faire la revue trimestrielle avec le tableau de bord.",
      "Fil rouge : R. Safari, l'infirmière remplaçante de la Procédure 1, signe son CDD le vendredi 16 octobre 2026 pour une prise de poste le lundi 19. Vous ouvrez son dossier le jour de la signature. Le lundi 12 octobre, en ouvrant la colonne de J.-P. Mwamba dans la checklist, vous avez relevé un taux de 83 % : la revue trimestrielle de tous les dossiers démarre.",
    ],
    bullets: [
      'Étape 1 — Ouvrir le dossier le jour de la signature.',
      'Étape 2 — Ajouter le nouvel employé dans le classeur sans casser les formules.',
      'Étape 3 — Collecter les documents d\'identification et d\'embauche (lignes 6 à 9).',
      'Étape 4 — Collecter les documents de conformité et de sécurité (lignes 10 à 14).',
      'Étape 5 — Collecter les documents administratifs et ceux « selon profil » (lignes 15 à 19).',
      'Étape 6 — Saisir les statuts et lire le taux de complétude.',
      'Étape 7 — Archiver selon un ordre fixe, identique pour tous.',
      "Étape 8 — Sécuriser l'accès, physique et numérique.",
      'Étape 9 — Faire la revue trimestrielle avec le tableau de bord et relancer.',
    ],
    result: "Livrable 3 : la checklist remplie, le tableau de bord lu, un plan de relance daté, des dossiers archivés dans l'ordre et sécurisés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 9',
    title: 'Ouvrir le dossier le jour de la signature du contrat',
    intro: "Le dossier démarre le jour de la signature, pas le jour où quelqu'un en a besoin. Entrées : le contrat signé, la fiche de décision de contrat (Procédure 1), le registre du personnel.",
    steps: [
      {
        title: 'Créez le dossier physique',
        actions: [
          'Sortez une chemise vierge et une page de garde (sommaire daté, vierge à ce stade).',
          'Étiquetez : « Matricule — Nom — Type de contrat — date de début ».',
          'Glissez cinq intercalaires numérotés de 1 à 5 (ordre fixe de l\'étape 7).',
          'Rangez-le dans l\'armoire RH fermée à clé, tiroir de l\'initiale du nom.',
        ],
      },
      {
        title: 'Créez le dossier numérique et la ligne du registre',
        actions: [
          'Dans RH-Dossiers\\Actifs, créez « KSS-GOM-041_Safari_R » avec cinq sous-dossiers numérotés comme les intercalaires.',
          'Classez-y le scan du contrat signé dans « 01 ».',
          'Ajoutez la ligne de l\'employé dans le registre du personnel, avec les deux emplacements.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 16/10/2026, 15 h',
      lines: [
        'Étiquette : « KSS-GOM-041 — SAFARI R. — CDD — 19/10/2026 ».',
        'Dossier numérique : RH-Dossiers\\Actifs\\KSS-GOM-041_Safari_R\\01_Identification_Contrat (contrat signé scanné).',
        'Registre : KSS-GOM-041 | R. Safari, Infirmière | CDD n° 1 | 19/10/2026 | Fin 05/02/2027 | 0 | Armoire RH-A, tiroir S / RH-Dossiers\\Actifs\\KSS-GOM-041.',
      ],
    },
    result: "Fait quand : le dossier physique, le dossier numérique et la ligne du registre existent le jour de la signature, et le contrat original y est classé.",
    pitfall: "Ouvrir le dossier « quand on aura le temps » est la cause numéro un des dossiers incomplets : le jour de la signature, la personne est devant vous et apporte volontiers ses pièces ; trois mois plus tard, elle est sur le terrain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 9',
    title: 'Ajouter le nouvel employé au classeur sans casser les formules',
    intro: "Le classeur fourni contient six dossiers de démonstration (colonnes C à H). Les colonnes C à H de la checklist et les lignes 7 à 12 du tableau de bord sont les plages que lisent les formules de synthèse : il faut donc insérer le nouveau dossier à l'intérieur de ces plages, jamais après.",
    steps: [
      {
        title: "Onglet « Checklist Dossiers » : créez la colonne",
        actions: [
          'Enregistrez le template sous « Checklist_dossiers_Goma_2026-10.xlsx ».',
          'Faites un clic droit sur l\'en-tête de la colonne H (Sophie Berger) > Insérer : la nouvelle colonne H s\'insère avant elle, à l\'intérieur de la zone C à H.',
          'Copiez G5:G22 (colonne de Grace Okafor), collez en H5:H22 : vous récupérez les formules, la liste déroulante Oui / Non / N/A et la mise en forme.',
          'Sélectionnez H6:H19 puis Suppr : les anciens statuts disparaissent, la liste déroulante reste.',
          'En H5, saisissez le nom, puis Alt+Entrée et la fonction, Alt+Entrée et le pays : « R. Safari / Infirmière · National / RDC (Goma) ».',
        ],
      },
      {
        title: "Onglet « Tableau de bord équipe » : créez la ligne",
        actions: [
          'Faites un clic droit sur le numéro de la ligne 12 (Sophie Berger) > Insérer.',
          'Copiez A11:E11 en A12:E12, puis remplacez les noms en A12 et B12.',
          "Corrigez les deux références : C12 = 'Checklist Dossiers'!H21 et D12 = 'Checklist Dossiers'!H22 (la copie pointe vers la mauvaise ligne).",
          'Vérifiez que E12 contient la formule du statut : =SI(C12=100;"Complet";"À compléter").',
        ],
      },
    ],
    result: "Fait quand : les cellules D15 à D18 du tableau de bord prennent en compte sept employés (la formule de moyenne couvre C7:C13) et la nouvelle colonne affiche un taux calculé.",
    pitfall: "Coller la nouvelle colonne en I, après la dernière : tout semble correct, mais le tableau de bord et ses totaux ignorent le dossier. C'est la même erreur que dans la cartographie du Module 01.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 9',
    title: "Collecter les documents d'identification et d'embauche (lignes 6 à 9)",
    intro: "Les lignes de la checklist sont dans l'ordre où vous devez réclamer et vérifier les documents. Pour chacune, vous ne cochez pas « Oui » parce que le papier existe, mais parce qu'il est utilisable.",
    steps: [
      {
        title: 'Vérifiez chaque document avant de saisir « Oui »',
        actions: [
          'Ligne 6 — Contrat de travail signé (original) : signé et daté par les deux parties, annexes jointes.',
          'Ligne 7 — Pièce d\'identité ou passeport valide : en cours de validité pendant toute la durée du contrat ; nom identique à celui du contrat.',
          'Ligne 8 — CV à jour : daté, cohérent avec la candidature retenue (Module 02).',
          'Ligne 9 — Diplômes et certificats de qualification : copies certifiées conformes ; pour un poste technique (infirmière), contrôle auprès de l\'ordre professionnel ou de l\'établissement.',
        ],
      },
      {
        title: 'Notez ce qui manque, avec une date',
        actions: [
          'Pour toute pièce manquante : date de relance et personne chargée de la fournir.',
          'Remettez à l\'employé la liste des pièces à apporter dès la signature du contrat.',
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Document', 'Contrôle fait pour R. Safari', 'Saisie'],
      rows: [
        ['6', 'Contrat signé (original)', 'Signé le 16/10 par H. Mwamba et R. Safari, 2 originaux', 'Oui'],
        ['7', 'Pièce d\'identité', 'Carte d\'électeur valide jusqu\'en 2029, nom conforme', 'Oui'],
        ['8', 'CV à jour', 'CV du 01/10/2026 reçu à l\'entretien', 'Oui'],
        ['9', 'Diplômes', 'Diplôme d\'infirmière (A2) certifié conforme le 15/10', 'Oui'],
      ],
    },
    result: "Fait quand : chacune des quatre lignes porte « Oui » avec un contrôle noté, ou « Non » avec une relance datée.",
    tip: "Un diplôme non vérifié est un risque de fraude documentaire, surtout sur un poste de santé. Appliquez le contrôle du Module 02 avant la signature, pas après.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 9',
    title: 'Collecter les documents de conformité et de sécurité (lignes 10 à 14)',
    intro: "Ce sont les documents les plus souvent manquants, parce qu'ils demandent l'intervention d'un tiers (médecin, anciens employeurs) ou d'une formation (PSEA). Planifiez-les dès l'offre de contrat.",
    steps: [
      {
        title: 'Vérifiez chaque document',
        actions: [
          "Ligne 10 — Certificat médical d'aptitude : délivré par un médecin agréé, daté de moins de trois mois avant la prise de poste (règle KSS). Il conclut « apte » ou « inapte » : pas de détail médical dans le dossier.",
          'Ligne 11 — Vérification des références (au moins 2, documentée) : nom, fonction, date et contenu de chaque appel ou courriel (Module 02).',
          'Ligne 12 — Formulaire d\'urgence : nom, lien de parenté, deux numéros, signé par l\'employé, révisé chaque année.',
          'Ligne 13 — Code de conduite signé (avec PSEA) : signé après un briefing oral, daté, une copie remise à l\'employé.',
          'Ligne 14 — Fiche de poste signée : version à jour, signée par l\'employé et son manager.',
        ],
      },
      {
        title: 'Organisez le briefing PSEA',
        actions: [
          'Prévoyez 30 minutes le premier jour : lecture commentée, questions, signature.',
          'Classez l\'attestation de briefing avec le code de conduite.',
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Document', 'Situation de R. Safari au 16/10', 'Saisie'],
      rows: [
        ['10', 'Certificat médical d\'aptitude', 'Visite programmée le 21/10', 'Non'],
        ['11', 'Références (2 documentées)', 'Deux appels faits et notés le 08/10 (Module 02)', 'Oui'],
        ['12', 'Formulaire d\'urgence', 'À remplir le premier jour', 'Non'],
        ['13', 'Code de conduite et PSEA', 'Briefing prévu le 19/10 à 8 h', 'Non'],
        ['14', 'Fiche de poste signée', 'Signée le 16/10 avec le contrat', 'Oui'],
      ],
    },
    result: "Fait quand : les cinq lignes sont saisies, et chaque « Non » a une date d'échéance dans votre agenda (21/10 pour le médical).",
    pitfall: "Ne conservez jamais le résultat détaillé d'un examen médical dans le dossier. Seule la conclusion d'aptitude est classée, en section 4, à accès restreint.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 9',
    title: 'Collecter les documents administratifs et ceux « selon profil » (lignes 15 à 19)',
    intro: "Les lignes 18 et 19 portent « Selon profil » dans la colonne B : elles ne s'appliquent pas à tout le monde. Les autres lignes s'appliquent à tous.",
    steps: [
      {
        title: 'Vérifiez chaque document',
        actions: [
          'Ligne 15 — Photo d\'identité : récente, format du badge.',
          'Ligne 16 — Coordonnées bancaires (RIB) : le titulaire du compte porte le nom de l\'employé ; rapprochez avec la pièce d\'identité (anti-fraude paie).',
          'Ligne 17 — Affiliation à la sécurité sociale ou à la caisse locale : numéro d\'affiliation ou récépissé (par exemple l\'INSS en RDC).',
          'Ligne 18 — Copie visa ou permis de travail : uniquement pour le personnel expatrié, valide jusqu\'à la date de fin du contrat.',
          'Ligne 19 — Attestation de fin de période d\'essai : due à l\'issue de la période d\'essai si le contrat en prévoit une.',
        ],
      },
      {
        title: 'Appliquez la règle du N/A',
        actions: [
          'Saisissez « N/A » uniquement si le document ne s\'applique pas au profil (visa pour un national).',
          'Pour la ligne 19 pendant la période d\'essai : « N/A », avec un rappel d\'agenda à la date de fin d\'essai ; à l\'échéance, passez à « Non » puis « Oui ».',
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Document', 'Situation de R. Safari au 16/10', 'Saisie'],
      rows: [
        ['15', "Photo d'identité", 'À prendre le premier jour pour le badge', 'Non'],
        ['16', 'RIB', 'Demandé, banque en cours de confirmation', 'Non'],
        ['17', 'Affiliation sécurité sociale', 'Dossier d\'immatriculation à déposer', 'Non'],
        ['18', 'Visa / permis de travail', 'Personnel national : non applicable', 'N/A'],
        ['19', 'Attestation fin de période d\'essai', 'CDD de 3 mois et demi sans période d\'essai', 'N/A'],
      ],
    },
    result: "Fait quand : la colonne est entièrement saisie de la ligne 6 à la ligne 19, sans cellule vide.",
    pitfall: "Utiliser « N/A » pour faire monter le taux : un « N/A » sur le certificat médical ou le code de conduite masque un document manquant. Les lignes 6 à 17 ne sont jamais « N/A ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 9',
    title: 'Saisir les statuts et lire le taux de complétude',
    intro: "Les cellules C6 à H19 sont les seules à remplir. Le taux et le nombre de documents manquants se calculent seuls dans les lignes 21 et 22 : ne touchez pas aux cellules grisées.",
    steps: [
      {
        title: 'Saisissez les statuts par liste déroulante',
        actions: [
          'Cliquez sur la cellule, puis sur la flèche de la liste : choisissez Oui, Non ou N/A.',
          'N\'écrivez pas « en attente » : la liste ne l\'accepte pas. Tant que le document n\'est pas reçu, saisissez « Non ».',
        ],
      },
      {
        title: 'Lisez et vérifiez le calcul',
        actions: [
          'Ligne 21 : taux = Oui ÷ (Oui + Non) × 100, arrondi. Les « N/A » sont exclus du calcul.',
          'Ligne 22 : nombre de cellules « Non ».',
          'La mise en forme conditionnelle de la ligne 21 réagit lorsque le taux atteint 100 %.',
          'Refaites le calcul à la main pour un dossier : le résultat doit être identique.',
        ],
      },
    ],
    table: {
      columns: ['Date', 'Oui', 'Non', 'N/A', 'Taux (ligne 21)', 'Manquants (ligne 22)'],
      rows: [
        ['Ven. 16/10 (signature)', '6', '6', '2', '50 %', '6'],
        ['Lun. 19/10 (premier jour)', '10', '2', '2', '83 %', '2'],
        ['Ven. 23/10 (médical + affiliation reçus)', '12', '0', '2', '100 %', '0'],
      ],
    },
    result: "Fait quand : le taux affiché correspond à votre calcul manuel et chaque « Non » restant a une échéance. À 100 % : le dossier est complet.",
    tip: "Un taux de 83 % n'est pas « presque bon » : deux documents manquent. Sur un dossier de 12 documents applicables, chaque manquant coûte 8 points.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 9',
    title: 'Archiver selon un ordre fixe, identique pour tous les dossiers',
    intro: "Un dossier doit pouvoir être retrouvé et compris par n'importe quel membre de l'équipe RH. Appliquez l'ordre ci-dessous sans exception, y compris pour les dossiers créés dans l'urgence d'un recrutement.",
    steps: [
      {
        title: 'Classez chaque document dans son intercalaire',
        actions: [
          'Section 1 — Identification et contrat.',
          'Section 2 — Qualification et recrutement.',
          'Section 3 — Administration et paie.',
          'Section 4 — Santé et conformité.',
          'Section 5 — Suivi disciplinaire et évaluations (sous-dossier daté, en dernier).',
        ],
      },
      {
        title: 'Tenez la page de garde à jour',
        actions: [
          'À chaque ajout ou retrait : date, document, initiales.',
          'Reproduisez exactement le même ordre dans le dossier numérique (sous-dossiers 01 à 05).',
        ],
      },
    ],
    table: {
      columns: ['Section', 'Contenu (lignes de la checklist)'],
      rows: [
        ['1 — Identification et contrat', 'Contrat signé (6), pièce d\'identité (7), photo (15), formulaire d\'urgence (12), fiche de poste signée (14), avenants'],
        ['2 — Qualification et recrutement', 'CV (8), diplômes et certificats (9), vérification des références (11)'],
        ['3 — Administration et paie', 'RIB (16), affiliation sécurité sociale (17), visa ou permis (18), attestation de fin de période d\'essai (19), demandes de congé'],
        ['4 — Santé et conformité', 'Certificat médical d\'aptitude (10, sous enveloppe fermée), code de conduite et PSEA signés (13)'],
        ['5 — Suivi disciplinaire et évaluations', 'Notes orales, avertissements, mises en demeure, réponses de l\'employé ; évaluations. Sous-dossier daté'],
      ],
    },
    result: "Fait quand : les 14 lignes de la checklist ont chacune un emplacement dans l'une des cinq sections et le dossier numérique reproduit le même ordre.",
    tip: "Quand vous reprenez des dossiers existants (comme à Goma), ne les reclassez pas tous d'un coup : appliquez l'ordre au fur et à mesure de la revue trimestrielle, en commençant par les dossiers en procédure disciplinaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 9',
    title: "Sécuriser l'accès au dossier, physique et numérique",
    intro: "Un dossier individuel contient des données personnelles sensibles : médicales, bancaires, disciplinaires. La sécurité se règle à la création du dossier, pas après un incident.",
    steps: [
      {
        title: 'Sécurisez le dossier physique',
        actions: [
          'Armoire fermée à clé, dans un local fermé. Deux clés : HR Officer et HR Manager (ou Base Manager à défaut, sous enveloppe cachetée).',
          'Tenez un registre de consultation sur la porte de l\'armoire : date, nom, dossier, motif, signature.',
          'Aucun dossier ne sort du bureau RH. Les photocopies partent avec un bordereau.',
        ],
      },
      {
        title: 'Sécurisez le dossier numérique',
        actions: [
          'Dossier « RH-Dossiers » à accès nominatif (HR Officer, Assistant RH, HR Manager), jamais un lecteur partagé de la mission.',
          'Sous-dossiers 04 et 05 en accès restreint à HR Officer et HR Manager.',
          'Activez l\'historique des accès ou le journal du serveur.',
          'Interdisez l\'envoi de pièces par messagerie instantanée : utilisez le courriel RH.',
        ],
      },
    ],
    table: {
      columns: ['Profil', 'Sections 1 à 3', 'Sections 4 et 5'],
      rows: [
        ['HR Officer', 'Lecture et écriture', 'Lecture et écriture'],
        ['Assistant RH', 'Lecture et écriture', 'Aucun accès'],
        ['HR Manager de mission', 'Lecture', 'Lecture'],
        ['Payroll Officer', 'RIB et affiliation uniquement (extrait)', 'Aucun accès'],
        ['Base Manager, coordinateurs', 'Aucun accès direct : demande écrite par dossier', 'Aucun accès'],
      ],
    },
    result: "Fait quand : l'armoire est fermée, les clés sont attribuées, le registre de consultation existe et la liste d'accès numérique est écrite et appliquée.",
    pitfall: "Un dossier « RH » partagé avec tous les coordinateurs « pour faciliter les choses » expose l'organisation à une violation de confidentialité dès le premier document médical ou disciplinaire qui y est déposé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 9',
    title: 'Faire la revue trimestrielle avec le tableau de bord et relancer',
    intro: "Une fois par trimestre au minimum, vous ouvrez l'onglet « Tableau de bord équipe ». Ce n'est pas une formalité : c'est la seule protection contre la découverte d'un document manquant le jour d'un litige ou d'un audit.",
    steps: [
      {
        title: "Lisez le tableau de bord",
        actions: [
          'Onglet « Tableau de bord équipe », lignes 7 à 12 : taux de complétude, documents manquants et statut (« Complet » ou « À compléter ») par employé.',
          'Synthèse en lignes 15 à 18 : taux moyen d\'équipe, dossiers complets, dossiers à compléter, total de documents manquants.',
          'Ne modifiez aucune formule : tout se met à jour depuis l\'onglet Checklist Dossiers.',
        ],
      },
      {
        title: 'Construisez le plan de relance',
        actions: [
          'Un tableau : employé, document manquant, action, responsable, échéance.',
          'Priorisez les dossiers de personnes en procédure disciplinaire ou dont le contrat se termine.',
          'Envoyez le plan au HR Manager et refaites la revue 30 jours plus tard.',
        ],
      },
    ],
    table: {
      columns: ['Employé', 'Document manquant', 'Action', 'Responsable', 'Échéance'],
      rows: [
        ['Jean-Pierre Mwamba (83 %)', "Certificat médical d'aptitude", 'Visite médicale à planifier avec le médecin agréé', 'N. Mbusa', '16/10/2026'],
        ['Jean-Pierre Mwamba', 'Vérification des références (2)', 'Appeler les deux anciens employeurs et documenter', 'N. Mbusa', '20/10/2026'],
        ['Nyandeng Deng (92 %)', 'Diplômes (copies certifiées)', 'Demander les copies certifiées', 'HR Officer de la base', '30/10/2026'],
        ['Marc Lefevre (92 %)', 'Affiliation sécurité sociale', 'Déposer le dossier d\'immatriculation', 'HR Officer de la base', '30/10/2026'],
        ['Grace Okafor (92 %)', 'Code de conduite signé (PSEA)', 'Briefing PSEA puis signature', 'HR Officer de la base', '23/10/2026'],
        ['Sophie Berger (92 %)', "Formulaire d'urgence", 'Faire remplir et signer', 'HR Officer de la base', '23/10/2026'],
      ],
    },
    example: {
      title: 'Valeurs du tableau de bord fourni (six dossiers de démonstration)',
      lines: [
        'Mwamba 83 % (2 manquants), Abakar 100 % (0), Deng 92 % (1), Lefevre 92 % (1), Okafor 92 % (1), Berger 92 % (1).',
        'Synthèse : taux moyen 92 % ; 1 dossier complet ; 5 dossiers à compléter ; 6 documents manquants au total.',
      ],
    },
    result: "Fait quand : chaque document manquant a une action, un responsable et une échéance, et le plan est envoyé au HR Manager. C'est votre Livrable 3.",
    tip: "Après chaque relance, mettez à jour la checklist le jour même : le tableau de bord n'est fiable que si la saisie suit les faits.",
  },

  // ─── Procédure 4 — Présences, congés, absences ─────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Tenir le suivi des présences, des congés et des absences',
    body: [
      "Aucune procédure disciplinaire ne tient sans faits datés. Les faits d'une procédure viennent presque toujours de la même source : la feuille de pointage. La même source alimente les soldes de congés et la fiche RH-Finance de fin de mois. Vous la tenez donc comme un document de preuve.",
      "Fil rouge : c'est avec la feuille de pointage du Superviseur Logistique que vous reconstituerez, dans cette procédure, les huit retards de J.-P. Mwamba, et avec le suivi des congés que vous vérifierez qu'aucune de ses absences n'est justifiée par un congé.",
    ],
    bullets: [
      'Étape 1 — Mettre en place la feuille de pointage quotidienne.',
      'Étape 2 — Enregistrer retards et absences, et exiger la justification.',
      'Étape 3 — Tenir les soldes de congés.',
      'Étape 4 — Détecter les seuils d\'alerte et transmettre à la Finance et au disciplinaire.',
    ],
    result: "Livrable 4 : le tableau des retards reconstitué, les soldes de congés à jour et la section « congés » de la fiche RH-Finance du mois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Mettre en place la feuille de pointage quotidienne',
    intro: "La feuille de pointage n'est utile comme preuve que si elle est remplie le jour même, par la bonne personne, et collectée. Vous définissez qui, quand et où.",
    steps: [
      {
        title: 'Fixez le format et les responsabilités',
        actions: [
          'Colonnes : date, matricule, nom, heure d\'arrivée, heure de départ, signature de l\'employé, visa du superviseur.',
          'Une feuille par équipe. Le superviseur direct (ou le gardien à l\'entrée de la base) note l\'heure réelle d\'arrivée au moment de l\'arrivée.',
          'Interdisez toute correction au stylo effaceur : une rature se barre, se paraphe et se date.',
        ],
      },
      {
        title: 'Organisez la collecte',
        actions: [
          'L\'Assistant RH (P. Sifa) collecte les feuilles chaque soir ou chaque lundi matin, et les scanne.',
          'Classez les originaux par mois ; les scans dans RH-Pointage\\2026-10.',
          'Rapprochez, chaque semaine, la feuille du carnet de la sentinelle de l\'entrée.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de la feuille de pointage Logistique, mardi 06/10/2026',
      lines: [
        'Horaire contractuel de prise de poste sur jour de convoi : 05 h 30 (contrat, article « Horaires », et règlement intérieur annexé).',
        'KSS-GOM-018 | J.-P. Mwamba | arrivée 06 h 15 | visa superviseur L. Katembo | signature employé : oui.',
        'KSS-GOM-022 | autre chauffeur | arrivée 05 h 25 | visa : oui.',
      ],
    },
    result: "Fait quand : la feuille est remplie à l'heure réelle, signée et collectée chaque semaine, et les originaux sont classés par mois.",
    pitfall: "Une feuille remplie en fin de semaine « de mémoire » n'a plus de valeur de preuve et se retourne contre l'organisation devant l'inspection du travail.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Enregistrer les retards et les absences, et exiger la justification',
    intro: "Un retard ou une absence n'est un fait disciplinaire qu'après que l'employé a eu la possibilité de le justifier. Vous distinguez donc l'écart constaté (la feuille) de l'écart injustifié (après justification).",
    steps: [
      {
        title: 'Enregistrez chaque écart dans le suivi',
        actions: [
          'Ouvrez le suivi mensuel des absences et retards (un onglet par mois).',
          'Colonnes : date, matricule, nom, type (retard, absence, congé, maladie), durée, source, justificatif reçu, statut (justifié, injustifié, à justifier).',
          'Saisissez l\'écart le jour même de sa constatation, avec la source (feuille de pointage n° et ligne).',
        ],
      },
      {
        title: 'Demandez la justification dans un délai fixé',
        actions: [
          'Absence : justificatif (certificat médical, attestation) sous 48 heures après le retour.',
          'Retard : demandez l\'explication verbalement le jour même et notez-la.',
          'Classez le justificatif en section 3 du dossier, et passez le statut à « justifié » ou « injustifié ».',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — retards de J.-P. Mwamba reconstitués à partir des feuilles de pointage (convoi : 05 h 30)',
      lines: [
        'Mar. 01/09 : arrivée 06 h 00 (+30 min). Jeu. 10/09 : 06 h 15 (+45 min). Mar. 15/09 : 06 h 00 (+30 min).',
        'Jeu. 24/09 : 06 h 00 (+30 min). Mar. 29/09 : 06 h 15 (+45 min). Jeu. 01/10 : 06 h 00 (+30 min).',
        'Mar. 06/10 : 06 h 15 (+45 min). Jeu. 08/10 : 06 h 00 (+30 min).',
        'Total : 8 retards en 6 semaines, soit 285 minutes (4 h 45) ; chaque retard noté par L. Katembo et recoupé avec le carnet de la sentinelle.',
        'Justificatifs reçus : aucun. Statut : injustifié (8).',
      ],
    },
    result: "Fait quand : chaque écart du mois est dans le suivi avec sa source, son justificatif ou son statut « injustifié ».",
    tip: "Cumulez les minutes : « 285 minutes en 6 semaines » est plus parlant et plus solide que « souvent en retard ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Tenir les soldes de congés',
    intro: "Les congés sont gérés par la ligne administrative (le Base Manager valide) et exécutés par la RH (vous). Un congé sans demande écrite validée n'existe pas : c'est ce qui permet de distinguer une absence injustifiée d'un congé.",
    steps: [
      {
        title: 'Créez la fiche de solde de chaque employé',
        actions: [
          'Colonnes : matricule, nom, droits annuels, acquis à ce jour, pris, solde.',
          'Calculez l\'acquis selon la politique RH et le Code du travail (dans l\'exemple KSS : 1,5 jour ouvrable par mois de service).',
          'Mettez à jour le solde à chaque congé pris.',
        ],
      },
      {
        title: 'Traitez chaque demande de congé',
        actions: [
          'Exigez une demande écrite, visée par le Base Manager.',
          'Vérifiez le solde avant l\'accord ; saisissez-le dès la validation.',
          'Classez la demande en section 3 du dossier ; informez la Payroll Officer si le congé est sans solde.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — solde de J.-P. Mwamba au 12/10/2026',
      lines: [
        'Acquis 2026 : 9 mois × 1,5 = 13,5 jours ouvrables (janvier à septembre).',
        'Pris : 6 jours (du 02/03 au 09/03/2026, demande du 20/02 visée E. Kasongo).',
        'Solde : 13,5 − 6 = 7,5 jours.',
        'Aucun congé enregistré entre le 01/09 et le 08/10 : les 8 retards ne sont couverts par aucune autorisation.',
      ],
    },
    result: "Fait quand : chaque employé a un solde à jour et aucune absence n'est justifiée par un congé sans demande écrite.",
    pitfall: "Un congé « accordé à l'oreille » par un superviseur est la source d'absences injustifiées qui n'en sont pas : exigez toujours la demande écrite visée avant le départ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: "Détecter les seuils d'alerte et transmettre à la Finance et au disciplinaire",
    intro: "Le suivi n'est utile que s'il déclenche des actions : une alerte pour le disciplinaire, une information pour la Finance. Vous fixez les seuils à l'avance, avec le HR Manager.",
    steps: [
      {
        title: 'Définissez les seuils d\'alerte',
        actions: [
          'Retards : trois retards sur un mois ou deux sur une semaine → note de constat (Procédure 5).',
          'Absence injustifiée : dès le premier jour non justifié sous 48 heures.',
          'Absence de plus de 5 jours consécutifs sans nouvelle : escalade immédiate au HR Manager.',
        ],
      },
      {
        title: 'Transmettez chaque mois',
        actions: [
          'Reportez les congés sans solde et absences injustifiées dans la section 5 de la fiche RH-Finance, avant le 20.',
          'Appliquez une retenue sur salaire seulement si le Code du travail et le règlement intérieur la prévoient, et jamais sans base écrite.',
          'Archivez la fiche signée avec le suivi du mois.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lecture du suivi pour J.-P. Mwamba',
      lines: [
        'Septembre : 5 retards (seuil de 3 atteint le 15/09). Octobre au 12 : 3 retards (01, 06 et 08/10).',
        'Aucune alerte n\'avait été transmise : le suivi n\'existait qu\'à l\'oral. À partir du 13/10, l\'alerte « 3 retards en un mois » passe par la note de constat.',
        'Fiche RH-Finance du mois : aucune retenue (aucune base écrite) ; mention « retards, procédure en cours » dans le dossier uniquement.',
      ],
    },
    result: "Fait quand : les seuils sont validés par le HR Manager, appliqués chaque semaine, et la fiche RH-Finance du mois reflète les absences réelles. C'est votre Livrable 4.",
    tip: "Évitez de décider une retenue sur salaire avant d'avoir tranché la procédure disciplinaire : mélanger les deux crée une double sanction contestable.",
  },

  // ─── Procédure 5 — Décider de l'étape disciplinaire ────────────────────
  {
    type: 'concept',
    title: "Procédure 5 — Décider de l'étape disciplinaire à appliquer",
    body: [
      "Quand un manager vous demande une sanction, votre premier travail n'est pas de rédiger : c'est de décider quelle étape de la séquence vous avez légalement le droit d'appliquer maintenant. Cette décision repose sur trois choses : des faits prouvés, un historique vérifié dans le dossier, et un niveau de validation respecté.",
      "Fil rouge : le lundi 12 octobre 2026, à 9 h 10, L. Katembo entre dans votre bureau : « Il faut le licencier maintenant. On n'a pas le temps de faire tout un processus. Je lui ai déjà dit oralement plusieurs fois. » Vous avez cinq jours ouvrables à compter du dernier fait constaté (jeudi 08/10) : l'échéance est le jeudi 15/10.",
    ],
    bullets: [
      'Étape 1 — Documenter le fait dès sa constatation.',
      'Étape 2 — Reconstituer les faits à partir de preuves.',
      "Étape 3 — Vérifier l'historique disciplinaire et situer l'étape.",
      "Étape 4 — Choisir l'étape, le niveau de validation et l'échéance, puis répondre au superviseur.",
    ],
    result: "Livrable 5 : la note de constat, le tableau des faits, la décision d'étape écrite et le message au superviseur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Documenter le fait dès sa constatation',
    intro: "Notez le fait par écrit immédiatement : date, heure, description factuelle, personnes présentes. Vous ne vous fiez jamais à votre mémoire ou à celle du superviseur pour reconstituer les faits des semaines plus tard.",
    steps: [
      {
        title: 'Demandez au superviseur son propre écrit',
        actions: [
          'Demandez-lui un courriel daté qui liste les faits qu\'il a lui-même constatés, avec les heures.',
          'Interdisez les adjectifs (« toujours », « exprès ») : des dates et des heures suffisent.',
        ],
      },
      {
        title: 'Rédigez votre note de constat',
        actions: [
          'Ouvrez un document « Note_constat_KSS-GOM-018_2026-10-12 ».',
          'Champs : date et heure de rédaction ; rédacteur ; personne concernée (matricule) ; fait signalé (par qui, quand) ; règle concernée ; sources à vérifier ; suite prévue.',
          'Signez-la et classez-la en section 5 du dossier le jour même.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note de constat du lundi 12/10/2026, 11 h 05',
      lines: [
        'Rédacteur : N. Mbusa, HR Officer. Concerné : J.-P. Mwamba, Chauffeur logistique, KSS-GOM-018.',
        'Fait signalé à 9 h 10 par L. Katembo, Superviseur Logistique : arrivées tardives répétées à la prise de poste de 05 h 30 les jours de convoi, depuis le 01/09/2026.',
        'Dossier consulté à 9 h 45 : aucun avertissement écrit ni note orale datée. Une mention orale du superviseur, non datée, jamais formalisée.',
        'Sources à vérifier : feuilles de pointage du 01/09 au 08/10, carnet de la sentinelle, journal des départs de convoi.',
        'Suite : tableau des faits à produire avant le 13/10 à midi ; décision d\'étape à valider avec A. Kavira.',
      ],
    },
    result: "Fait quand : la note est signée, datée et classée en section 5, et le superviseur a confirmé ses faits par écrit.",
    pitfall: "Ne rédigez jamais une note « à la place » du superviseur en lui prêtant des mots : vous consignez ce qu'il dit et ce que vous constatez, en les distinguant clairement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Reconstituer les faits à partir de preuves',
    intro: "Un fait disciplinaire est une date, une heure, un lieu, une règle et une source. Vous recoupez au moins deux sources indépendantes avant d'écrire un seul chiffre dans un document officiel.",
    steps: [
      {
        title: 'Rassemblez les sources',
        actions: [
          'Feuilles de pointage de la période (scans de la Procédure 4).',
          'Carnet de la sentinelle de l\'entrée et journal des départs de convoi.',
          'Contrat et règlement intérieur : article « Horaires », avec la preuve que l\'employé les a reçus.',
        ],
      },
      {
        title: 'Construisez le tableau des faits',
        actions: [
          'Une ligne par retard : date, heure attendue, heure réelle, écart, sources recoupées.',
          'Vérifiez qu\'aucun changement d\'horaire ou de rotation n\'a été communiqué oralement par l\'employeur sur la période.',
          'Écartez toute date qui ne figure que dans une seule source.',
        ],
      },
    ],
    table: {
      columns: ['Date', 'Attendue', 'Réelle', 'Écart', 'Sources recoupées'],
      rows: [
        ['Mar. 01/09/2026', '05 h 30', '06 h 00', '30 min', 'Pointage + carnet sentinelle'],
        ['Jeu. 10/09/2026', '05 h 30', '06 h 15', '45 min', 'Pointage + carnet sentinelle'],
        ['Mar. 15/09/2026', '05 h 30', '06 h 00', '30 min', 'Pointage + carnet sentinelle'],
        ['Jeu. 24/09/2026', '05 h 30', '06 h 00', '30 min', 'Pointage + carnet sentinelle'],
        ['Mar. 29/09/2026', '05 h 30', '06 h 15', '45 min', 'Pointage + carnet sentinelle'],
        ['Jeu. 01/10/2026', '05 h 30', '06 h 00', '30 min', 'Pointage + carnet sentinelle'],
        ['Mar. 06/10/2026', '05 h 30', '06 h 15', '45 min', 'Pointage + carnet sentinelle'],
        ['Jeu. 08/10/2026', '05 h 30', '06 h 00', '30 min', 'Pointage + carnet sentinelle'],
      ],
    },
    result: "Fait quand : chaque ligne est recoupée par deux sources, le total est calculé (8 retards, 285 minutes) et l'horaire de 05 h 30 est prouvé par le contrat et le règlement intérieur.",
    tip: "Écoutez aussi l'employeur sur sa part : si le planning de convoi a changé sans consigne écrite, la règle n'est plus claire et la sanction devient fragile. Vérifiez avant de vous engager.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: "Vérifier l'historique disciplinaire et situer l'étape",
    intro: "Cette vérification, systématiquement sautée sous pression, détermine légalement l'étape que vous avez le droit d'appliquer maintenant. Vous consultez la section 5 du dossier individuel et vous triez ce qui compte comme étape de ce qui n'en est pas une.",
    steps: [
      {
        title: 'Ouvrez le dossier et listez les pièces',
        actions: [
          'Ouvrez sa colonne dans la checklist : taux 83 %, deux documents manquants (certificat médical, références) à régulariser avant l\'entretien de remise.',
          'Section 5 du dossier : toute note orale documentée, tout avertissement écrit, toute mise en demeure, toute réponse de l\'employé.',
          'Notez pour chaque pièce : date, type, signature de l\'employé ou contresignature du témoin.',
        ],
      },
      {
        title: 'Triez ce qui compte comme étape',
        actions: [
          'Compte : une note orale datée et classée ; un avertissement écrit remis et signé (ou contresigné) ; une mise en demeure remise et signée.',
          'Ne compte pas : une mention orale non datée, un souvenir, un message non archivé, des feuilles de pointage (ce sont des preuves de faits, pas d\'étapes).',
          'Vérifiez enfin que le fait n\'est pas une faute grave : des retards répétés n\'en sont pas une.',
        ],
      },
    ],
    table: {
      columns: ['Pièce trouvée au dossier', 'Compte comme étape ?', 'Pourquoi'],
      rows: [
        ['Mention orale du superviseur, non datée', 'Non', 'Aucune date, aucun témoin, jamais formalisée : invérifiable'],
        ['Note orale documentée (étape 1)', 'Absente', 'Elle ne peut pas être créée rétroactivement : on n\'antidate jamais une note'],
        ['Avertissement écrit (étape 2)', 'Absent', 'Aucun document remis à l\'employé'],
        ['Mise en demeure (étape 3)', 'Absente', 'Sans objet'],
        ['Feuilles de pointage du 01/09 au 08/10', 'Non (preuves de faits)', 'Elles établissent les retards, pas les étapes de la procédure'],
      ],
    },
    result: "Fait quand : vous pouvez écrire en une phrase : « Aucune étape de la séquence n'est documentée au dossier de J.-P. Mwamba ; l'étape réellement applicable est l'avertissement écrit. »",
    pitfall: "Antidater une note orale « pour combler le trou » : c'est un faux, qui détruit la crédibilité de tout le dossier et expose la personne qui l'a rédigé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: "Choisir l'étape, le niveau de validation et l'échéance, puis répondre au superviseur",
    intro: "Vous appliquez maintenant l'étape applicable, avec le bon document, le bon délai et le bon valideur. Puis vous répondez au superviseur, par écrit, avant qu'il n'agisse de son propre chef.",
    steps: [
      {
        title: 'Appliquez la règle de choix',
        actions: [
          'Aucune étape documentée et faits répétés → avertissement écrit.',
          'Fait isolé et mineur, sans historique → avertissement oral documenté.',
          'Avertissement écrit signé et récidive → mise en demeure.',
          'Avertissement et mise en demeure signés et récidive → licenciement, avec dossier complet.',
          'Faute grave → logique distincte (Procédure 8, étape 4), niveau 3.',
        ],
      },
      {
        title: 'Fixez la validation et l\'échéance',
        actions: [
          'Avertissement écrit : validation du HR Manager (niveau 2), Base Manager consulté, Head of Mission informé.',
          'Remise sous 5 jours ouvrables après le dernier fait constaté : comptez en jours ouvrables du lundi au vendredi.',
          'Mettez l\'échéance dans votre agenda avec un rappel à J-2.',
        ],
      },
      {
        title: 'Répondez au superviseur',
        actions: [
          'Dites-le de vive voix puis confirmez par courriel, en une phrase de justification.',
          'Proposez une mesure opérationnelle immédiate pour les convois.',
          'Demandez-lui de noter chaque nouveau retard le jour même, avec l\'heure.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — décision du mardi 13/10/2026 et message à L. Katembo',
      lines: [
        'Étape applicable : avertissement écrit. Dernier fait constaté : jeudi 08/10 → échéance de remise : jeudi 15/10/2026 (vendredi 09, lundi 12, mardi 13, mercredi 14, jeudi 15).',
        'Validation : A. Kavira (HR Manager), par courriel, mardi 13/10 à 17 h 20. Base Manager E. Kasongo consulté à 14 h.',
        'Message au superviseur : « L., un licenciement aujourd\'hui nous exposerait à un contentieux perdu d\'avance : le dossier ne contient aucun avertissement écrit daté, et l\'étape qui nous protège est l\'avertissement écrit remis mercredi 14. »',
        'Mesure opérationnelle : le second chauffeur est positionné en relève sur les convois des 15 et 20/10.',
      ],
    },
    result: "Fait quand : la décision d'étape est écrite, validée, l'échéance est dans l'agenda et le superviseur a reçu sa réponse écrite. C'est votre Livrable 5.",
    tip: "Une phrase au superviseur suffit : le but n'est pas de lui donner un cours de droit, mais de le faire adhérer à la seule voie qui lui donne, à terme, ce qu'il veut.",
  },

  // ─── Procédure 6 — Avertissement oral documenté ────────────────────────
  {
    type: 'concept',
    title: 'Procédure 6 — Conduire un avertissement oral documenté',
    body: [
      "C'est la première étape de la séquence, et la plus mal faite : un rappel à l'ordre oral que personne n'écrit n'existe pas. L'avertissement oral documenté reste oral dans sa forme, mais il est noté au dossier le jour même. Vous l'utilisez pour un fait isolé et mineur, quand le dossier ne contient aucune étape antérieure.",
      "Fil rouge : mardi 13 octobre 2026, le Magasinier T. Lwanzo a quitté son poste de 8 h 00 à 10 h 30 pendant la réception d'un camion de médicaments, sans autorisation. C'est un premier fait, sans antécédent : l'étape 1 s'applique.",
    ],
    bullets: [
      "Étape 1 — Mener le rappel à l'ordre oral.",
      'Étape 2 — Rédiger la note interne le jour même.',
      'Étape 3 — Classer et suivre.',
    ],
    result: "Livrable 6 : une note d'avertissement oral documenté, classée en section 5 le jour même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: 'Mener le rappel à l\'ordre oral',
    intro: "Le rappel est court, privé et factuel. Il a pour but que l'employé comprenne le fait, la règle et ce qui est attendu. Il ne constitue pas une sanction.",
    steps: [
      {
        title: 'Préparez l\'entretien',
        actions: [
          'Lieu : un bureau fermé, jamais devant l\'équipe. Durée : 10 minutes.',
          'Présents : le manager direct (ou le Base Manager) et vous, comme témoin.',
          'Préparez les quatre temps sur une demi-page.',
        ],
      },
      {
        title: 'Suivez les quatre temps',
        actions: [
          '1. Le fait : « Le mardi 13/10, entre 8 h 00 et 10 h 30, vous n\'étiez pas à votre poste. »',
          '2. La règle : « Le magasinier doit être présent à toute réception de marchandise (règlement intérieur, article de présence). »',
          '3. L\'attente : « À partir de maintenant, vous prévenez le Base Manager avant tout départ du poste. »',
          '4. La conséquence : « Si cela se reproduit, un avertissement écrit sera remis. »',
          'Écoutez sa version et notez-la : ne l\'interrompez pas.',
        ],
      },
    ],
    result: "Fait quand : les quatre temps ont été dits, la version de l'employé a été entendue et notée, et l'entretien s'est terminé par une date de point de contrôle.",
    pitfall: "Ne menacez pas (« la prochaine fois, vous êtes dehors ») : seule la conséquence prévue par la séquence est annoncée. Une menace non fondée se retourne contre vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 3',
    title: 'Rédiger la note interne le jour même',
    intro: "La note existe pour que le fait et le rappel soient prouvables. Elle est rédigée le jour même, jamais le lendemain, et jamais antidatée.",
    steps: [
      {
        title: 'Remplissez la note',
        actions: [
          'Champs : date et heure de l\'entretien ; rédacteur ; présents ; employé (matricule, poste) ; fait ; règle ; propos tenus ; version de l\'employé ; attente ; suite prévue.',
          'Faites signer la note par le rédacteur et par le manager présent.',
          'Remettez une copie à l\'employé, en l\'invitant à signer pour accusé de réception : sa signature atteste la réception, pas l\'accord.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note du mardi 13/10/2026, 15 h 30',
      lines: [
        'Employé : T. Lwanzo, Magasinier, base de Goma. Présents : E. Kasongo (Base Manager), N. Mbusa (HR Officer).',
        'Fait : absence du poste le 13/10/2026 de 8 h 00 à 10 h 30, pendant la réception d\'un camion de médicaments, sans autorisation.',
        'Règle : présence obligatoire du magasinier à toute réception de marchandise (règlement intérieur).',
        'Version de l\'employé : « J\'étais au marché pour un problème familial urgent, j\'ai oublié de prévenir. »',
        'Attente : prévenir le Base Manager avant tout départ du poste. Suite : écrit si récidive. Point de contrôle : 13/11/2026.',
        'Signatures : rédactrice N. Mbusa, manager E. Kasongo ; l\'employé signe pour réception.',
      ],
    },
    result: "Fait quand : la note est datée du jour, signée par le rédacteur et le manager, et l'employé en a reçu une copie.",
    tip: "Écrivez la version de l'employé avec ses mots. Si elle est ensuite contredite par les faits, c'est une preuve de plus ; si elle est fondée, vous évitez une sanction injuste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 3',
    title: 'Classer la note et organiser le suivi',
    intro: "Une note non classée n'existe pas. Vous la classez avant la fin de la journée, puis vous organisez le suivi pour savoir si le rappel a fonctionné.",
    steps: [
      {
        title: 'Classez et informez',
        actions: [
          'Section 5 du dossier : note signée en papier ; scan dans le sous-dossier 05.',
          'Inscrivez la date dans la page de garde du dossier.',
          'Informez le HR Manager par courriel de deux lignes (information, pas validation).',
        ],
      },
      {
        title: 'Programmez le suivi',
        actions: [
          'Créez un rappel d\'agenda à 30 jours.',
          'Au rappel : vérifiez les faits du mois ; si aucun fait nouveau, notez « point de contrôle : RAS » au dossier.',
          'Si récidive : passez à l\'étape suivante (Procédure 7), l\'étape 1 étant désormais documentée.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — classement du 13/10/2026',
      lines: [
        'Papier : dossier KSS-GOM-024, intercalaire 5, note du 13/10 en tête (date la plus récente en premier).',
        'Numérique : 05_Suivi_disciplinaire_evaluations\\2026-10-13_Note_orale.pdf.',
        'Page de garde : « 13/10/2026 — Note orale (absence du poste), classée — NM ».',
        'Courriel à A. Kavira : « Information : rappel à l\'ordre oral documenté, T. Lwanzo, 13/10. Aucune action demandée. »',
      ],
    },
    result: "Fait quand : la note est classée en papier et en numérique, la page de garde est à jour, le HR Manager est informé et le rappel à 30 jours est programmé. C'est votre Livrable 6.",
    tip: "Cette note devient la pierre angulaire de la procédure suivante : en cas de récidive, vous pouvez écrire dans l'avertissement écrit « avertissement oral documenté du 13/10/2026 », avec la date et le motif.",
  },

  // ─── Procédure 7 — Avertissement écrit ─────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 7 — Rédiger et remettre l'avertissement écrit avec le gabarit",
    body: [
      "L'avertissement écrit est le premier document formel de la séquence. Il se rédige avec gabarit-procedure-disciplinaire-avertissement.docx, dont les sept sections structurent l'identification de l'employé, les faits, les avertissements antérieurs, l'étape appliquée, le droit de réponse, la décision et les signatures. Un document par étape, classé dans le dossier individuel.",
      "Fil rouge : vous rédigez l'avertissement écrit de J.-P. Mwamba le mardi 13 octobre, après validation par le HR Manager, et vous le remettez en entretien le mercredi 14 octobre à 10 h.",
    ],
    bullets: [
      "Étape 1 — Section 1 : identifier l'employé.",
      'Étape 2 — Section 2 : décrire les faits et la règle enfreinte.',
      'Étape 3 — Section 3 : référencer les avertissements antérieurs, ou écrire explicitement qu\'il n\'y en a pas.',
      'Étape 4 — Section 4 : cocher l\'étape appliquée et justifier.',
      'Étape 5 — Sections 5 et 6 : droit de réponse et décision, puis validation.',
      'Étape 6 — Remettre en entretien et recueillir les signatures (section 7).',
      "Étape 7 — Recueillir la réponse, classer et mettre à jour le dossier.",
    ],
    result: "Livrable 7 : l'avertissement écrit complet (une page), signé, avec la réponse de l'employé, classé, et le dossier du chauffeur mis à jour.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 7',
    title: "Section 1 — Identifier l'employé",
    intro: "La section 1 se remplit à partir du contrat et du registre, jamais de mémoire : une erreur d'identité ou de date d'embauche fragilise tout le document.",
    steps: [
      {
        title: 'Préparez le document',
        actions: [
          'Ouvrez gabarit-procedure-disciplinaire-avertissement.docx et enregistrez-le sous « Avertissement-ecrit_KSS-GOM-018_2026-10-13.docx ».',
          'Ne modifiez jamais la structure du gabarit : les sept sections sont les mêmes pour tous les employés.',
        ],
      },
      {
        title: 'Remplissez les six champs de la section 1',
        actions: [
          'Nom et prénom de l\'employé ; Fonction.',
          'Département / Base ; Superviseur direct.',
          'Date d\'embauche ; Type de contrat (CDD / CDI / Expatriation).',
          'Vérifiez chaque champ dans le registre du personnel.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1 remplie',
      lines: [
        'Nom et prénom : MWAMBA Jean-Pierre (matricule KSS-GOM-018). Fonction : Chauffeur logistique.',
        'Département / Base : Logistique, base de Goma. Superviseur direct : L. Katembo, Superviseur Logistique.',
        'Date d\'embauche : 01/04/2024. Type de contrat : CDI.',
      ],
    },
    result: "Fait quand : les six champs sont remplis et chacun a été vérifié dans le registre du personnel.",
    pitfall: "Corriger le type de contrat « de mémoire » : un CDD requalifié, un CDI, un expatrié n'ont pas le même régime de sanction. Lisez le contrat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 7',
    title: 'Section 2 — Décrire les faits et la règle enfreinte',
    intro: "Deux cadres : « Description factuelle des faits (date, heure, lieu, personnes présentes) » et « Règle, consigne ou obligation contractuelle enfreinte ». Vous recopiez le tableau des faits de la Procédure 5, sans commentaire.",
    steps: [
      {
        title: 'Rédigez la description factuelle',
        actions: [
          'Une phrase de synthèse : période, nombre de faits, écart.',
          'La liste des dates et heures, recoupées par deux sources.',
          'Le lieu, les personnes présentes ou qui ont constaté, l\'absence de justificatif.',
          'Aucun adjectif, aucun jugement sur la personne.',
        ],
      },
      {
        title: 'Citez la règle enfreinte',
        actions: [
          'L\'article du contrat qui fixe l\'horaire, avec sa formulation.',
          'L\'article du règlement intérieur sur la ponctualité, et la preuve de sa remise à l\'employé.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 2 remplie',
      lines: [
        'Faits : du 01/09 au 08/10/2026, M. Mwamba est arrivé en retard à sa prise de poste de 05 h 30 sur 8 rotations de convoi, de 30 à 45 minutes (285 minutes au total).',
        'Dates et heures d\'arrivée : 01/09 (06 h 00), 10/09 (06 h 15), 15/09 (06 h 00), 24/09 (06 h 00), 29/09 (06 h 15), 01/10 (06 h 00), 06/10 (06 h 15), 08/10 (06 h 00).',
        'Lieu : entrée logistique de la base de Goma. Constaté par L. Katembo sur les feuilles de pointage et recoupé avec le carnet de la sentinelle. Aucun justificatif fourni.',
        'Règle : article « Horaires » du contrat (prise de poste à 05 h 30 les jours de convoi) et article « Ponctualité » du règlement intérieur, annexé au contrat et reçu le 01/04/2024. (Numéros d\'articles fictifs : reprenez les vôtres.)',
      ],
    },
    result: "Fait quand : chaque date de la section 2 figure dans le tableau des faits et a deux sources ; la règle est citée avec l'article et la preuve de sa remise.",
    tip: "Si l'employé conteste une date, vous devez pouvoir la défendre en deux phrases. Une date qui n'a qu'une source ne va pas dans le document.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 7',
    title: 'Section 3 — Référencer les avertissements antérieurs, ou écrire qu\'il n\'y en a pas',
    intro: "La section 3 comporte un tableau à trois colonnes (Date / Type d'avertissement / Motif) et une consigne : si aucun avertissement antérieur n'existe, l'indiquer explicitement. Ne jamais laisser la section vide.",
    steps: [
      {
        title: 'Remplissez le tableau à partir de la section 5 du dossier',
        actions: [
          'Une ligne par pièce qui compte comme étape (note orale datée, avertissement écrit, mise en demeure).',
          'Date exacte, type exact, motif en quelques mots.',
        ],
      },
      {
        title: 'Si aucune pièce n\'existe',
        actions: [
          'Écrivez-le dans la première ligne du tableau, en toutes lettres.',
          'Mentionnez les rappels oraux invoqués par le superviseur, en précisant qu\'ils ne sont ni datés ni consignés, donc non retenus.',
          'Barrez les lignes vides d\'un tiret.',
        ],
      },
    ],
    table: {
      columns: ['Date', "Type d'avertissement", 'Motif'],
      rows: [
        ['—', 'Aucun avertissement écrit ni note orale documentée antérieurs', 'Rappels oraux invoqués par le superviseur direct : non datés, non consignés au dossier, non retenus'],
        ['—', '—', '—'],
        ['—', '—', '—'],
      ],
    },
    result: "Fait quand : la section ne contient aucune ligne vide, et la phrase « aucun avertissement antérieur » est explicite si c'est le cas.",
    pitfall: "Écrire « rappels oraux répétés » comme s'ils comptaient : un document qui s'appuie sur des étapes non prouvées est un document que l'employé contestera, et que vous perdrez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 7',
    title: "Section 4 — Cocher l'étape appliquée et justifier",
    intro: "La section 4 propose quatre cases : Avertissement oral documenté, Avertissement écrit, Mise en demeure, Licenciement. Vous en cochez une seule, puis vous justifiez ce choix au regard de l'historique de la section 3.",
    steps: [
      {
        title: 'Cochez la case',
        actions: [
          'Cochez uniquement « Avertissement écrit ».',
          'Vérifiez que cela correspond à la décision d\'étape de la Procédure 5.',
        ],
      },
      {
        title: 'Rédigez la justification en quatre phrases',
        actions: [
          'Phrase 1 : ce que dit l\'historique (aucune étape documentée).',
          'Phrase 2 : pourquoi l\'écrit plutôt que l\'oral (faits répétés, gravité cumulée).',
          'Phrase 3 : ce que le document rappelle (la règle).',
          'Phrase 4 : ce qu\'une récidive expose (sanction plus lourde, jusqu\'à la rupture).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 remplie',
      lines: [
        '☐ Avertissement oral documenté   ☒ Avertissement écrit   ☐ Mise en demeure   ☐ Licenciement',
        'Justification : le dossier ne contient aucune étape antérieure documentée ; la séquence progressive impose donc de commencer par l\'avertissement écrit. Les faits sont répétés (8 retards en six semaines) et ont retardé le départ des convois. Le présent document rappelle la règle d\'horaire. Toute récidive exposera à une sanction plus lourde, pouvant aller jusqu\'à la mise en demeure puis à la rupture du contrat.',
      ],
    },
    result: "Fait quand : une seule case est cochée, la justification renvoie à la section 3 et mentionne explicitement la conséquence d'une récidive.",
    tip: "Une phrase de justification qui s'écarte de l'historique (« gravité des faits ») sans l'appuyer sur un fait vérifiable est un point d'attaque. Restez sur la séquence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 7',
    title: 'Sections 5 et 6 — Droit de réponse et décision, puis validation',
    intro: "Avant l'entretien, vous remplissez la première ligne de la section 5 (remise et délai) et la section 6 (décision). La réponse de l'employé se complétera après. Vous faites ensuite valider le tout.",
    steps: [
      {
        title: 'Section 5 — Prévoyez la remise et le délai',
        actions: [
          'Champ « Document remis à l\'employé le » : la date de l\'entretien.',
          'Champ « Délai de réponse accordé jusqu\'au » : minimum 48 heures ; donnez un délai raisonnable (ici trois jours ouvrables).',
          'Laissez vide le cadre « Réponse écrite de l\'employé » : il se remplit après.',
        ],
      },
      {
        title: 'Section 6 — Rédigez la décision',
        actions: [
          'Cadre « Mesure retenue et motif de la décision » : la mesure, le motif, la conséquence d\'une récidive, la date du point de suivi.',
          'Champs « Date d\'effet de la décision » et « Rédigé par (nom, fonction) ».',
        ],
      },
      {
        title: 'Faites valider',
        actions: [
          'Envoyez le document au HR Manager avec trois lignes : étape, faits, délai.',
          'Consultez le Base Manager ; informez le Head of Mission.',
          'Archivez la réponse de validation avec le brouillon.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 5 et 6 avant remise',
      lines: [
        'Section 5 : document remis le mercredi 14/10/2026 ; délai de réponse accordé jusqu\'au lundi 19/10/2026 à 17 h 00 (trois jours ouvrables).',
        'Section 6 : « Avertissement écrit pour arrivées tardives répétées à la prise de poste de 05 h 30 (8 faits du 01/09 au 08/10/2026). Toute récidive exposera à une sanction plus lourde. Point de suivi dans 30 jours. »',
        'Date d\'effet : 14/10/2026. Rédigé par : N. Mbusa, HR Officer.',
        'Validation : A. Kavira, HR Manager, courriel du 13/10/2026 à 17 h 20.',
      ],
    },
    result: "Fait quand : la section 6 est rédigée, la première ligne de la section 5 est remplie, et la validation du HR Manager est archivée.",
    pitfall: "Un délai de réponse de « 2 heures » ou « avant la fin de la journée » n'est pas un droit de réponse : c'est une formalité, qui se retournera contre vous en cas de contestation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 7',
    title: 'Remettre le document en entretien et recueillir les signatures (section 7)',
    intro: "L'entretien de remise a lieu en privé, avec le superviseur direct. Il dure 20 minutes. L'employé n'est pas obligé d'être d'accord : sa signature atteste la réception.",
    steps: [
      {
        title: 'Conduisez l\'entretien',
        actions: [
          'Expliquez l\'objet : remise d\'un avertissement écrit, pas un licenciement.',
          'Lisez les faits et la règle. Laissez-le réagir sans l\'interrompre.',
          'Expliquez le droit de réponse, le délai et le point de suivi.',
          'Remettez-lui une copie immédiatement, quelle que soit sa décision de signer.',
        ],
      },
      {
        title: 'Remplissez la section 7',
        actions: [
          'Trois colonnes : Employé, Superviseur direct, Responsable RH, avec Nom, Signature, Date pour chacune.',
          'La signature de l\'employé atteste la réception ; elle ne signifie pas son accord.',
          'En cas de refus de signer : un témoin présent contresigne dans le cadre prévu (nom, fonction, signature, date).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — entretien du mercredi 14/10/2026, 10 h, bureau RH',
      lines: [
        'Présents : N. Mbusa, L. Katembo, J.-P. Mwamba. Durée : 25 minutes.',
        'Section 7 — Employé : Jean-Pierre Mwamba, signé le 14/10/2026 avec la mention manuscrite « reçu, je répondrai par écrit ». Superviseur direct : L. Katembo, signé le 14/10/2026.',
        'Responsable RH : A. Kavira, signé par scan le 13/10/2026 ; N. Mbusa contresigne la remise.',
        'Copie remise à l\'employé à 10 h 25 ; original classé à 11 h 00.',
      ],
    },
    result: "Fait quand : les trois signatures et leurs dates sont portées, ou le témoin a contresigné le refus, et l'employé repart avec sa copie.",
    pitfall: "Retirer le document des mains de l'employé « parce qu'il ne veut pas signer » : il doit en repartir avec une copie, et la contresignature du témoin suffit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 7',
    title: 'Recueillir la réponse, classer et mettre à jour le dossier',
    intro: "Le droit de réponse est réel : vous attendez la fin du délai, vous lisez la réponse, vous vérifiez ce qu'elle conteste, puis vous classez tout. Enfin, vous mettez à jour le dossier du chauffeur.",
    steps: [
      {
        title: 'Traitez la réponse',
        actions: [
          'À l\'échéance, ouvrez la réponse. Recopiez-la dans le cadre « Réponse écrite de l\'employé » (ou annexez-la).',
          'Si l\'employé ne répond pas : écrivez « Aucune réponse reçue dans le délai (échu le … à … h) ».',
          'Vérifiez chaque fait contesté avec les sources. Maintenez ou corrigez, par écrit.',
        ],
      },
      {
        title: 'Classez et mettez à jour',
        actions: [
          'Section 5 du dossier : original signé, réponse, note de vérification ; scan dans le sous-dossier 05.',
          'Checklist : le template n\'a pas de ligne pour les avertissements (les 14 lignes sont les documents obligatoires). Faites un clic droit sur l\'en-tête de la colonne de l\'employé > Nouvelle note : « Avertissement écrit remis le 14/10/2026, section 5 ».',
          'Complétez les documents manquants de ce dossier (certificat médical, références) et mettez à jour les « Non ».',
          'Envoyez au superviseur la note d\'une phrase.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réponse du vendredi 16/10/2026 et traitement',
      lines: [
        'Réponse (extrait) : « Je reconnais les retards, causés par le transport depuis Katindo. Je conteste celui du 15/09 : la porte n\'était pas ouverte. »',
        'Vérification : le carnet de la sentinelle indique « porte ouverte à 05 h 00, arrivée J.-P. Mwamba 06 h 00 », signé par le gardien → fait maintenu.',
        'Section 6, confirmée le 19/10 : « réponse examinée, avertissement maintenu » ; point de suivi le 13/11/2026.',
        'Checklist, colonne C : certificat médical reçu le 16/10 (taux 92 %) ; références à documenter le 20/10, puis 100 %.',
        'Note au superviseur : « L., cette étape est nécessaire parce que sans avertissement écrit daté et signé, aucune décision plus lourde ne tiendrait devant l\'inspection du travail. »',
      ],
    },
    result: "Fait quand : la réponse est classée, chaque contestation a une vérification écrite, la note est posée sur la colonne de l'employé et le superviseur a reçu sa phrase. C'est votre Livrable 7.",
    tip: "Si une contestation est fondée, corrigez le document et refaites signer : un avertissement amendé vaut mieux qu'un avertissement fragile.",
  },

  // ─── Procédure 8 — Mise en demeure et licenciement ─────────────────────
  {
    type: 'concept',
    title: 'Procédure 8 — Passer de la mise en demeure au licenciement, sans sauter d\'étape',
    body: [
      "Si le comportement ne change pas, la séquence continue : mise en demeure, puis licenciement. Chaque étape est documentée avant de passer à la suivante, avec le même gabarit. Les faits graves relèvent d'une logique distincte : la faute grave.",
      "Fil rouge : l'avertissement du 14 octobre est classé. Le mardi 27 octobre puis le jeudi 5 novembre, J.-P. Mwamba arrive de nouveau en retard (30 puis 45 minutes). La récidive est constatée le 5 novembre. Le Superviseur Logistique redemande le licenciement.",
    ],
    bullets: [
      'Étape 1 — Constater la récidive et vérifier le cadre.',
      'Étape 2 — Rédiger la mise en demeure avec le gabarit.',
      'Étape 3 — Préparer le dossier de licenciement, si une nouvelle récidive survient.',
      'Étape 4 — Reconnaître la faute grave et appliquer sa logique distincte.',
    ],
    result: "Livrable 8 : la mise en demeure remise, le dossier de licenciement prêt à être contrôlé, et la liste des pièces d'un signalement de faute grave.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Constater la récidive et vérifier le cadre',
    intro: "Une récidive se constate comme un premier fait : par écrit, le jour même, avec deux sources. Avant de passer à la mise en demeure, vous vérifiez que l'étape précédente a bien été franchie et n'est pas périmée.",
    steps: [
      {
        title: 'Documentez les nouveaux faits',
        actions: [
          'Note de constat le jour de la récidive (Procédure 5, étape 1) et mise à jour du tableau des faits.',
          'Deux sources par date : pointage et carnet de la sentinelle.',
          'Vérifiez que les faits sont de même nature que ceux de l\'avertissement.',
        ],
      },
      {
        title: 'Vérifiez le cadre',
        actions: [
          'L\'avertissement écrit est classé, signé ou contresigné, avec sa réponse.',
          'La récidive survient pendant la durée de validité de l\'avertissement fixée par le règlement intérieur (six mois dans cet exemple).',
          'Le délai de 5 jours ouvrables après la récidive constatée est calculé : échéance de remise.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — constat du jeudi 05/11/2026',
      lines: [
        'Nouveaux faits : mardi 27/10, arrivée 06 h 00 (+30 min) ; jeudi 05/11, arrivée 06 h 15 (+45 min). Sources : pointage et carnet de la sentinelle.',
        'Nature identique à l\'avertissement du 14/10/2026 (ponctualité à la prise de poste de 05 h 30).',
        'Cadre : avertissement signé le 14/10, réponse du 16/10 classée, validité 6 mois → récidive dans le délai.',
        'Échéance de remise de la mise en demeure : vendredi 06, lundi 09, mardi 10, mercredi 11, jeudi 12/11/2026.',
      ],
    },
    result: "Fait quand : les faits nouveaux sont documentés par deux sources, le cadre est vérifié et l'échéance du 12/11 est dans l'agenda.",
    pitfall: "Confondre « un seul retard » avec une récidive suffisante sans grille : demandez au HR Manager le critère retenu (par exemple deux retards de plus de 15 minutes) et notez-le avant d'agir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Rédiger la mise en demeure avec le gabarit',
    intro: "La mise en demeure utilise le même gabarit : seule change l'étape cochée en section 4, et le contenu de la section 3, qui référence désormais l'avertissement antérieur de façon explicite. Elle avertit que la relation de travail est en jeu.",
    steps: [
      {
        title: 'Remplissez les sections qui changent',
        actions: [
          'Section 2 : uniquement les faits nouveaux (27/10 et 05/11), avec leurs heures.',
          'Section 3 : une ligne pour l\'avertissement écrit du 14/10/2026, avec date, type et motif.',
          'Section 4 : cochez « Mise en demeure ». Justification : récidive après avertissement écrit, risque pour les convois.',
          'Section 5 : délai plus long que pour l\'avertissement, par exemple cinq jours ouvrables.',
          'Section 6 : la mesure ET la mention explicite du risque de rupture du contrat en cas de nouvelle récidive.',
        ],
      },
      {
        title: 'Validez et remettez',
        actions: [
          'Validation du HR Manager ; information du Head of Mission avant la remise.',
          'Remise en entretien avec les mêmes précautions que l\'avertissement (Procédure 7, étape 6).',
          'Signatures, copie remise, classement en section 5.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mise en demeure remise le jeudi 12/11/2026',
      lines: [
        'Section 3 : 14/10/2026 | Avertissement écrit | Arrivées tardives répétées à la prise de poste de 05 h 30 (8 faits du 01/09 au 08/10/2026).',
        'Section 4 : ☒ Mise en demeure. Justification : récidive constatée le 05/11/2026 (27/10 et 05/11) après l\'avertissement écrit du 14/10/2026, de nature identique.',
        'Section 5 : remis le 12/11/2026 ; délai de réponse jusqu\'au jeudi 19/11/2026 à 17 h 00 (cinq jours ouvrables).',
        'Section 6 : « Mise en demeure. Toute nouvelle récidive exposera à la rupture du contrat de travail. » Date d\'effet 12/11/2026.',
      ],
    },
    result: "Fait quand : le document cite l'avertissement antérieur par sa date, mentionne explicitement le risque de rupture, est signé et classé, avec un délai de réponse de cinq jours ouvrables.",
    tip: "Si les retards cessent après la mise en demeure, notez « point de suivi : RAS » au dossier : c'est la preuve que la séquence a fonctionné et qu'aucune sanction supplémentaire n'est justifiée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: 'Préparer le dossier de licenciement, si une nouvelle récidive survient',
    intro: "Un licenciement ne s'appuie que sur un dossier disciplinaire déjà documenté. Vous préparez le dossier complet avant toute décision, et vous ne décidez pas seule : la décision est au niveau du Head of Mission, avec validation du HR Manager.",
    steps: [
      {
        title: 'Assemblez les pièces jointes',
        actions: [
          'Contrat, annexes, fiche de poste signée.',
          'Avertissement écrit signé, réponse de l\'employé et vérification.',
          'Mise en demeure signée, réponse et vérification.',
          'Notes de constat, feuilles de pointage, carnet de la sentinelle.',
          'Checklist du dossier individuel à 100 %.',
        ],
      },
      {
        title: 'Préparez la séparation',
        actions: [
          'Vérifiez le préavis légal applicable au type de contrat et à l\'ancienneté (valeur à lire dans le Code du travail).',
          'Vérifiez si un entretien préalable est exigé avant la lettre de licenciement.',
          'Préparez la lettre de licenciement motivée et le solde de tout compte (Module 04).',
          'Déroulez la check-list de séparation du Module 01 (fiche RH-Finance, désactivation de la ligne de paie, restitution du matériel).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — index du dossier de licenciement de J.-P. Mwamba (préparé, non déclenché)',
      lines: [
        'A. Contrat CDI du 01/04/2024, annexes, fiche de poste.',
        'B. Avertissement écrit du 14/10/2026 signé, réponse du 16/10, vérification du 19/10.',
        'C. Mise en demeure du 12/11/2026 signée, réponse éventuelle du 19/11.',
        'D. Notes de constat, feuilles de pointage, carnet de la sentinelle (01/09 au 05/11).',
        'E. Checklist dossier : 100 % à la date de la décision.',
        'F. Calcul du préavis (ancienneté 2 ans 7 mois au 01/11/2026) : durée à lire dans le Code du travail applicable, validée par le HR Manager.',
        'Décision : Head of Mission, sur recommandation du HR Manager. Siège informé selon la politique.',
      ],
    },
    result: "Fait quand : le dossier est indexé, la checklist de l'employé est à 100 %, le préavis est vérifié et la décision est portée à la bonne personne.",
    pitfall: "Déclencher un licenciement alors que la checklist du salarié affiche encore des « Non » : on ne peut plus réclamer ces pièces à un salarié qui conteste sa sortie, et l'inspection constate un dossier incomplet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Reconnaître la faute grave et appliquer sa logique distincte',
    intro: "Une faute grave rend impossible le maintien du salarié, même pendant un préavis. La procédure est accélérée, mais jamais improvisée : elle suit une logique plus stricte encore en matière de preuve, et elle remonte au niveau 3.",
    steps: [
      {
        title: 'Reconnaissez les signaux',
        actions: [
          'Violence, vol, fraude, conduite sous l\'influence de l\'alcool au volant d\'un véhicule de la mission, violation de la politique PSEA.',
          'Un retard répété n\'est pas une faute grave, quelle que soit votre exaspération.',
        ],
      },
      {
        title: 'Sécurisez les faits et alertez',
        actions: [
          'Écartez la personne du risque immédiat (retrait de la conduite, éloignement du poste) selon la politique, et informez le HR Manager et le Head of Mission le jour même.',
          'Fraude ou violation PSEA : ne menez pas l\'enquête seule ; informez le siège et le point focal PSEA.',
          'Recueillez les preuves : déclarations écrites datées de deux témoins, documents, constats.',
        ],
      },
      {
        title: 'Respectez le contradictoire',
        actions: [
          'Entretien avec l\'employé, droit de réponse écrit, vérification des contestations.',
          'Décision au niveau 3 (Head of Mission avec RH siège), consignée dans le gabarit, étape « Licenciement ».',
        ],
      },
    ],
    example: {
      title: 'Exemple hypothétique — un chauffeur au volant d\'un véhicule de convoi en état d\'ébriété (hors cas Mwamba)',
      lines: [
        'Jour J, 05 h 40 : le Superviseur Logistique l\'écarte de la conduite et note l\'heure, les circonstances et le nom de deux témoins.',
        'Jour J, 08 h 00 : information écrite du HR Manager et du Head of Mission ; courriel de deux lignes au siège.',
        'Jour J+1 : déclarations écrites des deux témoins ; entretien contradictoire ; réponse écrite de l\'employé.',
        'Jour J+3 : décision au niveau 3. Même en faute grave, chaque pièce est datée, signée et classée en section 5.',
      ],
    },
    result: "Fait quand : l'écart est reconnu comme faute grave sur des faits prouvés, le niveau 3 est saisi le jour même et chaque pièce est classée. C'est votre Livrable 8.",
    pitfall: "Qualifier de « faute grave » un problème répété pour contourner la séquence : si la preuve ne tient pas au niveau de la faute grave, vous avez perdu l'étape progressive et la faute grave.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Le raccourci qui coûte cher, Goma » : du 12 octobre au 12 novembre",
    scenario: "Rappel : un chauffeur logistique en CDI depuis 2 ans et demi accumule des retards sur des rotations de convoi. Le Superviseur Logistique exige un licenciement immédiat. Le dossier ne contient aucun avertissement écrit, seulement une mention orale non datée. Voici le déroulé complet tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Lundi 12/10 — Constat et vérification du dossier', body: 'Procédure 5 (étapes 1 et 3) : note de constat à 11 h 05, dossier ouvert, checklist de J.-P. Mwamba à 83 % (certificat médical et références manquants).', result: "Aucune étape disciplinaire documentée ; faute grave écartée." },
      { title: 'Mardi 13/10 — Faits, décision et rédaction', body: "Procédure 5 (étapes 2 et 4) : tableau des 8 retards recoupé, décision d'étape, validation d'A. Kavira à 17 h 20. Procédure 7 (étapes 1 à 5) : sections 1 à 6 du gabarit.", result: "Avertissement écrit prêt et validé ; échéance légale du 15/10 tenue." },
      { title: 'Mercredi 14/10 — Entretien de remise', body: 'Procédure 7 (étape 6) : entretien à 10 h, section 7 signée, copie remise. Note d\'une phrase au superviseur.', result: "Avertissement classé en section 5 le jour même." },
      { title: 'Jeudi 15 et vendredi 16/10 — Relances et réponse', body: "Plan de relance envoyé (Procédure 3, étape 9) ; visite médicale et certificat reçu le 16/10. Réponse écrite de l'employé reçue le 16/10.", result: "Dossier à 92 % ; droit de réponse respecté." },
      { title: 'Lundi 19 et mardi 20/10 — Clôture du droit de réponse', body: "Procédure 7 (étape 7) : la contestation du 15/09 est vérifiée avec le carnet de la sentinelle et maintenue ; références documentées le 20/10.", result: "Checklist à 100 %, avertissement maintenu, point de suivi fixé au 13/11." },
      { title: 'Du 27/10 au 12/11 — La récidive', body: "Procédure 8 (étapes 1 et 2) : nouveaux retards le 27/10 et le 05/11, mise en demeure validée le 10/11 et remise le 12/11 avec cinq jours ouvrables pour répondre.", result: "Séquence respectée ; le licenciement, s'il devient nécessaire, repose sur un dossier complet." },
    ],
  },
  {
    type: 'case-study',
    title: "Cas résolu — Pourquoi un licenciement immédiat exposait KSS",
    scenario: "L'exercice source demande d'expliquer en quelques lignes pourquoi un licenciement immédiat, dans cette situation précise, exposait l'organisation à un risque réel devant l'inspection du travail, et d'identifier l'étape réelle du dossier. Voici le raisonnement, point par point.",
    steps: [
      { title: '1. Le dossier ne contient aucune étape documentée', body: "Pas de note orale datée, pas d'avertissement écrit, pas de mise en demeure. La seule mention est orale, non datée, jamais formalisée." },
      { title: '2. Les rappels oraux invoqués ne prouvent rien', body: "Sans date, sans témoin et sans note rédigée au moment des faits, le salarié peut tout nier. Une procédure orale, même sincère, n'est pas défendable." },
      { title: '3. Le contrat est un CDI de 2 ans et demi', body: "La rupture est encadrée : procédure, préavis, indemnités. Le fond (8 retards en six semaines) est légitime ; c'est la forme qui manque." },
      { title: '4. Le dossier du chauffeur est lui-même incomplet', body: "83 % : certificat médical et références absents. Un dossier incomplet affaiblit encore l'organisation devant un inspecteur ou un bailleur." },
      { title: '5. L\'étape réellement applicable est l\'avertissement écrit', body: "C'est la première étape formelle possible. L'étape 1 (note orale) n'existe pas rétroactivement : on ne l'antidate jamais." },
    ],
    result: "Conclusion en trois lignes pour le superviseur : le licenciement est possible à terme, mais seulement après avertissement écrit et mise en demeure ; sans eux, KSS perdrait un contentieux gagnable sur les faits.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — L'avertissement écrit complet de J.-P. Mwamba (gabarit, sections 1 à 7)",
    scenario: "Version signée le 14/10/2026, archivée sous Avertissement-ecrit_KSS-GOM-018_2026-10-13.pdf, section 5 du dossier.",
    steps: [],
    example: {
      title: 'Document rempli, section par section',
      lines: [
        '1. Identification : MWAMBA Jean-Pierre, Chauffeur logistique ; Logistique, base de Goma ; superviseur direct L. Katembo ; embauché le 01/04/2024 ; CDI.',
        '2. Faits : du 01/09 au 08/10/2026, 8 arrivées tardives à la prise de poste de 05 h 30 (30 à 45 minutes, 285 minutes au total), aux dates 01/09, 10/09, 15/09, 24/09, 29/09, 01/10, 06/10, 08/10. Sources : feuilles de pointage et carnet de la sentinelle. Aucun justificatif. Règle : article « Horaires » du contrat et « Ponctualité » du règlement intérieur.',
        '3. Avertissements antérieurs : aucun avertissement écrit ni note orale documentée antérieurs. Les rappels oraux invoqués par le superviseur direct ne sont ni datés ni consignés : non retenus.',
        '4. Étape appliquée : ☒ Avertissement écrit. Aucune étape antérieure documentée ; faits répétés ; toute récidive exposera à une sanction plus lourde.',
        '5. Droit de réponse : document remis le 14/10/2026 ; délai de réponse jusqu\'au 19/10/2026 à 17 h 00. Réponse du 16/10 reçue et jointe (contestation du 15/09 vérifiée et écartée).',
        '6. Décision : avertissement écrit maintenu, point de suivi le 13/11/2026. Date d\'effet : 14/10/2026. Rédigé par : N. Mbusa, HR Officer.',
        '7. Signatures : employé J.-P. Mwamba (reçu), superviseur direct L. Katembo, responsable RH A. Kavira, tous datés du 13 ou 14/10/2026. Pas de refus : encadré du témoin laissé vide.',
      ],
    },
    result: "Contrôle final : une page, une seule case cochée en section 4, aucune section vide, la section 3 mentionne explicitement l'absence d'avertissement antérieur, et le délai de réponse laisse trois jours ouvrables.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le dossier de J.-P. Mwamba dans la checklist et le tableau de bord',
    scenario: "Ligne mise à jour de la colonne C de l'onglet « Checklist Dossiers », puis effet sur l'onglet « Tableau de bord équipe » (six dossiers de démonstration). Le template n'ayant pas de ligne pour les avertissements, l'avertissement est signalé par une note sur l'en-tête de la colonne.",
    steps: [],
    table: {
      columns: ['Cellule / ligne', 'Contenu', 'Au 12/10', 'Au 20/10'],
      rows: [
        ['C10 — Certificat médical', "Certificat d'aptitude (visite du 16/10)", 'Non', 'Oui'],
        ['C11 — Références (2)', 'Deux appels documentés le 20/10', 'Non', 'Oui'],
        ['C21 — Taux de complétude', 'Oui ÷ (Oui + Non)', '83 %', '100 %'],
        ['C22 — Documents manquants', 'Nombre de « Non »', '2', '0'],
        ['Tableau de bord, ligne 7', 'Statut du dossier', 'À compléter', 'Complet'],
        ['Tableau de bord D15 à D18', 'Moyenne ; complets ; à compléter ; manquants', '92 % ; 1 ; 5 ; 6', '95 % ; 2 ; 4 ; 4'],
        ['Note sur C5', 'Texte de la note de cellule', '—', 'Avertissement écrit remis le 14/10/2026, section 5'],
      ],
    },
    result: "Contrôle final : le taux affiché (100 %) se retrouve par calcul manuel (12 « Oui », 0 « Non », 2 « N/A ») ; la moyenne d'équipe se recalcule : (100 + 100 + 4 × 92) ÷ 6 = 94,7, arrondi à 95 % ; l'avertissement est classé en section 5.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi cet ordre et ces formulations',
    scenario: "Le superviseur voulait aller vite. Voici pourquoi la voie complète était la plus rapide pour obtenir ce qu'il cherchait : un chauffeur ponctuel ou, à défaut, une séparation qui tienne.",
    steps: [
      { title: '1. Documenter avant d\'agir', body: "La note de constat du 12/10 et le tableau des faits du 13/10 transforment une impression en dates. Sans eux, aucun document n'est défendable." },
      { title: '2. Vérifier l\'historique avant de choisir l\'étape', body: "C'est ce contrôle, systématiquement sauté sous pression, qui détermine l'étape que vous avez le droit d'appliquer : ici, l'écrit." },
      { title: '3. Valider avant de remettre', body: "Le HR Manager valide l'avertissement écrit (niveau 2), le Base Manager est consulté, le Head of Mission informé : personne n'est surpris, personne ne désavoue." },
      { title: '4. Remettre en privé, laisser un droit de réponse réel', body: "Trois jours ouvrables, pas trois heures. La réponse est lue, vérifiée, classée : elle protège aussi l'organisation." },
      { title: '5. Classer le jour même', body: "Un avertissement non classé n'existe pas. Original en section 5, scan en 05, note sur la colonne de la checklist." },
      { title: '6. La phrase au superviseur', body: "« Sans avertissement écrit daté et signé, aucune décision plus lourde ne tiendrait devant l'inspection du travail. » Une phrase, sans cours de droit, qui lui donne un chemin." },
    ],
    result: "Résultat : l'échéance du 15/10 est tenue, le dossier est complet, le superviseur est associé, et la mise en demeure du 12/11 s'appuie sur un avertissement que personne ne peut contester sur la forme.",
  },

  // ─── Exercices ─────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Uvira : choisir les contrats et repérer la requalification",
    instructions: "Vous êtes HR Officer de la base d'Uvira (fictive, même ONG), le lundi 9 novembre 2026. Cinq situations de personnel arrivent sur votre bureau. Pour chacune, appliquez le test de recours au CDD, choisissez le type de contrat, et repérez les alertes de requalification dans le registre. Le seuil d'alerte est 60 jours avant la fin d'un CDD ou 2 renouvellements.",
    table: {
      columns: ['Situation', 'Faits', 'Financement / pièces'],
      rows: [
        ["1. Remplacement de C. Riziki, Assistante Admin-RH", "Congé maternité du 16/11/2026 au 22/02/2027, attestation reçue le 02/11", "Ligne salaire de la titulaire (520 USD/mois)"],
        ["2. Gardien de nuit, poste créé après un audit de sécurité", "Besoin 24 h sur 24 sans date de fin", "Budget de la base 2027 (300 USD/mois)"],
        ["3. H. Kasanda, Agent de distribution", "4 CDD consécutifs depuis le 01/02/2025 (le n° 4 va du 01/08/2026 au 31/01/2027) ; 5e contrat demandé par le chef de projet", "Projet nutrition reconduit tous les six mois, phase suivante confirmée jusqu'au 31/07/2027"],
        ["4. Médecin coordinateur, recruté hors RDC, arrivée le 01/01/2027", "Mission de 12 mois ; projet de contrat reçu : gabarit national avec nom et salaire modifiés", "Budget de la mission"],
        ["5. Quatre agents de saisie pour une campagne de vaccination", "Du 01/12/2026 au 15/01/2027 (environ six semaines), aucune reconduction prévue", "Convention de la campagne"],
      ],
    },
    deliverable: "Le tableau « Decision_contrat » complété (type de contrat et réponse aux quatre questions pour chaque situation), la ligne du registre de H. Kasanda avec ses alertes, la note d'une demi-page au HR Manager sur H. Kasanda, et la liste des clauses manquantes de la situation 4.",
  },
  {
    type: 'exercise',
    title: "Exercice 1 — Les étapes à suivre pour Uvira",
    steps: [
      {
        title: 'Passez le test CDD (Procédure 1, étapes 1 et 2)',
        actions: [
          'Écrivez, pour chaque situation, les réponses Q1 à Q4 et la conclusion.',
          'Pour la situation 1, fixez les dates de début et de fin du CDD (passation incluse) et la clause de prolongation.',
        ],
      },
      {
        title: "Contrôlez le contrat d'expatriation (Procédure 1, étape 4)",
        actions: [
          'Listez au moins cinq clauses absentes ou inadaptées de la situation 4.',
          'Indiquez qui doit valider avant signature.',
        ],
      },
      {
        title: 'Alimentez le registre (Procédure 2, étapes 1 et 2)',
        actions: [
          'Saisissez la ligne de H. Kasanda : type, date d\'entrée, date de fin, nombre de renouvellements.',
          'Calculez les jours avant la fin au 09/11/2026 et dites quelle alerte se déclenche, et laquelle ne se déclenche pas.',
        ],
      },
      {
        title: 'Rédigez la note de recommandation (Procédure 2, étapes 3 et 4)',
        actions: [
          'Appliquez les cinq questions de temporalité.',
          'Recommandez une option, une date d\'effet, la reprise d\'ancienneté et la décision demandée avec une échéance.',
        ],
      },
    ],
    tip: "Pour H. Kasanda, demandez-vous à quelle date l'alerte aurait dû se déclencher : cela fait partie de votre note, parce que le HR Manager voudra savoir pourquoi personne ne l'a vue.",
  },
  {
    type: 'checklist',
    title: 'Exercice 1 — Votre livrable est correct si…',
    items: [
      "Situation 1 : CDD de remplacement ; motif écrit citant C. Riziki, le congé maternité du 16/11/2026 au 22/02/2027 et l'attestation du 02/11 ; début avant le 16/11 pour la passation, fin après le 22/02/2027 avec une marge ; clause de prolongation par avenant.",
      "Situation 2 : CDI, parce que Q1 est « non » (aucun motif temporaire) ; période d'essai lue dans le Code du travail applicable.",
      "Situation 3 : poste permanent (5 questions de temporalité à « oui ») ; registre : CDD n° 4, 3 renouvellements ; l'alerte se déclenche pour les renouvellements (3 ≥ 2), pas pour les jours (83 jours avant le 31/01/2027, au-dessus de 60).",
      "Situation 3 : recommandation d'un CDI au 01/02/2027 avec reprise d'ancienneté au 01/02/2025 ; la note précise que l'alerte aurait dû se déclencher dès le deuxième renouvellement (01/02/2026) et pose une question oui / non avec échéance avant le cut-off de novembre.",
      "Situation 4 : contrat d'expatriation, pas gabarit national ; au moins cinq clauses manquantes parmi : évacuation médicale, droit applicable et juridiction, hardship et R&R, permis de travail, couverture sociale, règles de sécurité ; validation du siège avant signature.",
      "Situation 5 : CDD pour pic d'activité légitime, quatre contrats du 01/12/2026 au 15/01/2027, pièce : convention de la campagne, aucun renouvellement prévu, limite légale vérifiée.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Uvira : l'avertissement écrit du chauffeur",
    instructions: "Toujours à Uvira, le lundi 9 novembre 2026. Le Base Manager B. Mapendo vous demande de licencier le chauffeur H. Mushagalusa (CDI depuis le 14/03/2023, matricule KSS-UVI-004) : « Trois absences, c'est assez. » Les feuilles de pointage portent « absent » le mardi 20/10, le jeudi 29/10 et le jeudi 05/11/2026 (journées complètes, jours de rotation), sans justificatif. La section 5 de son dossier contient une note orale documentée du 21/10/2026 que vous avez rédigée, signée par B. Mapendo et par l'employé. Son dossier est incomplet.",
    table: {
      columns: ['Ligne de la checklist', 'Statut du dossier de H. Mushagalusa'],
      rows: [
        ['6 à 9 : contrat, identité, CV, diplômes (permis)', 'Oui'],
        ['10 : certificat médical d\'aptitude', 'Non'],
        ['11 : références (2)', 'Non'],
        ['12 : formulaire d\'urgence', 'Oui'],
        ['13 : code de conduite et PSEA signé', 'Non'],
        ['14 à 16 : fiche de poste, photo, RIB', 'Oui'],
        ['17 : affiliation sécurité sociale', 'Non'],
        ['18 : visa ou permis de travail', 'N/A'],
        ['19 : attestation de fin de période d\'essai (3 mois prévus au contrat)', 'Non'],
      ],
    },
    deliverable: "L'analyse d'étape et d'échéance (cinq lignes), l'avertissement écrit complet avec le gabarit (sections 1 à 7), la colonne du chauffeur dans la checklist avec son taux, un plan de relance daté et la note d'une phrase pour le Base Manager.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Les étapes à suivre pour l'avertissement d'Uvira",
    steps: [
      {
        title: 'Décidez de l\'étape (Procédure 5)',
        actions: [
          'Triez les pièces du dossier : ce qui compte comme étape et ce qui n\'en est pas une.',
          'Déterminez l\'étape applicable, le valideur et la date limite de remise (cinq jours ouvrables à compter du dernier fait constaté).',
        ],
      },
      {
        title: 'Rédigez le document (Procédure 7, étapes 1 à 5)',
        actions: [
          'Sections 1 et 2 : identification et trois faits datés avec leur règle.',
          'Section 3 : référencez la note orale du 21/10/2026 par sa date et son type.',
          'Section 4 : une seule case cochée et une justification en quatre phrases.',
          'Sections 5 et 6 : date de remise, délai de réponse d\'au moins trois jours ouvrables, mesure et date d\'effet.',
        ],
      },
      {
        title: 'Remettez et signez (Procédure 7, étape 6)',
        actions: [
          'Décrivez l\'entretien : qui est présent, ce que vous dites, ce que vous remettez.',
          'Prévoyez le cas d\'un refus de signer (témoin).',
        ],
      },
      {
        title: 'Mettez à jour le dossier (Procédure 3, étapes 6 et 9)',
        actions: [
          'Saisissez la colonne du chauffeur : comptez les Oui et les Non, calculez le taux.',
          'Rédigez le plan de relance : document, action, responsable, échéance.',
          'Rédigez la note d\'une phrase pour B. Mapendo.',
        ],
      },
    ],
    pitfall: "N'oubliez pas que le dossier du chauffeur est incomplet : avant de pousser plus loin une procédure qui pourrait aller jusqu'à la mise en demeure, vous devez avoir réclamé les documents manquants.",
  },
  {
    type: 'checklist',
    title: "Exercice 2 — Votre livrable est correct si…",
    items: [
      "Étape applicable : avertissement écrit (étape 2), car la note orale du 21/10/2026 est documentée (étape 1 franchie) et les absences se répètent ; ni mise en demeure ni licenciement à ce stade ; faute grave écartée.",
      "Date limite de remise : jeudi 12/11/2026 (vendredi 06, lundi 09, mardi 10, mercredi 11, jeudi 12) ; validation du HR Manager avant remise ; Base Manager consulté.",
      "Section 2 : trois dates (20/10, 29/10, 05/11/2026), journées complètes, sources (feuilles de pointage), aucun justificatif, règle citée (présence les jours de rotation) ; aucun adjectif.",
      "Section 3 : une ligne « 21/10/2026 | Avertissement oral documenté | Absence non justifiée du 20/10/2026 » ; aucune ligne vide sans mention.",
      "Section 4 : une seule case cochée (Avertissement écrit) ; la justification renvoie à la section 3 et à la conséquence d'une récidive.",
      "Section 5 : délai de réponse d'au moins trois jours ouvrables ; section 7 : trois signatures ou contresignature d'un témoin en cas de refus ; copie remise à l'employé.",
      "Checklist : 8 « Oui », 5 « Non » (lignes 10, 11, 13, 17 et 19), 1 « N/A » → taux = 8 ÷ 13 = 62 % ; 5 documents manquants ; plan de relance daté ; note posée sur la colonne : « Avertissement écrit remis le … ».",
      "Note au Base Manager : une phrase, qui explique que l'avertissement écrit est nécessaire pour qu'une récidive puisse conduire à une sanction plus lourde.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre mission',
    instructions: "Si vous êtes en poste, reprenez les Procédures 2, 3 et 4 avec vos vrais documents. Si vous n'êtes pas en poste, utilisez le cas de Goma ou d'Uvira comme base et construisez les outils sur votre ordinateur, avec des données fictives.",
    steps: [
      { title: 'Votre registre du personnel', actions: ['Au moins 10 lignes avec type de contrat, dates, nombre de renouvellements.', 'Les deux alertes calculées par formule.'] },
      { title: 'Votre checklist de dossiers', actions: ['Trois dossiers saisis ligne par ligne, taux calculé, plan de relance daté.', 'Un dossier réellement classé dans l\'ordre des cinq sections.'] },
      { title: 'Votre note disciplinaire', actions: ['Une note de constat et une note orale documentée à partir d\'un incident réel ou fictif.', 'Un avertissement écrit complet (sections 1 à 7) avec la section 3 renseignée.'] },
    ],
    deliverable: "Votre registre avec alertes, votre checklist avec plan de relance, et un avertissement écrit complet validé par votre hiérarchie si vous êtes en poste.",
    pitfall: "N'utilisez jamais les données réelles de vos collègues (noms, salaires, informations médicales ou disciplinaires) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Découvrir un dossier individuel incomplet au moment d'un litige, quand il est déjà trop tard pour réclamer le document manquant. La revue trimestrielle n'est pas une formalité : c'est votre seule protection.",
      "Mener une procédure disciplinaire sans traçabilité écrite à chaque étape : un superviseur qui affirme avoir « déjà prévenu oralement plusieurs fois » n'apporte aucune preuve exploitable si rien n'a été noté au moment des faits.",
      "Confondre les clauses d'un contrat local et d'un contrat d'expatriation en réutilisant le même gabarit : couverture santé internationale oubliée sur un contrat d'expatriation, ou indemnités locales appliquées à tort à un expatrié.",
      "Laisser un CDD se renouveler sans jamais réévaluer si le poste est encore temporaire : chaque renouvellement machinal rapproche l'organisation d'une requalification en CDI qu'elle n'a pas budgétée.",
      "Traiter le droit de réponse comme une formalité qu'on coche vite : un avertissement repris dans l'heure n'a aucune valeur en cas de contestation. Laissez au moins 48 heures, davantage pour une mise en demeure.",
      "Antidater une note orale ou un avertissement « pour combler le trou » : c'est un faux, qui détruit la crédibilité de tout le dossier.",
      "Ajouter un employé après la dernière colonne de la checklist ou taper un statut à la main : le tableau de bord et ses totaux ignorent le dossier, et affichent un taux flatteur.",
      "Saisir « N/A » pour faire monter le taux de complétude : un « N/A » sur une ligne obligatoire pour tous masque un document manquant.",
      "Stocker les dossiers dans un lecteur partagé accessible à tous les coordinateurs « pour faciliter les choses » : une violation de confidentialité dès le premier document médical ou disciplinaire.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez écrit une fiche de décision de contrat pour chaque recrutement, appuyée sur le test de recours au CDD, avec contrôle des clauses d'expatriation et validation avant signature.",
      "Vous avez construit un registre du personnel qui calcule les alertes de fin de CDD et de renouvellements, et rédigé la note de recommandation sur un CDD à risque de requalification.",
      "Vous avez rempli la checklist du dossier individuel ligne par ligne, lu le tableau de bord d'équipe, archivé selon un ordre fixe, sécurisé l'accès et produit un plan de relance daté.",
      "Vous avez mis en place le suivi des présences, des congés et des absences, et reconstitué les retards d'un salarié à partir de deux sources.",
      "Vous avez décidé de l'étape disciplinaire applicable à partir d'un dossier vérifié, et répondu à un superviseur pressé avec une phrase et une mesure opérationnelle.",
      "Vous avez conduit un avertissement oral documenté, classé le jour même.",
      "Vous avez rédigé, fait valider, remis, répondu et classé un avertissement écrit complet avec le gabarit (sections 1 à 7), puis mis à jour le dossier du salarié.",
      "Vous avez préparé la mise en demeure, le dossier de licenciement et la logique distincte de la faute grave, sans sauter d'étape.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer à un superviseur pressé pourquoi le type de contrat (CDD, CDI, expatriation) n'est pas une question de préférence administrative mais de risque juridique.",
      "Je sais identifier un risque de requalification d'un CDD répété en CDI avant qu'il ne devienne un contentieux, et je tiens un registre qui m'alerte.",
      "J'ai constitué ou vérifié un dossier individuel complet avec checklist-dossier-individuel-personnel.xlsx, et je sais lire le tableau de bord d'équipe.",
      "Je sais nommer les quatre étapes d'une procédure disciplinaire progressive, dans l'ordre, et le document requis à chacune.",
      "J'ai rédigé un avertissement complet avec gabarit-procedure-disciplinaire-avertissement.docx, en y intégrant les avertissements antérieurs et un délai de réponse réel.",
      "Je sais expliquer pourquoi sauter une étape disciplinaire sous pression opérationnelle expose l'organisation, même quand le fond du dossier est légitime.",
      "Je sais où et comment sécuriser physiquement et numériquement l'accès aux dossiers individuels du personnel.",
      "J'ai réalisé les exercices d'Uvira et mes livrables passent toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 04 — Politique de Rémunération & Avantages Sociaux : vous savez désormais quel contrat choisir, comment tenir les dossiers et comment sanctionner dans les règles. Vous allez maintenant construire la grille salariale, calculer les primes terrain et les indemnités de risque, et maîtriser les cotisations sociales et les obligations légales de l'employeur, c'est-à-dire tout ce qui entre dans le contrat que vous venez d'apprendre à écrire.",
  },
]
