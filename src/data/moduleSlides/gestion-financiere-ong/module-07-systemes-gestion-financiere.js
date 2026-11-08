// Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé',
    hook: "Aucun logiciel comptable, même le mieux configuré, ne produira jamais exactement le tableau de bord dont votre coordinateur a besoin dans l'heure. Ce module vous donne la logique commune des logiciels comptables ONG (SAGA, LINK) et la compétence Excel qui transforme n'importe quel export brut en décision exploitable.",
  },
  {
    type: 'objectives',
    items: [
      "Décrire le workflow comptable type SAGA (le logiciel de comptabilité générale utilisé par la plupart des ONG) — saisie, validation, clôture mensuelle, édition des journaux — et expliquer ce qu'il protège.",
      "Expliquer ce que LINK (l'outil de suivi financier par projet et par bailleur) standardise : budget chargé par bailleur, suivi des dépenses, extraction de rapports.",
      "Justifier pourquoi la maîtrise d'Excel et des tableaux croisés dynamiques (TCD — un outil qui résume et croise un grand volume de données sans formule) reste indispensable même avec SAGA et LINK correctement déployés.",
      "Construire, à partir d'un export financier brut, un tableau de bord Excel avec TCD montrant la consommation budgétaire par bailleur et par mois.",
      "Verrouiller une période comptable après sa clôture officielle (empêcher toute modification ultérieure sans procédure tracée) et expliquer le risque encouru si ce verrouillage n'est pas fait.",
    ],
  },
  {
    type: 'process',
    title: 'Le workflow SAGA en quatre temps',
    steps: [
      { title: 'Saisie codée dès la source', body: 'Chaque pièce comptable est saisie avec ses trois axes complets — projet, bailleur, rubrique — au moment même de la saisie, jamais "à corriger plus tard".' },
      { title: 'Validation avant clôture', body: "Un Finance Officer ou Finance Manager relit l'ensemble des écritures : cohérence des montants, pièces justificatives, codification correcte, absence de doublon." },
      { title: 'Clôture mensuelle', body: "La période est officiellement fermée. La clôture s'accompagne toujours d'un verrouillage de période — jamais l'un sans l'autre." },
      { title: 'Édition et archivage des journaux', body: "Les journaux comptables du mois clôturé rejoignent immédiatement le dossier d'archive — c'est ce document, pas une capture d'écran, qui fait foi devant un auditeur." },
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi une clôture non verrouillée n'est pas une clôture",
    body: "La clôture n'est pas une formalité de fin de mois qu'on bâcle un vendredi soir pour \"avancer\". C'est le moment où la comptabilité du mois devient une source de vérité figée. Un bureau qui rouvrait régulièrement des mois soi-disant clôturés pour \"corriger une petite erreur\" sans documenter la réouverture s'est retrouvé, à l'audit annuel, incapable de garantir que les chiffres présentés six mois plus tôt à un bailleur étaient encore ceux du système.",
    highlight: "Une clôture non verrouillée n'est pas une clôture.",
  },
  {
    type: 'concept',
    title: 'Ce que LINK standardise : le suivi financier par projet',
    body: [
      "Un budget chargé — le budget approuvé par le bailleur est saisi dans LINK, ligne par ligne, rubrique par rubrique.",
      "Un suivi des dépenses en continu — LINK rapproche les dépenses engagées du budget chargé et affiche un solde disponible, mis à jour bien plus fréquemment que la clôture mensuelle.",
      "Une extraction de rapports — LINK permet de sortir un BFU (Budget Follow-Up) : dépensé à date, engagé, disponible, taux de consommation par rubrique.",
    ],
    highlight: "LINK n'invente aucune donnée : si une dépense a été mal codée à la saisie dans SAGA, LINK affichera un solde disponible faux, avec la même conviction qu'il afficherait un solde juste.",
  },
  {
    type: 'comparison-table',
    title: 'SAGA et LINK ne raisonnent pas au même niveau',
    columns: ['Critère', 'SAGA', 'LINK'],
    rows: [
      ['Niveau de raisonnement', "Comptabilité générale de l'organisation", 'Suivi financier par projet et par bailleur'],
      ['Fréquence de référence', 'Mensuelle (clôture)', 'Continue, entre deux clôtures'],
      ['Produit typique', 'Journaux comptables, états financiers', 'Rapport de suivi budgétaire (BFU), extraction bailleur'],
      ['Dépend de', 'La qualité de la saisie initiale', 'La qualité de la codification faite en amont dans SAGA'],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi la compétence Excel/TCD reste indispensable',
    body: [
      "Aucun système, ni SAGA ni LINK, ne produira jamais exactement le tableau de bord dont vous avez besoin un jour donné. Un coordinateur qui demande un mardi la consommation ECHO croisée par mois pour le lendemain matin attend un tableau clair dans l'heure, pas un nouveau rapport LINK configuré.",
      "Un TCD reconstruit en quelques clics n'importe quelle vue croisée — par bailleur, par mois, par rubrique — sans écrire une seule formule, actualisable en un clic dès qu'un nouvel export arrive.",
    ],
    highlight: "Un TCD n'est fiable que si les données sources sont propres et correctement codées — \"garbage in, garbage out\" s'applique ici avec la même force qu'au Module 01.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SAGA', definition: 'Logiciel de comptabilité générale ONG — saisie, validation, clôture mensuelle, édition des journaux comptables officiels.' },
      { term: 'LINK', definition: 'Outil de suivi financier de projet — budget chargé par bailleur, suivi continu des dépenses, extraction de rapports (BFU).' },
      { term: 'BFU (Budget Follow-Up)', definition: "Tableau de suivi comparant, ligne par ligne, le budget alloué à l'engagé et au dépensé réels." },
      { term: 'Clôture mensuelle', definition: "Opération qui fige officiellement les écritures comptables d'un mois ; doit être suivie d'un verrouillage de période." },
      { term: 'Verrouillage de période', definition: "Mesure empêchant toute modification d'une période comptable clôturée sans procédure de réouverture tracée." },
      { term: 'TCD (Tableau Croisé Dynamique)', definition: "Outil Excel permettant de résumer et croiser un grand volume de données (ex. bailleur × mois) sans formule, actualisable à chaque nouvel export." },
    ],
  },
  {
    type: 'process',
    title: 'Construire un tableau de bord financier Excel avec TCD',
    steps: [
      { title: "Ouvrir l'export sans le modifier", body: "Conservez l'onglet contenant l'export brut intact ; toute transformation se fait sur une copie ou dans un TCD séparé." },
      { title: 'Vérifier la codification avant de construire quoi que ce soit', body: 'Libellés incohérents pour un même bailleur ("ECHO", "E.C.H.O.", "Echo"), cellules vides, montants négatifs inexpliqués : à corriger avant de poursuivre.' },
      { title: 'Transformer la plage en tableau structuré et insérer le TCD', body: "Ctrl+T pour un tableau qui s'étend automatiquement aux futurs exports, puis Insertion > Tableau croisé dynamique dans une nouvelle feuille." },
      { title: 'Construire la vue croisée bailleur × mois', body: 'Bailleur en Lignes, Date regroupée par mois en Colonnes, Montant en Valeurs avec agrégation Somme.' },
      { title: 'Mettre en forme et insérer un graphique croisé dynamique', body: "Format monétaire cohérent, totaux activés, en-têtes renommés, puis un histogramme groupé par bailleur avec le mois en axe horizontal." },
      { title: 'Actualiser plutôt que reconstruire, le mois suivant', body: 'Collez les nouvelles lignes à la suite du tableau structuré, puis Données > Actualiser tout.' },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ressaisir manuellement des données déjà disponibles dans SAGA ou LINK — le réflexe professionnel est toujours d'extraire, jamais de recopier.",
      "Construire un TCD sur des données mal codées en amont — un TCD impeccablement mis en forme, bâti sur des libellés incohérents, produit un résultat trompeur avec la même assurance visuelle qu'un résultat juste.",
      "Ne pas verrouiller une période comptable après sa clôture officielle — une clôture annoncée mais non verrouillée laisse la porte ouverte à des modifications a posteriori non tracées.",
      "Perdre ou écraser le fichier d'export brut d'origine une fois le tableau de bord construit — sans lui, aucun moyen de justifier un chiffre précis si un bailleur le conteste trois mois plus tard.",
      "Diffuser un tableau de bord Excel sans le rapprocher des chiffres officiels de SAGA avant envoi — risquer de faire exister deux vérités financières différentes sur le même projet.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le comité de pilotage, bureau de Bentiu"',
    scenario: "Votre Finance Manager vous demande, un mardi en fin de journée, un tableau de bord de consommation budgétaire par bailleur et par mois pour un comité de pilotage le lendemain matin (ECHO, UNICEF, USAID/BHA). Vous extrayez de LINK un export brut de 52 lignes couvrant six mois.",
    steps: [
      "Le bailleur \"ECHO\" apparaît sous trois libellés différents selon l'agent qui a saisi la ligne dans SAGA : \"ECHO\", \"Echo\" et \"E.C.H.O.\"",
      "Une ligne de 18 400 USD sur la rubrique \"Transport\" n'a aucun bailleur renseigné.",
      "Deux lignes semblent dupliquées (même projet, même rubrique, même montant, même date à un jour près).",
      "Le mois de juin ne contient que 2 lignes contre 8 à 10 pour les autres mois — potentiellement un mois pas encore complètement clôturé dans SAGA.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — le tableau de bord de Bentiu',
    instructions: "Ouvrez tableau-de-bord-financier-tcd.xlsx et, sur un jeu de données équivalent à celui décrit, harmonisez les libellés de bailleur incohérents avant de construire le TCD, puis construisez la vue croisée bailleur × mois avec son graphique. Dans une note courte, documentez comment vous traitez la ligne sans bailleur et les deux lignes potentiellement dupliquées, et expliquez pourquoi présenter le mois de juin sur le même graphique que les mois complets, sans réserve, risquerait d'induire le comité de pilotage en erreur.",
    deliverable: "Le classeur tableau-de-bord-financier-tcd.xlsx complété avec votre tableau de bord et son graphique, accompagné d'une note d'une demi-page maximum signalant vos choix de traitement et les points restant à vérifier avant diffusion aux bailleurs.",
  },
  {
    type: 'recap',
    items: [
      "Je sais décrire, dans l'ordre, les quatre étapes du workflow SAGA : saisie, validation, clôture mensuelle, édition des journaux.",
      "Je sais expliquer ce qu'est un verrouillage de période et pourquoi il doit toujours accompagner une clôture.",
      "Je sais décrire ce que LINK standardise et son lien de dépendance avec la qualité de la saisie SAGA.",
      "Je sais construire un tableau croisé dynamique croisant bailleur et mois à partir d'un export brut.",
      "Je sais harmoniser des libellés incohérents avant de construire un TCD, et actualiser un tableau de bord plutôt que le reconstruire.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 08 — Fraude, Corruption & Conformité Financière.',
  },
]
