// Module 14 — Big Data Analysis avec Claude (avec Code)
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (seuils de passage à l'échelle, croisement par Claude, vérification
// du résultat, anomalies de volume, brief de pipeline, construction avec Claude
// Code, supervision) est détaillée étape par étape et appliquée au même fil
// rouge, les trois exports mensuels de livraisons du T3 2026 d'Horizon Grands
// Lacs à croiser avant le comité trimestriel du 16 octobre 2026. Organisation et
// personnes fictives ; chiffres d'exemple cohérents entre eux (totaux, parts et
// écarts recalculés à partir des volumes annoncés).
export default [
  {
    type: 'cover',
    title: 'Big Data Analysis avec Claude (avec Code)',
    hook: "À la fin de ce module, vous saurez décider en cinq minutes si votre besoin dépasse Excel, faire croiser par Claude trois exports de 14 174 lignes sans écrire une ligne de code, vérifier chaque chiffre à la main, faire repérer et expliquer les volumes atypiques, puis faire construire par Claude Code un pipeline que vous relancerez chaque trimestre et que vous superviserez dans la durée. Résultat remis au comité : « 105 850 unités livrées au T3, Goma pèse 52,5 %, deux volumes atypiques expliqués et vérifiés ».",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Décider si un besoin d'analyse dépasse les limites pratiques d'Excel et de Power Query, en produisant la feuille « Seuils de passage à l'échelle » remplie, avec une recommandation chiffrée et justifiée.",
      "Préparer et déposer des fichiers volumineux dans Claude en respectant les règles de confidentialité, en produisant des sources archivées en lecture seule, des copies de travail et un contrôle de lecture (nombre de lignes lues par fichier).",
      "Obtenir de Claude le croisement de plusieurs fichiers avec détection et validation des variantes de clé avant toute fusion, en produisant un tableau trimestriel par site trié et la table des regroupements validés.",
      "Lire et vérifier un résultat de code exécuté (explication en langage clair, rapprochement des totaux, échantillon tracé jusqu'aux fichiers sources, repères de lecture du code), en produisant un tableau de vérification de 8 lignes sans écart non expliqué.",
      "Faire détecter et qualifier les volumes atypiques (seuil de 40 %) et calculer des indicateurs qu'Excel gère mal (moyenne mobile, coefficient de variation), en produisant un tableau d'anomalies dont chaque ligne porte une explication confirmée.",
      "Cadrer un pipeline récurrent avec le gabarit de brief, puis le faire construire, tester et documenter avec Claude Code, en produisant un script relançable avec mode test, sa table de correspondance et son mode d'emploi.",
      "Superviser ce pipeline dans la durée avec la feuille « Suivi des pipelines automatisés », en produisant une ligne de suivi complétée, une routine de relance et une procédure en cas de changement de format.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous apprend pas à programmer : il vous apprend à piloter, en français, un outil qui exécute réellement du code sur vos fichiers, et à garder la main sur ce qu'il produit. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les gestes à faire dans Excel ou dans le terminal, et le résultat attendu sur un cas suivi du début à la fin.",
      "À la fin du module, vous aurez en main huit livrables réutilisables tels quels sur vos propres exports :",
    ],
    bullets: [
      "La feuille « Seuils de passage à l'échelle » (gabarit checklist-passage-echelle-big-data.xlsx, feuille 1) complétée, avec la décision d'outil.",
      "Un dossier de sources archivées en lecture seule, des copies de travail et un contrôle de lecture des fichiers.",
      "Un tableau trimestriel par site, trié, avec la table des regroupements de clé validés.",
      "Un tableau de vérification de 8 lignes tracées jusqu'aux fichiers sources, et une lecture annotée du code exécuté.",
      "Un tableau des anomalies de volume, chacune qualifiée (donnée ou réalité) et confirmée, avec les indicateurs statistiques.",
      "Le gabarit « Brief — pipeline de données automatisé » (gabarit-brief-pipeline-donnees-automatise.docx) complété section par section.",
      "Un pipeline Claude Code testé : script, table de correspondance, mode test, mode d'emploi.",
      "La feuille « Suivi des pipelines automatisés » (feuille 2 du même classeur) avec la routine de supervision.",
    ],
    tip: "Ouvrez dès maintenant les deux gabarits du dossier 04-templates : le classeur checklist-passage-echelle-big-data.xlsx (deux feuilles) et le document gabarit-brief-pipeline-donnees-automatise.docx. Les procédures les remplissent champ par champ.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le comité trimestriel du vendredi 16 octobre 2026',
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Le mercredi 7 octobre 2026, Josué Kambale, coordinateur logistique, envoie à Amani Kahindo, chargée administrative et logistique à Goma, trois exports CSV de livraisons du troisième trimestre : export-juillet.csv (4 812 lignes), export-aout.csv (5 236 lignes) et export-septembre.csv (4 126 lignes), soit 14 174 lignes au total.",
      "Sa demande : « J'ai besoin d'un tableau de synthèse trimestriel par site avant le comité de la semaine prochaine, avec les volumes qui sortent de l'ordinaire signalés. » Le comité, présidé par la directrice pays Furaha Bisimwa, se réunit le vendredi 16 octobre 2026. Chaque fichier a cinq colonnes : date de livraison, site de destination, identifiant de commande, quantité livrée, statut. Le piège est dans la colonne « site de destination » : Goma s'écrit GOMA-01 en juillet, Goma01 en août et GOMA 01 en septembre.",
    ],
    table: {
      columns: ['Fichier', 'Date', 'Site de destination', 'Identifiant de commande', 'Quantité', 'Statut'],
      rows: [
        ['juillet', '01/07/2026', 'GOMA-01', 'CMD-26-07-00018', '24', 'Livré'],
        ['juillet', '02/07/2026', 'KIN-03', 'CMD-26-07-00031', '6', 'Partiel'],
        ['août', '03/08/2026', 'Goma01', 'CMD-26-08-00007', '18', 'Livré'],
        ['août', '18/08/2026', 'Kin03', 'CMD-26-08-01204', '300', 'Livré'],
        ['septembre', '01/09/2026', 'GOMA 01', 'CMD-26-09-00004', '30', 'Livré'],
        ['septembre', '03/09/2026', 'KIN-3', 'CMD-26-09-00119', '12', 'Livré'],
      ],
    },
    highlight: "Six lignes tirées des trois fichiers : à l'œil nu, on voit déjà quatre écritures de deux sites. Sur 14 174 lignes, personne ne les verra — c'est pour cela qu'il faut un outil qui exécute du code, et un humain qui vérifie.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 7 procédures, dans l\'ordre où vous les exécuterez',
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Ne sautez aucune étape : une erreur de clé non détectée au croisement se retrouve, multipliée, dans le rapport remis au comité — et dans le pipeline qui la répétera chaque trimestre.",
    bullets: [
      "Procédure 1 — Décider si le besoin dépasse Excel (4 étapes) : mesurer, remplir la feuille des seuils, décider, préparer les fichiers.",
      "Procédure 2 — Faire croiser les fichiers par Claude (5 étapes) : question de gestion, contrôle de lecture, prompt CLARTE, validation des regroupements, tableau trimestriel.",
      "Procédure 3 — Lire et vérifier le résultat (5 étapes) : explication, rapprochement des totaux, échantillon tracé, vérification à la main, lecture du code.",
      "Procédure 4 — Détecter et qualifier les anomalies, calculer au-delà d'Excel (5 étapes).",
      "Procédure 5 — Cadrer le pipeline avec le gabarit de brief (6 étapes).",
      "Procédure 6 — Faire construire et tester le pipeline avec Claude Code (7 étapes).",
      "Procédure 7 — Superviser le pipeline dans la durée (4 étapes).",
    ],
  },
  {
    type: 'concept',
    title: 'Les trois symptômes qui font quitter Excel — et ce que « big data » veut vraiment dire ici',
    body: [
      "« Big data » ne veut rien dire d'opérationnel en soi. La définition utile pour votre travail n'est pas une taille en gigaoctets : c'est un ensemble de symptômes que vous pouvez constater, chiffrer et noter dans une grille.",
      "Symptôme 1 : un fichier qui devient lent ou plante (tableau croisé qui met plusieurs secondes à chaque modification, formule matricielle qui fige Excel, fichier qui refuse de s'ouvrir). Symptôme 2 : plusieurs fichiers à croiser sur une clé commune sans erreur manuelle. Symptôme 3 : un calcul statistique qu'Excel ne fait pas nativement ou fait de façon fragile.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Volume : le plus gros fichier compte 5 236 lignes — Excel le gère sans difficulté. Symptôme 1 absent.",
        "Fichiers : trois exports à croiser sur le site de destination — au-delà de 2. Symptôme 2 présent.",
        "Clé : dix écritures différentes pour trois sites réels — un croisement manuel (copier-coller, RECHERCHEV) est un piège à erreurs.",
        "Calcul : écarts à la moyenne des deux autres mois, moyenne mobile hebdomadaire, coefficient de variation — faisables en formules Excel, mais fragiles sur 14 174 lignes empilées. Symptôme 3 présent.",
        "Conclusion : un seul seuil franchi suffit pour passer à Claude ; ici, trois indicateurs sur quatre le sont.",
      ],
    },
    tip: "Si aucun seuil n'est franchi, restez dans Excel avec les méthodes du Module 09 : ce sera toujours plus rapide et plus facile à auditer par vous-même.",
  },
  {
    type: 'comparison-table',
    title: 'La grille des seuils de passage à l\'échelle — et son verdict sur le fil rouge',
    columns: ['Critère', 'Seuil indicatif de passage à l\'échelle', 'Verdict sur les exports du T3'],
    rows: [
      ['Volume de lignes du fichier principal', "Au-delà d'environ 50 000 lignes, ou dès qu'un tableau croisé dynamique devient lent ou que le fichier plante à l'ouverture", '5 236 lignes dans le plus gros fichier : seuil non franchi'],
      ['Nombre de fichiers sources à croiser', 'Plus de 2 fichiers à rapprocher sur une clé commune (site, commande, référence)', '3 fichiers : seuil franchi'],
      ['Type de calcul demandé', "Un calcul qu'Excel ne fait pas nativement ou fait de façon fragile (écart-type pondéré, corrélation multi-variables, agrégation glissante)", 'Oui : écart de chaque mois à la moyenne des deux autres, moyenne mobile et coefficient de variation par semaine sont faisables en formules, mais fragiles sur 14 174 lignes empilées'],
      ['Critère additionnel libre (lignes 8 et 9 de la feuille)', 'Votre propre critère, à formuler en question Oui / Non', 'Clé de jointure instable (variantes d\'écriture d\'un même site) : Oui'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '10 valeurs pour 3 sites',
    caption: "Les trois exports contiennent dix écritures différentes de la colonne « site de destination » pour seulement trois sites réels.",
    context: "Sans traitement, un croisement automatique produirait un tableau de dix lignes où la plus grande ligne de Goma (Goma01, 19 250 unités) ne représente que 34,7 % du vrai total de Goma (55 550). Le chiffre est calculé sans erreur et pourtant faux : c'est exactement ce que l'exécution de code ne corrige pas toute seule.",
  },
  {
    type: 'concept',
    title: 'Ce que fait vraiment Claude quand il « exécute du code »',
    body: [
      "Claude.ai dispose d'un outil d'analyse qui va au-delà de la conversation. Quand vous déposez un fichier volumineux ou posez une question qui demande un calcul, Claude écrit du code — le plus souvent en Python avec la bibliothèque pandas, spécialisée dans les tableaux de données — puis l'exécute réellement en arrière-plan sur votre fichier et vous rend la sortie.",
      "La différence est capitale : ce n'est pas « Claude qui vous explique comment on calculerait un total », c'est « Claude qui a écrit le code, l'a fait tourner sur vos 14 174 lignes et vous donne le chiffre obtenu ». Vous restez en français du début à la fin ; le code est consultable, mais vous n'avez pas à l'écrire.",
    ],
    bullets: [
      "Il lit les fichiers en entier (là où un tableur peut tronquer ou ralentir).",
      "Il applique le même traitement à chaque ligne, sans la fatigue ni les oublis du copier-coller.",
      "Il peut produire des statistiques (écart-type, moyenne mobile) qu'aucune formule Excel ne calcule proprement sur de gros volumes.",
      "Il peut créer un fichier de sortie (Excel, CSV) que vous téléchargez.",
    ],
    pitfall: "Demander « environ combien » ou « estime » : l'IA peut alors répondre sans exécuter de calcul. Exigez toujours « exécute réellement le calcul sur les fichiers fournis, ne donne aucune estimation ».",
  },
  {
    type: 'comparison-table',
    title: 'Trois outils, trois rôles : Excel, Claude (exécution de code), Claude Code',
    columns: ['Outil', 'À utiliser pour', 'Limite à connaître'],
    rows: [
      ['Excel / Power Query (Module 09)', "Fichiers sous le seuil, analyses que vous voulez auditer cellule par cellule, nettoyage reproductible de petits exports", "Lent ou instable au-delà de quelques dizaines de milliers de lignes ; croisement de plusieurs fichiers fragile"],
      ['Claude — exécution de code dans claude.ai', "Une analyse ponctuelle et conversationnelle : vous déposez les fichiers, posez la question, le calcul tourne une fois et le résultat s'affiche dans la conversation", "Rien n'est conservé comme programme réutilisable ; il faut redécrire le besoin la fois suivante"],
      ['Claude Code (ligne de commande, vu au Module 10)', "Un traitement qui doit se répéter sur des données qui changent : il construit un script persistant, enregistré sur votre poste, relançable chaque mois ou chaque trimestre", "Il agit sur vos fichiers : à lancer depuis le dossier de travail uniquement, avec mode test et supervision"],
    ],
  },
  {
    type: 'concept',
    title: 'Le principe non négociable du module',
    body: "Une seule règle prime sur toutes les autres, dans la continuité du principe de sécurité posé au Module 10 : ne jamais faire confiance à un résultat de code exécuté sans le vérifier sur un échantillon connu, et ne jamais laisser tourner une automatisation récurrente sans supervision périodique.",
    highlight: "L'exécution de code élimine l'erreur de calcul humaine. Elle n'élimine ni une clé de jointure instable, ni une donnée source déjà fausse, ni un format de fichier qui a changé sans que personne ne l'ait signalé.",
    example: {
      title: 'Traduction opérationnelle dans ce module',
      lines: [
        "Avant diffusion : un échantillon de 8 lignes tracées jusqu'aux fichiers sources, vérifié à la main (procédure 3).",
        "Avant fusion : une liste de regroupements de clés, validée par un humain (procédure 2).",
        "Après mise en service : une vérification au moins tous les 30 jours, consignée dans la feuille de suivi (procédure 7).",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Ce que l\'exécution de code garantit — et ce qu\'elle ne garantit pas',
    columns: ['Risque', 'Éliminé par l\'exécution de code ?', 'Comment le couvrir dans ce module'],
    rows: [
      ['Erreur de calcul humaine (formule mal recopiée, plage oubliée)', 'Oui', 'Rien de plus à faire que le rapprochement des totaux'],
      ['Clé de jointure instable (GOMA-01 / Goma01 / GOMA 01)', 'Non', 'Liste des regroupements proposée, puis validée par vous avant fusion'],
      ['Fichier lu en partie (lignes ignorées sans message)', 'Non', 'Contrôle de lecture : nombre de lignes lues par fichier comparé au vôtre'],
      ['Donnée source déjà fausse ou export incomplet', 'Non', 'Échantillon tracé jusqu\'aux sources, confirmation auprès du producteur du fichier'],
      ['Logique demandée différente du besoin réel', 'Non', 'Question de gestion validée par écrit ; explication en langage clair'],
      ['Format qui change entre deux exports', 'Non', 'Pipeline qui s\'arrête plutôt que deviner ; supervision tous les 30 jours'],
    ],
  },
  {
    type: 'concept',
    title: 'Jointure et clé : pourquoi une écriture différente suffit à fausser tout le tableau',
    body: [
      "Une jointure rapproche des lignes sur une clé commune : un identifiant de site, un numéro de commande. C'est le même travail qu'une RECHERCHEV répétée, en plus rapide et sans copier-coller. Dans le fil rouge, les trois fichiers ont la même structure : Claude les empile, puis regroupe les lignes par site. Dans d'autres cas, vous rapprochez deux fichiers différents (par exemple des livraisons et une table de prix) : dans les deux situations, la qualité de la clé décide du résultat.",
      "Pour un ordinateur, « GOMA-01 », « Goma01 » et « GOMA 01 » sont trois valeurs sans aucun rapport : la casse, le tiret et l'espace comptent. Aucun message d'erreur n'apparaît : le tableau est simplement faux, avec plusieurs lignes là où il devrait y en avoir une.",
    ],
    example: {
      title: 'Même site, trois lignes dans le tableau croisé',
      lines: [
        "GOMA-01 : 18 400 | Goma01 : 19 250 | GOMA 01 : 17 900  → trois « sites », aucun ne vaut le total réel.",
        "Après regroupement validé : Goma = 18 400 + 19 250 + 17 900 = 55 550 unités.",
      ],
    },
    tip: "Quand l'IA propose un regroupement, demandez toujours les valeurs brutes concernées et le nombre de lignes de chacune : c'est ce qui vous permet de juger si le regroupement est évident ou douteux.",
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de déposer des fichiers volumineux dans une IA',
    body: "Un fichier de livraisons peut sembler anodin et contenir des colonnes entières passées inaperçues : bénéficiaires, sites sensibles, partenaires à ne pas exposer. Déposer ces fichiers dans une IA, c'est les transmettre à un service externe. La vérification de ce qui peut ou non être transmis, posée au Module 01, reste valable avec plus d'acuité encore sur de gros volumes.",
    bullets: [
      "Utilisez uniquement un compte IA professionnel validé par votre organisation, jamais un compte personnel gratuit.",
      "Ouvrez chaque fichier et vérifiez toutes les colonnes, y compris les colonnes masquées : seules celles utiles à la question partent chez l'IA.",
      "Remplacez les noms de personnes par des codes, et conservez la table de correspondance hors de l'IA.",
      "Si le doute subsiste sur une colonne ou un site sensible, demandez la décision écrite de votre responsable avant tout dépôt.",
      "Notez dans le journal du dossier quel fichier a été déposé dans quel outil, et à quelle date.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Horizon Grands Lacs a validé l'offre professionnelle de Claude pour le service administratif.",
        "Les trois exports ne contiennent que cinq colonnes (date, site, identifiant de commande, quantité, statut) : aucune donnée de bénéficiaire.",
        "Décision d'Amani, consignée le 07/10/2026 : dépôt autorisé sans anonymisation.",
      ],
    },
    pitfall: "Déposer un export brut « parce qu'il est gros et qu'on n'a pas le temps de le regarder » : les colonnes que vous n'avez pas ouvertes sont précisément celles qui contiennent des données sensibles.",
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE — ce que vous écrivez pour chaque lettre',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de croisement du fil rouge'],
    rows: [
      ['C — Contexte', 'Qui vous êtes, le cadre, les données exactes (fichiers, colonnes, nombre de lignes, période)', '« Trois fichiers CSV de livraisons (juillet, août, septembre 2026), 14 174 lignes, cinq colonnes nommées »'],
      ['L — Livrable attendu', 'Le format exact du résultat : tableau, colonnes, tri, longueur', '« Un tableau par site et par mois, trié par quantité totale décroissante, avec une ligne séparée pour les anomalies de clé »'],
      ['A — Audience / rôle', "Le rôle que l'IA endosse et pour qui elle produit", '« Tu es analyste de données pour le service logistique d\'une organisation »'],
      ['R — Restrictions', "Ce qu'il ne faut PAS faire, les limites de vérifiabilité", '« Exécute réellement le calcul, aucune estimation. Ne fusionne rien avant ma validation des regroupements. »'],
      ['T — Ton & style', 'Le registre attendu', '« Reste factuel, aucune recommandation à ce stade »'],
      ['E — Exemples', 'Un exemple de ligne ou de format de sortie', '« Exemple : Goma | GOMA-01, Goma01, GOMA 01 | 3 fichiers | 7 128 lignes »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR — pour les demandes qui exigent un raisonnement en plusieurs étapes',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de pipeline du fil rouge'],
    rows: [
      ['S — Situation', "L'état factuel de départ : ce que vous faites aujourd'hui, à quel rythme", '« Chaque trimestre, je reçois trois exports CSV et je refais à la main un tableau de synthèse par site »'],
      ['T — Tâche', "L'objectif précis, y compris ce qui doit rester réutilisable", '« Un pipeline que je relance chaque trimestre sans repartir de zéro »'],
      ['A — Action', "Ce que l'IA doit exécuter, découpé et numéroté dans l'ordre", '« (1) lit les fichiers, (2) uniformise les sites, (3) calcule totaux et écarts, (4) écrit le fichier Excel, plus un mode test »'],
      ['R — Résultat', 'Le livrable final et son critère de réussite', '« Un script documenté, relançable en changeant seulement le trimestre, expliqué en langage courant avant toute exécution »'],
    ],
  },
  {
    type: 'warning',
    title: 'Ce qu\'une automatisation qui tourne seule peut devenir : une boîte noire',
    items: [
      "Une automatisation jamais revérifiée produit un résultat avec la même confiance apparente, qu'il soit encore juste ou non : c'est une boîte noire.",
      "Un pipeline mis en service correctement en octobre peut produire un résultat silencieusement faux en mars si le format des fichiers sources a changé entre-temps (colonne renommée, nouveau site, nouvelle écriture).",
      "« L'IA a exécuté du code » ne veut pas dire « le résultat est fiable » : l'exécution garantit le calcul sur les données fournies, pas que ces données étaient correctes en amont.",
      "Un pipeline non revérifié depuis plus de 30 jours doit être considéré comme non fiable, même s'il a l'air correct.",
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Pipeline de données', definition: "L'enchaînement complet et automatisé des étapes qui transforment un ou plusieurs fichiers bruts en un résultat exploitable (lecture, nettoyage, croisement, calcul, mise en forme de la sortie), construit une fois puis réexécuté à l'identique." },
      { term: 'Jointure', definition: "Opération qui rapproche des lignes de plusieurs fichiers sur une clé commune (identifiant de site, numéro de commande) : l'équivalent, plus robuste et plus rapide, d'une RECHERCHEV répétée." },
      { term: 'Clé de jointure', definition: "La colonne qui sert à rapprocher ou à regrouper les lignes. Elle n'est fiable que si une même entité s'écrit toujours de la même façon." },
      { term: 'Échantillon de vérification', definition: "Sous-ensemble restreint (5 à 10 lignes) contrôlé à la main contre les fichiers sources, avant diffusion, pour confirmer la fiabilité du résultat." },
      { term: 'Script récurrent', definition: "Script construit une fois mais destiné à être réexécuté à intervalle régulier (chaque mois, chaque trimestre) sur des données qui se renouvellent." },
      { term: 'Mode test (dry-run)', definition: "Exécution qui affiche ce que le script ferait sans écrire le fichier final ni rien modifier : votre garde-fou avant chaque exécution réelle." },
      { term: 'Table de correspondance', definition: "Petit fichier qui associe chaque écriture connue d'une clé à sa valeur officielle (GOMA-01 → Goma). Le pipeline s'arrête sur toute valeur absente de la table." },
      { term: 'Coefficient de variation', definition: "Écart-type divisé par la moyenne : mesure la régularité d'une série (une valeur proche de 0 % indique un flux stable, une valeur élevée un flux irrégulier)." },
      { term: 'Moyenne mobile', definition: "Moyenne recalculée sur une fenêtre glissante (par exemple 4 semaines) qui lisse les pics ponctuels pour faire apparaître la tendance." },
      { term: 'Boîte noire', definition: "Automatisation qui continue de produire un résultat sans que personne ne vérifie plus s'il est juste." },
      { term: 'Seuil de passage à l\'échelle', definition: "Le point à partir duquel un besoin d'analyse dépasse ce qu'Excel et Power Query traitent raisonnablement (volume, nombre de fichiers, type de calcul)." },
    ],
  },

  // ───────────── Procédure 1 — Décider si le besoin dépasse Excel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Mesurer le besoin sur vos fichiers : lignes, fichiers, calcul',
    intro: "Avant de déposer quoi que ce soit dans une IA, vous mesurez : une décision d'outil se prend sur des chiffres, pas sur une impression. Entrées nécessaires : les trois fichiers reçus et la demande du coordinateur.",
    steps: [
      {
        title: 'Compter les lignes de chaque fichier',
        actions: [
          "Ouvrez export-juillet.csv dans Excel (double-clic). Si Excel signale que le fichier n'a pas été chargé entièrement, arrêtez-vous : il dépasse la capacité d'une feuille (1 048 576 lignes) et le seuil est franchi.",
          "Cliquez dans la cellule A1, puis appuyez sur Ctrl+Fin : le numéro de la dernière ligne, moins 1 pour l'en-tête, donne le nombre de lignes de données.",
          "Répétez pour les deux autres fichiers et notez les trois nombres.",
        ],
      },
      {
        title: 'Lister les fichiers, la clé et les valeurs de la clé',
        actions: [
          "Comptez les fichiers à croiser et identifiez la colonne qui sert de clé commune (ici « site de destination »).",
          "Dans chaque fichier : Données > Filtrer, ouvrez la flèche de la colonne « site de destination » et notez chaque valeur listée.",
          "Écrivez en une phrase le calcul demandé et demandez-vous si une formule Excel simple le fait nativement.",
        ],
      },
    ],
    example: {
      title: 'Fiche de mesure — exports du T3 2026',
      lines: [
        "export-juillet.csv : Ctrl+Fin → ligne 4 813 → 4 812 lignes de données | valeurs de la clé : GOMA-01, BUKAVU-02, KIN-03",
        "export-aout.csv : ligne 5 237 → 5 236 lignes | valeurs : Goma01, Bukavu02, Kin03",
        "export-septembre.csv : ligne 4 127 → 4 126 lignes | valeurs : GOMA 01, BUKAVU 02, KIN 03, KIN-3",
        "Total : 14 174 lignes, 3 fichiers, 10 valeurs distinctes de la clé pour 3 sites réels (Goma, Bukavu, Kinshasa).",
        "Calcul demandé : total par site sur le trimestre + volumes qui s'écartent de plus de 40 % des deux autres mois.",
      ],
    },
    result: "Une fiche de mesure de cinq lignes, collée dans le journal du dossier : les trois valeurs constatées dont la feuille de seuils a besoin (volume, nombre de fichiers, nature du calcul) et un décompte des écritures de la clé.",
    tip: "Le filtre automatique est le détecteur de variantes le plus rapide : un site qui apparaît sous deux écritures dans la liste déroulante saute aux yeux, sans aucune formule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Remplir la feuille « Seuils de passage à l\'échelle » champ par champ',
    intro: "Le classeur checklist-passage-echelle-big-data.xlsx contient deux feuilles ; vous utilisez ici la première. Ses trois premières lignes sont pré-remplies à titre d'exemple (82 000 lignes, 3 fichiers, calcul non natif) : écrasez-les avec vos propres valeurs. Les colonnes E et F se calculent seules.",
    steps: [
      {
        title: 'Remplir les trois critères fournis',
        actions: [
          "Ouvrez le classeur, feuille « Seuils de passage à l'échelle ». Les colonnes A à C décrivent le critère et son seuil : ne les modifiez pas.",
          "Ligne 5 (volume de lignes du fichier principal) : en D5, saisissez 5236 (le plus gros fichier).",
          "Ligne 6 (nombre de fichiers à croiser) : en D6, saisissez 3.",
          "Ligne 7 (type de calcul demandé) : en D7, choisissez « Oui » dans la liste déroulante, car le calcul complet est fragile en formules sur 14 174 lignes empilées.",
        ],
      },
      {
        title: 'Ajouter votre critère additionnel',
        actions: [
          "Ligne 8, que le gabarit laisse libre pour vos propres critères : en A8, écrivez « Clé de jointure instable (variantes d'écriture d'un même site) ».",
          "En B8, écrivez « Plus de valeurs distinctes de la clé que d'entités réelles ». En C8, écrivez Non (la réponse attendue si tout va bien).",
          "En D8, choisissez « Oui » : dix écritures pour trois sites. La formule de la colonne E compare D8 à C8.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère', 'Seuil (col. C)', 'Valeur constatée (col. D)', 'Dépasse le seuil ? (col. E)', 'Recommandation (col. F)'],
      rows: [
        ['5', 'Volume de lignes du fichier principal', '50 000', '5 236', 'Non', 'Excel / Power Query suffisant'],
        ['6', 'Nombre de fichiers sources à croiser', '2', '3', 'Oui', 'Claude (exécution de code) recommandé'],
        ['7', 'Type de calcul demandé', 'Non natif à Excel', 'Oui', 'Oui', 'Claude (exécution de code) recommandé'],
        ['8', 'Clé de jointure instable (critère additionnel)', 'Non', 'Oui', 'Oui', 'Claude (exécution de code) recommandé'],
      ],
    },
    result: "Quatre lignes complétées ; les colonnes E et F se sont mises à jour seules. La ligne 9 reste vide : sa colonne E reste vide aussi.",
    pitfall: "Saisir une valeur en D sans lire la colonne C : le seuil du nombre de fichiers se lit « plus de 2 » (3 déclenche), celui des lignes « à partir de 50 000 ». Une valeur de D6 égale à 2 ne franchit pas le seuil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Lire la recommandation globale et décider de l\'outil',
    intro: "La cellule C11 additionne les lignes qui franchissent le seuil. À vous de lire la recommandation avec bon sens et de la consigner : la décision d'outil est une décision de gestion, elle se justifie par écrit.",
    steps: [
      {
        title: 'Lire le verdict',
        actions: [
          "Lisez la cellule C11 (Recommandation globale) : elle compte les « Oui » de E5 à E9 et affiche le message correspondant.",
          "Repérez les lignes qui disent « Excel / Power Query suffisant » : elles ne contredisent pas le verdict global, elles indiquent seulement que ce critère-là ne pose pas de problème.",
        ],
      },
      {
        title: 'Décider et consigner',
        actions: [
          "Décidez : au moins un « Oui » → Claude (exécution de code) pour cette analyse. Si le besoin doit se répéter, prévoyez aussi Claude Code (procédures 5 à 7).",
          "Aucun « Oui » → restez dans Excel et dans les méthodes du Module 09 : arrêtez ce module ici.",
          "Notez la décision, la date et le nom de la personne qui la prend dans le journal du dossier.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — verdict et décision',
      lines: [
        "C11 : « Au moins un seuil est dépassé : passez à Claude (exécution de code), et à Claude Code si le besoin se répète chaque mois. »",
        "Comptage : E5 = Non, E6 = Oui, E7 = Oui, E8 = Oui → 3 « Oui ».",
        "Décision d'Amani Kahindo, 07/10/2026 : analyse ponctuelle du T3 avec l'exécution de code de Claude ; le même rapport sera refait chaque trimestre, donc pipeline Claude Code à construire une fois le résultat validé.",
        "Contre-exemple pédagogique : l'export de dépenses de 26 lignes du Module 09 donnerait quatre « Non » → Excel.",
      ],
    },
    result: "Une décision d'outil écrite, datée, chiffrée par la feuille, avec la mention « pipeline à prévoir car rapport récurrent ».",
    tip: "Le texte de C11 mentionne « chaque mois » : adaptez-le à votre rythme (ici, chaque trimestre) quand vous reportez la décision dans le journal. Le critère qui compte est la répétition du besoin, pas la fréquence exacte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Vérifier l\'autorisation de dépôt et préparer les fichiers',
    intro: "Une analyse sur de gros fichiers se prépare comme une pièce comptable : sources protégées, copies de travail, règles de confidentialité appliquées avant tout dépôt. Entrées : les trois exports reçus par message.",
    steps: [
      {
        title: 'Contrôler ce que contiennent les fichiers',
        actions: [
          "Dans chaque fichier, sélectionnez tout (Ctrl+A) puis faites un clic droit sur un en-tête de colonne : si « Afficher » est proposé, des colonnes sont masquées ; affichez-les et lisez-les.",
          "Vérifiez la liste des colonnes : si une colonne contient des noms de personnes ou une donnée sensible inutile à la question, supprimez-la de la copie de travail.",
          "Vérifiez que l'offre IA utilisée est celle validée par votre organisation, et que le dépôt est autorisé ; en cas de doute, demandez la réponse par écrit.",
        ],
      },
      {
        title: 'Ranger les fichiers et créer le journal',
        actions: [
          "Créez le dossier Analyse_Livraisons_T3_2026 avec trois sous-dossiers : 01_Source, 02_Travail, 03_Livrables.",
          "Enregistrez les trois exports dans 01_Source tels que reçus, puis clic droit > Propriétés > cochez « Lecture seule » pour chacun.",
          "Copiez-les dans 02_Travail : ce sont ces copies que vous déposerez dans l'IA. Au besoin, enregistrez-les en « CSV UTF-8 (délimité par des virgules) » pour éviter les accents illisibles.",
          "Créez un fichier journal.xlsx (colonnes Date, Action, Fichier, Outil, Auteur) et saisissez la première ligne.",
        ],
      },
    ],
    example: {
      title: 'Journal — premières lignes (fil rouge)',
      lines: [
        "07/10/2026 | Réception des trois exports de J. Kambale, archivés en lecture seule dans 01_Source | export-juillet, export-aout, export-septembre | Explorateur | A. Kahindo",
        "07/10/2026 | Contrôle des colonnes : 5 colonnes, aucune colonne masquée, aucune donnée personnelle ; dépôt autorisé (offre professionnelle validée) | 3 fichiers | Excel | A. Kahindo",
        "07/10/2026 | Décision d'outil : Claude (exécution de code), seuils franchis : fichiers, calcul, clé instable | feuille de seuils | Excel | A. Kahindo",
      ],
    },
    result: "Les sources sont intactes et protégées, trois copies de travail prêtes au dépôt, et le journal contient la mesure, la décision et l'autorisation de dépôt.",
    pitfall: "Déposer dans l'IA les fichiers de 01_Source : au premier réexport ou à la première erreur de manipulation, vous ne pouvez plus prouver ce que contenait le fichier reçu.",
  },

  // ───────────── Procédure 2 — Faire croiser les fichiers par Claude ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Écrire la question de gestion et les définitions, et les faire valider',
    intro: "« Un tableau de synthèse avec les volumes qui sortent de l'ordinaire » n'est pas encore une question. Avant d'ouvrir l'IA, vous fixez ce qu'on additionne, sur quelle période, et à partir de quand un volume est « atypique ». Ces définitions sont celles que vous imposerez ensuite à Claude et au pipeline.",
    steps: [
      {
        title: 'Rédiger la question et les définitions',
        actions: [
          "Écrivez une phrase qui contient : un périmètre, une comparaison, un indicateur, une décision éclairée.",
          "Fixez ce qu'on additionne : la colonne « quantité livrée », tous statuts confondus (Livré, Partiel, Annulé), les lignes annulées ayant une quantité à 0.",
          "Fixez la période (du 01/07/2026 au 30/09/2026) et le seuil d'atypie : écart de plus de 40 % entre un mois et la moyenne des deux autres.",
        ],
      },
      {
        title: 'Faire valider par le demandeur',
        actions: [
          "Envoyez la question et les trois définitions à Josué Kambale, par écrit.",
          "Demandez-lui une validation explicite et notez-la, avec l'heure, dans le journal.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — échange du 07/10/2026',
      lines: [
        "Question rédigée par Amani : « Quelle est la quantité totale livrée par site au T3 2026 (juillet à septembre), et quels sites ou mois s'écartent de plus de 40 % de la moyenne des deux autres mois, pour que le comité sache où se concentre l'activité et où vérifier avant d'engager des ressources ? »",
        "Définitions : quantité livrée = colonne « quantité livrée », statuts Livré, Partiel et Annulé inclus (Annulé = 0) ; période 01/07 au 30/09/2026 ; atypie = écart > 40 % à la moyenne des deux autres mois.",
        "Validation de Josué Kambale le 07/10 à 16 h 05 : « OK pour les trois définitions. Pour Goma, c'est le site 01. »",
      ],
    },
    result: "Une question de gestion validée par écrit, trois définitions chiffrées, et un filtre pour toute la suite : un calcul qui n'y répond pas sort du rapport.",
    pitfall: "Laisser « volume qui sort de l'ordinaire » sans seuil : l'IA choisira le sien, vous ne pourrez ni le reproduire dans le pipeline, ni l'expliquer au comité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Ouvrir la conversation et faire un contrôle de lecture avant toute analyse',
    intro: "Une IA peut lire un fichier en partie sans le dire. Avant de poser la vraie question, vous lui demandez ce qu'elle a lu, et vous comparez à votre fiche de mesure. Entrées : les trois copies de travail et la fiche de mesure de la procédure 1.",
    steps: [
      {
        title: 'Préparer la conversation',
        actions: [
          "Connectez-vous à claude.ai avec votre compte professionnel et ouvrez une nouvelle conversation.",
          "Dans les paramètres, rubrique « Capacités », vérifiez que l'option d'exécution de code et de création de fichiers est activée (sur une offre d'entreprise, l'administrateur peut l'avoir désactivée ; le libellé varie selon la version).",
          "Joignez les trois copies de travail avec le bouton de pièce jointe (trombone ou « + ») et attendez que les trois fichiers apparaissent dans le message.",
        ],
      },
      {
        title: 'Contrôler la lecture',
        actions: [
          "Envoyez le message de contrôle (voir exemple), sans poser encore la question de gestion.",
          "Comparez la réponse à votre fiche de mesure : lignes par fichier, colonnes, première et dernière date.",
          "Un seul écart (un nombre de lignes différent, une colonne inconnue) : arrêtez-vous, vérifiez le fichier joint, relancez.",
        ],
      },
    ],
    example: {
      title: 'Message de contrôle et réponse attendue',
      lines: [
        "« Sans rien analyser, indique pour chacun des trois fichiers : le nombre de lignes de données, les noms exacts des colonnes, la première et la dernière date de livraison. Exécute réellement le comptage. »",
        "Réponse attendue : export-juillet.csv — 4 812 lignes, 5 colonnes, 01/07/2026 au 31/07/2026.",
        "export-aout.csv — 5 236 lignes, 5 colonnes, 01/08/2026 au 31/08/2026.",
        "export-septembre.csv — 4 126 lignes, 5 colonnes, 01/09/2026 au 30/09/2026. Total : 14 174 lignes.",
      ],
    },
    result: "Les trois fichiers sont lus en entier : 4 812 + 5 236 + 4 126 = 14 174 lignes, conforme à la fiche de mesure. Vous pouvez poser la vraie question.",
    pitfall: "Passer directement à la question : si Claude n'a lu que les 1 000 premières lignes de chaque fichier, tous les totaux sont faux et rien ne vous l'indiquera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Assembler le prompt de croisement (norme CLARTE)',
    intro: "Le prompt reprend les faits de votre fiche de mesure et impose deux garde-fous : l'exécution réelle du calcul, et une validation humaine des regroupements de clé avant toute fusion. Copiez le modèle et remplacez uniquement ce qui diffère dans vos propres fichiers.",
    steps: [
      {
        title: 'Construire le prompt lettre par lettre',
        actions: [
          "A + C : donnez le rôle et décrivez précisément les fichiers (nombre, colonnes, période, volume).",
          "R : imposez l'exécution réelle, l'interdiction de fusionner avant validation, et l'obligation d'indiquer les lignes lues et exclues.",
          "L : fixez le tableau attendu (colonnes, tri) et la ligne séparée pour les anomalies de clé.",
          "T : demandez un ton factuel, sans recommandation à ce stade.",
          "E : donnez un exemple de ligne de la liste de regroupements attendue.",
        ],
      },
    ],
    example: {
      title: 'Prompt de croisement — fil rouge (à copier)',
      lines: [
        "« Tu es analyste de données pour le service logistique d'une organisation qui opère trois sites. [A]",
        "Je te fournis trois fichiers CSV d'exports mensuels de livraisons du T3 2026 (juillet : 4 812 lignes, août : 5 236, septembre : 4 126), avec les colonnes : date de livraison, site de destination, identifiant de commande, quantité livrée, statut. [C]",
        "Je veux le total de quantité livrée par site, par mois et sur le trimestre complet. Compte tous les statuts (Livré, Partiel, Annulé). [L]",
        "Avant de fusionner, identifie toute valeur de la colonne « site de destination » qui pourrait désigner le même site sous une orthographe différente (espace, tiret, casse). Présente-moi la liste de ces regroupements proposés, avec pour chacun les valeurs brutes concernées, le fichier et le nombre de lignes, et signale ceux dont tu n'es pas certain. N'applique rien avant que je valide. [R]",
        "Exemple de ligne de liste : Goma | GOMA-01, Goma01, GOMA 01 | juillet, août, septembre | 7 128 lignes. [E]",
        "Une fois les regroupements validés, produis un tableau site × mois avec total trimestre et part du total, trié par quantité totale décroissante, et une ligne séparée listant les anomalies de clé détectées. Termine par le nombre de lignes lues par fichier et le nombre de lignes exclues. [L]",
        "Exécute réellement le calcul sur les fichiers fournis, ne donne aucune estimation. [R] Reste factuel, aucune recommandation à ce stade. » [T]",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une lettre CLARTE identifiable, avec les vrais chiffres de vos fichiers et un point de validation humaine avant toute fusion.",
    tip: "« Termine par le nombre de lignes lues » est votre second contrôle de lecture : le total doit rester égal à 14 174 à toutes les étapes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Lire et valider la liste des regroupements de clé',
    intro: "Cette validation est le cœur du module. C'est vous, pas l'IA, qui décidez que « Goma01 » et « GOMA-01 » désignent le même site. Un regroupement certain se valide en lisant ; un regroupement douteux se vérifie auprès de la personne qui connaît le terrain.",
    steps: [
      {
        title: 'Lire la liste proposée',
        actions: [
          "Envoyez le prompt. Claude répond d'abord par la liste des regroupements proposés, sans tableau final.",
          "Comparez chaque ligne à votre propre liste de la procédure 1 (10 valeurs, 3 sites) : toutes les valeurs doivent apparaître, une seule fois.",
          "Repérez la ligne marquée « à confirmer » : ce sont les cas où l'IA hésite, et ceux où un humain doit trancher.",
        ],
      },
      {
        title: 'Trancher et répondre explicitement',
        actions: [
          "Pour chaque cas douteux, interrogez la personne qui connaît le terrain (ici Josué Kambale) en citant la valeur brute et son nombre de lignes.",
          "Répondez à Claude regroupement par regroupement, jamais par un « oui à tout » : validez ce qui est certain, tranchez ce qui est douteux.",
          "Demandez-lui de répéter la liste finale appliquée avant de produire le tableau.",
        ],
      },
    ],
    table: {
      columns: ['Site regroupé', 'Valeurs brutes', 'Fichiers et lignes', 'Confiance'],
      rows: [
        ['Goma', 'GOMA-01 · Goma01 · GOMA 01', 'juillet 2 436 · août 2 301 · septembre 2 391', 'Certain'],
        ['Bukavu', 'BUKAVU-02 · Bukavu02 · BUKAVU 02', 'juillet 1 301 · août 1 183 · septembre 556', 'Certain'],
        ['Kinshasa', 'KIN-03 · Kin03 · KIN 03', 'juillet 1 075 · août 1 752 · septembre 1 141', 'Certain'],
        ['Kinshasa (?)', 'KIN-3', 'septembre : 38 lignes, 410 unités', 'À confirmer : probable faute de saisie'],
      ],
    },
    example: {
      title: 'Votre réponse à Claude (fil rouge)',
      lines: [
        "« Je valide les regroupements Goma, Bukavu et Kinshasa tels que listés (trois écritures chacun). Pour KIN-3 (38 lignes de septembre, 410 unités), Josué Kambale confirme le 08/10 que c'est bien Kinshasa : regroupe-la avec KIN-03, Kin03 et KIN 03. Applique ces quatre regroupements, répète la liste finale, puis produis le tableau. »",
        "Avant cette décision, Kinshasa affichait 7 090 unités en septembre et une ligne orpheline de 410 : c'est le piège d'un regroupement non validé.",
      ],
    },
    result: "Une liste de regroupements validés, un par un, dont le cas douteux tranché par écrit auprès du coordinateur : trois sites, dix écritures, zéro ligne orpheline.",
    pitfall: "Répondre « valide tout » : si Claude avait proposé à tort de rattacher « GOMA-02 » (un autre dépôt) à Goma, vous l'auriez validé sans le voir. Un regroupement non lu est un regroupement non validé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Obtenir le tableau trimestriel trié et lire ses totaux',
    intro: "Une fois les regroupements appliqués, Claude exécute le calcul et vous rend le tableau demandé, plus la ligne des anomalies de clé et les compteurs de lecture. Vous lisez d'abord les compteurs, ensuite les chiffres.",
    steps: [
      {
        title: 'Lire les compteurs avant le tableau',
        actions: [
          "Repérez le nombre de lignes lues par fichier (4 812 / 5 236 / 4 126) et le nombre de lignes exclues (0 attendu).",
          "Vérifiez que la ligne des anomalies de clé liste bien les dix écritures regroupées et la ligne KIN-3 tranchée.",
        ],
      },
      {
        title: 'Lire le tableau et copier les chiffres dans le journal',
        actions: [
          "Vérifiez que le tableau est trié par quantité totale décroissante et que la colonne de total est cohérente (somme des trois mois).",
          "Vérifiez que la dernière ligne (total) vaut la somme des sites pour chaque mois.",
          "Copiez le tableau dans une feuille « Synthèse brute » du classeur de travail et ajoutez l'entrée au journal : ce tableau n'est pas encore diffusable avant la procédure 3.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Juillet', 'Août', 'Septembre', 'Total T3', 'Part du total'],
      rows: [
        ['Goma', '18 400', '19 250', '17 900', '55 550', '52,5 %'],
        ['Kinshasa', '7 300', '11 800', '7 500', '26 600', '25,1 %'],
        ['Bukavu', '9 600', '9 900', '4 200', '23 700', '22,4 %'],
        ['Total', '35 300', '40 950', '29 600', '105 850', '100 %'],
      ],
    },
    example: {
      title: 'Compteurs et anomalies de clé annoncés par Claude',
      lines: [
        "Lignes lues : 4 812 + 5 236 + 4 126 = 14 174. Lignes exclues : 0. Lignes à quantité 0 (statut Annulé) : 251, conservées.",
        "Anomalies de clé : 10 écritures regroupées en 3 sites ; KIN-3 (38 lignes, 410 unités) rattachée à Kinshasa sur validation du 08/10/2026.",
      ],
    },
    result: "Un tableau trimestriel par site, trié, dont le total général est 105 850 unités, avec les compteurs de lecture. Il reste à le vérifier : une sortie de code, même propre, n'est pas encore un chiffre fiable.",
    pitfall: "Diffuser ce tableau à Josué « pour avis » avant vérification : un chiffre envoyé est un chiffre cité. Gardez-le en brouillon tant que la procédure 3 n'est pas terminée.",
  },

  // ───────────── Procédure 3 — Lire et vérifier le résultat ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Faire expliquer le calcul en langage clair (prompt 2)',
    intro: "Vous n'avez pas besoin de savoir lire le code : vous avez besoin de savoir ce qu'il a fait. L'explication en cinq phrases est votre première pièce de contrôle ; si elle est floue ou technique, le calcul ne vous est pas rendu compréhensible.",
    steps: [
      {
        title: 'Envoyer le prompt d\'explication',
        actions: [
          "Dans la même conversation, collez le prompt ci-dessous (CLARTE).",
          "Lisez la réponse phrase par phrase avec la liste de contrôle de l'étape suivante.",
        ],
      },
      {
        title: 'Contrôler que l\'explication couvre les cinq points',
        actions: [
          "Comment les trois fichiers ont été combinés (empilés, pas fusionnés ligne à ligne).",
          "Comment les écritures du site ont été regroupées, avec les valeurs que vous avez validées.",
          "Quelles lignes ont été exclues et pourquoi (0 attendu), et si les lignes Annulé ont été comptées.",
          "Comment le mois a été déterminé et comment le total a été calculé.",
          "Aucun terme de programmation : si vous en lisez, redemandez sans jargon.",
        ],
      },
    ],
    example: {
      title: 'Prompt d\'explication et réponse attendue',
      lines: [
        "« Tu es l'analyste qui vient de produire le tableau croisé. Je ne sais pas lire le code Python. Explique-moi en cinq phrases maximum, en langage courant, ce que le calcul a fait concrètement : comment les trois fichiers ont été combinés, comment les anomalies de nom de site ont été traitées, et si des lignes ont été exclues (et pourquoi). N'utilise aucun terme de programmation. »",
        "Réponse : « J'ai mis les trois fichiers bout à bout, ce qui donne 14 174 lignes. J'ai remplacé les dix écritures du site par les trois noms que vous avez validés (Goma, Bukavu, Kinshasa). Aucune ligne n'a été retirée ; les 251 commandes annulées sont comptées avec une quantité de zéro. J'ai attribué chaque livraison à son mois d'après la date, au format jour/mois/année. Puis j'ai additionné la quantité livrée par site et par mois. »",
      ],
    },
    result: "Une explication de cinq phrases qui confirme : 14 174 lignes combinées, 10 écritures regroupées en 3 sites, 0 ligne exclue, dates lues en jour/mois/année, somme de la quantité.",
    pitfall: "Accepter une explication qui ne parle pas des exclusions : si la réponse ne dit pas explicitement « aucune ligne exclue », demandez-le avant d'aller plus loin.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Rapprocher les totaux globaux avec Excel avant tout échantillon',
    intro: "Le contrôle le plus rapide et le plus puissant : recalculer vous-même, dans Excel, le nombre de lignes et la somme de chaque fichier source, et les comparer à ce que Claude annonce. Un écart ici invalide tout le reste.",
    steps: [
      {
        title: 'Recalculer lignes et somme de chaque fichier',
        actions: [
          "Ouvrez export-juillet.csv (copie de travail). Dans une cellule libre, saisissez =NBVAL(A:A)-1 pour les lignes de données.",
          "Dans une autre cellule, saisissez =SOMME(D:D) pour la quantité livrée (colonne D). Si le résultat est 0, la colonne est du texte : voir le piège.",
          "Répétez pour export-aout.csv et export-septembre.csv.",
        ],
      },
      {
        title: 'Comparer au tableau de Claude',
        actions: [
          "Reportez les valeurs dans un tableau de rapprochement à côté de celles de Claude.",
          "Calculez l'écart pour chaque ligne et pour le total : tout écart non nul doit être expliqué.",
        ],
      },
    ],
    table: {
      columns: ['Fichier', 'Lignes (Excel)', 'Lignes (Claude)', 'Quantité (Excel)', 'Quantité (Claude)', 'Écart'],
      rows: [
        ['export-juillet.csv', '4 812', '4 812', '35 300', '35 300', '0'],
        ['export-aout.csv', '5 236', '5 236', '40 950', '40 950', '0'],
        ['export-septembre.csv', '4 126', '4 126', '29 600', '29 600', '0'],
        ['Total', '14 174', '14 174', '105 850', '105 850', '0'],
      ],
    },
    result: "Un tableau de rapprochement à écart nul : le calcul porte bien sur toutes les lignes et toutes les quantités des trois fichiers.",
    pitfall: "Une somme à 0 ou très inférieure à celle de Claude : la colonne quantité est lue comme du texte par Excel (nombres alignés à gauche, séparateur décimal incompatible). Convertissez avant de conclure à une erreur de Claude.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Demander un échantillon de 8 lignes tracées jusqu\'aux sources',
    intro: "Une vérification manuelle n'est possible que si chaque chiffre à contrôler est relié à ses lignes d'origine. Vous demandez donc à Claude un échantillon choisi pour être représentatif, avec le fichier, les valeurs brutes et le nombre de lignes sources de chacune.",
    steps: [
      {
        title: 'Formuler la demande d\'échantillon',
        actions: [
          "Demandez 8 cellules du résultat final : au moins une par site, une par mois, la plus petite, la plus grande et le cas KIN-3.",
          "Exigez pour chacune : fichier source, valeurs brutes de la clé, nombre de lignes d'origine, quantité annoncée.",
          "Choisissez vous-même 2 des 8 lignes (par exemple Bukavu en septembre et Kinshasa en août) pour que l'échantillon ne soit pas entièrement choisi par l'IA.",
        ],
      },
    ],
    example: {
      title: 'Prompt d\'échantillon (extrait du prompt 2) et réponse attendue',
      lines: [
        "« Donne-moi maintenant un échantillon de 8 lignes du résultat final, avec pour chacune le ou les fichiers sources, la valeur brute de la colonne site, le nombre de lignes d'origine et la quantité annoncée, pour que je puisse la vérifier moi-même. Inclus obligatoirement Bukavu septembre, Kinshasa août et la valeur KIN-3. »",
        "1. Goma juillet — export-juillet.csv — GOMA-01 — 2 436 lignes — 18 400",
        "2. Goma août — export-aout.csv — Goma01 — 2 301 lignes — 19 250",
        "3. Goma septembre — export-septembre.csv — GOMA 01 — 2 391 lignes — 17 900",
        "4. Bukavu juillet — BUKAVU-02 — 1 301 lignes — 9 600  |  5. Bukavu septembre — BUKAVU 02 — 556 lignes — 4 200",
        "6. Kinshasa août — Kin03 — 1 752 lignes — 11 800  |  7. Kinshasa septembre — KIN 03 (1 141 lignes) + KIN-3 (38 lignes) — 1 179 lignes — 7 500",
        "8. Total trimestre — 3 fichiers — 14 174 lignes — 105 850",
      ],
    },
    result: "Huit lignes à contrôler, chacune reliée à un fichier, à une écriture brute et à un nombre de lignes : vous pouvez les rejouer à la main.",
    tip: "Donnez la consigne « tracée jusqu'aux lignes sources » même si l'IA propose spontanément un échantillon : sans nombre de lignes d'origine, vous ne pouvez pas savoir si votre filtre retrouve le même ensemble.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Vérifier à la main chaque ligne de l\'échantillon dans les fichiers d\'origine',
    intro: "C'est cette vérification manuelle, et non l'exécution du code en elle-même, qui valide le résultat. Vous rejouez chaque ligne de l'échantillon dans Excel, avec un filtre et une somme : aucun nouveau calcul n'est nécessaire.",
    steps: [
      {
        title: 'Rejouer une ligne de l\'échantillon',
        actions: [
          "Ouvrez le fichier source indiqué (par exemple export-aout.csv, copie de travail).",
          "Données > Filtrer, puis dans la colonne « site de destination », cochez uniquement la valeur brute indiquée (Kin03).",
          "Lisez en bas à gauche le nombre d'enregistrements trouvés : « 1 752 enregistrements sur 5 236 trouvés » doit correspondre au nombre de lignes annoncé.",
          "Sous la colonne quantité, saisissez =SOUS.TOTAL(109;D2:D5237) : cette formule ne somme que les lignes visibles après filtre.",
        ],
      },
      {
        title: 'Consigner le résultat',
        actions: [
          "Reportez la quantité recalculée dans le tableau de vérification et calculez l'écart.",
          "Pour KIN-3, filtrez cette valeur dans export-septembre.csv : 38 lignes, somme 410.",
          "Une ligne en écart : notez-la, ne la corrigez pas à la main, et reposez la question à Claude avec la valeur que vous avez trouvée.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Cellule contrôlée', 'Annoncé', 'Recalculé dans Excel', 'Écart'],
      rows: [
        ['1', 'Goma juillet (GOMA-01)', '2 436 lignes · 18 400', '2 436 lignes · 18 400', '0'],
        ['2', 'Goma août (Goma01)', '2 301 lignes · 19 250', '2 301 lignes · 19 250', '0'],
        ['3', 'Goma septembre (GOMA 01)', '2 391 lignes · 17 900', '2 391 lignes · 17 900', '0'],
        ['4', 'Bukavu juillet (BUKAVU-02)', '1 301 lignes · 9 600', '1 301 lignes · 9 600', '0'],
        ['5', 'Bukavu septembre (BUKAVU 02)', '556 lignes · 4 200', '556 lignes · 4 200', '0'],
        ['6', 'Kinshasa août (Kin03)', '1 752 lignes · 11 800', '1 752 lignes · 11 800', '0'],
        ['7', 'Kinshasa septembre (KIN 03 + KIN-3)', '1 179 lignes · 7 500', '1 141 + 38 lignes · 7 090 + 410', '0'],
        ['8', 'Total trimestre', '14 174 lignes · 105 850', '14 174 lignes · 105 850', '0'],
      ],
    },
    result: "Huit lignes vérifiées, huit écarts nuls : le résultat est validé par une vérification humaine tracée, pas par la seule exécution du code.",
    tip: "Ajoutez un contrôle de votre choix : tirez une commande au hasard (par exemple CMD-26-08-01204), cherchez-la avec Ctrl+F dans export-aout.csv et vérifiez que son site et sa quantité sont bien comptés dans la ligne de résultat correspondante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Lire le code exécuté sans savoir coder : six repères',
    intro: "Claude peut montrer le code qu'il a exécuté. Vous ne le lisez pas ligne par ligne : vous cherchez six repères qui trahissent une lecture partielle ou une transformation silencieuse. Dans claude.ai, le code est accessible depuis le bloc d'analyse affiché avant la réponse (le libellé varie selon la version).",
    steps: [
      {
        title: 'Afficher le code et chercher les six repères',
        actions: [
          "Ouvrez le bloc d'analyse de la réponse et déroulez le code ; demandez « montre-moi le code exécuté » si vous ne le trouvez pas.",
          "Repère 1 — lecture complète : les trois fichiers sont lus sans limite (méfiez-vous de nrows, head ou sample).",
          "Repère 2 — clé : le dictionnaire de regroupement contient vos dix écritures, pas davantage.",
          "Repère 3 — filtres cachés : cherchez drop_duplicates, dropna, query, ou une condition sur le statut non annoncée.",
          "Repère 4 — dates : dayfirst=True (jour avant mois) est présent ; sans lui, 05/08 peut être lu comme le 8 mai.",
          "Repère 5 — somme : le regroupement additionne la quantité livrée (sum), il ne compte pas les lignes (count).",
          "Repère 6 — sortie : le résultat est affiché ou enregistré tel quel, sans arrondi ni tri qui modifierait les totaux.",
        ],
      },
    ],
    example: {
      title: 'Extrait typique du code exécuté (le vôtre différera)',
      lines: [
        "import pandas as pd",
        `fichiers = ["export-juillet.csv", "export-aout.csv", "export-septembre.csv"]`,
        `df = pd.concat([pd.read_csv(f, sep=";") for f in fichiers], ignore_index=True)   ← repère 1 : lecture complète`,
        `print(len(df))   → 14174`,
        `regroupements = {"GOMA-01": "Goma", "Goma01": "Goma", "GOMA 01": "Goma", "BUKAVU-02": "Bukavu", ..., "KIN-3": "Kinshasa"}   ← repère 2`,
        `df["site"] = df["site de destination"].replace(regroupements)`,
        `df["mois"] = pd.to_datetime(df["date de livraison"], dayfirst=True).dt.month   ← repère 4`,
        `resultat = df.groupby(["site", "mois"])["quantité livrée"].sum()   ← repère 5`,
      ],
    },
    result: "Six repères contrôlés et notés : aucune limite de lecture, regroupements conformes à votre liste validée, aucun filtre caché, dates lues jour/mois, somme et non comptage.",
    pitfall: "Se rassurer parce que le code « a l'air propre » : un code lisible peut quand même appeler drop_duplicates et supprimer sans le dire des livraisons identiques mais réelles. Si vous en voyez un non annoncé, demandez à Claude de justifier chaque ligne exclue.",
  },

  // ───────────── Procédure 4 — Anomalies de volume et calculs au-delà d'Excel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Demander la détection des anomalies de volume (méthode STAR)',
    intro: "Le tableau est vérifié : vous pouvez maintenant demander ce que Josué attend, « les volumes qui sortent de l'ordinaire ». La demande enchaîne plusieurs calculs dans un ordre précis avec un seuil chiffré : c'est un cas pour la méthode STAR.",
    steps: [
      {
        title: 'Rédiger le prompt',
        actions: [
          "Situation : rappelez que le tableau est déjà croisé et vérifié, pour ne pas redemander un calcul déjà fait.",
          "Tâche : signaler les sites dont le volume d'un mois s'écarte fortement des deux autres.",
          "Action : fixez la formule (écart à la moyenne des deux autres mois) et le seuil (40 %), et exigez les neuf écarts, pas seulement ceux signalés.",
          "Résultat : imposez le tableau de sortie et l'exécution réelle.",
        ],
      },
    ],
    example: {
      title: 'Prompt d\'anomalies — fil rouge (à copier)',
      lines: [
        "« Situation : j'ai croisé et vérifié un tableau trimestriel de livraisons par site (Goma, Bukavu, Kinshasa) à partir de trois exports mensuels (juillet, août, septembre 2026). Ce même rapport sera refait chaque trimestre.",
        "Tâche : signaler les sites dont le volume d'un mois s'écarte fortement des deux autres mois du trimestre.",
        "Action : (1) calcule, pour chaque site et chaque mois, l'écart en pourcentage entre le volume du mois et la moyenne des deux autres mois ; (2) signale tout écart supérieur à 40 % en valeur absolue, avec le chiffre exact ; (3) présente les neuf écarts, pas seulement ceux qui dépassent le seuil.",
        "Résultat attendu : un tableau site × mois avec le volume, la moyenne des deux autres mois, l'écart en pourcentage et une colonne « Signalé » (Oui / Non). Exécute réellement le calcul. »",
      ],
    },
    result: "Un prompt qui fixe la formule, le seuil et le format : le résultat est reproductible, et le même texte pourra être repris dans le pipeline.",
    pitfall: "Écrire « signale les sites qui semblent atypiques » : l'IA répondra « Kinshasa semble élevé » sans chiffre, sans seuil, sans possibilité de contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Lire le tableau des écarts et éviter l\'effet miroir',
    intro: "Trois cellules sont signalées. Avant de les croire, vous contrôlez la formule dans Excel sur une cellule et vous cherchez les écarts qui n'en sont pas : quand un mois est très bas, les deux autres mois paraissent mécaniquement très hauts.",
    steps: [
      {
        title: 'Contrôler la formule sur une cellule',
        actions: [
          "Dans une cellule libre d'Excel, saisissez =(9900-MOYENNE(9600;4200))/MOYENNE(9600;4200) pour Bukavu en août, puis mettez la cellule au format Pourcentage.",
          "Comparez au résultat de Claude : 43,5 %. Faites de même pour Kinshasa en août : =(11800-MOYENNE(7300;7500))/MOYENNE(7300;7500) → 59,5 %.",
        ],
      },
      {
        title: 'Chercher l\'effet miroir',
        actions: [
          "Repérez les mois signalés d'un même site : si l'un est très bas, l'autre peut être signalé uniquement parce que sa référence est tirée vers le bas.",
          "Comparez directement les deux mois « normaux » entre eux avant de conclure.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Mois', 'Volume', 'Moyenne des deux autres mois', 'Écart', 'Signalé'],
      rows: [
        ['Goma', 'Juillet', '18 400', '18 575', '− 0,9 %', 'Non'],
        ['Goma', 'Août', '19 250', '18 150', '+ 6,1 %', 'Non'],
        ['Goma', 'Septembre', '17 900', '18 825', '− 4,9 %', 'Non'],
        ['Bukavu', 'Juillet', '9 600', '7 050', '+ 36,2 %', 'Non'],
        ['Bukavu', 'Août', '9 900', '6 900', '+ 43,5 %', 'Oui'],
        ['Bukavu', 'Septembre', '4 200', '9 750', '− 56,9 %', 'Oui'],
        ['Kinshasa', 'Juillet', '7 300', '9 650', '− 24,4 %', 'Non'],
        ['Kinshasa', 'Août', '11 800', '7 400', '+ 59,5 %', 'Oui'],
        ['Kinshasa', 'Septembre', '7 500', '9 550', '− 21,5 %', 'Non'],
      ],
    },
    result: "Trois cellules signalées : Kinshasa août (+ 59,5 %), Bukavu septembre (− 56,9 %) et Bukavu août (+ 43,5 %). Cette dernière est un effet miroir : Bukavu passe de 9 600 en juillet à 9 900 en août, soit + 3,1 %, et ne devient « haut » que parce que septembre s'effondre.",
    tip: "Une règle « un mois contre la moyenne des deux autres » signale souvent un mois normal en plus du mois atypique. Lisez toujours les neuf écarts et retenez comme atypique le mois qui s'écarte le plus, pas la liste brute.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Qualifier chaque anomalie : problème de données ou réalité du terrain ?',
    intro: "Un chiffre atypique a deux origines possibles : le fichier est faux (export incomplet, saisie erronée) ou la réalité est atypique (campagne, suspension). Seul le producteur du fichier peut trancher. Vous descendez donc d'un niveau dans les données, puis vous interrogez la personne qui connaît le terrain.",
    steps: [
      {
        title: 'Faire creuser chaque anomalie par Claude',
        actions: [
          "Kinshasa août : « Liste les 15 plus grosses commandes de Kinshasa en août avec identifiant, date et quantité, et indique si elles se concentrent sur quelques jours. »",
          "Bukavu septembre : « Donne, par semaine ISO de septembre, le nombre de lignes et la quantité de Bukavu, ainsi que la date de la dernière livraison enregistrée. »",
          "Pour chaque réponse, vérifiez par un filtre dans Excel qu'elle correspond aux lignes réelles du fichier.",
        ],
      },
      {
        title: 'Interroger le producteur du fichier',
        actions: [
          "Envoyez à Josué Kambale le constat chiffré, sans l'hypothèse : « Bukavu : aucune ligne du 13 au 30/09. Pouvez-vous confirmer ? »",
          "Notez sa réponse mot pour mot, avec la date, dans le tableau des anomalies.",
        ],
      },
    ],
    table: {
      columns: ['Anomalie', 'Constat chiffré', 'Confirmation du coordinateur', 'Statut'],
      rows: [
        ['Kinshasa août, + 59,5 %', '11 commandes de 270 à 330 unités (CMD-26-08-01198 à 01208), du 18 au 21/08, soit 3 300 unités ; sans elles, 8 500 (+ 14,9 %)', 'J. Kambale, 09/10 : « campagne de distribution du 18 au 21 août »', 'Réel, ponctuel'],
        ['Bukavu septembre, − 56,9 %', 'Dernière livraison le 12/09 ; aucune ligne du 13 au 30/09', 'J. Kambale, 09/10 : « livraisons suspendues du 13 au 30/09, route coupée »', 'Réel, à suivre'],
        ['Bukavu août, + 43,5 %', 'Juillet 9 600, août 9 900 : + 3,1 %', 'Sans objet : effet miroir calculé', 'Non atypique en soi'],
      ],
    },
    result: "Trois anomalies, chacune avec un constat chiffré tiré des données, une explication confirmée par écrit et un statut : aucune explication n'est une supposition.",
    pitfall: "Écrire dans le rapport « Bukavu a baissé à cause de la route » sans confirmation : l'hypothèse devient un fait devant le comité. Si Josué avait répondu « l'export a été tiré le 14/09 », le chiffre serait faux et il faudrait redemander l'export avant tout rapport.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Aller au-delà d\'Excel : moyenne mobile et coefficient de variation par semaine',
    intro: "Le comité demande aussi quels sites sont réguliers et lesquels sont irréguliers. Mesurer la régularité demande un tableau hebdomadaire puis des calculs glissants et des écarts-types : faisable en Excel avec un tableau croisé par semaine et plusieurs formules, mais long et fragile sur 14 174 lignes. Claude le fait en une demande, et le résultat reste vérifiable sur un site.",
    steps: [
      {
        title: 'Demander les indicateurs',
        actions: [
          "Demandez, pour chaque site, la quantité hebdomadaire sur les semaines ISO 27 à 40 (la première et la dernière sont incomplètes : faites-le signaler), une moyenne mobile sur 4 semaines et le coefficient de variation (écart-type ÷ moyenne).",
          "Exigez que Claude précise s'il utilise l'écart-type de la population ou de l'échantillon.",
        ],
      },
      {
        title: 'Contrôler un site dans Excel',
        actions: [
          "Dans la copie de travail de Goma, ajoutez une colonne avec =NO.SEMAINE.ISO(A2) (A = date de livraison), puis un tableau croisé dynamique : lignes = semaine, valeurs = somme de la quantité, filtre = site Goma.",
          "Calculez =ECARTYPE.PEARSON(plage)/MOYENNE(plage) : Excel donne l'écart-type de la population, comparable au résultat de Claude.",
        ],
      },
    ],
    example: {
      title: 'Prompt et lecture du résultat (chiffres d\'exemple)',
      lines: [
        "« Pour chaque site, par semaine ISO (semaines 27 à 40, signale les semaines incomplètes), calcule la quantité livrée, la moyenne mobile sur 4 semaines et le coefficient de variation (écart-type de la population ÷ moyenne). Exécute réellement le calcul. »",
        "Goma : coefficient de variation ≈ 8 % → flux régulier, moyenne mobile quasi plate.",
        "Kinshasa : ≈ 45 % → irrégulier ; la semaine 34 (campagne) fait monter la moyenne mobile d'environ 825 unités par semaine (3 300 ÷ 4) pendant quatre semaines, puis elle retombe.",
        "Bukavu : ≈ 50 % → irrégulier ; la quantité hebdomadaire tombe à 0 à partir de la semaine 38 (14/09).",
      ],
    },
    result: "Un indicateur de régularité par site, une lecture de chaque courbe, et un contrôle indépendant fait sur Goma avec Excel (écart de quelques dixièmes de point au plus si les mêmes semaines sont retenues).",
    pitfall: "Interpréter un coefficient de variation sans le contexte : celui de Kinshasa est dû à une seule semaine de campagne, pas à une activité désordonnée. Un indicateur statistique ne remplace jamais la qualification de l'étape précédente.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Produire le fichier de synthèse et rédiger la synthèse du comité',
    intro: "Vous avez maintenant tous les éléments vérifiés. Vous demandez à Claude le fichier de sortie, vous y ajoutez les explications confirmées par le coordinateur (pas celles de l'IA), et vous rédigez les lignes que le comité lira.",
    steps: [
      {
        title: 'Faire créer le fichier Excel',
        actions: [
          "Demandez : « Crée un fichier Excel téléchargeable avec trois feuilles : Synthèse T3 (site × mois, total, part), Anomalies (volume, moyenne des deux autres mois, écart, signalé), Regroupements (valeur brute, site, fichier, nombre de lignes). »",
          "Téléchargez-le, enregistrez-le dans 03_Livrables sous le nom 2026-10-09_synthese_T3_2026_livraisons.xlsx et ouvrez-le.",
          "Contrôlez : somme de la feuille Synthèse = 105 850 ; 10 lignes dans Regroupements ; 9 lignes dans Anomalies.",
        ],
      },
      {
        title: 'Compléter et rédiger',
        actions: [
          "Dans la feuille Anomalies, ajoutez vous-même une colonne « Explication confirmée » avec les réponses de Josué Kambale, datées.",
          "Rédigez une synthèse de 5 lignes maximum : chiffres, site dominant, anomalies avec leur explication, limite connue.",
          "Envoyez le fichier à Josué pour validation ; ajoutez l'entrée au journal.",
        ],
      },
    ],
    example: {
      title: 'Synthèse de 5 lignes pour le comité du 16/10/2026',
      lines: [
        "1. Livraisons du T3 2026 : 105 850 unités (juillet 35 300, août 40 950, septembre 29 600), sur 14 174 lignes de livraison, aucune ligne exclue.",
        "2. Goma concentre 52,5 % des livraisons (55 550), devant Kinshasa (25,1 %) et Bukavu (22,4 %).",
        "3. Kinshasa août (+ 59,5 % vs la moyenne des deux autres mois) : campagne de distribution du 18 au 21 août, 3 300 unités ; hors campagne, + 14,9 %.",
        "4. Bukavu septembre (− 56,9 %) : livraisons suspendues du 13 au 30/09 (route coupée, confirmé par le coordinateur logistique) ; à suivre au T4.",
        "5. Contrôle : totaux et 8 lignes d'échantillon rapprochés à la main des trois fichiers sources, écart nul.",
      ],
    },
    result: "Un fichier de synthèse de trois feuilles contrôlé, validé par le coordinateur, et une synthèse de 5 lignes qui n'affirme que ce qui a été vérifié.",
    tip: "Gardez la mention « confirmé par le coordinateur logistique » dans le texte : un comité accorde plus de crédit à une explication attribuée à une personne identifiée qu'à une explication de l'IA.",
  },

  // ───────────── Procédure 5 — Cadrer le pipeline avec le gabarit de brief ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Faire lister les informations à préciser avant de construire (méthode STAR)',
    intro: "Le même rapport sera refait chaque trimestre : le besoin est stabilisé et récurrent, c'est le moment de passer à Claude Code. Avant de lui demander un script, vous cadrez le besoin dans le gabarit de brief. Un prompt STAR vous donne la liste de ce qu'il faut préciser.",
    steps: [
      {
        title: 'Envoyer le prompt de cadrage',
        actions: [
          "Dans la même conversation (ou une nouvelle, avec les résultats rappelés), collez le prompt ci-dessous.",
          "Gardez la liste de points reçue : elle suit l'ordre des sections du gabarit.",
        ],
      },
      {
        title: 'Ouvrir le gabarit',
        actions: [
          "Ouvrez gabarit-brief-pipeline-donnees-automatise.docx : cinq sections numérotées, puis une ligne « Rédigé par / Date ».",
          "Enregistrez-le sous 03_Livrables\\brief_pipeline_livraisons_T3.docx avant de le remplir.",
        ],
      },
    ],
    example: {
      title: 'Prompt de cadrage — fil rouge (à copier)',
      lines: [
        "« Situation : j'ai croisé et vérifié un tableau trimestriel de livraisons par site à partir de trois exports mensuels ; ce même rapport devra être refait chaque trimestre à partir de nouveaux exports au même format. Tâche : me lister les informations dont j'aurai besoin pour faire construire un pipeline automatisé de ce rapport. Action : liste-moi, sous forme de points, les éléments à préciser : emplacement et format attendu des futurs exports, logique de regroupement des variantes de site à mémoriser, format et destination du livrable, fréquence de réexécution, et points de vérification à prévoir avant diffusion. Résultat attendu : une liste prête à reporter section par section dans un gabarit de brief de pipeline. »",
        "Réponse (extrait) : 1. Où seront déposés les exports et sous quel format ? 2. Quelle colonne sert de clé et quelles variantes connaît-on ? 3. Quel fichier de sortie, pour qui ? 4. Quelle vérification humaine avant diffusion et quel écart déclenche une alerte ? 5. Quelle fréquence et quel déclencheur ?",
      ],
    },
    result: "Une liste de cinq blocs de questions qui correspondent aux cinq sections du gabarit, et le brief enregistré dans 03_Livrables.",
    tip: "Remplissez le brief avant de parler à Claude Code : c'est lui qui servira de cahier des charges. Un brief rempli en cinq minutes après coup ne protège de rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Section 1 — Décrire les fichiers source',
    intro: "La section 1 comporte un tableau de deux cases (emplacement ; format et fréquence de dépôt) suivi d'un champ « Colonnes attendues dans chaque fichier ». C'est la première cause de panne d'un pipeline : un fichier qui n'arrive plus tel que prévu.",
    steps: [
      {
        title: 'Remplir le tableau',
        actions: [
          "Case « Emplacement des fichiers (dossier, chemin) » : écrivez le dossier exact, avec un sous-dossier par trimestre.",
          "Case « Format (CSV, Excel, autre) et fréquence de dépôt » : précisez le type de fichier, le séparateur, l'encodage, le nombre de fichiers et l'échéance de dépôt.",
        ],
      },
      {
        title: 'Lister les colonnes',
        actions: [
          "Sous « Colonnes attendues dans chaque fichier (liste exacte, dans l'ordre) », listez les cinq colonnes avec leur format.",
          "Recopiez les noms exactement comme dans les fichiers : un nom écrit autrement sera pris par le script pour une colonne absente.",
        ],
      },
    ],
    example: {
      title: 'Section 1 complétée (fil rouge)',
      lines: [
        "Emplacement : C:\\HGL_Pipelines\\livraisons_trimestre\\entrees\\ — un sous-dossier par trimestre (2026-T3, 2026-T4…).",
        "Format et fréquence de dépôt : CSV, séparateur point-virgule, UTF-8 ; trois fichiers par trimestre (un par mois), déposés par J. Kambale au plus tard le 3e jour ouvré suivant la clôture du trimestre.",
        "Colonnes attendues, dans l'ordre : 1. date de livraison (JJ/MM/AAAA) · 2. site de destination · 3. identifiant de commande · 4. quantité livrée (nombre) · 5. statut (Livré, Partiel ou Annulé).",
      ],
    },
    result: "Section 1 sans case vide : un script ou un collègue peut retrouver où déposer les fichiers, sous quel format, à quel rythme, et ce que chaque colonne doit contenir.",
    pitfall: "Écrire « les exports mensuels de logistique » sans chemin ni colonnes : à la première absence, personne ne saura où chercher ni quoi vérifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Section 2 — Fixer la clé de jointure et les variantes à regrouper',
    intro: "La section 2 comporte deux champs : la clé utilisée et les variantes connues à regrouper. C'est ici que la validation humaine de la procédure 2 devient une règle écrite que le pipeline appliquera, et qui lui interdit de deviner.",
    steps: [
      {
        title: 'Remplir les deux champs',
        actions: [
          "Champ « Clé de jointure utilisée pour croiser les fichiers » : indiquez la colonne qui sert de clé.",
          "Champ « Variantes connues de cette clé à regrouper » : recopiez la liste validée à la procédure 2, site par site, avec la source de chaque validation.",
          "Ajoutez la règle de comportement : toute valeur inconnue arrête le pipeline et s'affiche pour validation humaine.",
        ],
      },
    ],
    example: {
      title: 'Section 2 complétée (fil rouge)',
      lines: [
        "Clé de jointure : colonne « site de destination ».",
        "Variantes connues : Goma ← GOMA-01, Goma01, GOMA 01 · Bukavu ← BUKAVU-02, Bukavu02, BUKAVU 02 · Kinshasa ← KIN-03, Kin03, KIN 03, KIN-3 (faute de saisie confirmée par J. Kambale le 08/10/2026).",
        "Règle : toute autre valeur arrête le pipeline et est listée avec son nombre de lignes ; elle n'est ajoutée à la table de correspondance qu'après validation écrite.",
      ],
    },
    result: "Les dix écritures connues sont écrites noir sur blanc avec leur origine, et le comportement face à l'inconnu est défini : le pipeline s'arrête au lieu d'inventer.",
    tip: "Gardez cette liste synchronisée avec le fichier de correspondance que Claude Code créera (procédure 6) : le brief est la référence, le fichier est son application.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Section 3 — Définir le format et la destination du livrable',
    intro: "La section 3 comporte un tableau de deux cases : format de sortie, destination. Un pipeline qui produit un fichier que personne ne retrouve ou n'ouvre pas n'a servi à rien.",
    steps: [
      {
        title: 'Remplir le tableau',
        actions: [
          "Case « Format de sortie attendu » : écrivez le type de fichier, les feuilles, le contenu de chacune et le modèle de nom, avec le trimestre dans le nom.",
          "Case « Destination » : écrivez le dossier de dépôt, la personne destinataire et l'outil de diffusion.",
        ],
      },
    ],
    example: {
      title: 'Section 3 complétée (fil rouge)',
      lines: [
        "Format de sortie : Excel (.xlsx), trois feuilles — Synthèse (site × mois, total, part), Anomalies (volume, moyenne des deux autres mois, écart en %, signalé), Regroupements (valeur brute, site, lignes). Nom : AAAA-T#_synthese_livraisons.xlsx (ex. 2026-T3_synthese_livraisons.xlsx).",
        "Destination : dossier sorties\\ du pipeline, copie dans 03_Livrables du dossier d'analyse ; remise à J. Kambale puis au comité par A. Kahindo, uniquement après les vérifications de la section 4.",
      ],
    },
    result: "Un livrable décrit à l'identique de ce que vous avez produit à la main (procédure 4) : le pipeline doit pouvoir être comparé feuille à feuille au résultat déjà validé.",
    pitfall: "Écrire « un tableau Excel » : le script produira sa version, différente de celle que le coordinateur attend, et vous perdrez l'intérêt de l'automatisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Section 4 — Poser les points de vérification avant diffusion',
    intro: "La section 4 comporte deux champs : l'échantillon à vérifier manuellement, et l'écart qui doit déclencher une alerte. C'est la section qui transforme le principe non négociable du module en règle appliquée à chaque exécution.",
    steps: [
      {
        title: 'Remplir les deux champs',
        actions: [
          "Champ « Échantillon à vérifier manuellement avant chaque diffusion (nombre de lignes, quelles colonnes) » : indiquez la taille, la composition et la méthode.",
          "Champ « Écart ou anomalie qui doit déclencher une alerte avant diffusion » : listez les cas chiffrés qui bloquent la diffusion.",
        ],
      },
    ],
    example: {
      title: 'Section 4 complétée (fil rouge)',
      lines: [
        "Échantillon : 8 cellules du tableau Synthèse (au moins une par site, une par mois, la plus petite, la plus grande), dont 2 choisies par une deuxième personne ; vérifiées à la main contre les CSV (filtre + SOUS.TOTAL). Contrôle global : nombre de lignes et somme de chaque fichier comparés à ceux affichés par le script.",
        "Alertes avant diffusion : un mois s'écarte de plus de 40 % de la moyenne des deux autres pour un site ; valeur de site inconnue ; colonne manquante ou renommée ; nombre de fichiers différent de 3 ; lignes lues différentes du nombre de lignes des fichiers.",
      ],
    },
    result: "Cinq conditions d'alerte chiffrées et un échantillon défini : un collègue peut faire la vérification sans vous.",
    tip: "Faites choisir deux lignes de l'échantillon par quelqu'un d'autre que vous : un contrôle choisi uniquement par celui qui a produit le résultat est un contrôle complaisant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Section 5 — Fréquence, déclencheur, prochaine vérification, signature',
    intro: "Dernière section : un tableau de deux cases (fréquence, déclencheur), un champ « Prochaine date de vérification prévue », puis la ligne « Rédigé par (nom, fonction) » et « Date ». Cette date de vérification se reporte ensuite dans le suivi des pipelines.",
    steps: [
      {
        title: 'Remplir la section',
        actions: [
          "Case « Fréquence de réexécution » : écrivez la fréquence (ici trimestrielle).",
          "Case « Déclencheur » : précisez ce qui lance le traitement ; aucun déclenchement automatique avant plusieurs cycles supervisés.",
          "Champ « Prochaine date de vérification prévue » : inscrivez une date à moins de 30 jours.",
        ],
      },
      {
        title: 'Signer le brief',
        actions: [
          "Dans le tableau final, écrivez votre nom et votre fonction, et la date.",
          "Faites relire le brief par Josué Kambale, qui connaît les fichiers, avant de le donner à Claude Code.",
        ],
      },
    ],
    example: {
      title: 'Section 5 et signature complétées (fil rouge)',
      lines: [
        "Fréquence : trimestrielle (à la clôture de chaque trimestre).",
        "Déclencheur : dépôt des trois exports du trimestre dans entrees\\ ; lancement manuel par A. Kahindo, mode test d'abord.",
        "Prochaine vérification : jeudi 05/11/2026, puis au moins tous les 30 jours.",
        "Rédigé par : Amani Kahindo, chargée administrative et logistique — Date : 09/10/2026.",
      ],
    },
    result: "Un brief de deux pages, complet section par section, relu par un utilisateur du fichier : c'est le cahier des charges du pipeline et sa référence pour toute modification future.",
    pitfall: "Choisir un déclencheur automatique dès le premier cycle : si le format change, le pipeline produira un fichier faux sans que personne ne regarde. Commencez par un lancement manuel.",
  },

  // ───────────── Procédure 6 — Faire construire le pipeline avec Claude Code ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 7',
    title: 'Préparer le poste, le dossier du pipeline et les règles du projet',
    intro: "Claude Code est un agent qui agit sur vos fichiers : il voit ce qui se trouve sous le dossier depuis lequel vous le lancez, et uniquement cela. Vous lui préparez donc un dossier dédié, avec des copies des fichiers, et des règles écrites qu'il relira à chaque session. Entrées : le brief complété, les trois copies de travail.",
    steps: [
      {
        title: 'Créer le dossier du pipeline',
        actions: [
          "Vérifiez que Claude Code est installé et relié à votre compte professionnel (installation selon la documentation officielle d'Anthropic, comme au Module 10). Dans un terminal, tapez claude --version : un numéro de version doit s'afficher.",
          "Créez le dossier C:\\HGL_Pipelines\\livraisons_trimestre avec les sous-dossiers entrees\\2026-T3, sorties et journal.",
          "Copiez les trois copies de travail dans entrees\\2026-T3 : jamais les sources archivées de 01_Source.",
        ],
      },
      {
        title: 'Poser les règles et lancer',
        actions: [
          "Dans le dossier livraisons_trimestre, créez un fichier texte nommé CLAUDE.md contenant les cinq règles (voir exemple) : Claude Code le relit à chaque lancement.",
          "Ouvrez un terminal (PowerShell ou celui de VS Code) et tapez cd C:\\HGL_Pipelines\\livraisons_trimestre, puis claude.",
          "Si Claude Code demande s'il peut faire confiance à ce dossier, acceptez : l'autorisation vaut pour ce dossier seulement.",
        ],
      },
    ],
    example: {
      title: 'Contenu du fichier CLAUDE.md (fil rouge)',
      lines: [
        "# Règles du pipeline livraisons — Horizon Grands Lacs",
        "1. Ne jamais modifier, renommer ni supprimer un fichier du dossier entrees.",
        "2. Ne rien écrire en dehors du dossier livraisons_trimestre.",
        "3. Prévoir un mode test (--test) qui n'écrit aucun fichier.",
        "4. Si une valeur de site n'est pas dans correspondance_sites.csv : s'arrêter et la lister, ne jamais la deviner.",
        "5. Expliquer en langage courant avant toute exécution sur de vraies données.",
      ],
    },
    result: "Un dossier dédié contenant des copies des exports et des règles écrites, et un Claude Code lancé depuis ce dossier uniquement.",
    pitfall: "Lancer Claude Code depuis le Bureau ou depuis un dossier parent « pour aller plus vite » : il pourrait lire et modifier tout ce qui s'y trouve, y compris des fichiers sans rapport avec la tâche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 7',
    title: 'Rédiger le prompt de construction du pipeline (méthode STAR)',
    intro: "Le prompt de construction reprend le brief : la situation actuelle (tâche répétitive), l'objectif réutilisable, les actions numérotées dans l'ordre et le critère de réussite. Il exige un mode test et une explication avant toute exécution réelle, conditions non négociables pour un non-développeur.",
    steps: [
      {
        title: 'Assembler le prompt',
        actions: [
          "S : décrivez ce que vous faites aujourd'hui, à quel rythme, et pour qui.",
          "T : fixez l'objectif d'un pipeline réutilisable, pas d'un script à usage unique.",
          "A : numérotez les actions dans l'ordre vérifiable (lecture, uniformisation, calculs, sortie, affichage des compteurs).",
          "R : exigez un script documenté, un mode test et une explication en langage courant avant toute exécution.",
          "Collez à la suite la liste des regroupements validés et le texte des sections 1 à 5 du brief.",
        ],
      },
    ],
    example: {
      title: 'Prompt de construction — fil rouge (à copier)',
      lines: [
        "« Situation : chaque trimestre, je reçois trois exports CSV de livraisons logistiques (un par mois, mêmes colonnes que le trimestre précédent : date de livraison, site de destination, identifiant de commande, quantité livrée, statut), déposés dans entrees\\2026-T3. Je refais aujourd'hui à la main, dans Excel, un tableau de synthèse des quantités livrées par site que je transmets au coordinateur logistique.",
        "Tâche : je veux un pipeline que je peux réexécuter chaque trimestre sur les nouveaux exports, sans repartir de zéro.",
        "Action : construis un script qui (1) lit les trois exports du dossier indiqué et vérifie que les colonnes sont exactement celles attendues ; (2) uniformise la colonne « site de destination » à l'aide d'un fichier correspondance_sites.csv que tu crées à partir de ma liste, et s'arrête en listant toute valeur inconnue au lieu de la deviner ; (3) calcule le total de quantités livrées par site et par mois, la part de chaque site, la variation par rapport au mois précédent et l'écart de chaque mois à la moyenne des deux autres, avec signalement au-delà de 40 % ; (4) enregistre le résultat dans un fichier Excel de trois feuilles (Synthèse, Anomalies, Regroupements) dont le nom inclut le trimestre ; (5) affiche à chaque exécution le nombre de lignes lues par fichier et le total général.",
        "Ajoute un mode test qui affiche ce que le script ferait sans écrire le fichier final.",
        "Résultat attendu : un script documenté que je peux relancer moi-même chaque trimestre en changeant uniquement le nom du trimestre, avec une explication en langage courant de son fonctionnement avant toute exécution sur mes vraies données. Respecte les règles du fichier CLAUDE.md. »",
        "Liste des regroupements : Goma ← GOMA-01, Goma01, GOMA 01 · Bukavu ← BUKAVU-02, Bukavu02, BUKAVU 02 · Kinshasa ← KIN-03, Kin03, KIN 03, KIN-3.",
      ],
    },
    result: "Un prompt STAR complet : chaque lettre est identifiable, les cinq actions sont dans l'ordre du brief, la liste de regroupements est jointe, et le mode test est exigé.",
    tip: "Le prompt ne dit pas « écris du Python » : il décrit le résultat, pas la technique. C'est Claude Code qui choisit le langage ; vous gardez le contrôle sur ce que le pipeline fait et ne fait pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 7',
    title: 'Lire le plan et autoriser action par action',
    intro: "Claude Code commence par proposer ce qu'il va faire, puis demande votre autorisation avant chaque action sensible (création de fichier, exécution de commande). Vous lisez chaque demande : c'est votre second garde-fou après le mode test.",
    steps: [
      {
        title: 'Obtenir et lire l\'explication',
        actions: [
          "Demandez : « Avant d'écrire quoi que ce soit, explique en langage courant ce que tu vas créer, dans quels fichiers, et ce que le script fera et ne fera pas. »",
          "Vérifiez la liste des fichiers créés : le script, correspondance_sites.csv, un mode d'emploi.",
          "Vérifiez que le script n'écrit que dans sorties\\, ne supprime rien et ne se connecte à aucun service externe.",
        ],
      },
      {
        title: 'Autoriser avec discernement',
        actions: [
          "À chaque demande d'autorisation, lisez la commande ou le fichier concerné avant de répondre.",
          "Préférez l'autorisation ponctuelle à l'autorisation permanente tant que vous n'avez pas validé le pipeline.",
          "Refusez toute action qui sort du dossier livraisons_trimestre ou qui supprime un fichier, et dites-le à Claude Code en une phrase.",
          "Si l'installation d'une bibliothèque de calcul (pandas, openpyxl) est demandée, vérifiez que votre organisation l'autorise.",
        ],
      },
    ],
    example: {
      title: 'Explication de Claude Code (extrait) et demandes d\'autorisation',
      lines: [
        "« Je vais créer trois fichiers : pipeline_livraisons.py (le script), correspondance_sites.csv (dix lignes : écriture brute → site) et LISEZ-MOI.txt. Le script lira les CSV du dossier entrees\\2026-T3, vérifiera les colonnes, remplacera les écritures du site selon la table, calculera totaux, parts et écarts, puis écrira un fichier Excel dans sorties\\. Il ne modifiera aucun fichier d'entrée. En mode test, il affichera le résultat sans rien écrire. »",
        "Demande 1 : créer correspondance_sites.csv dans le dossier courant → autorisation ponctuelle.",
        "Demande 2 : créer pipeline_livraisons.py dans le dossier courant → autorisation ponctuelle après lecture.",
        "Demande 3 : installer la bibliothèque openpyxl → autorisation après accord du support informatique.",
      ],
    },
    result: "Une explication lue et conforme au brief, trois fichiers créés dans le seul dossier prévu, aucune action hors périmètre autorisée.",
    pitfall: "Cliquer sur « toujours autoriser » pour ne plus être dérangé : vous perdez le seul moment où vous pouvez voir ce que l'agent s'apprête à faire avant qu'il le fasse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 7',
    title: 'Lancer le mode test et lire sa sortie',
    intro: "Le mode test affiche ce que le script ferait sans écrire le fichier final : c'est lui que vous lancez en premier, toujours. Vous comparez sa sortie aux chiffres que vous avez déjà vérifiés à la main : le pipeline doit retomber exactement sur eux.",
    steps: [
      {
        title: 'Lancer le test',
        actions: [
          "Demandez à Claude Code : « Lance le script en mode test sur le trimestre 2026-T3 et montre-moi la sortie. », ou tapez vous-même dans le terminal la commande indiquée dans le mode d'emploi.",
          "Lisez la sortie ligne par ligne : lignes lues, colonnes, regroupements, valeurs inconnues, total, écarts signalés.",
        ],
      },
      {
        title: 'Comparer aux chiffres déjà vérifiés',
        actions: [
          "Lignes lues : 4 812, 5 236, 4 126 (total 14 174) comme à la procédure 2.",
          "Total général : 105 850. Valeurs inconnues : 0.",
          "Écarts signalés : exactement les trois cellules de la procédure 4.",
          "Vérifiez que la dernière ligne affirme qu'aucun fichier n'a été écrit.",
        ],
      },
    ],
    example: {
      title: 'Sortie du mode test (fil rouge)',
      lines: [
        "python pipeline_livraisons.py --trimestre 2026-T3 --test",
        "MODE TEST — aucun fichier ne sera écrit",
        "Lecture : export-juillet.csv 4 812 lignes | export-aout.csv 5 236 lignes | export-septembre.csv 4 126 lignes",
        "Colonnes : conformes (5 sur 5) | Total lignes lues : 14 174",
        "Regroupements appliqués : 10 écritures → 3 sites | Valeurs inconnues : 0",
        "Total général : 105 850 | Goma 55 550 · Kinshasa 26 600 · Bukavu 23 700",
        "Écarts > 40 % : Bukavu août (+ 43,5 %), Bukavu septembre (− 56,9 %), Kinshasa août (+ 59,5 %)",
        "Fichier qui serait écrit : sorties\\2026-T3_synthese_livraisons.xlsx (non créé)",
      ],
    },
    result: "Le test retombe sur 14 174 lignes, 105 850 unités et trois écarts, sans écrire aucun fichier : le script reproduit votre analyse manuelle.",
    pitfall: "Passer au lancement réel parce que « le test a l'air bon » sans comparer aux chiffres déjà vérifiés : un script qui fait une erreur systématique ne la voit pas, vous seul pouvez la voir en le comparant à une référence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 7',
    title: 'Exécuter pour de vrai et rapprocher le fichier produit de votre analyse',
    intro: "Une fois le test conforme, vous lancez l'exécution réelle. Le fichier produit est ensuite contrôlé comme n'importe quel livrable : rapproché de votre analyse validée, avec le même échantillon qu'à la procédure 3.",
    steps: [
      {
        title: 'Lancer et ouvrir le fichier',
        actions: [
          "Lancez la même commande sans l'option --test (ou demandez-le à Claude Code).",
          "Ouvrez sorties\\2026-T3_synthese_livraisons.xlsx : trois feuilles attendues, Synthèse, Anomalies, Regroupements.",
        ],
      },
      {
        title: 'Rapprocher',
        actions: [
          "Comparez les trois feuilles au fichier 2026-10-09_synthese_T3_2026_livraisons.xlsx déjà validé.",
          "Rejouez au moins les huit lignes de l'échantillon de la procédure 3, dont deux choisies par une autre personne.",
          "Tout écart : ne le corrigez pas à la main dans le fichier ; demandez à Claude Code d'expliquer et de corriger le script, puis refaites le test.",
        ],
      },
    ],
    table: {
      columns: ['Élément contrôlé', 'Pipeline', 'Analyse validée (procédures 2 à 4)', 'Écart'],
      rows: [
        ['Total général', '105 850', '105 850', '0'],
        ['Goma / Kinshasa / Bukavu', '55 550 / 26 600 / 23 700', '55 550 / 26 600 / 23 700', '0'],
        ['Feuille Regroupements', '10 lignes', '10 lignes', '0'],
        ['Feuille Anomalies : cellules signalées', '3', '3', '0'],
        ['Échantillon de 8 cellules', '8 conformes', '8 conformes', '0'],
      ],
    },
    result: "Un fichier de synthèse produit par le pipeline et identique à celui produit à la main : le pipeline est validé sur un cas connu.",
    tip: "Gardez le fichier produit à la main comme référence de non-régression : à chaque modification du pipeline, le nouveau fichier doit redonner exactement ces chiffres sur les mêmes entrées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 7',
    title: 'Tester la robustesse : le pipeline doit s\'arrêter plutôt que deviner',
    intro: "Un pipeline fiable ne se juge pas à ce qu'il fait quand tout va bien, mais à ce qu'il fait quand quelque chose a changé. Vous lui présentez trois situations fausses sur des copies, et vous vérifiez qu'il s'arrête avec un message clair.",
    steps: [
      {
        title: 'Préparer des fichiers de test',
        actions: [
          "Créez un sous-dossier entrees\\TEST et copiez-y les trois exports de 2026-T3.",
          "Ouvrez les copies avec le Bloc-notes, pas avec Excel : enregistrer un CSV depuis Excel peut changer les séparateurs, l'encodage ou les dates.",
          "Test A : dans export-septembre.csv, modifiez une ligne pour que le site devienne « Goma 1 ». Test B : renommez l'en-tête « quantité livrée » en « quantite ». Test C : supprimez export-aout.csv de entrees\\TEST.",
        ],
      },
      {
        title: 'Lancer et exiger les arrêts',
        actions: [
          "Lancez le mode test sur chaque situation et lisez le message.",
          "Si un test ne s'arrête pas, demandez à Claude Code : « Ajoute un contrôle qui arrête le script dans ce cas, avec un message qui dit quoi corriger », puis relancez les trois tests.",
        ],
      },
    ],
    table: {
      columns: ['Test', 'Ce qu\'on a changé', 'Comportement attendu'],
      rows: [
        ['A', 'Valeur de site inconnue : « Goma 1 »', 'ARRÊT : valeur inconnue « Goma 1 » (1 ligne). Ajoutez-la à correspondance_sites.csv après validation.'],
        ['B', 'Colonne renommée : « quantite » au lieu de « quantité livrée »', 'ARRÊT : colonne attendue absente : « quantité livrée ». Aucun calcul effectué.'],
        ['C', 'Fichier manquant : 2 fichiers au lieu de 3', 'ARRÊT : 2 fichiers trouvés, 3 attendus. Aucun calcul effectué.'],
      ],
    },
    result: "Trois tests conformes : dans chaque cas, le pipeline s'arrête, dit pourquoi et n'écrit aucun fichier.",
    pitfall: "Laisser le script « s'adapter » : un pipeline qui ignore une colonne inconnue ou range une valeur inconnue dans « Autres » continue de produire un résultat qui a l'air correct, et c'est exactement la définition d'une boîte noire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 7 sur 7',
    title: 'Documenter le pipeline et figer sa première version',
    intro: "Un pipeline que seul son auteur sait relancer n'est pas transmissible. Vous obtenez un mode d'emploi court, vous consignez la version et vous décidez comment le relancer : manuellement, au début.",
    steps: [
      {
        title: 'Obtenir le mode d\'emploi',
        actions: [
          "Demandez à Claude Code : « Écris LISEZ-MOI.txt : où déposer les fichiers, la commande de test, la commande réelle, où lire le résultat, que faire quand le script s'arrête. »",
          "Relisez-le comme un collègue qui n'a jamais vu le projet, et corrigez ce qui n'est pas clair.",
        ],
      },
      {
        title: 'Figer et consigner',
        actions: [
          "Notez dans le journal : version 1.0, date, tests passés (cas nominal, tests A, B, C).",
          "Copiez le dossier dans une archive datée (livraisons_trimestre_v1.0).",
          "Choisissez le mode de relance : manuel (par défaut). Le Planificateur de tâches de Windows permet un déclenchement automatique, mais seulement avec l'accord du support informatique et après plusieurs cycles supervisés.",
        ],
      },
    ],
    example: {
      title: 'LISEZ-MOI.txt (extrait) et ligne de journal',
      lines: [
        "1. Déposer les trois exports du trimestre dans entrees\\AAAA-T# (ex. entrees\\2026-T4).",
        "2. Lancer le test : python pipeline_livraisons.py --trimestre 2026-T4 --test. Lire le message.",
        "3. Si tout est conforme, lancer sans --test. Le résultat est dans sorties\\.",
        "4. Si le script s'arrête, lire le message ; ne rien forcer ; voir la section « En cas d'arrêt ».",
        "Journal : 13/10/2026 | Pipeline livraisons v1.0 mis en service, tests nominal, A, B et C conformes | pipeline_livraisons.py | Claude Code | A. Kahindo",
      ],
    },
    result: "Un pipeline v1.0 documenté, archivé, testé sur un cas nominal et trois cas d'échec, avec un mode d'emploi lisible par un collègue.",
    tip: "Écrivez dans le mode d'emploi la phrase « ne jamais corriger le fichier produit à la main : corriger les entrées ou le script, puis relancer ». C'est la règle qui évite les fichiers de sortie impossibles à reproduire.",
  },

  // ───────────── Procédure 7 — Superviser le pipeline dans la durée ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Enregistrer le pipeline dans la feuille « Suivi des pipelines automatisés »',
    intro: "La seconde feuille du classeur checklist-passage-echelle-big-data.xlsx liste tous vos pipelines et signale automatiquement ceux qui n'ont pas été revérifiés depuis plus de 30 jours. Vous l'ouvrez à chaque mise en service, puis au moins une fois par mois.",
    steps: [
      {
        title: 'Remplir la ligne du pipeline',
        actions: [
          "Ouvrez la feuille « Suivi des pipelines automatisés ». Les lignes 5 à 7 sont des exemples du gabarit : conservez-les en référence ou supprimez-les. Utilisez la première ligne libre, ici la ligne 8.",
          "Colonne A « Nom du pipeline » : un nom qui permet de le retrouver. Colonne B « Déclencheur / fréquence » : la ligne du brief.",
          "Colonne C « Dernière vérification » : la date de la mise en service validée, au format JJ/MM/AAAA. Colonne F « Responsable » : le nom de la personne qui supervise.",
          "Colonnes D « Jours depuis vérification » et E « Statut » : ne les saisissez pas, elles se calculent à partir de C (D8 et E8 restent vides tant que C8 l'est).",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Contenu saisi (fil rouge)'],
      rows: [
        ['A — Nom du pipeline', 'Synthèse trimestrielle des livraisons par site (Horizon Grands Lacs)'],
        ['B — Déclencheur / fréquence', 'Trimestriel, à la clôture de chaque trimestre ; lancement manuel'],
        ['C — Dernière vérification', '13/10/2026'],
        ['D — Jours depuis vérification', '(formule : aujourd\'hui − C8)'],
        ['E — Statut', '(formule : « À jour » si 30 jours ou moins, « À revérifier » au-delà)'],
        ['F — Responsable', 'A. Kahindo'],
      ],
    },
    result: "Le pipeline est enregistré, son statut se calcule seul : « À jour » le jour de la vérification, puis « À revérifier » dès que 30 jours se sont écoulés sans nouvelle vérification.",
    pitfall: "Si la colonne D affiche une date au lieu d'un nombre de jours, sélectionnez la colonne puis Accueil > Format de nombre > Standard. Et rappelez-vous : « À revérifier » ne veut pas dire « en erreur », mais « à considérer comme non fiable tant que non recontrôlé ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Appliquer la routine de relance à chaque exécution',
    intro: "Le pipeline se relance chaque trimestre. À chaque cycle, la même séquence de huit gestes s'applique, du dépôt des fichiers à la diffusion : c'est elle qui empêche la dérive vers la boîte noire.",
    steps: [
      {
        title: 'Préparer et tester',
        actions: [
          "Déposez les trois exports du trimestre dans entrees\\AAAA-T# (copies, jamais les sources).",
          "Comparez les en-têtes des nouveaux fichiers au brief (section 1) : mêmes colonnes, même ordre, même séparateur.",
          "Lancez le mode test et lisez le message : fichiers, lignes lues, valeurs inconnues, écarts signalés.",
        ],
      },
      {
        title: 'Exécuter, vérifier, diffuser',
        actions: [
          "Si le test est conforme, lancez l'exécution réelle.",
          "Rapprochez lignes et sommes de chaque fichier source avec celles affichées par le script (comme à la procédure 3, étape 2).",
          "Faites vérifier l'échantillon de 8 cellules, dont 2 choisies par une deuxième personne.",
          "Qualifiez chaque écart signalé avec le coordinateur avant de diffuser.",
          "Diffusez, puis consignez dans le journal : date, fichiers, version du script, résultat des contrôles.",
        ],
      },
    ],
    example: {
      title: 'Carte de routine à placer dans le dossier du pipeline',
      lines: [
        "1. Dépôt · 2. Contrôle des en-têtes · 3. Mode test · 4. Exécution réelle",
        "5. Rapprochement lignes et sommes · 6. Échantillon de 8 cellules (2 choisies par un tiers) · 7. Qualification des écarts avec J. Kambale · 8. Diffusion et journal",
        "Règle d'arrêt : au moindre message « ARRÊT » ou écart non expliqué, on ne diffuse pas.",
      ],
    },
    result: "Une routine en huit gestes, applicable par n'importe quel collègue formé, qui garantit que les contrôles de la procédure 3 sont refaits à chaque cycle.",
    tip: "Prévoyez les créneaux dans le calendrier : dépôt le 3e jour ouvré après la clôture, exécution et contrôle sous 48 heures. Un contrôle qui n'est pas planifié est un contrôle qu'on saute.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Mener la vérification mensuelle : trois questions',
    intro: "Entre deux cycles trimestriels, le pipeline ne tourne pas, mais le format des fichiers peut changer. Une fois par mois au minimum, vous répondez à trois questions, vous consignez la réponse et vous mettez à jour la date de dernière vérification.",
    steps: [
      {
        title: 'Répondre aux trois questions',
        actions: [
          "Question 1 : le format des fichiers sources a-t-il changé depuis la dernière vérification (nom ou nombre de colonnes, format de date, nouvelles valeurs de site) ? Comparez l'en-tête du dernier export disponible au brief et lancez le mode test dessus.",
          "Question 2 : le résultat produit est-il cohérent avec un contrôle manuel ponctuel ? Rejouez 5 lignes de l'échantillon comme à la procédure 3.",
          "Question 3 : la date de dernière vérification date-t-elle de moins de 30 jours ? Lisez la colonne E de la feuille de suivi.",
        ],
      },
      {
        title: 'Mettre à jour le suivi',
        actions: [
          "Si les réponses sont conformes, saisissez la date du jour en colonne C de la ligne du pipeline : E repasse à « À jour ».",
          "Notez dans le journal les trois réponses, la date et vos initiales.",
          "Si une réponse est négative, ne mettez pas à jour la date : passez à l'étape suivante.",
        ],
      },
    ],
    example: {
      title: 'Vérification du 05/11/2026 (fil rouge)',
      lines: [
        "Q1 : en-tête de l'export d'octobre comparé au brief : mêmes cinq colonnes, mêmes valeurs de site ; mode test lancé sur ce fichier : 0 valeur inconnue.",
        "Q2 : 5 lignes de l'échantillon T3 rejouées à la main : écart nul.",
        "Q3 : dernière vérification le 13/10/2026, soit 23 jours : statut « À jour ».",
        "Action : C8 = 05/11/2026 → D8 = 0, E8 = « À jour ». Journal : « Vérification mensuelle conforme, A. K., 05/11/2026 ».",
      ],
    },
    result: "Trois réponses consignées, une date de vérification mise à jour, un statut « À jour » : le pipeline reste fiable pour trente jours de plus.",
    pitfall: "Mettre la date à jour sans avoir répondu aux trois questions : la colonne « Statut » affichera « À jour » alors que rien n'a été vérifié. La formule mesure le temps écoulé, pas la qualité du contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Réagir à une alerte ou à un changement de format',
    intro: "Un jour, le pipeline s'arrêtera : une nouvelle écriture de site, une colonne renommée, un fichier manquant. C'est son bon fonctionnement. Votre rôle est de comprendre la cause, de faire valider la correction par la bonne personne, puis de refaire les tests avant de reprendre.",
    steps: [
      {
        title: 'Diagnostiquer sans forcer',
        actions: [
          "Lisez le message d'arrêt en entier et notez la valeur ou la colonne en cause, le fichier et le nombre de lignes.",
          "Identifiez le décideur : le producteur du fichier pour une nouvelle valeur ou un nouveau format, le responsable du suivi pour un écart de volume.",
          "Ne modifiez jamais le fichier d'entrée à la main pour « faire passer » le script.",
        ],
      },
      {
        title: 'Corriger, retester, consigner',
        actions: [
          "Faites valider par écrit la correction (nouvelle ligne de correspondance, nouveau nom de colonne).",
          "Demandez à Claude Code de mettre à jour la table ou le script, relancez le mode test, puis rejouez les tests A, B et C et le cas nominal.",
          "Mettez à jour le brief (sections 1 ou 2), passez la version à 1.1, consignez dans le journal et mettez à jour la date de vérification.",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Ce que fait le pipeline', 'Votre réaction'],
      rows: [
        ['Valeur de site inconnue (ex. « UVIRA-04 », 212 lignes dans export-novembre.csv)', 'Arrêt, liste la valeur et son nombre de lignes', "Demander à J. Kambale (nouvelle antenne d'Uvira ouverte le 02/11) ; ajouter UVIRA-04;Uvira à correspondance_sites.csv ; retester ; v1.1"],
        ['Colonne renommée ou absente', 'Arrêt, nomme la colonne attendue', 'Demander au producteur la raison du changement ; faire adapter le script ou obtenir le bon export ; retester'],
        ['Nombre de fichiers différent de 3', 'Arrêt, indique le nombre trouvé', 'Obtenir le fichier manquant ou confirmer son absence ; ne rien calculer sur un trimestre incomplet'],
        ['Écart > 40 % signalé', 'Produit le fichier mais marque l\'anomalie', 'Qualifier avec le coordinateur (donnée ou réalité) avant toute diffusion'],
      ],
    },
    result: "Une procédure de réaction à quatre cas : chaque arrêt a un décideur, une correction validée par écrit, des tests rejoués, une version et une trace dans le journal.",
    pitfall: "Ajouter la nouvelle valeur « parce que ça ressemble à Uvira » sans validation : si « UVIRA-04 » était en réalité un point de relais rattaché à Bukavu, vous venez de créer un site fantôme et de fausser tous les trimestres suivants.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du besoin flou au tableau trimestriel vérifié',
    scenario: "Rappel : trois exports reçus le mercredi 7 octobre 2026 (14 174 lignes), comité trimestriel le vendredi 16 octobre, consigne « un tableau de synthèse trimestriel par site, avec les volumes qui sortent de l'ordinaire ». Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Décision d\'outil', body: "Mesure sur les fichiers, feuille de seuils : lignes Non (5 236), fichiers Oui (3), calcul Oui, clé instable Oui. Au moins un seuil franchi : Claude (exécution de code), pipeline à prévoir car le rapport est trimestriel.", result: 'Décision consignée le 07/10/2026.' },
      { title: 'Cadrage', body: "Question validée par écrit par J. Kambale : quantité livrée par site au T3, écart de plus de 40 % à la moyenne des deux autres mois ; Annulé compté à 0.", result: 'Validation à 16 h 05.' },
      { title: 'Croisement', body: "Contrôle de lecture (4 812 / 5 236 / 4 126 lignes), prompt CLARTE avec validation préalable des regroupements : dix écritures, trois sites, KIN-3 tranchée auprès du coordinateur le 08/10.", result: 'Tableau trié : Goma 55 550, Kinshasa 26 600, Bukavu 23 700, total 105 850.' },
      { title: 'Vérification', body: "Explication en cinq phrases, rapprochement lignes et sommes de chaque fichier (écart nul), échantillon de 8 lignes rejoué à la main, six repères de lecture du code contrôlés.", result: 'Huit écarts nuls.' },
    ],
    table: {
      columns: ['Contrôle', 'Excel (sources)', 'Claude', 'Écart'],
      rows: [
        ['Lignes lues', '14 174', '14 174', '0'],
        ['Quantité totale', '105 850', '105 850', '0'],
        ['Écritures de la clé → sites', '10 → 3', '10 → 3', '0'],
        ['Lignes exclues', '0', '0', '0'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Anomalies qualifiées et synthèse du comité',
    scenario: "Le tableau est vérifié. Amani demande les écarts à la moyenne des deux autres mois, qualifie chaque anomalie auprès du coordinateur, puis calcule les indicateurs de régularité.",
    steps: [
      { title: 'Neuf écarts, trois signalés', body: 'Kinshasa août + 59,5 %, Bukavu septembre − 56,9 %, Bukavu août + 43,5 % (effet miroir : + 3,1 % entre juillet et août).' },
      { title: 'Kinshasa août', body: '11 commandes de 270 à 330 unités du 18 au 21/08, soit 3 300 unités ; hors campagne, 8 500 (+ 14,9 %). Confirmé par J. Kambale : campagne de distribution.', result: 'Réel, ponctuel.' },
      { title: 'Bukavu septembre', body: 'Dernière livraison le 12/09, aucune ligne du 13 au 30/09. Confirmé par J. Kambale : livraisons suspendues, route coupée.', result: 'Réel, à suivre au T4.' },
      { title: 'Régularité', body: 'Coefficient de variation hebdomadaire ≈ 8 % (Goma), ≈ 45 % (Kinshasa), ≈ 50 % (Bukavu) ; contrôle indépendant sur Goma avec Excel.', result: 'Goma régulier ; les deux autres irréguliers pour des causes identifiées.' },
      { title: 'Synthèse', body: "Fichier de trois feuilles (Synthèse, Anomalies avec explications confirmées, Regroupements), synthèse de 5 lignes, validation du coordinateur le 09/10/2026." },
    ],
    result: "Réponse à la demande : Goma porte 52,5 % des livraisons du trimestre ; deux volumes atypiques, expliqués et confirmés par écrit ; aucun chiffre affirmé sans vérification.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain trimestre, seuls les noms, les chiffres et les explications changeront.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Du brief au pipeline supervisé',
    scenario: "Le rapport étant trimestriel, Amani complète le brief le 9 octobre, fait construire le pipeline avec Claude Code les 12 et 13 octobre, le met en service et organise sa supervision.",
    steps: [
      { title: 'Brief complété', body: "Section 1 : dossier entrees\\2026-T3, CSV UTF-8 point-virgule, cinq colonnes dans l'ordre. Section 2 : clé « site de destination », dix écritures connues, arrêt sur toute valeur inconnue. Section 3 : Excel trois feuilles, nom AAAA-T#_synthese_livraisons.xlsx. Section 4 : échantillon de 8 cellules dont 2 choisies par un tiers, cinq alertes chiffrées. Section 5 : trimestriel, lancement manuel, prochaine vérification 05/11/2026. Signature : A. Kahindo, 09/10/2026." },
      { title: 'Construction', body: "Dossier dédié et CLAUDE.md, prompt STAR, explication lue avant exécution, trois autorisations ponctuelles, mode test conforme (14 174 lignes, 105 850, trois écarts), exécution réelle rapprochée de l'analyse manuelle.", result: 'Écart nul sur les cinq contrôles.' },
      { title: 'Robustesse', body: "Tests A (valeur inconnue), B (colonne renommée) et C (fichier manquant) : le script s'arrête avec un message clair dans les trois cas.", result: 'Version 1.0 archivée le 13/10/2026.' },
      { title: 'Supervision', body: "Ligne 8 de la feuille de suivi, routine de huit gestes, vérification mensuelle du 05/11 conforme, procédure de réaction à quatre cas (dont UVIRA-04 en novembre).", result: 'Statut « À jour ».' },
    ],
    table: {
      columns: ['Rubrique du brief', 'Contenu final'],
      rows: [
        ['1. Fichiers source', 'entrees\\AAAA-T# · CSV ; UTF-8 · 3 fichiers par trimestre · 5 colonnes dans l\'ordre'],
        ['2. Clé et variantes', 'site de destination · 10 écritures → 3 sites · valeur inconnue = arrêt'],
        ['3. Livrable', 'Excel, 3 feuilles · sorties\\ puis J. Kambale et comité'],
        ['4. Vérification', '8 cellules (2 choisies par un tiers) · alerte > 40 %, valeur inconnue, colonne absente, fichier manquant, lignes lues ≠ lignes sources'],
        ['5. Fréquence', 'Trimestrielle · lancement manuel · prochaine vérification 05/11/2026'],
      ],
    },
    result: "Décision du comité du 16/10 (exemple) : la synthèse est adoptée ; le suivi de Bukavu est inscrit à l'ordre du jour du T4 ; le pipeline est confirmé pour les trimestres suivants, avec contrôle mensuel.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Croisement trimestriel, vérification et cadrage du pipeline',
    instructions: "Reprenez l'analyse du fil rouge sur vos propres exports (trois fichiers mensuels de votre organisation) ou sur des exports de test. Si vous n'avez pas de données, demandez à Claude de générer trois CSV de test d'environ 300 lignes avec les mêmes cinq colonnes et trois orthographes différentes d'un même site, puis travaillez comme si c'étaient des données réelles. Comparez ensuite votre travail avec le corrigé intégral.",
    steps: [
      {
        title: 'Croisement et diagnostic de clé',
        actions: [
          "Remplissez la feuille « Seuils de passage à l'échelle » avec vos valeurs et notez la décision.",
          "Contrôlez la lecture (lignes par fichier) puis rédigez votre prompt CLARTE adapté au nombre de lignes et aux colonnes réelles, en exigeant la détection des variantes de site avant fusion.",
          "Validez les regroupements un par un, en faisant confirmer les cas douteux auprès du producteur du fichier.",
        ],
      },
      {
        title: 'Vérification par échantillon',
        actions: [
          "Demandez l'explication en langage clair et un échantillon de 8 à 10 lignes tracées jusqu'aux fichiers sources.",
          "Rapprochez lignes et sommes de chaque fichier, puis vérifiez à la main chaque ligne de l'échantillon et notez tout écart.",
          "Consultez le code exécuté et notez les six repères.",
        ],
      },
      {
        title: 'Anomalies et brief de pipeline',
        actions: [
          "Faites détecter les sites dont un mois s'écarte de plus de 40 % de la moyenne des deux autres, et qualifiez chaque anomalie.",
          "Complétez les cinq sections de gabarit-brief-pipeline-donnees-automatise.docx comme si vous prépariez l'automatisation du même rapport pour les trimestres suivants.",
        ],
      },
    ],
    deliverable: "Le tableau trimestriel par site avec les regroupements de clé validés, la liste des anomalies de volume avec leur pourcentage d'écart et leur explication confirmée, le tableau de vérification, et le gabarit de brief de pipeline complété.",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement — Construire, tester et superviser un pipeline',
    instructions: "Appliquez les procédures 6 et 7 à votre brief : faites construire le pipeline par Claude Code dans un dossier dédié, testez-le sur un cas nominal et trois cas d'échec, puis enregistrez-le dans le suivi. Points de contrôle sur le fil rouge : 14 174 lignes lues, 105 850 unités, 3 écarts signalés, 13 274 lignes Livré, 649 Partiel, 251 Annulé.",
    steps: [
      {
        title: 'Construire et tester',
        actions: [
          "Préparez le dossier, le fichier CLAUDE.md et les copies des fichiers, puis lancez Claude Code depuis ce dossier.",
          "Rédigez un prompt STAR adapté à votre brief, lisez l'explication avant toute exécution, autorisez action par action.",
          "Lancez le mode test, comparez à votre analyse manuelle, puis exécutez et rapprochez.",
          "Rejouez trois tests d'échec (valeur inconnue, colonne renommée, fichier manquant).",
        ],
      },
      {
        title: 'Superviser',
        actions: [
          "Complétez une ligne de la feuille « Suivi des pipelines automatisés » (nom, fréquence, date, responsable).",
          "Rédigez votre carte de routine de relance et simulez une vérification mensuelle en répondant aux trois questions.",
        ],
      },
    ],
    tip: "Demandez à une deuxième personne de faire la vérification mensuelle simulée à votre place : si elle y arrive avec votre seul mode d'emploi, votre documentation est suffisante.",
    deliverable: "Un pipeline testé (dossier, script, table de correspondance, mode d'emploi), le journal des tests, et la ligne de suivi complétée.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre cas de gros volumes',
    instructions: "Choisissez un besoin réel de votre service qui franchit au moins un seuil (suivi de stocks, consolidation de rapports de sites, exports d'activité, relevés mensuels), dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Mesurez le besoin, remplissez la feuille de seuils et obtenez une question de gestion validée par écrit par votre responsable.",
          "Contrôlez les colonnes et la confidentialité, retirez ce qui est inutile, archivez les sources en lecture seule.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Croisement avec validation des regroupements de clé, vérification complète (explication, rapprochement, échantillon, code).",
          "Détection d'anomalies qualifiées auprès du producteur des données.",
          "Si le besoin est récurrent : brief complété, pipeline Claude Code testé en mode test, suivi enregistré.",
        ],
      },
    ],
    deliverable: "Le tableau de synthèse vérifié, la liste des anomalies qualifiées, et si le besoin est récurrent, le brief, le pipeline testé et la ligne de suivi — prêts à être relancés au prochain cycle.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre feuille de seuils porte vos propres valeurs (pas celles d'exemple du gabarit), les colonnes E et F sont calculées et la décision d'outil est consignée.",
      "Vous avez contrôlé la lecture de chaque fichier avant la question de gestion : le nombre de lignes lues est celui de votre propre comptage.",
      "Chaque regroupement de clé a été validé un par un ; les cas douteux ont été confirmés par le producteur du fichier ; aucune valeur n'est restée orpheline.",
      "Sur le fil rouge : 14 174 lignes, 105 850 unités, Goma 55 550 (52,5 %), Kinshasa 26 600, Bukavu 23 700.",
      "Vos tableaux de rapprochement montrent un écart nul, ou chaque écart est expliqué ; l'échantillon de 8 lignes est vérifié dans les fichiers d'origine.",
      "Les anomalies de volume sont accompagnées de leur écart chiffré, d'un constat tiré des données et d'une explication confirmée, jamais supposée.",
      "Vous distinguez effet miroir et vraie anomalie (Bukavu août + 43,5 % contre Bukavu septembre − 56,9 %).",
      "Les cinq sections du gabarit de brief sont complétées, sans case vide, avec la date de prochaine vérification et la signature.",
      "Le pipeline a été testé en mode test, rapproché de l'analyse manuelle, et s'arrête dans les trois cas d'échec (valeur inconnue, colonne manquante, fichier manquant).",
      "La feuille « Suivi des pipelines automatisés » comporte une ligne complète avec date de dernière vérification de moins de 30 jours.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Faire confiance à un calcul volumineux sans l'avoir vérifié sur un échantillon connu : l'exécution de code élimine l'erreur de calcul, pas l'erreur de logique. Rejouez 8 lignes à la main avant diffusion.",
      "Croiser des fichiers sur une clé qui n'est pas identique d'un fichier à l'autre (GOMA-01 / Goma01 / GOMA 01) : le tableau se remplit de doublons silencieux. Exigez la liste des regroupements avant fusion et validez-la ligne par ligne.",
      "Valider « tout » en bloc : un regroupement non lu est un regroupement non validé. Faites trancher les cas douteux par le producteur du fichier.",
      "Poser une question sans demander l'exécution réelle : l'IA peut estimer au lieu de calculer. Écrivez « exécute réellement le calcul, aucune estimation ».",
      "Ne pas contrôler la lecture des fichiers : une lecture partielle ne produit aucun message d'erreur. Comparez toujours le nombre de lignes lues au vôtre.",
      "Laisser l'IA fixer son propre seuil d'anomalie : imposez la formule et le seuil (ici 40 % par rapport à la moyenne des deux autres mois).",
      "Présenter une explication supposée comme un fait : « Bukavu a baissé à cause de la route » doit être confirmé par le coordinateur avant d'apparaître dans un rapport.",
      "Lancer Claude Code depuis un dossier trop large ou accepter « toujours autoriser » : il agit sur vos fichiers. Dossier dédié, autorisation ponctuelle, mode test avant tout.",
      "Mettre un pipeline en déclenchement automatique dès le premier cycle, ou le laisser tourner des mois sans revérification : c'est la définition d'une boîte noire. Vérification au moins tous les 30 jours.",
      "Déposer des fichiers sans avoir ouvert toutes les colonnes : les colonnes non lues sont celles qui contiennent les données sensibles. Contrôlez, retirez, consignez.",
      "Confondre « l'IA a exécuté du code » et « le résultat est fiable » : l'exécution ne garantit pas que les données de départ étaient correctes.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rempli la feuille « Seuils de passage à l'échelle » avec vos propres valeurs et justifié le passage de l'Excel à Claude : trois exports, 14 174 lignes, dix écritures pour trois sites.",
      "Vous avez archivé vos sources en lecture seule, contrôlé les colonnes et la confidentialité, puis contrôlé la lecture des fichiers par Claude avant toute analyse.",
      "Vous avez obtenu un tableau trimestriel par site (105 850 unités, Goma 52,5 %) après avoir validé un par un les regroupements de clé, dont le cas douteux KIN-3.",
      "Vous avez vérifié le résultat : explication en cinq phrases, rapprochement des lignes et des sommes avec écart nul, échantillon de 8 lignes rejoué à la main, six repères de lecture du code.",
      "Vous avez fait détecter les volumes atypiques, distingué un effet miroir d'une vraie anomalie, fait confirmer chaque explication par le coordinateur, et calculé des indicateurs de régularité qu'Excel gère mal.",
      "Vous avez complété le gabarit de brief section par section, puis fait construire, tester et documenter un pipeline avec Claude Code, qui s'arrête au lieu de deviner.",
      "Vous avez enregistré le pipeline dans la feuille de suivi et défini une routine de relance, une vérification mensuelle à trois questions et une procédure de réaction en cas de changement de format.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais reconnaître, à l'aide d'une grille de critères chiffrée, qu'un besoin d'analyse dépasse les limites pratiques d'Excel et de Power Query.",
      "Je sais décrire à Claude un besoin d'analyse volumineuse ou croisée en langage courant et exiger que le calcul soit réellement exécuté.",
      "Je sais demander une explication en langage clair d'un résultat de code exécuté et vérifier un échantillon tracé jusqu'aux fichiers sources.",
      "Je sais identifier et faire valider une incohérence de clé de jointure (espace, casse, orthographe) avant tout croisement automatique.",
      "J'ai utilisé au moins quatre prompts CLARTE / STAR du module, adaptés à mes propres données.",
      "Je sais faire construire par Claude Code un pipeline récurrent, avec un mode test avant toute exécution sur des données réelles.",
      "J'ai complété la feuille « Suivi des pipelines automatisés » du gabarit checklist-passage-echelle-big-data.xlsx pour au moins un pipeline mis en service.",
      "Je sais expliquer pourquoi une automatisation de données doit être revérifiée périodiquement plutôt que laissée tourner sans supervision, et ce que je fais quand le statut passe à « À revérifier ».",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Atelier Pratique — Mini-projet certifiant par domaine ». Vous y appliquerez l'ensemble de la formation à un mini-projet IA dans votre secteur (logistique, finance, RH, coaching ou audit), jusqu'à un livrable professionnel réel — avec la même discipline que dans ce module : un besoin cadré, un résultat vérifié, une automatisation supervisée.",
  },
]
