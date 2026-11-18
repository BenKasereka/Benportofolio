// Module 15 — Atelier Pratique — Mini-projet certifiant par domaine (module final)
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (choix d'un problème réel, brief en sept sections, dimensionnement
// du périmètre, tests à petite échelle, version 1, point d'étape, finalisation
// et grille d'auto-évaluation, présentation à la revue finale) est détaillée
// étape par étape et appliquée au même fil rouge : le mini-projet d'Amani
// Kahindo, qui transforme la consolidation mensuelle des exports de commandes
// fournisseurs d'Horizon Grands Lacs en un classeur qui se met à jour en moins
// de 30 minutes. Organisation et personnes fictives ; chiffres d'exemple
// recalculés et cohérents d'une diapositive à l'autre.
export default [
  {
    type: 'cover',
    title: 'Atelier Pratique — Mini-projet certifiant par domaine',
    hook: "À la fin de ce module, vous aurez mené de bout en bout votre propre mini-projet IA : un brief cadré avant de produire, un livrable que vous pouvez ouvrir et utiliser lundi matin, une note qui documente chaque prompt, une grille d'auto-évaluation honnête et une présentation en cinq points prête pour la revue individuelle avec le formateur expert — dernière étape avant votre attestation de compétences IA.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Choisir un problème réel de votre poste et le formuler en une phrase chiffrée (fréquence, temps perdu, conséquence), en produisant une fiche « problème retenu » notée sur quatre critères.",
      "Remplir les sept sections du gabarit de brief avant toute production, en produisant un brief d'une page avec des critères de succès vérifiables, une date de livraison et une date de point d'étape.",
      "Dimensionner le périmètre au temps réellement disponible, en produisant un plan chiffré (heures estimées + 25 % de marge) et une liste « hors périmètre ».",
      "Tester au moins deux outils IA de la formation sur un échantillon réduit et affecter chaque étape à l'outil le mieux placé, en produisant un tableau de test et un carnet de prompts.",
      "Produire une version 1 complète et directement utilisable de votre livrable, en produisant le livrable lui-même et une note de documentation de 10 à 15 lignes qu'un collègue peut suivre seul.",
      "Solliciter, trier et intégrer un retour au point d'étape intermédiaire, en produisant un tableau de retours et un plan de finalisation daté.",
      "Vous auto-évaluer honnêtement avec la grille d'évaluation et structurer votre présentation en cinq points, en produisant la grille remplie et le support de la revue individuelle avec le formateur expert.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne présente aucun nouvel outil : il vous fait combiner ceux des quatorze modules précédents sur un problème réel de votre métier, jusqu'à un livrable fini. Chaque procédure est découpée en étapes numérotées, avec les champs exacts des deux gabarits à remplir, les prompts à copier, les calculs à faire et le résultat attendu sur un cas suivi du début à la fin.",
      "L'exercice noté se compose de trois livrables officiels, remis dans cet ordre, auxquels s'ajoute votre présence au point d'étape intermédiaire. Les autres documents du module sont vos documents de travail : ils vous conduisent aux trois livrables et prouvent la rigueur de votre démarche.",
    ],
    bullets: [
      "Livrable 1 — Le brief cadré : gabarit-brief-mini-projet-ia-par-secteur.docx, sept sections remplies avant toute production.",
      "Livrable 2 — Le livrable final (document, tableau de bord, bibliothèque de prompts ou automatisation), directement utilisable, accompagné d'une note de 10 à 15 lignes documentant les prompts et les étapes clés.",
      "Livrable 3 — La grille d'auto-évaluation : grille-evaluation-livrable-mini-projet.xlsx, cinq critères notés de 1 à 5, remplie honnêtement avant la revue finale.",
      "Documents de travail : fiche « problème retenu », plan de dimensionnement avec liste « hors périmètre », tableau de test des outils, carnet de prompts, tableau de retours du point d'étape, support de présentation en cinq points.",
    ],
    tip: "Gardez sous la main les deux fichiers du dossier 04-templates : le brief .docx et la grille .xlsx. Les procédures 2 et 7 les parcourent champ par champ, et vous pouvez les remplir à l'écran en même temps que vous lisez.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : le mini-projet d\'Amani Kahindo chez Horizon Grands Lacs',
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Amani Kahindo, chargée administrative et logistique à Goma, a suivi la formation depuis janvier. Elle consolide chaque mois les trois exports « commandes fournisseurs » pour calculer le taux de livraison dans les délais. Le travail lui prend 3 h 30 ; le chiffre d'octobre est arrivé le vendredi 13 novembre 2026, une semaine après le point logistique du vendredi 6 novembre.",
      "C'est son mini-projet : transformer ce travail manuel en classeur qui se met à jour en moins de 30 minutes. Tout au long du module, vous la suivez de la première liste d'irritants à la revue finale. Patrick Mumbere, responsable achats, est le destinataire du livrable ; Josué Bahati, comptable, testera la reproductibilité ; Furaha Bisimwa, directrice pays, et Samuel Baraka, directeur des opérations, reçoivent le chiffre au point logistique.",
    ],
    table: {
      columns: ['Date', 'Jalon du calendrier d\'Amani', 'Ce qui est produit'],
      rows: [
        ['Lun. 23/11/2026', 'Début : brief rempli et dimensionné', 'Brief cadré'],
        ['24 → 27/11', 'Tests à petite échelle', 'Tableau de test des outils'],
        ['30/11 → 3/12', 'Version 1 complète', 'Classeur V1 et carnet de prompts'],
        ['Ven. 4/12/2026', 'Point d\'étape intermédiaire (20 min, visioconférence)', 'Tableau de retours'],
        ['7 → 11/12', 'Finalisation et note de documentation', 'Classeur final, note de 10 à 15 lignes'],
        ['14 → 18/12', 'Test par un collègue, auto-évaluation, présentation', 'Grille remplie ; dossier remis le 18/12'],
        ['Mar. 22/12/2026', 'Revue individuelle avec le formateur expert (date d\'exemple)', 'Présentation en cinq points'],
      ],
    },
    highlight: "Votre projet sera différent : votre métier, vos outils, vos dates. Le fil rouge sert à montrer chaque champ rempli avec de vrais chiffres, pas à vous imposer un sujet.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 8 procédures, dans l\'ordre où vous les exécuterez',
    body: "Les huit procédures reprennent les huit étapes du guide pratique du module. Chacune produit un livrable de travail qui alimente la suivante : un brief rempli sans problème réel derrière lui, ou un livrable produit sans critère de succès, ne se rattrape pas à la revue finale.",
    bullets: [
      "Procédure 1 — Choisir un problème réel, pas un thème (4 étapes) : inventaire des irritants, test des quatre critères, phrase chiffrée, valeur de départ.",
      "Procédure 2 — Remplir le brief avant de produire (7 étapes) : une étape par section du gabarit, de « Secteur et contexte » à « Point d'étape ».",
      "Procédure 3 — Dimensionner le périmètre au temps disponible (3 étapes) : chiffrer, comparer, couper.",
      "Procédure 4 — Tester les outils à petite échelle (5 étapes) : échantillon, essai de chaque outil, décision.",
      "Procédure 5 — Produire la version 1 complète (7 étapes) : de l'organisation du dossier au chronométrage de la mise à jour.",
      "Procédure 6 — Obtenir et intégrer le point d'étape (4 étapes).",
      "Procédure 7 — Finaliser, documenter et s'auto-évaluer (5 étapes) : livrable, note, test par un collègue, grille, synthèse.",
      "Procédure 8 — Présenter à la revue finale et capitaliser (4 étapes).",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Exercice académique ou projet certifiant : la différence qui change tout',
    columns: ['Dimension', 'Exercice académique', 'Projet certifiant (ce module)'],
    rows: [
      ['Point de départ', 'Un énoncé fourni, abstrait', 'Un problème que vous rencontrez réellement dans votre travail'],
      ['Ce qui prouve la réussite', 'Vous avez compris un concept', 'Vous avez produit quelque chose que vous utiliserez réellement lundi matin'],
      ['Choix des outils', 'Imposé par le sujet, ou celui que vous maîtrisez déjà', 'Au moins deux outils de la formation, chacun sur son point fort'],
      ['Critère de réussite', 'Défini après coup par le correcteur', 'Fixé dans le brief, avant de produire, et vérifiable'],
      ['Fin du travail', 'Quand la démonstration est faite', 'Quand le livrable peut être ouvert et utilisé tel quel dans votre travail'],
      ['Ce que mesure la revue', 'La maîtrise technique isolée', 'Votre capacité à cadrer, piloter les outils et livrer, seul'],
    ],
  },
  {
    type: 'concept',
    title: 'Le test du lundi matin : quand le projet est-il vraiment terminé ?',
    body: [
      "Si votre livrable final ne peut pas être ouvert et utilisé tel quel dans votre travail réel dès la semaine prochaine, le projet n'est pas terminé : il est retourné à une version antérieure de lui-même, plus proche de la démonstration que de la production. Ce test se pose quatre fois pendant le module : au choix du problème, au brief, à la version 1 et avant la remise.",
    ],
    bullets: [
      "Quelqu'un attend-il réellement ce résultat ? Nommez la personne.",
      "Pouvez-vous l'ouvrir lundi matin sans rien reconstruire ? Si vous devez encore « mettre en forme », ce n'est pas fini.",
      "Un collègue peut-il le refaire sans vous poser de question ? Sinon, la note de documentation est incomplète.",
      "Savez-vous mesurer ce qu'il fait gagner ? Sans valeur de départ, le gain reste une impression.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Quelqu'un l'attend : Patrick Mumbere, pour le point logistique du 8 janvier 2027.",
        "Lundi matin : Amani colle l'export du mois, lit l'onglet « Indicateurs » et envoie le chiffre — rien à mettre en forme.",
        "Reproductible : Josué Bahati, comptable, refait la mise à jour seul en 38 minutes avec la note.",
        "Mesurable : 3 h 30 avant, 22 minutes après sur l'export de septembre.",
      ],
    },
    pitfall: "Appeler « terminé » un projet qui impressionne mais que vous n'ouvririez jamais pour votre propre travail : c'est le piège de la sophistication technique.",
  },
  {
    type: 'comparison-table',
    title: 'Un outil par étape : la force dominante de chaque plateforme',
    columns: ['Outil', 'Force dominante', 'Où il excelle dans un mini-projet', 'À éviter'],
    rows: [
      ['ChatGPT (dont Data Analysis)', 'Polyvalence ; calcul réellement exécuté sur un fichier ; GPTs personnalisés', 'Recalcul de contrôle indépendant sur un export ; premiers jets de textes ; bibliothèque de prompts', 'Lui confier une recherche réglementaire sans source vérifiable'],
      ['Claude', 'Analyse et rédaction de documents longs et structurés', 'Note de documentation, rapport structuré, relecture critique du brief', 'Un calcul volumineux non recontrôlé par une formule ou un second outil'],
      ['Copilot (Office 365)', 'Travail direct dans vos fichiers Excel, Word, PowerPoint existants', 'Colonnes calculées, tableau de bord, mise en forme, synthèse dans le classeur', 'Un fichier non mis sous forme de tableau ; des formules non relues'],
      ['Perplexity', 'Recherche factuelle sourcée', 'Références légales ou réglementaires, veille bailleur, vérification d\'un fait', 'La rédaction longue ; citer une source sans l\'avoir ouverte'],
      ['Gemini', 'Multimodalité et Google Workspace', 'Images, audio, vidéo de terrain ; Sheets, Docs, Gmail', 'L\'imposer si votre organisation travaille sous Microsoft 365'],
      ['Prompt engineering et automatisation (Modules 07 et 08)', 'Structurer la demande ; faire tourner la tâche sans vous', 'Prompts réutilisables ; scénario Make, Zapier ou n8n récurrent', 'Automatiser avant d\'avoir stabilisé la tâche à la main'],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi combiner plusieurs outils plutôt qu\'en forcer un seul',
    body: [
      "Après huit modules sur cinq IA différentes, le réflexe le plus fréquent est de retomber sur l'outil que l'on maîtrise le mieux et de l'utiliser pour tout. C'est compréhensible, et presque toujours sous-optimal. La règle pratique : pour chaque étape de votre projet, demandez-vous quel outil est le mieux positionné pour cette étape précise — pas quel outil vous avez ouvert en premier.",
      "Un projet qui combine deux ou trois outils, chacun sur son point fort, produit presque toujours un livrable plus solide, et offre en plus un contrôle croisé : ce qu'un outil produit, un autre le recalcule.",
    ],
    example: {
      title: 'Deux combinaisons issues des pistes du module',
      lines: [
        "RH : ChatGPT ou Claude pour rédiger la grille de questions d'entretien ; Perplexity pour vérifier les références légales applicables au contrat.",
        "Logistique : le prompt est structuré avec les méthodes du Module 07 ; Copilot construit le tableau de bord dans le fichier existant ; ChatGPT Data Analysis recalcule les indicateurs pour contrôle.",
      ],
    },
    tip: "Écrivez dans le brief le rôle de chaque outil ET ce qu'il ne doit pas faire. « Claude rédige la note ; Claude ne calcule aucun indicateur » évite de découvrir un chiffre faux dans un texte bien écrit.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois livrables officiels — quand, quoi, avec quelle preuve',
    columns: ['Livrable', 'Fichier ou forme', 'Quand le remettre', 'Contenu minimal exigé'],
    rows: [
      ['1 — Le brief cadré', 'gabarit-brief-mini-projet-ia-par-secteur.docx', 'Rempli avant toute production, présenté en premier au formateur', 'Les sept sections remplies ; périmètre réaliste au regard du temps disponible'],
      ['2 — Le livrable final + sa note', 'Document, tableau de bord, bibliothèque de prompts ou automatisation, plus une note de 10 à 15 lignes', 'À la date de livraison finale inscrite dans le brief', 'Utilisable en l\'état ; prompts et étapes clés documentés'],
      ['3 — La grille d\'auto-évaluation', 'grille-evaluation-livrable-mini-projet.xlsx', 'Avant la remise au formateur pour la revue finale', 'Cinq critères notés de 1 à 5, avec un commentaire précis pour chacun'],
      ['Présence au point d\'étape', 'Entretien court avec le formateur ou un pair', 'À la date fixée dans le brief, avant la revue finale', 'Version 1 montrée directement et trois questions posées'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les cinq critères de la grille : ce que le formateur regarde',
    columns: ['Critère', '1 — Très insuffisant', '3 — Acceptable', '5 — Excellent'],
    rows: [
      ['Clarté du problème résolu', 'Un thème général (« l\'IA en logistique »)', 'Problème nommé, sans chiffre ni destinataire', 'Problème précis, chiffré, nommé dès la première ligne du livrable'],
      ['Pertinence des outils IA choisis', 'Un seul outil, par habitude, pour tout', 'Deux outils, mais un rôle flou ou mal choisi', 'Chaque outil sur son point fort, choix justifié par un test'],
      ['Qualité du livrable final', 'Démonstration à reprendre entièrement', 'Fonctionnel, retouches mineures avant diffusion', 'Utilisable tel quel dès lundi, sans reprise'],
      ['Reproductibilité / documentation', 'Aucune trace des prompts ni des étapes', 'Prompts notés, ordre des étapes incomplet', 'Un collègue refait la démarche seul à partir de la note'],
      ['Impact professionnel réel', 'Exercice sans destinataire réel', 'Besoin réel, gain non mesuré', 'Besoin réel, gain mesuré et déjà constaté'],
    ],
    highlight: "Repères proposés par le module pour vous aider à noter : la grille elle-même fournit l'échelle de 1 (très insuffisant) à 5 (excellent) et la définition de ce que chaque critère évalue.",
  },
  {
    type: 'stat-callout',
    stat: '3 h 30 → 22 min',
    caption: "Le gain mesuré par Amani Kahindo : la consolidation mensuelle des exports de commandes passe de 210 minutes à 22 minutes, soit 188 minutes économisées chaque mois (− 89,5 %).",
    context: "C'est ce type de chiffre, relevé avant puis après, qui fait passer un projet du statut d'exercice à celui de projet certifiant. Il figure dans le brief comme critère de succès, puis dans la grille comme preuve du critère « Impact professionnel réel ».",
  },
  {
    type: 'concept',
    title: 'Règles d\'usage des données avant de déposer quoi que ce soit dans une IA',
    body: "Votre mini-projet manipule des données réelles de votre travail. Les règles vues dans la formation s'appliquent avant chaque dépôt de fichier ou de texte dans un outil, y compris pour un simple test à petite échelle.",
    bullets: [
      "Utilisez uniquement un compte IA professionnel validé par votre organisation, jamais un compte personnel gratuit.",
      "Retirez les colonnes inutiles à la tâche : moins de données transmises, moins de risque, réponse plus précise.",
      "Remplacez les noms de personnes par des codes et gardez la table de correspondance hors de l'IA.",
      "Pour un test à petite échelle, préférez un extrait de 10 à 20 lignes à l'export complet : vous limitez l'exposition et vous gagnez du temps.",
      "Notez dans votre carnet de prompts quel fichier a été déposé dans quel outil, et à quelle date.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "L'export de commandes ne contient ni nom d'agent ni donnée personnelle : seulement des numéros de commande, des fournisseurs, des sites, des dates et des montants.",
        "Outils utilisés : Copilot Microsoft 365 et un espace ChatGPT entreprise, tous deux validés par la direction.",
        "Décision d'Amani : dépôt autorisé sans anonymisation, consigné dans le carnet de prompts le 24/11/2026.",
      ],
    },
    pitfall: "Utiliser des données réelles de votre organisation dans un compte personnel « juste pour tester » : un test à petite échelle reste un dépôt de données.",
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE : la structure des prompts de votre projet',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt Copilot du fil rouge'],
    rows: [
      ['C — Contexte', 'Le cadre, les données exactes (tableau, colonnes, période)', '« Dans le tableau T_Cmd (N° commande, Date commande, Fournisseur, Site, Date prévue, Date réelle, Montant (USD)) »'],
      ['L — Livrable attendu', 'Le format exact du résultat', '« ajoute deux colonnes calculées, Retard_j et Statut, avec leurs formules en français »'],
      ['A — Audience / rôle', 'Le rôle de l\'IA et le destinataire', '« Tu es analyste logistique pour une ONG »'],
      ['R — Restrictions', 'Ce qu\'il ne faut pas faire', '« Cellule vide si la commande n\'est pas livrée, jamais 0. Ne modifie aucune autre colonne. »'],
      ['T — Ton & style', 'Le registre attendu', '« Factuel ; une phrase d\'explication par formule »'],
      ['E — Exemples', 'Un exemple de ligne ou de sortie', '« Exemple : prévue le 15/10, réelle le 14/10 → Retard_j = −1, Statut = À l\'heure »'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Brief cadré', definition: "Le document d'une page rempli avant toute production, qui fixe le secteur, le problème, les outils, le livrable, les critères de succès, le calendrier et le point d'étape." },
      { term: 'Périmètre / hors périmètre', definition: "Le périmètre est ce que vous vous engagez à livrer ; le hors-périmètre est la liste écrite de ce que vous avez volontairement écarté, pour ne pas y revenir en panique à mi-parcours." },
      { term: 'Critère de succès', definition: "Condition observable et mesurable, fixée dans le brief, qui permet à une tierce personne de répondre par oui ou non : mise à jour en 30 minutes ou moins, écart nul sur 20 commandes recalculées." },
      { term: 'Valeur de départ', definition: "Le chiffre mesuré avant le projet (3 h 30 de consolidation mensuelle) : sans lui, aucun gain ne peut être prouvé." },
      { term: 'Test à petite échelle', definition: "Essai d'un outil sur un échantillon réduit (10 lignes, une section) pour découvrir tôt qu'il ne convient pas, plutôt qu'à mi-parcours." },
      { term: 'Carnet de prompts', definition: "Journal de chaque prompt utilisé, de l'outil, du résultat et de la décision (retenu, modifié, écarté) : la matière première de la note de documentation." },
      { term: 'Point d\'étape intermédiaire', definition: "Retour d'un formateur ou d'un pair sur votre version 1, à la date fixée dans le brief, sur trois questions : périmètre, outils, structure. Il n'est pas optionnel dans la méthode." },
      { term: 'Reproductibilité / documentation', definition: "Critère de la grille : un collègue pourrait refaire la démarche à partir de ce qui est écrit (prompts, étapes, méthode appliquée)." },
      { term: 'Marge de 25 %', definition: "Temps ajouté aux heures estimées pour absorber imprévus et retours : 16 h estimées demandent 20 h de temps disponible." },
      { term: 'Attestation de compétences IA', definition: "Certificat délivré par BK-BOOST Ltd. à l'issue de la revue individuelle, lorsque le mini-projet est validé." },
    ],
  },

  // ───────────── Catalogue de pistes sectorielles ─────────────
  {
    type: 'comparison-table',
    title: 'Cinq pistes de mini-projet — des points de départ, pas des sujets figés',
    columns: ['Secteur', 'Problème type', 'Outils combinés', 'Livrable réel'],
    rows: [
      ['Logistique (ONG ou entreprise)', 'Export brut (livraisons, stocks, délais) consolidé à la main chaque semaine ou chaque mois', 'Copilot + Excel, contrôle par ChatGPT Data Analysis', 'Classeur qui se met à jour en quelques minutes au lieu de quelques heures'],
      ['RH', 'Entretiens de recrutement préparés et compte-rendus rédigés différemment par chaque recruteur', 'ChatGPT ou Claude, Perplexity pour les références légales', 'Bibliothèque de prompts reprise par toute l\'équipe sans repartir de zéro'],
      ['Audit', 'Notes de terrain brutes à transformer en rapport cohérent', 'Claude pour structurer, relecture croisée par un second outil', 'Mini-rapport avec constats classés par niveau de risque'],
      ['Finance / conformité bailleur', 'Recherche réglementaire refaite à zéro à chaque échéance', 'Perplexity, éventuellement Make, Zapier ou n8n pour la récurrence', 'Note de veille récurrente avec sources citées, prête à circuler'],
      ['Coaching de carrière', 'Préparation d\'entretiens annuels et plans de développement faite de mémoire', 'ChatGPT ou Claude, prompts structurés (Module 07)', 'Pack de prompts de coaching utilisable avec un client dès la semaine suivante'],
    ],
    highlight: "Un bon mini-projet ressemble davantage à l'une de ces pistes reformulée pour votre poste qu'à un sujet totalement inventé de zéro.",
  },
  {
    type: 'concept',
    title: 'Piste Logistique — Tableau de bord Copilot + Excel',
    body: "Vous partez d'un export brut (livraisons, stocks, délais) et vous demandez à Copilot de le transformer en tableau de bord lisible avec indicateurs clés, sans reconstruire le fichier à la main chaque semaine. C'est la piste du fil rouge d'Amani Kahindo ; elle convient aux ONG (suivi des commandes, des stocks de médicaments, des carburants) comme aux entreprises (suivi des livraisons clients).",
    bullets: [
      "Problème à formuler : « Chaque [semaine/mois], je passe [durée] à consolider [export] pour calculer [indicateur] ; le chiffre arrive [retard] après la réunion. »",
      "Outils : Copilot dans Excel pour les colonnes calculées et la synthèse ; ChatGPT Data Analysis pour recalculer les indicateurs ; Claude pour la note de documentation.",
      "Critères de succès types : mise à jour complète en 30 minutes ou moins ; indicateurs identiques à un recalcul manuel sur un échantillon ; mise à jour refaite seul par un collègue.",
      "Périmètre raisonnable en 20 heures : un export, trois indicateurs, une feuille de synthèse. Hors périmètre : prévisions, alertes automatiques, tableau Power BI.",
    ],
    pitfall: "Vouloir un tableau de bord « complet » avec quinze indicateurs : trois indicateurs fiables et vérifiés valent mieux que quinze non contrôlés.",
  },
  {
    type: 'concept',
    title: 'Piste RH — Bibliothèque de prompts pour structurer les entretiens de recrutement',
    body: "Vous construisez un jeu de prompts réutilisables avec ChatGPT : génération d'une grille de questions par poste, reformulation de questions comportementales selon la méthode STAR, synthèse structurée des notes d'entretien en compte rendu exploitable. Que vous recrutiez pour une ONG, une entreprise ou un cabinet, le livrable est un document que n'importe quel recruteur de l'équipe peut reprendre.",
    bullets: [
      "Problème à formuler : « Chaque recrutement, [qui] prépare [durée] une grille de questions différente ; les comptes rendus ne sont pas comparables entre candidats. »",
      "Outils : ChatGPT ou Claude pour rédiger et tester les prompts ; Perplexity pour vérifier les références légales applicables (contrat, durée d'essai) avec sources ; prompt engineering pour la structure.",
      "Critères de succès types : un recruteur qui n'a pas conçu la bibliothèque prépare une grille pour un poste nouveau en 15 minutes ou moins ; chaque prompt testé sur au moins trois postes.",
      "Livrable : un document de 10 à 15 prompts, chacun avec son objectif, sa variable à remplacer, un exemple de sortie et une consigne de vérification humaine.",
    ],
    pitfall: "Confier à l'IA le jugement sur le candidat : la bibliothèque structure la préparation et la synthèse, la décision de recrutement reste humaine.",
  },
  {
    type: 'concept',
    title: 'Piste Audit — Mini-rapport assisté par Claude à partir d\'observations de terrain',
    body: "Vous partez de notes brutes de visite terrain (constats, écarts observés, pièces manquantes) et vous utilisez Claude pour structurer un mini-rapport d'audit cohérent, avec constats classés par niveau de risque. Le livrable est un rapport court mais structuré, dans un format que vos destinataires exploitent directement.",
    bullets: [
      "Problème à formuler : « Après chaque visite de site, je mets [durée] à transformer [nombre] pages de notes en rapport ; la structure change d'un rapport à l'autre. »",
      "Outils : Claude pour l'analyse et la rédaction structurée ; un second outil (ChatGPT ou Copilot) pour la relecture croisée ; Word pour le gabarit final.",
      "Critères de succès types : 100 % des constats rattachés à une note de terrain source ; chaque constat a un niveau de risque, une cause apparente et une recommandation ; rapport relu par un pair.",
      "Précaution : retirez noms de personnes et données sensibles avant tout dépôt ; l'IA structure, c'est l'auditeur qui qualifie le risque.",
    ],
    pitfall: "Laisser l'IA reformuler un constat jusqu'à lui faire dire plus que ce que vous avez observé : chaque phrase du rapport doit renvoyer à une note de terrain.",
  },
  {
    type: 'concept',
    title: 'Piste Finance / conformité bailleur — Veille réglementaire avec Perplexity',
    body: "Vous construisez une routine de recherche, manuelle ou automatisée avec Make, Zapier ou n8n, qui interroge Perplexity périodiquement sur les évolutions réglementaires d'un bailleur donné (par exemple un bailleur institutionnel de votre organisation), avec sources citées. Le livrable est une note de veille récurrente, prête à circuler, plutôt qu'une recherche ponctuelle refaite chaque fois depuis zéro.",
    bullets: [
      "Problème à formuler : « Avant chaque échéance de reporting, [qui] passe [durée] à rechercher les changements de règles du bailleur ; certains changements sont découverts trop tard. »",
      "Outils : Perplexity pour la recherche sourcée ; Claude pour la rédaction de la note ; un scénario Make, Zapier ou n8n si la récurrence est automatisée (Module 08).",
      "Critères de succès types : chaque point de la note renvoie à une source officielle datée, vérifiée en ouvrant le lien ; note produite en 20 minutes ou moins.",
      "Périmètre raisonnable : un bailleur, une rubrique réglementaire, une fréquence mensuelle ; l'automatisation n'est ajoutée que si la routine manuelle est déjà stable.",
    ],
    pitfall: "Citer une source que vous n'avez pas ouverte : un lien affiché par l'outil n'est pas une vérification.",
  },
  {
    type: 'concept',
    title: 'Piste Coaching de carrière — Pack de prompts de coaching personnalisés',
    body: "Vous construisez un ensemble de prompts pour un usage récurrent en coaching individuel : préparation d'entretien annuel, reformulation de bilan de compétences, structuration d'un plan de développement. Le livrable est un pack directement utilisable avec un client ou un collaborateur dès la semaine suivante.",
    bullets: [
      "Problème à formuler : « Avant chaque séance, je mets [durée] à préparer [type de document] de zéro ; la qualité dépend de ma disponibilité du jour. »",
      "Outils : ChatGPT ou Claude pour rédiger et tester les prompts ; prompt engineering (Module 07) pour des consignes stables ; Perplexity si le pack s'appuie sur des données du marché de l'emploi.",
      "Critères de succès types : pack utilisé avec au moins un client réel dans la semaine suivant la livraison ; temps de préparation d'une séance divisé par deux, mesuré avant et après.",
      "Précaution : consentement du client et anonymisation avant tout dépôt de contenu de séance dans un outil IA.",
    ],
    pitfall: "Livrer un pack de prompts jamais testé avec une vraie personne : le critère « Impact professionnel réel » ne se prouve pas sur un cas imaginaire.",
  },

  // ───────────── Procédure 1 — Choisir un problème réel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Dresser l\'inventaire de vos irritants des quatre dernières semaines',
    intro: "Ne partez pas d'un thème (« faire quelque chose avec l'IA en logistique ») mais d'une liste de tâches réelles. Entrée nécessaire : votre agenda et vos messages envoyés des quatre dernières semaines. Durée : 20 minutes.",
    steps: [
      {
        title: 'Retrouver les tâches qui ont pesé',
        actions: [
          "Ouvrez un classeur vierge, nommez la feuille « Irritants » et créez les colonnes : Tâche, Fréquence, Durée, Heures par mois, Qui attend le résultat.",
          "Parcourez votre agenda et vos messages envoyés des quatre dernières semaines : repérez les tâches répétitives, les documents que vous avez produits mal ou trop lentement, les informations obtenues trop tard.",
          "Listez 5 à 8 tâches, sans les juger pour l'instant, avec la fréquence réelle (quotidienne, hebdomadaire, mensuelle).",
        ],
      },
      {
        title: 'Chiffrer chaque tâche',
        actions: [
          "Notez la durée d'une occurrence, en minutes ou en heures ; si vous hésitez, retenez la durée de la dernière occurrence.",
          "Calculez les heures par mois : durée × nombre d'occurrences par mois (hebdomadaire = 4, quotidienne = 21 jours ouvrés).",
          "Notez qui attend le résultat : un nom, pas « la direction ».",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Fréquence', 'Durée', 'Heures par mois'],
      rows: [
        ['Consolider les 3 exports de commandes fournisseurs (taux de livraison à l\'heure)', 'Mensuelle', '3 h 30', '3,5'],
        ['Relancer les fournisseurs en retard', 'Hebdomadaire', '1 h', '4'],
        ['Mettre en forme le compte rendu de la réunion d\'équipe', 'Hebdomadaire', '45 min', '3'],
        ['Répondre aux agents sur la procédure d\'achat', 'Quotidienne', '20 min', '7'],
        ['Préparer le rapport mensuel de stock', 'Mensuelle', '2 h', '2'],
        ['Rechercher la réglementation douanière avant un import', 'Trimestrielle', '2 h', '0,7'],
      ],
    },
    result: "Une feuille « Irritants » de 5 à 8 lignes chiffrées, dont vous connaissez le poids en heures par mois et le destinataire. Aucune n'est encore choisie.",
    pitfall: "Écrire des thèmes à la place de tâches (« mieux communiquer », « l'IA pour les achats ») : si vous ne pouvez pas chronométrer la tâche, ce n'est pas un problème, c'est un sujet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Appliquer le test des quatre critères et choisir le projet',
    intro: "Tous les irritants ne font pas de bons mini-projets. Un bon candidat est réel, mesurable, faisable avec le temps et les données dont vous disposez, et il donne un rôle réel à au moins deux outils de la formation. Entrée : la feuille « Irritants ».",
    steps: [
      {
        title: 'Noter chaque candidat',
        actions: [
          "Ajoutez à la feuille quatre colonnes : Réel, Mesurable, Faisable, IA utile, et une colonne Total.",
          "Réel : le problème existe aujourd'hui dans votre poste et un collègue peut le confirmer → 1 point sinon 0.",
          "Mesurable : vous avez ou pouvez obtenir un chiffre avant (temps, erreurs, retards) → 1 point sinon 0.",
          "Faisable : les données et les accès nécessaires sont à votre portée dans les semaines disponibles → 1 point sinon 0.",
          "IA utile : au moins deux outils de la formation y ont un rôle réel, pas décoratif → 1 point sinon 0.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Retenez le candidat qui obtient 4 sur 4 ; en cas d'égalité, celui dont le gain mensuel en heures est le plus grand.",
          "Si aucun n'obtient 4, empruntez une piste du catalogue sectoriel et reformulez-la pour qu'elle colle à un contexte plausible de votre poste, jamais à un énoncé abstrait.",
          "Conservez le deuxième meilleur comme solution de repli : vous ne l'utiliserez que si une donnée ou un accès devient impossible dans la première semaine.",
        ],
      },
    ],
    table: {
      columns: ['Candidat', 'Réel', 'Mesurable', 'Faisable', 'IA utile', 'Total'],
      rows: [
        ['Consolider les exports de commandes', '1', '1 (3 h 30)', '1 (déjà dans Excel)', '1 (Copilot + ChatGPT)', '4 / 4'],
        ['Relancer les fournisseurs en retard', '1', '1', '1', '0 (un e-mail type suffit)', '3 / 4'],
        ['Répondre aux agents sur la procédure', '1', '0 (aucune mesure)', '1', '1', '3 / 4'],
        ['Rapport mensuel de stock', '1', '1', '0 (données hors de sa portée)', '1', '3 / 4'],
        ['Veille réglementaire douanière', '1', '0 (pas de chiffre)', '1', '1', '3 / 4'],
      ],
    },
    result: "Un projet retenu avec un total de 4 sur 4, et une solution de repli identifiée. Fil rouge : Amani retient la consolidation mensuelle des exports de commandes ; le rapport de stock reste en repli.",
    pitfall: "Choisir le sujet le plus impressionnant au lieu du plus utile : un projet qui empile des fonctionnalités mais ne résout aucun problème de votre métier rate l'objectif du module.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Reformuler le problème en une phrase chiffrée',
    intro: "Une fois le candidat choisi, il faut pouvoir le dire en une phrase qui contient une fréquence, un acteur, une durée et une conséquence. Cette phrase deviendra la section 2 du brief et la première ligne de votre livrable.",
    steps: [
      {
        title: 'Rédiger la phrase',
        actions: [
          "Complétez le modèle : « [Fréquence], [qui] passe [durée] à [tâche précise], ce qui [conséquence mesurable]. »",
          "Si vous empruntez une piste, répondez d'abord à trois questions pour la rendre plausible : quel service, quelle fréquence, quel volume réel ?",
          "Supprimez tout mot qui pourrait s'appliquer à n'importe quelle organisation de votre secteur.",
        ],
      },
      {
        title: 'Tester la phrase',
        actions: [
          "Vérifiez qu'elle contient un chiffre, un destinataire nommé et une conséquence.",
          "Relisez-la à un collègue : s'il demande « mais concrètement, c'est quoi ? », réécrivez.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — du thème au problème précis',
      lines: [
        "Thème (à éviter) : « Faire quelque chose avec l'IA en logistique. »",
        "Problème (à retenir) : « Chaque mois, je passe 3 h 30 à consolider à la main les trois exports de commandes fournisseurs de Goma, Bukavu et Kinshasa pour calculer le taux de livraison dans les délais ; le chiffre d'octobre est arrivé le 13 novembre, une semaine après le point logistique du 6 novembre. »",
        "Test : chiffre (3 h 30, une semaine) ✔ — destinataire (point logistique, Patrick Mumbere) ✔ — conséquence (chiffre en retard) ✔",
      ],
    },
    result: "Une phrase de problème d'environ trois lignes, chiffrée et nommée, prête à être collée dans le brief. Elle ne contient aucune solution : le mot « IA » n'y figure pas.",
    tip: "Une bonne phrase de problème ne mentionne pas l'outil. Si elle commence par « Utiliser Copilot pour… », vous avez écrit une solution, pas un problème : le brief doit d'abord dire ce qui ne va pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Confirmer le problème et relever la valeur de départ',
    intro: "Un projet sans valeur de départ ne peut pas prouver son gain. Vous faites confirmer le problème par la personne qui attend le résultat et vous relevez le chiffre « avant » pendant que la tâche existe encore dans sa version manuelle.",
    steps: [
      {
        title: 'Faire confirmer le besoin',
        actions: [
          "Envoyez un message à la personne concernée avec la phrase de problème et une question fermée : « Est-ce bien le problème à résoudre, et ce résultat vous serait-il utile en début de mois ? »",
          "Notez sa réponse et sa date : elle justifiera le critère « Impact professionnel réel ».",
        ],
      },
      {
        title: 'Mesurer le « avant »',
        actions: [
          "Chronométrez la prochaine occurrence de la tâche, ou reconstituez-la à partir de votre agenda et des horodatages de vos fichiers.",
          "Notez trois valeurs : la durée, la date à laquelle le résultat est livré, la date à laquelle il était attendu.",
          "Enregistrez ces valeurs dans la fiche « problème retenu », à côté de la phrase.",
        ],
      },
    ],
    example: {
      title: 'Fiche « problème retenu » — fil rouge',
      lines: [
        "Message d'Amani à Patrick Mumbere, 19/11/2026 : « Je voudrais construire un classeur qui calcule le taux de livraison dans les délais en 30 minutes au lieu de 3 h 30. Est-ce utile pour le point logistique ? »",
        "Réponse de Patrick, 19/11 à 15 h 05 : « Oui, avec le chiffre avant le 6 de chaque mois. »",
        "Valeur de départ : 3 h 32 chronométrées sur l'export d'octobre ; chiffre livré le 13/11 pour une attente au 6/11, soit 7 jours de retard.",
      ],
    },
    result: "Une fiche « problème retenu » : la phrase de problème, la validation écrite du destinataire et trois valeurs de départ chiffrées.",
    pitfall: "Fixer plus tard un critère « diviser le temps par dix » sans avoir mesuré le temps d'aujourd'hui : à la revue finale, personne ne pourra dire si vous avez gagné quelque chose.",
  },

  // ───────────── Procédure 2 — Remplir le brief ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir le gabarit de brief et remplir la section 1 — Secteur et contexte',
    intro: "Le gabarit gabarit-brief-mini-projet-ia-par-secteur.docx tient sur une page. Il porte un titre, une phrase d'objectif (« cadrer votre mini-projet IA en une page avant de commencer à produire ») puis sept sections et un pied de page. Vous le remplissez avant de produire quoi que ce soit, en 20 à 30 minutes.",
    steps: [
      {
        title: 'Préparer le fichier',
        actions: [
          "Copiez le gabarit depuis 04-templates vers votre dossier de travail et renommez-le : 2026-11-23_brief_mini-projet_Kahindo.docx.",
          "Lisez la phrase d'objectif : le brief est à présenter à votre formateur au point d'étape intermédiaire, et en premier avant toute production.",
        ],
      },
      {
        title: 'Remplir le tableau et le contexte',
        actions: [
          "Tableau de la section 1, case de gauche « Secteur » : saisissez un mot (logistique, finance, RH, coaching, audit…).",
          "Case de droite « Organisation / poste concerné » : organisation et fonction.",
          "Sous le tableau, ligne « Contexte réel » : en trois phrases, la tâche, le service et la situation que le projet doit améliorer.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie — fil rouge',
      lines: [
        "Secteur : Logistique (ONG)",
        "Organisation / poste concerné : Horizon Grands Lacs — chargée administrative et logistique, site de Goma",
        "Contexte réel : Les trois sites (Goma, Bukavu, Kinshasa) exportent chaque mois leurs commandes fournisseurs depuis le système comptable. La consolidation de ces exports pour le point logistique mensuel est faite à la main par une seule personne, en 3 h 30, et le résultat arrive après la réunion.",
      ],
    },
    result: "La section 1 est remplie sans aucun texte d'aide restant : le lecteur comprend en dix secondes où et pour qui le projet se déroule.",
    pitfall: "Écrire un contexte de secteur général (« la logistique humanitaire est complexe ») : le contexte décrit votre situation à vous, pas votre secteur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Remplir la section 2 — Problème concret à résoudre',
    intro: "La consigne du gabarit est précise : « le problème précis, tel qu'il se pose aujourd'hui dans votre travail (pas un problème générique de secteur) ». Vous y collez la phrase de la procédure 1 et vous la complétez de sa valeur de départ.",
    steps: [
      {
        title: 'Coller et compléter',
        actions: [
          "Collez dans la section 2 la phrase de problème validée à la procédure 1, étape 3.",
          "Ajoutez en dessous une ligne « Valeur de départ » avec les trois chiffres relevés à l'étape 4.",
          "Ajoutez une ligne « Qui est concerné » avec le destinataire nommé.",
        ],
      },
      {
        title: 'Relire avec les yeux du formateur',
        actions: [
          "Vérifiez que le problème tient en 5 lignes maximum.",
          "Vérifiez qu'aucun nom d'outil n'apparaît : le problème précède la solution.",
        ],
      },
    ],
    example: {
      title: 'Section 2 remplie — fil rouge',
      lines: [
        "Chaque mois, je passe 3 h 30 à consolider à la main les trois exports de commandes fournisseurs de Goma, Bukavu et Kinshasa pour calculer le taux de livraison dans les délais. Le chiffre d'octobre est arrivé le 13/11, une semaine après le point logistique du 6/11.",
        "Valeur de départ : 3 h 32 chronométrées (octobre 2026) ; chiffre livré 7 jours après la date attendue.",
        "Concerné : Patrick Mumbere, responsable achats, et le comité du point logistique mensuel.",
      ],
    },
    result: "Une section 2 chiffrée, qui répond à la question « quel est exactement le problème, et combien coûte-t-il aujourd'hui ? ».",
    pitfall: "Mettre ici une intention (« améliorer le suivi logistique grâce à l'IA ») : c'est exactement le « problème générique de secteur » que le gabarit interdit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Remplir la section 3 — Outils IA à combiner et rôle de chacun',
    intro: "Le gabarit demande les outils retenus (ChatGPT, Claude, Copilot, Perplexity, Gemini, automatisation…) et le rôle de chacun dans le projet. La règle du module : au moins deux outils de la formation, chacun sur son point fort réel. Vous raisonnez étape par étape, pas outil par outil.",
    steps: [
      {
        title: 'Découper le projet en étapes',
        actions: [
          "Listez les 4 à 6 étapes de production prévisibles (préparer les données, calculer, contrôler, rédiger, présenter).",
          "Pour chaque étape, relisez le tableau « force dominante » du module et choisissez l'outil le mieux positionné.",
        ],
      },
      {
        title: 'Écrire rôle et interdit',
        actions: [
          "Dans la section 3, une ligne par outil : « [Outil] — rôle : … ; ne fait pas : … ».",
          "Vérifiez que deux outils au moins apparaissent et que le choix est justifié par la nature de l'étape.",
          "Précisez que ce choix est provisoire jusqu'aux tests à petite échelle de la procédure 4.",
        ],
      },
    ],
    table: {
      columns: ['Étape du projet', 'Outil retenu', 'Rôle', 'Ce qu\'il ne fait pas'],
      rows: [
        ['Colonnes calculées et synthèse', 'Copilot dans Excel', 'Construit les formules dans le classeur déjà utilisé', 'Ne contrôle pas ses propres résultats'],
        ['Contrôle des indicateurs', 'ChatGPT (Data Analysis)', 'Recalcule de façon indépendante sur le fichier CSV', 'Ne modifie pas le classeur'],
        ['Note de documentation', 'Claude', 'Rédige la note à partir du carnet de prompts', 'N\'invente aucune étape, ne calcule aucun chiffre'],
      ],
    },
    result: "La section 3 liste trois outils, chacun avec un rôle, un interdit et la justification de son choix. Perplexity n'est pas retenu : le projet ne comporte aucune recherche externe.",
    tip: "Ne pas retenir un outil est une décision à écrire aussi. « Perplexity : non utilisé, aucune recherche externe » prouve au formateur que le choix est raisonné et non systématique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Remplir la section 4 — Livrable attendu',
    intro: "La section 4 demande la nature exacte du livrable final (document, tableau de bord, bibliothèque de prompts, automatisation…) et son destinataire. Elle doit permettre de répondre par oui ou non, à la fin : « Le livrable décrit existe-t-il ? »",
    steps: [
      {
        title: 'Décrire le livrable',
        actions: [
          "Écrivez la nature, le format et le nom de fichier : « Classeur Excel Suivi_Delais_Fournisseurs.xlsx ».",
          "Listez son contenu précis : feuilles, indicateurs, nombre de pages ou de prompts.",
          "Ajoutez la note de documentation de 10 à 15 lignes, qui fait partie du livrable 2.",
        ],
      },
      {
        title: 'Nommer le destinataire et l\'usage',
        actions: [
          "Indiquez à qui il est destiné et dans quelle situation il sera ouvert.",
          "Indiquez la date du premier usage réel : c'est elle qui rend le test du lundi matin vérifiable.",
        ],
      },
    ],
    example: {
      title: 'Section 4 remplie — fil rouge',
      lines: [
        "Livrable : un classeur Excel « Suivi_Delais_Fournisseurs.xlsx » à quatre feuilles — Mode d'emploi, Export (export du mois collé dans le tableau T_Cmd avec deux colonnes calculées, Retard_j et Statut), Indicateurs (taux de livraison à l'heure, retard moyen des commandes en retard, commandes en cours, par fournisseur et au total), Journal des prompts.",
        "Accompagné d'une note de 13 lignes documentant les prompts et les étapes de mise à jour.",
        "Destinataire : Patrick Mumbere et le comité du point logistique ; premier usage réel : point du 8 janvier 2027, sur l'export de décembre.",
      ],
    },
    result: "Un livrable décrit assez précisément pour que le formateur puisse vérifier, en l'ouvrant, qu'il correspond à la promesse.",
    pitfall: "Écrire « un outil d'analyse logistique » : sans nature, format, contenu et destinataire, vous ne pourrez ni dimensionner le travail ni dire quand il est terminé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Remplir la section 5 — Critères de succès mesurables',
    intro: "Le gabarit pose la question : « Comment saurez-vous, de façon vérifiable, que le projet est réussi ? » La réponse attendue est un critère observable, pas une impression. Sans critère fixé avant de produire, la revue finale se transforme en discussion d'impression.",
    steps: [
      {
        title: 'Écrire trois à quatre critères',
        actions: [
          "Pour chaque critère, notez : la mesure, la valeur de départ, la cible, la méthode de vérification.",
          "Appliquez le test : une tierce personne peut-elle répondre par oui ou non sans vous demander votre avis ?",
          "Reliez chaque critère à un risque : durée, exactitude, reproductibilité, usage réel.",
        ],
      },
      {
        title: 'Vérifier la cohérence avec la grille',
        actions: [
          "Contrôlez qu'au moins un critère alimente chacun des cinq critères de la grille d'évaluation, notamment l'impact et la reproductibilité.",
          "Interdisez-vous les mots « amélioration », « meilleur », « plus rapide » sans chiffre.",
        ],
      },
    ],
    table: {
      columns: ['Critère de succès', 'Départ', 'Cible', 'Vérification'],
      rows: [
        ['Durée de la mise à jour mensuelle', '3 h 30', '30 min ou moins', 'Chronométrée sur deux exports (septembre, octobre)'],
        ['Exactitude des 3 indicateurs', 'Calcul manuel', 'Écart nul avec un recalcul manuel de 20 commandes', 'Échantillon tiré au hasard, recalculé à la main'],
        ['Reproductibilité', 'Une seule personne sait le faire', 'Un collègue le refait seul en 45 min ou moins', 'Test avec Josué Bahati, sans aide orale'],
        ['Usage réel', 'Chiffre livré après la réunion', 'Utilisable pour le point du 8/01/2027', 'Validation écrite de Patrick Mumbere avant le 18/12/2026'],
      ],
    },
    result: "Quatre critères de succès, chacun avec une cible chiffrée et une méthode de vérification indépendante de vous.",
    pitfall: "Écrire « le tableau de bord sera clair et utile » : ce n'est pas vérifiable. Remplacez-le par un test qu'une autre personne peut réaliser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Remplir la section 6 — Calendrier et temps réellement disponible',
    intro: "La section 6 contient un tableau à deux cases (« Date de début », « Date de livraison finale visée ») et une ligne : « Temps réellement disponible pour ce projet (heures/semaine) — base de calibrage du périmètre ». Le mot décisif est « réellement ».",
    steps: [
      {
        title: 'Mesurer le temps réellement disponible',
        actions: [
          "Ouvrez votre agenda sur les semaines concernées et comptez uniquement les créneaux que vous pouvez bloquer sans déplacer une obligation.",
          "Réservez ces créneaux dans l'agenda sous le nom « Mini-projet IA » : un créneau non réservé n'existe pas.",
          "Retenez le chiffre de la semaine la plus chargée, pas la moyenne optimiste.",
        ],
      },
      {
        title: 'Remplir le tableau',
        actions: [
          "Case « Date de début » : une date de semaine ouvrée.",
          "Case « Date de livraison finale visée » : la date de remise du dossier, avant la date de revue.",
          "Ligne « Temps réellement disponible » : saisissez les heures par semaine et le total sur la période.",
        ],
      },
    ],
    example: {
      title: 'Section 6 remplie — fil rouge',
      lines: [
        "Date de début : lundi 23/11/2026 — Date de livraison finale visée : vendredi 18/12/2026",
        "Temps réellement disponible : 5 heures par semaine (cinq créneaux d'une heure réservés dans l'agenda), soit 4 semaines × 5 h = 20 heures au total.",
        "Semaines concernées : 23-27/11, 30/11-4/12, 7-11/12, 14-18/12.",
      ],
    },
    result: "Un calendrier avec deux dates et un budget temps de 20 heures, réservé dans l'agenda : la base chiffrée de la procédure 3.",
    pitfall: "Compter les heures que vous « aimeriez » consacrer au projet : le calibrage sur un temps imaginaire est la cause numéro un des projets inachevés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Remplir la section 7 — Point d\'étape, signer et présenter le brief',
    intro: "La section 7 fixe le rendez-vous qui distingue un projet piloté d'un projet livré à l'aveugle. Elle contient un tableau (« Date du point d'étape (avant la revue finale) », « Avec qui ») et une ligne « Ce que vous voulez faire valider à ce stade ». Le pied de page demande « Rédigé par (nom, fonction) » et la date.",
    steps: [
      {
        title: 'Planifier le point d\'étape',
        actions: [
          "Choisissez une date située après la version 1 prévue et avant la revue finale, avec le temps d'intégrer les retours : dans le fil rouge, une semaine avant la fin.",
          "Case « Avec qui » : formateur, pair ou responsable, avec son nom.",
          "Ligne « Ce que vous voulez faire valider » : reprenez les trois questions du point d'étape (périmètre, choix d'outils, structure du livrable).",
        ],
      },
      {
        title: 'Signer, relire, envoyer',
        actions: [
          "Pied de page : « Rédigé par (nom, fonction) » et date de rédaction.",
          "Relisez le brief en entier : aucune ligne d'aide du gabarit ne doit subsister, aucun champ ne doit rester vide.",
          "Envoyez le brief au formateur avant de commencer à produire, avec la date de point d'étape proposée.",
        ],
      },
    ],
    example: {
      title: 'Section 7 et pied de page remplis — fil rouge',
      lines: [
        "Date du point d'étape : vendredi 04/12/2026 — Avec qui : formateur expert, visioconférence de 20 minutes",
        "À faire valider : (1) le périmètre — trois indicateurs, quatre fournisseurs, un export par mois ; (2) le choix d'outils — Copilot, ChatGPT Data Analysis, Claude ; (3) la structure du classeur en quatre feuilles.",
        "Rédigé par : Amani Kahindo, chargée administrative et logistique — Date : 23/11/2026",
      ],
    },
    result: "Un brief d'une page, sept sections remplies, signé, daté et envoyé. Il vous engage sur un périmètre, des critères et un rendez-vous : vous pouvez commencer à produire.",
    tip: "Faites relire le brief par la personne qui attend le résultat : si elle ne se reconnaît pas dans la section 2, le problème n'est pas le bon.",
  },

  // ───────────── Procédure 3 — Dimensionner le périmètre ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 3',
    title: 'Lister les lots de travail et les chiffrer en heures, marge incluse',
    intro: "Une fois le brief rédigé, une seule question : « puis-je réalistement livrer cela avec le temps dont je dispose avant l'échéance ? ». Pour y répondre honnêtement, il faut chiffrer chaque lot de travail et ajouter une marge. Entrée : le brief et le budget temps de la section 6.",
    steps: [
      {
        title: 'Découper en lots',
        actions: [
          "Ouvrez une feuille « Dimensionnement » avec les colonnes : Lot, Heures estimées, Lié à un critère de succès ?, Décision.",
          "Listez tout ce que le brief promet, plus tout ce que vous aimeriez ajouter : une ligne par lot.",
          "N'oubliez pas les lots invisibles : brief, tests, point d'étape, intégration des retours, note de documentation, grille, préparation de la revue.",
        ],
      },
      {
        title: 'Estimer et ajouter la marge',
        actions: [
          "Estimez chaque lot en heures, en vous appuyant sur ce que vous avez réellement mis la dernière fois pour une tâche comparable.",
          "Additionnez, puis multipliez par 1,25 : c'est le temps à prévoir, marge de 25 % incluse.",
        ],
      },
    ],
    table: {
      columns: ['Lot', 'Heures estimées', 'Lié à un critère de succès ?'],
      rows: [
        ['Brief, dimensionnement et tests à petite échelle', '3,5', 'Oui — tous'],
        ['Classeur : colonnes calculées, 3 indicateurs, feuille de synthèse (version 1)', '5,5', 'Oui — durée, exactitude'],
        ['Prévision des délais de livraison par fournisseur (ChatGPT)', '4', 'Non'],
        ['Alertes e-mail automatiques sur les commandes en retard (Make)', '7', 'Non'],
        ['Tableau de bord Power BI partagé', '8', 'Non'],
        ['Point d\'étape et intégration des retours', '4', 'Oui — usage réel'],
        ['Note de documentation, grille, présentation de la revue', '3', 'Oui — reproductibilité'],
      ],
    },
    result: "Un total de 35 heures estimées, soit 43,75 heures avec la marge de 25 % (35 × 1,25), pour 20 heures disponibles. Le projet tel qu'imaginé est irréalisable.",
    pitfall: "Oublier la marge : tout projet rencontre un export mal formé, un prompt à refaire, un retour à intégrer. Sans 25 % de marge, le premier imprévu consomme le temps de la finalisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 3',
    title: 'Comparer au temps disponible et décider de ce qui reste',
    intro: "La règle de décision tient en une ligne : heures estimées × 1,25 doivent être inférieures ou égales au temps réellement disponible. Si ce n'est pas le cas, vous réduisez maintenant, pas à mi-parcours en panique.",
    steps: [
      {
        title: 'Appliquer la règle',
        actions: [
          "Calculez : heures estimées × 1,25, et comparez au temps disponible de la section 6.",
          "Si la réponse est incertaine, traitez-la comme négative : vous coupez.",
        ],
      },
      {
        title: 'Choisir ce qu\'on coupe, dans cet ordre',
        actions: [
          "Coupez d'abord les lots non liés à un critère de succès du brief.",
          "Coupez ensuite les lots qui dépendent d'un outil ou d'un accès que vous n'avez jamais testé.",
          "Gardez toujours le cœur : ce qui permet de prouver les critères de succès et de remettre les trois livrables.",
          "Rappelez-vous qu'un livrable modeste mais complet et fonctionnel vaut toujours mieux, pour la certification, qu'un livrable ambitieux et inachevé.",
        ],
      },
    ],
    table: {
      columns: ['Lot', 'Heures', 'Lié à un critère ?', 'Décision'],
      rows: [
        ['Brief, dimensionnement, tests', '3,5', 'Oui', 'Garder'],
        ['Classeur version 1 (cœur)', '5,5', 'Oui', 'Garder'],
        ['Point d\'étape et retours', '4', 'Oui', 'Garder'],
        ['Note, grille, présentation', '3', 'Oui', 'Garder'],
        ['Prévision des délais (ChatGPT)', '4', 'Non', 'Hors périmètre'],
        ['Alertes e-mail (Make)', '7', 'Non', 'Hors périmètre'],
        ['Tableau Power BI', '8', 'Non', 'Hors périmètre'],
      ],
    },
    example: {
      title: 'Contrôle de la règle — fil rouge',
      lines: [
        "Lots gardés : 3,5 + 5,5 + 4 + 3 = 16 heures estimées",
        "Avec marge : 16 × 1,25 = 20 heures — temps disponible : 4 semaines × 5 h = 20 heures ✔",
        "Lots coupés : 4 + 7 + 8 = 19 heures, soit plus que tout le temps disponible : leur coupe était indispensable.",
      ],
    },
    result: "Une décision écrite : trois lots coupés, quatre gardés, et un contrôle chiffré qui montre que 16 heures estimées avec marge tiennent exactement dans les 20 heures disponibles.",
    pitfall: "Garder « un petit morceau » de chaque lot coupé : vous obtenez un livrable à moitié fini dans trois directions au lieu d'un livrable complet dans une.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 3',
    title: 'Écrire la liste « hors périmètre » et mettre le brief à jour',
    intro: "Ce que vous écartez doit être écrit : une liste « hors périmètre » évite d'y revenir par scrupule et transforme chaque idée écartée en évolution possible. Le brief est ensuite mis à jour pour refléter le périmètre réel.",
    steps: [
      {
        title: 'Rédiger la liste',
        actions: [
          "Dans la feuille « Dimensionnement », ajoutez un bloc « Hors périmètre — évolutions possibles après la livraison ».",
          "Pour chaque lot coupé, écrivez une ligne : l'idée, pourquoi elle est écartée, et la condition de reprise.",
        ],
      },
      {
        title: 'Mettre le brief à jour',
        actions: [
          "Section 4 : retirez du livrable tout ce qui est hors périmètre.",
          "Section 5 : vérifiez qu'aucun critère ne dépend d'un lot coupé.",
          "Section 6 : écrivez le total d'heures estimées et la marge.",
          "Renvoyez la version mise à jour au formateur en indiquant ce qui a changé.",
        ],
      },
    ],
    example: {
      title: 'Hors périmètre — fil rouge',
      lines: [
        "Prévision des délais par fournisseur : écartée (4 h, aucun critère de succès, dépend d'un historique d'un seul mois) ; reprise possible quand six mois d'historique seront accumulés.",
        "Alertes e-mail automatiques (Make) : écartées (7 h, outil non testé dans ce projet) ; reprise possible quand la mise à jour manuelle sera stabilisée (Module 08).",
        "Tableau Power BI : écarté (8 h, dépend d'une licence et d'un accès au service) ; reprise possible si le comité demande un suivi partagé en continu.",
      ],
    },
    result: "Un brief mis à jour avec un périmètre qui tient dans le temps disponible, et une liste « hors périmètre » prête à être citée à la revue finale comme preuve de maîtrise.",
    tip: "À la revue, annoncer calmement « voici ce que j'ai volontairement écarté et pourquoi » est un point positif : ce n'est pas un aveu de faiblesse, c'est la trace d'un projet dimensionné.",
  },

  // ───────────── Procédure 4 — Tester les outils à petite échelle ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Constituer l\'échantillon d\'essai et calculer la réponse de référence à la main',
    intro: "Avant de construire la version complète, chaque outil retenu est testé sur un échantillon réduit : un seul prompt sur un extrait de données, un seul brouillon de section. Un ajustement qui coûte quelques minutes maintenant peut coûter des heures s'il est découvert à l'étape 6. Pour juger un outil, il faut connaître la bonne réponse avant de l'interroger.",
    steps: [
      {
        title: 'Choisir l\'extrait',
        actions: [
          "Copiez 10 à 20 lignes de vos données réelles dans un fichier « echantillon_test.xlsx » (10 lignes suffisent pour un tableau).",
          "Incluez au moins un cas piège : une cellule vide, un doublon, une valeur limite.",
          "Appliquez les règles d'usage : colonnes utiles seulement, noms de personnes remplacés par des codes, compte professionnel.",
        ],
      },
      {
        title: 'Calculer la réponse de référence',
        actions: [
          "Calculez à la main, sur papier ou dans une cellule libre, le résultat attendu pour chaque indicateur du projet.",
          "Notez-le dans une cellule « Réponse de référence » : tout outil sera jugé contre elle.",
        ],
      },
    ],
    table: {
      columns: ['N° commande', 'Fournisseur', 'Site', 'Prévue', 'Réelle', 'Retard attendu'],
      rows: [
        ['001', 'Transco Sarl', 'Goma', '12/10', '12/10', '0'],
        ['002', 'Kivu Freight Co', 'Bukavu', '14/10', '16/10', '+ 2'],
        ['003', 'Alpha Logistics', 'Kinshasa', '15/10', '14/10', '− 1'],
        ['004', 'Beta Supply', 'Bukavu', '19/10', '26/10', '+ 7'],
        ['005', 'Transco Sarl', 'Goma', '20/10', '22/10', '+ 2'],
        ['006', 'Alpha Logistics', 'Kinshasa', '22/10', '22/10', '0'],
        ['007', 'Kivu Freight Co', 'Goma', '23/10', '(vide)', 'non livrée : cas piège'],
        ['008', 'Beta Supply', 'Kinshasa', '26/10', '30/10', '+ 4'],
        ['009', 'Transco Sarl', 'Goma', '27/10', '27/10', '0'],
        ['010', 'Kivu Freight Co', 'Bukavu', '29/10', '28/10', '− 1'],
      ],
    },
    example: {
      title: 'Réponse de référence — fil rouge (calculée à la main avant tout test)',
      lines: [
        "Commandes livrées : 9 sur 10 (la 007 est en cours, donc exclue du calcul).",
        "Livrées à l'heure (retard ≤ 0) : 001, 003, 006, 009, 010 = 5 → taux = 5 ÷ 9 = 55,6 %.",
        "Livrées en retard : 002 (+ 2), 004 (+ 7), 005 (+ 2), 008 (+ 4) → retard moyen = (2 + 7 + 2 + 4) ÷ 4 = 3,75 jours.",
      ],
    },
    result: "Un échantillon de 10 lignes dont une ligne piège, et une réponse de référence de trois chiffres (9 livrées, 55,6 %, 3,75 jours) écrite avant tout test d'outil.",
    pitfall: "Tester un outil sans connaître la bonne réponse : vous jugez alors la forme de ce qu'il répond, pas son exactitude, et un chiffre faux bien présenté passe pour un succès.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Tester Copilot dans Excel sur l\'échantillon',
    intro: "Copilot est candidat pour construire les colonnes calculées directement dans le fichier de travail. Vous testez un seul prompt, rédigé avec la norme CLARTE, et vous comparez le résultat à la réponse de référence.",
    steps: [
      {
        title: 'Préparer et lancer',
        actions: [
          "Dans « echantillon_test.xlsx », cliquez dans les données, Ctrl+T, cochez « Mon tableau comporte des en-têtes », nommez le tableau T_Cmd (Création de tableau > Nom du tableau).",
          "Vérifiez que le fichier est enregistré sur OneDrive ou SharePoint, enregistrement automatique activé.",
          "Accueil > Copilot, collez le prompt et envoyez.",
          "Lisez les formules proposées dans la barre de formule avant de cliquer sur « Insérer les colonnes ».",
        ],
      },
      {
        title: 'Juger la réponse',
        actions: [
          "Comparez ligne par ligne Retard_j et Statut avec la colonne « Retard attendu ».",
          "Si une ligne diverge, notez laquelle et pourquoi, puis corrigez le prompt (une seule modification à la fois) et relancez.",
        ],
      },
    ],
    example: {
      title: 'Prompt de test Copilot — fil rouge (à copier, version corrigée)',
      lines: [
        "« Tu es analyste logistique pour une ONG. [A]",
        "Dans le tableau T_Cmd (colonnes : N° commande, Date commande, Fournisseur, Site, Date prévue, Date réelle, Montant (USD)), ajoute deux colonnes calculées à droite : Retard_j = Date réelle − Date prévue, en jours, cellule vide si la commande n'a pas de Date réelle, jamais 0 ; Statut = « À l'heure » si Retard_j ≤ 0, « En retard » si Retard_j > 0, « En cours » si la Date réelle est vide. [C + L]",
        "Donne les formules en français avec références structurées, chacune suivie d'une phrase qui explique ce qu'elle fait. [T]",
        "Ne modifie aucune autre colonne. [R]",
        "Exemple : prévue le 15/10, réelle le 14/10 → Retard_j = −1, Statut = À l'heure. [E] »",
      ],
    },
    result: "Un test chiffré : au premier essai, Copilot a renvoyé −46 318 jours pour la commande 007 (cellule vide traitée comme zéro, moins la date prévue), donc un Statut « À l'heure » faux. Avec la règle « cellule vide, jamais 0 » ajoutée au prompt, les 10 lignes correspondent à la colonne « Retard attendu ».",
    tip: "Gardez les deux versions du prompt dans le carnet de prompts : « version 1 — échec : la règle de la cellule vide manquait ; version 2 — réussite ». C'est la matière de votre note de documentation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Tester ChatGPT Data Analysis comme contrôle indépendant',
    intro: "Un chiffre produit par un outil ne devient fiable que s'il est recalculé par un autre moyen. Vous testez ChatGPT Data Analysis, qui exécute réellement du code sur le fichier, pour recalculer les indicateurs de façon indépendante des formules Excel.",
    steps: [
      {
        title: 'Préparer le fichier et lancer',
        actions: [
          "Enregistrez l'échantillon en CSV : Fichier > Enregistrer une copie > « CSV UTF-8 (délimité par des virgules) », nom echantillon_test.csv.",
          "Ouvrez une nouvelle conversation dans votre espace ChatGPT professionnel, joignez le CSV, collez le prompt et envoyez.",
          "Ouvrez le détail de l'analyse (affichage du code) et vérifiez quelles lignes ont été lues et comment la ligne sans date réelle a été traitée.",
        ],
      },
      {
        title: 'Comparer à la réponse de référence',
        actions: [
          "Contrôlez le nombre de lignes lues annoncé en fin de réponse : il doit être 10.",
          "Comparez chaque indicateur à votre référence. Si tout concorde, l'outil est retenu comme contrôle ; sinon, notez la cause de l'écart.",
        ],
      },
    ],
    example: {
      title: 'Prompt de contrôle ChatGPT — fil rouge (à copier)',
      lines: [
        "« Tu es analyste de données pour le service achats d'une ONG. Je joins un fichier de 10 commandes fournisseurs (colonnes : N° commande, Fournisseur, Site, Date prévue, Date réelle). La commande sans Date réelle est en cours : exclus-la des calculs de taux et de retard.",
        "Calcule : (1) pour chaque commande, le retard en jours (Date réelle − Date prévue) et son statut (À l'heure si retard ≤ 0, En retard sinon, En cours) ; (2) le taux de livraison à l'heure = commandes livrées à l'heure ÷ commandes livrées ; (3) le retard moyen des seules commandes en retard.",
        "Présente le détail ligne par ligne dans un tableau, puis les deux indicateurs. Utilise uniquement les numéros de commande. Termine par le nombre de lignes lues. »",
      ],
    },
    result: "ChatGPT annonce 10 lignes lues, 9 commandes livrées, 5 à l'heure → 55,6 %, retard moyen des quatre commandes en retard 3,75 jours : identique à la réponse de référence. Le code exécuté confirme que la ligne 007 a bien été exclue.",
    pitfall: "Se contenter du résultat sans ouvrir le code exécuté : l'outil peut avoir lu 9 lignes au lieu de 10 sans le dire. La phrase « termine par le nombre de lignes lues » est votre premier contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Tester Claude sur une seule section de la note de documentation',
    intro: "Claude est candidat pour rédiger la note de 10 à 15 lignes qui rend le projet reproductible. Vous ne lui demandez pas la note entière : un seul brouillon de section suffit pour juger s'il reste fidèle à votre démarche ou s'il invente.",
    steps: [
      {
        title: 'Soumettre une section',
        actions: [
          "Rédigez en trois lignes brutes ce que vous avez fait pendant les deux tests précédents.",
          "Ouvrez Claude, collez ces trois lignes avec le prompt ci-dessous et demandez la section « Mettre à jour le classeur » de la note.",
        ],
      },
      {
        title: 'Chercher l\'invention',
        actions: [
          "Relisez la réponse ligne par ligne contre vos trois lignes brutes : chaque étape de la sortie doit exister dans votre texte.",
          "Soulignez tout ce qui n'y figure pas : outil, bouton ou paramètre inventé.",
          "Ajoutez au prompt la contrainte « n'invente aucune étape » si Claude a ajouté quelque chose.",
        ],
      },
    ],
    example: {
      title: 'Prompt de test Claude — fil rouge (à copier)',
      lines: [
        "« Tu es rédacteur technique pour une organisation humanitaire. Voici mes notes brutes : (1) coller l'export dans le tableau T_Cmd ; (2) Copilot ajoute Retard_j et Statut avec le prompt n° 2 ; (3) recalcul de contrôle avec ChatGPT sur le CSV.",
        "Rédige, pour un collègue qui n'a jamais vu le classeur, la section « Mettre à jour le classeur » en étapes numérotées de 15 mots maximum. N'invente aucune étape qui ne figure pas dans mes notes. Si une étape te semble manquer, signale-la à part, sans l'ajouter. »",
      ],
    },
    result: "Claude rend quatre étapes claires dont une inventée (« activez la macro d'actualisation ») : le classeur n'a aucune macro. Avec la contrainte « n'invente aucune étape » et la demande de signaler les manques à part, il rend trois étapes fidèles et signale qu'il manque la vérification du nombre de lignes.",
    tip: "L'observation « il manque une étape de contrôle » est précieuse : Claude a joué le rôle de relecteur critique, pas seulement de rédacteur. Retenez cette consigne pour la note finale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Décider outil par outil et ouvrir le carnet de prompts',
    intro: "Le test n'a de valeur que s'il débouche sur une décision écrite pour chaque outil : garder, ajuster ou abandonner. Cette décision met à jour la section 3 du brief et lance votre carnet de prompts.",
    steps: [
      {
        title: 'Consigner les décisions',
        actions: [
          "Dans une feuille « Tests », créez les colonnes : Outil, Tâche testée, Résultat, Temps passé, Décision.",
          "Écrivez une ligne par outil testé, avec le résultat chiffré comparé à la référence.",
          "Retenez une décision parmi : Garder, Ajuster (avec la modification), Abandonner (avec l'outil de remplacement).",
        ],
      },
      {
        title: 'Mettre à jour le brief et ouvrir le carnet',
        actions: [
          "Si un outil est abandonné ou si un rôle change, modifiez la section 3 du brief et prévenez le formateur.",
          "Créez la feuille « Journal des prompts » avec les colonnes Date, Outil, Prompt (copié tel quel), Résultat obtenu, Retenu ?, et recopiez les prompts testés, échecs compris.",
        ],
      },
    ],
    table: {
      columns: ['Outil', 'Tâche testée', 'Résultat', 'Temps', 'Décision'],
      rows: [
        ['Copilot dans Excel', 'Colonnes Retard_j et Statut', '10 lignes correctes après ajout de la règle « cellule vide, jamais 0 »', '50 min', 'Ajuster : prompt version 2 retenu'],
        ['ChatGPT Data Analysis', 'Recalcul de contrôle', '9 livrées, 55,6 %, 3,75 jours : identique à la référence', '30 min', 'Garder comme contrôle indépendant'],
        ['Claude', 'Section « Mettre à jour le classeur »', 'Une étape inventée au premier essai, corrigée', '25 min', 'Garder avec la contrainte « n\'invente aucune étape »'],
        ['Perplexity', 'Non testé', 'Aucune recherche externe dans le projet', '—', 'Non utilisé, noté au brief'],
      ],
    },
    result: "Un tableau de test de quatre lignes, un brief inchangé sur le fond (trois outils, rôles confirmés) et un carnet de prompts qui contient déjà quatre prompts. Temps passé : 1 h 45 sur les 2 h prévues.",
    tip: "Dans le carnet, conservez les échecs : c'est précisément ce que le critère « Reproductibilité / documentation » valorise, parce qu'un collègue évitera ainsi de refaire la même erreur.",
  },

  // ───────────── Procédure 5 — Produire la version 1 ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: 'Organiser le dossier de production et tenir le carnet de prompts',
    intro: "Le livrable final doit pouvoir être retrouvé, rejoué et expliqué. Vous posez une organisation simple avant de produire, et vous prenez l'habitude de noter chaque prompt au moment où vous l'utilisez, pas le soir de la remise.",
    steps: [
      {
        title: 'Créer le dossier et sauvegarder les gabarits',
        actions: [
          "Créez le dossier « Mini-projet_IA » avec quatre sous-dossiers : « 01_Brief », « 02_Données », « 03_Production », « 04_Livrable ».",
          "Rangez dans 01_Brief le brief signé ; dans 02_Données l'export brut en lecture seule ; dans 03_Production la copie de travail du classeur.",
          "Copiez dans 04_Livrable, pour plus tard, la grille grille-evaluation-livrable-mini-projet.xlsx.",
        ],
      },
      {
        title: 'Régler le carnet de prompts',
        actions: [
          "Dans la copie de travail, gardez la feuille « Journal des prompts » ouverte : une ligne par prompt, collée tel quel, avec le résultat obtenu et la décision.",
          "Notez aussi les données déposées dans l'outil, avec la date : c'est la trace du respect des règles d'usage.",
        ],
      },
    ],
    example: {
      title: 'Carnet de prompts — premières lignes du fil rouge',
      lines: [
        "24/11/2026 | Copilot | Prompt n° 1 (sans règle de cellule vide) | Retard_j = −46 318 pour la commande 007 | Non retenu — règle manquante",
        "24/11/2026 | Copilot | Prompt n° 2 (« cellule vide, jamais 0 ») | 10 lignes conformes à la référence | Retenu",
        "25/11/2026 | ChatGPT Data Analysis | Prompt de contrôle (10 lignes, CSV) | 5 sur 9 livrées à l'heure, 55,6 %, 3,75 jours | Retenu — données déposées : échantillon sans donnée personnelle",
      ],
    },
    result: "Une arborescence à quatre dossiers, le brief et l'export brut rangés, et un carnet de prompts déjà alimenté par les essais de la procédure 4.",
    pitfall: "Reconstituer le carnet de prompts de mémoire après coup : les prompts qui ont échoué disparaissent, et c'est pourtant eux qui prouvent le raisonnement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: 'Préparer le jeu de données complet et vérifier sa qualité',
    intro: "L'échantillon était propre ; l'export complet ne l'est jamais tout à fait. Avant de calculer quoi que ce soit, vous mettez les données sous forme de tableau et vous vérifiez quatre points : le nombre de lignes, les doublons, les dates, les cellules vides.",
    steps: [
      {
        title: 'Charger l\'export',
        actions: [
          "Ouvrez la copie de travail, créez la feuille « Export » et collez-y l'export complet d'octobre (valeurs seulement : clic droit > Collage spécial > Valeurs).",
          "Cliquez dans les données, Ctrl+T, cochez « Mon tableau comporte des en-têtes », nommez le tableau T_Cmd.",
          "Notez le nombre de lignes de l'export brut avant toute action.",
        ],
      },
      {
        title: 'Lancer les quatre contrôles',
        actions: [
          "Nombre de lignes : =LIGNES(T_Cmd).",
          "Doublons de numéro de commande : =LIGNES(T_Cmd)-NBVAL(UNIQUE(T_Cmd[N° commande])) (Excel 365).",
          "Dates en texte : =SOMMEPROD(--NON(ESTNUM(T_Cmd[Date prévue]))) ; pour la Date réelle : =SOMMEPROD((T_Cmd[Date réelle]<>\"\")*NON(ESTNUM(T_Cmd[Date réelle]))).",
          "Commandes sans date réelle : =NB.VIDE(T_Cmd[Date réelle]).",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Formule', 'Résultat'],
      rows: [
        ['Lignes de l\'export', '=LIGNES(T_Cmd)', '48'],
        ['Doublons de N° de commande', 'lignes − valeurs uniques', '0'],
        ['Dates en texte (prévue / réelle)', 'SOMMEPROD(…ESTNUM…)', '0 / 0'],
        ['Commandes sans date réelle', '=NB.VIDE(T_Cmd[Date réelle])', '5 (en cours au 31/10)'],
      ],
    },
    result: "Un jeu de données de 48 commandes, sans doublon ni date en texte, dont cinq sont encore en cours : elles seront exclues des taux mais comptées à part.",
    tip: "Si un contrôle remonte des anomalies, appliquez les méthodes de nettoyage du Module 09 (diagnostic, formules de contrôle, rapprochement brut / propre) avant de poursuivre : un indicateur calculé sur des données sales est faux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: 'Ajouter les colonnes calculées avec Copilot et les vérifier',
    intro: "Vous rejouez avec l'export complet le prompt validé pendant les tests (version 2). La différence avec l'essai, c'est que vous ne jugez plus sur 10 lignes mais sur 48 : le contrôle devient un contrôle de totaux.",
    steps: [
      {
        title: 'Lancer Copilot',
        actions: [
          "Cliquez dans T_Cmd, Accueil > Copilot, collez le prompt n° 2 du carnet et envoyez.",
          "Lisez les deux formules proposées avant d'insérer ; si elles diffèrent de celles du test, comparez-les.",
          "Cliquez sur « Insérer les colonnes » : Retard_j et Statut s'ajoutent à droite du tableau.",
        ],
      },
      {
        title: 'Contrôler les totaux',
        actions: [
          "Comptez chaque statut : =NB.SI(T_Cmd[Statut];\"À l'heure\"), puis « En retard », puis « En cours ».",
          "Vérifiez que la somme des trois statuts est égale au nombre de lignes du tableau.",
          "Vérifiez 5 lignes au hasard à la main, dont une ligne « En cours » et une ligne en retard.",
        ],
      },
    ],
    example: {
      title: 'Formules retenues (version française d\'Excel)',
      lines: [
        `Retard_j : =SI([@[Date réelle]]="";"";[@[Date réelle]]-[@[Date prévue]])`,
        `Statut : =SI([@[Date réelle]]="";"En cours";SI([@Retard_j]<=0;"À l'heure";"En retard"))`,
        "Contrôle : 28 À l'heure + 15 En retard + 5 En cours = 48 lignes ✔",
        "Version anglaise d'Excel : IF à la place de SI, virgule comme séparateur.",
      ],
    },
    result: "Deux colonnes calculées sur 48 lignes, une somme de statuts égale au nombre de lignes, et cinq lignes vérifiées à la main. Les prompts utilisés sont notés dans le carnet.",
    pitfall: "Accepter les formules sans les lire : si Copilot a mis 0 pour les cellules vides, toutes les commandes en cours passent « À l'heure » et le taux est gonflé sans aucun message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: 'Construire la feuille « Indicateurs » : trois indicateurs, par fournisseur et au total',
    intro: "Le brief s'est engagé sur trois indicateurs seulement : le taux de livraison à l'heure, le retard moyen des commandes en retard et le nombre de commandes en cours. Vous les construisez par fournisseur, avec une ligne de total et une ligne de rapprochement.",
    steps: [
      {
        title: 'Poser le tableau et les formules',
        actions: [
          "Créez la feuille « Indicateurs » ; en A4:F4 saisissez les en-têtes : Fournisseur, Livrées, À l'heure, Taux à l'heure, Retard moyen (jours), En cours.",
          "En A5:A8, saisissez les quatre fournisseurs ; en B5 la formule des livrées ; en C5 celle des commandes à l'heure ; en D5 le taux ; en E5 le retard moyen ; en F5 les commandes en cours (voir exemple) ; étendez jusqu'à la ligne 8.",
          "Ligne 9 « Total » : sommes pour B, C, F ; taux global et retard moyen global calculés sur l'ensemble.",
        ],
      },
      {
        title: 'Verrouiller le rapprochement',
        actions: [
          "En B11, saisissez la formule de rapprochement : livrées + en cours doit égaler le nombre de lignes du tableau.",
          "Appliquez le format Pourcentage (1 décimale) à D et Nombre (1 décimale) à E.",
        ],
      },
    ],
    example: {
      title: 'Formules de la ligne 5 (Transco Sarl) et du total',
      lines: [
        `B5 : =NB.SI.ENS(T_Cmd[Fournisseur];$A5;T_Cmd[Statut];"<>En cours")`,
        `C5 : =NB.SI.ENS(T_Cmd[Fournisseur];$A5;T_Cmd[Statut];"À l'heure")`,
        `D5 : =SIERREUR(C5/B5;"")   E5 : =SIERREUR(MOYENNE.SI.ENS(T_Cmd[Retard_j];T_Cmd[Fournisseur];$A5;T_Cmd[Statut];"En retard");"")`,
        `F5 : =NB.SI.ENS(T_Cmd[Fournisseur];$A5;T_Cmd[Statut];"En cours")   E9 : =MOYENNE.SI(T_Cmd[Statut];"En retard";T_Cmd[Retard_j])`,
        "B11 : =B9+F9=LIGNES(T_Cmd)  → VRAI si le tableau est complet",
      ],
    },
    table: {
      columns: ['Fournisseur', 'Livrées', 'À l\'heure', 'Taux à l\'heure', 'Retard moyen (jours)', 'En cours'],
      rows: [
        ['Transco Sarl', '13', '11', '84,6 %', '3,0', '1'],
        ['Alpha Logistics', '9', '7', '77,8 %', '3,0', '1'],
        ['Kivu Freight Co', '11', '6', '54,5 %', '2,8', '1'],
        ['Beta Supply', '10', '4', '40,0 %', '5,7', '2'],
        ['Total', '43', '28', '65,1 %', '4,0', '5'],
      ],
    },
    result: "Le tableau d'indicateurs d'octobre 2026 : 28 commandes livrées à l'heure sur 43 livrées (65,1 %), retard moyen de 4,0 jours sur 15 commandes en retard, 5 commandes en cours. Rapprochement : 43 + 5 = 48 ✔.",
    pitfall: "Diviser par le nombre total de commandes (48) au lieu des commandes livrées (43) : le taux tombe à 58,3 % et pénalise des fournisseurs dont la commande n'est pas encore due.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: 'Contrôler les indicateurs avec ChatGPT sur l\'export complet',
    intro: "C'est le contrôle croisé du projet : ChatGPT recalcule indépendamment ce que les formules Excel viennent de produire. Si les deux concordent à la décimale près, l'indicateur peut figurer dans le livrable ; sinon, on cherche la cause avant d'aller plus loin.",
    steps: [
      {
        title: 'Lancer le contrôle',
        actions: [
          "Enregistrez T_Cmd en CSV UTF-8 : controle_octobre.csv.",
          "Ouvrez une nouvelle conversation ChatGPT, joignez le fichier et collez le prompt du test (procédure 4, étape 3) adapté : 48 lignes, quatre fournisseurs.",
          "Ajoutez : « Donne aussi le taux et le retard moyen par fournisseur, et le nombre de commandes en cours. »",
        ],
      },
      {
        title: 'Comparer cellule par cellule',
        actions: [
          "Dans une feuille « Contrôle », créez les colonnes : Indicateur, Résultat Excel, Résultat ChatGPT, Écart.",
          "Saisissez Écart = Excel − ChatGPT ; tout écart non nul se règle avant d'avancer.",
          "Causes fréquentes : commandes en cours comptées dans le dénominateur, ligne d'en-tête lue comme une commande, arrondi.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Excel', 'ChatGPT, 1re réponse', 'ChatGPT, après correction', 'Écart'],
      rows: [
        ['Lignes lues', '48', '48', '48', '0'],
        ['Taux à l\'heure global', '65,1 %', '58,3 % (28 ÷ 48)', '65,1 %', '0'],
        ['Taux Beta Supply', '40,0 %', '33,3 % (4 ÷ 12)', '40,0 %', '0'],
        ['Retard moyen (jours)', '4,0', '4,0', '4,0', '0'],
        ['Commandes en cours', '5', '5', '5', '0'],
      ],
    },
    result: "Cinq indicateurs recoupés. L'écart de la première réponse venait du dénominateur (commandes en cours incluses) ; une phrase ajoutée au prompt — « exclus les commandes en cours du dénominateur » — a ramené tous les écarts à zéro. Le prompt corrigé est noté dans le carnet.",
    tip: "L'écart a un enseignement pour la note de documentation : le contrôle croisé n'est pas un luxe, il a attrapé une erreur de définition. Notez-le dans la section « pièges rencontrés ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: 'Construire la feuille de synthèse lisible en une minute',
    intro: "Le destinataire n'ouvrira pas vos formules : il lira trois chiffres et un graphique. La synthèse est placée en tête de la feuille « Indicateurs » et suit la règle vue au Module 09 : un graphique se conçoit à partir d'un message, et son titre énonce la conclusion.",
    steps: [
      {
        title: 'Placer les trois chiffres clés',
        actions: [
          "En tête de la feuille « Indicateurs », lignes 1 à 2, affichez trois cellules liées au tableau : taux global (=D9), retard moyen (=E9), commandes en cours (=F9).",
          "Ajoutez le mois concerné en titre : « Octobre 2026 », saisi une seule fois dans une cellule d'en-tête.",
        ],
      },
      {
        title: 'Ajouter le graphique-message',
        actions: [
          "Triez le tableau fournisseurs par taux croissant, sélectionnez les colonnes Fournisseur et Taux à l'heure, puis Insertion > Graphiques > Barres > Barres groupées.",
          "Titre : le message, en une phrase avec un chiffre. Supprimez la légende et le quadrillage, affichez les étiquettes de données.",
          "Mettez en couleur d'accent les deux fournisseurs sous 60 %, les autres en gris.",
        ],
      },
    ],
    example: {
      title: 'Synthèse attendue — fil rouge',
      lines: [
        "Octobre 2026 — Taux de livraison à l'heure : 65,1 % — Retard moyen des commandes en retard : 4,0 jours — Commandes en cours : 5",
        "Titre du graphique : « Beta Supply et Kivu Freight livrent à l'heure moins de 6 fois sur 10 »",
        "Barres triées : Beta Supply 40,0 % — Kivu Freight Co 54,5 % — Alpha Logistics 77,8 % — Transco Sarl 84,6 %",
      ],
    },
    result: "Une synthèse qu'un lecteur comprend en une minute : trois chiffres, un graphique dont le titre est la conclusion, aucune formule visible.",
    pitfall: "Titrer le graphique « Taux par fournisseur » : c'est une description, pas un message. Le lecteur doit alors chercher lui-même la conclusion dans les barres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'Chronométrer la mise à jour sur un second export et figer la version 1',
    intro: "Le premier critère de succès du brief est une durée. Vous le prouvez en rejouant la mise à jour sur un autre mois, montre en main : un livrable qui n'a servi qu'une fois n'a pas prouvé qu'il était réutilisable.",
    steps: [
      {
        title: 'Rejouer la mise à jour',
        actions: [
          "Enregistrez une copie du classeur, démarrez le chronomètre, puis : supprimez les lignes de T_Cmd sans toucher à l'en-tête ; collez l'export de septembre ; vérifiez les compteurs de la procédure 5, étape 2.",
          "Les colonnes Retard_j et Statut se remplissent seules : vérifiez que la somme des statuts égale le nombre de lignes.",
          "Lisez l'onglet « Indicateurs », lancez le contrôle ChatGPT et notez le résultat dans le carnet ; arrêtez le chronomètre.",
        ],
      },
      {
        title: 'Figer la version 1',
        actions: [
          "Si le critère de durée est atteint, enregistrez le classeur sous « Suivi_Delais_Fournisseurs_V1.xlsx » dans 03_Production.",
          "Remettez l'export d'octobre dans T_Cmd pour que la V1 s'ouvre sur un cas complet.",
          "Notez la durée de chaque sous-étape dans le carnet.",
        ],
      },
    ],
    table: {
      columns: ['Sous-étape de la mise à jour', 'Durée'],
      rows: [
        ['Coller l\'export de septembre dans T_Cmd', '3 min'],
        ['Vérifier lignes, doublons, dates, cellules vides', '5 min'],
        ['Lire « Indicateurs » et le rapprochement 43 + 5 = 48', '4 min'],
        ['Contrôle croisé ChatGPT et comparaison', '8 min'],
        ['Noter le résultat dans le carnet de prompts', '2 min'],
        ['Total', '22 min'],
      ],
    },
    result: "Septembre 2026 : 44 commandes, 40 livrées, 31 à l'heure → 77,5 % ; 4 commandes en cours. Mise à jour en 22 minutes contre 210 minutes (3 h 30) avant : 188 minutes gagnées (− 89,5 %), critère de durée atteint. La V1 est figée.",
    pitfall: "Chronométrer en connaissant déjà tout par cœur : faites l'essai comme si le classeur était nouveau pour vous, en suivant vos propres étapes écrites, sinon la durée mesurée sera optimiste.",
  },


  // ───────────── Procédure 6 — Point d'étape intermédiaire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Préparer le dossier d\'étape et demander le rendez-vous',
    intro: "Le point d'étape n'est pas optionnel dans la méthode : c'est ce qui distingue un projet piloté d'un projet livré à l'aveugle. Il porte sur trois questions : le périmètre est-il toujours réaliste, le choix d'outils est-il pertinent, la structure du livrable va-t-elle dans la bonne direction ? Pour que 20 minutes suffisent, le dossier est prêt la veille.",
    steps: [
      {
        title: 'Assembler le dossier',
        actions: [
          "Rassemblez quatre pièces : la version 1 du livrable, le brief à jour, le tableau de test des outils, le carnet de prompts.",
          "Préparez la démonstration : ouvrez la V1 avec l'export d'octobre déjà chargé, prête à être montrée directement.",
          "Rédigez les trois questions, une par sujet, sous forme fermée.",
        ],
      },
      {
        title: 'Envoyer la demande',
        actions: [
          "Envoyez le dossier 48 heures avant la date inscrite au brief, avec les trois questions et la durée demandée.",
          "Confirmez le mode d'échange (visioconférence ou présentiel) et l'heure.",
        ],
      },
    ],
    example: {
      title: 'Message au formateur — fil rouge (envoyé le mercredi 2/12/2026)',
      lines: [
        "« Bonjour, voici mon dossier pour le point d'étape de vendredi 4/12 à 10 h : brief à jour, classeur en version 1, tableau de test, carnet de prompts.",
        "Trois questions : (1) le périmètre — trois indicateurs, quatre fournisseurs, un export par mois — est-il réaliste pour la livraison du 18/12 ? (2) le choix d'outils — Copilot, ChatGPT Data Analysis, Claude — est-il pertinent, et ai-je oublié un contrôle ? (3) la structure du classeur en quatre feuilles va-t-elle dans la bonne direction ?",
        "J'ai besoin de 20 minutes, dont 5 de démonstration. Cordialement, Amani Kahindo. »",
      ],
    },
    result: "Un dossier de quatre pièces envoyé 48 heures avant, avec trois questions précises. Le formateur peut répondre en connaissance de cause plutôt que de découvrir le projet en séance.",
    pitfall: "Sauter le point d'étape « pour gagner du temps » : un problème de périmètre ou d'outil découvert à la revue finale ne laisse plus le temps de le corriger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Conduire le point d\'étape en 20 minutes',
    intro: "Le point d'étape est un entretien de travail, pas une présentation. Vous montrez la V1 directement, vous posez vos trois questions dans l'ordre, et vous notez chaque réponse au moment où elle est donnée.",
    steps: [
      {
        title: 'Suivre le déroulé',
        actions: [
          "3 minutes : rappelez le problème en une phrase et les critères de succès du brief.",
          "5 minutes : montrez la V1 en la faisant fonctionner — collez un export, lisez les indicateurs.",
          "10 minutes : posez les trois questions, une à la fois ; reformulez chaque réponse pour la valider.",
          "2 minutes : récapitulez les décisions et la date de la revue finale.",
        ],
      },
      {
        title: 'Prendre des notes exploitables',
        actions: [
          "Notez chaque remarque avec la question concernée (périmètre, outils, structure).",
          "Demandez, pour toute remarque floue : « Qu'est-ce que je dois voir de différent la prochaine fois ? »",
        ],
      },
    ],
    example: {
      title: 'Notes prises par Amani — vendredi 4/12/2026, 10 h',
      lines: [
        "Périmètre : réaliste. Ne pas ajouter la prévision des délais envisagée au départ ; la garder en hors-périmètre et le dire à la revue.",
        "Outils : le choix est cohérent, chaque outil a un rôle distinct. Le premier prompt Copilot a échoué sur la cellule vide : documenter cet échec dans la note, c'est un point fort.",
        "Structure : la feuille « Mode d'emploi » annoncée au brief n'existe pas encore. Rendre visible le rapprochement quand il est faux. Ajouter la comparaison avec le mois précédent dans la synthèse.",
      ],
    },
    result: "Trois réponses datées, une par question, et une liste de remarques à trier. Aucun changement de périmètre n'est décidé en séance : vous les trierez à tête reposée à l'étape suivante.",
    tip: "Montrez le livrable en le faisant fonctionner, jamais en le décrivant. Une démonstration de cinq minutes fait voir plus de problèmes qu'un quart d'heure d'explications.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Trier les retours : intégrer, reporter ou écarter',
    intro: "Tout retour n'est pas à intégrer : certains dépassent le temps qui vous reste, d'autres vont à l'encontre du périmètre convenu. Un tri explicite, avec une raison pour chaque décision, évite à la fois l'inertie et l'emballement.",
    steps: [
      {
        title: 'Construire le tableau de retours',
        actions: [
          "Créez une feuille « Retours » avec les colonnes : Retour, Question concernée, Décision, Raison, Charge estimée.",
          "Saisissez chaque remarque du point d'étape sur sa propre ligne.",
          "Pour chacune, choisissez : Intégrer (dans le temps restant), Reporter (hors-périmètre, à lister) ou Écarter (avec la raison).",
        ],
      },
      {
        title: 'Vérifier le budget',
        actions: [
          "Additionnez les charges des retours à intégrer.",
          "Comparez-les à la marge restante du dimensionnement : si le total dépasse, déplacez un retour vers « Reporter ».",
        ],
      },
    ],
    table: {
      columns: ['Retour', 'Question', 'Décision', 'Raison', 'Charge'],
      rows: [
        ['Écrire la feuille « Mode d\'emploi » annoncée au brief', 'Structure', 'Intégrer', 'Promesse du brief non tenue', '45 min'],
        ['Rendre visible le rapprochement quand il est faux (mise en forme rouge)', 'Structure', 'Intégrer', 'Protège contre un export tronqué', '20 min'],
        ['Ajouter la comparaison avec le mois précédent à la synthèse', 'Structure', 'Intégrer', 'Donne un sens au 65,1 % (septembre : 77,5 %)', '30 min'],
        ['Documenter l\'échec du premier prompt Copilot dans la note', 'Outils', 'Intégrer', 'Alimente le critère de reproductibilité', '15 min'],
        ['Ajouter une prévision des délais à trois mois', 'Périmètre', 'Écarter', 'Déjà inscrite au hors-périmètre', '—'],
      ],
    },
    result: "Un tableau de cinq retours triés : quatre à intégrer pour un total de 110 minutes (45 + 20 + 30 + 15), un écarté avec sa raison. Le budget de finalisation (3 heures) est respecté.",
    pitfall: "Intégrer tous les retours « pour bien faire » : chaque ajout non prévu consomme la marge qui vous protège des imprévus de la dernière semaine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Établir le plan de finalisation daté et mettre à jour le brief',
    intro: "Un retour intégré mais non planifié ne sera pas fait. Vous transformez le tableau de retours en plan daté, avec une vérification pour chaque tâche, et vous informez le formateur de ce qui change par rapport au brief.",
    steps: [
      {
        title: 'Dater et vérifier',
        actions: [
          "Dans la feuille « Retours », ajoutez trois colonnes : Date, Durée, Vérification.",
          "Placez chaque tâche dans un créneau déjà réservé à l'agenda (les cinq heures hebdomadaires).",
          "Définissez pour chaque tâche la preuve qu'elle est faite : un test, un témoin, un chiffre.",
        ],
      },
      {
        title: 'Mettre à jour le brief',
        actions: [
          "Si le périmètre ou le livrable change, modifiez les sections 4 et 5 du brief et notez la date de la modification.",
          "Si rien ne change, écrivez-le : « Brief inchangé après le point d'étape du 4/12 ».",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Tâche', 'Durée', 'Vérification'],
      rows: [
        ['Lun. 7/12', 'Écrire la feuille « Mode d\'emploi » (cinq lignes)', '45 min', 'Lue par Josué Bahati sans question'],
        ['Lun. 7/12', 'Mise en forme conditionnelle rouge sur le rapprochement', '20 min', 'Passe au rouge quand on supprime une ligne de T_Cmd'],
        ['Mar. 8/12', 'Ajouter la comparaison au mois précédent à la synthèse', '30 min', 'Affiche 77,5 % → 65,1 % (− 12,4 points)'],
        ['Mar. 8/12', 'Documenter l\'échec du prompt Copilot n° 1 dans le carnet', '15 min', 'Relu avant la rédaction de la note'],
      ],
    },
    result: "Un plan de finalisation de 110 minutes, daté du 7 et 8 décembre, avec une preuve par tâche. Le brief est inchangé sur le fond ; le formateur a été prévenu par message : « Brief inchangé après le point d'étape du 4/12 ».",
    tip: "Gardez un retour « à intégrer si le temps le permet » en bas de la liste : il ne sera traité que si les tâches obligatoires finissent en avance, sans jamais menacer le reste du plan.",
  },

  // ───────────── Procédure 7 — Finaliser et s'auto-évaluer ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Finaliser le livrable avec la checklist « utilisable lundi matin »',
    intro: "Après l'intégration des retours, le livrable passe un dernier contrôle : peut-on l'ouvrir lundi matin, sur un export réel, sans rien reconstruire ? C'est le test du module appliqué au livrable lui-même.",
    steps: [
      {
        title: 'Nettoyer et sécuriser',
        actions: [
          "Supprimez les feuilles de test, les données d'essai et les commentaires de travail.",
          "Renommez les feuilles avec des noms explicites : Mode d'emploi, Export, Indicateurs, Journal des prompts.",
          "Protégez les cellules de formules de la feuille « Indicateurs » : Révision > Protéger la feuille, en laissant la zone de saisie libre.",
          "Enregistrez sous le nom final : Suivi_Delais_Fournisseurs.xlsx.",
        ],
      },
      {
        title: 'Rejouer sur un export réel et prouver l\'exactitude',
        actions: [
          "Ouvrez le classeur sur un autre poste ou un autre compte, collez l'export le plus récent et chronométrez.",
          "Tirez 20 commandes au hasard (=ALEA.ENTRE.BORNES) et recalculez leur statut à la main : l'écart doit être nul.",
          "Demandez la validation écrite du destinataire.",
        ],
      },
    ],
    example: {
      title: 'Résultats de la finalisation — fil rouge',
      lines: [
        "Export de novembre 2026 collé le mercredi 9/12 : 51 commandes, 44 livrées, 33 à l'heure → 75,0 % ; 7 en cours ; 44 + 7 = 51 ✔ — mise à jour en 19 minutes.",
        "Échantillon de 20 commandes tirées au hasard et recalculées à la main : 20 statuts identiques, écart nul.",
        "Validation de Patrick Mumbere, 10/12 à 14 h 20 : « Je l'utilise pour le point du 8 janvier. »",
      ],
    },
    result: "Un classeur final nommé, protégé, testé sur un export jamais vu pendant la conception, qui répond aux critères d'exactitude, de durée et d'usage réel du brief.",
    pitfall: "Tester uniquement sur les exports utilisés pendant la conception : le classeur « marche » parce qu'il a été réglé dessus. Un export nouveau est le seul vrai test.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Rédiger la note de documentation de 10 à 15 lignes',
    intro: "Un livrable sans trace des prompts et des étapes suivies n'est pas reproductible, ni par vous dans six mois, ni par un collègue. La note de 10 à 15 lignes est le deuxième élément du livrable 2 ; elle est directement notée par le critère « Reproductibilité / documentation ». Matière première : votre carnet de prompts.",
    steps: [
      {
        title: 'Structurer la note',
        actions: [
          "Ouvrez un document Word et prévoyez sept blocs : à quoi ça sert, prérequis, mise à jour en étapes numérotées, prompts utilisés, contrôles, pièges rencontrés, limites.",
          "Reprenez les prompts du carnet qui ont été retenus, avec leur numéro, sans les recopier en entier si la feuille « Journal des prompts » les contient.",
        ],
      },
      {
        title: 'Faire rédiger puis contrôler',
        actions: [
          "Ouvrez Claude, collez le carnet de prompts et le plan, puis le prompt ci-dessous.",
          "Relisez la note ligne par ligne contre le carnet : chaque étape doit y figurer.",
          "Vérifiez la longueur : entre 10 et 15 lignes, et une étape à la fois par ligne.",
        ],
      },
    ],
    example: {
      title: 'Prompt à Claude puis note finale — fil rouge',
      lines: [
        "« Tu es rédacteur technique. Voici mon carnet de prompts et mes étapes de mise à jour [coller]. Rédige une note de 10 à 15 lignes pour un collègue qui n'a jamais vu le classeur : à quoi ça sert, prérequis, mise à jour en étapes numérotées, renvoi aux prompts, contrôles après chaque mise à jour, deux pièges rencontrés, limites. N'invente aucune étape qui ne figure pas dans le carnet ; signale à part ce qui te semble manquer. »",
        "1. Objet : calculer chaque mois le taux de livraison à l'heure, le retard moyen et les commandes en cours par fournisseur — 20 à 25 minutes.",
        "2. Prérequis : l'export « commandes fournisseurs » du mois, un compte Copilot et un compte ChatGPT professionnels.",
        "3-4. Étapes 1 et 2 : feuille Export, supprimer les lignes de T_Cmd (pas l'en-tête), coller l'export à partir de A2 en Collage spécial > Valeurs.",
        "5-6. Étapes 3 et 4 : vérifier les quatre compteurs ; lire « Indicateurs » : le rapprochement doit afficher VRAI (livrées + en cours = lignes).",
        "7. Étape 5 : contrôle croisé — exporter T_Cmd en CSV, coller le prompt n° 3 dans ChatGPT, comparer ; tout écart se règle avant diffusion.",
        "8. Prompts : n° 2 (Copilot, colonnes calculées) et n° 3 (ChatGPT, contrôle) dans la feuille « Journal des prompts ».",
        "9-10. Pièges : une cellule vide est lue comme 0 (règle « cellule vide, jamais 0 » dans le prompt n° 2) ; le taux se calcule sur les commandes livrées (65,1 % et non 58,3 % en octobre).",
        "11-13. Si l'export change de colonnes, renommer celles de T_Cmd à l'identique avant de coller. Limites : un mois à la fois, pas de prévision ni d'alerte (voir hors-périmètre). Auteur : A. Kahindo, mise à jour du 10/12/2026.",
      ],
    },
    result: "Une note de 13 lignes qui permet à un collègue de refaire la mise à jour, avec les prompts, les contrôles, les pièges déjà rencontrés et les limites. Elle contient exactement ce que le carnet contient, rien de plus.",
    pitfall: "Faire écrire la note à l'IA sans la relire contre le carnet : les étapes inventées (une macro, un menu qui n'existe pas) sont les plus convaincantes, et un collègue les cherchera en vain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Faire tester la reproductibilité par un collègue',
    intro: "Le critère de reproductibilité ne se juge pas à la relecture de sa propre note : seul un collègue qui n'a pas conçu le classeur peut dire si les étapes tiennent. Vous lui donnez les fichiers, pas votre aide.",
    steps: [
      {
        title: 'Organiser le test',
        actions: [
          "Choisissez un collègue qui connaît le contexte mais pas le classeur ; donnez-lui trois choses : le classeur, la note, un export récent.",
          "Annoncez la règle : aucune explication orale pendant le test ; il note chaque hésitation sur une feuille.",
          "Chronométrez la durée totale, de l'ouverture au résultat.",
        ],
      },
      {
        title: 'Corriger la note',
        actions: [
          "Relevez chaque hésitation et chaque question non posée mais visible sur son visage.",
          "Corrigez la note pour qu'aucune de ces hésitations ne se reproduise.",
          "Relancez un test partiel sur la partie corrigée si la correction est importante.",
        ],
      },
    ],
    example: {
      title: 'Test de Josué Bahati, comptable — jeudi 10/12/2026',
      lines: [
        "Durée totale : 38 minutes (critère : 45 minutes ou moins) ✔ — aucune question posée à Amani.",
        "Hésitation 1 : « Où coller l'export ? » → la note précise désormais « à partir de la cellule A2 de la feuille Export ».",
        "Hésitation 2 : « Où est le prompt n° 3 ? » → la note renvoie à la feuille « Journal des prompts ».",
        "Résultat : indicateurs identiques à ceux d'Amani sur l'export de novembre (75,0 %).",
      ],
    },
    result: "Un test réussi : un collègue a refait la mise à jour seul en 38 minutes, avec deux hésitations qui ont donné deux corrections de la note. Le critère « un collègue le refait seul en 45 minutes ou moins » est prouvé.",
    tip: "Chaque hésitation est un cadeau : elle indique exactement la ligne de la note qui était ambiguë. Un test où tout est « parfait » a généralement été fait avec trop d'aide orale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Remplir l\'onglet « Évaluation » de la grille, critère par critère',
    intro: "La grille grille-evaluation-livrable-mini-projet.xlsx a deux onglets. L'onglet « Évaluation » contient quatre colonnes : Critère, Ce qui est évalué, Score (1-5) et Commentaire qualitatif / feedback. Il est pré-rempli avec un exemple illustratif (un tableau de bord logistique) que vous remplacez entièrement par votre propre évaluation.",
    steps: [
      {
        title: 'Préparer l\'onglet',
        actions: [
          "Ouvrez la grille ; sur l'onglet « Évaluation », lisez les lignes d'aide du haut : notation de 1 (très insuffisant) à 5 (excellent), score global calculé dans l'onglet « Synthèse ».",
          "Les colonnes « Critère » et « Ce qui est évalué » (lignes 6 à 10) restent telles quelles : seules la colonne C (Score) et la colonne D (Commentaire) sont à remplir.",
          "Remplacez les cinq scores et les cinq commentaires de l'exemple ; ne laissez aucun commentaire de l'exemple.",
        ],
      },
      {
        title: 'Noter d\'abord la preuve, puis le score',
        actions: [
          "Pour chaque critère, écrivez d'abord le commentaire : un fait vérifiable (un chiffre, un test, une pièce) et un point à améliorer.",
          "Choisissez ensuite le score dans la liste déroulante de la colonne C (valeurs 1 à 5) : un 5 exige une preuve ; un 3 est un score honnête, pas un échec.",
          "Relisez les cinq commentaires : un seul chiffre ou fait précis par commentaire, aucune formule générale.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Score', 'Commentaire qualitatif (fil rouge)'],
      rows: [
        ['Clarté du problème résolu', '5', 'Problème chiffré (3 h 30 par mois, résultat livré 7 jours après la date attendue), nommé dès la première ligne de la feuille « Mode d\'emploi ».'],
        ['Pertinence des outils IA choisis', '4', 'Copilot, ChatGPT Data Analysis et Claude, chacun testé sur 10 lignes ; Perplexity écarté et justifié. Le premier prompt Copilot n\'avait pas la règle de la cellule vide.'],
        ['Qualité du livrable final', '4', 'Utilisable tel quel sur l\'export de novembre en 19 minutes ; les noms de colonnes techniques (Retard_j) restent à harmoniser avec le vocabulaire du comité.'],
        ['Reproductibilité / documentation', '4', 'Note de 13 lignes et carnet de prompts, échecs compris ; Josué Bahati refait la mise à jour seul en 38 minutes. La marche à suivre si l\'export change de colonnes reste brève.'],
        ['Impact professionnel réel', '4', 'Remplace 3 h 30 par 22 minutes ; usage validé par écrit par Patrick Mumbere pour le point du 8/01/2027. Gain constaté sur trois exports, pas encore sur une année.'],
      ],
    },
    result: "Un onglet « Évaluation » entièrement remplacé : cinq scores (5, 4, 4, 4, 4), cinq commentaires factuels avec un point d'amélioration chacun. L'évaluation sera relue par le formateur sur les mêmes critères.",
    pitfall: "Une auto-évaluation complaisante (cinq fois 5, sans commentaire précis) : la revue finale sert à valider un travail, pas à découvrir des lacunes que vous auriez pu corriger vous-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Lire l\'onglet « Synthèse » et décider : remettre ou corriger',
    intro: "L'onglet « Synthèse » se calcule tout seul à partir de l'onglet « Évaluation » ; les formules ne se modifient pas. Il vous donne un score par critère, un statut par critère et un score global avec un statut de préparation à la revue finale. Savoir le lire évite deux erreurs : remettre trop tôt, ou corriger inutilement.",
    steps: [
      {
        title: 'Lire les cellules calculées',
        actions: [
          "Colonne B (Score /5), lignes 5 à 9 : chaque cellule reprend le score de l'onglet « Évaluation » (par exemple =Évaluation!C6).",
          "Colonne C (Statut), lignes 5 à 9 : « ⚠ À retravailler » si le score est inférieur à 3, sinon « OK ».",
          "Ligne 10, « SCORE GLOBAL DU LIVRABLE » : la cellule B10 calcule la moyenne des cinq scores ; la cellule C10 affiche « ⚠ Projet non prêt pour la revue finale » si la moyenne est inférieure à 3, sinon « ✓ Prêt pour la revue finale ».",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Si une seule ligne affiche « ⚠ À retravailler », corrigez ce critère avant de remettre, même si le statut global est « Prêt » : la moyenne peut masquer un critère faible.",
          "Si tout est « OK » et le global « Prêt », remettez la grille avec le dossier.",
          "Si vous modifiez le livrable après avoir noté, revenez à l'onglet « Évaluation » : la grille doit refléter le livrable remis.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Score (/5)', 'Statut'],
      rows: [
        ['Clarté du problème résolu', '5', 'OK'],
        ['Pertinence des outils IA choisis', '4', 'OK'],
        ['Qualité du livrable final', '4', 'OK'],
        ['Reproductibilité / documentation', '4', 'OK'],
        ['Impact professionnel réel', '4', 'OK'],
        ['SCORE GLOBAL DU LIVRABLE', '4,2 (21 ÷ 5)', '✓ Prêt pour la revue finale'],
      ],
    },
    result: "Une synthèse sans aucun « ⚠ À retravailler » : score global de 4,2 sur 5 et statut « ✓ Prêt pour la revue finale ». Amani peut remettre la grille avec son dossier, en connaissant les deux points qu'elle reconnaîtra elle-même à la revue (noms de colonnes, marche à suivre si l'export change).",
    pitfall: "Modifier les formules de l'onglet « Synthèse » pour faire passer le statut au vert : le statut ne change que si le livrable s'améliore. Les formules ne se touchent pas.",
  },

  // ───────────── Procédure 8 — Présenter et capitaliser ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Structurer la présentation en cinq points',
    intro: "Le formateur expert évalue en quelques minutes : l'ordre de présentation est donc imposé, quel que soit votre secteur. Cinq points, dans cet ordre : le problème réel, les outils combinés, le livrable montré, le résultat mesuré, les limites. C'est aussi la structure que vous utiliserez si vous présentez ce travail à un responsable.",
    steps: [
      {
        title: 'Écrire les cinq points',
        actions: [
          "Ouvrez un document d'une page et écrivez un titre par point, dans l'ordre : (1) le problème, (2) les outils, (3) le livrable, (4) le résultat, (5) les limites.",
          "Pour chaque point, notez la phrase d'ouverture, la preuve à montrer et la durée.",
          "Vérifiez que le total tient en 5 minutes.",
        ],
      },
      {
        title: 'Préparer les preuves',
        actions: [
          "Point 3 : ouvrez le livrable sur un export réel, prêt à être manipulé — le montrer, pas le décrire.",
          "Point 4 : préparez un tableau « critère de succès / valeur de départ / résultat » repris du brief.",
          "Point 5 : reprenez la liste « hors périmètre » et les points faibles que vous avez notés dans la grille.",
        ],
      },
    ],
    table: {
      columns: ['Point', 'Ce que dit Amani', 'Preuve montrée', 'Durée'],
      rows: [
        ['1. Problème réel', '« Chaque mois, 3 h 30 pour un taux de livraison qui arrive une semaine trop tard. »', 'Phrase du brief et valeur de départ', '30 s'],
        ['2. Outils combinés', 'Copilot construit, ChatGPT recalcule, Claude documente ; Perplexity écarté', 'Tableau de test des outils', '1 min'],
        ['3. Livrable', 'Collage de l\'export de novembre, lecture des indicateurs', 'Le classeur en marche', '2 min'],
        ['4. Résultat mesuré', '22 minutes contre 210 ; écart nul sur 20 commandes ; collègue en 38 minutes ; usage validé', 'Tableau des critères de succès', '1 min'],
        ['5. Limites', 'Un mois à la fois ; prévision, alertes et Power BI écartés ; noms de colonnes à harmoniser', 'Liste « hors périmètre »', '30 s'],
      ],
    },
    result: "Un support d'une page, cinq points, cinq minutes, avec une preuve par point. La présentation ne contient aucun diaporama : le livrable lui-même est la pièce centrale.",
    tip: "Le point 5 n'est pas une confession : dire ce que vous feriez différemment avec plus de temps prouve que vous savez évaluer votre propre travail, ce que mesure aussi la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Répéter en cinq minutes et préparer les questions probables',
    intro: "Une présentation qu'on n'a jamais prononcée à voix haute dépasse toujours son temps. Vous la répétez chronomètre en main, puis vous préparez les questions que le formateur est le plus susceptible de poser, avec une réponse appuyée par une preuve.",
    steps: [
      {
        title: 'Répéter',
        actions: [
          "Prononcez les cinq points à voix haute, chronomètre en main, deux fois de suite.",
          "Si vous dépassez cinq minutes, raccourcissez le point 2 (outils), jamais le point 3 (démonstration).",
          "Répétez la démonstration jusqu'à pouvoir la faire sans regarder vos notes.",
        ],
      },
      {
        title: 'Préparer les questions',
        actions: [
          "Listez cinq questions difficiles à partir de votre grille : points faibles, choix écartés, limites.",
          "Pour chacune, écrivez une réponse d'une phrase qui renvoie à une preuve du dossier.",
          "Faites jouer le rôle du formateur par un collègue pendant dix minutes.",
        ],
      },
    ],
    table: {
      columns: ['Question probable', 'Réponse appuyée par une preuve'],
      rows: [
        ['Pourquoi ne pas avoir fait un tableau Power BI ?', 'Hors périmètre : 8 heures estimées, aucune des quatre mesures de succès n\'en dépendait ; repris si le comité demande un suivi partagé (liste « hors périmètre »).'],
        ['Comment savez-vous que les formules de Copilot sont justes ?', 'Test sur 10 lignes contre une référence calculée à la main, contrôle ChatGPT sur 48 lignes, échantillon de 20 commandes sans écart (tableau de test, feuille « Contrôle »).'],
        ['Que se passe-t-il si l\'export change de colonnes ?', 'Les formules affichent #REF! ; la note indique de renommer les colonnes de T_Cmd à l\'identique ; c\'est une des deux limites que je note.'],
        ['Qu\'est-ce qui n\'a pas marché ?', 'Le premier prompt Copilot, sans règle pour la cellule vide, a donné −46 318 jours ; il est documenté dans le carnet de prompts.'],
        ['Qui l\'utilisera réellement ?', 'Patrick Mumbere, au point logistique du 8 janvier 2027 ; sa validation écrite est dans le dossier.'],
      ],
    },
    result: "Une présentation tenue en moins de cinq minutes, une démonstration maîtrisée, cinq questions difficiles avec leur réponse et leur preuve. Vous n'improvisez ni le fond ni le temps.",
    pitfall: "Préparer uniquement les questions agréables : le formateur cherchera, comme dans la grille, ce qui est faible ou non prouvé. Si vous le dites avant lui, la revue devient un échange de travail.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: 'Assembler et remettre le dossier complet',
    intro: "Les trois livrables officiels sont remis ensemble, dans un dossier lisible, à la date de livraison finale inscrite au brief. Votre présence au point d'étape est déjà acquise : le dossier doit la mentionner. Rien ne doit être à retrouver, ouvrir ou réparer côté formateur.",
    steps: [
      {
        title: 'Constituer le dossier',
        actions: [
          "Créez un dossier de remise nommé avec la date et votre nom : 2026-12-18_Kahindo_mini-projet.",
          "Copiez-y le brief, le livrable final avec sa note de documentation, et la grille d'auto-évaluation remplie, chacun nommé clairement.",
          "Ajoutez en option le carnet de prompts et le tableau de retours du point d'étape comme pièces justificatives.",
        ],
      },
      {
        title: 'Contrôler avant l\'envoi',
        actions: [
          "Ouvrez chaque fichier depuis le dossier de remise : il doit s'ouvrir sans message d'erreur, sans lien externe cassé.",
          "Vérifiez la cohérence : le brief décrit le livrable remis, la grille reflète le livrable final, la note correspond au classeur.",
          "Envoyez le dossier avec un message court listant les trois livrables et rappelant la date du point d'étape.",
        ],
      },
    ],
    example: {
      title: 'Dossier de remise — fil rouge (vendredi 18/12/2026)',
      lines: [
        "2026-12-18_Kahindo_mini-projet/",
        "  1_Brief_mini-projet.docx — brief cadré, sept sections, mis à jour le 23/11",
        "  2_Suivi_Delais_Fournisseurs.xlsx + 2_Note_documentation.docx (13 lignes)",
        "  3_Grille_evaluation_livrable.xlsx — score global 4,2 / 5, statut « Prêt pour la revue finale »",
        "  Pièces justificatives : carnet de prompts, tableau de retours du 4/12",
      ],
    },
    result: "Un dossier de trois livrables, remis à la date prévue, qui s'ouvre sans erreur et dont les pièces sont cohérentes entre elles. Fil rouge : envoi le vendredi 18/12 avant 12 h pour une revue le mardi 22/12.",
    pitfall: "Remettre une grille qui ne correspond plus au livrable parce que vous avez retouché le classeur après avoir noté : le formateur lit alors une auto-évaluation fausse, ce qui est pire qu'une note modeste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Passer la revue individuelle et capitaliser après la validation',
    intro: "La revue individuelle par le formateur expert porte sur l'ensemble du dossier. En cas de validation, elle débouche sur l'attestation de compétences IA délivrée par BK-BOOST Ltd. Le projet n'est cependant pas fini à ce moment-là : un livrable qui n'est pas utilisé lundi matin n'a servi à rien.",
    steps: [
      {
        title: 'Pendant la revue',
        actions: [
          "Présentez les cinq points en cinq minutes, puis laissez le formateur poser ses questions sans l'interrompre.",
          "Notez chaque retour dans la feuille « Retours », avec la même méthode qu'au point d'étape.",
          "Si des points sont à reprendre, demandez précisément lesquels et dans quel délai : ne partez pas avec « c'est bien, mais… ».",
        ],
      },
      {
        title: 'Après la revue',
        actions: [
          "Si le projet est validé, conservez l'attestation avec le dossier : elle est transmissible à votre organisation ou à un futur employeur.",
          "Planifiez le premier usage réel du livrable avec une date et le destinataire nommés.",
          "Transmettez le livrable et la note à vos collègues, et reprenez la liste « hors périmètre » pour choisir la prochaine évolution.",
        ],
      },
    ],
    example: {
      title: 'Plan de capitalisation — fil rouge',
      lines: [
        "Mardi 22/12/2026 : revue individuelle ; retours notés dans la feuille « Retours ».",
        "Vendredi 8/01/2027 : premier usage réel — Amani colle l'export de décembre et présente le taux à Patrick Mumbere au point logistique.",
        "Janvier 2027 : Josué Bahati est formé à la mise à jour avec la note ; le classeur est déposé dans le dossier partagé des achats.",
        "Mars 2027 : décision sur la première évolution du hors-périmètre (prévision des délais) quand six mois d'historique seront disponibles.",
      ],
    },
    result: "Un projet présenté, évalué et capitalisé : une revue passée, une attestation en cas de validation, un premier usage réel daté et un plan d'évolution tiré du hors-périmètre.",
    tip: "Notez dès la fin de la revue ce que vous feriez différemment sur un prochain projet : c'est la meilleure matière pour votre prochain brief, et pour montrer que la méthode vous appartient désormais.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/4 — Du constat de terrain au projet retenu',
    scenario: "Situation de départ d'Amani Kahindo, chargée administrative et logistique à Goma : le chiffre de livraison d'octobre est arrivé le vendredi 13 novembre 2026, une semaine après le point logistique du 6 novembre. Voici son raisonnement, tel qu'un correcteur l'attend, de la première liste à la validation du destinataire.",
    steps: [
      { title: 'Inventaire des irritants', body: "Six tâches listées avec fréquence et durée : consolidation mensuelle des exports (3,5 h par mois), relances fournisseurs (4 h), comptes rendus (3 h), questions des agents (7 h), rapport de stock (2 h), veille douanière (0,7 h).", result: "Six lignes chiffrées, un poids en heures par mois pour chacune." },
      { title: 'Test des quatre critères', body: "Seule la consolidation des exports obtient 4 sur 4 : réelle, mesurable (3 h 30), faisable (données déjà dans Excel), et deux outils y ont un rôle réel (Copilot et ChatGPT). Le rapport de stock reste en repli.", result: "Projet retenu : suivi mensuel des délais de livraison fournisseurs." },
      { title: 'Phrase de problème et valeur de départ', body: "« Chaque mois, je passe 3 h 30 à consolider à la main les trois exports de commandes fournisseurs pour calculer le taux de livraison dans les délais ; le chiffre d'octobre est arrivé 7 jours après la date attendue. » Valeur de départ chronométrée : 3 h 32.", result: "Phrase sans nom d'outil, avec un chiffre, un destinataire et une conséquence." },
      { title: 'Confirmation du destinataire', body: "Message à Patrick Mumbere le 19/11 ; réponse le même jour : « Oui, avec le chiffre avant le 6 de chaque mois. »", result: "Validation écrite, utilisable comme preuve du critère « Impact professionnel réel »." },
      { title: 'Dimensionnement', body: "Ambition initiale : 35 heures (43,75 heures avec marge) pour 20 heures disponibles. Coupés : prévision des délais, alertes Make, tableau Power BI. Gardé : le cœur, soit 16 heures estimées, 16 × 1,25 = 20 heures.", result: "Un périmètre qui tient exactement dans le temps réservé à l'agenda." },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/4 — Le brief cadré, rempli section par section',
    scenario: "Voici le contenu du gabarit gabarit-brief-mini-projet-ia-par-secteur.docx tel qu'Amani l'a envoyé au formateur le 23 novembre 2026, avant toute production, après la procédure de dimensionnement.",
    steps: [
      { title: 'Lecture du brief', body: "Chaque section répond à une question précise : où et pour qui, quel problème, quels outils et quels rôles, quel livrable, comment saura-t-on que c'est réussi, en combien de temps, quand fait-on le point.", result: "Un brief d'une page, aucune ligne d'aide du gabarit restante." },
    ],
    table: {
      columns: ['Section du brief', 'Contenu rempli'],
      rows: [
        ['1. Secteur et contexte', 'Logistique (ONG) — Horizon Grands Lacs, chargée administrative et logistique, Goma. Trois exports mensuels consolidés à la main par une seule personne, résultat livré après le point logistique.'],
        ['2. Problème concret', '3 h 30 par mois pour calculer le taux de livraison dans les délais ; chiffre d\'octobre livré 7 jours après la date attendue (valeur de départ : 3 h 32 chronométrées).'],
        ['3. Outils IA', 'Copilot dans Excel (colonnes calculées, synthèse) ; ChatGPT Data Analysis (recalcul de contrôle) ; Claude (note de documentation, relecture) ; Perplexity non utilisé.'],
        ['4. Livrable attendu', 'Classeur « Suivi_Delais_Fournisseurs.xlsx » (Mode d\'emploi, Export, Indicateurs, Journal des prompts) + note de 10 à 15 lignes ; destinataire : Patrick Mumbere, point logistique du 8/01/2027.'],
        ['5. Critères de succès', '(1) mise à jour en 30 min ou moins ; (2) écart nul sur 20 commandes recalculées à la main ; (3) un collègue la refait seul en 45 min ou moins ; (4) validation écrite du destinataire avant le 18/12.'],
        ['6. Calendrier et temps', 'Début : 23/11/2026 — livraison : 18/12/2026. 5 h par semaine, 20 h au total ; 16 h estimées + 25 % de marge.'],
        ['7. Point d\'étape', 'Vendredi 4/12/2026, formateur expert, 20 minutes en visioconférence. À valider : périmètre, choix d\'outils, structure du livrable.'],
        ['Rédigé par / Date', 'Amani Kahindo, chargée administrative et logistique — 23/11/2026'],
      ],
    },
    result: "Le brief répond aux critères du module : problème chiffré, outils avec rôle, livrable décrit, quatre critères de succès vérifiables, périmètre calibré sur 20 heures, point d'étape daté.",
    tip: "Gardez ce brief comme modèle : sur votre propre projet, seuls le secteur, les chiffres, les outils et les dates changeront. La structure du raisonnement reste la même.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/4 — De l\'essai à petite échelle au point d\'étape',
    scenario: "Du 24 novembre au 4 décembre, Amani teste ses outils, produit la version 1 de son classeur et la présente au formateur. Voici ce qu'elle a mesuré à chaque étape.",
    steps: [
      { title: 'Échantillon et référence', body: "10 commandes dont une non livrée. Réponse de référence calculée à la main : 9 livrées, 5 à l'heure, taux 55,6 %, retard moyen 3,75 jours.", result: "Une référence connue avant tout test." },
      { title: 'Test de Copilot', body: "Premier prompt sans règle pour la cellule vide : −46 318 jours pour la commande en cours et un statut « À l'heure » faux. Prompt corrigé (« cellule vide, jamais 0 ») : 10 lignes justes.", result: "Décision : ajuster, prompt n° 2 retenu." },
      { title: 'Test de ChatGPT et de Claude', body: "ChatGPT retrouve 55,6 % et 3,75 jours après lecture de 10 lignes. Claude invente une macro au premier essai ; avec « n'invente aucune étape », il rend trois étapes fidèles et signale un contrôle manquant.", result: "Les deux retenus, avec leur contrainte." },
      { title: 'Version 1', body: "Export d'octobre : 48 commandes, 43 livrées, 28 à l'heure → 65,1 % ; retard moyen 4,0 jours ; 5 en cours (43 + 5 = 48). Premier contrôle ChatGPT : 58,3 % par erreur de dénominateur, corrigé en 65,1 %. Septembre : 44 commandes, 31 à l'heure sur 40 livrées → 77,5 %.", result: "Mise à jour chronométrée en 22 minutes contre 210." },
      { title: 'Point d\'étape du 4 décembre', body: "Périmètre confirmé ; prévision à trois mois écartée. À intégrer : feuille « Mode d'emploi » (45 min), rapprochement rouge (20 min), comparaison au mois précédent (30 min), échec du prompt n° 1 documenté (15 min).", result: "Plan de finalisation de 110 minutes, daté des 7 et 8 décembre." },
    ],
    table: {
      columns: ['Fournisseur (octobre 2026)', 'Livrées', 'À l\'heure', 'Taux à l\'heure', 'Retard moyen (jours)'],
      rows: [
        ['Beta Supply', '10', '4', '40,0 %', '5,7'],
        ['Kivu Freight Co', '11', '6', '54,5 %', '2,8'],
        ['Alpha Logistics', '9', '7', '77,8 %', '3,0'],
        ['Transco Sarl', '13', '11', '84,6 %', '3,0'],
        ['Total', '43', '28', '65,1 %', '4,0'],
      ],
    },
    result: "Message du graphique de synthèse : « Beta Supply et Kivu Freight livrent à l'heure moins de 6 fois sur 10 ». Comparaison au mois précédent : 77,5 % en septembre, 65,1 % en octobre, soit − 12,4 points.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 4/4 — Livrable final, grille et revue',
    scenario: "Du 7 au 18 décembre, Amani intègre les retours, rédige sa note, fait tester le classeur par Josué Bahati, remplit la grille et prépare la revue du mardi 22 décembre 2026. Les quatre critères de succès du brief sont vérifiés un par un.",
    steps: [
      { title: 'Finalisation', body: "Feuilles de test supprimées, formules de « Indicateurs » protégées, classeur nommé Suivi_Delais_Fournisseurs.xlsx. Export de novembre : 51 commandes, 44 livrées, 33 à l'heure → 75,0 %, 7 en cours, rapprochement VRAI, mise à jour en 19 minutes.", result: "Livrable utilisable tel quel sur un export jamais vu en conception." },
      { title: 'Note de documentation', body: "Treize lignes : objet, prérequis, cinq étapes de mise à jour, renvoi aux prompts n° 2 et n° 3, deux pièges rencontrés, limites, auteur et date. Matière : le carnet de prompts, échecs compris.", result: "Une note fidèle au carnet, relue contre lui." },
      { title: 'Test de reproductibilité', body: "Josué Bahati refait la mise à jour seul en 38 minutes, avec deux hésitations qui ont conduit à deux corrections de la note (cellule A2, renvoi au Journal des prompts).", result: "Critère de reproductibilité prouvé." },
      { title: 'Auto-évaluation', body: "Grille remplie : 5, 4, 4, 4, 4 ; chaque commentaire cite un fait et un point d'amélioration. Synthèse : score global 4,2 / 5, aucune ligne « ⚠ À retravailler », statut « ✓ Prêt pour la revue finale ».", result: "Grille cohérente avec le livrable remis." },
      { title: 'Revue et capitalisation', body: "Présentation en cinq points en cinq minutes, démonstration sur l'export de novembre, cinq questions difficiles préparées. Premier usage réel planifié : point logistique du 8 janvier 2027.", result: "Projet présenté et planifié pour un usage réel." },
    ],
    table: {
      columns: ['Critère de succès du brief', 'Cible', 'Résultat constaté', 'Atteint'],
      rows: [
        ['Durée de la mise à jour mensuelle', '30 min ou moins', '22 min (septembre), 19 min (novembre)', 'Oui'],
        ['Exactitude des 3 indicateurs', 'Écart nul sur 20 commandes', '20 statuts identiques, écart nul', 'Oui'],
        ['Reproductibilité', 'Un collègue seul en 45 min ou moins', 'Josué Bahati : 38 min, sans question', 'Oui'],
        ['Usage réel', 'Validation écrite avant le 18/12', 'Patrick Mumbere, 10/12 à 14 h 20', 'Oui'],
      ],
    },
    result: "Le projet est terminé au sens du module : les quatre critères fixés avant de produire sont atteints et prouvés, les trois livrables sont remis, la revue est préparée. Gain : 188 minutes par mois (− 89,5 %), et un chiffre disponible avant le point logistique du 8 de chaque mois.",
    tip: "Gardez ce corrigé comme modèle : votre projet aura d'autres chiffres et d'autres outils, mais le fil est le même — critères avant production, preuves à la fin, trace de chaque prompt entre les deux.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Votre mini-projet, de la fiche « problème » à la revue finale',
    instructions: "C'est l'exercice central de ce module et de toute la formation. Il se déroule en trois livrables, remis dans cet ordre : (1) le gabarit-brief-mini-projet-ia-par-secteur.docx complété avant toute production, avec un périmètre réaliste ; (2) le livrable final, dans un état directement utilisable, accompagné d'une note de 10 à 15 lignes documentant les prompts et les étapes clés ; (3) la grille-evaluation-livrable-mini-projet.xlsx remplie honnêtement sur les cinq critères avant remise au formateur. Votre présence au point d'étape intermédiaire fixé dans votre brief complète l'ensemble.",
    steps: [
      {
        title: 'Cadrer, avant de produire',
        actions: [
          "Procédure 1 : dressez l'inventaire de vos irritants, appliquez le test des quatre critères, rédigez la phrase de problème et relevez la valeur de départ.",
          "Procédure 2 : remplissez les sept sections du brief et faites-le relire par la personne qui attend le résultat.",
          "Procédure 3 : chiffrez vos lots, appliquez la règle heures × 1,25 ≤ temps disponible, écrivez la liste « hors périmètre » et envoyez le brief au formateur.",
        ],
      },
      {
        title: 'Tester puis produire',
        actions: [
          "Procédure 4 : testez chaque outil retenu sur un échantillon, avec une réponse de référence calculée à l'avance, et notez la décision dans le tableau de test.",
          "Procédure 5 : produisez la version 1 complète, tenez le carnet de prompts à jour, chronométrez ou mesurez votre critère principal.",
          "Procédure 6 : tenez le point d'étape à la date du brief, triez les retours et datez le plan de finalisation.",
        ],
      },
      {
        title: 'Valider et présenter',
        actions: [
          "Procédure 7 : finalisez, rédigez la note de 10 à 15 lignes, faites tester la reproductibilité par un collègue, remplissez la grille et lisez la synthèse.",
          "Procédure 8 : structurez la présentation en cinq points, répétez-la en cinq minutes, remettez le dossier à la date de livraison et préparez la revue individuelle.",
        ],
      },
    ],
    deliverable: "Les trois livrables officiels — brief cadré, livrable final avec sa note de 10 à 15 lignes, grille d'auto-évaluation remplie — plus votre présence au point d'étape intermédiaire. La revue individuelle par le formateur expert porte sur l'ensemble et débouche, en cas de validation, sur l'attestation de compétences IA délivrée par BK-BOOST Ltd.",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement 1 — Corriger un brief défaillant',
    instructions: "Béatrice Nzigire, assistante RH chez Horizon Grands Lacs, vous remet son brief pour avis, avant de commencer à produire. Il contient au moins un défaut dans chacune des sept sections. Repérez les défauts, puis réécrivez chaque section avec un contenu plausible et vérifiable, en respectant les consignes du gabarit.",
    table: {
      columns: ['Section', 'Texte du brief de Béatrice'],
      rows: [
        ['1. Secteur et contexte', 'RH — une entreprise — « Le recrutement est un enjeu majeur dans le secteur. »'],
        ['2. Problème', 'Améliorer le recrutement grâce à l\'IA.'],
        ['3. Outils', 'ChatGPT pour tout.'],
        ['4. Livrable', 'Un outil de recrutement intelligent.'],
        ['5. Critères de succès', 'Le projet sera réussi s\'il est utile et apprécié.'],
        ['6. Calendrier et temps', 'Début : bientôt. Livraison : fin d\'année. Temps disponible : « quand j\'ai le temps ».'],
        ['7. Point d\'étape', 'À définir.'],
      ],
    },
    steps: [
      {
        title: 'Diagnostiquer',
        actions: [
          "Pour chaque section, écrivez en une ligne le défaut principal : contexte générique, solution à la place du problème, outil unique, livrable flou, critère non mesurable, dates et temps non réels, point d'étape absent.",
          "Reliez chaque défaut à l'une des consignes du gabarit (par exemple « pas un problème générique de secteur »).",
        ],
      },
      {
        title: 'Réécrire',
        actions: [
          "Réécrivez les sections 1 à 7 avec des détails plausibles : poste, volume de recrutements, durée de préparation d'un entretien, outils et rôles, forme et destinataire du livrable.",
          "Proposez trois critères de succès chiffrés, avec valeur de départ, cible et méthode de vérification.",
          "Fixez des dates réelles, un temps en heures par semaine et une date de point d'étape.",
        ],
      },
    ],
    tip: "Corrigé de contrôle : section 1, contexte non situé ; section 2, solution et non problème ; section 3, un seul outil, aucun rôle ; section 4, ni nature, ni destinataire ; section 5, aucun chiffre ni méthode de vérification ; section 6, aucune date ni heure réelle ; section 7, aucune date ni personne ni question à valider.",
    deliverable: "Un brief réécrit de sept sections, sans aucune formulation floue, et la liste des sept défauts corrigés avec la consigne du gabarit correspondante.",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement 2 — Dimensionner un périmètre avec la règle des 25 %',
    instructions: "Vous disposez de 6 heures par semaine pendant 3 semaines, soit 18 heures. Votre première liste de lots est ci-dessous. Appliquez la règle « heures estimées × 1,25 ≤ temps disponible » et décidez de ce qui reste dans le périmètre.",
    table: {
      columns: ['Lot', 'Heures estimées', 'Lié à un critère de succès ?'],
      rows: [
        ['Brief et dimensionnement', '1', 'Oui'],
        ['Tests à petite échelle', '1,5', 'Oui'],
        ['Version 1 du livrable', '5', 'Oui'],
        ['Point d\'étape', '1', 'Oui'],
        ['Finalisation et intégration des retours', '2', 'Oui'],
        ['Note de documentation', '1', 'Oui'],
        ['Grille d\'auto-évaluation', '0,5', 'Oui'],
        ['Préparation de la présentation', '1,5', 'Oui'],
        ['Scénario Make d\'envoi automatique du rapport', '6', 'Non'],
      ],
    },
    steps: [
      {
        title: 'Calculer et décider',
        actions: [
          "Additionnez toutes les heures, multipliez par 1,25 et comparez à 18 heures.",
          "Additionnez uniquement les lots liés à un critère de succès, multipliez par 1,25 et comparez à 18 heures.",
          "Décidez ce qui est gardé et ce qui est hors périmètre, et écrivez la condition de reprise du lot écarté.",
          "Calculez la marge restante en heures.",
        ],
      },
    ],
    tip: "Points de contrôle : tous les lots = 19,5 h × 1,25 = 24,4 h, supérieur à 18 h ; lots liés à un critère = 13,5 h × 1,25 = 16,9 h, inférieur à 18 h, soit environ 1,1 h de marge restante. Le scénario Make est à écarter, repris plus tard (Module 08) quand la mise à jour manuelle sera stable.",
    deliverable: "Un tableau de dimensionnement avec la décision par lot, le calcul chiffré de la règle des 25 % et le bloc « hors périmètre — évolutions possibles ».",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement 3 — Noter honnêtement un livrable avec la grille',
    instructions: "Béatrice Nzigire a livré une bibliothèque de prompts pour structurer les entretiens de recrutement. Notez-la sur les cinq critères de la grille, de 1 à 5, avec un commentaire factuel, puis lisez la « Synthèse » comme le fait la grille et décidez si elle peut être remise.",
    table: {
      columns: ['Critère', 'Faits constatés dans le dossier de Béatrice'],
      rows: [
        ['Clarté du problème résolu', 'Problème nommé dès la première ligne (préparer un entretien prenait 1 h et variait d\'un recruteur à l\'autre) ; destinataires non précisés.'],
        ['Pertinence des outils IA choisis', 'ChatGPT seul pour tout, y compris pour citer les références légales du contrat, sans vérification de ces références.'],
        ['Qualité du livrable final', 'Huit prompts bien présentés, dont deux jamais testés ; utilisable après quelques retouches.'],
        ['Reproductibilité / documentation', 'Prompts classés, sans étapes ni exemple de sortie ; un collègue ne saurait pas dans quel ordre les utiliser.'],
        ['Impact professionnel réel', 'Trois recruteurs l\'utilisent déjà ; temps de préparation passé de 1 h à 25 minutes, mesuré.'],
      ],
    },
    steps: [
      {
        title: 'Noter',
        actions: [
          "Pour chaque critère, écrivez un commentaire d'une phrase : un fait vérifiable et un point d'amélioration.",
          "Choisissez ensuite le score de 1 à 5, en vous aidant des repères du module.",
        ],
      },
      {
        title: 'Lire la synthèse',
        actions: [
          "Calculez la moyenne des cinq scores, puis le statut global : « ⚠ Projet non prêt pour la revue finale » si la moyenne est inférieure à 3, sinon « ✓ Prêt pour la revue finale ».",
          "Indiquez pour chaque critère le statut « OK » ou « ⚠ À retravailler » (score inférieur à 3).",
          "Décidez : peut-elle remettre le dossier tel quel ? Sinon, que doit-elle corriger, avec quel outil ?",
        ],
      },
    ],
    tip: "Points de contrôle : scores plausibles 4, 2, 3, 2, 5 = 16, moyenne 3,2, statut global « ✓ Prêt pour la revue finale » alors que deux critères affichent « ⚠ À retravailler » (outils, documentation). Elle ne doit pas remettre : elle vérifie les références légales avec Perplexity, teste les deux prompts restants, ajoute l'ordre d'utilisation et un exemple de sortie.",
    deliverable: "Une grille remplie (cinq scores, cinq commentaires), le score global calculé, le statut de chaque critère et la décision argumentée de remettre ou de corriger.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre brief a les sept sections remplies, sans aucune ligne d'aide du gabarit restante, et il a été rédigé avant la première production.",
      "Votre phrase de problème contient un chiffre, un destinataire et une conséquence, et ne cite aucun outil.",
      "Chaque critère de succès a une cible chiffrée, une valeur de départ et une méthode de vérification qu'une autre personne peut appliquer.",
      "Vos heures estimées × 1,25 sont inférieures ou égales au temps réellement disponible, et votre liste « hors périmètre » est écrite.",
      "Au moins deux outils de la formation ont chacun un rôle réel, testé sur un échantillon avec une réponse de référence avant la version complète.",
      "Votre carnet de prompts contient les prompts retenus ET les prompts qui ont échoué, avec la raison de l'échec.",
      "Votre livrable s'ouvre et s'utilise lundi matin sans reprise, y compris sur un cas ou un export jamais utilisé pendant la conception.",
      "Votre note fait de 10 à 15 lignes et un collègue a refait la démarche seul à partir d'elle, sans aide orale.",
      "Votre grille est remplie dans les colonnes Score et Commentaire seulement, les formules de l'onglet « Synthèse » sont intactes, et aucune ligne n'affiche « ⚠ À retravailler ».",
      "Votre présentation tient en cinq minutes et suit l'ordre : problème, outils, livrable montré, résultat mesuré, limites.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Choisir un projet trop ambitieux pour le temps disponible : c'est le piège numéro un d'un module atelier. Appliquez la règle heures × 1,25 ≤ temps disponible et coupez maintenant ; un projet modeste et fini vaut toujours mieux qu'un projet impressionnant et inachevé.",
      "Ne pas définir de critère de succès clair avant de commencer : la revue finale devient une discussion d'impression. Écrivez des critères chiffrés dans le brief, avec valeur de départ et méthode de vérification.",
      "Remplir le brief après avoir commencé à produire : il décrit alors ce qui a été fait, pas ce qui était voulu. Le brief se remplit en premier et se présente avant toute production.",
      "Compter sur un temps disponible imaginaire : réservez les créneaux dans l'agenda, retenez la semaine la plus chargée et ajoutez 25 % de marge.",
      "Attendre la revue finale pour le tout premier retour : sollicitez le point d'étape à la date fixée dans le brief, avec trois questions précises.",
      "Tester un outil sans connaître la bonne réponse : calculez la réponse de référence à la main avant l'essai, et ouvrez le code exécuté ou la formule proposée.",
      "Se concentrer sur la sophistication technique plutôt que sur l'utilité : si le livrable ne résout pas un problème réel de votre métier, il rate l'objectif du module.",
      "Faire confiance à un texte ou à un chiffre rédigé par l'IA sans contrôle croisé : recalculez avec un second outil, relisez la note contre le carnet de prompts.",
      "Ne pas documenter la démarche en pensant que le livrable suffit : sans trace des prompts, des échecs et des étapes, le critère « Reproductibilité / documentation » est perdu et le livrable n'est reproductible par personne.",
      "Remplir la grille avec complaisance ou modifier les formules de la « Synthèse » : la grille sert à valider un travail honnête. Notez les preuves d'abord, et corrigez tout critère marqué « ⚠ À retravailler » avant de remettre.",
      "Déposer des données réelles dans un compte personnel pour « juste tester » : un test à petite échelle reste un dépôt de données, avec un compte professionnel et des colonnes réduites.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez inventorié vos irritants, retenu le problème qui obtient 4 sur 4 au test des quatre critères et relevé sa valeur de départ.",
      "Vous avez rempli les sept sections du brief avant de produire, avec des critères de succès chiffrés, un calendrier réaliste et un point d'étape daté.",
      "Vous avez dimensionné le périmètre au temps disponible (heures × 1,25) et écrit la liste de ce que vous avez volontairement écarté.",
      "Vous avez testé au moins deux outils de la formation sur un échantillon, contre une réponse de référence, et ouvert un carnet de prompts qui garde aussi les échecs.",
      "Vous avez produit une version 1 complète puis un livrable final directement utilisable, accompagné d'une note de 10 à 15 lignes qu'un collègue a su suivre seul.",
      "Vous avez sollicité un retour au point d'étape, trié les remarques en intégrer, reporter ou écarter, et daté votre plan de finalisation.",
      "Vous avez rempli honnêtement la grille d'évaluation, lu la « Synthèse » sans en modifier les formules et corrigé tout critère à retravailler.",
      "Vous avez structuré une présentation en cinq points tenue en cinq minutes, assemblé le dossier des trois livrables et préparé la revue individuelle avec le formateur expert.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant — check-list de fin de module et de parcours',
    items: [
      "J'ai rempli le gabarit-brief-mini-projet-ia-par-secteur.docx avant de commencer à produire.",
      "Mon périmètre est dimensionné pour le temps réellement disponible avant l'échéance.",
      "J'ai fixé des critères de succès mesurables, pas une impression générale de réussite.",
      "J'ai combiné au moins deux outils IA de la formation, chacun sur son point fort réel.",
      "J'ai testé mes outils à petite échelle avant de produire la version complète.",
      "J'ai sollicité et intégré un retour au point d'étape intermédiaire, avant la revue finale.",
      "Mon livrable final est directement utilisable dans mon travail réel, sans reprise complète.",
      "J'ai documenté les prompts et les étapes clés de ma démarche.",
      "J'ai rempli honnêtement la grille-evaluation-livrable-mini-projet.xlsx avant de la soumettre.",
      "Ma présentation suit la structure en cinq points (problème, outils, livrable, résultat, limites) pour la revue finale.",
      "Je suis prêt(e) à présenter mon projet à la revue individuelle avec le formateur expert.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Ce module est le dernier de la formation Maîtrise de l'Intelligence Artificielle : vous avez parcouru les quinze modules. Le Module 01 ouvrait sur une idée simple, ne plus subir l'IA mais la commander ; ce mini-projet est l'endroit où cette idée devient une preuve concrète, un livrable réel produit à partir d'un problème réel de votre métier. La revue individuelle par le formateur expert, une fois validée, débouche sur votre attestation de compétences IA délivrée par BK-BOOST Ltd. : la preuve, transmissible à votre organisation ou à un futur employeur, que vous savez diriger l'IA vers un résultat professionnel réel. Prochaine étape : lundi matin, ouvrez votre livrable et utilisez-le.",
  },
]
