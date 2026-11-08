// Module 07 — Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens',
    hook: "Une dépense mal classée peut être jugée inéligible des mois plus tard — avec obligation de remboursement au bailleur. Ce module vous donne les réflexes concrets pour vérifier, avant d'engager le moindre centime, quelles règles bailleur s'appliquent réellement à votre dépense.",
  },
  {
    type: 'objectives',
    items: [
      "Appliquer les points opérationnels clés du 2 CFR 200 (le règlement fédéral américain qui encadre l'usage des fonds USAID, aussi appelé « Uniform Guidance ») en matière de passation de marché et d'éligibilité des dépenses.",
      "Appliquer les points opérationnels clés du PRAG (le guide pratique qui régit les marchés financés par l'Union européenne) en matière de passation de marché et d'éligibilité des biens et services.",
      "Distinguer, pour un bailleur donné, un coût direct (imputable à un seul projet) d'un coût indirect ou administratif (partagé entre plusieurs projets), et lui appliquer le bon traitement budgétaire.",
      "Identifier rapidement, dans un contexte multi-bailleurs, quelles règles de conformité s'appliquent à une dépense donnée AVANT de l'engager.",
      "Anticiper les conséquences concrètes d'une non-conformité bailleur et déclencher une démarche de correction ou de divulgation proactive avant qu'elle ne se transforme en sanction.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi ce module n'est pas un cours de droit",
    body: [
      "Un auditeur qui connaît la théorie par cœur mais est incapable de dire, un vendredi après-midi, si un achat de 3 000 dollars peut partir sans appel d'offres échoue tout autant que celui qui connaît la routine terrain mais ignore qu'il vient de franchir un seuil contractuel rendant toute la dépense inéligible. Ce module vise le milieu : assez de compréhension pour reconnaître les points qui reviennent systématiquement en audit bailleur.",
      "Chaque bailleur a SES règles, écrites dans SON accord de financement. Le 2 CFR 200 s'applique aux fonds américains (USAID, y compris le Bureau for Humanitarian Assistance — BHA, né de la fusion d'OFDA et de Food for Peace). Le PRAG s'applique aux fonds de la Commission européenne ; ECHO, la direction humanitaire de l'UE, applique ses propres règles complémentaires par-dessus cette logique contractuelle. Les agences onusiennes (PAM, UNICEF, HCR...) fonctionnent différemment : leurs règles sont fixées dans l'accord de partenariat, pas dans un règlement public équivalent.",
    ],
  },
  {
    type: 'checklist',
    title: '2 CFR 200 (USAID) — les points qui reviennent le plus souvent en audit',
    items: [
      "Seuils de mise en concurrence (200.320) : en dessous d'un certain montant, un achat direct est acceptable ; au-dessus, plusieurs cotations ou un appel d'offres formel sont exigés. Ces seuils évoluent — ne travaillez jamais de mémoire, vérifiez le montant en vigueur.",
      "Vérification des listes d'exclusion (200.213) : tout fournisseur doit être vérifié sur SAM.gov (System for Award Management, le registre officiel américain des entités exclues des marchés fédéraux) avant tout engagement.",
      "Conflit d'intérêt (200.318) : la personne qui sélectionne un fournisseur ne doit avoir aucun lien personnel ou financier avec lui.",
      "Origine et nationalité des biens : encadrée par les règles « source and nationality » (précisées dans les chapitres ADS d'USAID, notamment l'ADS 310).",
      "Éligibilité des coûts (200.403) : un coût doit être raisonnable, imputable spécifiquement au projet, traité de façon cohérente, et conforme aux limitations de l'accord de financement.",
    ],
  },
  {
    type: 'checklist',
    title: 'Le PRAG (Union européenne) — les points opérationnels qui reviennent le plus souvent',
    items: [
      "Grille de seuils par montant : négociation directe pour les très petits montants, procédure négociée avec plusieurs devis pour les montants intermédiaires, appel d'offres au-delà — précisée en annexe du PRAG et rappelée dans le contrat de subvention.",
      "Règles de nationalité et d'origine : l'éligibilité des soumissionnaires et des biens dépend d'une liste de pays éligibles à vérifier avant de contractualiser, pas après.",
      "Dossier d'appel d'offres conforme aux modèles PRAG : un dossier « fait maison » qui s'écarte trop des annexes standardisées attendues est un point de friction quasi systématique en audit.",
      "Visibilité ECHO : pour les financements humanitaires ECHO, une charte de visibilité (logos, mentions obligatoires) s'applique en plus des règles PRAG de fond.",
      "Rapportage via le Single Form : ECHO exige un rapport intermédiaire et/ou final structuré selon ce format unique, avec des échéances contractuelles strictes.",
    ],
  },
  {
    type: 'concept',
    title: 'Bailleurs onusiens : une logique contractuelle, pas réglementaire',
    body: "À la différence d'USAID et de l'UE, les agences des Nations Unies (PAM, UNICEF, HCR, OMS...) n'ont pas d'équivalent public au 2 CFR 200 ou au PRAG. Leurs exigences de conformité pour un partenaire ONG sont fixées dans l'accord de partenariat lui-même — PCA pour le PAM, FPA pour beaucoup d'autres agences — avec ses propres annexes sur les seuils d'achat, le format de rapportage financier et les clauses de vérification anti-terrorisme.",
    highlight: "Le réflexe professionnel ici n'est pas de chercher un règlement externe, mais de relire l'accord de partenariat ligne par ligne avant chaque nouveau cycle de projet — une clause modifiée d'une année sur l'autre passe facilement inaperçue.",
  },
  {
    type: 'comparison-table',
    title: 'Coût direct vs coût indirect/administratif',
    columns: ['Critère', 'Coût direct', 'Coût indirect / administratif'],
    rows: [
      ['Définition', 'Imputable spécifiquement et exclusivement à un projet donné', "Partagé entre plusieurs projets ou entre le projet et le fonctionnement du siège/de la mission"],
      ['Exemples terrain', "Salaire d'un chargé de projet dédié à 100% à ce projet, carburant du véhicule affecté au projet, intrants distribués aux bénéficiaires", 'Loyer du bureau de coordination pays, salaire du Directeur Pays, service informatique partagé, audit externe annuel'],
      ['Traitement USAID', 'Imputé directement à la ligne budgétaire du projet', "Recouvré via un taux NICRA (Negotiated Indirect Cost Rate Agreement) négocié avec USAID, ou à défaut un taux de minimis de 10% des coûts directs modifiés (MTDC)"],
      ['Traitement UE/ECHO', 'Imputé directement à la ligne budgétaire du projet', "Généralement plafonné contractuellement à un pourcentage fixe des coûts directs éligibles (souvent autour de 7%, à vérifier dans CHAQUE contrat)"],
    ],
  },
  {
    type: 'concept',
    title: 'La règle d\'or sur les coûts partagés',
    body: "Classer un coût partagé comme « direct » pour maximiser ce qu'on peut facturer à un projet spécifique — même sans intention frauduleuse, par simple erreur de méthode — est l'un des redressements les plus fréquents lors d'un audit financier bailleur. À l'inverse, un taux d'imputation appliqué sans accord NICRA ou sans base contractuelle documentée est tout aussi risqué.",
    highlight: "Dans les deux cas, la règle d'or est la même : la méthode d'allocation doit être écrite, cohérente d'un mois sur l'autre, et applicable de la même façon à tous les bailleurs qui financent la structure partagée concernée.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: '2 CFR 200 (Uniform Guidance)', definition: "Règlement fédéral américain encadrant l'usage des fonds fédéraux, y compris ceux d'USAID/BHA." },
      { term: 'BHA', definition: "Bureau for Humanitarian Assistance, bureau d'USAID né de la fusion d'OFDA et de Food for Peace, principal bailleur humanitaire américain." },
      { term: 'SAM.gov', definition: 'Registre officiel américain des entités exclues ou suspendues des marchés fédéraux, à vérifier avant tout engagement fournisseur USAID.' },
      { term: 'NICRA', definition: 'Negotiated Indirect Cost Rate Agreement — taux de coûts indirects négocié et validé formellement avec USAID.' },
      { term: 'De minimis rate', definition: 'Taux forfaitaire de 10% des coûts directs modifiés (MTDC), utilisable sans négociation NICRA préalable.' },
      { term: 'PRAG', definition: "Practical Guide — guide pratique des procédures contractuelles pour les actions extérieures financées par l'UE." },
      { term: 'Single Form', definition: 'Format de rapport unique exigé par ECHO pour le suivi intermédiaire et final des projets humanitaires financés.' },
      { term: 'PCA / FPA', definition: 'Partnership Cooperation/Framework Agreement — accords de partenariat qui fixent, agence par agence, les règles de conformité applicables à un partenaire ONG onusien.' },
    ],
  },
  {
    type: 'process',
    title: 'Vérifier la conformité bailleur AVANT d\'engager une dépense',
    steps: [
      { title: 'Identifier sans ambiguïté le bailleur et la ligne budgétaire', body: "Une dépense mal rattachée à la mauvaise source de financement entraîne automatiquement l'application des mauvaises règles — et personne ne s'en rend compte avant le rapport financier." },
      { title: 'Ouvrir la checklist du bon type de bailleur', body: "Utilisez checklist-conformite-bailleurs-par-type.xlsx et allez directement à la section concernée (USAID/BHA, UE/ECHO, ou onusien) — pas les trois « au cas où »." },
      { title: 'Vérifier le seuil de mise en concurrence applicable', body: "Chaque bailleur a sa propre grille de seuils. Vérifiez-la AVANT de contacter un fournisseur, pas après avoir reçu sa facture." },
      { title: "Vérifier les règles d'origine et de nationalité des biens", body: "Vérifiez le pays d'origine réel du bien (où il est fabriqué), pas seulement le pays où le fournisseur est enregistré." },
      { title: "Vérifier la liste d'exclusion applicable", body: "Pour tout achat USAID/BHA, une vérification SAM.gov est non négociable, quel que soit le montant. Conservez une preuve horodatée." },
      { title: 'Déterminer si le coût est direct ou indirect', body: "Appliquez la méthode d'allocation en vigueur (NICRA, de minimis, ou pourcentage plafonné) — jamais une imputation « au feeling »." },
      { title: 'Documenter et archiver toutes les preuves', body: "Un point de conformité « vérifié » sans preuve archivée n'a aucune valeur face à un auditeur externe ou une revue bailleur." },
      { title: 'En contexte multi-bailleurs, trancher selon la règle la plus restrictive', body: "Ne laissez jamais cette décision à l'appréciation du moment de la personne qui passe la commande — elle doit être fixée en amont, par écrit." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Appliquer les mêmes règles de conformité à tous les bailleurs sans vérifier les spécificités du contrat de financement concerné.",
      "Découvrir une règle de conformité après la dépense engagée plutôt qu'avant — après paiement, il ne reste que la gestion de crise, jamais la prévention.",
      'Sous-estimer les conséquences d\'une non-conformité : elle peut aller jusqu\'à l\'inéligibilité pure et simple du coût, l\'obligation de remboursement, voire une perte de confiance du bailleur.',
      "Confondre la nationalité du fournisseur avec l'origine réelle des biens — un fournisseur enregistré dans un pays éligible peut vendre des biens fabriqués ailleurs.",
      "Attendre la préparation d'un audit externe pour vérifier la conformité bailleur, au lieu de le faire en continu, dépense par dépense.",
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — « Pièces de pompe financées par ECHO », Nord-Kivu, RDC",
    scenario: "Vous êtes Compliance Officer pour une ONG WASH dans un projet ECHO à Rutshuru, Nord-Kivu. L'équipe achats, sous pression pour relancer une pompe communautaire en panne, a commandé des pièces détachées auprès d'un fournisseur basé à Goma — 8 400 USD, trois cotations reçues, PV de comité d'achat signé, procédure respectée en apparence. Lors de votre revue de conformité mensuelle, vous remarquez que les pièces livrées portent un marquage d'origine indiquant un pays de fabrication qui ne figure pas sur la liste des pays éligibles du contrat ECHO.",
    steps: [
      "Le fournisseur est bien enregistré et basé dans un pays éligible — mais les biens eux-mêmes viennent d'ailleurs.",
      "L'équipe achats a vérifié la nationalité du fournisseur, pas l'origine réelle des biens : les deux notions se vérifient séparément, systématiquement.",
      "Votre mission : produire une analyse complète du risque et une recommandation avant la clôture du rapport financier intermédiaire, dans 10 jours.",
    ],
  },
  {
    type: 'exercise',
    title: 'Analyser un risque de non-conformité et décider de le divulguer',
    instructions: "Complétez note-analyse-risque-non-conformite.docx pour ce cas : la règle bailleur applicable (référence au règlement d'éligibilité/origine du contrat ECHO), les conséquences potentielles réalistes (inéligibilité des 8 400 USD, risque de remboursement, impact sur la relation avec ce bailleur si le motif se répète), et votre recommandation motivée — faut-il informer ECHO de manière proactive avant que le point ne soit détecté, ou attendre ? Puis, dans checklist-conformite-bailleurs-par-type.xlsx, marquez la ligne « origine des biens » de la section UE/ECHO comme « Non conforme » et ajoutez l'action corrective proposée pour éviter la récurrence.",
    deliverable: 'Les deux documents complétés, avec une note d\'analyse tenant sur une page.',
  },
  {
    type: 'recap',
    items: [
      "Je sais citer au moins trois points opérationnels du 2 CFR 200 qui reviennent le plus souvent en audit USAID/BHA.",
      "Je sais citer au moins trois points opérationnels du PRAG qui reviennent le plus souvent en audit UE/ECHO.",
      "Je sais où trouver les règles de conformité applicables à un partenaire ONG d'une agence onusienne.",
      "Je sais distinguer un coût direct d'un coût indirect/administratif et le traitement budgétaire correspondant selon le bailleur.",
      "Je sais distinguer la nationalité d'un fournisseur de l'origine réelle des biens qu'il vend.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 08 — Rédaction de Rapports d'Audit Professionnels.",
  },
]
