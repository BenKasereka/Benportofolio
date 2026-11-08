// Module 02 — ChatGPT (OpenAI) — Productivité maximale & automatisation
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (prompt RCCF, itération, bibliothèque de prompts, analyse d'un
// rapport complexe, résumé d'un document volumineux, GPT personnalisé) est
// détaillée étape par étape et appliquée au même fil rouge : la semaine du
// 4 au 21 septembre 2026 de Josué Kambale, chargé de programmes chez
// Horizon Grands Lacs. Organisation, partenaires et personnes fictifs.
export default [
  {
    type: 'cover',
    title: 'ChatGPT (OpenAI) — Productivité maximale & automatisation',
    hook: "À la fin de ce module, vous saurez obtenir de ChatGPT un livrable professionnel bon dès le premier essai — un rapport bailleur de 400 mots, chiffré, au format exigé —, analyser un rapport partenaire de 22 pages pour en sortir les incohérences avec la page exacte, résumer une stratégie de 45 pages pour un comité pressé, et livrer à votre équipe un GPT personnalisé testé qui fait gagner 6 heures par mois.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Structurer une demande professionnelle selon la méthode RCCF (Rôle, Contexte, Contraintes, Format), en produisant un prompt complet qui donne un rapport exploitable dès le premier envoi.",
      "Évaluer une réponse de ChatGPT avec une grille de cinq contrôles et la corriger par itération ciblée, en produisant une version conforme sans jamais repartir d'une page blanche.",
      "Constituer et tenir à jour votre bibliothèque de prompts dans le gabarit bibliotheque-prompts-rccf-chatgpt.xlsx, en produisant des lignes réutilisables notées et suivies par catégorie.",
      "Analyser un rapport complexe et ses annexes chiffrées, en produisant une liste d'incohérences ancrée sur la page exacte, vérifiée dans la source, et des questions prêtes à envoyer au partenaire.",
      "Résumer un document volumineux pour un décideur, en produisant une note de 10 points classés, contrôlée pour sa fidélité au texte d'origine.",
      "Décider entre reprompter et construire un GPT personnalisé, puis le créer, le tester sur 3 cas réels et le diffuser, en produisant le guide-creation-gpt-personnalise.docx entièrement complété.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une visite guidée de ChatGPT : vous allez produire, avec lui, de vrais livrables de bureau, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les menus à ouvrir, les cellules à remplir et le résultat attendu.",
      "À la fin du module, vous aurez en main six livrables réutilisables tels quels dans votre propre travail :",
    ],
    bullets: [
      "Un prompt RCCF complet et le rapport d'avancement bailleur qu'il produit, relu et prêt à envoyer.",
      "Une grille d'évaluation d'une réponse en cinq contrôles et un catalogue de consignes d'itération ciblées.",
      "Votre bibliothèque de prompts RCCF (gabarit Excel du module) enrichie de vos propres lignes, notées de 1 à 5.",
      "Une analyse critique d'un rapport partenaire : incohérences chiffrées, indicateurs manquants, affirmations non étayées, chacune avec sa page, plus la vérification de l'annexe budgétaire par formule Excel.",
      "Une note de synthèse de 10 points d'un document de 45 pages, contrôlée point par point.",
      "Un GPT personnalisé configuré, testé, diffusé, et son guide de création complété (sections 1 à 6).",
    ],
    tip: "Ouvrez dès maintenant les deux gabarits du dossier 04-templates : bibliotheque-prompts-rccf-chatgpt.xlsx et guide-creation-gpt-personnalise.docx. Toutes les procédures s'y appuient : vous pouvez remplir vos propres versions au fil de la lecture.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : la rentrée de septembre 2026 chez Horizon Grands Lacs',
    body: [
      "Horizon Grands Lacs est l'organisation fictive que vous avez peut-être déjà croisée dans cette formation : trois sites (Goma, Bukavu, Kinshasa), une directrice pays, Furaha Bisimwa, et une équipe qui produit beaucoup d'écrits. Josué Kambale y est chargé de programmes à Goma. Il pilote le projet Tremplin Jeunes Goma et suit les partenaires locaux.",
      "Le vendredi 4 septembre 2026 au matin, trois demandes tombent en même temps. Josué décide de les traiter avec ChatGPT, dans l'espace professionnel de l'organisation, en appliquant la méthode du module.",
    ],
    table: {
      columns: ['Demande', 'De qui', 'Pour quand', 'Procédures du module'],
      rows: [
        ["Rapport d'avancement à mi-parcours du projet Tremplin Jeunes Goma (60 000 USD) pour le Fonds Espoir Jeunesse", 'Furaha Bisimwa', 'Vendredi 04/09, 17 h', '1, 2 et 3'],
        ["Analyse critique du rapport T3 (22 pages + annexes) du partenaire Kivu Eau Propre, projet eau-hygiène de 180 000 USD", 'Furaha Bisimwa', 'Appel partenaire du jeudi 10/09', '4'],
        ["Résumé de la Stratégie pays 2026-2029 (45 pages) pour le comité de direction", 'Furaha Bisimwa', 'Comité du lundi 14/09', '5'],
        ["Un outil pour que les 3 sites cessent de passer 45 minutes sur chaque compte rendu de coordination hebdomadaire", 'Les 3 coordinateurs de site', 'Diffusion le lundi 21/09', '6'],
      ],
    },
    highlight: "Organisation, partenaires et personnes sont fictifs ; les chiffres sont réalistes et cohérents d'une diapositive à l'autre, pour que vous puissiez refaire chaque calcul.",
  },
  {
    type: 'concept',
    title: "La carte du module : 6 procédures, dans l'ordre où vous les exécuterez",
    body: "Les procédures 1 à 3 posent la méthode de base (construire, corriger, capitaliser). Les procédures 4 et 5 l'appliquent aux documents longs et complexes. La procédure 6 la rend permanente pour toute une équipe. Ne sautez pas les premières : un GPT personnalisé n'est qu'un prompt RCCF bien construit, enregistré une fois pour toutes.",
    bullets: [
      "Procédure 1 — Construire un prompt RCCF complet (7 étapes) : de la demande brute à la réponse évaluée.",
      "Procédure 2 — Itérer sur une réponse insatisfaisante (3 étapes) : diagnostiquer, corriger de façon ciblée, consolider.",
      "Procédure 3 — Constituer et tenir sa bibliothèque de prompts RCCF (4 étapes), dans le gabarit Excel du module.",
      "Procédure 4 — Analyser un rapport complexe et ses données (6 étapes) : préparer, cadrer l'angle, ancrer, vérifier, recalculer, restituer.",
      "Procédure 5 — Résumer un document volumineux pour un décideur (3 étapes).",
      "Procédure 6 — Créer, tester et diffuser un GPT personnalisé (7 étapes), dans le guide de création du module.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '6 h / mois',
    caption: "C'est le temps rendu à l'équipe d'Horizon Grands Lacs par un seul GPT personnalisé bien configuré : 12 comptes rendus par mois passent de 45 à 15 minutes, relecture comprise.",
    context: "Ce gain ne vient pas d'un modèle « plus intelligent ». Il vient d'une instruction complète, écrite une fois, testée sur des cas réels et partagée. C'est tout l'objet de ce module : la qualité de la réponse est proportionnelle à la qualité de la demande.",
  },

  // ───────────── Théorie essentielle ─────────────
  {
    type: 'concept',
    title: 'Pourquoi un prompt vague produit toujours une réponse moyenne',
    body: [
      "ChatGPT ne devine pas ce que vous voulez : il prédit la suite de texte la plus probable compte tenu de ce que vous lui donnez. « Aide-moi à écrire un rapport sur notre projet » ne lui dit ni qui vous êtes, ni à qui s'adresse le rapport, ni sa longueur, ni son ton, ni les données à inclure.",
      "Il produit donc la réponse la plus généraliste possible — celle qui pourrait convenir à n'importe quel projet, dans n'importe quel secteur, pour n'importe quel lecteur. Calibrée pour ne déplaire à personne plutôt que pour servir votre cas, c'est la réponse la moins utile qui soit.",
    ],
    example: {
      title: 'Ce que Josué obtient avec le prompt vague (extrait)',
      lines: [
        "Prompt : « Aide-moi à écrire un rapport sur notre projet. »",
        "Réponse : « 1. Introduction — Le projet avance globalement bien et a permis d'obtenir des résultats encourageants. 2. Activités réalisées — Plusieurs activités ont été menées auprès des bénéficiaires… 3. Conclusion — Les perspectives sont prometteuses. »",
        "Diagnostic : aucun chiffre, aucun destinataire, aucun obstacle, aucune échéance. Tout est à réécrire.",
      ],
    },
    tip: "Avant de taper quoi que ce soit, posez-vous la question : « Si je confiais cette tâche à un collègue junior, qu'est-ce que je devrais lui dire pour qu'il ne revienne pas me voir ? » Tout ce que vous lui diriez doit figurer dans le prompt.",
  },
  {
    type: 'concept',
    title: 'Une logique de délégation, pas un défaut du modèle',
    body: [
      "Ce n'est pas un défaut du modèle : c'est la conséquence directe de l'information que vous lui donnez. Un consultant senior qui délègue une tâche à un junior sans préciser le destinataire, le format ni les contraintes obtient le même résultat : un travail moyen, techniquement correct, inutilisable tel quel.",
      "Un professionnel qui maîtrise ChatGPT ne « discute » pas au fil de l'eau en espérant tomber sur la bonne réponse : il construit sa demande une fois, avec toute l'information nécessaire dès le premier message. C'est plus rapide, et le résultat est directement exploitable.",
    ],
    table: {
      columns: ['Mode de travail', 'Ce que vous faites', 'Résultat typique'],
      rows: [
        ['Discuter au fil de l\'eau', 'Une phrase vague, puis 5 à 8 relances pour ajouter ce qui manque', '20 à 30 min, texte rafistolé, informations dispersées dans la conversation'],
        ['Déléguer comme à un junior', 'Un message RCCF complet, puis 0 à 2 corrections ciblées', '5 à 10 min, texte cohérent, prompt réutilisable la fois suivante'],
      ],
    },
    highlight: "La qualité de la réponse est directement proportionnelle à la qualité et à la précision de l'instruction de départ.",
  },
  {
    type: 'comparison-table',
    title: 'La méthode RCCF — Rôle, Contexte, Contraintes, Format',
    columns: ['Bloc', 'Ce qu\'il apporte au modèle', 'Exemple de formulation'],
    rows: [
      ['Rôle', "Le point de vue et le niveau d'expertise à adopter. Sans rôle, le modèle répond en généraliste neutre.", '« Tu es un directeur financier d\'ONG avec 15 ans d\'expérience en reporting bailleurs. »'],
      ['Contexte', 'La situation réelle : qui est concerné, quelles données existent, quelle contrainte de terrain s\'applique. Sans contexte, le modèle invente ou généralise.', '« Ce rapport s\'adresse à un bailleur institutionnel européen, sur un projet de 8 mois déjà clôturé, budget de 240 000 USD. »'],
      ['Contraintes', "Les limites : longueur, ce qu'il faut éviter, niveau de langage, éléments obligatoires. Sans elles, le modèle choisit à votre place — souvent mal.", '« Maximum 500 mots, aucun jargon technique non expliqué, ton factuel sans superlatifs. »'],
      ['Format', 'La structure exacte de sortie : plan, tableau, liste, nombre de sections. Sans format, vous récupérez un bloc de texte à restructurer.', '« Structure en 4 sections : Contexte, Résultats, Écarts budgétaires, Recommandations. Utilise des sous-titres. »'],
    ],
  },
  {
    type: 'concept',
    title: 'Les 4 blocs ne sont pas facultatifs à la carte',
    body: "RCCF s'utilise dans cet ordre, chaque fois que vous attendez un résultat professionnel plutôt qu'une simple réponse factuelle. Chaque bloc oublié laisse au modèle une décision qu'il prendra à votre place. C'est la combinaison des quatre qui élimine l'aléatoire, pas l'un d'eux isolément.",
    table: {
      columns: ['Bloc manquant', 'Ce que vous obtenez', 'Exemple sur le rapport de Josué'],
      rows: [
        ['Rôle', 'Ton neutre, vocabulaire de généraliste', '« Les bénéficiaires ont bien progressé » au lieu de « 53 jeunes placés »'],
        ['Contexte', 'Texte bien calibré mais générique, chiffres inventés ou absents', 'Un taux de placement « d\'environ 70 % » sorti de nulle part'],
        ['Contraintes', 'Longueur et ton imprévisibles, superlatifs', '900 mots et « des résultats remarquables »'],
        ['Format', 'Bloc de texte continu à restructurer', 'Pas de résumé exécutif, sections mélangées'],
      ],
    },
    pitfall: "Croire qu'un rôle très détaillé compense l'absence de données : « Tu es le meilleur expert mondial du reporting » ne fournit aucun chiffre. Sans contexte réel, le modèle comble les vides avec des généralités ou des inventions plausibles.",
  },
  {
    type: 'comparison-table',
    title: 'Les outils du module et quand les utiliser',
    columns: ['Outil', 'À utiliser pour', 'Limite à connaître'],
    rows: [
      ['ChatGPT (web ou application), plan Plus / Team recommandé', 'Toutes les procédures. Le plan gratuit suffit pour pratiquer la méthode RCCF.', 'Création de GPT personnalisés et fichiers de connaissance volumineux : plan payant (Plus, Team ou Enterprise)'],
      ['Trombone de la conversation (téléversement)', 'Analyser un document ponctuel : rapport, contrat, tableau de données', 'Un document par conversation ; précisez toujours l\'angle attendu'],
      ['Analyse de données (exécution de code)', 'Calculer sur un tableau joint : ChatGPT exécute réellement du code sur le fichier', 'Ouvrez le détail de l\'analyse pour vérifier ce qui a été lu et calculé'],
      ['GPT Builder (« Explorer les GPT » → « Créer »)', 'Configurer un GPT personnalisé pour une tâche récurrente', 'Préférez le mode « Configurer » : le mode « Créer » produit des instructions génériques'],
      ['Fichiers de connaissance (Knowledge)', 'Attacher à un GPT un gabarit, une procédure ou une grille qu\'il consulte à chaque réponse', 'Un fichier obsolète produit des réponses obsolètes, sans alerte'],
    ],
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de coller quoi que ce soit dans ChatGPT',
    body: "Coller un texte ou joindre un fichier dans ChatGPT, c'est le transmettre à un service externe. Un rapport de projet contient souvent des données personnelles (noms de jeunes, de bénéficiaires, de staff) et des informations contractuelles. Appliquez ces règles avant chaque envoi.",
    bullets: [
      "Travaillez uniquement dans l'espace ChatGPT professionnel validé par votre organisation (Team ou Enterprise), jamais dans un compte personnel gratuit.",
      "Ne collez jamais de liste nominative de bénéficiaires : remplacez les noms par des codes ou des totaux (« 85 jeunes accompagnés », pas la liste des 85).",
      "Retirez les annexes inutiles à la question (listes de présence, pièces d'identité, relevés bancaires).",
      "Ne collez aucun mot de passe, numéro de compte ou identifiant personnel, même pour « vérifier un format ».",
      "Pour un GPT diffusé à l'équipe, n'attachez en connaissance que des documents que tous ses utilisateurs ont le droit de lire.",
    ],
    example: {
      title: 'Décision de Josué pour le fil rouge',
      lines: [
        "Rapport Tremplin : seuls des totaux sont collés (85 accompagnés, 53 placés) ; la liste nominative des jeunes reste dans le classeur interne.",
        "Rapport Kivu Eau Propre : l'annexe 5 (liste des ménages bénéficiaires) est retirée du PDF avant téléversement.",
        "Stratégie pays : document interne non nominatif, téléversement autorisé par Furaha Bisimwa le 04/09/2026.",
      ],
    },
    pitfall: "Penser « ce n'est qu'un brouillon » : la donnée est transmise au moment où vous l'envoyez, que le résultat soit utilisé ou non.",
  },
  {
    type: 'concept',
    title: "Ce qu'est un GPT personnalisé, concrètement",
    body: [
      "Un GPT personnalisé (Custom GPT, accessible aux comptes ChatGPT Plus, Team ou Enterprise) n'est pas un nouveau modèle d'IA. C'est un jeu d'instructions RCCF écrites une fois pour toutes, packagé avec — en option — des fichiers de connaissance que le GPT consulte à chaque réponse, et parfois des actions (connexions à des outils externes).",
      "Au lieu de retaper rôle, contexte et contraintes à chaque conversation, vous les écrivez une seule fois dans sa configuration. Chaque membre autorisé de votre organisation les réutilise ensuite en un clic : il n'apporte plus que le contexte du jour.",
    ],
    table: {
      columns: ['Bloc RCCF', 'Prompt direct', 'GPT personnalisé'],
      rows: [
        ['Rôle', 'Retapé à chaque fois', 'Écrit une fois dans le champ Instructions'],
        ['Contexte', 'Collé à chaque fois', 'Apporté par l\'utilisateur à chaque conversation (seul bloc qui varie)'],
        ['Contraintes', 'Retapées à chaque fois', 'Écrites une fois dans le champ Instructions'],
        ['Format', 'Retapé à chaque fois', 'Écrit une fois, ou fourni par un gabarit attaché en connaissance'],
      ],
    },
  },
  {
    type: 'concept',
    title: 'Quand construire un GPT plutôt que reprompter : la règle des 3 à 4 fois par mois',
    body: "Si une même tâche RCCF revient plus de 3 à 4 fois par mois, avec un rôle et des contraintes qui ne changent pas, les 30 à 60 minutes de configuration d'un GPT sont rentabilisées dès la deuxième ou troisième utilisation. Pour une tâche ponctuelle ou qui change de nature à chaque fois, un bon prompt RCCF direct reste plus rapide.",
    table: {
      columns: ['Tâche chez Horizon Grands Lacs', 'Fréquence', 'Rôle et contraintes stables ?', 'Décision'],
      rows: [
        ['Comptes rendus de coordination hebdomadaire (3 sites)', '12 par mois', 'Oui : même gabarit, mêmes règles', 'GPT personnalisé'],
        ['Rapport d\'avancement Tremplin Jeunes', '1 tous les 2 mois', 'Oui', 'Prompt RCCF enregistré en bibliothèque'],
        ['Revue critique des rapports partenaires', '2 à 3 par trimestre', 'Oui', 'Prompt RCCF en bibliothèque, GPT à réévaluer si la fréquence augmente'],
        ['Résumé de la Stratégie pays 2026-2029', 'Une fois', 'Sans objet', 'Prompt RCCF direct'],
      ],
    },
    tip: "Exemples typiques qui justifient un GPT : relecture des rapports bailleurs selon le format de votre organisation, comptes rendus selon un gabarit fixe, analyse de CV selon une grille de critères, réponses de premier niveau sur une procédure interne (en l'attachant en connaissance).",
  },
  {
    type: 'concept',
    title: "Ce qu'un GPT personnalisé — ou un bon prompt — ne remplace pas",
    body: "Un GPT bien configuré réduit le temps de mise en forme et de cadrage. Il ne dispense jamais de relire, corriger et valider la sortie avant de l'utiliser — exactement comme pour le travail d'un collaborateur junior à qui vous auriez délégué la même tâche. Vous restez l'auteur et le responsable de ce qui part sous votre nom.",
    bullets: [
      "Chaque chiffre de la réponse doit se retrouver dans vos données : un chiffre absent de votre contexte est, par défaut, une invention.",
      "Chaque décision ou engagement attribué à quelqu'un doit avoir été réellement pris.",
      "Chaque citation d'un document doit être retrouvée dans le document, à la page indiquée.",
    ],
    pitfall: "Envoyer un texte parce qu'il « sonne professionnel » : c'est souvent la phrase la mieux tournée qui contient l'affirmation non vérifiée.",
  },
  {
    type: 'comparison-table',
    title: 'Itérer ou relancer ? Ce qui change concrètement',
    columns: ['Situation', 'Relancer un prompt complet', 'Itérer de façon ciblée'],
    rows: [
      ['Texte trop long', 'Vous réécrivez tout, la nouvelle version change aussi ce qui était bon', '« Trop long : coupe la section Contexte à 3 phrases, ne touche pas au reste. »'],
      ['Ton inadapté', 'Nouveau texte, nouveaux défauts possibles', '« Reformule sans jargon financier, pour un public non spécialiste. »'],
      ['Information inventée', 'Le risque reste le même si le contexte n\'a pas changé', '« Supprime X, absent de mes données ; n\'ajoute rien qui n\'y figure pas. »'],
      ['Coût en temps', '5 à 10 minutes', '10 secondes à 1 minute'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Trois angles pour un document long — à préciser AVANT de le coller',
    columns: ['Angle attendu', 'Ce que vous demandez', 'Exemple dans le fil rouge'],
    rows: [
      ['Résumé', 'X points maximum, classés, pour un lecteur et un temps de lecture donnés', 'Stratégie pays 2026-2029 : 10 points pour un comité qui a 10 minutes'],
      ['Analyse critique', 'Uniquement les incohérences, manques et affirmations non étayées, avec référence de section', 'Rapport T3 Kivu Eau Propre : 3 blocs de constats, page par page'],
      ['Reformulation', 'Le même contenu réécrit pour un autre public, sans rien ajouter', 'Extrait du rapport Tremplin reformulé pour une affiche destinée aux jeunes'],
      ['« Qu\'en penses-tu ? »', 'Rien de précis : le modèle choisit un angle par défaut', 'À ne jamais utiliser seul'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Prompt', definition: "Instruction écrite envoyée au modèle. Dans ce module, un prompt professionnel suit toujours la structure RCCF." },
      { term: 'RCCF', definition: "Rôle, Contexte, Contraintes, Format : structure de prompt en quatre blocs, à écrire dans cet ordre, pour obtenir un livrable exploitable dès le premier essai." },
      { term: 'Itération ciblée', definition: "Consigne de correction qui nomme précisément ce qui ne va pas et ce qui ne doit pas changer, au lieu de relancer un prompt complet." },
      { term: 'Hallucination', definition: "Information plausible mais fausse produite par le modèle (chiffre, mesure, citation, page). Elle se détecte en confrontant chaque élément à vos données ou au document source." },
      { term: 'Ancrage', definition: "Exigence faite au modèle de citer, pour chaque constat, la section, la page et la phrase exacte du document : c'est ce qui rend son analyse vérifiable." },
      { term: 'Bibliothèque de prompts', definition: "Classeur où vous enregistrez vos prompts RCCF éprouvés, par catégorie, avec date de dernière utilisation et note d'efficacité, pour ne jamais réécrire deux fois le même." },
      { term: 'GPT personnalisé (Custom GPT)', definition: "Version de ChatGPT préconfigurée avec vos instructions permanentes (Rôle + Contraintes) et, en option, des fichiers de connaissance et des actions." },
      { term: 'GPT Builder — modes « Créer » et « Configurer »', definition: "Interface de création d'un GPT. « Créer » est conversationnel et produit des instructions génériques ; « Configurer » permet d'écrire soi-même les champs : à privilégier." },
      { term: 'Fichiers de connaissance (Knowledge)', definition: "Documents (PDF, Word, Excel, texte) attachés à un GPT, qu'il consulte pour répondre : gabarit, procédure, grille, liste de sigles." },
      { term: 'Analyse de données', definition: "Fonction de ChatGPT qui exécute réellement du code sur un fichier joint pour calculer ; le détail de l'analyse montre ce qui a été lu et calculé." },
    ],
  },

  // ───────────── Procédure 1 — Construire un prompt RCCF complet ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 7',
    title: 'Formuler la demande brute, sans structure (30 secondes)',
    intro: "Avant de structurer, clarifiez l'objectif dans votre propre tête. La phrase brute n'est jamais le prompt final : elle sert de point de départ et de test. Entrée nécessaire : la demande reçue (message, courriel, consigne orale).",
    steps: [
      {
        title: 'Écrire la phrase brute',
        actions: [
          "Ouvrez un bloc-notes (ou une note vide) — pas encore ChatGPT.",
          "Écrivez en une phrase ce que vous voulez obtenir, sans vous soucier du format.",
          "Ajoutez en dessous, en trois mots chacun : pour qui ? pour quand ? pour quoi faire ?",
        ],
      },
      {
        title: 'Tester la phrase',
        actions: [
          "Relisez-la en vous demandant : « Un collègue qui ne connaît pas le projet pourrait-il produire le livrable avec ça ? »",
          "Listez tout ce qu'il vous demanderait : ce sera la matière des blocs Rôle, Contexte, Contraintes et Format.",
        ],
      },
    ],
    example: {
      title: 'Bloc-notes de Josué — vendredi 04/09/2026, 9 h 05',
      lines: [
        "Demande brute : « Je veux un rapport sur l'avancement du projet Tremplin. »",
        "Pour qui ? La chargée de programme du Fonds Espoir Jeunesse. Pour quand ? Aujourd'hui 17 h. Pour quoi faire ? Rendre compte à mi-parcours.",
        "Ce qu'un collègue demanderait : quels chiffres ? quelle longueur ? quel plan ? quel obstacle mentionner ? quelle mesure corrective ?",
      ],
    },
    result: "Une phrase brute, trois réponses (destinataire, échéance, finalité) et la liste des informations manquantes. Rien n'a encore été envoyé à ChatGPT.",
    pitfall: "Envoyer la phrase brute « pour voir ce que ça donne » : vous obtenez la réponse générique vue plus haut et perdez du temps à la corriger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 7',
    title: 'Définir le Rôle à assigner au modèle',
    intro: "Le rôle oriente le vocabulaire, la structure et les priorités du texte. Un rôle vague (« tu es un expert ») n'apporte presque rien ; un rôle précis indique la fonction, le type de livrable habituel et le destinataire.",
    steps: [
      {
        title: 'Trouver le bon professionnel',
        actions: [
          "Demandez-vous : quel professionnel, avec quelle expertise précise, produirait ce livrable si c'était un humain ?",
          "Écrivez le rôle en une phrase : « Tu es [fonction], habitué à [type de livrable] pour [type de destinataire]. »",
          "Ajoutez un niveau d'expérience seulement s'il change le résultat (ex. : « 15 ans en reporting bailleurs » pour un document sensible).",
        ],
      },
      {
        title: 'Vérifier le rôle',
        actions: [
          "Vérifiez qu'il contient une fonction ET un type de livrable ET un destinataire.",
          "Supprimez les qualificatifs creux : « meilleur », « génial », « expert mondial ».",
        ],
      },
    ],
    example: {
      title: 'Rôle de Josué — trois versions',
      lines: [
        "Trop vague : « Tu es un expert. »",
        "Mieux : « Tu es un chef de projet humanitaire. »",
        "Retenu : « Tu es un chargé de suivi-évaluation de projet, habitué à rédiger des rapports d'avancement pour des partenaires financiers institutionnels. »",
      ],
    },
    result: "Un rôle d'une phrase, avec fonction, livrable et destinataire, prêt à être placé en tête du prompt.",
    tip: "Ne confondez pas le rôle du modèle et le vôtre : Josué est chargé de programmes, mais le livrable relève du suivi-évaluation. Donnez au modèle le rôle de celui qui ferait le mieux ce livrable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 7',
    title: 'Rassembler et coller le Contexte réel',
    intro: "C'est le bloc le plus long et le plus important : plus le contexte est concret et chiffré, moins le modèle a de raisons d'inventer. Entrées nécessaires : vos tableaux de suivi, vos chiffres à date, l'identité du destinataire.",
    steps: [
      {
        title: 'Réunir les faits',
        actions: [
          "Ouvrez votre source de données (tableau de suivi des indicateurs, suivi budgétaire) — ne travaillez jamais de mémoire.",
          "Notez : le projet (objet, budget, durée, temps écoulé), le destinataire, les chiffres à date, l'obstacle principal, la mesure déjà engagée.",
          "Copiez les chiffres tels qu'ils figurent dans la source, avec leur date de référence (« au 31 août 2026 »).",
        ],
      },
      {
        title: 'Rédiger et nettoyer le bloc',
        actions: [
          "Rédigez le contexte en phrases courtes ou en liste ; une information par ligne.",
          "Remplacez toute donnée personnelle par un total ou un code (règles d'usage vues plus haut).",
          "Vérifiez chaque chiffre une seconde fois contre la source.",
        ],
      },
    ],
    example: {
      title: 'Contexte de Josué (sources : tableau de suivi Tremplin + suivi budgétaire au 31/08/2026)',
      lines: [
        "Projet Tremplin Jeunes Goma, appui à l'insertion professionnelle de jeunes diplômés, mis en œuvre par Horizon Grands Lacs, financé à hauteur de 60 000 USD par le Fonds Espoir Jeunesse, 6 mois (1er mai – 31 octobre 2026), dont 4 écoulés.",
        "Destinataire : la chargée de programme du Fonds Espoir Jeunesse.",
        "Au 31 août 2026 : 85 jeunes accompagnés sur un objectif de 100 ; 53 placés (21 en emploi, 32 en stage), soit un taux de placement de 62 %.",
        "Obstacle principal : délais administratifs de validation des conventions de stage avec 3 entreprises partenaires ; 14 jeunes en attente d'entrée en stage.",
        "Mesure engagée : réunion tripartite le 15 septembre 2026 avec les 3 entreprises pour signer un modèle de convention unique.",
        "Budget consommé : 34 800 USD, soit 58 %, pour 67 % de la durée écoulée ; écart lié aux indemnités de stage des 14 jeunes non encore versées.",
      ],
    },
    result: "Un bloc Contexte où chaque chiffre a une source et une date, sans aucune donnée nominative.",
    pitfall: "Résumer les chiffres de mémoire (« environ 80 jeunes, à peu près 60 % ») : le modèle reprend vos approximations et le bailleur, lui, a les vrais chiffres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 7',
    title: 'Fixer les Contraintes',
    intro: "Sans contraintes, le modèle choisit à votre place la longueur, le ton et ce qu'il s'autorise à ajouter. Quatre familles de contraintes couvrent presque tous les cas.",
    steps: [
      {
        title: 'Écrire une contrainte par famille',
        actions: [
          "Longueur : en mots ou en pages (« 400 mots maximum »).",
          "Ton : factuel, formel, synthétique… (« ton factuel et sobre »).",
          "À éviter explicitement : jargon non expliqué, superlatifs, formulations vagues sans chiffre.",
          "Règles propres à l'organisation ou au bailleur : terminologie imposée, éléments obligatoires, normes de présentation.",
        ],
      },
      {
        title: 'Ajouter la contrainte anti-invention',
        actions: [
          "Ajoutez systématiquement : « N'invente aucun chiffre, aucune mesure ni aucune échéance absents du contexte. »",
          "Si une information vous manque, demandez au modèle de l'indiquer entre crochets plutôt que de la compléter.",
        ],
      },
    ],
    example: {
      title: 'Contraintes de Josué',
      lines: [
        "« Rapport de 400 mots maximum. Ton factuel et sobre. Aucune formulation vague du type « le projet avance bien » sans donnée chiffrée à l'appui. Aucun superlatif marketing. »",
        "Contrainte anti-invention : Josué l'oublie dans sa première version — vous verrez à l'étape 7 ce que cela coûte.",
      ],
    },
    result: "Un bloc Contraintes de 3 à 5 phrases courtes, chacune vérifiable dans la réponse (on peut compter les mots, repérer un superlatif).",
    tip: "Écrivez des contraintes vérifiables. « Sois concis » ne se contrôle pas ; « 400 mots maximum, résumé en 3 phrases » se contrôle en dix secondes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 7',
    title: 'Préciser le Format de sortie',
    intro: "Un format donné à l'avance vous évite de restructurer à la main une réponse arrivée sous une forme inexploitable. Si le destinataire impose un plan (canevas bailleur, gabarit interne), recopiez-le tel quel.",
    steps: [
      {
        title: 'Décrire la structure exacte',
        actions: [
          "Listez les sections dans l'ordre, avec leur titre exact.",
          "Pour chaque section, précisez la longueur si elle compte (« Résumé exécutif : 3 phrases »).",
          "Indiquez la présence ou non d'un tableau, d'une liste à puces, de sous-titres.",
          "Si le texte doit être collé dans Word ou un courriel, demandez un texte sans mise en forme Markdown (pas d'astérisques ni de dièses).",
        ],
      },
    ],
    example: {
      title: 'Format de Josué',
      lines: [
        "« Structure en 4 sections avec sous-titres : Résumé exécutif (3 phrases), Résultats chiffrés à mi-parcours, Obstacle principal et mesure corrective, Prochaines étapes (2 mois restants). »",
      ],
    },
    result: "Un bloc Format qui permet de vérifier d'un coup d'œil si la réponse a la bonne structure.",
    pitfall: "Écrire « fais un rapport structuré » : le modèle choisit sa propre structure (souvent Introduction / Développement / Conclusion), qui ne correspond à aucun canevas de bailleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 7',
    title: 'Assembler les quatre blocs en un seul message et l\'envoyer',
    intro: "Rôle → Contexte → Contraintes → Format, dans cet ordre, dans un seul message. De simples retours à la ligne ou des étiquettes suffisent. Enregistrez ensuite le prompt dans votre bibliothèque (procédure 3) pour ne jamais le réécrire.",
    steps: [
      {
        title: 'Assembler',
        actions: [
          "Dans le bloc-notes, collez les quatre blocs dans l'ordre, chacun précédé de son étiquette (Rôle :, Contexte :, Contraintes :, Format :).",
          "Relisez une fois l'ensemble : aucune contradiction entre blocs (ex. : 400 mots et 6 sections détaillées).",
        ],
      },
      {
        title: 'Envoyer',
        actions: [
          "Ouvrez ChatGPT dans l'espace professionnel, cliquez sur « Nouveau chat ».",
          "Collez le message complet et envoyez-le en une seule fois.",
          "Ne relancez pas pendant la génération : attendez la réponse complète.",
        ],
      },
    ],
    example: {
      title: 'Le prompt envoyé par Josué à 9 h 20',
      lines: [
        "Rôle : Tu es un chargé de suivi-évaluation de projet, habitué à rédiger des rapports d'avancement pour des partenaires financiers institutionnels.",
        "Contexte : [le bloc de l'étape 3, collé tel quel]",
        "Contraintes : Rapport de 400 mots maximum. Ton factuel et sobre. Aucune formulation vague sans donnée chiffrée. Aucun superlatif marketing.",
        "Format : 4 sections avec sous-titres — Résumé exécutif (3 phrases), Résultats chiffrés à mi-parcours, Obstacle principal et mesure corrective, Prochaines étapes (2 mois restants).",
      ],
    },
    result: "Un seul message structuré envoyé, dans une conversation neuve dédiée à ce livrable.",
    tip: "Une conversation par livrable : si vous enchaînez le rapport Tremplin et l'analyse Kivu Eau Propre dans la même conversation, des éléments de l'un peuvent contaminer l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 7',
    title: 'Évaluer la réponse avec la grille des cinq contrôles',
    intro: "Ne jugez pas la réponse « à l'impression ». Passez-la au crible de cinq contrôles, dans l'ordre, et notez chaque écart : ce sont ces écarts qui deviendront vos consignes d'itération (procédure 2).",
    steps: [
      {
        title: 'Appliquer la grille',
        actions: [
          "Contrôle 1 — Chiffres : surlignez chaque chiffre et cochez-le dans votre contexte ; un chiffre absent est une invention.",
          "Contrôle 2 — Longueur : collez le texte dans Word, Révision > Statistiques, et comparez au maximum demandé.",
          "Contrôle 3 — Format : les sections, leur ordre, leurs titres et leurs longueurs sont-ils ceux demandés ?",
          "Contrôle 4 — Ton : repérez superlatifs et formulations vagues (« globalement », « remarquable », « encourageant »).",
          "Contrôle 5 — Ajouts : toute mesure, décision ou échéance absente du contexte est à supprimer.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Première réponse reçue par Josué', 'Verdict'],
      rows: [
        ['1 — Chiffres', '85/100, 53 placés, 62 %, 14 jeunes, 34 800 USD, 58 % : tous présents dans le contexte', 'Conforme'],
        ['2 — Longueur', '468 mots', 'Écart : + 68 mots'],
        ['3 — Format', '4 sections correctes, mais résumé exécutif de 5 phrases', 'Écart'],
        ['4 — Ton', '« des résultats remarquables dès le premier trimestre »', 'Écart'],
        ['5 — Ajouts', 'Mesure corrective : « recrutement d\'un juriste dédié aux conventions »', 'Invention'],
      ],
    },
    result: "Une liste de quatre écarts précis et localisés. La réponse est bonne à 80 % : on la corrige, on ne la jette pas.",
    pitfall: "Relancer immédiatement tout le prompt parce que « ce n'est pas ça » : vous perdez les 80 % réussis et vous obtenez de nouveaux défauts.",
  },

  // ───────────── Procédure 2 — Itérer ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: "Diagnostiquer précisément ce qui ne va pas",
    intro: "Une itération efficace commence par un diagnostic : quelle partie, quel défaut, quelle cause dans le prompt. Entrée nécessaire : la grille des cinq contrôles remplie à l'étape précédente.",
    steps: [
      {
        title: 'Pour chaque écart, répondre à trois questions',
        actions: [
          "Où ? Nommez la section ou citez la phrase exacte.",
          "Quoi ? Décrivez le défaut en une phrase mesurable (« 468 mots au lieu de 400 »).",
          "Pourquoi ? Identifiez le bloc RCCF trop faible : contrainte absente, contexte insuffisant, format imprécis.",
        ],
      },
      {
        title: 'Décider : itérer ou relancer',
        actions: [
          "Si moins de la moitié du texte est à revoir : itérez dans la même conversation.",
          "Si le texte est hors sujet (mauvais destinataire, mauvais livrable) : corrigez le prompt d'origine et relancez dans une nouvelle conversation.",
        ],
      },
    ],
    table: {
      columns: ['Écart', 'Où', 'Cause dans le prompt'],
      rows: [
        ['468 mots', 'Surtout « Résultats chiffrés » (190 mots)', 'Contrainte présente mais section non priorisée'],
        ['Résumé de 5 phrases', 'Section 1', 'Format respecté à moitié : rappel nécessaire'],
        ['« Remarquables »', 'Section 1, phrase 2', 'Contrainte « aucun superlatif » ignorée'],
        ['Juriste inventé', 'Section 3', 'Contrainte anti-invention absente'],
      ],
    },
    result: "Pour chaque écart : un emplacement, un défaut mesurable et sa cause. Décision de Josué : itérer (80 % du texte est bon).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Écrire une consigne de correction ciblée',
    intro: "Une bonne consigne d'itération dit ce qu'il faut changer, comment, et ce qu'il ne faut pas toucher. Elle tient en quelques lignes et coûte dix secondes ; elle s'écrit dans la même conversation, à la suite de la réponse.",
    steps: [
      {
        title: 'Rédiger la consigne',
        actions: [
          "Commencez par « Corrige uniquement les points suivants, sans modifier le reste : ».",
          "Numérotez une correction par écart, avec la valeur cible (nombre de mots, nombre de phrases, information exacte).",
          "Pour une invention, donnez l'information juste ET la règle générale (« n'ajoute rien qui ne figure pas dans mes données »).",
          "Envoyez, puis repassez la nouvelle réponse dans la grille des cinq contrôles.",
        ],
      },
    ],
    example: {
      title: "Consigne d'itération envoyée par Josué à 9 h 32",
      lines: [
        "« Corrige uniquement les points suivants, sans modifier le reste :",
        "1. Réduis le texte à 400 mots maximum, en raccourcissant d'abord la section Résultats chiffrés.",
        "2. Le résumé exécutif doit faire exactement 3 phrases.",
        "3. Supprime « remarquables » et tout qualificatif non chiffré.",
        "4. La mesure corrective n'est pas le recrutement d'un juriste : c'est la réunion tripartite du 15 septembre 2026 avec les 3 entreprises pour signer un modèle de convention unique. N'ajoute aucune mesure, aucun chiffre ni aucune échéance absents de mes données. »",
      ],
    },
    table: {
      columns: ['Symptôme fréquent', 'Consigne type'],
      rows: [
        ['Trop technique', '« Trop technique : simplifie pour un public non spécialiste, garde tous les chiffres. »'],
        ['Trop long', '« Coupe la section X à 3 phrases, ne touche pas aux autres. »'],
        ['Liste au lieu de tableau', '« Présente la section X en tableau à 3 colonnes : A, B, C. »'],
        ['Chiffre inventé', '« Supprime le chiffre X, absent de mes données. »'],
      ],
    },
    result: "Deuxième version reçue : 372 mots, résumé en 3 phrases, aucun superlatif, mesure corrective exacte. Les cinq contrôles sont conformes.",
    pitfall: "Écrire « c'est nul, refais » ou « améliore » : le modèle ne sait pas ce qui ne va pas et réécrit tout, y compris ce qui était juste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: 'Consolider : reporter la correction dans le prompt d\'origine',
    intro: "Chaque itération révèle une faiblesse du prompt. Si vous ne la reportez pas, vous referez la même correction la prochaine fois. C'est aussi le principe qui sert, plus loin, à améliorer un GPT personnalisé.",
    steps: [
      {
        title: 'Mettre à jour le prompt',
        actions: [
          "Pour chaque correction, identifiez le bloc RCCF où elle doit vivre (Contraintes ou Format le plus souvent).",
          "Réécrivez ce bloc en y intégrant la correction sous forme de règle générale, pas de cas particulier.",
          "Enregistrez la version corrigée dans votre bibliothèque de prompts (procédure 3), à la place de la précédente.",
        ],
      },
      {
        title: 'Finaliser le livrable',
        actions: [
          "Relisez le texte final en entier une dernière fois, comme si vous le signiez.",
          "Copiez-le dans le modèle de courriel ou de document attendu par le destinataire et envoyez-le par le canal habituel.",
        ],
      },
    ],
    example: {
      title: 'Blocs mis à jour par Josué',
      lines: [
        "Contraintes (ajout) : « N'invente aucun chiffre, aucune mesure ni aucune échéance absents du contexte. »",
        "Format (précision) : « Résumé exécutif (3 phrases exactement) ».",
        "Rapport envoyé à la chargée de programme du Fonds Espoir Jeunesse le 04/09/2026 à 11 h 15, après relecture par Furaha Bisimwa.",
      ],
    },
    result: "Un livrable envoyé avec six heures d'avance, et un prompt amélioré qui produira la bonne version du premier coup au prochain rapport.",
    tip: "Gardez la conversation tant que le livrable n'est pas validé : si le destinataire demande une précision, vous itérerez à partir de la même base.",
  },

  // ───────────── Procédure 3 — Bibliothèque de prompts ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Ouvrir le gabarit et comprendre ses deux onglets',
    intro: "Le gabarit bibliotheque-prompts-rccf-chatgpt.xlsx est votre mémoire de prompts. Avant d'y écrire, repérez sa structure : où saisir, ce qui est verrouillé par une liste, ce qui se calcule seul.",
    steps: [
      {
        title: 'Onglet « Bibliotheque prompts »',
        actions: [
          "Ouvrez le fichier et enregistrez-en une copie à votre nom (Fichier > Enregistrer sous) avant toute saisie.",
          "Repérez les en-têtes en ligne 4 : A Categorie, B Nom du prompt, C Role, D Contexte, E Contraintes, F Format, G Derniere utilisation, H Note d'efficacite (1-5).",
          "Lisez les 5 exemples entièrement rédigés des lignes 5 à 9 : rédaction, analyse, résumé, code, compte rendu.",
          "Repérez la zone de saisie : lignes 10 à 24 vides (20 lignes au total, de 5 à 24).",
        ],
      },
      {
        title: 'Onglet « Synthese par categorie »',
        actions: [
          "Cliquez sur B5 : la formule compte les prompts de la catégorie dans 'Bibliotheque prompts'!$A$5:$A$24.",
          "Cliquez sur C5 : la formule calcule la note moyenne arrondie à une décimale, ou « - » s'il n'y a aucune note.",
          "Ne modifiez aucune formule : cet onglet se met à jour seul.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Contrôle de saisie'],
      rows: [
        ['A — Categorie', 'Liste déroulante : Redaction, Analyse, Resume, Code (sans accents)'],
        ['H — Note d\'efficacite', 'Liste déroulante : 1, 2, 3, 4, 5'],
        ['G — Derniere utilisation', 'Texte au format AAAA-MM-JJ, comme les exemples (ex. 2026-08-14)'],
      ],
    },
    result: "Vous savez où saisir (lignes 10 à 24), quelles cellules sont contrôlées par une liste, et où lire la synthèse.",
    pitfall: "Taper « Rédaction » avec un accent dans la colonne A : la liste déroulante refuse la saisie (ou, si elle est contournée par un collage, la ligne n'est comptée nulle part dans la synthèse). Choisissez toujours la valeur dans la liste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Saisir un nouveau prompt, colonne par colonne',
    intro: "Une ligne de bibliothèque doit pouvoir être réutilisée par un collègue qui ne connaît pas le contexte d'origine. Vous saisissez la version consolidée du prompt (après itération), jamais le premier jet.",
    steps: [
      {
        title: 'Remplir la ligne 10',
        actions: [
          "A10 : ouvrez la liste et choisissez la catégorie.",
          "B10 : donnez un nom qui dit le livrable et le destinataire, pour le retrouver par Ctrl+F.",
          "C10, D10, E10, F10 : collez chaque bloc RCCF consolidé dans sa cellule (Ctrl+V dans la barre de formule pour garder les retours à la ligne).",
          "G10 : saisissez la date d'utilisation au format AAAA-MM-JJ.",
          "H10 : choisissez la note : 5 = bon du premier coup, 4 = une itération, 3 = plusieurs itérations, 1-2 = à retravailler.",
        ],
      },
      {
        title: 'Rendre la ligne réutilisable',
        actions: [
          "Dans D10, gardez la structure du contexte mais signalez entre crochets ce qui changera à chaque usage ([chiffres au JJ/MM], [obstacle du moment]).",
          "Accueil > Renvoyer à la ligne automatiquement sur C10:F10 pour lire les blocs en entier.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Saisie de Josué (ligne 10)'],
      rows: [
        ['A10', 'Redaction'],
        ['B10', 'Rapport d\'avancement Tremplin Jeunes - Fonds Espoir Jeunesse'],
        ['C10', 'Tu es un chargé de suivi-évaluation de projet, habitué à rédiger des rapports d\'avancement pour des partenaires financiers institutionnels.'],
        ['D10', 'Projet Tremplin Jeunes Goma, 60 000 USD, 6 mois (mai-oct. 2026), [mois écoulés]. Au [date] : [accompagnés]/100, [placés] dont [emploi]/[stage], taux [x %]. Obstacle : [..]. Mesure engagée : [..]. Budget consommé : [montant] ([x %]).'],
        ['E10', '400 mots max. Ton factuel et sobre. Aucune formulation vague sans chiffre. Aucun superlatif. N\'invente aucun chiffre, aucune mesure ni échéance absents du contexte.'],
        ['F10', '4 sections avec sous-titres : Résumé exécutif (3 phrases exactement), Résultats chiffrés, Obstacle principal et mesure corrective, Prochaines étapes.'],
        ['G10', '2026-09-04'],
        ['H10', '4 (une itération nécessaire)'],
      ],
    },
    result: "Une ligne 10 complète, avec un contexte « à trous » prêt pour le prochain rapport du projet, et une note qui dit honnêtement combien d'itérations ont été nécessaires.",
    tip: "Le gabarit n'a pas de colonne dédiée au suivi des itérations : la précision que vous avez dû ajouter s'écrit directement dans la cellule du bloc concerné (ici E10), et la note H la reflète.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Réutiliser et adapter une ligne existante',
    intro: "La bibliothèque sert surtout à ne pas repartir de zéro. Pour une nouvelle tâche, cherchez d'abord la ligne la plus proche, dupliquez-la et n'adaptez que ce qui change — le plus souvent le Contexte.",
    steps: [
      {
        title: 'Trouver et dupliquer',
        actions: [
          "Filtrez la colonne A sur la catégorie de la tâche (Données > Filtrer).",
          "Choisissez la ligne dont le Rôle et le Format sont les plus proches.",
          "Copiez-la sur la première ligne vide (ici la ligne 11), puis modifiez B, D et, si besoin, E.",
        ],
      },
      {
        title: 'Composer le prompt à envoyer',
        actions: [
          "Dans un bloc-notes, écrivez « Rôle : » puis collez la cellule C, et faites de même avec D, E et F, dans l'ordre.",
          "Remplacez chaque crochet par la donnée du jour, puis envoyez dans une conversation neuve.",
        ],
      },
    ],
    example: {
      title: 'Ligne 11 créée par Josué le 07/09/2026, à partir de la ligne 6',
      lines: [
        "A11 : Analyse — B11 : Revue critique rapport trimestriel - partenaire Kivu Eau Propre",
        "C11 : identique à C6 (analyste senior spécialisé dans la revue critique de rapports de partenaires d'exécution).",
        "D11 : « Rapport T3 (juin-août 2026, 22 pages, joint) du partenaire local Kivu Eau Propre, projet eau-hygiène de 12 mois, 180 000 USD. Le cumul de dépenses fin T2 annoncé ne correspond pas au rapport T2 (84 600 USD). »",
        "E11 : E6 + « Pour chaque point, cite la section, la page et la phrase exacte ; si tu ne trouves pas, écris « non trouvé ». »",
        "F11 : identique à F6 (3 blocs : Incohérences chiffrées, Indicateurs manquants, Affirmations non étayées).",
      ],
    },
    result: "Un nouveau prompt opérationnel en 5 minutes au lieu de 20, qui hérite des contraintes déjà éprouvées de la ligne d'origine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Tenir la bibliothèque à jour et lire la synthèse',
    intro: "Une bibliothèque qui n'est pas tenue devient un cimetière de prompts. Après chaque usage, deux cellules suffisent ; une fois par mois, l'onglet de synthèse vous dit où concentrer vos efforts.",
    steps: [
      {
        title: 'Après chaque utilisation',
        actions: [
          "Mettez à jour la colonne G (date) et, si le résultat a changé, la colonne H (note).",
          "Si vous avez dû itérer, reportez la correction dans le bloc C, D, E ou F concerné.",
        ],
      },
      {
        title: 'Une fois par mois',
        actions: [
          "Ouvrez « Synthese par categorie » et lisez le nombre de prompts et la note moyenne par catégorie.",
          "Une catégorie sous 3,5 de moyenne : relisez ses prompts et renforcez leurs contraintes.",
          "Une ligne notée 1 ou 2 depuis plus d'un mois : corrigez-la ou effacez son contenu.",
          "Ajoutez toujours vos lignes dans la zone 5 à 24 : au-delà de la ligne 24, elles ne sont plus comptées par les formules.",
        ],
      },
    ],
    table: {
      columns: ['Categorie', 'Nombre de prompts', 'Note moyenne d\'efficacite'],
      rows: [
        ['Redaction', '3 (lignes 5, 9, 10)', '4,7'],
        ['Analyse', '2 (lignes 6, 11)', '5'],
        ['Resume', '1', '4'],
        ['Code', '1', '4'],
        ['TOTAL prompts recenses', '7', '4,6'],
      ],
    },
    result: "Synthèse de Josué au 07/09/2026 (ligne 11 notée 5 après usage) : 7 prompts, moyenne 4,6. La catégorie Rédaction baisse légèrement à cause de la ligne 10 : sa correction est déjà intégrée.",
    pitfall: "Insérer des lignes sous la ligne 24 ou ajouter une nouvelle catégorie à la main : les formules de synthèse ne couvrent que A5:A24 et les quatre catégories de la liste.",
  },

  // ───────────── Procédure 4 — Analyser un rapport complexe ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Préparer le document et la conversation',
    intro: "Lundi 7 septembre 2026, Josué reçoit le rapport T3 du partenaire Kivu Eau Propre : 22 pages de narratif, une annexe Excel (indicateurs et budget) et une annexe 5 nominative. Furaha veut les points à clarifier avant l'appel du jeudi 10/09. Avant de joindre quoi que ce soit, préparez les fichiers.",
    steps: [
      {
        title: 'Contrôler les fichiers',
        actions: [
          "Ouvrez le PDF et essayez de sélectionner une phrase : si le texte ne se sélectionne pas, c'est un scan, et l'analyse sera peu fiable (demandez la version Word au partenaire).",
          "Retirez les pages nominatives (annexe 5, liste des ménages) : imprimez en PDF les seules pages 1 à 22 ou utilisez la fonction d'extraction de pages de votre lecteur PDF.",
          "Dans l'annexe Excel, vérifiez que l'onglet Budget contient bien les colonnes Ligne budgétaire, Budget alloué, Dépensé à ce jour.",
          "Ouvrez aussi le rapport T2 du même partenaire : c'est votre référence de comparaison.",
        ],
      },
      {
        title: 'Ouvrir la conversation',
        actions: [
          "Nouveau chat dans l'espace professionnel ; un seul document analysé par conversation.",
          "Cliquez sur le trombone (ou « + ») et joignez le PDF de 22 pages.",
        ],
      },
    ],
    result: "Un PDF de 22 pages au texte sélectionnable, sans donnée nominative, joint dans une conversation neuve ; l'annexe Excel et le rapport T2 sont ouverts à côté pour vérification.",
    pitfall: "Joindre le rapport complet « pour gagner du temps » : la liste des ménages bénéficiaires part chez un service externe sans aucune utilité pour l'analyse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: "Cadrer l'angle exact de l'analyse",
    intro: "Coller un rapport en demandant « qu'en penses-tu ? » laisse le modèle choisir entre résumer, critiquer, corriger ou reformuler. Ici, Furaha attend une analyse critique : vous reprenez la ligne 11 de votre bibliothèque.",
    steps: [
      {
        title: 'Composer le prompt depuis la bibliothèque',
        actions: [
          "Collez les blocs C11, D11, E11, F11 avec leurs étiquettes.",
          "Vérifiez que l'angle est explicite : signaler, pas reformuler.",
          "Ajoutez la référence de comparaison (chiffre du rapport T2) dans le Contexte.",
          "Envoyez avec le PDF déjà joint.",
        ],
      },
    ],
    example: {
      title: 'Prompt envoyé par Josué (lundi 07/09, 10 h)',
      lines: [
        "Rôle : Tu es un analyste senior spécialisé dans la revue critique de rapports de partenaires d'exécution pour une organisation bailleur.",
        "Contexte : Voici le rapport T3 (juin-août 2026, 22 pages, joint) du partenaire local Kivu Eau Propre, projet eau-hygiène de 12 mois, 180 000 USD. Selon le rapport T2, les dépenses cumulées fin T2 étaient de 84 600 USD.",
        "Contraintes : Ne pas reformuler le rapport. Signaler uniquement les incohérences, les indicateurs manquants et les affirmations non étayées par une donnée. Rester factuel, pas d'avis général. Pour chaque point, cite la section, la page et la phrase exacte ; si tu ne trouves pas, écris « non trouvé ».",
        "Format : Liste à puces en 3 blocs — Incohérences chiffrées, Indicateurs manquants, Affirmations non étayées. Une ligne par point, avec référence à la section concernée.",
      ],
    },
    result: "Un prompt d'analyse dont l'angle, la référence de comparaison et l'exigence d'ancrage sont explicites.",
    tip: "Donnez toujours au modèle le chiffre de référence qu'il ne peut pas connaître (ici le cumul du rapport T2) : sans lui, l'incohérence entre deux rapports est invisible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Lancer l\'analyse et exiger l\'ancrage de chaque constat',
    intro: "Un constat sans page ni citation est invérifiable, donc inutilisable devant un partenaire. Vous lisez la réponse comme un auditeur et vous relancez tout point non ancré.",
    steps: [
      {
        title: 'Lire la réponse',
        actions: [
          "Vérifiez que chaque point a une section, une page et une citation entre guillemets.",
          "Pour tout point sans ancrage, envoyez : « Pour le point X, donne la page et la phrase exacte, ou retire-le. »",
          "Demandez enfin : « Combien de pages as-tu analysées ? » La réponse attendue est 22.",
        ],
      },
    ],
    table: {
      columns: ['Bloc', 'Constat de ChatGPT', 'Référence citée'],
      rows: [
        ['Incohérence', 'Cumul fin T2 annoncé 81 200 USD contre 84 600 USD au rapport T2', '§ 4.1, p. 14'],
        ['Incohérence', '« Plus de 80 % des points d\'eau réhabilités » alors que le tableau indique 18 sur 24', '§ 2.2, p. 7 et tableau 2, p. 8'],
        ['Incohérence', '2 450 ménages sensibilisés annoncés ; tableau mensuel 650 + 720 + 880', '§ 2.3, p. 9 et tableau 3, p. 10'],
        ['Indicateur manquant', 'Taux de fonctionnalité des points d\'eau, prévu au cadre logique', 'Non trouvé'],
        ['Indicateur manquant', 'Nombre de comités de gestion de l\'eau formés', 'Non trouvé'],
        ['Non étayé', '« La communauté s\'est pleinement approprié les ouvrages »', '§ 3, p. 12'],
        ['Non étayé', '« Réduction notable des cas de diarrhée »', '§ 3, p. 13'],
      ],
    },
    result: "Sept constats, chacun avec sa référence, et la confirmation que les 22 pages ont été lues. Rien n'est encore transmis : l'étape suivante vérifie chaque point dans la source.",
    pitfall: "Accepter « quelques incohérences budgétaires sont à noter » sans page : vous ne pourrez ni les retrouver ni les opposer au partenaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Vérifier chaque constat dans le document source',
    intro: "ChatGPT peut mal lire un tableau, manquer une annexe ou paraphraser une citation. Chaque constat est confronté au PDF avant d'entrer dans votre note. Comptez 15 à 20 minutes pour sept points.",
    steps: [
      {
        title: 'Contrôler point par point',
        actions: [
          "Ouvrez le PDF, Ctrl+F, collez quelques mots de la citation : vérifiez qu'elle existe mot pour mot, à la page indiquée.",
          "Refaites vous-même chaque calcul cité (ex. : 650 + 720 + 880).",
          "Pour un « non trouvé », cherchez l'indicateur par mots-clés dans tout le document, annexes comprises.",
          "Classez chaque constat : Confirmé / Faux positif / À préciser.",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Vérification de Josué', 'Statut'],
      rows: [
        ['Cumul fin T2 : 81 200 contre 84 600', 'Rapport T2 p. 11 : 84 600 USD. Écart 3 400 USD', 'Confirmé'],
        ['Points d\'eau « plus de 80 % »', '18 ÷ 24 = 75 %', 'Confirmé'],
        ['2 450 ménages sensibilisés', '650 + 720 + 880 = 2 250, écart de 200', 'Confirmé'],
        ['Taux de fonctionnalité absent', 'Recherche « fonctionn » : aucune occurrence', 'Confirmé'],
        ['Comités de gestion absents', 'Annexe 3, p. 21 : « 9 comités de gestion formés sur 12 prévus »', 'Faux positif'],
        ['Appropriation communautaire', 'Aucune donnée citée à l\'appui', 'Confirmé'],
        ['Réduction des diarrhées', 'Aucune source ni chiffre de centre de santé', 'Confirmé'],
      ],
    },
    result: "Six constats confirmés, un faux positif retiré. Seuls les constats confirmés passent dans la restitution.",
    pitfall: "Transmettre l'analyse brute au partenaire : le faux positif sur les comités de gestion, déjà documentés en annexe 3, aurait décrédibilisé tout le reste de vos remarques.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: "Vérifier les chiffres de l'annexe avec l'analyse de données et une formule Excel",
    intro: "Le narratif dit « budget maîtrisé ». L'annexe Excel permet de le vérifier ligne par ligne. Vous faites calculer ChatGPT, puis vous contrôlez avec une formule obtenue grâce à la ligne 8 (catégorie Code) de votre bibliothèque.",
    steps: [
      {
        title: 'Calcul par ChatGPT (analyse de données)',
        actions: [
          "Dans la même conversation, joignez l'annexe Excel (onglet Budget).",
          "Demandez : « Calcule pour chaque ligne budgétaire le pourcentage consommé (Dépensé ÷ Alloué) et signale celles qui dépassent 90 %. Montre le tableau et le total. »",
          "Ouvrez le détail de l'analyse et vérifiez que les 4 lignes et le total ont été lus.",
        ],
      },
      {
        title: 'Contrôle par formule (prompt de la ligne 8)',
        actions: [
          "Adaptez D8 : colonne C = budget alloué, colonne D = dépensé ; besoin d'une colonne E qui affiche le pourcentage et signale le dépassement de 90 %.",
          "Précisez dans les contraintes : « Excel en français, séparateur point-virgule. »",
          "Saisissez la formule obtenue en E5, étendez jusqu'à E8, et comparez avec le tableau de ChatGPT.",
        ],
      },
    ],
    example: {
      title: 'Formule obtenue et vérifiée (Excel en français)',
      lines: [
        `E5 : =SI(C5=0;"";SI(D5/C5>0,9;TEXTE(D5/C5;"0%")&" - seuil 90% dépassé";TEXTE(D5/C5;"0%")))`,
        "Explication : affiche le pourcentage consommé ; ajoute une alerte si plus de 90 % du budget de la ligne est dépensé ; reste vide si le budget est nul.",
      ],
    },
    table: {
      columns: ['Ligne budgétaire', 'Alloué (USD)', 'Dépensé (USD)', 'Colonne E'],
      rows: [
        ['Construction de latrines', '72 000', '66 900', '93% - seuil 90% dépassé'],
        ['Réhabilitation points d\'eau', '54 000', '38 100', '71%'],
        ['Sensibilisation hygiène', '21 000', '9 800', '47%'],
        ['Personnel et fonctionnement', '33 000', '13 700', '42%'],
        ['Total', '180 000', '128 500', '71%'],
      ],
    },
    result: "ChatGPT et la formule concordent. Constat nouveau : 93 % du budget latrines est dépensé pour 96 latrines sur 120 (80 %) à 9 mois sur 12 — point à clarifier.",
    tip: "Le cumul fin T3 du partenaire (128 500 USD) part de 81 200 USD fin T2. Depuis le chiffre du rapport T2, il serait de 84 600 + 47 300 = 131 900 USD : l'écart de 3 400 USD se propage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Rédiger la restitution : note interne et questions au partenaire',
    intro: "L'analyse ne vaut que par ce qu'elle déclenche. Vous transformez les constats vérifiés en une note courte pour Furaha et en questions précises à envoyer au partenaire avant l'appel du jeudi.",
    steps: [
      {
        title: 'Faire rédiger, puis contrôler',
        actions: [
          "Dans la même conversation, collez votre tableau de constats vérifiés (sans le faux positif) et le constat budgétaire.",
          "Demandez : « Rédige 5 questions factuelles et non accusatoires au partenaire, une par constat confirmé, chacune avec la page concernée et la pièce justificative attendue. Pas plus de 2 lignes par question. »",
          "Vérifiez chaque question contre votre tableau ; supprimez toute question qui porte sur le faux positif.",
          "Rédigez vous-même la note à Furaha en 5 lignes : constats, montant en jeu, questions envoyées, date de l'appel.",
        ],
      },
    ],
    example: {
      title: 'Questions envoyées à Kivu Eau Propre le 08/09/2026',
      lines: [
        "1. Le cumul fin T2 indiqué p. 14 (81 200 USD) diffère de celui du rapport T2 (84 600 USD) : pouvez-vous fournir le rapprochement des 3 400 USD ?",
        "2. P. 7, « plus de 80 % des points d'eau réhabilités » ; le tableau p. 8 indique 18 sur 24 (75 %) : quel chiffre retenir ?",
        "3. P. 9, 2 450 ménages sensibilisés ; le tableau mensuel p. 10 totalise 2 250 : merci de préciser la source de l'écart de 200.",
        "4. Le taux de fonctionnalité des points d'eau, prévu au cadre logique, n'est pas renseigné : pouvez-vous le transmettre ?",
        "5. Le budget latrines est consommé à 93 % pour 96 latrines sur 120 : quel est le coût prévu des 24 restantes ?",
      ],
    },
    result: "Une note de 5 lignes remise à Furaha le 08/09 et 5 questions envoyées au partenaire, toutes ancrées sur une page et vérifiées. Les deux affirmations non étayées seront abordées oralement lors de l'appel.",
    pitfall: "Laisser ChatGPT formuler des accusations (« vous avez dissimulé », « erreur grave ») : un partenaire se ferme et l'appel tourne au conflit. Exigez des questions factuelles qui demandent une pièce.",
  },

  // ───────────── Procédure 5 — Résumer un document volumineux ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 3',
    title: "Faire d'abord restituer la structure du document",
    intro: "Sur un document de 45 pages, le risque principal est un résumé qui ne couvre que le début. Avant de demander le résumé, vous vérifiez que le modèle a bien lu tout le document en lui faisant restituer sa structure.",
    steps: [
      {
        title: 'Demander la structure',
        actions: [
          "Nouvelle conversation ; joignez le PDF de la Stratégie pays 2026-2029 (45 pages).",
          "Envoyez : « Avant tout résumé, donne la table des matières de ce document avec les numéros de page de chaque partie, puis, pour chaque partie, son idée principale en une phrase. »",
        ],
      },
      {
        title: 'Contrôler la structure',
        actions: [
          "Comparez avec la vraie table des matières du PDF : mêmes parties, mêmes pages.",
          "Vérifiez que la dernière partie (souvent budget ou suivi-évaluation, en fin de document) est bien présente.",
          "Si une partie manque, envoyez : « Tu as omis la partie X (p. Y à Z) : lis-la et complète. »",
        ],
      },
    ],
    example: {
      title: 'Structure restituée (extrait, contrôlée par Josué le 09/09/2026)',
      lines: [
        "1. Contexte et bilan 2022-2025 (p. 3-9) — 2. Vision et 3 axes stratégiques (p. 10-14)",
        "3. Axe 1 : Logistique humanitaire (p. 15-22) — 4. Axe 2 : Insertion des jeunes (p. 23-29) — 5. Axe 3 : Partenariats locaux (p. 30-36)",
        "6. Financement : budget cible 4,2 millions USD sur 4 ans (p. 37-41) — 7. Suivi-évaluation et risques (p. 42-45)",
        "Contrôle : 7 parties sur 7, pages conformes à la table des matières du PDF.",
      ],
    },
    result: "La certitude que le document a été lu de la page 3 à la page 45, et une carte des parties qui servira à contrôler le résumé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 3',
    title: 'Produire le résumé en 10 points pour le décideur',
    intro: "Le comité de direction du lundi 14/09 a 10 minutes pour discuter de la stratégie. Vous adaptez la ligne 7 (catégorie Resume) de votre bibliothèque et vous ajoutez l'exigence de références de pages.",
    steps: [
      {
        title: 'Composer et envoyer',
        actions: [
          "Dans la même conversation, collez les blocs C7 à F7 avec leurs étiquettes.",
          "Adaptez D7 : document, nombre de pages, destinataire, temps disponible.",
          "Ajoutez à E7 : « Indique la page source entre parenthèses à la fin de chaque point. »",
          "Envoyez et comptez : 10 points, une phrase chacun.",
        ],
      },
    ],
    example: {
      title: 'Prompt de Josué (adapté de la ligne 7)',
      lines: [
        "Rôle : Tu es un assistant de direction habitué à préparer des notes de synthèse pour un comité de direction pressé par le temps.",
        "Contexte : Document source : Stratégie pays Horizon Grands Lacs 2026-2029 (45 pages, joint). Le comité de direction dispose de 10 minutes pour en discuter le lundi 14 septembre 2026.",
        "Contraintes : 10 points maximum. Chaque point en une phrase courte. Aucun jargon institutionnel non expliqué. Ne pas ajouter d'opinion ou de recommandation non présente dans le document source. Indique la page source entre parenthèses à la fin de chaque point.",
        "Format : Liste numérotée de 10 points, classée par ordre d'importance stratégique décroissante.",
      ],
    },
    result: "Une liste de 10 points d'une phrase chacun, chacun suivi de sa page source, classés par importance.",
    tip: "Le classement « par importance stratégique » est un choix d'interprétation : relisez les trois premiers points avec la vision du document (p. 10-14) en tête et réordonnez si nécessaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 3',
    title: 'Contrôler la fidélité du résumé avant diffusion',
    intro: "Un résumé peut être faux par ce qu'il ajoute (opinion, chiffre arrondi) ou par ce qu'il oublie (risque, condition). Deux contrôles rapides couvrent les deux cas.",
    steps: [
      {
        title: 'Contrôle par échantillon',
        actions: [
          "Tirez 3 points au hasard et vérifiez-les à la page indiquée.",
          "Vérifiez tous les chiffres sans exception (montants, pourcentages, années).",
        ],
      },
      {
        title: 'Contrôle des omissions',
        actions: [
          "Envoyez : « Quels éléments importants du document ne figurent pas dans tes 10 points ? Liste-les avec leur page. »",
          "Si un élément omis change une décision (risque majeur, condition de financement), remplacez le point le moins important par celui-ci.",
          "Copiez la note finale dans le modèle de note interne et transmettez-la à Furaha.",
        ],
      },
    ],
    example: {
      title: 'Contrôles de Josué — 09/09/2026',
      lines: [
        "Échantillon (points 2, 5, 8) : conformes aux pages 12, 31 et 39.",
        "Chiffre corrigé : point 6 « environ 4 millions USD » → « 4,2 millions USD sur 4 ans (p. 37) ».",
        "Omission signalée par ChatGPT : « dépendance à deux bailleurs pour 70 % du financement (p. 43, risques) ». Elle remplace le point 10 (calendrier de communication interne).",
        "Note de 10 points transmise à Furaha le 09/09 à 16 h, cinq jours avant le comité.",
      ],
    },
    result: "Une note de 10 points fidèle, sans arrondi trompeur, qui inclut le risque principal du document, diffusable au comité.",
    pitfall: "Faire confiance à un résumé « parce qu'il cite des pages » : une page citée peut être fausse. Seul le contrôle par échantillon le prouve.",
  },

  // ───────────── Procédure 6 — GPT personnalisé ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 7',
    title: 'Valider que la tâche justifie un GPT et remplir la section 1 du guide',
    intro: "Avant d'ouvrir le GPT Builder, vous vérifiez la règle des 3 à 4 fois par mois et vous chiffrez le gain. Entrée : le gabarit guide-creation-gpt-personnalise.docx, copié et renommé à votre nom.",
    steps: [
      {
        title: 'Vérifier la règle et chiffrer',
        actions: [
          "Comptez les occurrences réelles de la tâche sur le dernier mois (agenda, dossier partagé).",
          "Vérifiez que le rôle et les contraintes sont stables d'une fois à l'autre (même gabarit, mêmes règles).",
          "Calculez le gain : (temps actuel − temps avec GPT) × fréquence mensuelle, à comparer aux 30 à 60 minutes de configuration et au temps de test.",
        ],
      },
      {
        title: 'Remplir la section 1 « Objectif du GPT »',
        actions: [
          "Tableau, colonne « Tâche à automatiser (en une phrase) » : verbe d'action + entrée + sortie.",
          "Colonne « Fréquence d'utilisation estimée (par mois) » : le nombre réel compté.",
          "Ligne « Public destinataire (qui l'utilisera dans l'organisation) » : fonctions et nombre de personnes.",
        ],
      },
    ],
    table: {
      columns: ['Champ du guide — section 1', 'Saisie de Josué (14/09/2026)'],
      rows: [
        ['Tâche à automatiser (en une phrase)', 'Transformer les notes brutes d\'une réunion de coordination hebdomadaire de site en compte rendu au format Horizon Grands Lacs (Décisions prises, Actions à suivre, Points en suspens).'],
        ['Fréquence d\'utilisation estimée (par mois)', '12 (3 sites × 4 réunions)'],
        ['Public destinataire', 'Les 3 coordinateurs de site et leurs 3 assistants (6 personnes)'],
      ],
    },
    result: "Gain chiffré : (45 − 15 min) × 12 = 360 min, soit 6 h par mois, pour environ 2 h de configuration et de tests : rentabilisé dès le premier mois. Section 1 remplie.",
    pitfall: "Construire un GPT pour une tâche ponctuelle (le résumé de la Stratégie pays, par exemple) : 45 minutes de configuration pour un usage qui ne se reproduira pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 7',
    title: 'Rédiger les instructions permanentes (section 2 du guide)',
    intro: "Les instructions sont un prompt RCCF dont le Rôle et les Contraintes sont fixés une fois pour toutes ; seul le Contexte (les notes du jour) sera apporté par l'utilisateur. Vous les rédigez d'abord dans le guide, pas directement dans l'outil.",
    steps: [
      {
        title: 'Partir de la bibliothèque',
        actions: [
          "Reprenez la ligne 9 (Compte-rendu de réunion structuré) : Rôle C9, Contraintes E9, Format F9.",
          "Adaptez-les à votre organisation : noms des sections du gabarit maison, règles internes.",
        ],
      },
      {
        title: 'Rédiger dans la section 2',
        actions: [
          "Écrivez quatre blocs titrés : RÔLE, CE QUE L'UTILISATEUR T'APPORTE, CONTRAINTES, FORMAT DE SORTIE.",
          "Ajoutez la règle de comportement quand une information manque : demander, ne jamais compléter.",
          "Relisez : chaque phrase doit être vraie pour TOUTES les réunions des 3 sites.",
        ],
      },
    ],
    example: {
      title: 'Section 2 — instructions rédigées par Josué (version 1)',
      lines: [
        "RÔLE : Tu es l'assistant de projet d'Horizon Grands Lacs chargé de produire des comptes rendus de réunion de coordination exploitables sans relecture lourde.",
        "CE QUE L'UTILISATEUR T'APPORTE : le site, la date, la liste des participants et les notes brutes de la réunion.",
        "CONTRAINTES : N'invente aucune décision qui n'apparaît pas explicitement dans les notes. Signale les points laissés en suspens. Ton neutre, pas de reformulation éditoriale. Respecte le gabarit joint en connaissance.",
        "FORMAT DE SORTIE : En-tête (site, date, participants), puis 3 sections : Décisions prises ; Actions à suivre (tableau Action / Responsable / Échéance) ; Points en suspens.",
        "SI UNE INFORMATION MANQUE (site, date, participants) : demande-la avant de rédiger.",
      ],
    },
    result: "Des instructions permanentes complètes, rédigées et relues dans la section 2 du guide, prêtes à être collées dans le GPT Builder.",
    tip: "Écrivez les instructions comme pour un nouveau collègue qui ne connaît pas l'organisation : tout ce qui est « évident » pour vous (sigles, noms de sites, gabarit) doit être dit ou attaché.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 7',
    title: 'Créer le GPT dans le GPT Builder, mode « Configurer »',
    intro: "Vous ouvrez l'interface de création et vous remplissez les champs vous-même. Les libellés peuvent varier légèrement selon la version de ChatGPT ; la logique reste la même.",
    steps: [
      {
        title: 'Ouvrir le GPT Builder',
        actions: [
          "Dans ChatGPT (espace professionnel), cliquez sur « Explorer les GPT », puis sur « Créer ».",
          "Ignorez la conversation de l'onglet « Créer » et cliquez sur l'onglet « Configurer ».",
        ],
      },
      {
        title: 'Remplir les champs',
        actions: [
          "Nom : court et explicite.",
          "Description : une phrase qui dit ce que le GPT fait et pour qui.",
          "Instructions : collez la section 2 du guide, telle quelle.",
          "Amorces de conversation : 2 ou 3 phrases d'exemple qui montrent à l'utilisateur quoi coller.",
          "Fonctionnalités : décochez ce qui est inutile à la tâche (recherche web, génération d'images).",
          "Testez dans le panneau « Aperçu » à droite avant d'enregistrer.",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Saisie de Josué'],
      rows: [
        ['Nom', 'CR Coordination HGL'],
        ['Description', 'Transforme les notes brutes d\'une réunion de coordination de site en compte rendu au format Horizon Grands Lacs.'],
        ['Instructions', 'Section 2 du guide, version 1'],
        ['Amorces de conversation', '« Voici mes notes de la réunion de coordination de Goma du … » / « Compte rendu de Bukavu, participants : … »'],
        ['Fonctionnalités', 'Recherche web et génération d\'images désactivées'],
      ],
    },
    result: "Un GPT « CR Coordination HGL » configuré, encore privé, qui répond dans le panneau Aperçu.",
    pitfall: "Rester dans l'onglet « Créer » et laisser l'outil rédiger les instructions : il produit des instructions correctes mais génériques, sans vos règles ni vos sections, qu'il faudra de toute façon réécrire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 7',
    title: 'Attacher les fichiers de connaissance (section 3 du guide)',
    intro: "Les fichiers de connaissance transforment vos documents de référence en règle systématique : le GPT les consulte à chaque réponse, sans que l'utilisateur ait à les joindre. Chaque fichier doit avoir une version et un responsable de mise à jour.",
    steps: [
      {
        title: 'Choisir et préparer les fichiers',
        actions: [
          "Retenez uniquement les documents de référence stables utiles à la tâche : gabarit, liste de sigles, procédure.",
          "Vérifiez que chaque fichier porte sa version dans son nom ou en en-tête.",
          "Vérifiez qu'aucun ne contient de donnée que tous les utilisateurs du GPT ne sont pas autorisés à lire.",
        ],
      },
      {
        title: 'Attacher et documenter',
        actions: [
          "Onglet « Configurer » > Connaissances > « Charger des fichiers » : ajoutez chaque fichier.",
          "Dans les Instructions, nommez chaque fichier et son usage (« utilise exclusivement la liste des sigles du fichier… »).",
          "Remplissez le tableau de la section 3 : Document, Version / dernière MAJ, Responsable de la mise à jour.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Version / dernière MAJ', 'Responsable de la mise à jour'],
      rows: [
        ['Gabarit_CR_coordination_HGL.docx', 'v3 — 01/09/2026', 'Josué Kambale, chargé de programmes'],
        ['Sigles_et_noms_sites_HGL.xlsx', 'v2 — 15/08/2026', 'Amani Kahindo, chargée administrative et logistique'],
        ['Procedure_suivi_des_actions_HGL.pdf', 'v1 — 10/06/2026', 'Furaha Bisimwa, directrice pays'],
      ],
    },
    result: "Trois fichiers attachés, cités nommément dans les instructions, et la section 3 du guide remplie avec un responsable par document.",
    pitfall: "Attacher un dossier entier « au cas où » : le GPT puise dans des documents périmés ou contradictoires, et personne ne sait lequel mettre à jour.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 7',
    title: 'Tester avec au moins 3 cas réels (section 4 du guide)',
    intro: "Un GPT qui fonctionne sur un cas d'école échoue souvent sur la complexité d'un cas de terrain. Vous le testez avec de vraies notes passées, dont vous connaissez déjà le bon compte rendu.",
    steps: [
      {
        title: 'Préparer les cas',
        actions: [
          "Choisissez 3 à 5 notes réelles récentes, variées : un site différent, des notes désordonnées, une réunion sans décision claire.",
          "Pour chacune, écrivez le résultat attendu à partir du compte rendu validé à l'époque.",
        ],
      },
      {
        title: 'Exécuter et consigner',
        actions: [
          "Dans le panneau Aperçu, collez les notes du cas 1, comparez la sortie avec le résultat attendu.",
          "Remplissez la ligne du tableau de la section 4 : #, Cas de test (entrée réelle), Résultat attendu, Résultat obtenu.",
          "Répétez pour chaque cas sans modifier les instructions entre deux tests.",
        ],
      },
    ],
    table: {
      columns: ['#', 'Cas de test (entrée réelle)', 'Résultat attendu', 'Résultat obtenu'],
      rows: [
        ['1', 'Notes Goma du 24/08, 6 participants, 3 sujets', '4 décisions, 6 actions avec responsable, 2 points en suspens', '4 décisions, 6 actions, mais une action attribuée à « l\'équipe »'],
        ['2', 'Notes Bukavu du 26/08, nombreuses abréviations', 'Sigles développés selon la liste HGL', '« PDM » développé en « plan de développement municipal » au lieu de « post-distribution monitoring »'],
        ['3', 'Notes Kinshasa du 27/08, débat sans conclusion', 'Aucune décision ; 3 points en suspens', '« On pourrait envisager un 2e camion » classé en décision'],
      ],
    },
    result: "Trois cas réels testés et consignés : le GPT est fiable sur la structure, mais trois écarts précis sont identifiés.",
    tip: "Le cas 3 (débat sans conclusion) est le plus utile : c'est là qu'un GPT invente des décisions. Incluez toujours un cas « piège » de ce type.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 7',
    title: "Itérer sur les instructions à partir des échecs (section 5 du guide)",
    intro: "Chaque échec de test signale une contrainte ou une précision manquante dans les instructions, pas une défaillance de l'outil. Vous ajoutez la règle générale, puis vous rejouez le même cas.",
    steps: [
      {
        title: 'Corriger les instructions',
        actions: [
          "Pour chaque écart, écrivez une règle générale qui l'aurait évité.",
          "Ajoutez-la dans le champ Instructions (onglet « Configurer »), puis cliquez sur « Mettre à jour ».",
          "Consignez-la dans le Journal d'itération : Date, Précision ajoutée aux instructions, Déclenchée par (test / retour utilisateur).",
        ],
      },
      {
        title: 'Retester',
        actions: [
          "Rejouez le cas qui a échoué, puis les deux autres : une correction peut en dégrader une autre.",
          "Mettez à jour la colonne « Résultat obtenu » de la section 4.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Précision ajoutée aux instructions', 'Déclenchée par'],
      rows: [
        ['15/09/2026', 'Si aucun responsable n\'est nommé, écris « Responsable : à désigner » ; n\'attribue jamais une action à « l\'équipe ».', 'Test 1'],
        ['15/09/2026', 'Développe les sigles uniquement à partir du fichier Sigles_et_noms_sites_HGL.xlsx ; un sigle absent reste tel quel et est signalé en Points en suspens.', 'Test 2'],
        ['15/09/2026', 'Une formulation conditionnelle (« on pourrait », « il faudrait », « à voir ») n\'est jamais une décision : classe-la en Points en suspens.', 'Test 3'],
      ],
    },
    result: "Après la version 2 des instructions, les 3 cas rejoués le 16/09 sont conformes au résultat attendu.",
    pitfall: "Corriger la sortie à la main dans l'Aperçu au lieu de corriger les instructions : le test « passe », mais le défaut reviendra chez chaque utilisateur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 7 sur 7',
    title: 'Faire valider, diffuser et fixer la règle de mise à jour (section 6 du guide)',
    intro: "Un GPT diffusé devient un outil d'équipe : il doit être validé, partagé aux bonnes personnes seulement, et maintenu. Un GPT connecté à un document obsolète produit des réponses obsolètes avec la même assurance.",
    steps: [
      {
        title: 'Valider et partager',
        actions: [
          "Faites relire le guide complété et un compte rendu de test par votre responsable.",
          "Cliquez sur « Créer » (ou « Mettre à jour ») en haut à droite, puis choisissez la visibilité : limitez-la à votre espace de travail ou aux personnes disposant du lien, jamais au public.",
          "Envoyez le lien aux utilisateurs avec trois lignes de mode d'emploi : quoi coller, quoi vérifier, à qui signaler un problème.",
        ],
      },
      {
        title: 'Fixer la maintenance',
        actions: [
          "Section 6 : remplissez « Validé par (nom, fonction) » et « Date de diffusion à l'équipe ».",
          "Convenez avec chaque responsable de la section 3 : tout changement de son document = remplacement du fichier dans le GPT le jour même.",
          "Planifiez une revue trimestrielle : retours des utilisateurs, nouveaux cas de test, Journal d'itération à jour.",
        ],
      },
    ],
    example: {
      title: 'Section 6 et diffusion — fil rouge',
      lines: [
        "Validé par : Furaha Bisimwa, directrice pays — Date de diffusion à l'équipe : 21/09/2026.",
        "Visibilité : membres de l'espace de travail Horizon Grands Lacs disposant du lien ; lien envoyé aux 6 utilisateurs.",
        "Mode d'emploi : « Collez site, date, participants et notes. Vérifiez chaque décision et chaque responsable avant diffusion. Problème : écrivez à Josué. »",
        "Revue trimestrielle fixée au 21/12/2026.",
      ],
    },
    result: "Un GPT diffusé à 6 personnes, validé par la directrice pays, avec un guide complet des sections 1 à 6 et un responsable pour chaque fichier de connaissance.",
    tip: "Rappelez dans le mode d'emploi que le compte rendu produit reste un brouillon à relire : le GPT réduit le temps de mise en forme, il ne valide rien à la place du coordinateur.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du prompt vague au prompt RCCF consolidé',
    scenario: "Rappel : vendredi 4 septembre 2026, 9 h. Furaha Bisimwa demande à Josué le rapport d'avancement à mi-parcours du projet Tremplin Jeunes Goma pour le Fonds Espoir Jeunesse, avant 17 h. Voici le raisonnement complet, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Prompt vague', body: "« Aide-moi à écrire un rapport sur notre projet. » → texte générique (« le projet avance globalement bien »), aucun chiffre, inutilisable." },
      { title: 'Rôle', body: "Chargé de suivi-évaluation habitué aux rapports d'avancement pour partenaires financiers institutionnels." },
      { title: 'Contexte', body: "60 000 USD, 6 mois dont 4 écoulés ; 85/100 jeunes accompagnés ; 53 placés (21 emploi, 32 stage), taux 62 % ; 3 conventions bloquées, 14 jeunes en attente ; réunion tripartite le 15/09 ; budget 34 800 USD (58 %)." },
      { title: 'Contraintes et format', body: "400 mots maximum, ton factuel, aucune formulation vague sans chiffre, aucun superlatif ; 4 sections : Résumé exécutif (3 phrases), Résultats chiffrés, Obstacle et mesure corrective, Prochaines étapes." },
      { title: 'Évaluation et itération', body: "Première réponse : 468 mots, résumé de 5 phrases, « remarquables », juriste inventé. Une consigne ciblée en 4 points.", result: 'Deuxième réponse : 372 mots, 5 contrôles conformes.' },
      { title: 'Capitalisation', body: "Contrainte anti-invention et « 3 phrases exactement » ajoutées ; ligne 10 de la bibliothèque créée, note 4." },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Le rapport envoyé au Fonds Espoir Jeunesse',
    scenario: "Voici le texte final, relu par Furaha Bisimwa et envoyé le 04/09/2026 à 11 h 15. Chaque chiffre se retrouve dans le contexte fourni ; aucune mesure n'a été ajoutée par le modèle.",
    steps: [
      { title: 'Résumé exécutif', body: "À l'issue de 4 mois sur 6, le projet Tremplin Jeunes Goma a accompagné 85 jeunes diplômés sur un objectif de 100 et en a placé 53 en emploi ou en stage, soit un taux de placement de 62 %. Le principal obstacle est le retard de validation des conventions de stage avec 3 entreprises partenaires, qui bloque l'entrée en stage de 14 jeunes. Le budget est consommé à 58 % (34 800 USD sur 60 000 USD) pour 67 % de la durée écoulée, en raison des indemnités de stage de ces 14 jeunes non encore versées." },
      { title: 'Résultats chiffrés à mi-parcours', body: "Jeunes accompagnés : 85 sur 100 (85 %). Jeunes placés : 53, dont 21 en emploi et 32 en stage (taux de placement : 62 %). Jeunes en attente d'entrée en stage : 14. Budget consommé : 34 800 USD sur 60 000 USD (58 %)." },
      { title: 'Obstacle principal et mesure corrective', body: "La validation administrative des conventions de stage avec 3 entreprises partenaires est en retard. Une réunion tripartite est fixée au 15 septembre 2026 avec ces 3 entreprises pour signer un modèle de convention unique." },
      { title: 'Prochaines étapes (septembre-octobre 2026)', body: "Accompagner les 15 jeunes restants pour atteindre l'objectif de 100 ; faire entrer en stage les 14 jeunes en attente dès la signature des conventions et verser les indemnités correspondantes ; présenter les résultats consolidés dans le rapport final à la clôture du 31 octobre 2026." },
    ],
    tip: "Comparez ce texte au prompt vague de départ : même modèle, même outil, même personne. Seule l'instruction a changé.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le guide de création du GPT « CR Coordination HGL »',
    scenario: "La tâche des comptes rendus revient 12 fois par mois avec un rôle et des contraintes stables : elle justifie un GPT. Voici le guide-creation-gpt-personnalise.docx tel que Josué l'a remis le 21/09/2026.",
    steps: [
      { title: '1. Objectif du GPT', body: "Tâche : transformer les notes brutes d'une réunion de coordination hebdomadaire de site en compte rendu au format HGL. Fréquence : 12 par mois. Public : 3 coordinateurs de site et leurs 3 assistants." },
      { title: '2. Instructions permanentes', body: "Rôle d'assistant de projet HGL ; l'utilisateur apporte site, date, participants, notes ; aucune décision inventée ; points en suspens signalés ; ton neutre ; 3 sections (Décisions, Actions avec responsable et échéance, Points en suspens) ; demander toute information manquante." },
      { title: '3. Fichiers de connaissance', body: "Gabarit CR v3 (Josué Kambale) ; Sigles et noms des sites v2 (Amani Kahindo) ; Procédure de suivi des actions v1 (Furaha Bisimwa)." },
      { title: '4. Cas de test', body: "Goma 24/08, Bukavu 26/08, Kinshasa 27/08 : trois écarts à la version 1 (action attribuée à « l'équipe », sigle mal développé, décision inventée), tous conformes en version 2." },
      { title: "5. Journal d'itération", body: "15/09/2026 : trois précisions ajoutées (responsable « à désigner », sigles uniquement depuis la liste, conditionnel jamais classé en décision), chacune déclenchée par un test." },
      { title: '6. Validation et diffusion', body: "Validé par Furaha Bisimwa, directrice pays ; diffusé à l'équipe le 21/09/2026 ; revue trimestrielle le 21/12/2026." },
    ],
    result: "Un mois plus tard : 12 comptes rendus produits en 15 minutes au lieu de 45, soit 6 heures rendues à l'équipe ; un seul signalement utilisateur, ajouté au Journal d'itération.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Reconstruction RCCF et décision GPT personnalisé',
    instructions: "Choisissez une tâche de rédaction ou d'analyse réelle et récurrente dans votre propre travail (rapport, compte rendu, note de synthèse, description de poste…). Vous allez la faire passer du prompt vague au prompt RCCF, l'enregistrer dans la bibliothèque, puis décider si elle mérite un GPT personnalisé.",
    steps: [
      {
        title: 'Reconstruction RCCF',
        actions: [
          "Écrivez le prompt vague que vous auriez tapé par réflexe, et gardez sa réponse.",
          "Reconstruisez-le en RCCF (procédure 1), avec un contexte réel et chiffré — pas de crochets vides.",
          "Saisissez-le sur une nouvelle ligne du gabarit bibliotheque-prompts-rccf-chatgpt.xlsx (lignes 10 à 24), colonnes A à H.",
        ],
      },
      {
        title: 'Test et itération',
        actions: [
          "Soumettez le prompt RCCF et passez la réponse dans la grille des cinq contrôles.",
          "Si elle n'est pas exploitable, itérez de façon ciblée (procédure 2), sans repartir d'un prompt entièrement nouveau.",
          "Reportez la précision ajoutée dans la cellule du bloc concerné et attribuez la note d'efficacité.",
        ],
      },
      {
        title: 'Décision GPT personnalisé',
        actions: [
          "Appliquez la règle : au moins 3 à 4 fois par mois, rôle et contraintes stables ; chiffrez le gain mensuel.",
          "Si oui, complétez guide-creation-gpt-personnalise.docx : objectif, instructions, fichiers de connaissance et au moins 3 cas de test réels.",
          "Si non, écrivez en deux lignes pourquoi le prompt en bibliothèque suffit.",
        ],
      },
    ],
    deliverable: "La ligne complétée dans la bibliothèque de prompts (avec les deux réponses, avant et après), et — si applicable — le guide de création de GPT rempli.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Analyse critique d'un document de votre travail",
    instructions: "Prenez un rapport réel de 10 pages ou plus (rapport partenaire, audit, évaluation, rapport mensuel) dans le respect des règles d'usage de votre organisation, et appliquez la procédure 4 de bout en bout.",
    steps: [
      {
        title: 'Préparer et cadrer',
        actions: [
          "Retirez toute page nominative ; vérifiez que le texte est sélectionnable.",
          "Adaptez la ligne 6 de la bibliothèque (Analyse) avec un contexte réel et au moins un chiffre de référence externe.",
          "Exigez l'ancrage : section, page et phrase exacte pour chaque point.",
        ],
      },
      {
        title: 'Vérifier et restituer',
        actions: [
          "Vérifiez chaque constat dans le document et classez-le : Confirmé / Faux positif / À préciser.",
          "Si le document a un tableau chiffré, faites calculer ChatGPT et contrôlez par une formule Excel.",
          "Rédigez 3 à 5 questions factuelles au rédacteur du document, chacune avec sa page.",
        ],
      },
    ],
    tip: "Points de contrôle du fil rouge : sur sept constats, Josué en a confirmé six et écarté un faux positif. Si vous n'avez trouvé aucun faux positif, vérifiez que vous avez bien cherché dans les annexes.",
    deliverable: "Le tableau des constats vérifiés (avec statut et page) et la liste des questions prêtes à envoyer.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre prompt vague et votre prompt RCCF sont tous deux conservés, avec leurs réponses, pour montrer la différence.",
      "Votre Rôle nomme une fonction, un type de livrable et un destinataire.",
      "Votre Contexte contient de vraies données chiffrées et datées, sans aucune donnée nominative.",
      "Vos Contraintes sont vérifiables (longueur chiffrée, éléments interdits) et incluent la règle anti-invention.",
      "Votre Format liste les sections dans l'ordre, avec leur titre exact.",
      "Votre ligne de bibliothèque utilise une catégorie de la liste déroulante, une date AAAA-MM-JJ, une note de 1 à 5, et se trouve entre les lignes 5 et 24.",
      "Votre itération, s'il y en a eu une, nomme précisément ce qui change et ce qui ne change pas, et a été reportée dans le bloc concerné.",
      "Votre décision GPT est justifiée par une fréquence comptée et un gain chiffré.",
      "Si vous avez rempli le guide : les sections 1 à 6 sont complètes, avec au moins 3 cas de test réels et un responsable par fichier de connaissance.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Prompt vague sans rôle ni format : réponse générique, correcte grammaticalement mais inutilisable, qui demande presque autant de réécriture qu'une page blanche. Écrivez les quatre blocs RCCF avant d'envoyer.",
      "Copier-coller un document entier en demandant « qu'en penses-tu ? » : le modèle choisit un angle par défaut. Précisez toujours l'angle : résumé en X points, analyse critique, reformulation pour tel public.",
      "Ne jamais itérer : accepter le premier résultat « parce qu'il vaut ce qu'il vaut ». Une itération ciblée coûte dix secondes ; recommencer à zéro coûte bien plus cher.",
      "Oublier la contrainte anti-invention : le modèle comble les vides avec des mesures, chiffres ou échéances plausibles mais fausses.",
      "Accepter une analyse sans page ni citation, puis la transmettre sans vérification : un seul faux positif décrédibilise toutes vos remarques.",
      "Coller des listes nominatives de bénéficiaires ou travailler depuis un compte personnel : c'est une fuite de données, même si le résultat est juste.",
      "Saisir « Rédaction » avec accent ou écrire sous la ligne 24 de la bibliothèque : la ligne échappe à la synthèse par catégorie.",
      "Construire un GPT pour une tâche ponctuelle : 45 minutes de configuration pour un usage qui ne se reproduira jamais.",
      "Configurer un GPT en mode « Créer » et le diffuser sans tests réels : il échoue sur le premier cas de terrain un peu désordonné.",
      "Laisser un GPT connecté à un document de connaissance obsolète : il produit des réponses obsolètes avec la même assurance, sans aucun signal d'alerte. Nommez un responsable par fichier.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez transformé une demande vague en prompt RCCF complet et obtenu un rapport bailleur de 372 mots, chiffré, au format exigé.",
      "Vous avez évalué une réponse avec la grille des cinq contrôles et l'avez corrigée par une itération ciblée en quatre points, sans repartir de zéro.",
      "Vous avez enrichi votre bibliothèque de prompts RCCF de lignes réutilisables, notées, et lu la synthèse par catégorie.",
      "Vous avez analysé un rapport partenaire de 22 pages : six constats confirmés et ancrés sur une page, un faux positif écarté, l'annexe budgétaire vérifiée par formule, cinq questions envoyées.",
      "Vous avez résumé un document de 45 pages en 10 points fidèles, après contrôle de la structure, d'un échantillon et des omissions.",
      "Vous avez créé, testé sur 3 cas réels, corrigé et diffusé un GPT personnalisé, avec son guide de création complet des sections 1 à 6.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi un prompt vague produit systématiquement une réponse générique, avec l'exemple de la délégation à un junior sans consignes.",
      "Je sais construire un prompt complet selon les 4 blocs Rôle, Contexte, Contraintes, Format, dans cet ordre.",
      "Je sais reconnaître, dans mon propre travail, une tâche qui justifie un GPT personnalisé plutôt qu'un reprompting répété.",
      "J'ai créé au moins un GPT personnalisé avec des instructions RCCF permanentes et l'ai testé sur des cas réels.",
      "Je sais préciser explicitement ce que j'attends en retour avant de coller un document long à ChatGPT.",
      "Je sais exiger et vérifier l'ancrage (section, page, citation) de chaque constat d'une analyse.",
      "Je sais itérer sur une réponse insatisfaisante en ciblant précisément le correctif, sans repartir de zéro.",
      "J'ai complété ma première ligne de bibliothèque de prompts RCCF avec le gabarit fourni.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite ». Vous y appliquerez la même exigence — demande structurée, réponse ancrée dans la source, vérification humaine — à l'analyse de documents de plus de 100 pages et à la rédaction de rapports bailleurs, d'audits et de procédures.",
  },
]
