// Module 06 — Distribution & Last-Mile Delivery
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure d'une
// distribution (verrouillage et croisement de la liste, plan logistique,
// dimensionnement du site, jetons et vérification, jour J, gestion de foule,
// documentation en temps réel, PDM, clôture des plaintes du CFM) est déroulée
// étape par étape (une étape par écran), champ par champ dans les templates
// du module, appliquée à un cas fil rouge chiffré, puis résolue
// intégralement et transposée en exercices. Les diapositives trop chargées
// sont découpées automatiquement en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Distribution & Last-Mile Delivery',
    hook: "En trois semaines, de J-10 à J+14, vous allez produire ce qu'un bailleur et une communauté attendent d'un Supply Chain Manager : une liste de bénéficiaires verrouillée et croisée, un plan logistique chiffré (rotations, agents, chronogramme), un site dimensionné avec son circuit de foule, des jetons et un point de vérification, un protocole d'incidents, un suivi post-distribution avec son taux de couverture, et un registre de plaintes clôturé avec action documentée. Chaque étape est déroulée ici, champ par champ, dans les templates du module, sur un cas réel de terrain.",
  },
  {
    type: 'objectives',
    items: [
      "Verrouiller une liste de plus de 1 000 ménages en détectant les doublons internes et en la croisant avec les tours précédents et les autres acteurs du site, en produisant une liste verrouillée, versionnée, et son journal de contrôle.",
      "Calculer les besoins de transport et de personnel d'une distribution dans le template plan-logistique-distribution-pdm.xlsx (onglet Planification), en produisant les rotations de camion, les agents par poste et un chronogramme heure par heure avec marge d'imprévu.",
      "Dimensionner un site de distribution à partir du pic horaire réel, en produisant un plan de site à sens unique (entrée, vérification, distribution, sortie), un dispositif de gestion de foule et une checklist go / no-go à J-1.",
      "Choisir et mettre en place un système de vérification adapté à la taille et au risque du site (jeton numéroté, Kobo/ODK ou les deux), en produisant les jetons, leur registre et un protocole qui isole toute anomalie sans interrompre le flux.",
      "Gérer en temps réel un débordement de foule et un cas de double-passage, puis documenter la journée, en produisant une fiche de comptage horaire, un rapprochement jetons / kits / stock et un journal d'incidents.",
      "Conduire un suivi post-distribution (PDM) sur un échantillon de 60 ménages dans l'onglet PDM, en produisant un taux de couverture calculé, des discrepancy flags expliqués et un plan de mesures correctives daté.",
      "Traiter une plainte du mécanisme de feedback communautaire (CFM) de l'enregistrement à la clôture justifiée dans registre-plaintes-feedback-communautaire.docx, en produisant un registre sans plainte clôturée sans action et une note de tendances.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est la préparation, l'exécution et le contrôle d'une distribution massive, découpés en 9 procédures. À la fin, vous aurez en main huit livrables réutilisables tels quels pour votre prochaine distribution.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé, que vous connaissez depuis le module 01, organise une distribution unique de kits NFI (Non-Food Items) à 1 250 ménages déplacés par les crues, à Gogrial (État du Warrap, Soudan du Sud), le lundi 21 septembre 2026. Le cas résolu de bout en bout est ce jour de distribution ; l'exercice noté du module est le cas de N'Djamena (Tchad) de la source, que vous résoudrez seul.",
    ],
    bullets: [
      "L1 — La liste de bénéficiaires verrouillée et son journal de contrôle (doublons, croisements, décisions).",
      "L2 — Le plan logistique complété dans l'onglet « Planification » de plan-logistique-distribution-pdm.xlsx : rotations, agents, chronogramme.",
      "L3 — Le plan de site, le dispositif de gestion de foule et la checklist go / no-go à J-1.",
      "L4 — Les jetons, leur registre et le dispositif de vérification (Kobo/ODK et secours papier).",
      "L5 — Le protocole d'incidents (foule, double-passage, litige de liste) et le journal d'incidents du jour J.",
      "L6 — La fiche de comptage horaire et le rapprochement de fin de journée (jetons, kits, stock).",
      "L7 — Le suivi post-distribution dans l'onglet « PDM » et son plan de mesures correctives daté.",
      "L8 — Le registre de plaintes registre-plaintes-feedback-communautaire.docx, clôturé avec actions, et la note de tendances.",
    ],
    tip: "Créez dès maintenant un dossier « Distribution Pan-Akon 21-09 » avec un sous-dossier par livrable (L1 à L8). Le jour de la visite du bailleur ou de l'audit, vous ne chercherez rien.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : distribution NFI de Kerowa Santé à Pan-Akon (Gogrial)',
    body: [
      "Début septembre 2026, les crues du Warrap ont chassé des familles vers l'ancien terrain de l'école de Pan-Akon (site fictif), à 6 km de l'entrepôt de Kerowa Santé à Gogrial. Un avenant d'urgence à la convention ECHO finance une distribution unique de kits NFI : 1 250 ménages ciblés, soit environ 7 500 personnes à 6 par ménage. Les 1 300 kits (dont 50 de réserve, conservés à l'entrepôt) viennent du pipeline NFI d'une agence onusienne et ont été réceptionnés à Gogrial le 10 septembre selon la procédure du module précédent.",
      "Le kit pèse 9,0 kg et occupe 0,060 m³ : 1 bâche (2,8 kg), 2 couvertures (2,4 kg), 2 moustiquaires (0,9 kg), 1 natte (1,0 kg) et 1 set de cuisine (1,9 kg). Vous disposez d'un camion de 8 000 kg et 30 m³. La distribution a lieu le lundi 21 septembre 2026 (jour J). Une autre ONG, Horizon Abri (fictive), a distribué des kits d'abri à une partie des ménages du même site fin août.",
    ],
    table: {
      columns: ['Personne (fictive)', 'Fonction', 'Rôle dans cette distribution'],
      rows: [
        ['Vous', 'Supply Chain Manager', 'Verrouillez la liste, planifiez la logistique, validez les rapprochements'],
        ['Peter A.', 'Logisticien terrain (Log Officer)', 'Transport entrepôt → site, contrôle des rotations'],
        ['Achol D.', 'Magasinière', 'Prépare, compte et sort les kits ; compte le retour'],
        ['Garang M.', 'Chef d\'équipe manutention', 'Charge les camions, réapprovisionne les lignes'],
        ['Ayen K.', 'Responsable de distribution (chef de site)', 'Dirige la journée sur le site'],
        ['Akuol P.', 'Chargée de redevabilité (point focal CFM)', 'Boîte à plaintes, numéro dédié, registre de plaintes'],
        ['Dr Rebecca N.', 'Responsable programme', 'Fournit la liste, tranche les cas d\'éligibilité'],
        ['Majok D.', 'Chef de communauté du site', 'Relaie l\'information ; ne modifie jamais la liste'],
        ['Grace M.', 'Coordinatrice pays (Juba)', 'Arbitre les escalades, relation avec ECHO'],
      ],
    },
    pitfall: "Les personnes, les organisations, le site et les chiffres sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces valeurs telles quelles sur votre distribution.",
  },
  {
    type: 'concept',
    title: 'Votre calendrier de J-10 à J+14, procédure par procédure',
    body: "Chaque date du calendrier déclenche une procédure du module. Respectez l'ordre : la liste verrouillée alimente le plan logistique, le plan alimente le site, le site et la liste alimentent les jetons, les jetons alimentent la vérification, et la vérification alimente le PDM et le registre de plaintes.",
    table: {
      columns: ['Quand', 'Événement à Gogrial / Pan-Akon', 'Procédure'],
      rows: [
        ['Ven 11 – Jeu 17 sept (J-10 → J-4)', 'Liste reçue du programme (1 284 lignes), contrôle, croisement, verrouillage le jeudi 17', 'P1'],
        ['Mer 16 – Ven 18 sept (J-5 → J-3)', 'Plan logistique : rotations, agents, chronogramme', 'P2'],
        ['Ven 18 – Sam 19 sept (J-3 → J-2)', 'Visite du site, mesures, plan de circuit', 'P3'],
        ['Sam 19 – Dim 20 sept (J-2 → J-1)', 'Jetons remis aux ménages, tablettes chargées, répétition générale, go / no-go', 'P4'],
        ['Lun 21 sept (J)', 'Distribution : vérification, incidents de foule, comptage en temps réel', 'P5, P6, P7'],
        ['Mer 23 – Lun 28 sept (J+2 → J+7)', 'Suivi post-distribution sur 60 ménages', 'P8'],
        ['Jusqu\'au lun 5 oct (J+14)', 'Clôture justifiée des plaintes, note de tendances', 'P9'],
      ],
    },
    tip: "Inscrivez ces dates dans l'agenda partagé de la mission dès le premier jour. Une distribution planifiée se prépare ; une distribution subie se bâcle sous les yeux de la communauté.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Le dernier maillon : le plus visible, le plus risqué',
    body: [
      "Tout ce qui a été planifié en amont (achat, dédouanement, transport, stockage) se joue en quelques heures sur le point de distribution. C'est le seul moment de la chaîne où l'organisation fait face à des centaines, parfois des milliers de bénéficiaires en même temps, et où tout se passe devant témoins : communauté, autorités, bailleur, parfois médias.",
      "Trois raisons le rendent sensible. La sécurité physique : un rassemblement de personnes vulnérables, en compétition pour des ressources rares dans un espace limité, crée un risque de mouvement de foule qui n'existe nulle part ailleurs. La dignité : files au soleil, absence d'eau ou d'ombre, traitement brusque transforment l'aide en épreuve. La redevabilité publique : favoritisme perçu, rupture en cours de distribution, incident mal géré sont visibles immédiatement.",
    ],
    example: {
      title: 'Pan-Akon, lundi 21 septembre — ce que représente la journée',
      lines: [
        "1 250 ménages ciblés, environ 7 500 personnes, 11 250 kg de marchandises à livrer en une journée.",
        "Environ 780 personnes présentes au même moment au pic (calcul détaillé en procédure 2).",
        "127 agents sur le site, dont 38 dédiés à la seule gestion de foule.",
        "Une seule journée pour réussir : le camion, la liste et la foule ne se rattrapent pas le lendemain.",
      ],
    },
    tip: "Pour juger un incident, posez toujours trois questions : y a-t-il un risque physique ? la dignité des personnes est-elle atteinte ? l'événement est-il visible de la communauté ? Deux « oui » sur trois : escaladez tout de suite.",
  },
  {
    type: 'concept',
    title: 'La chaîne du dernier kilomètre : huit maillons, huit preuves',
    body: "Entre l'entrepôt et le ménage, la marchandise change de mains plusieurs fois. Pour chaque maillon, il existe un document qui prouve qu'il a eu lieu. C'est ce document que le bailleur ou l'auditeur demandera.",
    table: {
      columns: ['Maillon', 'Qui agit (Kerowa)', 'Document de preuve'],
      rows: [
        ['1. Liste de bénéficiaires verrouillée', 'Programme + vous', 'Liste signée, journal de contrôle'],
        ['2. Sortie de l\'entrepôt', 'Achol D.', 'Bon de sortie (DN) signé, par rotation'],
        ['3. Transport entrepôt → site', 'Peter A.', 'Waybill signé à l\'arrivée'],
        ['4. Réception sur le site', 'Log Officer', 'Comptage à l\'arrivée de chaque rotation'],
        ['5. Vérification du bénéficiaire', 'Équipe de vérification', 'Registre Kobo/ODK ou jetons collectés'],
        ['6. Remise du kit', 'Équipe de distribution', 'Compteur de kits par ligne, jetons détachés'],
        ['7. Rapprochement de fin de journée', 'Documentaliste + Log Officer', 'Fiche de comptage, DN retour des kits restants'],
        ['8. Contrôle et redevabilité', 'Vous + Akuol P.', 'Onglet PDM, registre de plaintes'],
      ],
    },
    tip: "Si un maillon n'a pas de preuve, il n'existe pas pour un auditeur. Vous utiliserez cette table pour construire votre rapprochement de fin de journée (procédure 7).",
  },
  {
    type: 'concept',
    title: 'Pourquoi l\'intégrité de la liste de bénéficiaires est non négociable',
    body: [
      "Une liste n'est pas un document administratif : c'est le pare-feu entre une distribution équitable et un détournement. Deux failles reviennent partout. Le double-enregistrement : un ménage s'inscrit plusieurs fois, parfois sous une identité légèrement modifiée, parfois auprès de plusieurs organisations. Il reçoit deux ou trois parts pendant qu'un ménage éligible n'en reçoit aucune. Le détournement par des tiers : une liste partagée trop largement, non verrouillée ou modifiable le jour J permet d'ajouter des bénéficiaires fictifs, souvent contre commission.",
      "Règle opérationnelle : liste verrouillée avant le jour J, croisée avec les tours précédents et, si possible, avec les autres acteurs du site ; toute modification de dernière minute passe par une validation documentée, jamais par une décision orale sur le site.",
    ],
    example: {
      title: 'Ce que coûte une liste non contrôlée à Pan-Akon (valeurs fictives)',
      lines: [
        "Liste reçue : 1 284 lignes. Après contrôle : 21 doublons internes et 13 ménages déjà servis par Horizon Abri, soit 34 lignes à traiter.",
        "34 kits × 9,0 kg = 306 kg détournés de leur objectif ; à 42 EUR le kit, 1 428 EUR.",
        "Plus grave : 34 ménages éligibles de la communauté n'auraient reçu aucun kit, et la communauté l'aurait vu.",
      ],
    },
    pitfall: "Considérer que « la liste vient du programme, donc elle est propre ». Le programme valide l'éligibilité ; c'est à vous de prouver l'unicité des lignes avant que la marchandise ne sorte.",
  },
  {
    type: 'comparison-table',
    title: 'Quel système de vérification choisir selon la taille et le risque du site',
    columns: ['Système', 'Convient quand…', 'Atouts', 'Limites'],
    rows: [
      ['Liste papier + signature ou empreinte', 'Moins de 300 ménages, risque faible, communauté stable', 'Rien à préparer, aucun matériel', 'Doublons détectés trop tard, lecture lente de la liste, falsification de signatures'],
      ['Jetons numérotés prétablis', '300 à 1 500 ménages, pas d\'électricité fiable, tablettes limitées', 'Fonctionne sans électricité, vérification en quelques secondes, filtre la foule en amont', 'Jetons copiables ou échangeables si pas sécurisés ; exige un registre jeton ↔ ménage'],
      ['Kobo Toolbox / ODK', 'Tablettes ou téléphones disponibles, risque de double-passage élevé', 'Recherche rapide, alerte de double-passage, horodatage, export pour le PDM, hors connexion', 'Batterie, formation des agents, dépend de la qualité de la liste chargée'],
      ['Jetons + Kobo/ODK (hybride)', 'Plus de 1 000 ménages ou risque élevé (concurrence entre ONG, tension communautaire, personnes déplacées récentes)', 'Double contrôle : le jeton filtre la foule, Kobo bloque le double-passage', 'Plus de préparation ; un secours papier est indispensable'],
    ],
  },
  {
    type: 'concept',
    title: 'La foule réelle n\'est pas le nombre de ménages ciblés',
    body: [
      "Dimensionner un site sur le seul nombre de ménages est l'erreur la plus fréquente. Le jour J, il y a le représentant de chaque ménage, ses accompagnants (enfants, aidants, personnes âgées), les curieux et les proches. Et surtout, les gens restent : ce qui compte est le nombre de personnes présentes au même moment, pas le nombre servi dans la journée.",
      "Le calcul se fait en quatre lignes. Débit moyen = ménages ÷ heures effectives de distribution. Pic = débit moyen × coefficient de pointe (1,2 à 1,5). Ménages présents = pic × temps de séjour moyen en heures (attente + vérification + remise). Personnes présentes = ménages présents × (1 + accompagnants moyens), majoré de 20 à 30 % pour les curieux.",
    ],
    example: {
      title: 'Pan-Akon — calcul du pic (planification)',
      lines: [
        "Débit moyen : 1 250 ÷ 6,5 h effectives = 193 ménages/h.",
        "Pic : 193 × 1,25 = 240 ménages/h (arrondi).",
        "Ménages présents : 240 × 1,5 h de séjour = 360 ménages.",
        "Personnes : 360 × 1,8 (représentant + 0,8 accompagnant) = 648, +20 % de curieux ≈ 780 personnes.",
      ],
    },
    pitfall: "Dimensionner le site sur le nombre de ménages ciblés (1 250) ou sur les 7 500 personnes ciblées, au lieu des 780 présents simultanés au pic. Dans le premier cas le site est trop petit au moment critique, dans le second vous gaspillez des moyens. Raisonnez toujours sur les présents simultanés.",
  },
  {
    type: 'concept',
    title: 'Dignité et protection sur le site : ce qui fait partie de l\'aide',
    body: "La qualité de l'accueil est une composante de l'aide délivrée, pas un supplément. Elle se traduit en dispositions concrètes, prévues dans le plan et dans le budget, pas décidées sur place.",
    bullets: [
      "Une file prioritaire pour les personnes âgées, les femmes enceintes ou allaitantes, les personnes en situation de handicap et les ménages dirigés par un enfant ou une personne seule : accès sans attente prolongée, kit porté jusqu'à la sortie si nécessaire.",
      "De l'ombre et de l'eau potable dans la zone d'attente, des latrines distinctes pour les femmes et les hommes, un espace d'allaitement.",
      "Un code de conduite signé par tout le personnel, y compris les journaliers : aucune contrepartie demandée ou acceptée, protection contre l'exploitation et les abus sexuels (PSEA).",
      "Des agents qui ne servent pas leur propre famille ni leur propre quartier : affectation par rotation, jamais au bloc de leur communauté.",
    ],
    example: {
      title: 'Pan-Akon — dispositions intégrées au plan',
      lines: [
        "Voie prioritaire à gauche de la file : 7 agents de premiers secours / assistance dédiés à l'accompagnement des personnes vulnérables.",
        "Deux points d'eau de 2 000 litres et un hangar d'ombrage de 120 m² dans la zone d'attente.",
        "Code de conduite lu à haute voix et signé le matin du jour J par les 127 agents.",
      ],
    },
    pitfall: "Prévoir les files prioritaires « au cas où » sans agents dédiés : le jour J, la voie prioritaire est envahie et les personnes vulnérables passent en dernier.",
  },
  {
    type: 'concept',
    title: 'Le CFM : un outil de redevabilité, pas une formalité de conformité',
    body: [
      "Un Complaints and Feedback Mechanism (CFM) donne à chaque bénéficiaire un canal sûr, connu et accessible pour signaler un problème (exclusion injustifiée, comportement d'un agent, distribution incomplète, suspicion de fraude), avec la garantie qu'une réponse documentée sera apportée. Il repose sur trois piliers : l'accessibilité (un canal que les gens connaissent et peuvent utiliser sans risque de représailles), la traçabilité (chaque plainte enregistrée, horodatée, suivie jusqu'à sa clôture) et la clôture justifiée (aucune plainte fermée sans action documentée, même « non fondée après vérification »).",
      "Un CFM bien utilisé remonte des signaux d'alerte précoces : plaintes répétées sur un même point, un même agent, un même quartier. Corriger tôt évite la crise de confiance.",
    ],
    example: {
      title: 'Pan-Akon — les quatre canaux ouverts à J-2',
      lines: [
        "Une boîte à plaintes verrouillée à la sortie du site, vidée chaque soir en présence de deux personnes.",
        "Un numéro dédié gratuit, affiché sur chaque jeton et sur les panneaux du site.",
        "Un point focal communautaire (Akuol P. et deux relais) disponible sur site toute la journée.",
        "Un « desk CFM » à la sortie, hors de portée de la ligne de distribution, pour parler en confidentialité.",
      ],
    },
    pitfall: "Placer la boîte à plaintes à côté des agents de distribution : personne n'osera l'utiliser. Un canal dont on a peur n'est pas un canal.",
  },
  {
    type: 'concept',
    title: 'Le PDM et le taux de couverture : ce que mesure — et ne mesure pas — le suivi',
    body: [
      "Le Post-Distribution Monitoring (PDM) vérifie, après la distribution, que l'aide a atteint les bénéficiaires ciblés dans la quantité et la qualité prévues, et recueille leur retour sur le déroulement. Le taux de couverture est le pourcentage de ménages ciblés effectivement atteints : ménages servis confirmés ÷ ménages ciblés.",
      "Deux sources, deux usages. Le comptage exhaustif du jour J (registre Kobo, jetons collectés) donne le taux de couverture global. L'échantillon PDM (60 ménages dans le template) ne sert pas à recalculer ce taux : il sert à détecter des écarts de quantité, de qualité ou de passage, chacun marqué par un discrepancy flag.",
    ],
    example: {
      title: 'Lecture d\'un échantillon de 60 ménages',
      lines: [
        "60 ménages donnent une indication, pas une mesure précise : au pire, environ ± 12 points de marge d'erreur.",
        "Un seul écart répété sur plusieurs ménages (par exemple « moustiquaire manquante ») indique une cause systémique ; un écart isolé relève du cas par cas.",
        "Seuil de travail : 95 % de couverture le jour J, sauf seuil différent fixé par le programme ou la convention. Sous le seuil, on analyse les causes, on ne se contente pas d'une note.",
      ],
    },
    pitfall: "Annoncer au bailleur « 97 % de satisfaction » à partir de 60 ménages tirés sans méthode. Décrivez toujours la méthode de tirage et la taille de l'échantillon à côté du résultat.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Liste verrouillée', definition: "Version figée de la liste de bénéficiaires, signée, datée, accessible en lecture seule ; toute modification passe par une validation écrite." },
      { term: 'Double-enregistrement', definition: "Inscription d'un même ménage sur plusieurs listes ou sur la même liste sous une identité légèrement modifiée, entraînant une double réception." },
      { term: 'Jeton de distribution', definition: "Coupon numéroté prétabli, remis à chaque ménage avant la distribution et collecté au point de vérification." },
      { term: 'Pic horaire', definition: "Nombre maximal de ménages qui se présentent en une heure ; sert à dimensionner les lignes, les agents et la surface du site." },
      { term: 'Rotation', definition: "Un aller-retour d'un camion entre l'entrepôt et le point de distribution." },
      { term: 'Point de vérification secondaire', definition: "Poste à l'écart de la file où l'on oriente toute anomalie pour la traiter sans interrompre le flux ni exposer la personne." },
      { term: 'Taux de couverture', definition: "Ménages servis confirmés ÷ ménages ciblés ; indicateur clé du PDM." },
      { term: 'Discrepancy flag', definition: "Drapeau « A VERIFIER » levé automatiquement dans l'onglet PDM quand une quantité, une conformité ou un passage est en écart." },
      { term: 'PDM (Post-Distribution Monitoring)', definition: "Suivi réalisé après la distribution pour vérifier que l'aide a atteint les bénéficiaires ciblés, en quantité et qualité prévues." },
      { term: 'CFM (Complaints and Feedback Mechanism)', definition: "Mécanisme structuré de réception, traitement et clôture des plaintes et retours des bénéficiaires." },
      { term: 'Clôture justifiée', definition: "Fermeture d'une plainte accompagnée d'une action documentée (vérification, correction, ou constat de plainte non fondée)." },
      { term: 'Kobo Toolbox / ODK', definition: "Outils de collecte mobile : ils permettent de vérifier un nom sur la liste chargée et d'enregistrer chaque passage, même sans connexion permanente." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — VERROUILLER ET CROISER LA LISTE (J-10 → J-4)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Récupérer la liste finale et contrôler sa structure',
    intro: "Vous ne travaillez jamais dans le fichier du programme : vous en gardez une copie source intacte et vous travaillez sur une copie. Entrées nécessaires : la liste finale validée par le programme, les critères d'éligibilité du ciblage, la date de clôture de l'enregistrement.",
    steps: [
      {
        title: 'Demandez la liste et ses critères par écrit',
        actions: [
          "Écrivez au responsable programme : fichier Excel final (pas un PDF), date de version, nom du validateur, critères d'éligibilité, date de clôture de l'enregistrement.",
          "Demandez en même temps l'accès au nom de l'agent enregistreur de chaque ligne : c'est la colonne qui permettra de remonter une fraude.",
        ],
      },
      {
        title: 'Créez la copie source et la copie de travail',
        actions: [
          "Créez le dossier « L1_Liste » dans « Distribution Pan-Akon 21-09 ».",
          "Copiez le fichier reçu et nommez-le « SOURCE_Liste_programme_2026-09-11.xlsx » ; clic droit > Propriétés > cochez « Lecture seule ».",
          "Faites une seconde copie : « L1_Liste_travail.xlsx ». C'est la seule que vous modifiez.",
        ],
      },
      {
        title: 'Contrôlez la structure colonne par colonne',
        actions: [
          "Vérifiez la présence des colonnes minimales : N° ménage, nom du chef de ménage, sexe, âge ou date de naissance, taille du ménage, téléphone, n° de pièce ou de carte d'enregistrement, bloc ou zone, date d'enregistrement, agent enregistreur.",
          "Comptez les lignes avec =NBVAL(B2:B1500) et notez le résultat dans le journal.",
          "Filtrez chaque colonne sur « (Vides) » : listez les lignes sans N° ménage, sans nom ou sans taille de ménage.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fichier reçu le vendredi 11 septembre à 15 h 40',
      lines: [
        "1 284 lignes, 10 colonnes, validé par Dr Rebecca N., clôture de l'enregistrement le 9 septembre.",
        "Défauts de structure : 38 numéros de téléphone vides, 6 lignes sans taille de ménage, 7 N° ménage au format différent (PAK-12 au lieu de PAK-0012).",
        "Journal L1 ligne 1 : « 11/09 15:40 — fichier reçu, 1 284 lignes, 51 défauts de structure transmis au programme ».",
      ],
    },
    result: "Une copie source protégée, une copie de travail, un nombre de lignes de référence (1 284) et la liste des défauts à faire corriger par le programme.",
    pitfall: "Corriger les défauts directement dans le fichier du programme : vous perdez la trace de ce qui a changé et de qui l'a changé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Normaliser les champs clés et détecter les doublons internes',
    intro: "Deux écritures différentes du même nom ou du même numéro échappent à un simple filtre. Vous créez des colonnes de comparaison normalisées, puis vous comptez les répétitions. Entrées : la copie de travail de l'étape 1.",
    steps: [
      {
        title: 'Créez trois colonnes normalisées',
        actions: [
          "Colonne K « N° normalisé » : =\"PAK-\"&TEXTE(VALEUR(STXT(B2;5;10));\"0000\") puis recopiez vers le bas (PAK-12 devient PAK-0012).",
          "Colonne L « Nom normalisé » : =MAJUSCULE(SUPPRESPACE(SUBSTITUE(C2;\"-\";\" \"))).",
          "Colonne M « Téléphone normalisé » : =DROITE(SUBSTITUE(SUBSTITUE(F2;\" \";\"\");\"+\";\"\");9) (conserve les 9 derniers chiffres).",
          "Mettez la colonne téléphone au format Texte avant de recopier, sinon Excel supprime les zéros initiaux.",
        ],
      },
      {
        title: 'Comptez les répétitions et marquez les lignes suspectes',
        actions: [
          "Colonne N « Test N° » : =NB.SI($K$2:$K$1285;K2) ; colonne O « Test tél. » : =SI(M2=\"\";0;NB.SI($M$2:$M$1285;M2)) ; colonne P « Test nom + bloc » : =NB.SIS($L$2:$L$1285;L2;$H$2:$H$1285;H2).",
          "Colonne Q « Statut contrôle » : =SI(N2>1;\"DOUBLON N°\";SI(O2>1;\"TEL. EN DOUBLE\";SI(P2>1;\"NOM + BLOC\";\"\"))).",
          "Filtrez la colonne Q sur « non vide » et triez par N° normalisé pour voir les paires côte à côte.",
        ],
      },
      {
        title: 'Classez chaque paire en lisant les deux lignes',
        actions: [
          "Doublon exact : même N° normalisé, même chef de ménage → une seule ligne à garder (la plus ancienne).",
          "Doublon probable : même téléphone et noms qui ne diffèrent que par l'ordre ou l'orthographe → à faire vérifier par le programme.",
          "Homonyme : même nom mais bloc, téléphone et composition différents → deux ménages distincts, à conserver avec la mention « homonyme vérifié ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultat du contrôle du lundi 14 septembre',
      lines: [
        "11 doublons exacts (même N° normalisé), dont 4 créés par le même agent enregistreur le 7 septembre.",
        "10 doublons probables (même téléphone, noms inversés : « NYIBOL AGUEK » / « AGUEK NYIBOL »).",
        "4 homonymes vérifiés et conservés (blocs et téléphones différents).",
        "Total à traiter : 21 doublons internes → 1 284 − 21 = 1 263 lignes après décision (étape 4).",
      ],
    },
    result: "Chaque ligne suspecte porte un statut de contrôle, et chaque paire est classée en doublon exact, doublon probable ou homonyme.",
    pitfall: "Supprimer les lignes en double avant d'avoir noté qui les a saisies : quatre doublons créés par le même agent le même jour sont un signal à transmettre au programme, pas une simple erreur de saisie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Croiser la liste avec les tours précédents et les autres acteurs',
    intro: "Une liste « propre » en interne peut encore contenir des ménages déjà assistés par un tour précédent ou par une autre organisation présente sur le site. Entrées : listes des tours précédents de Kerowa sur le même site, liste de l'autre ONG, accord de partage de données.",
    steps: [
      {
        title: 'Demandez les listes à croiser, en minimisant les données',
        actions: [
          "Demandez au programme les listes des tours précédents de Kerowa dans la zone ; s'il n'y en a pas, notez-le au journal (« aucun tour précédent »).",
          "Contactez Horizon Abri via la coordination du site (réunion de coordination ou point focal du cluster) : demandez la liste des ménages servis et la date, avec N° de ménage, nom et téléphone seulement.",
          "Faites valider le partage par votre coordinatrice pays : on ne partage que ce qui sert au croisement, jamais les données de protection.",
        ],
      },
      {
        title: 'Rapprochez les deux listes dans Excel',
        actions: [
          "Importez la liste de l'autre acteur dans un nouvel onglet « Horizon », normalisez téléphone et nom comme à l'étape 2.",
          "Colonne R « Déjà servi ailleurs » : =SI(ESTNUM(EQUIV(M2;Horizon!$M:$M;0));\"DEJA SERVI\";\"\") ; répétez avec le nom normalisé si le téléphone est vide.",
          "Filtrez la colonne R sur « DEJA SERVI », comparez à la main nom, bloc et composition pour écarter les faux positifs.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — croisement avec Horizon Abri (mardi 15 septembre)',
      lines: [
        "Liste d'Horizon Abri : 380 ménages servis en kits d'abri le 28 août sur le site.",
        "17 correspondances par téléphone ; après lecture à la main, 13 vrais ménages déjà servis et 4 homonymes (conservés).",
        "Aucun tour précédent de Kerowa sur ce site : premier passage.",
        "Journal L1 : « 15/09 11:20 — 13 ménages DEJA SERVI (Horizon Abri, 28/08), décision demandée au programme ».",
      ],
    },
    result: "Les ménages déjà assistés ailleurs sont identifiés, avec la source, la date et la qualité de la correspondance (certaine ou à vérifier).",
    tip: "Proposez à l'autre ONG de croiser vos listes dans les deux sens : elle y gagne aussi, et vous installez un réflexe de coordination pour les prochains tours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Faire trancher les cas et documenter chaque décision',
    intro: "Vous détectez, le programme décide : c'est lui qui est garant de l'éligibilité. Votre rôle est de présenter chaque cas avec sa preuve et de consigner la décision, pour qu'aucune ligne ne disparaisse ou ne soit ajoutée sans trace.",
    steps: [
      {
        title: 'Préparez une note de décision d\'une page',
        actions: [
          "Listez les cas par type avec leur nombre et l'impact : « 21 doublons internes, 13 ménages déjà servis, 1 284 → 1 250 lignes ».",
          "Proposez une règle par type (tableau ci-dessous) et demandez une validation écrite au responsable programme.",
        ],
      },
      {
        title: 'Appliquez les décisions et tracez-les',
        actions: [
          "Dans la copie de travail, ne supprimez aucune ligne : renseignez la colonne S « Décision » (Gardé / Retiré / Gardé avec note) et la colonne T « Motif et référence de la décision ».",
          "Après validation, filtrez la colonne S sur « Retiré » et copiez les lignes vers un onglet « Lignes retirées » : la liste finale se déduit, la trace reste.",
          "Faites signer la note de décision par le responsable programme et par vous, puis classez-la avec le journal.",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Décision type', 'Qui tranche', 'Preuve à classer'],
      rows: [
        ['Doublon exact (même N°, même chef de ménage)', 'Retirer la ligne la plus récente', 'Vous, avec visa du programme', 'Note de décision + lignes retirées'],
        ['Doublon probable (même téléphone, noms inversés)', 'Vérifier par appel ou visite du chef de bloc, puis retirer ou garder', 'Programme', 'Compte rendu de vérification'],
        ['Homonyme confirmé distinct', 'Garder avec la mention « homonyme vérifié »', 'Vous', 'Commentaire dans la colonne T'],
        ['Déjà servi par une autre organisation', 'Retirer, ou garder avec kit adapté selon la règle du programme', 'Programme avec la coordinatrice pays', 'Liste de l\'autre acteur + décision écrite'],
        ['Ménage sans téléphone ou sans pièce', 'Garder avec la mention « identité à confirmer au jour J »', 'Programme', 'Mention en colonne T, liste transmise au point secondaire'],
      ],
    },
    example: {
      title: 'Kerowa — décisions du mercredi 16 septembre',
      lines: [
        "21 doublons internes retirés (11 exacts, 10 probables vérifiés par le chef de bloc avec Majok D. présent comme témoin).",
        "13 ménages déjà servis par Horizon Abri retirés : décision de Dr Rebecca N., visa de Grace M., signée le 16/09.",
        "Résultat : 1 284 − 21 − 13 = 1 250 ménages ciblés, valeur qui alimentera la cellule B7 du plan logistique.",
      ],
    },
    result: "Chaque ligne a une décision et un motif ; la liste finale se déduit sans qu'aucune ligne n'ait disparu sans trace.",
    pitfall: "Laisser le chef de communauté décider seul d'un cas litigieux. Il peut éclairer (témoin), pas trancher : la décision d'éligibilité reste au programme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Verrouiller la liste et organiser le circuit des modifications',
    intro: "Verrouiller, c'est rendre impossible une modification silencieuse : la version figée porte une date, une signature et un nombre de lignes, et toute modification ultérieure passe par un journal à deux signatures.",
    steps: [
      {
        title: 'Produisez la version verrouillée',
        actions: [
          "Copiez les lignes « Gardé » dans un nouveau classeur ; ne renumérotez pas : les N° ménage d'origine restent, pour retrouver chaque ménage dans l'enregistrement initial.",
          "Enregistrez sous « L1_Liste_VERROUILLEE_v1_2026-09-17.xlsx » ; Révision > Protéger le classeur, mot de passe détenu par vous seul, copie du mot de passe sous enveloppe chez la coordinatrice pays.",
          "Exportez en PDF et faites signer et dater chaque page par le responsable programme ; vérifiez que le pied de page indique « 1 250 ménages ».",
        ],
      },
      {
        title: 'Créez le journal des modifications et fermez la liste',
        actions: [
          "Ajoutez un onglet « Journal » : Date / heure | N° ménage | Modification demandée | Motif | Demandée par | Validée par (programme + SCM) | Pièce justificative.",
          "Imprimez 3 exemplaires numérotés de la liste (point de vérification, point secondaire, bureau du chef de site) et rangez les clés de chaque exemplaire dans un registre de sortie.",
          "Annoncez par écrit à tous (programme, chef de site, chef de communauté) : « liste close le jeudi 17 septembre à 17 h, toute modification passe par le journal ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — journal de contrôle de la liste (extrait)',
      lines: [
        "11/09 15:40 — Fichier reçu : 1 284 lignes.",
        "14/09 16:30 — Contrôle interne : 21 doublons (11 exacts, 10 probables).",
        "15/09 11:20 — Croisement Horizon Abri : 13 déjà servis, 4 homonymes conservés.",
        "16/09 17:00 — Décisions signées par le programme : 1 250 lignes gardées.",
        "17/09 17:00 — Liste verrouillée v1 (PDF signé, 3 exemplaires numérotés).",
      ],
    },
    result: "Livrable L1 terminé : liste verrouillée (1 250 ménages), journal de contrôle, note de décision signée, circuit de modification en place.",
    pitfall: "Accepter un ajout « urgent » par téléphone ou par message le jour J : c'est exactement la porte que le verrouillage devait fermer. Toute demande passe par le journal, avec deux signatures, avant que le kit ne sorte.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — LE PLAN LOGISTIQUE (J-5 → J-3)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Ouvrir le template et renseigner les paramètres de la distribution',
    intro: "Le template plan-logistique-distribution-pdm.xlsx contient deux onglets : « Planification » (section 1 paramètres à compléter, section 2 besoins de transport calculés, section 3 besoins en personnel, section 4 chronogramme) et « PDM » (que vous utiliserez en procédure 8). Seules les cellules des paramètres se saisissent : les autres sont des formules.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le fichier, enregistrez-le immédiatement sous « L2_Plan_logistique_Pan-Akon.xlsx ».",
          "Allez dans l'onglet « Planification » et repérez les cellules à compléter, sous le titre « 1. PARAMETRES DE LA DISTRIBUTION (A COMPLETER) » (lignes 5 à 11).",
        ],
      },
      {
        title: 'Remplacez les valeurs d\'exemple (colonne B, lignes 5 à 11)',
        actions: [
          "B5 « Site de distribution » : saisissez « Site de déplacés Pan-Akon (Gogrial) » et effacez la mention « (exemple) ».",
          "B6 « Date de distribution » : saisissez 21/09/2026 (format jj/mm/aaaa).",
          "B7 « Ménages cibles » : saisissez 1250, valeur de votre liste verrouillée (nombre de lignes de L1, pas un chiffre estimé). Cette cellule alimente aussi PDM!B5.",
          "B8 « Poids par kit NFI (kg) » : 9 ; B9 « Volume par kit NFI (m3) » : 0,06 ; relevés sur le packing list et la fiche de stock du kit, pas dans un catalogue.",
          "B10 « Capacité camion (kg) » : 8000 ; B11 « Capacité camion (m3) » : 30 ; saisissez la capacité utile confirmée par le transporteur, pas la capacité nominale.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Paramètre', 'Valeur d\'exemple du template', 'Valeur Pan-Akon'],
      rows: [
        ['B5', 'Site de distribution', 'Site de déplacés N\'Djamena (exemple)', 'Site de déplacés Pan-Akon (Gogrial)'],
        ['B6', 'Date de distribution', '14/09/2026', '21/09/2026'],
        ['B7', 'Ménages cibles', '1 800', '1 250'],
        ['B8', 'Poids par kit NFI (kg)', '12', '9'],
        ['B9', 'Volume par kit NFI (m3)', '0,045', '0,060'],
        ['B10 / B11', 'Capacité camion (kg / m3)', '8 000 / 30', '8 000 / 30'],
      ],
    },
    result: "Les sept paramètres reflètent votre distribution, aucune valeur d'exemple n'est restée, et B7 est égal au nombre de lignes de la liste verrouillée.",
    pitfall: "Laisser le site « N'Djamena (exemple) » ou 1 800 ménages dans le fichier : le plan, le PDM (B5) et le taux de couverture sont alors calculés sur le mauvais effectif, sans message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Lire les besoins de transport et décider du nombre de rotations',
    intro: "La section 2 (lignes 14 à 18) se calcule seule. Votre travail est de comprendre quelle contrainte commande le résultat, puis de vérifier que le nombre de rotations tient dans la journée. Entrées : les paramètres de l'étape 1.",
    steps: [
      {
        title: 'Vérifiez les formules sans les modifier',
        actions: [
          "B14 « Poids total à transporter (kg) » : =B7*B8. B15 « Volume total (m3) » : =B7*B9.",
          "B16 « Rotations (contrainte poids) » : =ROUNDUP(B14/B10,0). B17 « Rotations (contrainte volume) » : =ROUNDUP(B15/B11,0).",
          "B18 « ROTATIONS DE CAMION RETENUES (MAX) » : =MAX(B16,B17), cellule verte. Le camion est limité par la contrainte la plus serrée.",
        ],
      },
      {
        title: 'Traduisez le résultat en kits par rotation et en horaires',
        actions: [
          "Calculez les kits par rotation : 30 m³ ÷ 0,060 = 500 kits (volume) contre 8 000 ÷ 9 = 888 kits (poids) : on charge 500 kits.",
          "Calculez le cycle d'une rotation avec Peter A. : trajet aller 30 min + déchargement 30 min + retour 30 min + chargement 30 min = 2 h.",
          "Déduisez les arrivées sur site : 07h00, 09h00 et 11h00 ; vérifiez que le stock tampon sur le site ne descend jamais sous 1 heure de distribution.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Libellé', 'Formule', 'Résultat Pan-Akon'],
      rows: [
        ['B14', 'Poids total à transporter (kg)', 'B7*B8', '11 250 kg'],
        ['B15', 'Volume total à transporter (m3)', 'B7*B9', '75,0 m³'],
        ['B16', 'Rotations (contrainte poids)', 'ROUNDUP(B14/B10,0)', '2'],
        ['B17', 'Rotations (contrainte volume)', 'ROUNDUP(B15/B11,0)', '3'],
        ['B18', 'Rotations de camion retenues (MAX)', 'MAX(B16,B17)', '3'],
      ],
    },
    example: {
      title: 'Pan-Akon — lecture du résultat',
      lines: [
        "Le poids ne demanderait que 2 rotations, mais le volume en exige 3 : kits volumineux (bâches, couvertures, nattes), c'est le volume qui commande.",
        "3 rotations = 500 + 500 + 250 kits = 1 250 kits ; arrivées à 07h00, 09h00 et 11h00.",
        "Plan B à écrire dans la note du chrono : camion de réserve disponible sous 2 heures chez le transporteur (Peter A. confirme par message).",
      ],
    },
    result: "Le nombre de rotations est retenu, chaque rotation a une quantité et une heure d'arrivée, et un plan B existe en cas de panne.",
    pitfall: "Calculer les rotations sur le seul poids : avec des kits volumineux, vous commandez 2 rotations au lieu de 3 et le dernier tiers de la population attend un camion qui n'existe pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Estimer le débit, le pic horaire et le nombre de lignes',
    intro: "Le template ne contient pas de cellule « pic horaire » : vous faites ce calcul dans une feuille de brouillon de votre classeur (onglet à part, hors des onglets du template) et vous en reportez les conséquences dans les ratios de la section 3 et dans le chronogramme.",
    steps: [
      {
        title: 'Calculez le débit et le pic',
        actions: [
          "Heures effectives de distribution : 08h00–12h00 (4 h) + 12h30–15h00 (2,5 h) = 6,5 h.",
          "Débit moyen = 1 250 ÷ 6,5 = 193 ménages/h ; pic = 193 × 1,25 (coefficient de pointe pour une distribution par vagues) = 240 ménages/h.",
          "Présents simultanés = 240 × 1,5 h de séjour = 360 ménages ; × 1,8 personnes = 648 ; +20 % de curieux ≈ 780 personnes.",
        ],
      },
      {
        title: 'Dimensionnez les lignes sur le poste le plus lent',
        actions: [
          "Divisez le pic par le débit d'une ligne : 240 ÷ 30 ménages/h (une ligne de distribution sert 1 ménage toutes les 2 minutes) = 8 lignes de distribution.",
          "Faites de même pour la vérification : 240 ÷ 60 (1 minute par ménage, 4 agents) = 4 lignes minimum ; retenez 6 pour la marge et les pannes de tablette.",
          "Vérifiez le débit d'ensemble : il est celui du poste le plus lent, ici la distribution (240/h). Les vagues de couleur (étape 5) empêchent la vérification de déverser plus que ce que la distribution absorbe.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Débit d\'une ligne', 'Pic à absorber', 'Lignes mini', 'Lignes retenues'],
      rows: [
        ['Vérification (Kobo + jeton)', '60 ménages/h', '240/h', '4', '6'],
        ['Distribution (remise du kit)', '30 ménages/h', '240/h', '8', '8'],
        ['Point de vérification secondaire', 'cas par cas', '5 à 10 % du flux', '1', '1 (1 agent dédié)'],
      ],
    },
    result: "Pic à 240 ménages/h, 780 personnes présentes, 6 lignes de vérification et 8 lignes de distribution : ces chiffres guident les ratios de personnel et la surface du site.",
    tip: "Gardez la capacité théorique et comparez-la au besoin : 6,5 h × 240 = 1 560 ménages servibles pour 1 250 à servir, soit +25 % de marge. Sans marge, la première panne vous fait dépasser 15 h.",
    pitfall: "Dimensionner la vérification plus vite que la distribution : la file se déplace de l'entrée vers la zone de remise, où elle s'entasse. C'est le poste le plus lent qui fixe le rythme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Dimensionner le personnel dans la section 3 du template',
    intro: "La section 3 (lignes 21 à 27) donne, pour chaque poste, un ratio d'agents pour 100 ménages (colonne B, modifiable) et le nombre d'agents nécessaires (colonne C, calculé). Les cinq postes sont : vérification des bénéficiaires, distribution physique, gestion de foule et sécurité du site, premiers secours, supervision et coordination.",
    steps: [
      {
        title: 'Choisissez le ratio de chaque poste',
        actions: [
          "Gardez les ratios par défaut de B22 à B26 (2, 3, 2, 1, 1) sauf raison documentée.",
          "Relevez le ratio de la gestion de foule (B24) si le site est ouvert, si la saison est difficile (pluie, boue), si plusieurs organisations distribuent ou si un incident a déjà eu lieu : 2 de base, 3 à 4 pour un site à risque.",
          "Notez en commentaire de la cellule B24 (clic droit > Nouveau commentaire) la raison du changement.",
        ],
      },
      {
        title: 'Lisez le résultat et répartissez les agents',
        actions: [
          "C22 à C26 : =ROUNDUP($B$7/100*B22,0), arrondi à l'agent supérieur. C27 « TOTAL AGENTS NECESSAIRES » : =SUM(C22:C26).",
          "Répartissez chaque poste en lignes et fonctions (tableau ci-dessous) et vérifiez que la somme de la répartition est égale à la colonne C.",
          "Distinguez les agents Kerowa (31) et les journaliers recrutés pour la journée (96), et prévoyez le code de conduite pour tous.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Ratio B', 'Agents C', 'Répartition'],
      rows: [
        ['Vérification bénéficiaires (liste / Kobo-ODK)', '2', '25', '6 lignes × 4 + 1 agent au point secondaire'],
        ['Distribution physique des kits', '3', '38', '8 lignes × 4 + 6 réapprovisionnement / manutention'],
        ['Gestion de foule / sécurité du site', '3 (relevé de 2)', '38', '6 entrée + 12 aire d\'attente + 12 circuit + 4 sortie + 4 réserve mobile'],
        ['Premiers secours', '1', '13', '2 poste fixe + 4 mobiles + 7 assistance aux personnes vulnérables'],
        ['Supervision / coordination générale', '1', '13', 'Chef de site, adjoint, resp. vérification, resp. distribution, Log Officer, documentaliste, 2 CFM, 3 liaison communauté, 1 liaison sécurité, 1 comptage'],
        ['TOTAL AGENTS NECESSAIRES', '', '127', '31 agents Kerowa + 96 journaliers'],
      ],
    },
    result: "Les 127 agents sont répartis par ligne et par fonction, avec le motif du ratio relevé sur la foule, et la somme de la répartition est égale au total C27.",
    pitfall: "Confondre le nombre d'agents et le nombre de lignes : 25 agents de vérification, ce sont 6 lignes de 4 plus 1 agent au point secondaire, pas 25 postes de contrôle. Sans répartition écrite, chacun improvise le jour J.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Compléter le chronogramme de la journée (section 4)',
    intro: "La section 4 (lignes 30 à 44) comporte quatre colonnes : Heure, Activité, Responsable, Notes. Les lignes 31 à 38 contiennent une journée type ; les lignes 39 à 44 sont libres (« A completer »). Vous adaptez la journée type à votre site et vous remplissez les six lignes libres.",
    steps: [
      {
        title: 'Adaptez les lignes pré-remplies',
        actions: [
          "Gardez les 8 lignes types (06h00, 07h00, 07h30, 08h00–12h00, 12h00–12h30, 12h30–15h00, 15h00, 15h30).",
          "Corrigez la ligne 36 : les 2e et 3e rotations sont déjà arrivées à 09h00 et 11h00 ; écrivez « Reprise distribution (vague Jaune) puis rattrapage 14h00–15h00 ».",
          "Renseignez la colonne D de la ligne 34 : « Rouge 08h00, Bleu 09h30, Vert 11h00 ; marge d'imprévu incluse ».",
        ],
      },
      {
        title: 'Remplissez les six lignes libres et triez',
        actions: [
          "Lignes 39 à 44 : ajoutez 05h30 (briefing), 09h00 (2e rotation), 10h00 (point de situation), 11h00 (3e rotation), 16h30 (rapatriement du stock), 17h00 (rapprochement).",
          "Remplacez chaque « A completer » : aucune cellule ne doit conserver ce libellé.",
          "Sélectionnez A31:D44, Données > Trier par colonne A (de A à Z) pour que la journée se lise dans l'ordre.",
        ],
      },
    ],
    table: {
      columns: ['Heure', 'Activité', 'Responsable', 'Notes'],
      rows: [
        ['05h30', 'Briefing équipe : rôles, signaux d\'alerte, code de conduite signé', 'Chef de site', 'Avant l\'arrivée des ménages'],
        ['06h00', 'Arrivée équipe, montage site, balisage circuit', 'Chef de site', 'Marquage vérifié avec le plan de site'],
        ['07h00', 'Arrivée 1re rotation (500 kits), contrôle marchandise', 'Log Officer', 'Comptage contradictoire'],
        ['07h30', 'Ouverture site, début vérification (vague Rouge)', 'Équipe vérification', 'Tablettes testées à 07h00'],
        ['08h00 - 12h00', 'Distribution continue par vagues', 'Équipe distribution', 'Rouge 08h00, Bleu 09h30, Vert 11h00'],
        ['09h00', '2e rotation (500 kits)', 'Log Officer', 'Stock tampon ≥ 1 h'],
        ['10h00', 'Point de situation : débit réel vs 240/h, file, incidents', 'Chef de site', 'Décision d\'ouvrir une ligne en renfort'],
        ['11h00', '3e rotation (250 kits)', 'Log Officer', 'Camion de réserve en alerte'],
        ['12h00 - 12h30', 'Pause équipe (rotation, site jamais laissé sans supervision)', 'Chef de site', 'Moitié de l\'équipe en pause à la fois'],
        ['12h30 - 15h00', 'Reprise (vague Jaune) puis rattrapage 14h00–15h00', 'Équipe distribution', 'Marge imprévu 1 h'],
        ['15h00', 'Clôture vérification, comptage stock restant', 'Log Officer', ''],
        ['15h30', 'Debriefing incidents et plaintes du jour', 'Chef de site', 'Voir registre plaintes'],
        ['16h30', 'Rapatriement du stock restant, DN retour signé', 'Log Officer', 'Comptage avec Achol D.'],
        ['17h00', 'Rapprochement jetons / kits / Kobo, fiche signée', 'Documentaliste', 'Livrable L6'],
      ],
    },
    result: "Livrable L2 terminé : paramètres, rotations (3), personnel (127) et chronogramme de 14 lignes sans « A completer », avec une marge de 1 heure en fin de journée.",
    pitfall: "Planifier la journée à l'heure près, sans marge : la première contrariété (camion en retard, tablette en panne, afflux plus important) fait dériver toute l'équipe vers 17 h et vers la précipitation.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — DIMENSIONNER LE SITE ET LA GESTION DE FOULE (J-3 → J-1)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Visiter le site et relever ses mesures réelles',
    intro: "Un site se juge sur place, avec un mètre, pas sur un souvenir de la distribution précédente. Entrées : le pic de 780 personnes (procédure 2), le plan de personnel, un décamètre ou une roue de mesure, un appareil photo, un téléphone avec GPS.",
    steps: [
      {
        title: 'Organisez la visite (vendredi 18 septembre, J-3)',
        actions: [
          "Partez avec le chef de site (Ayen K.), le logisticien (Peter A.), le chef de communauté (Majok D.) et un relais sécurité : chacun voit un risque différent.",
          "Si l'accès est limité, faites-la faire par un agent local avec la checklist ci-dessous et des photos datées.",
        ],
      },
      {
        title: 'Relevez les dix points de la checklist',
        actions: [
          "Mesurez la surface brute, puis déduisez bâtiments, arbres, mares et zones détrempées : c'est la surface utile.",
          "Notez : nature du sol (boue en saison des pluies), accès camion (largeur, pente, pont), points d'eau, ombre, latrines, limites et clôtures, voies d'évacuation, risques (crue, bétail), éclairage jusqu'à la fin prévue.",
          "Prenez un point GPS de chaque entrée possible et dessinez un croquis à main levée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — visite du vendredi 18 septembre, ancien terrain de l\'école de Pan-Akon',
      lines: [
        "Surface brute : 60 m × 50 m = 3 000 m². À déduire : 2 salles de classe (12 m × 8 m = 96 m²) et 380 m² de zone détrempée. Surface utile : 3 000 − 96 − 380 = 2 524 m².",
        "Accès camion : piste de 4 m de large par le nord, un seul passage ; deux entrées à pied possibles (nord et ouest).",
        "Eau : un forage à 150 m, débit suffisant pour 2 citernes de 2 000 litres ; ombre : 2 manguiers au centre ; aucune clôture.",
        "Risque noté : crue de la mare au sud en cas de forte pluie ; bétail fréquent sur la piste ouest.",
      ],
    },
    result: "Une fiche de visite datée, signée par ceux qui l'ont faite, avec la surface utile (2 524 m²), les accès, les risques et des photos.",
    pitfall: "Utiliser la surface brute : à Pan-Akon, 476 m² (16 %) étaient inutilisables. Une surface surestimée devient une bousculade le jour J.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Calculer la capacité d\'accueil et la comparer à la surface utile',
    intro: "Vous traduisez le pic horaire en mètres carrés par zone, vous ajoutez 15 % de circulation, puis vous comparez à la surface utile. La densité de planification est de 2 m² par personne dans la zone d'attente ; au-delà de 2 personnes par m², le mouvement devient difficile, et vers 4 personnes par m² le risque d'écrasement est réel.",
    steps: [
      {
        title: 'Calculez la surface nécessaire zone par zone',
        actions: [
          "Zone d'attente : personnes présentes × 2 m² = 780 × 2 = 1 560 m².",
          "Lignes : distribution 8 × 24 m² (6 m × 4 m) = 192 m² ; vérification 6 × 12 m² = 72 m².",
          "Autres zones : point secondaire 30 m², desk CFM 25 m², premiers secours 25 m², stock tampon et déchargement 80 m², couloir de sortie 100 m², eau et latrines 60 m².",
          "Additionnez, puis ajoutez 15 % de circulation : 2 144 × 1,15 ≈ 2 470 m².",
        ],
      },
      {
        title: 'Comparez, puis décidez',
        actions: [
          "Surface utile − surface nécessaire = marge ; visez au moins 25 %.",
          "Si la marge est insuffisante, agissez sur trois leviers : agrandir (terrain voisin), réduire les présents (aire d'appel hors site, vagues plus petites), ou répartir en deux sites.",
          "Consignez la décision et la preuve (autorisation écrite du propriétaire ou du chef pour le terrain voisin).",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'Calcul', 'Surface'],
      rows: [
        ['Attente (780 personnes)', '780 × 2 m²', '1 560 m²'],
        ['Lignes de distribution (8)', '8 × 24 m²', '192 m²'],
        ['Lignes de vérification (6)', '6 × 12 m²', '72 m²'],
        ['Point secondaire, desk CFM, premiers secours', '30 + 25 + 25', '80 m²'],
        ['Stock tampon et déchargement, couloir de sortie, eau et latrines', '80 + 100 + 60', '240 m²'],
        ['Sous-total, puis +15 % de circulation', '2 144 × 1,15', '≈ 2 470 m²'],
      ],
    },
    example: {
      title: 'Kerowa — décision',
      lines: [
        "Surface utile 2 524 m² − nécessaire 2 470 m² = 54 m² de marge, soit 2 % : insuffisant (cible 25 %).",
        "Décision : emprunter le terrain de football voisin (900 m²) pour la zone d'attente, avec accord écrit du directeur de l'école et de Majok D. → 3 424 m² utiles, marge de 38 %.",
        "Un second levier est gardé en réserve : une aire d'appel au village pour la vague suivante.",
      ],
    },
    result: "Une surface nécessaire chiffrée zone par zone, une marge calculée et une décision écrite (ici : terrain voisin, marge de 38 %).",
    pitfall: "Dimensionner le site comme lors d'un tour précédent plus petit. La question n'est pas « le site a-t-il suffi la dernière fois ? » mais « les 780 présents au pic tiennent-ils avec 25 % de marge ? ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Tracer le circuit à sens unique et le plan de site',
    intro: "Le circuit est la clé contre les reflux et les bousculades : chaque personne avance toujours vers l'avant, sans croiser ceux qui reviennent. Entrées : surface décidée, nombre de lignes (6 et 8), 12 postes de circuit (procédure 2).",
    steps: [
      {
        title: 'Dessinez le plan à l\'échelle',
        actions: [
          "Sur papier quadrillé, 1 cm = 5 m, placez dans l'ordre : aire d'appel, entrée unique, zone d'attente par couleur, vérification, distribution, couloir de sortie fermé, sortie distincte de l'entrée.",
          "Placez à l'écart du flux : point de vérification secondaire, premiers secours, desk CFM (à la sortie), stock tampon et accès camion séparé, eau, latrines, voie prioritaire.",
          "Prévoyez deux voies d'évacuation, jamais bloquées par du matériel.",
        ],
      },
      {
        title: 'Matérialisez le circuit sur le terrain',
        actions: [
          "Installez des chicanes de 1,0 à 1,2 m de large avec cordes et piquets, et un sas toutes les 20 m : une barrière qui retient 50 à 100 personnes casse la pression de la file.",
          "Une couleur par vague (Rouge, Bleu, Vert, Jaune) sur les panneaux et les rubans : on guide par pictogrammes, pas seulement par texte.",
          "Faites la marche d'essai avec 20 agents en jouant des ménages : chronométrez, repérez les croisements.",
        ],
      },
    ],
    table: {
      columns: ['Ordre', 'Zone', 'Particularité à Pan-Akon'],
      rows: [
        ['0', 'Aire d\'appel (village)', 'La vague suivante attend ici et n\'entre qu\'à l\'appel, par blocs'],
        ['1', 'Entrée unique (nord)', 'Comptage des entrants, agents 6'],
        ['2', 'Zone d\'attente couverte', 'Terrain de football, 2 hangars d\'ombre, 2 points d\'eau, files par couleur'],
        ['3', 'Vérification (6 lignes)', 'Jeton, Kobo, pièce ; point secondaire à proximité, hors file'],
        ['4', 'Distribution (8 lignes)', 'Stock tampon derrière, accès camion par la piste de service'],
        ['5', 'Couloir de sortie fermé, puis desk CFM', 'Sortie à l\'ouest, à plus de 30 m de l\'entrée'],
      ],
    },
    result: "Livrable L3 (1re partie) : un plan de site à sens unique, avec zones, couleurs, voies prioritaire et d'évacuation, et une marche d'essai chronométrée.",
    tip: "Faites sortir les gens par un chemin qui ne repasse jamais par l'entrée. Un sortant qui revient à contre-courant est la cause numéro un des reflux.",
    pitfall: "Une file unique sans sas : la pression s'accumule de l'arrière vers l'avant, et les premiers rangs sont écrasés contre la barrière. Découpez en tronçons.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Organiser la dignité, la sécurité et la coordination avec les autorités',
    intro: "La gestion de foule n'est pas un problème de sécurité externe : le staff de distribution y participe activement. Les autorités et les gardes tiennent la périphérie ; les 38 agents de foule tiennent le circuit.",
    steps: [
      {
        title: 'Prévoyez la dignité (cf. théorie)',
        actions: [
          "Voie prioritaire à gauche de la file pour personnes âgées, femmes enceintes ou allaitantes, personnes en situation de handicap : 7 agents d'assistance dédiés.",
          "Ombre dans la zone d'attente, 2 points d'eau, latrines séparées femmes / hommes, espace d'allaitement.",
          "Code de conduite signé par tous le matin du jour J ; aucun agent ne sert son propre bloc.",
        ],
      },
      {
        title: 'Définissez les rôles, les signaux et la chaîne d\'alerte',
        actions: [
          "Réunion de coordination avec les autorités locales et le point focal sécurité (J-2) : elles tiennent les abords et la route ; vos agents tiennent le circuit.",
          "Signal d'alerte : sifflet long pour « arrêt », radio pour « code orange / code rouge » (procédure 6) ; test de la radio à 06h00.",
          "Plan d'évacuation sanitaire : numéro du centre de santé de Gogrial, véhicule de réserve, bénévole qui connaît l'itinéraire.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — répartition des 38 agents de foule',
      lines: [
        "6 à l'entrée : comptage, filtrage des entrants par couleur.",
        "12 dans l'aire d'attente : chacun tient un tronçon de file et un sas.",
        "12 sur le circuit : de la vérification à la sortie, sans croiser les sortants.",
        "4 à la sortie, 4 en réserve mobile pour renforcer l'endroit en tension.",
        "Police locale : tient la piste et les abords, n'entre pas dans le circuit sauf appel du chef de site.",
      ],
    },
    result: "Les rôles et les signaux sont écrits, connus de tous, et testés ; la voie prioritaire a ses agents ; les autorités savent qui tient quoi.",
    pitfall: "Déléguer la gestion de foule aux seules forces de sécurité ou aux autorités. Le staff de distribution voit les signaux faibles (rumeurs, tensions) bien avant elles : s'il regarde ailleurs, le débordement est déjà là quand on le voit.",
  },
  {
    type: 'checklist',
    title: 'Go / no-go à J-1 : le site et le dispositif sont-ils prêts ?',
    items: [
      "La capacité réelle d'accueil du site est vérifiée par rapport au nombre de présents au pic (780 personnes) et non au nombre de ménages ciblés ; marge d'au moins 25 %.",
      "Le site dispose d'ombre et d'eau dans la zone d'attente, de latrines séparées, d'un espace d'allaitement.",
      "Le circuit est à sens unique (entrée, vérification, distribution, sortie), la sortie est distincte de l'entrée, avec des sas toutes les 20 m.",
      "Le dispositif de sécurité est proportionné à la foule attendue du jour J, et non à la taille du site lors d'un tour précédent plus petit.",
      "La liste verrouillée v1 est signée (1 250 ménages), le journal des modifications est ouvert et personne ne peut ajouter un ménage par téléphone.",
      "Les 1 250 kits sont comptés et préparés à l'entrepôt, le camion de réserve est confirmé, et les horaires de rotation (07h00, 09h00, 11h00) sont communiqués au transporteur.",
      "Les jetons sont remis (ou restants sous clé), les tablettes sont chargées, la liste Kobo est identique à la version signée, les listes papier sont imprimées.",
      "Les agents ont signé le code de conduite, connaissent leur poste, les signaux d'alerte et la procédure du point secondaire ; la répétition générale est faite.",
      "Les quatre canaux du CFM sont ouverts et annoncés ; la boîte à plaintes est à la sortie, hors de portée des lignes.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — JETONS ET PRÉPARATION DE LA VÉRIFICATION (J-3 → J-1)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Choisir le système de vérification selon la taille et le risque',
    intro: "Un bénéficiaire ne peut être servi que s'il figure sur la liste et n'a pas déjà été servi pendant ce tour. Le système (jeton, Kobo/ODK, ou les deux) se choisit à froid, sur quatre critères, et non selon ce que l'équipe a l'habitude de faire.",
    steps: [
      {
        title: 'Notez les quatre critères',
        actions: [
          "Taille : nombre de ménages sur la liste verrouillée (1 250).",
          "Risque de double-passage ou de fraude : autre organisation sur le site, antécédents, tension communautaire, déplacés récents (oui, trois sur quatre).",
          "Moyens : tablettes ou téléphones disponibles, électricité, formation des agents.",
          "Contrainte du site : surface, vagues possibles, durée de la journée.",
        ],
      },
      {
        title: 'Appliquez la grille de la théorie et écrivez la décision',
        actions: [
          "Moins de 300 ménages à risque faible : liste papier ; 300 à 1 500 sans électricité : jetons ; tablettes et risque élevé : Kobo/ODK ; plus de 1 000 ménages ou risque élevé : jetons + Kobo/ODK (hybride).",
          "Demandez au programme (équipe de suivi) si un formulaire Kobo de vérification est déjà déployé : vous le testez, vous n'avez pas à le construire.",
          "Rédigez la décision en 5 lignes : système choisi, raison, matériel, plan de secours papier, responsable.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — note de décision du vendredi 18 septembre',
      lines: [
        "Système : hybride jetons numérotés + Kobo/ODK. Raison : 1 250 ménages (> 1 000), autre ONG sur le site, déplacés récents.",
        "Matériel : 6 tablettes en service + 2 de rechange + 4 batteries externes ; formulaire de vérification déjà déployé par l'équipe de suivi, à tester.",
        "Secours : 3 listes papier numérotées et feuilles de pointage par ligne en cas de panne de tablette.",
        "Responsable : vous (système), Ayen K. (exécution), l'équipe de suivi (formulaire).",
      ],
    },
    result: "Le système est choisi sur critères, documenté, avec un plan de secours papier et un responsable.",
    pitfall: "Choisir Kobo « parce que c'est moderne » sans batteries ni secours papier : à la première tablette vide, la file s'arrête et la pression monte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Concevoir et imprimer des jetons difficiles à copier',
    intro: "Un jeton protège la liste tant qu'il ne se copie pas et ne s'échange pas. Les règles de conception sont simples. Entrées : la liste verrouillée (1 250 ménages), les couleurs de vagues, le numéro du CFM.",
    steps: [
      {
        title: 'Définissez le contenu du jeton',
        actions: [
          "Numéro unique lié au ménage : PAK-0001 à PAK-1250 (même numéro que la liste), imprimé à deux endroits, dont un sur le talon détachable.",
          "Couleur de la vague (Rouge, Bleu, Vert, Jaune) et heure d'appel prévue ; en-tête « Kerowa Santé — Distribution NFI 21/09/2026 ».",
          "Mention « Gratuit — aucun paiement » et le numéro gratuit du CFM, avec un pictogramme pour les personnes qui lisent peu.",
        ],
      },
      {
        title: 'Ajoutez les protections et imprimez',
        actions: [
          "Papier d'une couleur ou d'un grammage introuvable sur le marché local, tampon à sec de l'organisation et signature manuscrite de l'agent à la remise.",
          "Imprimez 1 250 jetons plus 10 jetons de remplacement numérotés PAK-R01 à PAK-R10, rangés sous clé ; ils ne sortent que par une ligne du journal des modifications.",
          "Récupérez vous-même l'impression, comptez par paquets de 50, scellez, et conservez le coffre sous votre responsabilité.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — jetons imprimés à Gogrial le 18 septembre',
      lines: [
        "Quatre couleurs par vague : Rouge 313 jetons, Bleu 313, Vert 312, Jaune 312 = 1 250.",
        "Talon détachable numéroté, tampon à sec et signature à la remise ; 10 jetons de remplacement sous clé.",
        "Comptage à la livraison : 25 paquets de 50 + 10 jetons de remplacement = 1 260 jetons ; procès-verbal signé par vous et Peter A.",
      ],
    },
    result: "Un stock de jetons compté, scellé et sous clé, avec ses 10 jetons de remplacement, sans exemplaire en trop ou orphelin.",
    pitfall: "Imprimer « quelques jetons en plus pour être tranquille » : chaque jeton non lié à un ménage est une porte d'entrée pour un bénéficiaire fictif.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Remettre les jetons aux ménages et tenir le registre des jetons',
    intro: "La remise des jetons est le moment où chaque ménage est vu une fois, face à face, avant le jour J. Elle doit se faire par vos équipes, pas par des intermédiaires. Entrées : liste verrouillée, jetons, registre des jetons.",
    steps: [
      {
        title: 'Préparez le registre des jetons',
        actions: [
          "Créez un fichier « L4_Registre_jetons.xlsx » : N° jeton | N° ménage | Couleur / vague | Date de remise | Remis par | Remis à (chef de ménage / mandataire) | Pièce vue (Oui / Non) | Signature ou empreinte.",
          "Imprimez la liste par bloc, avec une ligne par ménage, pour pointer à chaque remise.",
        ],
      },
      {
        title: 'Remettez les jetons bloc par bloc (samedi 19 septembre, J-2)',
        actions: [
          "Réunissez le bloc avec Majok D. : expliquez le déroulement, la vague, le fait que l'aide est gratuite et le numéro du CFM ; le chef de communauté présente, il ne distribue pas.",
          "Appelez chaque ménage : un agent lit la liste, un second remet le jeton, vérifie la pièce ou le témoin du chef de bloc, fait signer.",
          "Pour les personnes malades ou âgées, acceptez un mandataire avec lettre signée vérifiée ; pour les absents, une remise de rattrapage le dimanche matin, par vos agents.",
        ],
      },
      {
        title: 'Rapprochez chaque soir',
        actions: [
          "Jetons remis + jetons restants = 1 250. Si l'égalité est fausse, vous ne dormez pas : vous cherchez où est l'écart.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — rapprochement du dimanche 20 septembre à 18 h',
      lines: [
        "Samedi : 1 122 jetons remis. Dimanche matin : 92 jetons de rattrapage remis.",
        "Restants sous clé : 36 jetons pour des ménages non joignables (déplacés vers un autre site, ou absents).",
        "Contrôle : 1 122 + 92 + 36 = 1 250 ✔. Registre signé par l'agent et par vous.",
      ],
    },
    result: "Chaque jeton remis est lié à un ménage et à une signature ; l'égalité remis + restants = 1 250 est vérifiée.",
    pitfall: "Confier un paquet de jetons au chef de communauté « pour gagner du temps ». C'est le chemin classique de la commission : chaque jeton se vend. La remise reste une action de vos équipes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Préparer le point de vérification : Kobo/ODK, secours papier, répétition',
    intro: "Ce module ne vous forme pas à construire un formulaire Kobo : sur la plupart des missions, il est déjà déployé. Vous devez savoir ce qu'il fait au point de vérification : recherche rapide d'un nom sur la liste chargée, alerte en cas de double-passage, enregistrement horodaté, export pour le PDM, fonctionnement hors connexion avec synchronisation différée.",
    steps: [
      {
        title: 'Chargez et testez les tablettes (samedi 19 et dimanche 20)',
        actions: [
          "Demandez à l'équipe de suivi de charger la liste verrouillée v1 dans le formulaire ; vérifiez que le nombre de lignes affiché est 1 250 et que la dernière ligne est celle de la version signée.",
          "Testez avec 10 ménages fictifs, dont un double-passage volontaire : l'alerte doit apparaître. Testez la synchronisation en réseau, puis hors réseau.",
          "Chargez les 6 tablettes + 2 de rechange et 4 batteries externes la nuit ; mettez le rôle de chaque tablette au marqueur (V1 à V6).",
        ],
      },
      {
        title: 'Préparez le secours papier et répétez',
        actions: [
          "Imprimez 3 listes numérotées, des feuilles de pointage par ligne (N° de jeton) et des stylos de couleur ; rangez-les dans une pochette au point secondaire.",
          "Dimanche 16 h, répétition générale avec les 31 agents Kerowa et 20 volontaires : chronométrez 1 minute par ménage, testez le point secondaire, repérez les croisements.",
          "Corrigez, puis refaites la partie qui a posé problème.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultats de la répétition du 20 septembre',
      lines: [
        "Temps moyen de vérification : 1 min 10 s par ménage sur 20 passages (objectif 1 min) → formation de 15 minutes sur la recherche par numéro de jeton.",
        "Alerte de double-passage : déclenchée sur les 2 tests volontaires.",
        "Synchronisation : correcte en réseau ; hors réseau, saisie stockée et envoyée au retour du réseau.",
        "2 batteries de tablettes remplacées ; secours papier testé en 3 minutes.",
      ],
    },
    result: "Livrable L4 terminé : jetons remis et rapprochés, tablettes chargées avec la bonne version de la liste, secours papier prêt, répétition faite et corrigée.",
    pitfall: "Charger la liste sans comparer le nombre de lignes à la version signée : une ancienne version avec des doublons non retirés rouvre exactement la faille que vous avez fermée en procédure 1.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — LE JOUR J : VÉRIFIER LES BÉNÉFICIAIRES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Ouvrir le site : briefing, contrôle d\'ouverture, première rotation',
    intro: "Le site ne s'ouvre pas tant que la checklist d'ouverture n'est pas cochée par le chef de site. Entrées : plan de site, chronogramme (L2), liste des agents par poste, jeton de la vague Rouge.",
    steps: [
      {
        title: 'Briefing de 05h30',
        actions: [
          "Lisez à haute voix le code de conduite, faites signer tous les agents, y compris les journaliers, et tenez-en la liste.",
          "Présentez le plan, les couleurs, les signaux d'alerte et la règle : aucune modification de liste, aucun ménage servi sans jeton valide et vérifié.",
          "Affectez chaque agent à son poste (jamais à son propre bloc) et testez la radio.",
        ],
      },
      {
        title: 'Contrôle d\'ouverture et première rotation',
        actions: [
          "Contrôlez le balisage, les sas, la voie prioritaire, l'eau, les latrines, l'ombre et la boîte à plaintes.",
          "Faites tester les tablettes à 07h00 ; mettez en place le secours papier au point secondaire.",
          "Réceptionnez la rotation 1 à 07h00 : comptage contradictoire des kits (500), comparaison avec le DN, signature par Peter A. et le chef de site, stock rangé dans la zone sécurisée.",
        ],
      },
      {
        title: 'Ouvrez à 07h30',
        actions: [
          "Message au mégaphone, dans la langue de la communauté : déroulement, gratuité, numéro du CFM, voie prioritaire.",
          "Appelez la vague Rouge et ouvrez l'entrée unique ; chaque agent de foule annonce sa couleur.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ouverture du lundi 21 septembre',
      lines: [
        "05h30 : 127 agents présents, 127 codes de conduite signés.",
        "06h50 : 6 tablettes sur 6 opérationnelles, liste v1 de 1 250 lignes confirmée.",
        "07h05 : rotation 1 comptée, 500 kits reçus pour 500 sur le DN, signatures de Peter A. et d'Ayen K.",
        "07h30 : site ouvert, vague Rouge appelée.",
      ],
    },
    result: "Le site s'ouvre à l'heure, avec tous les agents au poste, les tablettes testées et le stock compté et sécurisé.",
    pitfall: "Ouvrir pour « ne pas faire attendre la foule » avant le contrôle d'ouverture : une tablette non testée ou un sas manquant se paie à 09h00 avec 300 personnes dans la file.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Dérouler les quatre contrôles à chaque ligne de vérification',
    intro: "Le principe est le même avec Kobo/ODK et avec les jetons : un bénéficiaire n'est servi que s'il figure sur la liste et n'a pas déjà été servi à ce tour. La ligne applique toujours les mêmes quatre contrôles, dans le même ordre, en une minute.",
    steps: [
      {
        title: 'Contrôle 1 — le jeton',
        actions: [
          "Vérifiez la couleur (vague en cours), le tampon à sec, la signature, le numéro lisible.",
        ],
      },
      {
        title: 'Contrôle 2 — la liste',
        actions: [
          "Sur la tablette, saisissez le numéro de jeton : le nom, le bloc et la taille du ménage s'affichent. L'agent compare à la personne présente.",
          "Vérifiez le statut : il doit être « non servi » ; si l'alerte « déjà passé » apparaît, passez à l'étape 3.",
        ],
      },
      {
        title: 'Contrôle 3 — la personne',
        actions: [
          "Demandez la pièce ou la carte d'enregistrement du chef de ménage, ou la lettre de mandat pour un mandataire.",
          "Sans pièce, posez deux questions dont seul le ménage connaît la réponse (taille du ménage, bloc) : en cas de doute, point secondaire.",
        ],
      },
      {
        title: 'Contrôle 4 — l\'enregistrement et le bon de retrait',
        actions: [
          "Validez dans Kobo/ODK « autorisé » : l'heure s'enregistre. Détachez le talon, remettez-le à la ligne de distribution.",
          "À la ligne de distribution, l'agent reçoit le talon, remet le kit, et inscrit un trait sur sa feuille de pointage ; la remise du kit est comptée ici, pas à la vérification.",
          "En secours papier : barrez la ligne du ménage sur la liste numérotée, poinçonnez le jeton, signez à la couleur de la ligne.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — un passage normal à la ligne V2',
      lines: [
        "08h14 : une femme présente le jeton PAK-0412, couleur Rouge ; tampon et signature corrects.",
        "Kobo affiche : PAK-0412 — chef de ménage « A. », bloc B, 6 personnes — statut non servi.",
        "Elle montre sa carte d'enregistrement ; noms concordants. Validation « autorisé » à 08h14, talon détaché, dirigée vers la ligne D4.",
        "À D4 : kit remis, un trait de pointage ; durée totale à la vérification : 1 minute.",
      ],
    },
    result: "Chaque ménage passe les quatre contrôles dans l'ordre, en moins de 1 min 10 s ; chaque kit est lié à un talon collecté.",
    pitfall: "Sauter le contrôle de la personne quand la file s'allonge. Le ménage dont un tiers a déjà utilisé le jeton reviendra, et vous ne saurez pas lequel des deux passages était le bon.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Isoler toute anomalie vers le point secondaire sans interrompre le flux',
    intro: "Toute anomalie (nom absent, jeton en double, pièce douteuse) est immédiatement isolée : la personne est accompagnée vers le point de vérification secondaire, sans interrompre la ligne ni créer d'esclandre. L'agent de la ligne ne tranche jamais seul.",
    steps: [
      {
        title: 'Réagissez par une phrase neutre et un geste',
        actions: [
          "Dites une phrase identique pour tous : « Il y a une vérification de routine, un collègue va vous accompagner. »",
          "Retenez le jeton, appelez l'agent d'orientation par signe convenu, accompagnez la personne ; la ligne continue avec la personne suivante.",
          "Notez sur le talon l'heure, la ligne et la raison de l'orientation, sans mot qui accuse.",
        ],
      },
      {
        title: 'Appliquez la réponse prévue pour chaque cas',
        actions: [
          "Consultez le tableau de réponses ; ne sortez jamais de ce qu'il autorise.",
        ],
      },
    ],
    table: {
      columns: ['Anomalie', 'Réponse immédiate à la ligne', 'Ce qu\'on ne fait jamais'],
      rows: [
        ['Nom absent de la liste, jeton valide', 'Orienter vers le point secondaire ; vérifier le journal des modifications', 'Servir « par pitié » ou ajouter le nom sur place'],
        ['Jeton déjà utilisé (alerte Kobo, talon déjà collecté)', 'Retenir le jeton, orienter discrètement, noter l\'heure et la ligne du premier passage', 'Accuser la personne devant la file'],
        ['Jeton illisible, non tamponné ou d\'une autre vague', 'Retenir le jeton, orienter ; vague décalée : indiquer poliment l\'heure d\'appel', 'Accepter un jeton non conforme sous pression'],
        ['Représentant sans lettre de mandat', 'Orienter ; priorité si la personne est vulnérable', 'Accepter un mandat oral'],
        ['Pression d\'un chef, d\'un agent ou d\'un « ordre » de servir', 'Renvoyer au chef de site ; toute exception passe par le journal à deux signatures', 'Obéir à un ordre oral sur le site'],
        ['Panne de tablette', 'Basculer sur la liste papier de la ligne, noter les numéros de jeton', 'Arrêter la ligne ou servir sans enregistrer'],
      ],
    },
    result: "Chaque anomalie est isolée en moins d'une minute, sans arrêt de ligne, avec l'heure, la ligne et la raison notées.",
    pitfall: "Faire la discussion devant la file : la personne se défend, la file prend parti, la tension monte. La discussion se tient assise, au point secondaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Résoudre le cas au point secondaire sans modifier la liste',
    intro: "Le point secondaire est tenu par un agent formé, assis, à l'écart du flux, avec la liste papier et la tablette de secours. Il suit cinq questions, toujours dans le même ordre, et son seul pouvoir est de documenter et d'orienter, jamais d'ajouter un ménage.",
    steps: [
      {
        title: 'Posez les cinq questions dans l\'ordre',
        actions: [
          "1. Le nom figure-t-il sur la liste verrouillée ? Non : on n'ajoute pas ; on enregistre une plainte (procédure 7) et le programme tranche dans les 48 h.",
          "2. Oui, et le jeton a déjà été utilisé : retrouvez dans Kobo l'heure et la ligne du premier passage.",
          "3. La personne présente correspond-elle à la liste (pièce, taille du ménage, bloc) ? Oui : le premier passage est suspect ; on ne sert pas sur place, on enregistre.",
          "4. Non : refus calme, jeton conservé, enregistrement ; le programme est prévenu.",
          "5. Dans tous les cas : fiche remplie, chef de site informé, personne reconduite à la sortie ou au desk CFM.",
        ],
      },
      {
        title: 'Ne servez jamais à titre d\'exception sur place',
        actions: [
          "Une régularisation (service sur la réserve) n'a lieu qu'après décision écrite du programme, pas le jour même sous la pression.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — incident A, lundi 21 septembre, 08h45, jeton PAK-0731',
      lines: [
        "Kobo à la ligne V3 : « PAK-0731 déjà autorisé à 08h12, ligne V2 ». La personne présente est une femme, qui dit n'avoir rien reçu.",
        "Point secondaire (agent formé, assis) : le nom est sur la liste ; la femme est chef de ménage, 6 personnes, bloc F, carte concordante.",
        "À 08h12, à la ligne V2, un homme avait présenté le jeton ; la ligne, saturée, n'avait pas demandé de pièce.",
        "Décision : pas de service sur place (stock exact) ; plainte enregistrée (réf. PAK-0731) ; chef de site informé ; dossier au programme pour décision sous 48 h avec kit pris sur la réserve de 50.",
      ],
    },
    result: "Le cas est tranché sans interrompre le flux : la personne a été reçue assise, ne s'est pas exposée, la liste est intacte, et une plainte tracée attend la décision du programme.",
    pitfall: "Servir « un petit kit » pour calmer la situation. Vous perdez à la fois l'exactitude du stock, la preuve du premier passage et votre crédibilité auprès de tous les ménages qui attendent.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — GÉRER UN INCIDENT DE FOULE EN TEMPS RÉEL
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: 'Détecter les signaux faibles avant le débordement',
    intro: "Un débordement ne se produit jamais d'un coup : il est précédé de signaux que les agents de circuit voient avant le chef de site. Votre tâche est de rendre ces signaux visibles, de définir trois niveaux et de décider à l'avance ce qu'on fait à chacun.",
    steps: [
      {
        title: 'Définissez trois niveaux et leurs signes',
        actions: [
          "Vert : file fluide, densité en dessous de 2 personnes/m², aucune tension.",
          "Orange (code orange) : file dépassant les repères de balisage, rumeur (« il n'y aura pas assez »), bruit qui monte, personnes qui poussent légèrement, premiers malaises liés à la chaleur.",
          "Rouge (code rouge) : poussée continue, chute ou piétinement, enfants séparés, blessés, barrière qui cède : arrêt de l'entrée immédiat.",
        ],
      },
      {
        title: 'Rendez la surveillance active',
        actions: [
          "Chaque agent de circuit et de réserve mobile connaît les signes et annonce « orange » à la radio sans attendre de permission.",
          "Le chef de site fait un tour de site toutes les 30 minutes et un point radio à chaque début de vague.",
          "Écrivez les repères sur le plan (marques au sol à 10, 20, 30 m) : un agent compare la file aux marques.",
        ],
      },
    ],
    table: {
      columns: ['Niveau', 'Signes', 'Action immédiate', 'Qui décide'],
      rows: [
        ['Vert', 'File fluide, moins de 2 pers./m²', 'Surveillance normale, tour de site toutes les 30 min', 'Chef de site'],
        ['Orange', 'File au-delà des marques, rumeur, poussée légère, premiers malaises', 'Annonce rassurante, réserve mobile vers le point, ralentir l\'appel de la vague suivante', 'N\'importe quel agent peut annoncer ; le chef de site décide'],
        ['Rouge', 'Poussée continue, chute, enfant séparé, blessés', 'Arrêt de l\'entrée, décompression par les sas, premiers secours, appel du chef de site', 'Chef de site ; escalade à la coordination'],
      ],
    },
    result: "Trois niveaux définis, les repères posés sur le plan, et chaque agent sait qu'il a le droit d'annoncer « code orange » sans autorisation.",
    tip: "Exigez de l'équipe qu'elle annonce orange trop tôt plutôt que rouge trop tard : un faux code orange coûte 10 minutes ; un code rouge manqué coûte des blessés.",
    pitfall: "Considérer que le chef de site verra tout. Sur 3 400 m², il voit un tiers du site : les 12 agents de l'aire d'attente voient la tension monter bien avant lui, à condition qu'ils osent le dire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 3',
    title: 'Résorber un débordement sans panique, sans arrêter toute la distribution',
    intro: "L'objectif n'est pas d'arrêter la distribution mais d'arrêter l'afflux : les lignes continuent de servir ceux qui sont déjà dans le circuit pendant qu'on rétablit l'ordre à l'entrée. La séquence est toujours la même, justifiée à chaque étape.",
    steps: [
      {
        title: 'Annoncez et rassurez (pourquoi : la rumeur est la première cause de poussée)',
        actions: [
          "Au mégaphone, dans la langue de la communauté : « Il y a assez de kits pour tous les ménages de la liste. »",
          "Appuyez le message par un fait visible : un panneau « kits restants » et la zone de stock visible depuis l'aire d'attente.",
        ],
      },
      {
        title: 'Coupez l\'afflux (pourquoi : on ne décomprime pas une foule qui grossit)',
        actions: [
          "Fermez temporairement l'entrée unique, repoussez l'appel de la vague suivante de 20 minutes.",
          "Les lignes de vérification et de distribution continuent pour les personnes déjà dans le circuit.",
        ],
      },
      {
        title: 'Décompressez et réorganisez (pourquoi : réduire la pression sans créer de mouvement brusque)',
        actions: [
          "Envoyez la réserve mobile (4 agents) rebaliser les files et recréer les sas ; faites reculer les premiers rangs par paliers de 2 à 3 mètres.",
          "Extrayez de la foule, par la voie prioritaire, personnes âgées, enfants et femmes enceintes : les 7 agents d'assistance les emmènent à l'ombre, à l'écart.",
          "Soignez tout de suite les malaises (ombre, eau, premiers secours) : un évanoui qui reste dans la foule est un piétinement.",
        ],
      },
      {
        title: 'Redémarrez en vague réduite (pourquoi : on ne relance pas la pression qui vient de tomber)',
        actions: [
          "Rouvrez l'entrée par tranche de 50 ménages, couleur par couleur, jusqu'au retour à « vert ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — incident B, lundi 21 septembre à 10h20 : averse et rumeur « les kits sont finis »',
      lines: [
        "Situation à 10h20 : 513 ménages servis, 487 kits sur le site et 250 en route (rotation de 11h00), soit 737 kits pour 737 ménages restants. Une averse et la rumeur poussent environ 300 personnes de plus vers l'entrée.",
        "10h22 : « code orange » à la radio par un agent de l'aire d'attente. 10h24 : Ayen K. annonce au mégaphone et montre le panneau : 487 kits sur le site + 250 en route = 737 ménages restants.",
        "10h25 : entrée fermée 20 minutes, appel de la vague Verte repoussé de 11h00 à 11h20 ; les lignes continuent.",
        "10h30 : la réserve mobile rebalise deux files ; les 7 agents d'assistance sortent 9 personnes âgées et enfants, 1 malaise soigné. 10h45 : retour au vert, 0 blessé grave.",
      ],
    },
    result: "Le débordement est résorbé en 25 minutes, sans blessé grave, sans arrêt des lignes, et la distribution reprend avec un décalage de 20 minutes absorbé par la marge de fin de journée.",
    pitfall: "Appeler les forces de sécurité à repousser la foule par la force. Une poussée sous la menace devient une panique ; la réponse est l'information, la fermeture de l'afflux et la décompression par paliers.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 3',
    title: 'Rétablir, escalader et consigner l\'incident',
    intro: "Un incident non consigné n'a pas existé pour l'audit, et il se reproduira au tour suivant. Dès que le niveau est revenu à vert, l'agent documentaliste (qui ne distribue pas) prend la main sur la trace écrite.",
    steps: [
      {
        title: 'Consignez dans la feuille de suivi du jour',
        actions: [
          "Dans la feuille de suivi du jour, ajoutez une ligne : heure de début et de fin, lieu, nature, niveau atteint, actions menées, blessés, personnes informées.",
          "Joignez, si possible, le nombre de personnes extraites et les agents mobilisés ; ne mentionnez aucun nom de bénéficiaire.",
        ],
      },
      {
        title: 'Escaladez selon la gravité',
        actions: [
          "Incident orange résolu : information de la coordinatrice pays par message avant 12h00.",
          "Incident rouge ou blessé : appel immédiat à la coordination, évacuation sanitaire si nécessaire, rapport d'incident selon la politique de l'organisation.",
          "Informez la communauté (via Majok D. et le mégaphone) de ce qui s'est passé et des mesures prises : le silence nourrit la rumeur.",
        ],
      },
      {
        title: 'Tirez la correction au debriefing de 15h30',
        actions: [
          "Posez trois questions : qu'avons-nous vu en premier ? qui l'a vu ? que changeons-nous avant la vague suivante, ou le tour suivant ?",
          "Notez chaque correction, un responsable et une date.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ligne de la feuille de suivi du jour pour l\'incident B',
      lines: [
        "10h20–10h45 | Entrée nord, aire d'attente | Poussée suite à rumeur « kits finis » + averse | Orange | Annonce + panneau « kits restants », entrée fermée 20 min, 2 files rebalisées | 1 malaise, 0 blessé grave | Grace M. informée à 10h50.",
        "Correction décidée à 15h30 : panneau « kits restants » mis à jour toutes les 30 minutes et affiché à toutes les vagues (responsable Ayen K., dès la vague suivante) ; abri supplémentaire de 40 m² demandé pour la zone d'attente (Peter A., sous 2 jours).",
      ],
    },
    result: "L'incident est consigné avec ses heures, ses actions et ses personnes informées, la coordination est informée et une correction datée est décidée.",
    pitfall: "Reporter la rédaction à demain : les heures, les noms des agents concernés et la nature exacte du problème se perdent dans le rythme d'une journée de distribution.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — DOCUMENTER LA DISTRIBUTION EN TEMPS RÉEL
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Désigner l\'agent qui documente et préparer ses outils',
    intro: "L'agent qui documente n'est jamais celui qui distribue physiquement : il observe, compte et écrit sans être pris par la file. Il est désigné et formé avant le jour J. Entrées : chronogramme (L2), liste des postes, un exemplaire du registre de plaintes.",
    steps: [
      {
        title: 'Nommez deux personnes aux rôles distincts',
        actions: [
          "Un documentaliste à la supervision : il tient la feuille de suivi du jour (comptage horaire, stock, incidents).",
          "Un agent du CFM (Akuol P. et un relais) au desk de sortie : il reçoit et enregistre les plaintes dans le registre. Aucun des deux ne sert un kit.",
        ],
      },
      {
        title: 'Préparez la feuille de suivi du jour',
        actions: [
          "Dans un classeur « L6_Suivi_jour_21-09.xlsx », créez un tableau : Heure | Ménages autorisés (Kobo) | Kits remis (talons collectés) | Écart | Stock sur site | Plan cumulé | Incidents / observations.",
          "Pré-remplissez les heures (08h00 à 15h00), le plan cumulé (colonne Plan) et le stock initial ; imprimez-en un exemplaire de secours.",
          "Imprimez 3 exemplaires du registre de plaintes (desk, supervision, secours) et une version numérique sur une tablette.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — affectations du 21 septembre',
      lines: [
        "Documentaliste : un agent de suivi-évaluation de Kerowa, placé à côté de l'abri de supervision, avec radio.",
        "Desk CFM : Akuol P. et deux relais communautaires, à la sortie ouest, à 40 m des lignes.",
        "Aucun des deux ne figure dans les 8 lignes de distribution ni dans les 6 lignes de vérification.",
      ],
    },
    result: "Deux rôles distincts, nommés, formés, équipés d'une feuille de suivi pré-remplie et d'exemplaires du registre de plaintes.",
    pitfall: "Demander à un agent de ligne de « noter au passage ». Quand la file s'allonge, la ligne passe avant le papier, et ce qui n'est pas noté sur le moment n'est jamais reconstitué fidèlement le soir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Tenir le comptage horaire et le comparer au plan',
    intro: "À chaque heure pleine, le documentaliste relève trois nombres et les compare au plan. Un écart qui grandit est le premier signal que la journée dérive, bien avant que la file ne le montre. Entrées : feuille de suivi du jour, chiffres des chefs de ligne, tablette de supervision.",
    steps: [
      {
        title: 'Relevez les trois nombres à chaque heure pleine',
        actions: [
          "Kits remis : demandez à chaque chef de ligne de distribution son nombre de talons collectés et additionnez les 8 lignes.",
          "Ménages autorisés : lisez le compteur du formulaire Kobo sur la tablette de supervision.",
          "Stock sur site : kits reçus aux rotations − kits remis.",
        ],
      },
      {
        title: 'Comparez au plan et décidez',
        actions: [
          "Calculez l'écart entre le réel et le plan cumulé.",
          "Écart entre « autorisés » et « remis » : il doit rester inférieur à ce qui se trouve dans le circuit (une vague). S'il grandit, cherchez où les talons disparaissent.",
          "Si le réel est en retard de plus de 10 % sur le plan, décidez : ligne supplémentaire, renfort, ou on absorbe par la marge de l'après-midi. Écrivez la décision dans la dernière colonne.",
        ],
      },
    ],
    table: {
      columns: ['Heure', 'Plan cumulé', 'Réel (kits remis)', 'Écart', 'Décision'],
      rows: [
        ['09h00', '240', '231', '−9', 'RAS, démarrage lent'],
        ['10h00', '433', '424', '−9', 'RAS'],
        ['11h00', '626', '612', '−14', 'Incident B passé, vague Verte décalée à 11h20'],
        ['12h00', '866', '779', '−87 (10 %)', 'Retard absorbé par l\'heure de marge ; pas de ligne en plus ; point à 13h00'],
        ['14h00', '1 250', '1 118', '−132', 'Rattrapage 14h00–15h00 ouvert aux points secondaire et absents'],
        ['15h00', '1 250', '1 183', '−67', 'Clôture de la vérification, comptage final'],
      ],
    },
    result: "Un comptage horaire complet : à chaque heure, trois nombres, l'écart au plan et une décision écrite ; la dérive du matin est vue à 11h00, pas à 17h00.",
    tip: "Affichez le chiffre « kits restants / ménages restants » à côté du compteur : quand les deux nombres sont égaux, la rumeur d'une rupture n'a aucune prise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Enregistrer plaintes et incidents dans le registre, champ par champ',
    intro: "Le template registre-plaintes-feedback-communautaire.docx est un document en paysage avec un titre, une section « 1. Quand utiliser ce registre », une section « 2. Journal des plaintes et retours communautaires » et un rappel de clôture (section 3). Le journal est un tableau de six colonnes ; vous écrivez une ligne par plainte, même mineure.",
    steps: [
      {
        title: 'Lisez le tableau avant d\'écrire',
        actions: [
          "Colonnes : Date | Référence plaignant (anonymisée) | Nature de la plainte / du retour | Action prise | Statut (Ouvert / En cours / Clôturé) | Suivi nécessaire.",
          "La première ligne est un exemple en gris (double passage du 16/09/2026, réf. PDU-0103) : elle montre le niveau de détail attendu. Effacez-la avant de diffuser le fichier, ou ne la comptez jamais comme une plainte réelle.",
          "Le tableau offre 10 lignes libres ; pour en ajouter, placez le curseur dans la dernière cellule et appuyez sur Tab.",
        ],
      },
      {
        title: 'Remplissez chaque champ avec la règle qui lui correspond',
        actions: [
          "Date : jj/mm/aaaa, date de réception, pas de la rédaction.",
          "Référence : numéro de ménage ou code (PAK-0731) ; jamais un nom complet ; pour une plainte anonyme, « Anonyme (boîte à plaintes) ».",
          "Nature : faits, heure, lieu, sans interprétation ni nom d'agent accusé ; Action prise : ce qui a été fait sur le moment ; Statut : Ouvert ou En cours ; Suivi nécessaire : Oui + quoi, qui, quand.",
          "Plainte sensible (exploitation, abus, fraude impliquant du personnel) : n'écrivez aucun détail ; notez « plainte sensible, transmise au point focal le jj/mm » ; la suite se traite dans la procédure confidentielle.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Référence', 'Nature', 'Action prise', 'Statut', 'Suivi nécessaire'],
      rows: [
        ['21/09/2026', 'PAK-0731 (réf. anonymisée)', 'Suspicion de double passage : jeton déjà utilisé à 08h12 (ligne V2) ; la chef de ménage inscrite dit n\'avoir rien reçu', 'Isolée au point secondaire sans interrompre le flux ; identité concordante avec la liste ; pas de service sur place ; dossier transmis au programme', 'En cours', 'Oui — décision du programme sous 48 h (23/09) ; vérification auprès de la ligne V2'],
        ['21/09/2026', 'PAK-0958', 'Jeton valide (vague Bleu) mais nom absent de la liste verrouillée', 'Orienté au point secondaire ; jeton retenu ; journal des modifications consulté : aucune entrée ; pas d\'ajout sur place', 'Ouvert', 'Oui — contrôle de l\'origine du jeton et de la liste par le programme sous 48 h'],
        ['21/09/2026', 'PAK-1103', 'Personne âgée : attente de plus de 3 h sans accès à la voie prioritaire (10h30)', 'Excuses sur place ; kit remis en priorité à 10h50 ; point fait à l\'équipe d\'assistance', 'En cours', 'Oui — vérifier l\'affectation des 7 agents d\'assistance au debriefing de 15h30'],
        ['21/09/2026', 'Anonyme (boîte à plaintes)', 'Plainte sensible concernant le comportement d\'un agent', 'Transmise le jour même au point focal, procédure confidentielle ; non détaillée ici', 'En cours', 'Oui — procédure confidentielle, aucun détail dans ce registre'],
      ],
    },
    result: "Quatre lignes complètes à l'issue du jour J : date, référence anonymisée, faits, action déjà prise, statut cohérent (aucune clôture définitive le jour même), suivi nommé.",
    pitfall: "Écrire le nom du plaignant ou de l'agent mis en cause dans le registre. Il circule largement : la protection du plaignant et la présomption d'innocence de l'agent exigent un code, pas un nom.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Clôturer la journée : rapprocher jetons, kits, Kobo et stock',
    intro: "À 15h00, la vérification s'arrête et le comptage final commence. Le rapprochement vérifie que trois comptages indépendants donnent le même résultat : si l'égalité est fausse, c'est un écart à expliquer le soir même, pas un détail.",
    steps: [
      {
        title: 'Faites le comptage physique du stock restant',
        actions: [
          "À trois (Log Officer, magasinière, chef de site), comptez les kits restants sur le site, en vrac et en palettes, avec les talons du jour.",
          "Signez la fiche de comptage ; emportez les jetons non utilisés et les jetons retenus pour anomalie dans le coffre.",
        ],
      },
      {
        title: 'Vérifiez trois égalités',
        actions: [
          "Kits : kits reçus sur site (500 + 500 + 250) − kits remis (talons collectés) = stock physique restant.",
          "Jetons : talons collectés + jetons non utilisés ou retenus = jetons remis (1 250).",
          "Kobo : ménages « autorisés » = talons collectés ; à 15h00 plus personne n'est dans le circuit, l'écart doit être nul.",
        ],
      },
      {
        title: 'Envoyez le flash report et rapatriez le stock',
        actions: [
          "Signez la fiche de comptage (Log Officer, chef de site, vous) et exportez le fichier Kobo en CSV, sauvegardé à deux endroits.",
          "Établissez un DN retour pour les kits restants avec Achol D. ; rangez-les en entrepôt, séparés de la réserve de 50.",
          "Avant 18h00, envoyez à la coordination : servis, taux de couverture, incidents, stock, plaintes ouvertes.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Calcul', 'Résultat', 'Écart'],
      rows: [
        ['Kits sur site', '500 + 500 + 250', '1 250 kits reçus', '—'],
        ['Kits remis (talons collectés)', 'Somme des 8 lignes', '1 183', '—'],
        ['Stock attendu / compté', '1 250 − 1 183 / comptage physique', '67 / 67', '0'],
        ['Jetons', '1 183 collectés + 67 non utilisés ou retenus', '1 250', '0'],
        ['Kobo vs talons', '1 183 autorisés / 1 183 talons', 'Égalité', '0'],
      ],
    },
    example: {
      title: 'Kerowa — résultat du soir du 21 septembre',
      lines: [
        "Servis : 1 183 sur 1 250 ciblés = 94,6 %, sous le seuil de travail de 95 %.",
        "Les 67 ménages non servis : 31 absents, 24 au point secondaire en attente de régularisation, 7 dont le jeton avait déjà été utilisé par un tiers, 5 partis avant leur tour (averse).",
        "Retour au stock de Gogrial : 67 kits, DN retour signé à 16h45 ; avec la réserve de 50, 117 kits disponibles pour le rattrapage.",
        "Flash report envoyé à 17h50 à Grace M. : 1 183 servis, 2 incidents (orange résolu, double-passage isolé), 4 plaintes ouvertes.",
      ],
    },
    result: "Livrable L6 terminé : fiche de comptage signée, trois égalités vérifiées à zéro écart, 67 kits retournés au stock, flash report envoyé le soir même.",
    pitfall: "Accepter un écart « de quelques kits » en le mettant sur le compte de la journée chargée. Un kit manquant est soit un vol, soit une erreur de ligne, soit un jeton doublon : on trouve la cause ce soir ou on ne la trouve jamais.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — LE SUIVI POST-DISTRIBUTION (PDM, J+2 → J+7)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 6',
    title: 'Renseigner la section 1 de l\'onglet PDM : le taux de couverture global',
    intro: "L'onglet « PDM » du template plan-logistique-distribution-pdm.xlsx contient deux blocs : « 1. TAUX DE COUVERTURE GLOBAL » (lignes 4 à 8) et « 2. ECHANTILLON DE VERIFICATION PDM » (lignes 10 à 71, 60 lignes). Vous commencez par le premier.",
    steps: [
      {
        title: 'Lisez les quatre cellules du bloc 1',
        actions: [
          "B5 « Ménages cibles » : =Planification!B7, formule déjà en place ; vérifiez qu'elle affiche 1250.",
          "B6 « Ménages servis le jour J (déclaré) » : à saisir, 1183, tiré de votre rapprochement du 21/09 (talons collectés et Kobo), pas de l'estimation de l'équipe.",
          "B7 « TAUX DE COUVERTURE GLOBAL » : =IF(B5=0,\"\",B6/B5), format pourcentage à une décimale.",
          "B8 « Ménages avec écart signalé (échantillon PDM) » : =COUNTIF(I12:I71,\"A VERIFIER\") ; il restera à 0 tant que l'échantillon n'est pas saisi.",
        ],
      },
      {
        title: 'Comparez au seuil',
        actions: [
          "Reportez le seuil du programme ou de la convention (à défaut : 95 %, valeur de travail).",
          "Sous le seuil : analyse des causes obligatoire (étape 5), pas seulement une phrase dans le rapport.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Libellé', 'Contenu', 'Valeur Pan-Akon'],
      rows: [
        ['B5', 'Ménages cibles', '=Planification!B7', '1 250'],
        ['B6', 'Ménages servis le jour J (déclaré)', 'Saisie', '1 183'],
        ['B7', 'Taux de couverture global', 'B6 / B5', '94,6 %'],
        ['B8', 'Ménages avec écart signalé (échantillon)', 'COUNTIF(I12:I71, « A VERIFIER »)', '11 (après saisie de l\'échantillon)'],
      ],
    },
    result: "B6 est saisie à partir d'un comptage vérifié, B7 affiche 94,6 % et le seuil est reporté ; le taux est sous le seuil de 95 %, donc l'analyse des causes est déclenchée.",
    pitfall: "Saisir en B6 le nombre « annoncé » par le chef de site avant rapprochement. B7 repose sur ce seul chiffre : si B6 est faux, tout le PDM est faux, avec un joli pourcentage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 6',
    title: 'Tirer l\'échantillon de 60 ménages avec une méthode écrite',
    intro: "Le template accueille 60 ménages. Pour que l'échantillon ne soit pas choisi « à la main », vous appliquez un tirage systématique à partir d'un départ aléatoire. Entrées : liste des ménages servis (talons), liste des ménages non servis, liste triée par bloc.",
    steps: [
      {
        title: 'Définissez la composition',
        actions: [
          "Prenez 54 ménages servis et 6 ménages non servis : les non servis sont volontairement sur-représentés pour comprendre les causes.",
          "Triez chaque liste par bloc : le tirage systématique répartira alors l'échantillon sur tous les blocs.",
        ],
      },
      {
        title: 'Tirez avec un pas et un départ aléatoire',
        actions: [
          "Servis : pas = 1 183 ÷ 54 ≈ 21,9, retenez 22. Départ : =ALEA.ENTRE.BORNES(1;22) donne par exemple 9. Rangs retenus : 9, 31, 53… jusqu'à 54 ménages (le dernier rang est 9 + 22 × 53 = 1 175, inférieur à 1 183).",
          "Non servis : pas = 67 ÷ 6 ≈ 11,2, retenez 11 ; départ tiré dans 1 à 11, par exemple 4 ; rangs 4, 15, 26, 37, 48, 59.",
          "Prévoyez un remplaçant : le ménage suivant sur la liste, après deux tentatives de contact sans succès ; écrivez la règle et notez chaque remplacement.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — tirage du mercredi 23 septembre',
      lines: [
        "Méthode consignée : « tirage systématique, pas 22 sur la liste des servis triée par bloc, départ aléatoire 9 ; pas 11 sur la liste des non servis, départ 4 ».",
        "60 ménages tirés, dont 54 servis et 6 non servis ; 3 remplacements (ménages absents après deux passages).",
        "Marge d'erreur de lecture : environ ± 12 points au pire (60 ménages) ; l'échantillon indique des écarts, il ne mesure pas un pourcentage précis.",
      ],
    },
    result: "Un échantillon de 60 ménages, tiré par une méthode écrite, couvrant tous les blocs, avec la règle des remplaçants.",
    pitfall: "Interroger « les 60 ménages les plus proches de l'entrepôt ». L'échantillon doit couvrir tous les blocs, y compris ceux qui sont difficiles à joindre : ce sont eux qui ont le plus de chances d'avoir un problème.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 6',
    title: 'Préparer l\'onglet PDM et le questionnaire de vérification',
    intro: "Le tableau de la section 2 contient des lignes d'exemple et des formules. Avant de saisir, vous nettoyez sans détruire les formules. Le questionnaire sur le terrain porte aussi sur le déroulement de la journée : une partie des réponses va dans le template, le reste dans une synthèse annexe.",
    steps: [
      {
        title: 'Nettoyez les lignes d\'exemple, sans toucher aux formules',
        actions: [
          "Repérez les six lignes d'exemple (lignes 12 à 17 : MEN-0012 à MEN-0114, issues du cas de N'Djamena).",
          "Effacez uniquement les colonnes B, C, D, E, G, H et J de ces lignes ; ne touchez pas aux colonnes A (numéros 1 à 60), F (Écart) et I (Discrepancy flag), qui contiennent des formules.",
          "Vérifiez : les listes déroulantes de C (Oui, Non) et de G (Oui, Non, Partiel) sont toujours actives ; B8 doit retomber à 0.",
        ],
      },
      {
        title: 'Préparez le questionnaire, en reliant chaque réponse à une colonne',
        actions: [
          "Servez-vous du tableau ci-dessous. Les réponses qualitatives (attente, traitement, sécurité, CFM) ne s'ajoutent pas au template : conservez-les dans un fichier de synthèse annexe.",
          "Formez les enquêteurs : ils ne font pas partie de l'équipe de distribution, lisent les questions mot à mot et ne suggèrent pas les réponses.",
        ],
      },
    ],
    table: {
      columns: ['Question à poser ou à observer', 'Où va la réponse', 'Source'],
      rows: [
        ['Le ménage a-t-il été servi le jour J ?', 'C « Servi le jour J (Oui/Non) »', 'Registre : talon collecté ou Kobo'],
        ['Combien de kits avez-vous reçus ?', 'E « Qté reçue déclarée (kits) »', 'Déclaration du ménage'],
        ['Qté attendue : 1 kit par ménage', 'D « Qté attendue (kits) »', 'Plan de distribution'],
        ['Le kit contient-il les 5 articles en bon état ? (vérification à vue)', 'G « Kit conforme (Oui/Non/Partiel) »', 'Observation de l\'enquêteur'],
        ['Date de la visite ou de l\'appel', 'H « Date vérification PDM »', 'Enquêteur'],
        ['Faits notables, article manquant, doute', 'J « Commentaire »', 'Enquêteur'],
        ['Temps d\'attente ; traitement ; sécurité ressentie ; connaissance du CFM', 'Fichier de synthèse annexe', 'Déclaration du ménage'],
      ],
    },
    result: "L'onglet est nettoyé sans formule détruite, les enquêteurs sont formés, et chaque réponse a une destination connue.",
    pitfall: "Laisser les six lignes d'exemple dans l'échantillon. Trois d'entre elles sont signalées « A VERIFIER » : elles gonflent B8 de 3 sans que vous le voyiez, et fabriquent une fausse alerte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 6',
    title: 'Mener les entretiens et saisir l\'échantillon ligne par ligne',
    intro: "Les entretiens ont lieu du mercredi 23 au lundi 28 septembre (J+2 à J+7), à domicile ou par téléphone, par des enquêteurs indépendants de la distribution. Chaque ménage a sa ligne, et chaque colonne a une règle de saisie.",
    steps: [
      {
        title: 'Menez l\'entretien en 10 minutes',
        actions: [
          "Présentez-vous, expliquez l'objectif, demandez l'accord ; assurez-le : les réponses sont confidentielles et n'influencent pas l'aide.",
          "Posez les questions du tableau précédent ; demandez à voir le kit si possible et vérifiez les cinq articles.",
          "Notez immédiatement la date et le commentaire ; ne mémorisez rien pour le soir.",
        ],
      },
      {
        title: 'Saisissez la ligne',
        actions: [
          "A est déjà numérotée ; saisissez B (référence anonymisée), C (liste déroulante), D = 1, E (nombre de kits reçus déclaré), G (liste déroulante), H (date), J (commentaire).",
          "Ne saisissez rien en F ni en I : ils se calculent. F = E − D ; I = « A VERIFIER » si C = Non, si F ≠ 0 ou si G = Non ou Partiel, sinon « OK ».",
          "Ne laissez jamais D ou E vide sur une ligne servie : F devient vide et I affiche « A VERIFIER » à tort.",
        ],
      },
    ],
    table: {
      columns: ['Réf.', 'Servi', 'Attendu', 'Reçu', 'Écart (F)', 'Conforme', 'Flag (I)', 'Commentaire'],
      rows: [
        ['PAK-0007', 'Oui', '1', '1', '0', 'Oui', 'OK', 'Kit complet, RAS'],
        ['PAK-0154', 'Oui', '1', '1', '0', 'Partiel', 'A VERIFIER', '1 moustiquaire sur 2'],
        ['PAK-0549', 'Oui', '1', '1', '0', 'Partiel', 'A VERIFIER', 'Natte manquante'],
        ['PAK-0687', 'Oui', '1', '1', '0', 'Non', 'A VERIFIER', 'Couvertures humides, bâche mouillée'],
        ['PAK-0866', 'Oui', '1', '0', '−1', 'Non', 'A VERIFIER', 'Dit n\'avoir rien reçu ; Kobo : autorisé à 10h41'],
        ['PAK-1009', 'Oui', '1', '2', '+1', 'Oui', 'A VERIFIER', 'A reçu deux kits, dont un remis par erreur'],
        ['PAK-0091', 'Non', '1', '0', '−1', 'Non', 'A VERIFIER', 'Absent le jour J (travail aux champs)'],
      ],
    },
    result: "60 lignes saisies, aucune cellule D ou E vide, chaque ligne signalée a un commentaire ; B8 se calcule seule.",
    pitfall: "Écrire « OK » ou « A VERIFIER » à la main dans la colonne I. La formule est écrasée ; la ligne ne réagit plus à une correction, et B8 est faux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 6',
    title: 'Lire les résultats et analyser les causes de chaque écart',
    intro: "Un discrepancy flag n'est pas une erreur : c'est une question. Votre travail est de poser, pour chaque ligne signalée, la question « pourquoi ? » jusqu'à une cause vérifiable, puis de regrouper les causes. Entrées : B7 et B8, les lignes signalées, les registres du 21/09.",
    steps: [
      {
        title: 'Lisez les chiffres',
        actions: [
          "B7 : 94,6 % ; B8 : 11 ménages « A VERIFIER » sur 60 (18,3 %).",
          "Séparez : 6 non servis (par construction, ils sont tous signalés) et 5 écarts parmi les 54 servis, soit 9,3 %.",
          "Classez les écarts : quantité (reçu ≠ attendu), qualité (conforme Non ou Partiel), passage (non servi).",
        ],
      },
      {
        title: 'Cherchez la cause de chaque groupe d\'écarts',
        actions: [
          "Reprenez la source : talons de la ligne, fiche de comptage, DN de la rotation, entretien avec le chef de ligne.",
          "Testez l'hypothèse sur un petit échantillon réel (par exemple 10 kits du même lot).",
          "Rangez la cause dans une famille : préparation du kit, transport et stockage, discipline de ligne, liste et vérification, ou fraude suspectée.",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Hypothèse', 'Vérification faite', 'Cause retenue'],
      rows: [
        ['2 kits « Partiel » (PAK-0154, PAK-0549)', 'Kits mal préparés', 'Ouverture de 10 kits du même lot à l\'entrepôt : 2 sans article', 'Préparation du kit : pas de contrôle du contenu avant scellé'],
        ['1 kit « Non » (PAK-0687)', 'Couvertures mouillées pendant le transport', 'Rotation 3 chargée à 10h30, partie sous l\'averse ; le chauffeur confirme l\'absence de bâche', 'Transport : camion non bâché'],
        ['1 « reçu 0 » alors que Kobo dit autorisé (PAK-0866)', 'Talon collecté sans remise du kit', 'Pointage de la ligne D6 : 4 talons de plus que de traits', 'Discipline de ligne ou détournement : enquête'],
        ['1 « reçu 2 » (PAK-1009)', 'Double remise à la ligne', 'Le ménage confirme ; ligne D3', 'Discipline de ligne : un talon = un kit'],
        ['6 non servis', 'Absence, régularisation, départ', 'Rapprochement du 21/09 : 3 absents, 2 au point secondaire, 1 départ (averse)', 'Liste et jour J : rattrapage à organiser'],
      ],
    },
    result: "Chaque famille d'écarts a une cause vérifiée, et l'on distingue ce qui est systémique (préparation, transport) de ce qui est isolé (une ligne, un ménage).",
    pitfall: "Écrire « erreur humaine » comme cause. Ce n'est pas une cause : c'est l'endroit où l'on arrête de chercher. Demandez toujours quelle règle manquait pour que l'erreur soit possible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 6',
    title: 'Rédiger les mesures correctives datées et clôturer le PDM',
    intro: "Un PDM ne se termine pas par une note dans un rapport : il se termine par des mesures avec un responsable et une échéance. Le template le dit : toute ligne signalée doit être expliquée en commentaire avant clôture du PDM.",
    steps: [
      {
        title: 'Vérifiez que chaque ligne signalée est expliquée',
        actions: [
          "Filtrez la colonne I sur « A VERIFIER » : chaque ligne doit avoir un commentaire en colonne J.",
          "Si une cause n'est pas encore établie, écrivez « cause en cours d'analyse, responsable X, échéance jj/mm » ; ne laissez jamais la cellule vide.",
        ],
      },
      {
        title: 'Rédigez le plan de mesures',
        actions: [
          "Un tableau : Constat | Cause | Mesure corrective | Responsable | Échéance | Indicateur de contrôle.",
          "Distinguez la réparation (rendre ce qui manque aux ménages concernés) et la prévention (changer la règle pour les prochains tours).",
          "Calculez la couverture après rattrapage, hors template : (1 183 + ménages rattrapés) ÷ 1 250, et gardez B6 à la valeur du jour J.",
          "Enregistrez « L7_Plan_logistique_PDM_Pan-Akon_2026-09-28.xlsx », envoyez la synthèse d'une page à la coordination et au programme.",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Mesure corrective', 'Responsable', 'Échéance', 'Contrôle'],
      rows: [
        ['Kits incomplets (PAK-0154, PAK-0549)', 'Compléter les 2 kits ; recompter les 250 kits de la rotation 3 ; liste de contrôle des 5 articles avant scellé', 'Achol D.', '25/09', '0 kit incomplet sur le recomptage'],
        ['Kit mouillé (PAK-0687)', 'Remplacer les couvertures ; bâche obligatoire sur tout camion de distribution', 'Peter A.', '26/09', 'Clause ajoutée au bon de commande transport'],
        ['PAK-0866 : reçu 0 pour Kobo autorisé', 'Enquête sur la ligne D6 : pointage, talons, entretien ; escalade si écart confirmé', 'Ayen K., puis Grace M.', '28/09', 'Rapport d\'enquête signé'],
        ['PAK-1009 : 2 kits', 'Récupérer le kit en trop par le desk CFM ; rappeler « un talon = un kit » aux 32 agents de ligne', 'Akuol P.', '26/09', 'Kit en trop restitué, rappel signé'],
        ['94,6 % : 67 non servis', 'Rattrapage des absents et décisions sur les 24 cas du point secondaire (23 et 24/09)', 'Dr Rebecca N. et vous', '24/09', 'Couverture recalculée : 97,4 % après rattrapage'],
      ],
    },
    result: "Livrable L7 terminé : onglet PDM complet, 11 flags expliqués, 5 mesures datées avec responsable, couverture après rattrapage calculée (1 217 ÷ 1 250 = 97,4 %).",
    tip: "Après rattrapage, le calcul est : 1 183 + 34 ménages (12 régularisés au point secondaire, 18 absents revenus, 4 partis avant leur tour) = 1 217, soit 97,4 %. Restent 33 ménages : 13 absents non retrouvés, 12 identités non confirmées, 7 jetons utilisés par un tiers (enquête), 1 départ.",
    pitfall: "Clore le PDM avec « mesure : sensibilisation du personnel » sans responsable ni date. Une mesure qui ne se mesure pas ne se contrôle pas, et personne ne la fera.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 9 — CLÔTURER LES PLAINTES DU CFM (JUSQU'À J+14)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 4',
    title: 'Passer en revue le registre et prioriser les plaintes ouvertes',
    intro: "Le registre se relit tous les jours pendant 14 jours. Aucune plainte ne doit rester sans responsable ni échéance. Entrées : registre-plaintes-feedback-communautaire.docx rempli au jour J, boîte à plaintes vidée, appels du numéro dédié.",
    steps: [
      {
        title: 'Reprenez toutes les sources du jour',
        actions: [
          "Vidangez la boîte à plaintes en présence de deux personnes ; relevez les messages du numéro dédié ; ajoutez au registre une ligne par plainte, même mineure.",
          "Ne copiez pas deux fois une plainte reçue par deux canaux : notez les deux canaux dans « Nature ».",
        ],
      },
      {
        title: 'Classez et attribuez',
        actions: [
          "Triez par priorité : plainte sensible (exploitation, abus, fraude) d'abord, puis risque pour la sécurité, exclusion, qualité de l'aide, information.",
          "Attribuez à chaque plainte un responsable et une échéance dans la colonne « Suivi nécessaire » (accusé de réception sous 48 h ; clôture visée sous 14 jours).",
          "Faites un point de 15 minutes avec le chef de site et le point focal de la coordination.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — registre au mardi 22 septembre (J+1)',
      lines: [
        "4 plaintes du jour J : PAK-0731 (double passage, en cours), PAK-0958 (nom absent, ouvert), PAK-1103 (attente prioritaire, en cours), 1 plainte sensible (procédure confidentielle).",
        "2 nouvelles lignes reçues par le numéro dédié : PAK-0154 et PAK-0549, kits incomplets.",
        "Priorité : 1) sensible (point focal), 2) PAK-0731 (décision attendue le 23/09), 3) PAK-0958, 4) kits incomplets, 5) PAK-1103.",
      ],
    },
    result: "Chaque plainte est enregistrée une fois, priorisée, attribuée à un responsable avec une échéance de réponse.",
    tip: "Affichez les échéances de clôture dans une colonne visible du registre : une plainte à J+10 sans mouvement se voit tout de suite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 4',
    title: 'Vérifier les faits avant de décider',
    intro: "Une plainte n'est ni crue ni rejetée au premier abord : elle est vérifiée. La vérification reste proportionnée, rapide, confidentielle et écrite. Entrées : la plainte, la liste verrouillée et son journal, le registre des jetons, l'export Kobo, les feuilles de pointage.",
    steps: [
      {
        title: 'Croisez quatre sources',
        actions: [
          "La liste verrouillée et son journal des modifications : le ménage y figure-t-il, a-t-il été retiré, par qui, sur quelle décision ?",
          "Le registre des jetons : à qui a été remis le jeton, avec quelle signature ?",
          "L'export Kobo et les talons : heure et ligne du passage, ménage, nombre de kits.",
          "Les agents concernés et les témoins (chef de bloc) : entretiens séparés, notés, sans présumer de la faute.",
        ],
      },
      {
        title: 'Entendez le plaignant en confidentialité',
        actions: [
          "Entretien assis, à l'écart, par un agent du CFM de même sexe si possible ; demandez ce qui s'est passé et ce que la personne attend.",
          "Ne promettez rien que vous ne pouvez tenir (« je vous donnerai un kit ») : promettez une réponse et une date.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — vérification de PAK-0731 (22 septembre)',
      lines: [
        "Registre des jetons : jeton PAK-0731 remis le 19/09 à la chef de ménage elle-même, signature présente, pièce vue.",
        "Export Kobo : autorisé à 08h12, ligne V2 ; entretien de l'agent de V2 : un homme a présenté le jeton, aucune pièce demandée (ligne saturée).",
        "Chef de bloc F (en présence d'Akuol P.) : la chef de ménage est veuve ; l'homme n'est pas du bloc. Plainte fondée : jeton utilisé par un tiers.",
      ],
    },
    result: "Pour chaque plainte, une conclusion argumentée par au moins deux sources, et une note de vérification datée dans le dossier.",
    pitfall: "Interroger l'agent mis en cause devant le plaignant ou devant le chef de communauté. La confrontation publique intimide le plaignant et expose l'agent avant toute conclusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 4',
    title: 'Documenter l\'action et choisir le statut avant toute clôture',
    intro: "Aucune plainte ne peut être marquée « Clôturé » sans une action documentée dans la colonne « Action prise » : même quand elle s'avère non fondée. Une plainte clôturée sans ligne d'action renseignée est, en audit, une plainte non traitée.",
    steps: [
      {
        title: 'Rédigez l\'action prise : dates, faits, décision',
        actions: [
          "Écrivez des phrases datées et courtes : jj/mm : ce qui a été vérifié ; jj/mm : ce qui a été décidé ; jj/mm : ce qui a été fait.",
          "Plainte fondée : indiquez la réparation (kit remis, excuse, rectification de liste) ET la règle corrigée. Plainte non fondée : indiquez ce qui a été vérifié et pourquoi les faits ne sont pas confirmés.",
        ],
      },
      {
        title: 'Appliquez la règle des trois statuts',
        actions: [
          "Ouvert : reçue, enregistrée, accusé de réception, rien de vérifié.",
          "En cours : vérification ou décision en attente, ou réparation non terminée ; « Suivi nécessaire » = Oui, avec qui et quand.",
          "Clôturé : action documentée ET réponse donnée au plaignant ET validation par une seconde personne (point focal redevabilité) ; « Suivi nécessaire » = Non.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Référence', 'Action prise (extrait)', 'Statut', 'Suivi nécessaire'],
      rows: [
        ['21/09/2026', 'PAK-0731', '21/09 : isolée au point secondaire, pas de service sur place. 22/09 : Kobo (V2, 08h12), entretien agent V2, chef de bloc F : plainte fondée, jeton utilisé par un tiers sans pièce. 23/09 : décision du programme (Dr Rebecca N.), kit de la réserve remis à la chef de ménage devant le point focal, signature. 24/09 : règle « pièce à chaque ligne » rappelée aux 24 agents de vérification', 'Clôturé (24/09)', 'Non — voir note de tendances'],
        ['21/09/2026', 'PAK-0958', '22/09 : chef de bloc : deux ménages distincts (cousins partageant un téléphone) classés « doublon probable » et le second retiré par erreur à la procédure 1. 23/09 : réintégration par le journal à deux signatures, kit remis sur la réserve. Règle : un doublon probable sans visite du ménage est gardé avec note', 'Clôturé (24/09)', 'Non'],
        ['21/09/2026', 'PAK-1103', '21/09 : excuses, kit remis à 10h50. 22/09 : debriefing : 3 des 7 agents d\'assistance étaient en pause au moment du pic ; planning des pauses corrigé', 'Clôturé (22/09)', 'Non'],
        ['21/09/2026', 'Anonyme (boîte)', 'Transmise au point focal, procédure confidentielle ; suite hors registre', 'En cours', 'Oui — dossier confidentiel'],
      ],
    },
    result: "Les trois plaintes clôturées ont chacune une action datée, une règle corrigée et une validation ; la plainte sensible reste « En cours » dans le registre, suivie hors registre.",
    pitfall: "Marquer « Clôturé » parce que le kit a été remis, sans écrire l'action. Le premier point relevé par un auditeur bailleur ou un point focal redevabilité est la colonne « Action prise » : vide, elle annule le statut.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 4',
    title: 'Répondre au plaignant, boucler et exploiter les tendances',
    intro: "La clôture n'est complète que lorsque le plaignant a reçu une réponse. Elle n'est utile que si l'on retire du registre les signaux d'alerte qui permettent de corriger avant la crise de confiance.",
    steps: [
      {
        title: 'Répondez et enregistrez la réponse',
        actions: [
          "Répondez par le canal choisi par la personne, en langage simple : ce qui a été vérifié, ce qui est décidé, ce qui est fait.",
          "Notez dans « Action prise » la date et le canal de la réponse ; demandez si la personne estime l'affaire réglée.",
        ],
      },
      {
        title: 'Rédigez la note de tendances à J+14',
        actions: [
          "Comptez les plaintes par type, par ligne, par bloc et par agent (sans nom, avec un code) ; repérez ce qui se répète.",
          "Règle d'alerte : trois plaintes ou plus sur le même agent, la même ligne ou le même bloc déclenchent une enquête.",
          "Transmettez la note à la coordination et au programme avec trois recommandations datées ; intégrez-les au protocole du prochain tour.",
        ],
      },
    ],
    table: {
      columns: ['Type', 'Nombre', 'Signal', 'Recommandation'],
      rows: [
        ['Contenu et remise du kit (incomplet, humide, 0 ou 2 kits)', '4', 'Deux kits incomplets du même lot, un camion non bâché, une ligne (D6) sous enquête', 'Contrôle du contenu avant scellé ; enquête D6 ; bâche obligatoire'],
        ['Liste et jeton (double passage, nom absent, retiré à tort)', '3', 'Deux erreurs de procédure 1 et 5 : pièce non demandée, doublon probable non visité', 'Pièce obligatoire ; visite avant retrait d\'un doublon probable'],
        ['Dignité et attente', '1', 'Pauses simultanées pendant le pic', 'Planning de pauses décalé'],
        ['Plainte sensible', '1', 'Traitée hors registre', 'Aucune donnée dans la note'],
        ['Total', '9', '9 plaintes sur 1 250 ménages (0,7 %), 8 clôturées à J+14', 'La sensible reste suivie hors registre'],
      ],
    },
    result: "Livrable L8 terminé : registre de 9 plaintes, aucune clôturée sans action, réponses données, note de tendances avec 3 recommandations datées transmise à la coordination.",
    pitfall: "Ne jamais lire le registre une fois les plaintes clôturées. C'est une mine : trois plaintes sur la même ligne, c'est un problème de ligne, pas de malchance. Un CFM que l'on n'analyse pas n'est qu'une formalité.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — PAN-AKON, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Le plan logistique final de Pan-Akon',
    scenario: "Rappel : distribution unique de kits NFI à 1 250 ménages déplacés par les crues, le lundi 21 septembre 2026, avec un camion de 8 000 kg et 30 m³, 6 km de piste détrempée entre l'entrepôt de Gogrial et le site.",
    steps: [
      { title: 'Raisonnement', body: "On part de la liste verrouillée (1 250), on renseigne les 7 paramètres du template, on lit les rotations (le volume commande : 3), on fixe le pic (240 ménages/h) puis les agents (ratio de foule relevé à 3), enfin on construit un chronogramme qui garde une heure de marge.", result: "Un plan qui tient en une journée, avec une capacité de 1 560 ménages pour 1 250 à servir (+25 %)." },
    ],
    table: {
      columns: ['Section du template', 'Cellules', 'Résultat Pan-Akon'],
      rows: [
        ['1. Paramètres', 'B5 à B11', 'Pan-Akon ; 21/09/2026 ; 1 250 ménages ; 9 kg ; 0,060 m³ ; camion 8 000 kg / 30 m³'],
        ['2. Besoins de transport', 'B14 à B18', '11 250 kg ; 75,0 m³ ; 2 rotations (poids), 3 (volume) ; 3 rotations retenues : 500 + 500 + 250 kits'],
        ['3. Besoins en staff', 'B22:B26, C22:C27', 'Ratios 2 / 3 / 3 / 1 / 1 ; agents 25 / 38 / 38 / 13 / 13 ; total 127 (31 Kerowa + 96 journaliers)'],
        ['4. Chronogramme', 'A31:D44', '14 lignes : 05h30 briefing à 17h00 rapprochement ; rotations 07h00, 09h00, 11h00 ; vagues Rouge, Bleu, Vert, Jaune ; marge 14h00–15h00'],
        ['Liaison vers l\'onglet PDM', 'PDM!B5', '= Planification!B7 = 1 250 ménages cibles'],
      ],
    },
    tip: "Gardez le raisonnement à côté des chiffres : le jour où l'on vous demandera pourquoi 127 agents et non 100, la réponse est dans le commentaire de la cellule B24, pas dans votre mémoire.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — De la liste du programme à la liste verrouillée',
    scenario: "La liste reçue le 11 septembre contenait 1 284 lignes. Voici le trajet des lignes jusqu'à la version verrouillée du 17 septembre.",
    steps: [
      { title: 'Ce qui a été fait', actions: ["Contrôle de structure : 51 défauts renvoyés au programme, copie source en lecture seule.", "Normalisation et tests de doublons : 21 doublons internes (11 exacts, 10 probables), 4 homonymes conservés.", "Croisement avec Horizon Abri : 13 ménages déjà servis, 4 homonymes conservés.", "Décisions signées par le programme, journal des modifications ouvert, liste verrouillée v1 en PDF signé et 3 exemplaires numérotés."] },
    ],
    table: {
      columns: ['Étape', 'Lignes', 'Décision', 'Preuve'],
      rows: [
        ['Fichier reçu (11/09)', '1 284', 'Copie source en lecture seule', 'SOURCE_Liste_programme_2026-09-11.xlsx'],
        ['Doublons internes (14/09)', '− 21', 'Retirés après vérification par le chef de bloc', 'Onglet « Lignes retirées »'],
        ['Déjà servis ailleurs (15/09)', '− 13', 'Retirés (décision programme, visa coordinatrice)', 'Note de décision signée le 16/09'],
        ['Liste verrouillée (17/09)', '1 250', 'v1 signée, journal à deux signatures', 'L1_Liste_VERROUILLEE_v1_2026-09-17.xlsx + PDF'],
        ['Jetons imprimés (18/09)', '1 250 + 10 de remplacement', 'Sous clé, comptés par paquets de 50', 'Procès-verbal Peter A. / vous'],
      ],
    },
    result: "34 lignes ont été retirées avec décision et preuve : 306 kg et environ 1 428 EUR de marchandises ont été préservés pour des ménages éligibles, qui n'ont pas été privés de kit.",
    pitfall: "Parmi les retraits, un ménage (PAK-0958) a été retiré à tort : « doublon probable » jugé par téléphone. C'est la plainte qui l'a révélé le jour J. La règle corrigée : on visite avant de retirer.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — Le jour J en chiffres',
    scenario: "Lundi 21 septembre 2026 : 127 agents, 6 lignes de vérification, 8 lignes de distribution, 3 rotations, un double-passage et un débordement.",
    steps: [
      { title: 'Ce que montre la journée', actions: ["Le site s'est ouvert à 07h30 comme prévu ; le comptage horaire montre un retard maximal de 10 % à 12h00.", "L'incident A (jeton PAK-0731 déjà utilisé) a été isolé au point secondaire sans interrompre la ligne ; aucun service sur place ; plainte enregistrée.", "L'incident B (averse + rumeur, 10h20) a été résorbé en 25 minutes : annonce chiffrée, entrée fermée 20 minutes, réserve mobile, extraction des vulnérables.", "Le rapprochement du soir donne zéro écart sur les trois égalités."] },
    ],
    table: {
      columns: ['Heure', 'Événement', 'Réponse', 'Résultat'],
      rows: [
        ['05h30 – 07h30', 'Briefing, balisage, rotation 1 (500 kits), tablettes testées', 'Checklist d\'ouverture', 'Ouverture 07h30'],
        ['08h12 – 08h45', 'Jeton PAK-0731 présenté deux fois', 'Point secondaire, 5 questions, pas de service sur place', 'Plainte tracée, décision du programme sous 48 h'],
        ['09h00 – 09h30', 'Rotation 2 (500 kits) ; vague Bleu', 'Comptage contradictoire', 'Stock tampon ≥ 1 h'],
        ['10h20 – 10h45', 'Averse, rumeur « kits finis », 300 personnes de plus', 'Code orange, annonce chiffrée, entrée fermée 20 min, sas, extraction', '0 blessé grave, 1 malaise'],
        ['11h00', 'Rotation 3 (250 kits)', 'Vague Verte décalée à 11h20', 'Retard de 87 ménages à 12h00'],
        ['15h00 – 17h00', 'Comptage final et rapprochement', '3 égalités vérifiées, DN retour 67 kits', '1 183 servis (94,6 %)'],
      ],
    },
    tip: "Un chiffre affiché au bon moment a plus d'effet que dix messages de rassurance : « 487 kits sur site + 250 en route = 737 ménages restants » a fait retomber la tension en deux minutes.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — Le PDM et la décision sur le seuil de 95 %',
    scenario: "Du 23 au 28 septembre, 60 ménages ont été interrogés (54 servis, 6 non servis). Le taux de couverture du jour J est de 94,6 %, sous le seuil de travail de 95 %.",
    steps: [
      { title: 'Lecture', body: "Le template affiche B7 = 94,6 % et B8 = 11 ménages « A VERIFIER ». Parmi les 54 servis, 5 écarts (9,3 %). Les causes sont de quatre familles : préparation du kit, transport, discipline de ligne, liste. Le rattrapage récupère 34 ménages : couverture finale de 97,4 %." },
      { title: 'Décision', actions: ["Compléter immédiatement ce qui manque aux ménages concernés (2 kits, 1 kit mouillé, 1 kit en trop récupéré).", "Ouvrir une enquête sur la ligne D6 (PAK-0866).", "Écrire quatre règles pour les prochains tours : contrôle du contenu avant scellé, bâche obligatoire, un talon = un kit, pièce à chaque ligne.", "Transmettre à la coordination la synthèse d'une page avec le plan de mesures daté."] },
    ],
    table: {
      columns: ['Indicateur', 'Valeur', 'Lecture'],
      rows: [
        ['Ménages cibles (B5)', '1 250', 'Issu de la liste verrouillée'],
        ['Servis le jour J (B6)', '1 183', 'Rapprochement du 21/09'],
        ['Taux de couverture (B7)', '94,6 %', 'Sous le seuil : analyse obligatoire'],
        ['Écarts signalés (B8)', '11 sur 60', '6 non servis + 5 écarts sur 54 servis (9,3 %)'],
        ['Couverture après rattrapage', '97,4 % (1 217 / 1 250)', 'Calculée hors template ; B6 reste à la valeur du jour J'],
      ],
    },
    result: "Le PDM ne s'est pas arrêté au pourcentage : quatre causes vérifiées, cinq mesures datées et une couverture finale chiffrée.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — Le registre de plaintes clôturé et la synthèse de J+14',
    scenario: "Lundi 5 octobre (J+14) : le registre compte 9 plaintes. Voici la synthèse transmise à la coordination, telle qu'elle a été rédigée (version condensée).",
    steps: [
      { title: 'Ce que montre le registre à J+14', actions: ["8 plaintes clôturées, chacune avec une action datée, une réponse donnée au plaignant et la validation du point focal redevabilité.", "1 plainte sensible suivie hors registre.", "Aucune plainte « résolue » sans action renseignée."] },
    ],
    example: {
      title: 'Note de synthèse — Distribution NFI de Pan-Akon (extrait)',
      lines: [
        "1. Résultat — 1 250 ménages ciblés, 1 183 servis le jour J (94,6 %), 1 217 après rattrapage (97,4 %). 1 250 kits sortis, 67 retournés au stock, écart de stock nul.",
        "2. Incidents — 1 double-passage (jeton PAK-0731) isolé sans interruption ; 1 débordement de foule résorbé en 25 minutes, 0 blessé grave.",
        "3. PDM — 60 ménages ; 11 écarts expliqués ; causes : préparation du kit, camion non bâché, discipline de ligne D6 (enquête), un retrait de liste à tort ; 5 mesures datées.",
        "4. CFM — 9 plaintes (0,7 % des ménages), 8 clôturées avec action documentée ; tendance principale : contenu et remise du kit (4 sur 9).",
        "5. Recommandations pour le prochain tour — contrôle du contenu avant scellé ; bâche obligatoire ; pièce à chaque ligne de vérification ; visite avant retrait d'un doublon probable ; panneau « kits restants » mis à jour toutes les 30 minutes.",
        "Rédigé par : Supply Chain Manager — 05/10/2026.",
      ],
    },
    result: "Le cas est résolu : liste verrouillée, plan logistique complet, jour J documenté, PDM avec mesures datées, registre sans plainte clôturée sans action, et une synthèse d'une page.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Distribution NFI sur un site de déplacés à N\'Djamena (Tchad)',
    instructions: "Vous êtes Supply Chain Officer de l'ONG internationale fictive Nahar Solidarité, qui mène la distribution de kits NFI (bâches, couvertures, ustensiles de cuisine, moustiquaires) sur un site de déplacés en périphérie de N'Djamena, regroupant environ 1 800 ménages. C'est le troisième tour de distribution depuis l'ouverture du camp, il y a trois mois. Vers 10h30, sous une chaleur écrasante, deux problèmes surviennent en même temps. La file, organisée en un seul couloir, déborde sur les côtés faute de balisage suffisant : plusieurs centaines de personnes supplémentaires, non prévues dans l'estimation du pic horaire, se pressent autour du point de vérification et une bousculade commence près de l'entrée. Au même moment, l'agent de vérification signale qu'un nom présenté correspond à un ménage déjà marqué « servi » une heure plus tôt : double-enregistrement ou double-passage, sans que l'on puisse déterminer sur le moment lequel des deux passages est frauduleux.",
    steps: [
      { title: 'Question 1 (a) — Résorber le débordement', actions: ["Écrivez la séquence exacte d'actions sur le site pour résorber le débordement sans créer de panique, en vous appuyant sur les procédures 5 et 6.", "Justifiez chaque action en une phrase."] },
      { title: 'Question 1 (b) — Isoler le double-passage', actions: ["Écrivez la séquence pour isoler le cas suspecté sans interrompre le flux général ni exposer la personne, puis ce que vous documentez.", "Votre réponse complète aux questions 1 (a) et (b) ne dépasse pas une page."] },
      { title: 'Question 2 — Plan logistique', actions: ["Dans plan-logistique-distribution-pdm.xlsx, onglet Planification, saisissez 1 800 ménages cibles, kit de 12 kg et 0,045 m³, camion de 8 000 kg et 30 m³, date du 14/09/2026.", "Lisez les rotations ; recalculez le pic horaire et les présents simultanés avant et après l'incident ; révisez à la hausse le ratio de gestion de foule (B24) et le total C27 ; complétez les six lignes libres du chronogramme."] },
      { title: 'Question 2 — Suivi post-distribution (PDM)', actions: ["Dans l'onglet PDM, saisissez B6 = 1 740, remplacez les lignes d'exemple par 60 ménages (au moins 3 avec un écart de couverture), et vérifiez que B7 et les discrepancy flags se calculent correctement.", "Contrôlez à la main le flag attendu de chaque ligne signalée."] },
      { title: 'Question 3 — Registre de plaintes', actions: ["Dans registre-plaintes-feedback-communautaire.docx, consignez le cas de double-passage : référence anonymisée, nature exacte, action prise sur le moment, statut cohérent avec une clôture qui ne peut pas encore être définitive."] },
    ],
    tip: "Faites l'exercice en deux passes : d'abord seul, sans regarder la correction ; ensuite comparez, ligne par ligne. Les chiffres de la correction sont donnés pour vérifier vos calculs, pas pour les remplacer.",
    deliverable: "Les trois éléments : la réponse écrite à la question 1 (une page maximum), le fichier Excel complété (onglets Planification et PDM) et le registre Word complété.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés et documentés.",
    example: {
      title: 'Planification — calculs attendus (1 800 ménages)',
      lines: [
        "B14 = 1 800 × 12 = 21 600 kg ; B15 = 1 800 × 0,045 = 81,0 m³ ; B16 = ROUNDUP(21 600 / 8 000) = 3 ; B17 = ROUNDUP(81 / 30) = 3 ; B18 = 3 rotations (666 kits par rotation : 666 + 666 + 468).",
        "Staff par défaut : 36 + 54 + 36 + 18 + 18 = 162. Après révision : B24 = 4 (gestion de foule) → 72 ; B25 = 2 (premiers secours) → 36 ; total C27 = 36 + 54 + 72 + 36 + 18 = 216.",
        "Pic initial : 1 800 / 6,5 h = 277 ménages/h ; × 1,3 = 360/h ; × 1,5 h = 540 ménages présents ; × 1,5 personnes = 810 ; + 20 % ≈ 970 personnes.",
        "Pic après incident : même flux, mais 2,5 personnes par ménage et + 25 % de curieux : 540 × 2,5 = 1 350 ; × 1,25 ≈ 1 690 personnes, soit environ 3 380 m² à 2 m² par personne.",
        "Lignes : 360 / 30 = 12 lignes de distribution ; 360 / 60 = 6 lignes de vérification minimum (8 retenues).",
      ],
    },
    bullets: [
      "Q1 (a) — Dans l'ordre : annonce rassurante au mégaphone (la rumeur est la première cause de poussée) ; fermeture temporaire de l'entrée et arrêt de l'appel du bloc suivant (on ne décomprime pas une foule qui grossit) ; réserve mobile qui rebalise en plusieurs couloirs avec des sas ; extraction par la voie prioritaire des personnes âgées, enfants et femmes enceintes ; eau et ombre pour les malaises ; redémarrage par tranches de 50 ménages. Les lignes de vérification et de distribution ne s'arrêtent pas.",
      "Q1 (b) — Phrase neutre, geste d'accompagnement vers le point secondaire, jeton retenu, heure et ligne du premier passage notées, cinq questions du point secondaire ; pas de service sur place, pas d'accusation publique ; plainte enregistrée ; décision du programme sous 48 h. On ne peut pas savoir lequel des deux passages est frauduleux : on conserve la preuve et l'exactitude du stock.",
    ],
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Correction du PDM et du registre',
    body: "Le fichier Excel et le registre se vérifient chiffre à chiffre. Les valeurs ci-dessous sont des repères pour votre contrôle.",
    example: {
      title: 'PDM et registre — repères',
      lines: [
        "B5 = 1 800 (liée à Planification!B7) ; B6 = 1 740 ; B7 = 1 740 / 1 800 = 96,7 %.",
        "Exemple d'échantillon : 60 ménages dont 4 signalés (1 « Partiel » avec bâche manquante, 1 « reçu 0 » alors que servi, 1 « reçu 2 » (suspicion de double passage), 1 non servi) → B8 = 4.",
        "Attention : si vous gardez les 6 lignes d'exemple du template (MEN-0012 à MEN-0114), 3 sont déjà « A VERIFIER » : B8 sera faussé.",
        "Registre : 14/09/2026 | MEN-0xxx (réf. anonymisée) | Nom présenté déjà marqué « servi » une heure plus tôt (suspicion de double passage), signalé par l'agent de vérification | Écart isolé sur site sans interrompre le flux ; ménage orienté vers la vérification secondaire ; croisement avec la liste en cours | En cours | Oui — confirmer sous 48 h avec le point focal communautaire.",
      ],
    },
    bullets: [
      "Un statut « Clôturé » ici serait faux : la vérification n'est pas faite. Un « En cours » avec un suivi daté est la seule réponse cohérente.",
      "La référence du plaignant est un code de ménage, jamais un nom ; la nature des faits est écrite sans accuser personne.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Transposer à votre propre distribution',
    instructions: "Appliquez les 9 procédures à votre distribution actuelle ou à la dernière que vous avez conduite. Si vous n'êtes pas en poste, utilisez une distribution dont vous connaissez bien le contexte. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'J-10 à J-4', actions: ["Liste verrouillée avec journal de contrôle (doublons internes, croisement avec les tours précédents et les autres acteurs, décisions signées)."] },
      { title: 'J-5 à J-3', actions: ["Plan logistique complété dans l'onglet Planification : rotations, agents par poste (avec le motif de chaque ratio modifié), chronogramme sans « A completer », calcul du pic horaire en brouillon."] },
      { title: 'J-3 à J-1', actions: ["Plan de site à sens unique avec surface utile, surface nécessaire et marge ; système de vérification choisi sur critères ; jetons ou formulaire Kobo testés ; checklist go / no-go signée."] },
      { title: 'Jour J', actions: ["Feuille de suivi horaire, journal d'incidents, rapprochement kits / jetons / Kobo et registre de plaintes à jour avant 18h00."] },
      { title: 'J+2 à J+7', actions: ["Onglet PDM complété : B6 issu d'un comptage vérifié, échantillon tiré avec une méthode écrite, flags expliqués, plan de mesures daté."] },
      { title: 'Jusqu\'à J+14', actions: ["Registre de plaintes sans clôture sans action, réponses données, note de tendances avec trois recommandations."] },
    ],
    tip: "Anonymisez les données personnelles (noms, téléphones, références de ménages) avant de partager votre travail en dehors de votre organisation. Les seules références acceptables sont des codes.",
    deliverable: "Votre propre kit de distribution (L1 à L8), réutilisable à chaque nouveau tour.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "La liste est verrouillée (version, date, signature), accompagnée d'un journal qui décrit les doublons trouvés, les croisements faits et les décisions prises ; elle porte un nombre de lignes identique à B7.",
      "Le plan logistique n'a plus aucune valeur d'exemple ni « A completer » ; les rotations suivent la contrainte la plus serrée (poids ou volume) ; chaque ratio modifié est justifié par un commentaire.",
      "Le chronogramme garde une marge de temps explicite pour les imprévus, et les rotations sont placées de façon à ne jamais laisser le site sous une heure de stock.",
      "Le site est dimensionné sur les présents simultanés au pic (et non sur les ménages ciblés), avec au moins 25 % de marge et un circuit à sens unique dont la sortie est distincte de l'entrée.",
      "Le système de vérification est choisi sur la taille et le risque, avec un secours papier ; les jetons sont comptés, rapprochés (remis + restants = total) et aucun jeton ne passe par un intermédiaire.",
      "Le protocole d'anomalie isole la personne sans interrompre la ligne ni l'exposer ; aucun ajout ou service sur place n'est autorisé sans validation écrite.",
      "Le rapprochement du jour J montre trois égalités à zéro écart (kits, jetons, Kobo / talons) ou un écart expliqué le soir même.",
      "L'onglet PDM : B6 vient d'un comptage vérifié, aucune ligne d'exemple n'est restée, aucune cellule D ou E n'est vide, chaque ligne « A VERIFIER » a un commentaire, et les mesures correctives ont un responsable et une date.",
      "Le registre : une ligne par plainte, référence anonymisée, aucune plainte « Clôturé » sans action documentée, plaintes sensibles traitées hors registre.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Sous-estimer la taille de la foule en dimensionnant le site sur le seul nombre de ménages ciblés. → Calculez les présents simultanés au pic (accompagnants, curieux, temps de séjour) et exigez 25 % de marge.",
      "Ne pas croiser la liste avec les tours précédents ni avec les autres acteurs du site. → Normalisez téléphone, nom et numéro, comptez les répétitions, croisez, puis faites trancher chaque cas par le programme, par écrit.",
      "Improviser une correction de liste le jour J sous la pression d'un chef ou d'une file qui s'impatiente. → Liste verrouillée, journal à deux signatures, aucune exception par téléphone ni par ordre oral.",
      "Calculer les rotations sur le seul poids. → Lisez les deux contraintes (poids et volume) et retenez le maximum ; vérifiez ensuite le temps de cycle et le stock tampon.",
      "Planifier la journée à l'heure près sans marge. → Gardez au moins une heure en fin de journée et un plan B camion.",
      "Traiter la gestion de foule comme un sujet de sécurité externe uniquement. → Le staff de distribution tient le circuit, les autorités tiennent la périphérie ; chaque agent peut annoncer « code orange ».",
      "Remettre les jetons par les chefs de communauté ou en imprimer « en plus ». → Remise par vos équipes, face à face, rapprochement remis + restants = total ; jetons de remplacement numérotés, sous clé.",
      "Laisser les lignes d'exemple du template, saisir B6 de mémoire ou taper « OK » à la main dans la colonne I. → Effacez les exemples sans toucher aux formules, saisissez B6 depuis le rapprochement, ne tapez jamais dans F ni I.",
      "Clôturer une plainte sans action documentée, ou ne jamais analyser le registre. → Action datée avant toute clôture, réponse donnée au plaignant, note de tendances à J+14.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez contrôlé, croisé et verrouillé une liste de 1 250 ménages, avec un journal des doublons, des croisements et des décisions.",
      "Vous avez complété le plan logistique : rotations (3), personnel (127 agents répartis par ligne) et chronogramme de 14 lignes avec une marge d'une heure.",
      "Vous avez dimensionné un site sur 780 présents simultanés, tracé un circuit à sens unique et signé une checklist go / no-go.",
      "Vous avez choisi et mis en place un système de vérification hybride, imprimé et remis les jetons, testé les tablettes et répété la journée.",
      "Vous avez isolé un double-passage sans interrompre le flux et résorbé un débordement de foule sans blessé grave.",
      "Vous avez documenté la journée en temps réel et rapproché kits, jetons et Kobo avec zéro écart.",
      "Vous avez conduit un PDM sur 60 ménages, calculé un taux de couverture, expliqué chaque écart et rédigé cinq mesures datées.",
      "Vous avez tenu un registre de plaintes sans clôture sans action, et rédigé une note de tendances à J+14.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais calculer les besoins de transport (poids et volume) et de personnel d'une distribution à partir du nombre de ménages ciblés, et construire un chronogramme avec marge.",
      "Je sais pourquoi une liste doit être verrouillée et croisée avec les tours précédents et les autres acteurs avant chaque distribution, et comment le faire dans Excel.",
      "Je sais organiser un circuit de site à sens unique qui limite le risque de bousculade, et dimensionner la surface sur les présents au pic.",
      "Je sais choisir entre jetons, Kobo/ODK ou les deux selon la taille et le risque du site.",
      "Je sais isoler un cas de double-passage suspecté sans interrompre la distribution ni exposer la personne concernée.",
      "J'ai complété le plan logistique et le suivi PDM avec le template plan-logistique-distribution-pdm.xlsx, avec un taux de couverture calculé correctement.",
      "J'ai consigné un incident dans le registre-plaintes-feedback-communautaire.docx avec une action documentée avant toute clôture, et je sais expliquer à un collègue pourquoi un CFM est un outil de redevabilité, pas une formalité de conformité.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Transport International & Dédouanement ». Vous y sécuriserez une expédition internationale de la signature de la commande jusqu'au dossier prêt pour le dédouanement : Incoterms 2020, choix du fret aérien, maritime ou terrestre, et documents douaniers (Bill of Lading, packing list, certificat d'origine).",
  },
]
