// Module 04 — Audit Financier & Comptable
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Audit Financier & Comptable',
    hook: "Un dossier financier peut être tamponné, signé aux trois niveaux requis et parfaitement classé — et couvrir une dépense qui n'a jamais eu lieu. Ce module vous donne le réflexe qui change tout : confronter systématiquement les pièces entre elles au lieu de vérifier qu'elles existent, pour repérer un fractionnement de dépense ou une anomalie bancaire avant qu'un bailleur ne le fasse à votre place.",
  },
  {
    type: 'objectives',
    items: [
      "Vérifier, à l'aide d'une grille de contrôle systématique, la complétude et la légitimité d'un échantillon de pièces comptables (contrat, facture, preuve de paiement).",
      "Appliquer la méthode du 3-way match (rapprochement croisé entre contrat, facture et preuve de paiement) pour juger si une dépense est réellement éligible, au-delà de sa conformité formelle apparente.",
      "Réaliser un rapprochement bancaire orienté détection d'anomalies, en croisant plusieurs mois consécutifs plutôt qu'un mois isolé.",
      "Repérer, à partir d'une analyse multi-mois, un pattern de fractionnement de dépenses destiné à contourner un seuil d'autorisation.",
      "Contrôler l'éligibilité d'une dépense à une ligne budgétaire bailleur et formuler un constat d'audit financier documenté et actionnable.",
    ],
  },
  {
    type: 'concept',
    title: 'Le 3-way match : juger la légitimité, pas seulement la complétude',
    body: [
      "En audit financier ONG, la question qui compte n'est jamais \"est-ce que le dossier est complet ?\" — elle est \"est-ce que cette dépense a réellement eu lieu, pour le motif indiqué, au montant indiqué ?\".",
      "Le 3-way match confronte systématiquement trois documents qui, pris séparément, ne prouvent rien, mais qui, recoupés, racontent l'histoire complète d'une transaction : le contrat ou bon de commande, la facture, et la preuve de paiement.",
    ],
    highlight: "La majorité des dossiers financiers ONG qui posent problème ne sont pas des dossiers vides : ce sont des dossiers complets en apparence — tampon, signature, les trois documents présents — où le rapprochement révèle un écart.",
  },
  {
    type: 'stat-callout',
    stat: '3 documents',
    caption: 'Le 3-way match : contrat, facture, preuve de paiement',
    context: "Recoupés, ils racontent l'histoire complète d'une transaction — pris séparément, aucun ne prouve rien.",
  },
  {
    type: 'comparison-table',
    title: 'Ce que chaque document prouve, une fois croisé aux deux autres',
    columns: ['Document', 'Ce qu\'il prouve seul', 'Ce qu\'il faut vérifier en le croisant'],
    rows: [
      ['Contrat / bon de commande', "Qu'un engagement a été pris, à un prix et des conditions donnés", 'Le prix facturé correspond-il au prix contractuel ? La quantité livrée correspond-elle à la quantité commandée ?'],
      ['Facture', "Qu'un fournisseur réclame un paiement", "La facture porte-t-elle la référence du contrat ? Le fournisseur facturé est-il bien celui contractualisé ?"],
      ['Preuve de paiement', "Qu'un décaissement a eu lieu", "Le montant payé correspond-il exactement à la facture ? Le bénéficiaire est-il bien le fournisseur facturé — pas un tiers ?"],
    ],
  },
  {
    type: 'concept',
    title: 'Conformité formelle et légitimité réelle : deux choses différentes',
    body: "Une pièce peut être formellement irréprochable — tamponnée, signée par les trois niveaux requis, bien classée — et couvrir une dépense qui n'a jamais eu lieu, un service jamais rendu, un bien jamais livré. Le rôle de l'auditeur n'est pas de noter la présentation d'un dossier, c'est de statuer sur la réalité économique de la transaction. Quand le montant ou le fournisseur le justifie, confirmez l'existence de la transaction par un moyen indépendant des pièces elles-mêmes : un appel au fournisseur, une visite du site livré, un témoignage du bénéficiaire final.",
  },
  {
    type: 'concept',
    title: "Le rapprochement bancaire d'auditeur n'a pas le même objectif que celui de routine",
    body: [
      "Un Finance Officer travaille mois par mois pour clôturer chaque mois proprement. Un auditeur travaille sur plusieurs mois mis côte à côte, parce qu'un pattern suspect n'est souvent visible qu'en alignant les mois les uns à côté des autres.",
      "Un Finance Officer explique les écarts de solde. Un auditeur interroge les transactions elles-mêmes, même celles qui ne créent aucun écart apparent. Un Finance Officer accepte les explications de sa propre équipe ; un auditeur les teste — il demande la pièce justificative sous-jacente à toute transaction inhabituelle.",
    ],
    highlight: "Ne vous limitez jamais à \"est-ce que ça équilibre ?\". Posez-vous systématiquement : ce montant est-il rond de façon suspecte ? Ce bénéficiaire est-il inhabituel ? Cette transaction se répète-t-elle sans cycle opérationnel logique ? Y a-t-il des doublons ?",
  },
  {
    type: 'concept',
    title: "Contrôler l'éligibilité budgétaire d'une dépense",
    body: "Une dépense peut être parfaitement légitime — bien livré, service rendu, 3-way match propre — et malgré tout inéligible au regard des règles d'un bailleur. Vérifiez systématiquement trois choses : la dépense tombe-t-elle dans la période de mise en œuvre de l'accord de financement ? Est-elle imputée à la bonne ligne budgétaire ? Respecte-t-elle les règles spécifiques du bailleur (plafonds de per diem, origine géographique des fournisseurs, catégories de dépenses interdites) ?",
    highlight: "Détecter l'inéligibilité tôt, pendant l'exécution, est infiniment moins coûteux que la découvrir à l'audit final du bailleur — cela peut représenter des dizaines de milliers de dollars non remboursables sur un seul projet.",
  },
  {
    type: 'process',
    title: 'Vérifier un échantillon de pièces et détecter les anomalies bancaires',
    steps: [
      { title: 'Construire un échantillon orienté risque', body: 'Transactions au-dessus d\'un seuil de matérialité, échantillon aléatoire pour le reste, nouveaux fournisseurs, transactions en espèces.' },
      { title: 'Appliquer le 3-way match à chaque pièce', body: 'Avec grille-verification-pieces-comptables.xlsx — cochez "Oui" seulement si les trois documents sont cohérents entre eux.' },
      { title: 'Évaluer la légitimité réelle au-delà de la forme', body: 'Ce bien a-t-il été vu physiquement ? Ce service a-t-il un livrable vérifiable ? Le prix est-il cohérent avec le marché ?' },
      { title: "Vérifier l'éligibilité budgétaire de chaque transaction", body: 'Période, ligne budgétaire, règles spécifiques du bailleur — une dépense mal imputée est un constat à part entière.' },
      { title: 'Consolider le taux de conformité et les patterns multi-mois', body: 'L\'onglet de synthèse fait ressortir les transactions répétées juste sous le seuil de matérialité, mois après mois.' },
      { title: 'Réaliser le rapprochement bancaire sur 3 mois consécutifs minimum', body: 'Montants ronds suspects, bénéficiaires inconnus, doublons — documentez chaque anomalie avec rapport-rapprochement-bancaire-audit.docx.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: '3-way match', definition: 'Rapprochement croisé entre le contrat/bon de commande, la facture et la preuve de paiement, pour juger la réalité et la légitimité d\'une transaction.' },
      { term: 'Reconciling item', definition: 'Élément qui explique un écart entre deux soldes dans un rapprochement de routine — chèque en circulation, virement en transit, frais non comptabilisés.' },
      { term: "Seuil d'autorisation", definition: 'Montant au-delà duquel une dépense nécessite une validation hiérarchique supplémentaire ou une procédure d\'achat renforcée.' },
      { term: 'Fractionnement de dépense', definition: 'Diviser artificiellement une dépense unique en plusieurs paiements plus petits pour rester sous un seuil d\'autorisation ou de mise en concurrence.' },
      { term: 'Éligibilité budgétaire', definition: 'Conformité d\'une dépense aux règles spécifiques d\'un bailleur (période, ligne budgétaire, nature, plafonds) — distincte de sa légitimité comptable de base.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le fractionnement déguisé, Beni, RDC"',
    scenario: "Le seuil interne fixe 500 $ au-delà desquels une dépense de caisse exige double validation et mise en concurrence. En triant les transactions des 6 derniers mois par fournisseur plutôt que par date, vous remarquez qu'un même fournisseur apparaît 3 à 4 fois par mois, chaque mois, avec des montants entre 460 $ et 495 $ — jamais au-dessus de 500 $. Chaque pièce est individuellement complète. Mise bout à bout, la dépense mensuelle réelle dépasse 1 800 $, soit près de 11 000 $ sur la période.",
    steps: [
      "Le fractionnement ne se voit jamais dans un mois pris seul — il ne devient visible qu'en alignant plusieurs mois et en triant par fournisseur, pas par date.",
      "Décrire le fait observé (fréquence, montants, fournisseur) et citer explicitement la règle interne contournée.",
      "Qualifier le risque (négligence ou fractionnement intentionnel) en s'appuyant sur des éléments objectifs, sans conclure à la fraude sans preuve suffisante.",
      "Documenter en parallèle toute anomalie bancaire liée (par exemple des virements réguliers vers un bénéficiaire non enregistré comme fournisseur).",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Vérifier la forme d'une pièce sans jamais interroger la légitimité réelle de la dépense sous-jacente — un tampon et une signature ne prouvent ni livraison ni service rendu.",
      "Analyser un seul mois isolément au lieu de croiser plusieurs mois — le fractionnement ne se voit jamais dans un mois pris seul.",
      "Accepter une pièce \"presque complète\" en se disant qu'on la complètera plus tard — elle ne l'est presque jamais.",
      "Se contenter de la réponse rassurante du Finance Officer sans demander de preuve à l'appui.",
      "Trier son échantillon uniquement par ordre chronologique — cela masque exactement les patterns de fractionnement ou de bénéficiaire récurrent.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille de vérification, constat d\'audit et anomalies bancaires',
    instructions: "Simulez au moins 12 transactions plausibles avec le fournisseur du cas de Beni, plus une dizaine de transactions \"bruit\", et complétez grille-verification-pieces-comptables.xlsx pour faire ressortir le pattern par fournisseur et par mois. Rédigez, en une demi-page maximum, un constat d'audit formel décrivant le fait observé, citant la règle contournée et qualifiant le risque. Documentez enfin, avec rapport-rapprochement-bancaire-audit.docx, deux anomalies bancaires liées (virements réguliers vers un bénéficiaire non enregistré).",
    deliverable: "Les deux templates complétés et le constat d'audit rédigé, cohérents entre eux (mêmes montants, mêmes dates).",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qu'est le 3-way match et pourquoi il juge la légitimité, pas seulement la conformité formelle.",
      "Je sais distinguer un rapprochement bancaire de routine d'un rapprochement bancaire d'audit.",
      "Je sais construire un échantillon de pièces comptables orienté risque et documenter ma méthode de sélection.",
      "Je sais distinguer la légitimité d'une dépense de son éligibilité à une ligne budgétaire bailleur.",
      "Je sais reconnaître, dans un jeu de données multi-mois, un pattern de fractionnement de dépense.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 05 — Audit des RH & Programmes.',
  },
]
