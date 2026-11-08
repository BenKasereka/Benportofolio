// Module 05 — Perplexity AI — Recherche temps réel & veille stratégique
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (cadrage de la veille, requête de recherche approfondie,
// vérification des sources, veille récurrente, fact-checking et comparaison
// de marché, rapport de recherche sourcée) est détaillée étape par étape et
// appliquée au même fil rouge que le module 09 : Horizon Grands Lacs, qui met
// en place sa veille de conformité USAID/BHA et ECHO. Organisation et
// personnes fictives ; tous les résultats de recherche attribués à un
// bailleur, à une agence ou à un média sont simulés à des fins pédagogiques.
export default [
  {
    type: 'cover',
    title: 'Perplexity AI — Recherche temps réel & veille stratégique',
    hook: "À la fin de ce module, vous saurez poser à Perplexity une question qui ramène des sources officielles et datées, vérifier chaque citation avant de la croire, installer une veille qui tourne chaque semaine sans repartir de zéro, démonter une affirmation chiffrée de fournisseur en dix minutes — et remettre à votre direction un rapport sourcé de deux pages que n'importe quel auditeur peut revérifier ligne par ligne.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Cadrer une demande de veille en sujets, décisions et sources de référence, en produisant un mandat de veille écrit et une carte des sources par sujet.",
      "Rédiger et lancer une requête de recherche approfondie avec critères de sourcing explicites (type de source, période, exigence de citation), en produisant deux requêtes prêtes à l'emploi (USAID/BHA et ECHO) et l'inventaire des citations obtenues.",
      "Vérifier chaque source citée (affirmation présente telle quelle, date identifiable, fraîcheur, niveau d'autorité) et lui attribuer un niveau de confiance, en produisant un registre de vérification daté.",
      "Mettre en place une veille récurrente dans un Espace Perplexity, avec requête type, fréquence et critères de pertinence, en produisant la grille de veille sectorielle complétée et son onglet Synthèse à jour.",
      "Fact-checker une affirmation chiffrée et construire une comparaison de marché sourcée, en produisant un tableau comparatif cellule par cellule et une conclusion chiffrée.",
      "Choisir le bon outil (Perplexity, Claude, ChatGPT, Copilot) selon la tâche, et formaliser une recherche dans le gabarit de rapport sourcé, en produisant un rapport d'une à deux pages relu et diffusé en PDF.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une présentation de Perplexity : vous allez mener une vraie veille, de la demande de la direction au rapport remis en comité, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec la requête exacte à copier, les réglages à faire, les cellules à remplir et le résultat attendu.",
      "À la fin du module, vous aurez en main six livrables réutilisables tels quels pour vos propres sujets :",
    ],
    bullets: [
      "Un mandat de veille d'une demi-page : sujets, décision servie par chaque sujet, responsable, fréquence, échéance.",
      "Une carte des sources de référence par sujet, classées selon la hiérarchie de fiabilité.",
      "Deux requêtes de recherche approfondie (USAID/BHA, ECHO) et leur version « requête type » à période glissante, enregistrées dans un Espace Perplexity avec ses instructions par défaut.",
      "Un registre de vérification des citations : affirmation, source, date, contrôle effectué, niveau de confiance.",
      "La grille grille-veille-sectorielle-perplexity.xlsx complétée (onglets « Veille » et « Synthèse »), dont un fact-check chiffré sur le prix du carburant.",
      "Le gabarit gabarit-rapport-recherche-sourcee.docx rempli sur une évolution réglementaire, relu par une deuxième personne et exporté en PDF.",
    ],
    tip: "Ouvrez dès maintenant les deux fichiers du dossier 04-templates : toutes les étapes de remplissage du module renvoient à leurs colonnes et à leurs sections exactes, vous pouvez donc les compléter à l'écran en même temps que vous lisez.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le comité de direction du vendredi 25 septembre 2026',
    body: [
      "Horizon Grands Lacs, l'organisation fictive du module 09, opère toujours à Goma, Bukavu et Kinshasa. Le lundi 14 septembre 2026, la directrice pays Furaha Bisimwa écrit à Amani Kahindo, chargée administrative et logistique : « Je veux une veille permanente sur les règles de conformité de nos deux bailleurs. Je ne veux pas d'information non vérifiée dans ce suivi — chaque ligne doit pouvoir être défendue devant un auditeur, avec la source et la date. Premier point au comité de direction du vendredi 25 septembre. »",
      "Le même jour, Patrick Mumbere, responsable achats, lui transfère une lettre de Transco Sarl datée du 2 septembre : le transporteur justifie sa hausse de tarif par « une hausse de 25 % du prix du carburant entre mars et juin 2026 ». C'est la suite directe de la recommandation P2 du comité du 10 juillet : obtenir la justification du coût par trajet (+ 24,7 %).",
    ],
    table: {
      columns: ['Élément', 'Donnée du fil rouge'],
      rows: [
        ['Programme A — Goma', "« Abris et articles ménagers essentiels — Nord-Kivu », financé par USAID/BHA, rapports financiers trimestriels"],
        ['Programme B — Bukavu', "« Eau, hygiène et protection — Sud-Kivu », financé par ECHO"],
        ['Antécédent', "Audit de clôture 2025 : 3 850 USD de carburant déclarés inéligibles, faute d'un justificatif exigé depuis huit mois"],
        ['Relecteur désigné', 'Josué Kambale, responsable financier'],
        ['Échéance', 'Rapport sourcé diffusé le jeudi 24/09/2026, comité le vendredi 25/09/2026'],
      ],
    },
  },
  {
    type: 'concept',
    title: 'Règle du module : les résultats de recherche montrés ici sont simulés',
    body: [
      "Perplexity interroge le web au moment où vous posez la question : ses réponses changent d'une semaine à l'autre. Pour pouvoir vous montrer des résultats complets et chiffrés, toutes les réponses, citations, dates de publication et prix attribués dans ce module à USAID/BHA, ECHO, OCHA, Devex, ReliefWeb ou à un média sont simulés, comme le demande l'exercice noté du module.",
      "Ce qui n'est pas simulé, c'est la méthode : les requêtes, les réglages, les contrôles, les calculs et le remplissage des gabarits sont exactement ceux que vous appliquerez sur les vraies réponses.",
    ],
    pitfall: "Ne recopiez jamais une évolution réglementaire de ce module dans un document de travail réel : refaites la recherche, ouvrez les vraies sources et appliquez la procédure de vérification. C'est d'ailleurs la leçon centrale du module.",
  },
  {
    type: 'concept',
    title: "La carte du module : 6 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Une source non vérifiée à la procédure 3 se retrouve, telle quelle, dans le rapport présenté au comité : ne sautez aucune étape.",
    bullets: [
      "Procédure 1 — Cadrer la veille (4 étapes) : mandat, sujets et décisions, carte des sources, espace de travail.",
      "Procédure 2 — Construire et lancer une requête de recherche approfondie (6 étapes) : de la question nue à l'inventaire des citations.",
      "Procédure 3 — Vérifier les sources et noter la fiabilité (5 étapes) : ouvrir, dater, classer, recouper, coter.",
      "Procédure 4 — Installer la veille récurrente (6 étapes) : Espace, requête type, fréquence, critères, grille, Synthèse.",
      "Procédure 5 — Fact-checker une affirmation et comparer un marché (5 étapes) : le cas du carburant de Transco Sarl.",
      "Procédure 6 — Rédiger le rapport de recherche sourcée (6 étapes) : le gabarit section par section, jusqu'à la diffusion.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 850 USD',
    caption: "C'est le montant de carburant déclaré inéligible à l'audit de clôture 2025 d'Horizon Grands Lacs : la règle de justification avait changé huit mois plus tôt et personne ne l'avait vu.",
    context: "Une veille de conformité ne sert pas à « se tenir informé » : elle sert à éviter des rejets de dépenses qui tombent des mois après le changement de règle, quand il est trop tard pour produire le justificatif. Chaque procédure de ce module est construite pour que ce scénario ne se reproduise pas.",
  },
  {
    type: 'concept',
    title: 'Ce qui distingue Perplexity des autres IA de la formation',
    body: [
      "ChatGPT, Claude, Copilot et Gemini répondent avant tout à partir de ce qu'ils ont appris pendant leur entraînement, un stock de connaissances figé à une date de coupure (knowledge cutoff). Ils peuvent activer une navigation web en option, mais ce n'est ni leur mode par défaut ni ce pour quoi ils sont optimisés. Sans recherche activée, un fait récent produit soit un refus prudent, soit — plus dangereux — une réponse assurée qui date de plusieurs mois.",
      "Perplexity fonctionne à l'envers : chaque requête déclenche une recherche web réelle au moment où vous la posez, puis un modèle de langage synthétise une réponse à partir des pages effectivement trouvées. Chaque affirmation porte un numéro de citation cliquable qui renvoie à la page source. C'est un système RAG (retrieval-augmented generation) poussé à son maximum : la recherche est le cœur du produit.",
    ],
    example: {
      title: 'La même question, deux comportements (fil rouge, 14/09/2026)',
      lines: [
        "Question : « Les exigences de rapport financier de BHA ont-elles changé en 2026 ? »",
        "Modèle sans recherche web : décrit les exigences telles qu'il les a apprises, sans date ni source — impossible à défendre devant un auditeur.",
        "Perplexity : liste les pages trouvées, chacune numérotée [1], [2], [3], avec un lien — vérifiable, mais pas encore vérifié.",
      ],
    },
    highlight: "Perplexity n'est pas « plus intelligent » : il est construit pour la traçabilité. Dès qu'une information doit être datée, sourcée et défendable, c'est l'outil de choix ; pour raisonner ou rédiger long, ce sont Claude ou ChatGPT.",
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quelle tâche — savoir quand Perplexity n\'est PAS le bon choix',
    columns: ['Tâche', 'Outil à utiliser', 'Pourquoi', 'Dans le fil rouge'],
    rows: [
      ['Trouver un fait récent, daté et sourcé (règle, prix, annonce)', 'Perplexity, mode Pro Search', 'Recherche web à chaque question, citations cliquables', 'Évolutions BHA et ECHO des 6 derniers mois'],
      ['Rédiger une note longue, argumentée, cohérente sur plusieurs pages', 'Claude ou ChatGPT', 'Tiennent un raisonnement sur un contexte long', 'Mettre en forme la note de négociation Transco à partir des faits vérifiés'],
      ['Raisonner en plusieurs étapes, bâtir une stratégie', 'Claude ou ChatGPT', 'Perplexity répond à des questions factuelles, il ne construit pas une stratégie', 'Choisir la position de négociation face à Transco'],
      ['Calculer sur un fichier de données', 'ChatGPT Data Analysis ou Excel (module 09)', 'Exécution de code ou formule auditable', 'Coût par trajet 4 400 → 5 487,5 USD'],
      ['Travailler dans Word, Outlook, Teams', 'Copilot (module 04)', 'Intégré aux documents de l\'organisation', 'Mettre le rapport en page, rédiger le mail de diffusion'],
      ['Analyser un document interne confidentiel', "Outil IA validé par l'organisation, sans recherche web", 'Une requête web n\'a pas à contenir de données internes', 'Contrat Transco, rapports d\'audit'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La hiérarchie de fiabilité que Perplexity ne fait pas à votre place',
    columns: ['Niveau', 'Type de source', 'Exemples génériques', 'Dans le fil rouge (simulé)'],
    rows: [
      ['Élevé', 'Source primaire officielle', 'Site institutionnel du bailleur (USAID/BHA, ECHO), texte réglementaire publié, rapport officiel', 'Page BHA des exigences de rapport ; note BHA en PDF ; structure officielle des prix du carburant'],
      ['Moyen-élevé', 'Presse spécialisée reconnue', 'Devex, ReliefWeb, revues sectorielles à ligne éditoriale identifiable', 'Article Devex sur une période de transition'],
      ['Moyen', 'Presse généraliste', 'Grands médias sans expertise particulière sur le sujet précis', 'Média local sur une pénurie de carburant à Goma'],
      ['Faible', 'Blog, forum, réseau social non vérifié', 'Contenu sans auteur, sans date claire, ou clairement orienté', 'Billet de blog de consultant non daté ; fil de forum'],
    ],
  },
  {
    type: 'concept',
    title: 'Fiabilité et fraîcheur : deux critères distincts, à noter séparément',
    body: [
      "Perplexity classe ses sources par pertinence algorithmique, pas par autorité : un communiqué officiel, un article spécialisé, un blog non signé et un forum peuvent apparaître côte à côte dans la même liste. La hiérarchie de fiabilité, c'est vous qui l'établissez.",
      "La fraîcheur (recency) est un second critère : une source très fiable mais ancienne, sur un sujet qui évolue vite (réglementation, prix), doit être signalée comme potentiellement obsolète, jamais traitée comme actuelle par défaut.",
    ],
    table: {
      columns: ['Source', 'Fiabilité', 'Fraîcheur', 'Décision'],
      rows: [
        ['Guide officiel du bailleur daté de 2023', 'Élevée', 'Ancienne pour un sujet réglementaire', 'Vérifier qu\'aucune version plus récente n\'existe avant de citer'],
        ['Page officielle mise à jour le 30/06/2026', 'Élevée', 'Récente', 'Utilisable après vérification de l\'affirmation'],
        ['Article de blog publié hier', 'Faible', 'Récente', 'Piste à remonter jusqu\'à la source primaire, jamais citée seule'],
        ['Page officielle sans aucune date visible', 'Élevée', 'Inconnue', '« À vérifier » : demander la date d\'application au bailleur'],
      ],
    },
    tip: "Dans la grille de veille, la fiabilité va en colonne E et la date de votre recherche en colonne C ; la date de publication de chaque source s'écrit dans la colonne D, à côté de son nom. Les trois informations ne se remplacent pas.",
  },
  {
    type: 'concept',
    title: 'Anatomie d\'une requête de recherche approfondie',
    body: "Ne posez jamais une question nue si le résultat doit être fiable. Une requête de recherche approfondie précise, dans le texte même du prompt, trois critères de sourcing — puis deux garde-fous que l'expérience terrain impose.",
    bullets: [
      "Critère 1 — Le type de source : « en priorité les communiqués et la documentation officielle du bailleur, pas des articles de blog ».",
      "Critère 2 — La période : « publiées entre le 16/03/2026 et le 16/09/2026 », jamais « les informations disponibles » sans borne.",
      "Critère 3 — L'exigence de citation : « cite chaque affirmation avec la date de publication de la source et signale ce qui n'est pas confirmé par une source primaire ».",
      "Garde-fou 1 — La neutralité : « quelles évolutions ont eu lieu ? » et non « confirme que rien n'a changé ».",
      "Garde-fou 2 — Le format de sortie : un tableau avec des colonnes nommées, qui se recopie directement dans la grille.",
    ],
    example: {
      title: 'Avant / après',
      lines: [
        "Question nue : « Quelles sont les règles de conformité d'USAID/BHA ? »",
        "Requête approfondie : « Quelles sont les évolutions des règles de conformité et de reporting financier d'USAID/BHA publiées au cours des 6 derniers mois ? Priorise les communiqués officiels et la documentation BHA elle-même, cite la date de publication de chaque source, et signale si une information provient uniquement de presse spécialisée sans confirmation officielle. »",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Recherche rapide, Pro Search, Focus modes : quel réglage pour quelle question',
    columns: ['Réglage', 'Ce qu\'il fait', 'Quand l\'utiliser', 'Quand l\'éviter'],
    rows: [
      ['Recherche rapide (par défaut)', 'Une recherche, une synthèse immédiate', 'Vérifier une définition, retrouver une page connue', 'Toute question qui croise plusieurs sources ou plusieurs mois'],
      ['Pro Search (recherche approfondie)', 'Décompose la question en sous-recherches successives avant de synthétiser', 'Mode par défaut de ce module : veille, réglementation, comparaison', 'Jamais sur un sujet de veille sérieux — quelques secondes de plus ne coûtent rien'],
      ['Focus Web', 'Recherche sur le web général', 'Pages officielles, presse, documentation de bailleurs', '—'],
      ['Focus Académique', 'Restreint aux publications scientifiques', 'Veille académique, études d\'impact, littérature de recherche', 'Actualité réglementaire ou prix du marché'],
      ['Focus Réseaux sociaux / discussions', 'Restreint aux forums et réseaux', 'Repérer une rumeur ou un signal faible à vérifier ensuite', 'Toute information destinée à être citée dans un rapport'],
    ],
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de taper une requête',
    body: "Une requête Perplexity part vers un service externe et interroge le web public. Elle doit donc décrire un sujet public, jamais transporter des informations internes.",
    bullets: [
      "Utilisez le compte validé par votre organisation (offre professionnelle ou entreprise si elle existe), jamais un compte personnel pour un sujet de travail.",
      "Ne mettez dans la requête ni montant de contrat, ni nom de bénéficiaire, ni nom d'agent, ni constat d'audit : demandez la règle publique, pas votre situation.",
      "Ne téléversez pas un document interne (contrat, rapport d'audit) pour « le comparer aux règles » : faites l'analyse interne avec l'outil validé pour ce type de document.",
      "Conservez la trace de chaque recherche qui alimente une décision : date, requête exacte, sources ouvertes.",
    ],
    example: {
      title: 'Fil rouge — reformulation avant envoi',
      lines: [
        "À ne pas envoyer : « Transco Sarl nous facture 5 487,5 USD par trajet Goma au lieu de 4 400, est-ce justifié par le carburant ? »",
        "À envoyer : « Comment a évolué le prix officiel à la pompe du gasoil dans l'est de la RDC entre mars et juin 2026 ? Priorise les publications officielles de la structure des prix… »",
      ],
    },
    pitfall: "Coller la lettre de Transco dans la barre de recherche « pour gagner du temps » : vous transmettez une correspondance commerciale à un service externe, et la recherche est orientée par l'argument du fournisseur.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'RAG (retrieval-augmented generation)', definition: "Fonctionnement où le modèle cherche d'abord des documents, puis rédige sa réponse à partir d'eux. Perplexity en est la forme la plus aboutie : la recherche est le cœur du produit." },
      { term: 'Date de coupure (knowledge cutoff)', definition: "Date au-delà de laquelle un modèle n'a rien appris pendant son entraînement. Sans recherche web, il ignore tout ce qui s'est passé depuis." },
      { term: 'Pro Search', definition: "Mode de recherche approfondie qui décompose une question complexe en sous-recherches successives avant de synthétiser — à privilégier dès qu'il faut croiser plusieurs sources." },
      { term: 'Focus mode', definition: "Filtre qui restreint la recherche à un type de source (Web, Académique, Actualités, Réseaux sociaux…) pour orienter la recherche vers le bon registre." },
      { term: 'Citation', definition: "Numéro cliquable associé à une affirmation, qui renvoie à la page exacte utilisée : la trace de vérifiabilité — pas une preuve tant que vous ne l'avez pas ouverte." },
      { term: 'Espace (Collection)', definition: "Dossier de travail persistant qui regroupe les recherches d'un même sujet de veille, avec des instructions par défaut réutilisables." },
      { term: 'Fraîcheur (recency)', definition: "Critère de date d'une source, distinct de sa fiabilité : une source fiable mais ancienne sur un sujet mouvant est potentiellement obsolète." },
      { term: 'Source primaire', definition: "L'émetteur de l'information lui-même (le bailleur, l'administration, l'organisme qui publie le prix). Tout le reste est une source secondaire qui la rapporte." },
      { term: 'Triangulation', definition: "Confirmation d'un fait par au moins deux sources indépendantes, dont idéalement une source primaire." },
      { term: 'Période glissante', definition: "Fenêtre de recherche définie par rapport à la date du jour (« depuis la dernière recherche », « 6 derniers mois ») : elle rend une requête réutilisable telle quelle." },
    ],
  },

  // ───────────── Procédure 1 — Cadrer la veille ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Transformer la demande en mandat de veille écrit',
    intro: "« Mettez en place une veille » ne dit ni sur quoi, ni pour quelle décision, ni à quel rythme. Votre premier livrable est un mandat d'une demi-page, validé par le demandeur. Entrée nécessaire : le message de la direction et, s'il existe, l'historique des incidents de conformité.",
    steps: [
      {
        title: 'Extraire les éléments de la demande',
        actions: [
          "Relisez le message et soulignez : le périmètre (quels bailleurs, quels sujets), la contrainte de qualité, l'échéance.",
          "Recherchez l'incident qui motive la demande (rapport d'audit, rejet de dépense) : il indique le sujet prioritaire.",
          "Notez ce que la demande ne précise pas : fréquence, destinataires, format de restitution.",
        ],
      },
      {
        title: 'Rédiger et faire valider le mandat',
        actions: [
          "Écrivez cinq rubriques : Objectif, Périmètre, Exigence de qualité, Livrables et échéances, Hors périmètre.",
          "Envoyez-le au demandeur avec une question fermée : « Ce mandat correspond-il à votre demande ? »",
          "Enregistrez la version validée dans le dossier de veille, datée.",
        ],
      },
    ],
    example: {
      title: 'Mandat de veille — Horizon Grands Lacs (validé le 15/09/2026)',
      lines: [
        "Objectif : détecter toute évolution des règles de conformité USAID/BHA et ECHO avant qu'elle ne produise un rejet de dépense.",
        "Périmètre : seuils et calendrier de reporting financier, éligibilité des dépenses, exigences de justification ; programmes A (BHA, Goma) et B (ECHO, Bukavu).",
        "Exigence de qualité : aucune ligne sans source ouverte, datée et cotée ; toute information non confirmée par une source primaire marquée comme telle.",
        "Livrables : grille de veille à jour chaque lundi ; rapport sourcé pour toute évolution « à action » ; premier point au comité du 25/09/2026.",
        "Hors périmètre : analyse juridique des contrats (relève du responsable financier et du siège).",
      ],
    },
    result: "Un mandat de cinq rubriques, validé par écrit par Furaha Bisimwa, qui servira de filtre à toutes les recherches : ce qui sort du périmètre ne va pas dans la grille.",
    pitfall: "Démarrer les recherches sans mandat : vous accumulez des dizaines de résultats « intéressants » et vous ne savez plus lesquels méritent une action.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Lister les sujets de veille et la décision que chacun sert',
    intro: "Un sujet de veille n'a de valeur que s'il alimente une décision identifiée. Vous découpez le mandat en sujets précis — un sujet par ligne de la future grille — et vous attachez à chacun la décision, le responsable et la fréquence.",
    steps: [
      {
        title: 'Découper le périmètre',
        actions: [
          "Pour chaque bailleur, croisez-le avec chaque thème du mandat : un sujet = un bailleur × un thème.",
          "Ajoutez les sujets de veille sectorielle ou concurrentielle utiles à l'organisation (appels à propositions, prix de marché).",
          "Supprimez tout sujet pour lequel vous ne pouvez pas nommer une décision.",
        ],
      },
      {
        title: 'Qualifier chaque sujet',
        actions: [
          "Décision servie : quelle action change si l'information change ?",
          "Responsable de l'action : la fonction qui agira.",
          "Fréquence : selon la vitesse réelle d'évolution du sujet — hebdomadaire pour une règle de bailleur, mensuelle pour un prix de marché.",
        ],
      },
    ],
    table: {
      columns: ['Sujet de veille', 'Décision servie', 'Responsable', 'Fréquence'],
      rows: [
        ['Conformité USAID/BHA — reporting financier', 'Adapter le modèle de rapport trimestriel du programme A', 'Responsable financier', 'Hebdomadaire'],
        ['Conformité ECHO — éligibilité des dépenses', 'Adapter les justificatifs exigés au programme B', 'Chargée administrative et logistique', 'Hebdomadaire'],
        ['Financements humanitaires Est RDC — appels à propositions', 'Décider de répondre ou non (go / no-go)', 'Responsable programmes', 'Hebdomadaire'],
        ['Prix du carburant Est RDC', 'Négocier les tarifs de transport', 'Responsable achats', 'Mensuelle'],
      ],
    },
    result: "Quatre sujets, chacun relié à une décision et à une fonction. Les deux premiers couvrent l'exigence de la direction ; les deux autres répondent à la promesse sectorielle et concurrentielle du module.",
    tip: "Le dernier sujet n'est pas un hasard : la lettre de Transco Sarl affirme que le carburant a augmenté de 25 %. Un sujet de veille de prix vous donnera, chaque mois, de quoi tester ce genre d'affirmation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Établir la carte des sources de référence par sujet',
    intro: "Avant de chercher, notez où se trouve la source primaire de chaque sujet. Cette carte vous sert deux fois : pour écrire le critère « type de source » des requêtes, et pour savoir vers quelle page remonter quand Perplexity ne cite qu'une source secondaire.",
    steps: [
      {
        title: 'Identifier la source primaire',
        actions: [
          "Pour chaque sujet, demandez-vous : qui émet la règle ou le chiffre ? Le bailleur, une administration, une agence ?",
          "Notez la page officielle à consulter (rubrique des politiques ou des documents pour partenaires du bailleur, publication officielle des prix).",
          "Ajoutez le contact humain qui peut confirmer : point focal du bailleur, chargé de subvention, service des prix.",
        ],
      },
      {
        title: 'Compléter avec les sources secondaires acceptables',
        actions: [
          "Listez la presse spécialisée reconnue du sujet (Devex, ReliefWeb pour l'humanitaire).",
          "Listez les sources à exclure d'office comme base d'un constat : blogs non signés, forums, réseaux sociaux.",
        ],
      },
    ],
    table: {
      columns: ['Sujet', 'Source primaire', 'Secondaires acceptables', 'Contact de confirmation'],
      rows: [
        ['BHA — reporting financier', 'Pages et documents officiels BHA pour les partenaires', 'Devex, ReliefWeb', 'Chargé de l\'accord côté bailleur'],
        ['ECHO — éligibilité', 'Portail officiel d\'ECHO pour ses partenaires', 'Devex, ReliefWeb', 'Point focal ECHO du programme B'],
        ['Appels à propositions', 'Pages officielles d\'OCHA et des bailleurs', 'ReliefWeb', 'Cluster ou coordination locale'],
        ['Prix du carburant', 'Structure officielle des prix publiée par l\'administration', 'Presse économique nationale', 'Service des prix ; fournisseurs de carburant'],
      ],
    },
    result: "Une carte des sources d'une page, rangée dans le dossier de veille : pour chaque sujet, vous savez quelle source fait foi et qui appeler en cas de doute.",
    pitfall: "Considérer ReliefWeb comme la source primaire d'une règle : c'est une plateforme qui republie. Le document qui fait foi est celui de l'émetteur, que ReliefWeb vous aide à trouver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Préparer l\'espace de travail : dossier, grille, gabarit et compte Perplexity',
    intro: "La veille doit survivre à votre absence : tout est rangé au même endroit, sur un espace partagé, avec les modèles prêts à remplir. Entrées : les deux fichiers de 04-templates et votre accès Perplexity.",
    steps: [
      {
        title: 'Créer le dossier et les copies de travail',
        actions: [
          "Créez sur l'espace partagé « Veille_Conformite_Bailleurs » avec trois sous-dossiers : « 01_Grille », « 02_Preuves », « 03_Rapports ».",
          "Copiez grille-veille-sectorielle-perplexity.xlsx dans 01_Grille et renommez-la 2026-09_grille_veille_HGL.xlsx.",
          "Copiez le gabarit Word dans 03_Rapports sans le renommer : il reste votre modèle vierge.",
        ],
      },
      {
        title: 'Préparer la grille',
        actions: [
          "Ouvrez l'onglet « Veille » : lisez les trois lignes d'exemple (lignes 5 à 7) et la légende en ligne 21.",
          "Sélectionnez A5:F7 et appuyez sur Suppr : vous effacez le contenu des exemples sans supprimer les lignes ni les formules de la colonne G.",
          "Vérifiez dans l'onglet « Synthèse » que la cellule B5 (sujets actifs) affiche maintenant 0.",
        ],
      },
      {
        title: 'Vérifier le compte Perplexity',
        actions: [
          "Ouvrez perplexity.ai avec le compte validé par l'organisation.",
          "Dans les paramètres du compte, réglez la langue de réponse sur le français.",
          "Vérifiez que le sélecteur de mode propose Pro Search et que la rubrique Espaces est accessible dans le menu latéral.",
        ],
      },
    ],
    result: "Un dossier partagé en trois parties, une grille vidée de ses exemples (Synthèse à 0), un gabarit vierge et un compte Perplexity prêt.",
    pitfall: "Laisser les trois lignes d'exemple dans la grille : l'onglet Synthèse les compte (plage A5:A19) et annonce à la direction des sujets que vous ne suivez pas, dont deux « à relancer ».",
    tip: "Les intitulés exacts des menus de Perplexity évoluent d'une version à l'autre (« Pro », « Recherche », « Espaces »…). Repérez la fonction, pas le libellé : un mode de recherche approfondie, un filtre de sources, un dossier persistant.",
  },

  // ───────────── Procédure 2 — Requête de recherche approfondie ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Partir de la question nue et diagnostiquer ce qui lui manque',
    intro: "Tout le monde commence par une question nue. L'étape consiste à l'écrire, puis à la passer au crible des trois critères de sourcing et des deux garde-fous pour voir précisément ce qu'il faut ajouter.",
    steps: [
      {
        title: 'Écrire la question telle qu\'elle vient',
        actions: [
          "Reprenez le sujet de veille de la grille et formulez-le en une question spontanée.",
          "Ne l'envoyez pas encore à Perplexity.",
        ],
      },
      {
        title: 'La passer au crible',
        actions: [
          "Type de source précisé ? Oui / Non.",
          "Période bornée ? Oui / Non.",
          "Exigence de citation datée ? Oui / Non.",
          "Formulation neutre (ouverte à un résultat inattendu) ? Oui / Non.",
          "Format de sortie imposé ? Oui / Non.",
        ],
      },
    ],
    example: {
      title: 'Diagnostic de la question nue — sujet BHA',
      lines: [
        "Question nue : « Quelles sont les règles de reporting financier de BHA ? »",
        "Type de source : Non — blogs et forums peuvent sortir en premier.",
        "Période : Non — la réponse mélangera règles anciennes et récentes.",
        "Citation datée : Non — impossible de savoir si la règle est en vigueur.",
        "Neutralité : Oui — mais elle demande les règles, pas leurs évolutions.",
        "Format : Non — réponse en paragraphes, à retaper dans la grille.",
      ],
    },
    result: "Quatre manques sur cinq identifiés. La question demande aussi « les règles » au lieu de « les évolutions » : pour une veille, c'est le changement qui compte.",
    tip: "Gardez cette grille de cinq questions sous les yeux : en trois semaines, vous ne pourrez plus écrire une requête sans les cinq éléments.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Ajouter les trois critères de sourcing',
    intro: "Vous complétez la question avec le type de source, la période et l'exigence de citation, dans cet ordre. La carte des sources (procédure 1, étape 3) vous donne le premier critère ; le mandat vous donne la période.",
    steps: [
      {
        title: 'Critère 1 — Type de source',
        actions: [
          "Nommez la source primaire attendue : « la documentation officielle publiée par BHA ».",
          "Donnez l'ordre de priorité : « puis la presse spécialisée reconnue (Devex, ReliefWeb) ».",
        ],
      },
      {
        title: 'Critère 2 — Période',
        actions: [
          "Pour une première recherche : bornez avec des dates absolues, « publiées entre le 16/03/2026 et le 16/09/2026 ».",
          "Pour la requête récurrente (procédure 4) : vous passerez à une période glissante.",
        ],
      },
      {
        title: 'Critère 3 — Exigence de citation',
        actions: [
          "Exigez la date de publication de chaque source.",
          "Exigez la date d'entrée en vigueur quand elle est mentionnée.",
          "Exigez le signalement explicite de toute information non confirmée par une source primaire.",
        ],
      },
    ],
    example: {
      title: 'Requête BHA après l\'ajout des trois critères',
      lines: [
        "« Quelles évolutions des règles de conformité et de reporting financier d'USAID/BHA ont été publiées entre le 16/03/2026 et le 16/09/2026 ?",
        "Priorise la documentation officielle publiée par BHA ou par l'administration qui gère ses accords, puis la presse spécialisée reconnue (Devex, ReliefWeb).",
        "Pour chaque évolution, cite la source avec sa date de publication, indique la date d'entrée en vigueur si elle est mentionnée, et signale explicitement toute information qui provient uniquement de presse spécialisée sans confirmation officielle. »",
      ],
    },
    result: "Une requête qui dit à Perplexity où chercher, sur quelle période et comment justifier chaque phrase.",
    pitfall: "Écrire « les 6 derniers mois » dans une requête dont le résultat sera cité dans un rapport : six mois avant quand ? Dans un document, la période s'écrit toujours en dates absolues.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Imposer la neutralité et un format de sortie exploitable',
    intro: "Une requête orientée oriente la recherche vers les sources qui confirment ce que vous pensez déjà. Un format libre vous oblige à tout retaper. Ces deux garde-fous se règlent en deux phrases ajoutées à la fin de la requête.",
    steps: [
      {
        title: 'Vérifier la neutralité',
        actions: [
          "Relisez la requête : contient-elle « confirme », « vérifie que », « est-il vrai que » ? Si oui, reformulez en question ouverte.",
          "Ajoutez : « Si tu ne trouves aucune évolution sur l'un de ces points, écris-le explicitement. »",
          "Ajoutez : « Signale aussi toute évolution plus large qui toucherait ces règles. »",
        ],
      },
      {
        title: 'Imposer le format',
        actions: [
          "Demandez un tableau et nommez les colonnes : évolution | date de publication | date d'effet | source | type de source.",
          "Demandez en fin de réponse le nombre de sources consultées.",
        ],
      },
    ],
    example: {
      title: 'Les deux phrases ajoutées à la requête BHA',
      lines: [
        "« Si tu ne trouves aucune évolution sur l'un de ces points (seuils, calendrier, justificatifs), écris-le explicitement, et signale aussi toute évolution plus large qui toucherait ces règles.",
        "Présente le résultat en tableau : évolution | date de publication | date d'effet | source | type de source (officielle, presse spécialisée, autre), puis indique le nombre de sources consultées. »",
      ],
    },
    result: "La requête BHA est complète. Elle peut ramener un résultat qui contredit vos attentes, et sa réponse se recopie colonne par colonne dans le registre de vérification.",
    pitfall: "Demander « confirme que les règles de justification d'ECHO n'ont pas changé depuis 2025 » : le moteur trouvera des pages qui décrivent les anciennes règles et vous rassurera — exactement le scénario qui a coûté 3 850 USD.",
    tip: "La phrase « signale toute évolution plus large » n'est pas décorative : une réorganisation du bailleur, un transfert de la gestion des accords ou une suspension de financements comptent plus qu'un seuil modifié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Régler Pro Search et le filtre de sources, puis lancer',
    intro: "Une question qui croise plusieurs évolutions réglementaires sur six mois est exactement le cas d'usage de Pro Search. Le filtre de sources écarte d'emblée les registres qui ne peuvent pas fonder un constat.",
    steps: [
      {
        title: 'Régler la recherche',
        actions: [
          "Ouvrez une nouvelle recherche (bouton « Nouveau » ou page d'accueil de Perplexity).",
          "Dans le sélecteur de mode à côté de la barre de recherche, choisissez Pro Search (recherche approfondie).",
          "Ouvrez le sélecteur de sources : laissez Web activé, désactivez Réseaux sociaux ; n'activez Académique que pour une question de recherche scientifique.",
        ],
      },
      {
        title: 'Lancer et dater',
        actions: [
          "Collez la requête complète et envoyez.",
          "Pendant le traitement, observez les sous-recherches affichées : elles montrent comment la question a été décomposée.",
          "Dès la réponse affichée, notez dans votre registre la date et l'heure de la recherche.",
        ],
      },
      {
        title: 'Lancer la seconde requête',
        actions: [
          "Ouvrez une nouvelle recherche (un fil par bailleur) et lancez la requête ECHO construite sur le même modèle.",
        ],
      },
    ],
    example: {
      title: 'Requête ECHO — fil rouge (à copier)',
      lines: [
        "« Quelles évolutions des règles d'éligibilité des dépenses et des exigences de justification d'ECHO pour ses partenaires humanitaires ont été publiées entre le 16/03/2026 et le 16/09/2026 ?",
        "Priorise la documentation officielle publiée par ECHO pour ses partenaires, puis la presse spécialisée reconnue (Devex, ReliefWeb).",
        "Pour chaque évolution, cite la source avec sa date de publication, indique la date d'application si elle est mentionnée, signale toute page officielle sans date visible et toute information non confirmée par une source primaire.",
        "Si tu ne trouves aucune évolution sur un point, écris-le. Présente le résultat en tableau : évolution | date de publication | date d'application | source | type de source. »",
      ],
    },
    result: "Deux fils de recherche lancés le 16/09/2026 en Pro Search, un par bailleur, avec la date et l'heure notées.",
    pitfall: "Lancer la recherche en mode rapide « pour voir » puis garder la réponse : elle semble complète mais n'a exploré qu'une fraction des sources. Ne pas activer Pro Search sur un sujet de veille est une fausse économie de quelques secondes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Lire la réponse et inventorier chaque citation',
    intro: "La réponse n'est pas encore une information : c'est une liste d'affirmations, chacune adossée à une ou plusieurs citations. Vous les inventoriez une par une dans un registre de vérification, avant toute lecture des sources.",
    steps: [
      {
        title: 'Repérer la structure de la réponse',
        actions: [
          "Lisez le tableau demandé et repérez, pour chaque ligne, les numéros de citation [1], [2]…",
          "Ouvrez la liste complète des sources (panneau ou onglet « Sources ») : elle indique le site d'origine de chaque numéro.",
          "Repérez les affirmations sans aucun numéro : elles ne reposent sur rien de vérifiable.",
        ],
      },
      {
        title: 'Créer le registre de vérification',
        actions: [
          "Dans 02_Preuves, créez un classeur « registre_verification.xlsx » avec les colonnes : N°, Affirmation, Citation, Site, Type annoncé, Date annoncée, Contrôle, Confiance.",
          "Saisissez une ligne par affirmation, en recopiant la date telle que Perplexity l'annonce.",
          "Laissez Contrôle et Confiance vides : ils se remplissent à la procédure 3.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Affirmation (simulée)', 'Citation', 'Type annoncé', 'Date annoncée'],
      rows: [
        ['1', "BHA a mis à jour ses exigences de rapport financier : le rapport trimestriel inclut un état des avances non justifiées par sous-partenaire", '[1]', 'Officielle', '30/06/2026'],
        ['2', "Ces exigences s'appliquent aux périodes de rapport commençant à partir du 01/10/2026", '[2]', 'Officielle (PDF)', '30/06/2026'],
        ['3', 'Une période de transition serait accordée jusqu\'au 31/12/2026', '[3]', 'Presse spécialisée', '08/07/2026'],
        ['4', 'Les seuils de reporting ne changent pas', '[4]', 'Blog', 'Non indiquée'],
        ['5', 'Aucune évolution trouvée sur le calendrier de soumission', '—', '—', '—'],
      ],
    },
    result: "Un registre de cinq lignes pour le fil BHA (et le même travail pour le fil ECHO) : chaque affirmation est isolée, rattachée à sa citation et prête à être contrôlée.",
    tip: "La ligne 5 est aussi importante que les autres : « rien trouvé » est un résultat de veille. Notez-le, avec la date ; c'est ce qui vous permettra de dire en audit « nous avons cherché le 16/09 ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Affiner par des questions de relance dans le même fil',
    intro: "La première réponse laisse toujours des trous : une affirmation sans source primaire, une date manquante, un point non traité. Les relances se posent dans le même fil, qui garde le contexte de la question initiale.",
    steps: [
      {
        title: 'Relancer sur chaque trou du registre',
        actions: [
          "Affirmation appuyée seulement sur la presse : « Trouve le document officiel BHA qui mentionne la période de transition citée en [3]. »",
          "Source sans date : « Quelle est la date de publication ou de dernière mise à jour de la source [4] ? »",
          "Point non traité : « Y a-t-il eu des évolutions sur les exigences de justification des dépenses de sous-partenaires ? Mêmes critères de sources et de période. »",
        ],
      },
      {
        title: 'Mettre à jour le registre',
        actions: [
          "Ajoutez une ligne par nouvelle affirmation et complétez les dates obtenues.",
          "Si la relance ne trouve rien, écrivez-le dans la colonne Contrôle : « relance du 16/09 : aucune source officielle trouvée ».",
        ],
      },
    ],
    example: {
      title: 'Relance sur la période de transition — réponse simulée',
      lines: [
        "Relance : « Trouve le document officiel BHA qui mentionne la période de transition citée en [3]. »",
        "Réponse : aucun document officiel trouvé mentionnant une période de transition ; la note du 30/06/2026 [2] indique une application aux périodes commençant le 01/10/2026, sans mention de transition.",
        "Registre, ligne 3 : Contrôle = « non confirmé par source primaire (relance 16/09) ».",
      ],
    },
    result: "Le registre ne contient plus de trou silencieux : chaque affirmation a soit une source primaire identifiée, soit la mention explicite qu'aucune n'a été trouvée.",
    pitfall: "Ouvrir un nouveau fil pour chaque relance : la question initiale et ses critères sont perdus, et la nouvelle réponse ne s'appuie plus sur les mêmes contraintes de sources et de période.",
  },

  // ───────────── Procédure 3 — Vérifier les sources ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Ouvrir chaque citation et vérifier que l\'affirmation y figure telle quelle',
    intro: "Une réponse sourcée n'est pas une réponse vérifiée. La synthèse peut déformer légèrement la source, combiner deux pages ou attribuer à une page ce qu'elle ne dit pas. Premier contrôle, sur chaque affirmation qui compte : la phrase est-elle réellement dans la source ?",
    steps: [
      {
        title: 'Retrouver le passage exact',
        actions: [
          "Cliquez sur le numéro de citation : la page s'ouvre dans un nouvel onglet.",
          "Appuyez sur Ctrl+F et cherchez un mot-clé de l'affirmation (« avances », « 1er octobre »).",
          "Pour un PDF, téléchargez-le depuis le site officiel dans 02_Preuves et notez la page du passage.",
        ],
      },
      {
        title: 'Comparer mot à mot',
        actions: [
          "Lisez la phrase de la source et la phrase de Perplexity côte à côte.",
          "Vérifiez les éléments sensibles : chiffres, dates, verbes d'obligation (« doit », « peut », « est recommandé »), périmètre (tous les partenaires ou certains).",
          "Copiez la phrase exacte de la source dans le registre, colonne Contrôle, avec la page.",
        ],
      },
    ],
    example: {
      title: 'Contrôle de l\'affirmation 1 — simulé',
      lines: [
        "Perplexity : « le rapport trimestriel inclut un état des avances non justifiées par sous-partenaire ».",
        "Source [1], rubrique Rapports financiers : « les partenaires joignent au rapport financier trimestriel un état des avances non justifiées, ventilé par sous-partenaire ».",
        "Verdict : conforme. Contrôle = « passage retrouvé, page Exigences de rapport, rubrique Rapports financiers ».",
        "Affirmation 4 (blog) : la page ne parle pas de seuils mais d'un webinaire de 2025. Verdict : non conforme, affirmation retirée.",
      ],
    },
    result: "Chaque affirmation du registre porte un verdict : conforme, déformée (avec la formulation exacte de la source) ou absente de la source.",
    pitfall: "Vérifier seulement que le lien fonctionne et que la page parle du bon sujet : une page sur le bon sujet peut dire « est recommandé » là où la synthèse écrit « est obligatoire ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Contrôler la date et la fraîcheur de chaque source',
    intro: "Deuxième et troisième contrôles : la source a-t-elle une date identifiable, et cette date est-elle compatible avec le niveau d'actualité dont vous avez besoin ? La date affichée par Perplexity n'est qu'une indication à confirmer sur la page.",
    steps: [
      {
        title: 'Trouver la date sur la page',
        actions: [
          "Cherchez la date de publication ou la mention « dernière mise à jour » en haut ou en bas de la page.",
          "Pour un PDF, regardez la page de garde, le pied de page ou le numéro de version.",
          "Si aucune date n'est visible, écrivez « sans date visible » : ne recopiez jamais la date que Perplexity a supposée.",
        ],
      },
      {
        title: 'Juger la fraîcheur',
        actions: [
          "Comparez la date de la source avec la période de la requête (16/03 – 16/09/2026).",
          "Pour une règle : vérifiez qu'aucune version plus récente n'existe sur le site officiel (rubrique « archives », numéro de version).",
          "Notez séparément la date de publication et la date d'effet : une règle publiée en juin peut s'appliquer en octobre.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Date annoncée', 'Date constatée sur la page', 'Fraîcheur'],
      rows: [
        ['1', '30/06/2026', 'Mise à jour 30/06/2026', 'Récente — conforme'],
        ['2', '30/06/2026', 'PDF daté 30/06/2026, effet 01/10/2026', 'Récente — date d\'effet à retenir'],
        ['3', '08/07/2026', 'Article publié le 08/07/2026', 'Récente, mais source secondaire'],
        ['ECHO 1', '—', 'Page officielle sans date de mise à jour', 'Inconnue — à confirmer'],
        ['ECHO 2', '12/05/2026', 'FAQ datée du 12/05/2026', 'Récente — conforme'],
      ],
    },
    result: "Chaque ligne du registre porte une date constatée de vos yeux (ou la mention « sans date visible ») et un jugement de fraîcheur.",
    pitfall: "Confondre la date de la page et la date du jour affichée par le site (« aujourd'hui, 16 septembre ») ou la date d'un commentaire : seule la date de publication ou de mise à jour du contenu compte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Classer chaque source et remonter jusqu\'à la source primaire',
    intro: "Vous appliquez maintenant la hiérarchie de fiabilité. Quand une affirmation importante ne repose que sur une source secondaire, vous remontez jusqu'à l'émetteur : la carte des sources de la procédure 1 vous dit où chercher.",
    steps: [
      {
        title: 'Classer',
        actions: [
          "Pour chaque source, identifiez l'émetteur réel : le domaine du site, l'auteur, l'organisme qui signe.",
          "Attribuez le niveau : Élevé (primaire officielle), Moyen-élevé (presse spécialisée), Moyen (presse généraliste), Faible (blog, forum, réseau social).",
          "Méfiez-vous des sites qui reprennent le logo d'un bailleur sans en être : vérifiez le nom de domaine.",
        ],
      },
      {
        title: 'Remonter à la source primaire',
        actions: [
          "Si l'article cite un document (« selon une note de BHA »), cherchez ce document sur le site officiel.",
          "Si vous le trouvez, citez-le à la place de l'article ; sinon, gardez l'article et marquez « non confirmé par source primaire ».",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Émetteur', 'Niveau', 'Remontée'],
      rows: [
        ['1', 'BHA — page officielle', 'Élevé', 'Déjà primaire'],
        ['2', 'BHA — note PDF officielle', 'Élevé', 'Déjà primaire'],
        ['3', 'Devex', 'Moyen-élevé', 'Aucun document officiel trouvé : non confirmé'],
        ['4', 'Blog de consultant', 'Faible', 'Affirmation retirée (non conforme)'],
        ['ECHO 1', 'ECHO — portail partenaires', 'Élevé', 'Déjà primaire, mais sans date'],
      ],
    },
    result: "Chaque source porte un niveau de fiabilité justifié par son émetteur, et chaque affirmation importante est rattachée, si elle existe, à sa source primaire.",
    tip: "Quand Perplexity cite ReliefWeb, cliquez sur le document : ReliefWeb indique en général l'organisation qui l'a publié. C'est cette organisation qu'il faut citer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Recouper et traiter les contradictions',
    intro: "Une affirmation qui va déclencher une action doit être confirmée par au moins deux sources indépendantes, dont idéalement une primaire. Quand deux sources se contredisent, vous ne choisissez pas « la plus probable » : vous documentez l'écart et vous cherchez qui peut trancher.",
    steps: [
      {
        title: 'Recouper',
        actions: [
          "Pour chaque affirmation « à action », comptez les sources indépendantes qui la confirment (deux pages du même émetteur comptent pour une).",
          "S'il n'y en a qu'une, posez une relance : « Quelles autres sources confirment ou contredisent cette affirmation ? »",
        ],
      },
      {
        title: 'Traiter une contradiction',
        actions: [
          "Notez les deux versions dans le registre, avec leurs sources et leurs dates.",
          "Appliquez la règle : la source primaire la plus récente prime sur la presse ; une date d'effet officielle prime sur une rumeur de transition.",
          "Si l'écart persiste, écrivez au contact de confirmation de la carte des sources, avec une question précise et datée.",
        ],
      },
    ],
    example: {
      title: 'Contradiction sur la date d\'application — simulée',
      lines: [
        "Source [2] (BHA, officielle, 30/06) : application aux périodes commençant le 01/10/2026.",
        "Source [3] (Devex, 08/07) : transition jusqu'au 31/12/2026.",
        "Décision : retenir le 01/10/2026 ; mentionner la transition comme non confirmée.",
        "Mail préparé pour le chargé de l'accord BHA : « Pouvez-vous confirmer si une période de transition s'applique à l'état des avances pour la période octobre-décembre 2026 ? »",
      ],
    },
    result: "Les affirmations « à action » sont confirmées par au moins deux sources ou explicitement marquées comme non confirmées, et chaque contradiction a une décision et, si besoin, une question envoyée au bailleur.",
    pitfall: "Retenir la version la plus favorable (« on a jusqu'à fin décembre ») parce qu'elle arrange l'équipe : si elle est fausse, le rapport d'octobre-décembre sera non conforme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Attribuer le niveau de confiance et tracer la vérification',
    intro: "Dernier contrôle : vous transformez les verdicts en un niveau de confiance unique par affirmation, avec les quatre valeurs de la liste déroulante de la grille (Élevée, Moyenne, Faible, À vérifier), et vous laissez une trace qui permet à un auditeur de refaire votre chemin.",
    steps: [
      {
        title: 'Appliquer la règle de cotation',
        actions: [
          "Élevée : affirmation retrouvée telle quelle dans une source primaire datée et récente.",
          "Moyenne : affirmation retrouvée dans une source secondaire reconnue, ou primaire mais ancienne.",
          "Faible : source faible, ou affirmation déformée par rapport à la source.",
          "À vérifier : source primaire sans date, contradiction non résolue, ou confirmation demandée au bailleur.",
        ],
      },
      {
        title: 'Tracer',
        actions: [
          "Complétez la colonne Confiance du registre.",
          "Ajoutez « vérifié le JJ/MM/AAAA par [initiales] » dans la colonne Contrôle.",
          "Enregistrez dans 02_Preuves une capture ou un PDF de chaque page primaire, nommée avec la date (2026-09-16_BHA_exigences_rapport.pdf).",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Affirmation (simulée)', 'Confiance', 'Trace'],
      rows: [
        ['1', 'État des avances non justifiées par sous-partenaire', 'Élevée', 'Vérifié le 17/09/2026 par A.K. — capture archivée'],
        ['2', 'Application aux périodes à partir du 01/10/2026', 'Élevée', 'Vérifié le 17/09/2026 — PDF archivé, page 2'],
        ['3', 'Transition jusqu\'au 31/12/2026', 'Faible', 'Non confirmé par BHA — question envoyée le 17/09'],
        ['ECHO 1', 'Carnet de bord exigé pour justifier le carburant', 'À vérifier', 'Page officielle sans date — point focal ECHO sollicité'],
        ['ECHO 2', 'Pièces justificatives conservées 5 ans après le rapport final', 'Élevée', 'FAQ du 12/05/2026 — capture archivée'],
      ],
    },
    result: "Un registre de vérification complet et daté, avec un niveau de confiance par affirmation et une preuve archivée pour chaque source primaire : la condition posée par Furaha Bisimwa est remplie.",
    tip: "Archivez les pages : un site officiel peut être modifié ou déplacé. Le jour de l'audit, la capture datée prouve ce que disait la règle au moment où vous l'avez lue.",
  },

  // ───────────── Procédure 4 — Veille récurrente ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Créer l\'Espace Perplexity et ses instructions par défaut',
    intro: "Un Espace transforme une recherche ponctuelle en veille récurrente : il conserve tous les fils d'un même sujet et applique à chaque nouvelle recherche des instructions que vous n'aurez plus à réécrire.",
    steps: [
      {
        title: 'Créer l\'Espace',
        actions: [
          "Dans le menu latéral, ouvrez Espaces puis « Créer un Espace ».",
          "Nommez-le « Veille conformité bailleurs — HGL » et ajoutez une description d'une ligne reprenant l'objectif du mandat.",
          "Déplacez dans cet Espace les deux fils du 16/09 (BHA et ECHO).",
        ],
      },
      {
        title: 'Écrire les instructions par défaut',
        actions: [
          "Ouvrez le champ Instructions de l'Espace.",
          "Collez les instructions ci-dessous, qui reprennent les critères de sourcing et le format de sortie.",
          "Créez un second Espace « Veille marché et financements — HGL » pour les deux autres sujets, avec des instructions adaptées.",
        ],
      },
    ],
    example: {
      title: 'Instructions de l\'Espace « Veille conformité bailleurs — HGL »',
      lines: [
        "« Réponds en français. Pour chaque réponse :",
        "(1) cite chaque affirmation avec la date de publication de la source ;",
        "(2) priorise la documentation officielle des bailleurs, puis la presse spécialisée reconnue ;",
        "(3) signale toute source de plus de 6 mois comme potentiellement obsolète ;",
        "(4) signale toute information non confirmée par une source primaire et toute page officielle sans date ;",
        "(5) si tu ne trouves rien de nouveau sur un point, écris-le explicitement ;",
        "(6) présente le résultat en tableau : évolution | date de publication | date d'effet | source | type de source. »",
      ],
    },
    result: "Deux Espaces créés, les fils existants rangés, et des instructions qui garantissent les mêmes exigences de sourcing à chaque recherche, quel que soit l'agent qui la lance.",
    pitfall: "Mettre dans les instructions des informations internes (« notre audit 2025 a rejeté 3 850 USD de carburant ») : les instructions accompagnent chaque requête. Elles décrivent la méthode, pas votre situation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Figer la requête type à période glissante',
    intro: "Une veille efficace n'est pas une recherche refaite de mémoire chaque semaine : c'est une requête écrite une fois et réutilisée à l'identique. Vous transformez les requêtes du 16/09 en modèles où seule la date change.",
    steps: [
      {
        title: 'Remplacer la période fixe',
        actions: [
          "Reprenez la requête BHA de la procédure 2.",
          "Remplacez « entre le 16/03/2026 et le 16/09/2026 » par « depuis le [date de la dernière recherche] » : chaque passage ne cherche que la nouveauté.",
          "Gardez tel quel tout le reste : type de source, exigence de citation, neutralité, format.",
        ],
      },
      {
        title: 'Ranger la requête type',
        actions: [
          "Collez la requête type dans la colonne B de la grille (procédure 4, étape 4).",
          "Collez-la aussi dans la description de l'Espace, pour la retrouver au moment de lancer la recherche.",
        ],
      },
    ],
    example: {
      title: 'Requête type BHA — à réutiliser chaque lundi',
      lines: [
        "« Quelles évolutions des règles de conformité et de reporting financier d'USAID/BHA (seuils, calendrier, justificatifs, éligibilité) ont été publiées depuis le [JJ/MM/AAAA de la dernière recherche] ?",
        "Priorise la documentation officielle BHA, puis Devex et ReliefWeb. Cite la date de publication de chaque source et la date d'effet si elle est mentionnée ; signale ce qui n'est pas confirmé officiellement et toute évolution plus large touchant ces règles.",
        "Si rien de nouveau, écris-le. Tableau : évolution | date de publication | date d'effet | source | type. »",
        "Passage du lundi 21/09/2026 : [JJ/MM/AAAA] = 16/09/2026.",
      ],
    },
    result: "Quatre requêtes types (une par sujet), identiques d'une semaine à l'autre à la date près, rangées dans la grille et dans les Espaces.",
    tip: "Une fois par trimestre, relancez la requête sur 6 mois complets : elle rattrape une évolution qu'un passage hebdomadaire aurait manquée parce que la page a été antidatée ou indexée tardivement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Fixer la fréquence et les critères de pertinence',
    intro: "La fréquence suit la vitesse réelle d'évolution du sujet ; les critères de pertinence décident, avant même de lire les résultats, ce qui mérite une action et ce qui s'ignore. Sans eux, chaque passage de veille devient une lecture sans fin.",
    steps: [
      {
        title: 'Fixer la fréquence et la planifier',
        actions: [
          "Reprenez la fréquence décidée à la procédure 1, étape 2.",
          "Créez dans votre agenda Outlook un rendez-vous périodique par fréquence : « Veille bailleurs » chaque lundi 9 h – 9 h 45 ; « Veille prix carburant » le premier jour ouvré du mois.",
          "Si votre offre Perplexity permet de programmer une recherche récurrente, programmez la requête type et gardez le rendez-vous pour la vérification des sources.",
        ],
      },
      {
        title: 'Écrire les critères de pertinence',
        actions: [
          "Rédigez trois niveaux : « Action », « Information », « Ignorer », avec des exemples concrets pour chaque niveau.",
          "Ajoutez-les à la description de l'Espace, sous la requête type.",
        ],
      },
    ],
    table: {
      columns: ['Niveau', 'Critère', 'Exemple', 'Suite donnée'],
      rows: [
        ['Action', 'Touche les seuils de reporting, l\'éligibilité des dépenses, les justificatifs ou le calendrier', 'Nouvel état des avances exigé à partir du 01/10/2026', 'Ligne de grille + rapport sourcé + responsable informé sous 48 h'],
        ['Information', 'Précise une règle existante sans changer la pratique', 'FAQ qui reformule la durée de conservation des pièces', 'Ligne de grille, sans rapport'],
        ['Ignorer', 'Rappel de règles connues, contenu promotionnel, opinion', 'Webinaire de présentation générale des règles', 'Rien, sinon une mention « rien de nouveau »'],
      ],
    },
    result: "Un calendrier de veille dans l'agenda et une règle de tri en trois niveaux, écrite à l'avance et partagée avec l'équipe.",
    pitfall: "Une fréquence trop haute sur un sujet lent (prix du carburant chaque jour) épuise l'équipe et la veille s'arrête au bout d'un mois ; une fréquence trop basse sur une règle de bailleur fait rater une date d'effet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Remplir la grille de veille — colonnes A à C',
    intro: "L'onglet « Veille » de la grille compte sept colonnes (A à G) et quinze lignes utiles (lignes 5 à 19). Une ligne = un sujet. Les colonnes A à C décrivent le sujet, la requête et la date de la dernière recherche.",
    steps: [
      {
        title: 'Colonne A — Sujet de veille',
        actions: [
          "En A5, saisissez le sujet sous la forme « Bailleur ou thème — aspect suivi ».",
          "La grille n'a pas de colonne Fréquence : ajoutez-la entre parenthèses à la fin du sujet, par exemple « (hebdo) ».",
        ],
      },
      {
        title: 'Colonne B — Requête utilisée',
        actions: [
          "Collez en B5 la requête type, ou sa version résumée si elle est longue, en conservant les trois critères (sources, période, citation).",
        ],
      },
      {
        title: 'Colonne C — Date de dernière recherche',
        actions: [
          "Saisissez en C5 la date du dernier passage comme une vraie date (16/09/2026), pas comme du texte.",
          "Vérifiez qu'elle s'aligne à droite de la cellule : une date alignée à gauche est du texte et fausse l'alerte.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'A — Sujet de veille', 'B — Requête utilisée (résumé)', 'C — Date'],
      rows: [
        ['5', 'Conformité USAID/BHA — reporting financier (hebdo)', 'Évolutions conformité et reporting financier BHA depuis la dernière recherche ; officiel BHA puis Devex/ReliefWeb ; date de publication et d\'effet ; signaler le non confirmé', '16/09/2026'],
        ['6', 'Conformité ECHO — éligibilité des dépenses (hebdo)', 'Évolutions éligibilité et justification ECHO depuis la dernière recherche ; portail officiel ECHO puis presse spécialisée ; dates ; signaler pages sans date', '16/09/2026'],
        ['7', 'Financements humanitaires Est RDC — appels à propositions (hebdo)', 'Appels à propositions humanitaires Nord et Sud-Kivu ouverts depuis la dernière recherche ; OCHA et bailleurs puis ReliefWeb ; date limite de dépôt', '17/09/2026'],
        ['8', 'Prix du carburant Est RDC (mensuel)', 'Évolution du prix officiel à la pompe du gasoil, est de la RDC, depuis la dernière recherche ; structure officielle des prix puis presse économique ; dates', '17/09/2026'],
      ],
    },
    result: "Les colonnes A à C des lignes 5 à 8 sont remplies ; la colonne G affiche déjà « OK » sur ces quatre lignes, puisque les dates ont moins de 30 jours.",
    tip: "Les dates des lignes d'exemple du modèle sont saisies au format AAAA-MM-JJ. Pour vos lignes, tapez la date au format de votre Excel (JJ/MM/AAAA en français) : c'est le plus sûr pour que l'alerte la reconnaisse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Remplir la grille de veille — colonnes D à F',
    intro: "Les colonnes D à F portent le résultat vérifié : les sources trouvées, la fiabilité évaluée et l'action à prendre. Elles se remplissent uniquement à partir du registre de vérification de la procédure 3, jamais directement depuis la réponse de Perplexity.",
    steps: [
      {
        title: 'Colonne D — Sources trouvées',
        actions: [
          "Listez les sources retenues, séparées par un point-virgule, au format « émetteur — document — date de publication ».",
          "Ajoutez, si besoin, la raison d'une fiabilité réduite (« sans date visible », « non confirmé officiellement »).",
        ],
      },
      {
        title: 'Colonne E — Fiabilité évaluée',
        actions: [
          "Cliquez dans la cellule et choisissez dans la liste déroulante : Élevée, Moyenne, Faible ou À vérifier.",
          "Retenez le niveau de l'information la plus importante de la ligne, celle qui déclenche l'action.",
        ],
      },
      {
        title: 'Colonne F — Action à prendre',
        actions: [
          "Rédigez l'action avec un verbe, une fonction responsable et une échéance.",
          "Pour une ligne « Ignorer » ou « rien de nouveau », écrivez « Aucune — rien de nouveau au JJ/MM ».",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'D — Sources trouvées (simulées)', 'E', 'F — Action à prendre'],
      rows: [
        ['5', 'BHA — page Exigences de rapport — 30/06/2026 ; BHA — note PDF — 30/06/2026 ; Devex — 08/07/2026 (transition non confirmée)', 'Élevée', 'Adapter le modèle de rapport trimestriel avant le 01/10/2026 — responsable financier ; demander confirmation de la transition au chargé de l\'accord BHA'],
        ['6', 'ECHO — portail partenaires, page éligibilité des coûts — sans date visible ; ECHO — FAQ — 12/05/2026', 'À vérifier', 'Écrire au point focal ECHO pour la date d\'application ; appliquer dès maintenant les carnets de bord véhicules à Bukavu — chargée administrative'],
        ['7', 'OCHA — page du fonds humanitaire RDC — 10/09/2026 ; ReliefWeb — 12/09/2026', 'Élevée', 'Transmettre au responsable programmes ; décision go / no-go avant le 30/09/2026'],
        ['8', 'Structure officielle des prix — 01/05/2026 ; média local — 29/04/2026 (pénurie à Goma)', 'Moyenne', 'Intégrer au dossier de négociation Transco (procédure 5) — responsable achats'],
      ],
    },
    result: "Les lignes 5 à 8 sont complètes de A à G ; chaque cellule D renvoie à des sources archivées dans 02_Preuves, chaque cellule F désigne qui fait quoi et quand.",
    pitfall: "Écrire une phrase dans la colonne E (« Moyenne — guide non daté ») comme dans la ligne d'exemple 6 du modèle : la liste déroulante refuse toute autre valeur que les quatre prévues, et l'onglet Synthèse ne la compterait pas. La justification va en colonne D.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Exploiter l\'alerte de 30 jours, l\'onglet Synthèse et la routine de revue',
    intro: "La grille calcule seule deux signaux : la colonne G marque toute ligne non revue depuis plus de 30 jours, l'onglet « Synthèse » compte les sujets actifs, les sujets à relancer et les fiabilités insuffisantes. Vous en faites la première chose regardée à chaque passage de veille.",
    steps: [
      {
        title: 'Lire la colonne G',
        actions: [
          "Cliquez sur G5 : la formule (en Excel français) est =SI(C5=\"\";\"\";SI(AUJOURDHUI()-C5>30;\"À relancer\";\"OK\")).",
          "Elle compare la date du jour à la date de la colonne C : au-delà de 30 jours, la ligne passe à « À relancer ».",
          "Pour un sujet hebdomadaire, ne comptez pas sur l'alerte : 30 jours, c'est déjà quatre passages manqués. Elle sert de filet de sécurité.",
        ],
      },
      {
        title: 'Lire l\'onglet Synthèse (ne pas modifier ses formules)',
        actions: [
          "B5 « Sujets de veille actifs » : nombre de lignes avec un sujet en colonne A.",
          "B6 « Sujets à relancer » : nombre de « À relancer » en colonne G.",
          "B7 « Sujets évalués Faible ou À vérifier » : lignes à revérifier avant tout usage.",
        ],
      },
      {
        title: 'Routine de chaque passage',
        actions: [
          "Ouvrez la Synthèse ; traitez d'abord les lignes « À relancer », puis les « À vérifier ».",
          "Lancez la requête type dans l'Espace, vérifiez les sources (procédure 3), mettez à jour C, D, E, F.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur (onglet Synthèse)', 'Valeur au 18/09/2026', 'Lecture'],
      rows: [
        ['B5 — Sujets de veille actifs', '4', 'Les quatre sujets du mandat sont suivis'],
        ['B6 — Sujets à relancer (> 30 jours)', '0', 'Toutes les recherches datent de moins de 30 jours'],
        ['B7 — Sujets Faible ou À vérifier', '1', 'Ligne 6 (ECHO) : confirmation attendue du point focal'],
      ],
    },
    result: "Une grille dont la Synthèse dit en trois chiffres l'état de la veille : 4 sujets actifs, 0 à relancer, 1 à revérifier. C'est la première ligne de votre point au comité.",
    tip: "Si vous gardiez les lignes d'exemple du modèle, ouvert le 14/09/2026, la ligne datée du 28/07 et celle du 01/08 afficheraient « À relancer » (48 et 44 jours), celle du 15/08 « OK » (30 jours tout juste, le seuil est « plus de 30 »). Un bon test pour comprendre la formule.",
  },

  // ───────────── Procédure 5 — Fact-checking et comparaison de marché ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Décomposer l\'affirmation en faits vérifiables',
    intro: "« Le carburant a augmenté de 25 % entre mars et juin, d'où notre hausse de tarif » mélange un fait (une hausse de prix), une période, une mesure (25 %) et une causalité (la hausse de tarif en découle). Fact-checker, c'est séparer ces éléments et vérifier chacun avec la bonne source.",
    steps: [
      {
        title: 'Découper',
        actions: [
          "Recopiez l'affirmation mot pour mot, avec sa source et sa date (lettre Transco Sarl du 02/09/2026).",
          "Soulignez chaque élément vérifiable : quoi (quel carburant, quel prix), où, quand, combien.",
          "Isolez le lien de cause à effet : il ne se vérifie pas sur le web, il se calcule.",
        ],
      },
      {
        title: 'Affecter un outil à chaque élément',
        actions: [
          "Fait public (prix officiel, évolution, pénurie) : Perplexity.",
          "Donnée interne (part du carburant dans le coût d'un trajet) : devis et contrat du fournisseur, sans IA web.",
          "Calcul (impact attendu sur le tarif) : Excel.",
        ],
      },
    ],
    table: {
      columns: ['Élément', 'Formulation à vérifier', 'Source à utiliser'],
      rows: [
        ['Fait 1', 'Le prix du gasoil a augmenté entre mars et juin 2026, dans la zone où roule Transco (Goma)', 'Perplexity — structure officielle des prix, presse'],
        ['Fait 2', "L'ampleur de la hausse est de 25 %", 'Perplexity — prix officiels à deux dates'],
        ['Donnée interne', 'Part du carburant dans le coût d\'un trajet', 'Décomposition du devis Transco 2025 : 38 %'],
        ['Causalité', 'La hausse du carburant explique + 24,7 % par trajet', 'Calcul Excel (étape 4)'],
      ],
    },
    result: "Une affirmation éclatée en deux faits publics, une donnée interne et un lien causal, chacun avec son outil. Seuls les deux faits publics iront dans Perplexity.",
    pitfall: "Demander à Perplexity « la hausse de 25 % du carburant justifie-t-elle une hausse de 25 % du transport ? » : la question est orientée, mélange fait et causalité, et aucun site web ne connaît la structure de coût de Transco.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Lancer la recherche de vérification, neutre et bornée',
    intro: "Vous construisez la requête comme à la procédure 2 — sources, période, citation, neutralité, format — mais en demandant des valeurs à des dates précises, pour pouvoir calculer vous-même l'évolution au lieu de reprendre un pourcentage tout fait.",
    steps: [
      {
        title: 'Rédiger la requête',
        actions: [
          "Demandez des valeurs datées, pas une conclusion : le prix au début et à la fin de la période.",
          "Ajoutez une question sur les événements de la période (pénurie, décision officielle) qui pourraient expliquer un écart entre prix officiel et prix réel.",
          "Imposez un tableau date | valeur | zone | source | type.",
        ],
      },
      {
        title: 'Lancer et inventorier',
        actions: [
          "Dans l'Espace « Veille marché et financements — HGL », activez Pro Search et lancez.",
          "Inventoriez chaque valeur dans le registre de vérification, comme à la procédure 2, étape 5.",
          "Appliquez les cinq étapes de vérification de la procédure 3 à chaque valeur avant de l'utiliser.",
        ],
      },
    ],
    example: {
      title: 'Requête de vérification — fil rouge (à copier)',
      lines: [
        "« Quel était le prix officiel à la pompe du gasoil dans l'est de la République démocratique du Congo (zone de Goma) en mars 2026, en mai 2026 et en juin 2026 ?",
        "Priorise les publications officielles de la structure des prix, puis la presse économique nationale. Pour chaque valeur, donne la date de la décision ou de la publication et la source.",
        "Signale aussi tout épisode de pénurie ou d'écart entre prix officiel et prix pratiqué à Goma sur cette période, avec ses sources et ses dates.",
        "Tableau : date | prix (CDF par litre) | zone | source | type de source. Si une valeur est introuvable, écris-le. »",
      ],
    },
    result: "Un fil de vérification daté du 17/09/2026 et des valeurs inscrites au registre, chacune avec sa source, sa date et — après contrôle — son niveau de confiance.",
    tip: "Demander les valeurs brutes plutôt que « l'évolution en % » vous protège d'un pourcentage mal calculé ou calculé sur une autre période par la source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Construire le tableau comparatif sourcé, cellule par cellule',
    intro: "Une comparaison de marché n'est fiable que si chaque cellule a sa source et sa date. Vous construisez le tableau dans Excel à partir du registre vérifié, jamais en recopiant le tableau de Perplexity tel quel.",
    steps: [
      {
        title: 'Construire le tableau',
        actions: [
          "Dans 02_Preuves, créez un onglet « Comparatif_carburant » avec les colonnes : Date, Valeur, Zone, Nature (officiel / marché), Source, Confiance.",
          "Saisissez uniquement les valeurs dont la confiance est Élevée ou Moyenne.",
          "Ajoutez en dernière ligne l'affirmation à vérifier (+ 25 %), avec sa propre source : la lettre du fournisseur.",
        ],
      },
      {
        title: 'Comparer à l\'affirmation',
        actions: [
          "Calculez l'évolution officielle : =(valeur mai ÷ valeur mars) − 1.",
          "Calculez l'évolution au pic de pénurie : =(prix marché fin avril ÷ prix officiel mars) − 1.",
          "Placez les trois pourcentages côte à côte : officiel, pic, affirmation.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Valeur (simulée)', 'Nature', 'Source', 'Confiance'],
      rows: [
        ['01/03/2026', '2 980 CDF/l', 'Prix officiel', 'Structure officielle des prix', 'Élevée'],
        ['29/04/2026', 'jusqu\'à 3 900 CDF/l pendant environ 10 jours', 'Prix marché (pénurie)', 'Média local', 'Moyenne'],
        ['01/05/2026', '3 285 CDF/l', 'Prix officiel', 'Structure officielle des prix', 'Élevée'],
        ['Juin 2026', 'Aucune nouvelle décision trouvée : 3 285 CDF/l', 'Prix officiel', 'Relance du 17/09 : rien de publié', 'Moyenne'],
        ['Mars → juin', '+ 25 % (affirmé)', 'Affirmation', 'Lettre Transco Sarl du 02/09/2026', 'À vérifier'],
      ],
    },
    result: "Évolution officielle mars → juin : 3 285 ÷ 2 980 − 1 = + 10,2 %. Pic de pénurie : 3 900 ÷ 2 980 − 1 = + 30,9 %, sur une dizaine de jours. L'affirmation « + 25 % entre mars et juin » n'est confirmée par aucune source primaire.",
    pitfall: "Garder dans le tableau une valeur « Faible » parce qu'elle va dans le sens de votre conclusion : un fournisseur la contestera en premier, et toute la comparaison perdra sa crédibilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Calculer l\'impact attendu et le confronter à la hausse constatée',
    intro: "Le carburant ne représente qu'une partie du coût d'un trajet. L'impact d'une hausse de carburant sur le prix d'un trajet se calcule donc : part du carburant × hausse du carburant. C'est ce calcul qui teste la causalité affirmée par le fournisseur.",
    steps: [
      {
        title: 'Calculer dans Excel',
        actions: [
          "En B2, saisissez la part du carburant dans le coût d'un trajet : 38 % (décomposition du devis Transco 2025).",
          "En B3, la hausse officielle : 10,2 % ; en B4, la hausse au pic : 30,9 %.",
          "Impact attendu (officiel) : =B2*B3 ; impact maximal (pic permanent) : =B2*B4.",
          "Traduisez en USD sur le coût moyen du T1 (4 400 USD par trajet, module 09) : =4400*B2*B3 et =4400*B2*B4.",
        ],
      },
      {
        title: 'Confronter',
        actions: [
          "Rapportez chaque impact à la hausse constatée : + 1 087,5 USD par trajet (4 400 → 5 487,5 USD, soit + 24,7 %).",
          "Exprimez la part de la hausse que le carburant peut expliquer.",
        ],
      },
    ],
    example: {
      title: 'Résultat du calcul — fil rouge',
      lines: [
        "Scénario officiel : 38 % × 10,2 % = 3,9 % → 4 400 × 3,9 % ≈ 171 USD par trajet.",
        "Scénario pic de pénurie, appliqué comme s'il avait duré tout le trimestre : 38 % × 30,9 % = 11,7 % → ≈ 516 USD par trajet.",
        "Hausse constatée : + 1 087,5 USD par trajet (+ 24,7 %).",
        "Part expliquée par le carburant : 171 ÷ 1 087,5 ≈ 16 % (officiel) ; au maximum 516 ÷ 1 087,5 ≈ 47 % (pic).",
      ],
    },
    result: "Conclusion chiffrée : même dans le scénario le plus défavorable, le carburant explique au plus la moitié de la hausse du coût par trajet ; dans le scénario officiel, environ un sixième.",
    tip: "Le calcul repose sur la part de 38 % : c'est la donnée la plus sensible. Demandez au fournisseur sa décomposition actuelle (carburant, chauffeur, péage, amortissement) — c'est d'ailleurs la meilleure question de négociation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Conclure, rédiger la note avec le bon outil et consigner',
    intro: "Perplexity a fourni les faits ; la note de négociation demande de l'argumentation et de la nuance : c'est le terrain de Claude ou ChatGPT. Vous leur donnez uniquement les faits vérifiés et le calcul, jamais la mission de « chercher » à nouveau.",
    steps: [
      {
        title: 'Formuler le verdict',
        actions: [
          "Écrivez le verdict en une phrase avec son niveau de confiance : confirmé, partiellement confirmé, non confirmé, contredit.",
          "Séparez le constat (chiffres sourcés) de l'hypothèse (ce qui reste à expliquer).",
        ],
      },
      {
        title: 'Rédiger la note avec Claude ou ChatGPT',
        actions: [
          "Ouvrez l'outil validé par l'organisation et collez : le tableau comparatif, le calcul, le verdict.",
          "Demandez une note d'une demi-page au responsable achats, factuelle, avec deux questions à poser à Transco Sarl.",
          "Relisez chaque chiffre de la note contre le tableau : l'outil de rédaction ne doit en ajouter aucun.",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Mettez à jour la ligne 8 de la grille (date, sources, fiabilité, action).",
          "Rangez le tableau, le calcul et la note dans 02_Preuves.",
        ],
      },
    ],
    example: {
      title: 'Verdict et prompt de rédaction',
      lines: [
        "Verdict : affirmation non confirmée — hausse officielle du gasoil de + 10,2 % entre mars et juin 2026, et non + 25 % ; un pic de pénurie (+ 30,9 %) n'a duré qu'une dizaine de jours. Le carburant explique entre 16 % et 47 % de la hausse par trajet. Confiance : Moyenne (part du carburant à confirmer).",
        "Prompt : « À partir uniquement des faits et calculs ci-dessous, rédige une note d'une demi-page au responsable achats d'une organisation humanitaire, ton factuel, sans aucun chiffre supplémentaire. Termine par deux questions précises à poser au transporteur. [tableau + calcul + verdict] »",
      ],
    },
    result: "Une note de négociation factuelle remise à Patrick Mumbere le 18/09/2026, fondée sur des sources vérifiées et un calcul reproductible, et une grille à jour.",
    pitfall: "Écrire « Transco ment sur ses coûts » : les données montrent que le carburant n'explique pas toute la hausse, elles ne disent pas pourquoi. Le reste est à demander, pas à affirmer.",
  },

  // ───────────── Procédure 6 — Rapport de recherche sourcée ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Choisir la ligne de grille à formaliser et préparer le gabarit',
    intro: "On ne transmet jamais un lien vers un fil Perplexity brut : le destinataire ne sait pas ce qui a été vérifié. Toute évolution « à action » se formalise dans le gabarit gabarit-rapport-recherche-sourcee.docx, qui correspond toujours à une ligne de la grille.",
    steps: [
      {
        title: 'Choisir et rassembler',
        actions: [
          "Dans la grille, repérez les lignes dont l'action relève du niveau « Action » : ici la ligne 5 (BHA, application au 01/10/2026).",
          "Rassemblez le registre de vérification, les captures et PDF archivés, et la requête exacte.",
        ],
      },
      {
        title: 'Préparer le document',
        actions: [
          "Ouvrez le gabarit, puis Fichier > Enregistrer sous dans 03_Rapports : 2026-09-22_rapport_BHA_etat_avances.docx.",
          "Lisez la structure : un en-tête « Rapport de recherche sourcée », un objectif, cinq sections numérotées et un tableau final « Rédigé par / Date ».",
          "Remplacez chaque texte d'aide en italique par votre contenu, section par section, sans supprimer les titres.",
        ],
      },
    ],
    table: {
      columns: ['Section du gabarit', 'Ce qu\'elle contient', 'Source dans votre travail'],
      rows: [
        ['1. Question de recherche', 'Question exacte avec ses critères de sourcing', 'Requête de la procédure 2'],
        ['2. Méthodologie et sources consultées', 'Mode, période, types et nombre de sources vérifiées', 'Réglages et registre'],
        ['3. Constats clés', 'Tableau N° / Constat / Source(s) / Date source / Confiance', 'Registre, lignes vérifiées'],
        ['4. Limites et points restant à vérifier', 'Non confirmé, non daté, sans réponse', 'Lignes Faible et À vérifier'],
        ['5. Conclusion et recommandation', '2-3 phrases : confirmé, incertain, action', 'Colonne F de la grille'],
      ],
    },
    result: "Un fichier de rapport nommé et daté, rattaché à la ligne 5 de la grille, et toutes les pièces nécessaires ouvertes à côté.",
    pitfall: "Faire un rapport pour une ligne « Information » : le comité reçoit trop de documents et ne lit plus ceux qui demandent une action.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Section 1 — Écrire la question de recherche',
    intro: "La section 1 du gabarit demande la « question exacte posée à Perplexity, formulée avec ses critères de sourcing ». Le lecteur doit pouvoir la relancer lui-même et obtenir les mêmes sources.",
    steps: [
      {
        title: 'Remplir la section',
        actions: [
          "Collez la requête effectivement envoyée le 16/09/2026, avec ses dates absolues (pas la requête type à période glissante).",
          "Si des relances ont produit des constats retenus, ajoutez-les en dessous, précédées de « Relance : ».",
          "Ajoutez une phrase de contexte : la décision que cette recherche éclaire.",
        ],
      },
    ],
    example: {
      title: 'Section 1 — rédigée',
      lines: [
        "Contexte : le programme A (Abris et AME — Nord-Kivu) remet un rapport financier trimestriel à BHA ; il s'agit de savoir si ce rapport doit changer à partir de la période octobre-décembre 2026.",
        "Question posée le 16/09/2026 : « Quelles évolutions des règles de conformité et de reporting financier d'USAID/BHA ont été publiées entre le 16/03/2026 et le 16/09/2026 ? Priorise la documentation officielle publiée par BHA…, cite la source avec sa date de publication…, signale toute information non confirmée officiellement… »",
        "Relance : « Trouve le document officiel BHA qui mentionne la période de transition citée en [3]. »",
      ],
    },
    result: "Une section 1 qui permet à un tiers de reproduire la recherche et de comprendre pourquoi elle a été faite.",
    tip: "Ne retouchez pas la requête pour la rendre « plus jolie » : un auditeur doit lire ce qui a réellement été demandé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Section 2 — Décrire la méthodologie et les sources consultées',
    intro: "La section 2 comporte un tableau à deux cases — « Mode utilisé (Pro Search / Focus mode) » et « Période couverte par la recherche » — puis un paragraphe sur les types de sources consultées et le nombre de sources vérifiées individuellement.",
    steps: [
      {
        title: 'Remplir le tableau',
        actions: [
          "Case Mode utilisé : indiquez Pro Search, le filtre de sources et l'Espace utilisé.",
          "Case Période couverte : les dates absolues de la requête.",
        ],
      },
      {
        title: 'Rédiger le paragraphe',
        actions: [
          "Comptez dans le registre : sources citées par Perplexity, sources ouvertes, sources retenues, sources écartées et pourquoi.",
          "Indiquez les dates de recherche et de vérification.",
        ],
      },
    ],
    example: {
      title: 'Section 2 — rédigée',
      lines: [
        "Mode utilisé : Pro Search ; sources Web (Réseaux sociaux désactivé) ; Espace « Veille conformité bailleurs — HGL ».",
        "Période couverte : du 16/03/2026 au 16/09/2026.",
        "Types de sources : 4 sources citées par Perplexity, toutes ouvertes et vérifiées individuellement le 17/09/2026 — 2 sources officielles BHA (page Exigences de rapport, note PDF), 1 presse spécialisée (Devex), 1 blog de consultant écarté (affirmation absente de la page).",
      ],
    },
    result: "Le lecteur sait comment la recherche a été faite, sur quelle période, et combien de sources ont été réellement ouvertes : la confiance qu'il peut accorder au rapport est mesurable.",
    pitfall: "Écrire « sources : Perplexity » : Perplexity est l'outil, pas la source. Ce sont les documents qu'il a trouvés qui font foi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Section 3 — Remplir le tableau des constats clés',
    intro: "Le tableau de la section 3 a cinq colonnes : N°, Constat, Source(s) citée(s), Date source, Confiance. Le gabarit prévoit trois lignes. Chaque constat est une phrase factuelle, telle qu'appuyée par la source — pas une interprétation.",
    steps: [
      {
        title: 'Remplir ligne par ligne',
        actions: [
          "Constat : reprenez la formulation vérifiée du registre, en une phrase.",
          "Source(s) citée(s) : nom de la source et lien ou référence exacte (titre du document, rubrique, page).",
          "Date source : au format AAAA-MM-JJ, comme l'indique le gabarit ; « sans date » si aucune n'est visible.",
          "Confiance : Élevée, Moyenne ou Faible, reprise du registre.",
        ],
      },
      {
        title: 'Choisir les constats',
        actions: [
          "Classez par importance pour la décision ; gardez les trois premiers dans le tableau.",
          "Un constat de confiance faible peut figurer s'il compte pour la décision, mais il sera repris en section 4.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Constat (simulé)', 'Source(s) citée(s)', 'Date source', 'Confiance'],
      rows: [
        ['1', "Le rapport financier trimestriel doit être accompagné d'un état des avances non justifiées, ventilé par sous-partenaire", 'BHA — page « Exigences de rapport », rubrique Rapports financiers', '2026-06-30', 'Élevée'],
        ['2', "Cette exigence s'applique aux périodes de rapport commençant à partir du 1er octobre 2026", 'BHA — note officielle en PDF, page 2', '2026-06-30', 'Élevée'],
        ['3', "Une période de transition jusqu'au 31 décembre 2026 est évoquée, sans confirmation officielle", 'Devex — article sur les exigences de rapport de BHA', '2026-07-08', 'Faible'],
      ],
    },
    result: "Trois constats datés, sourcés et cotés : deux sur lesquels l'organisation peut agir, un signalé comme fragile.",
    tip: "Pour un document destiné à circuler, ajoutez le lien complet ou la référence du document archivé dans 02_Preuves : le destinataire doit pouvoir vérifier sans vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Sections 4 et 5 — Limites, conclusion et recommandation',
    intro: "La section 4 dit honnêtement ce qui n'est pas établi ; la section 5 tient en deux ou trois phrases : ce qui est confirmé, ce qui reste incertain, l'action recommandée. Vous pouvez faire reformuler par Claude ou ChatGPT, à partir de vos constats uniquement.",
    steps: [
      {
        title: 'Section 4 — Limites',
        actions: [
          "Listez les informations non confirmées par une source primaire.",
          "Listez les sources sans date ou de fiabilité incertaine, et les questions restées sans réponse.",
          "Indiquez les démarches de confirmation en cours, avec leur date.",
        ],
      },
      {
        title: 'Section 5 — Conclusion',
        actions: [
          "Phrase 1 : ce qui est confirmé, avec la date d'effet.",
          "Phrase 2 : ce qui reste incertain.",
          "Phrase 3 : l'action recommandée, son responsable et son échéance — identique à la colonne F de la grille.",
          "Si vous faites reformuler par une IA de rédaction, collez les constats et demandez : « Reformule en 3 phrases, sans ajouter aucun fait. »",
        ],
      },
    ],
    example: {
      title: 'Sections 4 et 5 — rédigées',
      lines: [
        "Limites : la période de transition n'est mentionnée que par Devex (aucune source BHA trouvée le 16/09) ; le modèle officiel de l'état des avances n'est pas encore publié ; question de confirmation envoyée au chargé de l'accord BHA le 17/09/2026, sans réponse à ce jour.",
        "Conclusion : BHA exige, pour les périodes de rapport commençant à partir du 1er octobre 2026, un état des avances non justifiées ventilé par sous-partenaire. L'existence d'une période de transition n'est pas confirmée et ne doit pas être présumée.",
        "Recommandation : adapter le modèle de rapport trimestriel du programme A et collecter les avances par sous-partenaire dès octobre — responsable financier, avant le 01/10/2026.",
      ],
    },
    result: "Une section 4 qui protège l'organisation contre une fausse certitude, et une conclusion directement votable par le comité.",
    pitfall: "Faire rédiger la conclusion par Perplexity dans le fil de recherche : il relance une recherche, peut ajouter des éléments non vérifiés et reformuler un « est évoqué » en « est accordé ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Faire relire, signer et diffuser',
    intro: "Le tableau final du gabarit — « Rédigé par (nom, fonction) » et « Date » — engage son auteur. Avant de le remplir, une deuxième personne vérifie que chaque constat se retrouve bien dans sa source.",
    steps: [
      {
        title: 'Relecture',
        actions: [
          "Envoyez au relecteur le rapport et le dossier 02_Preuves, avec une consigne précise : « Ouvre les sources des constats 1 et 2 et vérifie la formulation et la date. »",
          "Intégrez ses remarques ; notez la relecture dans le registre.",
        ],
      },
      {
        title: 'Finaliser et diffuser',
        actions: [
          "Remplissez « Rédigé par » et « Date ».",
          "Vérifiez la longueur : une à deux pages.",
          "Fichier > Enregistrer sous > PDF ; diffusez le PDF, jamais le lien du fil Perplexity.",
          "Reportez dans la colonne F de la grille : « Rapport diffusé le JJ/MM ».",
        ],
      },
    ],
    example: {
      title: 'Validation et diffusion — fil rouge',
      lines: [
        "Relecture par Josué Kambale, responsable financier, le 23/09/2026 : constats 1 et 2 conformes ; il demande d'écrire « 1er octobre 2026 » en toutes lettres dans la conclusion.",
        "Rédigé par : Amani Kahindo, chargée administrative et logistique — Date : 23/09/2026.",
        "PDF diffusé le jeudi 24/09/2026 à Furaha Bisimwa et aux membres du comité du 25/09.",
      ],
    },
    result: "Un rapport de recherche sourcée d'une page et demie, relu, signé, daté, diffusé en PDF la veille du comité, cohérent avec la ligne 5 de la grille.",
    tip: "Gardez le même nom de sujet dans la grille (colonne A) et dans le nom du fichier de rapport : un auditeur relie ainsi en dix secondes la ligne de veille, le rapport et les preuves.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Les deux requêtes de veille',
    scenario: "Rappel de l'étude de cas du module : une organisation financée par USAID/BHA sur un programme et par ECHO sur un autre doit suivre les évolutions de conformité de ses deux bailleurs, avec une exigence stricte — chaque ligne défendable devant un auditeur, avec la source et la date. Voici le raisonnement complet d'Amani pour Horizon Grands Lacs, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Cadrage', body: "Mandat écrit et validé (5 rubriques), quatre sujets reliés à une décision, carte des sources primaires par sujet, grille vidée de ses exemples.", result: 'Mandat validé le 15/09/2026.' },
      { title: 'Requête USAID/BHA', body: "« Quelles évolutions des règles de conformité et de reporting financier d'USAID/BHA ont été publiées entre le 16/03/2026 et le 16/09/2026 ? Priorise la documentation officielle BHA, puis Devex et ReliefWeb. Cite chaque source avec sa date de publication et la date d'effet ; signale ce qui n'est pas confirmé officiellement et toute évolution plus large. Si rien sur un point, écris-le. Tableau : évolution | date de publication | date d'effet | source | type. »" },
      { title: 'Requête ECHO', body: "Même structure sur l'éligibilité des dépenses et les exigences de justification, avec en plus : « signale toute page officielle sans date visible »." },
      { title: 'Contrôle des trois critères', body: 'Type de source : primaire puis presse spécialisée nommée. Période : bornée en dates absolues. Citation : date de publication + date d\'effet + signalement du non confirmé. Neutralité et format : présents.', result: 'Les deux requêtes lancées en Pro Search le 16/09/2026, Réseaux sociaux désactivé.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — La grille de veille complétée',
    scenario: "Après vérification de chaque citation (procédure 3), Amani remplit l'onglet « Veille » à partir du registre — jamais à partir de la réponse brute. Contenu simulé, structure exacte du modèle.",
    steps: [
      { title: 'Ligne 5 — BHA reporting financier (hebdo)', body: "16/09/2026 — Sources : page officielle BHA et note PDF du 30/06/2026, Devex du 08/07/2026 — Fiabilité : Élevée — Action : adapter le modèle de rapport trimestriel avant le 01/10/2026 ; demander confirmation de la transition.", result: 'Vérification : passage retrouvé mot pour mot, PDF archivé, transition cotée Faible.' },
      { title: 'Ligne 6 — ECHO éligibilité (hebdo)', body: "16/09/2026 — Sources : portail partenaires ECHO (sans date visible), FAQ du 12/05/2026 — Fiabilité : À vérifier — Action : écrire au point focal ECHO ; appliquer dès maintenant les carnets de bord véhicules.", result: 'Vérification : page officielle, mais date d\'application inconnue.' },
      { title: 'Ligne 7 — Appels à propositions (hebdo)', body: "17/09/2026 — Sources : OCHA, page du fonds humanitaire RDC (10/09/2026), ReliefWeb (12/09/2026) — Fiabilité : Élevée — Action : décision go / no-go avant le 30/09/2026." },
      { title: 'Ligne 8 — Prix du carburant (mensuel)', body: "17/09/2026 — Sources : structure officielle des prix (01/05/2026), média local (29/04/2026) — Fiabilité : Moyenne — Action : dossier de négociation Transco.", result: 'Fact-check : + 10,2 % officiel contre + 25 % affirmé.' },
    ],
    table: {
      columns: ['Onglet Synthèse', 'Valeur'],
      rows: [
        ['Sujets de veille actifs', '4'],
        ['Sujets à relancer (> 30 jours)', '0'],
        ['Sujets évalués Faible ou À vérifier', '1'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le rapport de recherche sourcée',
    scenario: "Le rapport correspond à la ligne 5 de la grille. Voici le contenu final du gabarit tel qu'il a été diffusé en PDF le 24/09/2026.",
    steps: [
      { title: '1. Question de recherche', body: "Requête BHA du 16/09/2026, en dates absolues, et sa relance sur la période de transition ; contexte : rapport trimestriel du programme A." },
      { title: '2. Méthodologie', body: 'Pro Search, sources Web, Espace dédié ; période du 16/03 au 16/09/2026 ; 4 sources citées, 4 vérifiées individuellement le 17/09, 1 écartée.' },
      { title: '3. Constats', body: "(1) État des avances non justifiées par sous-partenaire — BHA, 2026-06-30 — Élevée. (2) Application aux périodes à partir du 01/10/2026 — note BHA, 2026-06-30 — Élevée. (3) Transition jusqu'au 31/12/2026 évoquée — Devex, 2026-07-08 — Faible." },
      { title: '4. Limites', body: 'Transition non confirmée ; modèle officiel de l\'état non publié ; confirmation demandée au bailleur le 17/09/2026.' },
      { title: '5. Conclusion et recommandation', body: "Exigence confirmée à partir du 1er octobre 2026 ; transition non présumée ; adapter le modèle de rapport et collecter les avances par sous-partenaire dès octobre — responsable financier, avant le 01/10/2026." },
      { title: 'Validation', body: 'Rédigé par Amani Kahindo, chargée administrative et logistique, le 23/09/2026 ; relu par Josué Kambale, responsable financier.' },
    ],
    result: "Décision du comité du 25/09 (exemple) : la recommandation est adoptée ; la veille devient hebdomadaire et son point Synthèse est inscrit à l'ordre du jour de chaque comité mensuel.",
    tip: "Gardez ce corrigé comme modèle : pour votre prochaine évolution, seuls la question, les sources et les dates changeront, la structure du raisonnement reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Veille réglementaire sur deux bailleurs et rapport sourcé',
    instructions: "Vous travaillez pour une organisation financée par USAID/BHA sur un programme et par ECHO sur un autre. Mettez en place la veille de conformité demandée par votre direction, avec Perplexity et les deux gabarits du module, en respectant la vérification systématique des sources. Les résultats peuvent être simulés, mais doivent être plausibles et cohérents.",
    steps: [
      {
        title: 'Requêtes de veille',
        actions: [
          "Rédigez les deux requêtes de recherche approfondie (USAID/BHA, ECHO) sur les évolutions de conformité des 6 derniers mois.",
          "Vérifiez que chacune précise explicitement le type de source prioritaire, la période couverte et l'exigence de citation datée, et qu'elle est formulée de façon neutre.",
        ],
      },
      {
        title: 'Grille de veille',
        actions: [
          "Copiez grille-veille-sectorielle-perplexity.xlsx et effacez le contenu des lignes d'exemple (A5:F7).",
          "Complétez au moins 3 lignes au total : sujet, requête utilisée, date, sources trouvées (types plausibles : page officielle BHA, note ECHO…), fiabilité choisie dans la liste, action à prendre.",
          "Pour chaque ligne, précisez par écrit comment vous vérifieriez concrètement la source avant de la marquer « Élevée ».",
        ],
      },
      {
        title: 'Rapport de recherche sourcée',
        actions: [
          "Choisissez une évolution identifiée dans la grille.",
          "Rédigez-la dans gabarit-rapport-recherche-sourcee.docx : question de recherche, méthodologie, constats avec citation, niveau de confiance, limites, conclusion.",
        ],
      },
    ],
    deliverable: "La grille de veille complétée et un rapport de recherche sourcée d'une à deux pages, cohérents entre eux : le rapport correspond à une ligne de la grille.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Fact-checker une affirmation reçue",
    instructions: "Le responsable programmes vous transmet un brouillon rédigé avec une IA sans recherche web : « Le taux de change du franc congolais face au dollar s'est déprécié de 15 % depuis janvier 2026, ce qui justifie de réviser les budgets en francs congolais. » Vérifiez cette affirmation avec la procédure 5.",
    steps: [
      {
        title: 'Décomposer et chercher',
        actions: [
          "Séparez les faits (taux à deux dates, ampleur) de la conclusion (réviser les budgets).",
          "Rédigez une requête neutre qui demande les taux officiels à deux dates précises, avec la source primaire en priorité (banque centrale).",
          "Lancez-la en Pro Search et inventoriez les valeurs dans un registre.",
        ],
      },
      {
        title: 'Vérifier et conclure',
        actions: [
          "Appliquez les contrôles de la procédure 3 : passage retrouvé, date constatée, niveau de la source.",
          "Calculez vous-même l'évolution à partir des valeurs brutes.",
          "Rédigez un verdict d'une phrase (confirmé, partiellement confirmé, non confirmé, contredit) avec un niveau de confiance.",
        ],
      },
    ],
    tip: "Attention au sens du calcul : si le taux passe de 2 800 à 3 220 CDF pour 1 USD, le dollar gagne 15 %, mais le franc perd 1 − 2 800 ÷ 3 220 ≈ 13 % de sa valeur. Précisez toujours quelle monnaie se déprécie et par rapport à quoi.",
    deliverable: "Un tableau de deux à quatre valeurs sourcées et datées, le calcul, et un verdict d'une phrase avec son niveau de confiance.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre veille',
    instructions: "Appliquez les six procédures à un sujet réel de votre travail : un bailleur, une réglementation nationale (fiscalité, droit du travail, douane), un marché (prix, fournisseurs) ou la veille concurrentielle de votre activité.",
    steps: [
      {
        title: 'Installer',
        actions: [
          "Rédigez un mandat de veille et faites-le valider par votre responsable.",
          "Définissez 3 à 5 sujets, chacun relié à une décision, avec sa source primaire.",
          "Créez un Espace Perplexity avec ses instructions et une requête type par sujet.",
        ],
      },
      {
        title: 'Faire tourner quatre semaines',
        actions: [
          "Faites chaque passage à la fréquence prévue, avec vérification des sources.",
          "Tenez la grille à jour et relevez la Synthèse chaque semaine.",
          "Formalisez au moins une évolution « Action » dans le gabarit de rapport.",
        ],
      },
    ],
    deliverable: "La grille de veille avec quatre semaines d'historique de dates, un rapport sourcé relu par un collègue, et le registre de vérification correspondant.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Chacune de vos deux requêtes contient les trois critères : type de source prioritaire nommé, période bornée en dates, exigence de citation datée — et aucune formulation du type « confirme que ».",
      "Les lignes d'exemple du modèle sont effacées et l'onglet Synthèse compte exactement vos sujets.",
      "Votre grille compte au moins 3 lignes, chacune avec une vraie date en colonne C et une valeur de la liste déroulante en colonne E.",
      "Chaque cellule de la colonne D indique l'émetteur et la date de publication de chaque source, et la raison de toute fiabilité réduite.",
      "Pour chaque ligne, vous avez écrit comment vous vérifieriez la source : ouverture, passage retrouvé, date constatée, remontée à la source primaire.",
      "Chaque action de la colonne F a un verbe, un responsable et une échéance.",
      "Votre rapport correspond à une ligne de la grille et reprend la requête exacte en section 1.",
      "La section 2 indique le mode, la période et le nombre de sources vérifiées individuellement.",
      "Chaque constat de la section 3 a une source précise, une date au format AAAA-MM-JJ et un niveau de confiance.",
      "La section 4 nomme au moins une limite, et la conclusion distingue clairement le confirmé de l'incertain.",
      "Le rapport fait une à deux pages et le tableau « Rédigé par / Date » est rempli.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Faire confiance à une réponse sans cliquer sur les sources : une synthèse cohérente peut déformer la source. Ouvrez chaque citation qui compte et retrouvez le passage avec Ctrl+F.",
      "Utiliser Perplexity pour une rédaction longue ou un raisonnement complexe : il répond à des questions factuelles. Passez à Claude ou ChatGPT avec vos faits vérifiés.",
      "Ne pas dater ses recherches : chaque ligne de la grille porte une date de dernière recherche, sans exception, saisie comme une vraie date.",
      "Rester en recherche rapide sur un sujet de veille : activez Pro Search dès qu'il faut croiser plusieurs sources ou plusieurs mois.",
      "Formuler une requête orientée (« confirme que rien n'a changé ») : demandez « quelles évolutions ont eu lieu » et exigez que le moteur dise quand il ne trouve rien.",
      "Recopier la date que Perplexity attribue à une source sans la constater sur la page : notez « sans date visible » plutôt qu'une date supposée.",
      "Citer une plateforme de republication ou un article comme source d'une règle : remontez au document de l'émetteur.",
      "Mettre des informations internes dans une requête ou dans les instructions d'un Espace : décrivez le sujet public, jamais votre situation.",
      "Reprendre un pourcentage tout fait : demandez les valeurs brutes à deux dates et calculez vous-même.",
      "Écrire une phrase dans la colonne Fiabilité de la grille : choisissez une des quatre valeurs de la liste et mettez la justification en colonne D.",
      "Transmettre un lien vers un fil Perplexity au lieu d'un rapport : formalisez dans le gabarit, avec constats, confiance et limites.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez transformé une demande de direction en mandat de veille validé, découpé en quatre sujets reliés chacun à une décision, avec une carte des sources primaires.",
      "Vous avez rédigé deux requêtes de recherche approfondie (USAID/BHA, ECHO) avec type de source, période bornée, citation datée, neutralité et format imposé, et lancé les recherches en Pro Search.",
      "Vous avez vérifié chaque citation (passage retrouvé, date constatée, niveau de l'émetteur, recoupement) et tenu un registre de vérification daté avec preuves archivées.",
      "Vous avez installé une veille récurrente : deux Espaces avec instructions, quatre requêtes types à période glissante, un calendrier, des critères de pertinence et une grille complète (Synthèse : 4 actifs, 0 à relancer, 1 à revérifier).",
      "Vous avez démonté une affirmation de fournisseur : + 10,2 % de hausse officielle du gasoil au lieu de + 25 %, un carburant qui explique entre 16 % et 47 % de la hausse par trajet.",
      "Vous avez rédigé, fait relire et diffusé en PDF un rapport de recherche sourcée conforme au gabarit, rattaché à une ligne de la grille.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer en une phrase ce qui distingue Perplexity de ChatGPT ou Claude : recherche web en temps réel avec citations, contre génération à partir de données d'entraînement figées.",
      "Je sais formuler une requête de recherche approfondie avec des critères de sourcing explicites (type de source, période, exigence de citation).",
      "Je sais identifier une situation où Perplexity n'est PAS le bon outil, et basculer vers Claude ou ChatGPT.",
      "J'ai mis en place une veille récurrente avec une requête réutilisable, une fréquence et des critères de pertinence définis.",
      "Je vérifie systématiquement, en cliquant sur les sources, la fiabilité et la date d'une information avant de la considérer comme fiable.",
      "Je sais fact-checker une affirmation chiffrée en séparant les faits publics, les données internes et le calcul.",
      "J'ai complété la grille de veille sectorielle avec le modèle fourni.",
      "J'ai produit un rapport de recherche sourcée d'une à deux pages avec le gabarit fourni.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Google Gemini — Multimodalité & Google Workspace ». Vous y apprendrez à faire analyser des images, des graphiques et des documents visuels, et à travailler avec l'IA directement dans Gmail, Docs, Sheets, Slides et Google Meet — en gardant le même réflexe que dans ce module : chaque information produite par l'IA se vérifie avant de partir.",
  },
]
