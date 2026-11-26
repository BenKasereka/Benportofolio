// Module 06 — Négociation de Contrat & Conditions d'Expatriation
// Référence pas à pas : chaque procédure du module (réception de l'offre et
// délai de réflexion, benchmarking salarial, fourchette et lecture de l'écart,
// argumentaire, échange de négociation, gestion de la contre-offre ou du refus,
// lecture du contrat avec la checklist, questions et réponses écrites,
// signature et dossier de trace) est détaillée étape par étape et appliquée à
// un cas fil rouge unique (Joël Kabeya, fictif, qui reçoit l'offre d'ISKI après
// l'entretien du module 05), à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du dossier 04-templates
// (grille-benchmarking-salarial-negociation.xlsx et
// checklist-lecture-contrat-expatriation.docx).
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: "Négociation de Contrat & Conditions d'Expatriation",
    hook: "À la fin de ce module, vous aurez en main une grille de benchmarking salarial croisant 4 références, une fourchette basse et haute défendable, un argumentaire préparé point par point, un script d'échange sans ultimatum, la checklist de lecture de contrat complétée clause par clause et un dossier de trace de toute la négociation — exactement ce qu'il faut avoir avant de signer.",
  },
  {
    type: 'objectives',
    items: [
      "Enregistrer une offre reçue sans réagir à chaud et obtenir un délai de réflexion de 24 à 72 h, en produisant une fiche de réception de l'offre et le message qui pose le délai.",
      "Compléter l'onglet « Benchmarking » (sections 1 et 2) du classeur grille-benchmarking-salarial-negociation.xlsx avec au moins 4 références croisées (annonce, ONU, ONGI, secteur privé) rendues comparables, en produisant la grille de références et l'offre saisie.",
      "Fixer une fourchette basse acceptable et une fourchette haute justifiable, puis lire l'écart calculé (cellules D20 à G20), en produisant une carte de négociation d'une page : ancrage, cible, plancher et alternative de repli.",
      "Rédiger au moins 3 arguments factuels (donnée, réalisation ou contrainte légitime) dans l'onglet « Points de négociation », priorisés et suivis par statut, en produisant l'argumentaire complet avant tout échange oral.",
      "Mener l'échange de négociation en posant une question ouverte, en ancrant un chiffre appuyé sur vos données et en répondant aux objections sans ultimatum, en produisant un script d'appel et un compte rendu daté.",
      "Évaluer une contre-offre ou un refus de négociation avec la valeur réelle du package, puis décider (accepter, pivoter, décliner) sans fermer la relation, en produisant une note de décision chiffrée.",
      "Lire le contrat avec la checklist en 8 sections, poser au moins 3 questions par écrit, obtenir des réponses écrites, signer et archiver, en produisant la checklist complétée et un dossier de trace complet.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des notions : vous repartez avec 6 livrables, produits dans cet ordre, que vous utiliserez à chaque offre reçue — la prochaine comme celle de demain. Ce module referme la boucle ouverte au module 01 : votre valeur marché, votre profil de poste idéal et votre plancher de rémunération servent maintenant à répondre à une offre réelle.",
      "Cas fil rouge — Joël Kabeya (modules 01 à 05), Superviseur MEAL à Alliance Santé Grands Lacs (Goma, RDC). À l'issue de l'entretien du lundi 18 janvier 2027, Initiative Santé Kivu International (ISKI, ONG internationale fictive) lui propose, le lundi 25 janvier 2027 à 15 h, le poste de Responsable MEAL à Bukavu : 2 500 USD nets par mois, contrat de 12 mois renouvelable, avantages « selon la politique de l'organisation » et une réponse attendue sous 48 h. Son plancher du module 01 était de 2 530 USD : l'offre est en dessous. Vous suivez sa négociation étape par étape, jusqu'à la signature du mercredi 10 février 2027.",
    ],
    bullets: [
      "Livrable 1 — Fiche de réception de l'offre, message de délai et dossier de négociation ouvert (Procédure 1).",
      "Livrable 2 — Onglet « Benchmarking » complété : au moins 4 références rendues comparables et l'offre saisie (Procédure 2).",
      "Livrable 3 — Fourchette basse et haute, lecture de l'écart et carte de négociation d'une page (Procédure 3).",
      "Livrable 4 — Onglet « Points de négociation » complété : arguments, priorités, statuts, concessions (Procédure 4).",
      "Livrable 5 — Script d'appel, compte rendu d'échange et note de décision sur la contre-offre (Procédures 5 et 6).",
      "Livrable 6 — Checklist de lecture de contrat complétée, questions écrites, réponses écrites et dossier de trace (Procédures 7, 8 et 9).",
    ],
    table: {
      columns: ['Date', 'Ce qui se passe pour Joël', 'Procédure'],
      rows: [
        ['lun. 25/01/2027, 15 h', "Appel de M. Patrick Lemaire (RH régional) et lettre d'offre : 2 500 USD nets, réponse sous 48 h", '1'],
        ['lun. 25/01/2027, 17 h', "Joël remercie et demande un délai jusqu'au jeudi 28/01 à 12 h", '1'],
        ['mar. 26 et mer. 27/01/2027', 'Benchmarking, fourchette, argumentaire, répétition (environ 5 h 15)', '2, 3, 4'],
        ['jeu. 28/01/2027, 11 h', 'Appel de négociation avec M. Lemaire', '5'],
        ['ven. 29/01/2027', "Offre révisée reçue par écrit : évaluation et décision", '6'],
        ['mar. 02/02/2027', 'Projet de contrat reçu : lecture avec la checklist', '7'],
        ['jeu. 04 au lun. 08/02/2027', 'Questions écrites envoyées, réponses écrites obtenues', '8'],
        ['mer. 10/02/2027', 'Signature, archivage du dossier ; prise de poste le 01/03/2027', '9'],
      ],
    },
    tip: "Le poste de Joël est à Bukavu, dans son propre pays : on parle de recrutement national avec affectation hors du lieu de résidence. Les six clauses à vérifier (logement, santé et medevac, R&R, billets, rapatriement, préavis) sont exactement les mêmes pour une expatriation internationale, et un second cas complet, une offre de coordination à l'étranger, est résolu en fin de module.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'stat-callout',
    stat: '24 à 72 h',
    caption: "Le délai de réflexion qu'un recruteur expérimenté accepte sans réticence quand vous recevez une offre.",
    context: "Demandé poliment, ce délai n'est jamais lu comme un manque d'enthousiasme : c'est le signe que vous traitez la décision sérieusement. Tout ce module sert à remplir ces 24 à 72 heures avec des données au lieu d'une impression.",
  },
  {
    type: 'concept',
    title: 'Pourquoi la première offre ne se signe jamais telle quelle',
    body: [
      "La première offre transmise par un employeur n'est presque jamais son offre maximale : elle est calibrée pour laisser une marge de négociation, parce que le recruteur sait que la négociation fait partie du processus normal. Accepter sans discussion ne montre ni gratitude ni simplicité : cela laisse sur la table une marge que l'organisation avait déjà prévu de perdre.",
      "Ce qui distingue une négociation professionnelle d'un pari risqué n'est donc pas le fait de négocier, mais la préparation qui la précède. Un candidat qui avance un chiffre sans donnée pour l'appuyer improvise ; un candidat qui arrive avec un benchmarking documenté négocie.",
    ],
    example: {
      title: "Deux candidats, la même offre de 2 500 USD nets pour un poste de MEAL Manager à Bukavu",
      lines: [
        "Candidat A — répond « C'est d'accord, merci ! » au téléphone, sans rien relire. Logement non précisé : il découvre en février que le loyer d'une maison sécurisée est de 450 USD par mois, soit 5 400 USD sur 12 mois à sa charge.",
        "Candidat B — demande 72 h, relève 4 références, obtient 2 900 USD nets, une indemnité de logement de 400 USD par mois et les clauses medevac par écrit. Même poste, même organisation, même employeur.",
        "Écart sur 12 mois : (2 900 − 2 500) × 12 + 400 × 12 = 4 800 + 4 800 = 9 600 USD, sans compter la couverture santé sécurisée.",
      ],
    },
    highlight: "Un candidat qui avance un chiffre sans aucune donnée improvise. Un candidat qui arrive avec un benchmarking documenté négocie.",
  },
  {
    type: 'comparison-table',
    title: 'Négocier ne dégrade pas votre image : le silence et l’ultimatum, si',
    columns: ['Attitude du candidat', 'Ce que lit le recruteur', 'Effet sur l\'offre et la relation'],
    rows: [
      ['Silence complet : accepte à chaud, sans question', "« Il ne connaît pas sa valeur, ou il n'a pas d'alternative. »", "La marge prévue est perdue ; des silences contractuels (logement, medevac) restent sans réponse."],
      ['Négociation factuelle, posée et documentée', "« Il sait défendre un dossier : il saura défendre l'organisation face à un bailleur, un fournisseur ou une autorité locale. »", "La marge est récupérée, la relation est renforcée avant même la prise de poste."],
      ['Ultimatum : « c\'est ce montant ou je refuse »', "« Il est rigide et difficile à manager. »", "La discussion se ferme ; dans la majorité des cas, une question ouverte aurait fait avancer."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les 3 familles de grilles de rémunération à croiser',
    columns: ['Type de grille', "Ce qu'il faut savoir", 'Où chercher'],
    rows: [
      ['Grilles ONU', "Publiques et structurées par grade (P1 à P5, D1-D2 pour la direction, plus la filière des administrateurs nationaux). Les barèmes et les indemnités d'ajustement de poste par lieu d'affectation sont publiés par la CFPI/ICSC : un même grade ne vaut pas le même net selon le coût de la vie local.", 'Site de la CFPI/ICSC ; offres des agences'],
      ['Grilles ONGI', "Moins uniformisées : chaque grande ONG applique en interne une grille par niveau et par pays, rarement publiée. Elle se reconstitue par recoupement : fourchette indiquée dans l'annonce (à noter en premier), plateformes de partage de salaires, anciens collègues.", "Annonce, plateformes sectorielles, réseau professionnel"],
      ['Secteur privé (comparable)', "Situe votre valeur hors secteur humanitaire, surtout en cas de bascule ou d'expertise transférable (finance, supply chain, IT, RH). Le secteur ONG applique généralement une décote assumée par rapport au privé pur.", 'Plateformes de salaires par poste et par pays'],
    ],
  },
  {
    type: 'concept',
    title: 'Lire une grille ONU : salaire de base et ajustement de poste',
    body: "Le salaire de base d'un grade est le même partout ; ce qui change, c'est l'indemnité d'ajustement de poste (post adjustment), publiée par lieu d'affectation et exprimée en pourcentage du salaire de base net. C'est elle qui traduit le coût de la vie local : un même P-3 ne reçoit pas le même net à deux endroits différents.",
    table: {
      columns: ['Élément', 'Comment le lire', 'Exemple fictif (poste P-3, « Pays X »)'],
      rows: [
        ['Salaire de base net mensuel', 'Barème annuel publié par grade et échelon, divisé par 12', '3 000 USD'],
        ["Multiplicateur d'ajustement de poste", "Pourcentage propre au lieu d'affectation, publié par la CFPI/ICSC", '40 %'],
        ['Net mensuel à comparer', 'Base nette × (1 + multiplicateur ÷ 100)', '3 000 × 1,40 = 4 200 USD'],
        ['Autres éléments', 'Allocations pour personnes à charge, prime de mobilité ou de difficulté : à ajouter séparément, si elles s’appliquent', 'Non comptés ici'],
      ],
    },
    tip: "Les chiffres ci-dessus sont fictifs : relevez toujours le barème et le multiplicateur en vigueur à la date de votre recherche, et notez cette date dans la grille.",
    pitfall: "Comparer le salaire de base d'un grade ONU à un net ONGI : sans l'ajustement de poste, vous sous-évaluez la référence ONU de plusieurs centaines d'USD par mois.",
  },
  {
    type: 'concept',
    title: 'Reconstituer une grille ONGI : trois sources, un recoupement',
    body: "La grille d'une ONG internationale se reconstitue par recoupement, du plus fiable au moins fiable. Aucune source n'est suffisante seule : c'est la convergence de deux ou trois sources qui donne une référence défendable.",
    table: {
      columns: ['Source', 'Fiabilité', 'Comment l\'exploiter', 'Limite'],
      rows: [
        ["Annonce du poste avec fourchette", 'Haute pour cette organisation', "Notez la fourchette en premier, avant toute autre recherche ; retenez le milieu et gardez les bornes en commentaire", "Fourchette parfois large (« selon expérience »)"],
        ['Réseau : anciens collègues, alumni, groupes sectoriels', 'Haute si le poste est comparable', "Demandez une fourchette pour un poste comparable, pas le salaire d'une personne", "Un seul témoignage ne suffit pas ; date à noter"],
        ['Plateformes de partage de salaires du secteur', 'Moyenne', 'Filtrez par intitulé, pays et type d\'organisation ; ignorez les saisies isolées', 'Échantillons petits, données déclaratives'],
      ],
    },
    tip: "Une question directe et discrète posée à un ancien collègue ayant occupé un poste comparable vaut souvent mieux que dix recherches en ligne.",
  },
  {
    type: 'concept',
    title: 'Comparer ce qui est comparable : net, brut, devise et logement',
    body: "Deux chiffres ne se comparent que s'ils sont exprimés de la même façon. Avant d'écrire une référence dans la grille, ramenez-la à un net mensuel, dans une seule devise, en notant si le logement est inclus. La valeur réelle d'une offre n'est pas son salaire : c'est ce qu'il vous reste après les coûts que l'employeur ne prend pas en charge.",
    table: {
      columns: ['À contrôler', 'Règle de conversion', 'Exemple'],
      rows: [
        ['Brut ou net', "Demandez le net après cotisations ; sinon retranchez le taux de retenue indiqué par la référence", 'Brut 3 400, retenue 15 % → 3 400 × 0,85 = 2 890 net'],
        ['Annuel ou mensuel', 'Divisez par le nombre de mois de salaire (12, ou 13 si un 13e mois est prévu)', '39 000 annuel avec 13e mois ÷ 13 = 3 000 par mois'],
        ['Devise', 'Convertissez au taux du jour et notez la date', '1 200 000 FC à 2 800 FC par USD = 429 USD (taux fictif)'],
        ['Logement', "Si inclus, calculez l'équivalent hors logement en ajoutant le loyer estimé", '2 800 avec logement + 450 de loyer = 3 250 équivalent'],
      ],
    },
    result: "Joël compare ainsi une offre à 2 500 USD sans logement et une référence à 2 800 USD avec logement fourni : la seconde vaut en réalité 3 250 USD, soit 750 USD de plus par mois.",
  },
  {
    type: 'checklist',
    title: "Ce qu'il faut vérifier dans un contrat, au-delà du salaire",
    items: [
      "Logement : fourni par l'employeur, indemnité forfaitaire, ou aucune prise en charge ? Un salaire plus bas avec logement pris en charge en zone chère peut valoir davantage qu'un salaire plus haut sans logement.",
      "Assurance santé et évacuation médicale (medevac) : plafond de couverture, exclusions, famille accompagnante couverte ou non. En poste isolé, c'est une clause qui conditionne votre sécurité.",
      "R&R (Rest & Recuperation) : fréquence exacte (souvent toutes les 6 à 8 semaines), destination couverte, transport réellement financé ou seulement autorisé.",
      "Billets d'avion : billet aller à la prise de poste, billets retour, billets pour la famille accompagnante. Une clause silencieuse signifie en général que ces frais restent à votre charge.",
      "Indemnités de rapatriement : conditions de prise en charge du retour et d'une éventuelle indemnité de fin de mission, en fin de contrat comme en cas de rupture anticipée.",
      "Clause de préavis : durée dans les deux sens (démission, rupture à l'initiative de l'employeur). Un silence contractuel n'est jamais une garantie implicite en votre faveur : c'est une clause à faire préciser avant signature.",
    ],
  },
  {
    type: 'concept',
    title: 'Autres clauses à repérer en lisant tout contrat',
    body: "La checklist du module couvre 8 sections, dont les 6 éléments au-delà du salaire. En pratique professionnelle, repérez aussi les clauses suivantes : elles ne figurent pas dans le template, mais elles peuvent changer la valeur ou le risque du contrat. Notez-les en questions complémentaires si elles sont absentes ou floues.",
    table: {
      columns: ['Clause', 'Ce qu\'elle règle', 'Question à se poser'],
      rows: [
        ['Durée et renouvellement', 'Date de début, durée, conditions de renouvellement', 'Le renouvellement est-il automatique, conditionné à quoi, notifié quand ?'],
        ["Période d'essai", 'Durée et conditions de rupture pendant l’essai', "Quel préavis s'applique pendant l'essai, dans les deux sens ?"],
        ['Fonctions et rattachement', 'Intitulé, hiérarchie, périmètre', "L'intitulé et le périmètre du contrat sont-ils ceux de l'offre et de l'entretien ?"],
        ['Sécurité', 'Obligations de l’employeur en contexte à risque', 'Quelles procédures de sécurité, de relocalisation ou d’évacuation sont prévues ?'],
        ['Droit applicable', 'Loi et juridiction en cas de litige', 'Quel droit s’applique et où se règle un désaccord ?'],
      ],
    },
    tip: "Ces points sont de bonnes questions complémentaires, mais ne diluez pas votre demande : classez-les après les 6 éléments de la checklist.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Benchmarking salarial', definition: 'Comparaison de votre profil et de vos prétentions à des références réelles du marché (grilles ONU, ONGI, secteur privé) avant toute négociation.' },
      { term: 'CFPI / ICSC', definition: "Commission de la Fonction Publique Internationale (International Civil Service Commission) : elle publie les barèmes de salaire ONU et les indemnités d'ajustement par lieu d'affectation." },
      { term: 'Post adjustment (ajustement de poste)', definition: "Indemnité complémentaire au salaire de base ONU, variable selon le coût de la vie du lieu d'affectation." },
      { term: 'Fourchette basse acceptable', definition: "Le montant en dessous duquel vous refusez, fixé avant l'échange à partir de vos données et de votre alternative." },
      { term: 'Fourchette haute justifiable', definition: 'Le montant le plus élevé que vous pouvez défendre avec au moins deux références ou une réalisation vérifiable.' },
      { term: 'Ancrage (négociation)', definition: 'Technique consistant à formuler en premier une fourchette haute mais justifiable, qui devient le point de référence du reste de la discussion.' },
      { term: 'Alternative de repli (BATNA)', definition: "Ce que vous feriez si l'accord n'était pas trouvé : rester en poste, une autre offre, une autre candidature. Elle fixe votre vrai plancher." },
      { term: 'R&R (Rest & Recuperation)', definition: "Cycle périodique de repos hors lieu d'affectation, prévu et financé par l'employeur dans les postes en contexte difficile ou isolé." },
      { term: 'Medevac (évacuation médicale)', definition: "Prise en charge de l'évacuation d'urgence vers une structure de soins adaptée, en cas d'incident médical grave ne pouvant être traité sur place." },
      { term: 'Avenant', definition: "Document écrit, signé des deux parties, qui modifie ou complète un contrat : la forme la plus solide pour acter une clarification obtenue." },
    ],
  },
  {
    type: 'concept',
    title: "Les principes d'une négociation respectueuse et efficace",
    body: "Quatre principes suffisent, et ils se traduisent en phrases précises. Ils s'appliquent à l'oral comme à l'écrit.",
    table: {
      columns: ['Principe', 'Ce que cela veut dire', 'Phrase à dire', 'Phrase à éviter'],
      rows: [
        ['Écouter d\'abord', 'Poser une question ouverte avant tout chiffre', "« Quelle flexibilité budgétaire existe-t-il sur ce poste ? »", "« Il me faut au moins 20 % de plus. »"],
        ['Ancrer sur des données', 'Appuyer le chiffre sur une référence nommée', "« D'après les grilles observées pour un poste comparable à ce niveau et dans cette zone… »", "« Je pense que je vaux plus. »"],
        ['Relier à une réalisation', 'Justifier le haut de la fourchette par un fait', "« Compte tenu de [résultat chiffré directement pertinent]… »", "« J'ai beaucoup d'expérience. »"],
        ['Rester ouvert', 'Traiter les conditions comme des clarifications', "« Pourriez-vous me préciser ces deux points ? »", "« Sans le logement, je refuse l'offre. »"],
      ],
    },
    tip: "Après avoir annoncé votre chiffre, taisez-vous : le premier qui comble le silence concède souvent du terrain.",
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « Merci, c’est d’accord » : 10 minutes, 5 400 USD',
    scenario: "Mireille, coordinatrice de projet, reçoit un appel du RH d'une ONG internationale : poste de coordination en contrat de 12 mois renouvelable, salaire net de 3 100 USD, « avantages selon la politique de l'organisation ». Heureuse de l'offre après 5 mois de recherche, elle répond à chaud : « Avec plaisir, merci ! » Elle signe le contrat reçu le lendemain sans le lire en entier.",
    steps: [
      { title: 'Ce que Mireille a fait', body: "Elle a accepté un montant sans référence, avant d'avoir regardé une grille, et signé un contrat sans lire les clauses logement, medevac et R&R. Aucune question n'a été posée par écrit." },
      { title: 'Ce qu\'elle découvre en poste', body: "Le logement est à sa charge (650 USD par mois), le R&R est « autorisé » mais non financé, la couverture medevac n'est pas détaillée. Le recruteur avait une marge prévue ; une collègue arrivée le même mois a obtenu une indemnité de logement." },
      { title: 'Le coût', body: "Loyer : 650 × 12 = 7 800 USD ; R&R non financés : 6 voyages par an environ à 150 USD = 900 USD. Pour moins d'une heure de préparation, une collègue a économisé près de 8 700 USD sur la première année." },
    ],
    result: "Rien n'était caché : tout était silencieux. Ce module vous donne la méthode pour remplir ces silences avant de signer, pas après.",
  },
  {
    type: 'concept',
    title: 'La méthode : 9 procédures, dans cet ordre',
    body: "Chaque procédure produit l'entrée de la suivante. Comptez environ 12 heures réparties de la réception de l'offre à la signature, dont 5 à 6 heures avant votre premier échange de négociation. Ne sautez pas d'étape : négocier avant d'avoir benchmarké, c'est lancer un chiffre au hasard ; signer avant d'avoir lu avec la checklist, c'est accepter des silences.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée indicative'],
      rows: [
        ["1. Réceptionner l'offre et gagner du délai", 'Appel ou lettre d\'offre', 'Fiche de réception, message de délai, dossier ouvert', '45 min'],
        ['2. Benchmarking salarial', 'Annonce, barèmes, réseau, plateformes', 'Onglet « Benchmarking » : références et offre saisies', '2 h'],
        ['3. Fourchette et écart', 'Références, plancher du module 01', 'Fourchette basse et haute, statut lu, carte de négociation', '1 h'],
        ['4. Argumentaire', 'Benchmark, réalisations, offre', 'Onglet « Points de négociation » complété', '1 h 30'],
        ["5. Échange de négociation", 'Carte et argumentaire', 'Script, compte rendu, confirmation écrite demandée', '45 min'],
        ['6. Contre-offre ou refus', 'Réponse de l\'employeur', 'Note de décision chiffrée', '1 h'],
        ['7. Lecture du contrat', 'Projet de contrat', 'Checklist complétée, questions notées', '2 h'],
        ['8. Questions et réponses écrites', 'Questions de la checklist', 'Courriel envoyé, réponses écrites reportées', '1 h'],
        ['9. Signature et trace', 'Contrat final, échanges', 'Contrat signé, dossier de trace complet', '45 min'],
      ],
    },
    tip: "Joël a bloqué dans son agenda les créneaux du mardi 26 janvier (19 h–21 h) et du mercredi 27 (7 h 30–8 h 30, puis 19 h–21 h 15) dès l'appel du lundi : un délai non planifié se perd.",
  },

  // ──────── PROCÉDURE 1 — RÉCEPTIONNER L'OFFRE ET GAGNER DU DÉLAI (4 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: "Recevoir l'offre sans réagir et remplir la fiche de réception",
    intro: "Pourquoi : une offre reçue par téléphone s'oublie à moitié dans l'heure qui suit, et chaque mot compte plus tard. Avant toute réponse, vous capturez les faits. Entrées : l'appel du recruteur ou la lettre d'offre. Durée : 15 minutes, pendant l'appel puis juste après.",
    steps: [
      {
        title: "Noter pendant l'appel, sans se prononcer",
        actions: [
          "Ayez papier et stylo ou un document ouvert dès que le recruteur annonce « nous souhaitons vous faire une offre ».",
          "Écrivez les chiffres et les mots exacts : montant, devise, net ou brut, durée, date de prise de poste, formules comme « selon la politique de l'organisation ».",
          "Posez une seule question de cadrage : « Pouvez-vous me confirmer le montant et le délai de réponse, et m'envoyer l'offre par écrit ? »",
          "Ne dites ni « oui », ni « c'est un peu bas » : vous n'avez encore aucune donnée.",
        ],
      },
      {
        title: 'Remplir la fiche de réception (8 rubriques)',
        actions: [
          "Dans un document texte ou une feuille Excel, créez une fiche à 8 rubriques : date et canal ; émetteur ; poste et rattachement ; rémunération ; durée et prise de poste ; avantages cités ; silences ; délai demandé.",
          "Recopiez la lettre d'offre rubrique par rubrique dès qu'elle arrive.",
          "Dans « silences », listez chacun des 6 éléments du contrat qui ne sont pas écrits : logement, santé et medevac, R&R, billets, rapatriement, préavis.",
        ],
      },
      {
        title: "Comparer l'offre écrite à l'offre orale",
        actions: [
          "Vérifiez que chaque chiffre entendu est dans la lettre ; notez toute différence.",
          "Si la lettre n'est pas arrivée, demandez-la par courriel avant toute réponse : une offre uniquement orale ne se négocie pas.",
        ],
      },
    ],
    example: {
      title: "Fiche de réception de Joël — lundi 25/01/2027",
      lines: [
        "Date et canal : appel de 15 h 05 de M. Patrick Lemaire (RH régional d'ISKI), lettre d'offre PDF reçue à 15 h 40.",
        "Poste : Responsable MEAL (MEAL Manager), Bukavu, rattaché à Mme Odette Mbuyi, Directrice des programmes.",
        "Rémunération : 2 500 USD net par mois, en USD.",
        "Durée : 12 mois renouvelable ; prise de poste souhaitée le lundi 01/03/2027.",
        "Avantages cités : « selon la politique de l'organisation » ; assurance santé « standard » sans plafond ; R&R « selon disponibilité budgétaire ».",
        "Silences : logement, plafond d'assurance et medevac, financement du R&R, billets et déménagement, rapatriement, préavis.",
        "Délai demandé : réponse sous 48 h, soit mercredi 27/01 à 15 h.",
      ],
    },
    result: "Une fiche d'une page qui répond à : que m'a-t-on proposé exactement, par quel canal, et qu'est-ce qui n'est pas écrit ? Vous avez 7 silences listés, avant toute décision.",
    pitfall: "Annoncer une réaction (« c'est un peu bas ») pendant l'appel : un chiffre ou un jugement lancé à chaud devient le point d'ancrage de tout l'échange suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Remercier et demander un délai de réflexion',
    intro: "Pourquoi : un délai demandé poliment n'est jamais perçu négativement par un recruteur expérimenté ; c'est le signal que vous traitez la décision sérieusement. Entrée : la fiche de réception. Durée : 10 minutes, dans l'heure qui suit l'appel.",
    steps: [
      {
        title: 'Formuler la réponse en 4 phrases',
        actions: [
          "Phrase 1 : le remerciement sincère et l'intérêt pour le poste.",
          "Phrase 2 : l'annonce que vous traitez l'offre avec sérieux et que quelques points restent à clarifier (nommez-en deux au plus, par exemple le logement et la couverture santé).",
          "Phrase 3 : la demande de délai avec une date et une heure précises, entre 24 et 72 h.",
          "Phrase 4 : l'engagement de revenir à cette heure-là avec une réponse.",
        ],
      },
      {
        title: 'Choisir le canal',
        actions: [
          "Si le recruteur a demandé une réponse sous 48 h par téléphone, rappelez-le ou répondez par courriel avec un résumé : l'écrit protège.",
          "Envoyez le message le jour même : un silence de 24 h après une offre inquiète.",
        ],
      },
      {
        title: 'Relire avant envoi',
        actions: [
          "Vérifiez : aucun chiffre, aucune condition, aucun refus ; un seul message court.",
          "Gardez une copie dans le dossier « 01_Offre-recue ».",
        ],
      },
    ],
    example: {
      title: "Message de Joël — lundi 25/01/2027, 17 h, à M. Lemaire",
      lines: [
        "Objet : Offre de Responsable MEAL à Bukavu — merci et délai de réflexion",
        "Monsieur Lemaire, merci pour votre appel et pour cette offre : je suis très intéressé par le poste de Responsable MEAL à Bukavu.",
        "J'ai bien reçu la lettre d'offre. Je souhaite l'étudier avec le sérieux qu'elle mérite ; quelques points restent à clarifier, notamment le logement et la couverture santé.",
        "Pourriez-vous m'accorder un délai jusqu'au jeudi 28 janvier à 12 h ? Je vous reviendrai à cette heure-là avec ma réponse.",
        "Bien cordialement, Joël Kabeya",
        "Réponse de M. Lemaire à 18 h 10 : « Pas de problème, jeudi 12 h. Je suis disponible pour un appel jeudi matin. »",
      ],
    },
    result: "Un délai écrit, daté, accepté par le recruteur, et l'ouverture d'un appel le jeudi matin. Joël a obtenu 69 heures, sans avoir prononcé un chiffre.",
    tip: "Proposez vous-même une date et une heure : un délai flou (« quelques jours ») invite le recruteur à le raccourcir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Négocier le délai quand il est trop court et planifier le travail',
    intro: "Pourquoi : un délai de 24 à 48 h se négocie presque toujours ; céder à la pression pour ne pas « déranger » conduit à accepter une offre non vérifiée. Entrées : la date limite du recruteur et la liste des tâches à faire avant l'échange.",
    steps: [
      {
        title: 'Estimer le travail nécessaire',
        actions: [
          "Listez les tâches avant le premier échange : benchmarking (2 h), fourchette (1 h), argumentaire (1 h 30), répétition (45 min).",
          "Additionnez : environ 5 h 15. C'est la durée minimale de votre délai, jours ouvrables compris.",
        ],
      },
      {
        title: 'Justifier un délai plus long si nécessaire',
        actions: [
          "Si le recruteur propose 24 h, répondez : « Pour traiter cette décision sérieusement, un délai de 72 h me permettrait de vous répondre sans réserve ; est-ce possible ? »",
          "Appuyez la demande sur une raison légitime : décision familiale, vérification d'un contrat en cours, consultation d'un conseil.",
          "Ne justifiez pas par une autre offre inventée : cela se vérifie.",
        ],
      },
      {
        title: "Bloquer les créneaux dans l'agenda",
        actions: [
          "Créez une réunion personnelle par tâche, avec le nom de la tâche en titre.",
          "Prévoyez un créneau tampon de 30 minutes la veille de l'échange, et laissez le dernier créneau libre pour la répétition.",
        ],
      },
    ],
    table: {
      columns: ['Créneau de Joël', 'Tâche', 'Durée', 'Procédure'],
      rows: [
        ['mar. 26/01, 19 h – 21 h', 'Benchmarking : annonce, barème ONU, message au réseau, privé', '2 h', '2'],
        ['mer. 27/01, 7 h 30 – 8 h 30', "Fourchette basse et haute, lecture de l'écart, carte de négociation", '1 h', '3'],
        ['mer. 27/01, 19 h – 20 h 30', 'Onglet « Points de négociation » : arguments et priorités', '1 h 30', '4'],
        ['mer. 27/01, 20 h 30 – 21 h 15', "Répétition à voix haute du script avec Chantal Mwamba", '45 min', '5'],
        ['jeu. 28/01, 11 h', 'Appel de négociation avec M. Lemaire', '25 min', '5'],
      ],
    },
    result: "Le délai est calibré sur le travail, pas sur l'angoisse : Joël dispose de 5 h 15 de préparation réparties sur 2 jours, avant l'appel du jeudi 11 h.",
    pitfall: "Accepter un délai de 24 h sans le discuter, par peur de « décevoir » : un délai raisonnable ne fait jamais perdre une offre solide.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Ouvrir le dossier de négociation et le carnet d\'échanges',
    intro: "Pourquoi : à la fin, un accord n'existe que s'il est écrit et retrouvable. Vous créez dès maintenant la structure qui recevra chaque message, chaque document et chaque compte rendu d'appel. Entrée : la fiche de réception. Durée : 10 minutes.",
    steps: [
      {
        title: 'Créer le dossier',
        actions: [
          "Créez un dossier « Négociation ISKI 2027 » (adaptez le nom à votre offre) sur votre ordinateur et sur un second support.",
          "Créez 5 sous-dossiers : 01_Offre-recue, 02_Benchmark, 03_Echanges-ecrits, 04_Contrat, 05_Notes-appels.",
          "Enregistrez en PDF la lettre d'offre, le texte de l'annonce et votre message de délai.",
        ],
      },
      {
        title: "Ouvrir le carnet d'échanges",
        actions: [
          "Dans un tableau Excel ou Word, créez 5 colonnes : Date et heure ; Canal ; Interlocuteur ; Ce qui a été dit ou promis ; Preuve écrite (oui/non, fichier).",
          "Saisissez la première ligne : l'appel d'offre et votre message de délai.",
          "Complétez ce carnet dans l'heure qui suit chaque échange, jamais le lendemain.",
        ],
      },
      {
        title: 'Définir la règle de nommage',
        actions: [
          "Nommez chaque fichier « AAAA-MM-JJ_Expediteur_Objet » (exemple : « 2027-01-25_Lemaire_Lettre-offre.pdf »).",
          "Chaque promesse orale reçue est transformée dans l'heure en une ligne du carnet, avec la mention « à confirmer par écrit ».",
        ],
      },
    ],
    example: {
      title: "Carnet d'échanges de Joël — première ligne",
      lines: [
        "25/01/2027 15 h 05 | Téléphone | M. Lemaire | Offre de 2 500 USD net, 12 mois renouvelable, prise de poste le 01/03/2027, réponse sous 48 h | Oui : lettre d'offre reçue à 15 h 40 (2027-01-25_Lemaire_Lettre-offre.pdf).",
        "25/01/2027 17 h | Courriel | M. Lemaire | Délai accordé jusqu'au jeudi 28/01 à 12 h ; appel possible jeudi matin | Oui : réponse reçue à 18 h 10.",
      ],
    },
    result: "Une arborescence de 5 dossiers et un carnet de 2 lignes. À chaque promesse orale, une ligne « à confirmer par écrit » : c'est votre garde-fou pour la suite.",
    tip: "Ce dossier vous servira en cas de désaccord sur l'interprétation d'une clause, et pour toute négociation future — la vôtre ou celle d'un collègue que vous conseillerez.",
  },

  // ───────────── PROCÉDURE 2 — BENCHMARKING SALARIAL (7 étapes) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir la grille de benchmarking et repérer ses trois sections',
    intro: "Le classeur grille-benchmarking-salarial-negociation.xlsx contient 2 onglets : « Benchmarking » (3 sections) et « Points de négociation ». Il transforme la négociation d'un pari en démarche argumentée. Entrée : le dossier ouvert à la Procédure 1. Durée : 10 minutes.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          "Ouvrez le fichier depuis le dossier 04-templates du module.",
          "Faites Fichier > Enregistrer sous et nommez-le « NOM_Prenom_benchmark_AAAA-MM.xlsx » dans « 02_Benchmark ».",
          "Ne travaillez jamais dans l'original : il vous servira pour la prochaine offre.",
        ],
      },
      {
        title: "Repérer les 3 sections de l'onglet « Benchmarking »",
        actions: [
          "Section 1 « Références de marché collectées » : en-têtes ligne 4 ; vous saisissez de la ligne 5 à la ligne 12 (8 lignes). Colonnes A à G : Source de référence, Poste / Niveau (grade), Zone géographique, Salaire mensuel net (référence), Devise, Logement inclus (Oui/Non/Inconnu), Date de la recherche / lien source.",
          "Section 2 « Mon offre reçue » : en-têtes ligne 15 ; vous saisissez la ligne 16. Colonnes A à F : Poste proposé, Zone géographique, Salaire mensuel net proposé, Devise, Logement inclus, Date de l'offre.",
          "Section 3 « Fourchette cible & analyse d'écart » : en-têtes ligne 19 ; vous saisissez uniquement A20 (fourchette basse acceptable) et B20 (fourchette haute justifiable). C20 à G20 se calculent seules.",
        ],
      },
      {
        title: 'Remplacer les exemples du template',
        actions: [
          "Les lignes 5 à 8, la ligne 16 et les cellules A20 et B20 contiennent des exemples (« Pays X »). Remplacez-les un par un par vos données.",
          "Ne modifiez ni les formules C20 à G20 ni la légende ligne 22.",
        ],
      },
    ],
    example: {
      title: 'Ce que contient le template avant que Joël ne le complète',
      lines: [
        "Lignes 5 à 8 : 4 références d'exemple (ONU 4 200, ONGI 3 600, annonce 3 400, privé 4 800 USD, « Pays X »).",
        "Ligne 16 : offre d'exemple, 3 400 USD, « Non précisé », 2026-08-10.",
        "A20 = 3 600 ; B20 = 4 200 ; C20 à G20 calculent à partir de ces exemples.",
        "Joël commence par vider les lignes 5 à 8 et la ligne 16, puis saisit ses propres données.",
      ],
    },
    result: "Votre copie est enregistrée, les trois sections sont repérées et vous savez dans quelles cellules vous écrivez, et dans lesquelles vous ne touchez à rien.",
    pitfall: "Laisser une ligne d'exemple en place : la formule de la cellule C20 calcule la moyenne de D5 à D12, donc un exemple oublié fausse silencieusement tous vos écarts.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: "Noter en premier la fourchette de l'annonce du poste",
    intro: "Pourquoi : c'est la référence la plus directe, celle de l'organisation qui vous recrute, et la source de référence à vérifier en premier. Entrée : l'annonce du poste, enregistrée hors ligne. Durée : 10 minutes.",
    steps: [
      {
        title: "Chercher la fourchette dans l'annonce",
        actions: [
          "Ouvrez l'annonce enregistrée en PDF et cherchez les mots « salaire », « fourchette », « grade », « grille », « net », « selon expérience ».",
          "Notez si la fourchette est brute ou nette, mensuelle ou annuelle, avec ou sans avantages.",
          "Si l'annonce n'indique rien, laissez la ligne vide et passez aux autres sources : ne la remplissez pas avec une estimation.",
        ],
      },
      {
        title: 'Calculer la valeur à saisir',
        actions: [
          "Si l'annonce donne une fourchette, calculez le milieu : (minimum + maximum) ÷ 2.",
          "Notez les deux bornes dans la colonne G pour garder la trace de l'information d'origine.",
        ],
      },
      {
        title: 'Saisir la ligne 7 (ou la première ligne libre)',
        actions: [
          "Colonne A : « Annonce du poste (fourchette indiquée) » ; B : poste et niveau ; C : zone.",
          "Colonne D : le nombre seul, sans « USD » ni espace ; E : devise ; F : Oui, Non ou Inconnu.",
          "Colonne G : date de la recherche, puis un tiret, puis la source et les bornes.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Saisie de Joël (ligne 7)'],
      rows: [
        ['A — Source de référence', 'Annonce du poste (fourchette indiquée)'],
        ['B — Poste / Niveau (grade)', 'Responsable MEAL (MEAL Manager), ONG internationale santé'],
        ['C — Zone géographique', 'Bukavu (RDC)'],
        ['D — Salaire mensuel net (référence)', '2700'],
        ['E — Devise', 'USD'],
        ['F — Logement inclus', 'Non précisé'],
        ['G — Date de la recherche / lien source', '2027-01-26 — annonce ReliefWeb ISKI, fourchette 2 400 à 3 000 net, milieu retenu'],
      ],
    },
    result: "Une première référence saisie. Joël voit déjà que l'offre de 2 500 USD se situe dans le bas de la fourchette publiée par ISKI elle-même (2 400 à 3 000).",
    pitfall: "Saisir « 2 700 USD » ou « 2,7 k » dans la colonne D : un texte n'est pas compté par la formule MOYENNE, et la ligne disparaît du calcul sans aucun message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Relever la référence ONU : barème CFPI/ICSC et ajustement de poste',
    intro: "Pourquoi : les barèmes ONU sont publics, structurés par grade, et servent de repère solide pour tout poste de niveau comparable, même hors ONU. Entrées : le niveau du poste proposé et la date du jour. Durée : 30 minutes.",
    steps: [
      {
        title: 'Choisir le grade comparable',
        actions: [
          "Comparez les responsabilités de l'offre (encadrement, budget, périmètre) aux postes ONU de même niveau, sur Impactpool ou les portails des agences.",
          "Repères courants à vérifier dans chaque offre : P-2 ≈ 2 ans d'expérience avec un master, P-3 ≈ 5 ans, P-4 ≈ 7 ans ; pour un ressortissant du pays, les postes d'administrateur national (NO-A à NO-D).",
          "Notez le grade retenu et la raison du rapprochement.",
        ],
      },
      {
        title: 'Relever le barème',
        actions: [
          "Ouvrez le site de la CFPI/ICSC et cherchez le barème des salaires de la catégorie choisie.",
          "Pour un poste international (P), relevez le salaire de base net annuel de l'échelon vraisemblable, divisez par 12, puis relevez le multiplicateur d'ajustement de poste du lieu d'affectation et calculez : base nette × (1 + multiplicateur ÷ 100).",
          "Pour un poste national (NO), relevez le barème propre au pays ; il ne comporte pas d'ajustement de poste.",
        ],
      },
      {
        title: 'Saisir la ligne',
        actions: [
          "Colonne A : « ONU (grille CFPI/ICSC) » ; B : grade et fonction ; C : zone ; D : le net mensuel obtenu.",
          "Colonne F : « Non » si aucun logement n'est fourni dans le calcul ; colonne G : date et référence du barème utilisé.",
        ],
      },
    ],
    example: {
      title: 'Référence ONU de Joël et exemple de calcul pour un poste international',
      lines: [
        "Grade retenu : administrateur national NO-C, suivi-évaluation, car l'offre demande l'encadrement de 7 personnes et un programme de 6,2 M USD, soit un niveau d'encadrement intermédiaire (rapprochement validé sur 3 offres d'agences).",
        "Barème CFPI/ICSC du pays : 3 200 USD net mensuels (chiffre fictif) ; pas d'ajustement de poste pour un barème national.",
        "Ligne saisie : A « ONU (grille CFPI/ICSC) » ; B « Administrateur national NO-C, suivi-évaluation » ; C « Bukavu (RDC) » ; D 3200 ; E USD ; F Non ; G « 2027-01-26 — barème CFPI/ICSC administrateurs nationaux ».",
        "Pour comparaison, calcul d'un P-3 en « Pays X » (fictif) : 3 000 × (1 + 40 ÷ 100) = 4 200 USD, la valeur de la ligne 5 du template.",
      ],
    },
    result: "Une deuxième référence, publique et datée, plus élevée que l'annonce : 3 200 contre 2 700.",
    pitfall: "Retenir le salaire de base ONU sans l'ajustement de poste, ou comparer un barème national (NO) à un barème international (P) : vous obtenez une référence fausse de plusieurs centaines d'USD.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Reconstituer la référence ONGI par le réseau et les plateformes',
    intro: "Pourquoi : la grille d'une ONG internationale n'est presque jamais publiée ; elle se reconstitue par recoupement. Le réseau professionnel est souvent la source la plus fiable et la plus à jour. Entrées : 2 ou 3 contacts ayant occupé un poste comparable. Durée : 30 minutes de préparation, réponse sous 24 h.",
    steps: [
      {
        title: 'Choisir les contacts',
        actions: [
          "Listez 3 personnes ayant occupé un poste comparable dans une ONG internationale : ancien collègue, alumni, mentor, membre d'un groupe sectoriel.",
          "Écartez toute personne qui travaille chez l'employeur qui vous fait l'offre : ne mettez personne en difficulté.",
        ],
      },
      {
        title: 'Poser la question en 4 phrases',
        actions: [
          "Phrase 1 : le contexte, sans citer l'organisation si le contact ne la connaît pas.",
          "Phrase 2 : la demande d'une fourchette pour un poste comparable (intitulé, zone, niveau), pas d'un salaire personnel.",
          "Phrase 3 : la précision demandée : net ou brut, logement inclus ou non.",
          "Phrase 4 : un remerciement et la promesse de partager vos propres observations en retour.",
        ],
      },
      {
        title: 'Consulter une plateforme et saisir',
        actions: [
          "Sur une plateforme de partage de salaires du secteur, filtrez par intitulé, pays et type d'organisation, et ignorez les saisies isolées.",
          "Saisissez dans la grille la valeur nette mensuelle, le logement (Oui, Non, Inconnu) et la source, sans nom complet si le fichier peut être partagé.",
        ],
      },
    ],
    example: {
      title: 'Message de Joël à Jean-Paul Mukendi (ancien MEAL Manager, son mentor) et réponse',
      lines: [
        "Message du 26/01/2027, 19 h 30 : « Bonjour Jean-Paul, je prépare une réponse à une offre de MEAL Manager à Bukavu dans une ONG internationale de santé. Quelle fourchette de salaire net mensuel observes-tu pour ce type de poste dans la zone ? Précise si le logement est fourni. Je te dirai ce que je trouve en retour. Merci ! »",
        "Réponse du 26/01/2027, 21 h 05 : « Autour de 2 800 USD net par mois, logement fourni (maison partagée) ; sans logement, ajoute 400 à 500 USD de loyer. »",
        "Ligne saisie : A « ONGI (réseau / plateforme salaires) » ; B « MEAL Manager, ONG internationale santé » ; C « Bukavu (RDC) » ; D 2800 ; E USD ; F « Oui (logement fourni) » ; G « 2027-01-26 — témoin du réseau, poste comparable ».",
      ],
    },
    result: "Une troisième référence, dont la colonne F signale que le logement est fourni : vous en tiendrez compte à l'étape 6, lors du passage au comparable.",
    tip: "Une seule source ONGI ne suffit pas : si vous ne la recoupez pas, indiquez-le dans la colonne G, et cherchez une deuxième valeur avant l'appel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Relever la référence du secteur privé comparable',
    intro: "Pourquoi : elle situe votre valeur hors secteur humanitaire. Elle sert de borne haute réaliste et d'argument si votre expertise est transférable, mais le secteur ONG applique en général une décote assumée. Entrées : la famille de métier de l'offre. Durée : 20 minutes.",
    steps: [
      {
        title: 'Choisir le poste comparable',
        actions: [
          "Cherchez l'intitulé du secteur privé qui correspond à votre fonction : pour un Responsable MEAL, un responsable suivi-évaluation ou chef de projet data en cabinet de conseil.",
          "Gardez la même zone géographique ou une zone régionale proche, et un niveau d'encadrement comparable.",
        ],
      },
      {
        title: 'Relever la valeur sur une plateforme de salaires',
        actions: [
          "Utilisez une plateforme de salaires par poste et par pays ; notez la médiane affichée plutôt que le maximum.",
          "Relevez si la valeur est brute ou nette, et mensuelle ou annuelle : vous la convertirez à l'étape 6.",
        ],
      },
      {
        title: 'Saisir avec la décote en tête',
        actions: [
          "Saisissez la valeur nette mensuelle en colonne D, la zone régionale en colonne C et « Non » en colonne F sauf indication contraire.",
          "Ne retenez cette référence ni comme cible ni comme argument central : elle encadre le haut de la fourchette.",
        ],
      },
    ],
    example: {
      title: 'Référence privée de Joël, avant conversion',
      lines: [
        "Plateforme de salaires privé : « Responsable suivi-évaluation, cabinet de conseil, Grands Lacs », médiane brute 4 470 USD par mois.",
        "Retenue estimée par la plateforme : 15 % ; conversion en net à l'étape 6 : 4 470 × 0,85 = 3 800 USD (valeur arrondie).",
        "Ligne saisie après conversion : A « Secteur privé (comparable) » ; B « Responsable suivi-évaluation, cabinet de conseil » ; C « Régional (Grands Lacs) » ; D 3800 ; E USD ; F Non ; G « 2027-01-27 — plateforme de salaires secteur privé ».",
      ],
    },
    result: "Quatre références sont saisies (lignes 5 à 8) : annonce, ONU, ONGI, privé. Le minimum exigé par la méthode, deux sources parmi les trois familles, est dépassé.",
    pitfall: "Prendre la valeur privée comme prétention : un candidat qui demande le niveau du privé à une ONG, sans reconnaître la décote du secteur, perd en crédibilité d'emblée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Rendre les références comparables : net, devise, logement',
    intro: "Pourquoi : la grille calcule une moyenne : si une référence est brute, annuelle ou avec logement, la moyenne est fausse. Vous contrôlez chaque ligne avant de la laisser compter. Entrée : les 4 lignes de la section 1.",
    steps: [
      {
        title: 'Contrôler chaque ligne de la section 1',
        actions: [
          "Net : si une référence est brute, appliquez la retenue (brut × (1 − taux)) et notez la conversion en colonne G.",
          "Période : si elle est annuelle, divisez par 12, ou par 13 s'il existe un 13e mois.",
          "Devise : convertissez au taux du jour et notez la date ; la colonne E ne contient que la devise finale.",
        ],
      },
      {
        title: 'Traiter le logement',
        actions: [
          "Si une référence inclut le logement (colonne F « Oui »), gardez la valeur en D, mais calculez à part l'équivalent hors logement : valeur + loyer mensuel estimé.",
          "Estimez le loyer sur 3 annonces ou contacts locaux et retenez la médiane.",
        ],
      },
      {
        title: 'Noter les équivalents à part',
        actions: [
          "Écrivez les équivalents sur une feuille de brouillon, pas dans la colonne D : vous les utiliserez à l'étape 3 de la Procédure 3 pour fixer la fourchette haute.",
        ],
      },
    ],
    example: {
      title: 'Contrôle des 4 références de Joël',
      lines: [
        "Annonce : net mensuel en USD, logement non précisé → 2 700, aucune conversion.",
        "ONU NO-C : net mensuel en USD, sans logement → 3 200, aucune conversion.",
        "ONGI réseau : net mensuel en USD, logement fourni → 2 800 en D ; loyer estimé sur 3 maisons visitées en ligne (400, 450, 500) : médiane 450 ; équivalent hors logement : 2 800 + 450 = 3 250.",
        "Privé : brut 4 470 → net 3 800 après retenue de 15 % ; valeur saisie en D.",
        "Valeurs en D5:D8 : 3 200 ; 2 800 ; 2 700 ; 3 800 (ordre des lignes 5, 6, 7, 8 de la grille).",
      ],
    },
    result: "Quatre valeurs nettes, mensuelles, en USD, dont une marquée « logement fourni » : vos références sont désormais comparables entre elles et avec l'offre.",
    pitfall: "Mettre l'équivalent hors logement (3 250) dans la colonne D à la place de la valeur d'origine : vous cachez au lecteur de la grille ce que la source a réellement dit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: "Saisir l'offre reçue (section 2) et lire la moyenne calculée",
    intro: "Pourquoi : la section 2 est la seule ligne que les formules comparent à vos références. Elle doit reprendre l'offre telle quelle, sans interprétation. Entrées : la fiche de réception et les 4 références saisies. Durée : 10 minutes.",
    steps: [
      {
        title: 'Saisir la ligne 16',
        actions: [
          "A16 : poste proposé ; B16 : zone géographique ; C16 : salaire mensuel net proposé (nombre seul) ; D16 : devise.",
          "E16 : logement inclus (Oui, Non ou Inconnu) ; F16 : date de l'offre au format AAAA-MM-JJ.",
          "Recopiez l'offre telle que reçue : ne l'arrondissez pas, ne l'améliorez pas.",
        ],
      },
      {
        title: 'Lire la cellule C20',
        actions: [
          "Vérifiez que C20 affiche un nombre ; s'il affiche un tiret (—), aucune valeur numérique n'a été reconnue en D5:D12.",
          "Notez que C20, libellée « médian », calcule en réalité la moyenne arithmétique (formule MOYENNE arrondie) des références D5 à D12.",
          "Pour la médiane, saisissez =MEDIAN(D5:D12) dans une cellule libre sous la légende (par exemple A24), sans toucher aux formules des colonnes marquées (auto).",
        ],
      },
      {
        title: 'Différer la lecture des écarts',
        actions: [
          "Ne lisez pas encore D20 à G20 : A20 et B20 contiennent toujours les valeurs d'exemple du template.",
          "Vous les remplacez à la Procédure 3, étape 2 et 3.",
        ],
      },
    ],
    example: {
      title: 'Section 2 de Joël et cellules lues',
      lines: [
        "A16 : Responsable MEAL (MEAL Manager) ; B16 : Bukavu (RDC) ; C16 : 2500 ; D16 : USD ; E16 : Non précisé ; F16 : 2027-01-25.",
        "C20 = ROUND(AVERAGE(2700; 2800; 3200; 3800)) = ROUND(12 500 ÷ 4) = 3 125.",
        "Médiane saisie en A24 : =MEDIAN(D5:D8) → (2 800 + 3 200) ÷ 2 = 3 000.",
        "Offre vs médiane : (3 000 − 2 500) ÷ 2 500 × 100 = 20 % ; offre vs plus basse référence (2 700) : 200 USD en dessous.",
      ],
    },
    result: "Onglet « Benchmarking » : sections 1 et 2 complètes. L'offre de Joël (2 500) est inférieure à chacune des 4 références, y compris à la plus basse, l'annonce d'ISKI elle-même (2 700 en milieu de fourchette).",
    pitfall: "Lire le libellé de C20 comme une médiane : avec une valeur extrême (par exemple une référence privée très haute), la moyenne dépasse la médiane et vous surestimez l'écart. Contrôlez les deux avant l'appel.",
  },

  // ───────────── PROCÉDURE 3 — FOURCHETTE ET LECTURE DE L'ÉCART (5 étapes) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Mesurer la dispersion des références et la position de l\'offre',
    intro: "Pourquoi : une moyenne cache la forme des données. Avant de fixer une fourchette, vous regardez la plus basse, la plus haute, la médiane et la place de l'offre. Entrée : section 1 complète et ligne 16. Durée : 10 minutes.",
    steps: [
      {
        title: 'Classer les références',
        actions: [
          "Recopiez les valeurs de D5:D8 dans l'ordre croissant sur une feuille de brouillon.",
          "Repérez la plus basse, la plus haute et l'écart entre elles.",
        ],
      },
      {
        title: 'Comparer à la moyenne et à la médiane',
        actions: [
          "Lisez C20 (moyenne) et votre cellule médiane (A24).",
          "Si moyenne et médiane diffèrent de plus de 5 %, cherchez la valeur extrême et décidez si elle doit être écartée ou expliquée.",
        ],
      },
      {
        title: "Situer l'offre en pourcentage",
        actions: [
          "Calculez (médiane − offre) ÷ offre × 100 : c'est l'écart que vous défendrez.",
          "Écrivez-le sur la fiche : il servira de première phrase d'argument.",
        ],
      },
    ],
    example: {
      title: 'Dispersion des références de Joël',
      lines: [
        "Valeurs classées : 2 700 (annonce) ; 2 800 (ONGI) ; 3 200 (ONU) ; 3 800 (privé).",
        "Plus basse : 2 700 ; plus haute : 3 800 ; amplitude : 1 100. Médiane : 3 000 ; moyenne : 3 125 (écart de 4,2 %).",
        "Offre : 2 500, inférieure à toutes les références ; écart à la médiane : (3 000 − 2 500) ÷ 2 500 × 100 = 20 %.",
        "La valeur privée (3 800) tire la moyenne vers le haut : Joël s'appuiera sur la médiane et ne citera pas le privé comme cible.",
      ],
    },
    result: "Vous savez que l'offre est sous la plus basse des 4 références, et que l'écart défendable est de 20 % par rapport à la médiane.",
    tip: "Une offre sous la plus basse des références n'est pas une offre « un peu basse » : c'est un signal fort, qui justifie une négociation sans hésitation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Fixer la fourchette basse acceptable (cellule A20)',
    intro: "Pourquoi : la fourchette basse est la limite en dessous de laquelle vous refusez ; la fixer avant l'échange évite de céder sous pression. Elle repose sur vos données et votre alternative, pas sur une humeur. Entrées : plancher du module 01, références, alternative de repli. Durée : 15 minutes.",
    steps: [
      {
        title: 'Rassembler les 3 repères',
        actions: [
          "Repère 1 : votre plancher personnel, établi au module 01 (salaire actuel + 15 %).",
          "Repère 2 : la plus basse référence crédible pour le poste, annonce comprise.",
          "Repère 3 : les surcoûts de la mobilité que l'offre ne couvre pas (double loyer, déménagement).",
        ],
      },
      {
        title: 'Calculer la fourchette basse',
        actions: [
          "Retenez le plus haut des repères 1 et 2.",
          "Ajoutez le surcoût mensuel lissé du repère 3, arrondi à la centaine.",
          "Écrivez le résultat en A20, en nombre seul, à la place de l'exemple.",
        ],
      },
      {
        title: 'Définir votre alternative de repli',
        actions: [
          "Écrivez ce que vous feriez sans accord : rester en poste, une autre offre, une candidature en cours.",
          "Notez la date et le montant de cette alternative : c'est elle qui rend votre plancher crédible.",
        ],
      },
    ],
    example: {
      title: 'Calcul de la fourchette basse de Joël',
      lines: [
        "Repère 1 : plancher du module 01 = 2 200 + 15 % = 2 530.",
        "Repère 2 : milieu de l'annonce ISKI = 2 700 (Joël a 7 ans d'expérience pour 5 exigés).",
        "Repère 3 : la famille garde le logement de Goma jusqu'en juillet (fin d'année scolaire) : double loyer d'environ 300 USD par mois pendant 5 mois = 1 500 USD, lissés sur 12 mois = 125, arrondi à 100.",
        "Calcul : max(2 530 ; 2 700) + 100 = 2 800. A20 = 2800, hors logement fourni ou indemnité.",
        "Alternative de repli : rester chez Alliance Santé Grands Lacs à 2 200 USD jusqu'à la fin de contrat en septembre 2027, avec 2 candidatures prioritaires en cours.",
      ],
    },
    result: "A20 = 2 800 : un chiffre, une formule de calcul, une alternative. Joël peut dire pourquoi il ne descendra pas en dessous.",
    pitfall: "Fixer un plancher qui vous arrange sans alternative derrière : un plancher sans alternative se renégocie dès la première relance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Fixer la fourchette haute justifiable (cellule B20)',
    intro: "Pourquoi : la fourchette haute devient votre ancrage. Elle doit pouvoir se défendre à voix haute, en une phrase, avec au moins deux références. Entrées : références comparables, équivalents hors logement, votre ancienneté et vos réalisations. Durée : 15 minutes.",
    steps: [
      {
        title: 'Appliquer la règle des deux références',
        actions: [
          "Listez les références (équivalents hors logement compris) supérieures ou égales à la valeur envisagée.",
          "Retenez la valeur la plus haute pour laquelle au moins 2 références sont à ce niveau ou au-dessus.",
        ],
      },
      {
        title: 'Ajouter la justification personnelle',
        actions: [
          "Écrivez une réalisation ou une expérience directement pertinente qui justifie le haut de la fourchette (module 01, onglet Réalisations).",
          "Comparez vos années à celles exigées par l'offre : l'écart est un argument.",
        ],
      },
      {
        title: 'Faire le test du pourquoi',
        actions: [
          "Demandez à voix haute : « Pourquoi ce chiffre ? ». Si la réponse dépasse deux phrases, abaissez-le.",
          "Saisissez le résultat en B20, en nombre seul.",
        ],
      },
    ],
    example: {
      title: 'Calcul de la fourchette haute de Joël',
      lines: [
        "Références à 3 200 ou plus : ONU NO-C 3 200 ; ONGI hors logement 3 250 (2 800 + 450) ; privé 3 800 → 3 références sur 4.",
        "Valeur retenue : 3 200 (au moins 2 références, dont une publique et une du réseau). B20 = 3200.",
        "Justification personnelle : 7 ans d'expérience pour 5 exigés ; près de 3 ans à encadrer 6 personnes ; budget MEAL de 120 000 USD exécuté à 96 %.",
        "Test du pourquoi : « Parce que le barème d'agence pour un niveau équivalent est à 3 200, que le réseau confirme 3 250 hors logement, et que j'ai 7 ans pour 5 exigés. » Deux phrases : validé.",
      ],
    },
    result: "B20 = 3 200, soit 200 USD au-dessus du haut de l'annonce ISKI : Joël pourra le défendre par deux références externes et son expérience.",
    pitfall: "Prendre pour B20 la valeur la plus haute relevée (3 800, le privé) : une prétention qui dépasse la décote assumée du secteur ONG décrédibilise tout le reste de votre argumentaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: "Lire D20, E20, F20 et G20 : le statut qui décide de négocier",
    intro: "Pourquoi : la source l'énonce clairement : c'est le chiffre calculé, pas une impression, qui doit guider votre décision de négocier ou non. Entrées : C16, A20, B20 et les références saisies. Durée : 10 minutes.",
    steps: [
      {
        title: 'Lire les 4 cellules calculées',
        actions: [
          "D20 = offre − moyenne des références (C16 − C20) ; E20 = offre − fourchette basse (C16 − A20) ; F20 = offre − fourchette haute (C16 − B20).",
          "Un nombre négatif signifie que l'offre est en dessous du repère ; un nombre positif, au-dessus.",
          "G20 affiche l'un des trois statuts selon la place de l'offre.",
        ],
      },
      {
        title: 'Interpréter le statut',
        actions: [
          "Offre < fourchette basse : « Sous la fourchette cible — négociation fortement recommandée ».",
          "Offre entre la fourchette basse et la haute : « Dans la fourchette — marge de négociation possible ».",
          "Offre ≥ fourchette haute : « Au niveau ou au-dessus de la fourchette haute » : négociez les conditions, pas le salaire.",
        ],
      },
      {
        title: 'Noter la décision',
        actions: [
          "Écrivez en une ligne sur la fiche : statut lu, écart principal en USD, décision (négocier le salaire et les conditions / négocier les conditions seulement / accepter).",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Formule du template', 'Valeur pour Joël'],
      rows: [
        ['C20 (auto)', 'Moyenne arrondie de D5:D12', '3 125'],
        ['D20 (auto)', 'C16 − C20', '2 500 − 3 125 = −625'],
        ['E20 (auto)', 'C16 − A20', '2 500 − 2 800 = −300'],
        ['F20 (auto)', 'C16 − B20', '2 500 − 3 200 = −700'],
        ['G20 (auto)', 'Offre sous A20 ?', 'Sous la fourchette cible — négociation fortement recommandée'],
      ],
    },
    result: "Décision de Joël : négocier le salaire et les conditions. L'offre est inférieure de 300 USD à sa fourchette basse, de 700 USD à sa fourchette haute et de 625 USD à la moyenne des références.",
    pitfall: "Lire seulement G20 : le statut dit « sous » ou « dans », mais ce sont D20 à F20, en USD, qui indiquent l'ordre de grandeur de ce que vous allez demander.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: "Rédiger la carte de négociation d'une page",
    intro: "Pourquoi : à l'oral, on perd ses repères. Une carte d'une page, posée devant vous pendant l'appel, rassemble les chiffres et les phrases à ne pas oublier. Entrées : A20, B20, statut, alternative de repli. Durée : 20 minutes.",
    steps: [
      {
        title: 'Écrire les 4 chiffres',
        actions: [
          "Ancrage : B20, le chiffre que vous annoncez en premier.",
          "Cible : le résultat réaliste vers lequel vous voulez converger, entre B20 et la moyenne.",
          "Plancher : A20, et la condition liée (par exemple logement pris en charge).",
          "Alternative de repli : ce que vous faites sans accord.",
        ],
      },
      {
        title: 'Écrire les 3 points non salariaux à obtenir',
        actions: [
          "Reprenez les trois sujets prioritaires hors salaire (logement, santé et medevac, R&R, par exemple).",
          "Pour chacun, écrivez la demande minimale acceptable en une phrase.",
        ],
      },
      {
        title: 'Ajouter vos 3 phrases clés',
        actions: [
          "La question ouverte d'ouverture, la phrase d'ancrage avec sa source, la demande de confirmation écrite.",
          "Posez la carte à côté de votre téléphone ou de votre écran, hors du champ de la caméra.",
        ],
      },
    ],
    example: {
      title: 'Carte de négociation de Joël — jeudi 28/01/2027, 11 h',
      lines: [
        "Ancrage : 3 200 USD net par mois. Cible : 2 950 à 3 000 net. Plancher : 2 800 net avec logement pris en charge (fourni ou indemnité d'au moins 400 USD).",
        "Alternative : rester chez Alliance Santé Grands Lacs à 2 200 USD jusqu'en septembre 2027, avec 2 candidatures prioritaires en cours.",
        "À obtenir hors salaire : (1) logement, via une indemnité ou un logement fourni ; (2) plafond de santé et medevac par écrit, famille couverte ; (3) R&R : fréquence et transport financé.",
        "Phrase 1 : « Quelle flexibilité budgétaire existe-t-il sur ce poste ? » Phrase 2 : « D'après les références observées, entre 2 800 et 3 200. » Phrase 3 : « Pourriez-vous me confirmer cela par écrit ? »",
      ],
    },
    result: "Une carte d'une page qui contient vos 4 chiffres, vos 3 demandes hors salaire et vos 3 phrases clés. Elle est imprimée ou affichée avant le jeudi 28/01 à 11 h.",
    tip: "Écrivez la cible avant l'appel, pas pendant : une cible improvisée se rapproche toujours du chiffre que le recruteur vient d'annoncer.",
  },

  // ───────────── PROCÉDURE 4 — ARGUMENTAIRE (5 étapes) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: "Ouvrir l'onglet « Points de négociation » et lire ses exemples",
    intro: "Pourquoi : cet onglet vous force à préparer vos arguments à l'avance, poste par poste, plutôt que de les improviser en plein échange. Un argument par élément, préparé avant l'échange et jamais improvisé pendant. Entrée : la grille ouverte à la Procédure 2. Durée : 10 minutes.",
    steps: [
      {
        title: "Repérer la structure de l'onglet",
        actions: [
          "Cliquez sur l'onglet « Points de négociation ».",
          "En-têtes ligne 4 : A « Élément à négocier » ; B « Argument factuel (donnée, réalisation, contrainte légitime) » ; C « Priorité (Haute/Moyenne/Basse) » ; D « Statut (À préparer/Négocié/Accepté) ».",
          "Les lignes 5 à 10 contiennent 6 exemples ; les lignes 11 à 17 sont libres ; la légende est en ligne 18.",
        ],
      },
      {
        title: 'Lire les 6 exemples',
        actions: [
          "Salaire de base ; Logement ; Assurance santé / évacuation médicale ; R&R (Rest & Recuperation) ; Billets d'avion ; Clause de préavis.",
          "Notez que chaque argument cite un fait observable : un chiffre, une absence dans l'offre, une pratique des organisations comparables.",
          "Notez aussi que les exemples sont à remplacer : la légende le dit expressément.",
        ],
      },
      {
        title: 'Décider de la méthode',
        actions: [
          "Gardez les 6 éléments comme squelette, adaptez-les à votre offre, et ajoutez des lignes à partir de la ligne 11 si nécessaire.",
          "Ne supprimez aucun des 6 éléments sans avoir vérifié qu'il est bien traité dans votre offre.",
        ],
      },
    ],
    example: {
      title: "Les 6 lignes d'exemple du template, avant remplacement",
      lines: [
        "Salaire de base — « Salaire médian des références de marché supérieur de 15 % à l'offre reçue » — Haute — À préparer.",
        "Logement — « Logement fourni par les organisations comparables à ce niveau de poste et dans cette zone » — Haute — À préparer.",
        "Assurance santé / évacuation médicale — « Plafond de couverture et prise en charge medevac non précisés dans l'offre reçue » — Haute — À préparer.",
        "R&R — « Cycle et destination non précisés : à clarifier avant signature » — Moyenne. Billets d'avion — « Aucune mention du billet retour ni de la famille accompagnante » — Moyenne.",
        "Clause de préavis — « Durée de préavis à vérifier dans les deux sens (démission / rupture employeur) » — Basse.",
      ],
    },
    result: "Vous connaissez la structure de l'onglet et la forme attendue d'un argument : un fait, pas une opinion.",
    pitfall: "Garder les 6 lignes d'exemple telles quelles : l'onglet est un modèle de forme, pas un argumentaire. Chaque ligne doit être réécrite avec vos données et votre offre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Choisir les éléments à négocier à partir des silences de l\'offre',
    intro: "Pourquoi : on ne négocie pas tout, on négocie ce qui pèse et ce qui est ouvert. Vos silences listés à la Procédure 1 vous donnent la liste. Entrées : fiche de réception, benchmarking. Durée : 15 minutes.",
    steps: [
      {
        title: 'Partir des silences',
        actions: [
          "Reprenez la rubrique « silences » de la fiche de réception : chaque élément absent ou flou est un candidat.",
          "Ajoutez le salaire de base si l'écart de la section 3 est négatif.",
        ],
      },
      {
        title: 'Ajouter ou retirer des lignes',
        actions: [
          "Ajoutez une ligne si un élément propre à votre situation manque (frais d'installation, indemnité de fin de contrat, formation).",
          "Retirez ou mettez en « Basse » un élément déjà clair et satisfaisant : ne dépensez pas votre crédit de négociation sur ce qui va bien.",
        ],
      },
      {
        title: 'Limiter la liste',
        actions: [
          "Gardez entre 5 et 8 lignes : au-delà, vous noyez les demandes essentielles.",
          "Classez-les dans l'ordre où vous voulez les aborder : salaire d'abord, puis conditions.",
        ],
      },
    ],
    example: {
      title: "Liste des éléments de Joël — 7 lignes",
      lines: [
        "1. Salaire de base (écart de −625 USD à la moyenne).",
        "2. Logement (offre muette ; loyer médian estimé à 450 USD).",
        "3. Assurance santé / évacuation médicale (« standard », sans plafond ni medevac).",
        "4. R&R (« selon disponibilité budgétaire »).",
        "5. Billets d'avion (transport de prise de poste et déménagement de la famille de Goma à Bukavu ; retour).",
        "6. Clause de préavis (à lire dans le contrat, dans les deux sens).",
        "7. Indemnité de fin de contrat (ligne ajoutée à partir de la ligne 11 : contrat de 12 mois renouvelable, sans mention).",
      ],
    },
    result: "7 éléments classés dans l'ordre de discussion, dont 6 repris du template et 1 ajouté. Chacun correspond à un écart ou à un silence réel de l'offre.",
    tip: "Chaque élément ajouté doit répondre à la question : si l'employeur dit non, est-ce que cela change ma décision ? Sinon, ne l'ajoutez pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: "Rédiger l'argument factuel de chaque ligne (colonne B)",
    intro: "Pourquoi : un argument se reconnaît à ce qu'on peut le vérifier. La source distingue trois natures d'argument : une donnée de benchmarking, une réalisation antérieure, une contrainte personnelle légitime. Se présenter sans argument préparé pour chaque demande est l'erreur la plus fréquente, même chez des candidats expérimentés. Entrées : benchmarking, onglet Réalisations du module 01. Durée : 45 minutes.",
    steps: [
      {
        title: 'Choisir la nature de l\'argument',
        actions: [
          "Donnée : une valeur de la grille de benchmarking (médiane, référence, annonce).",
          "Réalisation : un résultat chiffré directement pertinent pour le poste (module 01).",
          "Contrainte légitime : un déménagement, une famille à loger, un contexte de risque.",
        ],
      },
      {
        title: 'Appliquer la formule en 3 temps',
        actions: [
          "Un fait : le chiffre, la pratique ou la situation observable.",
          "Un lien avec l'offre : en quoi l'offre s'en écarte ou se tait.",
          "Une demande implicite : la ligne se termine sur ce que vous voulez clarifier ou obtenir.",
        ],
      },
      {
        title: 'Saisir dans la colonne B',
        actions: [
          "Écrivez en une ou deux lignes ; un argument qui ne tient pas dans la cellule est probablement trop long pour être dit à voix haute.",
          "Écrivez les chiffres avec leur unité (USD par mois) et la source (benchmarking, offre).",
        ],
      },
    ],
    table: {
      columns: ['A — Élément', 'B — Argument factuel', 'Nature'],
      rows: [
        ['Salaire de base', "Médiane des 4 références (3 000 USD) supérieure de 20 % à l'offre (2 500) ; 7 ans d'expérience pour 5 exigés, près de 3 ans d'encadrement ; budget MEAL de 120 000 USD exécuté à 96 %", 'Donnée et réalisation'],
        ['Logement', "Logement fourni par les organisations comparables : référence ONGI à 2 800 avec logement fourni ; loyer médian estimé à Bukavu 450 USD par mois", 'Donnée'],
        ['Assurance santé / évacuation médicale', "Assurance « standard » sans plafond ni medevac ; famille de 3 personnes à couvrir ; poste où l'accès aux soins spécialisés est limité", 'Contrainte légitime'],
        ['R&R (Rest & Recuperation)', "Offre : « selon disponibilité budgétaire » ; poste en contexte difficile : cycle toutes les 8 semaines avec transport financé à confirmer", 'Donnée'],
        ["Billets d'avion", "Aucune mention du transport de prise de poste ni du déménagement de la famille (3 personnes) de Goma à Bukavu, ni du retour", 'Contrainte légitime'],
        ['Clause de préavis', "Durée à vérifier dans les deux sens ; un contrat de 12 mois exige une symétrie pour protéger la scolarité des enfants", 'Contrainte légitime'],
        ['Indemnité de fin de contrat', "Non mentionnée ; contrat de 12 mois renouvelable : une fin sans renouvellement doit être prévue", 'Contrainte légitime'],
      ],
    },
    result: "7 arguments dans la colonne B, chacun avec un fait, un lien avec l'offre et une demande implicite. Le minimum du module (3 arguments factuels distincts) est dépassé.",
    pitfall: "Écrire des opinions (« je mérite plus », « c'est trop bas ») : un argument qui ne contient ni chiffre ni fait observable ne se défend pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Prioriser (colonne C) et tenir les statuts (colonne D)',
    intro: "Pourquoi : on ne peut pas tout obtenir. La priorité dit ce qui compte vraiment, le statut dit où vous en êtes. Entrée : la colonne B complète. Durée : 15 minutes.",
    steps: [
      {
        title: 'Attribuer les priorités',
        actions: [
          "Colonne C : saisissez exactement Haute, Moyenne ou Basse, en respectant la casse : l'onglet ne contient aucune liste déroulante, c'est à vous de rester cohérent.",
          "Limitez-vous à 3 priorités « Haute » : si tout est prioritaire, rien ne l'est.",
          "Appliquez un test : si l'employeur refuse ce point, mon avis sur l'offre change-t-il ? Si oui, Haute.",
        ],
      },
      {
        title: 'Initialiser les statuts',
        actions: [
          "Colonne D : saisissez À préparer pour toutes les lignes, puis changez la valeur au fil de l'échange.",
          "Utilisez exactement les trois valeurs du template : À préparer, Négocié, Accepté.",
        ],
      },
      {
        title: 'Définir la règle de mise à jour',
        actions: [
          "« Négocié » : le point a été discuté, sans accord écrit ; « Accepté » : l'accord est confirmé par écrit.",
          "Mettez à jour le statut dans l'heure qui suit chaque échange, en même temps que le carnet.",
        ],
      },
    ],
    example: {
      title: 'Colonnes C et D de Joël avant l\'appel du 28/01',
      lines: [
        "Salaire de base — Haute — À préparer.",
        "Logement — Haute — À préparer.",
        "Assurance santé / évacuation médicale — Haute — À préparer.",
        "R&R — Moyenne — À préparer. Billets d'avion — Moyenne — À préparer.",
        "Clause de préavis — Basse — À préparer. Indemnité de fin de contrat — Basse — À préparer.",
        "Test appliqué : un refus ferme sur le logement ou la couverture santé ferait réfléchir Joël à l'offre ; un refus sur l'indemnité de fin de contrat ne la ferait pas changer d'avis : Basse.",
      ],
    },
    result: "3 priorités Haute, 2 Moyenne, 2 Basse. Au soir du mercredi 27/01, toutes les lignes sont en « À préparer » ; elles évolueront jeudi et vendredi.",
    pitfall: "Marquer « Accepté » parce que le recruteur a dit oui au téléphone : sans trace écrite, le statut correct est « Négocié ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Préparer les concessions et les échanges « si… alors »',
    intro: "Pourquoi : une négociation n'est pas un monologue. Si l'employeur cède sur un point, vous devez savoir à l'avance ce que vous pouvez céder en retour. Entrées : priorités et plancher. Durée : 15 minutes, sur la carte de négociation.",
    steps: [
      {
        title: 'Identifier ce qui peut céder',
        actions: [
          "Listez les éléments de priorité Moyenne ou Basse : ce sont vos monnaies d'échange.",
          "Listez ce que vous pouvez offrir sans coût réel : date de prise de poste, durée d'engagement, flexibilité de calendrier.",
        ],
      },
      {
        title: 'Écrire 3 phrases « si… alors »',
        actions: [
          "Formule : « Si vous pouvez [concession de l'employeur], alors je peux [votre concession]. »",
          "Gardez la concession la plus coûteuse pour la fin, et ne la donnez jamais seule.",
        ],
      },
      {
        title: 'Définir le seuil de clôture',
        actions: [
          "Écrivez le niveau de package à partir duquel vous acceptez sous réserve de lecture du contrat.",
          "Écrivez ce qui vous fait suspendre la discussion (un refus sur un point Haute malgré le plancher).",
        ],
      },
    ],
    example: {
      title: 'Concessions préparées par Joël',
      lines: [
        "Si ISKI ne dépasse pas 2 900 USD net, alors Joël demande une indemnité de logement d'au moins 400 USD par mois.",
        "Si le logement est pris en charge, alors Joël accepte que le R&R soit toutes les 8 semaines plutôt que toutes les 6.",
        "Si ISKI confirme par écrit le plafond medevac, alors Joël s'engage sur une prise de poste le 01/03/2027 sans décalage.",
        "Seuil de clôture : salaire ≥ 2 800 net, logement pris en charge, medevac confirmé par écrit.",
        "Seuil de suspension : refus simultané du logement et du plafond medevac.",
      ],
    },
    result: "Joël arrive à l'appel avec 3 échanges préparés et 2 seuils. Il peut dire oui, non ou « laissez-moi y réfléchir » sans improviser.",
    tip: "Une concession préparée n'est jamais perçue comme une faiblesse : elle montre que vous cherchez un accord équilibré, pas une victoire.",
  },

  // ───────────── PROCÉDURE 5 — ÉCHANGE DE NÉGOCIATION (6 étapes) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: "Préparer l'échange : logistique, carte et répétition à voix haute",
    intro: "Pourquoi : la moitié de la négociation se joue avant l'appel : calme, notes sous les yeux, phrases déjà prononcées une fois. Entrées : carte de négociation, argumentaire. Durée : 45 minutes la veille et 10 minutes avant.",
    steps: [
      {
        title: 'Régler la logistique',
        actions: [
          "Confirmez le créneau par courriel avec le recruteur : date, heure, canal (téléphone ou visioconférence), durée prévue.",
          "Testez la connexion et le son ; choisissez un lieu calme et prévoyez un second moyen d'appel.",
          "Préparez : carte, onglet « Points de négociation » ouvert, carnet d'échanges, un verre d'eau.",
        ],
      },
      {
        title: 'Répéter à voix haute',
        actions: [
          "Dites les 3 phrases clés à voix haute, debout, avec un partenaire ou en vous enregistrant.",
          "Demandez au partenaire de jouer 2 objections (« c'est notre grille », « nous avons d'autres candidats ») et répondez sans lire.",
          "Chronométrez l'annonce du chiffre et de sa justification : elle doit durer 30 secondes au plus.",
        ],
      },
      {
        title: 'Régler son état d\'esprit',
        actions: [
          "Relisez votre alternative de repli : c'est elle qui vous permet de négocier sereinement.",
          "Rappelez-vous l'objectif : un accord équilibré, pas une victoire sur le recruteur.",
        ],
      },
    ],
    example: {
      title: 'Répétition de Joël avec Chantal Mwamba — mercredi 27/01, 20 h 30 à 21 h 15',
      lines: [
        "Premier passage : Joël annonce 3 200 sans citer de source ; Chantal, jouant M. Lemaire, répond « Pourquoi ce montant ? » et il hésite. À corriger : citer la source dès la phrase d'ancrage.",
        "Deuxième passage : il cite l'annonce, le barème d'agence et le retour d'un professionnel du secteur ; l'ancrage dure 27 secondes.",
        "Objection jouée : « Nous avons d'autres candidats. » Réponse préparée : « Je comprends. Je reste très intéressé ; pourriez-vous m'indiquer jusqu'à quand vous avez besoin d'une confirmation ? » Aucun ultimatum.",
        "Courriel de confirmation envoyé à M. Lemaire à 21 h 20 : appel jeudi 28/01 à 11 h, durée prévue 25 minutes.",
      ],
    },
    result: "Un créneau confirmé, une carte imprimée, 2 passages de répétition et un ancrage de 27 secondes. Joël est prêt.",
    pitfall: "Improviser la logistique le jour même : une connexion qui coupe au moment d'annoncer le chiffre fait perdre en assurance et en crédibilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: "Ouvrir par une question ouverte sur la flexibilité budgétaire",
    intro: "Pourquoi : il vaut mieux ne pas être le premier à annoncer un chiffre quand le recruteur ne l'a pas encore fait ; une question ouverte peut révéler une marge que vous n'auriez pas osé demander. Entrées : carte de négociation. Durée : 3 à 5 minutes.",
    steps: [
      {
        title: 'Ouvrir avec gratitude et cadrage',
        actions: [
          "Remerciez pour l'offre et réaffirmez votre intérêt pour le poste en une phrase.",
          "Annoncez que vous avez étudié l'offre et que vous souhaitez en discuter les modalités.",
        ],
      },
      {
        title: 'Poser la question ouverte',
        actions: [
          "Posez : « Quelle flexibilité budgétaire existe-t-il sur ce poste ? » ou « Comment le niveau de rémunération a-t-il été fixé ? ».",
          "Ne proposez aucun chiffre tant que le recruteur n'a pas répondu.",
          "Écoutez et notez : la réponse indique la nature du plafond (grille, bailleur, budget).",
        ],
      },
      {
        title: 'Relancer si la réponse est vague',
        actions: [
          "Si le recruteur répond « dites-moi ce que vous avez en tête », passez à l'étape suivante : l'ancrage.",
          "S'il répond par un plafond, passez à l'étape 4 (objections) avant d'annoncer un chiffre.",
        ],
      },
    ],
    example: {
      title: "Ouverture de l'appel — jeudi 28/01/2027, 11 h 02",
      lines: [
        "Joël : « Bonjour Monsieur Lemaire, merci encore pour l'offre : je suis très motivé par le poste de Responsable MEAL. J'ai étudié la lettre en détail et je souhaiterais en discuter les modalités. »",
        "Joël : « Avant de parler chiffres, quelle flexibilité budgétaire existe-t-il sur ce poste ? »",
        "M. Lemaire : « Notre offre est de 2 500 net. Nous avons une certaine marge, mais je préfère que vous me disiez ce que vous avez en tête. »",
        "Notes de Joël : « une certaine marge » ; ISKI ne donne pas de plafond ; passer à l'ancrage.",
      ],
    },
    result: "Le recruteur a reconnu l'existence d'une marge sans la chiffrer : Joël sait qu'il peut annoncer un chiffre, et que ce chiffre sera le premier de l'échange.",
    pitfall: "Poser la question ouverte puis combler le silence par un chiffre avant la réponse : vous perdez le bénéfice de l'information et l'initiative.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: "Annoncer l'ancrage en haut de fourchette, avec sa source",
    intro: "Pourquoi : si vous devez annoncer un chiffre, ancrez-le en haut de votre fourchette en l'appuyant explicitement sur vos données ; ce chiffre devient le point de référence de la discussion. Entrées : B20, références, argument salaire. Durée : 30 secondes de parole.",
    steps: [
      {
        title: 'Construire la phrase d\'ancrage',
        actions: [
          "Partie 1 : la source : « D'après les références que j'ai relevées pour un poste comparable à ce niveau et dans cette zone… ».",
          "Partie 2 : la fourchette basse et haute observée, pas un chiffre isolé.",
          "Partie 3 : la justification personnelle et votre place dans la fourchette : « …je me situerais dans le haut de cette fourchette, compte tenu de [réalisation chiffrée] ».",
          "Partie 4 : le chiffre : B20.",
        ],
      },
      {
        title: 'Se taire après le chiffre',
        actions: [
          "Après avoir annoncé le chiffre, comptez 5 secondes en silence.",
          "Ne justifiez pas davantage, n'atténuez pas (« mais je suis flexible ») : laissez le recruteur réagir.",
        ],
      },
      {
        title: 'Rester factuel à la relance',
        actions: [
          "Si le recruteur demande « pourquoi ? », répondez avec la source nommée et un chiffre.",
          "Ne montrez ni agacement ni excuse, et ne formulez jamais d'ultimatum.",
        ],
      },
    ],
    example: {
      title: "Ancrage de Joël — 11 h 04",
      lines: [
        "Joël : « D'après les références que j'ai relevées pour un poste comparable à ce niveau et dans cette zone — l'annonce, un barème d'agence onusienne pour un administrateur national et le retour d'un professionnel du secteur —, le net mensuel se situe plutôt entre 2 800 et 3 200 USD. »",
        "Joël : « Avec 7 ans d'expérience, dont près de 3 ans à encadrer une équipe de 6 personnes, et un budget MEAL de 120 000 USD exécuté à 96 %, je me situerais dans le haut de cette fourchette, à 3 200 USD net par mois. » [silence de 5 secondes]",
        "M. Lemaire : « 3 200, c'est au-dessus de notre grille pour ce niveau, plafonnée à 2 900. »",
      ],
    },
    result: "Joël a ancré à 3 200 avec trois sources et une réalisation, sans ultimatum. Le recruteur a révélé son plafond : 2 900, soit 400 USD de plus que l'offre initiale.",
    pitfall: "Annoncer le chiffre puis le diluer (« enfin, c'est une idée, je suis flexible ») : vous reprenez vous-même l'ancrage que vous venez de poser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Répondre aux objections sans ultimatum',
    intro: "Pourquoi : un recruteur répond presque toujours par une objection ; la réponse prépare la suite. Un ultimatum (« c'est ce montant ou je refuse ») ferme la discussion au lieu de la faire avancer. Entrées : table des objections, carte. Durée : 5 à 10 minutes d'échange.",
    steps: [
      {
        title: 'Identifier la nature de l\'objection',
        actions: [
          "Plafond de salaire (grille, budget) : il porte sur le salaire de base, souvent pas sur le package.",
          "Pression (autres candidats, délai) : elle teste votre réaction.",
          "Fermeture réelle : elle existe, mais elle est rare ; testez-la par une question avant de la croire.",
        ],
      },
      {
        title: 'Répondre en 3 temps',
        actions: [
          "Reconnaître : « Je comprends la contrainte. »",
          "Reformuler pour vérifier : « Si je comprends bien, le plafond concerne le salaire de base. »",
          "Réorienter : « Quels éléments restent ouverts : logement, R&R, revue à 6 mois ? »",
        ],
      },
      {
        title: 'Ne jamais ultimatum',
        actions: [
          "Remplacez « c'est ça ou rien » par « voici ce qui me permettrait de dire oui ».",
          "Si vous devez dire non, dites-le plus tard, par écrit, avec remerciements.",
        ],
      },
    ],
    table: {
      columns: ['Objection du recruteur', 'Ce qu\'elle signifie souvent', 'Réponse recommandée'],
      rows: [
        ["« C'est notre grille, nous ne pouvons pas dépasser X. »", 'Plafond sur le salaire de base, pas sur le package', "« Je comprends la contrainte de grille. Quels éléments restent ouverts : indemnité de logement, R&R, revue à 6 mois ? »"],
        ["« Le budget du bailleur est plafonné. »", 'Ligne budgétaire figée', "« Quelle ligne est la plus flexible ? Je peux m'adapter sur le calendrier ou la structure. »"],
        ["« Nous avons d'autres candidats. »", 'Pression, ou réalité', "« Je comprends. Je reste très intéressé ; jusqu'à quand avez-vous besoin d'une confirmation ? »"],
        ["« Quel est votre salaire actuel ? »", 'Ancrage sur votre ancien salaire', "« Je préfère me baser sur le poste et le marché : pour ce niveau et cette zone, la fourchette observée est… »"],
        ["« C'est à prendre ou à laisser. »", 'Fermeture réelle ou posture', "« Merci pour la clarté. Je vais l'étudier jusqu'à [date] avec ces éléments de marché ; puis-je vous revenir avec ma réponse ? »"],
      ],
    },
    result: "Joël utilise la ligne 1 du tableau : la grille plafonne le salaire à 2 900, il réoriente aussitôt vers les conditions. Aucune porte n'est fermée.",
    pitfall: "Répondre à « quel est votre salaire actuel ? » en le donnant : vous remplacez le marché par votre ancien salaire (2 200 pour Joël) et réduisez la discussion à un pourcentage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Traiter les conditions comme des clarifications légitimes',
    intro: "Pourquoi : les conditions d'expatriation ne sont pas des exigences qui s'ajoutent au salaire : ce sont des clarifications légitimes. Une formulation de question, pas de revendication, ouvre la discussion. Entrées : arguments du logement, de la santé et du R&R. Durée : 10 minutes.",
    steps: [
      {
        title: 'Poser les questions, pas des exigences',
        actions: [
          "Formule : « L'offre ne précise pas [élément] : pourriez-vous me préciser ce point ? »",
          "Posez au plus 2 ou 3 questions à la suite, dans l'ordre de priorité Haute.",
        ],
      },
      {
        title: 'Relier chaque question à un fait',
        actions: [
          "Citez le fait de la colonne B de l'onglet « Points de négociation » : « les organisations comparables prennent en charge le logement ».",
          "Ne justifiez pas par des sentiments (« j'ai besoin ») mais par la pratique observée.",
        ],
      },
      {
        title: 'Utiliser les « si… alors »',
        actions: [
          "Quand le recruteur ouvre un point, proposez l'échange préparé : « Si le logement est pris en charge, alors… ».",
          "Notez chaque réponse exacte dans le carnet d'échanges.",
        ],
      },
    ],
    example: {
      title: "Traitement des conditions — 11 h 10 à 11 h 22",
      lines: [
        "Joël : « Je comprends la contrainte de grille. Pour que l'ensemble reste équilibré, regardons les conditions : l'offre ne précise ni le logement ni le plafond de la couverture medevac. Pourriez-vous me préciser ces deux points ? »",
        "M. Lemaire : « Le logement n'est effectivement pas inclus, mais je peux étudier une indemnité. Pour la santé, il faut que je vérifie le plafond avec notre courtier. »",
        "Joël : « Les organisations comparables prennent en général en charge le logement à ce niveau. Une indemnité d'environ 400 USD par mois couvrirait le loyer médian que j'ai observé à Bukavu, 450 USD. »",
        "M. Lemaire : « 400 par mois pendant 12 mois, je peux regarder. Et le R&R ? » Joël : « Toutes les 8 semaines, avec le transport vers Kigali financé : pouvez-vous me confirmer cela aussi ? »",
      ],
    },
    result: "En 12 minutes, trois sujets ouverts sans aucun ultimatum : indemnité de logement envisagée (400 USD par mois), plafond medevac à vérifier, R&R à confirmer. Les trois statuts passent à « Négocié ».",
    pitfall: "Présenter les conditions comme des exigences supplémentaires (« en plus du salaire, je veux ») : la même demande en question de clarification ne met personne sur la défensive.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: "Clôturer l'appel : récapituler, demander l'écrit, fixer la suite",
    intro: "Pourquoi : un accord verbal sur un point (logement, R&R, plafond medevac) qui n'est pas repris par écrit n'a aucune valeur si un désaccord survient en poste. La fin de l'appel sert à poser la demande de confirmation. Entrées : notes de l'appel. Durée : 3 minutes d'appel, puis 15 minutes de compte rendu.",
    steps: [
      {
        title: 'Récapituler à voix haute',
        actions: [
          "Reformulez les points évoqués : « Pour récapituler : un salaire révisé que vous allez me communiquer, une indemnité de logement envisagée, un plafond medevac à vérifier, un R&R à confirmer. »",
          "Demandez : « Ai-je bien tout compris ? ».",
        ],
      },
      {
        title: "Demander la confirmation écrite avec une date",
        actions: [
          "Demandez : « Pourriez-vous me confirmer par écrit le montant révisé, ainsi que le plafond de la couverture medevac évoqué plus tôt, avant que je vous transmette ma réponse définitive ? »",
          "Fixez une date et une heure de réception, et une date de votre réponse.",
        ],
      },
      {
        title: 'Remercier et rédiger le compte rendu',
        actions: [
          "Terminez l'appel par un remerciement et un rappel de l'intérêt pour le poste.",
          "Dans l'heure : compte rendu dans le carnet d'échanges ; mise à jour de la colonne D (Négocié) ; message de remerciement avec récapitulatif.",
        ],
      },
    ],
    example: {
      title: "Clôture de l'appel et compte rendu de Joël — jeudi 28/01/2027, 11 h 27",
      lines: [
        "Joël : « Pourriez-vous me confirmer par écrit le montant révisé, l'indemnité de logement éventuelle et le plafond medevac avant que je vous transmette ma réponse définitive ? » M. Lemaire : « Je vous écris demain, avant 10 h. »",
        "Carnet : 28/01 11 h 02–11 h 27 | Téléphone | M. Lemaire | Plafond de grille 2 900 net ; indemnité de logement de 400 USD par mois à l'étude ; plafond medevac à vérifier ; R&R à confirmer | Preuve écrite : non, attendue vendredi 29/01 avant 10 h.",
        "Onglet « Points de négociation » : colonnes D du salaire, du logement, de la santé et du R&R passées de « À préparer » à « Négocié ».",
        "Message de 11 h 45 : « Merci pour cet échange. Pour récapituler : [4 points]. Je reste très intéressé et je vous réponds dès réception de votre confirmation écrite. »",
      ],
    },
    result: "Un compte rendu de l'échange, 4 statuts mis à jour, une confirmation écrite promise pour le lendemain avant 10 h, et un message qui rappelle les 4 points. Rien n'est « acté » : tout est « Négocié ».",
    pitfall: "Raccrocher sans avoir demandé la confirmation écrite ni fixé de date : sans date, la relance devient un reproche, et la promesse orale s'évapore.",
  },

  // ───────── PROCÉDURE 6 — CONTRE-OFFRE OU REFUS (4 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: "Classer la réponse de l'employeur et la lire par écrit",
    intro: "Pourquoi : la réponse après votre négociation prend quatre formes, et chacune appelle une conduite différente. Avant de réagir, vous la classez et vous la mettez à plat. Entrées : confirmation écrite promise à l'étape 6 de la Procédure 5, carnet d'échanges. Durée : 15 minutes.",
    steps: [
      {
        title: 'Classer la réponse',
        actions: [
          "Acceptation totale : l'employeur accorde votre ancrage et vos conditions.",
          "Contre-offre partielle : l'employeur bouge sur certains points (salaire, logement, conditions) mais pas sur tous.",
          "Refus ferme : l'employeur maintient l'offre initiale sur tout ou partie des points.",
          "Silence : aucune réponse à la date promise ; relancez une fois, par écrit, à J+1.",
        ],
      },
      {
        title: 'Mettre la réponse à plat',
        actions: [
          "Recopiez chaque chiffre et chaque promesse dans le carnet d'échanges, avec la mention « écrit » ou « oral ».",
          "Séparez ce qui est confirmé par écrit de ce qui est annoncé comme « à préciser dans le contrat ».",
        ],
      },
      {
        title: 'Mettre à jour les statuts',
        actions: [
          "Onglet « Points de négociation », colonne D : « Accepté » uniquement pour un point confirmé par écrit ; « Négocié » pour le reste.",
          "Ne répondez à l'employeur qu'après cette mise à plat.",
        ],
      },
    ],
    example: {
      title: "Courriel reçu par Joël — vendredi 29/01/2027, 9 h 40, de M. Lemaire",
      lines: [
        "« Suite à notre échange, ISKI vous propose un salaire de 2 900 USD net par mois, une indemnité de logement de 400 USD par mois pendant la durée du contrat, une assurance santé internationale incluant l'évacuation médicale, un R&R toutes les 8 semaines (modalités détaillées dans le contrat), et une prise de poste le 01/03/2027. Nous vous remercions de nous communiquer votre réponse avant lundi 01/02 à 12 h. »",
        "Classement : contre-offre partielle (salaire +400 par rapport à l'offre, logement accordé, deux points annoncés sans chiffres).",
        "Statuts mis à jour : Salaire de base — Accepté (écrit) ; Logement — Accepté (écrit) ; Assurance santé / medevac — Négocié (plafond non indiqué) ; R&R — Négocié (financement non précisé).",
      ],
    },
    result: "Une réponse classée, mise à plat et rapprochée des statuts. Joël sait qu'il a obtenu 2 points par écrit et que 2 points restent à écrire dans le contrat.",
    pitfall: "Répondre à chaud à la contre-offre parce qu'elle « ressemble à ce qu'on voulait » : vérifiez d'abord chaque chiffre dans la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: "Évaluer la contre-offre avec la grille et la valeur réelle du package",
    intro: "Pourquoi : un salaire plus haut sans logement peut valoir moins qu'un salaire plus bas avec logement. Vous évaluez la contre-offre avec la même méthode que l'offre initiale. Entrées : la contre-offre mise à plat, la grille de benchmarking. Durée : 20 minutes.",
    steps: [
      {
        title: 'Créer une version 2 de la grille',
        actions: [
          "Enregistrez le classeur sous « NOM_Prenom_benchmark_AAAA-MM_v2.xlsx » : la v1 garde la trace de l'offre initiale.",
          "Dans la v2, remplacez C16 par le nouveau salaire et F16 par la date de la contre-offre ; indiquez l'indemnité dans E16.",
          "Relisez D20 à G20 : ils se recalculent seuls.",
        ],
      },
      {
        title: 'Calculer la valeur réelle du package',
        actions: [
          "Ajoutez au salaire net les avantages versés en espèces (indemnité de logement).",
          "Retranchez les coûts que l'employeur ne prend pas en charge : loyer médian estimé, autres frais récurrents.",
          "Comparez le résultat à l'offre initiale, par mois puis par an.",
        ],
      },
      {
        title: 'Comparer à vos seuils',
        actions: [
          "Comparez le package à votre plancher de package (fourchette basse et conditions liées) et à votre cible.",
          "Si le package atteint la cible ou la dépasse, la décision est « accepter sous réserve du contrat ».",
        ],
      },
    ],
    table: {
      columns: ['Élément (USD par mois)', "Offre du 25/01", "Offre du 29/01"],
      rows: [
        ['Salaire net', '2 500', '2 900'],
        ['Indemnité de logement', '0', '400'],
        ['Total en espèces', '2 500', '3 300'],
        ['Loyer médian estimé à Bukavu', '− 450', '− 450'],
        ['Disponible après loyer', '2 050', '2 850'],
        ['Gain mensuel / annuel', '—', '+ 800 / + 9 600'],
        ['Lecture de la grille v2 (C16 = 2 900)', 'D20 −625 ; E20 −300 ; F20 −700 ; Sous la fourchette', 'D20 −225 ; E20 +100 ; F20 −300 ; Dans la fourchette — marge de négociation possible'],
      ],
    },
    result: "Le package passe de 2 050 à 2 850 USD disponibles par mois : + 800 par mois, soit 9 600 par an. Le salaire de 2 900 est au-dessus de la fourchette basse (2 800) et le total en espèces de 3 300 dépasse la fourchette haute (3 200).",
    pitfall: "Comparer 2 900 et 3 200 comme si le logement n'existait pas : sans les avantages en espèces, vous jugez le package sur une seule ligne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: "Décider : accepter, pivoter ou décliner, sans fermer la relation",
    intro: "Pourquoi : une contre-offre ou un refus ne fait capoter une offre solide que si vous répondez mal. Chaque branche de la décision a une phrase et une limite. Entrées : package évalué, plancher, alternative de repli. Durée : 20 minutes.",
    steps: [
      {
        title: 'Appliquer la règle de décision',
        actions: [
          "Package ≥ plancher et proche de la cible : acceptez le principe, sous réserve de la lecture du contrat.",
          "Package < plancher mais employeur ouvert : pivotez vers des éléments non salariaux.",
          "Package < plancher, employeur fermé, alternative meilleure : déclinez poliment.",
        ],
      },
      {
        title: 'Pivoter vers des éléments non salariaux',
        actions: [
          "Proposez une revue salariale écrite à 6 mois avec objectifs mesurables.",
          "Demandez un budget de formation, un R&R financé, une prise de poste décalée ou un titre ajusté.",
          "Présentez-les en « si… alors » avec le point accepté.",
        ],
      },
      {
        title: 'Répondre par écrit',
        actions: [
          "Remerciez, reprenez les chiffres de la contre-offre pour vérifier la compréhension, annoncez votre décision et ce qui reste à confirmer par écrit.",
          "Acceptez « le principe », jamais « le contrat » : la signature n'intervient qu'après la lecture complète.",
        ],
      },
    ],
    example: {
      title: "Réponse de Joël — vendredi 29/01/2027, 11 h 15 — et branches non retenues",
      lines: [
        "Décision : package de 2 850 disponibles contre 2 050 ; plancher de package respecté ; accepter le principe.",
        "Courriel : « Monsieur Lemaire, merci pour cette confirmation. J'accepte le principe de l'offre : 2 900 USD net, indemnité de logement de 400 USD par mois, prise de poste le 01/03/2027, sous réserve de la lecture du contrat et de la confirmation écrite du plafond medevac et des modalités du R&R. Pourriez-vous m'envoyer le projet de contrat ? »",
        "Si ISKI avait maintenu 2 500 : « Je comprends. Pour que l'offre soit équilibrée, pourrions-nous prévoir une revue salariale écrite à 6 mois, sur objectifs, et un budget de formation de 1 000 USD pour mon niveau d'anglais ? »",
        "Si ISKI avait refusé tout geste et que l'alternative était meilleure : « Merci pour votre clarté et pour le temps accordé. Après réflexion, je ne peux pas donner suite à ces conditions ; j'espère que nous aurons l'occasion de collaborer. »",
      ],
    },
    result: "Un courriel envoyé à 11 h 15, avant l'échéance du lundi 12 h, qui accepte le principe et conditionne la signature. Aucune porte n'est fermée.",
    pitfall: "Accepter par courriel « l'offre » sans réserve, avant d'avoir lu le contrat : votre acceptation de principe doit toujours rappeler les points restant à confirmer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: "Préparer la réponse à la contre-offre de l'employeur actuel",
    intro: "Pourquoi : quand vous annoncez votre départ, l'employeur actuel peut proposer une hausse ou une promesse pour vous retenir. Mieux vaut préparer la réponse avant de l'entendre. Entrées : la liste des raisons pour lesquelles vous cherchiez. Durée : 15 minutes.",
    steps: [
      {
        title: 'Rappeler vos raisons',
        actions: [
          "Écrivez les 3 raisons qui vous ont fait chercher ailleurs (module 01 : aspirations, écarts, plancher).",
          "Pour chacune, écrivez si une hausse de salaire la résout.",
        ],
      },
      {
        title: 'Évaluer la contre-offre en 3 questions',
        actions: [
          "Résout-elle ma raison principale, ou seulement le salaire ?",
          "Est-elle écrite et datée, ou seulement promise (« une promotion est à l'étude ») ?",
          "Que penserais-je de ce poste dans 6 mois, si rien d'autre ne change ?",
        ],
      },
      {
        title: 'Répondre sans bluff',
        actions: [
          "N'utilisez jamais une offre pour obtenir une contre-offre que vous n'accepteriez pas.",
          "Remerciez, dites votre décision et proposez une transition ordonnée.",
        ],
      },
    ],
    example: {
      title: "Scénario préparé par Joël le 29/01 pour l'annonce de son départ (fictif)",
      lines: [
        "Raisons de chercher : (1) plafond de responsabilité au poste de Superviseur ; (2) 7 ans sans passage à un niveau managérial ; (3) contrat qui se termine en septembre 2027.",
        "Hypothèse : le coordinateur programme propose + 10 % (2 420 USD) et « une promotion à l'étude en septembre », sans écrit.",
        "Évaluation : la hausse ne résout pas les raisons 1 et 2 ; la promotion n'est pas écrite ; ISKI offre un poste managérial à 2 900 + 400 de logement.",
        "Réponse préparée : « Je vous remercie pour cette proposition, qui montre la confiance que vous me portez. Ma décision est prise : j'ai accepté un poste de Responsable MEAL. Je souhaite assurer une passation soignée jusqu'au [date]. »",
      ],
    },
    result: "Une réponse préparée en 3 phrases, fondée sur 3 questions, et un critère clair : une hausse qui ne traite pas la raison de départ n'est pas une contre-offre acceptable.",
    tip: "Joël garde le lien avec son équipe : un départ bien conduit (passation, remerciements) protège une référence précieuse pour la suite de sa carrière.",
  },

  // ───────── PROCÉDURE 7 — LECTURE DU CONTRAT AVEC LA CHECKLIST (9 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 9',
    title: 'Ouvrir la checklist et préparer une lecture ligne à ligne',
    intro: "Le fichier checklist-lecture-contrat-expatriation.docx est la grille de vérification à parcourir clause par clause avant de signer. Il s'ouvre après l'accord de principe sur le salaire. Entrée : le projet de contrat complet. Durée : 15 minutes de préparation, puis environ 1 h 45 de lecture.",
    steps: [
      {
        title: 'Enregistrer la copie et lire la structure',
        actions: [
          "Enregistrez une copie « NOM_Prenom_checklist-contrat_AAAA-MM.docx » dans « 04_Contrat ».",
          "Repérez les 8 sections : 1 Salaire et modalités de paiement (4 cases) ; 2 Logement (3) ; 3 Assurance santé et évacuation médicale (4) ; 4 R&R (3) ; 5 Billets d'avion (3) ; 6 Rapatriement et fin de contrat (3) ; 7 Clause de préavis (3) ; 8 Questions à poser avant signature (3 blocs).",
          "Comptez 23 cases à cocher dans les sections 1 à 7 ; le cartouche final demande « Rempli par (nom) » et « Date ».",
        ],
      },
      {
        title: 'Préparer le contrat',
        actions: [
          "Imprimez le contrat ou ouvrez-le avec deux fenêtres côte à côte ; numérotez chaque article.",
          "Surlignez en vert ce qui est clair, en orange ce qui est vague, en rouge ce qui est absent.",
          "Ne signez rien, ne paraphez rien pendant la lecture.",
        ],
      },
      {
        title: 'Fixer la règle de cochage',
        actions: [
          "Remplacez ☐ par ☒ (ou par un X) uniquement pour un point vérifié dans le contrat et satisfaisant, ou accepté en connaissance de cause.",
          "Laissez ☐ pour tout point absent, vague ou insatisfaisant : il alimentera la section 8.",
        ],
      },
    ],
    example: {
      title: "Projet de contrat reçu par Joël — mardi 02/02/2027, 10 h 15",
      lines: [
        "Document : « Contrat de travail à durée déterminée », 6 pages, 14 articles, reçu avec la mention « document de travail ».",
        "Lecture planifiée : mardi 02/02 de 19 h à 21 h ; copie de la checklist enregistrée sous « KABEYA_Joel_checklist-contrat_2027-02.docx ».",
        "Codes couleurs posés : 11 des 14 articles surlignés (8 verts, 3 orange) et 3 absences notées en rouge en marge (plafond santé, financement du R&R, billets de la famille).",
        "Cartouche rempli : « Rempli par : Joël Kabeya, Superviseur MEAL — Date : 02/02/2027 ».",
      ],
    },
    result: "Une checklist enregistrée, 23 cases à parcourir, un contrat numéroté et surligné : la lecture peut commencer section par section.",
    pitfall: "Lire le contrat seulement pour le salaire déjà négocié : l'objet de la checklist est de lire ce qui n'a pas été discuté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 9',
    title: 'Section 1 — Salaire et modalités de paiement (4 cases)',
    intro: "Pourquoi : le salaire négocié n'a de valeur que s'il est écrit exactement, avec sa devise, sa périodicité et ses règles de révision. Entrée : l'article rémunération du contrat et l'offre écrite du 29/01.",
    steps: [
      {
        title: 'Case 1 — Montant exact, brut et net, et devise',
        actions: [
          "Repérez l'article « Rémunération » ; comparez chaque chiffre à l'offre écrite.",
          "Vérifiez que le texte dit « net » ou « brut » ; si seul le net est donné, vérifiez qui supporte les retenues.",
        ],
      },
      {
        title: 'Cases 2 et 3 — Fréquence, moyen de paiement, ajustement ou prime',
        actions: [
          "Notez la date de versement, le moyen (virement international, devise locale) et la devise.",
          "Cherchez toute prime ou ajustement : prime de difficulté, ajustement de poste, 13e mois ; leur absence se note.",
        ],
      },
      {
        title: 'Case 4 — Modalités de révision salariale',
        actions: [
          "Identifiez si la révision est annuelle, liée à la performance, absente ou discrétionnaire.",
          "Si elle est discrétionnaire, notez-le : c'est un point à reprendre à la revue de performance.",
        ],
      },
    ],
    example: {
      title: "Article 3 du contrat de Joël et cochage de la section 1",
      lines: [
        "Texte : « Le salaire mensuel net est de 2 900 USD, versé par virement bancaire en USD le dernier jour ouvrable du mois. La rémunération peut être révisée annuellement à la discrétion de l'employeur. »",
        "☒ Montant exact et devise : 2 900 USD net, conforme à l'offre du 29/01 (brut non indiqué, accepté car le net est contractuel).",
        "☒ Fréquence et moyen de paiement : mensuel, virement en USD.",
        "☒ Ajustement ou prime : aucun, noté (conforme à l'offre).",
        "☐ Révision salariale : discrétionnaire, aucune obligation ; noté pour la revue de 6 mois, pas de question dédiée.",
      ],
    },
    result: "Section 1 : 3 cases cochées sur 4 ; une case ouverte, notée comme point d'attention sans question. Le salaire est conforme à ce qui a été écrit.",
    pitfall: "Cocher la case « montant » en voyant un chiffre rond : comparez le chiffre à votre offre écrite, et vérifiez le net, la devise et la périodicité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 9',
    title: 'Section 2 — Logement (3 cases)',
    intro: "Pourquoi : un poste avec un salaire plus bas mais un logement entièrement pris en charge, en zone à coût de la vie élevé, peut être financièrement supérieur à un poste au salaire plus élevé sans logement fourni. Entrée : l'article logement et le loyer médian estimé en Procédure 2.",
    steps: [
      {
        title: 'Case 1 — Logement fourni ou indemnité forfaitaire',
        actions: [
          "Repérez la nature de la prise en charge : logement fourni, indemnité forfaitaire, ou rien.",
          "Si c'est un logement fourni, notez les conditions (standard, sécurité, durée, famille admise).",
        ],
      },
      {
        title: 'Case 2 — Montant et adéquation avec le coût réel',
        actions: [
          "Comparez l'indemnité au loyer médian que vous avez estimé.",
          "Calculez l'écart mensuel et annuel : (loyer − indemnité) × 12.",
        ],
      },
      {
        title: "Case 3 — Frais de première installation",
        actions: [
          "Cherchez la caution ou l'avance de loyer, l'ameublement, le transport des effets personnels.",
          "S'ils ne sont pas mentionnés, laissez la case ouverte : ils sont presque toujours à votre charge par défaut.",
        ],
      },
    ],
    example: {
      title: "Article 4 du contrat de Joël et cochage de la section 2",
      lines: [
        "Texte : « Une indemnité de logement de 400 USD par mois est versée avec le salaire. »",
        "☒ Logement fourni ou indemnité forfaitaire : indemnité forfaitaire, pas de logement fourni.",
        "☒ Montant précisé et adéquation : 400 USD contre un loyer médian estimé de 450 ; écart de 50 USD par mois, soit 600 USD par an : accepté en connaissance de cause.",
        "☐ Frais de première installation : article muet. Estimation à la charge de Joël : avance de loyer de 3 mois (3 × 450 = 1 350 USD) ; question à poser.",
      ],
    },
    result: "Section 2 : 2 cases cochées sur 3 ; l'écart de 600 USD par an est chiffré et assumé ; l'installation devient une question.",
    pitfall: "Accepter « indemnité de logement » sans comparer au loyer réel : l'écart entre l'indemnité et le coût local est une diminution de salaire déguisée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 9',
    title: 'Section 3 — Assurance santé et évacuation médicale (4 cases)',
    intro: "Pourquoi : en poste isolé ou en contexte à risque, une couverture santé internationale complète, incluant la medevac, n'est pas un détail administratif : c'est une clause qui peut conditionner votre sécurité. Entrée : l'article couverture santé et, si possible, le résumé de la police.",
    steps: [
      {
        title: 'Case 1 — Couverture santé internationale avec plafond',
        actions: [
          "Repérez l'assureur ou le régime et le plafond annuel de remboursement, par personne ou par événement.",
          "Une formule comme « dans les conditions de la police » n'est pas un plafond : la case reste ouverte.",
        ],
      },
      {
        title: 'Cases 2 et 3 — Medevac et personnes à charge',
        actions: [
          "Vérifiez que l'évacuation médicale d'urgence est explicitement mentionnée, avec un plafond.",
          "Vérifiez si la couverture s'étend au conjoint et aux enfants, et jusqu'à quel âge.",
        ],
      },
      {
        title: 'Case 4 — Liste des exclusions',
        actions: [
          "Demandez les exclusions : maladies préexistantes, zones à risque spécifique, certaines activités.",
          "Si la liste n'est pas annexée, la case reste ouverte.",
        ],
      },
    ],
    example: {
      title: "Article 5 du contrat de Joël et cochage de la section 3",
      lines: [
        "Texte : « Le salarié est couvert par l'assurance santé internationale de l'organisation, dans les conditions de la police. »",
        "☐ Plafond de remboursement : aucun chiffre ; renvoi à la police.",
        "☐ Medevac explicitement incluse et plafond : le mot « évacuation » apparaît dans le courriel du 29/01 mais pas dans le contrat.",
        "☐ Personnes à charge : non précisé ; Joël a une épouse et 2 enfants.",
        "☐ Exclusions : aucune liste. Section 3 : 0 case cochée sur 4 → Question 1 (priorité Haute).",
      ],
    },
    result: "Section 3 : 4 cases ouvertes, regroupées en une seule question prioritaire. C'est la clause la plus importante du contrat pour Joël et sa famille.",
    pitfall: "Se contenter d'un courriel qui dit « incluant l'évacuation médicale » : une clause qui ne figure pas dans le contrat ou dans un avenant n'engage personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 9',
    title: 'Section 4 — R&R, Rest & Recuperation (3 cases)',
    intro: "Pourquoi : dans les postes en contexte difficile ou isolé, un cycle de R&R (souvent toutes les 6 à 8 semaines) prévoit un déplacement pris en charge hors du lieu d'affectation. La clause doit dire fréquence, destination et financement. Entrée : l'article R&R.",
    steps: [
      {
        title: 'Case 1 — Fréquence exacte du cycle',
        actions: [
          "Repérez la fréquence chiffrée (toutes les 8 semaines) et non « régulièrement ».",
          "Repérez toute condition qui la rend facultative (« selon disponibilité budgétaire »).",
        ],
      },
      {
        title: 'Case 2 — Destination couverte et transport financé',
        actions: [
          "Vérifiez la destination : lieu d'origine, hub régional, libre choix.",
          "Vérifiez si le transport est réellement financé ou seulement autorisé sans financement.",
        ],
      },
      {
        title: 'Case 3 — Jours accordés et distinction avec les congés annuels',
        actions: [
          "Notez le nombre de jours de repos et leur décompte (ouvrés, calendaires).",
          "Vérifiez que le texte précise qu'ils s'ajoutent aux congés annuels.",
        ],
      },
    ],
    example: {
      title: "Article 6 du contrat de Joël et cochage de la section 4",
      lines: [
        "Texte : « Le salarié bénéficie d'un R&R toutes les 8 semaines, de 5 jours, en fonction des disponibilités budgétaires. »",
        "☒ Fréquence : toutes les 8 semaines (6 à 7 cycles par an), mais soumise à une condition budgétaire.",
        "☐ Destination et transport : aucune destination, aucun financement ; Joël a demandé Kigali, transport financé. Coût estimé à sa charge : 6 voyages × 120 USD = 720 USD par an.",
        "☐ Jours et distinction avec les congés : 5 jours mentionnés, mais rien sur leur lien avec les congés annuels.",
        "Question 2 (priorité Haute) : supprimer la condition budgétaire, préciser la destination et le financement, confirmer que les 5 jours s'ajoutent aux congés.",
      ],
    },
    result: "Section 4 : 1 case cochée sur 3 ; le R&R reste « autorisé » mais non financé : 720 USD par an en jeu, et une condition budgétaire à supprimer.",
    pitfall: "Cocher la fréquence sans lire la restriction « selon disponibilité budgétaire » : le R&R peut alors ne jamais être pris, sans que l'employeur contrevienne au contrat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 9',
    title: "Section 5 — Billets d'avion (3 cases)",
    intro: "Pourquoi : une clause silencieuse sur les billets signifie généralement que ces frais restent à votre charge. Vérifiez trois cas : l'aller, le retour, la famille. Entrée : l'article voyages. Pour un poste national avec affectation hors de la résidence, lisez « billet » comme « transport » (route, lac, avion).",
    steps: [
      {
        title: 'Case 1 — Billet aller à la prise de poste',
        actions: [
          "Cherchez le transport vers le lieu d'affectation à la date de prise de poste, et le transport des effets personnels.",
          "Vérifiez si c'est « pris en charge » ou « remboursé sur justificatifs ».",
        ],
      },
      {
        title: 'Case 2 — Billet(s) retour en fin de contrat',
        actions: [
          "Cherchez le retour en fin de contrat, mais aussi en cas de rupture anticipée.",
          "Vérifiez la destination (lieu de résidence d'origine ou autre).",
        ],
      },
      {
        title: 'Case 3 — Famille accompagnante',
        actions: [
          "Cherchez si les billets sont inclus, partiels ou absents pour le conjoint et les enfants.",
          "Si la famille est autorisée mais non financée, notez le coût estimé.",
        ],
      },
    ],
    example: {
      title: "Article 7 du contrat de Joël et cochage de la section 5",
      lines: [
        "Texte : « Les frais de voyage sont remboursés sur présentation d'un ordre de mission. »",
        "☐ Aller à la prise de poste : un ordre de mission concerne les déplacements professionnels, pas l'installation ; non couvert.",
        "☐ Retour en fin de contrat : non mentionné dans cet article (voir article 11).",
        "☐ Famille accompagnante : non mentionnée. Déménagement de 3 personnes de Goma à Bukavu : forfait estimé à 600 USD à sa charge.",
        "Section 5 : 0 case cochée sur 3 → regroupée avec l'installation dans la Question 4 (priorité Moyenne).",
      ],
    },
    result: "Section 5 : 3 cases ouvertes, un coût estimé de 600 USD pour le déménagement, une question à poser.",
    pitfall: "Considérer qu'un « ordre de mission » couvre l'installation : l'ordre de mission finance un déplacement professionnel, pas un déménagement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 9',
    title: 'Section 6 — Rapatriement et fin de contrat (3 cases)',
    intro: "Pourquoi : les clauses de fin de contrat sont souvent reléguées en fin de document, précisément parce qu'elles sont moins lues. Elles déterminent ce que vous recevez et ce que vous payez au moment de partir. Entrée : les articles de fin de contrat.",
    steps: [
      {
        title: 'Case 1 — Conditions de prise en charge du retour',
        actions: [
          "Vérifiez si le retour est « organisé » (ce qui ne dit pas qui paie) ou « pris en charge ».",
          "Vérifiez si la famille est incluse et vers quelle destination.",
        ],
      },
      {
        title: 'Case 2 — Indemnité de fin de contrat ou de rapatriement',
        actions: [
          "Cherchez l'existence d'une indemnité et son montant, ou la formule de calcul.",
          "Cherchez la condition de durée (par exemple après 12 mois révolus).",
        ],
      },
      {
        title: "Case 3 — Différence de traitement selon l'origine de la rupture",
        actions: [
          "Comparez démission, fin de contrat et licenciement : le retour et l'indemnité sont-ils les mêmes ?",
          "Notez toute clause qui retire un avantage en cas de démission.",
        ],
      },
    ],
    example: {
      title: "Article 11 du contrat de Joël et cochage de la section 6",
      lines: [
        "Texte : « L'organisation organise le retour du salarié en fin de contrat. »",
        "☐ Prise en charge du retour : « organise » ne dit pas « finance » ; famille non mentionnée ; cas de la rupture anticipée non traité.",
        "☐ Indemnité de fin de contrat : non mentionnée ; montant potentiel d'un mois de salaire, soit 2 900 USD en jeu.",
        "☐ Traitement selon l'origine de la rupture : aucun, donc inconnu.",
        "Section 6 : 0 case cochée sur 3 → Question 5 (priorité Basse).",
      ],
    },
    result: "Section 6 : 3 cases ouvertes. Joël chiffre l'enjeu (jusqu'à 2 900 USD) mais classe la question en priorité Basse : elle ne change pas sa décision.",
    pitfall: "Lire « organise le retour » comme « prend en charge le retour » : l'un décrit une démarche, l'autre une dépense.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 8 sur 9',
    title: 'Section 7 — Clause de préavis (3 cases)',
    intro: "Pourquoi : la durée de préavis, dans les deux sens, détermine votre marge de manœuvre réelle si la mission ne correspond pas à ce qui a été annoncé ou si une meilleure opportunité se présente. Entrée : l'article de rupture du contrat.",
    steps: [
      {
        title: 'Case 1 — Préavis en cas de démission',
        actions: [
          "Repérez la durée exacte (jours, semaines, mois) et le point de départ du décompte.",
          "Vérifiez si le préavis peut être réduit d'un commun accord.",
        ],
      },
      {
        title: "Case 2 — Préavis en cas de rupture à l'initiative de l'employeur",
        actions: [
          "Repérez la durée applicable à l'employeur et les motifs éventuels.",
          "Vérifiez s'il existe une indemnité compensatrice.",
        ],
      },
      {
        title: 'Case 3 — Symétrie ou asymétrie et conséquences',
        actions: [
          "Comparez les deux durées ; calculez l'écart en jours et en USD : (écart en jours) × (salaire mensuel ÷ 30).",
          "Notez la conséquence pratique : combien de jours pouvez-vous être sans revenu avant de trouver autre chose.",
        ],
      },
    ],
    example: {
      title: "Article 12 du contrat de Joël et cochage de la section 7",
      lines: [
        "Texte : « Le salarié peut démissionner moyennant un préavis de 60 jours. L'organisation peut rompre le contrat moyennant un préavis de 15 jours. »",
        "☒ Préavis de démission : 60 jours. ☒ Préavis de l'employeur : 15 jours.",
        "☐ Symétrie : non. Écart de 45 jours. Exposition de Joël : 45 × (2 900 ÷ 30) = 4 350 USD de revenu qu'il pourrait perdre si l'employeur rompt avec 15 jours.",
        "Question 3 (priorité Moyenne) : aligner les deux durées. Section 7 : 2 cases cochées sur 3.",
      ],
    },
    result: "Section 7 : une asymétrie de 45 jours chiffrée à 4 350 USD, et une question claire : aligner les préavis. La clause est lue, pas seulement parcourue.",
    pitfall: "Cocher « durée de préavis » sans regarder l'autre sens : une clause peut être parfaitement claire et profondément asymétrique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 9 sur 9',
    title: 'Faire la synthèse de la lecture : compter, regrouper, chiffrer, hiérarchiser',
    intro: "Pourquoi : après les 7 sections, vous avez des cases ouvertes éparpillées. La synthèse les transforme en un petit nombre de questions classées. Un contrat qui ne répond pas clairement à une question posée n'est pas encore prêt à être signé. Entrée : sections 1 à 7 cochées. Durée : 20 minutes.",
    steps: [
      {
        title: 'Compter',
        actions: [
          "Comptez les cases cochées et les cases ouvertes par section et au total.",
          "Repérez les sections entièrement ouvertes : ce sont les silences les plus lourds.",
        ],
      },
      {
        title: 'Regrouper en questions',
        actions: [
          "Regroupez les cases ouvertes par thème : une question par clause, jamais une question par case.",
          "Formulez chaque question en une ligne : clause concernée + point à clarifier.",
        ],
      },
      {
        title: 'Chiffrer et hiérarchiser',
        actions: [
          "Chiffrez ce qui est chiffrable : coût annuel, exposition en jours, montant en jeu.",
          "Classez : Haute si un refus changerait votre décision, Moyenne si le coût est réel mais supportable, Basse sinon.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Sections', 'Enjeu estimé', 'Priorité'],
      rows: [
        ['Q1 — Plafond santé, medevac, famille, exclusions', '3', 'Sécurité de 4 personnes ; non chiffrable', 'Haute'],
        ['Q2 — R&R : suppression de la condition budgétaire, destination, transport financé, jours en plus des congés', '4', '720 USD par an', 'Haute'],
        ['Q3 — Préavis : alignement des durées', '7', '4 350 USD d\'exposition', 'Moyenne'],
        ['Q4 — Installation et déménagement : avance de loyer, transport de la famille', '2 et 5', '1 350 + 600 = 1 950 USD', 'Moyenne'],
        ['Q5 — Retour de fin de contrat et indemnité', '6', 'Jusqu\'à 2 900 USD', 'Basse'],
      ],
    },
    result: "Bilan de Joël : 8 cases cochées sur 23, 15 ouvertes regroupées en 5 questions chiffrées. Les enjeux quantifiables cumulent 1 950 + 720 = 2 670 USD la première année, hors medevac, préavis et indemnité de fin de contrat.",
    pitfall: "Poser 15 questions, une par case : le destinataire répondra aux plus faciles. Regroupez, classez, et envoyez les 3 plus importantes en premier.",
  },

  // ───────── PROCÉDURE 8 — QUESTIONS ET RÉPONSES ÉCRITES (4 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Remplir la section 8 : question par question, clause par clause',
    intro: "Pourquoi : la section « Questions à poser avant signature » est la partie la plus souvent négligée alors qu'elle est la plus utile. Elle vous fournit un espace pour la question et un espace pour la réponse écrite. Entrée : la synthèse de l'étape 9 de la Procédure 7. Durée : 20 minutes.",
    steps: [
      {
        title: 'Lire la structure de la section 8',
        actions: [
          "Le template contient 3 blocs : « Question n — clause concernée et point à clarifier », suivi de « Réponse obtenue (par écrit, date) ».",
          "Si vous avez plus de 3 questions, copiez-collez un bloc entier (question et réponse) autant de fois que nécessaire.",
        ],
      },
      {
        title: 'Rédiger chaque question en 3 éléments',
        actions: [
          "La clause : article et section de la checklist.",
          "Le point à clarifier : une demande précise (plafond en USD, fréquence, destination, durée).",
          "La forme de réponse souhaitée : « par écrit », « par avenant » ou « par ajout au contrat ».",
        ],
      },
      {
        title: 'Garder la réponse vide',
        actions: [
          "Laissez l'espace « Réponse obtenue » vide jusqu'à réception d'un écrit.",
          "Une réponse orale se note dans le carnet d'échanges, pas dans cette case.",
        ],
      },
    ],
    example: {
      title: 'Section 8 de Joël — 5 blocs de question (réponses encore vides)',
      lines: [
        "Question 1 — Article 5, section 3 : préciser le plafond annuel de remboursement, la medevac (incluse ou non, plafond), la couverture de l'épouse et des 2 enfants, la liste des exclusions ; réponse souhaitée par écrit avec résumé de la police.",
        "Question 2 — Article 6, section 4 : supprimer « en fonction des disponibilités budgétaires », préciser la destination (Kigali) et le financement du transport, confirmer que les 5 jours s'ajoutent aux congés annuels ; par avenant.",
        "Question 3 — Article 12, section 7 : aligner les préavis de démission (60 jours) et de rupture par l'employeur (15 jours) sur une durée unique ; par avenant.",
        "Question 4 — Articles 4 et 7, sections 2 et 5 : préciser la prise en charge des frais d'installation (avance de loyer) et du déménagement de la famille de Goma à Bukavu ; par écrit.",
        "Question 5 — Article 11, section 6 : préciser la prise en charge du retour de Joël et de sa famille, et l'existence ou non d'une indemnité de fin de contrat ; par écrit.",
      ],
    },
    result: "Section 8 complétée : 5 blocs de question, dont 2 par copier-coller, avec la forme de réponse attendue. Les cases « Réponse obtenue » restent vides.",
    pitfall: "Formuler une question fermée (« le R&R est-il financé ? ») : une réponse « oui » ne vous donne ni destination, ni fréquence, ni montant. Demandez le chiffre ou la précision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Envoyer les questions par courriel et demander une réponse écrite',
    intro: "Pourquoi : une clarification obtenue oralement pendant un appel n'a pas la même valeur qu'une clarification actée par écrit si un désaccord survient une fois en poste. Entrée : la section 8 rédigée. Durée : 20 minutes.",
    steps: [
      {
        title: 'Composer le courriel',
        actions: [
          "Objet : poste, nom, « questions à clarifier avant signature ».",
          "Corps : un remerciement, le nombre de questions, puis chaque question numérotée avec l'article concerné.",
          "Fin : la forme de réponse souhaitée (écrit, avenant), une date de réponse souhaitée et votre disponibilité pour un appel de confirmation.",
        ],
      },
      {
        title: 'Envoyer à la bonne personne',
        actions: [
          "Adressez le courriel à la personne qui a émis l'offre (ici le RH régional) ; mettez en copie le responsable hiérarchique seulement si elle l'a elle-même autorisé.",
          "Joignez la checklist ? Non : envoyez les questions dans le corps du message, lisibles sur téléphone.",
        ],
      },
      {
        title: 'Noter l\'envoi',
        actions: [
          "Enregistrez le courriel envoyé en PDF dans « 03_Echanges-ecrits ».",
          "Ajoutez une ligne au carnet d'échanges avec la date de réponse attendue.",
        ],
      },
    ],
    example: {
      title: "Courriel de Joël — jeudi 04/02/2027, 8 h 30, à M. Lemaire",
      lines: [
        "Objet : Contrat Responsable MEAL, Bukavu — 5 questions à clarifier avant signature",
        "Monsieur Lemaire, merci pour le projet de contrat reçu le 2 février. Je l'ai lu avec attention ; avant de le signer, j'ai 5 questions, par ordre d'importance :",
        "1. Article 5 — assurance santé : quel est le plafond annuel de remboursement, la medevac est-elle incluse et avec quel plafond, l'épouse et les 2 enfants sont-ils couverts, et quelles sont les exclusions ? 2. Article 6 — R&R : pouvez-vous supprimer la condition budgétaire, confirmer la destination (Kigali), le financement du transport et le fait que les 5 jours s'ajoutent aux congés annuels ?",
        "3. Article 12 — préavis : pouvons-nous aligner les durées (60 jours côté salarié, 15 jours côté organisation) ? 4. Articles 4 et 7 — installation : une avance de loyer et le déménagement de ma famille de Goma à Bukavu sont-ils pris en charge ? 5. Article 11 — fin de contrat : le retour du salarié et de sa famille est-il pris en charge, et existe-t-il une indemnité de fin de contrat ?",
        "Pourriez-vous me répondre par écrit, si possible avec un avenant pour les points 2 et 3, avant lundi 8 février à 12 h ? Je suis disponible pour un appel de confirmation. Bien cordialement, Joël Kabeya",
      ],
    },
    result: "Un courriel numéroté de 5 questions, avec leurs articles, une forme de réponse et une date. Il est envoyé le jeudi 04/02 à 8 h 30, 4 jours avant la date de signature envisagée.",
    pitfall: "Poser les questions seulement lors d'un appel de « mise au point » : si la réponse n'est pas écrite, elle n'existe pas pour le contrat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: 'Obtenir et vérifier la réponse écrite, relancer si nécessaire',
    intro: "Pourquoi : une réponse acceptable est datée, signée par une personne habilitée, et reprend votre question point par point. Entrée : la réponse de l'employeur. Durée : 20 minutes à la réception, plus une relance éventuelle.",
    steps: [
      {
        title: 'Vérifier la forme de la réponse',
        actions: [
          "Acceptable : courriel du RH qui répond point par point, avenant signé, annexe au contrat, résumé de police joint.",
          "Insuffisant : « nous verrons au moment de la mise en place », « conformément à notre politique » sans le texte, un appel non confirmé.",
        ],
      },
      {
        title: 'Vérifier le fond de chaque réponse',
        actions: [
          "Chaque réponse contient-elle le chiffre, la durée ou la précision demandée ?",
          "Classez chaque réponse : Obtenu, Partiel ou Refusé.",
        ],
      },
      {
        title: 'Relancer si la date est dépassée',
        actions: [
          "Relancez une fois, par écrit, le lendemain de la date promise, en rappelant les points manquants.",
          "Si un point reste sans réponse, demandez-le dans le contrat final : « merci d'ajouter ce point par avenant ».",
        ],
      },
    ],
    example: {
      title: "Réponse reçue par Joël — lundi 08/02/2027, 11 h 20",
      lines: [
        "Q1 : plafond annuel de 250 000 USD par personne, medevac incluse avec un plafond de 500 000 USD, épouse et 2 enfants couverts ; liste des exclusions et résumé de la police en annexe. → Obtenu.",
        "Q2 : condition budgétaire supprimée par avenant ; billet Bukavu–Kigali aller-retour financé pour le salarié ; 5 jours en plus des congés annuels ; famille non financée. → Partiel.",
        "Q3 : préavis aligné à 45 jours dans les deux sens, par avenant. → Obtenu (45 au lieu de 30 espérés).",
        "Q4 : forfait de déménagement de 600 USD ; avance de loyer de 1 200 USD remboursable en 6 retenues de 200 USD. → Partiel (l'avance est un prêt).",
        "Q5 : retour du salarié et de sa famille pris en charge ; pas d'indemnité de fin de contrat, non prévue par la politique de l'organisation. → Partiel (le retour obtenu ; l'indemnité refusée).",
      ],
    },
    result: "Cinq réponses écrites, classées : 2 obtenues, 3 partielles. Aucune n'est un « oui » vague : chacune contient un chiffre ou une précision.",
    pitfall: "Prendre « conformément à notre politique » pour une réponse : sans le texte de la politique, vous ne savez toujours pas ce qui vous est garanti.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Reporter les réponses dans la checklist et dans les statuts',
    intro: "Pourquoi : les réponses n'ont de valeur que rangées au bon endroit : dans la checklist (réponse et date), dans l'onglet « Points de négociation » (statut) et dans le dossier de trace. Entrées : réponses écrites, checklist, onglet. Durée : 20 minutes.",
    steps: [
      {
        title: "Compléter « Réponse obtenue (par écrit, date) »",
        actions: [
          "Pour chaque bloc, recopiez la réponse en une ou deux lignes, avec la date et la forme (courriel, avenant).",
          "Pour les réponses partielles, écrivez ce qui a été obtenu et ce qui ne l'a pas été.",
        ],
      },
      {
        title: 'Recocher les cases de la checklist',
        actions: [
          "Cochez ☒ les cases désormais couvertes par un écrit ; laissez ☐ ce qui est refusé ou reste partiel, avec la mention « accepté en connaissance de cause » si c'est le cas.",
          "Recomptez : cases cochées, cases ouvertes assumées.",
        ],
      },
      {
        title: "Mettre à jour l'onglet « Points de négociation »",
        actions: [
          "Colonne D : « Accepté » pour tout point confirmé par écrit ; « Négocié » pour un point discuté sans écrit ou refusé.",
          "Gardez les arguments de la colonne B : ils serviront à la prochaine négociation.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Réponse obtenue (par écrit, date)', 'Cases recochées', 'Statut du point'],
      rows: [
        ['Q1 — Santé et medevac', 'Courriel du 08/02/2027 : 250 000 USD par personne ; medevac 500 000 USD ; famille couverte ; exclusions et résumé en annexe', 'Section 3 : 4 sur 4', 'Accepté'],
        ['Q2 — R&R', "Avenant du 08/02/2027 : suppression de la condition budgétaire ; Bukavu–Kigali financé pour le salarié ; 5 jours en plus des congés ; famille non financée", 'Section 4 : 3 sur 3', 'Accepté'],
        ['Q3 — Préavis', "Avenant du 08/02/2027 : 45 jours dans les deux sens", 'Section 7 : 3 sur 3', 'Accepté'],
        ['Q4 — Installation et déménagement', 'Courriel du 08/02/2027 : forfait de 600 USD ; avance de loyer de 1 200 USD remboursable en 6 mois ; retour de la famille couvert', 'Section 2 (installation) et section 5 : 4 sur 4', 'Accepté'],
        ['Q5 — Fin de contrat', "Courriel du 08/02/2027 : retour pris en charge ; indemnité refusée", 'Section 6 : 1 sur 3 (le retour)', 'Négocié'],
      ],
    },
    result: "Checklist de Joël après réponses : 20 cases cochées sur 23. Les 3 cases laissées ouvertes le sont en connaissance de cause : révision salariale discrétionnaire, indemnité de fin de contrat refusée, traitement selon l'origine de la rupture non précisé. 4 points « Accepté » et 1 « Négocié ».",
    pitfall: "Cocher une case sur la base de la réponse orale reçue au téléphone : sans écrit, laissez ☐.",
  },

  // ───────── PROCÉDURE 9 — SIGNATURE ET DOSSIER DE TRACE (3 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 3',
    title: 'Faire le contrôle final : le contrat final reflète-t-il vos écrits ?',
    intro: "Pourquoi : une promesse écrite dans un courriel n'a de force que si le contrat final la reprend, ou si l'avenant lui est annexé. Vous comparez, ligne à ligne, la version à signer à vos échanges. Entrées : contrat final, avenants, courriels. Durée : 30 minutes.",
    steps: [
      {
        title: 'Comparer le contrat final aux écrits',
        actions: [
          "Prenez le tableau « Question — Réponse écrite » et vérifiez que chaque réponse apparaît dans le contrat final ou dans un avenant à signer en même temps.",
          "Vérifiez que les chiffres du contrat final (salaire, indemnité, préavis, plafonds) sont ceux des écrits, au chiffre près.",
        ],
      },
      {
        title: 'Repérer ce qui a changé',
        actions: [
          "Comparez la version finale à la première version : toute nouvelle clause doit être expliquée.",
          "Relisez les articles de durée, de période d'essai, de fonctions et de droit applicable.",
        ],
      },
      {
        title: 'Décider : signer, demander une correction, suspendre',
        actions: [
          "Signer : tout est conforme ou les écarts sont assumés.",
          "Demander une correction : un écart sur un chiffre ou une clause promise.",
          "Suspendre : un refus sur un point Haute après réponse écrite.",
        ],
      },
    ],
    example: {
      title: "Contrôle final de Joël — mardi 09/02/2027",
      lines: [
        "Contrat final reçu à 15 h : 6 pages, 14 articles, deux avenants (R&R et préavis) annexés.",
        "Comparaison : salaire 2 900 net conforme ; indemnité de logement 400 conforme ; plafonds santé et medevac repris à l'annexe 2 ; R&R conforme à l'avenant 1 ; préavis de 45 jours conforme à l'avenant 2 ; retour de la famille repris à l'article 11.",
        "Écart repéré : l'avance de loyer de 1 200 USD n'apparaît pas dans le contrat final. Demande de correction envoyée à 16 h 10 ; correctif reçu à 17 h 40 (nouvel article 4 bis).",
        "Décision : signer le mercredi 10/02 à 14 h, après vérification du nouveau PDF.",
      ],
    },
    result: "Le contrat final reflète les 5 réponses écrites, après une correction. Joël peut signer sans zone d'ombre sur les 6 éléments de la checklist.",
    pitfall: "Signer parce que « tout a été dit » : seul compte ce qui est écrit dans le document que vous signez, avenants compris.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 3',
    title: 'Signer proprement le contrat et ses annexes',
    intro: "Pourquoi : la signature est l'acte qui engage. Elle se fait sur la bonne version, complète, avec chaque page paraphée et une copie conservée. Entrée : contrat final vérifié, avenants. Durée : 20 minutes.",
    steps: [
      {
        title: 'Vérifier la version',
        actions: [
          "Contrôlez le nom du fichier, le nombre de pages et le numéro de version en pied de page.",
          "Vérifiez que les avenants et annexes citées dans le contrat sont bien joints.",
        ],
      },
      {
        title: 'Signer et parapher',
        actions: [
          "Paraphez chaque page et signez à la page prévue, avec la date et la mention éventuelle « lu et approuvé ».",
          "Signez aussi chaque avenant ; vérifiez que l'organisation signe de son côté.",
        ],
      },
      {
        title: 'Transmettre et conserver',
        actions: [
          "Renvoyez le contrat signé par courriel (scan ou signature électronique) et, si demandé, l'original par courrier.",
          "Conservez une copie complète et réclamez le contrat contresigné par l'organisation.",
        ],
      },
    ],
    example: {
      title: "Signature de Joël — mercredi 10/02/2027",
      lines: [
        "14 h : vérification du PDF final : version v3, 7 pages (article 4 bis inclus), deux avenants joints.",
        "14 h 20 : signature électronique du contrat et des 2 avenants ; chaque page paraphée.",
        "14 h 40 : envoi par courriel à M. Lemaire avec accusé de réception demandé ; original expédié par courrier le jeudi 11/02.",
        "Jeudi 12/02, 10 h : contrat contresigné par Mme Mbuyi reçu et enregistré dans « 04_Contrat ».",
      ],
    },
    result: "Contrat et avenants signés, contresignés et archivés. La négociation est terminée : tout le reste est exécution.",
    pitfall: "Signer une version provisoire « pour avancer » en attendant la version finale : vous engagez ce que vous ne pouvez plus modifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 3',
    title: 'Constituer le dossier de trace complet et prévenir votre employeur actuel',
    intro: "Pourquoi : le dossier vous sert en cas de désaccord ultérieur sur l'interprétation d'une clause, et pour toute négociation future, la vôtre ou celle d'un collègue que vous conseillerez. Entrée : tous les fichiers du dossier de négociation. Durée : 20 minutes.",
    steps: [
      {
        title: 'Compléter les 5 sous-dossiers',
        actions: [
          "01_Offre-recue : lettre d'offre, annonce, fiche de réception.",
          "02_Benchmark : classeur v1 et v2, carte de négociation, notes sources.",
          "03_Echanges-ecrits : tous les courriels (offre, délai, contre-offre, questions, réponses).",
          "04_Contrat : projet, contrat final, avenants, contrat contresigné, checklist complétée.",
          "05_Notes-appels : comptes rendus et carnet d'échanges.",
        ],
      },
      {
        title: 'Sécuriser',
        actions: [
          "Exportez en PDF les courriels importants et conservez une copie sur un second support.",
          "Nommez les fichiers selon la règle « AAAA-MM-JJ_Expediteur_Objet ».",
          "Gardez le dossier pendant toute la durée du contrat et au moins 12 mois après, en accès restreint : il contient des données personnelles et des informations confidentielles.",
        ],
      },
      {
        title: 'Prévenir l\'employeur actuel et clore',
        actions: [
          "Une fois le contrat contresigné, informez votre employeur actuel par écrit, en respectant votre préavis.",
          "Remerciez les personnes qui vous ont aidé (réseau, partenaire de répétition) et rangez votre carte de négociation pour la prochaine fois.",
        ],
      },
    ],
    example: {
      title: "Dossier de trace de Joël — jeudi 11/02/2027",
      lines: [
        "01_Offre-recue : 3 fichiers. 02_Benchmark : 4 fichiers (classeur v1, classeur v2, carte, notes). 03_Echanges-ecrits : 11 courriels exportés en PDF.",
        "04_Contrat : projet du 02/02, contrat final v3, avenants 1 et 2, contrat contresigné, checklist complétée (20 cases cochées sur 23).",
        "05_Notes-appels : compte rendu de l'appel du 28/01 et carnet d'échanges (14 lignes).",
        "Courriel de notification à Alliance Santé Grands Lacs envoyé le 11/02/2027, avec proposition de passation jusqu'au 28/02 ; remerciements à Jean-Paul Mukendi et à Chantal Mwamba.",
      ],
    },
    result: "Un dossier de 5 sous-dossiers et de 25 documents environ, une sauvegarde, un préavis respecté. Joël prend son poste le lundi 01/03/2027.",
    tip: "Rouvrez ce dossier à la première revue de performance : les arguments de la colonne B et les chiffres de la grille v1 sont votre préparation pour la renégociation suivante.",
  },

  // ────────────────────── CAS RÉSOLUS DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: "Cas résolu (1/5) — Joël : le raisonnement, de l'offre à la signature",
    scenario: "Joël Kabeya reçoit le lundi 25/01/2027 une offre de 2 500 USD nets pour le poste de Responsable MEAL à Bukavu, avec une réponse attendue sous 48 h. Il est tenté d'accepter : après un an de recherche, c'est la première offre à son niveau.",
    steps: [
      { title: "Réception et délai (Procédure 1)", body: "Il note l'offre, repère 7 silences, répond par un courriel de remerciement sans chiffre et obtient 69 heures. Il ouvre le dossier de négociation et le carnet d'échanges." },
      { title: "Benchmarking (Procédure 2)", body: "Il saisit 4 références (annonce 2 700 ; ONU NO-C 3 200 ; ONGI 2 800 avec logement fourni ; privé 3 800) et l'offre de 2 500 : elle est sous la plus basse des références." },
      { title: "Fourchette (Procédure 3)", body: "A20 = 2 800 (plancher du module 01, milieu de l'annonce, surcoût de mobilité) ; B20 = 3 200 (2 références au moins à ce niveau). Statut : « Sous la fourchette cible — négociation fortement recommandée »." },
      { title: "Argumentaire et appel (Procédures 4 et 5)", body: "7 arguments, 3 priorités Haute. Appel du jeudi 28/01 : question ouverte, ancrage à 3 200 avec 3 sources, plafond de grille de 2 900 révélé, bascule vers les conditions, confirmation écrite demandée." },
      { title: "Contre-offre (Procédure 6)", body: "Offre révisée : 2 900 + 400 de logement. Disponible après loyer : de 2 050 à 2 850 par mois, soit + 9 600 par an. Il accepte le principe, sous réserve du contrat." },
      { title: "Contrat, questions et signature (Procédures 7, 8, 9)", body: "Lecture avec la checklist : 8 cases cochées sur 23, 5 questions envoyées, 5 réponses écrites, 20 cases cochées. Signature le mercredi 10/02/2027." },
    ],
    result: "Sans changer de poste visé ni de compétence, Joël passe de 2 050 à 2 850 USD disponibles par mois, obtient la medevac et le R&R financé par écrit, et signe en connaissance de cause. L'ensemble a coûté environ 12 heures.",
  },
  {
    type: 'case-study',
    title: "Cas résolu (2/5) — Onglet « Benchmarking » final de Joël",
    scenario: "Le contenu des trois sections de l'onglet « Benchmarking », telle que Joël l'avait au jeudi 28/01/2027 à 10 h, avant l'appel.",
    steps: [],
    table: {
      columns: ['Section', 'Cellules', 'Contenu saisi ou calculé'],
      rows: [
        ['1 — Références', 'Ligne 5', 'ONU (grille CFPI/ICSC) ; Administrateur national NO-C, suivi-évaluation ; Bukavu (RDC) ; 3200 ; USD ; Non ; 2027-01-26 — barème CFPI/ICSC'],
        ['1 — Références', 'Ligne 6', 'ONGI (réseau / plateforme salaires) ; MEAL Manager, ONG internationale santé ; Bukavu (RDC) ; 2800 ; USD ; Oui (logement fourni) ; 2027-01-26 — témoin du réseau'],
        ['1 — Références', 'Ligne 7', 'Annonce du poste (fourchette indiquée) ; Responsable MEAL (MEAL Manager) ; Bukavu (RDC) ; 2700 ; USD ; Non précisé ; 2027-01-26 — fourchette 2 400 à 3 000, milieu retenu'],
        ['1 — Références', 'Ligne 8', 'Secteur privé (comparable) ; Responsable suivi-évaluation, cabinet de conseil ; Régional (Grands Lacs) ; 3800 ; USD ; Non ; 2027-01-27 — plateforme privée, brut converti'],
        ['2 — Offre reçue', 'Ligne 16', 'Responsable MEAL (MEAL Manager) ; Bukavu (RDC) ; 2500 ; USD ; Non précisé ; 2027-01-25'],
        ['3 — Fourchette', 'A20, B20', 'Fourchette basse 2800 ; fourchette haute 3200 (saisies)'],
        ['3 — Calculs', 'C20 à G20', 'C20 = 3 125 ; D20 = −625 ; E20 = −300 ; F20 = −700 ; G20 = « Sous la fourchette cible — négociation fortement recommandée »'],
        ['Hors template', 'A24', '=MEDIAN(D5:D8) = 3 000 : médiane, car C20 calcule la moyenne'],
      ],
    },
    result: "Version v2 après la contre-offre : C16 = 2 900 ; D20 = −225 ; E20 = +100 ; F20 = −300 ; G20 = « Dans la fourchette — marge de négociation possible ».",
  },
  {
    type: 'case-study',
    title: "Cas résolu (3/5) — Onglet « Points de négociation » final de Joël",
    scenario: "Les 7 lignes de l'argumentaire, avec leurs priorités et leurs statuts au vendredi 12/02/2027, après les réponses écrites et la signature.",
    steps: [],
    table: {
      columns: ['A — Élément', 'B — Argument factuel (abrégé)', 'C — Priorité', 'D — Statut'],
      rows: [
        ['Salaire de base', 'Médiane des références 20 % au-dessus de l\'offre ; 7 ans d\'expérience pour 5 exigés ; budget MEAL exécuté à 96 %', 'Haute', 'Accepté (2 900 USD net)'],
        ['Logement', 'Logement fourni par les organisations comparables ; loyer médian de 450 USD', 'Haute', 'Accepté (indemnité de 400 USD par mois)'],
        ['Assurance santé / évacuation médicale', 'Assurance « standard » sans plafond ni medevac ; famille de 3 personnes à couvrir', 'Haute', 'Accepté (250 000 / 500 000 USD, famille couverte)'],
        ['R&R (Rest & Recuperation)', 'Offre « selon disponibilité budgétaire » ; cycle toutes les 8 semaines à confirmer', 'Moyenne', 'Accepté (Bukavu–Kigali financé, salarié seul)'],
        ["Billets d'avion", 'Aucune mention du transport de prise de poste, du déménagement ni du retour', 'Moyenne', 'Accepté (forfait de 600 USD, retour de la famille)'],
        ['Clause de préavis', 'Durée à vérifier dans les deux sens ; protéger la scolarité des enfants', 'Basse', 'Accepté (45 jours dans les deux sens)'],
        ['Indemnité de fin de contrat', 'Non mentionnée ; contrat de 12 mois renouvelable', 'Basse', 'Négocié (refusée par la politique de l\'organisation)'],
      ],
    },
    result: "Six points sur sept obtenus par écrit, un refusé en connaissance de cause. Les trois priorités Haute sont toutes acquises : c'est le signe que la priorisation a fonctionné.",
  },
  {
    type: 'case-study',
    title: "Cas résolu (4/5) — Checklist de lecture de contrat de Joël, état final",
    scenario: "Le tableau de bord de la checklist, après lecture du contrat du 02/02 et réception des réponses écrites du 08/02. Règle appliquée : ☒ seulement pour un point vérifié par écrit et accepté ; ☐ pour tout point refusé, absent ou non précisé.",
    steps: [],
    table: {
      columns: ['Section', 'Cases', 'Avant questions', 'Après réponses écrites', 'Observation'],
      rows: [
        ['1 — Salaire et modalités', '4', '3 cochées', '3 cochées', 'Révision discrétionnaire, notée pour la revue de 6 mois'],
        ['2 — Logement', '3', '2 cochées', '3 cochées', 'Avance de loyer de 1 200 USD remboursable : un prêt, accepté'],
        ['3 — Assurance santé et medevac', '4', '0 cochée', '4 cochées', 'Plafonds, famille et exclusions en annexe'],
        ['4 — R&R', '3', '1 cochée', '3 cochées', 'Transport financé pour le salarié seul ; famille non financée, assumé'],
        ["5 — Billets d'avion", '3', '0 cochée', '3 cochées', 'Forfait de 600 USD et retour de la famille couvert'],
        ['6 — Rapatriement et fin de contrat', '3', '0 cochée', '1 cochée', 'Retour pris en charge ; indemnité refusée ; traitement selon la rupture non précisé'],
        ['7 — Clause de préavis', '3', '2 cochées', '3 cochées', 'Symétrie à 45 jours par avenant'],
        ['8 — Questions', '5 blocs', '5 vides', '5 réponses datées', 'Toutes les réponses sont écrites'],
        ['Total des sections 1 à 7', '23', '8 cochées', '20 cochées', '3 cases ouvertes, assumées'],
      ],
    },
    result: "Le contrat passe de 8 à 20 cases cochées sur 23 grâce à des écrits. Les 3 cases ouvertes sont des risques connus, chiffrés et choisis, pas des surprises : c'est le critère d'un contrat signé en connaissance de cause.",
  },
  {
    type: 'case-study',
    title: "Cas résolu (5/5) — Le cas du module : « Négocier salaire ET conditions d'expatriation sans faire capoter l'offre »",
    scenario: "Nadine Rukundo (fictive), sélectionnée pour un poste de coordination de projet en contrat d'expatriation de 12 mois renouvelable, dans un pays où le coût de la vie est élevé et l'accès aux soins limité hors de la capitale (« Pays X »). L'offre écrite indique un salaire net de 3 400 USD, aucune mention de logement, une assurance santé « standard » sans plafond ni medevac, et un R&R « selon disponibilité budgétaire ». Le RH demande une réponse sous 48 h.",
    steps: [
      { title: 'Première réponse : mauvaise (à chaud, sans données)', body: "« C'est un peu bas pour moi, il me faudrait au moins 20 % de plus. » Un chiffre sans justification, perçu comme arbitraire : le recruteur doit deviner sur quoi il repose." },
      { title: 'Première réponse : mauvaise (ultimatum)', body: "« Si le logement n'est pas inclus, je refuse l'offre. » Une clause fermée avant même d'avoir posé la question de façon ouverte." },
      { title: 'Première réponse : bonne (délai et ouverture factuelle)', body: "« Merci pour cette offre, je suis très intéressée par le poste. Je vous propose de vous revenir sous 48 h avec quelques points à clarifier, notamment sur le logement et la couverture santé, avant de confirmer. »" },
      { title: "48 h plus tard : l'ancrage factuel", body: "« D'après les grilles observées pour un poste comparable à ce niveau et dans cette zone, la fourchette se situe plutôt entre 3 600 et 4 200 USD ; je me situerais dans le haut de cette fourchette compte tenu de mes 5 ans de coordination de projets de 2 M USD. Par ailleurs, l'offre ne précise ni le logement ni le plafond de la couverture medevac : pourriez-vous préciser ces deux points ? »" },
      { title: "Réponse du RH : « Le logement n'est effectivement pas inclus, mais nous pouvons revoir le salaire de base à la marge, à 3 600 USD. »", body: "Mauvaise réponse : accepter immédiatement sans faire reformuler l'ensemble de l'offre révisée par écrit. Bonne réponse : « Je vous remercie pour cet ajustement. Pourriez-vous me confirmer par écrit le montant révisé, ainsi que le plafond de la couverture medevac évoqué plus tôt, avant que je vous transmette ma réponse définitive ? »" },
    ],
    result: "La négociation reste factuelle jusqu'au bout et rien n'est acté oralement sans confirmation écrite. Les mêmes chiffres, saisis dans la grille, sont détaillés à la diapositive suivante.",
  },
  {
    type: 'case-study',
    title: "Cas résolu (5/5, suite) — Le cas du module dans la grille et dans l'argumentaire",
    scenario: "Les valeurs pré-remplies du template (« Pays X ») correspondent exactement à ce cas : voici ce que la grille calcule et ce que Nadine en déduit.",
    steps: [],
    table: {
      columns: ['Élément de la grille', 'Valeur', 'Lecture'],
      rows: [
        ['Références (D5 à D8)', 'ONU P-3 : 4 200 ; ONGI (logement fourni) : 3 600 ; annonce : 3 400 ; privé : 4 800', "Quatre références, trois familles : minimum de la méthode dépassé"],
        ['Offre (C16)', '3 400', "Égale à la référence la plus basse : l'annonce"],
        ['Fourchette (A20 et B20)', '3 600 et 4 200', 'Basse = référence ONGI ; haute = référence ONU'],
        ['C20 (moyenne affichée)', '4 000', 'Médiane réelle : (3 600 + 4 200) ÷ 2 = 3 900'],
        ['D20, E20, F20', '−600 ; −200 ; −800', "L'offre est en dessous de la moyenne, de la fourchette basse et de la fourchette haute"],
        ['G20', 'Sous la fourchette cible — négociation fortement recommandée', "Décision : négocier salaire et conditions"],
        ['Argument salaire (onglet Points)', "Médiane de 3 900 supérieure d'environ 15 % à l'offre (3 900 ÷ 3 400 = 1,147)", 'Priorité Haute'],
        ['Après le geste du RH (C16 = 3 600)', 'D20 = −400 ; E20 = 0 ; F20 = −600 ; statut « Dans la fourchette — marge de négociation possible »', "Le salaire atteint la fourchette basse ; mais sans logement, une référence ONGI équivalente à 3 600 + loyer vaut davantage"],
      ],
    },
    example: {
      title: 'Prochain geste de Nadine après la révision à 3 600 USD',
      lines: [
        "Le salaire a progressé de 200 USD ; le logement, lui, n'est toujours pas pris en charge alors que la référence ONGI à 3 600 USD l'inclut.",
        "Avec un loyer estimé à 900 USD, l'équivalent hors logement de la référence ONGI est de 4 500 USD : l'offre révisée reste 900 USD en dessous.",
        "Demande suivante, par écrit : une indemnité de logement ou, à défaut, une revue salariale à 6 mois sur objectifs, plus la confirmation écrite du plafond medevac. Elle ne formule aucun ultimatum.",
      ],
    },
    result: "Même un « oui » au salaire ne clôt pas la négociation : la valeur d'un package se mesure ligne par ligne, et le logement est ici la ligne qui pèse le plus.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: "Exercice noté 1 — Benchmarking et fourchette pour l'offre d'Amina",
    instructions: "Amina est la logisticienne du module 01 : 5 ans de terrain, équipe de 8 personnes, budget logistique de 250 000 USD arbitré. Elle reçoit le lundi 1er mars 2027 une offre de Supply Chain Manager d'Horizon Logistique Solidaire (ONG internationale fictive) : « Pays Y » (capitale), 12 mois renouvelables, prise de poste le 1er avril 2027, 3 000 USD net par mois, logement non précisé, assurance santé « selon la police de l'organisation », R&R « selon disponibilité budgétaire ». Elle gagne aujourd'hui 2 700 USD net par mois, logement fourni sur sa mission actuelle. Complétez le template grille-benchmarking-salarial-negociation.xlsx avec les données ci-dessous.",
    steps: [
      {
        title: 'Préparer le classeur',
        actions: [
          "Enregistrez une copie « AMINA_benchmark.xlsx » et remplacez les 4 références d'exemple (lignes 5 à 8) et l'offre d'exemple (ligne 16) par les données du tableau.",
          "Saisissez dans la colonne D uniquement des nombres ; mettez le logement en colonne F et la date ou la source en colonne G.",
        ],
      },
      {
        title: 'Saisir les 4 références et l\'offre',
        actions: [
          "Saisissez les 4 références du tableau et l'offre de 3 000 USD (ligne 16, logement « Non précisé », date 2027-03-01).",
          "Relevez C20 et calculez à part la médiane avec =MEDIAN(D5:D8) sous la légende.",
        ],
      },
      {
        title: 'Fixer la fourchette et lire l\'écart',
        actions: [
          "Fixez A20 (plancher d'Amina : 2 700 + 15 %, arrondi, plus le surcoût que vous estimez justifié) et B20 (valeur soutenue par au moins 2 références, équivalents hors logement compris).",
          "Relevez D20, E20, F20 et G20 ; notez la décision en une ligne.",
        ],
      },
      {
        title: 'Remplir l\'onglet « Points de négociation »',
        actions: [
          "Remplacez les 6 exemples par un argument factuel pour chaque élément de l'offre d'Amina, dont au moins 3 distincts reposant sur des données du tableau ou sur ses réalisations.",
          "Attribuez au maximum 3 priorités « Haute » ; laissez tous les statuts à « À préparer ».",
        ],
      },
    ],
    table: {
      columns: ['Source (colonne A)', 'Poste / zone (B, C)', 'Net mensuel (D)', 'Logement (F)', 'Date / source (G)'],
      rows: [
        ['ONU (grille CFPI/ICSC)', 'P-3, Logistics Officer, Pays Y (capitale)', '4100', 'Non', '2027-02-24 — barème CFPI + post adjustment'],
        ['ONGI (réseau / plateforme salaires)', 'Supply Chain Manager, ONG internationale, Pays Y', '3500', 'Oui (logement fourni)', '2027-02-25 — ancienne collègue, poste comparable'],
        ['Annonce du poste (fourchette indiquée)', 'Supply Chain Manager, Pays Y', '3100', 'Non précisé', '2027-02-20 — fourchette 2 800 à 3 400, milieu retenu'],
        ['Secteur privé (comparable)', 'Responsable supply chain, distribution, régional', '4400', 'Non', '2027-02-25 — plateforme de salaires privé'],
      ],
    },
    tip: "Loyer estimé à Pays Y (hypothèse d'exercice) : 600 USD par mois. Utilisez-le pour calculer l'équivalent hors logement de la référence ONGI, comme Joël l'a fait à la Procédure 2, étape 6.",
    pitfall: "Prendre B20 égal à la valeur privée (4 400) : une prétention supérieure à la décote assumée du secteur ONG, appuyée par une seule source, ne se défend pas.",
    deliverable: "Le classeur Excel complété : 4 références, l'offre saisie, A20 et B20 justifiés, G20 lu, et l'onglet « Points de négociation » avec au moins 3 arguments factuels distincts, 3 priorités Haute au plus.",
  },
  {
    type: 'exercise',
    title: "Exercice noté 2 — Lecture du contrat d'Amina avec la checklist",
    instructions: "Amina a obtenu un accord de principe à 3 400 USD net par mois. Elle reçoit le projet de contrat dont voici les extraits. Parcourez-le avec la checklist-lecture-contrat-expatriation.docx, cochez ce qui est clair, et rédigez au moins 3 questions concrètes à poser avant signature.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Enregistrez une copie « AMINA_checklist-contrat.docx » et remplissez le cartouche « Rempli par (nom) » et « Date ».",
          "Numérotez les articles du tableau ci-dessous et surlignez-les en vert, orange ou rouge.",
        ],
      },
      {
        title: 'Parcourir les sections 1 à 7',
        actions: [
          "Pour chacune des 23 cases, cochez ☒ uniquement un point vérifié dans le texte et satisfaisant ; laissez ☐ tout point absent ou vague.",
          "Pour chaque case ouverte, écrivez en marge le coût ou le risque estimé.",
        ],
      },
      {
        title: 'Rédiger la section 8',
        actions: [
          "Regroupez les cases ouvertes en au moins 3 questions, chacune avec la clause concernée et le point à clarifier, classées par priorité.",
          "Rédigez le courriel qui les envoie, avec la forme de réponse souhaitée et une date.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Texte du contrat (extrait)'],
      rows: [
        ['3 — Rémunération', 'Le salaire mensuel net est de 3 400 USD, versé en fin de mois. Il peut être révisé selon la performance.'],
        ['4 — Hébergement', "Un hébergement collectif est mis à disposition pendant les 30 premiers jours."],
        ['5 — Santé', "Le salarié est affilié à l'assurance santé de l'organisation."],
        ['6 — Repos', "Le salarié bénéficie de congés de R&R selon les disponibilités budgétaires de l'organisation."],
        ['7 — Voyage', "L'organisation prend en charge le billet aller du salarié vers le lieu d'affectation."],
        ['11 — Fin de contrat', "À l'issue du contrat, le retour du salarié est organisé par l'organisation."],
        ['12 — Préavis', "Le salarié peut démissionner moyennant un préavis de 3 mois. L'organisation peut mettre fin au contrat moyennant un préavis de 15 jours."],
      ],
    },
    tip: "Pour chaque article, posez trois questions : qu'est-ce qui est écrit, qu'est-ce qui manque, qu'est-ce que cela me coûte si je ne le fais pas préciser ?",
    pitfall: "Écrire « poser des questions sur la santé » : une question utile cite l'article, le point précis (plafond en USD, medevac, famille) et la forme de réponse.",
    deliverable: "La checklist complétée (cartouche rempli, sections 1 à 7 cochées ou laissées ouvertes, section 8 avec au moins 3 questions classées) et le courriel de questions prêt à envoyer.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable « Amina » est correct si…',
    items: [
      "Les 4 références et l'offre sont saisies en nombres seuls dans les colonnes D et C16, et plus aucune valeur d'exemple du template ne subsiste.",
      "C20 affiche 3 775 et D20 affiche −775 (offre de 3 000 USD) ; votre médiane calculée à part (=MEDIAN) est de 3 800.",
      "A20 est au moins égal au plancher d'Amina (3 105) et B20 est soutenu par au moins 2 références à ce niveau ou au-dessus (4 100 et 4 400, ou équivalents).",
      "Vous avez lu G20 (« Sous la fourchette cible — négociation fortement recommandée ») et noté une décision en une ligne, avec l'écart principal en USD.",
      "L'onglet « Points de négociation » contient au moins 3 arguments factuels distincts (donnée, réalisation ou contrainte), au plus 3 priorités « Haute », et des statuts « À préparer ».",
      "La checklist identifie les silences des articles 4 (au-delà de 30 jours), 5 (plafond, medevac, famille), 6 (financement du R&R), 7 (retour, famille), 11 (retour, indemnité) et 12 (asymétrie 3 mois / 15 jours).",
      "La section 8 contient au moins 3 questions classées par priorité, chacune avec l'article, le point à clarifier chiffré ou précis et la forme de réponse (écrit ou avenant).",
      "Le courriel est numéroté, cite les articles, demande une réponse écrite avec une date, et ne contient aucun ultimatum.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice d'application — Votre propre négociation, de la réception à la trace",
    instructions: "Appliquez maintenant les 9 procédures à une offre réelle que vous avez reçue ou, à défaut, à une offre plausible pour le poste que vous visez (votre profil de poste idéal du module 01). Bloquez les créneaux dès aujourd'hui ; chaque jour produit un livrable précis.",
    steps: [
      { title: 'Jour 1 (45 min) — Procédure 1', actions: ["Fiche de réception de l'offre (8 rubriques), message de délai de 24 à 72 h, dossier à 5 sous-dossiers et carnet d'échanges ouverts."] },
      { title: 'Jour 2 (2 h) — Procédure 2', actions: ["Grille de benchmarking : au moins 4 références comparables (annonce, ONU, ONGI, privé), conversions notées, offre saisie en C16, médiane calculée à part."] },
      { title: 'Jour 3 (1 h) — Procédure 3', actions: ["A20 et B20 justifiés par vos données, D20 à G20 lus, carte de négociation d'une page (ancrage, cible, plancher, alternative)."] },
      { title: 'Jour 4 (1 h 30) — Procédure 4', actions: ["Onglet « Points de négociation » : 5 à 8 éléments, arguments factuels, 3 priorités Haute au plus, 3 phrases « si… alors »."] },
      { title: 'Jour 5 (45 min) — Procédure 5', actions: ["Répétition à voix haute avec un partenaire (ancrage de 30 secondes, 2 objections), puis échange réel ou simulé ; compte rendu dans le carnet et statuts mis à jour."] },
      { title: 'Jour 6 (1 h) — Procédure 6', actions: ["Note de décision chiffrée sur la contre-offre ou le refus ; grille v2 ; package calculé ; courriel de réponse sans ultimatum."] },
      { title: 'Jours 7 et 8 (3 h) — Procédures 7 et 8', actions: ["Checklist de lecture de contrat complétée (8 sections), synthèse chiffrée, section 8 rédigée, courriel de questions envoyé avec demande de réponse écrite."] },
      { title: 'Jour 9 (45 min) — Procédure 9', actions: ["Contrôle final du contrat et des avenants, signature, dossier de trace complet."] },
    ],
    deliverable: "Votre dossier de négociation : fiche de réception, grille de benchmarking (v1 et v2), onglet « Points de négociation », carte de négociation, checklist de contrat complétée avec au moins 3 questions et leurs réponses écrites, contrat et avenants, et dossier de trace à 5 sous-dossiers.",
  },
  {
    type: 'checklist',
    title: 'Votre négociation personnelle est correcte si…',
    items: [
      "Vous avez obtenu et daté un délai de réflexion de 24 à 72 h avant toute réponse de fond, et vous n'avez prononcé aucun chiffre avant votre benchmarking.",
      "Votre grille croise au moins 2 références de familles différentes (idéalement 4), toutes ramenées à un net mensuel dans une seule devise, avec le logement signalé.",
      "Vos fourchettes basse et haute reposent sur des données et sur une alternative de repli écrite, et vous savez expliquer en une phrase pourquoi chacune.",
      "Votre onglet « Points de négociation » contient au moins 3 arguments factuels distincts, au plus 3 priorités « Haute » et des statuts tenus à jour.",
      "Vous avez posé une question ouverte avant d'annoncer un chiffre, ancré en haut de fourchette avec sa source, et formulé zéro ultimatum.",
      "Chaque accord obtenu à l'oral a été confirmé par écrit avant signature : le dossier contient au moins une réponse écrite par question posée.",
      "La checklist couvre les 8 sections, avec au moins 3 questions notées, et les cases laissées ouvertes sont des risques choisis et chiffrés.",
      "Vous détenez un dossier de trace complet : offre, benchmark, échanges écrits, contrat, avenants et notes d'appels.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Annoncer sa prétention salariale trop tôt et trop bas, faute de benchmarking préalable — un chiffre lancé avant toute recherche est ensuite très difficile à revoir à la hausse. Parade : demander 24 à 72 h et ne parler chiffres qu'avec la grille complétée.",
      "Accepter une offre en ne lisant que le montant du salaire — l'absence de logement ou une couverture santé insuffisante peut peser plus lourd que quelques points de salaire. Parade : calculer la valeur réelle du package (salaire + avantages − coûts non pris en charge).",
      "Négocier de façon agressive ou par ultimatum — cela ferme une porte qu'une question ouverte aurait pu faire avancer. Parade : poser les conditions comme des clarifications et proposer des « si… alors ».",
      "Négocier uniquement à l'oral, sans rien faire confirmer par écrit — un accord verbal n'a aucune valeur en cas de désaccord en poste. Parade : demander la confirmation écrite en fin d'appel et ne cocher « Accepté » que sur un écrit.",
      "Répondre sous pression au délai annoncé sans jamais demander de délai supplémentaire — un délai de 24 à 48 h se négocie presque toujours. Parade : le message de remerciement avec une date précise.",
      "Saisir des textes dans les colonnes de calcul (« 2 700 USD », « 3,2 k ») — la formule les ignore sans message d'erreur. Parade : nombres seuls en D et en C16, devise en E.",
      "Lire C20 comme une médiane — la cellule calcule la moyenne. Parade : calculer =MEDIAN(D5:D12) dans une cellule libre et comparer les deux.",
      "Laisser les lignes d'exemple du template (« Pays X ») — elles faussent la moyenne et les statuts. Parade : remplacer toutes les lignes 5 à 8, la ligne 16, A20 et B20 avant de lire D20 à G20.",
      "Prendre « organise le retour » ou « selon la police » pour une garantie — ce sont des silences. Parade : demander le chiffre, la durée ou l'annexe, par écrit, avant signature.",
      "Signer une version provisoire ou un contrat qui ne reprend pas les réponses écrites — seul compte le document signé, avenants compris. Parade : le contrôle final ligne à ligne de la Procédure 9.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez enregistré une offre sans réagir à chaud et obtenu un délai de réflexion écrit, avec une fiche de réception, un dossier de négociation et un carnet d'échanges.",
      "Vous avez complété l'onglet « Benchmarking » avec au moins 4 références rendues comparables (net, devise, logement), et saisi l'offre telle quelle.",
      "Vous avez fixé une fourchette basse et une fourchette haute défendables, lu D20 à G20, et rédigé une carte de négociation avec ancrage, cible, plancher et alternative.",
      "Vous avez rempli l'onglet « Points de négociation » avec au moins 3 arguments factuels distincts, des priorités et des statuts tenus à jour.",
      "Vous avez mené un échange sans ultimatum : question ouverte, ancrage sourcé, réponse aux objections, confirmation écrite demandée, compte rendu daté.",
      "Vous avez évalué une contre-offre ou un refus avec la valeur réelle du package et décidé d'accepter, de pivoter ou de décliner sans fermer la relation.",
      "Vous avez lu le contrat avec la checklist en 8 sections, posé au moins 3 questions par écrit, obtenu des réponses écrites, signé et constitué un dossier de trace complet.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de clore la formation',
    items: [
      "J'ai complété une grille de benchmarking salarial croisant au moins deux références (ONU, ONGI, secteur privé) pour le poste visé.",
      "J'ai défini une fourchette basse acceptable et une fourchette haute justifiable, appuyées sur des données et non sur une impression.",
      "J'ai préparé au moins 3 arguments factuels pour justifier ma demande de négociation.",
      "Je sais expliquer pourquoi négocier une offre professionnellement ne dégrade pas l'image d'un candidat auprès d'un recruteur expérimenté.",
      "J'ai parcouru un contrat d'expatriation complet avec la checklist dédiée, clause par clause, au-delà du seul montant du salaire.",
      "J'ai identifié et noté par écrit au moins 3 questions à poser avant signature.",
      "Je sais citer les 6 éléments d'un contrat d'expatriation à vérifier systématiquement en plus du salaire : logement, santé et medevac, R&R, billets, rapatriement, préavis.",
      "J'ai mon classeur de benchmarking, ma checklist de contrat et mon dossier de trace sous la main : ce sont mes outils pour chaque offre à venir.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez parcouru les 6 modules de cette formation, du positionnement stratégique jusqu'à cette négociation finale : audit de carrière, CV aux normes ATS, lettre de motivation, préparation aux tests techniques, simulation d'entretiens en méthode STAR, puis négociation de contrat et conditions d'expatriation. Votre attestation de fin de formation BK-BOOST Ltd. valide ce parcours complet — et si vous suivez le Pack Ultimate, l'accompagnement continue jusqu'à la signature de votre contrat.",
  },
]
