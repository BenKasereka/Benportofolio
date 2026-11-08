// Module 03 — Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (espace de travail Claude, analyse d'un document long, revue
// critique et contre-argumentation, rédaction itérative d'une procédure) est
// détaillée étape par étape et appliquée au même fil rouge : le rapport
// d'audit interne de 140 pages du consortium Kivu Résilience, piloté par
// Horizon Grands Lacs. Organisation, personnes, constats et chiffres fictifs.
export default [
  {
    type: 'cover',
    title: "Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite",
    hook: "À la fin de ce module, vous saurez prendre un rapport d'audit de 140 pages, en extraire en une matinée les 5 constats qui comptent — chacun sourcé à la page près et vérifié —, démonter une recommandation fragile avant qu'un auditeur ne le fasse, puis rédiger avec Claude, section par section, la procédure interne qui corrige le problème, relue et signée.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Préparer un espace de travail Claude sûr pour un dossier sensible (compte professionnel, confidentialité, document vérifié, Project paramétré), en produisant un Project nommé avec ses instructions et une fiche de préparation du document.",
      "Formuler une demande de synthèse selon les quatre éléments objectif, audience, niveau de détail, format, en produisant une ligne complète dans le gabarit de prompts d'analyse de documents longs.",
      "Faire analyser un document de plus de 100 pages et contrôler la réponse contre la source, en produisant une note de synthèse d'une page dont chaque constat porte sa page source, et un tableau de vérification.",
      "Obtenir de Claude une revue critique et une contre-argumentation réelles d'un raisonnement, en produisant un tableau des objections et des hypothèses implicites, et une recommandation révisée.",
      "Rédiger une procédure professionnelle par itération section par section, en produisant un plan verrouillé, un journal de rédaction rempli et une procédure complète de 6 pages.",
      "Conduire le contrôle qualité final et la relecture humaine avant diffusion, en produisant le guide de rédaction du module complété jusqu'à la signature.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une présentation de Claude : vous allez l'utiliser comme un analyste et un rédacteur senior, sur un vrai dossier, du document reçu jusqu'au texte signé. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les menus à ouvrir, les cellules du gabarit à remplir et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main six livrables réutilisables tels quels sur vos propres dossiers :",
    ],
    bullets: [
      "Un Project Claude paramétré (instructions, document de référence) et une fiche de préparation du document (type de PDF, pagination, données sensibles).",
      "Une ligne complète du gabarit « gabarit-prompts-analyse-documents-longs.xlsx » : objectif, audience, niveau de détail, format, type de document, prompt complet.",
      "Une note de synthèse d'une page : 5 constats prioritaires, chacun avec sa page source, et un tableau de vérification contre le rapport.",
      "Un tableau de contre-argumentation : faiblesses, meilleure objection, hypothèses implicites testées, décision prise pour chacune.",
      "Une procédure interne de 6 pages rédigée section par section, avec le journal de rédaction du guide « guide-redaction-rapports-procedures-claude.docx ».",
      "Le contrôle qualité final du guide complété, signé et daté, avant diffusion.",
    ],
    tip: "Ouvrez dès maintenant les deux fichiers du dossier 04-templates : vous remplirez le gabarit Excel pendant la procédure 2 et le guide Word pendant la procédure 4, en même temps que vous lisez les étapes.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le comité de direction du jeudi 19 mars 2026',
    body: [
      "Horizon Grands Lacs, organisation fictive présente à Goma, Bukavu et Kinshasa, est chef de file du consortium Kivu Résilience, financé notamment par ECHO, avec deux partenaires locaux (APK et Mwangaza). Le lundi 9 mars 2026, la directrice pays Furaha Bisimwa transmet à Amani Kahindo, chargée administrative et logistique à Goma, le rapport d'audit interne de l'exercice 2025 : 140 pages, 31 constats, rédigé par l'auditeur interne Josué Paluku.",
      "Sa demande : « Le comité de direction de jeudi 19 mars nous donne 20 minutes sur l'audit. Prépare-moi ce qu'il faut pour qu'on décide. » Le comité compte cinq membres, aucun n'est auditeur. Patrick Mumbere, responsable achats, a déjà sa propre idée de la réponse à apporter.",
    ],
    table: {
      columns: ['Chapitre du rapport', 'Pages imprimées', 'Contenu'],
      rows: [
        ['1. Synthèse de l\'auditeur', '1 à 6', 'Opinion globale, tableau des 31 constats (7 élevés, 15 moyens, 9 faibles)'],
        ['2. Méthodologie et périmètre', '7 à 12', '186 dossiers d\'achat testés, 3 sites, janvier-décembre 2025'],
        ['3 à 5. Planification, mise en concurrence, dossiers d\'achat', '13 à 48', 'Constats C-01 à C-14'],
        ['6 et 7. Trésorerie, avances et caisse', '49 à 74', 'Constats C-15 à C-23'],
        ['8. Contrôle interne et séparation des tâches', '75 à 88', 'Constats C-24 à C-31'],
        ['9. Plan d\'action recommandé', '89 à 95', 'Recommandations par constat'],
        ['Annexes A à F', '96 à 140', 'Échantillons testés, tableaux détaillés par site'],
      ],
    },
    highlight: "Le travail d'Amani n'est pas de résumer 140 pages : c'est de permettre à cinq personnes de décider en 20 minutes. Toute la différence entre une synthèse inutile et une synthèse exploitable est là.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 4 procédures, dans l\'ordre où vous les exécuterez',
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante : la synthèse fait émerger une recommandation, la revue critique la solidifie, et la procédure rédigée la met en œuvre. Ne sautez aucune étape : une erreur de page ou une hypothèse non testée se retrouve, amplifiée, devant le comité.",
    bullets: [
      "Procédure 1 — Préparer l'espace de travail Claude (3 étapes) : compte et confidentialité, contrôle du document, Project paramétré.",
      "Procédure 2 — Analyser un document long et en tirer une synthèse exploitable (8 étapes) : les trois questions, le gabarit, le prompt, le dépôt, les recoupements, la vérification, la revue critique, l'ajustement et la validation.",
      "Procédure 3 — Obtenir une revue critique et une contre-argumentation (6 étapes) : mettre le raisonnement à plat, faiblesses, meilleure objection, hypothèses implicites, tri, reformulation.",
      "Procédure 4 — Rédiger une procédure par itération section par section (8 étapes) : cadrage, plan verrouillé, une section à la fois, contre-argumentation ciblée, checklist, assemblage, relecture humaine, signature.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '31 → 5',
    caption: "31 constats sur 140 pages, 20 minutes de comité : la valeur de votre synthèse se mesure à ce qu'elle laisse de côté, pas à ce qu'elle reprend.",
    context: "Une demande « résume ce document » rend un texte qui reprend un peu de chaque chapitre, dans l'ordre du sommaire, avec le jargon d'audit intact. Une demande structurée oblige Claude à trier par priorité, donc à évaluer la gravité relative de chaque constat — c'est exactement le travail que le comité attend.",
  },
  {
    type: 'concept',
    title: 'Pourquoi Claude pour ce dossier : une fenêtre de contexte qui lit le document entier',
    body: [
      "La fenêtre de contexte est la quantité de texte que le modèle peut traiter en une seule fois, documents déposés inclus. Celle de Claude est large : vous pouvez déposer un rapport d'audit, un contrat de subvention ou une politique institutionnelle complets, et Claude les traite comme un seul objet cohérent. Il peut croiser une clause de la page 8 avec une annexe de la page 95 sans que vous ayez à le lui rappeler.",
      "Ordre de grandeur utile : une page de rapport compte 450 à 500 mots, soit environ 650 tokens en français. Le rapport de 140 pages représente donc de l'ordre de 90 000 à 100 000 tokens, ce qui tient dans la fenêtre standard de Claude.ai (de l'ordre de 200 000 tokens au moment de la rédaction ; vérifiez la documentation de votre offre).",
    ],
    example: {
      title: 'Ce que la lecture intégrale rend possible sur le fil rouge',
      lines: [
        "Question posée : « Les 14 commandes de carburant citées au chapitre 4 (p. 24) correspondent-elles aux lignes de l'annexe C (p. 108) ? »",
        "Réponse attendue : un recoupement ligne à ligne entre deux passages distants de 84 pages — impossible si le rapport a été collé en extraits dans plusieurs conversations.",
      ],
    },
    pitfall: "Déposer le rapport en morceaux « pour économiser » : chaque extrait est lu sans les autres, et les recoupements entre chapitres et annexes — souvent là où se cachent les incohérences — deviennent impossibles.",
  },
  {
    type: 'concept',
    title: 'Une prudence utile : « le document ne précise pas ce point »',
    body: [
      "Claude est entraîné à signaler l'incertitude plutôt qu'à produire une réponse qui sonne juste à tout prix. Il dira plus volontiers « le rapport ne précise pas ce point » ou « cette conclusion repose sur une hypothèse, pas sur une donnée confirmée » là où un modèle orienté « réponse fluide » comblerait le vide par une généralité plausible.",
      "Pour un rapport bailleur, un constat d'audit ou une procédure interne, où une affirmation infondée a des conséquences réelles (une recommandation mal calibrée, un chiffre inventé repris dans un courrier), cette prudence est un avantage opérationnel direct : vous passez moins de temps à traquer les affirmations non vérifiées.",
    ],
    example: {
      title: 'Fil rouge — question d\'Amani et réponse obtenue',
      lines: [
        "Question : « Quel est le montant total des pertes subies par le consortium à cause du fractionnement des commandes ? »",
        "Réponse de Claude : « Le rapport ne chiffre pas de perte. Il établit que 14 commandes totalisant 34 300 USD ont été passées juste sous le seuil (p. 24-26) et indique qu'une partie pourrait être déclarée inéligible par le bailleur (p. 26), sans en estimer le montant. »",
      ],
    },
    highlight: "La prudence réduit le risque d'affirmations inventées ; elle ne le supprime pas. Claude reste un modèle de langage, pas un vérificateur de faits : tout chiffre et toute affirmation factuelle sont confrontés à la source avant diffusion.",
  },
  {
    type: 'comparison-table',
    title: 'Les quatre éléments d\'une demande de synthèse — et où ils vont dans le gabarit',
    columns: ['Élément', 'La question à vous poser', 'Colonne du gabarit', 'Réponse d\'Amani pour le comité du 19 mars'],
    rows: [
      ['Objectif', 'Extraire, comparer, vérifier ou résumer ? Pour quelle décision ?', 'A — Objectif de l\'analyse', 'Identifier les 5 constats les plus prioritaires pour une décision immédiate'],
      ['Audience', 'Qui lit, avec quel niveau de connaissance, combien de temps ?', 'B — Audience visée', 'Comité de direction, 5 membres non-auditeurs, 20 minutes'],
      ['Niveau de détail', 'Une page ou une analyse point par point ?', 'C — Niveau de détail', 'Très synthétique : 1 phrase de constat, 1 d\'impact, 1 de recommandation'],
      ['Format de sortie', 'Liste, tableau, longueur maximale, ordre ?', 'D — Format de sortie', 'Liste numérotée par priorité décroissante + 1 phrase d\'ouverture'],
      ['(Contexte du document)', 'Quel type de document, quelle taille ?', 'E — Type de document source', 'Rapport d\'audit interne, 140 pages, 31 constats'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les quatre exemples rédigés du gabarit : quel modèle partir selon votre besoin',
    columns: ['Ligne du gabarit', 'Type de demande', 'Audience et format', 'La consigne de contrôle intégrée au prompt'],
    rows: [
      ['Ligne 5', 'Synthèse d\'un rapport bailleur (60+ pages)', 'Direction générale ; 6 points maximum + 1 phrase d\'ouverture', 'Signaler tout chiffre incohérent avec un autre chiffre du document'],
      ['Ligne 6', 'Extraction des constats prioritaires d\'un audit (100+ pages)', 'Comité de direction ; 5 constats par priorité décroissante', 'Indiquer le constat le moins solidement étayé et pourquoi'],
      ['Ligne 7', 'Comparaison de deux versions d\'une politique (30-50 pages chacune)', 'Équipe juridique ; tableau Clause / Ce qui change / Impact opérationnel', 'Signaler séparément toute clause ambiguë'],
      ['Ligne 8', 'Vérification de cohérence d\'une étude (80-150 pages)', 'Équipe technique ; puces groupées en 3 catégories', 'N\'inventer aucune incohérence ; dire explicitement quand un point est cohérent'],
    ],
  },
  {
    type: 'concept',
    title: 'Le comportement coopératif par défaut — et le levier de la contre-argumentation',
    body: [
      "Si vous soumettez un raisonnement ou un projet de rapport en demandant « qu'en penses-tu ? », la réponse la plus probable est une validation polie assortie de remarques mineures : le modèle interprète votre demande comme une recherche de confirmation, pas de démolition. Ce n'est pas de la complaisance gratuite, c'est le comportement d'un système conçu pour être utile à la demande telle qu'elle est formulée.",
      "Le levier que la plupart des utilisateurs n'exploitent jamais : changer explicitement la consigne. Demander à Claude de jouer un contradicteur, d'identifier les failles les plus probables ou de construire la meilleure objection produit une critique substantielle — l'équivalent d'un collègue senior qui relit en cherchant activement ce qui cloche.",
    ],
    table: {
      columns: ['Formulation qui obtient une validation polie', 'Formulation qui obtient une vraie critique'],
      rows: [
        ['« Qu\'en penses-tu ? »', '« Identifie les 3 faiblesses les plus sérieuses de cette conclusion, de la plus grave à la moins grave. »'],
        ['« Est-ce que ma recommandation tient la route ? »', '« Quel serait l\'argument le plus solide contre cette recommandation, formulé par un auditeur du bailleur ? »'],
        ['« Peux-tu relire ma procédure ? »', '« Quelle clause laisse une zone d\'interprétation qu\'un agent pressé pourrait exploiter ? »'],
        ['« Ma synthèse est-elle correcte ? »', '« Lequel de ces constats est le moins solidement étayé par le document, et pourquoi ? »'],
      ],
    },
    tip: "Ce contrôle qualité se déclenche en une phrase, au moment où aucun collègue disponible n'existe pour le faire : utilisez-le systématiquement avant tout envoi à un tiers.",
  },
  {
    type: 'concept',
    title: 'Faire raisonner Claude sur un problème complexe : décomposer avant de conclure',
    body: [
      "Sur une question complexe (faut-il relever un seuil d'achat ? quel constat traiter en premier ?), une réponse directe mélange les faits, les hypothèses et l'opinion. Vous obtenez un raisonnement exploitable en imposant l'ordre : d'abord les faits établis avec leur source, ensuite les hypothèses, ensuite les options, enfin la conclusion.",
      "Si votre offre propose un mode de réflexion étendue, activez-le pour ces questions : Claude prend plus de temps pour raisonner avant de répondre. Il ne remplace pas la structure que vous imposez dans la demande.",
    ],
    example: {
      title: 'Structure de demande à réutiliser',
      lines: [
        "« Avant de conclure, procède dans cet ordre :",
        "1. Liste les faits établis par le document, avec la page.",
        "2. Liste les hypothèses nécessaires pour aller plus loin, en les marquant « hypothèse ».",
        "3. Propose 2 ou 3 options, avec pour chacune son principal risque.",
        "4. Seulement ensuite, donne ta recommandation et dis quelle hypothèse, si elle était fausse, la ferait tomber. »",
      ],
    },
    pitfall: "Demander « quelle est la meilleure solution ? » sans critère : Claude choisit ses propres critères, implicites. Donnez-les (coût, conformité au bailleur, délai, charge de travail) et leur ordre d'importance.",
  },
  {
    type: 'comparison-table',
    title: 'Rédiger d\'un bloc ou section par section : ce que change la méthode',
    columns: ['Critère', 'Rapport demandé en une seule requête', 'Rédaction itérative section par section'],
    rows: [
      ['Erreur de structure repérée tard', 'Oblige à revoir l\'ensemble du texte', 'Corrigée au stade du plan, en deux minutes'],
      ['Correction ponctuelle', 'Risque de désynchroniser le reste du document', 'Ne touche qu\'une section ; les sections validées restent fixes'],
      ['Contre-argumentation', 'Noyée dans dix pages, rarement faite', 'Ciblée sur les sections sensibles, au moment où elles sont écrites'],
      ['Traçabilité', 'Aucune : une seule version', 'Journal de rédaction : statut, objection, correction par section'],
      ['Temps total réel', 'Rapide à produire, long à corriger, souvent refait', 'Plus d\'échanges, mais livrable final sans reprise complète'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les outils de Claude.ai utilisés dans ce module',
    columns: ['Outil', 'À utiliser pour', 'Ce qu\'il faut savoir'],
    rows: [
      ['Claude.ai (web ou application), plan gratuit ou Pro', 'Tout le module', 'Le plan gratuit suffit pour pratiquer ; le plan Pro augmente les volumes d\'usage quotidien et le confort de contexte pour un usage professionnel soutenu'],
      ['Zone de téléversement (trombone)', 'Déposer un PDF, un Word ou un fichier texte pour une analyse ponctuelle', 'Déposez le document complet, en un seul fichier, dès le premier message'],
      ['Projects', 'Un dossier qui s\'étale sur plusieurs jours (audit, politique en rédaction)', 'Conserve documents de référence, instructions et historique : pas de nouveau téléversement à chaque conversation'],
      ['Artifacts', 'Construire une procédure ou un rapport dans un panneau séparé', 'Le document se construit dans l\'Artifact pendant que la conversation sert à discuter des ajustements'],
    ],
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de déposer un document sensible dans Claude',
    body: "Un rapport d'audit contient des faiblesses de contrôle, des montants, parfois des noms d'agents mis en cause. Le déposer dans une IA, c'est le transmettre à un service externe : appliquez ces règles avant chaque dépôt.",
    bullets: [
      "Utilisez uniquement un compte validé par votre organisation (offre professionnelle ou compte autorisé par écrit), jamais un compte personnel non déclaré.",
      "Ouvrez les paramètres de confidentialité du compte et vérifiez si vos conversations peuvent servir à améliorer les modèles ; désactivez-le si votre politique interne l'exige.",
      "Demandez la version diffusable du document : noms de personnes remplacés par des fonctions ou des codes.",
      "Ne déposez jamais un document classé « strictement confidentiel » sans accord écrit de son propriétaire.",
      "Notez quel document a été déposé, dans quel outil, à quelle date et avec quel accord.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Le constat C-26 (p. 81-84) nomme l'agent de Kinshasa qui cumule les droits de commande et de paiement.",
        "Amani demande à Josué Paluku la version diffusable : l'agent y devient « l'assistant administratif de Kinshasa ».",
        "Accord de Furaha Bisimwa par courriel le 09/03/2026 pour l'usage de Claude sur cette version, avec le compte professionnel d'Horizon Grands Lacs.",
      ],
    },
    pitfall: "Déposer la version nominative « parce que l'IA ne la diffusera pas » : la question n'est pas ce que fera l'outil, mais si vous aviez le droit de transmettre ces données.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Fenêtre de contexte', definition: "La quantité de texte que le modèle peut traiter en une seule fois, documents déposés inclus. Une fenêtre large permet d'analyser un document long sans le découper." },
      { term: 'Token', definition: "Unité de texte traitée par le modèle, plus petite qu'un mot. Ordre de grandeur en français : environ 1,3 à 1,5 token par mot, soit environ 650 tokens par page de rapport." },
      { term: 'Project (Claude)', definition: "Espace de travail persistant qui conserve des documents de référence, des instructions et l'historique d'échanges liés à un même dossier, sans tout retéléverser à chaque conversation." },
      { term: 'Artifact', definition: "Panneau séparé où Claude produit un document structuré (texte long, tableau) que vous consultez et faites évoluer indépendamment du fil de conversation." },
      { term: 'Revue critique / contre-argumentation', definition: "Demande explicite faite au modèle de challenger un raisonnement ou un document plutôt que de le valider, différente du mode « assistance coopérative » par défaut." },
      { term: 'Hypothèse implicite', definition: "Condition non écrite dont dépend un raisonnement. Si elle est fausse, la conclusion tombe : c'est la première chose que cherche un lecteur exigeant." },
      { term: 'Rédaction itérative section par section', definition: "Méthode où le plan est validé avant tout contenu, puis chaque section est rédigée et validée avant de passer à la suivante, plutôt qu'une génération en un seul bloc." },
      { term: 'Page imprimée / page PDF', definition: "Le numéro imprimé en bas de page et le rang de la page dans le fichier diffèrent souvent (couverture et sommaire non numérotés). Fixez lequel Claude doit citer." },
    ],
  },

  // ───────────── Procédure 1 — Préparer l'espace de travail ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: 'Vérifier le compte et obtenir la version diffusable du document',
    intro: "Avant d'ouvrir une conversation, vous devez pouvoir répondre « oui » à deux questions : ai-je le droit de déposer ce document, et mon compte est-il réglé comme l'exige mon organisation ? Entrées nécessaires : le document reçu et la politique d'usage de l'IA de votre organisation.",
    steps: [
      {
        title: 'Contrôler le compte',
        actions: [
          "Connectez-vous à Claude.ai avec le compte professionnel validé par votre organisation.",
          "Ouvrez les paramètres (menu de votre profil, en bas à gauche) > section Confidentialité.",
          "Vérifiez le réglage d'utilisation de vos conversations pour l'amélioration des modèles et alignez-le sur votre politique interne.",
        ],
      },
      {
        title: 'Sécuriser le document',
        actions: [
          "Repérez dans le document les noms de personnes, les données personnelles et la mention de classification.",
          "Demandez par écrit à l'auteur ou au propriétaire la version diffusable (noms remplacés par des fonctions).",
          "Obtenez l'accord écrit de votre responsable pour l'usage de Claude sur ce document.",
          "Enregistrez la version diffusable dans votre dossier de travail, sous un nom daté.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 9 mars 2026',
      lines: [
        "Paramètres vérifiés sur le compte professionnel Horizon Grands Lacs : réglage conforme à la politique IA interne.",
        "Version diffusable reçue de Josué Paluku à 15 h : 2026-03-09_audit_achats_finances_2025_diffusable.pdf (140 pages imprimées, 144 pages PDF).",
        "Accord de Furaha Bisimwa par courriel à 15 h 20 : « OK pour Claude sur la version diffusable, compte pro uniquement. »",
      ],
    },
    result: "Un compte réglé, une version diffusable enregistrée et un accord écrit archivé. Vous pouvez justifier à tout moment ce qui a été transmis et pourquoi.",
    pitfall: "Prendre la version reçue par courriel « parce que c'est la même » : c'est souvent la version nominative, destinée à la seule direction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: 'Contrôler le document avant de le déposer',
    intro: "Trois défauts de fichier ruinent une analyse sans que rien ne le signale : un PDF scanné dont le texte n'est pas lisible, un décalage entre pages imprimées et pages PDF, et un document incomplet. Cinq minutes de contrôle évitent une synthèse fausse.",
    steps: [
      {
        title: 'Vérifier que le texte est lisible',
        actions: [
          "Ouvrez le PDF, faites Ctrl+F et cherchez un mot présent dans le corps du texte (par exemple « carburant »).",
          "Si le mot est trouvé, le PDF contient du texte : il est exploitable tel quel.",
          "S'il n'est pas trouvé, le PDF est une image scannée : demandez la version numérique d'origine ou faites-le passer par une reconnaissance de caractères (OCR) avant dépôt.",
        ],
      },
      {
        title: 'Établir la fiche de préparation',
        actions: [
          "Notez le nombre de pages imprimées et de pages PDF, et calculez le décalage.",
          "Recopiez le sommaire : chapitres et pages de début.",
          "Vérifiez que les annexes annoncées dans le sommaire sont bien présentes à la fin du fichier.",
          "Repérez le tableau récapitulatif des constats (numéros, gravité) : il vous servira de contrôle.",
        ],
      },
    ],
    example: {
      title: 'Fiche de préparation — rapport d\'audit 2025',
      lines: [
        "Texte lisible : oui (Ctrl+F « carburant » → 23 occurrences).",
        "Pages : 140 imprimées, 144 PDF → décalage de 4 (couverture, page de garde, sommaire sur 2 pages). La page imprimée 24 est la page PDF 28.",
        "Structure : 9 chapitres + annexes A à F (p. 96 à 140), toutes présentes.",
        "Récapitulatif : tableau des 31 constats en p. 4-5 — 7 de gravité élevée (C-07, C-09, C-12, C-18, C-21, C-24, C-26).",
      ],
    },
    result: "Une fiche de préparation de quatre lignes qui fixe la référence de pagination et donne la liste de contrôle des constats de gravité élevée.",
    tip: "Exigez toujours que Claude cite les pages imprimées : ce sont celles que le comité et l'auditeur verront sur leur exemplaire papier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: 'Créer et paramétrer le Project du dossier',
    intro: "Le dossier va durer trois semaines : synthèse, revue critique, puis rédaction d'une procédure. Un Project garde le rapport, vos consignes permanentes et l'historique des échanges, sans retéléversement à chaque conversation.",
    steps: [
      {
        title: 'Créer le Project',
        actions: [
          "Dans la barre latérale de Claude.ai, ouvrez Projects puis créez un nouveau projet.",
          "Nommez-le précisément : « Audit achats-finances 2025 — Kivu Résilience ».",
          "Dans la description, indiquez l'objet, l'échéance et le propriétaire du dossier.",
        ],
      },
      {
        title: 'Ajouter les instructions et le document',
        actions: [
          "Ouvrez la zone d'instructions du projet et collez les consignes permanentes (voir exemple).",
          "Ajoutez la version diffusable du rapport aux connaissances du projet.",
          "Ouvrez une première conversation dans le projet et demandez : « Combien de pages et de constats compte le rapport ? Donne le titre du chapitre 6. » Comparez avec votre fiche.",
        ],
      },
    ],
    example: {
      title: 'Instructions du projet (à adapter)',
      lines: [
        "« Tu assistes la chargée administrative et logistique d'Horizon Grands Lacs, chef de file du consortium Kivu Résilience.",
        "Le document de référence est le rapport d'audit interne 2025 (140 pages imprimées).",
        "Cite toujours la page imprimée (numéro en bas de page) de chaque information, au format (p. 24).",
        "Distingue explicitement ce qui est établi par le rapport de ce qui est une hypothèse ou une interprétation.",
        "Si le rapport ne dit rien sur un point, écris « le rapport ne précise pas ce point ». Réponds en français. »",
      ],
    },
    result: "Le Project existe, il contient le rapport et les instructions, et le test de contrôle renvoie 140 pages, 31 constats et le bon titre de chapitre.",
    pitfall: "Sauter le test de contrôle : si Claude ne retrouve pas le bon nombre de constats, il ne lit pas tout le document correctement, et toute la synthèse en héritera.",
  },

  // ───────────── Procédure 2 — Analyser un document long ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 8',
    title: 'Répondre aux trois questions avant de déposer le document',
    intro: "Le réflexe qui échoue presque toujours : déposer le document et demander « fais-moi un résumé ». Sans précision, Claude produit un résumé de longueur et de détail moyens, calibré pour personne. Trois réponses écrites déterminent entièrement votre demande.",
    steps: [
      {
        title: 'Ouvrir l\'aide-mémoire du gabarit',
        actions: [
          "Ouvrez 04-templates/gabarit-prompts-analyse-documents-longs.xlsx, onglet « Aide-memoire ».",
          "Lisez la colonne C « Questions à se poser avant de déposer le document » : objectif exact, lecteur et niveau de connaissance, longueur réaliste, dépôt entier ou scindé.",
        ],
      },
      {
        title: 'Écrire vos réponses',
        actions: [
          "Objectif : choisissez un verbe parmi extraire, comparer, vérifier, résumer — et nommez la décision qu'il doit éclairer.",
          "Audience : nommez le lecteur réel, son niveau de connaissance du sujet et le temps dont il dispose.",
          "Niveau de détail : choisissez dans la colonne A « Niveaux de détail courants » de l'aide-mémoire.",
          "Faites valider ces réponses par le demandeur en une ligne de courriel.",
        ],
      },
    ],
    example: {
      title: 'Réponses d\'Amani, validées par Furaha Bisimwa le 10/03/2026',
      lines: [
        "Objectif : extraire les 5 constats les plus prioritaires pour que le comité décide des actions immédiates.",
        "Audience : comité de direction, 5 membres sans formation en audit ; 20 minutes, dont 8 pour lire et présenter la synthèse.",
        "Niveau de détail : « Très synthétique (1 phrase par point) », complété par la page source.",
        "Dépôt : document entier — les constats renvoient aux annexes, il ne doit pas être scindé.",
      ],
    },
    result: "Trois réponses écrites et validées. Si vous n'arrivez pas à les formuler, le problème n'est pas l'outil : la demande elle-même n'est pas encore claire.",
    tip: "Le temps réel de lecture est presque toujours inférieur au temps de réunion annoncé : sur 20 minutes de comité, comptez la moitié pour la discussion et la décision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 8',
    title: 'Remplir les colonnes A à E du gabarit',
    intro: "L'onglet « Bibliotheque de prompts » contient quatre exemples rédigés (lignes 5 à 8) et des lignes vierges à partir de la ligne 9. Vous construisez votre demande sur le même canevas, colonne par colonne, avant d'écrire le prompt.",
    steps: [
      {
        title: 'Choisir le modèle le plus proche',
        actions: [
          "Ouvrez l'onglet « Bibliotheque de prompts » et lisez les lignes 5 à 8.",
          "Repérez la ligne dont l'objectif ressemble au vôtre : pour des constats d'audit, c'est la ligne 6.",
        ],
      },
      {
        title: 'Remplir votre ligne',
        actions: [
          "Cliquez en A9 et saisissez l'objectif de l'analyse, avec la décision visée.",
          "B9 « Audience visée » : lecteur, niveau de connaissance, temps disponible.",
          "C9 « Niveau de détail » : le niveau choisi, avec ce que contient chaque point.",
          "D9 « Format de sortie » : structure, nombre de points, ordre de tri.",
          "E9 « Type de document source » : nature, nombre de pages, particularités (annexes, nombre de constats).",
        ],
      },
    ],
    table: {
      columns: ['Colonne (ligne 9)', 'Contenu saisi par Amani'],
      rows: [
        ['A — Objectif de l\'analyse', 'Extraire les 5 constats prioritaires de l\'audit achats-finances 2025 pour décision du comité du 19/03/2026'],
        ['B — Audience visée', 'Comité de direction Horizon Grands Lacs (5 membres non-auditeurs, 8 minutes de lecture sur 20 de séance)'],
        ['C — Niveau de détail', 'Très synthétique — intitulé < 10 mots, 1 phrase de constat, 1 d\'impact, 1 de recommandation, page source'],
        ['D — Format de sortie', 'Liste numérotée des 5 constats par priorité décroissante + 1 phrase d\'ouverture'],
        ['E — Type de document source', 'Rapport d\'audit interne, PDF texte, 140 pages imprimées, 31 constats, annexes A à F'],
      ],
    },
    result: "La ligne 9 est remplie de A à E, de façon assez précise pour que quelqu'un d'autre puisse écrire le prompt sans vous poser de question.",
    pitfall: "Écrire « Direction » en colonne B : sans le niveau de connaissance ni le temps disponible, Claude n'a aucun moyen de calibrer la longueur ni le vocabulaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 8',
    title: 'Rédiger le prompt complet en colonne F',
    intro: "La colonne F « Prompt complet (à copier-coller dans Claude) » assemble les colonnes A à E en un seul message, auquel vous ajoutez vos critères de priorité et la consigne de contrôle. C'est ce texte, et rien d'autre, que vous enverrez.",
    steps: [
      {
        title: 'Assembler le prompt',
        actions: [
          "Phrase 1 : présentez le document (colonne E).",
          "Puis, dans cet ordre, les mentions explicites Objectif (A), Audience (B), Niveau de détail (C), Format (D).",
          "Ajoutez vos critères de priorité, numérotés par ordre d'importance : sans eux, Claude choisit les siens.",
          "Ajoutez l'obligation de citer la page imprimée de chaque constat.",
          "Terminez par la consigne de contrôle de la ligne 6 : le constat le moins solidement étayé.",
          "Collez le texte final dans la cellule F9 (Alt+Entrée pour aller à la ligne dans la cellule).",
        ],
      },
    ],
    example: {
      title: 'Prompt complet — cellule F9 (fil rouge)',
      lines: [
        "« Voici le rapport d'audit interne 2025 (140 pages) sur les achats et la gestion financière du consortium Kivu Résilience, qui compte 31 constats.",
        "Objectif : identifier les 5 constats les plus prioritaires pour une décision immédiate du comité de direction du 19 mars 2026.",
        "Audience : comité de direction, 5 membres sans formation en audit, 8 minutes de lecture.",
        "Niveau de détail : pour chaque constat, un intitulé de moins de 10 mots, une phrase de constat, une phrase d'impact concret, une phrase de recommandation, et la page imprimée du rapport. Aucun jargon d'audit non expliqué, aucune citation littérale des procédures.",
        "Priorité, dans cet ordre : (1) montant exposé à un risque d'inéligibilité ou de perte, (2) risque de non-conformité aux règles du bailleur, (3) caractère répétitif sur plusieurs sites.",
        "Format : une phrase de synthèse globale pour ouvrir la présentation orale, puis la liste numérotée des 5 constats par priorité décroissante.",
        "Distingue ce que le rapport établit de ce qu'il suppose. Une fois la liste produite, indique lequel des 5 constats est le moins solidement étayé par le rapport, et pourquoi. »",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une colonne du gabarit ou à une consigne de contrôle identifiable, enregistré en F9 pour être réutilisé.",
    tip: "Le prompt de la ligne 6 du gabarit est déjà complet : le vôtre n'en diffère que par les faits du dossier et les critères de priorité. Partir d'un modèle éprouvé fait gagner du temps et évite d'oublier la consigne de contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 8',
    title: 'Déposer le document et envoyer la demande en un seul message',
    intro: "Le document complet et la demande structurée partent ensemble : Claude lit le rapport avec votre objectif en tête, au lieu de le résumer d'abord puis de devoir le reprendre.",
    steps: [
      {
        title: 'Envoyer',
        actions: [
          "Dans le Project, ouvrez une nouvelle conversation et nommez-la « Synthèse comité 19/03 ».",
          "Si le rapport n'est pas déjà dans les connaissances du projet, cliquez sur le trombone et déposez le PDF complet, en un seul fichier.",
          "Collez le prompt de la cellule F9 dans la zone de message et envoyez.",
        ],
      },
      {
        title: 'Lire la réponse comme un contrôleur',
        actions: [
          "Vérifiez que la réponse respecte le format : 1 phrase d'ouverture, 5 constats numérotés, 4 phrases et une page par constat.",
          "Comparez les numéros de constats retenus avec la liste des 7 constats de gravité élevée de votre fiche de préparation.",
          "Surlignez chaque chiffre et chaque mot qui affirme une cause ou une intention : ce sont eux que vous vérifierez à l'étape 6.",
        ],
      },
    ],
    example: {
      title: 'Premier jet obtenu — extrait',
      lines: [
        "Ouverture : « Sur 31 constats, cinq exposent le consortium à des coûts inéligibles et à des pertes de trésorerie. »",
        "1. Fraude sur le carburant à Goma (p. 24-26) — 14 commandes de carburant entre 2 400 et 2 490 USD, soit 34 300 USD, passées juste sous le seuil de 2 500 USD qui impose 3 devis et un comité d'évaluation…",
        "2. Dossiers d'achat sans comparaison des offres (p. 41-44) — 43 des 186 dossiers testés (23,1 %)…",
        "4. Rapprochements bancaires non signés à Kinshasa (p. 58-61) — écart non expliqué de 6 850 USD au 30/09/2025…",
      ],
    },
    result: "Un premier jet au bon format, dont les 5 constats figurent tous parmi les 7 de gravité élevée, et dont les mots et chiffres à vérifier sont surlignés.",
    pitfall: "Ajouter « résume aussi le reste » dans le même message : vous diluez la demande et Claude rallonge chaque point. Une demande, un livrable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 8',
    title: 'Exploiter la lecture intégrale : faire recouper chapitres et annexes',
    intro: "Un rapport long cache ses incohérences entre le corps du texte et les annexes. C'est là que la fenêtre de contexte large rapporte le plus : vous demandez à Claude de croiser les chiffres des constats retenus avec les tableaux détaillés.",
    steps: [
      {
        title: 'Demander les recoupements',
        actions: [
          "Dans la même conversation, demandez pour chaque constat retenu la ou les annexes qui détaillent ses chiffres.",
          "Demandez une comparaison chiffre par chiffre entre le chapitre et l'annexe, présentée en tableau.",
          "Demandez explicitement : « Si un chiffre du chapitre ne se retrouve pas dans l'annexe, signale-le ; si tout concorde, écris-le. »",
        ],
      },
    ],
    example: {
      title: 'Demande et réponse — fil rouge',
      lines: [
        "Demande : « Pour chacun des 5 constats, compare les chiffres cités dans le chapitre avec ceux de l'annexe correspondante. Tableau : constat / chiffre du chapitre (page) / chiffre de l'annexe (page) / concordance. »",
        "C-07 : 14 commandes, 34 300 USD (p. 24) / annexe C, 14 lignes, total 34 300 USD (p. 108) / concorde.",
        "C-12 : 43 dossiers sur 186 (p. 42) / annexe B, 43 dossiers marqués « PV absent » (p. 101-104) / concorde.",
        "C-18 : écart de 6 850 USD (p. 60) / annexe D : écart de 6 850 USD sur le compte de Bukavu (p. 115) / concorde — le site est Bukavu.",
        "C-21 : 18 avances, 27 400 USD (p. 68) / annexe E : 18 avances, 27 400 USD dont 9 400 USD au-delà de 90 jours (p. 121) / concorde.",
      ],
    },
    result: "Un tableau de concordance qui confirme les chiffres des constats et, au passage, fait apparaître que l'écart bancaire concerne Bukavu, pas Kinshasa comme l'écrit le premier jet.",
    tip: "Le recoupement contredit déjà le premier jet sur un point : c'est la preuve qu'une synthèse, même bien rédigée, ne doit jamais être envoyée sans contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 8',
    title: 'Vérifier la synthèse contre le document source, pas contre votre impression',
    intro: "Chaque point produit doit correspondre à un passage identifiable du rapport, pas à une généralisation plausible. Vous vérifiez vous-même, dans le PDF, au moins un échantillon des points, et tous les chiffres et mots d'intention surlignés.",
    steps: [
      {
        title: 'Contrôler dans le PDF',
        actions: [
          "Pour chaque constat, allez à la page citée (page imprimée + 4 pour la page PDF) et lisez le passage.",
          "Cochez chaque chiffre de la synthèse contre le rapport ; un chiffre introuvable est supprimé ou corrigé.",
          "Pour chaque mot de cause ou d'intention (« fraude », « délibéré », « à cause de »), cherchez la phrase exacte du rapport.",
          "Consignez le résultat dans un tableau de vérification : point, page, ce que dit le rapport, verdict.",
        ],
      },
      {
        title: 'Faire corriger les écarts',
        actions: [
          "Signalez à Claude chaque écart avec la page qui le prouve, et demandez la correction du seul point concerné.",
        ],
      },
    ],
    table: {
      columns: ['Point', 'Page', 'Ce que dit le rapport', 'Verdict'],
      rows: [
        ['1. « Fraude sur le carburant »', 'p. 26', '« pourrait traduire un contournement délibéré du seuil ; l\'audit n\'a pas établi d\'intention »', 'À corriger : fractionnement constaté, fraude non établie'],
        ['2. 43 dossiers sur 186', 'p. 42', '43 dossiers sans PV de comparaison des offres', 'Conforme (43 ÷ 186 = 23,1 %)'],
        ['3. 18 avances, 27 400 USD', 'p. 68', '18 avances non justifiées au-delà de 30 jours', 'Conforme'],
        ['4. Écart à Kinshasa', 'p. 60', 'Écart sur le compte bancaire de Bukavu', 'À corriger : Bukavu'],
        ['5. Cumul des droits à Kinshasa', 'p. 82', 'Constat fondé sur 2 entretiens et une capture des droits du logiciel', 'Conforme, à surveiller'],
      ],
    },
    result: "Un tableau de vérification de 5 lignes, 3 points conformes et 2 points corrigés par Claude sur demande ciblée.",
    pitfall: "Vérifier « de mémoire » parce que vous avez lu le rapport la veille : c'est précisément l'impression générale qui laisse passer « Kinshasa » à la place de « Bukavu ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 8',
    title: 'Demander explicitement une revue critique des constats extraits',
    intro: "Avant de considérer la synthèse comme finale, vous retournez le levier de la contre-argumentation contre elle : un constat a-t-il été retenu pour sa gravité apparente plutôt que pour la force réelle des preuves ? C'est l'étape qu'il ne faut pas sauter.",
    steps: [
      {
        title: 'Poser les deux questions critiques',
        actions: [
          "Demandez : « Des 5 constats retenus, lequel est le moins solidement étayé par le rapport, et pourquoi ? »",
          "Puis : « Y a-t-il, parmi les 26 constats écartés, un constat qu'un auditeur du bailleur jugerait plus prioritaire que l'un des 5 ? Justifie avec la page. »",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Relisez vous-même le passage cité par Claude pour confirmer sa réponse.",
          "Décidez pour le constat le plus faible : le garder tel quel, le reformuler avec une réserve, ou le remplacer.",
          "Notez la réponse de Claude et votre décision : cela change-t-il votre confiance dans un des points ?",
        ],
      },
    ],
    example: {
      title: 'Réponse de Claude et décision d\'Amani',
      lines: [
        "« Le constat 5 (C-26) est le moins étayé : il repose sur deux entretiens et une capture d'écran des droits d'accès (p. 82), sans test des paiements effectués. Le rapport recommande lui-même un test complémentaire (p. 84). »",
        "« Aucun constat écarté ne me paraît plus prioritaire ; C-09 (absence de plan d'achats annuel, p. 15) est lié à C-07 et pourrait être mentionné avec lui. »",
        "Décision : C-26 est conservé, reformulé en « risque identifié, à confirmer par un test des paiements de Kinshasa avant le 30/04/2026 » ; C-09 est cité dans la recommandation de C-07.",
      ],
    },
    result: "Chaque constat retenu est qualifié selon la force de ses preuves ; le comité saura lequel est établi et lequel reste à confirmer.",
    tip: "Si la réponse de Claude à « lequel est le moins étayé » est « tous sont solides », reformulez : « Classe les 5 constats du plus étayé au moins étayé, avec le type de preuve pour chacun. » Un classement force la comparaison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 8',
    title: 'Ajuster par correction ciblée, faire valider et consigner',
    intro: "Si la version ne convient pas — trop longue pour la direction, trop superficielle pour une équipe qui doit agir —, vous ne recommencez pas de zéro : vous précisez le correctif et Claude révise la version existante, avec le bénéfice de toutes les clarifications déjà apportées.",
    steps: [
      {
        title: 'Ajuster',
        actions: [
          "Mesurez la version corrigée : nombre de lignes, temps de lecture à voix haute.",
          "Formulez un correctif précis : ce qu'il faut garder, retirer, raccourcir.",
          "Relisez la nouvelle version et vérifiez que les corrections des étapes 6 et 7 sont toujours présentes.",
        ],
      },
      {
        title: 'Valider et consigner',
        actions: [
          "Copiez la synthèse dans le modèle de note de votre organisation et envoyez-la à l'auteur du rapport avec cette question : « Un de ces 5 points déforme-t-il ton constat ? »",
          "Dans le gabarit, ajoutez un commentaire sur la cellule F9 (clic droit > Nouveau commentaire) : niveau de détail obtenu conforme ou non, correctif appliqué.",
        ],
      },
    ],
    example: {
      title: 'Correctif et validation — fil rouge',
      lines: [
        "Constat : 1 page et demie, 4 min 30 de lecture à voix haute — trop long pour 8 minutes avec les questions.",
        "Correctif envoyé : « Condense en une page. Garde l'intitulé, les chiffres et la page source ; ramène impact et recommandation à une phrase courte chacun ; supprime les rappels de méthodologie. »",
        "Réponse de Josué Paluku le 12/03/2026 : « Fidèle. La réserve sur C-26 est juste, c'est ce que j'ai écrit p. 84. »",
        "Commentaire en F9 : « Niveau obtenu trop détaillé au 1er jet ; 1 correctif de longueur ; 2 corrections factuelles (C-07, C-18). »",
      ],
    },
    result: "Une note d'une page, lisible en 2 minutes, dont chaque constat porte sa page source, validée par l'auteur du rapport, et une ligne de gabarit documentée pour la prochaine fois.",
    pitfall: "Ouvrir une nouvelle conversation pour « repartir propre » : Claude retraite tout le document sans les corrections déjà obtenues, et les erreurs de Kinshasa et de « fraude » peuvent revenir.",
  },

  // ───────────── Procédure 3 — Revue critique et contre-argumentation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Mettre le raisonnement à plat avant de le soumettre',
    intro: "On ne challenge bien qu'un raisonnement écrit. Le vendredi 13 mars, Patrick Mumbere propose une réponse au constat C-07 qu'il veut présenter au comité. Avant de le faire critiquer, vous l'écrivez sous une forme où chaque élément est visible : thèse, arguments, chiffres, décision demandée.",
    steps: [
      {
        title: 'Décomposer la proposition',
        actions: [
          "Écrivez la thèse en une phrase : ce que la proposition affirme ou demande.",
          "Listez les arguments, un par ligne, avec le chiffre qui les soutient et sa source.",
          "Écrivez la décision précise demandée au lecteur.",
          "Faites relire cette mise à plat par l'auteur de la proposition : il doit s'y reconnaître.",
        ],
      },
    ],
    example: {
      title: 'Proposition de Patrick Mumbere, mise à plat le 13/03/2026',
      lines: [
        "Thèse : relever de 2 500 à 5 000 USD le seuil au-delà duquel un comité d'évaluation des offres est obligatoire.",
        "Argument 1 : le fractionnement (C-07) montre que le seuil est trop bas pour la réalité des besoins.",
        "Argument 2 : le comité d'évaluation mobilise 3 personnes environ 2 heures par dossier ; 61 dossiers entre 2 500 et 5 000 USD en 2025, soit 61 × 3 × 2 = 366 heures-personne (registre des achats 2025).",
        "Argument 3 : un seuil plus réaliste supprimera la tentation de fractionner.",
        "Décision demandée au comité : approuver le nouveau seuil au 1er avril 2026.",
      ],
    },
    result: "Une proposition écrite en cinq lignes, validée par son auteur, où chaque argument et chaque chiffre peut être attaqué séparément.",
    tip: "Présentez la démarche à l'auteur comme une préparation au comité, pas comme une critique de son idée : « Mieux vaut que les objections viennent de nous que du bailleur. »",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Demander les faiblesses les plus sérieuses, classées',
    intro: "Vous changez explicitement la consigne : vous ne demandez pas un avis, vous demandez des failles, en nombre fixé et classées par gravité. Vous travaillez dans le Project, où Claude dispose du rapport d'audit pour vérifier les arguments.",
    steps: [
      {
        title: 'Rédiger et envoyer la demande',
        actions: [
          "Ouvrez une nouvelle conversation dans le Project, nommée « Revue critique seuil ».",
          "Collez la mise à plat de l'étape 1.",
          "Demandez exactement 3 faiblesses, de la plus grave à la moins grave, chacune avec sa justification et, si elle existe, la page du rapport.",
          "Interdisez les compliments et les « points forts » : ils ne sont pas demandés.",
        ],
      },
    ],
    example: {
      title: 'Demande et réponse — fil rouge',
      lines: [
        "Demande : « Voici une proposition qui sera présentée au comité de direction. Identifie les 3 faiblesses les plus sérieuses de ce raisonnement, de la plus grave à la moins grave. Appuie-toi sur le rapport d'audit et cite la page. Ne mentionne pas les points forts. »",
        "1. Le besoin en carburant n'est pas fractionné par hasard : les 14 commandes forment un besoin unique de 34 300 USD sur l'année (annexe C, p. 108). Agrégé, il dépasse même le seuil d'appel d'offres de 25 000 USD : relever le seuil à 5 000 USD ne corrige pas C-07.",
        "2. L'argument 1 inverse le constat : l'audit relie le fractionnement à l'absence de plan d'achats annuel (C-09, p. 15), pas à un seuil trop bas.",
        "3. Les 366 heures-personne ne sont pas comparées au risque : 34 300 USD exposés à l'inéligibilité pour le seul carburant (p. 26).",
      ],
    },
    result: "Trois faiblesses classées, dont la première ruine la thèse principale par un calcul vérifiable dans l'annexe C.",
    pitfall: "Demander « quelles sont les forces et les faiblesses ? » : la réponse s'équilibre poliment, et les faiblesses sérieuses se retrouvent au même niveau que des remarques de forme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Faire construire la meilleure objection par un contradicteur nommé',
    intro: "Une faiblesse est une analyse ; une objection est ce que dira réellement un lecteur exigeant. En attribuant un rôle précis à Claude — celui du lecteur le plus dur que la proposition rencontrera —, vous obtenez l'argument tel qu'il sera formulé devant vous.",
    steps: [
      {
        title: 'Choisir le contradicteur',
        actions: [
          "Identifiez qui, en dehors du comité, lira les conséquences de cette décision : auditeur du bailleur, responsable financier, partenaire.",
          "Retenez le plus exigeant et décrivez son rôle et ce qu'il vérifie.",
        ],
      },
      {
        title: 'Demander l\'objection',
        actions: [
          "Demandez l'argument le plus solide contre la proposition, formulé par ce contradicteur, en un paragraphe.",
          "Demandez ensuite la question piège qu'il poserait au comité.",
        ],
      },
    ],
    example: {
      title: 'Demande et réponse — fil rouge',
      lines: [
        "Demande : « Tu es l'auditeur externe mandaté par le bailleur pour la vérification des dépenses du consortium. Construis l'argument le plus solide contre cette proposition, en un paragraphe, puis la question que tu poserais au comité. »",
        "Objection : « Douze mois après un audit qui constate un contournement du seuil, le consortium relève ce seuil. Vu de l'extérieur, c'est un affaiblissement du contrôle qui régularise la pratique critiquée. De plus, aucun seuil interne ne peut être moins exigeant que les règles d'achat de la convention de subvention. »",
        "Question piège : « Avez-vous vérifié que le seuil de 5 000 USD est compatible avec les règles d'achat annexées à votre convention ? »",
      ],
    },
    result: "Une objection formulée dans les mots du lecteur le plus exigeant, et une question à laquelle le comité doit pouvoir répondre avant de décider.",
    pitfall: "Considérer l'objection comme vraie parce qu'elle est bien formulée : elle doit, elle aussi, passer par le tri de l'étape 5.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Faire expliciter et tester les hypothèses implicites',
    intro: "Un raisonnement qui tient « uniquement parce qu'une hypothèse n'a pas été questionnée » est le défaut le plus fréquent d'une recommandation. Vous demandez à Claude de lister ces hypothèses, puis vous indiquez pour chacune comment la vérifier.",
    steps: [
      {
        title: 'Lister et tester',
        actions: [
          "Demandez : « Liste les hypothèses non écrites dont dépend ce raisonnement. Pour chacune : que se passe-t-il si elle est fausse, et comment la vérifier ? Présente un tableau. »",
          "Pour chaque hypothèse, désignez qui peut la vérifier et avec quel document.",
          "Lancez les vérifications réalisables avant le comité et notez le résultat.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse implicite', 'Si elle est fausse', 'Vérification', 'Résultat'],
      rows: [
        ['Le seuil de 5 000 USD est permis par la convention de subvention', 'La proposition est irrecevable', 'Règles d\'achat annexées à la convention — responsable financier', 'À vérifier : non tranché avant le comité'],
        ['Le fractionnement vient du seuil', 'La mesure ne corrige pas C-07', 'Rapport p. 15 et p. 26', 'Faux : lié à l\'absence de plan d\'achats (C-09)'],
        ['La charge de 366 h est due au seul comité d\'évaluation', 'Le gain annoncé est surestimé', 'Registre des achats 2025, durée réelle des comités', 'Partiel : 2 h est une estimation non mesurée'],
        ['Les besoins récurrents sont rares', 'D\'autres fractionnements existent', 'Annexe C, catégories achetées plus de 6 fois par an', 'Faux : carburant et pièces détachées'],
      ],
    },
    result: "Quatre hypothèses rendues visibles : deux sont fausses, une partiellement vraie, une reste à vérifier. La proposition initiale ne peut pas être présentée telle quelle.",
    tip: "Une hypothèse « à vérifier » n'est pas un échec : écrite noir sur blanc dans la note au comité, elle devient une condition de la décision au lieu d'un angle mort.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Trier les critiques : retenir, rejeter, vérifier',
    intro: "Claude peut lui aussi se tromper, ou affirmer une règle de bailleur de mémoire. Vous ne recopiez donc pas sa critique : vous décidez, pour chaque objection, si elle est retenue, rejetée ou à vérifier, et vous gardez la trace de cette décision.",
    steps: [
      {
        title: 'Classer chaque critique',
        actions: [
          "Reprenez les faiblesses, l'objection et les hypothèses dans un seul tableau.",
          "Retenue : elle est prouvée par un document que vous avez relu vous-même.",
          "Rejetée : elle repose sur un fait inexact ou hors sujet ; écrivez pourquoi.",
          "À vérifier : elle cite une règle ou un fait que ni vous ni le rapport ne pouvez confirmer — désignez un responsable.",
        ],
      },
      {
        title: 'Contrôler les affirmations sur les règles externes',
        actions: [
          "Si Claude cite une règle d'un bailleur ou d'une norme, ne la reprenez jamais sans l'avoir lue dans le texte officiel ou la convention.",
        ],
      },
    ],
    example: {
      title: 'Tri d\'Amani — 16/03/2026',
      lines: [
        "Retenue : besoin carburant agrégé de 34 300 USD au-dessus du seuil d'appel d'offres (annexe C relue).",
        "Retenue : lien entre fractionnement et absence de plan d'achats (p. 15 relue).",
        "Retenue : perception d'affaiblissement du contrôle par l'auditeur du bailleur.",
        "À vérifier : compatibilité d'un seuil à 5 000 USD avec la convention — responsable financier, avant le 30/03.",
        "Rejetée : la suggestion de Claude de « supprimer le comité d'évaluation sous 10 000 USD » — hors sujet et contraire au manuel achats du consortium.",
      ],
    },
    result: "Un tableau de tri où chaque critique a un statut, une justification et, si besoin, un responsable de vérification.",
    pitfall: "Écrire dans la note au comité « les règles ECHO interdisent… » parce que Claude l'a dit : si ce n'est pas lu dans la convention ou le texte officiel, c'est une hypothèse, pas un fait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Reformuler la recommandation et la challenger une seconde fois',
    intro: "Les critiques retenues servent à reconstruire la proposition, avec son auteur. Puis vous soumettez la nouvelle version au même contradicteur : vous vous arrêtez quand les objections restantes sont mineures ou explicitement couvertes par une condition.",
    steps: [
      {
        title: 'Reconstruire avec l\'auteur',
        actions: [
          "Présentez le tableau de tri à l'auteur de la proposition et reformulez ensemble.",
          "Chaque critique retenue doit être traitée par un élément de la nouvelle recommandation.",
          "Chaque point « à vérifier » devient une condition explicite.",
        ],
      },
      {
        title: 'Second passage critique',
        actions: [
          "Soumettez la nouvelle version au même contradicteur : « Même rôle. Quelle est maintenant ton objection la plus solide ? »",
          "Si l'objection est nouvelle et sérieuse, refaites un tour ; si elle est mineure ou déjà couverte, arrêtez.",
        ],
      },
    ],
    example: {
      title: 'Recommandation révisée, présentée au comité du 19/03/2026',
      lines: [
        "1. Maintenir le seuil de 2 500 USD.",
        "2. Lancer un appel d'offres pour un accord-cadre carburant de 12 mois à Goma (besoin 2025 : 34 300 USD) avant le 30/06/2026 ; même analyse pour les pièces détachées.",
        "3. Établir un plan d'achats annuel par site (réponse à C-09) et contrôler chaque mois le cumul des commandes par catégorie.",
        "4. Condition : alléger le comité d'évaluation entre 2 500 et 5 000 USD (évaluation sur pièces, 2 signataires) uniquement si la convention le permet — vérification par le responsable financier.",
        "Second passage : « Objection résiduelle : le délai de l'appel d'offres laisse 3 mois de commandes au cas par cas. » → Couverte : contrôle mensuel du cumul dès avril.",
      ],
    },
    result: "Une recommandation révisée, acceptée par son auteur, qui résiste à l'objection de l'auditeur du bailleur. Décision du comité du 19/03 : adoptée, et rédaction d'une procédure révisée confiée à Amani pour le 3 avril 2026.",
    tip: "Gardez le tableau de tri en annexe de la note : il montre au comité que les objections ont été cherchées, et non découvertes en séance.",
  },

  // ───────────── Procédure 4 — Rédiger par itération ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 8',
    title: 'Cadrer le document dans la section 1 du guide de rédaction',
    intro: "Le comité a confié à Amani la révision de la procédure d'achat. Avant d'écrire la moindre ligne avec Claude, vous remplissez le haut du guide 04-templates/guide-redaction-rapports-procedures-claude.docx : objectif, audience, ton, longueur. Ces réponses alimenteront chaque demande de rédaction.",
    steps: [
      {
        title: 'Préparer le fichier',
        actions: [
          "Copiez le guide dans votre dossier de travail et renommez-le 2026-03-20_guide_redaction_PR-ACH-02_v2.docx.",
          "Ouvrez la section « 1. Planification du plan (avant toute rédaction) ».",
        ],
      },
      {
        title: 'Remplir les champs de cadrage',
        actions: [
          "« Objectif du document et audience visée » : ce que le document doit permettre de faire, et qui l'applique.",
          "Case « Ton et niveau de langage attendus » : registre, forme des phrases (impératif, présent), vocabulaire autorisé.",
          "Case « Longueur totale visée » : nombre de pages maximal.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie — fil rouge',
      lines: [
        "Objectif et audience : réviser la procédure PR-ACH-02 « Mise en concurrence et dossier d'achat » pour corriger les constats C-07, C-09, C-12 et C-26 ; elle s'applique aux équipes achats, logistique et finances des 3 sites et des partenaires APK et Mwangaza.",
        "Ton et niveau de langage : réglementaire et opérationnel ; phrases courtes au présent de l'indicatif ; un terme défini une fois, utilisé toujours de la même façon.",
        "Longueur totale visée : 6 pages maximum, hors annexes (modèles de PV et de checklist).",
      ],
    },
    result: "Le cadrage du document tient en trois champs du guide, que vous pourrez coller en tête de chaque demande à Claude.",
    pitfall: "Oublier les partenaires dans l'audience : une procédure écrite pour le seul personnel d'Horizon Grands Lacs laisserait hors champ une partie des dépenses auditées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 8',
    title: 'Faire établir le plan, le corriger et le verrouiller',
    intro: "Vous demandez uniquement un plan détaillé, pas encore de texte. Une erreur de structure corrigée à ce stade coûte deux minutes ; corrigée après rédaction complète, elle peut obliger à tout refaire.",
    steps: [
      {
        title: 'Obtenir le plan',
        actions: [
          "Dans le Project, ouvrez une conversation « Rédaction PR-ACH-02 v2 » et joignez l'ancienne procédure.",
          "Collez le cadrage de l'étape 1 et la recommandation adoptée par le comité.",
          "Demandez : « Propose uniquement un plan détaillé : titres de sections et, pour chacune, 2 à 3 lignes sur ce qu'elle doit couvrir. Ne rédige aucun texte. Indique quelle section répond à quel constat d'audit. »",
        ],
      },
      {
        title: 'Corriger et verrouiller',
        actions: [
          "Vérifiez que chaque constat visé (C-07, C-09, C-12, C-26) est traité par au moins une section.",
          "Faites corriger l'ordre ou le contenu des sections jusqu'à accord.",
          "Recopiez le plan dans « Sections du plan » du guide, inscrivez la date, cochez « Plan validé et verrouillé ».",
        ],
      },
    ],
    table: {
      columns: ['Section du plan validé', 'Ce qu\'elle couvre', 'Constat traité'],
      rows: [
        ['1. Objet et champ d\'application', 'Achats concernés, entités et sites soumis à la procédure', '—'],
        ['2. Définitions', 'Besoin, commande, fractionnement, accord-cadre, PV de comparaison des offres', 'C-07'],
        ['3. Seuils et modes de mise en concurrence', 'Tableau des seuils et pièces exigées à chaque niveau', 'C-12'],
        ['4. Planification et interdiction du fractionnement', 'Plan d\'achats annuel, règle de cumul, accords-cadres', 'C-07, C-09'],
        ['5. Constitution et archivage du dossier d\'achat', 'Pièces obligatoires et contrôle avant paiement', 'C-12'],
        ['6. Rôles et séparation des tâches', 'Qui demande, commande, réceptionne, paie', 'C-26'],
        ['7. Contrôles, exceptions et dérogations', 'Urgences, registre des dérogations, contrôle mensuel', 'C-07'],
      ],
    },
    result: "Un plan de 7 sections, chacune reliée aux constats qu'elle corrige, recopié dans le guide et verrouillé le 20/03/2026.",
    tip: "Sur ce cas, Claude avait d'abord placé la planification après le dossier d'achat : la correction d'ordre a pris une phrase. La même correction après rédaction aurait obligé à reprendre trois sections.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 8',
    title: 'Rédiger la première section dans un Artifact',
    intro: "Vous demandez la première section uniquement, en rappelant le contexte et les contraintes propres à cette section. Le texte se construit dans un Artifact : la conversation sert à discuter des ajustements, le document reste propre.",
    steps: [
      {
        title: 'Demander la section',
        actions: [
          "Demandez : « Rédige uniquement la section 1 du plan validé, dans un Artifact. Ton : réglementaire, présent de l'indicatif. Longueur : une demi-page maximum. Ne rédige pas la section 2. »",
          "Si l'Artifact ne s'ouvre pas, vérifiez dans les paramètres que la fonction est activée.",
        ],
      },
      {
        title: 'Relire, corriger, consigner',
        actions: [
          "Lisez la section en entier et notez ce qui ne convient pas : fond, ton, longueur.",
          "Demandez les corrections ciblées jusqu'à accord.",
          "Dans le tableau « 2. Journal de rédaction section par section » du guide, remplissez la première ligne : Section du plan, Statut.",
        ],
      },
    ],
    example: {
      title: 'Section 1 — extrait validé',
      lines: [
        "« 1.1 La présente procédure s'applique à tout achat de biens, de services et de travaux financé par les fonds du consortium Kivu Résilience, quel que soit le site ou l'entité qui l'exécute, y compris les partenaires APK et Mwangaza.",
        "1.2 Elle s'applique aux achats payés en dollars américains comme en francs congolais ; les montants en francs congolais sont convertis au taux comptable du mois de la commande pour l'application des seuils. »",
        "Journal, ligne 1 : Section 1 — Objet et champ d'application | Statut : Validée le 23/03/2026",
      ],
    },
    result: "Une section rédigée, relue, corrigée et validée, consignée dans la première ligne du journal de rédaction.",
    pitfall: "Accepter la section parce qu'elle « se lit bien » : relisez-la avec la question « un agent pourrait-il l'appliquer sans me demander ce qu'elle veut dire ? »",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 8',
    title: 'Enchaîner les sections une par une, dans l\'ordre du plan',
    intro: "Vous répétez le cycle demander, relire, corriger, valider pour chaque section. Règle absolue : ne demandez jamais « continue avec le reste du document » sans avoir validé la section précédente. C'est ce qui distingue une rédaction maîtrisée d'une génération en bloc.",
    steps: [
      {
        title: 'Pour chaque section',
        actions: [
          "Demandez la section suivante seule, en rappelant ses contraintes : contenu prévu au plan, longueur, éléments obligatoires (tableau, numérotation).",
          "Fournissez les faits que Claude ne peut pas connaître : seuils du manuel, noms des fonctions, délais internes.",
          "Relisez, corrigez, validez, puis passez la ligne du journal en « Validée » avec la date.",
          "Le tableau du guide compte 4 lignes : ajoutez-en (touche Tab dans la dernière cellule) pour couvrir les 7 sections.",
        ],
      },
    ],
    table: {
      columns: ['Seuil (montant de la commande ou du besoin cumulé)', 'Mode de mise en concurrence', 'Pièces exigées'],
      rows: [
        ['Moins de 500 USD', 'Achat direct', '1 facture pro forma'],
        ['500 à 2 499 USD', 'Consultation', '3 devis écrits + PV de comparaison des offres'],
        ['2 500 à 24 999 USD', 'Consultation avec comité d\'évaluation', '3 devis + PV signé par 3 membres'],
        ['25 000 USD et plus', 'Appel d\'offres', 'Dossier d\'appel d\'offres, PV d\'ouverture et d\'évaluation'],
      ],
    },
    result: "Section 3 validée le 24/03/2026 avec le tableau des seuils du manuel achats du consortium (fictif), recopié depuis le manuel et non inventé par Claude.",
    pitfall: "Laisser Claude proposer des seuils « usuels » : il remplira le vide par des chiffres plausibles. Les seuils, délais et montants viennent toujours de vos documents de référence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 8',
    title: 'Demander une contre-argumentation ciblée sur les sections sensibles',
    intro: "Les sections qui portent une obligation, une interdiction ou une exception sont celles qu'un agent pressé ou un auditeur lira de près. Pour chacune, vous demandez à Claude de chercher la zone grise, et vous corrigez avant de passer à la section suivante — pas après la rédaction complète.",
    steps: [
      {
        title: 'Challenger la section',
        actions: [
          "Repérez dans le plan les sections sensibles : ici 3 (seuils), 4 (fractionnement), 6 (rôles) et 7 (dérogations).",
          "Juste après leur rédaction, demandez : « Quelle objection un lecteur exigeant opposerait-il à cette section ? Quelle formulation laisse une zone d'interprétation qu'un agent pourrait exploiter ? »",
          "Corrigez la section, puis remplissez les colonnes « Objection / faille relevée (contre-argumentation) » et « Correction apportée » du journal.",
        ],
      },
    ],
    table: {
      columns: ['Section du plan', 'Statut', 'Objection / faille relevée', 'Correction apportée'],
      rows: [
        ['3. Seuils', 'Validée 24/03', 'Seuils en USD : rien pour les achats en francs congolais', 'Renvoi à la règle de conversion du 1.2'],
        ['4. Fractionnement', 'Validée 25/03', '« Besoins de même nature » non défini : chacun l\'interprète', 'Même catégorie du catalogue achats, cumul sur 12 mois glissants, contrôle mensuel'],
        ['6. Rôles', 'Validée 26/03', 'Petit site : une seule personne disponible', 'Validation du paiement par le site de rattachement, jamais par l\'acheteur'],
        ['7. Dérogations', 'Validée 27/03', '« Urgence » non définie : porte ouverte', 'Urgence définie, accord écrit de la directrice pays, régularisation sous 10 jours ouvrables, registre'],
      ],
    },
    result: "Les quatre sections sensibles ont chacune une objection consignée et une correction intégrée avant de passer à la suite.",
    tip: "La meilleure question pour une procédure est concrète : « Décris comment un agent pourrait respecter la lettre de cette section tout en contournant son objectif. » Si Claude trouve un moyen, un agent le trouvera aussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 8',
    title: 'Passer la checklist de revue critique du guide',
    intro: "La section « 3. Checklist de demande de revue critique » du guide liste cinq questions. Vous la passez une fois toutes les sections validées, pour vérifier que rien n'a été oublié en route : chaque case non cochée déclenche une demande précise.",
    steps: [
      {
        title: 'Répondre aux cinq questions',
        actions: [
          "Ai-je demandé à Claude la meilleure objection contre chaque recommandation ou conclusion engageante ?",
          "Ai-je demandé quel constat ou quelle clause est le moins solidement étayé dans le document ?",
          "Ai-je vérifié si une clause laisse une zone d'interprétation exploitable ?",
          "Ai-je confronté chaque donnée chiffrée citée à sa source, sans me fier à la formulation confiante du texte ?",
          "Ai-je intégré les corrections issues de la revue critique avant de passer à la section suivante, pas après la rédaction complète ?",
        ],
      },
    ],
    example: {
      title: 'Passage de la checklist — 27/03/2026',
      lines: [
        "Questions 1, 3 et 5 : oui (journal de rédaction, 4 objections consignées).",
        "Question 2 : non → demande : « Quelle clause de la procédure est la moins solidement justifiée ? » Réponse : « 4.3, le contrôle mensuel du cumul ne dit pas qui le fait ni sur quel état. » Corrigé : le responsable achats, sur l'extraction mensuelle du registre des achats.",
        "Question 4 : 11 chiffres listés (seuils, délais, taux) ; 11 cochés contre le manuel achats et la note du comité.",
      ],
    },
    result: "Les cinq cases cochées, dont une après correction : la procédure ne contient plus aucune clause sans responsable ni aucun chiffre non vérifié.",
    pitfall: "Cocher les cases de mémoire : chaque « oui » doit pouvoir être montré (ligne du journal, réponse de Claude, chiffre coché).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 8',
    title: 'Assembler et faire une relecture de cohérence globale',
    intro: "Chaque section a été validée isolément ; le document assemblé peut encore contenir des termes qui varient, des redites ou des renvois faux. Vous demandez une relecture d'ensemble ciblée sur ces trois défauts, sans réécriture.",
    steps: [
      {
        title: 'Assembler',
        actions: [
          "Demandez à Claude de réunir les 7 sections validées dans un seul Artifact, sans en modifier le contenu.",
          "Vérifiez la numérotation des sections et des articles.",
        ],
      },
      {
        title: 'Relire la cohérence',
        actions: [
          "Demandez : « Relis le document assemblé. Liste, sans réécrire : les termes définis en section 2 utilisés sous un autre nom, les redites entre sections, les renvois vers une section ou un article inexistant, les écarts de ton. »",
          "Appliquez les corrections une à une, dans l'Artifact.",
          "Cochez dans « 4. Contrôle qualité final avant diffusion » : « Relecture de cohésion globale effectuée » et « Redites éliminées entre sections ».",
        ],
      },
    ],
    example: {
      title: 'Résultat de la relecture — fil rouge',
      lines: [
        "Terme : la section 5 parle de « PV d'évaluation » alors que la section 2 définit « PV de comparaison des offres » → harmonisé.",
        "Redite : la section 6 répète le tableau des seuils de la section 3 → remplacé par un renvoi « voir 3.1 ».",
        "Renvoi faux : « conformément à la section 8 » (le plan en compte 7) → « section 7 ».",
        "Longueur finale : 5 pages et demie, sous la limite de 6 pages.",
      ],
    },
    result: "Un document assemblé de 5 pages et demie, sans incohérence de termes, sans redite, avec des renvois justes, et deux cases du contrôle qualité cochées.",
    tip: "Demandez la liste des défauts « sans réécrire » : une réécriture globale à ce stade risque de défaire des formulations que vous aviez validées section par section.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 8',
    title: 'Effectuer la relecture critique humaine finale, signer et diffuser',
    intro: "Aucune version produite par itération ne se substitue à une relecture humaine avant envoi. Elle porte sur ce qu'un modèle ne peut pas juger : la justesse du ton dans votre contexte, l'exactitude des chiffres et la cohérence avec des engagements pris ailleurs que dans la conversation.",
    steps: [
      {
        title: 'Faire relire par les bonnes personnes',
        actions: [
          "Copiez le texte de l'Artifact dans le modèle Word de procédure de l'organisation.",
          "Envoyez-le à chaque relecteur avec une question précise, adaptée à son rôle.",
          "Intégrez les retours ; listez ce qui reste ouvert dans « Points restant à corriger avant envoi ».",
        ],
      },
      {
        title: 'Clôturer le guide et diffuser',
        actions: [
          "Cochez « Données chiffrées vérifiées contre la source » et « Ton cohérent avec le contexte organisationnel ».",
          "Remplissez « Rédigé par (nom, fonction) » et « Date ».",
          "Transmettez pour approbation la procédure en PDF, jamais la conversation avec Claude ; archivez le guide complété avec elle.",
        ],
      },
    ],
    example: {
      title: 'Relecture et clôture — fil rouge',
      lines: [
        "Patrick Mumbere (applicabilité terrain) : « Le délai de 10 jours ouvrables pour régulariser une urgence est tenable. »",
        "Josué Paluku (audit) : « C-07, C-09, C-12 traités. C-26 : ajouter que les droits du logiciel comptable sont revus chaque trimestre. » → ajouté en 6.4.",
        "Point restant : « Allègement du comité d'évaluation entre 2 500 et 5 000 USD : en attente de l'avis du responsable financier sur la convention ; non intégré à cette version. »",
        "Rédigé par : Amani Kahindo, chargée administrative et logistique — Date : 31/03/2026. Approuvé par Furaha Bisimwa le 02/04/2026, entrée en vigueur le 15/04/2026.",
      ],
    },
    result: "Une procédure de 6 pages relue par l'opérationnel et par l'audit, un guide de rédaction complété jusqu'à la signature, et un point ouvert explicitement tracé plutôt que glissé dans le texte.",
    pitfall: "Faire relire « la procédure » sans dire quoi regarder : le relecteur corrige la ponctuation et laisse passer la clause sans responsable. Donnez à chacun sa question.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — La synthèse remise au comité du 19 mars 2026',
    scenario: "Rappel : rapport d'audit interne de 140 pages et 31 constats, comité de 5 membres non-auditeurs, 20 minutes. Voici la note finale d'une page, après vérification, revue critique, ajustement et validation par l'auteur du rapport.",
    steps: [
      { title: 'Ouverture', body: "Sur 31 constats, l'audit 2025 en retient cinq qui exposent le consortium à des dépenses inéligibles et à des pertes de trésorerie ; quatre sont établis, un reste à confirmer." },
      { title: '1. Commandes de carburant fractionnées sous le seuil (p. 24-26)', body: "14 commandes à Goma entre 2 400 et 2 490 USD, soit 34 300 USD, juste sous le seuil de 2 500 USD. Impact : dépenses exposées à un rejet par le bailleur ; intention non établie par l'audit. Recommandation : accord-cadre carburant et plan d'achats annuel (lié à C-09, p. 15)." },
      { title: '2. Dossiers d\'achat sans comparaison des offres (p. 41-44)', body: "43 des 186 dossiers testés (23,1 %) sans PV de comparaison. Impact : mise en concurrence impossible à prouver en cas de vérification. Recommandation : aucun paiement sans dossier complet." },
      { title: '3. Avances de caisse non justifiées (p. 67-70)', body: "18 avances non justifiées après 30 jours, 27 400 USD, dont 9 400 USD au-delà de 90 jours. Impact : trésorerie immobilisée et risque de perte. Recommandation : apurement avant le 30/04/2026, nouvelle avance subordonnée à la justification de la précédente." },
      { title: '4. Rapprochements bancaires non signés à Bukavu (p. 58-61)', body: "5 mois sur 12 non signés ; écart non expliqué de 6 850 USD au 30/09/2025. Impact : erreur ou détournement non détectable. Recommandation : rapprochement signé sous 10 jours chaque mois ; explication de l'écart avant le 31/03/2026." },
      { title: '5. Cumul des droits de commande et de paiement à Kinshasa (p. 81-84)', body: "Risque identifié sur entretiens et capture des droits, sans test des paiements. Recommandation : séparer les droits dans le logiciel et tester les paiements de Kinshasa avant le 30/04/2026." },
    ],
    result: "Note lue en 2 minutes ; le comité consacre le reste de la séance aux décisions, dont la réponse au constat 1 (corrigé 2/3).",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — La recommandation challengée',
    scenario: "Proposition initiale de Patrick Mumbere : relever le seuil du comité d'évaluation de 2 500 à 5 000 USD pour répondre au constat C-07 et réduire une charge estimée à 366 heures-personne par an. Voici le raisonnement complet tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Mise à plat', body: "Thèse, 3 arguments chiffrés et sourcés, décision demandée : validés par l'auteur." },
      { title: 'Faiblesses classées', body: "1. Besoin carburant agrégé de 34 300 USD, au-dessus du seuil d'appel d'offres : la mesure ne corrige pas C-07. 2. Le fractionnement vient de l'absence de plan d'achats (C-09). 3. Charge de travail non comparée au risque." },
      { title: 'Meilleure objection', body: "Auditeur du bailleur : relever le seuil après un audit qui constate son contournement revient à affaiblir le contrôle ; un seuil interne ne peut pas être moins exigeant que la convention." },
      { title: 'Hypothèses testées', body: "2 fausses (cause du fractionnement, rareté des besoins récurrents), 1 partielle (durée des comités estimée), 1 à vérifier (compatibilité avec la convention)." },
      { title: 'Tri', body: "3 critiques retenues après relecture des pages, 1 à vérifier par le responsable financier, 1 suggestion de Claude rejetée car contraire au manuel." },
      { title: 'Recommandation révisée', body: "Seuil maintenu ; accord-cadre carburant avant le 30/06/2026 ; plan d'achats annuel et contrôle mensuel du cumul ; allègement du comité seulement si la convention le permet." },
    ],
    result: "Adoptée par le comité le 19/03/2026, avec mandat de réviser la procédure PR-ACH-02 avant le 3 avril.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — La procédure rédigée et son guide de rédaction',
    scenario: "Voici l'état final du guide de rédaction tel qu'il a été archivé avec la procédure PR-ACH-02 v2, approuvée le 2 avril 2026.",
    steps: [
      { title: '1. Planification', body: "Objectif et audience (constats C-07, C-09, C-12, C-26 ; 3 sites et 2 partenaires) ; ton réglementaire au présent ; 6 pages maximum ; plan de 7 sections validé et verrouillé le 20/03/2026." },
      { title: '2. Journal de rédaction', body: "7 lignes, toutes « Validée » entre le 23 et le 27/03 ; 4 objections consignées (francs congolais, « même nature », petit site, « urgence ») avec leur correction." },
      { title: '3. Checklist de revue critique', body: "5 cases cochées, dont une après correction de la clause 4.3 (responsable et état du contrôle mensuel du cumul)." },
      { title: '4. Contrôle qualité final', body: "4 cases cochées ; 11 chiffres vérifiés contre le manuel et la note du comité ; point restant tracé : allègement du comité d'évaluation en attente d'avis." },
      { title: 'Signature', body: "Rédigé par Amani Kahindo, chargée administrative et logistique, le 31/03/2026." },
    ],
    table: {
      columns: ['Indicateur', 'Valeur'],
      rows: [
        ['Sections rédigées et validées une à une', '7 sur 7'],
        ['Objections consignées et traitées', '4 + 1 issue de la checklist'],
        ['Incohérences corrigées à l\'assemblage', '3 (terme, redite, renvoi)'],
        ['Longueur finale', '5 pages et demie (limite : 6)'],
        ['Relecteurs humains', '2 (opérationnel, audit)'],
      ],
    },
    tip: "Gardez ce corrigé comme modèle : sur votre prochain rapport ou votre prochaine politique, seuls le sujet et les faits changeront, la structure du travail reste la même.",
  },
  {
    type: 'case-study',
    title: 'Deuxième cas résolu — Comparer deux versions d\'une politique institutionnelle',
    scenario: "Avril 2026 : Horizon Grands Lacs met à jour sa politique anti-fraude et anticorruption (version 2019, 34 pages ; projet 2026, 41 pages). L'équipe conformité doit connaître tous les écarts de fond avant validation. Amani applique la procédure 2 en partant de la ligne 7 du gabarit.",
    steps: [
      { title: 'Gabarit, ligne 10', body: "A : identifier tous les écarts de fond entre les deux versions ; B : équipe conformité, familière du vocabulaire ; C : détaillé, chaque écart documenté ; D : tableau Clause / Ce qui change / Impact opérationnel, dans l'ordre du document ; E : 2 versions d'une politique, 34 et 41 pages." },
      { title: 'Dépôt', body: "Les deux fichiers sont déposés dans le même message, renommés « politique_2019_ANCIENNE.pdf » et « politique_2026_PROJET.pdf » pour qu'aucune confusion ne soit possible ; prompt de la ligne 7 adapté." },
      { title: 'Vérification', body: "Claude annonce « article 7 (conflits d'intérêts) supprimé ». Contrôle dans le projet : l'article a été déplacé en annexe 2, pas supprimé. Correction demandée : « Distingue suppression et déplacement. »" },
      { title: 'Revue critique', body: "Clause ambiguë signalée : l'article 5.3 du projet impose de « s'abstenir en cas de conflit d'intérêts » sans dire qui constate le conflit. Transmis à l'équipe conformité." },
    ],
    table: {
      columns: ['Clause', 'Ce qui change', 'Impact opérationnel'],
      rows: [
        ['Art. 4.2 Signalement', '« Dans les meilleurs délais » → « sous 48 heures au point focal »', 'Former les chefs de site ; publier le canal de signalement'],
        ['Art. 6.1 Cadeaux', 'Plafond de 50 USD → interdiction, sauf objets promotionnels de moins de 20 USD', 'Mettre à jour le code de conduite fournisseurs'],
        ['Art. 9 Sanctions (nouveau)', 'Exclusion des fournisseurs impliqués pendant 3 ans', 'Créer une liste d\'exclusion consultée avant chaque commande'],
      ],
    },
    result: "Un tableau d'écarts vérifié, sans faux écart (le « faux » article supprimé a été corrigé), et une clause ambiguë remontée avant validation.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Synthèse structurée, vérification et rédaction itérative',
    instructions: "Prenez un document long réel de votre travail (rapport, politique, étude ; à défaut, un document public de plusieurs dizaines de pages sur votre secteur) et appliquez les procédures du module, dans l'ordre, sans regarder les diapositives de procédure. Comparez ensuite votre travail au corrigé intégral.",
    steps: [
      {
        title: '1. Demande de synthèse structurée',
        actions: [
          "Répondez par écrit aux trois questions (objectif, audience, niveau de détail).",
          "Dans gabarit-prompts-analyse-documents-longs.xlsx, onglet « Bibliotheque de prompts », complétez une nouvelle ligne (à partir de la ligne 9), colonnes A à F.",
        ],
      },
      {
        title: '2. Test et vérification',
        actions: [
          "Soumettez la demande à Claude avec le document complet déposé.",
          "Vérifiez au moins 3 points produits directement dans le document source, pas de mémoire, dans un tableau point / page / ce que dit le document / verdict.",
          "Notez dans un commentaire de la cellule F si le niveau de détail obtenu correspondait à votre demande ou s'il a fallu ajuster.",
        ],
      },
      {
        title: '3. Revue critique appliquée',
        actions: [
          "Demandez à Claude d'identifier le point le moins étayé de sa propre synthèse.",
          "Notez sa réponse et dites si elle change votre confiance dans un des points retenus.",
        ],
      },
      {
        title: '4. Rédaction itérative',
        actions: [
          "Choisissez une section courte d'un rapport ou d'une procédure que vous devez produire prochainement.",
          "Avec guide-redaction-rapports-procedures-claude.docx : section 1 remplie, plan validé et verrouillé, une section à la fois, contre-argumentation sur la partie recommandation consignée dans le journal.",
        ],
      },
    ],
    deliverable: "La ligne complétée dans le gabarit de prompts d'analyse, le tableau de vérification, et la fiche de suivi de rédaction du guide avec au moins une section rédigée et sa contre-argumentation consignée.",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement — Challenger la recommandation sur les avances de caisse',
    instructions: "Reprenez le constat 3 du fil rouge (18 avances non justifiées, 27 400 USD). Un membre du comité propose : « Bloquer toute nouvelle avance à un agent tant que la précédente n'est pas justifiée, sans exception. » Appliquez la procédure 3 à cette proposition.",
    steps: [
      {
        title: 'Challenger',
        actions: [
          "Mettez la proposition à plat : thèse, arguments, décision demandée.",
          "Demandez les 3 faiblesses les plus sérieuses, classées.",
          "Faites construire la meilleure objection par un chef de site qui organise des distributions en zone éloignée.",
          "Faites lister et tester les hypothèses implicites, dans un tableau à 4 colonnes.",
        ],
      },
      {
        title: 'Conclure',
        actions: [
          "Triez les critiques (retenue, rejetée, à vérifier).",
          "Rédigez la recommandation révisée en 3 à 4 points et soumettez-la à un second passage critique.",
        ],
      },
    ],
    tip: "Points de contrôle : votre analyse doit au minimum faire apparaître le risque de bloquer une activité de terrain qui dépend d'espèces, l'hypothèse que le retard vient de la négligence plutôt que de l'éloignement des pièces justificatives, et le besoin d'une exception encadrée (qui décide, pour combien de temps, avec quelle trace).",
    deliverable: "La mise à plat, le tableau des hypothèses implicites, le tableau de tri et la recommandation révisée avec le résultat du second passage critique.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre rapport ou politique',
    instructions: "Appliquez le module complet à un document que vous devez réellement produire dans les prochaines semaines (rapport narratif bailleur, procédure interne, politique), dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Vérifiez compte, confidentialité et version diffusable des documents sources ; obtenez l'accord écrit nécessaire.",
          "Créez un Project dédié avec ses instructions et vos documents de référence.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Si vous partez d'un document existant : synthèse structurée, recoupements, vérification et revue critique (procédure 2).",
          "Challengez la recommandation principale de votre document (procédure 3).",
          "Rédigez le document section par section avec le guide complété jusqu'à la signature (procédure 4).",
        ],
      },
    ],
    deliverable: "Le document final relu par au moins une deuxième personne, le guide de rédaction complété et signé, et la ligne de gabarit correspondante — prêts à servir de modèle pour le prochain document du même type.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre ligne de gabarit remplit les six colonnes, et la colonne B précise le lecteur, son niveau de connaissance et le temps dont il dispose.",
      "Votre prompt contient explicitement les mentions Objectif, Audience, Niveau de détail et Format, vos critères de priorité et une consigne de contrôle.",
      "Le document a été déposé en entier, en un seul fichier, et la pagination citée par Claude est la pagination imprimée.",
      "Chaque point de votre synthèse porte une page source, et au moins 3 points ont été vérifiés dans le document, avec un tableau de vérification.",
      "Aucune cause ni intention n'est affirmée sans la phrase du document qui l'établit.",
      "Vous avez obtenu et noté la réponse de Claude à « lequel est le moins étayé », avec votre décision.",
      "Votre revue critique contient des faiblesses classées, une objection formulée par un contradicteur nommé et un tableau d'hypothèses implicites avec leur vérification.",
      "Votre guide de rédaction a un plan verrouillé et daté avant toute rédaction, et un journal où chaque section sensible a une objection et une correction.",
      "Aucun seuil, délai ou montant de votre document n'a été proposé par Claude sans être vérifié dans vos documents de référence.",
      "Le contrôle qualité final est coché, les points restants sont listés, et les champs « Rédigé par » et « Date » sont remplis.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Demander un résumé sans préciser le niveau de détail ni l'audience : le résultat est calibré pour personne. Répondez aux trois questions et remplissez la ligne du gabarit avant de déposer le document.",
      "Laisser Claude choisir ses critères de priorité : il trie selon des critères implicites. Écrivez les vôtres, numérotés par ordre d'importance.",
      "Déposer un document long en morceaux désordonnés : Claude perd la vue d'ensemble et les recoupements deviennent impossibles. Déposez le document complet, en un seul fichier, dès le départ.",
      "Ignorer le décalage entre pages imprimées et pages PDF : le lecteur ne retrouve pas les passages cités. Fixez la pagination dans les instructions du projet.",
      "Déposer un PDF scanné sans le vérifier : une partie du texte n'est pas lue, sans aucun message d'alerte. Faites le test Ctrl+F avant le dépôt.",
      "Vérifier la synthèse « de mémoire » : c'est l'impression générale qui laisse passer un site ou un chiffre faux. Vérifiez dans le document, page par page.",
      "Demander « qu'en penses-tu ? » : vous obtenez une validation polie. Demandez des faiblesses en nombre fixé, classées, et la meilleure objection d'un contradicteur nommé.",
      "Prendre la critique de Claude pour vérité, surtout sur les règles d'un bailleur : triez chaque objection et lisez la règle dans le texte officiel avant de la citer.",
      "Demander « continue avec le reste du document » : la rédaction redevient une génération en bloc. Une section à la fois, validée avant la suivante.",
      "Recommencer de zéro une synthèse insatisfaisante : vous perdez les clarifications acquises. Donnez un correctif ciblé dans la même conversation.",
      "Diffuser une première version sans relecture humaine : vous transférez un risque non vérifié à votre lecteur, souvent au pire moment. Donnez à chaque relecteur sa question précise.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez préparé un espace de travail sûr : compte vérifié, version diffusable obtenue avec accord écrit, document contrôlé, Project paramétré et testé.",
      "Vous avez construit une demande de synthèse en quatre éléments dans le gabarit, avec vos critères de priorité et une consigne de contrôle.",
      "Vous avez fait analyser un rapport de 140 pages, recoupé chapitres et annexes, corrigé deux erreurs à la vérification et produit une note d'une page de 5 constats sourcés, validée par l'auteur du rapport.",
      "Vous avez obtenu une vraie contre-argumentation : faiblesses classées, objection de l'auditeur du bailleur, hypothèses implicites testées, tri et recommandation révisée adoptée par le comité.",
      "Vous avez rédigé une procédure de 7 sections une par une, avec un plan verrouillé, quatre objections consignées et corrigées, et une relecture de cohérence.",
      "Vous avez conduit la relecture humaine finale, tracé le point restant, complété le guide de rédaction et signé le document.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais formuler une demande de synthèse en précisant systématiquement l'objectif, l'audience, le niveau de détail et le format de sortie attendus.",
      "Je sais déposer un document long complet dans Claude et vérifier au moins un échantillon des points produits contre la source.",
      "Je sais utiliser un Project et un Artifact pour un dossier qui dure plusieurs jours.",
      "Je sais demander explicitement une contre-argumentation ou une revue critique, et je comprends pourquoi ce n'est jamais le comportement par défaut du modèle.",
      "Je sais faire apparaître et tester les hypothèses implicites d'un raisonnement avant de le présenter.",
      "Je sais rédiger un document professionnel par itération section par section, en validant le plan avant tout contenu.",
      "Je n'accepte jamais une première version d'un document rédigé par l'IA sans relecture critique humaine avant diffusion.",
      "J'ai complété une ligne du gabarit de prompts d'analyse de documents longs avec un cas réel de mon travail.",
      "J'ai rédigé au moins une section d'un document avec la méthode itérative, en consignant la contre-argumentation demandée dans le guide de rédaction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Microsoft Copilot — L'IA native dans Office 365 & Teams ». Vous y apprendrez à faire travailler l'IA directement dans Word, Excel, PowerPoint, Outlook et Teams — par exemple pour transformer une note de synthèse comme celle de ce module en présentation pour le comité — avec la même discipline : demande précise, vérification contre la source, relecture humaine.",
  },
]
