// Module 09 — Préparation aux Audits Externes & Interaction avec les Auditeurs
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (checklist-preparation-audit-externe-multi-domaines.xlsx,
// note-reponse-point-divergence-audit.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (audit externe annuel de l'exercice 2025 de l'ONG fictive « Horizon
// Santé Grands Lacs », bases de Goma et de Bukavu), avec exemples remplis,
// résultat attendu, astuces et erreurs à éviter. Dernier module de la
// formation : la diapositive de clôture référence l'attestation de fin de
// formation, conformément à la section « Pour conclure cette formation » du
// markdown source.
// Les organisations, bailleurs (hors noms de bailleurs institutionnels),
// cabinets, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Préparation aux Audits Externes & Interaction avec les Auditeurs',
    hook: "Un audit externe ne se prépare pas département par département : c'est justement ce qui fait grimper le nombre de points relevés. À la fin de ce module, vous aurez produit le dossier complet d'un coordinateur transversal : une fiche de cadrage et un calendrier commun, un classeur de préparation à quatre onglets avec son tableau de bord, un circuit unique de communication avec l'équipe d'audit, une note de réponse à un point de divergence appuyée sur des preuves, et la réponse consolidée au rapport provisoire.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Distinguer ce que cherche réellement un auditeur externe (une opinion défendable) de la crainte d'une « chasse aux erreurs », en produisant une note de cadrage d'une page qui donne aux quatre domaines la bonne posture.",
      "Cadrer une mission d'audit externe dès la notification à partir de la lettre d'engagement (mandat, périmètre, exclusions) et d'un rétroplanning, en produisant une fiche de mandat, une matrice périmètre × domaines et la date interne « prêt à recevoir l'auditeur ».",
      "Désigner un point focal par domaine (Finance, SCM-Achats, RH, Programme) et fixer des règles de cohérence communes, en produisant les lettres de désignation et un calendrier commun validé par la Direction.",
      "Constituer et faire vivre le dossier de préparation avec checklist-preparation-audit-externe-multi-domaines.xlsx, onglet par onglet, en produisant un classeur renseigné (24 points de contrôle), un Tableau de bord lu correctement et un registre des incohérences entre domaines.",
      "Communiquer avec l'équipe d'audit du cadrage à la clôture du terrain avec un point de contact unique, en produisant l'ordre du jour du kick-off, un registre des demandes et des réponses relues avant envoi.",
      "Défendre une position de l'organisation par la preuve avec note-reponse-point-divergence-audit.docx, en produisant une note d'une page en cinq blocs qui référence au moins deux pièces justificatives (nom, source, période).",
      "Revoir le rapport provisoire avec les responsables de domaine avant toute réponse officielle, en produisant un tableau de ventilation des constats, les décisions validées collectivement et la lettre de réponse consolidée.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur l'audit externe : c'est la préparation complète d'une vraie mission, dans l'ordre où vous la vivrez, depuis l'e-mail de notification du cabinet jusqu'à la réponse officielle au rapport provisoire. Chaque procédure se termine par une pièce de votre dossier de mission, construite sur un seul cas fil rouge.",
      "Le cas fil rouge : vous êtes Amani K., auditeur interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive déjà rencontrée au Module 01. Le vendredi 31 juillet 2026, le cabinet Équinoxe Audit & Conseil notifie un audit externe annuel de l'exercice 2025, combiné à un audit de conformité pour ECHO. Le Directeur Pays vous désigne coordinateur transversal : l'équipe d'audit arrive le lundi 14 septembre, dans 45 jours.",
    ],
    bullets: [
      "Livrable 1 — La fiche de mandat, la matrice périmètre × domaines et le calendrier commun, avec la date « prêt à recevoir l'auditeur ».",
      "Livrable 2 — Les quatre lettres de désignation des points focaux et les règles de cohérence entre domaines.",
      "Livrable 3 — Le classeur checklist-preparation-audit-externe-multi-domaines.xlsx renseigné : quatre onglets de six points de contrôle et un Tableau de bord.",
      "Livrable 4 — Le suivi : compte rendu hebdomadaire, registre des incohérences entre domaines et décision de go/no-go.",
      "Livrable 5 — Le kit de communication avec l'équipe d'audit : ordre du jour du kick-off, registre des demandes, relecture croisée.",
      "Livrable 6 — Une note de réponse à un point de divergence (domaine SCM) construite bloc par bloc.",
      "Livrable 7 — Le cas résolu de la clé de répartition contestée (gardiennage de l'entrepôt de Goma), note complète comprise.",
      "Livrable 8 — La ventilation du rapport provisoire, les décisions de la revue collective et la lettre de réponse officielle.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : HSGL face à son audit externe 2025',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, les personnes, le cabinet et les montants sont fictifs, mais construits sur des configurations réelles de bases humanitaires dans l'Est de la RDC.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la préparation'],
      rows: [
        ['Joseph T.', 'Directeur Pays', 'Sponsor : valide le cadrage, arbitre, signe la réponse officielle'],
        ['Hélène V.', "Présidente du comité d'audit", 'Destinataire du rapport final'],
        ['Amani K.', 'Auditeur interne (fait office de Compliance Officer)', 'Vous : coordinateur transversal et point de contact unique'],
        ['Ruth B.', 'Finance Manager (arrivée en novembre 2025)', 'Point focal Finance'],
        ['Nadine O.', 'Procurement Manager', 'Point focal SCM - Achats'],
        ['Pascaline R.', 'RH Manager', 'Point focal RH'],
        ['Clarisse M.', 'Program Manager (arrivée en décembre 2025)', 'Point focal Programme'],
        ['Dr Patrice N.', 'Coordinateur de la base de Goma', 'Accueille l\'équipe d\'audit à Goma'],
        ['Estelle D. et Samuel O.', "Manager et auditeur senior, cabinet Équinoxe Audit & Conseil", "L'équipe d'audit externe"],
      ],
    },
    example: {
      title: 'Chiffres clés du dossier',
      lines: [
        "HSGL RDC : 112 employés au 31/12/2025, dépenses 2025 de 9,4 M USD, bases de Goma, Bukavu et Bunia.",
        "Mission : audit des états financiers 2025 combiné à un audit de conformité du projet nutrition ECHO (2,1 M USD) et du projet WASH financé par le bailleur bilatéral Lumina (0,9 M USD).",
        "Terrain de l'équipe d'audit : du 14 au 25 septembre 2026 (siège et Goma, puis Bukavu). Le rapport d'audit du projet ECHO doit être déposé avant le 6 novembre 2026.",
        "Contexte : les deux projets partagent à Goma un entrepôt et une équipe de gardiennage (3 000 USD par mois) selon une clé 60 % nutrition / 40 % WASH validée en mars 2024 par des responsables aujourd'hui partis.",
      ],
    },
    pitfall: "À l'annonce de l'audit, le réflexe est de dire « c'est l'affaire de la Finance ». C'est précisément le scénario qui fait monter le nombre de points relevés : l'auditeur tirera des transactions qui traversent les quatre domaines.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Ce que veut réellement un auditeur externe',
    body: [
      "Des équipes entières se braquent à l'annonce d'un audit externe, cachent leurs classeurs les moins présentables et vivent la semaine comme une inspection policière. Cette lecture est fausse, et elle coûte cher : un auditeur externe, cabinet mandaté par le bailleur, par le Conseil d'administration ou par les deux, ne cherche pas à vous piéger.",
      "Il cherche à formuler une opinion défendable sur la sincérité des états financiers, le respect des règles d'éligibilité des bailleurs et la fiabilité des systèmes de contrôle interne. Cette opinion, il devra la signer et en assumer la responsabilité professionnelle : il a donc objectivement intérêt à ce que votre dossier soit clair, complet et cohérent.",
    ],
    table: {
      columns: ["Ce que l'équipe croit", "Ce que l'auditeur cherche réellement", 'Ce que cela change pour vous'],
      rows: [
        ['« Il cherche la faute »', 'Assez de preuves pour signer une opinion', "Donnez-lui la pièce complète, pas seulement la bonne pièce"],
        ['« Une anomalie, c\'est un échec »', "Savoir si le système corrige ses propres erreurs", "Documentez l'erreur ET sa correction datée"],
        ['« Moins il en voit, mieux c\'est »', 'Comprendre rapidement pour ne pas creuser', "Un dossier lisible réduit l'échantillon complémentaire"],
        ['« Il est contre nous »', 'Il est contre le risque de signer une opinion fausse', 'Traitez-le en professionnel qui a besoin de vos preuves'],
      ],
    },
    highlight: "Un dossier confus oblige l'auditeur à creuser plus, pas moins.",
  },
  {
    type: 'comparison-table',
    title: "Les formes d'audit externe : qui mandate, qui est audité",
    columns: ['Forme de mission', 'Mandant', 'Ce qui est audité', 'Livrable', 'Cas HSGL'],
    rows: [
      ['Audit des états financiers', "Conseil d'administration", "Sincérité des comptes de l'exercice", "Opinion d'audit, management letter", 'États financiers HSGL RDC 2025'],
      ['Audit de projet (vérification des dépenses)', 'Bailleur, par clause de la convention', "Éligibilité des dépenses d'un projet", 'Rapport de vérification, parfois certificat', 'Projet nutrition ECHO'],
      ['Audit de conformité bailleur', 'Bailleur', 'Achats, RH, visibilité, règles de la convention', 'Rapport de conformité', 'Achats supérieurs au seuil de trois devis'],
      ['Audit combiné', 'Conseil et bailleur', 'Les deux ci-dessus, en une mission', 'Un rapport et une management letter', 'La mission de septembre 2026'],
      ['Revue ou contrôle ex post du bailleur', 'Bailleur', 'Dossiers du projet après clôture', 'Courrier de conclusions', 'À anticiper : conservation des pièces'],
    ],
  },
  {
    type: 'concept',
    title: 'Une transaction, quatre regards : pourquoi un seul domaine ne suffit jamais',
    body: [
      "L'erreur la plus commune, y compris dans les organisations matures, est de traiter la préparation comme une affaire de la Finance uniquement, parce qu'elle produit les états financiers. Or un bailleur comme USAID/BHA ou la Commission européenne audite tout le cycle de vie d'un projet : les achats, les ressources humaines affectées, la réalisation programmatique réelle, pas seulement la comptabilité qui les enregistre.",
      "L'auditeur tire un échantillon de transactions et les suit à travers les quatre domaines. Si chacun répond avec ses formats et ses délais, il passe plus de temps à réconcilier vos réponses qu'à les évaluer, et cela se traduit presque toujours par davantage de points relevés.",
    ],
    table: {
      columns: ['Domaine', "Question de l'auditeur sur un même achat", 'Pièce attendue', 'Incohérence typique'],
      rows: [
        ['Finance', "L'écriture est-elle correcte et imputée au bon projet ?", 'Facture, écriture, preuve de paiement', "Date d'écriture différente de la date de réception"],
        ['SCM - Achats', 'Le fournisseur a-t-il été choisi selon la procédure ?', 'Trois devis ou note de dérogation, bon de commande, contrat', 'Note de dérogation absente du dossier'],
        ['RH', "Qui a validé, avec quel pouvoir à cette date ?", 'Délégation de signature signée et datée', 'Signataire sans délégation à la date du bon'],
        ['Programme', "À quelle activité réelle correspond la dépense ?", "Rapport d'activité, liste de distribution", 'Activité absente du rapport narratif'],
      ],
    },
    tip: "Le rôle du coordinateur transversal n'est pas de faire le travail des quatre domaines, c'est structurellement impossible : c'est de s'assurer que leurs documents racontent la même histoire sur chaque transaction échantillonnée.",
  },
  {
    type: 'stat-callout',
    stat: '87,2 %',
    caption: 'de réduction du risque de non-conformité en 3 mois dans le cas de référence présenté avec cette formation',
    context: "Obtenue en supprimant les incohérences qui n'apparaissent qu'au croisement des domaines, pas en travaillant plus dans chaque département isolément. C'est exactement la logique de coordination transversale de ce module.",
  },
  {
    type: 'concept',
    title: "Un désaccord n'est jamais une question personnelle",
    body: [
      "Le réflexe du professionnel junior face à un point de divergence, une position de l'auditeur que l'organisation conteste ou nuance, est de le vivre comme une attaque contre son équipe : ton défensif, justification orale improvisée, parfois une pointe d'agacement visible. C'est l'erreur à ne jamais commettre.",
      "Un point de divergence est, structurellement, une question de preuve documentée disponible ou non au moment où la question est posée. Un auditeur ne retire jamais un constat parce que vous l'avez défendu avec conviction : il le retire ou le nuance uniquement face à un document, un contrat, une clé de répartition validée, un procès-verbal.",
    ],
    example: {
      title: 'Deux réponses au même constat (fil rouge)',
      lines: [
        "À chaud : « Ce n'est pas une incohérence, tout le monde savait que WASH était à l'arrêt cet été, c'est évident ! » → aucune pièce, ton défensif, l'auditrice note la fragilité du dossier.",
        "Par la preuve : « Je vérifie la pièce et je reviens vers vous après-demain avant midi avec le courriel du bailleur, le compte rendu de réunion et la fiche de stock. » → délai assumé, crédibilité intacte.",
      ],
    },
    highlight: "Ne jamais répondre à un point de divergence à chaud, de mémoire, sans avoir vérifié la pièce : un délai de 24 à 48 heures coûte bien moins cher à la crédibilité qu'une réponse rapide mais inexacte.",
  },
  {
    type: 'comparison-table',
    title: 'Les rôles dans la préparation : qui fait quoi, et surtout qui ne fait pas quoi',
    columns: ['Rôle', 'Qui chez HSGL', 'Ce qu\'il fait', 'Ce qu\'il ne fait pas'],
    rows: [
      ['Coordinateur transversal', 'Amani K.', 'Fixe le calendrier commun, tient le Tableau de bord, vérifie la cohérence entre domaines, reçoit toutes les demandes', "Ne rassemble pas les pièces à la place des domaines, ne décide pas du fond des réponses"],
      ['Point focal domaine', 'Ruth B., Nadine O., Pascaline R., Clarisse M.', 'Rassemble les pièces, tient son onglet à jour, prépare les réponses de son domaine', "Ne répond pas directement à l'auditeur sans passer par le point de contact unique"],
      ['Sponsor', 'Joseph T., Directeur Pays', 'Valide le cadrage, arbitre les priorités, signe la réponse officielle', 'Ne négocie pas un constat en direct avec le cabinet'],
      ["Équipe d'audit externe", 'Estelle D., Samuel O.', 'Teste un échantillon, formule les constats et une opinion', 'Ne conçoit pas vos procédures : son indépendance en dépend'],
    ],
  },
  {
    type: 'comparison-table',
    title: "Calendrier type d'une mission d'audit externe (fil rouge HSGL)",
    columns: ['Date', 'Phase', 'Ce qui doit être fait', 'Pièce produite'],
    rows: [
      ['Ven. 31/07 (J-45)', 'Notification', "Lire la lettre d'engagement, cadrer", 'Fiche de mandat'],
      ['Mer. 05/08 (J-40)', 'Lancement', 'Désigner les points focaux, réunion de lancement', 'Lettres de désignation, calendrier commun'],
      ['Lun. 10/08 – lun. 31/08', 'Suivi hebdomadaire', 'Renseigner le classeur, traquer les incohérences', 'Compte rendu hebdomadaire, registre des incohérences'],
      ['Jeu. 03/09 – ven. 04/09 (J-11 à J-10)', 'Go/no-go puis « prêt »', 'Décider, figer le dossier', 'Décision écrite, classeur à jour'],
      ['Lun. 14/09 (J0)', 'Kick-off', 'Cadrer avec l\'équipe d\'audit, désigner le point de contact unique', 'Compte rendu de kick-off'],
      ['14/09 – 25/09', 'Terrain', 'Répondre aux demandes, traiter les divergences', 'Registre des demandes, notes de réponse'],
      ['Ven. 09/10', 'Rapport provisoire', 'Ventiler par constat et par domaine', 'Tableau de ventilation'],
      ['14/10 – 22/10', 'Revue et réponse officielle', 'Valider collectivement, consolider, transmettre', 'Lettre de réponse et annexes'],
      ['Ven. 30/10', 'Rapport final', 'Lire la management letter, planifier les actions', 'Plan d\'action daté'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: "Opinion d'audit", definition: "Conclusion formelle qu'un auditeur externe exprime sur la sincérité des états financiers et/ou la conformité d'une organisation, à l'issue de sa mission." },
      { term: "Lettre d'engagement", definition: "Document signé entre le cabinet et l'organisation qui fixe le mandat exact : exercice, périmètre, sites, livrables, délais. C'est elle que vous lisez avant de mobiliser quiconque." },
      { term: 'Point de divergence', definition: "Constat de l'auditeur externe que l'organisation conteste ou nuance, sur la base d'une preuve documentée qu'elle apporte." },
      { term: 'Papier de travail (working paper)', definition: "Document où l'auditeur consigne un test et son constat ; son numéro sert de référence dans la note de réponse (ex. WP F-12)." },
      { term: 'Liste des documents demandés', definition: "Liste, souvent appelée « PBC list » (prepared by client), des pièces que l'auditeur demande avec une échéance par pièce." },
      { term: 'Réunion de cadrage (kick-off)', definition: "Première réunion avec l'équipe d'audit : confirmation du périmètre, du calendrier et désignation du point de contact unique." },
      { term: 'Rapport provisoire', definition: "Version du rapport soumise à l'organisation avant publication : c'est le moment de la réponse officielle." },
      { term: 'Management letter', definition: "Document distinct du rapport final, où l'auditeur formule ses observations sur les faiblesses de contrôle interne, même quand elles n'affectent pas son opinion sur les états financiers." },
      { term: "Lettre d'affirmation", definition: "Déclaration écrite de la direction à l'auditeur, signée en fin de mission, confirmant que les informations fournies sont complètes et sincères." },
      { term: 'Point focal domaine', definition: "Personne désignée dans chaque département (Finance, SCM, RH, Programme) comme référence unique pour la préparation dans son périmètre." },
      { term: 'Coordinateur transversal', definition: "Rôle tenu par l'auditeur interne ou le Compliance Officer, qui pilote la préparation d'ensemble sans se substituer aux domaines." },
      { term: 'Point de contact unique', definition: "Personne côté organisation qui reçoit toutes les demandes de l'équipe d'audit, les redirige vers le bon point focal et centralise les réponses." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Preuve solide ou affirmation ? Les cinq critères pour classer une pièce',
    columns: ['Critère', 'Plus solide', 'Moins solide', 'Exemple HSGL'],
    rows: [
      ['Origine', 'Pièce émise par un tiers (bailleur, fournisseur, banque)', 'Pièce produite en interne', "Courriel du bailleur Lumina plutôt que note interne"],
      ['Date', 'Contemporaine des faits', "Rédigée après la demande de l'auditeur", 'Compte rendu du 08/07/2025 plutôt que note rédigée en 2026'],
      ['Forme', 'Signée, datée, originale ou courriel horodaté', 'Copie non signée, capture d\'écran', 'Note de méthode signée plutôt que message de groupe'],
      ['Recoupement', 'Confirmée par deux sources indépendantes', 'Source unique', 'Courriel bailleur + fiche de stock + rapport mensuel'],
      ['Traçabilité', 'Référencée : nom, source, période', '« On avait dit que… », souvenir', 'P3 : courriel Lumina du 10/07/2025, boîte du Program Manager'],
    ],
  },
  {
    type: 'comparison-table',
    title: "Les trois issues d'un point de divergence",
    columns: ['Décision', 'Quand la choisir', 'Ce que vous écrivez', 'Exemple HSGL'],
    rows: [
      ['Accepté', 'Le constat est exact et la preuve contraire n\'existe pas', 'Action corrective datée, responsable nommé', 'BC-2025-0533 : note de régularisation et contrôle mensuel des dérogations'],
      ['Contesté', 'Une pièce solide démontre que le constat est inexact', 'La position, les pièces, la justification du maintien', "BC-2025-0418 : note de dérogation signée avant le bon de commande"],
      ['Partiellement accepté', "Les faits sont exacts mais l'interprétation ou l'étendue est contestable", 'Ce que vous concédez, ce que vous contestez, la régularisation', "Gardiennage : faits confirmés, conclusion sur l'exercice entier contestée"],
    ],
  },
  {
    type: 'concept',
    title: "Fiche de poche : les phrases à dire (et à éviter) face à l'équipe d'audit",
    body: "Une réponse courte, calme et datée vaut mieux qu'une démonstration. Apprenez ces formulations : elles protègent votre crédibilité dans les situations où l'on est tenté d'improviser.",
    table: {
      columns: ['Situation', 'Dites', 'Évitez'],
      rows: [
        ["Vous n'avez pas la pièce sous la main", "« Je vérifie la pièce et je reviens vers vous demain avant 16h avec le document. »", '« Je crois que oui, de mémoire. »'],
        ['Vous contestez un constat', "« Pouvez-vous me donner la référence du papier de travail ? Nous vous répondons par écrit avec les pièces. »", '« Vous vous trompez, vous n\'avez pas compris. »'],
        ["L'auditeur s'adresse directement à un employé", "« Je prends votre demande et je la transmets au point de contact pour qu'elle soit suivie. »", "Refuser de répondre ou dicter ce qu'il faut dire"],
        ['Vous reconnaissez une erreur', "« Vous avez raison. Voici la correction, datée, et le contrôle que nous mettons en place. »", 'Minimiser ou chercher un responsable'],
        ['Le désaccord persiste', "« Nous maintenons notre position, voici la note et les pièces ; nous souhaitons que notre réponse figure au rapport. »", "Menacer d'en référer au bailleur"],
      ],
    },
    tip: "Le point de contact unique organise les échanges : il ne les empêche jamais. L'auditeur doit pouvoir rencontrer toute personne de son choix, et tout blocage serait relevé.",
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Cadrer la mission dès la notification ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: "Lire la lettre d'engagement et en extraire le mandat exact",
    intro: "Pourquoi : la lettre d'engagement est le seul document qui dit ce que l'auditeur a le droit et le devoir de regarder. La lire avant de mobiliser quiconque évite de lancer quatre équipes sur un périmètre qui n'existe pas. Quand : le jour de la notification (J-45 à J-30). Entrées : l'e-mail de notification, la lettre d'engagement, les conventions des bailleurs concernés.",
    steps: [
      {
        title: "Procurez-vous la lettre d'engagement signée, pas seulement l'e-mail de notification",
        actions: [
          "1. Demandez-la au Directeur Pays ou au Finance Manager : elle est signée par la direction et par le cabinet.",
          "2. Enregistrez-la dans le dossier « 01_Cadrage » : 2026-07-31_Lettre_engagement_Equinoxe.pdf.",
          "3. Imprimez-la : vous allez la surligner.",
        ],
      },
      {
        title: 'Extrayez huit informations dans une fiche de mandat d\'une page',
        actions: [
          "Mandants : qui a commandé l'audit (Conseil, bailleur, ou les deux).",
          "Type de mission : états financiers seuls, projet, conformité bailleur, ou combiné.",
          "Exercice ou période couverts.",
          "Entités, projets et bases dans le périmètre.",
          "Sites visités et sites traités sur pièces.",
          "Composition de l'équipe et dates de terrain.",
          "Livrables et délais : rapport provisoire, délai de réponse, rapport final.",
          "Obligations de la convention bailleur sur l'audit (article, date limite de dépôt).",
        ],
      },
      {
        title: 'Surlignez les mots qui bornent le mandat',
        body: "« sur la base de sondages », « échantillon », « à l'exclusion de », « sur pièces » : ces expressions disent ce qui n'est PAS audité ou ce qui ne l'est qu'en partie.",
      },
      {
        title: 'Notez trois questions à poser au cabinet',
        body: "Quelle date limite pour les documents préliminaires ? Quel format pour la liste des documents demandés ? Qui est notre interlocuteur au cabinet pour le cadrage ?",
      },
    ],
    table: {
      columns: ['Élément de la fiche', 'Valeur saisie (fil rouge)'],
      rows: [
        ['Mandants', "Conseil d'administration de HSGL et ECHO (audit combiné)"],
        ['Type de mission', 'Audit financier annuel combiné à un audit de conformité bailleur'],
        ['Exercice', '1er janvier – 31 décembre 2025'],
        ['Périmètre', "États financiers de HSGL RDC (dépenses 2025 : 9,4 M USD) ; projet nutrition ECHO (2,1 M USD) ; projet WASH Lumina (0,9 M USD)"],
        ['Sites', 'Visites : siège, base de Goma, base de Bukavu. Bunia : traitée sur pièces uniquement'],
        ['Équipe et dates', 'Estelle D. (manager), Samuel O. (auditeur senior), un assistant ; terrain du 14 au 25 septembre 2026'],
        ['Livrables et délais', 'Rapport provisoire environ deux semaines après le terrain ; réponse sous 10 jours ouvrés ; rapport final et management letter ensuite'],
        ['Obligation bailleur', 'Convention ECHO : rapport d\'audit du projet à déposer avant le 6 novembre 2026'],
      ],
    },
    result: "Une fiche de mandat d'une page, datée du 31/07/2026, que n'importe quel point focal peut lire pour savoir ce qui sera audité et ce qui ne le sera pas.",
    pitfall: "Mobiliser tout le monde avant d'avoir lu la lettre : ici, la base de Bunia est traitée sur pièces uniquement. Y organiser une préparation complète aurait consommé deux semaines d'équipe pour rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Définir le périmètre : la matrice périmètre × domaines',
    intro: "Pourquoi : un périmètre exprimé en phrases ne dit pas à chaque domaine ce qu'on attend de lui. La matrice transforme le mandat en travail concret par domaine. Entrée : la fiche de mandat de l'étape 1.",
    steps: [
      {
        title: 'Tracez un tableau : le périmètre en lignes, les quatre domaines en colonnes',
        actions: [
          "Lignes : états financiers, un projet par ligne (ECHO, Lumina), et chaque base traitée sur pièces.",
          "Colonnes : Finance, SCM - Achats, RH, Programme.",
        ],
      },
      {
        title: 'Notez dans chaque case le test probable de l\'auditeur',
        body: "Appuyez-vous sur les modules 03, 04 et 05 de cette formation : ce sont les contrôles que l'auditeur externe refera par sondage.",
      },
      {
        title: 'Marquez les exclusions et les sites sur pièces',
        body: "Écrivez en clair ce qui est exclu : cela évite de préparer inutilement et protège l'équipe d'une extension silencieuse du périmètre.",
      },
      {
        title: 'Faites relire la matrice par le cabinet',
        body: "Un courriel de deux lignes à Estelle D. : « Pouvez-vous confirmer que cette matrice reflète bien le périmètre de votre lettre d'engagement ? »",
      },
    ],
    table: {
      columns: ['Périmètre', 'Finance', 'SCM - Achats', 'RH', 'Programme'],
      rows: [
        ['États financiers RDC 2025', 'Rapprochements bancaires, immobilisations, imputation analytique', 'Achats au-dessus du seuil, inventaire de stock', 'Paie rapprochée des contrats et des présences', 'Cohérence avec les rapports narratifs'],
        ['Projet nutrition ECHO (2,1 M USD)', 'Éligibilité des dépenses, suivi budgétaire, coûts partagés', "Dossiers d'achat des intrants, dérogations", 'Personnel imputé au projet', 'Listes de distribution, indicateurs de suivi'],
        ['Projet WASH Lumina (0,9 M USD)', "Idem, dont l'été 2025 (projet en pause)", 'Équipements, contrats de travaux', 'Personnel imputé au projet', 'Rapport narratif, avenant bailleur'],
        ['Bunia (sur pièces)', 'Pièces comptables transmises', "Dossiers d'achat numérisés", 'Dossiers du personnel numérisés', "Rapports d'activité"],
      ],
    },
    result: "Une matrice de 16 cases qui répond, pour chaque domaine, à la question « qu'attend-on de moi, sur quoi, et pour quel projet ? ».",
    tip: "Gardez la matrice sur une seule page : c'est la pièce que vous projetterez à la réunion de lancement de la procédure 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Construire le rétroplanning et fixer la date « prêt à recevoir l\'auditeur »',
    intro: "Pourquoi : on prépare un audit à reculons, depuis le jour d'arrivée de l'équipe. Fixer la date « prêt » plusieurs jours avant l'arrivée réelle vous laisse une marge pour corriger. Entrées : la date d'arrivée (lundi 14 septembre), le calendrier des domaines.",
    steps: [
      {
        title: "Partez de la date d'arrivée et remontez",
        actions: [
          "1. Date d'arrivée de l'équipe : lundi 14 septembre, 9h00 (kick-off).",
          "2. Date « prêt à recevoir l'auditeur » : au moins cinq jours ouvrés avant, soit vendredi 4 septembre.",
          "3. Décision de go/no-go : la veille, jeudi 3 septembre.",
        ],
      },
      {
        title: 'Placez les points de suivi hebdomadaires',
        body: "Réunions de 15 à 20 minutes chaque lundi à 10h00 : 10, 17, 24 et 31 août. Chaque réunion pose une échéance intermédiaire au domaine.",
      },
      {
        title: 'Fixez une date limite de classement des pièces par domaine',
        body: "Vendredi 28 août, soit J-17 : après cette date, les domaines ne cherchent plus, ils vérifient et complètent.",
      },
      {
        title: 'Calculez la marge de chaque jalon',
        body: "Un jalon sans marge (J-1) est un jalon qui sera raté : relevez tout jalon à moins de cinq jours ouvrés de l'arrivée.",
      },
    ],
    table: {
      columns: ['Jalon', 'Date', 'Qui', 'Marge avant J0'],
      rows: [
        ['Fiche de cadrage validée', 'Lun. 03/08', 'Amani K., Joseph T.', 'J-42'],
        ['Réunion de lancement des points focaux', 'Mer. 05/08', 'Amani K.', 'J-40'],
        ['Premier remplissage du classeur', 'Lun. 10/08', 'Quatre points focaux', 'J-35'],
        ['Réunions de suivi (15-20 min)', 'Lun. 10, 17, 24, 31/08, 10h00', 'Amani K. + points focaux', '—'],
        ['Pièces classées par domaine', 'Ven. 28/08', 'Quatre points focaux', 'J-17'],
        ['Go/no-go', 'Jeu. 03/09, 14h00', 'Amani K., Joseph T.', 'J-11'],
        ['« Prêt à recevoir l\'auditeur »', 'Ven. 04/09', 'Amani K.', 'J-10'],
        ['Kick-off avec le cabinet', 'Lun. 14/09, 9h00', "Équipe d'audit, Amani K., points focaux", 'J0'],
      ],
    },
    result: "Un calendrier commun d'une page dont chaque jalon a une date, un responsable et une marge.",
    pitfall: "Fixer la date « prêt » la veille de l'arrivée : la moindre pièce manquante devient une découverte le jour du kick-off. La marge est ce qui transforme un imprévu en simple retard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Faire valider le cadrage par la Direction et le diffuser',
    intro: "Pourquoi : un cadrage envoyé par le coordinateur seul n'a pas l'autorité pour imposer des échéances aux managers des domaines. Envoyé au nom du Directeur Pays, il en a. Entrées : fiche de mandat, matrice, calendrier.",
    steps: [
      {
        title: 'Assemblez la note de cadrage en une page',
        actions: [
          "1. Mandat en trois lignes (extrait de la fiche).",
          "2. Matrice périmètre × domaines.",
          "3. Calendrier avec la date « prêt ».",
          "4. Ce que vous attendez de chaque point focal (désignation sous 48 heures).",
        ],
      },
      {
        title: 'Faites-la valider par le Directeur Pays',
        body: "Demandez un accord écrit (un courriel suffit) avant diffusion : vous disposerez de sa signature si un domaine tarde.",
      },
      {
        title: 'Diffusez-la aux quatre responsables de domaine et à la présidente du comité d\'audit',
        body: "Dans un seul message, avec la lettre d'engagement en pièce jointe, et archivez l'envoi dans « 01_Cadrage ».",
      },
    ],
    example: {
      title: 'Courriel du 3 août 2026, 15h00',
      lines: [
        "Objet : Audit externe de l'exercice 2025 — cadrage et calendrier commun (validé par la Direction Pays).",
        "« Bonjour à toutes et à tous, le cabinet Équinoxe Audit & Conseil conduira du 14 au 25 septembre l'audit combiné de l'exercice 2025 (états financiers et conformité ECHO). Je vous joins la lettre d'engagement, la matrice du périmètre et le calendrier commun : nous serons prêts à recevoir l'équipe vendredi 4 septembre. Merci de me communiquer d'ici mercredi midi le nom de votre point focal et de son suppléant. Une réunion de lancement aura lieu mercredi 5 août à 10h00. L'audit n'est pas une chasse aux erreurs : l'objectif est de présenter à l'auditeur un dossier clair et cohérent. Joseph T., Directeur Pays, et Amani K. »",
      ],
    },
    result: "Une fiche de cadrage validée par écrit et diffusée, avec un accord du Directeur Pays obtenu le 3 août à 14h20. Fin de la procédure 1 : vous détenez mandat, périmètre et calendrier.",
    tip: "La dernière phrase du courriel compte : en disant dès le premier message que l'audit n'est pas une chasse aux erreurs, vous installez la bonne posture avant même le lancement.",
  },

  // ── Procédure 2 — Répartir les responsabilités par domaine ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: 'Choisir un point focal et un suppléant par domaine',
    intro: "Pourquoi : ce n'est pas vous qui rassemblez les contrats d'achats ou les dossiers du personnel, c'est le point focal SCM et le point focal RH. Sans nom et sans suppléant, la responsabilité d'un domaine repose sur personne. Entrée : la matrice périmètre × domaines.",
    steps: [
      {
        title: 'Appliquez quatre critères pour chaque candidat',
        actions: [
          "1. Il connaît les dossiers de son domaine et sait où se trouvent les pièces.",
          "2. Il a l'autorité pour obtenir des pièces auprès de ses collègues.",
          "3. Il peut consacrer au moins quatre heures par semaine à la préparation.",
          "4. Il est présent du 14 au 25 septembre, ou son suppléant l'est.",
        ],
      },
      {
        title: 'Proposez un suppléant pour chaque point focal',
        body: "Un point focal malade ou en déplacement ne doit jamais bloquer une réponse à l'auditeur.",
      },
      {
        title: 'Faites confirmer le choix par le responsable hiérarchique',
        body: "Pour la Finance et le Programme, c'est le Directeur Pays ; pour la RH et les Achats, idem. Votre rôle est de proposer, pas de décider.",
      },
    ],
    table: {
      columns: ['Domaine', 'Point focal', 'Suppléant', 'Disponibilité'],
      rows: [
        ['Finance', 'Ruth B., Finance Manager', 'Mireille T., Finance Officer', '6 h par semaine'],
        ['SCM - Achats', 'Nadine O., Procurement Manager', 'Gédéon K., Procurement Officer', '5 h par semaine'],
        ['RH', 'Pascaline R., RH Manager', 'Chantal B., assistante RH', '4 h par semaine'],
        ['Programme', 'Clarisse M., Program Manager', 'Aimée T., MEAL Officer', '5 h par semaine'],
      ],
    },
    result: "Quatre points focaux et quatre suppléants nommés, confirmés par le Directeur Pays, avec leur disponibilité du mois d'août.",
    pitfall: "Nommer le collaborateur le plus junior « parce que le manager est occupé » : il n'aura pas l'autorité de demander une pièce à un chef de service, et l'auditeur le verra immédiatement. Ne vous nommez pas vous-même point focal d'un domaine : vous recréeriez un silo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Tenir la réunion de lancement (45 minutes) et remettre les lettres de désignation',
    intro: "Pourquoi : une réunion unique, avec les quatre domaines dans la même pièce, est la première occasion de leur faire entendre la même consigne en même temps. Quand : mercredi 5 août, 10h00. Entrées : note de cadrage, matrice, calendrier.",
    steps: [
      {
        title: 'Préparez un ordre du jour en six points',
        actions: [
          "1. Le contexte : ce que cherche l'auditeur, pas une chasse aux erreurs (5 min).",
          "2. Le mandat et la matrice du périmètre (10 min).",
          "3. Les rôles : coordinateur, points focaux, point de contact unique (10 min).",
          "4. Le classeur et le calendrier commun (10 min).",
          "5. Les règles de cohérence et de communication (5 min).",
          "6. Questions et engagements (5 min).",
        ],
      },
      {
        title: 'Projetez la matrice et faites valider chaque case par le point focal concerné',
        body: "Un « oui, c'est bien notre périmètre » prononcé devant les trois autres engage plus qu'un courriel.",
      },
      {
        title: 'Remettez à chaque point focal une lettre de désignation',
        body: "Une demi-page signée par le Directeur Pays : nom, domaine, suppléant, mission (tenir son onglet à jour, répondre via le point de contact unique), échéances.",
      },
    ],
    example: {
      title: 'Extrait de la lettre de désignation de Ruth B. (5 août 2026)',
      lines: [
        "« Madame, vous êtes désignée point focal Finance pour la préparation de l'audit externe de l'exercice 2025. Votre suppléante est Mireille T. Vous tenez à jour l'onglet Finance du classeur de préparation et rassemblez les pièces de votre domaine. Toute demande de l'équipe d'audit vous parviendra par Amani K., coordinateur transversal et point de contact unique ; toute réponse lui est adressée avant transmission. Première échéance : onglet Finance renseigné le lundi 10 août. Joseph T., Directeur Pays. »",
      ],
    },
    result: "Un compte rendu de lancement d'une demi-page (participants, décisions, dates) et quatre lettres signées remises en main propre.",
    tip: "Terminez toujours par une question : « Qui a besoin d'une pièce d'un autre domaine ? » Les premières dépendances apparaissent dans la salle, pas dans trois semaines.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: 'Fixer les règles de cohérence pour que les quatre domaines racontent la même histoire',
    intro: "Pourquoi : une même transaction échantillonnée doit raconter la même histoire vue de la Finance, des Achats, de la RH ou du Programme. Une incohérence, aux yeux d'un auditeur externe, pèse plus lourd qu'une simple lacune documentaire. Entrées : l'expérience des modules précédents.",
    steps: [
      {
        title: 'Établissez un glossaire commun d\'une page',
        body: "Mêmes noms de projets, mêmes codes bailleur, mêmes noms de sites, mêmes intitulés de postes dans tous les documents.",
      },
      {
        title: 'Imposez un format unique de dates, de montants et de noms de fichiers',
        actions: [
          "Dates : jj/mm/aaaa. Montants : en USD avec deux décimales.",
          "Noms de fichiers : AAAA-MM-JJ_Type_Objet_version, par exemple 2024-03-14_Note_cle_repartition_signee.pdf.",
        ],
      },
      {
        title: 'Imposez la règle de la source unique',
        body: "Tout chiffre cité dans un document renvoie à une même pièce de référence : l'effectif au 31/12/2025, par exemple, vient du livre de paie, jamais d'un tableau recopié.",
      },
      {
        title: 'Faites valider les règles à la réunion hebdomadaire suivante',
        body: "Ajoutez-les au compte rendu : elles deviennent la référence quand deux domaines divergent.",
      },
    ],
    table: {
      columns: ['Règle', 'Contenu', 'Exemple HSGL'],
      rows: [
        ['Glossaire commun', 'Mêmes codes de projets, de sites et de postes', 'Projet nutrition = NUT-ECHO ; projet WASH = WASH-LUM ; sites : Goma, Bukavu, Bunia'],
        ['Dossier partagé unique', 'Arborescence commune, un dossier par domaine', 'Drive/Finance/..., Drive/SCM/..., Drive/RH/..., Drive/Programme/...'],
        ['Format des données', 'Dates jj/mm/aaaa ; montants en USD', '18/03/2025 ; 8 400,00 USD'],
        ['Source unique par chiffre', 'Chaque chiffre renvoie à la même pièce', 'Effectif 31/12/2025 = livre de paie RH : 112'],
        ['Version unique par pièce', 'Date et version dans le nom du fichier', '2024-03-14_Note_cle_repartition_signee.pdf'],
      ],
    },
    result: "Une fiche de règles de cohérence d'une page, validée par les quatre points focaux, qui sert d'arbitre quand deux domaines divergent. Fin de la procédure 2.",
    pitfall: "Laisser chaque domaine garder ses propres codes et ses propres formats « parce que ça marche chez nous ». C'est l'auditeur qui devra réconcilier, et chaque écart sera lu comme une faiblesse de vos systèmes.",
  },

  // ── Procédure 3 — Constituer le classeur de préparation ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Préparer le classeur : copie, structure, données d\'exemple',
    intro: "Pourquoi : le classeur checklist-preparation-audit-externe-multi-domaines.xlsx est le tableau de bord central du module. Vous l'ouvrez dès que la date d'audit est confirmée et le gardez ouvert jusqu'à la clôture. Quand : lundi 3 août, avant la réunion de lancement. Entrées : matrice du périmètre, points focaux désignés.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        actions: [
          "1. Ouvrez checklist-preparation-audit-externe-multi-domaines.xlsx.",
          "2. Fichier > Enregistrer sous : 2026-08-03_Checklist_Audit_Externe_HSGL.xlsx dans « 02_Classeur_Suivi ».",
        ],
      },
      {
        title: 'Repérez la structure : cinq onglets',
        actions: [
          "Tableau de bord, Finance, SCM - Achats, RH, Programme.",
          "Dans chaque onglet domaine : titre ligne 1, sous-titre ligne 2, en-têtes ligne 4, six points de contrôle en lignes 5 à 10, rappel du statut en ligne 12.",
          "Les colonnes A et B (point de contrôle, preuve attendue) sont pré-remplies avec les six contrôles du module ; les colonnes C à G contiennent des données d'exemple.",
        ],
      },
      {
        title: 'Effacez les exemples des colonnes C à G',
        actions: [
          "Dans chaque onglet domaine, sélectionnez C5:G10 puis appuyez sur Suppr.",
          "Ne touchez ni à la liste déroulante de la colonne D (Disponible, En cours, Manquant), ni à son code couleur, ni aux six points des colonnes A et B (vous pouvez seulement préciser la preuve attendue dans la colonne B).",
        ],
      },
      {
        title: 'Ne modifiez jamais les colonnes B à F du Tableau de bord',
        body: "Elles se calculent à partir des onglets domaine. Si vous ajoutez un septième point, insérez la ligne entre les lignes 5 et 10 (clic droit sur la ligne 9 > Insérer) : une ligne ajoutée sous la ligne 10 ne serait pas comptée.",
      },
    ],
    table: {
      columns: ['Colonne', 'Champ', 'Qui le renseigne', 'Règle de saisie'],
      rows: [
        ['A', 'Point de controle', 'Pré-rempli', 'Ne pas reformuler'],
        ['B', 'Preuve documentaire attendue', 'Pré-rempli ; précisé par le point focal', 'Nommer le document exact'],
        ['C', 'Responsable', 'Point focal', 'Un nom et une fonction'],
        ['D', 'Statut', 'Point focal', 'Liste : Disponible / En cours / Manquant'],
        ['E', 'Emplacement (dossier partage)', 'Point focal', 'Chemin exact du dossier'],
        ['F', 'Derniere verification', 'Point focal', 'Date de la dernière vérification réelle'],
        ['G', 'Commentaire', 'Point focal, puis vous', 'Obligatoire si En cours ou Manquant'],
      ],
    },
    example: {
      title: 'Définition des trois statuts à imposer (fil rouge)',
      lines: [
        "Disponible : la pièce existe, est complète, se retrouve en moins de dix minutes à l'emplacement indiqué et a été vérifiée à la date de la colonne F.",
        "En cours : la pièce est en constitution ; le commentaire donne l'échéance et ce qui manque.",
        "Manquant : la pièce n'existe pas ou est introuvable ; le commentaire donne le plan pour la produire.",
      ],
    },
    result: "Un classeur nommé et daté, vidé de ses exemples, avec ses formules et ses listes déroulantes intactes, et trois statuts définis par écrit.",
    pitfall: "Garder les données d'exemple « en attendant » : un classeur transmis avec des statuts d'exemple fausse le premier Tableau de bord et ruine la confiance des points focaux dans l'outil. Les libellés du classeur sont saisis sans accents : saisissez les statuts via la liste déroulante, car une variante comme « Dispo » ne serait pas comptée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: "Renseigner l'onglet Finance, ligne par ligne",
    intro: "Pourquoi : l'onglet Finance est le plus sollicité : l'auditeur y commence toujours. Entrées : balance et grand livre 2025, notes de méthode, dernier rapport d'audit externe. Responsable de la saisie : Ruth B., avec Mireille T. (Finance Officer) ; vous la relisez.",
    steps: [
      {
        title: 'Faites le tour des six points avec Ruth B. en trois questions par ligne',
        actions: [
          "1. Où se trouve la pièce exactement (dossier partagé) ?",
          "2. Qui l'a vue complète, et à quelle date ?",
          "3. Quelle est la preuve que la règle a été appliquée toute l'année, y compris les exceptions ?",
        ],
      },
      {
        title: 'Renseignez les colonnes C à G de chaque ligne',
        actions: [
          "C : nom et fonction du responsable. D : statut choisi dans la liste.",
          "E : chemin exact (ex. Drive/Finance/Repartition). F : date de la dernière vérification réelle.",
          "G : commentaire, obligatoire si le statut n'est pas Disponible.",
        ],
      },
      {
        title: 'Posez les vérifications rapides avant de passer une ligne en Disponible',
        body: "Utilisez la colonne de droite du tableau ci-dessous : si vous ne pouvez pas y répondre en deux minutes, la ligne reste En cours.",
      },
    ],
    table: {
      columns: ['Ligne', "Ce que l'auditeur testera", 'Vérification rapide avant « Disponible »'],
      rows: [
        ['5. Dossier de préparation transmis', 'Cohérence balance, grand livre et états', "Balance générale = grand livre = états annexes, au centime"],
        ['6. Clé de répartition des coûts partagés', 'Application de la clé toute l\'année, exceptions', 'Comparer trois mois d\'imputation au tableau de répartition ; chercher les exceptions'],
        ['7. Rapprochements bancaires signés', 'Signature et date des 12 rapprochements', 'Les 12 sont signés par deux personnes, avant la clôture, avec les écarts expliqués'],
        ['8. Suivi budgétaire par bailleur', 'Cohérence avec les rapports aux bailleurs', 'Total du suivi budgétaire = total du dernier rapport transmis'],
        ['9. Registre des immobilisations', "Existence physique des biens", "Dernier procès-verbal d'inventaire signé de moins de 12 mois"],
        ['10. Points en suspens du dernier audit', 'Suivi des recommandations précédentes', 'Chaque recommandation a un statut et une preuve de clôture'],
      ],
    },
    example: {
      title: 'Onglet Finance tel que saisi le 10 août 2026 (colonnes C à G)',
      lines: [
        "5 — Ruth B., Finance Manager | En cours | Drive/Finance/Audit | 07/08/2026 | Balance et grand livre 2025 transmis ; états annexes à finaliser pour le 21/08.",
        "6 — Ruth B., Finance Manager | Disponible | Drive/Finance/Repartition | 06/08/2026 | Note de méthode du 14/03/2024 (clé 60/40 de Goma) retrouvée, signée par les deux responsables d'alors.",
        "7 — Mireille T., Finance Officer | En cours | Drive/Finance/Banque | 07/08/2026 | 10 rapprochements sur 12 signés ; novembre et décembre 2025 à faire signer.",
        "8 — Ruth B., Finance Manager | Disponible | Drive/Finance/BFU | 07/08/2026 | Suivi ECHO et Lumina arrêtés au 31/12/2025, cohérents avec les rapports transmis.",
        "9 — Ruth B., Finance Manager | Manquant | Drive/Finance/Immobilisations | 05/08/2026 | Dernier inventaire physique : décembre 2023 ; à planifier avant le 28/08.",
        "10 — Amani K., Compliance Officer | En cours | Drive/Audit/Suivi | 03/08/2026 | 5 recommandations de 2024 : 3 clôturées avec preuve, 2 ouvertes sans date à documenter.",
      ],
    },
    result: "Six lignes complètes, chacune avec un statut, un emplacement, une date de vérification et un commentaire quand le statut n'est pas Disponible ; la ligne 10 est portée par vous, car le suivi des recommandations de l'audit précédent est votre responsabilité.",
    pitfall: "Passer la ligne 6 en Disponible parce que la note de méthode existe, sans demander : « Y a-t-il eu des périodes où la clé n'a pas été appliquée, et où est la décision écrite ? » Ruth B. est arrivée en novembre 2025 et ne connaît pas l'histoire de l'été. Vous retrouverez ce point dans le cas résolu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: "Renseigner l'onglet « SCM - Achats »",
    intro: "Pourquoi : l'auditeur remonte presque toujours de l'écriture comptable vers le dossier d'achat. C'est ici que se joue la conformité aux règles des bailleurs. Entrées : registre des contrats, liste des achats de 2025 supérieurs au seuil de trois devis, fiches de stock. Responsable de la saisie : Nadine O.",
    steps: [
      {
        title: "Listez d'abord l'échantillon probable (ligne 5)",
        body: "Extrayez les achats de 2025 supérieurs au seuil de trois devis : l'auditeur tirera ses dossiers dans cette liste. Comptez-les, vérifiez-les un par un.",
      },
      {
        title: 'Renseignez les six lignes comme pour la Finance',
        actions: [
          "C : responsable ; D : statut ; E : emplacement ; F : date de dernière vérification ; G : commentaire.",
          "Si le dossier d'un achat manque d'une pièce, écrivez son numéro dans la colonne G (« BC-2025-0533 : note de dérogation manquante »).",
        ],
      },
      {
        title: 'Traitez la ligne 9 (dérogations) comme la ligne la plus sensible',
        body: "Un achat sans trois devis est légitime s'il a une note de dérogation signée AVANT le bon de commande. Recensez toutes les dérogations de l'année et classez la note à côté du dossier.",
      },
    ],
    table: {
      columns: ['Ligne', "Ce que l'auditeur testera", 'Vérification rapide avant « Disponible »'],
      rows: [
        ["5. Dossiers d'achats de l'échantillon probable", 'Trois devis ou dérogation, bon de commande, contrat', "Cinq dossiers tirés au hasard : pièces complètes, chronologie devis < bon de commande < réception < facture < paiement"],
        ['6. Registre des contrats actifs', 'Contrats actifs et échéances', 'Nombre de contrats du registre = nombre de contrats signés classés'],
        ['7. Procès-verbaux de réception', 'Rapprochement bon de livraison, procès-verbal et facture', "Trois factures au hasard : procès-verbal signé, quantités égales à la facture"],
        ['8. Inventaire physique du stock', 'Rapprochement avec la fiche de stock', "Écart expliqué ; procès-verbal signé par deux personnes"],
        ['9. Justificatifs de dérogation', 'Note validée par le niveau hiérarchique requis', "Chaque achat sans trois devis a une note signée avant le bon de commande"],
        ['10. Locations de véhicules et assurances', 'Contrats et attestations valides', "Attestation d'assurance couvrant toute la période de location"],
      ],
    },
    example: {
      title: 'Onglet SCM - Achats tel que saisi le 10 août 2026 (colonnes C à G)',
      lines: [
        "5 — Nadine O., Procurement Manager | En cours | Drive/SCM/Achats | 07/08/2026 | 64 achats supérieurs au seuil en 2025 : 52 dossiers complets, 12 à compléter.",
        "6 — Gédéon K., Procurement Officer | Disponible | Drive/SCM/Contrats | 06/08/2026 | 28 contrats actifs ; 3 échéances en 2026 signalées.",
        "7 — Didier L., Store Keeper | En cours | Drive/SCM/Reception | 07/08/2026 | Rapprochement fait de janvier à juin 2025 ; juillet à décembre en cours.",
        "8 — Josué M., Logistics Officer | Disponible | Drive/SCM/Stock | 05/08/2026 | Inventaire au 31/12/2025 signé ; écart de 0,4 % expliqué.",
        "9 — Nadine O., Procurement Manager | Manquant | Drive/SCM/Derogations | 05/08/2026 | 9 dérogations en 2025 : 6 avec note signée, 3 sans (BC-2025-0418, 0533, 0610).",
        "10 — Josué M., Logistics Officer | Disponible | Drive/SCM/Flotte | 04/08/2026 | 6 véhicules loués ; attestations valides sur l'exercice.",
      ],
    },
    result: "Six lignes renseignées ; la ligne 9 révèle trois dérogations sans note, ce qui donne trois semaines pour retrouver ou régulariser les justificatifs avant le terrain.",
    tip: "Écrivez les numéros de bon de commande dans le commentaire plutôt que « quelques dossiers ». Quand l'auditeur en tirera un, vous saurez en dix secondes si vous l'avez déjà identifié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: "Renseigner l'onglet RH",
    intro: "Pourquoi : l'auditeur rapproche trois choses pour chaque salaire de l'échantillon : le contrat, la présence réelle et le paiement. L'existence physique des employés est un classique des audits de bailleurs. Entrées : livre de paie, contrats, feuilles de présence. Responsable de la saisie : Pascaline R.",
    steps: [
      {
        title: 'Constituez un échantillon probable de 15 dossiers',
        body: "Prenez-le dans les trois bases (Goma, Bukavu, Bunia sur pièces) et dans les fonctions à risque (terrain, logistique, finance).",
      },
      {
        title: 'Renseignez les six lignes',
        actions: [
          "C à G comme pour les autres onglets ; chaque commentaire chiffre le manque (« 3 dossiers sans évaluation annuelle »).",
          "Ligne 7 (existence physique) : c'est votre ligne, celle du Compliance Officer ; organisez un pointage physique avant l'audit.",
        ],
      },
      {
        title: "Vérifiez la ligne 8 (délégation de signature) avec le Directeur Pays",
        body: "Un bon de commande n'a de valeur que si son signataire avait le pouvoir à la date de la signature : gardez les versions successives de la délégation.",
      },
    ],
    table: {
      columns: ['Ligne', "Ce que l'auditeur testera", 'Vérification rapide avant « Disponible »'],
      rows: [
        ['5. Dossiers du personnel', 'Contrat, CV, diplômes, évaluation annuelle', 'Cinq dossiers au hasard : toutes les pièces présentes'],
        ['6. Registre de paie rapproché', 'Paie, contrat et présence', "Trois salaires : montant payé = contrat ; feuille de présence signée"],
        ["7. Existence physique", 'Pointage physique ou biométrique', 'Liste de paie pointée sur le terrain, procès-verbal signé'],
        ['8. Délégation de signature', 'Pouvoir du signataire à la date', 'Versions successives archivées, dates d\'application'],
        ['9. Dossiers de départ', 'Solde de tout compte et décharge', 'Décharges signées, dernier salaire calculé'],
        ['10. Formations et habilitations', 'Attestations obligatoires', 'Code de conduite signé par 100 % des employés'],
      ],
    },
    example: {
      title: 'Onglet RH tel que saisi le 10 août 2026 (colonnes C à G)',
      lines: [
        "5 — Pascaline R., RH Manager | En cours | Drive/RH/Dossiers-Personnel | 06/08/2026 | 112 dossiers ; échantillon de 15 vérifié : 12 complets, 3 sans évaluation annuelle.",
        "6 — Pascaline R., RH Manager | En cours | Drive/RH/Paie | 07/08/2026 | Rapprochement fait jusqu'à juin 2025.",
        "7 — Amani K., Compliance Officer | Manquant | Drive/RH/Controle-Effectifs | 03/08/2026 | Pointage physique à organiser à Goma et Bukavu avant le 04/09.",
        "8 — Joseph T., Direction Pays | Disponible | Drive/RH/Gouvernance | 04/08/2026 | Version signée du 12/02/2025 ; versions antérieures archivées.",
        "9 — Pascaline R., RH Manager | Disponible | Drive/RH/Departs | 05/08/2026 | 9 départs en 2025 ; 9 soldes de tout compte et décharges signés.",
        "10 — Pascaline R., RH Manager | En cours | Drive/RH/Formations | 05/08/2026 | Code de conduite signé par 108 employés sur 112 ; 4 à régulariser.",
      ],
    },
    result: "Six lignes renseignées, dont une ligne qui vous incombe (existence physique) et un manque chiffré par ligne en cours.",
    pitfall: "Écrire « quelques dossiers incomplets » dans le commentaire : l'auditeur tirera précisément ces dossiers. Un manque non chiffré ne peut être ni planifié ni suivi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: "Renseigner l'onglet Programme et vérifier la cohérence avec la Finance",
    intro: "Pourquoi : l'auditeur doit voir que la dépense correspond à une activité réellement mise en œuvre et documentée. Le Programme est aussi le domaine où les incohérences avec la Finance apparaissent le plus souvent. Entrées : rapports narratifs, listes de distribution, base de suivi. Responsable de la saisie : Clarisse M.",
    steps: [
      {
        title: 'Renseignez les six lignes',
        body: "Même méthode que pour les autres onglets. La ligne 6 (listes de bénéficiaires) porte l'essentiel du risque : chaque liste doit être signée, datée et cohérente avec les sorties de stock.",
      },
      {
        title: "Rapprochez la ligne 10 de la ligne 6 de l'onglet Finance",
        actions: [
          "Ouvrez la note de répartition des coûts partagés dans les deux dossiers.",
          "Vérifiez que c'est exactement le même document, avec la même clé et la même date de signature.",
          "Le commentaire de la ligne 10 renvoie à la ligne correspondante de la Finance (le second point de contrôle).",
        ],
      },
      {
        title: 'Faites écrire les validations orales du bailleur',
        body: "Pour la ligne 9, toute modification budgétaire validée oralement doit être confirmée par écrit avant l'audit : demandez un courriel de confirmation au bailleur.",
      },
    ],
    table: {
      columns: ['Ligne', "Ce que l'auditeur testera", 'Vérification rapide avant « Disponible »'],
      rows: [
        ['5. Rapports narratifs archivés', 'Cohérence avec les dépenses', 'Chiffres de bénéficiaires du rapport = base de suivi'],
        ['6. Listes de bénéficiaires et distributions', 'Existence, émargement, dates', 'Cinq listes au hasard : signées, datées, quantités égales aux sorties de stock'],
        ['7. Indicateurs de suivi', 'Cohérence avec les rapports financiers', 'Bénéficiaires × coût unitaire ≈ dépense de la ligne budgétaire'],
        ['8. Accords de partenariat', 'Accords signés et suivi des obligations', 'Rapports de suivi des partenaires à jour'],
        ['9. Validations bailleur des modifications', 'Approbation écrite de chaque modification', 'Aucune modification validée seulement par oral'],
        ['10. Clé de répartition analytique', 'Même clé que la Finance', 'Comparer les deux notes : même clé, même date'],
      ],
    },
    example: {
      title: 'Onglet Programme tel que saisi le 10 août 2026 (colonnes C à G)',
      lines: [
        "5 — Clarisse M., Program Manager | Disponible | Drive/Programme/Rapports | 06/08/2026 | Rapports ECHO (3) et Lumina (2) archivés avec les versions transmises.",
        "6 — Clarisse M., Program Manager | En cours | Drive/Programme/Distributions | 07/08/2026 | Nutrition : 18 sites sur 24 classés ; 6 sites à compléter.",
        "7 — Aimée T., MEAL Officer | En cours | Drive/Programme/MEAL | 07/08/2026 | Base de suivi à rapprocher des rapports financiers.",
        "8 — Clarisse M., Program Manager | Disponible | Drive/Programme/Partenariats | 04/08/2026 | Deux accords (partenaires de Bukavu et d'Uvira) signés, suivi à jour.",
        "9 — Clarisse M., Program Manager | Manquant | Drive/Programme/Modifications | 05/08/2026 | Réallocation de 40 000 USD entre lignes ECHO validée oralement : demander la confirmation écrite.",
        "10 — Clarisse M., Program Manager | Disponible | Drive/Programme/Repartition | 06/08/2026 | Même note du 14/03/2024 (clé 60/40) que l'onglet Finance, ligne 6.",
      ],
    },
    result: "Un classeur complet de 24 points de contrôle (6 par onglet) et un lien explicite entre les lignes jumelles de la Finance et du Programme. Fin de la procédure 3.",
    pitfall: "Laisser la validation orale du bailleur « parce que le bailleur est de bonne foi ». L'auditeur ne retient que ce qui est écrit : une réallocation sans courriel d'approbation sera relevée comme non éligible, même si elle est légitime.",
  },

  // ── Procédure 4 — Suivre l'avancement ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: "Lire le Tableau de bord sans se tromper d'interprétation",
    intro: "Pourquoi : l'onglet Tableau de bord vous donne en un coup d'œil la progression de chaque domaine. Mais ses formules ont des règles précises : les ignorer, c'est tirer des conclusions fausses. Quand : avant chaque réunion hebdomadaire. Entrée : les onglets domaine mis à jour par les points focaux.",
    steps: [
      {
        title: 'Comprenez les six colonnes (A à F) du Tableau de bord',
        actions: [
          "A « Domaine » : une ligne par domaine (lignes 5 à 8) et la ligne 9 « TOUTE L'ORGANISATION ».",
          "B « Points de controle » : nombre de points saisis dans la colonne A de l'onglet domaine (lignes 5 à 10).",
          "C « Disponibles » : nombre de statuts exactement égaux à « Disponible ».",
          "D « % Pret » : C divisé par B. E « A traiter (En cours + Manquant) » : B moins C.",
          "F « Statut global » : « A COMPLETER » dès qu'un point est Manquant ; « EN COURS » s'il n'y a que des En cours ; « PRET » si tout est Disponible.",
        ],
      },
      {
        title: 'Retenez la règle particulière de la ligne 9',
        body: "Le statut global de l'organisation (F9) n'est « PRET » que si le pourcentage de la ligne 9 atteint 100 % : tant qu'un seul point est En cours, il affiche « A COMPLETER ».",
      },
      {
        title: 'Faites trois contrôles de lecture à chaque réunion',
        actions: [
          "1. Lisez d'abord les Manquant : ce sont eux qui bloquent le statut « PRET ».",
          "2. Repérez les dates de « Derniere verification » vieilles de plus de 14 jours : ces lignes sont périmées.",
          "3. Ouvrez au hasard deux lignes Disponible par domaine à l'emplacement indiqué : la pièce doit s'y trouver en deux minutes.",
        ],
      },
      {
        title: 'Ne modifiez jamais les colonnes B à F',
        body: "Le Tableau de bord rappelle lui-même : calculé automatiquement, ne pas modifier manuellement.",
      },
    ],
    table: {
      columns: ['Domaine', 'Points de controle', 'Disponibles', '% Pret', 'A traiter', 'Statut global'],
      rows: [
        ['Finance', '6', '2', '33,3 %', '4', 'A COMPLETER'],
        ['SCM - Achats', '6', '3', '50,0 %', '3', 'A COMPLETER'],
        ['RH', '6', '2', '33,3 %', '4', 'A COMPLETER'],
        ['Programme', '6', '3', '50,0 %', '3', 'A COMPLETER'],
        ["TOUTE L'ORGANISATION", '24', '10', '41,7 %', '14', 'A COMPLETER'],
      ],
    },
    result: "Le Tableau de bord au 10 août 2026 : 10 points Disponible sur 24 (41,7 %), 14 à traiter, quatre domaines en « A COMPLETER » parce que chacun a au moins un Manquant.",
    pitfall: "Lire « % Pret » comme un indicateur de qualité. Un statut Disponible est déclaratif : c'est le point focal qui l'a choisi. Votre contrôle par sondage (deux lignes par domaine) est ce qui rend le pourcentage crédible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Conduire la réunion de suivi hebdomadaire de 20 minutes',
    intro: "Pourquoi : la réunion courte maintient le rythme sans transformer le coordinateur en contrôleur de chaque pièce. Le piège classique du coordinateur débutant est de vouloir vérifier lui-même chaque pièce, ce qui recrée un silo, le sien. Quand : chaque lundi à 10h00 (10, 17, 24 et 31 août).",
    steps: [
      {
        title: 'Projetez le Tableau de bord et tenez le chronomètre',
        actions: [
          "1. Rappel des jalons à venir (2 min).",
          "2. Tour des quatre domaines : ce qui a changé depuis lundi, ce qui bloque (8 min, 2 min par domaine).",
          "3. Incohérences détectées entre domaines (5 min).",
          "4. Décisions et actions : qui, quoi, pour quand (3 min).",
          "5. Prochaine réunion et pièces attendues (2 min).",
        ],
      },
      {
        title: 'Renvoyez les discussions de fond hors séance',
        body: "Si un point demande plus de deux minutes, fixez un rendez-vous séparé entre les personnes concernées : la réunion ne se transforme pas en comité technique.",
      },
      {
        title: "Envoyez le compte rendu avant 17h00 le jour même",
        body: "Une demi-page : Tableau de bord mis à jour, décisions, actions avec responsable et date, incohérences ouvertes.",
      },
    ],
    table: {
      columns: ['Date', 'Points Disponible', '% Pret', 'Décision ou alerte principale'],
      rows: [
        ['Lun. 10/08', '10 sur 24', '41,7 %', 'Premier remplissage ; quatre Manquant à traiter en priorité'],
        ['Lun. 17/08', '13 sur 24', '54,2 %', "Inventaire des immobilisations planifié le 26/08 ; confirmation écrite d'ECHO demandée"],
        ['Lun. 24/08', '17 sur 24', '70,8 %', 'Trois dérogations d\'achat sans note : recherche dans les boîtes e-mail engagée'],
        ['Lun. 31/08', '21 sur 24', '87,5 %', 'Pointage physique réalisé à Goma ; Bukavu le 02/09'],
      ],
    },
    result: "Quatre comptes rendus hebdomadaires qui montrent la progression de 41,7 % à 87,5 % en trois semaines, sans que vous ayez vérifié une seule pièce à la place d'un domaine.",
    tip: "Faites parler les points focaux dans le même ordre à chaque réunion : cela crée un rythme, et chacun prépare sa minute et demie la veille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Tenir le registre des incohérences entre domaines',
    intro: "Pourquoi : votre valeur ajoutée est de repérer ce qu'aucun domaine ne voit seul : une date de réception de marchandise en Finance qui ne correspond pas à celle du bon de réception SCM, par exemple. Entrées : trois transactions types suivies dans les quatre domaines.",
    steps: [
      {
        title: 'Choisissez trois transactions représentatives de l\'échantillon probable',
        body: "Un achat supérieur au seuil, un salaire de terrain, une distribution : l'auditeur tirera le même type d'éléments.",
      },
      {
        title: 'Suivez chacune dans les quatre domaines et comparez cinq attributs',
        actions: [
          "Date, montant, projet imputé, nom du fournisseur ou du bénéficiaire, signataire.",
          "Notez toute différence, même d'un jour, même de quelques dollars.",
        ],
      },
      {
        title: 'Consignez chaque écart dans un registre simple',
        body: "Un tableau à part (pas un onglet du classeur) : numéro, sujet, ce que dit chaque domaine, action décidée avec échéance.",
      },
      {
        title: 'Faites corriger à la source, jamais en arrangeant un document',
        body: "Une erreur sincère se corrige par une écriture ou une note de correction datée du jour de la correction. Ne modifiez jamais une pièce existante et n'antidatez jamais un document.",
      },
    ],
    table: {
      columns: ['N°', 'Sujet', 'Ce que dit le domaine A', 'Ce que dit le domaine B', 'Action décidée et échéance'],
      rows: [
        ['1', 'Clé de répartition du gardiennage', 'Finance : 60/40 (note du 14/03/2024)', 'Programme : « partage 50/50 » dans un projet de rapport narratif', 'Aligner le rapport sur la note signée ; Clarisse M., 17/08'],
        ['2', 'Date de réception BC-2025-0211', 'Finance : écriture du 18/03/2025', 'SCM : procès-verbal de réception du 25/03/2025', 'Écriture à la date de la facture : documenter, contrôler la coupure de fin d\'exercice ; Ruth B. et Didier L., 24/08'],
        ['3', "Effectif au 31/12/2025", 'RH : 112 employés (livre de paie)', 'Programme : 118 personnes sur l\'organigramme du projet', "Six agents incitatifs hors paie : les classer dans une rubrique distincte ; Pascaline R. et Clarisse M., 24/08"],
      ],
    },
    result: "Un registre de trois écarts détectés, expliqués et corrigés avant l'arrivée de l'auditeur, avec un propriétaire et une date pour chacun.",
    pitfall: "Corriger un écart en « arrangeant » la pièce : refaire une feuille de présence, antidater une note. L'auditeur y verra une altération de preuve, bien plus grave que l'écart initial. La seule correction valable est celle qui se voit et qui est datée du jour où elle est faite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Décider le go/no-go et déclarer « prêt à recevoir l\'auditeur »',
    intro: "Pourquoi : « prêt » ne veut pas dire « parfait » : cela veut dire que vous maîtrisez ce qui manque et que vous pouvez l'expliquer. Quand : jeudi 3 septembre, 14h00, avec le Directeur Pays. Entrées : Tableau de bord du 31 août, registre des incohérences.",
    steps: [
      {
        title: 'Vérifiez cinq critères de go',
        actions: [
          "1. Au moins 90 % des points sont Disponible.",
          "2. Aucun point Manquant : chaque point En cours a un plan daté, un responsable et un commentaire à jour.",
          "3. Aucune incohérence ouverte sur un chiffre clé (clé de répartition, effectif, montants des projets).",
          "4. Les points focaux et leurs suppléants sont disponibles du 14 au 25 septembre.",
          "5. Le kick-off est préparé : ordre du jour, salle, accès, badge d'entrée.",
        ],
      },
      {
        title: 'Choisissez entre trois décisions',
        actions: [
          "Go : tous les critères sont remplis.",
          "Go conditionnel : un ou deux points restent ouverts avec plan daté ; ils seront annoncés spontanément à l'auditeur.",
          "No-go : reportez la date « prêt » de trois jours ouvrés au plus et informez le Directeur Pays par écrit.",
        ],
      },
      {
        title: 'Rédigez la décision en quinze lignes et diffusez-la aux quatre points focaux',
        body: "Date, critères, état du Tableau de bord, points ouverts avec plan, décision.",
      },
    ],
    table: {
      columns: ['Réunion', 'Points Disponible', '% Pret', 'Statut global organisation'],
      rows: [
        ['Lun. 10/08', '10 sur 24', '41,7 %', 'A COMPLETER'],
        ['Lun. 17/08', '13 sur 24', '54,2 %', 'A COMPLETER'],
        ['Lun. 24/08', '17 sur 24', '70,8 %', 'A COMPLETER'],
        ['Lun. 31/08', '21 sur 24', '87,5 %', 'A COMPLETER'],
        ['Jeu. 03/09 (go/no-go)', '22 sur 24', '91,7 %', 'A COMPLETER (2 points En cours)'],
      ],
    },
    example: {
      title: 'Décision du 3 septembre 2026 (extrait)',
      lines: [
        "« Au 3 septembre, 22 points sur 24 sont Disponible (91,7 %). Deux points restent En cours : la ligne 9 de l'onglet SCM - Achats (deux justificatifs de dérogation introuvables à ce jour, recherche dans les boîtes e-mail en cours) et la ligne 9 de l'onglet Programme (confirmation écrite d'ECHO attendue pour la réallocation de 40 000 USD ; Clarisse M. a relancé l'officier de programme le 2 septembre). Aucun point Manquant, aucune incohérence ouverte. Décision : GO CONDITIONNEL. Si ces deux points ne sont pas clos le 14 septembre, nous les annoncerons spontanément à l'équipe d'audit en précisant la démarche en cours. Amani K. et Joseph T. »",
      ],
    },
    result: "Une décision écrite, un statut « prêt » déclaré le vendredi 4 septembre, et deux points ouverts connus de tous, avec un plan. Fin de la procédure 4.",
    pitfall: "Attendre 100 % pour déclarer « prêt » : le statut global (F9) affichera « A COMPLETER » jusqu'au bout si un point reste En cours. Un point ouvert, connu et assorti d'un plan, vaut mieux que le report d'une date.",
  },

  // ── Procédure 5 — Communiquer avec l'équipe d'audit ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Préparer la réunion de cadrage (kick-off) avec l\'équipe d\'audit',
    intro: "Pourquoi : la première réunion fixe la tonalité de toute la mission et permet de confirmer périmètre et calendrier avant que chacun ne parte dans sa direction. Quand : convocation envoyée lundi 7 septembre pour le lundi 14 septembre à 9h00. Entrées : lettre d'engagement, matrice du périmètre, calendrier commun.",
    steps: [
      {
        title: 'Convoquez par écrit au moins sept jours avant',
        actions: [
          "Côté HSGL : Joseph T., Dr Patrice N., les quatre points focaux, vous.",
          "Côté cabinet : Estelle D., Samuel O. et l'assistant.",
          "Durée : 60 minutes, au siège, salle de réunion.",
        ],
      },
      {
        title: 'Préparez un ordre du jour en six points',
        actions: [
          "1. Présentations (5 min).",
          "2. Rappel du mandat et du périmètre, tels que dans la lettre d'engagement (10 min).",
          "3. Calendrier des visites et des entretiens (15 min).",
          "4. Organisation de HSGL : point de contact unique, points focaux, canal unique (10 min).",
          "5. Liste des documents demandés et délais de réponse (10 min).",
          "6. Logistique et questions : accès, bureaux, horaires, sécurité (10 min).",
        ],
      },
      {
        title: 'Imprimez cinq documents en autant d\'exemplaires que de participants',
        body: "Lettre d'engagement, matrice du périmètre, calendrier commun, organigramme des points focaux, glossaire commun.",
      },
    ],
    example: {
      title: 'Convocation envoyée le 7 septembre 2026',
      lines: [
        "Objet : Réunion de cadrage de l'audit externe 2025 — lundi 14 septembre, 9h00, salle de réunion du siège.",
        "« Bonjour Estelle, bonjour Samuel, pour lancer la mission dans les meilleures conditions, nous vous proposons une réunion de cadrage d'une heure. Ordre du jour ci-joint. Nous y confirmerons le périmètre, le calendrier des visites et nous vous présenterons notre organisation : un point de contact unique pour toutes vos demandes, et un point focal par domaine. Nous avons préparé le classeur de suivi de nos points de contrôle et nous le tenons à votre disposition. Cordialement, Amani K. »",
      ],
    },
    result: "Une convocation envoyée à J-7, un ordre du jour minuté en six points et les supports imprimés. Le classeur n'est pas remis à l'auditeur sans accord de la Direction : vous proposez, vous ne livrez pas d'office.",
    tip: "Annoncez dans la convocation que vous êtes organisés : un auditeur qui voit arriver une structure claire adapte son approche et pose moins de questions redondantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Conduire le kick-off et désigner le point de contact unique',
    intro: "Pourquoi : c'est le moment où vous obtenez, de la bouche même du cabinet, les trois engagements qui évitent l'essentiel des incohérences : un seul canal, des délais de réponse convenus, un calendrier d'entretiens connu. Quand : lundi 14 septembre, 9h00.",
    steps: [
      {
        title: 'Confirmez le périmètre avec la lettre sous les yeux',
        body: "Faites confirmer par Estelle D. que Bunia reste traitée sur pièces et que les visites se limitent à Goma et Bukavu.",
      },
      {
        title: 'Désignez le point de contact unique en une phrase',
        body: "« Toutes vos demandes passent par Amani K., par la boîte audit-externe@hsgl-rdc.example ou par téléphone ; il les redirige vers le bon point focal et centralise les réponses. »",
      },
      {
        title: 'Convenez des délais de réponse',
        actions: [
          "Document existant : réponse sous 24 heures ouvrées.",
          "Demande qui nécessite une analyse : réponse sous 72 heures ouvrées, avec accusé de réception dans les 2 heures.",
        ],
      },
      {
        title: 'Précisez que l\'équipe peut rencontrer toute personne',
        body: "Le point de contact unique organise les rendez-vous, il ne filtre pas : cela se dit explicitement devant les points focaux.",
      },
      {
        title: 'Fixez la réunion de clôture du terrain',
        body: "Vendredi 25 septembre, 10h00, avec Joseph T. : l'équipe y présente ses premiers constats avant le rapport provisoire.",
      },
    ],
    example: {
      title: 'Engagements pris au kick-off du 14 septembre',
      lines: [
        "Point de contact unique : Amani K., boîte audit-externe@hsgl-rdc.example ; suppléant : Ruth B.",
        "Délais : 24 heures ouvrées pour un document existant, 72 heures ouvrées pour une analyse ; accusé de réception sous 2 heures.",
        "Entretiens : planning communiqué par Samuel O. avant 17h00 chaque veille ; Bukavu les 21, 22 et 23 septembre.",
        "Liste des documents demandés : 31 pièces, remise échelonnée du 14 au 16 septembre.",
        "Clôture du terrain : vendredi 25 septembre, 10h00, au siège.",
      ],
    },
    result: "Un compte rendu de kick-off d'une page, envoyé le jour même avant 18h00 à tous les participants, qui reprend les cinq engagements avec noms, dates et heures.",
    pitfall: "Présenter le point de contact unique comme un moyen de contrôler ce que l'auditeur voit. Dites-le clairement : vous organisez, vous ne bloquez rien. Si l'équipe sent un filtre, elle élargit ses sondages.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Mettre en place le registre des demandes : une demande, une ligne',
    intro: "Pourquoi : deux personnes de deux départements peuvent, en toute bonne foi, donner deux versions légèrement différentes de la même clé de répartition ou de la même procédure. Le registre garantit qu'une demande n'a qu'un propriétaire et une réponse. Entrée : la liste des documents demandés.",
    steps: [
      {
        title: 'Créez un tableau simple dans votre messagerie ou un fichier partagé',
        body: "Ce n'est pas un onglet du classeur de préparation, qui reste inchangé : c'est un outil de travail à part, de six colonnes.",
      },
      {
        title: 'Saisissez chaque demande mot pour mot, avec son numéro, dès sa réception',
        actions: [
          "Numérotez R-001, R-002… dans l'ordre d'arrivée.",
          "Accusez réception dans les deux heures : « bien reçu, réponse prévue demain 12h ».",
        ],
      },
      {
        title: 'Affectez un seul point focal et une échéance par demande',
        body: "Si la demande touche deux domaines, désignez celui qui consolide et prévenez l'autre.",
      },
      {
        title: 'Relisez toute réponse avant envoi avec trois contrôles de cohérence',
        actions: [
          "1. Le chiffre ou le nom cités sont-ils les mêmes que dans les autres domaines ?",
          "2. La pièce citée a-t-elle le nom de fichier convenu dans les règles de cohérence ?",
          "3. La réponse répond-elle exactement à la question posée, sans plus ?",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Reçue le', 'Demande (mot pour mot)', 'Point focal', 'Échéance', 'Statut'],
      rows: [
        ['R-001', '14/09', '« Balance générale et grand livre 2025 au format Excel »', 'Ruth B.', '15/09, 12h00', 'Envoyée le 15/09 à 09h40'],
        ['R-002', '14/09', '« Liste des contrats fournisseurs actifs et copies signées »', 'Nadine O.', '15/09, 12h00', 'Envoyée le 15/09 à 10h15'],
        ['R-007', '15/09', '« Dossiers complets BC-2025-0418 et BC-2025-0533 »', 'Nadine O.', '15/09, 17h00', 'Envoyée le 15/09 à 11h00'],
        ['R-011', '16/09', "« Date et décision d'imputation du gardiennage de juillet à septembre 2025 »", 'Ruth B.', '18/09, 12h00', 'Note de réponse ouverte (WP F-12)'],
        ['R-014', '17/09', '« Liste de paie d\'octobre 2025 et pointage physique de Bukavu »', 'Pascaline R.', '21/09, 17h00', 'En cours'],
      ],
    },
    result: "Un registre où chaque demande a un numéro, un propriétaire, une échéance et un statut, et où aucune réponse ne part sans votre relecture.",
    tip: "Nommez les réponses avec le numéro de la demande : « R-007_Dossiers_BC-0418-0533.zip ». Quand l'auditeur écrira « suite à R-007 », vous retrouverez la pièce en dix secondes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Gérer le quotidien du terrain : un canal, une cohérence',
    intro: "Pourquoi : une incohérence, aux yeux d'un auditeur externe, pèse plus lourd qu'une simple lacune documentaire : elle interroge la fiabilité globale de vos systèmes. Le quotidien du terrain est l'endroit où elle naît. Quand : chaque jour du 14 au 25 septembre.",
    steps: [
      {
        title: 'Tenez un point de 15 minutes avec l\'équipe d\'audit chaque jour à 17h00',
        actions: [
          "Demandes en cours et réponses prévues.",
          "Points qui s'annoncent : les questions de l'auditeur qui laissent entrevoir un constat.",
          "Planning d'entretiens du lendemain.",
        ],
      },
      {
        title: "Organisez les entretiens sans les scénariser",
        body: "Dites aux employés : répondez à ce que vous savez, montrez le document, dites « je ne sais pas » quand c'est le cas, et signalez-moi toute demande complémentaire. Ne leur dictez jamais une réponse.",
      },
      {
        title: 'Faites passer toute demande reçue en direct par le registre',
        body: "Quand un auditeur demande une pièce directement à un employé, celui-ci la prend en note et la transmet, il n'est pas invité à refuser de répondre.",
      },
      {
        title: 'Tenez un journal des échanges oraux',
        body: "Date, heure, auditeur, sujet, réponse donnée : en cas de désaccord sur ce qui a été dit, vous avez une trace contemporaine.",
      },
    ],
    example: {
      title: 'Point du mercredi 16 septembre, 17h00 (extrait)',
      lines: [
        "Demandes ouvertes : R-011 (imputation du gardiennage, Ruth B., réponse jeudi 18/09 à midi) et R-012 à R-013 en cours.",
        "Point qui s'annonce : Estelle D. a relevé que le gardiennage de juillet à septembre 2025 est imputé à 100 % à ECHO ; elle formule un point d'audit (WP F-12). Note de réponse ouverte à 16h00.",
        "Entretiens de demain : Didier L. (réception), Josué M. (achats) ; Samuel O. confirme les horaires avant 17h00.",
        "Relecture avant envoi : la réponse R-007 reprend bien les numéros de bon de commande du dossier.",
      ],
    },
    result: "Un fonctionnement quotidien où tout passe par un canal, où les points sensibles sont annoncés avant d'être des constats et où chaque réponse est relue. Fin de la procédure 5.",
    pitfall: "Devenir un filtre : demander aux employés de ne parler à l'auditeur qu'en votre présence, ou retarder la remise d'une pièce « le temps de la relire ». Une relecture de cinq minutes est normale ; un contrôle d'accès est relevé comme limitation d'étendue.",
  },

  // ── Procédure 6 — Gérer un point de divergence ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Reconnaître le signal et accuser réception sans répondre sur le fond',
    intro: "Pourquoi : dès qu'un membre de l'équipe d'audit pose une question qui laisse entrevoir un futur constat, c'est le moment d'ouvrir la note de réponse, pas d'attendre le rapport provisoire plusieurs semaines plus tard. Entrées : la question de l'auditeur, le template note-reponse-point-divergence-audit.docx.",
    steps: [
      {
        title: 'Reconnaissez les signaux',
        actions: [
          "Une question fermée sur un échantillon (« je ne trouve pas… »).",
          "Une même demande répétée deux fois.",
          "Une expression comme « je note… » ou « point à confirmer ».",
          "Un courriel intitulé « point d'audit » ou portant une référence de papier de travail.",
        ],
      },
      {
        title: 'Écoutez en entier, puis reformulez',
        body: "« Si je comprends bien, vous ne trouvez dans ces deux dossiers ni trois devis ni note de dérogation. C'est bien cela ? »",
      },
      {
        title: 'Répondez avec la phrase standard et un délai précis',
        body: "« Je vérifie la pièce et je reviens vers vous demain avant 12h avec le document. »",
      },
      {
        title: 'Ouvrez la note dans les deux heures',
        actions: [
          "Copiez note-reponse-point-divergence-audit.docx dans « 04_Divergences ».",
          "Nommez-la AAAA-MM-JJ_Note_reponse_<référence>.docx, par exemple 2026-09-15_Note_reponse_WP-S-05.docx.",
          "Prévenez le point focal et, si le sujet est sensible, le Directeur Pays.",
        ],
      },
    ],
    example: {
      title: 'Mardi 15 septembre 2026, 11h20 — base de Goma',
      lines: [
        "Samuel O. à Nadine O. : « Pour BC-2025-0418 et BC-2025-0533, je ne trouve dans le dossier ni trois devis ni note de dérogation. »",
        "Nadine O. : « Si je comprends bien, il vous manque les justificatifs de dérogation pour ces deux achats. Je vérifie la pièce et je reviens vers vous demain avant 12h avec le document. »",
        "11h40 : Amani K. ouvre 2026-09-15_Note_reponse_WP-S-05.docx ; Nadine O. recherche les dossiers et les courriels d'archive.",
      ],
    },
    result: "Aucun engagement sur le fond, un délai précis donné à l'auditeur, et une note ouverte dans le dossier « 04_Divergences » moins de deux heures après le signal.",
    pitfall: "Répondre « ça doit être dans le dossier, je regarde ce soir » ou, pire, « on a toujours fait comme ça ». L'une est un engagement sans date, l'autre une affirmation non documentée : vous créez un risque que vous ne pourrez plus retirer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Bloc 1 de la note — Décrire le point soulevé par l\'auditeur',
    intro: "Pourquoi : un point mal décrit se défend mal. Le premier bloc du template, « Point soulevé par l'auditeur externe », fige la formulation exacte avant que la discussion ne la déforme. Le template compte trois champs ici.",
    steps: [
      {
        title: 'Remplissez le champ « Référence (n° de constat / working paper) »',
        body: "Recopiez le numéro du papier de travail ou du constat. Si l'auditeur n'en a pas donné, demandez-le : « Pouvez-vous me donner la référence du papier de travail ? ».",
      },
      {
        title: 'Remplissez le champ « Domaine concerné (Finance / SCM / RH / Programme) »',
        body: "Un seul domaine principal ; si le point touche deux domaines, nommez celui qui consolide et notez l'autre entre parenthèses.",
      },
      {
        title: 'Rédigez le champ « Description factuelle du point tel que formulé par l\'auditeur »',
        actions: [
          "Recopiez les mots exacts de l'auditeur, entre guillemets.",
          "Ajoutez les faits objectifs : montants, dates, numéros de pièces, échantillon.",
          "N'ajoutez aucun commentaire ni aucune réponse dans ce bloc.",
        ],
      },
      {
        title: 'Faites confirmer par écrit le contenu avant de continuer',
        body: "Si le point a été exprimé oralement, envoyez un courriel de reformulation : « Confirmez-vous que le point WP S-05 porte bien sur… ? ».",
      },
    ],
    example: {
      title: 'Bloc 1 de la note WP S-05, tel que saisi le 15 septembre',
      lines: [
        "Référence : WP S-05 — « Procédure d'achat : mise en concurrence » (formulé oralement par Samuel O. le 15/09/2026, confirmé par courriel à 14h10).",
        "Domaine concerné : SCM.",
        "Description : « Sur l'échantillon de 15 achats supérieurs au seuil de trois devis, deux dossiers, BC-2025-0418 (8 400 USD, transport d'intrants nutritionnels) et BC-2025-0533 (6 150 USD, réparation du groupe électrogène de l'entrepôt de Goma), ne contiennent ni trois devis ni note de dérogation validée. » Constat provisoire de l'auditeur : non-respect de la procédure d'achat pour 2 dossiers sur 15.",
      ],
    },
    result: "Un premier bloc rempli en trois champs, qui reprend mot pour mot la formulation de l'auditeur et en confirme le périmètre exact (deux dossiers sur quinze).",
    tip: "Reproduisez le chiffre de l'échantillon (« 2 sur 15 ») : un constat chiffré se défend ou s'accepte, un constat vague ne se traite pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Rassembler la preuve : classer chaque pièce en solide ou en affirmation',
    intro: "Pourquoi : un auditeur ne retire jamais un constat sur conviction verbale : il le retire ou le nuance uniquement face à un document. Le travail de cette étape décide du sort du point. Délai : 24 à 48 heures. Entrées : les cinq critères de la théorie (origine, date, forme, recoupement, traçabilité).",
    steps: [
      {
        title: 'Listez les pièces qui pourraient répondre à la question',
        body: "Contrat, note, courriel, procès-verbal, rapport, grand livre : pensez aux pièces contemporaines des faits, pas aux explications écrites après coup.",
      },
      {
        title: 'Cherchez dans quatre endroits',
        actions: [
          "Le dossier de la transaction (Drive, classeur papier).",
          "Les courriels de la période, y compris les boîtes des personnes parties.",
          "Les archives des autres domaines (RH, Programme, Finance).",
          "Les tiers : bailleur, fournisseur, banque.",
        ],
      },
      {
        title: 'Classez chaque pièce trouvée avec les cinq critères',
        body: "Solide (tiers, contemporaine, signée, recoupée) ou affirmation (souvenir, copie non signée, source unique).",
      },
      {
        title: 'Identifiez ce qui manque et décidez de la position',
        body: "Si la pièce solide existe : position « Contesté ». Si elle n'existe pas : position « Accepté » ou « Partiellement accepté » avec correction. Ne gardez jamais une position sans pièce solide.",
      },
    ],
    table: {
      columns: ['Dossier', 'Pièce recherchée ou trouvée', 'Source et date', 'Solidité'],
      rows: [
        ['BC-2025-0418', "Note de dérogation pour urgence (pont coupé sur l'axe Goma–Rutshuru)", 'Courriel de Dr Patrice N. du 11/03/2025, 16h42, avec la note signée en pièce jointe', 'Solide : signée, horodatée, antérieure au bon de commande du 12/03/2025'],
        ['BC-2025-0418', 'Bon de commande', 'Drive/SCM/Achats, 12/03/2025', 'Solide'],
        ['BC-2025-0533', 'Note de dérogation', 'Aucune trouvée dans les dossiers ni les courriels', 'Manquante'],
        ['BC-2025-0533', 'Deux devis (sur trois requis)', 'Courriels des 23 et 24/05/2025', 'Solide mais insuffisante : deux devis au lieu de trois'],
        ['BC-2025-0533', '« On a toujours fait comme ça pour les urgences »', 'Souvenir de Nadine O.', 'Affirmation non documentée'],
      ],
    },
    result: "Une pièce solide pour BC-2025-0418, une absence confirmée pour BC-2025-0533, et une position décidée pour chaque dossier avant d'écrire une seule ligne de réponse.",
    pitfall: "Se contenter d'une pièce qui n'existait pas à l'époque. Une note de dérogation rédigée après la demande de l'auditeur n'est pas une preuve que la dérogation existait : c'est une régularisation, et elle doit être présentée comme telle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Blocs 2 et 3 de la note — Position documentée et preuves à l\'appui',
    intro: "Pourquoi : ces deux blocs forment le cœur de la réponse. Le bloc 2, « Position documentée de notre organisation », expose ce que vous contestez ou clarifiez ; le bloc 3, « Preuves documentées à l'appui », liste les pièces. Le template compte quatre champs sur ces deux blocs. Entrée : le classement des pièces de l'étape 3.",
    steps: [
      {
        title: 'Remplissez « Élément de désaccord ou de clarification apporté »',
        actions: [
          "Séparez ce que vous confirmez de ce que vous contestez.",
          "Appuyez chaque affirmation sur une pièce numérotée (P1, P2…).",
          "Restez sur des faits ; pas d'adjectifs, pas de jugement sur l'auditeur.",
        ],
      },
      {
        title: 'Remplissez « Contexte opérationnel pertinent (si applicable) »',
        body: "Deux à trois phrases sur le contexte qui explique la situation (contrainte de terrain, délai, événement) : le contexte éclaire, il ne remplace jamais la pièce.",
      },
      {
        title: 'Remplissez « Documents justificatifs référencés »',
        body: "Pour chaque pièce : numéro, nom du document, source (où le trouver), période couverte. Il en faut au moins deux, précisément identifiées.",
      },
      {
        title: 'Remplissez « Personne(s) ressource pouvant confirmer l\'information »',
        body: "Nom et fonction de ceux qui peuvent confirmer à l'auditeur ce que disent les pièces ; prévenez-les avant de citer leur nom.",
      },
    ],
    example: {
      title: 'Blocs 2 et 3 de la note WP S-05',
      lines: [
        "Élément de désaccord ou de clarification : « Nous contestons le constat pour BC-2025-0418 : la note de dérogation (urgence) existait, signée le 11/03/2025, avant le bon de commande du 12/03/2025 ; elle n'avait pas été classée dans le dossier d'achat (P1, P2). Pour BC-2025-0533, nous ne contestons pas l'absence de note : seuls deux devis ont été retrouvés (P3). »",
        "Contexte opérationnel : « BC-2025-0418 : pont coupé sur l'axe Goma–Rutshuru, transporteur unique disponible pour 14 tonnes d'intrants. BC-2025-0533 : panne du groupe électrogène de l'entrepôt, réparation urgente pour préserver la chaîne du froid. »",
        "Documents justificatifs : P1 — courriel de Dr Patrice N. du 11/03/2025, 16h42, avec la note de dérogation signée (boîte du Coordinateur, 11/03/2025). P2 — BC-2025-0418 du 12/03/2025 (Drive/SCM/Achats). P3 — deux devis de BC-2025-0533 des 23 et 24/05/2025 (boîte du Procurement Manager).",
        "Personnes ressources : Nadine O., Procurement Manager ; Dr Patrice N., Coordinateur de la base de Goma.",
      ],
    },
    result: "Deux blocs remplis où chaque affirmation renvoie à une pièce numérotée (P1 à P3), avec au moins deux pièces précisément identifiées (nom, source, période).",
    tip: "Numérotez vos pièces dans l'ordre où le texte les cite : l'auditeur lit la note avec les pièces jointes à côté, et le renvoi P1, P2 lui fait gagner du temps.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Bloc 4 de la note — Proposer une résolution réaliste',
    intro: "Pourquoi : refuser en bloc un constat fondé est presque toujours perdant. Le bloc 4, « Résolution proposée », montre que vous traitez le problème, pas seulement la formulation. Le template compte deux champs, dont un seul est rempli selon la décision.",
    steps: [
      {
        title: 'Remplissez « Action corrective proposée (si le point est fondé) »',
        actions: [
          "Une action corrective par point fondé, avec un responsable nommé et une date.",
          "Si vous régularisez une pièce, datez-la du jour réel et écrivez qu'elle régularise a posteriori.",
          "Ajoutez un contrôle qui évite la répétition (qui vérifie quoi, à quelle fréquence).",
        ],
      },
      {
        title: 'Remplissez « Justification du maintien de la position initiale (si applicable) »',
        body: "Uniquement pour les éléments que vous contestez : une phrase qui renvoie à la pièce solide.",
      },
      {
        title: 'Vérifiez le réalisme de ce que vous promettez',
        body: "Chaque engagement doit être tenable : un contrôle mensuel que personne n'exécutera est pire qu'un contrôle trimestriel réellement tenu.",
      },
    ],
    example: {
      title: 'Bloc 4 de la note WP S-05',
      lines: [
        "Action corrective : « BC-2025-0533 : note de régularisation datée du 16/09/2026, qui mentionne explicitement qu'elle régularise a posteriori, signée par Dr Patrice N. et Joseph T. Les trois dérogations 2025 sans note ont été revues : la note de BC-0418 est classée au dossier, celle de BC-0610 est régularisée de la même manière. Contrôle : dès octobre 2026, Nadine O. vérifie chaque mois que toute dérogation a sa note signée avant paiement ; Amani K. en contrôle un échantillon chaque trimestre. »",
        "Justification du maintien : « BC-2025-0418 : la note signée du 11/03/2025 est antérieure au bon de commande du 12/03/2025 ; la dérogation était donc valide à l'engagement, seul le classement du justificatif était défaillant (P1, P2). »",
      ],
    },
    result: "Un bloc 4 qui concède ce qui est fondé, corrige avec une date et un responsable, maintient uniquement ce qui est démontré par une pièce solide.",
    pitfall: "Antidater la note de régularisation « pour que le dossier soit propre ». Une régularisation honnête, datée du jour et assumée, est acceptée par la plupart des auditeurs ; une pièce antidatée est considérée comme une falsification et discrédite tout votre dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Bloc 5 de la note — Décision, validation interne et transmission',
    intro: "Pourquoi : la note n'engage l'organisation que lorsqu'elle est validée par la personne qui a autorité sur le domaine. Le bloc 5, « Décision et transmission », compte six champs répartis dans trois lignes du template. Entrées : les blocs 1 à 4 complétés, le responsable du domaine.",
    steps: [
      {
        title: 'Choisissez la décision',
        body: "Dans le champ « Décision (Accepté / Contesté / Partiellement accepté) », retenez l'une des trois valeurs avec les critères vus dans la théorie.",
      },
      {
        title: "Faites valider en interne",
        body: "Champ « Validé en interne par (nom, fonction) » : le responsable du domaine, et le Directeur Pays si la note engage une régularisation ou un montant.",
      },
      {
        title: "Transmettez par le canal unique et consignez la date",
        actions: [
          "Champ « Date de transmission à l'équipe d'audit » : date et heure d'envoi réelles.",
          "Envoyez par la boîte audit-externe, avec les pièces jointes numérotées P1, P2…",
          "Reportez l'envoi dans le registre des demandes.",
        ],
      },
      {
        title: "Suivez la réponse de l'auditeur",
        body: "Champ « Réponse de l'auditeur reçue le » : relancez après trois jours ouvrés si rien n'arrive, et archivez la réponse dans la note.",
      },
      {
        title: 'Signez la note',
        body: "Champs « Rédigé par (nom, fonction) » et « Date » : la personne qui a rédigé, avec la date du jour.",
      },
    ],
    example: {
      title: 'Bloc 5 de la note WP S-05',
      lines: [
        "Décision : Partiellement accepté (contesté pour BC-2025-0418, accepté pour BC-2025-0533).",
        "Validé en interne par : Nadine O., Procurement Manager, et Joseph T., Directeur Pays.",
        "Date de transmission à l'équipe d'audit : 16/09/2026, 11h30, avec les pièces P1 à P3.",
        "Réponse de l'auditeur reçue le : 18/09/2026 — constat retiré pour BC-2025-0418, maintenu pour BC-2025-0533 (1 dossier sur 15), repris dans la management letter.",
        "Rédigé par : Nadine O., Procurement Manager (coordination : Amani K.) — Date : 16/09/2026.",
      ],
    },
    result: "Une note d'une page, complète en cinq blocs, transmise dans le délai promis (moins de 24 heures) avec au moins deux pièces précisément identifiées. Fin de la procédure 6.",
    tip: "Ouvrez toujours la note suivante avec le même réflexe : quand l'auditeur répond, mettez à jour le champ « Réponse de l'auditeur reçue le » et classez. Ce sont vos notes qui alimenteront la réponse au rapport provisoire.",
  },

  // ── Procédure 7 — Revoir le rapport provisoire ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Recevoir le rapport provisoire et le ventiler par constat et par domaine',
    intro: "Pourquoi : ne répondez jamais seul, au nom de toute l'organisation, à un rapport qui contient des constats touchant plusieurs domaines. La ventilation est la première étape de tout travail collectif. Quand : vendredi 9 octobre, jour de réception. Entrées : le rapport provisoire, vos notes de réponse déjà produites.",
    steps: [
      {
        title: 'Accusez réception et notez le délai de réponse',
        body: "Dix jours ouvrés à partir du 9 octobre : réponse officielle attendue au plus tard vendredi 23 octobre. Fixez votre propre date de transmission avec un jour de marge : jeudi 22 octobre.",
      },
      {
        title: 'Lisez le rapport une première fois en entier, sans rien annoter',
        body: "Pour mesurer le ton général : le rapport nuance-t-il vos réponses antérieures ou les ignore-t-il ?",
      },
      {
        title: 'Construisez le tableau de ventilation',
        actions: [
          "Une ligne par constat : numéro, résumé, domaine(s), responsable de la réponse.",
          "Colonne « note existante » : indiquez les notes de réponse de la procédure 6 qui couvrent déjà le constat.",
          "Repérez les constats multi-domaines : ils exigent une réponse unique et coordonnée.",
        ],
      },
      {
        title: 'Comparez le rapport aux échanges du terrain',
        body: "Si l'auditeur a retiré ou nuancé un constat pendant la mission, vérifiez que le rapport provisoire le reflète : sinon, citez la date de la réponse reçue.",
      },
    ],
    table: {
      columns: ['N°', 'Constat du rapport provisoire', 'Domaines', 'Responsable de la réponse', 'Note existante'],
      rows: [
        ['C1', 'Imputation du gardiennage non conforme à la clé de répartition sur trois mois', 'Finance, Programme', 'Ruth B.', 'WP F-12 (envoyée le 18/09)'],
        ['C2', "Dossier d'achat sans trois devis ni dérogation (1 sur 15)", 'SCM', 'Nadine O.', 'WP S-05 (envoyée le 16/09)'],
        ['C3', 'Rapprochements bancaires de novembre et décembre 2025 signés après la clôture', 'Finance', 'Ruth B.', 'À ouvrir'],
        ['C4', "Dernier inventaire physique des immobilisations datant de 2023", 'Finance, SCM', 'Ruth B., Nadine O.', 'À ouvrir'],
        ['C5', "Trois salaires d'octobre 2025 à Bukavu sans feuille de présence signée", 'RH', 'Pascaline R.', 'À ouvrir (exercice 1)'],
        ['C6', 'Réallocation de 40 000 USD ECHO sans confirmation écrite avant le 17/09/2026', 'Programme, Finance', 'Clarisse M.', 'À ouvrir'],
      ],
    },
    result: "Un tableau de ventilation de six constats, avec un responsable et un état de préparation pour chacun, daté du 9 octobre.",
    pitfall: "Lire le rapport en plusieurs sessions avec des collègues qui lisent des versions différentes. Un seul exemplaire de référence, numéroté, est diffusé par vous : sinon deux domaines réagiront à deux textes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Préparer une note de réponse par constat contesté ou nuancé',
    intro: "Pourquoi : chaque constat reçoit une réponse dont la décision a été réfléchie, jamais improvisée. Les notes de la procédure 6 sont réutilisées et mises à jour. Quand : du 12 au 13 octobre. Entrées : tableau de ventilation, notes existantes, pièces de chaque domaine.",
    steps: [
      {
        title: 'Reprenez les notes déjà produites et mettez-les à jour',
        body: "Pour C1 et C2, ajoutez à chaque note la réponse de l'auditeur reçue pendant la mission (champ « Réponse de l'auditeur reçue le »).",
      },
      {
        title: 'Ouvrez une nouvelle note pour chaque constat non encore couvert',
        body: "Même template, mêmes cinq blocs, même exigence de pièces : C3, C4, C5 et C6.",
      },
      {
        title: 'Choisissez la décision provisoire de chaque constat',
        body: "Accepté, Contesté ou Partiellement accepté : c'est une proposition du point focal, qui sera confirmée à la revue collective.",
      },
      {
        title: 'Fixez une échéance interne par note',
        body: "Mardi 13 octobre à midi : les notes doivent être complètes pour être lues avant la revue de mercredi 14.",
      },
    ],
    table: {
      columns: ['Constat', 'Décision proposée', 'Pièce clé', 'Échéance interne'],
      rows: [
        ['C1 Gardiennage', 'Partiellement accepté', 'Courriel Lumina du 10/07/2025, fiche de stock WASH', 'Mar. 13/10, 12h00'],
        ['C2 Dossier sans dérogation', 'Accepté pour 1 dossier (retrait de 0418 par le cabinet le 18/09)', 'Note de régularisation du 16/09/2026', 'Mar. 13/10, 12h00'],
        ['C3 Rapprochements bancaires', 'Accepté', 'Plan de signature mensuelle', 'Mar. 13/10, 12h00'],
        ['C4 Inventaire des immobilisations', 'Accepté', 'Procès-verbal d\'inventaire du 26/08/2026 (post-exercice)', 'Mar. 13/10, 12h00'],
        ['C5 Présences Bukavu', 'À décider (exercice 1)', 'Ordres de mission, rapport de mission', 'Mar. 13/10, 12h00'],
        ['C6 Réallocation ECHO', 'Partiellement accepté', 'Courriel ECHO du 17/09/2026', 'Mar. 13/10, 12h00'],
      ],
    },
    result: "Six notes complètes, chacune avec une décision proposée, avant la revue collective.",
    tip: "Tout constat accepté mérite aussi une note : un « Accepté » sans action corrective datée sera relevé comme un engagement vide dans le suivi du rapport final.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Conduire la revue collective avec les responsables de domaine',
    intro: "Pourquoi : une réponse consolidée trop vite, au nom de toute l'organisation, qui s'avère ensuite factuellement incorrecte sur un point technique coûte plus cher en crédibilité qu'un délai de quelques jours pour consulter les bonnes personnes. Quand : mercredi 14 octobre, 14h00, 90 minutes.",
    steps: [
      {
        title: 'Convoquez les quatre points focaux, le Directeur Pays et, si utile, le Coordinateur de base',
        body: "Envoyez les six notes la veille : on ne découvre pas un texte en séance.",
      },
      {
        title: 'Passez les constats un par un dans le même ordre',
        actions: [
          "1. Lecture du constat du rapport.",
          "2. Lecture de la note à voix haute : position, pièces, résolution.",
          "3. Questions du responsable concerné ET des autres domaines.",
          "4. Décision : validée, amendée ou renvoyée.",
        ],
      },
      {
        title: 'Faites arbitrer les contradictions entre domaines',
        body: "Quand deux domaines donnent des versions différentes, appliquez la règle de la source unique et laissez le Directeur Pays trancher en cas de désaccord.",
      },
      {
        title: 'Obtenez la validation écrite de chaque responsable',
        body: "Pas de clôture de la réunion sans un « validé » par courriel de chaque responsable pour sa note.",
      },
    ],
    example: {
      title: 'Décisions de la revue du 14 octobre 2026',
      lines: [
        "C1 : validé après une modification de Clarisse M. — préciser que l'avenant n°2 de Lumina a été signé le 06/10/2025 et que la reprise a eu lieu le 01/10/2025.",
        "C2 : validé ; ajout du constat de contrôle mensuel des dérogations dans le plan d'action.",
        "C3 et C4 : acceptés ; Ruth B. s'engage à des rapprochements signés dans les 10 jours suivant chaque mois.",
        "C5 : renvoyé à Pascaline R. pour obtenir le rapport de mission signé du superviseur d'Uvira avant le 16/10.",
        "C6 : validé avec une mention : la confirmation écrite d'ECHO est datée du 17/09/2026, postérieure à l'exercice, mais antérieure au rapport.",
      ],
    },
    result: "Six notes validées ou renvoyées avec un délai, et une décision écrite de chaque responsable de domaine, conservée dans « 05_Rapport ».",
    pitfall: "Valider un constat sans le responsable concerné, « parce qu'il est en mission ». Son suppléant doit être présent, ou la décision est reportée : c'est précisément ce que prévoyait la désignation des suppléants.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Consolider, relire et transmettre la réponse officielle',
    intro: "Pourquoi : la réponse officielle est la pièce qui reste dans le dossier de l'audit et que le bailleur lira. Elle doit être cohérente, complète et signée par la personne qui engage l'organisation. Quand : jeudi 22 octobre, avec un jour de marge sur l'échéance du 23. Entrées : notes validées, décisions de la revue.",
    steps: [
      {
        title: 'Rédigez la lettre de réponse consolidée',
        actions: [
          "Un paragraphe d'introduction : remerciements, rappel du périmètre.",
          "Un paragraphe par constat : décision, position, action corrective avec échéance.",
          "Une conclusion : engagement de suivi, date du plan d'action.",
          "Les notes de réponse en annexes numérotées, avec les pièces.",
        ],
      },
      {
        title: 'Faites une relecture de cohérence par un tiers',
        body: "Demandez à un pair, Fatou S. par exemple, de relire pour repérer les contradictions entre constats (un chiffre différent, un nom de projet mal orthographié).",
      },
      {
        title: 'Faites signer par le Directeur Pays et transmettez par le canal unique',
        body: "Envoi à la boîte du cabinet, avec accusé de réception demandé, avant la date limite.",
      },
      {
        title: 'Suivez le rapport final et la management letter',
        actions: [
          "Rapport final attendu le 30 octobre : comparez-le à votre réponse constat par constat.",
          "Management letter : transformez chaque observation en action avec responsable et date.",
          "Lettre d'affirmation : à signer par la Direction seulement après relecture finale du rapport.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la lettre de réponse du 22 octobre 2026',
      lines: [
        "« Madame Estelle D., nous vous remercions pour la qualité des échanges durant la mission et vous transmettons la réponse de HSGL à votre rapport provisoire du 9 octobre. Nous acceptons les constats C3 et C4 et vous joignons les plans d'action. Pour C1, nous confirmons les faits mais contestons la conclusion portant sur la fiabilité de l'imputation analytique de l'ensemble de l'exercice : neuf mois sur douze sont conformes à la clé et la dérogation de trois mois s'explique par la suspension du projet WASH (annexes A1 à A6). Pour C2, nous prenons acte du retrait du dossier BC-2025-0418 le 18 septembre. Joseph T., Directeur Pays. »",
      ],
    },
    table: {
      columns: ['Observation (management letter)', 'Action', 'Responsable', 'Échéance'],
      rows: [
        ['Dérogations d\'achat sans note datée', 'Contrôle mensuel avant paiement', 'Nadine O.', '31/10/2026'],
        ['Dérogation temporaire à la clé non formalisée', 'Amendement de la note de méthode', 'Ruth B.', '01/10/2026 (fait)'],
        ['Rapprochements bancaires signés en retard', 'Signature sous 10 jours après chaque mois', 'Ruth B.', 'Dès novembre 2026'],
        ['Inventaire des immobilisations ancien', 'Inventaire annuel signé au 31/12', 'Ruth B., Nadine O.', '31/12/2026'],
      ],
    },
    result: "Une réponse officielle signée, transmise le 22 octobre avec ses annexes, et un plan d'action daté qui prolonge le rapport final du 30 octobre. Fin de la procédure 7.",
    tip: "Faites signer la lettre d'affirmation uniquement quand le rapport final est stabilisé : elle confirme que vous avez tout communiqué, et la signer trop tôt engage l'organisation sur un texte qui bouge encore.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — « La clé de répartition contestée », base de Goma : partie 1, le point soulevé',
    scenario: "Vous êtes le coordinateur transversal de HSGL. Deux projets actifs sur la base de Goma, nutrition (ECHO) et WASH (bailleur bilatéral Lumina), partagent un entrepôt et une équipe de gardiennage à 3 000 USD par mois. Le coût est réparti selon une clé de 60 % nutrition / 40 % WASH, validée en mars 2024 par le Finance Manager et le Program Manager de l'époque, tous deux partis depuis. Le mercredi 16 septembre 2026, à 15h40, Estelle D. remet le papier de travail WP F-12 : sur trois mois de l'exercice 2025, le gardiennage a été imputé à 100 % au projet ECHO sans application de la clé. Son constat : « L'organisation n'applique pas de façon cohérente sa propre méthode de répartition des coûts partagés, ce qui remet en question la fiabilité de l'imputation analytique de l'ensemble de l'exercice. »",
    steps: [
      {
        title: 'Raisonnement 1 — Ne rien répondre sur le fond, avec un délai précis',
        body: "Ruth B. est arrivée en novembre 2025 et Clarisse M. en décembre : ni l'une ni l'autre ne connaît la décision de l'été 2025, et ses auteurs sont partis. Une réponse de mémoire serait une conjecture. Réponse donnée à 15h45 : « Je vérifie les pièces et je reviens vers vous vendredi avant midi avec les documents. »",
      },
      {
        title: 'Raisonnement 2 — Ouvrir la note immédiatement',
        body: "À 16h00, 2026-09-16_Note_reponse_WP-F-12.docx est créée dans « 04_Divergences ». Le bloc 1 est rempli avec les mots exacts de l'auditrice, et Ruth B. et Clarisse M. sont convoquées le jeudi matin pour la recherche de pièces.",
      },
      {
        title: 'Raisonnement 3 — Séparer le fait de son interprétation',
        body: "Le fait (« 100 % imputé à ECHO pendant trois mois ») est exact et se confirme dans le grand livre. L'interprétation (« incohérence de méthode », « fiabilité de l'ensemble de l'exercice ») est ce qui peut se contester. Le désaccord porte sur l'étendue de la conclusion, pas sur les faits.",
      },
    ],
    table: {
      columns: ['Date', 'Fait', 'Source'],
      rows: [
        ['14/03/2024', 'Clé 60/40 validée par le Finance Manager et le Program Manager de l\'époque', 'Note de méthode signée et tableau de répartition'],
        ['01/01/2025', "Contrat de gardiennage de l'entrepôt partagé : 3 000 USD par mois", 'Contrat Garde Mont-Goma SARL'],
        ['01/07/2025', 'Projet WASH en pause opérationnelle, en attente de l\'avenant n°2 de Lumina', 'Courriel Lumina du 10/07/2025'],
        ['Juillet – septembre 2025', 'Gardiennage imputé à 100 % ECHO : 9 000 USD au lieu de 5 400 USD (écart de 3 600 USD)', 'Grand livre analytique'],
        ['01/10/2025', 'Reprise du projet WASH ; imputation de nouveau à 60/40', 'Courriel Lumina du 26/09/2025, grand livre'],
        ['Fin 2025', 'Départ du Finance Manager et du Program Manager qui avaient validé la clé', 'Dossiers RH'],
        ['16/09/2026', "Papier de travail WP F-12 remis par l'auditrice", 'Cabinet Équinoxe'],
      ],
    },
    result: "Point soulevé qualifié en moins d'une heure : un fait exact, une interprétation contestable, une note ouverte et un délai de 43 heures assumé.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 2, l'inventaire des preuves",
    scenario: "Jeudi 17 septembre : Ruth B., Clarisse M. et vous cherchez les pièces dans le dossier de la clé de répartition, les courriels de la période et les archives des autres domaines. Chaque pièce est classée avec les cinq critères : origine, date, forme, recoupement, traçabilité.",
    steps: [
      {
        title: 'Raisonnement — La preuve manquante est la décision elle-même',
        body: "Aucune pièce ne contient la décision écrite d'imputer 100 % à ECHO. En revanche, plusieurs pièces solides prouvent que le projet WASH était à l'arrêt, donc que l'imputation à 100 % reflète la réalité opérationnelle. C'est le fondement d'une position « Partiellement acceptée ».",
      },
    ],
    table: {
      columns: ['Pièce', 'Source', 'Période', 'Solidité'],
      rows: [
        ['P1 — Contrat de gardiennage Garde Mont-Goma SARL', 'Drive/SCM/Contrats', '01/01–31/12/2025', "Solide : prouve le coût de 3 000 USD par mois et l'entrepôt partagé"],
        ['P2 — Note de méthode « Répartition des coûts partagés, base de Goma » avec tableau 60/40', 'Drive/Finance/Repartition', 'Signée le 14/03/2024', "Solide pour l'existence de la clé ; ne prévoit pas de dérogation"],
        ['P3 — Courriels de Lumina du 10/07/2025 (suspension) et du 26/09/2025 (reprise au 01/10)', 'Boîte du Program Manager', '01/07–30/09/2025', 'Solide : tiers, daté, contemporain'],
        ['P4 — Compte rendu de la réunion de coordination de la base du 08/07/2025, point 3 « WASH en pause », liste d\'émargement', 'Drive/Programme/Coordination', '08/07/2025', 'Solide, contemporain, mais interne'],
        ['P5 — Fiche de stock WASH de l\'entrepôt et rapports mensuels WASH « aucune activité »', 'Drive/SCM/Stock et Drive/Programme/Rapports', '01/07–30/09/2025', 'Solide : aucun mouvement ni stock WASH'],
        ['P6 — Grand livre analytique : gardiennage à 60/40 de janvier à juin et d\'octobre à décembre', 'Logiciel comptable', '9 mois sur 12', 'Solide : démontre le retour à la clé dès la reprise'],
        ['Souvenir de l\'ancien Finance Manager (« on avait décidé de tout mettre sur ECHO »)', 'Entretien téléphonique du 17/09', '—', 'Affirmation non documentée : utile pour le contexte, jamais comme preuve'],
        ['Message dans le groupe « Base Goma Finance »', 'Capture d\'écran du 09/07/2025', '09/07/2025', 'Faible : informelle, à ne citer qu\'en appui, jamais seule'],
      ],
    },
    result: "Six pièces solides (P1 à P6) qui expliquent l'imputation et démontrent le retour à la clé, deux éléments faibles écartés de la liste des preuves, et une lacune identifiée : aucune décision écrite à l'époque.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3, choisir la position et chiffrer',
    scenario: "Avant de rédiger, il faut décider de la position et mesurer l'enjeu financier. Trois options existent : contester entièrement, accepter entièrement, ou accepter partiellement avec régularisation.",
    steps: [
      {
        title: 'Raisonnement 1 — Chiffrer le point',
        body: "Gardiennage de juillet à septembre : 3 × 3 000 = 9 000 USD imputés à ECHO. Avec la clé, ECHO aurait supporté 5 400 USD et WASH 3 600 USD : l'écart est de 3 600 USD, soit 0,17 % du budget ECHO de 2,1 M USD. Le montant est faible ; l'enjeu est la fiabilité de la méthode.",
      },
      {
        title: 'Raisonnement 2 — Ce que l\'on concède, ce que l\'on conteste',
        body: "On concède les faits et l'absence de décision écrite à l'époque. On conteste que ces trois mois remettent en cause l'imputation de l'exercice entier : la clé a été appliquée neuf mois sur douze et rétablie dès la reprise du projet.",
      },
      {
        title: 'Raisonnement 3 — Prévoir un repli',
        body: "Si ECHO estime que les 3 600 USD n'étaient pas éligibles à 100 %, HSGL les ré-impute sur fonds propres à la demande du bailleur. Cette option rassure l'auditrice sans reconnaître une faute de méthode.",
      },
    ],
    table: {
      columns: ['Option', 'Avantage', 'Risque'],
      rows: [
        ['Contester entièrement', 'Défend la ligne initiale', "Aucune décision écrite n'existe : la contestation totale n'est pas soutenable et ferme la discussion"],
        ['Accepter entièrement', 'Aucune discussion', "Valide la phrase « fiabilité de l'ensemble de l'exercice » alors que neuf mois sur douze sont conformes"],
        ['Partiellement accepter, avec régularisation', 'Concède le fait, défend la conclusion, corrige la méthode', 'Exige une régularisation honnête, datée du jour réel'],
      ],
    },
    result: "Position retenue : « Partiellement accepté ». Les faits sont confirmés ; la conclusion sur l'ensemble de l'exercice est contestée ; une régularisation et un amendement de la méthode sont proposés.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4, la note complète : blocs 1 à 3',
    scenario: "Vendredi 18 septembre, 10h00 : Ruth B. rédige la note, Clarisse M. et vous relisez. Voici les trois premiers blocs du template note-reponse-point-divergence-audit.docx tels que saisis.",
    steps: [
      {
        title: 'Raisonnement — Chaque affirmation du bloc 2 renvoie à une pièce du bloc 3',
        body: "Relisez en cochant : la pause de WASH (P3, P4, P5), la clé (P2), le coût (P1), le retour à la clé (P6). Aucune phrase ne s'appuie sur le souvenir de l'ancien Finance Manager.",
      },
    ],
    table: {
      columns: ['Champ du template', 'Contenu saisi'],
      rows: [
        ['Référence (n° de constat / working paper)', "WP F-12 — « Imputation des coûts partagés, gardiennage de l'entrepôt de Goma »"],
        ['Domaine concerné', 'Finance (avec Programme)'],
        ["Description factuelle du point tel que formulé par l'auditeur", "« Sur trois mois de l'exercice (juillet à septembre 2025), le coût de gardiennage de 3 000 USD par mois a été imputé à 100 % au projet ECHO sans application de la clé de répartition. L'organisation n'applique pas de façon cohérente sa propre méthode de répartition des coûts partagés, ce qui remet en question la fiabilité de l'imputation analytique de l'ensemble de l'exercice. »"],
        ['Élément de désaccord ou de clarification apporté', "Nous confirmons les faits (9 000 USD imputés à ECHO au lieu de 5 400 USD) et l'absence de décision écrite à l'époque. Nous contestons la conclusion : il s'agit d'une imputation temporaire, justifiée par la pause du projet WASH du 01/07 au 30/09/2025 (P3, P4, P5), la clé ayant été appliquée neuf mois sur douze et rétablie dès la reprise le 01/10/2025 (P6)."],
        ['Contexte opérationnel pertinent', "Entrepôt et gardiennage partagés ; projet WASH suspendu dans l'attente de l'avenant n°2 du bailleur ; aucune activité ni stock WASH sur la période ; ECHO seul projet actif."],
        ['Documents justificatifs référencés', "P1 Contrat Garde Mont-Goma SARL (2025) ; P2 Note de méthode et tableau 60/40 (14/03/2024) ; P3 Courriels Lumina des 10/07 et 26/09/2025 ; P4 Compte rendu de coordination du 08/07/2025 ; P5 Fiche de stock WASH et rapports mensuels (juil.–sept. 2025) ; P6 Grand livre analytique 2025."],
        ['Personne(s) ressource', "Ruth B., Finance Manager ; Clarisse M., Program Manager ; Dr Patrice N., Coordinateur de base (présent à la réunion du 08/07/2025)."],
      ],
    },
    result: "Les blocs 1 à 3 sont complets : six pièces précisément identifiées (nom, source, période), des personnes ressources nommées, et un bloc 2 où la contestation est limitée à ce que les pièces démontrent.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4 (suite), blocs 4 et 5 : résolution, décision et transmission',
    scenario: "Les deux derniers blocs engagent l'organisation : ils sont validés par les responsables avant d'être transmis. Voici leur contenu final.",
    steps: [
      {
        title: 'Raisonnement — Une régularisation honnête vaut mieux qu\'un refus',
        body: "La note de régularisation est datée du 18/09/2026 et dit en toutes lettres qu'elle formalise a posteriori la décision de l'été 2025. Elle renvoie aux pièces contemporaines P3 à P5 pour la justifier : sa force vient des pièces, pas de sa date.",
      },
    ],
    table: {
      columns: ['Champ du template', 'Contenu saisi'],
      rows: [
        ['Action corrective proposée (si le point est fondé)', "1. Note de régularisation datée du 18/09/2026, signée par Ruth B. et Clarisse M., qui formalise a posteriori l'imputation temporaire et renvoie à P3 à P5. 2. Amendement de la note de méthode : toute dérogation temporaire à la clé fait l'objet d'une note datée et signée avant la clôture mensuelle (en vigueur le 01/10/2026). 3. Si ECHO considère l'imputation de 3 600 USD non éligible, ré-imputation sur fonds propres à sa demande."],
        ['Justification du maintien de la position initiale (si applicable)', "La conclusion de non-fiabilité de l'imputation analytique de l'ensemble de l'exercice n'est pas fondée : neuf mois sur douze sont conformes à la clé (janvier à juin et octobre à décembre, grand livre, P6)."],
        ['Décision', 'Partiellement accepté'],
        ['Validé en interne par (nom, fonction)', 'Ruth B., Finance Manager, et Clarisse M., Program Manager'],
        ["Date de transmission à l'équipe d'audit", '18/09/2026, 11h00, par la boîte audit-externe, pièces P1 à P6 numérotées'],
        ["Réponse de l'auditeur reçue le", '22/09/2026'],
        ['Rédigé par (nom, fonction) et date', 'Ruth B., Finance Manager (coordination : Amani K.) — 18/09/2026'],
      ],
    },
    result: "Une note d'une page transmise 43 heures après le signal, avec six pièces numérotées, une régularisation datée du jour réel et une décision validée par les deux responsables concernés.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 5, la réponse de l'auditrice et les leçons du dossier",
    scenario: "Le mardi 22 septembre, Estelle D. répond par courriel. Elle ne retire pas entièrement le constat, et c'est normal : un auditeur le retire ou le nuance uniquement face à un document, et il peut conserver une observation de contrôle interne.",
    steps: [
      {
        title: "Raisonnement 1 — Lire la réponse de l'auditrice en trois catégories",
        body: "Ce qui est retiré (l'incohérence de méthode et l'extrapolation à l'exercice), ce qui est maintenu (l'absence de formalisation à l'époque, reprise comme observation dans la management letter), ce qui est demandé en plus (mentionner le montant de 3 600 USD dans le rapport ECHO comme imputation temporaire documentée).",
      },
      {
        title: 'Raisonnement 2 — Intégrer les leçons au dossier',
        body: "Le dossier se corrige à la source : la question « Y a-t-il eu des exceptions à la règle, et où est la décision écrite ? » est désormais posée à chaque point de contrôle à risque du classeur et inscrite en commentaire de la ligne concernée.",
      },
      {
        title: "Raisonnement 3 — Ne pas contacter l'ancien Finance Manager en direct",
        body: "Un échange avec l'ancien Finance Manager a eu lieu par l'intermédiaire de Ruth B. et n'a pas été cité comme preuve. Sa déclaration ne fait pas partie du dossier.",
      },
    ],
    example: {
      title: "Extrait de la réponse d'Estelle D. du 22 septembre 2026",
      lines: [
        "« Nous avons examiné la note WP F-12 et ses pièces. Nous retirons la conclusion relative à l'application incohérente de la méthode de répartition et à la fiabilité de l'imputation analytique de l'ensemble de l'exercice. Nous maintenons une observation de contrôle interne : l'imputation temporaire à 100 % n'a pas fait l'objet d'une décision écrite contemporaine. Cette observation figurera dans la management letter. Nous vous remercions de la clarté du dossier. »",
      ],
    },
    result: "Un constat nuancé et non retiré, une observation de contrôle interne maintenue, et un dossier qui a gagné la confiance de l'auditrice. Livrable 7 terminé.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — le dossier de mission complet, de la notification à la réponse officielle",
    scenario: "Voici la chronologie complète de la préparation de l'audit externe de HSGL et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque audit externe.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez que la date « prêt » (4 septembre) précède de dix jours l'arrivée de l'équipe, qu'aucune note de réponse n'est ouverte avant un signal de l'auditeur, et que la réponse officielle part avec un jour de marge.",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['31/07', 'Notification', "Lettre d'engagement, fiche de mandat", '01_Cadrage'],
        ['03/08', 'Cadrage validé', 'Note de cadrage, matrice, calendrier commun', '01_Cadrage'],
        ['05/08', 'Lancement', 'Lettres de désignation, règles de cohérence', '02_Classeur_Suivi'],
        ['10/08 – 31/08', 'Suivi hebdomadaire', 'Classeur à jour, comptes rendus, registre des incohérences', '02_Classeur_Suivi'],
        ['03/09 – 04/09', 'Go/no-go puis « prêt »', 'Décision de go conditionnel', '02_Classeur_Suivi'],
        ['14/09', 'Kick-off', 'Compte rendu, registre des demandes', '03_Terrain'],
        ['15/09 – 18/09', 'Points de divergence', 'Notes WP S-05 et WP F-12', '04_Divergences'],
        ['25/09', 'Clôture du terrain', 'Compte rendu de la réunion de clôture', '03_Terrain'],
        ['09/10', 'Rapport provisoire', 'Tableau de ventilation des six constats', '05_Rapport'],
        ['14/10', 'Revue collective', 'Décisions validées par domaine', '05_Rapport'],
        ['22/10', 'Réponse officielle', 'Lettre de réponse et annexes', '05_Rapport'],
        ['30/10', 'Rapport final', 'Management letter, plan d\'action daté', '05_Rapport'],
      ],
    },
    result: "Un dossier de douze étapes dont chaque pièce est datée, classée et justifie la suivante : c'est la preuve que la préparation a été coordonnée et non improvisée.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Constat C5 : trois salaires de Bukavu sans feuille de présence',
    instructions: "Le rapport provisoire du 9 octobre 2026 contient le constat C5 (papier de travail WP R-03, domaine RH) : « Sur l'échantillon de 12 salaires d'octobre 2025, trois salariés de la base de Bukavu n'ont pas de feuille de présence signée dans leur dossier ; le paiement de 2 310 USD (820 + 760 + 730) n'est pas rapproché d'une présence réelle. » Vous êtes Amani K. et préparez la revue collective du 14 octobre. Pascaline R. vous remet les pièces ci-dessous. Les trois salariés faisaient partie d'une équipe de clinique mobile à Uvira en octobre 2025. L'un d'eux, Éric M., a quitté HSGL le 31/10/2025.",
    table: {
      columns: ['N°', 'Pièce disponible', 'Source', 'Période'],
      rows: [
        ['1', 'Ordres de mission signés pour les trois salariés, signés par le Coordinateur de Bukavu', 'Drive/RH/Missions', '29/09 – 31/10/2025'],
        ['2', "Rapport mensuel de la clinique mobile avec liste d'émargement des patients signée par les trois salariés", 'Drive/Programme/Rapports', 'Octobre 2025'],
        ['3', "Registre de présence manuscrit tenu par le superviseur d'Uvira, numérisé en septembre 2026", "Superviseur d'Uvira", 'Octobre 2025'],
        ['4', 'Message WhatsApp du superviseur : « ils étaient bien là tout le mois »', "Capture d'écran du 12/10/2026", 'Octobre 2025'],
        ['5', 'Validation de la paie d\'octobre signée par Pascaline R. et Joseph T.', 'Drive/RH/Paie', '28/10/2025'],
        ['6', 'Virements bancaires des trois salaires', 'Relevé bancaire d\'octobre', '30/10/2025'],
        ['7', 'Solde de tout compte d\'Éric M., mentionnant « fin de mission à Uvira au 31/10/2025 », signé le 05/11/2025', 'Drive/RH/Departs', 'Octobre 2025'],
        ['8', "Politique RH, article 7 : la présence est certifiée par le superviseur chaque fin de mois ; l'article ne prévoit pas le cas des missions de longue durée", 'Politique RH en vigueur', '2025'],
      ],
    },
    steps: [
      {
        title: 'Ouvrez la note et remplissez le bloc 1',
        actions: ["Copiez note-reponse-point-divergence-audit.docx sous le nom 2026-10-12_Note_reponse_WP-R-03.docx ; saisissez la référence, le domaine et la description tels que formulés."],
      },
      {
        title: 'Classez les huit pièces avec les cinq critères',
        actions: ["Pour chacune : solide, affirmation ou insuffisante, avec la raison en une phrase."],
      },
      {
        title: 'Rédigez les blocs 2 et 3',
        actions: ["Séparez ce que vous confirmez de ce que vous contestez ; citez au moins deux pièces précisément identifiées (nom, source, période)."],
      },
      {
        title: 'Rédigez le bloc 4',
        actions: ["Une action corrective datée du jour réel et un contrôle pour éviter la répétition (traitement des missions de longue durée dans la politique RH)."],
      },
      {
        title: 'Remplissez le bloc 5',
        actions: ["Décision, validation interne (qui valide ?), date de transmission avant la revue du 14 octobre, rédacteur et date."],
      },
    ],
    tip: "Indices : la décision se prend probablement par éléments, pas globalement. Les pièces 1, 2, 5, 6 et 7 sont solides ; la pièce 3 est contemporaine mais numérisée après coup ; la pièce 4 ne doit jamais être citée comme preuve principale ; la pièce 8 révèle une lacune de la politique qu'il faut reconnaître.",
    pitfall: "Faire recréer les feuilles de présence manquantes avec la date d'octobre 2025 pour « compléter le dossier » : ce serait une falsification. La seule régularisation valable est une attestation du superviseur d'Uvira, datée du jour de sa rédaction.",
    deliverable: "Une note de réponse WP R-03 d'une page, complète en cinq blocs, citant au moins deux pièces précisément identifiées, avec une décision justifiée et une action corrective datée.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Lire le Tableau de bord et décider du go/no-go',
    instructions: "À J-12, le lundi 31 août, voici les statuts saisis dans les quatre onglets du classeur. Remplissez le Tableau de bord à la main, comme le font les formules, puis décidez.",
    table: {
      columns: ['Ligne', 'Finance', 'SCM - Achats', 'RH', 'Programme'],
      rows: [
        ['5', 'Disponible', 'Disponible', 'Disponible', 'Disponible'],
        ['6', 'Disponible', 'Disponible', 'En cours', 'Disponible'],
        ['7', 'Disponible', 'En cours', 'Manquant', 'Disponible'],
        ['8', 'Disponible', 'Disponible', 'Disponible', 'Disponible'],
        ['9', 'En cours', 'Manquant', 'Disponible', 'Disponible'],
        ['10', 'Disponible', 'Disponible', 'Manquant', 'Disponible'],
      ],
    },
    steps: [
      {
        title: 'Calculez pour chaque domaine les colonnes B à F',
        actions: ["Points de controle, Disponibles, % Pret, A traiter, Statut global, en appliquant la règle de la colonne F."],
      },
      {
        title: 'Calculez la ligne « TOUTE L\'ORGANISATION »',
        actions: ["Appliquez la règle particulière du statut global de la ligne 9."],
      },
      {
        title: 'Appliquez les cinq critères de go',
        actions: ["Indiquez pour chacun s'il est rempli, puis choisissez Go, Go conditionnel ou No-go."],
      },
      {
        title: 'Listez les trois actions prioritaires',
        actions: ["Pour chacune : domaine, ligne, responsable probable, échéance avant le 3 septembre."],
      },
      {
        title: 'Rédigez en cinq lignes la décision à envoyer aux points focaux',
      },
    ],
    tip: "Corrigé indicatif : Finance 5/6 (83,3 %, EN COURS), SCM 4/6 (66,7 %, A COMPLETER), RH 3/6 (50 %, A COMPLETER), Programme 6/6 (100 %, PRET) ; organisation 18/24 (75 %), 6 à traiter, A COMPLETER. Trois Manquant et moins de 90 % : la bonne décision est No-go, avec un plan de rattrapage sur les lignes 7 et 10 de la RH et la ligne 9 du SCM.",
    deliverable: "Un Tableau de bord complété à la main (5 lignes × 6 colonnes), une décision de go/no-go en cinq lignes et une liste de trois actions priorisées.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Communiquer avec l\'équipe d\'audit : six situations à corriger',
    instructions: "Pour chaque situation du terrain, indiquez si elle respecte les règles de communication (point de contact unique, délai assumé, cohérence, accès libre, aucune altération de pièce). Si non, nommez la règle violée, le risque et la correction à apporter en une phrase.",
    table: {
      columns: ['N°', 'Situation'],
      rows: [
        ['1', "Samuel O. appelle directement Didier L. (Store Keeper) pour obtenir les fiches de stock 2025 ; Didier les envoie depuis son WhatsApp personnel sans prévenir personne."],
        ['2', "Estelle D. demande la date de validation de la clé de répartition. Ruth B. répond « mars 2024 » ; Clarisse M., à la même question, répond « octobre 2024, après révision »."],
        ['3', "Nadine O. dit à l'auditeur « Je vérifie la pièce et je reviens vers vous demain avant 16h avec le document », puis envoie le document le lendemain à 15h30 par la boîte audit-externe."],
        ['4', "Pour « éviter les problèmes », le Directeur Pays vous demande de ne pas laisser l'équipe d'audit interroger les gardiens de l'entrepôt."],
        ['5', "Le rapport provisoire contient un constat Finance. Clarisse M. conteste seule par courriel à Estelle D., sans consulter Ruth B. ni les autres domaines."],
        ['6', "Pascaline R. constate que trois feuilles de présence manquent et en fait signer de nouvelles datées d'octobre 2025 pour compléter le dossier."],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Situation / Conforme ? / Règle / Risque / Correction' },
      { title: 'Identifiez la seule situation conforme et expliquez pourquoi' },
      { title: 'Rédigez la réponse consolidée à envoyer à Estelle D. pour la situation 2' },
      { title: 'Rédigez en cinq lignes votre réponse au Directeur Pays pour la situation 4' },
    ],
    pitfall: "Situation 4 : un blocage d'accès est relevé comme limitation d'étendue par l'auditeur et peut conduire à une réserve sur l'opinion. Situation 6 : antidater ou recréer une pièce est un fait grave qui discrédite tout le dossier ; on régularise honnêtement, avec la date du jour.",
    deliverable: "Un tableau de six situations qualifiées et corrigées, la réponse consolidée à l'auditrice (situation 2) et la réponse écrite au Directeur Pays (situation 4).",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre fiche de mandat reprend les huit informations de la lettre d'engagement et indique ce qui est hors périmètre (Bunia sur pièces).",
      "Votre calendrier commun fixe une date « prêt » plusieurs jours ouvrés avant l'arrivée, un go/no-go et les réunions hebdomadaires.",
      "Chaque domaine a un point focal et un suppléant, confirmés par la Direction, et vous n'êtes point focal d'aucun d'eux.",
      "Dans le classeur, vous n'avez modifié aucune formule du Tableau de bord et chaque ligne En cours ou Manquant a un commentaire daté.",
      "Votre Tableau de bord est lu correctement : Manquant d'abord, règle de la ligne 9, vérification par sondage de deux lignes Disponible.",
      "Votre registre des incohérences indique pour chaque écart les deux versions, l'action et l'échéance, et aucune correction ne passe par la modification d'une pièce existante.",
      "Votre note de réponse tient sur une page, ses cinq blocs sont remplis, au moins deux pièces sont identifiées par leur nom, leur source et leur période.",
      "La décision (Accepté, Contesté, Partiellement accepté) est justifiée par une pièce solide et validée par le responsable du domaine.",
      "Toute régularisation porte la date du jour réel et dit qu'elle régularise a posteriori.",
      "Votre réponse au rapport provisoire passe par une ventilation des constats, une revue collective avec les responsables et une validation écrite de chacun avant envoi.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Se braquer ou réagir émotionnellement face à un désaccord — un constat n'est jamais une attaque personnelle contre votre compétence ou celle de votre équipe. Parade : réponse écrite dans les 24 à 48 heures, avec les pièces (procédure 6).",
      "Préparer chaque domaine en silo — des incohérences entre domaines sur une même transaction sont souvent plus dommageables que la faiblesse initiale elle-même. Parade : points focaux, règles de cohérence et registre des incohérences (procédures 2 et 4).",
      "Répondre au rapport provisoire sans consulter les responsables de domaine — une réponse consolidée trop vite, qui s'avère factuellement incorrecte, coûte plus cher en crédibilité qu'un délai de quelques jours. Parade : revue collective et validation écrite de chacun (procédure 7).",
      "Laisser chaque point focal répondre directement à l'auditeur — deux personnes de bonne foi donnent deux versions de la même clé ou de la même procédure. Parade : un point de contact unique et un registre des demandes (procédure 5).",
      "Attendre le rapport provisoire pour rassembler la preuve d'un point déjà évoqué à l'oral — quand l'auditeur pose une question qui laisse deviner un constat, c'est le signal d'ouvrir la note de réponse. Parade : note ouverte dans les deux heures (procédure 6, étape 1).",
      "Prendre le « % Pret » pour de la qualité — un statut Disponible est déclaratif. Parade : sondage de deux lignes par domaine à chaque réunion et commentaire daté obligatoire (procédure 4, étape 1).",
      "Se faire goulot d'étranglement en vérifiant soi-même chaque pièce — vous recréez un silo, le vôtre. Parade : vous suivez, relisez par sondage et cherchez les incohérences entre domaines (procédure 4).",
      "Altérer ou antidater une pièce pour « compléter le dossier » — l'auditeur y verra une falsification, plus grave que la lacune initiale. Parade : régularisation datée du jour réel et expressément qualifiée d'a posteriori (procédure 6, étape 5).",
      "Transformer le point de contact unique en filtre — empêcher l'auditeur de rencontrer des employés est relevé comme une limitation d'étendue. Parade : vous organisez, vous ne bloquez jamais (procédure 5).",
      "Ne pas lire la lettre d'engagement et mobiliser tout le monde — vous préparez un périmètre qui n'existe pas. Parade : fiche de mandat et matrice périmètre × domaines avant toute convocation (procédure 1).",
      "Laisser le classeur mourir après le kick-off — le statut doit être mis à jour en continu, pas seulement à l'annonce de la mission. Parade : réunion hebdomadaire jusqu'à la réponse au rapport final (procédure 4).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez extrait de la lettre d'engagement une fiche de mandat, construit la matrice périmètre × domaines et fixé un calendrier commun avec une date « prêt » dix jours avant l'arrivée de l'équipe.",
      "Vous avez désigné un point focal et un suppléant par domaine, tenu la réunion de lancement et fait valider des règles de cohérence communes.",
      "Vous avez renseigné les quatre onglets du classeur (24 points de contrôle) avec des statuts, des emplacements, des dates de vérification et des commentaires chiffrés.",
      "Vous avez lu le Tableau de bord (de 41,7 % à 91,7 % de points disponibles), tenu un registre de trois incohérences entre domaines et rendu un go conditionnel par écrit.",
      "Vous avez organisé un kick-off, désigné un point de contact unique et tenu un registre des demandes avec relecture de cohérence avant chaque envoi.",
      "Vous avez rempli une note de réponse en cinq blocs (WP S-05) et résolu le cas de la clé de répartition contestée (WP F-12) avec six pièces référencées et une régularisation honnête.",
      "Vous avez ventilé un rapport provisoire en six constats, animé la revue collective et transmis une réponse officielle signée avec un plan d'action daté.",
      "Vous avez traité trois exercices : un constat RH à Bukavu, la lecture d'un Tableau de bord et six situations de communication à corriger.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de clore la formation : votre dernière check-list',
    items: [
      "Je sais expliquer ce que veut réellement un auditeur externe et pourquoi ce n'est pas une « chasse aux erreurs ».",
      "Je sais désigner un point focal par domaine (Finance, SCM, RH, Programme) et coordonner leur préparation dans un calendrier commun.",
      "Je sais utiliser le Tableau de bord du classeur multi-domaines pour suivre l'avancement sans me substituer au travail de chaque domaine.",
      "Je sais organiser une communication centralisée avec une équipe d'audit externe, avec un point de contact unique côté organisation.",
      "Je sais qu'un point de divergence avec un auditeur se résout par la preuve documentée, jamais par la conviction orale ou la réaction émotionnelle.",
      "J'ai complété une note de réponse à un point de divergence avec le template fourni, preuves à l'appui.",
      "Je sais qu'un rapport d'audit se répond après consultation des responsables de domaine concernés, jamais en solo et dans la précipitation.",
      "J'ai rangé mes pièces dans un dossier de mission structuré (01_Cadrage, 02_Classeur_Suivi, 03_Terrain, 04_Divergences, 05_Rapport).",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Vous avez terminé les 9 modules de cette formation — des fondamentaux de l'audit interne (Module 01) à cette préparation transversale aux audits externes (Module 09). Il n'y a pas de module suivant : c'est la maîtrise combinée des neuf compétences qui fait de vous un auditeur interne ou un Compliance Officer capable de piloter une mission d'audit externe complète, dans une organisation humanitaire sous la pression constante des exigences bailleurs. Cette maîtrise est validée par l'attestation de fin de formation en Audit Interne et Conformité délivrée par BK-BOOST Ltd.",
  },
]
