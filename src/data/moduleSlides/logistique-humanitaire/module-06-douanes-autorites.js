// Module 06 — Coordination, Autorités & Gestion des Douanes
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Coordination, Autorités & Gestion des Douanes',
    hook: "Plus de la moitié des retards critiques d'un pipeline logistique humanitaire se jouent au moment du dédouanement ou dans une interaction ratée avec une autorité. Ce module vous montre comment préparer un dossier qui passe la frontière du premier coup.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer le principe d'un accord d'exonération douanière humanitaire (qui exempte les biens à usage humanitaire des droits de douane) et ce qu'il couvre réellement, et ce qu'il ne couvre pas.",
      "Préparer un dossier de dédouanement humanitaire (l'ensemble des documents nécessaires pour faire entrer légalement une marchandise dans un pays) sans erreur de cohérence documentaire avant l'arrivée de la marchandise à la frontière.",
      "Distinguer une interaction avec une autorité civile d'une interaction avec une autorité militaire, et adapter votre posture en conséquence.",
      "Négocier un passage de checkpoint (poste de contrôle sur une route) en restant dans le cadre des principes humanitaires, sans céder sur le fond ni bloquer inutilement sur la forme.",
      "Documenter et faire remonter un litige douanier ou une réclamation de marchandise de façon exploitable par votre coordination.",
    ],
  },
  {
    type: 'concept',
    title: "La douane n'est pas un détail administratif",
    body: "Un logisticien junior voit le dédouanement comme une formalité gérée par \"l'agent en douane\" pendant que lui s'occupe de choses plus sérieuses. Après 25 ans de terrain, la réalité est inverse : plus de la moitié des retards critiques sur un pipeline logistique humanitaire — ceux qui font manquer une deadline médicale, périmer un stock ou perdre la confiance d'un bailleur — se jouent au moment du dédouanement ou dans une interaction ratée avec une autorité.",
  },
  {
    type: 'concept',
    title: "Le principe des accords d'exonération douanière humanitaire",
    body: "Dans la majorité des contextes, il existe un accord-cadre bilatéral entre le gouvernement hôte et la communauté humanitaire (un Memorandum of Understanding avec l'ONU, ou un accord de siège — Host Country Agreement — pour une organisation donnée). Cet accord établit le principe de la franchise douanière : les biens importés dans un but strictement humanitaire (médicaments, matériel médical, articles non-alimentaires, véhicules de secours) sont exemptés de droits de douane et souvent de TVA à l'importation.",
    highlight: "L'exonération n'est pas un droit qui s'applique tout seul à la frontière. C'est un statut que votre organisation doit avoir obtenu et documenté AVANT que la marchandise n'arrive, et qu'il faut prouver dossier par dossier.",
  },
  {
    type: 'warning',
    title: "Ce qu'un accord d'exonération ne fait PAS automatiquement",
    items: [
      "Il ne vous dispense jamais de déclarer la marchandise — l'exonération porte sur le paiement des droits, pas sur l'obligation de dépôt d'un dossier douanier complet.",
      "Il ne couvre généralement pas les biens à double usage (véhicules à usage commercial possible, équipement de télécommunication) sans autorisation complémentaire d'un autre ministère.",
      "Il n'est pas automatiquement reconnu au poste-frontière local si votre organisation n'a pas, en amont, enregistré son statut et obtenu son propre certificat d'exonération auprès de l'autorité douanière nationale.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi la paperasse doit être parfaite avant l'arrivée à la frontière",
    body: "Un dossier douanier incomplet ou incohérent, préparé \"on verra sur place, on ajustera\", se traduit systématiquement par un blocage de plusieurs jours à plusieurs semaines. La cohérence se joue en particulier sur le code HS (Harmonized System, le code international qui classe chaque type de marchandise) : s'il ne correspond pas exactement entre la demande d'exonération, la liste de colisage et la facture, l'agent des douanes a une raison légitime de bloquer le dossier, même sur un envoi humanitaire urgent.",
    highlight: "Un poste-frontière n'est pas un lieu où l'on négocie un dossier — c'est un lieu où l'on présente un dossier déjà validé en amont, depuis un bureau, pas devant un camion qui immobilise un chauffeur et un stock à risque.",
  },
  {
    type: 'comparison-table',
    title: 'Autorités civiles et autorités militaires : deux logiques différentes',
    columns: ['', 'Autorité civile', 'Autorité militaire / de sécurité'],
    rows: [
      ['Base légale', "Réglementation administrative, douanière, fiscale — un cadre écrit et stable", "Ordre opérationnel du moment, souvent verbal, qui peut changer d'un jour à l'autre"],
      ['Ce qui fonctionne', "Références précises aux textes, documents complets et cohérents", "Relation de confiance construite dans la durée, communication claire du caractère strictement humanitaire de la cargaison"],
      ['Le piège classique', "Traiter l'agent des douanes comme un obstacle plutôt qu'un interlocuteur régulier", "Traiter un checkpoint comme une négociation ponctuelle isolée, sans relation préexistante"],
    ],
  },
  {
    type: 'concept',
    title: 'Les checkpoints : une réalité opérationnelle récurrente, pas une exception',
    body: "Dans la quasi-totalité des contextes d'intervention (Est de la RDC, Nord du Tchad, Soudan du Sud, Nord du Nigeria), les checkpoints font partie du paysage logistique normal — au même titre qu'un péage ailleurs. Leur négociation repose sur les mêmes 4 principes humanitaires vus au Module 01 : humanité et impartialité (la cargaison est présentée pour ce qu'elle est, jamais liée à un camp), neutralité (aucune concession qui pourrait laisser penser que l'organisation prend parti), indépendance (documenter toute tentative d'instrumentalisation politique du passage).",
    highlight: "Ce qui fait réellement la différence n'est presque jamais un argument brillant improvisé sur place, mais la relation construite en amont : un contact déjà établi, une présentation systématique aux nouvelles autorités, une trace écrite de chaque interaction précédente.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Franchise douanière', definition: "Exemption des droits de douane et taxes à l'importation accordée à des biens répondant à des critères définis, dans le cadre d'un accord préalable." },
      { term: 'Exonération', definition: "L'acte administratif concret par lequel l'autorité douanière reconnaît, pour un envoi donné, le bénéfice de la franchise douanière." },
      { term: 'Code HS', definition: "Nomenclature douanière internationale codifiant chaque type de marchandise ; sa cohérence entre tous les documents d'un dossier est un point de contrôle systématique." },
      { term: 'Bordereau', definition: "Document récapitulatif qui accompagne une expédition, listant en détail son contenu." },
      { term: 'Manifeste de cargaison', definition: "Document légal déclarant l'intégralité du contenu d'un moyen de transport à l'entrée ou la sortie d'un territoire douanier." },
    ],
  },
  {
    type: 'process',
    title: 'Préparer et suivre un dossier de dédouanement humanitaire de bout en bout',
    steps: [
      { title: 'Ouvrir un dossier avant même le départ de la marchandise', body: "Dans checklist-dedouanement.xlsx, avec un identifiant unique de shipment : les documents les plus longs à obtenir se lancent dès la commande confirmée." },
      { title: 'Lister et vérifier la cohérence des documents requis', body: "Code HS, description et quantités identiques mot pour mot entre tous les documents — le contrôle qui évite le blocage le plus fréquent et le plus évitable." },
      { title: 'Envoyer le dossier complet au transitaire, jamais par fragments', body: "Un dossier envoyé \"par morceaux\" est une des causes les plus fréquentes de dossiers traités en double ou perdus." },
      { title: 'Suivre le statut avec des relances datées', body: "Numéro de dossier, date de dépôt et document précis en attente — jamais une relance générique. Un dossier sans avancée depuis plus de 5 jours ouvrés doit être escaladé." },
      { title: 'Documenter toute interaction avec une autorité', body: "Dans registre-relations-autorites.docx : identité de l'interlocuteur, nature de l'échange, engagements pris de part et d'autre." },
      { title: 'Escalader avec le dossier documenté, jamais à mains vides', body: "Un dossier complet et des relances déjà tracées transforment une plainte générale en dossier actionnable." },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — \"Matériel médical bloqué à la frontière, N'Djamena, Tchad\"",
    scenario: "Un envoi de matériel médical est bloqué depuis 4 jours au poste-frontière, alors qu'un stock critique sera épuisé dans 6 jours. Le transitaire signale : le code HS de la demande d'exonération ne correspond pas à celui de la facture pour la glacière solaire, une autorisation complémentaire du ministère de la Santé est exigée pour les concentrateurs d'oxygène et n'avait pas été anticipée, et le responsable du poste-frontière a changé il y a 3 semaines sans que le transitaire le connaisse encore.",
    steps: [
      "Compléter la checklist de dédouanement en marquant explicitement en attente le code HS à corriger et l'autorisation du ministère de la Santé, avec une date de relance réaliste compte tenu des 6 jours restants.",
      "Vérifier que le tableau de bord signale ce dossier comme à risque.",
      "Rédiger une entrée dans le registre de relations avec les autorités pour le nouveau responsable du poste-frontière, au-delà de ce dossier précis.",
      "Justifier par écrit l'ordre de priorité choisi entre la correction du code HS, l'obtention de l'autorisation ministérielle et la prise de contact avec le nouveau responsable.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Codes HS non alignés entre la demande d'exonération et la liste de colisage — le motif de blocage le plus fréquent et le plus facilement évitable.",
      "Traiter la négociation à un checkpoint ou avec un poste-frontière comme purement informelle — un agent peut être muté du jour au lendemain ; chaque engagement obtenu doit être documenté.",
      "Ne construire la relation avec une autorité qu'au moment où l'on a besoin d'elle — systématiquement plus lent et plus fragile que d'avoir déjà une relation établie avant l'urgence.",
      "Sous-estimer les autorisations complémentaires liées au type de bien — matériel médical, télécommunication et véhicules déclenchent souvent une autorisation d'un second ministère.",
      "Escalader sans dossier documenté — un simple « ça bloque à la douane, on ne sait pas pourquoi » prend plus de temps à résoudre qu'une escalade appuyée sur un dossier complet et daté.",
    ],
  },
  {
    type: 'exercise',
    title: 'Checklist de dédouanement et registre de relations',
    instructions: "À partir du cas de N'Djamena, complétez checklist-dedouanement.xlsx en cochant les documents obtenus et en marquant en attente le code HS et l'autorisation ministérielle, avec une date de relance réaliste. Rédigez ensuite une entrée dans registre-relations-autorites.docx pour le nouveau responsable du poste-frontière : quelle première interaction proposeriez-vous, au-delà de ce dossier, et comment la documenteriez-vous ?",
    deliverable: "Les deux fichiers complétés, avec une justification écrite (5 lignes maximum) de l'ordre de priorité choisi.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce que couvre, et ce que ne couvre pas automatiquement, un accord d'exonération douanière humanitaire.",
      "Je sais pourquoi la cohérence du code HS entre tous les documents d'un dossier est un point de contrôle critique.",
      "Je sais distinguer une interaction avec une autorité civile d'une interaction avec une autorité militaire, et adapter ma posture.",
      "Je sais expliquer pourquoi les checkpoints sont une réalité opérationnelle récurrente à gérer avec méthode, pas un incident exceptionnel.",
      "J'ai complété une checklist de dédouanement et une entrée de registre de relations avec les autorités, exploitables au-delà de l'envoi en cours.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Sécurité, Accès & Gestion des Risques.',
  },
]
