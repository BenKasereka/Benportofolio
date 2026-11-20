// Module 02 — Élaboration & Gestion Budgétaire Multi-Bailleurs
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (budget-suivi-bfu-multi-bailleurs.xlsx, note-demande-virement-ligne-budgetaire.docx,
// gabarit-narrative-planification-annuelle-budgetaire.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique : le projet « Réponse NFI Masisi » de l'ONG fictive « Kivu Avenir
// Solidarité » (KAS, bureau de Goma, déjà rencontrée au module 01), avec
// exemples remplis, résultat attendu, astuces et erreurs à éviter.
// Les organisations, personnes, clauses d'accord et montants sont fictifs ;
// seuls les bailleurs et standards du secteur (ECHO…) sont nommés comme tels.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Élaboration & Gestion Budgétaire Multi-Bailleurs',
    hook: "Un budget rejeté par un bailleur, ce n'est pas toujours une question de montant : c'est souvent une question de méthode. À la fin de ce module, vous aurez produit un budget multi-bailleurs chiffré et justifié ligne par ligne, un BFU mensuel qui compare l'engagé ET le dépensé au prorata temporis, une analyse d'écart qui sépare le change de l'opérationnel, une note de virement d'une page que le bailleur valide sans aller-retour, et la narrative annuelle qui accompagne le tout.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Chiffrer chaque ligne d'un budget de projet en choisissant la méthode adaptée (activité par activité, coût unitaire ou forfait) et en documentant sa justification, en produisant l'onglet « Budget » du template budget-suivi-bfu-multi-bailleurs.xlsx rempli, avec son dossier de devis et de notes de forfait.",
      "Consolider un budget multi-bailleurs sans jamais mélanger les enveloppes, en produisant des totaux par bailleur qui égalent les montants des accords et un budget validé en interne avant soumission.",
      "Mettre à jour chaque mois l'onglet « BFU » (budget, engagé cumulé, dépensé) et comparer le % consommé de chaque ligne au prorata temporis, en produisant un BFU à jour et un commentaire écrit pour chaque ligne signalée.",
      "Détecter un écart avant qu'il ne devienne un dépassement irréversible, en produisant une estimation à terminaison par ligne et une décomposition de l'écart en volume, prix et change.",
      "Trancher entre virement de ligne et avenant formel en relisant la clause de l'accord, en produisant une fiche de décision chiffrée selon les trois bases de calcul possibles.",
      "Rédiger une note de demande de virement de ligne budgétaire d'une page, avec une justification factuelle que le bailleur peut valider sans aller-retour, en remplissant le template note-demande-virement-ligne-budgetaire.docx.",
      "Rédiger la narrative de planification annuelle budgétaire (contexte, bilan, priorités, ressources humaines, chronogramme) avec le gabarit-narrative-planification-annuelle-budgetaire.docx, qui alimente le cycle de budgétisation de l'année suivante.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module est un atelier : chaque procédure se termine par un livrable concret, construit sur un seul cas fil rouge, de la première ligne du budget jusqu'à la demande de virement et à la narrative de l'année suivante.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive du module 01, dont le bureau de Goma (RDC) héberge déjà trois projets. En avril 2026, KAS prépare un quatrième projet : une réponse d'urgence en articles ménagers essentiels (NFI) pour 2 000 ménages déplacés à Masisi, cofinancée par ECHO et par une fondation privée.",
    ],
    bullets: [
      "Livrable 1 — Le chiffrage justifié des 8 lignes du budget NFI (devis comparés, calculs de quantité, notes de forfait).",
      "Livrable 2 — L'onglet « Budget » du template rempli, avec ses totaux par bailleur et sa validation interne signée.",
      "Livrable 3 — L'onglet « BFU » alimenté pour le mois 8 (31 décembre 2026), avec ses commentaires de lignes signalées.",
      "Livrable 4 — L'estimation à terminaison de chaque ligne et la décomposition de l'écart (volume, prix, change).",
      "Livrable 5 — La fiche de décision « virement de ligne ou avenant » avec les trois bases de calcul.",
      "Livrable 6 — La note de demande de virement VL-2027-01, complète, validée et prête à être notifiée au bailleur.",
      "Livrable 7 — La narrative de planification annuelle 2027 du bureau de Goma, avec son chronogramme.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : le projet « Réponse NFI Masisi » de KAS',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les bailleurs, les montants, les clauses d'accord et les personnes sont fictifs, mais construits sur des configurations réelles de bureaux multi-bailleurs dans l'Est de la RDC.",
    table: {
      columns: ['Élément', 'Détail'],
      rows: [
        ['Projet', 'Réponse NFI Masisi (code NFI), territoire de Masisi, Nord-Kivu'],
        ['Durée', '12 mois : du 1er mai 2026 au 30 avril 2027'],
        ['Bénéficiaires', '2 000 ménages déplacés, 6 sites de distribution'],
        ['Bailleur 1', 'ECHO : distribution, suivi post-distribution et coordination — 62 800 USD'],
        ['Bailleur 2', 'Fondation Sigma (fonds privés) : composante communautaire — 6 000 USD (saisie « Fonds privés » dans le template)'],
        ['Budget total', '68 800 USD, soit 62 800 (ECHO) + 6 000 (Fonds privés)'],
        ['Équipe', 'Aimé T., coordinateur NFI — Patrick K., logisticien — Esther N., caissière — Grace M., Finance Manager — vous, Finance Officer'],
      ],
    },
    example: {
      title: 'Deux repères à garder en tête',
      lines: [
        "Taux de change budgété : 2 800 CDF pour 1 USD (budget en USD, certaines dépenses locales payées en CDF).",
        "Clause de virement de l'accord KAS–ECHO (article 8.2, fictive) : voir procédure 5, étape 1.",
      ],
    },
    tip: "Au module 01, vous avez paramétré la grille de codification et le registre des engagements. Ils alimentent directement le BFU de ce module : l'engagé vient du registre, le dépensé vient de la grille.",
  },
  {
    type: 'concept',
    title: 'Le calendrier du fil rouge',
    body: "Le module suit une année de vie du projet NFI. Repérez ci-dessous, pour chaque situation, la procédure qui s'applique.",
    table: {
      columns: ['Date', 'Situation', 'Procédures'],
      rows: [
        ['6 avril 2026', 'Grace M. vous demande le budget de la proposition NFI, à remettre avant le 15 avril pour soumission à ECHO.', '1 et 2'],
        ['1er mai 2026', "Démarrage du projet. Le premier BFU (mois 1) est dû le 5 juin.", '3'],
        ['31 décembre 2026', 'Clôture du BFU de décembre (mois 8 sur 12) : la ligne Kits NFI est à 95,8 %.', '3 et 4'],
        ['5 au 14 janvier 2027', 'Analyse de l\'écart, décision virement ou avenant, note de virement VL-2027-01.', '4, 5 et 6'],
        ['Mi-janvier 2027', 'Narrative de planification annuelle 2027 du bureau de Goma.', '7'],
      ],
    },
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Trois méthodes de budgétisation, trois niveaux de preuve',
    body: [
      "Un budget n'est pas seulement un total défendable : c'est la manière dont chaque ligne est construite qui décide si elle sera acceptée telle quelle, contestée en instruction ou retoquée en audit deux ans plus tard.",
      "Activité par activité : vous décomposez chaque activité du cadre logique (le tableau qui structure objectifs et activités du projet) en ressources, et vous chiffrez chacune séparément. Traçabilité totale, mais illisible sur des coûts récurrents ou diffus.",
      "Coût unitaire : la ligne est un prix unitaire multiplié par une quantité (coût par kit, par ménage, par rotation). Auditable et comparable entre partenaires, c'est aussi la méthode la plus solide en cas de changement d'échelle : plus de bénéficiaires, recalcul mécanique, pas de renégociation.",
      "Forfait : un montant fixe pour une ligne dont le détail coûterait plus cher à justifier que ce qu'il apporte en rigueur. Défendable sur une petite ligne ; risqué sur une ligne significative.",
    ],
    example: {
      title: 'Les trois méthodes dans le budget NFI',
      lines: [
        "Coût unitaire : Kits NFI = 2 000 kits × 18 USD = 36 000 USD (varie avec le nombre de ménages).",
        "Activité par activité : Enquêtes post-distribution = 5 sous-lignes détaillées = 4 800 USD (activité ponctuelle).",
        "Forfait : Perdiem animateurs = 3 200 USD, avec une note de justification (petite ligne, 4,7 % du budget).",
      ],
    },
    highlight: "Piège classique : recourir au forfait par défaut sur une ligne importante par facilité de chiffrage. Le bailleur qui le découvre en instruction relit tout le reste du budget avec plus de suspicion.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir la bonne méthode de budgétisation',
    columns: ['Méthode', "Quand l'utiliser", 'Ce que le bailleur attend en contrepartie'],
    rows: [
      ['Activité par activité', 'Activités discrètes, ponctuelles, bien délimitées dans le temps', "Un sous-détail ligne par ligne rattaché explicitement à l'activité du cadre logique"],
      ['Coût unitaire', 'Coûts qui varient avec un volume (bénéficiaires, kits, tonnage, distance)', 'Un prix unitaire justifiable par un marché récent, un devis, ou un référentiel de coûts du secteur'],
      ['Forfait', 'Coûts partagés, frais divers, lignes à faible montant et forte dispersion', "Une note de justification expliquant pourquoi le détail n'est ni possible ni pertinent"],
    ],
  },
  {
    type: 'concept',
    title: 'Le forfait : défendable ou risqué ? Trois tests',
    body: "Avant d'écrire « Forfait » dans la colonne D du template, faites passer la ligne par trois tests. Une ligne qui échoue à un test se rechiffre en coût unitaire ou en activité par activité.",
    table: {
      columns: ['Test', 'Question', 'Ligne NFI qui passe', 'Ligne NFI qui échoue'],
      rows: [
        ['1. Poids', "La ligne pèse-t-elle peu dans le budget ? (repère de prudence KAS : moins de 5 à 6 %, à vérifier dans l'appel à projets)", 'Frais de fonctionnement : 4 000 / 68 800 = 5,8 %', 'Kits NFI : 36 000 / 68 800 = 52,3 %'],
        ['2. Dispersion', 'Le coût est-il composé de nombreuses petites dépenses difficiles à détailler ?', 'Communications, fournitures, électricité de l\'entrepôt', 'Achat de kits : un seul prix, un seul volume'],
        ['3. Preuve', 'Pouvez-vous écrire en trois phrases comment le montant a été calculé ?', 'Perdiem : 16 animateurs × 10 jours × 20 USD', 'Aucune note possible : le forfait est une devinette'],
      ],
    },
    pitfall: "Un forfait sans note de justification. Quand la ligne sera épuisée (le perdiem NFI est à 100 % au mois 8), vous n'aurez ni quantité ni prix unitaire pour négocier un complément.",
  },
  {
    type: 'concept',
    title: 'Multi-bailleurs : chaque enveloppe a son propre plafond',
    body: [
      "Sur un projet cofinancé, chaque ligne est rattachée à sa source de financement. ECHO et la fondation privée sont deux enveloppes juridiquement distinctes, même quand elles financent le même projet : un dépassement sur la part ECHO n'est jamais compensable par une sous-consommation sur la part des fonds privés.",
      "Piloter le seul total consolidé est donc une faute : il peut afficher un solde confortable alors qu'une enveloppe est presque vide. Le BFU se lit toujours ligne par ligne ET enveloppe par enveloppe.",
    ],
    table: {
      columns: ['Enveloppe', 'Budget', 'Consommé au 31/12/2026', 'Solde', '% consommé'],
      rows: [
        ['ECHO', '62 800', '49 950', '12 850', '79,5 %'],
        ['Fonds privés (Fondation Sigma)', '6 000', '5 160', '840', '86,0 %'],
        ['Total projet', '68 800', '55 110', '13 690', '80,1 %'],
      ],
    },
    pitfall: "Dire « il reste 13 690 USD sur le projet » à quatre mois de la fin. Sur la part Fonds privés, il reste 840 USD seulement ; et ces 840 USD ne pourront jamais payer un manque sur une ligne ECHO.",
  },
  {
    type: 'concept',
    title: "Budget, engagé, dépensé : lire les colonnes du BFU",
    body: [
      "Le BFU (Budget Follow-Up) distingue trois états pour chaque ligne : le Budget (allocation initiale ou révisée), l'Engagé (bons de commande émis, contrats signés, pas encore payés) et le Dépensé (factures effectivement payées). Si vous ne suivez que le dépensé, une ligne peut paraître saine à 40 % alors qu'elle est engagée à 95 %.",
      "Attention à la lecture du template : sa colonne D « Engagé cumulé (POs + dépenses) » regroupe déjà les bons de commande ET les dépenses payées ; la colonne E « Dont déjà payé » n'en est qu'une partie. Le Consommé total (F) est donc égal à D : ne jamais additionner D et E.",
    ],
    table: {
      columns: ['Notion de la théorie', 'Colonne du template', 'Exemple Kits NFI au 31/12/2026'],
      rows: [
        ['Budget', 'C — Budget total (=Budget!G6)', '36 000'],
        ['Engagé cumulé (non payé + payé)', 'D — Engagé cumulé (POs + dépenses)', '34 500'],
        ['Dépensé (payé)', 'E — Dont déjà payé', '30 000'],
        ['Engagé non payé', 'D − E (pas de colonne dédiée)', '4 500'],
        ['Consommé total = engagé non payé + dépensé', 'F — Consommé total (=D)', '34 500'],
        ['Solde disponible', 'G — Solde (=C−F)', '1 500'],
        ['% consommé', 'H — % consommé (=IFERROR(F/C,0))', '95,8 %'],
      ],
    },
    highlight: "Consommé total = Engagé non payé + Dépensé = (D − E) + E = D. Une facture payée ne doit figurer qu'une seule fois : dans D, et dans E si elle est payée.",
  },
  {
    type: 'concept',
    title: 'Le prorata temporis : le bon étalon pour juger un % consommé',
    body: "Le % consommé d'une ligne ne se juge jamais seul : il se compare au prorata temporis, c'est-à-dire à la part de la durée du projet déjà écoulée. Formule : prorata = mois écoulés ÷ durée totale en mois. Au 31 décembre 2026, le projet NFI en est à 8 mois sur 12, soit 66,7 %.",
    example: {
      title: 'Écart en points entre % consommé et prorata (mois 8 sur 12 = 66,7 %)',
      lines: [
        "Kits NFI : 95,8 % − 66,7 % = +29,2 points  → à analyser",
        "Perdiem animateurs : 100,0 % − 66,7 % = +33,3 points  → à expliquer par écrit",
        "Salaire coordinateur : 66,7 % − 66,7 % = 0,0 point  → au rythme",
        "Transport local : 58,3 % − 66,7 % = −8,3 points  → sous le rythme",
        "Enquêtes PDM : 25,0 % − 66,7 % = −41,7 points  → à confirmer : le suivi est prévu en fin de projet",
      ],
    },
    tip: "Le prorata linéaire est un étalon, pas une vérité : un achat de kits se concentre avant la distribution. Comparez aussi le consommé au chronogramme d'achats prévu (procédure 4, étape 3).",
    pitfall: "Conclure « tout va bien » parce qu'une ligne est sous 100 %. Une ligne à 75 % au mois 6 sur 12 brûle plus vite que le projet, même si elle reste nominalement sous son budget.",
  },
  {
    type: 'concept',
    title: 'Écart de change et écart opérationnel : deux causes à ne pas confondre',
    body: [
      "Le budget est chiffré à un taux de change budgété. Au paiement, le taux réel est différent. Cet écart de conversion gonfle ou masque l'écart du BFU sans aucun lien avec la performance opérationnelle : une ligne qui semble dériver de 15 % peut n'avoir aucun problème opérationnel.",
      "Ne pas isoler le change, c'est soit paniquer inutilement, soit laisser un vrai dépassement opérationnel se cacher derrière un effet de change favorable. L'effet total se décompose : (1 + effet total) = (1 + effet opérationnel) × (1 + effet de change).",
    ],
    example: {
      title: 'Manutention NFI au mois 7 : un effet de change qui masque un vrai dépassement',
      lines: [
        "Budget : 1,50 USD par ménage, soit 4 200 CDF au taux budgété de 2 800 CDF/USD.",
        "Réel : les journaliers sont payés 4 620 CDF par ménage (+10 %), au taux réel de 3 080 CDF/USD.",
        "4 620 CDF ÷ 3 080 = 1,50 USD : le BFU ne montre AUCUN écart, alors que le coût opérationnel a monté de 10 %.",
        "Effet opérationnel +10 %, effet de change −9,1 % : (1,10 × 0,909) − 1 = 0 %.",
      ],
    },
    highlight: "Le sens de l'effet de change dépend de la devise de facturation et de la devise de reporting : il peut gonfler le coût en USD (cas défavorable) ou le réduire (cas favorable, ci-dessus). Dans les deux cas, isolez-le.",
  },
  {
    type: 'stat-callout',
    stat: '~10 %',
    caption: 'Seuil de tolérance courant pour un virement de ligne sans avenant formel',
    context: "Un ordre de grandeur à vérifier systématiquement dans l'accord spécifique : le pourcentage exact, sa base de calcul (ligne ou accord entier), le délai de notification et l'exigence d'une simple notification ou d'une approbation préalable varient d'un bailleur à l'autre, et parfois d'un appel à projets à l'autre chez le même bailleur.",
  },
  {
    type: 'concept',
    title: 'La base de calcul du seuil change la conclusion',
    body: "Le même virement de 1 350 USD (de Transport local vers Kits NFI) donne trois pourcentages très différents selon la base retenue par l'accord. C'est pourquoi on relit la clause avant de décider, jamais de mémoire.",
    table: {
      columns: ['Base de calcul possible', 'Calcul', 'Résultat', 'Seuil de 10 % respecté ?'],
      rows: [
        ['Budget de la ligne bénéficiaire (Kits NFI)', '1 350 ÷ 36 000', '3,75 %', 'Oui'],
        ["Budget de la ligne d'origine (Transport local)", '1 350 ÷ 5 400', '25,0 %', 'Non'],
        ["Budget total de l'enveloppe ECHO", '1 350 ÷ 62 800', '2,1 %', 'Oui'],
      ],
    },
    pitfall: "Appliquer à tous vos bailleurs la base du dernier accord que vous avez lu. Une clause qui calcule le seuil sur la ligne d'origine rendrait ce même virement impossible sans avenant.",
  },
  {
    type: 'comparison-table',
    title: 'Virement de ligne ou avenant formel ?',
    columns: ['Critère', 'Virement de ligne', 'Avenant formel'],
    rows: [
      ['Nature du changement', 'Réallocation de fonds entre deux lignes, sans modification des activités', "Modification contractuelle : nature ou ampleur des activités, durée, zone, bénéficiaires"],
      ['Montant', 'Dans le seuil de tolérance de l\'accord (souvent ~10 %, base à vérifier)', 'Au-delà du seuil, ou si le bailleur l\'exige explicitement pour ce type de changement'],
      ['Démarche', 'Notification ou approbation écrite selon la clause, avec la note de virement', "Demande d'avenant au contrat de financement, avec négociation et délais"],
      ['Quand engager la dépense ?', 'Après notification ou approbation, selon la clause', "Après signature de l'avenant, jamais avant"],
      ['Exemple KAS', 'Kits NFI +1 350 USD financés par Transport local (2 000 ménages inchangés)', 'Passer de 2 000 à 2 300 ménages, ou prolonger le projet de 2 mois'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'BFU (Budget Follow-Up)', definition: "Tableau de suivi comparant, ligne par ligne, le budget alloué à l'engagé et au dépensé réels." },
      { term: 'Cadre logique', definition: "Tableau qui structure les objectifs, résultats et activités du projet ; point de départ de tout budget." },
      { term: 'Coût unitaire', definition: "Prix d'une unité (kit, ménage, rotation) multiplié par une quantité ; méthode auditable et comparable." },
      { term: 'Forfait', definition: "Montant fixe non détaillé, réservé aux petites lignes dispersées et accompagné d'une note de justification." },
      { term: 'Enveloppe bailleur', definition: "Part du budget financée par un bailleur donné, avec son plafond, ses règles d'éligibilité et son calendrier propres." },
      { term: 'Engagé cumulé', definition: "Dans le template : bons de commande et contrats signés ainsi que dépenses payées, depuis le début du projet." },
      { term: 'Dépensé', definition: "Montants effectivement décaissés, correspondant à des factures payées (colonne E du BFU)." },
      { term: 'Prorata temporis', definition: "Proportion de la durée du projet déjà écoulée ; étalon pour juger un taux de consommation." },
      { term: 'Reste à engager', definition: "Montant que l'équipe prévoit encore de commander ou de contracter d'ici la fin du projet." },
      { term: 'Estimation à terminaison', definition: "Consommé à date + reste à engager prévu : coût projeté de la ligne en fin de projet." },
      { term: 'Virement de ligne budgétaire', definition: "Réallocation de fonds d'une ligne excédentaire vers une ligne déficitaire, dans les limites de tolérance du bailleur, sans modification contractuelle formelle." },
      { term: 'Avenant', definition: "Modification contractuelle formelle de l'accord de financement, requise au-delà des seuils de tolérance ou pour un changement substantiel." },
      { term: 'Taux de change budgété vs réel', definition: "Écart entre le taux du chiffrage initial et le taux effectif au paiement, qui peut gonfler ou masquer un écart sans lien avec la performance." },
      { term: 'Narrative de planification annuelle', definition: "Document rédigé une fois par an qui explique le contexte, le bilan et les priorités derrière les chiffres du budget et du BFU." },
    ],
  },
  {
    type: 'concept',
    title: "Votre feuille de route : 7 procédures, dans l'ordre du terrain",
    body: "Les procédures suivent la vie réelle d'un budget : on le chiffre, on le consolide et on le valide ; puis chaque mois on le suit, on analyse les écarts, on décide d'un virement ou d'un avenant, on le documente ; et chaque année on en écrit le récit.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Chiffrer le budget ligne par ligne', 'Chaque nouvelle proposition', 'Chiffrage justifié (devis, notes de forfait)', '5'],
        ['2. Consolider dans le template « Budget »', 'Avant soumission', 'Onglet Budget validé, totaux par bailleur', '5'],
        ['3. Alimenter le BFU mensuel', 'Chaque mois, sans exception', 'BFU à jour + commentaires de lignes', '6'],
        ['4. Analyser un écart', 'Dès qu\'une ligne est signalée', 'Estimation à terminaison + décomposition', '5'],
        ['5. Décider : virement ou avenant', "Dès que le seuil est menacé", 'Fiche de décision chiffrée', '5'],
        ['6. Rédiger la note de virement', 'À chaque virement', 'Note signée d\'une page', '5'],
        ['7. Rédiger la narrative annuelle', 'Une fois par an', 'Narrative + chronogramme', '6'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Chiffrer le budget ligne par ligne ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Lister toutes les activités du cadre logique et les croiser avec le programme',
    intro: "Une activité oubliée à ce stade devient, six mois plus tard, une dépense sans ligne budgétaire pour l'absorber. Entrées : le cadre logique de la proposition NFI Masisi et la note de cadrage ECHO. Fil rouge : le 6 avril 2026, Grace M. vous demande le budget pour le 15 avril.",
    steps: [
      {
        title: 'Extraire les activités du cadre logique',
        actions: [
          "Ouvrez le cadre logique (ou le narratif) de la proposition NFI Masisi.",
          "Recopiez dans un tableau chaque activité avec son code, son volume (ménages, sessions, enquêtes) et son calendrier.",
          "Ajoutez les activités transversales que le cadre logique ne montre pas toujours : coordination, suivi-évaluation, logistique.",
        ],
      },
      {
        title: "Croiser la liste avec l'équipe programme",
        actions: [
          "Envoyez la liste à Aimé T. (coordinateur) et à Patrick K. (logisticien) avec une seule question : « Quelle activité manque, quel volume est faux ? »",
          "Tenez une réunion de 45 minutes, liste imprimée en main, et notez chaque ajout.",
          "Faites confirmer la liste finale par e-mail.",
        ],
      },
    ],
    example: {
      title: 'Du premier jet à la liste validée (8 avril 2026)',
      lines: [
        "Version 1 (finance seule) : A1 Achat et distribution de 2 000 kits — A2 Sensibilisation — A3 Coordination.",
        "Remarque de Patrick K. : le chargement et le déchargement par des journaliers n'apparaissent nulle part.",
        "Remarque d'Aimé T. : ECHO attend un suivi post-distribution (enquête PDM) pour mesurer l'usage des kits.",
        "Liste validée : A1 Distribution NFI (achat, transport, manutention) — A2 Sensibilisation communautaire — A3 Suivi post-distribution — A4 Coordination et gestion.",
      ],
    },
    result: "Une liste validée par écrit par le coordinateur et la logistique : 4 activités, chacune avec son volume et son calendrier.",
    pitfall: "Construire le budget seul. Un budget sans validation du programme est contesté en interne dès le premier mois de mise en œuvre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Décomposer chaque activité en ressources et en lignes budgétaires',
    intro: "Chaque activité consomme des ressources : personnel, matériel, transport, prestataires, fonctionnement. Chaque ressource significative devient une ligne budgétaire (colonne B de l'onglet « Budget »). Entrée : la liste validée des 4 activités.",
    steps: [
      {
        title: 'Lister les ressources de chaque activité',
        actions: [
          "Pour chaque activité, posez cinq questions : qui travaille ? qu'achète-t-on ? comment cela se déplace-t-il ? quel prestataire intervient ? quels frais diffus ?",
          "Écrivez une ressource par ligne, avec son unité naturelle (kit, jour, rotation, session).",
        ],
      },
      {
        title: 'Regrouper en lignes budgétaires',
        actions: [
          "Regroupez les ressources minuscules dans une même ligne ; séparez les ressources qui n'ont ni la même unité ni le même bailleur.",
          "Donnez à chaque ligne un intitulé court et stable : vous le retrouverez à l'identique dans le BFU.",
        ],
      },
    ],
    table: {
      columns: ['Activité', 'Ressources identifiées', 'Lignes retenues (colonne B)'],
      rows: [
        ['A1 Distribution NFI', 'Kits, camions, journaliers de chargement', 'Kits NFI ; Transport local ; Manutention & chargement'],
        ['A2 Sensibilisation communautaire', '16 animateurs, formation de 3 jours', 'Perdiem animateurs ; Formation des animateurs'],
        ['A3 Suivi post-distribution', 'Enquêteurs, superviseur, transport, analyse', 'Enquêtes PDM'],
        ['A4 Coordination et gestion', 'Coordinateur à temps partiel, communications, fournitures', 'Salaire coordinateur (% temps) ; Frais de fonctionnement du bureau'],
      ],
    },
    result: "8 lignes budgétaires, chacune rattachée à une activité, aucune ressource orpheline.",
    tip: "Si une ressource ne rentre dans aucune activité, soit il manque une activité, soit c'est un coût indirect : à traiter selon les règles du bailleur, jamais caché dans une ligne d'activité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Choisir la méthode de chiffrage ligne par ligne',
    intro: "La méthode détermine la preuve que le bailleur attendra. Entrée : les 8 lignes de l'étape 2 et le texte de l'appel à projets (certaines lignes peuvent être imposées en coût unitaire).",
    steps: [
      {
        title: 'Poser les trois questions dans l\'ordre',
        actions: [
          "Question 1 : « Le coût varie-t-il avec un volume (ménages, kits, distance) ? » Oui → coût unitaire.",
          "Question 2 : « Est-ce une activité ponctuelle, bien délimitée dans le temps ? » Oui → activité par activité.",
          "Question 3 : « Est-ce une petite ligne de coûts partagés ou dispersés, dont le détail coûterait plus qu'il n'apporte ? » Oui → forfait, avec note de justification et les trois tests de la théorie.",
        ],
      },
      {
        title: 'Inscrire la méthode et sa raison',
        actions: [
          "Notez pour chaque ligne la méthode retenue et la raison en une phrase : c'est elle que vous citerez en instruction.",
          "Vérifiez dans l'appel à projets qu'aucune ligne n'impose une autre méthode.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Méthode (colonne D)', 'Raison'],
      rows: [
        ['Kits NFI', 'Coût unitaire', 'Varie avec le nombre de ménages (2 000 kits)'],
        ['Transport local', 'Coût unitaire', 'Varie avec le nombre de rotations'],
        ['Manutention & chargement', 'Coût unitaire', 'Un coût par ménage servi'],
        ['Salaire coordinateur (% temps)', 'Activité par activité', 'Temps affecté au projet, contrat connu'],
        ['Enquêtes PDM', 'Activité par activité', 'Activité ponctuelle de fin de projet'],
        ['Formation des animateurs', 'Activité par activité', 'Formation unique de 3 jours'],
        ['Perdiem animateurs', 'Forfait', '4,7 % du budget, calcul simple en note'],
        ['Frais de fonctionnement du bureau', 'Forfait', '5,8 % du budget, dépenses diffuses'],
      ],
    },
    result: "Chaque ligne porte une méthode et une raison ; aucune ligne significative n'est au forfait.",
    pitfall: "Mettre Kits NFI (52 % du budget) au forfait « pour aller vite ». Le bailleur relirait tout le budget avec suspicion, et vous n'auriez aucun prix unitaire à défendre le jour d'une hausse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Chiffrer les lignes en coût unitaire et archiver les devis',
    intro: "Coût unitaire = prix unitaire × quantité. La quantité vient du cadre logique ; le prix doit être justifiable par un devis, un marché récent ou un référentiel du secteur. Fil rouge : les trois lignes en coût unitaire.",
    steps: [
      {
        title: 'Déterminer la quantité',
        actions: [
          "Dérivez-la du cadre logique : 2 000 ménages → 2 000 kits et 2 000 manutentions ; 6 sites × 2 passages → 12 rotations.",
          "Écrivez le calcul de quantité dans la note de chiffrage : un auditeur doit pouvoir le refaire.",
        ],
      },
      {
        title: 'Comparer au moins trois devis',
        actions: [
          "Demandez à Patrick K. trois devis sur le même cahier des charges (même contenu de kit, même trajet).",
          "Comparez dans un tableau ; retenez le prix conforme le plus bas, pas le prix le plus bas tout court.",
          "Archivez les devis datés, avec leur durée de validité, dans le dossier « Justification chiffrage ».",
        ],
      },
    ],
    example: {
      title: 'Chiffrage des trois lignes en coût unitaire',
      lines: [
        "Kit NFI : bâche 4,50 + 2 couvertures 6,00 + jerrycan 2,00 + kit cuisine 3,50 + moustiquaire 2,00 = 18,00 USD.",
        "Devis 1 Comptoir Grands Lacs : 18,00 — Devis 2 Kivu Équipements : 18,60 — Devis 3 Bukavu Négoce : 19,40. Retenu : 18,00 (conforme, valable 60 jours).",
        "Kits NFI : 2 000 kits × 18 USD = 36 000 USD.",
        "Transport local : devis camion 5 t Goma–Masisi aller-retour 450 / 480 / 520 USD. Retenu : 450. 6 sites × 2 passages = 12 rotations × 450 = 5 400 USD.",
        "Manutention : 1,50 USD par ménage servi (tarif des journaliers constaté sur le projet Nutrition) × 2 000 ménages = 3 000 USD.",
      ],
    },
    result: "Trois lignes chiffrées, chacune avec son calcul de quantité et ses trois devis archivés.",
    tip: "Un devis vaut 60 jours, un projet dure 12 mois. Si l'achat est étalé (kits commandés en plusieurs lots), écrivez dans la note votre hypothèse de prix sur la période : c'est la première chose qu'on vous demandera le jour où le prix bougera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Chiffrer en activité par activité et en forfait, et rédiger les justifications",
    intro: "Les cinq lignes restantes ne se chiffrent pas par un prix unique. Les lignes « activité par activité » se décomposent en sous-lignes ; les forfaits exigent une note de trois phrases. Entrée : les 5 lignes concernées.",
    steps: [
      {
        title: 'Détailler les lignes activité par activité',
        actions: [
          "Pour chaque ligne, listez les sous-ressources avec quantité et prix.",
          "Additionnez : le total sera saisi dans l'onglet Budget avec Quantité = 1 et Coût unitaire = total.",
          "Conservez le détail dans la note de chiffrage, rattaché à l'activité du cadre logique.",
        ],
      },
      {
        title: 'Rédiger la note des forfaits',
        actions: [
          "Écrivez trois phrases par forfait : ce que couvre la ligne, comment le montant a été calculé, pourquoi le détail n'est ni possible ni pertinent.",
          "Faites valider la note par Grace M. avant de saisir « Forfait ».",
        ],
      },
    ],
    example: {
      title: 'Les trois lignes activité par activité',
      lines: [
        "Salaire coordinateur : coût employeur 2 400 USD/mois × 12 mois × 1/3 de temps sur le projet = 9 600 USD.",
        "Enquêtes PDM : 8 enquêteurs × 10 jours × 25 USD = 2 000 ; formation des enquêteurs 8 × 2 jours × 25 = 400 ; transport 10 jours × 120 = 1 200 ; superviseur 15 jours × 40 = 600 ; analyse et restitution 600 → 4 800 USD.",
        "Formation des animateurs : formateur 3 j × 200 = 600 ; salle 3 j × 60 = 180 ; restauration 16 × 3 × 10 = 480 ; transport des participants 16 × 3 × 25 = 1 200 ; supports 16 × 15 = 240 ; attestations 100 → 2 800 USD.",
      ],
    },
    table: {
      columns: ['Forfait', 'Montant', 'Note de justification (trois phrases)'],
      rows: [
        ['Perdiem animateurs', '3 200 USD', "Couvre l'indemnité des animateurs lors des sessions de terrain. Calcul : 16 animateurs × 10 jours × 20 USD (barème interne KAS). Le détail par session n'est pas budgété car les dates et sites varient selon la sécurité."],
        ['Frais de fonctionnement du bureau', '4 000 USD', "Couvre communications, fournitures et électricité de l'entrepôt de Masisi. Environ 333 USD par mois pendant 12 mois. Ce sont de multiples dépenses diffuses de moins de 100 USD : les détailler coûterait plus que la ligne."],
      ],
    },
    result: "Le dossier « Justification chiffrage » contient pour chaque ligne un devis, un calcul de quantité, un détail ou une note de forfait.",
    pitfall: "Écrire la note du forfait après coup, au moment de l'audit. À ce moment-là, personne ne se souvient d'où venait le chiffre.",
  },

  // ─────────────── PROCÉDURE 2 — Consolider dans le template Budget ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: "Ouvrir le template et lire l'onglet « Budget » colonne par colonne",
    intro: "Le classeur budget-suivi-bfu-multi-bailleurs.xlsx contient deux onglets : « Budget » (le chiffrage consolidé par ligne et par bailleur) et « BFU » (le suivi mensuel). Commencez par comprendre ce que chaque colonne attend.",
    steps: [
      {
        title: 'Ouvrir et sauvegarder sous votre nom',
        actions: [
          "Ouvrez 04-templates/budget-suivi-bfu-multi-bailleurs.xlsx, onglet « Budget ».",
          "Enregistrez immédiatement sous un nouveau nom : BFU_NFI_Masisi_v1.xlsx. Ne travaillez jamais sur l'original du template.",
          "Lisez les en-têtes en ligne 4 et les 4 lignes d'exemple (lignes 5 à 8).",
        ],
      },
      {
        title: 'Repérer les listes et les formules',
        actions: [
          "Cliquez en C5 puis en D5 : des listes déroulantes proposent les bailleurs (ECHO, Fonds privés, USAID/BHA, UE) et les méthodes (Activité par activité, Coût unitaire, Forfait). La validation couvre les lignes 5 à 13.",
          "Cliquez en G5 : la formule =E5*F5 calcule le budget total ; elle ne se tape jamais à la main.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'En-tête', 'Ce que vous y mettez', 'Contrôle'],
      rows: [
        ['A', 'Activité', "L'activité du cadre logique", "Intitulé identique à celui validé à la procédure 1"],
        ['B', 'Ligne budgétaire', 'La ligne (ex. Kits NFI)', 'Même intitulé que dans le BFU'],
        ['C', 'Bailleur', 'ECHO, Fonds privés, USAID/BHA ou UE', 'Liste déroulante, lignes 5 à 13'],
        ['D', 'Méthode', 'Activité par activité, Coût unitaire ou Forfait', 'Liste déroulante, lignes 5 à 13'],
        ['E', 'Quantité', 'Nombre d\'unités ; 1 pour un forfait ou une activité par activité', 'Nombre, jamais du texte'],
        ['F', 'Coût unitaire (USD)', 'Prix unitaire ; total détaillé si Quantité = 1', 'Nombre sans symbole monétaire'],
        ['G', 'Budget total (USD)', '=E×F, calculé', 'Formule à ne pas écraser'],
      ],
    },
    result: "Vous avez un classeur nommé BFU_NFI_Masisi_v1.xlsx et vous savez dire, pour chaque colonne, ce qu'elle attend et comment elle est contrôlée.",
    pitfall: "Taper un montant directement en G. Le jour où vous changez une quantité, le total ne bouge plus et le BFU, qui lit G, devient faux sans rien signaler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Saisir les 8 lignes (colonnes A à F) et laisser la colonne G se calculer',
    intro: "Vous allez remplacer les lignes d'exemple par vos 8 lignes chiffrées à la procédure 1. Le template n'a des formules qu'en G5:G8 : vous les prolongerez.",
    steps: [
      {
        title: 'Remplacer les lignes 5 à 8 puis ajouter les lignes 9 à 12',
        actions: [
          "En lignes 5 à 8, remplacez les exemples par Transport local, Kits NFI, Perdiem animateurs et Salaire coordinateur (même ordre que le BFU).",
          "En lignes 9 à 12, saisissez Manutention & chargement, Enquêtes PDM, Frais de fonctionnement du bureau et Formation des animateurs.",
          "Choisissez le bailleur et la méthode dans les listes déroulantes, jamais au clavier.",
        ],
      },
      {
        title: 'Prolonger la formule',
        actions: [
          "Sélectionnez G8, copiez, collez en G9:G12.",
          "Vérifiez que chaque cellule G affiche bien E × F.",
          "Si vous dépassez la ligne 13, étendez la validation : sélectionnez C5:C40 puis Données > Validation des données, source de la liste identique.",
        ],
      },
    ],
    example: {
      title: "Onglet « Budget » après saisie (lignes 5 à 12)",
      lines: [
        "5 | Distribution NFI | Transport local | ECHO | Coût unitaire | 12 | 450 | 5 400",
        "6 | Distribution NFI | Kits NFI | ECHO | Coût unitaire | 2 000 | 18 | 36 000",
        "7 | Sensibilisation communautaire | Perdiem animateurs | Fonds privés | Forfait | 1 | 3 200 | 3 200",
        "8 | Coordination projet | Salaire coordinateur (% temps) | ECHO | Activité par activité | 1 | 9 600 | 9 600",
        "9 | Distribution NFI | Manutention & chargement | ECHO | Coût unitaire | 2 000 | 1,50 | 3 000",
        "10 | Suivi post-distribution | Enquêtes PDM | ECHO | Activité par activité | 1 | 4 800 | 4 800",
        "11 | Coordination projet | Frais de fonctionnement du bureau | ECHO | Forfait | 1 | 4 000 | 4 000",
        "12 | Sensibilisation communautaire | Formation des animateurs | Fonds privés | Activité par activité | 1 | 2 800 | 2 800",
      ],
    },
    result: "8 lignes saisies, aucune cellule vide de A à F, la colonne G calculée par formule sur les 8 lignes.",
    tip: "Les lignes 5 à 8 du template reprennent déjà les valeurs d'un petit projet d'exemple : si vous les gardez par commodité, relisez chaque chiffre. Ne laissez jamais une valeur d'exemple dans un budget réel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Totaliser et contrôler les enveloppes par bailleur',
    intro: "Un budget multi-bailleurs se contrôle enveloppe par enveloppe, pas seulement au total. Entrée : les montants inscrits dans les accords signés (62 800 USD pour ECHO, 6 000 USD pour Fondation Sigma).",
    steps: [
      {
        title: 'Calculer le total général et les totaux par bailleur',
        actions: [
          "En F14, saisissez « TOTAL » ; en G14, saisissez =SOMME(G5:G12) (en anglais : =SUM(G5:G12)).",
          "En A16 et A17, saisissez « ECHO » et « Fonds privés » ; en G16, saisissez =SOMME.SI(C5:C12;\"ECHO\";G5:G12) ; en G17, la même formule avec \"Fonds privés\".",
          "Ces cellules sont en dehors du tableau du template : elles ne modifient ni ses colonnes ni ses listes.",
        ],
      },
      {
        title: 'Comparer aux accords',
        actions: [
          "Reportez dans un petit tableau le montant de chaque accord signé et le total de l'onglet Budget.",
          "Exigez un écart de 0 pour chaque bailleur, avant d'envoyer quoi que ce soit.",
          "Vérifiez que chaque ligne n'a qu'un seul bailleur et que les noms sont orthographiés à l'identique (la liste déroulante vous y aide).",
        ],
      },
    ],
    table: {
      columns: ['Bailleur', "Montant de l'accord", "Total de l'onglet Budget", 'Écart'],
      rows: [
        ['ECHO', '62 800', '62 800', '0'],
        ['Fonds privés (Fondation Sigma)', '6 000', '6 000', '0'],
        ['Total', '68 800', '68 800', '0'],
      ],
    },
    result: "Les totaux par bailleur égalent exactement les montants des accords : vous pouvez affirmer que chaque enveloppe est respectée.",
    pitfall: "Écrire « Fond privé » sur une ligne et « Fonds privés » sur une autre. Le SOMME.SI les traite comme deux bailleurs, et une enveloppe semble moins financée qu'elle ne l'est.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Rattacher une ligne cofinancée à chaque bailleur (une ligne par bailleur)',
    intro: "Quand deux bailleurs financent la même dépense selon un pourcentage convenu, le template s'attend à une ligne par bailleur. Le budget NFI n'en contient pas : l'exemple ci-dessous est un cas d'école hors budget NFI, que vous rencontrerez sur d'autres projets (cofinancement 70 % ECHO, 30 % fonds privés).",
    steps: [
      {
        title: 'Dédoubler la ligne',
        actions: [
          "Calculez le coût total de la ligne comme si un seul bailleur la finançait.",
          "Créez deux lignes avec le même intitulé de ligne et la même activité, une par bailleur.",
          "Répartissez la quantité (ou le coût unitaire) au prorata convenu, en gardant le même prix unitaire quand c'est possible.",
        ],
      },
      {
        title: 'Contrôler la somme',
        actions: [
          "Additionnez les deux lignes : elles doivent redonner exactement le coût total.",
          "Dans le BFU, suivez les deux lignes séparément : le couple (ligne, bailleur) est la clé.",
        ],
      },
    ],
    example: {
      title: "Location d'un véhicule de projet LC-05 cofinancée 70 % / 30 % (exemple hors budget NFI)",
      lines: [
        "Coût total : 12 mois × 600 USD = 7 200 USD.",
        "Ligne ECHO : 12 mois × 420 USD = 5 040 USD (70 %).",
        "Ligne Fonds privés : 12 mois × 180 USD = 2 160 USD (30 %).",
        "Contrôle : 5 040 + 2 160 = 7 200 USD ✔",
      ],
    },
    result: "Chaque bailleur voit, dans son enveloppe, exactement la part qui le concerne ; la somme des deux lignes redonne le coût total.",
    pitfall: "Suivre dans le BFU une seule ligne consolidée de 7 200 USD. Un dépassement sur la part ECHO serait alors invisible tant que la part Fonds privés n'est pas consommée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Valider le budget en interne avant la soumission',
    intro: "Un budget soumis sans relecture croisée est un budget que vous devrez réviser après signature, ce qui peut déjà nécessiter un avenant sur un document qui n'a même pas démarré. Entrée : le classeur BFU_NFI_Masisi_v1.xlsx et le dossier de justification.",
    steps: [
      {
        title: 'Faire relire par trois personnes',
        actions: [
          "Coordination (Aimé T.) : activités, volumes, calendrier.",
          "Logistique (Patrick K.) : prix unitaires et devis.",
          "Finance Manager (Grace M.) : totaux, enveloppes par bailleur, méthodes et notes de forfait.",
        ],
      },
      {
        title: 'Figer et archiver',
        actions: [
          "Corrigez les remarques, puis enregistrez sous BFU_NFI_Masisi_v1_validé_2026-04-13.xlsx.",
          "Faites signer et dater la page de validation par les trois relecteurs.",
          "Classez le fichier, la page signée et le dossier de devis dans « 00_Budgets_signés ».",
        ],
      },
    ],
    example: {
      title: 'Page de validation interne (extrait)',
      lines: [
        "Coordination — Aimé T. : activités et volumes conformes au cadre logique ✔ 12/04/2026",
        "Logistique — Patrick K. : 3 devis par ligne en coût unitaire, prix valables ✔ 12/04/2026",
        "Finance Manager — Grace M. : totaux 62 800 + 6 000 = 68 800, notes de forfait ✔ 13/04/2026",
        "Fichier figé : BFU_NFI_Masisi_v1_validé_2026-04-13.xlsx",
      ],
    },
    result: "Un budget relu par trois fonctions, signé, daté, figé et classé : la version v1 ne bougera plus jusqu'à un éventuel virement ou avenant.",
    pitfall: "Corriger la v1 « discrètement » après coup. Toute modification ultérieure se fait dans une nouvelle version (v2…) référencée à sa cause : virement, avenant.",
  },

  // ─────────────── PROCÉDURE 3 — Alimenter le BFU mensuel ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: "Préparer l'onglet « BFU » pour toutes vos lignes",
    intro: "L'onglet « BFU » lit le budget dans l'onglet « Budget » et attend deux saisies chaque mois : l'engagé cumulé et le payé. Le template n'a des formules que pour 4 lignes : vous les prolongez pour vos 8 lignes avant la première saisie.",
    steps: [
      {
        title: 'Aligner les lignes sur l\'onglet Budget',
        actions: [
          "En A5:B12, saisissez les 8 lignes et leur bailleur, avec exactement les mêmes intitulés que dans l'onglet Budget.",
          "En C9:C12, saisissez =Budget!G9, =Budget!G10, =Budget!G11 et =Budget!G12 (les lignes 5 à 8 sont déjà liées).",
          "Copiez F8:H8 vers F9:H12 pour prolonger les formules F, G et H.",
        ],
      },
      {
        title: 'Étendre la mise en forme conditionnelle',
        actions: [
          "Sélectionnez H5, puis Accueil > Mise en forme conditionnelle > Gérer les règles.",
          "Modifiez « S'applique à » : =$H$5:$H$12 au lieu de =$H$5:$H$8. La règle du template passe en rouge toute valeur supérieure à 85 %.",
          "En ligne 13, ajoutez un total : =SOMME(C5:C12), =SOMME(D5:D12), =SOMME(E5:E12), =SOMME(F5:F12), =SOMME(G5:G12) et =IFERROR(F13/C13,0).",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'En-tête', 'Nature', 'Formule du template'],
      rows: [
        ['A, B', 'Ligne budgétaire, Bailleur', 'Texte', 'Identique à l\'onglet Budget'],
        ['C', 'Budget total', 'Calculée', '=Budget!G5 (lignes suivantes : G6, G7…)'],
        ['D', 'Engagé cumulé (POs + dépenses)', 'Saisie mensuelle', '—'],
        ['E', 'Dont déjà payé (dépensé)', 'Saisie mensuelle', '—'],
        ['F', 'Consommé total', 'Calculée', '=D5'],
        ['G', 'Solde', 'Calculée', '=C5-F5'],
        ['H', '% consommé', 'Calculée', '=IFERROR(F5/C5,0) (SIERREUR en version française)'],
      ],
    },
    result: "8 lignes en rangées 5 à 12, formules prolongées, règle rouge étendue jusqu'à H12, total en ligne 13. Test : modifiez une quantité dans l'onglet Budget, la cellule C correspondante doit changer.",
    pitfall: "Saisir un montant en dur dans la colonne C. Le BFU ne suivrait plus les virements et avenants que vous ferez dans l'onglet Budget.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Fixer le calendrier mensuel du BFU et séparer les fonctions',
    intro: "Le BFU n'a de valeur que mis à jour chaque mois, pendant qu'une action corrective reste possible. Un BFU consulté une seule fois, au rapport final, documente un problème qu'il est déjà trop tard pour corriger. Fixez un calendrier et des responsabilités.",
    steps: [
      {
        title: 'Écrire le calendrier du BFU',
        actions: [
          "Fixez les jours ouvrés J1 à J5 après la fin de chaque mois, avec un responsable pour chacun.",
          "Affichez le calendrier au bureau finance et envoyez-le à tous les coordinateurs.",
        ],
      },
      {
        title: 'Séparer engagement, paiement et suivi',
        actions: [
          "Celui qui engage (logistique, coordinateurs) n'est pas celui qui paie (caisse, trésorerie) ni celui qui suit (finance).",
          "Exigez qu'aucune commande ne parte sans copie du bon de commande à la finance, le jour de sa signature.",
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Action', 'Qui'],
      rows: [
        ['J1', 'Clôturer les saisies du mois ; extraire la grille de codification et le registre des engagements', 'Finance Officer'],
        ['J2', 'Rapprocher les bons de commande et contrats signés avec la logistique', 'Finance Officer et Patrick K.'],
        ['J3', 'Saisir D et E, vérifier les formules', 'Finance Officer'],
        ['J4', 'Relire le BFU et valider', 'Grace M.'],
        ['J5', 'Envoyer le BFU au coordinateur, avec les commentaires des lignes signalées', 'Finance Officer'],
      ],
    },
    result: "Un calendrier affiché au bureau : le premier BFU du projet NFI (mois de mai 2026) part le 5 juin 2026, et chaque suivant le cinquième jour ouvré.",
    tip: "Le BFU qui part à J5 est bien plus utile qu'un BFU parfait à J20. Mieux vaut une ligne marquée « À confirmer » qu'un retard : les décisions de virement se prennent sur la base du dernier BFU.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: "Saisir l'engagé cumulé (colonne D) ligne par ligne",
    intro: "La colonne D « Engagé cumulé (POs + dépenses) » reçoit, pour chaque ligne et depuis le début du projet, tout ce qui est contractuellement engagé : bons de commande émis, contrats signés, factures reçues et dépenses payées. Fil rouge : clôture de décembre 2026.",
    steps: [
      {
        title: 'Rassembler les engagements de la ligne',
        actions: [
          "Dans le registre des engagements du module 01, filtrez la ligne et le bailleur ; ajoutez les dépenses déjà payées de la grille de codification.",
          "Rapprochez avec Patrick K. la liste des bons de commande émis : aucun BC ne doit manquer au registre.",
          "Additionnez : bons de commande et contrats signés + factures reçues + paiements effectués = engagé cumulé.",
        ],
      },
      {
        title: 'Saisir le cumul, jamais le mois',
        actions: [
          "Saisissez dans D le total cumulé depuis le 1er mai 2026, pas le montant du mois.",
          "Contrôlez que la valeur est supérieure ou égale à celle du mois précédent : un engagé cumulé ne diminue que si un contrat a été annulé (à documenter).",
        ],
      },
    ],
    example: {
      title: 'Colonne D au 31/12/2026',
      lines: [
        "D5 Transport local : 7 rotations × 450 = 3 150 USD.",
        "D6 Kits NFI : BC-NFI-004 (650 kits × 18 = 11 700) + BC-NFI-011 (1 200 kits × 19 = 22 800) = 34 500 USD.",
        "D7 Perdiem animateurs : 3 200 USD (forfait entièrement engagé).",
        "D8 Salaire coordinateur : 8 mois × 800 = 6 400 USD.",
        "D9 Manutention : 1 400 ménages servis × 1,50 = 2 100 USD.",
        "D10 Enquêtes PDM : 1 200 USD (BC-NFI-017, location des véhicules des enquêtes).",
        "D11 Frais de fonctionnement : 2 600 USD.",
        "D12 Formation des animateurs : 1 960 USD.",
      ],
    },
    result: "Pour chaque ligne, D reprend le cumul de tous les engagements et dépenses depuis le début du projet, et se rapproche du registre.",
    pitfall: "Ne saisir que les factures reçues. Un BFU qui oublie les bons de commande non encore facturés annonce une ligne saine à 40 % alors qu'elle est engagée à 95 %.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Saisir le dépensé (colonne E) et contrôler que E ne dépasse jamais D',
    intro: "La colonne E « Dont déjà payé » reçoit, pour chaque ligne, la part de D effectivement décaissée. Sa différence avec D, l'engagé non payé, est ce qui sortira de votre trésorerie dans les semaines à venir.",
    steps: [
      {
        title: 'Saisir les paiements',
        actions: [
          "Dans la grille de codification (module 01), additionnez par ligne les paiements prouvés par un relevé bancaire ou une pièce de caisse.",
          "Saisissez ce cumul en E : pas de facture reçue mais non payée, pas d'acompte sans pièce.",
        ],
      },
      {
        title: 'Contrôler la cohérence',
        actions: [
          "Calculez D − E pour chaque ligne : cet engagé non payé doit être positif ou nul et se retrouver dans le registre (reste à payer).",
          "Si E est supérieur à D, un engagement manque : retrouvez le bon de commande ou le contrat avant de poursuivre.",
          "Comparez le total de E aux sorties de la banque et de la caisse du projet.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Bailleur', 'D Engagé cumulé', 'E Payé', 'Engagé non payé (D − E)'],
      rows: [
        ['Transport local', 'ECHO', '3 150', '2 250', '900'],
        ['Kits NFI', 'ECHO', '34 500', '30 000', '4 500'],
        ['Perdiem animateurs', 'Fonds privés', '3 200', '2 900', '300'],
        ['Salaire coordinateur', 'ECHO', '6 400', '6 400', '0'],
        ['Manutention & chargement', 'ECHO', '2 100', '2 100', '0'],
        ['Enquêtes PDM', 'ECHO', '1 200', '0', '1 200'],
        ['Frais de fonctionnement', 'ECHO', '2 600', '2 400', '200'],
        ['Formation des animateurs', 'Fonds privés', '1 960', '1 960', '0'],
        ['Total', '', '55 110', '48 010', '7 100'],
      ],
    },
    result: "Pour chaque ligne E ≤ D, et le total payé (48 010 USD) se retrouve dans les sorties de banque et de caisse. L'engagé non payé de 7 100 USD est la prévision de décaissement des semaines à venir.",
    tip: "Kits NFI : les 30 000 USD payés = 11 700 (BC-004, virement du 15/07) + 11 400 (acompte BC-011) + 6 900 (deuxième tranche BC-011). Il reste 4 500 USD dus sur BC-011, qui sont exactement D − E.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Lire les colonnes calculées et les signaux de la mise en forme conditionnelle',
    intro: "Une fois D et E saisies, les colonnes F, G et H se calculent seules. Votre travail est de lire le résultat, ligne par ligne ET par bailleur, sans vous fier à la seule couleur.",
    steps: [
      {
        title: 'Lire ligne par ligne',
        actions: [
          "Lisez F (consommé), G (solde) et H (% consommé) pour chaque ligne.",
          "Repérez les cellules H en rouge : la règle du template se déclenche au-delà de 85 % de consommation.",
          "Notez aussi les lignes proches de 100 % de solde nul, même si elles ne sont pas rouges.",
        ],
      },
      {
        title: 'Lire enveloppe par enveloppe',
        actions: [
          "Sous la note de la ligne 15, dans une zone libre, saisissez en A20:E20 les en-têtes Bailleur, Budget, Consommé, Solde, % consommé.",
          "En ligne 21 pour ECHO, saisissez =SOMME.SI(B5:B12;\"ECHO\";C5:C12) en B21 et =SOMME.SI(B5:B12;\"ECHO\";F5:F12) en C21 ; D21 = B21−C21 ; E21 = C21/B21.",
          "Répétez en ligne 22 pour « Fonds privés ».",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Budget', 'Consommé', 'Solde', '% consommé', 'Signal du template'],
      rows: [
        ['Transport local', '5 400', '3 150', '2 250', '58,3 %', '—'],
        ['Kits NFI', '36 000', '34 500', '1 500', '95,8 %', 'ROUGE'],
        ['Perdiem animateurs', '3 200', '3 200', '0', '100,0 %', 'ROUGE'],
        ['Salaire coordinateur', '9 600', '6 400', '3 200', '66,7 %', '—'],
        ['Manutention & chargement', '3 000', '2 100', '900', '70,0 %', '—'],
        ['Enquêtes PDM', '4 800', '1 200', '3 600', '25,0 %', '—'],
        ['Frais de fonctionnement', '4 000', '2 600', '1 400', '65,0 %', '—'],
        ['Formation des animateurs', '2 800', '1 960', '840', '70,0 %', '—'],
        ['Total projet', '68 800', '55 110', '13 690', '80,1 %', ''],
      ],
    },
    result: "Deux lignes rouges (Kits NFI et Perdiem animateurs), un total à 80,1 %, et deux enveloppes lues séparément : ECHO à 79,5 % avec 12 850 USD de solde, Fonds privés à 86,0 % avec 840 USD de solde.",
    pitfall: "Se rassurer parce qu'une cellule n'est pas rouge. Le seuil de 85 % est une consommation absolue : il ne dit rien du rythme. Une ligne à 70 % au mois 3 serait un problème grave et resterait blanche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Comparer au prorata temporis et documenter chaque ligne signalée',
    intro: "Une ligne signalée n'est pas nécessairement un problème, mais elle exige une explication écrite avant le mois suivant, jamais un report silencieux. Il faut donc un étalon de rythme dans le classeur.",
    steps: [
      {
        title: 'Poser le prorata temporis dans le classeur',
        actions: [
          "Dans la zone libre sous la note, saisissez A17 « Mois écoulés » et B17 : 8 ; A18 « Durée du projet (mois) » et B18 : 12.",
          "En B19, saisissez =B17/B18 au format pourcentage : vous lisez 66,7 %.",
          "Facultatif : ajoutez une seconde règle de mise en forme conditionnelle orange sur H5:H12 avec la formule =$H5>$B$19+0,1 pour repérer les lignes à plus de 10 points au-dessus du rythme.",
        ],
      },
      {
        title: 'Écrire le commentaire de chaque ligne signalée',
        actions: [
          "Pour toute ligne rouge ou à plus de 10 points du prorata, écrivez : le constat chiffré, la cause, la projection, l'action, la date.",
          "Joignez le commentaire au BFU envoyé à J5 ; archivez-le avec le BFU du mois.",
        ],
      },
    ],
    example: {
      title: 'Deux lignes signalées au BFU de décembre 2026',
      lines: [
        "Perdiem animateurs : 100,0 % pour 66,7 % de durée (+33,3 points). Cause : les 4 campagnes de sensibilisation (16 animateurs × 10 jours) ont été menées de mai à novembre ; plus aucune session n'est prévue. Projection : 3 200 USD = budget. Action : aucune ; ligne à clôturer. Signé Finance Officer, 05/01/2027.",
        "Kits NFI : 95,8 % pour 66,7 % de durée (+29,2 points). Cause : à analyser (lot 2 acheté à 19 USD au lieu de 18). Projection : à calculer. Action : analyse d'écart en procédure 4, avant la commande du lot 3 prévue le 18 janvier.",
      ],
    },
    result: "Chaque ligne signalée a un commentaire daté et signé, archivé avec le BFU de décembre : aucun report silencieux.",
    pitfall: "Comparer au prorata d'un mois voisin ou oublier de mettre à jour B17. Un prorata qui ne bouge pas fausse tous les écarts et ne se voit pas.",
  },

  // ─────────────── PROCÉDURE 4 — Analyser un écart ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: "Calculer l'écart en points et décider quelles lignes analyser",
    intro: "Il n'est pas utile d'analyser chaque ligne chaque mois : la règle d'attention décide. Entrée : le BFU de décembre 2026 et le prorata de 66,7 % (B19).",
    steps: [
      {
        title: "Calculer l'écart de chaque ligne",
        actions: [
          "Pour chaque ligne, calculez : écart en points = % consommé (colonne H) − prorata temporis (B19).",
          "Classez : plus de +10 points = à analyser ; entre −10 et +10 = au rythme ; moins de −10 = sous le rythme, à confirmer auprès de l'équipe.",
        ],
      },
      {
        title: 'Retenir les lignes à analyser',
        actions: [
          "Gardez les lignes à plus de +10 points, et les lignes proches du plafond de leur enveloppe.",
          "Pour les lignes sous le rythme, vérifiez auprès du coordinateur que l'activité sera bien réalisée, sinon l'économie est un retard.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', '% consommé', 'Écart vs 66,7 %', 'Lecture'],
      rows: [
        ['Kits NFI', '95,8 %', '+29,2 pts', 'À analyser'],
        ['Perdiem animateurs', '100,0 %', '+33,3 pts', 'Expliquée (campagnes terminées)'],
        ['Manutention & chargement', '70,0 %', '+3,3 pts', 'Au rythme'],
        ['Formation des animateurs', '70,0 %', '+3,3 pts', 'Au rythme'],
        ['Salaire coordinateur', '66,7 %', '0,0 pt', 'Au rythme'],
        ['Frais de fonctionnement', '65,0 %', '−1,7 pt', 'Au rythme'],
        ['Transport local', '58,3 %', '−8,3 pts', 'Au rythme, sous la moyenne'],
        ['Enquêtes PDM', '25,0 %', '−41,7 pts', 'Sous le rythme : activité prévue en fin de projet'],
      ],
    },
    result: "Une seule ligne reste à analyser en profondeur : Kits NFI. Le perdiem est expliqué ; les autres lignes sont au rythme ou sous le rythme attendu.",
    tip: "Une ligne très sous le rythme n'est pas une bonne nouvelle : demandez à son responsable si l'activité est en retard. Une économie qui cache un retard devient un dépassement de calendrier, puis une demande de prolongation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Projeter le coût à terminaison de chaque ligne',
    intro: "Le % consommé dit où vous en êtes ; l'estimation à terminaison dit où vous finirez. Formule : estimation à terminaison = consommé à date + reste à engager prévu. C'est elle, et non le % du jour, qui déclenche un virement ou un avenant.",
    steps: [
      {
        title: 'Recueillir le reste à engager',
        actions: [
          "Demandez, ligne par ligne, à Patrick K. et à Aimé T. : « Qu'est-ce qui sera encore commandé ou contracté d'ici le 30 avril 2027 ? »",
          "Exigez un chiffre calculé (quantité × prix), pas une impression.",
        ],
      },
      {
        title: "Calculer et comparer au budget",
        actions: [
          "Dans une zone libre sous le tableau (à partir de la ligne 25), reportez pour chaque ligne le budget, le consommé, le reste à engager prévu.",
          "Calculez l'estimation à terminaison (consommé + reste à engager) et l'écart (budget − estimation).",
          "Un écart négatif signale un besoin de financement ; un écart positif, un disponible transférable.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Budget', 'Consommé', 'Reste à engager', 'Estimation à terminaison', 'Écart (budget − estimation)'],
      rows: [
        ['Transport local', '5 400', '3 150', '900', '4 050', '+1 350'],
        ['Kits NFI', '36 000', '34 500', '2 850', '37 350', '−1 350'],
        ['Perdiem animateurs', '3 200', '3 200', '0', '3 200', '0'],
        ['Salaire coordinateur', '9 600', '6 400', '3 200', '9 600', '0'],
        ['Manutention & chargement', '3 000', '2 100', '900', '3 000', '0'],
        ['Enquêtes PDM', '4 800', '1 200', '3 600', '4 800', '0'],
        ['Frais de fonctionnement', '4 000', '2 600', '1 400', '4 000', '0'],
        ['Formation des animateurs', '2 800', '1 960', '840', '2 800', '0'],
        ['Total', '68 800', '55 110', '13 690', '68 800', '0'],
      ],
    },
    result: "Un seul besoin de financement : Kits NFI à −1 350 USD ; une seule économie transférable : Transport local à +1 350 USD. Le total reste à 68 800 USD, à zéro.",
    pitfall: "Utiliser le solde du BFU (budget − consommé) comme « disponible ». Le solde de Transport local est de 2 250 USD, mais 900 USD sont encore à engager : seuls 1 350 USD sont réellement transférables.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: "Décomposer l'écart : effet volume, effet prix",
    intro: "Savoir qu'une ligne dérive ne suffit pas : il faut savoir pourquoi, car la réponse n'est pas la même si vous achetez plus (volume) ou plus cher (prix). Comparez le réel à un plan d'achats, pas seulement au prorata linéaire. Fil rouge : Kits NFI.",
    steps: [
      {
        title: 'Reconstituer le plan et le réel',
        actions: [
          "Demandez à Patrick K. le chronogramme d'achats initial : combien de kits devaient être commandés à fin décembre ?",
          "Relevez les quantités et prix réellement commandés dans le registre des engagements.",
        ],
      },
      {
        title: "Séparer volume et prix",
        actions: [
          "Effet volume = (quantité réelle − quantité prévue) × prix budgété.",
          "Effet prix = (prix réel − prix budgété) × quantité réelle achetée à ce prix.",
          "Vérifiez que volume + prix = écart total à expliquer.",
        ],
      },
    ],
    example: {
      title: 'Décomposition de l\'écart de valeur sur les Kits NFI au 31/12/2026',
      lines: [
        "Plan d'achats à fin décembre : 1 800 kits × 18 USD = 32 400 USD.",
        "Réel : 650 kits à 18 USD (BC-004) + 1 200 kits à 19 USD (BC-011) = 1 850 kits pour 34 500 USD.",
        "Écart à expliquer : 34 500 − 32 400 = +2 100 USD.",
        "Effet volume : (1 850 − 1 800) × 18 = +900 USD (50 kits commandés en avance).",
        "Effet prix : (19 − 18) × 1 200 = +1 200 USD (lot 2 : +5,6 %, tarif du fournisseur révisé en septembre).",
        "Contrôle : 900 + 1 200 = 2 100 USD ✔",
      ],
    },
    result: "L'écart est expliqué à 100 % : 900 USD d'avance d'achats (sans conséquence sur le total) et 1 200 USD de hausse de prix, qui, répétée sur les 150 kits restants à 19 USD, produit le besoin de 1 350 USD.",
    tip: "Un effet volume peut se résorber (vous avez acheté plus tôt, pas plus). Seul l'effet prix augmente durablement le coût final.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: "Isoler l'effet de change d'un dépassement opérationnel",
    intro: "Pour toute ligne payée en monnaie locale ou facturée dans une autre devise que celle du budget, le BFU mélange deux causes : le prix opérationnel et la conversion. Il faut les séparer avant de conclure. Fil rouge : Manutention & chargement, payée en CDF à des journaliers.",
    steps: [
      {
        title: 'Construire le tableau en trois lignes',
        actions: [
          "Ligne 1 « Budget » : coût unitaire budgété, converti au taux budgété.",
          "Ligne 2 « Réel au taux budgété » : coût réel dans la devise du paiement, converti au taux BUDGÉTÉ. L'écart avec la ligne 1 est l'effet opérationnel.",
          "Ligne 3 « Réel au taux réel » : le même coût réel converti au taux RÉEL (c'est ce que voit le BFU). L'écart avec la ligne 2 est l'effet de change.",
        ],
      },
      {
        title: 'Interpréter',
        actions: [
          "Un effet opérationnel positif est un vrai dépassement de coût : il se traite par virement ou avenant si le seuil est menacé.",
          "Un effet de change se documente séparément : ce n'est pas un défaut de gestion, mais il pèse sur l'enveloppe et doit être signalé au bailleur.",
          "Regardez le sens de l'effet de change et sa réversibilité : un taux favorable aujourd'hui peut se retourner.",
        ],
      },
    ],
    table: {
      columns: ['Ligne de calcul (400 ménages servis au mois 7)', 'Coût par ménage (CDF)', 'Taux (CDF/USD)', 'Coût par ménage (USD)', 'Total 400 ménages (USD)'],
      rows: [
        ['Budget', '4 200', '2 800', '1,50', '600'],
        ['Réel au taux budgété (effet opérationnel)', '4 620', '2 800', '1,65', '660'],
        ['Réel au taux réel (ce que voit le BFU)', '4 620', '3 080', '1,50', '600'],
      ],
    },
    example: {
      title: 'Lecture du tableau',
      lines: [
        "Effet opérationnel : 660 − 600 = +60 USD (+10 %) — les journaliers coûtent réellement plus cher.",
        "Effet de change : 600 − 660 = −60 USD (−9,1 %) — le CDF a perdu de la valeur et réduit le coût en USD.",
        "Écart visible au BFU : 600 − 600 = 0. Le BFU ne montre rien alors que le coût réel a monté de 10 %.",
        "Risque : si le CDF se redresse vers 2 800, le coût passe à 1,65 USD. Sur les 600 ménages restants : 600 × 0,15 = 90 USD de plus que prévu.",
      ],
    },
    result: "Vous pouvez écrire dans le commentaire : « Pas d'écart au BFU, mais +10 % opérationnel masqué par un change favorable de −9,1 % ; risque de 90 USD à terminaison si le taux se normalise. »",
    pitfall: "Conclure « aucun problème » parce que le BFU affiche zéro. C'est la forme la plus dangereuse de l'effet de change : il masque un vrai dépassement opérationnel tant que le taux ne se retourne pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: "Rédiger le commentaire d'écart en cinq lignes",
    intro: "Le commentaire d'écart transforme vos calculs en décision. Il doit être court, chiffré et tenir sans votre présence. Il part avec le BFU à J5, au coordinateur et au Finance Manager.",
    steps: [
      {
        title: 'Suivre le plan en cinq lignes',
        actions: [
          "Constat : la ligne, le % consommé, le prorata, l'écart en points.",
          "Cause : volume, prix, change, avec leurs montants (étapes 3 et 4).",
          "Estimation à terminaison : le coût projeté et le besoin ou l'excédent (étape 2).",
          "Action proposée : virement, avenant, ou aucune action, avec la ligne source.",
          "Décision attendue : qui décide, et avant quelle date (par exemple avant la commande suivante).",
        ],
      },
      {
        title: 'Relire avant envoi',
        actions: [
          "Vérifiez que chaque chiffre vient du BFU, du registre ou d'un devis ; citez la pièce.",
          "Supprimez toute formule vague comme « besoins opérationnels » ou « contexte difficile ».",
        ],
      },
    ],
    example: {
      title: 'Commentaire d\'écart — Kits NFI, BFU de décembre 2026',
      lines: [
        "Constat : Kits NFI consommé à 95,8 % (34 500 / 36 000 USD) pour un prorata de 66,7 %, soit +29,2 points.",
        "Cause : +900 USD d'effet volume (50 kits commandés en avance) et +1 200 USD d'effet prix (lot 2 à 19 USD au lieu de 18, devis du 08/09/2026) ; pas d'effet de change.",
        "Estimation à terminaison : 34 500 + 150 kits × 19 = 37 350 USD, soit un besoin de 1 350 USD (3,75 % de la ligne).",
        "Action proposée : virement de 1 350 USD depuis Transport local (ECHO), économie de 3 rotations sur 12 car le fournisseur livre le lot 2 au site de Masisi.",
        "Décision attendue : validation de Grace M. avant le 12 janvier 2027 ; notification à ECHO avant la commande du lot 3 prévue le 18 janvier.",
      ],
    },
    result: "Un commentaire d'une dizaine de lignes qui contient le constat, la cause chiffrée, la projection, l'action et l'échéance : il alimente directement la note de virement de la procédure 6.",
    pitfall: "Envoyer le chiffre sans l'action. Un coordinateur qui lit « Kits à 95,8 % » sans proposition ne sait pas s'il doit s'inquiéter, ni qui doit décider.",
  },

  // ─────────────── PROCÉDURE 5 — Décider : virement ou avenant ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: "Relire la clause de virement de l'accord de financement",
    intro: "Le seuil de tolérance est une règle générale, jamais universelle : le pourcentage, sa base de calcul, le délai de notification, l'exigence d'une simple notification ou d'une approbation préalable varient d'un accord à l'autre. La seule pratique fiable : relire l'accord spécifique avant d'agir.",
    steps: [
      {
        title: "Retrouver et lire l'article",
        actions: [
          "Ouvrez l'accord signé et cherchez les mots « virement », « réallocation », « modification budgétaire », « avenant ».",
          "Relevez : le seuil en pourcentage, la base de calcul, le caractère cumulé ou non, notification ou approbation, délai, exclusions.",
          "Relevez aussi la clause sur le taux de change et les lignes qui ne peuvent pas être alimentées par un virement.",
        ],
      },
      {
        title: 'Écrire la fiche de clause',
        actions: [
          "Rédigez une fiche d'une demi-page par accord, avec les références d'articles.",
          "En cas d'ambiguïté, posez la question par écrit au chargé de programme du bailleur et classez sa réponse avec l'accord.",
        ],
      },
    ],
    example: {
      title: 'Fiches de clause des deux accords du projet NFI (clauses fictives)',
      lines: [
        "Accord KAS–ECHO, article 8.2 : virements entre lignes jusqu'à 10 % du budget de la ligne bénéficiaire, cumulés sur la durée de l'action ; notification écrite préalable à l'engagement ; au-delà de 10 %, ou en cas de changement de nature, d'ampleur, de durée ou de zone des activités : avenant.",
        "Accord KAS–Fondation Sigma, article 6 : tout virement entre lignes est soumis à l'approbation écrite préalable de la fondation, sans seuil de tolérance.",
        "Conséquence pratique : le même virement de 1 350 USD ne se traite pas de la même façon chez les deux bailleurs.",
      ],
    },
    result: "Une fiche de clause par accord, avec articles cités, classée avec l'accord signé : vous ne décidez plus de mémoire.",
    pitfall: "Se fier à ce qu'on a retenu du bailleur précédent. Un même bailleur peut même changer de règle d'un appel à projets à l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "Mesurer l'écart selon la base de calcul de l'accord",
    intro: "Une fois la clause lue, calculez le pourcentage du virement sur la base exacte qu'elle prévoit, et ajoutez les virements déjà réalisés si le seuil est cumulé. Entrées : le besoin de 1 350 USD, la clause ECHO (base : ligne bénéficiaire, cumulée).",
    steps: [
      {
        title: 'Calculer sur la bonne base',
        actions: [
          "Identifiez la base : ligne bénéficiaire, ligne d'origine ou budget total de l'accord.",
          "Divisez le montant du virement par le budget de la base retenue.",
          "Si la clause est cumulative, ajoutez les virements précédents sur la même ligne.",
        ],
      },
      {
        title: 'Comparer au seuil',
        actions: [
          "Comparez au seuil de la clause (10 %).",
          "Documentez les trois bases dans la fiche de décision, même si une seule s'applique : si le bailleur interprète autrement, vous aurez déjà votre calcul.",
        ],
      },
    ],
    table: {
      columns: ['Base de calcul', 'Calcul', 'Résultat', 'Seuil 10 %', 'Statut'],
      rows: [
        ['Ligne bénéficiaire (Kits NFI) — base de la clause ECHO', '1 350 ÷ 36 000', '3,75 %', 'Respecté', 'Base applicable'],
        ["Ligne d'origine (Transport local)", '1 350 ÷ 5 400', '25,0 %', 'Dépassé', 'Information'],
        ["Enveloppe ECHO (62 800)", '1 350 ÷ 62 800', '2,1 %', 'Respecté', 'Information'],
        ['Virements précédents sur Kits NFI', '0', '—', '—', 'Cumul = 3,75 %'],
      ],
    },
    result: "La base de la clause (ligne bénéficiaire) donne 3,75 %, sans virement antérieur sur la ligne : le seuil de 10 % est respecté, avec une marge de 2 250 USD.",
    pitfall: "Calculer sur le total de l'enveloppe parce que le résultat est plus petit. La clause dit « ligne bénéficiaire » : c'est ce calcul qui fera foi, et le chargé de programme refera lui-même le calcul.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Appliquer les critères : virement de ligne ou avenant formel',
    intro: "Le seuil ne suffit pas. Un avenant formel est nécessaire dès que l'un des critères suivants est vrai : le seuil est dépassé ; le virement modifie la nature ou l'ampleur des activités ; la durée, la zone ou les bénéficiaires changent ; le bailleur l'exige explicitement pour ce type de changement.",
    steps: [
      {
        title: 'Poser les quatre questions',
        actions: [
          "Le seuil de la clause est-il dépassé, sur sa base de calcul ?",
          "Les activités changent-elles de nature ou d'ampleur (volume de bénéficiaires, type de biens) ?",
          "La durée, la zone ou la population ciblée changent-elles ?",
          "Le bailleur exige-t-il explicitement un avenant pour ce type de changement ?",
        ],
      },
      {
        title: 'Conclure',
        actions: [
          "Une seule réponse « oui » suffit pour exiger l'avenant.",
          "Quatre « non » : virement de ligne, avec notification ou approbation selon la clause.",
        ],
      },
    ],
    table: {
      columns: ['Situation KAS', 'Seuil dépassé ?', 'Nature ou ampleur modifiée ?', 'Décision'],
      rows: [
        ['+1 350 USD sur Kits NFI financés par Transport local', 'Non (3,75 %)', 'Non (2 000 ménages inchangés)', 'Virement de ligne avec notification ECHO'],
        ['Servir 2 300 ménages au lieu de 2 000', 'Oui', 'Oui : ampleur', 'Avenant'],
        ['Prolonger le projet de 2 mois (fin au 30 juin 2027)', 'Sans objet', 'Oui : durée', 'Avenant'],
        ['Distribuer aussi à Rutshuru', 'Sans objet', 'Oui : zone', 'Avenant'],
        ['Virer 4 000 USD de Salaire coordinateur vers Kits NFI', 'Oui (11,1 % de la ligne)', 'Non', 'Avenant (seuil dépassé)'],
      ],
    },
    result: "Pour le besoin de 1 350 USD : quatre « non ». La décision est un virement de ligne, avec notification préalable à ECHO.",
    pitfall: "Découper un besoin de 4 000 USD en trois petits virements de moins de 10 % pour éviter l'avenant. Le cumul est contrôlé, et le découpage artificiel détruit la confiance du bailleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Trouver la ligne source sans toucher à une autre enveloppe',
    intro: "La ligne source doit appartenir à la même enveloppe bailleur que la ligne bénéficiaire, avoir un montant réellement disponible et pouvoir se passer de ce montant sans compromettre son activité. Entrée : l'estimation à terminaison de la procédure 4.",
    steps: [
      {
        title: 'Calculer le disponible transférable de chaque ligne',
        actions: [
          "Disponible transférable = budget − consommé − reste à engager prévu.",
          "Écartez toute ligne d'une autre enveloppe bailleur : un manque sur ECHO ne se comble jamais avec des fonds privés.",
        ],
      },
      {
        title: 'Vérifier que la source peut remplir son activité',
        actions: [
          "Demandez à son responsable si l'activité sera complète sans cette somme.",
          "Obtenez la raison objective de l'économie (devis, contrat, changement de modalité) : elle sera votre justification.",
        ],
      },
    ],
    table: {
      columns: ['Ligne candidate', 'Enveloppe', 'Solde BFU', 'Reste à engager', 'Disponible transférable'],
      rows: [
        ['Transport local', 'ECHO', '2 250', '900', '1 350'],
        ['Salaire coordinateur', 'ECHO', '3 200', '3 200', '0'],
        ['Manutention & chargement', 'ECHO', '900', '900', '0'],
        ['Enquêtes PDM', 'ECHO', '3 600', '3 600', '0'],
        ['Frais de fonctionnement', 'ECHO', '1 400', '1 400', '0'],
        ['Formation des animateurs', 'Fonds privés', '840', '840', 'Exclue : autre enveloppe'],
      ],
    },
    example: {
      title: "Pourquoi Transport local est la source",
      lines: [
        "Le fournisseur livre le lot 2 (1 200 kits) directement au site de Masisi, livraison comprise dans les 19 USD.",
        "12 rotations étaient budgétées ; 7 sont faites et 2 restent prévues : 3 rotations sont économisées, soit 3 × 450 = 1 350 USD.",
        "Budget 5 400 − consommé 3 150 − 900 à engager = 1 350 USD disponibles, sans compromettre la distribution.",
      ],
    },
    result: "La ligne source est identifiée, du même bailleur, avec 1 350 USD réellement disponibles et une raison objective.",
    pitfall: "Prendre l'argent sur la ligne où le solde est le plus grand sans regarder son reste à engager. Vous créez alors un nouveau besoin deux mois plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Décider, planifier et ne rien engager avant la validation',
    intro: "La décision tient en quelques lignes : quoi, combien, de où vers où, quelle démarche, avant quelle date. Le risque numéro un est d'engager la dépense avant la validation : si le bailleur refuse, elle peut être déclarée inéligible et retomber sur les fonds propres de l'organisation.",
    steps: [
      {
        title: 'Écrire la fiche de décision',
        actions: [
          "Reportez : la ligne source, la ligne bénéficiaire, le montant, la base de calcul, le résultat, les quatre critères, la démarche retenue.",
          "Faites valider par Grace M. et par le coordinateur, qui doivent connaître l'enjeu avant que la note ne parte.",
        ],
      },
      {
        title: 'Planifier avec un calendrier à rebours',
        actions: [
          "Partez de la date de la prochaine commande (lot 3, le 18 janvier) et remontez : notification, validation interne, note.",
          "Interdisez par écrit à la logistique de passer la commande tant que le bailleur n'a pas accusé réception (ou approuvé, selon la clause).",
        ],
      },
    ],
    example: {
      title: 'Fiche de décision VL-2027-01 et calendrier',
      lines: [
        "Décision : virement de ligne de 1 350 USD, de Transport local vers Kits NFI, enveloppe ECHO. Base : ligne bénéficiaire, 3,75 % < 10 %. Quatre critères d'avenant : non.",
        "Démarche : notification écrite préalable à ECHO (article 8.2). La note de virement est jointe.",
        "Calendrier : note signée le 13/01/2027 → notification à ECHO le 14/01 → accusé de réception attendu avant le 18/01 → commande du lot 3 (150 kits).",
        "Consigne à la logistique : aucune commande de kits du lot 3 avant l'accusé de réception d'ECHO.",
      ],
    },
    result: "Une décision écrite, chiffrée, validée en interne, avec un calendrier à rebours et une interdiction d'engager avant validation.",
    pitfall: "Faire confiance à une réponse orale (« oui, ça ira ») pour engager. Une réponse non écrite n'existe pas en audit : exigez l'accusé de réception ou l'approbation écrite.",
  },

  // ─────────────── PROCÉDURE 6 — Rédiger la note de virement ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Ouvrir le template et remplir la section 1 — Référence du projet',
    intro: "Le document note-demande-virement-ligne-budgetaire.docx est la pièce formelle du virement, à soumettre au bailleur ou à conserver comme trace interne selon le seuil. Il compte cinq sections ; les sections 2 à 4 portent le raisonnement, les sections 1 et 5 la traçabilité.",
    steps: [
      {
        title: 'Ouvrir et nommer le document',
        actions: [
          "Ouvrez 04-templates/note-demande-virement-ligne-budgetaire.docx et enregistrez immédiatement sous : VL-2027-01_Kits_NFI_ECHO.docx.",
          "Numérotez les demandes VL-AAAA-NN : ce numéro est repris dans le BFU, le registre et l'e-mail de notification.",
        ],
      },
      {
        title: 'Remplir la section 1',
        actions: [
          "Dans le tableau « Projet / bailleur — Référence contrat de financement », saisissez le nom du projet suivi du bailleur et, à droite, la référence exacte de l'accord signé.",
          "Copiez la référence depuis la première page de l'accord : une faute de frappe ralentit le traitement.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie',
      lines: [
        "Projet / bailleur : Réponse NFI Masisi (NFI) — ECHO",
        "Référence contrat de financement : KAS-ECHO-2026-07 (référence fictive), accord signé le 28/04/2026",
        "Numéro de demande : VL-2027-01",
      ],
    },
    result: "Un document nommé, numéroté, dont la section 1 identifie sans ambiguïté le projet, le bailleur et l'accord.",
    pitfall: "Oublier d'indiquer la référence de l'accord quand le bailleur finance plusieurs projets de KAS. Il ne saura pas à quel contrat appliquer le virement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: "Section 2 — Ligne d'origine et montant disponible à ce jour",
    intro: "La section 2 dit d'où vient l'argent et combien est réellement disponible. Le montant n'est pas le solde brut du BFU : c'est le disponible transférable calculé à la procédure 5.",
    steps: [
      {
        title: 'Remplir le tableau « Ligne budgétaire / Montant disponible à ce jour »',
        actions: [
          "Colonne de gauche : intitulé exact de la ligne, tel qu'écrit dans le budget signé, avec le bailleur.",
          "Colonne de droite : le disponible transférable, avec son calcul entre parenthèses.",
          "Joignez en annexe l'extrait du BFU de décembre qui le justifie.",
        ],
      },
    ],
    example: {
      title: 'Section 2 remplie',
      lines: [
        "Ligne budgétaire (excédentaire ou disposant d'un solde) : Transport local (A1 Distribution NFI) — ECHO",
        "Montant disponible à ce jour : 1 350 USD transférables (budget 5 400 − engagé 3 150 − 900 d'engagements prévus pour 2 rotations ; solde BFU de 2 250 USD)",
      ],
    },
    result: "La section 2 permet au bailleur de vérifier le montant sur le BFU joint, sans vous appeler.",
    tip: "Indiquez toujours le solde du BFU ET le disponible transférable : le lecteur voit que vous avez retiré ce qui est déjà prévu, ce qui lui inspire confiance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Section 3 — Ligne de destination et montant nécessaire',
    intro: "La section 3 dit où va l'argent et pourquoi le besoin est exactement ce montant. Le besoin net est l'estimation à terminaison moins le budget actuel de la ligne.",
    steps: [
      {
        title: 'Remplir le tableau « Ligne bénéficiaire / Montant nécessaire »',
        actions: [
          "Colonne de gauche : l'intitulé exact de la ligne bénéficiaire et son bailleur.",
          "Colonne de droite : le besoin net avec son calcul : estimation à terminaison − budget actuel.",
          "Vérifiez que le bailleur de la ligne bénéficiaire est le même que celui de la ligne d'origine.",
        ],
      },
    ],
    example: {
      title: 'Section 3 remplie',
      lines: [
        "Ligne budgétaire bénéficiaire du virement : Kits NFI (A1 Distribution NFI) — ECHO",
        "Montant nécessaire : 1 350 USD (150 kits restants × 19 USD = 2 850 USD à engager − solde disponible de 1 500 USD sur la ligne)",
      ],
    },
    result: "Le besoin égale le montant disponible de la section 2 : 1 350 USD de part et d'autre, dans la même enveloppe ECHO.",
    pitfall: "Demander un montant arrondi « par prudence ». Le bailleur compare le montant au calcul : un arrondi de 1 500 USD au lieu de 1 350 USD ferait douter de tout le reste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Section 4 — Montant demandé et justification factuelle',
    intro: "Une demande mal justifiée revient systématiquement pour clarification. La justification ne reformule pas les « besoins opérationnels » : elle énonce des faits datés, chiffrés, vérifiables, dans un ordre fixe.",
    steps: [
      {
        title: 'Saisir le montant demandé',
        actions: [
          "Sous « Montant demandé », écrivez le montant en chiffres et en devise : 1 350 USD.",
          "Il doit être identique à celui des sections 2 et 3.",
        ],
      },
      {
        title: 'Rédiger la justification en cinq phrases',
        actions: [
          "Phrase 1 — le fait chiffré : prix, volume, date, pièce.",
          "Phrase 2 — la conséquence : le besoin calculé.",
          "Phrase 3 — la source : pourquoi elle est disponible, avec la pièce.",
          "Phrase 4 — ce qui ne change pas : activités, volumes, bailleur.",
          "Phrase 5 — le seuil : le pourcentage et l'article de l'accord.",
        ],
      },
    ],
    example: {
      title: 'Justification factuelle du virement VL-2027-01',
      lines: [
        "1. Le lot 2 de kits NFI (1 200 kits, bon de commande BC-NFI-011 du 12/09/2026) a été acheté à 19 USD l'unité contre 18 USD budgétés, suite à la révision tarifaire du fournisseur (devis du 08/09/2026, +5,6 %).",
        "2. Les 150 kits restants à commander au même prix représentent 2 850 USD pour un solde de ligne de 1 500 USD, soit un besoin de 1 350 USD.",
        "3. Ce besoin est couvert par l'économie constatée sur Transport local : le fournisseur livre le lot 2 directement au site de Masisi, ce qui supprime 3 des 12 rotations budgétées (3 × 450 = 1 350 USD).",
        "4. Le nombre de ménages (2 000), les sites et les activités sont inchangés ; les deux lignes appartiennent à l'enveloppe ECHO.",
        "5. Le virement représente 3,75 % du budget de la ligne bénéficiaire, sous le seuil de 10 % de l'article 8.2 de l'accord.",
      ],
    },
    result: "Une justification de cinq phrases : chaque chiffre renvoie à une pièce jointe (devis, bon de commande, BFU). Un auditeur externe peut la vérifier sans vous.",
    pitfall: "Écrire « besoins opérationnels » ou « hausse des prix du marché » sans chiffre ni date. La demande reviendra pour clarification, et la commande du lot 3 sera retardée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Section 5 — Validation, envoi, suivi et mise à jour du budget',
    intro: "La section 5 donne à la note sa valeur : qui demande, qui approuve, quand. Une fois le bailleur informé ou l'approbation reçue, il reste à refléter le virement dans le budget et le BFU, sans perdre la trace de la version signée.",
    steps: [
      {
        title: 'Remplir les deux tableaux de la section 5',
        actions: [
          "Tableau 1 : « Demandé par (nom, fonction) » et « Approuvé par (Coordination / Finance) ».",
          "Tableau 2 : « Date de la demande » et « Date d'approbation ».",
          "Faites signer dans l'ordre : demandeur, coordination, Finance Manager.",
        ],
      },
      {
        title: 'Envoyer, puis mettre à jour',
        actions: [
          "Envoyez la note, signée, au chargé de programme avec le BFU et les devis en annexe, en citant l'article 8.2.",
          "Après accusé de réception : enregistrez le classeur sous BFU_NFI_Masisi_v2_VL-2027-01.xlsx ; la v1 reste intacte.",
          "Dans l'onglet Budget de la v2, modifiez les lignes concernées en conservant la formule de la colonne G.",
        ],
      },
    ],
    example: {
      title: 'Section 5 remplie et budget révisé (v2)',
      lines: [
        "Demandé par : Finance Officer, KAS Goma — Approuvé par : Aimé T. (coordination) et Grace M. (Finance Manager).",
        "Date de la demande : 11/01/2027 — Date d'approbation : 13/01/2027 — Notification à ECHO : 14/01/2027.",
        "Onglet Budget v2, ligne 5 Transport local : Quantité 9 × Coût unitaire 450 = 4 050 USD (au lieu de 12 × 450 = 5 400).",
        "Onglet Budget v2, ligne 6 Kits NFI : Quantité 2 000 × Coût unitaire 18,675 = 37 350 USD (coût moyen pondéré : 650 kits à 20 USD de moyenne… à vérifier sur BC).",
      ],
    },
    result: "Note signée et datée, notification envoyée, v2 du classeur créée ; le total ECHO reste 62 800 USD, le BFU se met à jour automatiquement par la colonne C.",
    pitfall: "Ne pas mettre à jour l'onglet Budget après approbation. Le BFU continuerait de comparer Kits NFI à 36 000 USD : Transport local semblerait à 58,3 % d'un budget de 5 400 et Kits NFI à 95,8 %, alors que les budgets révisés sont 4 050 et 37 350.",
  },

  // ─────────────── PROCÉDURE 7 — Narrative de planification annuelle ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Section 1 — Contexte externe et risques budgétaires',
    intro: "La narrative de planification annuelle explique, une fois par an, ce que les chiffres du BFU ne disent pas : le contexte, le bilan, les priorités, les ressources humaines et le calendrier. Elle se rédige en janvier, en amont du cycle de planification de l'année suivante. Document : gabarit-narrative-planification-annuelle-budgetaire.docx.",
    steps: [
      {
        title: 'Rassembler les faits externes',
        actions: [
          "Relevez l'évolution du taux de change budgété contre le taux réel, l'inflation locale et les décisions des bailleurs (nouveaux appels, fins de financement).",
          "Ouvrez le gabarit et enregistrez-le sous : Narrative_planification_2027_KAS_Goma.docx.",
        ],
      },
      {
        title: 'Remplir les deux blocs de la section 1',
        actions: [
          "Bloc « Contexte externe » : taux, inflation, contraintes bailleurs, chacun avec un chiffre.",
          "Bloc « Risques budgétaires » : sur-engagement d'une ligne, dépendance à un seul bailleur, non-renouvellement. Reliez chaque risque à une ligne budgétaire ou à un projet.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie (bureau de Goma, janvier 2027)',
      lines: [
        "Contexte externe : taux budgété 2 800 CDF/USD, 3 080 fin décembre 2026 (+10,0 %), avec un effet favorable sur les dépenses payées en CDF mais un risque de retournement ; hausse de 5,6 % du prix des kits NFI en septembre ; ECHO termine le projet NFI le 30/04/2027 ; renouvellement du projet Nutrition en cours de discussion avec Fonds Horizon.",
        "Risques budgétaires : sur-engagement de Kits NFI (95,8 % au mois 8, prorata 66,7 %) ; dépendance à ECHO (91,3 % du budget NFI : 62 800 / 68 800) ; non-renouvellement possible du projet Nutrition, qui porte 5 ETP.",
      ],
    },
    result: "Une section 1 de 10 à 12 lignes, avec des chiffres et des lignes budgétaires nommées, qui permet au lecteur de comprendre vos choix de l'année suivante.",
    pitfall: "Écrire un contexte générique (« l'environnement est volatil ») sans taux, sans pourcentage, sans bailleur nommé. Une narrative sans chiffres ne sert à personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: "Section 2 — Bilan de l'année écoulée : objectifs et défis",
    intro: "La section 2 compte trois blocs. Le premier dresse le bilan des objectifs budgétaires de l'année écoulée : lesquels ont été atteints, quels ont été les principaux défis (écarts BFU, virements de ligne, avenants).",
    steps: [
      {
        title: 'Rédiger le bloc « Objectifs budgétaires principaux »',
        actions: [
          "Listez les objectifs que vous aviez fixés pour 2026 et dites, pour chacun, atteint ou non, avec le chiffre.",
          "Citez les écarts BFU majeurs, les virements de ligne et les avenants de l'année avec leur numéro (VL-…).",
        ],
      },
      {
        title: 'Remplir le tableau « Autres réalisations et défis »',
        actions: [
          "Colonne de gauche : les actions de sensibilisation et de communication avec les départements demandeurs, et leur résultat.",
          "Colonne de droite : l'outil de suivi partagé pérennisé (type BFU consolidé), son usage et son effet.",
        ],
      },
    ],
    example: {
      title: 'Section 2 remplie (extrait, chiffres fictifs)',
      lines: [
        "Objectif 1 « un BFU mensuel à J5 sur chaque projet » : atteint. 12 BFU sur 12 à temps pour Nutrition, WASH et Santé ; 8 sur 8 pour NFI.",
        "Objectif 2 « aucune ligne en dépassement non anticipé » : atteint avec réserve. Dépassement projeté de 15 000 USD détecté en mars 2026 sur la ligne B du projet WASH et régularisé par virement approuvé par Agence Delta ; virement VL-2027-01 (1 350 USD) sur NFI, notifié à ECHO ; un avenant sans coût (prolongation de 2 mois du projet Santé).",
        "Tableau, colonne gauche : 12 réunions mensuelles de restitution du BFU avec les 4 coordinateurs ; part des lignes signalées expliquées avant le mois suivant : de 60 % à 100 %.",
        "Tableau, colonne droite : BFU consolidé partagé en lecture seule aux coordinateurs ; il a permis la décision de virement avant la commande du lot 3, sans dépense inéligible.",
      ],
    },
    result: "Un bilan chiffré qui nomme les écarts, les virements et les avenants de l'année et montre ce que les outils de suivi ont permis.",
    pitfall: "Ne parler que des réussites. Un bailleur ou un siège qui découvre un écart ou un virement qui n'est pas dans le bilan se demande ce que vous cachez d'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: "Section 2 (suite) — Impact budgétaire des enseignements de l'année",
    intro: "Le troisième bloc de la section 2 transforme l'année écoulée en règles pour l'année suivante. Le gabarit suggère deux angles : la séparation des fonctions (engagement contre paiement), clé de la conformité budgétaire, et l'anticipation par la transparence : partager régulièrement le BFU aux programmes neutralise la pression de fin d'année.",
    steps: [
      {
        title: 'Tirer deux enseignements chiffrés',
        actions: [
          "Pour chaque enseignement, écrivez la règle, le fait qui l'a prouvée et son effet sur le budget.",
          "Relisez le tableau des écarts de l'année pour ne retenir que des enseignements démontrés par un chiffre.",
        ],
      },
      {
        title: 'Rattacher chaque enseignement à une conséquence budgétaire',
        actions: [
          "Dites à quelle ligne, à quel processus ou à quelle règle de planification chaque enseignement s'applique en 2027.",
        ],
      },
    ],
    example: {
      title: 'Enseignements de 2026 (chiffres fictifs)',
      lines: [
        "Séparation des fonctions : aucune dépense engagée sans bon de commande copié à la finance, aucune commande validée par celui qui la paie. Effet : 0 USD de dépense inéligible en 2026, un registre des engagements à jour au jour près.",
        "Anticipation par la transparence : le BFU envoyé à J5 a révélé l'écart des Kits NFI le 5 janvier ; le virement a été notifié avant la commande du lot 3. Effet : 1 350 USD financés sans avenant ni dépense à risque.",
        "Conséquence pour 2027 : tout nouveau forfait devra comporter une note de justification, et les lignes d'achats étalés sur plus de 6 mois intégreront une hypothèse de hausse de prix.",
      ],
    },
    result: "Deux enseignements démontrés par un chiffre, avec la règle qui en découle pour 2027.",
    tip: "Un enseignement sans règle nouvelle n'en est pas un. Si vous ne changez rien à votre pratique, ne l'écrivez pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: "Section 3 — Objectifs de l'année à venir",
    intro: "La section 3 dit ce que vous allez faire en 2027, sur quelles lignes budgétaires et pourquoi. Chaque objectif doit être rattaché à une ligne, à un chiffre cible et à une méthode.",
    steps: [
      {
        title: 'Fixer trois objectifs budgétaires pour 2027',
        actions: [
          "Choisissez trois objectifs au plus, mesurables, rattachés à des lignes budgétaires nommées.",
          "Pour chacun, précisez la méthode pour l'atteindre et la ligne concernée.",
        ],
      },
      {
        title: 'Justifier les priorités et ouvrir le pluriannuel',
        actions: [
          "Dans le bloc « Pourquoi ces priorités », reliez chaque objectif à un constat du bilan.",
          "Dans le bloc pluriannuel, indiquez la diversification des bailleurs et la réduction du nombre de lignes en dépassement.",
        ],
      },
    ],
    example: {
      title: 'Section 3 remplie (extrait)',
      lines: [
        "Objectif 1 : 100 % des lignes signalées expliquées par écrit à J5, sur toutes les lignes de tous les projets. Méthode : modèle de commentaire en cinq lignes (procédure 4).",
        "Objectif 2 : aucune ligne projetée en dépassement après le mois 8. Méthode : estimation à terminaison chaque mois à partir du mois 4, sur les lignes à achats étalés (Kits NFI, Transport local).",
        "Objectif 3 : transformer les forfaits en coût unitaire dans les nouvelles propositions. Ligne concernée : Perdiem animateurs (16 animateurs × 10 jours × 20 USD).",
        "Pluriannuel : ramener la part d'ECHO dans le budget NFI de 91,3 % à moins de 75 % à l'horizon 2028 en diversifiant les bailleurs.",
      ],
    },
    result: "Trois objectifs mesurables, chacun rattaché à une ligne, une méthode et un constat du bilan ; une ambition pluriannuelle chiffrée.",
    pitfall: "Fixer des objectifs vagues comme « améliorer le suivi budgétaire ». Un objectif sans chiffre ni ligne budgétaire ne peut ni être suivi ni être bilanté l'année suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Section 4 — Ressources humaines et impact sur le budget RH',
    intro: "La section 4 décrit l'équipe finance et son évolution, et chiffre son impact sur les lignes budgétaires RH du budget multi-bailleurs. Elle renvoie à l'organigramme de l'équipe finance, document séparé.",
    steps: [
      {
        title: 'Décrire les équipes',
        actions: [
          "Citez l'organigramme de l'équipe finance (document séparé) : composition, lignes hiérarchiques.",
          "Profils de staff international, si applicable : niveau, durée de mission, mois FTE budgétés.",
          "Profils de staff national : postes ajoutés, modifiés ou supprimés, niveau, mois FTE, justification opérationnelle.",
        ],
      },
      {
        title: "Chiffrer l'impact et demander le support",
        actions: [
          "Dans le bloc « Impact sur le budget RH », donnez la variation en valeur et en pourcentage sur les lignes RH du budget multi-bailleurs.",
          "Dans le dernier bloc, formulez la demande de support planifié au département référent (siège ou desk finance régional), si applicable.",
        ],
      },
    ],
    example: {
      title: 'Section 4 remplie (extrait, chiffres fictifs)',
      lines: [
        "Équipe finance : Finance Manager (Grace M.), Finance Officer, caissière (Esther N.) — organigramme finance v3 du 05/01/2027.",
        "Staff international : aucun. Staff national : poste ajouté d'assistant comptable projets, niveau 4, 12 mois FTE, pour absorber la hausse du volume de pièces (4 projets au lieu de 3).",
        "Impact sur le budget RH : +6 000 USD par an, soit de 48 000 à 54 000 USD (+12,5 %) sur les lignes RH finance imputées aux projets.",
        "Demande de support : appui du desk finance régional pour la revue du budget Nutrition phase 2 en février 2027.",
      ],
    },
    result: "Une section 4 qui chiffre chaque mouvement RH en valeur et en % et nomme le support attendu du siège.",
    pitfall: "Annoncer un poste ajouté sans dire quelle ligne budgétaire le finance. Le bailleur demandera quelle enveloppe porte la dépense, et le recrutement sera retardé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Section 5 — Chronogramme des échéances et validation du document',
    intro: "Le chronogramme transforme la narrative en calendrier : période, jalon, responsable. Il est le seul bloc que les équipes consultent chaque mois. Le gabarit contient un tableau à trois colonnes avec une ligne d'exemple et quatre lignes vides.",
    steps: [
      {
        title: 'Remplir le tableau « Période / Jalon / Responsable »',
        actions: [
          "Remplacez la ligne d'exemple « Ex. : T1 » par votre premier jalon réel.",
          "Remplissez les quatre lignes vides (ajoutez-en si nécessaire) : soumissions, révisions, clôtures bailleurs, échéances de rapport.",
          "Chaque jalon a un seul responsable nommé.",
        ],
      },
      {
        title: 'Relire et valider',
        actions: [
          "Relisez la narrative en vérifiant que chaque chiffre vient du BFU ou d'un document archivé.",
          "Faites valider par Grace M. et classez le document avec le BFU de décembre : il sert de référence au cycle de planification de l'année suivante.",
        ],
      },
    ],
    table: {
      columns: ['Période', 'Jalon / échéance clé', 'Responsable'],
      rows: [
        ['Janvier 2027', 'Clôture du BFU de décembre ; notification du virement VL-2027-01 à ECHO', 'Finance Officer'],
        ['T1 2027', 'Soumission aux bailleurs des budgets 2027 des projets Nutrition, WASH et Santé', 'Finance Manager'],
        ['Février 2027', 'Enquête post-distribution NFI et suivi de la ligne Enquêtes PDM', 'Coordinateur NFI et Finance Officer'],
        ['30 avril 2027', 'Fin du projet NFI ; dernier BFU et début de la clôture bailleur selon l\'accord', 'Finance Manager'],
        ['T3 2027', 'Révision à mi-année des budgets 2027 et relecture des clauses de virement de chaque accord', 'Finance Officer'],
      ],
    },
    result: "Une narrative complète en cinq sections, avec un chronogramme à responsables nommés, validée par le Finance Manager et classée.",
    tip: "Reprenez le chronogramme dans votre agenda finance dès le jour de la validation : un jalon que personne ne retrouve dans son agenda est un jalon manqué.",
  },

  // ─────────────── Aide-mémoire ───────────────
  {
    type: 'concept',
    title: 'Aide-mémoire : les calculs du module en une page',
    body: "Gardez ce tableau à côté de votre BFU. Chaque calcul est illustré par une valeur du cas fil rouge.",
    table: {
      columns: ['Calcul', 'Formule', 'Exemple (Kits NFI, 31/12/2026)'],
      rows: [
        ['Budget total d\'une ligne', 'Quantité × coût unitaire', '2 000 × 18 = 36 000'],
        ['Consommé total', 'Engagé cumulé (colonne D)', '34 500'],
        ['Engagé non payé', 'D − E', '34 500 − 30 000 = 4 500'],
        ['Solde', 'Budget − consommé', '36 000 − 34 500 = 1 500'],
        ['% consommé', 'Consommé ÷ budget', '34 500 ÷ 36 000 = 95,8 %'],
        ['Prorata temporis', 'Mois écoulés ÷ durée', '8 ÷ 12 = 66,7 %'],
        ['Écart en points', '% consommé − prorata', '95,8 − 66,7 = +29,2 pts'],
        ['Estimation à terminaison', 'Consommé + reste à engager', '34 500 + 2 850 = 37 350'],
        ['Besoin de financement', 'Estimation − budget', '37 350 − 36 000 = 1 350'],
        ['Disponible transférable', 'Budget − consommé − reste à engager', '5 400 − 3 150 − 900 = 1 350'],
        ['% du virement', 'Montant ÷ budget de la base de la clause', '1 350 ÷ 36 000 = 3,75 %'],
        ['Effet total, change et opérationnel', '(1 + op) × (1 + change) − 1', '1,10 × 0,909 − 1 = 0 %'],
      ],
    },
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du BFU de décembre 2026, projet NFI Masisi (1/3)',
    scenario: "8 janvier 2027. Le BFU du mois 8 (31 décembre 2026) doit partir au coordinateur avant le 12 janvier, et la commande du lot 3 de kits est prévue le 18. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène.",
    steps: [
      {
        title: 'Alimenter le BFU : engagé, payé, formules',
        actions: [
          "Vérifiez que le BFU est préparé pour les 8 lignes (procédure 3, étape 1).",
          "Saisissez D (engagé cumulé) et E (payé) pour chaque ligne à partir du registre et de la grille, avec les rapprochements de la logistique.",
          "Contrôlez que E ≤ D partout et que le total payé de 48 010 USD se retrouve dans les sorties de banque et de caisse.",
        ],
        result: "Total engagé cumulé 55 110 USD, total payé 48 010 USD, engagé non payé 7 100 USD.",
      },
      {
        title: 'Lire les signaux : lignes, enveloppes, prorata',
        actions: [
          "Lisez H : deux lignes rouges, Kits NFI (95,8 %) et Perdiem animateurs (100 %).",
          "Lisez les enveloppes : ECHO 79,5 % (solde 12 850), Fonds privés 86,0 % (solde 840).",
          "Posez le prorata : 8 mois sur 12 = 66,7 %.",
        ],
        result: "Quatre mois de projet restent avec 840 USD de solde sur l'enveloppe Fonds privés : toute dérive sur cette enveloppe doit être traitée tout de suite.",
      },
    ],
    table: {
      columns: ['Ligne', 'Bailleur', 'Budget', 'Engagé cumulé', 'Payé', 'Solde', '% consommé'],
      rows: [
        ['Transport local', 'ECHO', '5 400', '3 150', '2 250', '2 250', '58,3 %'],
        ['Kits NFI', 'ECHO', '36 000', '34 500', '30 000', '1 500', '95,8 %'],
        ['Perdiem animateurs', 'Fonds privés', '3 200', '3 200', '2 900', '0', '100,0 %'],
        ['Salaire coordinateur', 'ECHO', '9 600', '6 400', '6 400', '3 200', '66,7 %'],
        ['Manutention & chargement', 'ECHO', '3 000', '2 100', '2 100', '900', '70,0 %'],
        ['Enquêtes PDM', 'ECHO', '4 800', '1 200', '0', '3 600', '25,0 %'],
        ['Frais de fonctionnement', 'ECHO', '4 000', '2 600', '2 400', '1 400', '65,0 %'],
        ['Formation des animateurs', 'Fonds privés', '2 800', '1 960', '1 960', '840', '70,0 %'],
        ['Total', '', '68 800', '55 110', '48 010', '13 690', '80,1 %'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du BFU de décembre 2026, projet NFI Masisi (2/3)',
    scenario: "Le BFU est à jour. Il reste à traiter chaque ligne signalée ou sensible, avec un constat, une cause, une projection et une action.",
    steps: [
      {
        title: 'Traiter chaque ligne signalée',
        actions: [
          "Perdiem animateurs (rouge) : les campagnes sont terminées, projection = budget → aucune action, commentaire signé.",
          "Kits NFI (rouge) : écart de +29,2 points ; décomposition volume +900 et prix +1 200 ; estimation à terminaison 37 350 USD → besoin de 1 350 USD.",
          "Manutention (pas d'écart au BFU) : tableau en trois lignes → +10 % opérationnel masqué par −9,1 % de change ; risque de 90 USD si le taux se normalise.",
        ],
        result: "Un seul besoin de financement (Kits NFI, 1 350 USD) ; un risque de change à surveiller sur la manutention.",
      },
      {
        title: 'Projeter toutes les lignes et choisir la source',
        actions: [
          "Calculez l'estimation à terminaison des 8 lignes : seule Transport local est excédentaire (+1 350 USD), après 3 rotations économisées.",
          "Vérifiez que la source et la destination sont dans l'enveloppe ECHO : oui.",
        ],
        result: "Source : Transport local ; destination : Kits NFI ; montant : 1 350 USD ; même enveloppe.",
      },
    ],
    table: {
      columns: ['Ligne', 'Constat', 'Cause', 'Décision'],
      rows: [
        ['Perdiem animateurs', '100,0 %, +33,3 pts', 'Campagnes terminées', 'Aucune action ; ligne à clôturer'],
        ['Kits NFI', '95,8 %, +29,2 pts', 'Volume +900, prix +1 200', 'Virement de 1 350 USD depuis Transport local'],
        ['Transport local', '58,3 %, −8,3 pts', '3 rotations économisées (livraison par le fournisseur)', 'Source du virement'],
        ['Manutention & chargement', '70,0 %, au rythme', '+10 % opérationnel masqué par le change', 'Surveiller : risque de 90 USD'],
        ['Enquêtes PDM', '25,0 %, −41,7 pts', 'Activité de fin de projet', 'Confirmer le calendrier avec Aimé T.'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du BFU de décembre 2026, projet NFI Masisi (3/3)',
    scenario: "Les écarts sont analysés. Il reste à décider, documenter, informer le bailleur et mettre à jour le budget et le BFU.",
    steps: [
      {
        title: 'Décider : virement ou avenant',
        actions: [
          "Relisez l'article 8.2 : seuil de 10 % du budget de la ligne bénéficiaire, cumulé, notification préalable.",
          "Calculez : 1 350 ÷ 36 000 = 3,75 % ; aucun virement antérieur sur la ligne.",
          "Posez les quatre questions d'avenant : seuil, nature ou ampleur, durée-zone-bénéficiaires, exigence explicite. Quatre « non ».",
        ],
        result: "Virement de ligne avec notification préalable à ECHO ; pas d'avenant.",
      },
      {
        title: 'Documenter et informer',
        actions: [
          "Rédigez la note VL-2027-01 (cinq sections), signée le 13 janvier 2027 par le coordinateur et le Finance Manager.",
          "Notifiez ECHO le 14 janvier avec la note, le BFU et les devis ; interdisez la commande du lot 3 avant l'accusé de réception.",
        ],
        result: "Note signée, notification envoyée, aucun engagement avant validation.",
      },
      {
        title: 'Mettre à jour le budget et le BFU',
        actions: [
          "Enregistrez la v2 : Transport local 9 × 450 = 4 050 USD ; Kits NFI 2 000 × 18,675 = 37 350 USD.",
          "Relisez le BFU : les colonnes C se mettent à jour, le total reste 68 800 USD et l'enveloppe ECHO 62 800 USD.",
        ],
        result: "Le BFU lit désormais les budgets révisés ; la v1 reste intacte comme référence signée.",
      },
    ],
    table: {
      columns: ['Ligne', 'Budget avant', 'Budget après', 'Consommé', 'Reste à engager', '% consommé après'],
      rows: [
        ['Transport local', '5 400', '4 050', '3 150', '900', '77,8 %'],
        ['Kits NFI', '36 000', '37 350', '34 500', '2 850', '92,4 %'],
        ['Enveloppe ECHO', '62 800', '62 800', '49 950', '12 850', '79,5 %'],
      ],
    },
    result: "Livrable final du cas : BFU de décembre à jour, commentaires de lignes signalées, estimation à terminaison des 8 lignes, fiche de décision, note VL-2027-01 signée, budget v2. Le total du projet n'a pas changé (68 800 USD) : le virement déplace de l'argent entre deux lignes de la même enveloppe, il n'en crée pas.",
    tip: "Après le virement, Kits NFI reste au-dessus de 85 % (92,4 %) et la cellule reste rouge : c'est normal, la note la justifie. Le rouge n'est un problème que lorsqu'il n'est pas expliqué.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Chiffrer une extension du projet et choisir la méthode',
    instructions: "ECHO propose à KAS une extension de 4 mois : une distribution de kits d'hygiène à 500 ménages des sites de Masisi. ECHO finance les kits, le transport et la coordination ; Fondation Sigma finance la sensibilisation. Chiffrez les six lignes ci-dessous dans l'onglet « Budget » (lignes 13 et suivantes d'une copie du classeur), en choisissant la méthode de chaque ligne.",
    steps: [
      { title: 'Ligne a — Kits d\'hygiène (ECHO)', body: "500 kits ; devis retenu : 12,50 USD par kit." },
      { title: 'Ligne b — Transport (ECHO)', body: "4 rotations de camion 5 t Goma–Masisi à 450 USD l'aller-retour." },
      { title: 'Ligne c — Animateurs d\'hygiène (Fonds privés)', body: "6 animateurs × 5 jours de terrain, indemnité de 20 USD par jour." },
      { title: 'Ligne d — Formation d\'une journée de 12 relais (Fonds privés)', body: "Formateur 150 USD ; salle 40 USD ; restauration 12 × 8 USD ; transport des participants 12 × 6 USD." },
      { title: 'Ligne e — Frais divers de communication et fournitures (Fonds privés)', body: "Environ 25 USD par mois pendant 4 mois, dépenses de moins de 10 USD chacune." },
      { title: 'Ligne f — Coordinateur à 10 % de son temps (ECHO)', body: "Coût employeur 2 400 USD par mois, pendant 4 mois." },
    ],
    tip: "Pour chaque ligne, appliquez dans l'ordre les trois questions de la procédure 1, étape 3, puis calculez Quantité × Coût unitaire en colonne G.",
    pitfall: "Mettre la ligne d (formation) au forfait pour gagner du temps : c'est une activité ponctuelle détaillable, donc activité par activité.",
    deliverable: "Les six lignes saisies (colonnes A à F complètes, G calculée), la méthode et sa raison pour chaque ligne, les totaux par bailleur, et une note de forfait de trois phrases pour la ligne e.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — L'écart sur la ligne transport (cas du cours, Haïti)",
    instructions: "Vous êtes Finance Manager d'une ONG internationale mettant en œuvre un projet de réponse post-catastrophe de 12 mois dans le Sud d'Haïti, cofinancé par ECHO (70 %) et un fonds privé de fondation (30 %). La ligne « Transport & logistique carrier » est budgétée en coût unitaire (coût par tonne-kilomètre) à 45 000 USD sur l'ensemble du projet, répartie au prorata entre les deux bailleurs. Au BFU du mois 4 (un tiers de la durée écoulée), la ligne affiche 18 900 USD engagés + dépensés, soit 42 % de consommation pour un prorata de 33 %. Deux causes : (1) une hausse réelle du coût du carburant, qui a fait monter d'environ 12 % le coût par tonne-kilomètre du transporteur local ; (2) un taux de change réel dégradé de plus de 6 % par rapport au taux budgété, qui gonfle mécaniquement le montant en USD sans tonne-kilomètre supplémentaire. Projeté en fin de projet, l'écart atteindrait environ 18 %.",
    steps: [
      {
        title: 'Mettre à jour le BFU',
        actions: [
          "Dans une copie du template, saisissez dans l'onglet Budget deux lignes pour la ligne transport : une pour ECHO, une pour Fonds privés (hypothèse : 100 000 t-km × 0,45 USD = 45 000 USD, répartis 70 % / 30 %).",
          "Dans l'onglet BFU, saisissez l'engagé cumulé de 18 900 USD réparti 70 / 30, dont 14 700 USD payés (hypothèse de travail, répartie 70 / 30).",
          "Regardez si la mise en forme conditionnelle s'allume. Calculez l'écart en points contre le prorata.",
          "Testez la règle : saisissez temporairement l'engagé projeté en fin de projet (+18 %) et observez la cellule H, puis rétablissez 18 900.",
        ],
      },
      {
        title: 'Trancher virement ou avenant',
        actions: [
          "Supposez la clause suivante (fictive) : « virement jusqu'à 10 % du budget de la ligne bénéficiaire, cumulés, notification préalable ; au-delà, avenant ».",
          "Séparez la part opérationnelle (12 %) et la part de change (6 %), en USD et en %.",
          "Appliquez les quatre critères de la procédure 5, étape 3, à l'écart global projeté de 18 %. Justifiez par écrit sur la base du seuil, de la base de calcul et de la nature du changement.",
        ],
      },
      {
        title: 'Rédiger la note de demande de virement',
        actions: [
          "Remplissez les cinq sections du template note-demande-virement-ligne-budgetaire.docx.",
          "Choisissez une ligne source plausible, sous-consommée, dans la même composante bailleur : inventez ses chiffres de façon cohérente.",
          "Rédigez une justification d'un paragraphe qui sépare l'effet coût réel de l'effet de change.",
        ],
      },
    ],
    tip: "La part opérationnelle et la part de change ne se traitent pas de la même façon : la première est un besoin de réallocation, la seconde un effet de conversion à documenter séparément et à signaler au bailleur selon la clause de change de l'accord.",
    pitfall: "Additionner 12 % et 6 % sans les isoler dans la note. Le bailleur ne saurait pas ce qui relève de la performance du transport et ce qui relève du marché des changes.",
    deliverable: "Le BFU complété (deux lignes bailleur), la fiche de décision justifiée, et la note de virement rédigée avec une justification tenant en un paragraphe clair et vérifiable par un auditeur externe.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Rédiger le bilan et le chronogramme de la narrative annuelle',
    instructions: "À partir des faits ci-dessous (fictifs), rédigez les sections 2 et 5 de la narrative de planification annuelle du bureau de Goma, dans le gabarit-narrative-planification-annuelle-budgetaire.docx.",
    steps: [
      {
        title: 'Rédiger la section 2 — Bilan',
        actions: [
          "Faits : 12 BFU mensuels sur 12 à temps pour Nutrition, WASH et Santé ; 8 sur 8 pour NFI ; trois virements dans l'année (WASH ligne B +15 000 USD, NFI Kits +1 350 USD, Santé S3 +600 USD) ; un avenant sans coût (prolongation de 2 mois du projet Santé).",
          "Écrivez le bloc « objectifs budgétaires » avec les numéros de virement et le chiffre de chaque écart.",
          "Remplissez le tableau « Autres réalisations et défis » (colonne de gauche et colonne de droite).",
        ],
      },
      {
        title: "Rédiger l'impact budgétaire des enseignements",
        actions: [
          "Tirez deux enseignements chiffrés à partir des faits : séparation des fonctions et anticipation par la transparence.",
          "Écrivez pour chacun la règle de 2027 qui en découle.",
        ],
      },
      {
        title: 'Remplir la section 5 — Chronogramme',
        actions: [
          "Remplacez la ligne d'exemple et remplissez les quatre lignes vides du tableau Période / Jalon / Responsable, avec cinq jalons réels de 2027.",
          "Nommez un responsable par jalon.",
        ],
      },
    ],
    deliverable: "Les sections 2 et 5 rédigées, tenant sur une page, avec des chiffres, des numéros de virement et un chronogramme à responsables nommés.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 3)',
    items: [
      "Ex. 1 — Méthodes : a Kits d'hygiène, b Transport et c Animateurs en coût unitaire (500 × 12,50 ; 4 × 450 ; 30 jours-animateur × 20) ; d Formation et f Coordinateur en activité par activité ; e Frais divers en forfait avec note de justification.",
      "Ex. 1 — Montants : a 6 250 ; b 1 800 ; c 600 ; d 358 (150 + 40 + 96 + 72) ; e 100 ; f 960 (2 400 × 4 × 10 %). Total 10 068 USD.",
      "Ex. 1 — Totaux par bailleur : ECHO 9 010 USD (a + b + f), Fonds privés 1 058 USD (c + d + e), somme 10 068 USD.",
      "Ex. 2 — Onglet Budget : ligne ECHO 31 500 USD, ligne Fonds privés 13 500 USD ; BFU : engagé 13 230 / 5 670 USD, payé 10 290 / 4 410 USD, soldes 18 270 / 7 830 USD, 42,0 % pour chacune.",
      "Ex. 2 — La cellule H n'est PAS rouge à 42 % (règle à 85 %) : le signal vient du prorata (33,3 %, soit environ +9 points). La règle s'allume avec l'engagé projeté de 53 100 USD (118 %).",
      "Ex. 2 — Décomposition : 12 % opérationnel ≈ 5 400 USD ; 6 % change ≈ 2 700 USD ; total ≈ 8 100 USD (environ 18 % ; 18,7 % en composant les deux effets).",
      "Ex. 2 — Décision : sous une clause à 10 % de la ligne (4 500 USD), la part opérationnelle seule dépasse déjà le seuil : demande formelle d'approbation ou d'avenant, en un seul besoin non découpé ; la part de change est documentée séparément ; rien n'est engagé avant validation ; la demande est répartie 70 / 30 (5 670 / 2 430 USD).",
      "Ex. 2 — La note remplit les 5 sections, la ligne source est dans la même composante bailleur, la justification sépare effet coût réel et effet de change.",
      "Ex. 3 — La section 2 cite les trois virements avec leur montant et l'avenant ; deux enseignements sont chiffrés avec une règle pour 2027 ; le tableau est rempli des deux côtés.",
      "Ex. 3 — Le chronogramme comporte 5 jalons de 2027, chacun avec une période, un jalon précis et un responsable nommé.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Mettre à jour le BFU seulement en fin de projet. Parade : calendrier J1 à J5 affiché, le BFU part chaque mois, sans exception.",
      "Budgéter une ligne significative au forfait sans justification. Parade : les trois tests du forfait et une note de trois phrases pour chaque forfait.",
      "Confondre écart de change et dépassement opérationnel. Parade : tableau en trois lignes (budget, réel au taux budgété, réel au taux réel) avant toute conclusion.",
      "Traiter un budget multi-bailleurs comme une enveloppe unique. Parade : totaux et % consommés lus enveloppe par enveloppe ; jamais de virement entre deux bailleurs.",
      "Engager la dépense avant validation du virement ou de l'avenant. Parade : consigne écrite à la logistique, et accusé de réception ou approbation écrite avant la commande.",
      "Additionner D et E pour calculer le consommé. Parade : se rappeler que D inclut déjà le payé ; le consommé total est D.",
      "Se fier à la seule couleur du template. Parade : comparer toujours au prorata temporis et projeter l'estimation à terminaison.",
      "Découper un besoin en petits virements pour rester sous le seuil. Parade : un seul besoin, une seule demande, avec le cumul calculé.",
      "Oublier de mettre à jour l'onglet Budget après un virement approuvé. Parade : sauvegarde en v2 référencée au numéro VL, et relecture de la colonne C du BFU.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez chiffré les 8 lignes d'un budget NFI en choisissant la bonne méthode pour chacune, avec devis comparés, calculs de quantité et notes de forfait.",
      "Vous avez consolidé le budget dans l'onglet « Budget » du template, vérifié les totaux enveloppe par enveloppe (62 800 + 6 000 = 68 800 USD) et obtenu la validation interne signée.",
      "Vous avez alimenté l'onglet « BFU » pour le mois 8, saisi l'engagé cumulé et le payé, lu les signaux et comparé chaque ligne au prorata temporis de 66,7 %.",
      "Vous avez projeté le coût à terminaison de chaque ligne, décomposé l'écart des Kits NFI en volume et prix, et isolé un effet de change qui masquait un dépassement opérationnel.",
      "Vous avez tranché entre virement et avenant en relisant la clause, en calculant les trois bases (3,75 %, 25,0 %, 2,1 %) et en appliquant les quatre critères.",
      "Vous avez rédigé et fait valider la note VL-2027-01, avec une justification de cinq phrases chiffrées, et mis à jour le budget en v2 sans perdre la v1.",
      "Vous avez écrit la narrative de planification annuelle 2027 du bureau de Goma, de son contexte à son chronogramme, et traité le cas du cours (écart sur la ligne transport).",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Chaque ligne de mon budget porte une méthode (activité par activité, coût unitaire ou forfait) et une raison, et chaque forfait a sa note de justification.",
      "Les totaux par bailleur de mon onglet « Budget » égalent exactement les montants des accords signés.",
      "Mon budget a été relu par la coordination, la logistique et le Finance Manager, puis figé en v1 signée.",
      "Mon BFU a des formules prolongées sur toutes mes lignes, une règle rouge étendue, un prorata temporis dans le classeur et une lecture par enveloppe.",
      "Je sais que D (engagé cumulé) contient déjà le payé et que le consommé total est D : je n'additionne jamais D et E.",
      "Je produis chaque mois une estimation à terminaison des lignes signalées et un commentaire d'écart en cinq lignes.",
      "Je sais isoler l'effet de change d'un dépassement opérationnel avec le tableau en trois lignes.",
      "Je relis la clause de l'accord avant toute décision et je calcule le seuil sur sa base exacte ; je sais quand un avenant est obligatoire.",
      "Je n'engage aucune dépense avant l'accusé de réception ou l'approbation du bailleur, et je tiens la note de virement d'une page à jour.",
      "J'ai rédigé la narrative de planification annuelle avec ses cinq sections et un chronogramme à responsables nommés.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 03 — Trésorerie, Caisses & Avances Terrain. Vous y gérerez la trésorerie de terrain : politiques de caisse, plafonds, avances aux équipes et rapprochements quotidiens. C'est elle qui paie les engagements que votre BFU vient de rendre visibles : l'engagé non payé de vos lignes (7 100 USD dans le cas fil rouge) devient vos prévisions de décaissement.",
  },
]
