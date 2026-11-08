// Module 08 — Systèmes ERP Humanitaires — SAP, LINK & Power Query
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Style aligné sur la référence de la formation IA (module 01).
export default [
  {
    type: 'cover',
    title: 'Systèmes ERP Humanitaires — SAP, LINK & Power Query',
    hook: "Chaque ONG utilise un ERP différent — SAP ici, LINK ailleurs, un système maison chez la suivante. La compétence qui reste utile toute une carrière n'est pas de savoir cliquer sur tel logiciel précis : c'est de savoir extraire, comprendre et nettoyer les données qui en sortent. C'est exactement ce que ce module vous apprend à faire, quel que soit l'outil que vous rencontrerez ensuite.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer ce qu'un ERP (Enterprise Resource Planning, le logiciel de gestion intégrée utilisé par la plupart des grandes ONG) standardise réellement dans une chaîne supply humanitaire, et pourquoi ça compte pour votre travail quotidien.",
      "Décrire le fonctionnement d'un workflow d'approbation type SAP/LINK, du besoin exprimé à l'actif enregistré.",
      "Reconnaître, dans un export de données ERP, les défauts qui rendent un rapport non fiable (doublons, dates incohérentes, devises mélangées).",
      "Nettoyer et transformer un export ERP brut avec Power Query — l'outil de nettoyage et de transformation de données intégré à Excel — pour produire un jeu de données exploitable.",
      "Construire un pipeline de reporting reproductible, documenté, que n'importe quel collègue peut relancer après vous.",
    ],
  },
  {
    type: 'concept',
    title: "Ce qu'un ERP standardise réellement",
    body: [
      "Un ERP n'est pas d'abord un logiciel : c'est une discipline organisationnelle mise sous contrainte informatique. Il impose une source unique de vérité — une seule ligne de commande, un seul statut, visible et modifiable selon des droits définis, par tout le monde en même temps.",
      "Il apporte aussi une piste d'audit (audit trail) : chaque action laisse une trace — qui a créé la demande d'achat, qui l'a validée, à quelle date. En contexte humanitaire, où les bailleurs peuvent auditer un projet des mois après sa clôture, cette traçabilité protège l'organisation, et vous personnellement, en cas de contestation.",
    ],
    highlight: "Ce que retient un ERP : le workflow d'approbation, le registre des actifs, l'historique des mouvements. Ce qu'il ne retient PAS automatiquement : la qualité des données saisies en amont.",
  },
  {
    type: 'process',
    title: "Le workflow d'approbation type SAP/LINK",
    steps: [
      { title: "Demande d'achat (Purchase Request, PR)", body: "Un besoin est exprimé par un programme, avec quantité, spécification et budget associé." },
      { title: 'Vérification budgétaire automatique', body: "Le système bloque ou alerte si la ligne budgétaire n'a plus de disponible, avant même qu'un humain n'intervienne." },
      { title: "Workflow d'approbation à seuils", body: "La demande remonte vers un ou plusieurs valideurs selon le montant, configuré une fois pour toutes dans le système, sans exception." },
      { title: 'Génération du bon de commande (Purchase Order, PO)', body: "Une fois la demande validée, avec engagement automatique du budget correspondant." },
      { title: 'Réception et rapprochement (Goods Receipt)', body: "L'entrée en stock ou en actif est enregistrée et rapprochée de la commande initiale ; un écart déclenche une alerte." },
      { title: 'Registre des actifs (Asset Register)', body: "Pour tout bien durable, une fiche unique (numéro, localisation, responsable, valeur) mise à jour à chaque mouvement." },
    ],
  },
  {
    type: 'stat-callout',
    stat: '60-80 %',
    caption: "Le temps qu'un analyste consacre en moyenne à nettoyer des données mal formatées, plutôt qu'à les analyser.",
    context: "En contexte humanitaire, la rotation du personnel de saisie, les connexions instables et la multiplicité des devises amplifient ce problème.",
  },
  {
    type: 'concept',
    title: 'La compétence transférable n\'est pas de savoir cliquer sur un ERP précis',
    body: "Chaque ONG a son propre ERP — SAP, LINK, un système propriétaire interne, un outil sur mesure. Une compétence apprise comme une séquence de clics propre à un seul logiciel devient obsolète le jour où vous changez d'employeur, ce qui arrive statistiquement tous les 2 à 3 ans dans le secteur. Ce qui reste transférable, c'est votre capacité à extraire, comprendre et nettoyer les données qui en sortent : tous les ERP exportent au final vers des formats tabulaires (CSV, Excel).",
    highlight: "Un logisticien senior qui maîtrise Power Query peut reprendre un export de n'importe quel ERP, de n'importe quelle ONG, et en tirer un rapport propre en une heure.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PR / PO', definition: "Purchase Request (demande d'achat) et Purchase Order (bon de commande) — les deux documents pivots du workflow achats dans tout ERP." },
      { term: 'Asset Register', definition: 'Registre des actifs, la base de données ERP qui trace chaque bien durable de l\'organisation.' },
      { term: 'Audit trail', definition: "Piste d'audit, l'historique complet et non modifiable des actions effectuées dans le système." },
      { term: 'ETL (Extract, Transform, Load)', definition: "Le principe derrière Power Query : extraire une donnée brute, la transformer selon des règles reproductibles, la charger dans un format exploitable." },
      { term: 'Source unique de vérité', definition: "Le principe selon lequel une seule version d'une donnée fait foi dans toute l'organisation, éliminant les versions contradictoires." },
    ],
  },
  {
    type: 'process',
    title: "D'un export ERP brut à un rapport fiable",
    steps: [
      { title: 'Ouvrir Power Query sur le fichier brut, sans toucher la source', body: 'Power Query travaille sur une copie transformée ; le fichier source reste intact et consultable en cas de litige.' },
      { title: 'Identifier et supprimer les doublons', body: "Sur un critère d'unicité rigoureux (numéro de PO + référence article), jamais sur l'ensemble du tableau. Consignez le nombre de doublons repérés." },
      { title: 'Harmoniser les formats de date', body: "Repérez les valeurs incohérentes, spécifiez explicitement la locale d'origine ; en cas de doute réel, remontez à la source plutôt que de trancher au hasard." },
      { title: 'Normaliser les devises', body: "Uniformisez les libellés, appliquez un taux de change de référence documenté, et ajoutez toujours une colonne « montant converti » sans écraser le montant original." },
      { title: 'Documenter chaque étape de transformation', body: "Ajoutez un encart « Notes de transformation » : doublons supprimés, formats de date traités, taux de change utilisé et sa source." },
      { title: 'Charger, construire le rapport, puis actualiser le mois suivant', body: "Une fois les données propres, construisez le rapport. Le mois suivant, remplacez le fichier source et cliquez sur Actualiser tout — sans refaire les étapes précédentes." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Faire confiance aux données ERP sans valider l'exhaustivité de l'export — filtres actifs par défaut, plage de dates restreinte.",
      "Ressaisir manuellement au lieu d'utiliser Power Query — une fausse économie, source d'erreurs et non reproductible.",
      "Ne pas documenter les étapes de transformation, ce qui devient un problème le jour où vous êtes absent ou changez de poste.",
      "Supprimer des doublons sans vérifier qu'il s'agit bien de doublons — un critère d'unicité rigoureux, pas une simple ressemblance visuelle.",
      "Convertir les devises avec un taux improvisé plutôt que le taux de référence officiellement adopté par la mission.",
      "Présenter un rapport sans signaler les données manquantes ou incertaines.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — Le rapport de fin de mois, base de Bunia',
    scenario: "Un export ERP de 140 lignes doit devenir, en 3 jours, le rapport mensuel de statut des achats. Une dizaine de lignes semblent être des doublons sans certitude, la colonne date mélange deux formats, les montants sont en USD, US$, CDF (franc congolais) et € pour un fournisseur basé à Kampala, et trois lignes n'ont ni date de réception ni statut renseigné.",
    steps: [
      "Vérifier d'abord que l'export couvre bien toute la période et tout le périmètre attendus, avant de nettoyer quoi que ce soit.",
      "Identifier les doublons sur un critère rigoureux (numéro de PO), pas sur une simple ressemblance visuelle entre lignes.",
      "Traiter les formats de date ambigus en vérifiant la source plutôt qu'en devinant.",
      "Convertir toutes les devises vers une devise unique avec le taux de référence officiel de la mission, sans écraser les montants originaux.",
      "Signaler explicitement les lignes incomplètes plutôt que de les intégrer silencieusement dans le total.",
    ],
  },
  {
    type: 'exercise',
    title: 'Nettoyage Power Query et rapport ERP mensuel',
    instructions: "Ouvrez guide-extraction-nettoyage-power-query.xlsx et reproduisez la logique de nettoyage (doublons, dates, devises) sur un jeu de données équivalent au cas de Bunia. Documentez dans l'onglet « Notes de transformation » vos décisions pour chaque ligne dupliquée, le taux de change utilisé et sa source, et votre traitement des trois lignes incomplètes. Remplissez ensuite gabarit-rapport-erp-mensuel.docx avec les chiffres consolidés et une section « anomalies détectées ».",
    deliverable: "Le classeur de nettoyage complété et le rapport d'une à deux pages, prêts pour la réunion de coordination.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qu'un ERP standardise (source unique de vérité, piste d'audit) et pourquoi ça protège l'organisation et moi-même.",
      "Je sais décrire, dans l'ordre, les grandes étapes d'un workflow d'approbation ERP type.",
      "Je comprends pourquoi la compétence transférable est le nettoyage de données, pas la maîtrise boutons-par-boutons d'un ERP donné.",
      "Je sais identifier et supprimer des doublons sur un critère d'unicité rigoureux, harmoniser des dates et normaliser des devises mixtes.",
      "Je documente systématiquement mes étapes de transformation pour qu'un collègue puisse reproduire mon rapport.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 09 — KPIs, Reporting & Tableau de Bord Supply Chain : transformer vos données en décisions et en rapports pour le siège et les bailleurs.',
  },
]
