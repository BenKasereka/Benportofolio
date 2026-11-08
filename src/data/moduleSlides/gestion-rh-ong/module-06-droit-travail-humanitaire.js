// Module 06 — Droit du Travail Humanitaire — RDC & Droit International
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Droit du Travail Humanitaire — RDC & Droit International',
    hook: "Un règlement \"en cash, à l'amiable\" qui n'a laissé aucune trace écrite revient presque toujours sous forme de plainte collective, des mois plus tard, devant l'inspection du travail — et l'organisation n'a alors aucune preuve de sa bonne foi. Vous n'avez pas besoin d'être juriste : ce module vous donne les repères qui évitent ce piège.",
  },
  {
    type: 'objectives',
    items: [
      "Appliquer les points opérationnels clés du Code du Travail de la RDC dans la gestion quotidienne du personnel (congés, heures supplémentaires, droits fondamentaux du travailleur).",
      "Identifier, pour chaque catégorie de personnel, les obligations sociales et fiscales réellement dues à l'employeur, sans confondre statut d'expatrié et exonération.",
      "Expliquer à un manager de programme pourquoi une politique RH de siège ne peut jamais remplacer le droit du travail local.",
      "Utiliser les mécanismes de résolution des conflits du travail dans le bon ordre : tentative de résolution interne documentée, médiation, inspection du travail, tribunal en dernier recours.",
      "Documenter un dossier de conflit du travail de façon à ce qu'il tienne, sans reproche, devant un inspecteur du travail ou un juge.",
    ],
  },
  {
    type: 'concept',
    title: 'Pas un cours de droit : des repères de terrain',
    body: [
      "Le HR Manager humanitaire n'a pas besoin d'être juriste, mais il n'a pas le droit de gérer un pays comme s'il n'avait pas de droit du travail. Ce module vise les repères qui reviennent semaine après semaine : un congé mal calculé, des heures supplémentaires non compensées pendant un pic d'activité, un litige qui dégénère faute d'avoir été documenté à temps.",
    ],
    highlight: "Le Code du Travail de la RDC (Loi n°015/2002, modifiée notamment par la Loi n°016/2022) s'applique à tout contrat exécuté sur le territoire congolais, quelle que soit la nationalité de l'employeur ou de l'employé, et quelle que soit la politique RH du siège.",
  },
  {
    type: 'concept',
    title: 'Politique du siège vs Code du Travail local',
    body: [
      "Une politique interne plus favorable au personnel peut coexister avec le Code du Travail.",
      "Une politique interne qui y déroge en défaveur du personnel ne tient pas juridiquement — même signée, même acceptée par l'employé.",
    ],
    highlight: "Un HR Manager qui applique un barème d'heures supplémentaires du siège sans le confronter au Code du Travail RDC expose l'organisation, même de bonne foi.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois points à vérifier chaque mois',
    columns: ['Point opérationnel', 'Repère à connaître', 'À vérifier chaque mois'],
    rows: [
      ['Congé annuel', "Un jour ouvrable de congé par mois de service complet, avec une majoration liée à l'ancienneté (jours supplémentaires après plusieurs années chez le même employeur).", "Le solde de congé de chaque employé est-il suivi individuellement, mois par mois, et pas seulement recalculé de mémoire en fin d'année ?"],
      ['Heures supplémentaires', "Durée légale du travail encadrée, majoration de rémunération au-delà, avec des taux différenciés (jour, nuit, dimanche, jour férié).", "Chaque heure supplémentaire est-elle enregistrée nominativement, datée, et effectivement compensée (paiement majoré ou repos compensateur) plutôt qu'\"absorbée\" dans un forfait non documenté ?"],
      ['Droits fondamentaux', "Contrat écrit, préavis en cas de rupture, indemnités selon l'ancienneté, protection contre le licenciement abusif, liberté syndicale.", "Chaque dossier contient-il un contrat signé à jour, et chaque rupture suit-elle un préavis documenté plutôt qu'une décision orale du jour au lendemain ?"],
    ],
  },
  {
    type: 'warning',
    title: 'Piège : traiter ces repères comme des chiffres figés',
    items: [
      "Le droit du travail évolue : la RDC a modifié son Code du Travail en 2022, et des textes d'application ou des barèmes peuvent préciser des taux exacts.",
      "Règle d'or à chaque mission : valider les chiffres exacts en vigueur avec un juriste local ou un cabinet spécialisé en droit social congolais avant de les figer dans une politique RH.",
      "Ne jamais se fier uniquement à un souvenir de mission précédente ou à un module de formation, aussi à jour soit-il au moment de sa rédaction.",
    ],
  },
  {
    type: 'concept',
    title: 'Expatrié : ce qui change réellement',
    body: [
      "Le permis de travail et le titre de séjour : un salarié étranger a besoin d'une autorisation d'emploi et d'un titre de séjour en règle pour travailler légalement en RDC. Leur absence est une irrégularité qui expose l'organisation, pas seulement l'individu.",
      "L'obligation fiscale : l'IPR s'applique en principe aux revenus tirés d'une activité exercée en RDC, y compris pour le personnel expatrié, sauf disposition légale ou convention spécifique (convention de non-double imposition, accord de siège, statut diplomatique reconnu).",
      "Les éventuels privilèges et immunités : certains statuts (personnel de certaines agences des Nations Unies, personnel couvert par un accord de siège spécifique) bénéficient de dispositions particulières. Une ONG classique, sans accord de siège explicite, ne peut pas présumer en bénéficier.",
    ],
    highlight: "L'absence d'imposition n'est jamais la règle par défaut : c'est une exception qui doit reposer sur un texte identifiable, pas sur une habitude.",
  },
  {
    type: 'concept',
    title: 'Aucune exonération automatique pour un expatrié',
    body: "Il n'existe pas d'exonération automatique du droit du travail local ou des obligations fiscales du seul fait qu'un employé est expatrié. Chaque privilège ou immunité invoqué doit reposer sur une base légale claire et vérifiable : texte de loi, convention internationale ratifiée, accord de siège signé.",
    highlight: "En cas de doute, traitez la situation comme pleinement soumise au droit commun jusqu'à preuve du contraire, et faites vérifier le point exact par un conseil juridique local.",
  },
  {
    type: 'process',
    title: 'Résoudre un conflit du travail : un ordre à respecter',
    steps: [
      { title: 'Tentative de résolution interne', body: "Un échange direct et documenté entre l'employé, son responsable hiérarchique et le RH, avant toute escalade. C'est l'étape la plus souvent bâclée — et celle qui, bien menée, évite presque toujours l'escalade." },
      { title: 'Médiation', body: "Un tiers interne ou externe facilite la recherche d'un accord entre les parties, sans trancher lui-même." },
      { title: 'Inspection du travail', body: "L'Inspection Générale du Travail (ou l'inspection provinciale compétente) intervient comme autorité de conciliation ; en RDC, c'est un passage quasi obligé avant toute saisine judiciaire pour un litige individuel." },
      { title: 'Tribunal', body: "Le tribunal compétent (tribunal du travail ou juridiction civile selon l'organisation judiciaire locale) tranche en dernier recours, quand les étapes précédentes ont échoué." },
    ],
  },
  {
    type: 'concept',
    title: 'Documenter chaque étape avant de passer à la suivante',
    body: "Pour chaque étape, notez : la date, les personnes présentes, la position de chaque partie, le résultat.",
    highlight: "Un dossier qui arrive à l'inspection du travail sans aucune trace écrite d'une tentative de résolution interne affaiblit immédiatement la crédibilité de l'employeur, même lorsque sa position est juridiquement solide sur le fond.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'IPR (Impôt Professionnel sur les Rémunérations)', definition: "Impôt sur les revenus salariaux dû en RDC, retenu à la source par l'employeur, applicable en principe à tout salarié percevant une rémunération pour une activité exercée sur le territoire congolais." },
      { term: 'INSS', definition: "Institut National de Sécurité Sociale — organisme auprès duquel l'employeur déclare et verse les cotisations sociales obligatoires pour son personnel en RDC." },
      { term: 'Accord de siège', definition: "Convention négociée entre une organisation (agence onusienne, parfois une grande ONG) et l'État hôte, qui peut prévoir des privilèges ou immunités spécifiques — jamais présumée en l'absence d'un texte signé." },
      { term: 'Conciliation', definition: "Tentative, menée par un tiers (souvent l'inspecteur du travail), de rapprocher les positions des parties avant toute procédure judiciaire." },
      { term: 'Préavis', definition: "Délai légal ou contractuel entre l'annonce d'une rupture de contrat et sa prise d'effet, destiné à protéger les deux parties." },
    ],
  },
  {
    type: 'concept',
    title: 'Outil 1 : la checklist de conformité',
    body: [
      "Le template checklist-conformite-code-travail-rdc.xlsx est un tableau de suivi individuel, employé par employé, de trois points : congés légaux respectés, heures supplémentaires correctement enregistrées et compensées, cotisations sociales à jour.",
      "Chaque ligne calcule automatiquement un statut de conformité, et un onglet de synthèse donne une vue d'équipe pour votre coordination ou pour un audit interne.",
    ],
    highlight: "Ne modifiez jamais manuellement une cellule de calcul, seulement les cellules de saisie prévues à cet effet.",
  },
  {
    type: 'concept',
    title: 'Outil 2 : la note de suivi de conflit',
    body: [
      "Le template note-suivi-resolution-conflit-travail.docx est un document d'une à deux pages qui trace, étape par étape et de façon datée, la vie d'un conflit : description initiale, tentatives de résolution interne, étape d'escalade atteinte, statut, prochaines actions.",
    ],
    highlight: "C'est le document que vous présenterez, si nécessaire, à un inspecteur du travail ou à votre hiérarchie pour prouver que le cadre a été respecté.",
  },
  {
    type: 'process',
    title: 'Assurer la conformité légale RH, chaque mois',
    steps: [
      { title: 'Compléter la checklist pour chaque employé (mensuel, en continu)', body: "Solde de congé utilisé et restant, heures supplémentaires de la période et leur mode de compensation, date de la dernière cotisation sociale versée. Le tableau affiche \"Conforme\" ou \"À corriger\"." },
      { title: 'Consulter la synthèse d\'équipe avant chaque réunion de coordination', body: "Nombre d'employés conformes, nombre à corriger, points bloquants les plus fréquents. À présenter à votre Head of Mission ou HR Manager de mission : détecter tôt, pas documenter tard." },
    ],
  },
  {
    type: 'process',
    title: 'Traiter un conflit du travail dans les règles',
    steps: [
      { title: 'Ouvrir une note de suivi dès le premier signe de tension', body: "Une remarque insistante sur des heures non payées, une contestation écrite, une plainte verbale répétée : notez le litige avec la date exacte du premier signalement." },
      { title: 'Documenter la tentative de résolution interne avant toute escalade', body: "Échange entre l'employé, son responsable et vous : date, personnes présentes, position de chaque partie, résultat. Jamais optionnel, même si l'employeur est juridiquement solide." },
      { title: 'Engager une médiation si le désaccord persiste', body: "Une personne interne de niveau supérieur non impliquée, ou un médiateur externe. Mettez à jour le champ \"étape d'escalade atteinte\"." },
      { title: 'Saisir l\'inspection du travail seulement après avoir documenté les étapes précédentes', body: "Présentez la note de suivi complète comme preuve du cheminement suivi, puis notez la date de saisine et la position de l'inspecteur." },
      { title: 'Le tribunal, uniquement en dernier recours', body: "Avec l'appui d'un conseil juridique local. La note tenue à jour depuis le premier jour devient la pièce centrale qui démontre votre bonne foi." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — "Heures supplémentaires non payées, réponse épidémie, Nord-Kivu"',
    scenario: "Vous êtes HR Manager d'une ONG médicale internationale sur une base du Nord-Kivu. Depuis six semaines, une épidémie de choléra a déclenché une réponse d'urgence : l'équipe médicale et logistique nationale tient le centre de traitement ouvert 24h/24. Le suivi des heures supplémentaires, fait \"à la main\" par le chef de centre en pleine surcharge, a pris du retard. Un mois après le pic, trois infirmiers nationaux, par leur délégué du personnel, contestent ne pas avoir été payés pour toutes leurs heures des trois semaines les plus intenses. Le Base Manager propose de régler \"en cash, à l'amiable, tout de suite\" pour éviter que le sujet ne remonte au siège. Le délégué prévient : sans solution sous 15 jours, il saisira l'inspection du travail. (Contexte fictif, inspiré de situations réelles en RDC.)",
    steps: [
      "Votre mission : traiter ce dossier en respectant scrupuleusement l'ordre légal de résolution des conflits.",
      "Ne pas céder à la solution rapide et non documentée proposée par le Base Manager.",
      "Ne pas laisser le dossier arriver à l'inspection du travail sans historique écrit.",
    ],
  },
  {
    type: 'exercise',
    title: 'Checklist de conformité et note de suivi',
    instructions: "1) Complétez checklist-conformite-code-travail-rdc.xlsx pour les trois infirmiers concernés : reconstituez, à partir des plannings de garde (à supposer réalistes), les heures supplémentaires des trois semaines critiques, identifiez leur statut de conformité (probablement \"à corriger\") et justifiez en une phrase par employé pourquoi le \"cash immédiat sans trace\" ne rend pas le dossier conforme. 2) Rédigez la note avec note-suivi-resolution-conflit-travail.docx : description du litige, tentative de résolution interne organisée avant toute autre action (avec le Base Manager, les infirmiers et leur délégué), étape d'escalade que vous êtes prêt à enclencher si l'accord échoue dans le délai de 15 jours annoncé, et statut actuel du dossier.",
    deliverable: "Les deux fichiers complétés, avec un maximum de 2 pages pour la note de suivi, et un raisonnement explicite sur l'ordre des étapes suivies.",
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Appliquer uniquement la politique interne du siège en ignorant le Code du Travail local.",
      "Se présenter à l'inspection du travail sans avoir documenté de tentative de résolution amiable préalable — l'erreur la plus fréquente et la plus coûteuse en crédibilité.",
      "Confondre statut fiscal d'expatrié et exonération automatique, sans vérifier l'existence d'une base légale précise — souvent découvert des années plus tard, lors d'un contrôle.",
      "Régler un litige individuel \"en cash, à l'amiable\" sans aucune trace écrite : sans document daté et signé, aucune preuve si l'employé revient des mois plus tard.",
      "Laisser le suivi des heures supplémentaires \"glisser\" pendant les périodes de surcharge (épidémie, afflux de déplacés, urgence nutritionnelle), alors que c'est le moment où il est le plus critique.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais citer les trois points opérationnels du Code du Travail RDC à vérifier chaque mois pour chaque employé.",
      "Je sais expliquer pourquoi une politique RH de siège ne peut jamais déroger, en défaveur du personnel, au droit du travail local.",
      "Je sais expliquer pourquoi un statut d'expatrié n'entraîne aucune exonération fiscale ou sociale automatique.",
      "Je peux citer, dans l'ordre exact, les quatre étapes de résolution d'un conflit du travail.",
      "J'ai complété une checklist de conformité et rédigé une note de suivi de conflit tenant sur une à deux pages.",
      "Je sais reconnaître la tentation d'un règlement rapide et non documenté — et pourquoi il faut toujours y résister.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Protection, Bien-Être & Prévention du Burnout.',
  },
]
