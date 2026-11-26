// Module 08 — Rédaction de Rapports d'Audit Professionnels
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (gabarit-rapport-audit-interne-ccce.docx : sections 1 à 6 ;
// grille-priorisation-recommandations.xlsx : onglets « Priorisation » et « Barème »).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (rapport de la mission achats-logistique de la base de Goma, de l'ONG
// fictive « Horizon Santé Grands Lacs », suite du module 01), avec exemples
// remplis, résultat attendu, astuces et erreurs à éviter. Le cas de Bunia
// (03-exercices.md) sert d'exercice noté.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: "Rédaction de Rapports d'Audit Professionnels",
    hook: "Un rapport techniquement correct que personne ne lit jusqu'au bout ne change rien sur le terrain. À la fin de ce module, vous aurez produit, de bout en bout, le rapport que votre Direction Pays peut réellement utiliser : un carnet de terrain trié en constats CCCE défendables, des recommandations assignables et priorisées, un rapport Word complet avec résumé exécutif d'une page, et le plan d'action correctif qui en suit l'exécution.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Trier un carnet de terrain en distinguant fait vérifié, opinion et ouï-dire, en produisant un journal des observations numérotées, un tableau de tri et une liste de constats candidats avec leur dossier de preuves.",
      "Formuler chaque constat selon la méthode CCCE (Constat chiffré et sourcé, Critère référencé, Cause vérifiée, Effet chiffré), en produisant des blocs de constats complets, titrés sans nom de personne et testés avec une liste de contrôle.",
      "Rédiger des recommandations assignables (responsable nommé, échéance datée, action vérifiable, preuve de clôture), en produisant une recommandation testée et acceptée par constat.",
      "Prioriser avec grille-priorisation-recommandations.xlsx en croisant risque et facilité de mise en œuvre, en produisant une grille remplie, triée, dont chaque cotation est justifiée en une phrase.",
      "Assembler un rapport complet dans gabarit-rapport-audit-interne-ccce.docx (sections 1 à 6) et rédiger en dernier un résumé exécutif d'une page avec niveau d'assurance global, en produisant un rapport provisoire prêt à diffuser.",
      "Conduire la relecture croisée, la validation des faits avec l'audité et la diffusion, puis suivre l'exécution, en produisant un plan d'action correctif accepté par écrit, avec preuves de clôture et statuts mensuels.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de style : c'est la fabrication complète d'un rapport d'audit, dans l'ordre où vous la vivrez au retour d'une mission. Chaque procédure se termine par une pièce du dossier, construite sur un seul cas fil rouge, depuis le carnet de terrain désordonné jusqu'au plan d'action suivi chaque mois.",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive que vous connaissez depuis le module 01. Vous rentrez de la mission d'audit du cycle achats-logistique de la base de Goma (travail de terrain du 18 au 28 mai 2026, clôture le 29 mai). Nous sommes le lundi 1er juin 2026 : le rapport provisoire doit être diffusé le 12 juin, et le Fonds Meridian visite la base en juillet.",
    ],
    bullets: [
      "Livrable 1 — Le journal des 13 observations de terrain, le tableau de tri fait / opinion / ouï-dire et la liste des constats candidats, avec dossier de preuves.",
      "Livrable 2 — Six constats CCCE complets (constat, critère, cause, effet), titrés et testés.",
      "Livrable 3 — Une recommandation assignable par constat : responsable nommé, échéance datée, preuve de clôture.",
      "Livrable 4 — La grille de priorisation Excel remplie, cotée, justifiée et triée.",
      "Livrable 5 — Le rapport Word : informations de mission, blocs de constats, synthèse, annexes.",
      "Livrable 6 — Le résumé exécutif d'une page, avec niveau d'assurance global et 3 recommandations prioritaires.",
      "Livrable 7 — Le dossier de relecture et de validation : contrôle des chiffres, fiche de relecture du pair, traitement des réponses de l'audité.",
      "Livrable 8 — Le plan d'action correctif accepté par écrit, son journal de suivi et la clôture d'une première recommandation.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : le rapport de la mission de Goma',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les personnes, l'organisation et les montants sont fictifs, mais construits sur des configurations réelles de bases de terrain dans l'Est de la RDC. Le périmètre est celui du module 01 : 412 bons de commande (BC) pour 1 380 000 USD, du 1er octobre 2025 au 31 mars 2026.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la rédaction du rapport'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", 'Commanditaire ; approuve le rapport définitif'],
        ['Joseph T.', 'Directeur Pays', 'Destinataire ; arbitre les actions qui dépassent la base'],
        ['Dr Patrice N.', 'Coordinateur de la base de Goma', 'Principal responsable des actions ; valide les faits'],
        ['Ruth B.', 'Finance Manager de la base', 'Responsable de plusieurs actions ; tient le suivi'],
        ['Josué M.', 'Logistics Officer (assure aussi la fonction de Log Manager, vacante)', "Audité principal ; relit les constats qui le concernent"],
        ['Esther K. et Didier L.', 'Assistante logistique et magasinier', 'Exécutants de certaines actions'],
        ['Fatou S.', 'Auditrice interne senior', "Relectrice du rapport ; a testé les seuils et mené trois entretiens (mesure d'indépendance du module 01)"],
      ],
    },
    example: {
      title: 'Chiffres clés et échéances du dossier',
      lines: [
        "Bureau de Goma : 46 employés, 3 bailleurs, budget annuel 3,2 M USD ; nouveau bailleur « Fonds Meridian » depuis janvier 2026, qui exige une mise en concurrence formelle dès 5 000 USD (la procédure interne ne l'exige qu'au-delà de 10 000 USD).",
        "Échéances de la lettre de mission : rapport provisoire 12 juin ; réponses de l'audité 19 juin ; rapport définitif et plan d'action 26 juin 2026.",
        "Le travail de terrain a produit un carnet de 13 observations, des extractions Excel et un dossier de pièces : tout reste à transformer en rapport.",
      ],
    },
    pitfall: "Le piège du retour de mission : se dire « je connais mes constats par cœur, je rédige directement ». Trois semaines plus tard, vous ne saurez plus dire d'où venait un chiffre. Toute la méthode de ce module sert à rendre chaque phrase du rapport traçable jusqu'à une pièce.",
  },
  {
    type: 'concept',
    title: 'Votre matière première : le carnet de terrain de Goma',
    body: "Voici les 13 notes telles qu'elles figurent dans le carnet d'Amani K., dans le désordre, entre deux entretiens et deux trajets. Elles serviront de fil conducteur aux procédures 1 à 3. Remarquez qu'aucune n'est encore un constat : certaines sont des faits solides, d'autres des opinions, une rumeur, un doublon, un fait incomplet.",
    table: {
      columns: ['N°', 'Date', 'Note brute (recopiée sans correction)'],
      rows: [
        ['N-01', '21/05', "« 14 BC Meridian entre 5 et 10 000 USD, total 97 500, rien de formel dans les dossiers. Josué : la grille ne parlait pas de Meridian. »"],
        ['N-02', '22/05', "« Josué demande ET réceptionne la plupart des petits BC depuis novembre. Compté 37 BC dans ce cas, 31 à lui. »"],
        ['N-03', '22/05', "« Josué m'a paru évasif sur les réceptions. Le Coordinateur laisse faire, je crois. »"],
        ['N-04', '23/05', "« 28 BC > 1 000 USD testés : tous signés par Dr Patrice avant l'engagement. Propre. »"],
        ['N-05', '23/05', "« 4 BC pneus > 1 000 USD signés par l'adjoint du Coordinateur pendant son absence (11-15 mai). Pas vu de délégation. »"],
        ['N-06', '24/05', "« Magasin : comptage de 20 articles, 3 écarts. Sorties notées avec du retard par Didier. Magasin mal rangé. »"],
        ['N-07', '25/05', "« Carburant mars : sorties de cuve 10 400 L ; carnets + registre groupes = 9 100 L. 2 véhicules sans carnet. Pas de rapprochement signé. »"],
        ['N-08', '25/05', "« Suivi audit externe 2024 : 5 recos, 2 « en cours » sans date. Tableau pas touché depuis septembre. »"],
        ['N-09', '25/05', "« Gardiens et chauffeurs (8) : 3 connaissent le mécanisme de signalement. Affiche seulement dans le hall. »"],
        ['N-10', '26/05', "« Un chauffeur dit que le fournisseur de pneus facture bien au-dessus du marché. »"],
        ['N-11', '26/05', "« 3 autres BC Meridian sans devis (0231, 0245, 0262). »"],
        ['N-12', '27/05', "« Écart grand livre achats / extraction : 6 400 USD, expliqué par des frais bancaires (déjà vu au cadrage). »"],
        ['N-13', '27/05', "« Plan d'action 2024 : qui le suit depuis la réorganisation de septembre ? Personne ne sait. »"],
      ],
    },
    tip: "Imprimez cette liste : vous y reviendrez à chaque procédure. À la fin du module, vous saurez dire pour chacune des 13 notes ce qu'elle est devenue : un constat, une cause, un point positif, ou rien (avec la raison).",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: "Le rapport qui ne sert à rien — et pourquoi il existe encore",
    body: [
      "Des dizaines de rapports d'audit techniquement corrects, parfaitement mis en page, n'ont strictement rien changé sur le terrain. Leur point commun : ils décrivent des problèmes sans jamais prouver qu'il s'agit bien de problèmes, et recommandent des solutions que personne ne sait qui doit exécuter, ni pour quand. Un Directeur Pays débordé qui reçoit 40 pages de constats non hiérarchisés referme le rapport à la page 5 et l'oublie dans un tiroir jusqu'au prochain audit externe, qui le redécouvre, et là, cela coûte cher.",
      "Le rapport d'audit n'est pas un exercice de style, ni la preuve que vous avez travaillé trois semaines. C'est un outil de décision. Chaque page doit répondre à quatre questions : qu'est-ce qui ne va pas, avec quelle gravité, pourquoi, et que dois-je faire, dans quel ordre, avec qui.",
    ],
    example: {
      title: 'Le même fait, deux rapports (fil rouge)',
      lines: [
        "Rapport qui dort dans un tiroir : « La gestion des achats à Goma est insuffisante et le Coordinateur ne respecte pas les seuils. Il faudrait renforcer les contrôles. »",
        "Rapport qui déclenche une décision : « Sur 14 achats imputés au Fonds Meridian entre 5 000 et 10 000 USD (97 500 USD), aucun ne comporte les trois offres écrites exigées par l'article 9 de la convention. Cause : la grille de seuils n'a pas été mise à jour à l'arrivée du bailleur. Effet : 97 500 USD exposés à un classement en dépenses inéligibles avant la visite de juillet. Action : note de service avant le 3 juillet, Dr Patrice N. »",
      ],
    },
    highlight: "Un rapport qui ne permet pas de répondre à ces quatre questions en moins de dix minutes de lecture n'a pas atteint son objectif, même truffé de références aux normes professionnelles.",
  },
  {
    type: 'concept',
    title: "La structure d'un rapport d'audit interne : six sections, six lecteurs",
    body: "Le gabarit du module (gabarit-rapport-audit-interne-ccce.docx) impose six sections. Chacune a un rôle précis et un lecteur type : le Conseil lit le résumé, le Coordinateur de base lit son constat, l'auditeur externe lit les annexes. Écrire pour le bon lecteur évite de tout répéter partout.",
    table: {
      columns: ['Section du gabarit', 'À quoi elle sert', 'Qui la lit vraiment', 'Quand la rédiger'],
      rows: [
        ['1. Informations sur la mission', 'Identifier la mission et garantir la traçabilité', 'Archives, auditeur externe, bailleur', 'Jour 2'],
        ['2. Résumé exécutif', "Porter seul le niveau d'assurance et les 3 à 5 priorités", "Comité d'audit, Conseil, Directeur Pays", 'EN DERNIER (jours 3-4)'],
        ['3. Constats détaillés CCCE', 'Prouver et expliquer chaque écart, avec la recommandation associée', 'Coordinateur de base, responsables d\'action', 'Jours 2-3'],
        ['4. Synthèse des recommandations', "Donner l'ordre d'exécution, par priorité", 'Directeur Pays, responsables', 'Jour 3, après la grille'],
        ['5. Annexes', 'Rendre le rapport vérifiable : documents, personnes, grille', 'Auditeur externe, bailleur', 'Au fil de la rédaction'],
        ['6. Validation', 'Tracer qui a rédigé, revu, approuvé, et quand', 'Comité, auditeur externe', 'Jours 4-5, avant diffusion'],
      ],
    },
    tip: "Les normes de l'IIA demandent une communication des résultats précise, objective, claire, concise, constructive, complète et émise en temps utile (norme 2420 ; norme 15.1 des Normes mondiales 2024). Ces sept qualités sont votre grille de relecture finale.",
  },
  {
    type: 'concept',
    title: "Fait, opinion, ouï-dire : trois statuts d'information à ne jamais mélanger",
    body: "Votre carnet mélange ce que vous avez vu, ce que vous pensez et ce qu'on vous a dit. Un constat n'accepte que le premier. Le test est simple : un tiers, avec vos pièces, retrouverait-il la même information sans vous ?",
    table: {
      columns: ['Statut', 'Définition et test', 'Exemple du carnet de Goma', 'Traitement'],
      rows: [
        ['Fait vérifié', "Un tiers retrouve l'information à partir d'une pièce ou d'une observation datée, avec chiffre et source", "N-07 : 10 400 L sortis de la cuve en mars, 9 100 L justifiés par les carnets", 'Retenu pour constat'],
        ['Opinion', 'Jugement ou impression de l\'auditeur : aucun tiers ne peut la vérifier', "N-03 : « Josué m'a paru évasif… le Coordinateur laisse faire, je crois »", 'Écartée ; reformulée en fait vérifiable'],
        ['Ouï-dire', "Affirmation d'une personne que vous n'avez pas recoupée par une pièce ou une 2e source", "N-10 : « le fournisseur de pneus facture bien au-dessus du marché »", 'Non retenu tant qu\'il n\'est pas recoupé'],
        ['Fait incomplet', "Un fait réel mais il manque un chiffre, une date, une référence ou un critère", "N-05 : adjoint qui signe, « pas vu de délégation »", 'À compléter par une vérification'],
      ],
    },
    pitfall: "Garder une opinion dans le rapport « parce qu'elle est probablement vraie ». Si elle est vraie, un fait la prouve : cherchez-le. Si vous ne le trouvez pas, la phrase n'a pas sa place dans le rapport.",
  },
  {
    type: 'comparison-table',
    title: 'La méthode CCCE : transformer une observation en constat défendable',
    columns: ['Élément', 'Question à laquelle il répond', 'Ce qu\'il contient', 'Exemple Goma (cumul demande / réception)'],
    rows: [
      ['Constat', 'Qu\'est-ce qui EST ?', 'Un fait vérifié par une preuve ou une observation directe : un chiffre, une source, jamais un adjectif', "Sur les 412 BC de la période, 37 (21 400 USD) ont le même demandeur et réceptionnaire."],
      ['Critère', 'Qu\'est-ce qui DEVRAIT être ?', 'La norme, la procédure interne ou le manuel bailleur, citée précisément (document, version, section)', "Procédure achats v2, section 6.1 : la réception est faite par une personne distincte du demandeur."],
      ['Cause', 'POURQUOI cet écart ?', "L'explication recherchée activement pendant la mission, jamais devinée depuis le bureau", "L'assistant achats est parti le 14/11/2025, non remplacé ; aucun visa compensatoire du journal des achats."],
      ['Effet', 'Et alors ? Quelle CONSÉQUENCE ?', "La conséquence réelle, chiffrée ou qualifiée, si l'écart n'est pas corrigé", "21 400 USD (1,6 % des achats) sans contrôle indépendant : livraison fictive possible et non détectable."],
      ['Recommandation (liée)', 'Que FAIRE, qui, quand ?', 'Une action assignable qui traite la cause, avec responsable, échéance et preuve', "Confier la réception au magasinier dès le 30/06/2026 (Dr Patrice N.)."],
    ],
  },
  {
    type: 'concept',
    title: 'Ce que change concrètement la méthode CCCE',
    body: "La méthode CCCE empêche l'auditeur d'écrire un constat accusatoire (« le Coordinateur ne respecte pas les procédures ») et l'oblige à écrire un constat construit, où chaque affirmation est adossée à une preuve, une norme, une explication recherchée sur le terrain et une conséquence réelle. Un constat qui nomme une fonction et un fait se défend ; un constat qui nomme une faute se conteste.",
    example: {
      title: 'Accusation contre constat CCCE (fil rouge)',
      lines: [
        "Accusation : « Josué M. contourne les procédures et réceptionne ses propres commandes. »",
        "Constat CCCE : « Sur 37 BC (21 400 USD), le demandeur est aussi le réceptionnaire, dont 31 pour le Logistics Officer. Critère : procédure achats v2, section 6.1. Cause : départ non remplacé de l'assistant achats le 14/11/2025. Effet : 21 400 USD sans contrôle indépendant de la réception. »",
        "Dans la seconde version, personne n'est accusé, tout est vérifiable, et la cause (un poste vacant) oriente vers la bonne action.",
      ],
    },
    highlight: "C'est aussi ce qui protège l'auditeur : un constat CCCE complet résiste à la contestation, parce qu'il ne repose sur aucune opinion personnelle non sourcée.",
  },
  {
    type: 'concept',
    title: 'Le critère : quelle règle citer, et laquelle prime',
    body: "Sans critère explicite et référencé, un constat n'est qu'une préférence personnelle, et c'est la première question qu'un audité compétent vous posera. Plusieurs règles peuvent s'appliquer en même temps : citez toutes celles qui sont pertinentes, et dites laquelle est la plus stricte.",
    table: {
      columns: ['Rang', 'Type de critère', 'Exemple (Goma)', 'Précaution'],
      rows: [
        ['1', 'Loi ou réglementation nationale applicable', "Obligations légales de conservation des pièces comptables", 'Citer le texte et l\'article ; ne pas interpréter seul'],
        ['2', 'Convention de subvention ou manuel du bailleur', "Convention Fonds Meridian, article 9 : mise en concurrence formelle dès 5 000 USD", 'Citer l\'article et la version de la convention'],
        ['3', "Procédure interne de l'organisation", "Procédure achats v2, section 5.2 (seuils) et 6.1 (séparation des tâches)", 'Vérifier qu\'elle est en vigueur et diffusée'],
        ['4', 'Bonne pratique reconnue (COSO, normes professionnelles)', "Séparation des tâches : principe COSO « activités de contrôle »", 'À utiliser en appui, jamais seule pour un écart de conformité'],
      ],
    },
    highlight: "Quand deux critères se contredisent (5 000 USD pour Meridian, 10 000 USD pour la procédure interne), le plus strict s'applique à la dépense concernée, et le rapport cite les deux : c'est précisément ce conflit qui est le constat.",
    pitfall: "Écrire « selon les bonnes pratiques » sans source. Si vous ne trouvez aucun critère écrit, ce n'est pas un écart mais une observation d'amélioration : classez-la comme telle, sans l'habiller en non-conformité.",
  },
  {
    type: 'checklist',
    title: "Une recommandation assignable, ce n'est pas un vœu pieux",
    items: [
      "Un responsable nommé : pas « l'équipe achats », mais une personne précise, avec sa fonction, qui a l'autorité d'agir.",
      "Une échéance datée : pas « prochainement », une date de calendrier réaliste au regard de la cause.",
      "Une action vérifiable : un livrable ou un état qu'on peut constater, pas une intention.",
      "Un lien direct avec la cause : la recommandation traite la cause identifiée, pas seulement le symptôme.",
      "Une preuve de clôture définie à l'avance : note de service signée, photo du compteur, premier rapprochement signé.",
      "À éviter : « renforcer les contrôles sur les achats » ne se traduit jamais en action.",
      "Ce qui fonctionne : « Le Log Manager de base convoque et documente un comité d'achat formel pour tout achat supérieur à 1 000 USD, PV signé archivé dans les 48 h, à compter du 1er du mois suivant » : cela se traduit, se suit et se clôture.",
    ],
  },
  {
    type: 'concept',
    title: "Prioriser : pourquoi tout ne peut pas être « urgent »",
    body: [
      "Un rapport de 15 recommandations toutes présentées comme prioritaires produit le même effet qu'un rapport sans aucune recommandation : personne ne sait par où commencer. La priorisation professionnelle croise deux axes, jamais un seul : le niveau de risque de l'écart (financier, réputationnel, conformité bailleur, sécurité) et la facilité de mise en œuvre de la recommandation (ressources, résistance au changement, délai).",
      "Un risque élevé corrigible vite et à faible coût est une « quick win » à traiter immédiatement. Un risque élevé mais structurellement difficile à corriger reste visible en tête de rapport, avec un plan à plus long terme. Un risque faible n'a rien à faire dans le résumé exécutif.",
    ],
    table: {
      columns: ['Score (risque × facilité)', 'Priorité', 'Lecture', 'Place dans le rapport'],
      rows: [
        ['15 à 25', 'Prioritaire', 'Quick win ou risque critique, à traiter en premier', 'Résumé exécutif + section 3 + section 4'],
        ['8 à 14', 'Moyenne', 'À planifier dans le plan d\'action, sans urgence absolue', 'Section 3 + section 4'],
        ['1 à 7', 'Faible', 'À conserver en annexe de suivi', 'Section 4 ; hors résumé exécutif'],
      ],
    },
    highlight: "La priorisation structure la lecture du rapport dès le résumé exécutif, où seules les 3 à 5 recommandations les plus critiques apparaissent, renvoyées au corps du rapport pour les lecteurs qui veulent creuser.",
  },
  {
    type: 'stat-callout',
    stat: '3 à 5',
    caption: 'recommandations au maximum dans le résumé exécutif',
    context: "Un résumé exécutif qui liste 12 recommandations n'est plus un résumé : c'est une table des matières déguisée. Toutes les recommandations figurent dans la section 4 et dans la grille ; le résumé n'en garde que les plus critiques, pour qu'un lecteur qui s'arrête à la page 1 sache déjà par quoi commencer.",
  },
  {
    type: 'comparison-table',
    title: "Le niveau d'assurance global : une échelle à quatre niveaux",
    columns: ['Niveau', 'Quand le retenir (règle du module)', 'Formulation type'],
    rows: [
      ['Assurance élevée', 'Aucun constat Prioritaire ; aucun indice de fraude', "« Le dispositif de contrôle du périmètre est conçu et appliqué de façon satisfaisante. »"],
      ['Assurance modérée', 'Un à deux constats Prioritaires ; aucun indice de fraude avérée', "« Le dispositif présente des faiblesses significatives sur [domaines], sans indice de fraude avérée à ce stade. »"],
      ['Assurance limitée', 'Trois constats Prioritaires ou plus, ou un contrôle clé absent', "« Le dispositif ne permet pas de garantir [objectif] sur [domaines] ; des mesures immédiates sont nécessaires. »"],
      ['Assurance insuffisante', "Indice de fraude avérée, ou défaillance généralisée d'un cycle", "« Le dispositif ne protège pas le cycle audité ; la Direction doit agir avant toute poursuite des opérations concernées. »"],
    ],
  },
  {
    type: 'concept',
    title: 'Rapport provisoire, droit de réponse, rapport définitif',
    body: "Un rapport d'audit ne se diffuse jamais en une seule fois. Le rapport provisoire va d'abord à l'audité pour valider les faits et recueillir sa réponse ; le rapport définitif intègre ces réponses. Ce délai de contradiction protège la qualité de vos constats : une erreur factuelle trouvée par l'audité avant diffusion vous coûte une correction, trouvée après elle vous coûte votre crédibilité.",
    table: {
      columns: ['Date (Goma)', 'Étape', 'Qui fait quoi'],
      rows: [
        ['12 juin 2026', 'Rapport provisoire diffusé', "Amani K. envoie au Coordinateur, au Finance Manager et au Directeur Pays"],
        ['12-19 juin', "Validation des faits et réponses", "Chaque responsable confirme les faits et accepte, modifie ou refuse l'action qui le concerne"],
        ['19 juin', 'Réunion de validation', "Amani K. et Fatou S. traitent chaque désaccord avec preuves"],
        ['26 juin', 'Rapport définitif + plan d\'action', "Approbation par la présidente du comité d'audit, diffusion, début du suivi"],
      ],
    },
    tip: "La validation porte sur les faits et sur la faisabilité des actions. L'audité peut obtenir qu'un chiffre soit corrigé ou qu'une action soit reformulée ; il ne peut pas obtenir qu'un constat prouvé disparaisse. Sa réponse, elle, est publiée dans le rapport.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: 'CCCE', definition: "Méthode de formulation d'un constat d'audit en quatre éléments obligatoires : Constat, Critère, Cause, Effet." },
      { term: 'Critère', definition: "La règle de référence (loi, convention bailleur, procédure interne, bonne pratique) par rapport à laquelle on mesure l'écart." },
      { term: 'Résumé exécutif', definition: "Synthèse d'une page maximum, en tête de rapport, qui porte à elle seule le niveau d'assurance global et les recommandations les plus critiques." },
      { term: "Niveau d'assurance global", definition: "Jugement d'ensemble de l'auditeur sur la maîtrise du périmètre audité (élevée, modérée, limitée, insuffisante), fondé sur les constats et jamais sur une impression." },
      { term: "Plan d'action correctif", definition: "Document de suivi (Management Action Plan) qui assigne chaque recommandation à un responsable nommé avec une échéance datée et un statut suivi dans le temps." },
      { term: 'Quick win', definition: "Recommandation à risque significatif mais à coût et délai de mise en œuvre faibles, à traiter en priorité absolue." },
      { term: 'Score de priorité', definition: "Dans la grille du module : niveau de risque (1-5) × facilité de mise en œuvre (1-5), calculé automatiquement ; 15 et plus = Prioritaire, 8 à 14 = Moyenne, moins de 8 = Faible." },
      { term: 'Rapport provisoire', definition: "Version du rapport envoyée à l'audité pour validation des faits et réponse, avant approbation et diffusion du rapport définitif." },
      { term: 'Tick-and-tie', definition: "Contrôle de référencement : chaque chiffre et chaque citation du rapport est rattaché à une pièce du dossier et coché." },
      { term: 'Preuve de clôture', definition: "Document ou état constatable qui démontre qu'une recommandation est réellement mise en œuvre." },
    ],
  },
  {
    type: 'concept',
    title: 'Votre feuille de route : du carnet au plan d\'action en huit procédures',
    body: "Les huit procédures qui suivent reprennent, dans l'ordre, le guide pratique « des notes de terrain désordonnées au rapport prêt à diffuser », en le déroulant geste par geste. Chacune produit une pièce utilisée par la suivante.",
    table: {
      columns: ['Procédure', 'Repère de planning', 'Pièce produite', 'Outil'],
      rows: [
        ['1. Trier les observations', 'Jour 1', 'Journal des observations, tableau de tri, constats candidats', 'Carnet, Excel'],
        ['2. Écrire les constats CCCE', 'Jours 1-2', 'Six constats complets et testés', 'Gabarit (bloc de constat)'],
        ['3. Rédiger les recommandations', 'Jours 2-3', 'Une recommandation assignable par constat', 'Gabarit'],
        ['4. Prioriser dans la grille', 'Jour 3', 'Grille remplie, cotée et triée', 'grille-priorisation-recommandations.xlsx'],
        ['5. Assembler le rapport Word', 'Jours 2-3', 'Sections 1, 3, 4 et 5 remplies', 'gabarit-rapport-audit-interne-ccce.docx'],
        ['6. Rédiger le résumé exécutif', 'Jours 3-4', 'Section 2 : une page', 'Gabarit, section 2'],
        ['7. Relire, valider, diffuser', 'Jours 4-5 puis 12-26 juin', 'Rapport provisoire puis définitif, section 6 signée', 'Gabarit, section 6'],
        ['8. Suivre le plan d\'action', 'Après diffusion', 'Plan d\'action accepté, journal de suivi, clôtures', 'Grille (suivi)'],
      ],
    },
    tip: "Les repères de jours sont ceux du guide source : prévoyez cinq jours ouvrés entre le retour de mission et un rapport relu. Un rapport rédigé en deux jours est presque toujours un rapport non relu.",
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Trier les observations brutes ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Rassembler toutes vos notes dans un journal des observations numérotées',
    intro: "Pourquoi : une note qui n'est pas numérotée et sourcée finit oubliée ou, pire, réécrite de mémoire. Quand : jour 1 du retour, avant toute rédaction. Entrées : carnet, enregistrements d'entretiens, photos, captures d'écran, extractions Excel.",
    steps: [
      {
        title: 'Créez le journal des observations',
        actions: [
          "Ouvrez un nouveau classeur Excel et nommez-le 2026-06-01_Journal_observations_Goma.xlsx.",
          "Créez cinq colonnes : N°, Date, Source (entretien, dossier, observation directe, extraction), Pièce ou personne (n° de BC, nom de fichier, fonction), Note brute.",
        ],
      },
      {
        title: 'Transcrivez chaque note sans la corriger',
        actions: [
          "Recopiez le carnet ligne par ligne ; réécoutez les enregistrements pour compléter ce que vous n'aviez pas eu le temps d'écrire.",
          "Numérotez dans l'ordre chronologique : N-01, N-02… Ne reformulez rien : la formulation d'origine est une preuve de ce que vous aviez réellement vu.",
          "Renommez chaque photo avec le numéro de la note (N-07_cuve_compteur.jpg).",
        ],
      },
      {
        title: 'Complétez la colonne « Source » pendant que vous vous en souvenez',
        body: "Pour chaque note, écrivez où l'information a été vue : n° de BC, fichier, nom de la fonction interrogée, date de l'entretien. Ce qui n'a pas de source reste dans le journal, mais sera classé « ouï-dire » à l'étape 2.",
      },
    ],
    example: {
      title: 'Extrait du journal des observations — Goma, 1er juin 2026',
      lines: [
        "N-01 | 21/05/2026 | Dossiers BC + extraction Excel | Extraction T_BC, filtre Bailleur = Meridian, 5 000 ≤ montant ≤ 10 000 | « 14 BC Meridian entre 5 et 10 000 USD, total 97 500, rien de formel dans les dossiers. Josué : la grille ne parlait pas de Meridian. »",
        "N-07 | 25/05/2026 | Observation directe + registres | Registre de cuve mars 2026 ; carnets de bord ; registre des 2 groupes | « Carburant mars : sorties de cuve 10 400 L ; carnets + registre groupes = 9 100 L. 2 véhicules sans carnet. Pas de rapprochement signé. »",
        "N-10 | 26/05/2026 | Entretien informel | Un chauffeur (non identifié) | « Un chauffeur dit que le fournisseur de pneus facture bien au-dessus du marché. »",
      ],
    },
    result: "Un journal de 13 lignes, numérotées et sourcées, qui contient tout ce que vous avez vu ou entendu. Contrôle : aucune ligne n'a été reformulée, et aucune pièce n'est introuvable.",
    tip: "Faites ce travail dès le premier jour ouvré du retour, même si vous êtes fatigué : au bout d'une semaine, vous ne saurez plus ce que « 2 véhicules sans carnet » désignait exactement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Classer chaque note : fait vérifié, opinion, ouï-dire ou fait incomplet',
    intro: "Pourquoi : seul un fait vérifié peut devenir un constat. Entrée : le journal de l'étape 1. Principe : vous jugez la note, pas la personne qui vous l'a donnée.",
    steps: [
      {
        title: 'Ajoutez une colonne « Statut » au journal',
        actions: [
          "Insérez une colonne F nommée Statut ; ajoutez une validation de données (Données > Validation) avec la liste : Fait vérifié, Opinion, Ouï-dire, Fait incomplet.",
        ],
      },
      {
        title: 'Posez trois questions à chaque note',
        actions: [
          "Q1. Un tiers, avec mes pièces, retrouverait-il la même information sans moi ?",
          "Q2. La note contient-elle un chiffre, une date, une source précise ?",
          "Q3. L'ai-je vu moi-même, ou recoupé par une deuxième source (pièce ou personne) ?",
        ],
      },
      {
        title: 'Appliquez la règle de décision',
        actions: [
          "Trois « oui » : Fait vérifié.",
          "Un jugement ou une impression (« évasif », « mal rangé », « je crois ») : Opinion.",
          "Information donnée par un tiers, non recoupée : Ouï-dire.",
          "Fait réel mais il manque un chiffre, une date ou une référence : Fait incomplet.",
        ],
      },
      {
        title: 'Reformulez chaque opinion en un fait à vérifier',
        body: "Demandez-vous : quel fait observable m'a donné cette impression ? Écrivez ce fait dans la colonne « À vérifier ».",
      },
    ],
    table: {
      columns: ['Note', 'Statut', 'Motif', 'À vérifier'],
      rows: [
        ['N-01', 'Fait vérifié', 'Chiffre, source (extraction + dossiers), vu par moi', '—'],
        ['N-03', 'Opinion', '« évasif », « je crois » : aucun tiers ne peut le vérifier', 'Existe-t-il un visa mensuel du journal des achats ?'],
        ['N-05', 'Fait incomplet', 'Signature par l\'adjoint constatée, mais délégation « pas vue »', 'Une délégation écrite existe-t-elle ? Date, plafond'],
        ['N-10', 'Ouï-dire', 'Un seul chauffeur, aucune pièce, aucun prix de référence', 'Comparer 3 prix de référence avant d\'écrire quoi que ce soit'],
      ],
    },
    result: "Les 13 notes portent un statut ; chaque opinion est traduite en un fait à vérifier. Contrôle : aucune note n'est restée sans statut.",
    pitfall: "Classer en « fait vérifié » une note parce que la personne qui l'a donnée est crédible. Un Coordinateur sincère peut se tromper de chiffre : sans pièce, c'est du ouï-dire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Classer par domaine, fusionner les doublons et écarter ce qui ne repose sur rien',
    intro: "Pourquoi : savoir combien d'observations distinctes vous avez réellement par domaine, avant de rédiger. Entrée : le journal statué. Objectif : une décision écrite pour chaque note.",
    steps: [
      {
        title: 'Ajoutez les colonnes « Domaine » et « Décision »',
        actions: [
          "Domaine : le cycle audité (achats, logistique, gouvernance et pilotage, RH, trésorerie).",
          "Décision : Retenue, Fusionnée avec N-xx, Complément requis, Écartée.",
        ],
      },
      {
        title: 'Fusionnez les doublons',
        body: "Deux notes qui décrivent le même écart relèvent du même constat. Gardez la note la plus complète comme référence et notez l'autre en « fusionnée avec ».",
      },
      {
        title: 'Écartez, mais jamais en silence',
        actions: [
          "Une note écartée reçoit toujours un motif écrit : opinion sans fait, ouï-dire non recoupé, hors périmètre, déjà traité.",
          "Une note qui est une cause (et non un écart) est rattachée au constat qu'elle explique.",
        ],
      },
      {
        title: 'Repérez les points positifs',
        body: "Un contrôle qui fonctionne est une information d'audit : retenez-le, il nourrira le niveau d'assurance global du résumé exécutif.",
      },
    ],
    table: {
      columns: ['Note', 'Domaine', 'Décision', 'Devient'],
      rows: [
        ['N-01 + N-11', 'Achats', 'Retenue (N-11 fusionnée : 3 des 14 BC)', 'Constat « Meridian sans mise en concurrence »'],
        ['N-02', 'Achats', 'Retenue', 'Constat « Cumul demande / réception »'],
        ['N-03', 'Achats', 'Écartée (opinion) ; fait à vérifier', 'Alimente la cause du constat précédent'],
        ['N-04', 'Achats', 'Retenue (point positif)', 'Point de maîtrise du résumé exécutif'],
        ['N-05', 'Achats', 'Complément requis', 'Dépend de la vérification (étape 4)'],
        ['N-06', 'Logistique', "Retenue pour les écarts ; « mal rangé » écartée (ni critère ni chiffre)", 'Constat « Écarts de stock »'],
        ['N-07', 'Logistique', 'Retenue', 'Constat « Carburant non rapproché »'],
        ['N-08 + N-13', 'Pilotage', 'Retenue ; N-13 = cause', 'Constat « Plan d\'action 2024 sans suivi »'],
        ['N-09', 'Gouvernance', 'Retenue', 'Constat « Signalement peu connu »'],
        ['N-10', 'Achats', 'Écartée (ouï-dire non recoupé)', 'Consignée pour vérification ultérieure'],
        ['N-12', 'Achats', 'Écartée (déjà expliquée au cadrage : 6 400 USD de frais bancaires)', 'Aucun constat'],
      ],
    },
    result: "Un tableau de tri complet : 13 notes, 11 lignes de décision, chacune motivée. Le nombre de constats candidats est connu : six, plus un point positif.",
    tip: "Gardez le tableau de tri dans le dossier de mission. Si un audité demande un jour « pourquoi n'avez-vous pas parlé de X ? », la réponse écrite existe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Compléter les informations manquantes par des vérifications ciblées',
    intro: "Pourquoi : une note incomplète n'est pas mûre pour le rapport ; le bon réflexe est de la compléter, jamais de l'inventer. Quand : jours 1-2, tant que les personnes et les pièces sont encore joignables. Entrée : les notes « Complément requis » et les faits à vérifier.",
    steps: [
      {
        title: 'Listez ce qui manque pour chaque note concernée',
        actions: [
          "Cochez parmi : chiffre exact, référence de la pièce, critère, date de début de l'écart, fonction concernée.",
          "Pour chaque manque, notez qui peut répondre et par quel canal (courriel, appel, pièce à demander).",
        ],
      },
      {
        title: 'Envoyez les demandes de vérification le jour même',
        actions: [
          "Rédigez une demande courte, factuelle, avec la pièce attendue (« merci de me transmettre toute délégation de signature en vigueur du 11 au 15 mai 2026 »).",
          "Fixez un délai de réponse de 48 heures.",
        ],
      },
      {
        title: 'Consignez chaque réponse avec sa date et sa source',
        body: "Ajoutez la réponse dans le journal (colonne « Vérification »), avec la pièce reçue. Une réponse orale non confirmée reste du ouï-dire.",
      },
      {
        title: 'Tranchez : constat, ou plus rien',
        actions: [
          "Si le complément confirme l'écart : la note devient un fait vérifié.",
          "Si le complément le lève : la note est écartée, avec la preuve qui le justifie.",
          "Si aucune réponse n'arrive : la note ne figure pas dans le rapport.",
        ],
      },
    ],
    example: {
      title: 'Trois vérifications menées les 28 et 29 mai 2026',
      lines: [
        "N-05 (signature de l'adjoint) : demande au secrétariat de direction le 28/05. Réponse du 28/05 : courriel du Coordinateur du 08/05/2026 délégant à son adjoint la signature des BC jusqu'à 5 000 USD pour la période du 11 au 15 mai ; les 4 BC (6 300 USD au total) sont tous sous ce plafond. → Aucun constat. Note écartée avec pièce.",
        "N-03 (« le Coordinateur laisse faire ») : fait à vérifier = visa mensuel du journal des achats. Constat du 28/05 : le journal des achats ne porte aucun visa de contrôle de novembre 2025 à avril 2026. → Fait vérifié, rattaché à la cause du constat « Cumul demande / réception ».",
        "N-01 (cause) : date de réception de la convention par la base. Courriel de Ruth B. du 03/03/2026 : convention reçue ce jour-là ; signée au siège le 12/12/2025, extrait des clauses d'achat jamais transmis. → Cause documentée par un courriel.",
      ],
    },
    result: "Aucune note « Complément requis » ne subsiste : chacune est confirmée ou écartée, avec sa pièce. Le dossier gagne une cause documentée (N-01) et perd un faux positif (N-05).",
    pitfall: "Compléter le chiffre manquant « à peu près » pour boucler le rapport. Un chiffre inventé, découvert par l'audité, ruine tous vos autres constats, y compris les exacts.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Constituer le dossier de preuves et figer la liste des constats candidats',
    intro: "Pourquoi : un constat n'existe que s'il est prouvé et que sa preuve se retrouve en dix secondes. Entrées : journal trié et complété. Règle de découpage : un constat = un écart + un critère + une cause.",
    steps: [
      {
        title: 'Créez l\'arborescence des preuves',
        actions: [
          "Dans le dossier de mission, ouvrez « 04_Tests » > « Preuves » avec un sous-dossier par constat : C-01, C-02… C-06.",
          "Nommez chaque pièce : C-02_BC-0187_demandeur-egal-receptionnaire.pdf.",
        ],
      },
      {
        title: 'Appliquez la règle de découpage',
        actions: [
          "Même critère ET même cause : un seul constat, même s'il y a 14 occurrences (14 BC = 1 constat, pas 14).",
          "Critères différents ou causes différentes : deux constats, même si la même personne est concernée.",
        ],
      },
      {
        title: 'Numérotez les constats candidats dans l\'ordre du cycle audité',
        body: "De la demande d'achat jusqu'au pilotage : C-01, C-02, etc. La priorité sera établie plus tard dans la grille ; le numéro ne mesure pas la gravité.",
      },
      {
        title: 'Rattachez pièces et notes à chaque constat',
        actions: [
          "Pour chaque constat, listez les numéros de notes (N-xx) et les pièces du sous-dossier.",
          "Vérifiez qu'au moins une pièce prouve le constat et qu'une pièce ou un entretien documenté prouve la cause.",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Titre provisoire', 'Notes sources', 'Pièces clés au dossier'],
      rows: [
        ['C-01', 'Achats Meridian sans mise en concurrence formelle', 'N-01, N-11', 'Extraction T_BC, 14 dossiers BC, convention art. 9, courriel du 03/03'],
        ['C-02', 'Réception assurée par le demandeur', 'N-02, N-03', 'Extraction (colonne CUMUL), 10 constats physiques, journal des achats sans visa'],
        ['C-03', 'Carburant : cuve non rapprochée des consommations', 'N-07', 'Registre de cuve mars, carnets de bord, registre des groupes'],
        ['C-04', 'Écarts entre fiches de stock et comptage', 'N-06', 'Feuille de comptage du 24/05, fiches de stock'],
        ['C-05', 'Plan d\'action de l\'audit 2024 sans suivi', 'N-08, N-13', 'Tableau de suivi, rapport 2024'],
        ['C-06', 'Mécanisme de signalement peu connu du personnel d\'appui', 'N-09', 'Notes d\'entretien des 8 gardiens et chauffeurs, photo de l\'affichage'],
      ],
    },
    example: {
      title: 'Pourquoi 14 BC Meridian = un seul constat',
      lines: [
        "Les 14 achats partagent le même critère (article 9 de la convention) et la même cause (grille de seuils non mise à jour). Les lister un par un dans le corps du rapport noierait le lecteur ; la liste complète va en annexe.",
        "À l'inverse, C-01 et C-02 concernent tous deux des achats traités par la même équipe, mais leur critère (convention Meridian contre séparation des tâches) et leur cause (information non transmise contre poste vacant) diffèrent : ce sont deux constats.",
      ],
    },
    result: "Six constats candidats numérotés, chacun relié à des notes et à un sous-dossier de preuves, plus un point positif (N-04). Le dossier est prêt pour la rédaction CCCE.",
    tip: "Mettez à jour le journal : pour chaque note, ajoutez la colonne « Devenue » (C-01…, point positif, écartée). Vous pourrez ainsi répondre en dix secondes à la question « qu'est devenue ma note N-12 ? ».",
  },

  // ── Procédure 2 — Écrire un constat CCCE ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Écrire le CONSTAT : un fait, un chiffre, une source',
    intro: "Pourquoi : c'est la phrase qu'un audité testera en premier ; elle doit être incontestable. Entrées : le sous-dossier de preuves du constat, vos feuilles de calcul. Longueur visée : une à trois phrases.",
    steps: [
      {
        title: 'Rassemblez les cinq composantes du constat',
        actions: [
          "Population examinée (ex. : les 412 BC de la période) et échantillon éventuel.",
          "Résultat chiffré : le nombre d'écarts, et le montant concerné.",
          "Période et périmètre exacts.",
          "Source : la pièce ou l'extraction qui permet de recompter.",
          "Dénominateur : toujours le total de référence, pour que « 37 » ait un sens.",
        ],
      },
      {
        title: 'Appliquez le modèle de phrase',
        body: "« Sur [N] [objets] examinés [période / périmètre], [n] présentent [l'écart], soit [montant et / ou pourcentage]. Source : [pièce]. »",
      },
      {
        title: 'Supprimez adjectifs, adverbes et noms de personnes',
        actions: [
          "Retirez « grave », « inacceptable », « systématiquement », « manifestement » : l'effet chiffré parle seul.",
          "Remplacez les noms par des fonctions : « le Logistics Officer », pas « Josué M. ».",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Phrase de constat (fil rouge)'],
      rows: [
        ['C-01', "Sur les 14 BC imputés au Fonds Meridian entre 5 000 et 10 000 USD du 1er janvier au 31 mars 2026 (97 500 USD au total), aucun dossier ne contient les trois offres écrites. Source : extraction T_BC et 14 dossiers BC."],
        ['C-02', "Sur les 412 BC de la période (1 380 000 USD), 37 BC (21 400 USD, tous inférieurs à 1 000 USD) ont le même demandeur et réceptionnaire, dont 31 BC (17 900 USD) pour le Logistics Officer. Source : extraction T_BC, colonne CUMUL."],
        ['C-03', "En mars 2026, 10 400 litres ont été sortis de la cuve ; les carnets de bord et le registre des groupes électrogènes justifient 9 100 litres. Deux des six véhicules n'ont aucun carnet de bord pour le mois. Source : registre de cuve, carnets, registre des groupes."],
      ],
    },
    result: "Une phrase de constat chiffrée, avec dénominateur et source, sans adjectif ni nom propre. Contrôle : un collègue recompte 37 sur 412 en dix minutes avec l'extraction.",
    pitfall: "Écrire « de nombreux BC » ou « plusieurs véhicules ». Le lecteur ne peut ni mesurer la gravité ni vérifier. Un chiffre sans dénominateur (« 37 BC ») est presque aussi faible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Citer le CRITÈRE : la règle précise, avec document, version et section',
    intro: "Pourquoi : sans critère, votre constat n'est qu'une préférence personnelle. Entrées : conventions bailleurs, procédures internes, manuels. Quand : dès que le constat est écrit, pour confirmer que l'écart est bien un écart.",
    steps: [
      {
        title: 'Cherchez la règle applicable dans l\'ordre de la hiérarchie',
        actions: [
          "Loi ou réglementation nationale, puis convention ou manuel du bailleur, puis procédure interne, puis bonne pratique reconnue.",
          "Ouvrez le document : ne citez jamais un article de mémoire.",
        ],
      },
      {
        title: 'Rédigez la référence complète',
        body: "Nom du document, version ou date, section ou article, et l'exigence exacte reformulée fidèlement. Modèle : « [Document, version], [section] : [exigence]. »",
      },
      {
        title: 'Si deux règles se contredisent, citez les deux et nommez la plus stricte',
        body: "Le constat porte alors aussi sur ce conflit : la procédure interne n'a pas été alignée sur la convention.",
      },
      {
        title: 'Si aucune règle écrite n\'existe, changez de nature',
        body: "Sans critère, vous n'avez pas un écart mais une observation d'amélioration : placez-la en recommandation de bonne pratique, pas en non-conformité.",
      },
    ],
    example: {
      title: 'Critères des constats de Goma',
      lines: [
        "C-01 : « Convention de subvention Fonds Meridian, article 9 : mise en concurrence formelle (trois offres écrites) pour tout achat à partir de 5 000 USD. Procédure achats HSGL v2 (septembre 2024), section 5.2 : seuil de mise en concurrence formelle fixé à 10 000 USD. Le critère le plus strict (5 000 USD) s'applique aux achats imputés à Meridian. »",
        "C-02 : « Procédure achats HSGL v2, section 6.1 : la réception des biens est assurée par une personne distincte du demandeur. »",
        "C-03 : « Procédure véhicules et carburant HSGL v1, section 3.4 : un carnet de bord par véhicule ; rapprochement mensuel cuve / carnets / registre des groupes, signé par le Log Manager. »",
      ],
    },
    result: "Pour chaque constat, une référence qu'un tiers peut ouvrir à la bonne page. Contrôle : le critère cité contient bien l'exigence que l'écart viole, pas une exigence voisine.",
    pitfall: "Citer une procédure obsolète ou non diffusée. Vérifiez la version en vigueur à la date des faits : reprocher un écart à une règle entrée en vigueur après les faits décrédibilise le constat.",
    tip: "Pour C-01 et C-02, le critère est la procédure v2 que l'auditeur lui-même a validée en 2024. Indiquez-le dans la section 5 du rapport (annexes) et faites relire ces constats par Fatou S., comme décidé par le comité d'audit : la transparence protège l'indépendance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Rechercher la CAUSE sur le terrain, jamais depuis le bureau',
    intro: "Pourquoi : une cause bien identifiée transforme une recommandation générique en solution ciblée. Quand : pendant la mission, en entretien, et complété à l'étape 4 de la procédure 1. Principe : la cause donnée par l'audité est une hypothèse, pas une conclusion.",
    steps: [
      {
        title: 'Posez la série de questions « pourquoi » à la personne qui exécute le contrôle',
        actions: [
          "Pourquoi l'écart s'est-il produit ? Depuis quand exactement ?",
          "Qui le savait ? L'a-t-on signalé à la hiérarchie ?",
          "Une alternative plus légère (comité à deux membres, contre-signature) a-t-elle été envisagée ?",
          "Répétez « pourquoi » jusqu'à atteindre une cause sur laquelle quelqu'un peut agir (trois à cinq fois).",
        ],
      },
      {
        title: 'Classez la cause trouvée',
        actions: [
          "Règle absente ou périmée (la grille n'intègre pas la nouvelle exigence).",
          "Règle non connue (non diffusée, non traduite, non expliquée).",
          "Règle connue mais impossible à appliquer (poste vacant, outil absent, délai irréaliste).",
          "Règle connue mais volontairement contournée (pression, habitude, intérêt).",
        ],
      },
      {
        title: 'Vérifiez la cause par deux sources indépendantes',
        body: "Entretien plus document (courriel, organigramme, décision), ou deux entretiens de fonctions différentes. Une cause d'une seule source reste une déclaration : formulez-la comme telle (« selon le Coordinateur… »).",
      },
    ],
    table: {
      columns: ['Question « pourquoi » (C-02)', 'Réponse recueillie', 'Source'],
      rows: [
        ['Pourquoi le Logistics Officer réceptionne-t-il ses commandes ?', "Il est seul à traiter les achats courants depuis novembre", 'Entretien du 22/05'],
        ['Pourquoi est-il seul ?', "L'assistant achats est parti le 14/11/2025 et n'a pas été remplacé", "Liste des départs, dossier RH"],
        ['Pourquoi pas de remplacement ?', "Recrutement gelé par le siège depuis décembre 2025", "Courriel de la Direction Pays du 09/12/2025"],
        ['Pourquoi aucun contrôle compensatoire ?', "Personne n'a été chargé de viser le journal des achats", "Journal sans visa de nov. à avril ; entretien du 28/05"],
        ['La procédure prévoit-elle une règle de remplacement ?', "Non : la section 6.1 n'envisage pas l'absence de personnel", 'Procédure achats v2'],
      ],
    },
    result: "Une cause factuelle, datée, appuyée par deux sources : « poste d'assistant achats vacant depuis le 14/11/2025 (recrutement gelé), sans contrôle compensatoire ». Contrôle : la cause désigne un levier d'action, pas une personne.",
    pitfall: "Accepter la cause de confort (« on n'a pas le temps », « tout le monde fait comme ça »). Elle décrit une excuse, pas un mécanisme. Demandez depuis quand, et ce qui a été tenté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: "Chiffrer l'EFFET : la conséquence réelle, mesurée ou qualifiée",
    intro: "Pourquoi : l'effet convainc le décideur d'agir ; un constat sans effet se noie dans les observations mineures. Entrées : montants de vos extractions, règles d'éligibilité du bailleur. Règle : on dit « exposé à », jamais « perdu » tant qu'une perte n'est pas démontrée.",
    steps: [
      {
        title: 'Identifiez le type d\'effet',
        actions: [
          "Financier : montant exposé, perte probable, dépense inéligible, remboursement au bailleur.",
          "Conformité : sanction, suspension, perte de confiance du bailleur.",
          "Opérationnel ou sécurité : rupture, retard, risque pour le personnel.",
          "Réputationnel : lecture d'un audit externe ou d'une visite bailleur.",
        ],
      },
      {
        title: 'Calculez le montant et le pourcentage dans Excel',
        actions: [
          "Montant exposé : =SOMME(plage des montants concernés).",
          "Poids : =montant exposé / total de la population (formatez en pourcentage, une décimale).",
          "Pour le carburant : écart en litres =sorties − justifié, puis valorisation =écart × prix moyen payé.",
        ],
      },
      {
        title: 'Formulez avec la bonne modalité',
        body: "« exposés à un classement en dépenses inéligibles », « sans contrôle indépendant », « ne permet pas de détecter ». Si vous avez vérifié qu'il n'y a pas de perte (10 biens présents sur 10), dites-le : cela mesure honnêtement l'effet.",
      },
      {
        title: 'N\'extrapolez que si vous écrivez la méthode',
        body: "Appliquer l'écart d'un mois aux six mois est une estimation, pas un constat. Donnez l'effet mesuré ; mentionnez l'ordre de grandeur dans une phrase séparée, avec l'hypothèse.",
      },
    ],
    table: {
      columns: ['Constat', 'Calcul', 'Effet rédigé'],
      rows: [
        ['C-01', '97 500 / 1 380 000 = 7,1 %', "97 500 USD (7,1 % des achats) exposés à un classement en dépenses inéligibles par le Fonds Meridian, avec risque de remboursement ; visite du bailleur en juillet."],
        ['C-02', '21 400 / 1 380 000 = 1,6 %', "21 400 USD (1,6 % des achats) sans contrôle indépendant de la réception : une livraison fictive ne serait pas détectée. Sur 10 BC contrôlés physiquement, 10 biens étaient présents : aucune perte constatée."],
        ['C-03', '10 400 − 9 100 = 1 300 L ; 1 300 / 10 400 = 12,5 % ; 1 300 × 1,50 = 1 950 USD', "1 300 litres (12,5 % des sorties de mars, environ 1 950 USD) non justifiés pour un seul mois ; le fournisseur carburant représente 96 000 USD sur six mois."],
      ],
    },
    result: "Un effet chiffré avec son calcul, formulé sans exagération. Contrôle : si l'audité vérifie votre calcul, il retrouve exactement vos chiffres.",
    pitfall: "Écrire « risque de fraude » ou « détournement » pour renforcer l'effet. Sans preuve d'intention, c'est une accusation. Écrivez ce que l'écart permet (« non détectable »), pas ce que vous soupçonnez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Assembler, titrer et tester chaque constat avant de passer à la suite',
    intro: "Pourquoi : un constat incomplet est le premier endroit où l'audité attaque le rapport. Entrées : les quatre éléments rédigés. Si l'un des quatre ne peut pas être renseigné, le constat n'est pas mûr : retournez à vos notes.",
    steps: [
      {
        title: 'Rédigez un titre neutre qui nomme l\'écart',
        body: "Le titre décrit l'écart, pas la personne ni le jugement : « Réception assurée par le demandeur », pas « Le Logistics Officer se contrôle lui-même ».",
      },
      {
        title: 'Assemblez les quatre éléments dans un seul bloc',
        body: "Une phrase factuelle par élément, sans qualificatif inutile. Ne rédigez pas encore la recommandation : elle fait l'objet de la procédure 3.",
      },
      {
        title: 'Passez le test de complétude',
        actions: [
          "Le constat contient-il un chiffre, un dénominateur et une source ?",
          "Le critère cite-t-il un document, une version et une section ?",
          "La cause a-t-elle deux sources ?",
          "L'effet est-il chiffré ou qualifié sans exagération ?",
          "Le bloc est-il sans adjectif et sans nom de personne ?",
          "Un lecteur extérieur au terrain comprend-il le bloc sans vous ?",
          "Une pièce du dossier de preuves prouve-t-elle chaque affirmation ?",
        ],
      },
      {
        title: 'Corrigez tout « non », ou sortez le constat du rapport',
        body: "Un constat qui ne passe pas le test à la deuxième tentative devient une observation en annexe ou disparaît, avec la raison notée dans le journal.",
      },
    ],
    example: {
      title: 'Constat C-02 assemblé (avant la recommandation)',
      lines: [
        "Titre : Réception assurée par le demandeur sur les petits achats.",
        "CONSTAT : Sur les 412 BC de la période (1 380 000 USD), 37 BC (21 400 USD, tous inférieurs à 1 000 USD) ont le même demandeur et réceptionnaire, dont 31 BC (17 900 USD) pour le Logistics Officer. Source : extraction T_BC, colonne CUMUL.",
        "CRITÈRE : Procédure achats HSGL v2, section 6.1 : la réception des biens est assurée par une personne distincte du demandeur.",
        "CAUSE : Le poste d'assistant achats est vacant depuis le 14/11/2025 (recrutement gelé par la Direction Pays) ; aucun contrôle compensatoire n'a été mis en place : le journal des achats ne porte aucun visa de novembre 2025 à avril 2026.",
        "EFFET : 21 400 USD (1,6 % des achats) sans contrôle indépendant de la réception. Sur 10 BC contrôlés physiquement, 10 biens étaient présents : aucune perte constatée à ce stade.",
      ],
    },
    result: "Six blocs CCCE complets, titrés sans nom de personne, ayant tous passé les sept tests. Contrôle : un relecteur peut citer, pour chaque affirmation, la pièce qui la prouve.",
    tip: "Faites passer le test à voix haute à un collègue qui n'était pas en mission : toute question qu'il pose (« depuis quand ? », « par rapport à quoi ? ») révèle un élément manquant.",
  },

  // ── Procédure 3 — Rédiger les recommandations ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Partir de la cause pour choisir le type d\'action',
    intro: "Pourquoi : une recommandation qui ignore la cause traite le symptôme et le problème revient au prochain audit. Entrée : le bloc CCCE, surtout sa cause. Résultat visé : deux ou trois options par constat, puis une seule retenue.",
    steps: [
      {
        title: 'Relisez la cause et son type',
        body: "Règle absente, règle non connue, règle impossible à appliquer, règle contournée : chaque type appelle une famille d'actions différente.",
      },
      {
        title: 'Choisissez la famille d\'actions correspondante',
        actions: [
          "Règle absente ou périmée : écrire ou mettre à jour la règle, la diffuser, la faire signer.",
          "Règle non connue : diffuser, expliquer, former avec preuve de participation.",
          "Règle impossible à appliquer : réaffecter, recruter, équiper, ou instaurer un contrôle compensatoire.",
          "Règle contournée : renforcer l'autorisation, modifier les droits, escalader.",
        ],
      },
      {
        title: 'Listez deux ou trois options réalistes, puis éliminez',
        body: "Écartez toute option que la base ne peut pas porter (budget gelé, décision du siège) ; gardez-la comme mesure structurelle si elle est nécessaire à terme.",
      },
    ],
    table: {
      columns: ['Constat', 'Cause (type)', 'Options envisagées', 'Option retenue'],
      rows: [
        ['C-01', "Règle périmée et non diffusée (grille v2 sans Meridian)", "Note de service ; refonte complète de la procédure ; formation", "Note de service + mise à jour de la grille (rapide) ; refonte au prochain cycle"],
        ['C-02', 'Règle impossible à appliquer (poste vacant)', "Recruter ; réaffecter la réception au magasinier ; contre-signature par l'assistante logistique", "Réaffecter la réception (rapide) ; recrutement géré par la Direction Pays"],
        ['C-03', 'Règle non appliquée (aucun rapprochement mensuel) + outil absent', "Compteur volumétrique ; rapprochement mensuel signé ; audit externe du carburant", "Compteur + rapprochement mensuel visé"],
      ],
    },
    result: "Pour chaque constat, une option retenue qui traite la cause, avec les options écartées et la raison.",
    pitfall: "Recommander « recruter un assistant achats » alors que le recrutement est gelé par le siège : l'action n'est pas exécutable par la base. Recommandez ce que le responsable nommé peut réellement faire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Formuler l\'action : un verbe, un livrable, une preuve',
    intro: "Pourquoi : une phrase qui commence par « renforcer » ou « veiller à » ne peut jamais être clôturée. Entrée : l'option retenue à l'étape 1. Modèle : [Responsable] + [verbe d'action] + [livrable] + [fréquence ou condition] + [date].",
    steps: [
      {
        title: 'Choisissez un verbe qui produit un objet',
        actions: [
          "Verbes recevables : diffuser, signer, installer, réaffecter, mettre à jour, archiver, transmettre, contre-signer.",
          "Verbes à bannir : renforcer, améliorer, veiller à, sensibiliser (sans livrable), étudier, s'assurer que.",
        ],
      },
      {
        title: 'Nommez le livrable ou l\'état constatable',
        body: "Une note de service signée, un compteur installé, un rapprochement mensuel signé, un tableau à jour : quelque chose qu'un auditeur peut ouvrir ou voir.",
      },
      {
        title: 'Précisez la fréquence et le seuil',
        body: "« pour tout achat imputé à Meridian à partir de 5 000 USD », « chaque mois avant le 10 », « sous 48 h ». Une règle sans seuil ne se vérifie pas.",
      },
      {
        title: 'Relisez : une seule action par recommandation',
        body: "Si la phrase contient deux actions pour deux responsables différents, scindez-la en deux lignes (voir étape 3).",
      },
    ],
    table: {
      columns: ['Version vague (à bannir)', 'Version assignable (fil rouge)'],
      rows: [
        ['Renforcer les contrôles sur les achats Meridian.', "Diffuser une note de service imposant trois offres écrites pour tout achat imputé au Fonds Meridian à partir de 5 000 USD, et mettre à jour la grille de seuils de la procédure achats v2."],
        ['Veiller à la séparation des tâches.', "Confier la réception de tous les biens au magasinier ; faire contre-signer le bon de réception par l'assistante logistique lorsque le Logistics Officer est le demandeur."],
        ['Sensibiliser le personnel au signalement.', "Afficher le mécanisme de signalement en français et en swahili à l'entrée, au parc véhicules et au magasin, et le présenter au personnel d'appui en réunion de base avec liste d'émargement."],
      ],
    },
    result: "Pour chaque constat, une phrase d'action qui commence par un verbe d'action, contient un livrable et un seuil, et traite la cause. Contrôle : on peut dire oui ou non à « est-ce fait ? ».",
    pitfall: "« Sensibiliser » sans livrable. Une sensibilisation se prouve par une liste d'émargement, une date, un support : sans cela, elle ne sera jamais déclarée terminée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Nommer le responsable : la personne qui peut décider ET agir',
    intro: "Pourquoi : « l'équipe achats » n'est responsable de rien. Une recommandation sans nom ne sera exécutée par personne. Entrées : l'organigramme actuel, les délégations, la liste des postes vacants.",
    steps: [
      {
        title: 'Posez trois questions',
        actions: [
          "Qui a l'autorité de décider cette action ?",
          "Qui a les moyens de l'exécuter (budget, temps, accès) ?",
          "Qui acceptera d'en répondre devant le comité d'audit ?",
        ],
      },
      {
        title: 'Écrivez un nom ET une fonction',
        body: "Modèle : « Dr Patrice N., Coordinateur de la base ». Jamais un service (« la Finance »), jamais une fonction vacante (le poste de Log Manager n'a pas de titulaire : nommez la personne qui en assure l'intérim).",
      },
      {
        title: 'Si deux responsables sont nécessaires, scindez en deux lignes',
        body: "Dans la grille, utilisez des références « C-01a » et « C-01b » : chacune a son responsable, son échéance et son statut. Une action avec deux responsables n'en a aucun.",
      },
      {
        title: 'Informez le responsable avant le rapport',
        body: "Parlez-lui de l'action qui le concerne avant la diffusion du rapport provisoire. Il n'a pas à l'accepter à ce stade, mais il ne doit pas la découvrir par écrit devant son supérieur.",
      },
    ],
    table: {
      columns: ['Constat', 'Responsable nommé', 'Pourquoi cette personne'],
      rows: [
        ['C-01', 'Dr Patrice N., Coordinateur de la base', "Autorité pour signer la note de service ; Ruth B. l'appuie sur la soumission à Meridian"],
        ['C-02', 'Dr Patrice N., Coordinateur de la base', "Seul à pouvoir réaffecter les tâches entre le magasinier et l'assistante logistique"],
        ['C-03', 'Josué M., Logistics Officer (Log Manager par intérim)', "Exécute le rapprochement ; visa mensuel de Ruth B. pour garantir l'indépendance du contrôle"],
        ['C-04', 'Didier L., magasinier', "Enregistre les sorties de stock ; contre-signature hebdomadaire par Esther K."],
        ['C-05', 'Ruth B., Finance Manager de la base', 'Tient déjà le suivi des conventions et de la reddition'],
        ['C-06', 'Dr Patrice N., Coordinateur de la base', 'Anime la réunion de base et décide des affichages'],
      ],
    },
    result: "Chaque recommandation a un nom et une fonction. Contrôle : le responsable peut dire « oui, c'est à moi de le faire » sans devoir demander l'autorisation à un tiers.",
    pitfall: "Tout confier au Directeur Pays « parce qu'il est responsable de tout ». Une action assignée au plus haut niveau est rarement exécutée : cherchez le niveau le plus bas qui a l'autorité d'agir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Fixer une échéance datée, réaliste au regard de la cause',
    intro: "Pourquoi : une échéance irréaliste est ignorée dès le premier jour ; une échéance absente n'est pas une échéance. Entrées : l'action, sa dépendance (achat, décision du siège, recrutement), le calendrier des événements externes.",
    steps: [
      {
        title: 'Estimez la durée réelle de l\'action',
        actions: [
          "Action purement procédurale (note de service, réaffectation) : une à deux semaines.",
          "Action avec achat (compteur de cuve) : quatre à six semaines, délai de livraison compris.",
          "Action structurelle (recrutement, refonte de procédure) : trois à six mois, avec jalons.",
        ],
      },
      {
        title: 'Repérez les événements externes qui imposent une date',
        body: "Visite du bailleur, clôture annuelle, audit externe : une action qui protège une dépense avant une visite doit être terminée avant la visite, pas après.",
      },
      {
        title: 'Convertissez l\'échéance en date de calendrier',
        body: "Écrivez 2026-07-03 (format de la grille), pas « dans 15 jours ». Pour un délai relatif, calculez-le depuis la date de diffusion du rapport définitif.",
      },
      {
        title: 'Échelonnez : toutes les échéances ne tombent pas le même jour',
        body: "Quick win : 30 jours au plus. Action moyenne : 60 à 90 jours. Action structurelle : six mois avec un jalon intermédiaire à 60 jours.",
      },
    ],
    table: {
      columns: ['Constat', 'Durée estimée', 'Contrainte externe', 'Échéance proposée'],
      rows: [
        ['C-01', 'Note : 1 semaine ; soumission à Meridian : 2 semaines', 'Visite de Meridian en juillet', '2026-07-03'],
        ['C-02', 'Réaffectation : quelques jours', 'Rapport définitif le 26 juin', '2026-06-30'],
        ['C-03', 'Compteur : 5 semaines (commande + pose)', 'Aucune ; premier rapprochement dès juillet', '2026-07-31'],
        ['C-04', 'Quelques jours (changement de pratique)', 'Aucune', '2026-06-30'],
        ['C-05', 'Deux semaines (mise à jour + réunion)', 'Visite Meridian : le bailleur lit les suites données à 2024', '2026-07-15'],
        ['C-06', 'Impression, traduction, réunion de base : 2 mois', 'Aucune', '2026-08-31'],
      ],
    },
    result: "Chaque recommandation porte une date de calendrier proposée, justifiée par la durée de l'action et par une contrainte externe quand il y en a une (la date de C-03 sera ajustée à l'étape 5, après discussion avec le responsable).",
    pitfall: "Mettre la même date partout (« 30 jours ») ou « dès que possible ». Une échéance uniforme montre que personne n'a estimé la durée ; une échéance floue ne peut jamais passer au statut « En retard ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Définir la preuve de clôture, tester la recommandation, puis la valider avec l\'audité',
    intro: "Pourquoi : une recommandation sans preuve de clôture se « clôture » sur déclaration. Entrées : action, responsable, échéance. Quand : avant l'envoi du rapport provisoire.",
    steps: [
      {
        title: 'Écrivez la preuve de clôture pour chaque recommandation',
        body: "La pièce ou l'état que vous demanderez avant de passer le statut à « Clôturée » : note de service signée et datée, facture et photo du compteur, premier rapprochement mensuel signé, liste d'émargement.",
      },
      {
        title: 'Passez le test des cinq questions',
        actions: [
          "Un responsable nommé, avec sa fonction ?",
          "Une date de calendrier ?",
          "Une action vérifiable par pièce ou observation ?",
          "Un lien direct avec la cause du constat ?",
          "Une seule action, exécutable avec les moyens du responsable ?",
        ],
      },
      {
        title: 'Discutez avec l\'audité du « comment », jamais du « constat »',
        actions: [
          "L'audité peut proposer un autre moyen : acceptez-le s'il traite la même cause, avec la même preuve.",
          "Si l'audité conteste un fait ou un critère : la discussion se conduit avec pièces, hors de la recommandation.",
        ],
      },
      {
        title: 'Notez les désaccords',
        body: "Un moyen refusé ou une échéance contestée n'est pas un échec : il est consigné avec la réponse de l'audité dans le rapport définitif.",
      },
    ],
    example: {
      title: 'Discussion préalable sur C-03 (carburant), appel du 2 juin 2026',
      lines: [
        "Proposition initiale : « Installer un compteur volumétrique sur la cuve (devis indicatif 650 USD) et réaliser chaque mois un rapprochement cuve / carnets / registre des groupes, signé et visé. Échéance : 2026-07-31. Preuve : facture, photo du compteur, rapprochement de juillet signé. »",
        "Réponse de Dr Patrice N. : « Le compteur ne sera livré qu'en août ; je propose un relevé quotidien de la jauge manuelle jusque-là. »",
        "Décision d'Amani K. : mesure intermédiaire acceptée (relevé quotidien signé dès le 2026-06-30, preuve : registre de jauge) ; échéance du compteur repoussée au 2026-08-31, avec jalon : commande passée avant le 2026-07-10. Le constat reste inchangé.",
      ],
    },
    result: "Six recommandations testées, avec preuve de clôture, dont une ajustée dans son moyen par accord avec l'audité, sans toucher au constat.",
    tip: "Si un audité accepte une recommandation « avec enthousiasme » dès la première lecture, vérifiez qu'il l'a comprise : demandez-lui de dire à voix haute ce qu'il va faire, quand, et ce qu'il vous montrera à la clôture.",
  },

  // ── Procédure 4 — Prioriser dans la grille Excel ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Ouvrir la grille, lire le barème et nettoyer les lignes d\'exemple',
    intro: "Pourquoi : la grille calcule le score à votre place, mais seulement si vous respectez sa structure. Quand : jour 3, une fois les six recommandations rédigées. Entrée : grille-priorisation-recommandations.xlsx, avec ses deux onglets « Priorisation » et « Barème ».",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        actions: [
          "Ouvrez grille-priorisation-recommandations.xlsx, puis Fichier > Enregistrer sous : 2026-06-03_Grille_priorisation_Goma.xlsx. Ne travaillez jamais sur le modèle d'origine.",
        ],
      },
      {
        title: 'Lisez l\'onglet « Barème » avant de coter quoi que ce soit',
        actions: [
          "Bloc « Niveau de risque » : 1 = mineur, 2 = faible, 3 = modéré, 4 = élevé, 5 = critique (fraude avérée, sécurité du personnel, perte d'accès bailleur).",
          "Bloc « Facilité de mise en œuvre » : 1 = très difficile (changement structurel, arbitrage du siège) à 5 = très facile (quelques jours, sans ressource).",
          "Bloc « Score de priorité » : 15 à 25 = Prioritaire, 8 à 14 = Moyenne, 1 à 7 = Faible.",
        ],
      },
      {
        title: 'Repérez les colonnes de l\'onglet « Priorisation »',
        body: "La ligne 4 porte les en-têtes : A Réf. constat, B Recommandation, C Niveau de risque (1-5), D Facilité de mise en œuvre (1-5), E Score de priorité, F Priorité, G Responsable, H Échéance, I Statut. Les colonnes E et F sont des formules : ne les modifiez jamais.",
      },
      {
        title: 'Effacez les lignes d\'exemple sans toucher aux formules',
        actions: [
          "Sélectionnez A5:D9, appuyez sur Suppr ; sélectionnez G5:I9, appuyez sur Suppr.",
          "Ne sélectionnez jamais les colonnes E et F : elles contiennent =C5*D5 et la formule de priorité.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Contenu', 'Vous saisissez ?'],
      rows: [
        ['A, B', 'Référence du constat, recommandation', 'Oui'],
        ['C, D', 'Niveau de risque, facilité : entiers de 1 à 5 (liste de validation)', 'Oui'],
        ['E', 'Score = C × D', 'Non (formule)'],
        ['F', 'Prioritaire si E ≥ 15 ; Moyenne si E ≥ 8 ; sinon Faible ; vide si C ou D est vide', 'Non (formule)'],
        ['G, H', 'Responsable ; échéance (format 2026-07-03)', 'Oui'],
        ['I', 'Statut : À faire, En cours, Clôturée, En retard (liste déroulante)', 'Oui'],
      ],
    },
    result: "Une copie de travail propre, sans les cinq lignes d'exemple (modèle de Bunia), dont les formules E et F sont intactes. Contrôle : saisissez 4 en C5 et 4 en D5 : E5 affiche 16 et F5 « Prioritaire » ; videz ensuite les deux cellules.",
    pitfall: "Laisser les lignes d'exemple « pour gagner du temps ». Un rapport diffusé avec une ligne « Coordinateur Logistique régional, 2027-01-31 » qui ne correspond à rien de la mission est la preuve que personne n'a relu la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Saisir la référence du constat et la recommandation (colonnes A et B)',
    intro: "Pourquoi : la grille et le rapport doivent raconter la même histoire, mot pour mot. Entrées : les six recommandations de la procédure 3. Règle : une ligne par recommandation, une recommandation par ligne.",
    steps: [
      {
        title: 'Saisissez la référence en colonne A',
        actions: [
          "Tapez C-01 en A5, C-02 en A6, etc., exactement comme dans les blocs du rapport.",
          "Si un constat appelle deux recommandations à deux responsables, utilisez C-02a et C-02b sur deux lignes.",
        ],
      },
      {
        title: 'Copiez la recommandation depuis le bloc Word',
        body: "Copiez-collez le texte de la ligne RECOMMANDATION du bloc de constat dans la colonne B (Collage spécial > Texte). Ne la réécrivez pas : une divergence de formulation entre grille et rapport sera relevée.",
      },
      {
        title: 'Activez le retour à la ligne',
        actions: [
          "Sélectionnez B5:B10, Accueil > Renvoyer à la ligne automatiquement ; ajustez la hauteur des lignes.",
        ],
      },
      {
        title: 'Vérifiez le comptage',
        body: "Autant de lignes que de blocs de constats. La grille offre 15 lignes (5 à 19) : au-delà, copiez la ligne 19 vers le bas pour étendre les formules et la mise en forme conditionnelle.",
      },
    ],
    table: {
      columns: ['Réf. (A)', 'Recommandation (B)'],
      rows: [
        ['C-01', "Diffuser une note de service imposant trois offres écrites pour tout achat imputé au Fonds Meridian à partir de 5 000 USD ; mettre à jour la grille de seuils de la procédure achats v2 ; soumettre les 14 achats concernés (97 500 USD) à Meridian pour décision sur leur éligibilité."],
        ['C-02', "Réaffecter la réception de tous les biens au magasinier, avec contre-signature de l'assistante logistique lorsque le Logistics Officer est le demandeur."],
        ['C-03', "Installer un compteur volumétrique sur la cuve et réaliser chaque mois un rapprochement cuve / carnets de bord / registre des groupes, signé et visé ; relevé quotidien signé de la jauge en attendant."],
        ['C-04', "Enregistrer chaque sortie de stock le jour même ; faire contre-signer chaque vendredi les fiches de stock ; régulariser les trois écarts après recomptage."],
        ['C-05', "Mettre à jour le tableau de suivi des cinq recommandations de l'audit 2024, fixer une date de clôture aux deux recommandations « en cours » et le revoir chaque trimestre."],
        ['C-06', "Afficher le mécanisme de signalement en français et en swahili à l'entrée, au parc véhicules et au magasin, et le présenter au personnel d'appui en réunion de base."],
      ],
    },
    result: "Les lignes 5 à 10 portent six références et six recommandations, identiques au mot près à celles des blocs Word. Les colonnes C à F sont encore vides : E5 à E9 affichent 0 tant que C et D ne sont pas remplies (c'est normal), alors que la ligne 10, dont la formule est protégée, reste vide.",
    pitfall: "Saisir une recommandation résumée dans la grille et une version plus longue dans le rapport. Quand le responsable ouvrira le rapport, puis la grille, il aura deux versions de ce qu'on lui demande.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Coter le niveau de risque (colonne C, de 1 à 5) et justifier chaque note',
    intro: "Pourquoi : la cotation du risque répond à « si on ne fait rien, qu'est-ce qu'on risque ? ». Elle porte sur l'écart, pas sur la difficulté de la correction. Entrées : l'effet chiffré de chaque constat et le Barème.",
    steps: [
      {
        title: 'Posez quatre questions sur chaque constat',
        actions: [
          "Quel montant est exposé, en valeur absolue et en part du budget ?",
          "Y a-t-il un enjeu bailleur (éligibilité, remboursement, perte de confiance) ?",
          "Une fraude est-elle avérée, ou la sécurité du personnel en jeu ? (seul cas du niveau 5)",
          "L'impact est-il circonscrit à une base et un cycle, ou généralisé ?",
        ],
      },
      {
        title: 'Choisissez le niveau du Barème qui décrit le mieux l\'écart',
        body: "Lisez la définition complète du niveau, pas seulement son intitulé. Le niveau 5 est réservé aux fraudes avérées, à la sécurité du personnel et au risque de perte d'accès bailleur : ne l'utilisez pas pour « marquer les esprits ».",
      },
      {
        title: 'Saisissez la note en colonne C',
        body: "La cellule n'accepte qu'un entier de 1 à 5 : toute autre valeur est refusée par la validation de données.",
      },
      {
        title: 'Écrivez une phrase de justification par ligne',
        body: "Dans votre dossier de travail (pas dans la grille, dont vous ne devez pas ajouter de colonne), notez une phrase par cotation : c'est ce qui vous permettra de défendre la note face à l'audité ou au comité.",
      },
    ],
    table: {
      columns: ['Réf.', 'Risque', 'Justification (une phrase)'],
      rows: [
        ['C-01', '4', "97 500 USD exposés, enjeu de conformité bailleur significatif ; pas de fraude avérée ni de perte d'accès à ce stade, donc pas 5."],
        ['C-02', '4', "21 400 USD sans contrôle indépendant de la réception ; fraude possible mais non constatée (10 biens présents sur 10 contrôlés)."],
        ['C-03', '4', "1 950 USD non justifiés en un seul mois sur un flux de 96 000 USD ; le carburant est une zone classique de détournement."],
        ['C-04', '2', "Écart brut de 1 240 USD sur 20 articles : impact limité, absorbable par l'organisation."],
        ['C-05', '3', "Deux faiblesses déjà reconnues en 2024 restent ouvertes : risque de crédibilité face à Meridian, impact circonscrit à une base."],
        ['C-06', '3', "Le canal de signalement est ignoré de 5 personnes d'appui sur 8 : risque modéré, circonscrit à une base."],
      ],
    },
    result: "Six niveaux de risque saisis en C5:C10, chacun justifié en une phrase dans le dossier de travail. Contrôle : aucune note 5, et chaque note peut être défendue sans employer le mot « grave ».",
    pitfall: "Coter 5 par réflexe dès qu'un constat vous a marqué. Si trois lignes sur six sont cotées 5, la grille ne discrimine plus rien : le comité cessera de croire en vos priorités.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Coter la facilité de mise en œuvre (colonne D) et lire le score calculé',
    intro: "Pourquoi : la facilité répond à « combien ça coûte de corriger ? » et fait apparaître les quick wins. Entrées : l'échéance proposée, la dépendance de chaque action, le Barème (bloc « Facilité »).",
    steps: [
      {
        title: 'Posez cinq questions sur chaque recommandation',
        actions: [
          "Quel délai : jours, semaines ou mois ?",
          "Quel budget : nul, faible ou significatif ?",
          "Faut-il un arbitrage du siège ou du bailleur ?",
          "Quelle résistance au changement est attendue ?",
          "Existe-t-il une dépendance externe (livraison, recrutement, réponse du bailleur) ?",
        ],
      },
      {
        title: 'Saisissez la note en colonne D',
        body: "5 si l'action se fait en quelques jours sans ressource ; 4 si c'est une correction procédurale rapide et peu coûteuse ; 3 si elle demande quelques semaines avec les moyens de la base ; 2 si elle exige des ressources ou du temps significatifs ; 1 si elle exige un changement structurel ou un arbitrage du siège.",
      },
      {
        title: 'Lisez les colonnes E et F',
        body: "Dès que C et D sont saisies, E affiche le score (C × D) et F la priorité, avec une couleur de ligne : ambre foncé pour Prioritaire, jaune pour Moyenne, vert très clair pour Faible.",
      },
      {
        title: 'Recalculez deux scores à la main',
        body: "Vérifiez C-02 (4 × 5 = 20) et C-05 (3 × 4 = 12) : si l'écran affiche autre chose, une formule a été écrasée.",
      },
    ],
    table: {
      columns: ['Réf.', 'Risque (C)', 'Facilité (D)', 'Score (E)', 'Priorité (F)', 'Pourquoi cette facilité'],
      rows: [
        ['C-01', '4', '4', '16', 'Prioritaire', 'Correction procédurale rapide, coût nul ; la décision de Meridian dépend du bailleur'],
        ['C-02', '4', '5', '20', 'Prioritaire', 'Quelques jours, aucune ressource : réaffectation interne'],
        ['C-03', '4', '3', '12', 'Moyenne', 'Achat et pose d\'un compteur : quelques semaines, budget de la base'],
        ['C-04', '2', '3', '6', 'Faible', 'Recomptage et régularisation à coordonner sur quelques semaines'],
        ['C-05', '3', '4', '12', 'Moyenne', 'Mise à jour documentaire et une réunion'],
        ['C-06', '3', '3', '9', 'Moyenne', 'Traduction, impression et réunion de base'],
      ],
    },
    result: "Les colonnes C et D sont complètes ; E et F se sont calculées toutes seules : 2 lignes Prioritaires (20 et 16), 3 Moyennes (12, 12, 9) et 1 Faible (6). Contrôle : deux scores recalculés à la main concordent.",
    tip: "Si Fatou S. et vous cotez à deux points d'écart sur une ligne, ne faites pas la moyenne : discutez, car l'écart cache presque toujours une information que l'un de vous n'a pas (un budget, un blocage du siège).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Compléter responsable, échéance, statut, puis trier la grille',
    intro: "Pourquoi : « une recommandation sans responsable ni échéance n'est pas une recommandation, c'est un souhait ». Les lignes Prioritaire remonteront en tête du résumé exécutif. Entrées : la procédure 3 (responsable, échéance), les scores.",
    steps: [
      {
        title: 'Saisissez le responsable (colonne G) et l\'échéance (colonne H)',
        actions: [
          "Colonne G : nom et fonction (Dr Patrice N., Coordinateur de la base).",
          "Colonne H : date au format AAAA-MM-JJ (2026-07-03), comme dans le modèle.",
        ],
      },
      {
        title: 'Choisissez le statut initial (colonne I)',
        body: "Dans la liste déroulante : « À faire » pour toutes les lignes à ce stade. Les autres valeurs (En cours, Clôturée, En retard) serviront au suivi mensuel de la procédure 8.",
      },
      {
        title: 'Triez par score décroissant, uniquement sur les lignes remplies',
        actions: [
          "Sélectionnez A4:I10 (en-têtes et six lignes), pas la plage entière jusqu'à la ligne 19.",
          "Données > Trier > Score de priorité, du plus grand au plus petit ; en cas d'égalité, ajoutez un second critère : Niveau de risque, du plus grand au plus petit.",
        ],
      },
      {
        title: 'Contrôlez la répartition',
        body: "S'il y a plus de cinq lignes Prioritaire, réexaminez vos cotations : un rapport où tout est prioritaire n'a pas de priorité. Vérifiez qu'aucune cellule G ou H n'est vide.",
      },
    ],
    table: {
      columns: ['Réf.', 'Score', 'Priorité', 'Responsable', 'Échéance', 'Statut'],
      rows: [
        ['C-02', '20', 'Prioritaire', 'Dr Patrice N., Coordinateur de la base', '2026-06-30', 'À faire'],
        ['C-01', '16', 'Prioritaire', 'Dr Patrice N., Coordinateur de la base', '2026-07-03', 'À faire'],
        ['C-03', '12', 'Moyenne', 'Josué M., Logistics Officer (Log Manager par intérim)', '2026-08-31', 'À faire'],
        ['C-05', '12', 'Moyenne', 'Ruth B., Finance Manager de la base', '2026-07-15', 'À faire'],
        ['C-06', '9', 'Moyenne', 'Dr Patrice N., Coordinateur de la base', '2026-08-31', 'À faire'],
        ['C-04', '6', 'Faible', 'Didier L., magasinier', '2026-06-30', 'À faire'],
      ],
    },
    result: "Une grille triée par priorité, entièrement renseignée, avec 2 Prioritaires en tête. C'est ce fichier, et non le rapport Word, qui servira de tableau de bord entre deux missions. Il part en annexe du rapport.",
    pitfall: "Sélectionner toute la plage A4:I19 avant de trier. Les lignes vides dont la formule renvoie « » sont du texte, et un tri décroissant les place avant les nombres : vos six lignes se retrouvent en bas de la grille.",
  },

  // ── Procédure 5 — Remplir le gabarit Word ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Dupliquer le gabarit, adapter l\'en-tête et fixer l\'ordre de rédaction',
    intro: "Pourquoi : vous ne partez jamais d'une page blanche. Quand : jour 2, avant de rédiger les blocs. Entrée : gabarit-rapport-audit-interne-ccce.docx. Les zones en gris italique sont à compléter ; les zones en texte noir sont des exemples illustratifs.",
    steps: [
      {
        title: 'Enregistrez une copie du gabarit',
        actions: [
          "Ouvrez gabarit-rapport-audit-interne-ccce.docx et enregistrez-le sous : AI-2026-GOMA-02_Rapport-provisoire_v0.1.docx dans le dossier 05_Rapport.",
          "Réservez le numéro de version : v0.x en rédaction, v1.0 provisoire diffusé, v2.0 définitif.",
        ],
      },
      {
        title: 'Remplacez l\'encadré de titre et supprimez le paragraphe d\'objectif',
        body: "L'encadré de tête (« RAPPORT D'AUDIT INTERNE — GABARIT CCCE ») devient le titre du rapport : mission, base, période, mention PROVISOIRE. Le paragraphe « Objectif : fournir le squelette… » est une consigne du gabarit : supprimez-le.",
      },
      {
        title: 'Repérez et supprimez systématiquement les exemples en texte noir',
        body: "Les exemples du gabarit (blocs C-01 « Achats sans procès-verbal de comité » et C-02 « paie / pointage » de Bunia, lignes d'exemple de la section 4) ne sont pas à garder : écrasez-les par vos propres contenus.",
      },
      {
        title: 'Rédigez dans l\'ordre de travail, pas dans l\'ordre des pages',
        actions: [
          "Section 1 (informations), puis section 3 (blocs de constats), puis section 4 (synthèse), puis section 5 (annexes).",
          "Section 2 (résumé exécutif) en dernier, après la grille.",
          "Section 6 (validation) à la diffusion.",
        ],
      },
    ],
    example: {
      title: 'Titre et nom de fichier du rapport de Goma',
      lines: [
        "Fichier : AI-2026-GOMA-02_Rapport-provisoire_v0.1.docx",
        "Titre : RAPPORT D'AUDIT INTERNE — Cycle achats-logistique, base de Goma (Nord-Kivu), période du 1er octobre 2025 au 31 mars 2026 — Horizon Santé Grands Lacs — RAPPORT PROVISOIRE",
        "Pied de page conseillé : Réf. AI-2026-GOMA-02 · version provisoire · confidentiel · diffusion restreinte.",
      ],
    },
    result: "Un fichier de rapport vierge de tout exemple, titré, versionné, rangé dans 05_Rapport. Contrôle : une recherche du mot « Bunia » dans le document ne renvoie rien (sauf si l'exercice du module l'exige).",
    pitfall: "Laisser une ligne d'exemple du gabarit « en attendant ». Le jour où le rapport part avec le constat « base de Bunia » dans la section 3, le lecteur ne croira plus aucun autre chiffre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Remplir la section 1 — Informations sur la mission',
    intro: "Pourquoi : c'est la fiche d'identité du rapport, que l'auditeur externe lira en premier. Entrées : lettre de mission signée, planning, liste des destinataires. Le tableau compte cinq lignes à compléter.",
    steps: [
      {
        title: 'Remplissez la ligne « Référence de la mission »',
        body: "Format du gabarit : AI-année-BASE-numéro. Utilisez la référence de votre registre de missions.",
      },
      {
        title: 'Renseignez « Dates de la mission »',
        body: "Début et fin du travail de terrain, pas les dates de rédaction. Ajoutez la date de la réunion de clôture.",
      },
      {
        title: 'Listez les auditeurs assignés avec leur fonction',
        body: "Nom et fonction de chaque auditeur, avec le rôle (responsable de mission, supervision). Mentionnez ici toute mesure d'indépendance décidée par le comité.",
      },
      {
        title: 'Précisez le périmètre audité',
        body: "Base, cycle et période couverte, plus les exclusions de la lettre de mission : un lecteur doit savoir ce que le rapport ne couvre pas.",
      },
      {
        title: 'Indiquez les destinataires',
        body: "Direction Pays, Conseil, comité d'audit, bailleur concerné : l'ordre reflète la hiérarchie de diffusion. Un bailleur n'est destinataire que sur décision du comité.",
      },
    ],
    table: {
      columns: ['Ligne du tableau', 'Contenu saisi (Goma)'],
      rows: [
        ['Référence de la mission', 'AI-2026-GOMA-02'],
        ['Dates de la mission', "Travail de terrain du 18 au 28 mai 2026 ; réunion de clôture le 29 mai 2026"],
        ['Auditeur(s) assigné(s)', "Amani K., auditeur(rice) interne, responsable de mission ; Fatou S., auditrice interne senior, supervision renforcée (décision du comité d'audit du 24 avril 2026)"],
        ['Périmètre audité', "Base de Goma / cycle achats-logistique, de la demande au paiement, carburant et magasin inclus / 1er octobre 2025 – 31 mars 2026. Exclusions : paie, trésorerie hors fournisseurs, activités médicales, locations ponctuelles."],
        ['Destinataires du rapport', "Comité d'audit (Hélène V., Présidente) ; Directeur Pays (Joseph T.) ; Coordinateur de la base (Dr Patrice N.) ; Finance Manager de la base (Ruth B.)"],
      ],
    },
    result: "Un tableau d'identification complet, cohérent avec la lettre de mission (mêmes dates, mêmes exclusions, même mesure d'indépendance). Contrôle : chaque ligne se retrouve mot pour mot dans la lettre de mission du 7 mai.",
    tip: "Copiez les lignes « Périmètre » et « Auditeurs » depuis la lettre de mission : toute différence entre les deux documents sera interprétée comme un changement de mandat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Remplir un bloc de constat de la section 3, champ par champ (exemple C-02)',
    intro: "Pourquoi : c'est le cœur du rapport. Le bloc est un tableau de neuf lignes : un titre fusionné, puis CONSTAT, CRITÈRE, CAUSE, EFFET, RECOMMANDATION, PRIORITÉ, RESPONSABLE, ÉCHÉANCE. Entrées : constat CCCE (procédure 2), recommandation (procédure 3), grille triée (procédure 4).",
    steps: [
      {
        title: 'Complétez le titre du bloc',
        body: "Format « CONSTAT C-02 — [titre neutre] ». Le numéro est celui de la grille.",
      },
      {
        title: 'Collez les quatre éléments CCCE',
        actions: [
          "CONSTAT : la phrase chiffrée et sourcée.",
          "CRITÈRE : document, version, section, exigence.",
          "CAUSE : la cause vérifiée par deux sources.",
          "EFFET : l'effet chiffré, avec son calcul.",
        ],
      },
      {
        title: 'Collez la recommandation, puis recopiez les trois champs de la grille',
        actions: [
          "RECOMMANDATION : le texte exact de la colonne B de la grille.",
          "PRIORITÉ : la valeur de la colonne F, avec le score (« Prioritaire — score 20 »).",
          "RESPONSABLE : nom et fonction (colonne G) ; ÉCHÉANCE : date en toutes lettres (colonne H).",
        ],
      },
      {
        title: 'Relisez le bloc en entier',
        body: "Du haut vers le bas, une phrase par ligne : chaque ligne doit se comprendre sans les autres lignes du rapport.",
      },
    ],
    example: {
      title: 'Bloc complet C-02 tel qu\'il apparaît dans la section 3',
      lines: [
        "CONSTAT C-02 — Réception assurée par le demandeur sur les petits achats",
        "CONSTAT : Sur les 412 BC de la période (1 380 000 USD), 37 BC (21 400 USD, tous inférieurs à 1 000 USD) ont le même demandeur et réceptionnaire, dont 31 BC (17 900 USD) pour le Logistics Officer. Source : extraction T_BC, colonne CUMUL.",
        "CRITÈRE : Procédure achats HSGL v2 (septembre 2024), section 6.1 : la réception des biens est assurée par une personne distincte du demandeur.",
        "CAUSE : Le poste d'assistant achats est vacant depuis le 14/11/2025 (recrutement gelé par la Direction Pays) ; aucun contrôle compensatoire n'a été instauré : le journal des achats ne porte aucun visa de novembre 2025 à avril 2026.",
        "EFFET : 21 400 USD (1,6 % des achats) sans contrôle indépendant de la réception. Sur 10 BC contrôlés physiquement, 10 biens étaient présents : aucune perte constatée à ce stade.",
        "RECOMMANDATION : Réaffecter la réception de tous les biens au magasinier, avec contre-signature de l'assistante logistique lorsque le Logistics Officer est le demandeur.",
        "PRIORITÉ : Prioritaire — score 20 (risque 4 × facilité 5)",
        "RESPONSABLE : Dr Patrice N., Coordinateur de la base",
        "ÉCHÉANCE : 30 juin 2026",
      ],
    },
    result: "Un bloc de neuf lignes, sans texte gris italique restant, dont PRIORITÉ, RESPONSABLE et ÉCHÉANCE sont identiques à la ligne C-02 de la grille. Contrôle : on peut recopier ces trois champs depuis la grille sans aucun écart.",
    pitfall: "Écrire dans le bloc une priorité (« Haute ») qui n'est pas celle de la grille (« Prioritaire »). Utilisez les trois mots de la grille : Prioritaire, Moyenne, Faible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Dupliquer le bloc pour chaque constat, numéroter et contrôler la cohérence',
    intro: "Pourquoi : le gabarit propose un « bloc vierge » C-03 à dupliquer : une copie par constat. Entrée : les six constats. Ordre : le gabarit ne l'impose pas ; suivez l'ordre du cycle (demande, réception, carburant, stock, pilotage, communication) pour que le lecteur suive le fil de l'activité.",
    steps: [
      {
        title: 'Supprimez les blocs d\'exemple, puis dupliquez le bloc vierge',
        actions: [
          "Supprimez les deux blocs d'exemple de Bunia (tableaux C-01 et C-02 d'origine).",
          "Sélectionnez le bloc vierge entier (les neuf lignes), copiez-le, collez-le à la suite, et recommencez jusqu'à obtenir six blocs.",
          "Laissez un paragraphe vide entre deux blocs pour qu'ils ne fusionnent pas.",
        ],
      },
      {
        title: 'Renseignez chaque bloc dans l\'ordre du cycle',
        body: "Utilisez la méthode de l'étape 3 : titre, constat, critère, cause, effet, recommandation, priorité, responsable, échéance.",
      },
      {
        title: 'Contrôlez les numéros et la concordance avec la grille',
        actions: [
          "Chaque numéro C-xx du rapport existe dans la colonne A de la grille, et inversement.",
          "Les trois champs PRIORITÉ, RESPONSABLE, ÉCHÉANCE de chaque bloc égalent la ligne de la grille.",
        ],
      },
    ],
    example: {
      title: 'Bloc C-01 (achats Meridian) tel que rédigé',
      lines: [
        "CONSTAT C-01 — Achats Meridian sans mise en concurrence formelle",
        "CONSTAT : Sur les 14 BC imputés au Fonds Meridian entre 5 000 et 10 000 USD du 1er janvier au 31 mars 2026 (97 500 USD au total), aucun dossier ne contient les trois offres écrites. Source : extraction T_BC ; 14 dossiers BC (liste en annexe).",
        "CRITÈRE : Convention de subvention Fonds Meridian, article 9 : mise en concurrence formelle (trois offres écrites) dès 5 000 USD. Procédure achats HSGL v2, section 5.2 : seuil fixé à 10 000 USD. Le seuil le plus strict s'applique aux achats imputés à Meridian.",
        "CAUSE : La grille de seuils n'a pas été mise à jour à l'arrivée du bailleur : la convention a été signée au siège le 12/12/2025 et reçue par la base le 03/03/2026, sans extrait des clauses d'achat (courriel de la Finance Manager du 03/03/2026).",
        "EFFET : 97 500 USD (7,1 % des achats) exposés à un classement en dépenses inéligibles par le Fonds Meridian, avec risque de remboursement ; visite du bailleur prévue en juillet 2026.",
        "RECOMMANDATION : Diffuser une note de service imposant trois offres écrites pour tout achat imputé au Fonds Meridian à partir de 5 000 USD ; mettre à jour la grille de seuils de la procédure achats v2 ; soumettre les 14 achats concernés à Meridian pour décision sur leur éligibilité.",
        "PRIORITÉ : Prioritaire — score 16 (risque 4 × facilité 4) · RESPONSABLE : Dr Patrice N., Coordinateur de la base · ÉCHÉANCE : 3 juillet 2026",
      ],
    },
    result: "Six blocs complets, sans bloc vierge restant, cohérents avec la grille. Les blocs C-03 à C-06 sont restitués dans le cas résolu.",
    tip: "Le critère de C-01 est la procédure v2 que l'auditeur a lui-même validée en 2024 : le rapport le dit dans les annexes, et Fatou S. a relu ce bloc. Ne cachez jamais un lien : déclarez-le, c'est ce qui protège la conclusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Remplir la section 4 — Synthèse des recommandations priorisées',
    intro: "Pourquoi : le lecteur pressé veut voir l'ordre d'exécution sur une page. Entrées : la grille triée. Le tableau comporte cinq colonnes : Réf. constat, Recommandation (résumé), Priorité, Responsable, Échéance.",
    steps: [
      {
        title: 'Supprimez les lignes d\'exemple',
        body: "Les deux lignes en texte noir (C-01 Bunia, C-02 Bunia) sont des exemples du gabarit : effacez-les.",
      },
      {
        title: 'Ajoutez autant de lignes que de recommandations',
        actions: [
          "Placez le curseur dans la dernière cellule du tableau et appuyez sur Tab pour créer une ligne.",
          "Le gabarit fournit deux lignes vides : complétez-les puis ajoutez-en d'autres.",
        ],
      },
      {
        title: 'Reprenez les lignes de la grille, dans le même ordre que la grille triée',
        body: "Du score le plus élevé au plus faible. Résumez chaque recommandation en une ligne (verbe + objet), sans nouvelle formulation.",
      },
      {
        title: 'Mentionnez le renvoi à la grille',
        body: "Le texte d'introduction de la section indique que le détail du calcul est dans grille-priorisation-recommandations.xlsx, jointe en annexe : vérifiez que la grille est bien listée en section 5.",
      },
    ],
    table: {
      columns: ['Réf. constat', 'Recommandation (résumé)', 'Priorité', 'Responsable', 'Échéance'],
      rows: [
        ['C-02', 'Réaffecter la réception au magasinier, contre-signature de l\'assistante logistique', 'Prioritaire', 'Dr Patrice N.', '30 juin 2026'],
        ['C-01', 'Note de service Meridian : 3 offres dès 5 000 USD, grille à jour, soumission des 14 achats', 'Prioritaire', 'Dr Patrice N.', '3 juillet 2026'],
        ['C-03', 'Compteur sur la cuve et rapprochement mensuel signé et visé', 'Moyenne', 'Josué M.', '31 août 2026'],
        ['C-05', 'Mettre à jour le suivi de l\'audit 2024 ; dates de clôture ; revue trimestrielle', 'Moyenne', 'Ruth B.', '15 juillet 2026'],
        ['C-06', 'Afficher le canal de signalement en français et swahili ; présentation au personnel d\'appui', 'Moyenne', 'Dr Patrice N.', '31 août 2026'],
        ['C-04', 'Enregistrer les sorties de stock le jour même ; contre-signature hebdomadaire', 'Faible', 'Didier L.', '30 juin 2026'],
      ],
    },
    result: "Un tableau de synthèse de six lignes, dont l'ordre, les priorités, les responsables et les dates sont identiques à ceux de la grille. Contrôle : lecture ligne à ligne en parallèle avec la grille, sans aucun écart.",
    pitfall: "Classer la synthèse par numéro de constat au lieu de par priorité : le gabarit demande une reprise « classée par priorité ». C'est ce classement qui dit au lecteur par où commencer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Remplir la section 5 — Annexes : rendre le rapport vérifiable',
    intro: "Pourquoi : un auditeur externe ou un bailleur ne vous croit pas sur parole ; il vérifie. Entrées : le journal des observations, la liste des entretiens, les pièces citées. La section compte quatre listes à compléter.",
    steps: [
      {
        title: 'Liste des documents consultés',
        body: "Contrats, factures, PV, politiques internes : nom, version ou date, référence. Un document par ligne, dans l'ordre où le rapport le cite.",
      },
      {
        title: 'Liste des personnes rencontrées',
        body: "Nom, fonction, date d'entretien. N'incluez pas les sources protégées : un informateur qui a demandé la confidentialité est cité par sa fonction générique, ou pas du tout.",
      },
      {
        title: 'Grille de priorisation des recommandations',
        body: "Indiquez que grille-priorisation-recommandations.xlsx est jointe, et joignez la version triée.",
      },
      {
        title: 'Autres pièces justificatives citées dans les constats',
        actions: [
          "Liste des 14 BC Meridian (n° de BC, fournisseur, montant) : annexe de C-01.",
          "Feuille de calcul du carburant de mars : annexe de C-03.",
          "Décision du comité d'audit du 24 avril 2026 sur l'indépendance de l'auditeur.",
        ],
      },
    ],
    example: {
      title: 'Annexes du rapport AI-2026-GOMA-02 (extrait)',
      lines: [
        "Annexe A — Documents consultés : Convention de subvention Fonds Meridian (art. 9) ; Procédure achats HSGL v2, sept. 2024 (sections 5.2 et 6.1) ; Procédure véhicules et carburant HSGL v1 (section 3.4) ; extraction des 412 BC ; registre de cuve de mars 2026 ; rapport d'audit externe 2024 et tableau de suivi.",
        "Annexe B — Personnes rencontrées : Dr Patrice N., Coordinateur de la base, 19/05 et 28/05 ; Ruth B., Finance Manager, 20/05 et 27/05 ; Josué M., Logistics Officer, 21/05 et 22/05 (entretien mené par Fatou S.) ; Esther K., assistante logistique, 24/05 ; Didier L., magasinier, 24/05 ; 8 gardiens et chauffeurs, 25/05.",
        "Annexe C — Grille de priorisation : 2026-06-03_Grille_priorisation_Goma.xlsx (onglet Priorisation, version triée).",
        "Annexe D — Pièces citées : liste des 14 BC Meridian ; calcul du carburant de mars ; décision du comité d'audit du 24/04/2026 sur l'indépendance (tests des seuils, entretiens de trois membres de l'équipe et relecture des conclusions par Fatou S.).",
      ],
    },
    result: "Quatre annexes, chacune renvoyant à des pièces du dossier. Contrôle : toute pièce citée dans un constat figure dans une annexe, et toute annexe est citée au moins une fois.",
    tip: "Citez la mesure d'indépendance dans les annexes : un lecteur qui apprend le lien de l'auditeur avec la base par un tiers, plutôt que par le rapport, remet en cause toute la mission.",
  },

  // ── Procédure 6 — Résumé exécutif ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Déterminer le niveau d\'assurance global à partir des constats, pas de l\'impression',
    intro: "Pourquoi : c'est la phrase que le Conseil retiendra si elle ne lit que cela. Quand : jours 3-4, uniquement après avoir terminé tous les blocs CCCE et la grille. Entrées : la grille triée, la liste des points de maîtrise (N-04), la présence ou non d'indices de fraude.",
    steps: [
      {
        title: 'Comptez les lignes Prioritaires de la grille',
        body: "Prenez le nombre de lignes dont F = « Prioritaire ». C'est le premier critère objectif.",
      },
      {
        title: 'Cherchez les indices de fraude et les contrôles clés absents',
        actions: [
          "Une fraude avérée (pièces falsifiées, bénéficiaire fictif prouvé) place d'office le niveau à « insuffisante ».",
          "Un contrôle clé totalement absent (aucune séparation des tâches sur tout un cycle) place le niveau à « limitée » au minimum.",
        ],
      },
      {
        title: 'Appliquez la règle du module',
        actions: [
          "Aucun Prioritaire et aucun indice de fraude : assurance élevée.",
          "Un ou deux Prioritaires, sans indice de fraude avérée : assurance modérée.",
          "Trois Prioritaires ou plus, ou un contrôle clé absent : assurance limitée.",
          "Fraude avérée ou défaillance généralisée du cycle : assurance insuffisante.",
        ],
      },
      {
        title: 'Rédigez la phrase en citant ce qui fonctionne',
        body: "Nommez les faiblesses, puis le point de maîtrise : cela montre que vous avez regardé l'ensemble, pas que le négatif.",
      },
    ],
    example: {
      title: 'Décision pour Goma',
      lines: [
        "Grille de Goma : 2 lignes Prioritaires (C-02 : 20 ; C-01 : 16), 3 Moyennes, 1 Faible. Aucun indice de fraude avérée : 10 biens contrôlés sur 10 présents ; aucune pièce falsifiée. Aucun contrôle clé totalement absent : 28 BC sur 28 supérieurs à 1 000 USD portent l'autorisation préalable du Coordinateur.",
        "Niveau retenu : assurance modérée.",
        "Phrase : « Assurance modérée : le dispositif de contrôle du cycle achats-logistique présente des faiblesses significatives sur deux points (mise en concurrence des achats Meridian, séparation demande / réception) et sur la traçabilité du carburant, sans indice de fraude avérée à ce stade. Point de maîtrise : les 28 BC supérieurs à 1 000 USD testés portent tous l'autorisation préalable du Coordinateur. »",
      ],
    },
    result: "Un niveau d'assurance justifié par trois faits (nombre de Prioritaires, absence d'indice de fraude, point de maîtrise), et une phrase prête à coller dans la section 2.",
    pitfall: "Choisir le niveau le soir où vous avez découvert le constat le plus choquant. Une découverte récente surpondère tout : laissez passer une nuit et relisez la grille avant de trancher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Rédiger le contexte et le périmètre en trois à quatre lignes',
    intro: "Pourquoi : un lecteur qui n'ira pas plus loin doit savoir de quoi parle le rapport. Entrées : la lettre de mission, la section 1 du rapport, le plan d'échantillonnage. Format du gabarit : « Contexte et périmètre (3-4 lignes) ».",
    steps: [
      {
        title: 'Rassemblez les cinq éléments du contexte',
        actions: [
          "Mandat : qui a commandité, quand (comité d'audit, lettre de mission du 7 mai 2026).",
          "Périmètre : base, cycle, période.",
          "Volume : nombre et montant des opérations couvertes.",
          "Méthode en une phrase : extraction complète, échantillons, contrôles physiques.",
          "Limites : exclusions et mesure d'indépendance.",
        ],
      },
      {
        title: 'Écrivez quatre phrases, une par idée',
        body: "Mandat et périmètre ; volume ; méthode ; limites. Pas d'historique de l'organisation, pas de jargon méthodologique.",
      },
      {
        title: 'Comptez les lignes',
        body: "Quatre lignes de rapport au maximum. Si vous dépassez, supprimez le détail de méthode : il figure déjà dans les annexes.",
      },
    ],
    example: {
      title: 'Contexte et périmètre de la section 2 (Goma)',
      lines: [
        "Sur mandat du comité d'audit (lettre de mission du 7 mai 2026), nous avons audité le cycle achats-logistique de la base de Goma du 1er octobre 2025 au 31 mars 2026 : 412 bons de commande pour 1 380 000 USD.",
        "Méthode : analyse de l'extraction complète des bons de commande, examen des 14 BC Meridian et de 28 BC supérieurs à 1 000 USD, contrôle physique de 10 livraisons, comptage de 20 articles en magasin et rapprochement du carburant de mars 2026.",
        "Limites : paie, trésorerie hors fournisseurs, activités médicales et locations ponctuelles sont exclues. L'auditeur responsable ayant été Log Manager de la base jusqu'en mars 2025, les tests de seuils, trois entretiens et la relecture des conclusions ont été confiés à Fatou S. (décision du comité du 24 avril 2026).",
      ],
    },
    result: "Un paragraphe de trois à quatre lignes qui répond à : quoi, où, quand, combien, comment, avec quelles limites. Contrôle : tous les chiffres sont identiques à ceux de la lettre de mission et des constats.",
    pitfall: "Raconter la mission dans l'ordre chronologique (« nous sommes arrivés le 18 mai… »). Le lecteur du résumé veut le périmètre et les limites, pas le journal de bord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Sélectionner les trois à cinq recommandations les plus prioritaires',
    intro: "Pourquoi : le lecteur du résumé n'ira peut-être pas plus loin : il doit connaître l'ordre d'exécution. Entrées : la grille triée. Le gabarit indique « Recommandations les plus prioritaires (5 maximum) ».",
    steps: [
      {
        title: 'Prenez d\'abord toutes les lignes Prioritaire de la grille',
        body: "Dans l'ordre du score décroissant. Il y en a au plus cinq : s'il y en a davantage, vos cotations sont à revoir.",
      },
      {
        title: 'Complétez jusqu\'à trois avec les Moyennes à risque le plus élevé',
        body: "Si moins de trois lignes sont Prioritaires, ajoutez les lignes Moyennes classées par niveau de risque décroissant : un résumé de moins de trois recommandations paraît incomplet.",
      },
      {
        title: 'Rédigez chaque ligne en une phrase',
        actions: [
          "Verbe d'action + objet + renvoi au constat (C-02) + responsable + échéance.",
          "Reprenez les mots de la grille ; ne reformulez pas.",
        ],
      },
      {
        title: 'Laissez les autres en section 4',
        body: "Les recommandations non retenues ne sont pas supprimées : elles figurent dans la synthèse (section 4) et dans la grille.",
      },
    ],
    example: {
      title: 'Les trois recommandations du résumé de Goma',
      lines: [
        "1. Réaffecter la réception de tous les biens au magasinier, avec contre-signature de l'assistante logistique (C-02) — Dr Patrice N., 30 juin 2026.",
        "2. Imposer par note de service trois offres écrites dès 5 000 USD pour les achats Meridian, mettre à jour la grille de seuils et soumettre les 14 achats (97 500 USD) à Meridian (C-01) — Dr Patrice N., 3 juillet 2026.",
        "3. Installer un compteur sur la cuve et rapprocher chaque mois cuve, carnets et registre des groupes (C-03) — Josué M., 31 août 2026.",
        "Sélection : C-02 (20) et C-01 (16) sont Prioritaires ; C-03 (risque 4, score 12) complète à trois, devant C-05 (risque 3, score 12).",
      ],
    },
    result: "Trois recommandations numérotées, avec renvoi au constat, responsable et date. Contrôle : leur ordre est identique à celui de la grille triée.",
    pitfall: "Faire figurer dans le résumé le constat sur lequel vous avez passé le plus de temps. La place dans le résumé dépend du risque et de la priorité, pas de l'effort que le constat vous a coûté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Relire le résumé : test de la page et test des dix minutes',
    intro: "Pourquoi : le résumé exécutif est la seule section que tout le monde lit ; une erreur s'y voit immédiatement. Entrées : le résumé rédigé aux étapes 1 à 3. Quand : après une nuit de repos, jamais à chaud.",
    steps: [
      {
        title: 'Faites le test de la page',
        actions: [
          "Le résumé tient-il sur une page maximum, avec les trois blocs du gabarit : contexte, niveau d'assurance, recommandations ?",
          "Y a-t-il un seul niveau d'assurance, sans nuance contradictoire ?",
        ],
      },
      {
        title: 'Contrôlez les chiffres',
        body: "Chaque chiffre du résumé (412 BC, 1 380 000 USD, 97 500 USD, 14 BC) est comparé au bloc de constat et à la grille : cochez-le. Un chiffre différent entre le résumé et le corps du rapport est l'erreur la plus visible.",
      },
      {
        title: 'Faites le test des dix minutes avec un lecteur extérieur',
        actions: [
          "Donnez le résumé à un collègue qui n'était pas en mission, avec un chronomètre.",
          "Posez-lui les quatre questions : qu'est-ce qui ne va pas, avec quelle gravité, pourquoi, que faire dans quel ordre avec qui ?",
          "Toute question qu'il ne sait pas traiter signale un manque dans le résumé.",
        ],
      },
      {
        title: 'Insérez le résumé dans la section 2 du gabarit',
        body: "Remplacez les trois zones grises (contexte, niveau d'assurance, recommandations) et supprimez la consigne « Une page maximum. Rédigé en dernier… », qui est destinée à l'auditeur.",
      },
    ],
    table: {
      columns: ['Question du lecteur', 'Réponse tirée du résumé de Goma'],
      rows: [
        ["Qu'est-ce qui ne va pas ?", "Achats Meridian sans mise en concurrence, réception par le demandeur, carburant non rapproché"],
        ['Avec quelle gravité ?', "Assurance modérée : faiblesses significatives, aucun indice de fraude avérée, 97 500 USD exposés"],
        ['Pourquoi ?', "Grille de seuils non mise à jour, poste d'assistant achats vacant, rapprochement mensuel jamais réalisé"],
        ['Que faire, dans quel ordre, avec qui ?', "1. Réception (Dr Patrice N., 30 juin) ; 2. Note Meridian (Dr Patrice N., 3 juillet) ; 3. Compteur (Josué M., 31 août)"],
      ],
    },
    result: "Un résumé d'une page, dont tous les chiffres sont vérifiés, que le lecteur extérieur comprend en moins de dix minutes. La section 2 du rapport est complète.",
    pitfall: "Faire relire le résumé seulement par la personne qui l'a écrit. L'auteur lit ce qu'il a voulu dire : un lecteur extérieur lit ce qui est écrit, et c'est le seul test qui compte.",
  },

  // ── Procédure 7 — Relire, valider, diffuser ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Contrôler chaque chiffre et chaque référence (tick-and-tie)',
    intro: "Pourquoi : une erreur de chiffre trouvée par l'audité fait douter de tout le rapport. Quand : jour 4, avant d'envoyer le rapport à quiconque. Entrées : le rapport en PDF, les feuilles de calcul, le dossier de preuves.",
    steps: [
      {
        title: 'Imprimez ou exportez le rapport et ouvrez le dossier de preuves',
        actions: [
          "Fichier > Exporter en PDF ; ouvrez le PDF et le dossier 04_Tests > Preuves côte à côte.",
          "Choisissez deux couleurs : vert pour « vérifié à la source », rouge pour « écart à corriger ».",
        ],
      },
      {
        title: 'Rattachez chaque chiffre à sa source',
        actions: [
          "Surlignez tous les chiffres du rapport (montants, pourcentages, nombres de dossiers, dates).",
          "Pour chacun, ouvrez la pièce ou le calcul d'origine et cochez-le.",
        ],
      },
      {
        title: 'Recalculez les totaux et les pourcentages',
        actions: [
          "Refaites chaque somme et chaque pourcentage dans Excel (=97500/1380000) ; ne vous fiez pas à une valeur copiée.",
          "Vérifiez que le même chiffre est identique dans le résumé, le constat, la synthèse et la grille.",
        ],
      },
      {
        title: 'Vérifiez les références',
        body: "Articles, sections, versions, noms, fonctions, dates d'entretien : tout élément cité se retrouve dans le document d'origine.",
      },
    ],
    table: {
      columns: ['Chiffre contrôlé (où)', 'Source', 'Recalcul', 'Verdict'],
      rows: [
        ['97 500 USD (C-01)', 'Extraction T_BC, 14 lignes', '=SOMME(...) = 97 500', 'Vert'],
        ['97 000 USD (résumé exécutif)', 'Même extraction', '97 500 dans C-01 et la grille', 'Rouge : corriger en 97 500'],
        ['7,1 % (C-01)', '97 500 / 1 380 000', '0,0707 soit 7,1 %', 'Vert'],
        ['37 BC, 21 400 USD (C-02)', 'Colonne CUMUL du T_BC', 'NB.SI = 37 ; SOMME = 21 400', 'Vert'],
        ['12,5 % (C-03)', '1 300 / 10 400', '0,125', 'Vert'],
        ['Article 9 (C-01)', 'Convention Meridian, page 12', 'Texte identique', 'Vert'],
      ],
    },
    result: "Un rapport dont chaque chiffre est coché vert, avec la liste des corrections faites (ici : 97 000 corrigé en 97 500 dans le résumé). Contrôle : aucun chiffre rouge ne subsiste, et la liste des corrections est datée.",
    pitfall: "Corriger le chiffre dans un seul endroit. Un même montant apparaît dans le résumé, le constat, la synthèse et la grille : après toute correction, recherchez-le (Ctrl+F) dans les quatre emplacements.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Faire relire par un pair : la relecture croisée',
    intro: "Pourquoi : vérifier que chaque constat tient debout sans vous, lecteur extérieur au terrain, et non faire refaire le travail. Quand : jours 4-5. Relectrice : Fatou S., qui a en outre pour mission, depuis la décision du comité d'audit du 24 avril, de relire toutes les conclusions.",
    steps: [
      {
        title: 'Préparez le dossier de relecture',
        actions: [
          "Rapport PDF, grille triée, accès au dossier de preuves (en lecture seule).",
          "Un mot d'accompagnement qui indique ce que vous attendez : « vérifier que chaque constat est complet et que chaque chiffre se retrouve dans les preuves ».",
        ],
      },
      {
        title: 'Donnez à la relectrice sa liste de contrôle',
        actions: [
          "Chaque constat contient-il les quatre éléments CCCE ?",
          "Le critère est-il référencé à la section près ?",
          "La cause est-elle prouvée par deux sources ?",
          "Les recommandations sont-elles assignables (nom, date, action vérifiable) ?",
          "Les cotations de la grille sont-elles cohérentes avec le Barème ?",
          "Le résumé exécutif est-il fidèle au corps du rapport ?",
        ],
      },
      {
        title: 'Tenez la fiche de relecture',
        body: "Un tableau simple : n°, emplacement, commentaire de la relectrice, réponse de l'auteur, statut (traité / maintenu). Chaque commentaire reçoit une réponse écrite.",
      },
      {
        title: 'Traitez les commentaires avant d\'envoyer le rapport provisoire',
        body: "Un commentaire maintenu sans modification est motivé par écrit : « chiffre confirmé par la pièce X ».",
      },
    ],
    example: {
      title: 'Fiche de relecture de Fatou S. — 8 juin 2026 (extrait)',
      lines: [
        "1. C-01, CAUSE : « Reçue par la base le 03/03/2026 : par qui ? » → Réponse : courriel de la Finance Manager du 03/03/2026 joint en annexe D. Traité.",
        "2. C-02, EFFET : « 'Aucune perte constatée' repose sur 10 contrôles : indiquer la taille de l'échantillon. » → Réponse : « 10 BC sur 37 » ajouté. Traité.",
        "3. Résumé exécutif : « 97 000 USD » au lieu de 97 500. → Corrigé (tick-and-tie, étape 1). Traité.",
        "4. C-03, RECOMMANDATION : « le visa de la Finance Manager n'est pas dans la phrase de la grille. » → Ajouté dans le bloc et dans la grille. Traité.",
        "5. C-05, PRIORITÉ : « 12 = Moyenne : cohérent avec le Barème. » → Aucune modification. Maintenu.",
      ],
    },
    result: "Une fiche de relecture dont tous les commentaires ont une réponse écrite, et un rapport corrigé version 1.0, prêt à être envoyé à l'audité.",
    pitfall: "Confier la relecture à quelqu'un qui n'a pas accès aux preuves, ou qui a participé aux tests sur le même constat. Il relira ce que vous voulez dire, pas ce qui est prouvé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Envoyer le rapport provisoire et recueillir la validation des faits',
    intro: "Pourquoi : la procédure contradictoire protège vos constats et la relation avec l'audité. Quand : 12 juin 2026. Entrées : rapport v1.0 en PDF, grille triée. Règle : le rapport provisoire ne va qu'à ceux qui doivent valider les faits et répondre.",
    steps: [
      {
        title: 'Constituez la liste de diffusion du rapport provisoire',
        body: "Le Coordinateur de la base, le Finance Manager, le Directeur Pays, et en copie la présidente du comité d'audit. Pas de diffusion externe à ce stade.",
      },
      {
        title: 'Rédigez un courriel court qui cadre la validation',
        actions: [
          "Rappelez ce qui est attendu : exactitude des faits, et réponse sur chaque recommandation (accepter, modifier, refuser).",
          "Fixez une date de retour (19 juin, soit cinq jours ouvrés) et une date de réunion.",
          "Précisez que seules des preuves modifient un constat.",
        ],
      },
      {
        title: 'Joignez la fiche de validation des faits',
        body: "Un tableau par constat : les faits sont-ils exacts (oui / non, avec pièce à l'appui) ? Quelle est la réponse du responsable à la recommandation ? Quelle suite est proposée ?",
      },
      {
        title: 'Tenez la réunion de validation',
        body: "Passez les constats dans l'ordre de la grille ; recueillez les réponses, ne les débattez pas à chaud : vous les évaluerez avec preuves à l'étape suivante.",
      },
    ],
    example: {
      title: 'Courriel d\'envoi du rapport provisoire — 12 juin 2026',
      lines: [
        "Objet : Rapport provisoire AI-2026-GOMA-02 — validation des faits avant le 19 juin.",
        "« Bonjour à toutes et à tous, voici le rapport provisoire de l'audit du cycle achats-logistique de Goma, avec la grille de priorisation. Nous vous demandons : (1) de confirmer, pour chaque constat, l'exactitude des faits ou de nous transmettre la pièce qui les contredit ; (2) d'indiquer, pour chaque recommandation qui vous est assignée, si vous l'acceptez, la modifiez ou la refusez, avec votre motif. Retour attendu le vendredi 19 juin ; réunion de validation le même jour à 10 h. Ce rapport est confidentiel et ne doit pas être transmis hors de la liste ci-dessus. Cordialement, Amani K. et Fatou S. »",
      ],
    },
    result: "Un rapport provisoire envoyé à la date prévue, avec une fiche de validation à retourner et une réunion fixée. Le délai de réponse est tracé dans le journal de la mission.",
    tip: "Envoyez d'abord un appel préalable au Coordinateur : il ne doit pas découvrir un constat sur sa base par écrit en même temps que son supérieur. Cette courtoisie ne change aucun contenu ; elle change la qualité de la discussion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Traiter les réponses : corriger les faits, maintenir les conclusions fondées',
    intro: "Pourquoi : un auditeur qui change un constat sous pression perd son indépendance ; un auditeur qui refuse de corriger une erreur prouvée perd sa crédibilité. Entrées : les réponses reçues le 19 juin, vos preuves. Principe : seules des preuves modifient un constat.",
    steps: [
      {
        title: 'Classez chaque objection',
        actions: [
          "Erreur factuelle prouvée (chiffre, date, version) : corrigez.",
          "Désaccord sur le critère : rouvrez le document, vérifiez la version en vigueur.",
          "Désaccord sur la cause : demandez la pièce ou la deuxième source.",
          "Désaccord sur la recommandation : acceptez un autre moyen s'il traite la même cause.",
          "Désaccord sans élément nouveau : maintenez, consignez la réponse.",
        ],
      },
      {
        title: 'Évaluez avec preuves, en réunion avec la relectrice',
        body: "Fatou S. participe à l'évaluation : une conclusion maintenue ou modifiée le sera à deux.",
      },
      {
        title: 'Intégrez la réponse du responsable au rapport définitif',
        body: "Même quand vous maintenez le constat, la réponse de l'audité est jointe dans les annexes (pièces justificatives) : le lecteur voit les deux points de vue.",
      },
      {
        title: 'Signalez les pressions au comité, sans attendre',
        body: "Toute demande de supprimer un constat ou de baisser une priorité sans preuve nouvelle est tracée dans une note au dossier d'indépendance (voir module 01, procédure 9).",
      },
    ],
    table: {
      columns: ['Objection (19 juin)', 'Évaluation', 'Décision'],
      rows: [
        ["Dr Patrice N. (C-03) : « La procédure carburant a été révisée en janvier 2026. »", "Vérification : une version v2 est en vigueur depuis le 15/01/2026 ; l'exigence est identique, la section est la 3.5", "Erreur de référence corrigée : « v2, section 3.5 ». Constat, cause, effet inchangés."],
        ["Dr Patrice N. (C-01) : « La faute vient du siège, qui ne nous a pas transmis l'article 9. »", "Cohérent avec la cause déjà documentée (courriel du 03/03) ; ne modifie ni le constat ni le critère", "Constat maintenu. Réponse jointe en annexe. Défaut de transmission des conventions signalé au comité dans une note séparée."],
        ["Josué M. (C-02) : « Ce sont de petits montants. »", "Le critère 6.1 ne prévoit aucun seuil ; l'effet est mesuré sur 21 400 USD", "Constat maintenu. Contre-signature de l'assistante logistique acceptée par Josué M."],
        ["Joseph T. (C-03) : « Retirez-le du résumé, ce n'est qu'un mois de carburant. »", "Aucune preuve nouvelle ; C-03 est la 3e ligne selon la règle de sélection ; demande avant la visite du bailleur", "Refusé. Note au dossier d'indépendance datée du 19/06 ; la présidente du comité est informée."],
      ],
    },
    result: "Un tableau d'objections évaluées, dont une seule modifie le rapport (version de la procédure carburant), les autres étant maintenues avec leur réponse. Contrôle : chaque modification est justifiée par une pièce, chaque maintien par un motif écrit.",
    pitfall: "Céder à une objection « pour ne pas bloquer le dossier ». Une concession sans preuve crée un précédent : au constat suivant, l'audité reviendra avec la même demande.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Compléter la section 6 (Validation), approuver et diffuser le rapport définitif',
    intro: "Pourquoi : la section 6 prouve qui a rédigé, relu et approuvé, et quand : c'est ce que l'auditeur externe cherchera. Quand : 25-26 juin 2026. Entrées : rapport définitif v2.0 intégrant les corrections, grille mise à jour, réponses des responsables.",
    steps: [
      {
        title: 'Complétez le tableau de la section 6',
        actions: [
          "Colonne « Rédigé par » : nom, fonction et date de la version définitive.",
          "Colonne « Revu par » : nom, fonction et date de la relecture finale.",
          "Colonne « Approuvé par » : nom, fonction et date de l'approbation.",
        ],
      },
      {
        title: 'Faites approuver par le commanditaire',
        body: "Envoyez le PDF à la présidente du comité d'audit avec la liste des modifications depuis le provisoire. Son approbation (signature ou courriel conservé) précède toute diffusion.",
      },
      {
        title: 'Diffusez selon la liste de la section 1',
        actions: [
          "Envoyez le PDF (jamais le fichier Word modifiable) aux destinataires, avec la grille en annexe.",
          "Une transmission au Fonds Meridian relève du comité d'audit, pas de l'auditeur.",
          "Marquez le document « Confidentiel — diffusion restreinte ».",
        ],
      },
      {
        title: 'Archivez la version signée et ouvrez le suivi',
        body: "Rangez le PDF signé dans 05_Rapport, la fiche de relecture et le tableau d'objections dans 04_Tests ; ouvrez le dossier 06_Suivi pour la procédure 8.",
      },
    ],
    example: {
      title: 'Section 6 — Validation du rapport définitif',
      lines: [
        "Rédigé par : Amani K., auditeur(rice) interne — 24 juin 2026.",
        "Revu par : Fatou S., auditrice interne senior — 25 juin 2026.",
        "Approuvé par : Hélène V., Présidente du comité d'audit — 26 juin 2026.",
        "Diffusion le 26 juin 2026 : comité d'audit ; Joseph T., Directeur Pays ; Dr Patrice N., Coordinateur de la base ; Ruth B., Finance Manager. Transmission au Fonds Meridian : à décider par le comité avant sa visite de juillet.",
      ],
    },
    result: "Un rapport définitif signé, daté, diffusé à la liste prévue, archivé, avec la section 6 entièrement renseignée. Le suivi peut commencer.",
    pitfall: "Diffuser le rapport en format Word modifiable. Un paragraphe retouché après votre signature engage votre nom sans que vous le sachiez : diffusez toujours le PDF signé.",
  },

  // ── Procédure 8 — Plan d'action correctif ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 5',
    title: 'Constituer le plan d\'action correctif à partir de la grille',
    intro: "Pourquoi : le rapport décrit, le plan d'action fait exécuter. Quand : le jour de la diffusion du rapport définitif, 26 juin 2026. Entrées : la grille triée après validation, la fiche de preuves de clôture de la procédure 3. Le plan d'action correctif est la grille elle-même : colonnes A, B, G, H, I.",
    steps: [
      {
        title: 'Mettez la grille à jour avec les décisions de la validation',
        actions: [
          "Corrigez dans les colonnes G et H tout responsable ou toute échéance modifié après accord écrit.",
          "Laissez les colonnes C à F intactes : les cotations ont été maintenues.",
        ],
      },
      {
        title: 'Créez votre journal de suivi, dans le dossier 06_Suivi',
        body: "C'est un fichier de travail à part, distinct de la grille, avec une ligne par recommandation : référence, réponse de la direction, preuve de clôture attendue, dates de relance, commentaire. Vous n'ajoutez aucune colonne à la grille.",
      },
      {
        title: 'Envoyez à chaque responsable ses lignes et ses preuves attendues',
        actions: [
          "Un courriel par responsable, avec uniquement ses recommandations.",
          "Pour chaque ligne : l'action, la date, la preuve que vous demanderez, et la date de votre première relance.",
        ],
      },
    ],
    example: {
      title: 'Journal de suivi (06_Suivi) — état au 26 juin 2026',
      lines: [
        "C-02 | Dr Patrice N. | 2026-06-30 | Preuve : note d'affectation signée + 8 bons de réception contre-signés de juillet | Première relance : 2026-06-26.",
        "C-01 | Dr Patrice N. | 2026-07-03 | Preuve : note de service signée ; grille de seuils v2.1 ; accusé de réception de Meridian | Relance : 2026-06-26.",
        "C-03 | Josué M. | 2026-08-31 | Preuve : registre de jauge quotidien (dès le 30/06) ; bon de commande du compteur avant le 10/07 ; rapprochement de juillet visé | Relance : 2026-07-06.",
        "C-05 | Ruth B. | 2026-07-15 | Preuve : tableau de suivi à jour, deux dates de clôture, compte rendu de la première revue trimestrielle | Relance : 2026-07-06.",
      ],
    },
    result: "Un plan d'action à 6 lignes (grille mise à jour) et un journal de suivi avec preuves attendues et dates de relance, envoyés le jour de la diffusion. Contrôle : chaque responsable a reçu ses lignes, et seulement les siennes.",
    tip: "Ne créez pas un second tableau de suivi avec des colonnes supplémentaires dans la grille : une seule source de vérité. Le journal de suivi sert à vos notes d'auditeur ; la grille reste l'état partagé du plan d'action.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 5',
    title: 'Obtenir l\'acceptation écrite de chaque responsable',
    intro: "Pourquoi : une recommandation que son responsable n'a pas acceptée par écrit n'est qu'une suggestion de l'auditeur. Quand : entre le 12 et le 19 juin (validation), puis confirmation au 26 juin. Entrées : la fiche de validation et le courriel de chaque responsable.",
    steps: [
      {
        title: 'Demandez à chaque responsable une réponse parmi trois',
        actions: [
          "Accepté : le responsable fait l'action, à la date indiquée.",
          "Accepté avec modification : un autre moyen ou une autre date, avec motif.",
          "Refusé : avec le motif et, si le risque est accepté, la décision de l'autorité supérieure.",
        ],
      },
      {
        title: 'Exigez une réponse écrite, datée, nominative',
        body: "Un courriel suffit. « Oui, on s'en occupe » en réunion n'est pas une acceptation : reformulez par écrit et demandez confirmation.",
      },
      {
        title: 'Traitez les refus',
        actions: [
          "Un refus motivé par un moyen irréaliste : cherchez un autre moyen qui traite la même cause.",
          "Un refus d'une recommandation Prioritaire : faites arbitrer par le Directeur Pays, et informez le comité d'audit.",
        ],
      },
      {
        title: 'Reportez la réponse dans le journal de suivi',
        body: "Réponse, date, personne, modification éventuelle : sans cela, rien ne distingue une acceptation d'un silence.",
      },
    ],
    table: {
      columns: ['Réf.', 'Responsable', 'Réponse', 'Date', 'Modification'],
      rows: [
        ['C-02', 'Dr Patrice N.', 'Accepté', '2026-06-19', 'Aucune'],
        ['C-01', 'Dr Patrice N.', 'Accepté', '2026-06-19', 'Réponse sur « la faute du siège » jointe au rapport'],
        ['C-03', 'Josué M.', 'Accepté avec modification', '2026-06-19', 'Jauge quotidienne dès le 30/06 ; compteur au 31/08 (commande avant le 10/07)'],
        ['C-05', 'Ruth B.', 'Accepté', '2026-06-18', 'Aucune'],
        ['C-06', 'Dr Patrice N.', 'Accepté', '2026-06-19', 'Aucune'],
        ['C-04', 'Didier L.', 'Accepté', '2026-06-19', 'Aucune'],
      ],
    },
    result: "Six réponses écrites, dont cinq acceptées sans changement et une acceptée avec modification, toutes reportées dans le journal de suivi. Contrôle : aucune ligne du plan sans réponse écrite.",
    pitfall: "Laisser une réponse en suspens et la considérer comme tacite. Un silence ne vaut pas acceptation : relancez par écrit, puis escaladez au Directeur Pays si la recommandation est Prioritaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 5',
    title: 'Fixer les jalons intermédiaires et la preuve de clôture de chaque ligne',
    intro: "Pourquoi : une action à échéance éloignée sans point d'étape dérive jusqu'à la veille de la date. Entrées : les échéances et la fiche de preuves de la procédure 3. Règle : tout délai supérieur à 60 jours reçoit un jalon.",
    steps: [
      {
        title: 'Reprenez pour chaque ligne la preuve de clôture',
        body: "La pièce que vous demanderez : elle doit être déjà écrite dans la procédure 3 et acceptée par le responsable.",
      },
      {
        title: 'Ajoutez un jalon à toute action de plus de 60 jours',
        body: "Une étape intermédiaire constatable, à date fixe : commande passée, devis signé, première réunion tenue.",
      },
      {
        title: 'Précisez le contrôle que vous ferez à la clôture',
        actions: [
          "Contrôle documentaire : la pièce existe, est signée, datée, cohérente.",
          "Contrôle de fonctionnement : un petit échantillon montre que la règle s'applique.",
        ],
      },
    ],
    table: {
      columns: ['Réf.', 'Preuve de clôture', 'Jalon intermédiaire', 'Contrôle à la clôture'],
      rows: [
        ['C-02', "Note d'affectation signée ; bons de réception contre-signés", 'Aucun (30 jours)', 'Extraction de juillet : aucun BC où demandeur = réceptionnaire'],
        ['C-01', 'Note de service signée ; grille v2.1 ; accusé de réception Meridian', 'Aucun (37 jours)', 'Lecture de 3 BC Meridian de juillet : 3 offres écrites'],
        ['C-03', 'Registre de jauge, facture et photo du compteur, rapprochement signé et visé', 'Commande du compteur avant le 2026-07-10', 'Rapprochement d\'août recalculé : écart inférieur à 2 %'],
        ['C-05', 'Tableau à jour avec deux dates de clôture', 'Aucun (19 jours)', 'Compte rendu de la revue trimestrielle'],
        ['C-06', 'Photos des trois affichages ; liste d\'émargement de la réunion', 'Traductions prêtes avant le 2026-07-31', 'Questionnaire à 8 membres du personnel d\'appui : au moins 6 informés'],
        ['C-04', 'Feuille de recomptage signée ; fiches contre-signées', 'Aucun (4 jours)', 'Comptage de 10 articles : aucun écart'],
      ],
    },
    result: "Pour chaque ligne, une preuve précise, un jalon quand le délai l'exige, et un contrôle défini. Contrôle : on peut dire, avant l'échéance, ce qui sera accepté comme preuve.",
    pitfall: "Accepter comme preuve de clôture une déclaration (« c'est fait »). Une preuve est une pièce ou un constat, jamais une parole : même la parole d'un responsable fiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 5',
    title: 'Suivre le plan chaque mois et mettre à jour les statuts de la grille',
    intro: "Pourquoi : « c'est ce fichier qui sert de tableau de bord de suivi entre deux missions ». Quand : le premier jour ouvré de chaque mois. Entrées : la grille, le journal de suivi, les pièces reçues.",
    steps: [
      {
        title: 'Relancez sept jours avant chaque échéance',
        body: "Un courriel court : action, date, preuve attendue. Si une difficulté apparaît, elle apparaît avant la date, pas après.",
      },
      {
        title: 'Mettez à jour la colonne I (Statut) avec la liste déroulante',
        actions: [
          "À faire : rien n'a démarré, échéance non dépassée.",
          "En cours : l'action est engagée, une preuve partielle existe.",
          "Clôturée : la preuve a été reçue ET contrôlée (étape 5).",
          "En retard : échéance dépassée sans preuve complète et sans report écrit validé.",
        ],
      },
      {
        title: 'Envoyez une note mensuelle d\'une page au comité d\'audit',
        body: "Nombre de lignes par statut, liste des lignes Prioritaires, lignes en retard avec la raison. Les lignes en retard de plus de 30 jours sont escaladées.",
      },
      {
        title: 'Traitez les demandes de report',
        body: "Un report se demande par écrit avant l'échéance, avec motif et nouvelle date : acceptez-le au maximum une fois, et uniquement si le risque n'augmente pas.",
      },
    ],
    table: {
      columns: ['Réf.', 'Échéance', 'Preuve reçue', 'Statut au 31 juillet 2026'],
      rows: [
        ['C-02', '2026-06-30', 'Note d\'affectation ; 8 bons contre-signés ; extraction de juillet contrôlée', 'Clôturée'],
        ['C-04', '2026-06-30', 'Feuille de recomptage signée ; fiches contre-signées', 'Clôturée'],
        ['C-01', '2026-07-03', 'Note de service signée ; accusé de réception de Meridian ; décision attendue', 'Clôturée (soumission transmise)'],
        ['C-03', '2026-08-31', 'Registre de jauge quotidien ; compteur commandé le 08/07', 'En cours'],
        ['C-05', '2026-07-15', 'Aucune pièce reçue', 'En retard (relancé le 22/07)'],
        ['C-06', '2026-08-31', 'Traductions en cours', 'À faire'],
      ],
    },
    result: "Une grille dont la colonne Statut reflète la réalité du jour, une note d'une page envoyée au comité, et les relances tracées. Contrôle : chaque statut est justifié par une pièce du dossier 06_Suivi.",
    pitfall: "Passer une ligne à « Clôturée » parce que le responsable affirme avoir terminé. « Clôturée » signifie : preuve reçue ET contrôlée. Avant cela, la ligne reste « En cours » ou « En retard ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 5',
    title: 'Clôturer une recommandation : vérifier la preuve et retester',
    intro: "Pourquoi : une action déclarée terminée n'est pas forcément efficace. Quand : dès que le responsable transmet la preuve de clôture. Entrées : la preuve attendue, le contrôle défini à l'étape 3, la population de la période suivante.",
    steps: [
      {
        title: 'Vérifiez la preuve reçue',
        actions: [
          "La pièce existe, est signée et datée par la bonne personne.",
          "Elle correspond exactement à l'action recommandée.",
        ],
      },
      {
        title: 'Refaites le test sur une période postérieure',
        body: "Reprenez le test qui a produit le constat sur une période nouvelle : une règle réellement appliquée change les chiffres.",
      },
      {
        title: 'Décidez et consignez',
        actions: [
          "Le test confirme : statut « Clôturée », date et résultat inscrits dans le journal de suivi.",
          "Le test échoue : l'action reste « En cours » avec une nouvelle échéance, une seule fois.",
          "Deuxième échec : escalade au Directeur Pays et au comité d'audit.",
        ],
      },
      {
        title: 'Rendez compte au comité',
        body: "Chaque clôture figure dans la note mensuelle, avec la preuve et le test effectué.",
      },
    ],
    example: {
      title: 'Clôture de C-02 — 7 juillet 2026',
      lines: [
        "Preuve reçue le 30/06 : note d'affectation de la réception au magasinier, signée par Dr Patrice N. le 29/06 ; 8 bons de réception de juillet contre-signés par l'assistante logistique.",
        "Test de contrôle : extraction des BC du 1er au 6 juillet, colonne CUMUL : 0 BC où demandeur = réceptionnaire (37 en six mois auparavant) ; 8 bons de réception contre-signés sur 8.",
        "Décision : statut « Clôturée » dans la grille le 07/07/2026 ; test de juillet complet à reprendre en août sur 10 BC.",
      ],
    },
    result: "Une recommandation clôturée sur preuve et sur test, avec la date de clôture, le résultat du test et la note au comité. Contrôle : un tiers peut refaire le test et trouver le même résultat.",
    tip: "Reprenez le test de clôture un mois plus tard sur un petit échantillon : une règle appliquée la semaine qui suit votre relance peut disparaître trois semaines après. C'est la différence entre clôturer et sécuriser.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — « Du carnet de Goma au rapport » : partie 1, les six constats',
    scenario: "Rappel de l'énoncé : vous rentrez de Goma avec 13 notes brutes et un dossier de pièces. Le 12 juin, un rapport provisoire doit partir. Livrable de cette partie : les six constats retenus, chacun chiffré et sourcé, avec son effet et sa priorité. Les trois derniers blocs complets (C-03 à C-06) sont restitués dans les parties 2 et 3.",
    steps: [
      {
        title: 'Raisonnement 1 — Un constat par cause, pas par occurrence',
        body: "Les 14 achats Meridian forment un seul constat (même critère, même cause) ; la réception par le demandeur (autre critère, autre cause) en forme un second, même si le même Logistics Officer est concerné.",
      },
      {
        title: 'Raisonnement 2 — Une opinion devient un fait ou disparaît',
        body: "« Le Coordinateur laisse faire » (N-03) a été remplacé par « aucun visa du journal des achats de novembre à avril » ; le ouï-dire sur le fournisseur de pneus (N-10) n'a pas été retenu ; la signature de l'adjoint (N-05) a été levée par une délégation datée du 8 mai.",
      },
      {
        title: 'Raisonnement 3 — Les cotations discriminent',
        body: "Aucune note de risque à 5 (aucune fraude avérée) ; deux lignes Prioritaires seulement ; une ligne Faible : la grille dit au lecteur où commencer.",
      },
    ],
    table: {
      columns: ['Réf. et titre', 'Constat chiffré', 'Effet', 'Score · priorité'],
      rows: [
        ['C-01 Achats Meridian sans mise en concurrence', '14 BC de 5 000 à 10 000 USD, 97 500 USD, sans 3 offres écrites', '7,1 % des achats exposés à l\'inéligibilité', '16 · Prioritaire'],
        ['C-02 Réception par le demandeur', '37 BC sur 412, 21 400 USD ; 31 BC pour le Logistics Officer', '1,6 % des achats sans contrôle indépendant ; 10 biens présents sur 10', '20 · Prioritaire'],
        ['C-03 Carburant non rapproché', '1 300 L non justifiés sur 10 400 L en mars ; 2 véhicules sur 6 sans carnet', '12,5 % des sorties, environ 1 950 USD en un mois', '12 · Moyenne'],
        ['C-04 Écarts de stock', '3 articles sur 20 en écart ; 1 240 USD bruts', '3,2 % de la valeur comptée', '6 · Faible'],
        ['C-05 Suivi de l\'audit 2024', '2 recommandations sur 5 sans date ; tableau non mis à jour depuis 8 mois', 'Faiblesses connues sans échéance avant la visite du bailleur', '12 · Moyenne'],
        ['C-06 Signalement peu connu', '3 personnes sur 8 connaissent le mécanisme', '5 sur 8 ne connaissent pas le canal', '9 · Moyenne'],
      ],
    },
    result: "Partie 1 terminée : six constats retenus sur treize notes, un point positif (28 BC sur 28 autorisés avant engagement), deux Prioritaires, trois Moyennes, une Faible.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2 : les blocs de constats C-03 et C-04 (version provisoire du 12 juin)',
    scenario: "Voici les blocs C-03 et C-04 tels qu'ils figurent dans la section 3 du rapport provisoire. Les blocs C-01 et C-02 ont été montrés à la procédure 5. Remarquez que la référence du critère de C-03 sera corrigée à la procédure 7 (version v2 de la procédure carburant).",
    steps: [
      {
        title: 'Lecture',
        body: "Un chiffre, un dénominateur et une source dans chaque constat ; un critère à la section près ; une cause à deux sources ; un effet chiffré ; une recommandation avec responsable et date.",
      },
    ],
    table: {
      columns: ['Champ', 'C-03 — Carburant non rapproché', 'C-04 — Écarts de stock'],
      rows: [
        ['CONSTAT', "En mars 2026, 10 400 L ont été sortis de la cuve ; les carnets de bord et le registre des groupes justifient 9 100 L, soit 1 300 L non justifiés (12,5 %). Deux des six véhicules n'ont aucun carnet de bord pour le mois. Source : registre de cuve, carnets, registre des groupes.", "Sur 20 articles comptés le 24 mai 2026 (valeur 38 500 USD), 17 concordent avec la fiche de stock et 3 présentent un écart : 1 240 USD en valeur brute (780 USD de manquants, 460 USD d'excédents). Source : feuille de comptage du 24/05, fiches de stock."],
        ['CRITÈRE', "Procédure véhicules et carburant HSGL v1, section 3.4 : carnet de bord par véhicule ; rapprochement mensuel cuve / carnets / registre des groupes, signé par le Log Manager.", "Procédure de gestion des stocks HSGL v2, section 8.3 : toute sortie est enregistrée sur la fiche de stock dans les 24 heures."],
        ['CAUSE', "Aucun rapprochement mensuel signé pour les six mois de la période (registre vierge) ; la cuve est suivie à la jauge manuelle, sans compteur ; la fonction de Log Manager, vacante, n'a pas été reprise pour ce contrôle (entretiens des 25 et 26 mai, registre).", "Les sorties sont enregistrées une fois par semaine, le vendredi, avec 3 à 5 jours de retard, par le magasinier seul, sans contre-signature (entretien du 24/05 ; dates des écritures sur les fiches)."],
        ['EFFET', "1 300 L (12,5 % des sorties de mars, environ 1 950 USD à 1,50 USD le litre) non justifiés pour un seul mois ; le fournisseur de carburant représente 96 000 USD sur six mois (7 % des achats) : sans contrôle, un détournement ne serait pas détecté.", "Écart brut de 1 240 USD, soit 3,2 % de la valeur comptée : la fiabilité du stock est affectée, sans perte démontrée à ce stade."],
        ['RECOMMANDATION', "Installer un compteur volumétrique sur la cuve et réaliser chaque mois un rapprochement cuve / carnets / registre des groupes, signé et visé ; relevé quotidien signé de la jauge en attendant.", "Enregistrer chaque sortie de stock le jour même ; faire contre-signer les fiches chaque vendredi ; régulariser les trois écarts après recomptage."],
        ['PRIORITÉ', 'Moyenne — score 12 (risque 4 × facilité 3)', 'Faible — score 6 (risque 2 × facilité 3)'],
        ['RESPONSABLE', 'Josué M., Logistics Officer (Log Manager par intérim) ; visa mensuel de Ruth B.', 'Didier L., magasinier ; contre-signature hebdomadaire par Esther K.'],
        ['ÉCHÉANCE', '31 août 2026 (jauge quotidienne dès le 30 juin)', '30 juin 2026'],
      ],
    },
    result: "Partie 2 terminée : deux blocs complets, chacun lisible sans le reste du rapport, dont le contenu se retrouve identique dans la grille.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3 : les blocs de constats C-05 et C-06',
    scenario: "Les deux derniers blocs de la section 3. Ils portent sur le pilotage et la communication : des domaines où les chiffres sont plus petits, mais où la cause (un suivi sans propriétaire, un affichage en français seulement) oriente directement la recommandation.",
    steps: [
      {
        title: 'Lecture',
        body: "Ces deux constats ne passent pas dans le résumé exécutif : leur place est dans la section 4 et dans la grille. La longueur d'un bloc reste proportionnelle à l'effet documenté.",
      },
    ],
    table: {
      columns: ['Champ', 'C-05 — Suivi de l\'audit externe 2024', 'C-06 — Signalement peu connu'],
      rows: [
        ['CONSTAT', "Sur les 5 recommandations de l'audit externe 2024, 2 sont « en cours » sans date de clôture ; le tableau de suivi n'a pas été mis à jour depuis septembre 2025, soit 8 mois. Source : tableau de suivi, rapport d'audit externe 2024.", "Sur 8 gardiens et chauffeurs interrogés le 25 mai 2026, 3 savent qu'un mécanisme de signalement existe ; l'affichage n'existe que dans le hall des bureaux. Source : notes d'entretien, photo de l'affichage."],
        ['CRITÈRE', "Procédure de suivi des recommandations d'audit HSGL v1 (2023), section 2 : chaque recommandation porte une date de clôture ; revue trimestrielle du tableau.", "Politique de signalement HSGL v1 (mars 2024), article 5 : le mécanisme est porté à la connaissance de tout le personnel, y compris d'appui, dans les langues de travail."],
        ['CAUSE', "Le suivi n'a été confié à personne après la réorganisation de septembre 2025 (entretiens de la Finance Manager le 25 mai et du Coordinateur le 27 mai).", "L'affichage se limite au hall des bureaux, en français ; le mécanisme n'est pas présenté à l'accueil du personnel d'appui (entretiens du 25 mai, visite des locaux)."],
        ['EFFET', "Deux faiblesses reconnues en 2024 restent ouvertes sans échéance ; lors de la visite du bailleur en juillet, la base ne pourrait pas démontrer de suites datées à l'audit précédent.", "5 membres du personnel d'appui sur 8 ignorent le mécanisme : les signalements des postes les plus exposés (carburant, parc, magasin) ont peu de chances de remonter."],
        ['RECOMMANDATION', "Mettre à jour le tableau de suivi des cinq recommandations de 2024, fixer une date de clôture aux deux recommandations « en cours » et revoir le tableau chaque trimestre.", "Afficher le mécanisme de signalement en français et en swahili à l'entrée, au parc véhicules et au magasin, et le présenter au personnel d'appui en réunion de base."],
        ['PRIORITÉ', 'Moyenne — score 12 (risque 3 × facilité 4)', 'Moyenne — score 9 (risque 3 × facilité 3)'],
        ['RESPONSABLE', 'Ruth B., Finance Manager de la base', 'Dr Patrice N., Coordinateur de la base'],
        ['ÉCHÉANCE', '15 juillet 2026', '31 août 2026'],
      ],
    },
    result: "Partie 3 terminée : les six blocs de la section 3 sont écrits ; la section 4 reprend les six lignes classées par priorité (procédure 5, étape 5).",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4 : le résumé exécutif final (section 2)',
    scenario: "Livrable final de la rédaction : le résumé exécutif d'une page, rédigé en dernier, après une nuit de repos et après la grille. Voici les trois zones de la section 2 telles qu'elles figurent dans le rapport.",
    steps: [
      {
        title: 'Raisonnement — Écrire pour le lecteur qui s\'arrêtera là',
        body: "La présidente du comité lira cette page et peut-être rien d'autre. Elle doit y trouver le périmètre, le niveau d'assurance, l'action numéro un et sa date, et savoir que les autres constats existent sans les subir.",
      },
    ],
    example: {
      title: 'Section 2 — Résumé exécutif (rapport AI-2026-GOMA-02)',
      lines: [
        "Contexte et périmètre. Sur mandat du comité d'audit (lettre de mission du 7 mai 2026), nous avons audité le cycle achats-logistique de la base de Goma du 1er octobre 2025 au 31 mars 2026 : 412 bons de commande pour 1 380 000 USD. Méthode : extraction complète, examen des 14 BC Meridian et de 28 BC supérieurs à 1 000 USD, contrôle physique de 10 livraisons, comptage de 20 articles et rapprochement du carburant de mars. L'auditeur responsable ayant été Log Manager de la base jusqu'en mars 2025, les tests de seuils, trois entretiens et la relecture des conclusions ont été confiés à Fatou S. (décision du comité du 24 avril 2026).",
        "Niveau d'assurance global. Assurance modérée : le dispositif présente des faiblesses significatives sur la mise en concurrence des achats Meridian et la séparation demande / réception, ainsi que sur la traçabilité du carburant, sans indice de fraude avérée à ce stade. Point de maîtrise : les 28 BC supérieurs à 1 000 USD testés portent tous l'autorisation préalable du Coordinateur.",
        "Recommandations les plus prioritaires. 1. Réaffecter la réception des biens au magasinier, avec contre-signature de l'assistante logistique (C-02, Dr Patrice N., 30 juin 2026). 2. Imposer par note de service trois offres écrites dès 5 000 USD pour les achats Meridian, mettre à jour la grille de seuils et soumettre les 14 achats (97 500 USD) à Meridian (C-01, Dr Patrice N., 3 juillet 2026). 3. Installer un compteur sur la cuve et rapprocher chaque mois cuve, carnets et registre des groupes (C-03, Josué M., 31 août 2026). Les trois autres recommandations figurent en section 4.",
      ],
    },
    result: "Partie 4 terminée : un résumé d'une page, où les quatre questions du lecteur (quoi, gravité, pourquoi, que faire) trouvent leur réponse en moins de dix minutes.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — le dossier complet, de la mission au plan d'action",
    scenario: "Au-delà des exercices, voici la chronologie complète de la rédaction du rapport de Goma et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque mission.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez trois choses : le résumé exécutif est rédigé le 4 juin, après la grille ; aucun rapport ne part avant la relecture croisée du 8 juin ; le plan d'action existe avant la première clôture.",
      },
    ],
    table: {
      columns: ['Date (2026)', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['18-28/05', 'Travail de terrain ; clôture le 29/05', 'Carnet de 13 notes, extractions, pièces', '03_Terrain'],
        ['01/06', 'Procédure 1 : tri et vérifications', 'Journal des observations, tableau de tri, constats candidats', '04_Tests'],
        ['01-02/06', 'Procédure 2 : constats CCCE', 'Six constats complets et testés', '05_Rapport'],
        ['02-03/06', 'Procédure 3 : recommandations', 'Six recommandations assignables ; appel préalable au Coordinateur', '05_Rapport'],
        ['03/06', 'Procédure 4 : grille', '2026-06-03_Grille_priorisation_Goma.xlsx, triée', '05_Rapport'],
        ['03-04/06', 'Procédure 5 : rapport Word', 'Sections 1, 3, 4, 5 remplies', '05_Rapport'],
        ['04-05/06', 'Procédure 6 : résumé exécutif', 'Section 2, après une nuit de repos', '05_Rapport'],
        ['08/06', 'Procédure 7 : relecture croisée', 'Tick-and-tie, fiche de relecture de Fatou S.', '04_Tests'],
        ['12/06', 'Rapport provisoire', 'v1.0 PDF, courriel d\'envoi, fiche de validation', '05_Rapport'],
        ['19/06', 'Validation des faits', 'Réponses, tableau d\'objections, note au dossier d\'indépendance', '04_Tests / 00_Indépendance'],
        ['24-26/06', 'Rapport définitif', 'v2.0 PDF signé, section 6 renseignée, diffusion', '05_Rapport'],
        ['26/06', 'Procédure 8 : plan d\'action', 'Grille mise à jour, journal de suivi, courriels de preuves attendues', '06_Suivi'],
        ['07/07', 'Première clôture', 'C-02 clôturée sur preuve et test', '06_Suivi'],
      ],
    },
    result: "Un dossier de rédaction de treize étapes, où chaque pièce est datée et justifie la suivante : c'est ce qui permet à un auditeur externe de refaire le chemin du carnet jusqu'au rapport.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — « Le carnet de terrain », base de Bunia : constat, bloc Word et grille',
    instructions: "Vous terminez une mission d'audit du cycle achats sur la base de Bunia d'une ONG de santé internationale (contexte fictif, inspiré de situations rencontrées en Ituri). Le dernier soir, avant de reprendre l'avion pour le siège régional, vous retrouvez cette note brute, prise pendant un entretien avec l'assistant achats et une vérification rapide de 8 dossiers : « Vu 3 dossiers d'achat (fournitures médicales, entre 1 800 et 3 200 USD chacun, total un peu plus de 8 000 USD) sans PV de comité d'achat dans le classeur. Demandé au chef de base pourquoi : il dit que c'est parce que le comité (lui-même + log + finance) n'a pas le temps de se réunir formellement, les décisions se prennent « à trois dans le couloir » puis sont exécutées directement par le log. Il dit que ça se passe comme ça depuis au moins 6 mois, peut-être plus. Risque de contestation bailleur si audit externe : bailleur institutionnel avec manuel de procédures qui exige formellement un PV signé au-dessus de 1 000 USD. » Cette note, telle quelle, n'est pas exploitable.",
    steps: [
      {
        title: 'Construisez le constat CCCE à partir de la seule note',
        actions: [
          "Pour chacun des quatre éléments, recopiez la phrase de la note que vous utilisez.",
          "Si une information manque (chiffre exact, référence du manuel du bailleur), écrivez ce que vous auriez dû vérifier avant de quitter la base, sans inventer le chiffre.",
        ],
      },
      {
        title: 'Classez la cause donnée par le chef de base',
        body: "Fait vérifié, ou cause de confort à creuser ? Écrivez les trois questions que vous poseriez pour la creuser.",
      },
      {
        title: 'Reportez le constat dans un bloc de gabarit-rapport-audit-interne-ccce.docx',
        actions: [
          "Rédigez une recommandation assignable : responsable nommé (déduit du contexte), échéance réaliste au regard de la cause, preuve de clôture.",
          "Remplissez les neuf lignes du bloc, titre neutre compris.",
        ],
      },
      {
        title: 'Intégrez la recommandation dans grille-priorisation-recommandations.xlsx',
        actions: [
          "Attribuez un niveau de risque et une facilité de mise en œuvre, justifiés en une phrase chacun.",
          "Vérifiez le score et la priorité calculés, et la couleur de la ligne.",
        ],
      },
    ],
    table: {
      columns: ['Élément', 'Phrase de la note utilisée', 'Information manquante à vérifier'],
      rows: [
        ['Constat', 'À compléter', 'À compléter'],
        ['Critère', 'À compléter', 'À compléter'],
        ['Cause', 'À compléter', 'À compléter'],
        ['Effet', 'À compléter', 'À compléter'],
      ],
    },
    tip: "Pour vous auto-évaluer : le constat doit chiffrer « 3 dossiers sur 8 examinés » (et non sur la population entière), sans inventer le total exact ; l'effet est quantifié « un peu plus de 8 000 USD » avec la mention que le montant exact reste à confirmer ; la recommandation désigne le Log Manager de la base sous supervision du coordinateur régional ; ordre de grandeur de cotation attendu : risque 4, facilité 4, soit 16 : Prioritaire.",
    pitfall: "Écrire « le chef de base ne respecte pas la procédure » : c'est une accusation sans critère référencé. La même information, formulée en CCCE avec chiffre, référence du manuel du bailleur et effet, devient un constat que personne ne peut sérieusement contester.",
    deliverable: "Le bloc de constat CCCE complété dans le gabarit Word, et la ligne correspondante dans la grille Excel, avec vos deux phrases de justification du score.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Rendre assignables cinq recommandations vagues',
    instructions: "Un collègue vous remet le brouillon d'un rapport de la base de Kalemie. Chaque recommandation est vague. Pour chacune, appliquez les étapes de la procédure 3 : identifiez la cause, choisissez un verbe d'action, nommez un responsable, fixez une date de calendrier (nous sommes le 1er septembre 2026) et définissez la preuve de clôture.",
    table: {
      columns: ['N°', 'Recommandation du brouillon', 'Contexte utile'],
      rows: [
        ['1', 'Renforcer la gestion des stocks de médicaments.', "Les entrées ne sont pas enregistrées au jour de la livraison ; le pharmacien de base est seul à enregistrer."],
        ['2', 'Veiller à la qualité des justificatifs de dépenses.', "27 pièces sur 120 examinées sans signature du demandeur ; la comptable accepte les pièces pour tenir les délais de reddition."],
        ['3', 'Sensibiliser le personnel à la fraude.', "Aucune séance de présentation du code de conduite depuis l'arrivée de 14 nouveaux agents."],
        ['4', 'Améliorer le suivi des contrats fournisseurs.', "Il n'existe aucun registre des contrats ; 6 contrats de plus de 10 000 USD n'ont pas de date de fin connue."],
        ['5', "Les responsables devraient s'assurer que les avances sont justifiées.", "9 avances de mission (4 300 USD) non soldées depuis plus de 60 jours ; aucun rappel envoyé."],
      ],
    },
    steps: [
      { title: 'Écrivez pour chaque ligne la cause probable et son type (règle absente, non connue, impossible, contournée)' },
      { title: 'Reformulez avec : verbe d\'action + livrable + seuil ou fréquence + responsable nommé (nom fictif de votre choix) + date' },
      { title: 'Ajoutez la preuve de clôture et le contrôle que vous ferez' },
      { title: 'Indiquez, pour chaque ligne, si une recommandation doit être scindée en deux lignes (C-xxa, C-xxb) et pourquoi' },
    ],
    tip: "Indice : la ligne 2 appelle probablement deux actions pour deux responsables (la comptable qui refuse les pièces non signées ; le coordinateur qui rappelle l'obligation de signature) : scindez en deux lignes.",
    pitfall: "Écrire « sensibiliser » sans livrable, ou « s'assurer que » sans action. Ces verbes ne produisent aucune pièce : l'auditeur ne pourra jamais déclarer la recommandation clôturée.",
    deliverable: "Un tableau de cinq recommandations réécrites (action, responsable, date, preuve de clôture), avec l'indication des lignes scindées.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Écrire le résumé exécutif d\'une mission RH à Kalemie',
    instructions: "À l'issue d'une mission RH de la base de Kalemie (période du 1er janvier au 30 juin 2026, 30 dossiers de personnel, masse salariale mensuelle de 31 000 USD), voici la grille remplie par l'équipe d'audit. Aucun bénéficiaire fictif n'a été prouvé ; 3 absences non justifiées ont été relevées. Calculez les scores, choisissez le niveau d'assurance global avec la règle du module et rédigez la section 2 du rapport.",
    table: {
      columns: ['Réf.', 'Recommandation (résumé)', 'Risque', 'Facilité', 'Responsable'],
      rows: [
        ['C-01', 'Faire contresigner chaque liste de paie des journaliers avant paiement', '5', '4', 'Coordinateur terrain'],
        ['C-02', 'Obtenir le visa de la RH régionale sur les 6 contrats non visés', '3', '5', 'Coordinatrice RH régionale'],
        ['C-03', 'Ouvrir et tenir un registre des congés', '2', '4', 'Assistant RH'],
        ['C-04', 'Compléter les 11 dossiers du personnel sans pièce d\'identité', '3', '2', 'Assistant RH'],
        ['C-05', "Exiger l'état de présence avant tout paiement de prime de terrain", '4', '4', 'Coordinateur terrain'],
        ['C-06', 'Mettre à jour l\'affichage des horaires de travail', '1', '5', 'Coordinateur terrain'],
        ['C-07', 'Planifier le plan de formation de l\'année', '2', '3', 'Coordinatrice RH régionale'],
      ],
    },
    steps: [
      { title: 'Calculez le score de chaque ligne et sa priorité avec le Barème (15 et plus, 8 à 14, moins de 8)' },
      { title: 'Triez par score décroissant avec le départage par niveau de risque' },
      { title: "Déterminez le niveau d'assurance global avec la règle du module, en justifiant par trois faits" },
      { title: 'Rédigez les trois zones de la section 2 : contexte et périmètre (4 lignes), niveau d\'assurance, recommandations prioritaires (3 à 5)' },
      { title: 'Faites le test des dix minutes avec un lecteur extérieur et notez ce qu\'il ne comprend pas' },
    ],
    tip: "Contrôles : vous devez trouver trois lignes Prioritaires (20, 16 et 15) et une ligne Moyenne (8) ; avec trois Prioritaires et aucun indice de fraude avérée, la règle du module conduit à « assurance limitée ». Les quatre autres lignes ne figurent pas dans le résumé.",
    pitfall: "Écrire « assurance modérée » par pudeur parce que « il n'y a pas de fraude ». Le niveau découle du nombre de lignes Prioritaires et de l'absence ou non d'un contrôle clé : appliquez la règle, puis expliquez-la.",
    deliverable: "La grille calculée et triée, et la section 2 rédigée (contexte, niveau d'assurance justifié, trois à cinq recommandations prioritaires).",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Chaque constat contient un chiffre avec dénominateur et une source, sans adjectif ni nom de personne.",
      "Chaque critère cite un document, une version et une section (ou un article), et vérifie qu'il était en vigueur à la date des faits.",
      "Chaque cause a été recherchée sur le terrain et prouvée par deux sources, et la cause donnée par l'audité a été creusée.",
      "Chaque effet est chiffré ou qualifié, avec son calcul, sans extrapolation non déclarée ni mot « fraude » sans preuve.",
      "Chaque recommandation a un verbe d'action, un responsable nommé avec sa fonction, une date de calendrier et une preuve de clôture.",
      "La grille Excel est remplie sans toucher aux colonnes E et F, chaque cotation est justifiée en une phrase, et aucune ligne d'exemple ne subsiste.",
      "Le bloc Word compte ses neuf lignes, et PRIORITÉ, RESPONSABLE, ÉCHÉANCE sont identiques à la grille.",
      "Le résumé exécutif tient sur une page, a été rédigé en dernier, contient trois à cinq recommandations et un niveau d'assurance justifié.",
      "Tous les chiffres du rapport ont été contrôlés à la source (tick-and-tie) et sont identiques dans le résumé, les constats, la synthèse et la grille.",
      "Les réponses de l'audité sont intégrées, les désaccords sans preuve nouvelle sont maintenus, et chaque modification est justifiée par une pièce.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Rédiger un constat accusatoire ou vague sans les quatre éléments CCCE : « le chef de base contourne les procédures » ne résiste à aucune contestation. Parade : chiffre + source, critère référencé, cause vérifiée, effet chiffré (procédure 2).",
      "Noyer le rapport de détails secondaires au lieu de prioriser : la longueur d'un développement doit être proportionnelle à l'effet documenté, pas à la facilité de le décrire. Parade : grille de priorisation et résumé limité à trois à cinq recommandations (procédures 4 et 6).",
      "Formuler des recommandations vagues, non assignables : « renforcer les contrôles » ne se traduit jamais en action. Parade : verbe d'action, responsable nommé, date, preuve de clôture (procédure 3).",
      "Accepter la cause donnée par l'audité sans la creuser : « on n'a pas le temps » est une cause de confort. Parade : demandez depuis quand, qui le savait, quelle alternative légère a été tentée, et exigez deux sources (procédure 2, étape 3).",
      "Rédiger le résumé exécutif à chaud, sous le coup de l'indignation du dernier constat : il surpondère ce constat. Parade : résumé rédigé en dernier, après une nuit de repos et après la grille (procédure 6).",
      "Laisser des chiffres incohérents ou des exemples du gabarit dans le rapport : une seule erreur décrédibilise tous les constats. Parade : tick-and-tie complet, recherche du mot « Bunia » avant envoi (procédures 5 et 7).",
      "Coter 5 par réflexe et marquer tout « Prioritaire » : la grille ne discrimine plus. Parade : réserver le 5 aux fraudes avérées, à la sécurité et à la perte d'accès bailleur, et réexaminer au-delà de cinq lignes Prioritaires (procédure 4).",
      "Céder à la pression pour retirer un constat ou baisser une priorité sans preuve nouvelle. Parade : n'accepter que les corrections prouvées, consigner la demande dans une note au dossier d'indépendance, informer le comité (procédure 7, étape 4).",
      "Clôturer une recommandation sur déclaration : « c'est fait » n'est pas une preuve. Parade : preuve reçue ET contrôlée, test repris sur une période postérieure (procédure 8, étape 5).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez trié un carnet de 13 notes en journal numéroté, classé chaque note en fait, opinion, ouï-dire ou fait incomplet, complété les informations manquantes par des vérifications, et constitué un dossier de preuves pour six constats candidats.",
      "Vous avez écrit six constats CCCE complets : constat chiffré et sourcé, critère référencé à la section, cause vérifiée par deux sources, effet calculé dans Excel, titre neutre, test de complétude passé.",
      "Vous avez rédigé six recommandations assignables, avec verbe d'action, responsable nommé, date de calendrier et preuve de clôture, et testé l'une d'elles avec l'audité sans toucher au constat.",
      "Vous avez rempli grille-priorisation-recommandations.xlsx : cotations de risque et de facilité justifiées, score calculé (2 Prioritaires, 3 Moyennes, 1 Faible), responsables, échéances, statuts, tri sur les lignes remplies.",
      "Vous avez rempli le gabarit Word : informations de mission, six blocs CCCE de neuf lignes, synthèse classée par priorité et annexes vérifiables.",
      "Vous avez rédigé en dernier un résumé exécutif d'une page avec niveau d'assurance modérée justifié et trois recommandations prioritaires, et passé le test des dix minutes.",
      "Vous avez contrôlé chaque chiffre (tick-and-tie), conduit une relecture croisée, envoyé le rapport provisoire, évalué quatre objections avec preuves, complété la section 6 et diffusé le rapport définitif en PDF signé.",
      "Vous avez constitué le plan d'action correctif, obtenu six réponses écrites, fixé jalons et preuves, mis à jour les statuts mensuels et clôturé une première recommandation (C-02) sur preuve et sur test.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la structure complète d'un rapport d'audit interne (informations de mission, résumé exécutif, constats, synthèse, annexes, validation) et à quoi sert chaque section.",
      "Je sais distinguer un fait vérifié d'une opinion, d'un ouï-dire ou d'un fait incomplet, et transformer une observation brute en constat CCCE sans sauter aucun des quatre éléments.",
      "Je sais distinguer, dans un constat, une cause vérifiée par deux sources d'une cause simplement déclarée par l'audité et non recoupée.",
      "Je sais rédiger une recommandation assignable : responsable nommé, échéance datée, action vérifiable, preuve de clôture.",
      "Je sais prioriser un ensemble de recommandations en croisant niveau de risque et facilité de mise en œuvre, et lire le score calculé par la grille.",
      "J'ai complété un bloc de constat CCCE dans le gabarit de rapport fourni, et renseigné une ligne de recommandation priorisée dans la grille Excel.",
      "Je sais déterminer un niveau d'assurance global et rédiger un résumé exécutif d'une page, en dernier, avec trois à cinq recommandations.",
      "Je sais conduire la relecture, la validation des faits et le suivi d'un plan d'action correctif jusqu'à la clôture sur preuve.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 09 — Préparation aux Audits Externes & Interaction avec les Auditeurs. Votre rapport définitif, sa grille de priorisation et son plan d'action suivi sont exactement les pièces qu'un auditeur externe ou un bailleur demandera en premier : le module suivant vous apprend à constituer le dossier d'audit externe, à dialoguer professionnellement avec l'équipe d'audit et à répondre à son rapport final.",
  },
]
