// Module 09 — KPIs, Reporting & Tableau de Bord Supply Chain
// Dernier module de la formation. Restructuration en diapositives du
// contenu source (01-theorie.md, 02-outils.md, 03-exercices.md) — matière
// factuelle inchangée, une idée par écran. Style aligné sur la référence
// de la formation IA (module 01).
export default [
  {
    type: 'cover',
    title: 'KPIs, Reporting & Tableau de Bord Supply Chain',
    hook: "Un chiffre affiché sans la décision qu'il déclenche ne sert à rien. Ce dernier module vous apprend à transformer les données d'achats et de stocks accumulées tout au long de cette formation en trois indicateurs clés, puis en deux rapports différents — un pour votre siège, un pour vos bailleurs — qui donnent enfin à vos données le pouvoir de faire agir.",
  },
  {
    type: 'objectives',
    items: [
      "Définir et calculer correctement les 3 KPI (Key Performance Indicator, indicateur de performance clé) supply chain essentiels : taux de rupture de stock, délai d'approvisionnement, taux de conformité achats.",
      "Identifier, pour chaque KPI, la décision opérationnelle qu'il doit déclencher — pas seulement le consigner dans un tableau.",
      "Construire un tableau de bord Excel fonctionnel à partir de données brutes d'achats et de stocks.",
      "Adapter la structure, le ton et le niveau de détail d'un rapport supply chain selon l'audience : siège ou bailleur.",
      "Présenter des données de performance à un coordinateur avec une recommandation claire, pas une simple liste de chiffres.",
    ],
  },
  {
    type: 'concept',
    title: "Un KPI n'est pas une statistique, c'est un déclencheur de décision",
    body: "L'erreur la plus répandue chez les Supply Chain Officers juniors : produire le chiffre, l'afficher dans un rapport, et passer au mois suivant. Un taux de rupture de stock de 12 % n'a aucune valeur en soi — ce qui a de la valeur, c'est ce que ce chiffre oblige à faire ensuite. Un tableau de bord qui ne débouche sur aucune décision est un exercice Excel inutile, aussi joli soit-il.",
    highlight: "Le KPI vous dit qu'il y a un problème. Votre travail de Supply Chain Manager est de remonter jusqu'à la cause, pas de vous arrêter au symptôme.",
  },
  {
    type: 'concept',
    title: 'KPI 1 — Le taux de rupture de stock (stock-out rate)',
    body: "Il mesure la proportion d'articles pour lesquels le stock disponible était insuffisant au moment de la distribution : (nombre de lignes d'article en rupture ÷ nombre total de lignes suivies) × 100. Un taux qui grimpe n'est presque jamais un problème d'entrepôt en soi — c'est un problème de seuil de réapprovisionnement mal calibré, de délai fournisseur sous-estimé, ou de consommation programme mal anticipée.",
    highlight: "Un taux de rupture de 0 % n'est pas non plus automatiquement une bonne nouvelle : cela peut signaler un surstockage coûteux, avec un risque de péremption.",
  },
  {
    type: 'concept',
    title: "KPI 2 — Le délai d'approvisionnement (procurement lead time)",
    body: "Il mesure le temps réel écoulé entre le déclenchement d'une demande d'achat et la réception effective de la marchandise en entrepôt, en moyenne sur la période. Un délai qui augmente doit être décomposé avant d'être commenté : est-ce le temps de validation interne qui s'allonge, le fournisseur qui livre en retard, ou le transit douanier qui bloque ?",
  },
  {
    type: 'concept',
    title: 'KPI 3 — Le taux de conformité achats (procurement compliance rate)',
    body: "Il mesure la proportion des achats de la période qui respectent intégralement la procédure requise : seuils d'autorisation, nombre d'offres concurrentielles, vérification d'inéligibilité, dossier complet et archivé. C'est le chiffre que les bailleurs regardent en premier lors d'un audit, parce qu'il mesure le risque fiduciaire de l'organisation, pas sa performance opérationnelle.",
    highlight: "Un taux de conformité qui baisse pendant une urgence n'est pas nécessairement une faute — les procédures prévoient des dérogations documentées — mais chaque dérogation doit être tracée, sinon le chiffre devient indéfendable devant un auditeur.",
  },
  {
    type: 'concept',
    title: 'Rapport bailleur et rapport siège : deux documents, jamais un seul',
    body: [
      "Le rapport siège est un document de pilotage opérationnel : le coordinateur doit pouvoir savoir où intervenir cette semaine. Il tolère le jargon interne, le détail granulaire, et attend des recommandations d'action concrètes.",
      "Le rapport bailleur répond à une question différente : l'argent confié a-t-il été géré selon les règles convenues ? Il exige un cadrage explicite de conformité et beaucoup moins de détail opérationnel interne.",
    ],
    highlight: "Les deux rapports partent pourtant des mêmes données sous-jacentes : une seule base de données propre, deux narrations différentes, construites pour deux décideurs différents.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'KPI (Key Performance Indicator)', definition: "Un indicateur choisi précisément parce qu'il doit déclencher une décision — pas n'importe quel chiffre disponible." },
      { term: 'Lead time', definition: "Délai réel entre le déclenchement d'un besoin et sa satisfaction effective, mesuré en jours calendaires sur le terrain." },
      { term: 'Compliance rate', definition: "Taux de conformité procédurale d'un échantillon d'achats ou d'opérations, central dans tout audit bailleur." },
      { term: '« So what »', definition: "La question que doit toujours anticiper un tableau de bord — au-delà du chiffre, quelle décision recommandez-vous ?" },
      { term: 'SITREP (situation report)', definition: "Rapport d'avancement mensuel, plus court et plus fréquent que le rapport bailleur, limité à un point par domaine (stocks, RH, achats, transport, finance)." },
    ],
  },
  {
    type: 'process',
    title: 'De la donnée brute au rapport, en 7 étapes',
    steps: [
      { title: 'Rassembler les données brutes', body: "Registres d'achats et mouvements de stock de la période ; extrayez-les via Power Query si votre organisation utilise un ERP, plutôt que de les ressaisir manuellement." },
      { title: 'Structurer les données dans l\'onglet dédié', body: "Collez vos données dans tableau-de-bord-kpi-supply-chain.xlsx en respectant strictement les colonnes existantes." },
      { title: 'Vérifier que les 3 KPI se calculent correctement', body: "Ils doivent s'afficher automatiquement par formules ; une erreur vient presque toujours d'une catégorie mal orthographiée ou d'une date manquante, jamais de la formule elle-même." },
      { title: 'Lire la synthèse par catégorie et par période', body: "C'est là que vous repérez si un problème est généralisé ou localisé — un taux de rupture global stable peut cacher une rupture chronique sur une seule catégorie critique." },
      { title: 'Interpréter chaque KPI et écrire la décision qu\'il déclenche', body: "Avant même de rédiger un rapport, notez la cause probable et l'action proposée pour chaque KPI qui s'écarte de la tendance habituelle." },
      { title: 'Rédiger les deux rapports distincts', body: "À partir des mêmes chiffres du tableau de bord, remplissez les sections « siège » et « bailleur » — jamais un copier-coller de l'une vers l'autre." },
      { title: 'Préparer la présentation au coordinateur', body: "Pour chaque KPI qui dérive, préparez une réponse claire à la question « so what » : que recommandez-vous pour le mois suivant ?" },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Publier un KPI sans tendance ni contexte historique — un chiffre isolé de son évolution est une invitation à mal l'interpréter.",
      "Envoyer le même rapport aux deux audiences — ni le bailleur ni le siège n'y trouvent ce qu'ils cherchent.",
      "Présenter des données sans recommandation claire (« so what »).",
      "Confondre « en rupture aujourd'hui » et « a connu une rupture ce mois-ci » — deux définitions à ne jamais mélanger d'un mois à l'autre.",
      "Laisser le tableau de bord dépendre d'une seule personne, sans documenter la méthode de mise à jour dans le fichier lui-même.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — Fin de mois à Maiduguri, Nigeria',
    scenario: "Le même jour, le siège attend le tableau de bord KPI mensuel et un bailleur majeur attend son rapport de conformité trimestriel, avant une mission d'audit annoncée. Les données du mois montrent : un taux de rupture passé de 4 % à 11 % sur les kits d'hygiène, concentré sur l'entrepôt secondaire ; un délai d'approvisionnement passé de 24 à 38 jours à cause d'un retard de dédouanement documenté ; un taux de conformité stable à 96 %, avec deux dérogations d'urgence correctement justifiées et archivées.",
    steps: [
      "Ne jamais publier un KPI sans sa tendance récente et son contexte historique.",
      "Rédiger deux rapports distincts à partir des mêmes chiffres — jamais un copier-coller de l'un vers l'autre.",
      "Cadrer explicitement la conformité pour le bailleur (justification des dérogations), sans reproduire le détail opérationnel interne.",
      "Formuler pour chaque écart une recommandation claire (« so what ») pour le mois suivant.",
    ],
  },
  {
    type: 'exercise',
    title: 'Tableau de bord et double rapport',
    instructions: "Complétez tableau-de-bord-kpi-supply-chain.xlsx avec des données simulées cohérentes avec le cas de Maiduguri, et vérifiez que les 3 KPI se calculent par formules, sans aucune valeur codée en dur. Rédigez ensuite, dans gabarit-rapport-bailleur-vs-rapport-siege.docx, la section « rapport interne siège » en expliquant la cause probable de chaque écart et une action corrective, puis la section « rapport de conformité bailleur » en cadrant explicitement la justification des dérogations, sans reproduire le détail opérationnel interne.",
    deliverable: "Le tableau de bord complété et les deux sections du rapport, cohérentes entre elles mais clairement différenciées dans leur structure et leur ton.",
  },
  {
    type: 'recap',
    items: [
      "Je sais définir et calculer correctement les 3 KPI supply chain clés avec leur formule exacte.",
      "Je sais expliquer, pour chaque KPI, au moins une cause probable de dérive et l'action qu'elle doit déclencher.",
      "J'ai construit un tableau de bord Excel où les 3 KPI se calculent par formules, sans valeur codée en dur.",
      "Je sais expliquer au moins trois différences structurelles entre un rapport bailleur et un rapport siège.",
      "Je sais formuler une recommandation « so what » pour chaque KPI présenté à un coordinateur.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez parcouru l'intégralité des 9 modules de la Formation en Supply Chain Management Humanitaire, du cycle d'achat jusqu'au pilotage par les données. Un Supply Chain Manager qui sait aussi transformer ces données en décisions lisibles pour un coordinateur et en redevabilité crédible pour un bailleur ne reste plus un simple exécutant compétent : c'est cette dernière compétence qui distingue un profil senior sur le marché humanitaire. Votre attestation de formation certifie cette maîtrise complète — la base sur laquelle repose désormais votre pratique de terrain.",
  },
]
