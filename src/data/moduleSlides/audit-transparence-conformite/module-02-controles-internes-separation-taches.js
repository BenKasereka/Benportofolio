// Module 02 — Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation",
    hook: "Une seule personne qui demande, approuve ET paie une dépense n'est pas qu'un risque de fraude — c'est aussi une accusation infondée qui la guette le jour où un chiffre ne colle pas. Ce module vous donne la méthode pour redistribuer les rôles et protéger à la fois l'organisation et les personnes intègres, même avec une toute petite équipe.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer pourquoi la séparation des tâches est le contrôle interne le plus important d'une organisation, avant même les procédures écrites.",
      'Identifier, dans une structure réelle, les cumuls de fonctions incompatibles en Finance, Achats et RH.',
      "Construire une matrice d'autorisation par niveau de responsabilité et par type d'opération, adaptée à un effectif réel et non à un organigramme théorique.",
      "Définir des seuils de délégation de pouvoir cohérents avec la taille et le niveau de risque d'une mission.",
      "Rédiger et archiver une lettre d'autorisation ou de révocation de signataire dans les règles.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi la séparation des tâches est LE contrôle fondamental',
    body: [
      "Après une fraude découverte tardivement, on entend souvent : \"on avait des procédures, tout était écrit\". Le problème n'était presque jamais l'absence de procédure — c'était qu'une seule personne pouvait, seule, dérouler tout le cycle d'une transaction du début à la fin.",
      "La règle d'or de la séparation des tâches (en anglais Segregation of Duties, SoD) : la personne qui demande une dépense, celle qui l'approuve et celle qui la paie ne doivent jamais être la même personne. Ce n'est pas une question de confiance individuelle — c'est une question de structure.",
    ],
    highlight: "Un contrôle interne bien conçu protège autant l'organisation que la personne intègre placée dans un poste à risque.",
  },
  {
    type: 'stat-callout',
    stat: '4 fonctions',
    caption: 'à ne jamais cumuler sur une même transaction',
    context: "Demander, approuver, exécuter, enregistrer — dans une organisation bien structurée, ces quatre fonctions passent par au moins trois personnes différentes.",
  },
  {
    type: 'comparison-table',
    title: 'Les quatre fonctions à ne jamais cumuler',
    columns: ['Fonction', 'Ce qu\'elle recouvre concrètement', 'Exemple'],
    rows: [
      ['Initiation / demande', 'Exprimer un besoin, déclencher une opération', "Un chef de projet demande l'achat de 200 bâches"],
      ['Approbation', 'Valider que la dépense ou l\'opération est justifiée et budgétée', 'Le coordinateur terrain approuve la demande d\'achat'],
      ['Exécution / garde des actifs', 'Manipuler physiquement l\'argent, le stock ou le bien', 'Le caissier décaisse, le magasinier réceptionne et stocke'],
      ['Enregistrement / contrôle', 'Comptabiliser l\'opération, la rapprocher, la vérifier a posteriori', 'Le comptable enregistre la sortie de caisse et rapproche le stock'],
    ],
  },
  {
    type: 'concept',
    title: 'Les cumuls de fonctions les plus fréquents',
    body: [
      "En Finance : le cumul le plus dangereux est un caissier qui tient aussi le livre de caisse et qui rapproche lui-même sa caisse en fin de mois — il décaisse, enregistre, et contrôle sa propre écriture.",
      "Dans les Achats : le cumul classique est la même personne qui sélectionne le fournisseur, signe le bon de commande, réceptionne la marchandise et valide la facture — la porte ouverte à la collusion fournisseur (approfondie au Module 03).",
      "En RH : le cumul le plus sous-estimé touche la paie — une même personne qui gère le fichier du personnel ET prépare le virement. Cela a permis, dans des cas réels, le maintien d'employés fantômes sur la paie plusieurs mois après leur départ.",
    ],
    highlight: "La séparation des tâches ne se juge jamais sur l'organigramme officiel, mais sur qui détient réellement chaque mot de passe, chaque clé de coffre, chaque droit de signature.",
  },
  {
    type: 'concept',
    title: 'La matrice de délégation de pouvoir par seuil',
    body: "Une fois les fonctions séparées, reste une deuxième question : qui a le droit d'approuver quoi, jusqu'à quel montant ? C'est l'objet de la matrice de délégation de pouvoir (Delegation of Authority, DOA), qui croise le type d'opération et le niveau hiérarchique. Plus le montant est élevé, plus le niveau d'approbation requis monte, et au-delà d'un certain seuil, une double signature devient obligatoire quel que soit le niveau du signataire.",
  },
  {
    type: 'comparison-table',
    title: "Seuils indicatifs par niveau hiérarchique (à adapter à vos procédures)",
    columns: ['Niveau', 'Type de dépense', 'Signature requise'],
    rows: [
      ['Chef d\'équipe / superviseur', 'Achats courants de faible montant', 'Signature simple'],
      ['Chef de base', 'Achats et paiements de montant intermédiaire', 'Signature simple'],
      ['Coordinateur terrain / pays', 'Montants supérieurs, engagements contractuels', 'Signature simple ou double selon seuil'],
      ['Direction pays / siège', 'Montants élevés, contrats cadres, dérogations', 'Double signature obligatoire'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SoD (Segregation of Duties)', definition: 'Séparation des tâches — aucune personne ne doit contrôler seule l\'intégralité d\'un cycle de transaction (demande, approbation, exécution, enregistrement).' },
      { term: 'DOA (Delegation of Authority)', definition: 'Matrice de délégation de pouvoir — tableau croisant types d\'opérations et niveaux hiérarchiques, précisant qui peut approuver quoi, jusqu\'à quel montant.' },
      { term: 'Cumul de fonctions incompatibles', definition: 'Situation où une même personne détient deux fonctions qui, ensemble, lui permettraient de commettre et de dissimuler une erreur ou une fraude sans être détectée.' },
      { term: 'Contrôle compensatoire', definition: 'Mesure de supervision renforcée mise en place quand un cumul de fonctions ne peut pas être évité faute d\'effectif (revue croisée, contre-signature, audit surprise).' },
      { term: 'Signataire autorisé', definition: 'Personne formellement habilitée, par une lettre d\'autorisation signée, à engager l\'organisation sur un type d\'opération donné jusqu\'à un seuil précis.' },
    ],
  },
  {
    type: 'process',
    title: "Construire une matrice adaptée à votre effectif réel",
    steps: [
      { title: 'Cartographier qui fait RÉELLEMENT quoi', body: 'Qui a la clé du coffre, les codes bancaires, signe les bons de commande — jamais l\'organigramme théorique.' },
      { title: 'Lister les cycles de transactions', body: 'Pour chaque cycle (achats, caisse, stock, paie), décomposez les quatre fonctions : initiation, approbation, exécution, enregistrement.' },
      { title: 'Reporter dans matrice-autorisation-separation-taches.xlsx', body: 'Laissez la formule détecter automatiquement les cumuls à risque — listez d\'abord tout, même ce qui est embarrassant à écrire.' },
      { title: 'Prioriser par risque financier réel', body: 'Concentrez le plan de correction sur les trois ou quatre cumuls les plus critiques d\'abord.' },
      { title: 'Documenter un contrôle compensatoire pour chaque cumul non éliminable', body: 'Un cumul assumé et compensé par écrit protège l\'organisation ; un cumul silencieux ne protège personne.' },
      { title: 'Construire la matrice de délégation par seuil', body: 'Vérifiez que chaque seuil correspond à un poste effectivement occupé, pas vacant depuis six mois.' },
      { title: 'Formaliser chaque signataire et chaque départ', body: 'Lettre d\'autorisation à l\'arrivée, lettre de révocation le jour même du départ, avec lettre-autorisation-revocation-signataire.docx.' },
      { title: 'Planifier la revue périodique', body: 'Au minimum tous les six mois, et à chaque mouvement de personnel touchant un poste signataire.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Base sous-staffée, Jérémie, Haïti"',
    scenario: "Sur une base de 4 employés nationaux et un chef de base, sans recrutement possible depuis 8 mois, l'agent logistique-achats sélectionne les fournisseurs, signe les bons de commande jusqu'à 500 $, réceptionne la marchandise dont il détient seul la clé, tient le cahier de stock, ET gère la caisse d'avance. Aucune lettre d'autorisation formelle n'existe pour les deux signataires actuels.",
    steps: [
      "Identifier tous les cumuls incompatibles portés par une seule personne — ici, au moins trois cumuls distincts sur le cycle achats-stock-caisse.",
      "Redistribuer les quatre fonctions entre les cinq personnes réellement présentes, sans recrutement supplémentaire.",
      "Pour tout cumul non éliminable avec cet effectif, décrire un contrôle compensatoire précis et vérifiable.",
      "Formaliser une lettre d'autorisation pour le chef de base comme signataire principal, et documenter pourquoi l'absence de lettres formelles constitue en soi une faiblesse de contrôle.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Matrice d'autorisation jamais mise à jour après un départ ou une mutation — des accès bancaires ou droits systèmes qui restent actifs pour des personnes parties depuis longtemps.",
      "Séparation des tâches affichée sur le papier mais contournée en pratique faute de personnel — un faux sentiment de sécurité pire qu'une absence de contrôle.",
      "Lettre de révocation d'un ancien signataire non signée à temps — elle doit être émise le jour du départ, jamais après.",
      "Copier la matrice d'une autre mission ou du siège sans l'adapter à l'effectif réel — soit les seuils sont contournés, soit toute la base est paralysée.",
      "Traiter un cumul comme définitivement réglé une fois le contrôle compensatoire écrit — il n'est utile que s'il est réellement exécuté et documenté à chaque fois.",
    ],
  },
  {
    type: 'exercise',
    title: 'Matrice, plan de redistribution et lettre d\'autorisation',
    instructions: "Complétez matrice-autorisation-separation-taches.xlsx avec la situation de la base de Jérémie et laissez la formule identifier au moins trois cumuls distincts portés par l'agent logistique-achats. Proposez, en une demi-page, une redistribution des quatre fonctions entre les cinq personnes disponibles, avec un contrôle compensatoire pour chaque cumul non éliminable. Rédigez enfin, avec lettre-autorisation-revocation-signataire.docx, la lettre d'autorisation du chef de base.",
    deliverable: 'La matrice complétée, le plan de redistribution (1 page max) et la lettre d\'autorisation rédigée.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi une même personne ne doit jamais demander, approuver ET payer une même transaction.",
      "Je sais identifier les cumuls de fonctions incompatibles dans les cycles Finance, Achats et RH.",
      "Je sais construire une matrice de délégation de pouvoir par seuil adaptée à un effectif réel.",
      "Pour chaque cumul que je ne peux pas éliminer, je sais formuler un contrôle compensatoire concret et vérifiable.",
      "Je sais dans quel délai une lettre de révocation doit être émise après le départ d'un signataire.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Audit de la Supply Chain & des Achats.',
  },
]
