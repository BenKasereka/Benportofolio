// Module 03 — Trésorerie, Caisses & Avances Terrain
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (livre-de-caisse-rapprochement-quotidien.xlsx, fiche-avance-justification-remboursement.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (la caisse du bureau de Goma de l'ONG fictive « Kivu Avenir Solidarité »,
// déjà rencontrée au module 01), avec exemples remplis, résultat attendu,
// astuces et erreurs à éviter.
// Les organisations, banques, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Trésorerie, Caisses & Avances Terrain',
    hook: "Un écart de caisse détecté le jour même se corrige en dix minutes. Le même écart découvert un mois plus tard peut ne jamais être expliqué. À la fin de ce module, vous aurez produit : une politique de caisse chiffrée (plafonds, seuils, signatures), un livre de caisse et un rapprochement quotidien qui signalent un écart le soir même, une avance suivie de la demande jusqu'au solde, un rapprochement bancaire hebdomadaire, un dossier de clôture mensuelle signé et une note d'investigation d'écart — la routine simple, mais non négociable, qui protège votre caisse, vos avances et votre crédibilité en cas d'audit.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Fixer par écrit une politique de caisse — plafond, solde cible, seuil de réapprovisionnement, seuils de signature, sécurité physique — pour chaque niveau de responsabilité, en produisant une politique d'une page validée et signée.",
      "Tenir le livre de caisse du template ligne par ligne et en temps réel, en produisant un livre dont chaque mouvement est rattaché à une pièce et dont le solde théorique se recalcule sans erreur.",
      "Ouvrir et clôturer une caisse chaque jour par comptage physique contradictoire, en produisant la ligne du rapprochement quotidien et, si le statut affiche « À INVESTIGUER », une note d'écart datée et signée le jour même.",
      "Octroyer, suivre et clôturer une avance terrain avec la fiche d'avance, de la demande au calcul du solde (remboursement dans un sens ou dans l'autre), en produisant une fiche complète et un registre des avances ouvertes relancé aux échéances.",
      "Réaliser le rapprochement bancaire hebdomadaire ligne par ligne, en produisant un état de rapprochement dont chaque écart est expliqué et non ajusté.",
      "Clôturer le mois (comptage de clôture, synthèse mensuelle, rapprochement bancaire mensuel, revue des avances), en produisant un dossier de clôture signé qui ouvre le mois suivant.",
      "Investiguer un écart de caisse déjà constaté, même avec des données incomplètes, en produisant une note d'investigation d'une page : ce qui est établi, ce qui reste incertain, les mesures correctives.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module est un atelier, pas un cours magistral : chaque procédure se termine par un livrable concret, que vous construisez sur un seul cas fil rouge, de la rédaction de la politique de caisse jusqu'à la clôture du mois d'avril.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive du module 01 dont le bureau pays de Goma (RDC) héberge trois projets (Nutrition, WASH, Santé). Nous sommes le 1er avril 2026. Grace M., Finance Manager, vous confie en plus de la comptabilité la supervision de toute la trésorerie physique : une caisse principale, une antenne à Rutshuru et un coffre de coordination. Votre prédécesseur a tenu les caisses « à la confiance » : pas de politique écrite, un rapprochement une fois par mois, des avances sans fiche.",
    ],
    bullets: [
      "Livrable 1 — La politique de caisse du bureau de Goma : plafonds, solde cible, seuils, sécurité (procédure 1).",
      "Livrable 2 — Le livre de caisse d'avril 2026, onglet « Livre de caisse » (procédure 2).",
      "Livrable 3 — Les lignes du rapprochement quotidien, onglet « Rapprochement quotidien », et une note d'écart (procédure 3).",
      "Livrable 4 — Une fiche d'avance complète, de la demande au solde, et le registre des avances ouvertes (procédure 4).",
      "Livrable 5 — L'état de rapprochement bancaire hebdomadaire (procédure 5).",
      "Livrable 6 — Le dossier de clôture mensuelle : synthèse, rapprochement bancaire mensuel, revue des avances (procédure 6).",
      "Livrable 7 — La note d'investigation d'un écart de caisse (procédure 7).",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : les caisses de Kivu Avenir Solidarité à Goma',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les personnes, la banque et les montants sont fictifs, mais construits sur des configurations réelles de bureaux de l'Est de la RDC. Les 2 300 USD de liquidités du bureau au 31 mars sont ceux que vous avez déjà vus au module 01 : ils se répartissent sur trois caisses.",
    table: {
      columns: ['Caisse', 'Titulaire (niveau)', 'Tenue au quotidien', 'Solde au 31/03/2026'],
      rows: [
        ['Caisse principale — bureau de Goma', 'Grace M., Finance Manager (niveau 2)', 'Esther N., caissière', '1 500 USD'],
        ['Antenne de Rutshuru', 'Amani L., agent administratif (niveau 1)', 'Amani L.', '300 USD'],
        ['Coffre de la coordination pays', 'Mireille T., coordinatrice pays, avec Grace M. (niveau 3)', 'Double clé', '500 USD'],
        ['Total liquidités', '', '', '2 300 USD'],
      ],
    },
    example: {
      title: 'Autres éléments du cas',
      lines: [
        "Banque : compte en USD à la Banque du Lac Kivu (fictive) ; le loyer, l'internet et le gardiennage sont payés par virement, pas en caisse.",
        "Dépenses en espèces du bureau : 5 100 USD en janvier, 5 300 en février, 5 440 en mars. Antenne de Rutshuru : environ 1 300 USD par mois.",
        "Autres acteurs : Patrick K., logisticien — Joël B., coordinateur WASH — Samuel R., chauffeur — Désiré M., animateur de l'antenne.",
        "Véhicule partagé LC-03 : ses dépenses de carburant sont un coût commun (module 01) et passent par la finance.",
      ],
    },
    pitfall: "Ce que vous trouvez en arrivant : aucun plafond écrit, un rapprochement de caisse mensuel, des avances sans fiche signée et aucun registre des avances ouvertes. Chaque procédure de ce module corrige l'un de ces points.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Pourquoi une caisse a besoin de règles écrites',
    body: [
      "Un plafond de caisse n'est pas une marque de défiance envers votre équipe, ni de la bureaucratie gratuite inventée par un siège déconnecté du terrain. C'est une décision de gestion du risque. Une caisse contient de l'argent liquide, non traçable une fois sorti du coffre, exposé à trois risques récurrents : le vol (externe ou interne), la perte (négligence, désorganisation, transport dans des conditions dégradées) et la fraude (détournement, double facturation, avances jamais remboursées).",
      "Plus le montant disponible en liquide à un endroit est élevé, plus l'exposition aux trois risques est élevée — et plus un incident est lourd pour l'organisation et pour la personne qui détient la caisse.",
    ],
    example: {
      title: 'Ce que coûte un plafond jamais fixé (caisse principale de Goma)',
      lines: [
        "Caisse plafonnée à 2 000 USD, réapprovisionnée chaque semaine : perte maximale en cas de braquage = 2 000 USD.",
        "Même caisse laissée sans règle, « parce qu'on a toujours fait comme ça », où l'on laisse s'accumuler les reversements et les retraits de précaution : 5 300 USD un vendredi soir.",
        "Écart d'exposition : 3 300 USD de plus à perdre, pour aucun besoin opérationnel supplémentaire.",
      ],
    },
    highlight: "Le plafond doit être documenté par écrit, connu de la personne qui tient la caisse avant qu'elle n'en ait besoin, et révisé si le contexte change (inflation locale, insécurité accrue, changement de mandat de la base).",
  },
  {
    type: 'comparison-table',
    title: 'Des plafonds différenciés par niveau de responsabilité',
    columns: ['Niveau', 'Plafond typique (ordre de grandeur)', 'Plafond KAS à Goma', 'Justification'],
    rows: [
      ['Niveau 1 — Caissier(ère) / agent administratif de base', '200 à 500 USD', '500 USD — antenne de Rutshuru', "Dépenses courantes du quotidien uniquement (carburant, petites fournitures, per diem ponctuels). Au-delà, on réapprovisionne, on n'accumule pas."],
      ['Niveau 2 — Chef de base / coordinateur terrain', '1 000 à 3 000 USD', '2 000 USD — caisse principale de Goma', "Couvre les urgences opérationnelles sans attendre un virement, mais reste plafonné pour limiter l'exposition en cas d'incident sécuritaire (pillage, braquage)."],
      ['Niveau 3 — Coordination pays / siège de mission', "5 000 USD et plus, double signature obligatoire au-delà d'un seuil", '5 000 USD — coffre de coordination, double signature au-delà de 1 000 USD', "Besoins exceptionnels (paie d'urgence, avance collective), toujours avec une double validation : jamais une seule personne qui décide et qui exécute."],
    ],
  },
  {
    type: 'concept',
    title: 'Séparer les tâches : personne ne demande, ne paie et ne contrôle seul',
    body: "La séparation des tâches est le principe qui rend une caisse défendable. Une même personne ne cumule jamais deux des quatre rôles ci-dessous sur une même opération. C'est ce principe, et non la confiance, qui protège aussi les personnes honnêtes contre le soupçon.",
    table: {
      columns: ['Rôle', 'Qui (fil rouge)', 'Ce qu\'il fait', 'Ce qu\'il ne fait jamais'],
      rows: [
        ['Demandeur', 'Patrick K., Joël B., chefs de projet', "Exprime le besoin, signe la demande, fournit la pièce", "Approuver sa propre dépense ou son propre remboursement"],
        ['Approbateur', 'Grace M. ; Mireille T. au-delà de 500 USD', "Valide avant la sortie, par signature", "Tenir la caisse au quotidien"],
        ['Caissière', 'Esther N.', "Paie, enregistre, compte, clôture", "Valider une dépense qu'elle paie"],
        ['Contrôleur indépendant', 'Vous, Finance Officer', "Rapproche, relance les avances, compte par sondage", "Passer les paiements en caisse"],
      ],
    },
    tip: "Dans une petite antenne où une seule personne tient tout (Rutshuru), compensez par un contrôle à distance : photo du billetage et du rapprochement chaque soir, comptage inopiné par la finance.",
  },
  {
    type: 'concept',
    title: "La logique d'une avance terrain : un prêt encadré, avec deux règles absolues",
    body: [
      "Une avance n'est pas un cadeau ni un raccourci pour éviter la paperasse d'un achat classique. C'est un prêt temporaire et encadré, consenti par l'organisation à un membre du personnel pour engager une dépense professionnelle avant que le justificatif final ne soit disponible : un déplacement, un achat sur un marché sans facture immédiate, une mission où l'on ne peut payer qu'en liquide.",
      "Première règle : jamais d'avance sans justificatif de retour attendu, nommé avant la sortie de caisse (facture, reçu, liste d'émargement, bordereau de livraison) et à une date fixée. Deuxième règle : jamais d'avance laissée ouverte indéfiniment : la date de justification est fixée à l'octroi, jamais négociée après coup.",
    ],
    example: {
      title: 'Avance acceptable / avance refusée',
      lines: [
        "REFUSÉE : « Donne-moi 150 USD pour la tournée, on verra avec quoi je reviens. » → ni objet précis, ni pièce attendue, ni date.",
        "ACCEPTÉE : AV-014 — Patrick K. — 120 USD — carburant et péages des tournées de Sake des 2 et 6 avril — pièces attendues : reçus de station et quittances de péage — justification avant le 09/04/2026.",
      ],
    },
    highlight: "Une avance « on verra bien avec quoi il revient » est déjà, structurellement, une fraude en attente de se produire — non par malveillance de la personne, mais parce que l'absence de cadre rend tout contrôle impossible après coup.",
  },
  {
    type: 'stat-callout',
    stat: '30 jours',
    caption: "Au-delà, une avance n'est plus une avance : c'est une dette du membre du personnel envers l'organisation",
    context: "Comptablement et souvent légalement, avec ses conséquences : retenue sur salaire encadrée par le droit local, procédure disciplinaire, voire poursuite en cas de départ non régularisé. Un Finance Manager qui laisse s'accumuler des avances non soldées rend faux les états financiers et aggrave la situation de l'employé à mesure que le temps passe.",
  },
  {
    type: 'concept',
    title: 'Le rapprochement quotidien : J+1 contre J+30',
    body: [
      "Un écart détecté à J+1 est gérable : la personne qui tenait la caisse la veille s'en souvient précisément, les témoins sont disponibles, le montant est généralement petit (erreur de rendu de monnaie, reçu mal enregistré, chiffres transposés). On corrige, on documente, on passe à autre chose en quelques minutes.",
      "Un écart détecté à J+30 est souvent irrécupérable : des dizaines de transactions se sont empilées, plusieurs personnes ont eu accès à la caisse, la mémoire s'est effacée, parfois l'agent a changé de poste. L'écart n'est presque jamais une erreur isolée : c'est un cumul de petites erreurs et, potentiellement, de prélèvements masqués dans le bruit de fond.",
    ],
    example: {
      title: 'Le même écart de 3 USD, détecté à deux moments différents (caisse de Goma)',
      lines: [
        "Vendredi 3 avril, 17 h 20 : théorique 1 042 USD, comptage 1 039 USD. Les 12 lignes du jour sont devant vous : en 10 minutes, la pièce 0391 révèle 41 USD au lieu de 38 saisis.",
        "Même écart découvert au rapprochement du 30 avril : 22 jours de mouvements, 4 personnes passées à la caisse, 60 lignes à rouvrir. Cause probablement jamais retrouvée.",
      ],
    },
    highlight: "Le rapprochement quotidien n'est pas un exercice comptable que l'on fait « quand on a le temps » : c'est un contrôle de sécurité financière dont la valeur vient de sa régularité absolue, surtout les jours chargés.",
  },
  {
    type: 'stat-callout',
    stat: '10 min',
    caption: "Le coût d'un rapprochement quotidien… contre des heures d'investigation rétroactive",
    context: "Dix minutes de comptage et de saisie chaque soir contre une investigation d'un mois qui prend des heures, pour un résultat souvent incomplet. La rentabilité de la routine est écrasante, et elle ne vaut que si elle est faite sans exception.",
  },
  {
    type: 'concept',
    title: "Sécuriser l'argent : le contenant, les accès, le transport",
    body: "L'équipement physique n'est pas un détail. Un plafond bien défini perd l'essentiel de son utilité si l'argent reste dans un tiroir de bureau non fermé à clé. Toute caisse dépassant le plafond du niveau le plus bas doit être conservée dans un contenant verrouillé, idéalement fixé ou difficile à emporter, avec un accès limité à un nombre minimal de personnes identifiées.",
    bullets: [
      "Contenant : coffre métallique scellé au mur ou au sol, ou caisse métallique verrouillée fixée ; jamais un tiroir ordinaire.",
      "Accès : liste nominative écrite (deux personnes au maximum par caisse), clés ou combinaison jamais écrites sur le contenant, changement des clés ou du code à chaque départ.",
      "Traçabilité : registre d'accès (date, heure, motif, signature) et scellé numéroté posé le soir.",
      "Interdits : caisse à domicile, argent personnel dans le coffre, caisse laissée ouverte sans surveillance.",
      "Transport de fonds : deux personnes, trajet et horaire variés, montant limité, et vérification auprès de l'assureur de ce qui est couvert en coffre et en transit.",
    ],
    tip: "Faites le test du tiroir : si un visiteur peut emporter l'argent en moins d'une minute, votre plafond est théorique.",
  },
  {
    type: 'concept',
    title: 'La pièce de caisse : ce qui rend une sortie valable',
    body: "Une sortie de caisse sans pièce valable est une dépense inéligible et un risque de fraude. Avant de payer, la caissière sait quelle pièce elle recevra et qui doit avoir signé.",
    table: {
      columns: ['Type de sortie', 'Pièce attendue', 'Validation avant paiement'],
      rows: [
        ['Achat à un fournisseur', 'Facture ou reçu daté, au nom de KAS, avec bon de commande', 'Selon le seuil (voir procédure 1)'],
        ['Petit achat de marché sans facture', "Bon de caisse : attestation de paiement signée par le bénéficiaire, avec objet et montant", 'Demandeur + approbateur'],
        ['Per diem', "Liste d'émargement signée par chaque bénéficiaire", 'Chef de projet + Finance Manager'],
        ['Avance terrain', 'Fiche d\'avance signée (template du module)', 'Finance Manager, avant la sortie'],
        ['Réapprovisionnement de la caisse', 'Chèque ou ordre de retrait + bordereau de la banque', 'Finance Manager, comptage en présence de deux personnes'],
        ['Reversement ou remboursement reçu', 'Reçu de caisse numéroté remis à la personne', 'Caissière + témoin'],
      ],
    },
    pitfall: "Accepter « la facture suit » pour une sortie déjà payée. La pièce arrive rarement, et la ligne reste inéligible.",
  },
  {
    type: 'concept',
    title: 'Les contrôles de supervision : le comptage inopiné et la passation',
    body: [
      "Le contrôle quotidien est fait par la caissière elle-même ; il faut donc un contrôle qui ne dépend pas d'elle. Le comptage inopiné consiste, pour le Finance Manager ou le Finance Officer, à venir sans prévenir compter une caisse, en présence de son titulaire, et à comparer au livre arrêté à cet instant. Fréquence minimale : une fois par mois et par caisse, à des jours imprévisibles.",
      "La passation est l'autre moment à risque : quand une caisse change de main, le sortant et l'entrant comptent ensemble, comparent au livre et signent un procès-verbal de comptage. Sans passation formelle, un écart ancien devient impossible à attribuer à qui que ce soit.",
    ],
    example: {
      title: 'Contenu minimal du procès-verbal de comptage (inopiné ou passation)',
      lines: [
        "Caisse, date, heure du comptage, noms des personnes présentes.",
        "Billetage détaillé par coupure, total compté.",
        "Solde théorique du livre arrêté à l'heure du comptage (dernière ligne signée).",
        "Écart, explications recueillies, pièces ou bons trouvés dans la caisse, signatures de toutes les personnes présentes.",
      ],
    },
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Solde théorique', definition: "Montant que la caisse devrait contenir selon le livre de caisse : solde d'ouverture + entrées − sorties." },
      { term: 'Comptage physique', definition: "Montant réellement présent dans la caisse, obtenu en comptant billet par billet et pièce par pièce, jamais estimé." },
      { term: 'Billetage', definition: "Fiche de comptage détaillée par coupure (nombre de billets de 100, 50, 20… × valeur), signée par les personnes présentes." },
      { term: 'Écart de caisse', definition: "Différence entre le comptage physique et le solde théorique (comptage − théorique). Un signal qui déclenche une investigation, ni automatiquement une erreur bénigne ni automatiquement une fraude." },
      { term: 'Seuil de tolérance', definition: "Écart maximal accepté sans investigation formelle, défini à l'avance dans la politique de caisse : 1 USD dans le template du module." },
      { term: 'Solde cible', definition: "Montant que l'on vise après chaque réapprovisionnement, calculé sur le besoin réel d'espèces." },
      { term: 'Plafond de caisse', definition: "Montant maximal autorisé en liquide dans une caisse, fixé par niveau de responsabilité." },
      { term: 'Avance à justifier', definition: "Montant sorti de la caisse en attente de pièces justificatives ; à ne jamais confondre avec une dépense définitive tant que le justificatif n'est pas validé." },
      { term: 'Double signature', definition: "Validation croisée par deux personnes distinctes pour toute opération dépassant un seuil donné ; principe de base de la séparation des tâches." },
      { term: 'Régularisation (ligne REG)', definition: "Ligne de correction ajoutée au livre qui rectifie une erreur sans effacer la ligne d'origine." },
      { term: 'Rapprochement bancaire', definition: "Comparaison du relevé de la banque et du livre de banque, avec explication de chaque différence (opérations en transit, frais, erreurs)." },
      { term: 'Opération en transit', definition: "Opération enregistrée d'un côté (livre) mais pas encore de l'autre (relevé), par exemple un chèque émis non encore présenté à la banque." },
    ],
  },
  {
    type: 'concept',
    title: "Votre feuille de route : 7 procédures, dans l'ordre du terrain",
    body: "Les procédures suivent la vie réelle d'une caisse : on fixe les règles une fois, on tient le livre à chaque mouvement, on compte et on rapproche chaque jour, on encadre chaque avance, on rapproche la banque chaque semaine, on clôture chaque mois, et on investigue dès qu'un écart n'est pas expliqué.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Définir la politique de caisse', "À l'ouverture d'une caisse, puis revue annuelle", 'Politique signée', '5'],
        ['2. Tenir le livre de caisse', 'À chaque mouvement', 'Onglet « Livre de caisse » à jour', '5'],
        ['3. Ouvrir, clôturer et rapprocher la caisse', 'Chaque jour', 'Ligne du rapprochement + note d\'écart', '5'],
        ['4. Octroyer, suivre et clôturer une avance', 'À chaque avance', 'Fiche d\'avance + registre', '7'],
        ['5. Rapprocher la banque', 'Chaque vendredi', 'État de rapprochement bancaire', '5'],
        ['6. Clôturer le mois', 'Fin de mois', 'Dossier de clôture signé', '5'],
        ['7. Investiguer un écart constaté', 'Dès qu\'un écart reste inexpliqué', 'Note d\'investigation', '6'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Définir la politique de caisse ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: "Inventorier les caisses, leurs détenteurs et les flux d'espèces",
    intro: "On ne fixe pas un plafond sans connaître le besoin réel. Entrées nécessaires : les livres de caisse et relevés bancaires des 3 derniers mois, la liste du personnel qui manipule de l'argent liquide. Fil rouge : vous reprenez les caisses de Goma le 1er avril 2026.",
    steps: [
      {
        title: 'Lister toutes les caisses, déclarées ou non',
        actions: [
          "Créez un tableau « Inventaire des caisses » : caisse, lieu, titulaire, personnes ayant accès, contenant, solde moyen.",
          "Faites le tour des bureaux : coffre, tiroirs, enveloppes de per diem en attente de remise.",
          "Ajoutez l'argent hors caisse : avances en cours et fonds détenus par des chefs de projet. Ce sont des caisses non déclarées, donc les plus dangereuses.",
        ],
      },
      {
        title: "Mesurer le besoin réel d'espèces de chaque caisse",
        actions: [
          "Relevez dans chaque livre de caisse le total des sorties de chacun des 3 derniers mois.",
          "Calculez la moyenne mensuelle, puis la dépense moyenne par jour ouvré (divisez par 22) et par semaine (multipliez par 5).",
          "Repérez ce qui peut être payé par virement plutôt qu'en espèces : chaque dépense déplacée vers la banque réduit le besoin en liquide.",
        ],
      },
    ],
    example: {
      title: 'Inventaire des besoins — Goma, janvier à mars 2026',
      lines: [
        "Caisse principale Goma : sorties 5 100 + 5 300 + 5 440 = 15 840 USD ; moyenne 5 280 USD/mois ; 5 280 / 22 = 240 USD par jour ; 1 200 USD par semaine.",
        "Antenne de Rutshuru : moyenne 1 300 USD/mois ; 1 300 / 22 ≈ 60 USD par jour ; 300 USD par semaine.",
        "Coffre coordination pays : 500 USD au 31/03, utilisé seulement pour les paies d'urgence.",
        "Déjà en virement : loyer 3 000, internet 850, gardiennage 1 800 USD par mois (ne passent pas en caisse).",
      ],
    },
    result: "Un inventaire de toutes les caisses, déclarées ou non, avec leur titulaire et leur besoin réel en dépense moyenne par jour et par semaine.",
    pitfall: "Oublier l'argent qui ne passe pas par le livre : une enveloppe de per diem gardée dans un tiroir ou une avance de 300 USD chez un chef de projet est une caisse parallèle, sans comptage ni contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Calculer le solde cible, le plafond et le seuil de réapprovisionnement',
    intro: "Le plafond est une décision chiffrée, pas une impression. Entrées : les dépenses moyennes de l'étape 1 et la fourchette du niveau de responsabilité (niveau 1 : 200 à 500 USD ; niveau 2 : 1 000 à 3 000 USD). Fréquence de réapprovisionnement retenue à Goma : chaque semaine.",
    steps: [
      {
        title: 'Calculer le solde cible',
        actions: [
          "Solde cible = dépenses d'une semaine + une journée de réserve, arrondi à la centaine supérieure.",
          "Goma : 1 200 + 240 = 1 440, arrondi à 1 500 USD.",
        ],
      },
      {
        title: 'Calculer le plafond',
        actions: [
          "Plafond calculé = solde cible + une marge d'un tiers pour les entrées imprévues (reversements d'avances, réapprovisionnement anticipé), arrondi à la centaine supérieure.",
          "Comparez à la fourchette du niveau et retenez le plus petit des deux : la borne haute du niveau reste le maximum.",
        ],
      },
      {
        title: 'Fixer le seuil de réapprovisionnement',
        actions: [
          "Seuil = deux jours de dépenses moyennes, arrondi aux 50 USD supérieurs : en dessous, la caissière demande un réapprovisionnement.",
          "Montant du réapprovisionnement = solde cible − solde du jour, arrondi à la centaine.",
        ],
      },
    ],
    table: {
      columns: ['Caisse', 'Dépenses / semaine', 'Solde cible', 'Plafond calculé', 'Plafond retenu', 'Seuil de réappro.'],
      rows: [
        ['Principale Goma (niveau 2)', '1 200 USD', '1 500 USD', '1 500 + 500 = 2 000 USD', '2 000 USD', '500 USD'],
        ['Antenne Rutshuru (niveau 1)', '300 USD', '400 USD (300 + 60 = 360)', '400 + 133 = 533, soit 600 USD', '500 USD (borne du niveau 1)', '150 USD'],
        ['Coffre coordination (niveau 3)', 'Sur besoin', 'Non applicable', 'Non applicable', '5 000 USD', 'Non applicable'],
      ],
    },
    result: "Pour chaque caisse, trois chiffres écrits et justifiés par un calcul : solde cible, plafond, seuil de réapprovisionnement.",
    tip: "À Rutshuru, le calcul donne 600 USD mais la borne du niveau 1 est 500 : retenez 500 et assumez un réapprovisionnement plus fréquent (deux fois par semaine), en budgétant le coût du transport de fonds.",
    pitfall: "Copier le plafond d'une autre organisation, ou le fixer « à l'œil » ou « comme avant ». Un plafond qui ne se justifie pas par un calcul ne résiste ni à une discussion avec l'équipe ni à un audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Définir les seuils de décision : signatures, tolérance d\'écart, avances',
    intro: "Les seuils sont décidés à l'avance, par écrit, pour tout le monde : jamais « selon qui est concerné ». Fil rouge : vous proposez à Grace M. les seuils ci-dessous, qu'elle valide avec Mireille T.",
    steps: [
      {
        title: 'Fixer les seuils de sortie',
        actions: [
          "Jusqu'à 100 USD : bon de caisse signé par le demandeur, visa de la caissière.",
          "De 101 à 500 USD : validation écrite préalable de Grace M.",
          "Au-delà de 500 USD : double signature Grace M. et Mireille T., et paiement par banque de préférence.",
          "Règle anti-fractionnement : le seuil s'apprécie par achat, par fournisseur et par jour, pas par reçu.",
        ],
      },
      {
        title: "Fixer les seuils d'écart",
        actions: [
          "Jusqu'à 1 USD : tolérance (c'est le seuil codé dans la formule du template).",
          "Au-delà de 1 USD : note d'écart écrite le jour même et double signature caissière + superviseur.",
          "Au-delà de 20 USD : information de la coordinatrice pays sous 24 heures. Au-delà de 100 USD : investigation formelle et rapport écrit.",
        ],
      },
      {
        title: 'Fixer les règles des avances',
        actions: [
          "Délai de justification : 15 jours pour une avance courante, 30 jours au maximum pour une mission plus longue. Montant maximal : 500 USD par avance, double signature au-delà.",
          "Aucune nouvelle avance tant qu'une avance précédente du même bénéficiaire est échue et non justifiée.",
          "Relances : échéance −3 jours, +1 jour, +7 jours. À 30 jours après l'octroi, l'avance devient une dette.",
        ],
      },
    ],
    table: {
      columns: ['Domaine', 'Seuil', 'Règle KAS', 'Qui décide'],
      rows: [
        ['Sortie de caisse', '≤ 100 USD', 'Bon de caisse + visa caissière', 'Demandeur et caissière'],
        ['Sortie de caisse', '101 – 500 USD', 'Validation écrite préalable', 'Grace M.'],
        ['Sortie de caisse', '> 500 USD', 'Double signature', 'Grace M. et Mireille T.'],
        ['Écart de caisse', '≤ 1 USD', 'Tolérance, statut OK', 'Automatique (formule)'],
        ['Écart de caisse', '> 1 USD', 'Note d\'écart + double signature le jour même', 'Caissière et superviseur'],
        ['Écart de caisse', '> 20 USD', 'Coordinatrice informée sous 24 h', 'Finance Officer'],
        ['Avance', '15 / 30 jours', 'Échéance fixée à l\'octroi ; dette à 30 jours', 'Grace M.'],
      ],
    },
    result: "Un tableau des seuils d'une page, applicable à tous sans exception, du chauffeur au chef de mission.",
    pitfall: "Laisser le fractionnement passer parce que le total reste « raisonnable » : un achat de 300 USD scindé en trois reçus de 100 USD pour éviter la validation de Grace est un contournement de contrôle, qu'il soit intentionnel ou présenté comme une habitude locale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Équiper et sécuriser : contenant, accès, registre, transport',
    intro: "Le plafond ne protège rien si l'argent traîne dans un tiroir. Entrées : l'inventaire de l'étape 1 et le budget d'équipement validé par Grace M. Fil rouge : le coffre de la caisse principale est un meuble ordinaire qui se ferme avec une clé laissée dans la serrure.",
    steps: [
      {
        title: 'Choisir et installer le contenant',
        actions: [
          "Goma : coffre métallique scellé au sol, hors de vue des visiteurs.",
          "Rutshuru : caisse métallique à cadenas, fixée au mur par une chaîne.",
          "Coordination pays : coffre à double serrure, deux clés détenues par deux personnes différentes.",
        ],
      },
      {
        title: "Écrire la liste des personnes ayant accès",
        actions: [
          "Goma : Esther N. (clé 1) et Grace M. (clé 2). Les clés de réserve sont placées sous enveloppe scellée, signée, chez Mireille T.",
          "Interdisez tout autre accès, y compris au chauffeur et au gardien.",
          "Changez la combinaison ou la serrure à chaque départ d'un détenteur.",
        ],
      },
      {
        title: "Mettre en place le registre d'accès et les règles de transport",
        actions: [
          "Un cahier relié au coffre : date, heure, motif, nom, signature, numéro du scellé.",
          "Transport des réapprovisionnements : deux personnes, véhicule, trajet et horaire variés, jamais plus de 1 500 USD par trajet.",
          "Écrivez à l'assureur pour confirmer le plafond d'indemnisation en coffre et en transit.",
        ],
      },
    ],
    example: {
      title: 'Fiche « Accès au coffre — caisse principale de Goma »',
      lines: [
        "Contenant : coffre n° CF-GOM-01, scellé au sol, bureau finance.",
        "Détenteurs de clés : Esther N. (clé 1), Grace M. (clé 2). Aucun duplicata en circulation.",
        "Plafond : 2 000 USD — solde cible : 1 500 USD — réapprovisionnement à 500 USD.",
        "Scellé numéroté posé chaque soir et noté au registre ; contrôlé chaque matin avant l'ouverture.",
      ],
    },
    result: "Un contenant fixé, deux personnes nommées, un registre d'accès en place, des règles de transport écrites et une confirmation d'assurance classée.",
    pitfall: "La combinaison écrite sur un post-it collé sous le coffre, ou la clé laissée sur le meuble « pour dépanner ». Un contrôle d'accès connu de tout le bureau n'est plus un contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Rédiger, faire valider, diffuser et réviser la politique',
    intro: "Une politique non écrite n'existe pas. Elle doit tenir en une page, être connue des titulaires avant qu'ils en aient besoin, et être révisée quand le contexte change. Entrées : les résultats des étapes 1 à 4.",
    steps: [
      {
        title: 'Écrire la politique en une page',
        actions: [
          "Titre : « Politique de caisse — Kivu Avenir Solidarité, bureau de Goma — version du 06/04/2026 ».",
          "Sections : 1 Caisses et titulaires — 2 Plafonds, solde cible, seuil de réapprovisionnement — 3 Seuils de signature — 4 Routine quotidienne (ouverture, enregistrement, clôture) — 5 Avances — 6 Écarts et seuils — 7 Sécurité — 8 Révision.",
          "Reprenez les tableaux des étapes 2 et 3 tels quels ; ne développez pas.",
        ],
      },
      {
        title: 'Valider, faire signer, diffuser',
        actions: [
          "Faites valider par Grace M., puis par Mireille T. pour les seuils du niveau 3.",
          "Faites signer à chaque titulaire et à chaque caissière un accusé de réception daté, AVANT de leur remettre une caisse.",
          "Remettez la politique à l'équipe et affichez la page « seuils » à la caisse.",
        ],
      },
      {
        title: 'Programmer la révision',
        actions: [
          "Date de révision : 01/04/2027, ou plus tôt en cas de changement d'inflation, d'insécurité, de mandat de la base, ou si le plafond est dépassé plus de 3 fois dans un trimestre.",
          "Notez la date dans votre agenda et dans l'en-tête du document.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la section 2 de la politique',
      lines: [
        "Caisse principale de Goma — titulaire Grace M. — plafond 2 000 USD — solde cible 1 500 USD — réapprovisionnement déclenché à 500 USD, chaque semaine en principe.",
        "Antenne de Rutshuru — titulaire Amani L. — plafond 500 USD — solde cible 400 USD — réapprovisionnement déclenché à 150 USD, deux fois par semaine.",
        "Coffre de coordination — titulaires Mireille T. et Grace M. — plafond 5 000 USD — double signature au-delà de 1 000 USD par opération.",
      ],
    },
    result: "Une politique d'une page signée, datée, diffusée aux titulaires avec accusé de réception, et une date de révision programmée.",
    tip: "Ne vous contentez pas d'envoyer le document par e-mail : organisez 20 minutes avec la caissière et chaque titulaire, faites-leur appliquer la politique sur deux exemples réels, et gardez la feuille de présence signée.",
  },

  // ─────────────── PROCÉDURE 2 — Tenir le livre de caisse ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Préparer le classeur du mois à partir du template',
    intro: "Une caisse = un classeur par mois. Le template livre-de-caisse-rapprochement-quotidien.xlsx contient deux onglets liés : « Livre de caisse » et « Rapprochement quotidien ». Il est livré avec des lignes d'exemple (lignes 5 à 8) que vous remplacez par vos données avant toute saisie.",
    steps: [
      {
        title: 'Copier le modèle et le nommer',
        actions: [
          "Ouvrez le template, puis Fichier > Enregistrer sous : Caisse-Goma_2026-04.xlsx, dans le dossier 03_Tresorerie > Caisse_Goma > 2026. Ne travaillez jamais dans le modèle original.",
          "Lisez l'onglet « Livre de caisse » : en-têtes en ligne 4 — A Date, B Référence pièce, C Libellé, D Entrée (USD), E Sortie (USD), F Solde théorique, G Devise.",
          "Lisez l'onglet « Rapprochement quotidien » : en-têtes en ligne 4 — A Date, B Solde théorique (livre), C Comptage physique, D Écart, E Statut.",
        ],
      },
      {
        title: "Effacer les exemples sans casser les formules",
        actions: [
          "Dans « Livre de caisse », effacez le contenu de A5:E8 (OUV-001, AV-014, DEP-022, REC-009). Conservez les colonnes F et G.",
          "Dans « Rapprochement quotidien », effacez A5:A8 et C5:C8. Conservez les formules des colonnes B, D et E.",
          "Ne supprimez pas les lignes 1 à 4 (titre et en-têtes). Les volets sont figés en A5 : l'en-tête reste visible.",
        ],
      },
      {
        title: "Identifier la caisse et protéger les formules",
        actions: [
          "En A3 (ligne libre sous le titre), saisissez : « Caisse principale — bureau de Goma — avril 2026 — titulaire Grace M. — plafond 2 000 USD ».",
          "Sélectionnez les cellules de saisie (A:E du livre ; A et C du rapprochement), clic droit > Format de cellule > Protection, décochez « Verrouillé ».",
          "Révision > Protéger la feuille, sur chacun des deux onglets. Le mot de passe est détenu par Grace M.",
        ],
      },
    ],
    example: {
      title: 'Nommage et classement des fichiers',
      lines: [
        "Fichier : Caisse-Goma_2026-04.xlsx — Antenne : Caisse-Rutshuru_2026-04.xlsx.",
        "Pièces : classeur papier « Pièces de caisse avril 2026 » rangé par numéro ; scans dans 2026 > 04_Avril > Pièces.",
        "A3 : Caisse principale — bureau de Goma — avril 2026 — titulaire Grace M. — plafond 2 000 USD.",
      ],
    },
    result: "Un classeur d'avril propre : exemples effacés, formules intactes, protégées, caisse identifiée en A3.",
    pitfall: "Écraser une formule de la colonne F par un chiffre tapé « pour corriger ». Le solde théorique cesse alors de se recalculer, et le rapprochement du soir ne vaut plus rien. Ne verrouillez que les colonnes de formules.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: "Saisir le solde d'ouverture du mois",
    intro: "La première ligne du livre est le solde d'ouverture : c'est le comptage physique de clôture du mois précédent, signé, et non le solde théorique. Fil rouge : le comptage du 31 mars 2026, signé par Esther N. et Grace M., donne 1 500 USD.",
    steps: [
      {
        title: 'Remplir la ligne 5',
        actions: [
          "A5 — Date : 2026-04-01 (format AAAA-MM-JJ, comme dans le template).",
          "B5 — Référence pièce : OUV-001.",
          "C5 — Libellé : « Solde d'ouverture du mois — comptage du 31/03 signé Esther N. / Grace M. ».",
          "D5 — Entrée : 1500 ; E5 — Sortie : 0 ; G5 — Devise : USD.",
          "F5 contient déjà la formule =SUM(D5)-SUM(E5) (en version française : =SOMME(D5)-SOMME(E5)) : ne la touchez pas.",
        ],
      },
      {
        title: "Vérifier avant de continuer",
        actions: [
          "F5 doit afficher 1 500.",
          "Comparez avec le procès-verbal de comptage du 31/03 : même montant, mêmes signatures.",
          "Si Excel convertit la date en date réelle, c'est acceptable : faites ensuite de même dans l'onglet « Rapprochement quotidien ».",
        ],
      },
    ],
    example: {
      title: 'Ligne 5 du livre',
      lines: [
        "2026-04-01 | OUV-001 | Solde d'ouverture du mois — comptage du 31/03 signé Esther N. / Grace M. | 1500 | 0 | 1500 | USD",
      ],
    },
    result: "Le livre commence au centime près là où le comptage du mois précédent s'est arrêté.",
    pitfall: "Reprendre le solde théorique de clôture plutôt que le comptage physique : si le mois précédent s'est terminé sur un écart, vous le propagez dans le mois suivant sans que personne ne le voie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Enregistrer une sortie en temps réel',
    intro: "Chaque sortie s'enregistre au moment où elle a lieu, après validation, jamais « en fin de journée de mémoire ». Fil rouge : le 1er avril, Patrick K. reçoit l'avance AV-014 de 120 USD, puis la caissière règle une facture de fournitures de 45 USD.",
    steps: [
      {
        title: 'Avant de payer',
        actions: [
          "Vérifiez la pièce attendue (tableau « La pièce de caisse »), la signature de validation et le seuil applicable (procédure 1, étape 3).",
          "Attribuez le numéro suivant du préfixe : AV-014 pour une avance, DEP-022 pour une dépense. Inscrivez ce numéro sur la pièce.",
        ],
      },
      {
        title: 'Remplir la ligne dans le livre',
        actions: [
          "A — Date du jour ; B — Référence pièce (préfixe + numéro).",
          "C — Libellé : quoi + à qui + objet + n° de facture, en 80 caractères maximum.",
          "D — 0 ; E — le montant de la sortie ; G — USD.",
          "F — copiez la formule de la ligne au-dessus : =F6+D7-E7 sur la ligne 7.",
        ],
      },
      {
        title: 'Contrôler le solde',
        actions: [
          "Vérifiez que F = solde précédent − sortie.",
          "Payez ensuite, puis faites signer la pièce par le bénéficiaire.",
        ],
      },
    ],
    example: {
      title: 'Livre de caisse — 1er avril 2026',
      lines: [
        "2026-04-01 | AV-014 | Avance à justifier — Patrick K. — carburant LC-03 tournées Sake — échéance 2026-04-09 | 0 | 120 | 1380 | USD",
        "2026-04-01 | DEP-022 | Fournitures bureau — Papeterie Kivu — facture 2214 | 0 | 45 | 1335 | USD",
      ],
    },
    result: "Chaque sortie est une ligne, avec sa pièce numérotée, son libellé explicite et un solde qui se recalcule. Solde au soir du 1er avril : 1 335 USD.",
    pitfall: "Des libellés comme « divers », « achat » ou « dépannage ». Six mois plus tard, ni vous ni l'auditeur ne saurez ce qu'était la dépense. Le libellé d'une sortie doit se suffire à lui-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Enregistrer une entrée : réapprovisionnement ou reversement',
    intro: "Il n'existe que deux types d'entrées légitimes : le réapprovisionnement venant de la banque et le reversement d'une personne qui rend un solde d'avance ou rembourse une dépense. Il n'y a pas de troisième type : la caisse ne reçoit pas de « dépannage ».",
    steps: [
      {
        title: 'Enregistrer un reversement (préfixe REC)',
        actions: [
          "Établissez un reçu de caisse numéroté en deux exemplaires : un pour la personne, un pour le classeur.",
          "Saisissez : D = montant reversé, E = 0, libellé explicite avec le nom et l'avance d'origine.",
        ],
      },
      {
        title: 'Enregistrer un réapprovisionnement (préfixe REA)',
        actions: [
          "Au retour de la banque, comptez les billets en présence d'une deuxième personne, avant de signer le bordereau.",
          "Saisissez D = montant reçu, avec le numéro du chèque et celui du bordereau dans le libellé.",
          "Vérifiez que le nouveau solde reste inférieur au plafond (2 000 USD).",
        ],
      },
    ],
    example: {
      title: 'Entrées d\'avril — caisse principale de Goma',
      lines: [
        "2026-04-02 | REC-009 | Reversement avance non utilisée — Joël B. — avance AV-011 | 15 | 0 | 1320 | USD",
        "2026-04-08 | REA-002 | Réapprovisionnement caisse — retrait banque chèque n° 0457 — bordereau BDK-0408 | 1000 | 0 | 1490 | USD",
      ],
    },
    result: "Chaque entrée est justifiée par un reçu ou un bordereau, et le solde après entrée reste sous le plafond.",
    tip: "Les préfixes OUV, AV, DEP et REC sont ceux du template ; ajoutez REA (réapprovisionnement) et REG (régularisation) pour que chaque ligne se classe au premier coup d'œil.",
    pitfall: "Accepter qu'un agent « dépose » de l'argent personnel dans la caisse pour la dépanner. Cela crée un écart le temps de l'opération et normalise une pratique impossible à distinguer d'un détournement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Classer les pièces et corriger une erreur sans rien effacer',
    intro: "Une ligne sans pièce retrouvable est une ligne inéligible. Et une ligne fausse ne se supprime jamais : elle se corrige par une ligne de régularisation. Fil rouge : le 3 avril, vous trouvez que la facture d'eau et de café est de 41 USD, alors que 38 USD ont été saisis (DEP-025).",
    steps: [
      {
        title: 'Classer chaque pièce',
        actions: [
          "Inscrivez sur la pièce le numéro du livre (DEP-025) et la date de saisie.",
          "Rangez-la par numéro dans le classeur du mois ; scannez-la chaque semaine, nommée avec son numéro.",
          "Transmettez chaque semaine à la finance les pièces et une copie du livre, pour la codification analytique (projet, bailleur, rubrique) vue au module 01.",
        ],
      },
      {
        title: 'Corriger par une ligne REG',
        actions: [
          "Ne supprimez rien et ne modifiez pas le montant d'origine.",
          "Ajoutez une ligne de préfixe REG qui rattrape la différence : ici, une sortie de 3 USD.",
          "Libellé : « Régularisation DEP-025 : pièce = 41 USD, saisi 38 ».",
          "Pour une sortie saisie trop haut, la régularisation est une entrée du même montant.",
        ],
      },
    ],
    example: {
      title: 'Livre de caisse — 2 et 3 avril 2026 (lignes 8 à 12)',
      lines: [
        "2026-04-02 | DEP-023 | Recharges téléphoniques 3 animateurs WASH — reçus vendeur | 0 | 30 | 1305 | USD",
        "2026-04-02 | REC-009 | Reversement avance non utilisée — Joël B. — avance AV-011 | 15 | 0 | 1320 | USD",
        "2026-04-03 | DEP-024 | Per diem atelier santé — 12 relais × 20 USD — liste d'émargement LE-0403 | 0 | 240 | 1080 | USD",
        "2026-04-03 | DEP-025 | Eau et café réunion inter-projets — reçu 0391 | 0 | 38 | 1042 | USD",
        "2026-04-03 | REG-001 | Régularisation DEP-025 : pièce = 41 USD, saisi 38 | 0 | 3 | 1039 | USD",
      ],
    },
    result: "Un livre de 8 lignes (5 à 12) où toute erreur reste visible et corrigée, et un solde théorique au soir du 3 avril de 1 039 USD.",
    pitfall: "Supprimer ou réécrire une ligne « pour faire propre ». Une correction silencieuse est traitée par l'auditeur comme un signal d'alerte, même quand l'intention est honnête. N'insérez jamais non plus de ligne au milieu : vous briseriez la chaîne des soldes.",
  },

  // ─────────────── PROCÉDURE 3 — Ouvrir, clôturer, rapprocher ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Ouvrir la caisse le matin : compter et comparer',
    intro: "Avant toute transaction de la journée, comptez la caisse billet par billet et pièce par pièce. Fil rouge : lundi 6 avril, 8 h 00. La caisse a été fermée vendredi soir sur 1 039 USD, scellé numéroté posé.",
    steps: [
      {
        title: 'Préparer le comptage',
        actions: [
          "Réunissez deux personnes : la caissière (Esther N.) et un témoin (vous ou Grace M.).",
          "Vérifiez que le scellé du coffre est intact et correspond au numéro noté au registre d'accès.",
          "Ouvrez le coffre, signez le registre d'accès (date, heure, motif « comptage d'ouverture »).",
        ],
      },
      {
        title: 'Compter par coupure',
        actions: [
          "Comptez à voix haute, coupure par coupure, sur une fiche de billetage.",
          "Faites compter le témoin séparément, sans qu'il voie votre total.",
          "Additionnez : le total doit être identique pour les deux.",
        ],
      },
      {
        title: 'Comparer au solde de clôture de la veille',
        actions: [
          "Ouvrez l'onglet « Rapprochement quotidien » : le solde théorique du dernier jour est 1 039.",
          "Égalité : commencez la journée.",
          "Différence : ne commencez aucune transaction avant de l'avoir comprise. Un écart non expliqué le matin ne se résout jamais seul : il se dilue dans les mouvements suivants.",
        ],
      },
    ],
    example: {
      title: "Fiche de billetage — ouverture du lundi 6 avril 2026",
      lines: [
        "5 billets de 100 USD = 500",
        "8 billets de 50 USD = 400",
        "6 billets de 20 USD = 120",
        "1 billet de 10 USD = 10 ; 1 billet de 5 USD = 5 ; 4 billets de 1 USD = 4",
        "Total compté = 1 039 USD = solde de clôture du vendredi 3 avril ✔ — signatures : Esther N. et le témoin.",
      ],
    },
    result: "Un comptage d'ouverture daté, signé par deux personnes, égal au solde de clôture de la veille.",
    pitfall: "Compter « au jugé » ou en une seule fois avec une seule personne. Un comptage non contradictoire ne protège ni la caissière ni l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Surveiller le plafond et le seuil de réapprovisionnement pendant la journée',
    intro: "La politique ne s'applique que si quelqu'un la regarde en cours de journée. Après chaque mouvement, la caissière compare le solde du livre à deux repères : le seuil de réapprovisionnement et le plafond.",
    steps: [
      {
        title: 'Après chaque entrée ou sortie',
        actions: [
          "Lisez la colonne F du livre.",
          "Solde ≤ seuil de réapprovisionnement (500 USD à Goma) : demandez un réapprovisionnement à Grace M. le jour même.",
          "Solde > plafond (2 000 USD) : versez l'excédent à la banque ou au coffre de coordination avant la clôture.",
        ],
      },
      {
        title: 'Calculer le montant du réapprovisionnement',
        actions: [
          "Montant = solde cible − solde du jour, arrondi à la centaine : 1 500 − 490 = 1 010, soit 1 000 USD.",
          "Vérifiez que solde du jour + montant reste sous le plafond : 490 + 1 000 = 1 490, inférieur à 2 000.",
        ],
      },
      {
        title: 'Garder la caisse sous contrôle',
        actions: [
          "Ne laissez jamais la caisse ouverte sans surveillance, même 5 minutes.",
          "Refusez toute sortie sans pièce et validation, quel que soit le demandeur.",
        ],
      },
    ],
    example: {
      title: 'Mercredi 8 avril 2026 — caisse principale de Goma',
      lines: [
        "11 h 10 : après DEP-029 (291 USD), solde du livre = 490 USD ≤ seuil de 500 USD → demande de réapprovisionnement signée par Grace M.",
        "Montant demandé : 1 500 − 490 = 1 010 → 1 000 USD (chèque n° 0457 à la Banque du Lac Kivu).",
        "14 h 00 : retour de la banque, comptage à deux, ligne REA-002 → solde 1 490 USD, inférieur au plafond.",
      ],
    },
    result: "À tout moment, la caisse contient entre le seuil et le plafond, et chaque dépassement a déclenché une action le jour même.",
    tip: "Notez le seuil et le plafond en gras en haut de l'onglet « Livre de caisse », en A3 : ils sont ainsi sous les yeux de la caissière à chaque saisie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: "Clôturer le soir : recompter et remplir la ligne du rapprochement",
    intro: "En fin de journée, recomptez physiquement la caisse et reportez le montant dans l'onglet « Rapprochement quotidien », en face de la date du jour. Fil rouge : vendredi 3 avril, 17 h 20 ; les 12 lignes du livre sont saisies.",
    steps: [
      {
        title: 'Recompter',
        actions: [
          "Refaites un billetage complet, avec le témoin, une fois la dernière ligne du livre saisie.",
          "Notez le total compté : 1 039 USD (le livre affiche 1 042 USD tant que DEP-025 n'est pas régularisée).",
        ],
      },
      {
        title: 'Remplir la ligne du jour',
        actions: [
          "A — la date du jour ; C — le comptage physique (nombre, sans symbole).",
          "B — formule qui pointe la colonne F de la dernière ligne du jour dans « Livre de caisse » : ='Livre de caisse'!F11 le 3 avril avant correction, F12 après la ligne REG-001.",
          "D — =C7-B7 ; E — =IF(ABS(D7)<=1,\"OK\",\"À INVESTIGUER\") (version française : =SI(ABS(D7)<=1;\"OK\";\"À INVESTIGUER\")). Ces formules sont déjà dans le template : recopiez-les vers le bas.",
          "Étendez la mise en forme conditionnelle : Accueil > Mise en forme conditionnelle > Gérer les règles > « S'applique à » =$E$5:$E$40. Elle est limitée à E5:E8 dans le template.",
        ],
      },
    ],
    example: {
      title: "Onglet « Rapprochement quotidien » — 1er au 3 avril 2026 (avant correction du 3 avril)",
      lines: [
        "2026-04-01 | ='Livre de caisse'!F7 → 1335 | 1335 | 0 | OK",
        "2026-04-02 | ='Livre de caisse'!F9 → 1320 | 1320 | 0 | OK",
        "2026-04-03 | ='Livre de caisse'!F11 → 1042 | 1039 | −3 | À INVESTIGUER (cellule rouge)",
      ],
    },
    result: "Une ligne par jour de clôture, sans exception ; les statuts apparaissent en vert (OK) ou en rouge (À INVESTIGUER). Le 3 avril affiche un écart de −3 USD.",
    tip: "Pour que B retrouve seul la dernière ligne du jour (hors template), saisissez : =LOOKUP(2,1/('Livre de caisse'!$A$5:$A$200=A7),'Livre de caisse'!$F$5:$F$200) (version française : =RECHERCHE(2;1/('Livre de caisse'!$A$5:$A$200=A7);'Livre de caisse'!$F$5:$F$200)).",
    pitfall: "Adapter le comptage pour « tomber juste », ou saisir en C le solde du livre à la place du comptage réel. La colonne C reçoit ce que vous avez compté, jamais ce que vous souhaitez trouver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Lire le statut et documenter un écart le jour même',
    intro: "Le statut « OK » signifie que la valeur absolue de l'écart est inférieure ou égale à 1 USD (seuil codé dans la formule). Il s'affiche « À INVESTIGUER » dès que l'écart dépasse 1 USD. Un écart n'est ni une fraude, ni une erreur bénigne : c'est un signal qui se traite le jour même.",
    steps: [
      {
        title: "Chercher la cause pendant que les faits sont frais",
        actions: [
          "Recomptez avec le témoin pour éliminer une erreur de comptage.",
          "Relisez les lignes du jour contre les pièces : addition, chiffres transposés, pièce lue de travers, oubli de ligne.",
          "Cherchez dans la caisse un bon ou un reçu non enregistré.",
        ],
      },
      {
        title: 'Régulariser ou escalader',
        actions: [
          "Cause trouvée : passez une ligne REG dans le livre, sans effacer la ligne d'origine (procédure 2, étape 5), et mettez à jour la formule de B si la dernière ligne du jour a changé.",
          "Cause non trouvée : n'ajustez rien. Rédigez la note d'écart et faites-la signer par la caissière et le superviseur.",
          "Écart supérieur à 20 USD : informez la coordinatrice pays sous 24 heures. Supérieur à 100 USD : lancez la procédure 7.",
        ],
      },
      {
        title: "Écrire la note d'écart",
        actions: [
          "Champs : date, caisse, solde théorique, comptage, écart, vérifications faites, cause (établie / probable / inconnue), mesure prise, signatures.",
          "Photographiez l'onglet « Rapprochement quotidien » avant de corriger : le statut repasse à OK après régularisation, la note reste la preuve de l'écart.",
        ],
      },
    ],
    example: {
      title: "Note d'écart — vendredi 3 avril 2026",
      lines: [
        "Caisse principale de Goma — théorique 1 042 USD — comptage 1 039 USD — écart −3 USD (> tolérance de 1 USD).",
        "Vérifications : recomptage à deux (1 039 confirmé) ; relecture des 12 lignes du jour contre les pièces.",
        "Cause établie : DEP-025, eau et café, pièce 0391 = 41 USD, saisi 38 USD. Mesure : ligne REG-001 de 3 USD (sortie).",
        "Après régularisation : théorique 1 039 = comptage 1 039, statut OK. Signatures : Esther N. et le Finance Officer.",
      ],
    },
    result: "Aucun statut « À INVESTIGUER » ne passe la nuit sans une note datée du jour, signée par deux personnes, avec la cause ou l'état de l'investigation.",
    pitfall: "Passer une ligne « ajustement » ou « différence de caisse » sans cause, pour faire retomber l'écart à zéro. Un écart masqué est un écart que personne n'investiguera, et il se répète.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Sécuriser, signer et transmettre en fin de journée',
    intro: "Une journée n'est pas finie tant que l'argent n'est pas enfermé et que la trace n'est pas transmise. Fil rouge : vendredi 3 avril, avant le week-end.",
    steps: [
      {
        title: "Fermer la journée",
        actions: [
          "Signez le billetage et la ligne du rapprochement : caissière et témoin.",
          "Placez l'argent, le billetage et les bons de caisse dans le coffre.",
          "Posez le scellé numéroté et notez-le au registre d'accès avec l'heure et vos signatures.",
        ],
      },
      {
        title: 'Transmettre les pièces et le fichier',
        actions: [
          "Classez les pièces du jour dans le classeur du mois.",
          "Enregistrez le fichier et déposez-en une copie en lecture seule dans le dossier partagé de la finance.",
          "Le vendredi, transmettez en plus la copie hebdomadaire des pièces pour codification.",
        ],
      },
      {
        title: 'Traiter les week-ends et jours fériés',
        actions: [
          "Si la caisse n'a pas bougé, la clôture du vendredi sert d'ouverture du lundi : vérifiez le scellé et recomptez à l'ouverture.",
          "Si la caisse est utilisée un samedi, faites une clôture ce jour-là : jamais de mouvement sans comptage de fin de journée.",
        ],
      },
    ],
    example: {
      title: "Registre d'accès au coffre — extrait",
      lines: [
        "2026-04-03 | 17 h 35 | Fermeture de fin de journée, scellé n° 004812 posé | Esther N. | signé | témoin : Finance Officer | signé",
        "2026-04-06 | 8 h 00 | Scellé n° 004812 intact, ouverture, comptage 1 039 USD | Esther N. | signé | témoin : Finance Officer | signé",
      ],
    },
    result: "Caisse fermée et scellée, pièces classées, fichier sauvegardé, registre d'accès signé : la journée est prouvable de bout en bout.",
    tip: "Gardez un calendrier de clôtures : pour chaque jour ouvré, une case cochée. Un jour sans ligne au rapprochement est un jour sans contrôle.",
  },

  // ─────────────── PROCÉDURE 4 — Octroyer, suivre et clôturer une avance ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 7',
    title: 'Recevoir la demande et la contrôler avant toute décision',
    intro: "L'avance commence par la section 1 de la fiche-avance-justification-remboursement.docx. Le document encadre l'avance « de la demande initiale jusqu'au solde final ». Fil rouge : le 1er avril, Patrick K., logisticien, demande de quoi payer le carburant des tournées de Sake.",
    steps: [
      {
        title: 'Faire remplir la section « 1. Demande d\'avance »',
        actions: [
          "Demandeur (nom, fonction) : « Patrick K. — Logisticien ».",
          "Montant demandé et devise : « 120 USD ».",
          "Objet de l'avance : « AV-014 — Carburant et péages des tournées d'approvisionnement Goma–Sake–Goma des 2 et 6 avril 2026, véhicule LC-03 ».",
          "Délai de justification attendu (date limite) : « 2026-04-09 ».",
        ],
      },
      {
        title: 'Contrôler la demande',
        actions: [
          "L'objet est précis et le montant est une estimation chiffrée : 60 litres × 1,80 USD = 108 USD, plus 12 USD de péages = 120 USD.",
          "Les pièces attendues sont nommées : reçus de station et quittances de péage.",
          "Le registre des avances ouvertes ne montre aucune avance échue et non justifiée au nom de Patrick K.",
          "Le montant respecte le plafond d'avance (500 USD) et la date respecte le délai (15 jours au plus : ici 8 jours).",
        ],
      },
    ],
    example: {
      title: 'Section 1 de la fiche — AV-014',
      lines: [
        "Demandeur (nom, fonction) : Patrick K. — Logisticien | Montant demandé et devise : 120 USD",
        "Objet de l'avance : AV-014 — Carburant et péages, tournées Goma–Sake–Goma des 2 et 6 avril 2026, véhicule LC-03 | Délai de justification attendu : 2026-04-09",
      ],
    },
    result: "Une demande complète, chiffrée, avec pièces attendues et date limite : on peut décider.",
    pitfall: "Recevoir une demande orale et « régulariser la fiche demain ». Sans fiche, l'avance est une sortie de caisse sans traçabilité : exactement ce que la politique de trésorerie doit exclure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 7',
    title: 'Valider par signature avant la sortie et décaisser',
    intro: "Le superviseur valide et signe avant toute sortie de caisse, jamais après. Montant de 120 USD : tranche de 101 à 500 USD, donc validation écrite préalable de Grace M.",
    steps: [
      {
        title: 'Faire signer la section « 4. Validation »',
        actions: [
          "Approuvé par (Finance) : Grace M. signe et date, avant la remise de l'argent.",
          "Titulaire de l'avance (signature) : Patrick K. signe en recevant l'argent, après l'avoir compté devant la caissière.",
          "Laissez « Date de clôture » vide : elle se remplit à la clôture (étape 6).",
        ],
      },
      {
        title: 'Décaisser et enregistrer',
        actions: [
          "Remettez 120 USD en comptant devant le bénéficiaire. Remettez-lui une copie de la fiche.",
          "Saisissez dans « Livre de caisse » : AV-014, libellé « Avance à justifier — Patrick K. — carburant LC-03 tournées Sake — échéance 2026-04-09 », sortie 120.",
          "Inscrivez l'avance au registre des avances ouvertes (étape 3).",
        ],
      },
    ],
    example: {
      title: 'Ligne du livre et signatures',
      lines: [
        "2026-04-01 | AV-014 | Avance à justifier — Patrick K. — carburant LC-03 tournées Sake — échéance 2026-04-09 | 0 | 120 | 1380 | USD",
        "Section 4 : Approuvé par (Finance) : Grace M., 01/04/2026, 9 h 40 — Titulaire : Patrick K., 01/04/2026, 9 h 55.",
      ],
    },
    result: "La signature de Grace M. précède la sortie de caisse, la fiche est signée par les deux parties, et le libellé du livre contient le nom et l'échéance.",
    pitfall: "Décaisser « sur parole » parce que le demandeur est un collègue senior ou un ami. La règle s'applique de façon strictement identique à tout le monde ; la première exception ouvre la porte à toutes les suivantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 7',
    title: 'Tenir le registre des avances ouvertes et relancer aux échéances',
    intro: "Une avance non relancée ne se justifie pas toute seule. Le Finance Officer tient un registre des avances ouvertes (outil de suivi simple, à côté du template) et le passe en revue chaque vendredi.",
    steps: [
      {
        title: 'Créer et tenir le registre',
        actions: [
          "Colonnes : N° avance, Bénéficiaire, Objet, Date d'octroi, Montant, Échéance, Statut (ouverte / justifiée / en retard / dette), Relances, Date de clôture.",
          "Ajoutez une ligne le jour de l'octroi ; ne supprimez jamais une ligne soldée.",
        ],
      },
      {
        title: 'Appliquer le calendrier de relance',
        actions: [
          "Échéance −3 jours : rappel au bénéficiaire par message.",
          "Échéance +1 jour : relance écrite avec copie au superviseur.",
          "Échéance +7 jours : relance avec copie à Grace M. ; aucune nouvelle avance pour ce bénéficiaire.",
          "30 jours après l'octroi : l'avance devient une dette (étape 7).",
        ],
      },
    ],
    table: {
      columns: ['N° avance', 'Bénéficiaire', 'Objet', 'Octroi', 'Montant', 'Échéance', 'Statut'],
      rows: [
        ['AV-011', 'Joël B.', 'Supervision latrines lot 2', '25/03/2026', '200 USD', '01/04/2026', 'Justifiée, soldée le 02/04 (REC-009, 15 USD)'],
        ['AV-013', 'Samuel R.', 'Frais de mission Butembo', '30/03/2026', '180 USD', '14/04/2026', 'Ouverte'],
        ['AV-014', 'Patrick K.', 'Carburant LC-03 tournées Sake', '01/04/2026', '120 USD', '09/04/2026', 'Ouverte'],
      ],
    },
    result: "Registre à jour chaque vendredi : aucune avance sans ligne, aucune échéance dépassée sans relance datée.",
    pitfall: "Découvrir les avances échues à la clôture mensuelle. L'avance s'est alors alourdie de 30 jours de retard, la mémoire du demandeur s'est effacée, et la relance arrive trop tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 7',
    title: 'Recevoir la justification et contrôler chaque pièce',
    intro: "À la date prévue, le bénéficiaire remplit la section 2 de la fiche avec le détail des dépenses réelles et les pièces, ligne par ligne. Fil rouge : Patrick K. revient le mercredi 8 avril, avec la date limite du 9 avril respectée.",
    steps: [
      {
        title: 'Faire remplir la section « 2. Justification »',
        actions: [
          "Quatre colonnes : Date, Nature de la dépense, Pièce justificative n°, Montant.",
          "Une dépense par ligne ; le template propose 4 lignes, insérez-en d'autres si besoin (clic droit > Insérer des lignes).",
          "Les originaux des pièces sont agrafés à la fiche.",
        ],
      },
      {
        title: 'Contrôler ligne par ligne',
        actions: [
          "La date tombe pendant la mission, la nature correspond à l'objet, la pièce est lisible, le montant de la fiche est celui de la pièce.",
          "Croisez avec le carnet de bord du véhicule LC-03 : deux tournées les 2 et 6 avril, kilométrage compatible avec 60 litres.",
          "Rejetez toute dépense sans pièce ou hors objet : elle reste due par le bénéficiaire.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Nature de la dépense', 'Pièce justificative n°', 'Montant'],
      rows: [
        ['2026-04-02', 'Carburant 40 L gasoil LC-03 (1,80 USD/L)', 'Reçu station n° 5531', '72,00'],
        ['2026-04-06', 'Carburant 20 L gasoil LC-03 (retour Sake)', 'Reçu station n° 5602', '36,00'],
        ['2026-04-06', 'Péage et pesage route nationale', 'Quittance n° 0187', '6,00'],
        ['', '', 'Total justifié', '114,00'],
      ],
    },
    result: "Une section 2 où chaque ligne est rattachée à une pièce originale vérifiée, avec un total de 114,00 USD.",
    pitfall: "Accepter une justification incomplète ou tardive parce que la personne est un collègue senior. Un justificatif refusé à un chauffeur et accepté d'un chef de mission détruit votre autorité pour la prochaine fois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 7',
    title: 'Calculer le solde et déterminer le sens du remboursement',
    intro: "La section 3 de la fiche compte deux champs : « Montant justifié (total pièces) » et « Solde à rembourser / à recevoir ». Le solde se calcule toujours de la même façon : montant avancé − montant justifié.",
    steps: [
      {
        title: 'Remplir la section « 3. Solde »',
        actions: [
          "Montant justifié (total pièces) : 114,00 USD.",
          "Solde = 120 − 114 = 6,00 USD, positif : c'est le bénéficiaire qui rembourse.",
          "Solde à rembourser / à recevoir : « 6,00 USD à rembourser par le titulaire ».",
        ],
      },
      {
        title: 'Appliquer la règle selon le sens',
        actions: [
          "Justifié inférieur à l'avance : la différence est remboursée en caisse par la personne.",
          "Justifié égal à l'avance : aucun mouvement, la fiche est soldée.",
          "Justifié supérieur à l'avance : l'organisation rembourse la différence uniquement si un accord préalable écrit de Grace M. existe. Sans accord, la décision revient à Grace M. par écrit, au cas par cas.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Montant avancé', 'Montant justifié', 'Solde', 'Mouvement de caisse'],
      rows: [
        ['Dépenses inférieures (cas de Patrick K.)', '120,00', '114,00', '+6,00', 'Entrée REC de 6,00 : le titulaire rembourse'],
        ['Dépenses égales', '120,00', '120,00', '0,00', 'Aucun'],
        ['Dépenses supérieures, accord préalable de 15 USD', '120,00', '131,00', '−11,00', 'Sortie DEP de 11,00 : l\'organisation rembourse'],
      ],
    },
    result: "Un solde calculé, daté, avec le sens et le mouvement de caisse à passer : 6,00 USD à rembourser par Patrick K.",
    pitfall: "Rembourser un excédent sans accord préalable parce que « la dépense était justifiée ». Un dépassement approuvé après coup rend le contrôle inopérant : l'accord se demande avant, par écrit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 7',
    title: 'Clôturer : mouvement de caisse, signatures, date de clôture, archivage',
    intro: "L'avance n'est soldée que lorsque le mouvement de clôture est passé dans le livre, la fiche signée et classée, le registre mis à jour. Fil rouge : mercredi 8 avril, Patrick K. rend 6,00 USD.",
    steps: [
      {
        title: 'Passer le mouvement de clôture',
        actions: [
          "Encaissez les 6,00 USD en présence de la caissière et remettez un reçu de caisse REC-010 à Patrick K.",
          "Saisissez dans « Livre de caisse » : REC-010, libellé « Reversement solde avance AV-014 — Patrick K. », entrée 6.",
        ],
      },
      {
        title: 'Finaliser la fiche et le registre',
        actions: [
          "Section 4 : faites signer à nouveau le titulaire et l'approbateur Finance (Grace M.), et renseignez « Date de clôture » : 2026-04-08.",
          "Registre des avances : statut « Justifiée, soldée le 08/04 ».",
          "Classez la fiche signée avec les pièces originales dans le dossier AV-014 ; scannez-la.",
          "Transmettez les reçus de carburant à la finance : le carburant du véhicule partagé est un coût commun, réparti par la clé « nombre de trajets » (module 01).",
        ],
      },
    ],
    example: {
      title: 'Clôture de AV-014',
      lines: [
        "2026-04-08 | REC-010 | Reversement solde avance AV-014 — Patrick K. | 6 | 0 | 1496 | USD",
        "Section 3 : Montant justifié (total pièces) : 114,00 USD — Solde à rembourser / à recevoir : 6,00 USD à rembourser (remboursé le 08/04).",
        "Section 4 : Titulaire : Patrick K. — Approuvé par (Finance) : Grace M. — Date de clôture : 2026-04-08.",
      ],
    },
    result: "Fiche complète et signée, entrée de caisse passée, registre soldé, pièces archivées et transmises à la finance : l'avance est prouvable de bout en bout.",
    tip: "Le solde du livre est de 1 496 USD après REC-010 (1 490 + 6). C'est le chiffre que le comptage du soir du 8 avril doit retrouver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 7',
    title: "Traiter l'avance qui n'est pas justifiée : de la relance à la dette",
    intro: "Une avance laissée ouverte devient un problème de gestion, puis une dette. Fil rouge : AV-013, 180 USD remis à Samuel R. le 30 mars pour des frais de mission à Butembo, échéance 14 avril. Le 14 avril au soir, aucune pièce n'est arrivée.",
    steps: [
      {
        title: 'Relancer selon le calendrier',
        actions: [
          "15/04 (échéance +1) : relance écrite à Samuel R., copie à son superviseur, avec le montant et la liste des pièces attendues.",
          "21/04 (échéance +7) : relance avec copie à Grace M. Aucune nouvelle avance ne peut être accordée à Samuel R.",
          "Notez chaque relance dans la colonne « Relances » du registre, avec la date.",
        ],
      },
      {
        title: 'Constater la dette à 30 jours',
        actions: [
          "29/04 (30 jours après l'octroi) : passez le statut du registre en « dette ».",
          "Faites signer par Grace M. un courrier à Samuel R. demandant le remboursement de 180 USD sous 10 jours.",
          "Demandez à la comptabilité de reclasser le montant de « avances » vers « créances sur le personnel » ; la dépense ne passe sur aucune ligne de projet sans pièce.",
        ],
      },
      {
        title: 'Organiser le remboursement',
        actions: [
          "Proposez un échéancier : 60 USD par mois pendant 3 mois, par retenue sur salaire, avec l'accord écrit de l'employé et dans les limites du droit du travail local.",
          "En cas de départ, aucun solde de tout compte sans régularisation de l'avance.",
          "Informez Mireille T. dans le rapport mensuel.",
        ],
      },
    ],
    example: {
      title: 'Registre des avances — AV-013 à la fin avril',
      lines: [
        "AV-013 | Samuel R. | Frais de mission Butembo | 30/03/2026 | 180 USD | échéance 14/04/2026",
        "Relances : 15/04 écrite (copie superviseur) — 21/04 écrite (copie Grace M.) — 29/04 mise en demeure signée.",
        "Statut au 30/04/2026 : DETTE — échéancier 3 × 60 USD par retenue sur salaire, accord signé le 02/05/2026.",
      ],
    },
    result: "Aucune avance ne dépasse 30 jours sans décision écrite : soit elle est justifiée, soit elle est constatée comme dette avec un plan de remboursement.",
    pitfall: "Laisser la dette « mûrir » pour ne pas froisser. Plus le temps passe, plus la situation de l'employé s'aggrave et plus vos états financiers deviennent faux. Une relance ferme et précoce est le service le plus utile que vous lui rendiez.",
  },

  // ─────────────── PROCÉDURE 5 — Rapprocher la banque (hebdomadaire) ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Réunir les documents du rapprochement bancaire du vendredi',
    intro: "Une fois par semaine, comparez le relevé bancaire aux mouvements enregistrés dans vos outils de suivi : réapprovisionnements de caisse et dépenses payées directement par virement. Fil rouge : vendredi 10 avril 2026, après la clôture de la caisse. Le rapprochement bancaire n'a pas de template dans ce module : vous le tenez dans un classeur simple, Rapprochement-banque_2026-04.xlsx.",
    steps: [
      {
        title: 'Rassembler les sources',
        actions: [
          "Relevé de la Banque du Lac Kivu (compte USD) arrêté au 10/04, avec son solde.",
          "Livre de banque : toutes les opérations enregistrées par la comptabilité (virements, chèques émis, frais).",
          "Livre de caisse d'avril : les lignes REA de réapprovisionnement.",
          "Souches de chèques et ordres de virement de la semaine.",
        ],
      },
      {
        title: 'Respecter la séparation des tâches',
        actions: [
          "Préparez le rapprochement : vous, Finance Officer, qui ne passez pas les paiements bancaires.",
          "Faites valider et signer par Grace M., qui n'a pas préparé.",
          "Fixez l'heure : vendredi 15 h, après la clôture de la caisse.",
        ],
      },
    ],
    example: {
      title: 'En-tête du classeur « Rapprochement-banque_2026-04.xlsx »',
      lines: [
        "Onglet « Pointage » — colonnes : Date | Libellé relevé | Débit | Crédit | Au livre de banque | Au livre de caisse | Pointage | Remarque",
        "Onglet « État » — lignes : solde du relevé, opérations en transit, solde ajusté du relevé, solde du livre, écritures manquantes, solde ajusté du livre, écart.",
      ],
    },
    result: "Tous les documents sont réunis, datés au même jour (10/04), et les rôles de préparation et de validation sont distincts.",
    pitfall: "Faire le rapprochement avec un relevé et un livre arrêtés à des dates différentes : les écarts qui en résultent sont artificiels et vous feront perdre une heure à chercher des erreurs inexistantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Pointer ligne à ligne : relevé, livre de banque, livre de caisse',
    intro: "Le pointage consiste à cocher chaque opération du relevé qui a son équivalent au livre, et inversement. Ce qui reste non coché des deux côtés constitue l'ensemble des écarts à expliquer.",
    steps: [
      {
        title: 'Pointer le relevé vers le livre',
        actions: [
          "Parcourez le relevé ligne par ligne : cochez ✔ chaque opération retrouvée au livre de banque, même date (à 1 ou 2 jours près), même montant, même nature.",
          "Notez dans « Remarque » les opérations absentes du livre.",
        ],
      },
      {
        title: 'Pointer le livre vers le relevé',
        actions: [
          "Parcourez maintenant le livre de banque : cochez chaque opération retrouvée sur le relevé.",
          "Les opérations non cochées sont des opérations en transit (chèque émis, non encore présenté).",
        ],
      },
      {
        title: "Faire le triple pointage des retraits pour la caisse",
        actions: [
          "Pour chaque retrait d'espèces, vérifiez trois lignes : débit du relevé = sortie du livre de banque = entrée REA du livre de caisse.",
          "Un retrait sans REA correspondant est un trou de caisse ou une erreur d'enregistrement.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Opération sur le relevé', 'Montant', 'Livre de banque', 'Livre de caisse', 'Pointage'],
      rows: [
        ['08/04', 'Retrait espèces chèque n° 0457', '−1 000,00', '✔ sortie 1 000', '✔ REA-002 entrée 1 000', 'Pointé (triple)'],
        ['09/04', 'Frais de tenue de compte et commissions', '−48,00', '✗ absent', '—', 'À enregistrer'],
        ['10/04', 'Virement Kivu Bâtir — acompte latrines lot 2 (FKB-031)', '−14 000,00', '✔ sortie 14 000', '—', 'Pointé'],
        ['08/04', 'Chèque n° 0458 émis — absent du relevé', '350,00', '✔ sortie 350', '—', 'En transit'],
      ],
    },
    result: "Chaque ligne du relevé et du livre est soit cochée, soit classée dans une liste courte d'écarts : ici deux — 48 USD de frais non enregistrés et un chèque de 350 USD en transit.",
    tip: "Pointez avec deux couleurs : une pour le relevé, une pour le livre. Une ligne sans couleur est un écart à expliquer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: "Construire l'état de rapprochement et vérifier qu'il s'équilibre",
    intro: "L'état de rapprochement amène le relevé et le livre au même solde ajusté. S'ils n'y arrivent pas, il reste un écart non expliqué et le rapprochement n'est pas terminé.",
    steps: [
      {
        title: "Ajuster le solde du relevé",
        actions: [
          "Partez du solde du relevé à la date.",
          "Retirez les chèques et virements émis non encore débités (opérations en transit).",
          "Ajoutez les versements enregistrés au livre mais non encore crédités par la banque (dépôts en transit).",
        ],
      },
      {
        title: 'Ajuster le solde du livre',
        actions: [
          "Partez du solde du livre de banque à la date.",
          "Retirez ou ajoutez les opérations du relevé absentes du livre : frais bancaires, intérêts, virements reçus non encore enregistrés.",
        ],
      },
      {
        title: 'Comparer',
        actions: [
          "Écart = solde ajusté du relevé − solde ajusté du livre. Attendu : 0,00.",
          "Dans Excel, une cellule « Écart » avec =B8-B14 et une mise en forme rouge si ≠ 0.",
        ],
      },
    ],
    example: {
      title: 'État de rapprochement bancaire au 10/04/2026 — compte USD',
      lines: [
        "Solde du relevé bancaire au 10/04 .................................. 84 320,00",
        "− Chèque n° 0458 émis le 08/04, non encore débité ................ − 350,00",
        "+ Dépôts en transit ............................................... 0,00",
        "= Solde bancaire ajusté ........................................... 83 970,00",
        "Solde du livre de banque au 10/04 (avant ajustement) ............ 84 018,00",
        "− Frais bancaires du 09/04 non enregistrés ....................... − 48,00",
        "= Solde du livre ajusté ........................................... 83 970,00",
        "Écart restant ..................................................... 0,00 ✔",
      ],
    },
    result: "Les deux soldes ajustés sont égaux à 83 970,00 USD et l'écart est de 0,00 : le rapprochement s'équilibre, chaque différence est expliquée.",
    pitfall: "Ajouter une ligne « divers » ou « ajustement » pour faire tomber l'écart à zéro. Un rapprochement qui colle artificiellement, sans explication, masque le problème au lieu de le révéler et n'a aucune valeur de contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Expliquer et régulariser chaque écart — jamais « ajuster »',
    intro: "Chaque écart identifié reçoit une cause, une action et un délai. Il existe cinq familles d'écarts ; seule la première disparaît toute seule.",
    steps: [
      {
        title: 'Classer chaque écart',
        actions: [
          "Décalage de délai : chèque émis non présenté, virement en cours.",
          "Frais ou intérêts bancaires non encore enregistrés.",
          "Erreur d'enregistrement au livre (montant, date, compte).",
          "Erreur de la banque : montant débité différent de celui ordonné.",
          "Opération non reconnue : débit que personne n'a ordonné.",
        ],
      },
      {
        title: "Appliquer l'action et le délai",
        actions: [
          "Passez les frais au livre de banque le jour même, avec la pièce du relevé.",
          "Suivez les chèques en transit sur la liste des éléments en suspens ; au-delà de 30 jours, investiguez.",
          "Opération non reconnue : écrivez à la banque dans les 24 heures, informez Grace M. et Mireille T., conservez le relevé en preuve.",
        ],
      },
    ],
    table: {
      columns: ['Type d\'écart', 'Exemple du 10/04', 'Action', 'Délai'],
      rows: [
        ['Décalage de délai', 'Chèque n° 0458, 350 USD', 'Garder en suspens, vérifier à la prochaine semaine', 'Contrôle à J+7'],
        ['Frais bancaires', '48 USD (tenue de compte 18 + commissions 30)', 'Enregistrer au livre de banque avec le relevé en pièce', 'Le jour même'],
        ['Erreur d\'enregistrement', 'Aucune cette semaine', 'Ligne de régularisation, jamais d\'effacement', 'Dès la découverte'],
        ['Erreur de la banque', 'Aucune cette semaine', 'Réclamation écrite avec preuve', '5 jours'],
        ['Opération non reconnue', 'Aucune cette semaine', 'Blocage, courrier banque, alerte Grace M. et Mireille T.', '24 heures'],
      ],
    },
    result: "Chaque écart a une cause établie, une action décidée et un responsable ; aucun écart n'est dissimulé dans un compte d'attente.",
    pitfall: "Considérer un écart de 48 USD comme « trop petit pour s'en occuper ». Les petits écarts non expliqués masquent les gros, et un compte bancaire non rapproché est le premier endroit où une fraude s'installe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Valider, signer, archiver et suivre les éléments en suspens',
    intro: "Le rapprochement n'est terminé que lorsqu'il est signé par quelqu'un qui ne l'a pas préparé, classé avec ses preuves, et que les éléments en suspens sont reportés à la semaine suivante.",
    steps: [
      {
        title: 'Faire valider et archiver',
        actions: [
          "Signez comme préparateur, datez ; Grace M. signe comme valideur et vérifie au moins un pointage au hasard.",
          "Classez le relevé, l'état et le pointage dans 03_Tresorerie > Banque > 2026 > Rapprochements, fichier S15_2026-04-10.pdf.",
        ],
      },
      {
        title: 'Reporter les éléments en suspens',
        actions: [
          "Dans un onglet « En suspens », listez chaque élément non soldé : référence, date, montant, âge en jours.",
          "À la semaine suivante, le chèque n° 0458 doit avoir disparu de la liste : vérifiez qu'il est présenté.",
          "Tout élément de plus de 30 jours est escaladé à Grace M.",
        ],
      },
    ],
    example: {
      title: 'Onglet « En suspens » après le rapprochement du 10/04',
      lines: [
        "Chèque n° 0458 | émis le 08/04/2026 | 350,00 USD | âge : 2 jours | à vérifier le 17/04",
        "Signatures : préparé par le Finance Officer, 10/04/2026 — validé par Grace M., 10/04/2026.",
      ],
    },
    result: "Un état de rapprochement signé, classé avec ses preuves, et une liste d'éléments en suspens courte, datée, suivie chaque semaine.",
    tip: "Un rapprochement hebdomadaire de 30 minutes évite un rapprochement mensuel de trois heures. La régularité fait gagner plus de temps que la compétence.",
  },

  // ─────────────── PROCÉDURE 6 — Clôturer le mois ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Arrêter le livre et procéder au comptage de clôture du mois',
    intro: "Le dernier jour ouvré, la clôture de caisse est un comptage contradictoire renforcé : le solde compté devient le solde d'ouverture du mois suivant. Fil rouge : jeudi 30 avril 2026.",
    steps: [
      {
        title: 'Arrêter le livre',
        actions: [
          "Saisissez toutes les pièces du mois dans « Livre de caisse » ; vérifiez qu'aucune pièce ne reste dans le coffre sans ligne.",
          "Tirez un trait sous la dernière ligne et signez-le avec la date et l'heure.",
          "Lisez le solde théorique de clôture en colonne F de la dernière ligne : 1 400 USD.",
        ],
      },
      {
        title: 'Compter en présence de trois personnes',
        actions: [
          "Billetage complet avec Esther N., Grace M. et vous.",
          "Remplissez la ligne du 30/04 dans « Rapprochement quotidien » : comptage 1 400, écart 0, statut OK.",
          "Établissez le procès-verbal de comptage de clôture, signé par les trois personnes.",
        ],
      },
      {
        title: 'Faire le comptage inopiné du mois',
        actions: [
          "Vérifiez dans votre planning que le comptage inopiné du mois a eu lieu (ici le 21/04, par Grace M.).",
          "Sinon, il est obligatoire avant de signer la clôture.",
        ],
      },
    ],
    example: {
      title: 'Procès-verbal de comptage de clôture — caisse principale de Goma',
      lines: [
        "Date : 30/04/2026, 16 h 45. Présents : Esther N., Grace M., Finance Officer.",
        "Billetage : 8 × 100 + 8 × 50 + 9 × 20 + 2 × 10 = 800 + 400 + 180 + 20 = 1 400,00 USD.",
        "Solde théorique du livre : 1 400,00 USD. Écart : 0,00. Statut : OK. Signatures : trois.",
      ],
    },
    result: "Un comptage de clôture contradictoire égal au solde théorique, avec procès-verbal signé : ce montant devient le solde d'ouverture de mai.",
    pitfall: "Décider de « clôturer au 28 pour avoir fini avant le week-end ». Un mois s'arrête au dernier jour ouvré ; ce qui est saisi après la clôture ne se rapproche plus de rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Construire la synthèse mensuelle de la caisse',
    intro: "La description du template mentionne une synthèse mensuelle consolidée. Le fichier fourni ne contient pas cet onglet : vous l'ajoutez vous-même, en huit lignes de formules, qui lisent les deux onglets existants sans les modifier.",
    steps: [
      {
        title: 'Créer l\'onglet « Synthèse mensuelle »',
        actions: [
          "Clic droit sur un onglet > Insérer une feuille, nommez-la « Synthèse mensuelle ». Colonne A : libellés ; colonne B : formules.",
          "B2 — Solde d'ouverture : ='Livre de caisse'!D5.",
          "B3 — Total des entrées du mois (hors ouverture) : =SUM('Livre de caisse'!D6:D200) (français : =SOMME(…)).",
          "B4 — Total des sorties : =SUM('Livre de caisse'!E5:E200).",
          "B5 — Solde théorique de clôture : =B2+B3-B4 ; vérifiez qu'il est égal à la dernière cellule de la colonne F.",
        ],
      },
      {
        title: 'Ajouter les contrôles',
        actions: [
          "B6 — Comptage physique de clôture : ='Rapprochement quotidien'!C26 (la ligne du 30/04).",
          "B7 — Écart de clôture : =B6-B5.",
          "B8 — Jours rapprochés : =COUNTA('Rapprochement quotidien'!A5:A200) (français : =NBVAL(…)) ; comparez aux 22 jours ouvrés.",
          "B9 — Jours « À INVESTIGUER » : =COUNTIF('Rapprochement quotidien'!E5:E200,\"À INVESTIGUER\") (français : =NB.SI(…;\"À INVESTIGUER\")).",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Formule', 'Résultat avril 2026'],
      rows: [
        ["Solde d'ouverture", "='Livre de caisse'!D5", '1 500,00 USD'],
        ['Total des entrées (4 réapprovisionnements = 4 600 + reversements = 21)', '=SUM(D6:D200)', '4 621,00 USD'],
        ['Total des sorties', '=SUM(E5:E200)', '4 721,00 USD'],
        ['Solde théorique de clôture', '=B2+B3-B4', '1 400,00 USD'],
        ['Comptage physique de clôture', 'Ligne du 30/04', '1 400,00 USD'],
        ['Écart de clôture', '=B6-B5', '0,00 USD'],
        ['Jours rapprochés / jours ouvrés', 'COUNTA', '22 / 22'],
        ['Jours en statut À INVESTIGUER à la clôture', 'COUNTIF', '0 (un écart de 3 USD documenté le 03/04, régularisé)'],
      ],
    },
    result: "Une page de synthèse de huit lignes qui prouve en un coup d'œil que le mois est bouclé : 22 jours sur 22 rapprochés, solde compté égal au solde théorique.",
    pitfall: "Oublier que le statut redevient « OK » après régularisation. Comptez aussi les notes d'écart classées dans le mois : c'est elles, pas le statut, qui prouvent l'historique des écarts (ici : 1 note, le 03/04).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Faire le rapprochement bancaire mensuel et rapprocher caisse et banque',
    intro: "Le rapprochement hebdomadaire a traité le courant ; le mensuel arrête les comptes au dernier jour et vérifie la cohérence entre les trois sources. Fil rouge : état au 30 avril 2026, compte USD.",
    steps: [
      {
        title: "Refaire l'état de rapprochement au dernier jour",
        actions: [
          "Reprenez le classeur de la procédure 5 et arrêtez-le au 30/04, avec le relevé de fin de mois.",
          "Reportez la liste « En suspens » : chaque chèque en transit doit avoir un âge et une explication.",
        ],
      },
      {
        title: 'Rapprocher les retraits de la banque et les REA de la caisse',
        actions: [
          "Additionnez les retraits d'espèces du relevé d'avril.",
          "Additionnez les lignes REA du livre de caisse.",
          "Les deux totaux doivent être égaux : sinon, un retrait n'est pas arrivé en caisse ou un REA n'a pas de contrepartie bancaire.",
        ],
      },
    ],
    example: {
      title: 'Rapprochement bancaire mensuel au 30/04/2026',
      lines: [
        "Solde du relevé au 30/04 : 61 905,00 USD − chèque n° 0466 émis le 29/04, non débité : 805,00 USD = solde ajusté 61 100,00 USD.",
        "Solde du livre de banque au 30/04 après enregistrement des frais : 61 100,00 USD. Écart : 0,00 ✔",
        "Retraits du relevé : 08/04 1 000 (chèque 0457) + 15/04 1 200 (0462) + 22/04 1 100 (0465) + 29/04 1 300 (0467) = 4 600 USD.",
        "Lignes REA du livre de caisse : 1 000 + 1 200 + 1 100 + 1 300 = 4 600 USD ✔ — retraits = réapprovisionnements.",
      ],
    },
    result: "Un état de rapprochement mensuel à écart nul, et une égalité des retraits bancaires et des réapprovisionnements de caisse sur le mois.",
    tip: "Ces soldes de caisse et de banque alimentent la projection de trésorerie à 30 jours vue au module 01 : faites-les vérifier avant de les utiliser pour décider d'un engagement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Passer en revue les avances ouvertes et les éléments anciens',
    intro: "La clôture mensuelle est le moment de vérifier que le registre des avances est propre : une avance échue qui n'a pas été relancée à la clôture est une faute de suivi, pas un événement.",
    steps: [
      {
        title: 'Classer les avances par ancienneté',
        actions: [
          "Reprenez le registre au 30/04 : ne gardez que les avances non soldées.",
          "Calculez l'âge de chacune depuis l'octroi, et comparez à l'échéance.",
          "Appliquez la règle : en retard = relance ; 30 jours après l'octroi = dette.",
        ],
      },
      {
        title: 'Joindre la revue au dossier',
        actions: [
          "Imprimez ou exportez le registre au 30/04, signé par vous et par Grace M.",
          "Listez aussi les chèques en transit de plus de 15 jours et les éléments en suspens du rapprochement bancaire.",
        ],
      },
    ],
    table: {
      columns: ['N° avance', 'Bénéficiaire', 'Montant', 'Octroi', 'Âge', 'Statut au 30/04'],
      rows: [
        ['AV-013', 'Samuel R.', '180 USD', '30/03/2026', '31 jours', 'DETTE — échéancier 3 × 60 USD'],
        ['AV-017', 'Joël B.', '300 USD', '24/04/2026', '6 jours', 'Ouverte — échéance 08/05/2026'],
        ['Total non justifié', '', '480 USD', '', '', '1 dette + 1 avance dans les délais'],
      ],
    },
    result: "Un registre signé qui montre qu'aucune avance n'a dépassé 30 jours sans décision, et un total d'avances non soldées (480 USD) rapproché du solde du compte d'attente comptable.",
    pitfall: "Clôturer le mois avec une avance de plus de 30 jours toujours qualifiée d'« ouverte ». Les états financiers surestiment alors les dépenses justifiées, et l'audit le verra dans les échantillons.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Signer le dossier de clôture, le transmettre et ouvrir le mois suivant',
    intro: "Le dossier de clôture est le livrable que Grace M. et un auditeur ouvrent en premier. Il doit se suffire à lui-même. Délai de transmission : au plus tard le 5 du mois suivant.",
    steps: [
      {
        title: 'Constituer le dossier',
        actions: [
          "Page 1 : onglet « Synthèse mensuelle » imprimé et signé.",
          "Pages suivantes : procès-verbal de comptage de clôture, notes d'écart du mois, état de rapprochement bancaire mensuel, registre des avances au 30/04.",
          "Faites signer par Esther N. (caissière), vous (contrôleur) et Grace M. (titulaire).",
        ],
      },
      {
        title: 'Transmettre et archiver',
        actions: [
          "Envoyez le dossier à Grace M., avec copie à Mireille T. si une dette d'avance ou un écart supérieur à 20 USD existe.",
          "Classez l'original dans 03_Tresorerie > Caisse_Goma > 2026 > 04_Avril ; verrouillez le fichier en lecture seule.",
        ],
      },
      {
        title: 'Ouvrir mai',
        actions: [
          "Enregistrez une copie du classeur sous Caisse-Goma_2026-05.xlsx et effacez A5:E de « Livre de caisse », A5:A et C5:C de « Rapprochement quotidien ».",
          "Ligne 5 : OUV-001, solde d'ouverture 1 400 = comptage du 30/04 signé.",
        ],
      },
    ],
    example: {
      title: 'Bordereau de transmission du dossier de clôture — avril 2026',
      lines: [
        "À : Grace M. — Copie : Mireille T. (avance AV-013 constatée en dette).",
        "Pièces jointes : synthèse mensuelle ; PV de comptage du 30/04 (1 400 USD) ; 1 note d'écart (03/04, 3 USD, régularisé) ; rapprochement bancaire au 30/04 (écart 0) ; registre des avances au 30/04.",
        "Envoyé le 04/05/2026 — accusé de réception de Grace M. le 04/05/2026.",
      ],
    },
    result: "Dossier signé et transmis avant le 5 du mois suivant, mai ouvert sur 1 400 USD, fichier d'avril verrouillé.",
    pitfall: "Rouvrir un mois clôturé « pour une petite correction ». Passez la correction dans le mois courant, par une ligne REG qui renvoie à la pièce d'origine, et signalez-la dans la synthèse suivante.",
  },

  // ─────────────── PROCÉDURE 7 — Investiguer un écart constaté ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Cadrer l\'investigation : figer les faits, protéger les preuves, ne rien conclure',
    intro: "Quand un écart n'a pas été expliqué le jour même, il faut le reprendre avec méthode. Fil rouge : le 2 avril, en reprenant le dossier de votre prédécesseur, vous trouvez le rapprochement de février — le seul de ce mois, fait à la clôture — avec un écart de −25 USD, sans note explicative. Le livre de février compte 29 lignes. Esther N. ne se souvient précisément que des deux dernières semaines.",
    steps: [
      {
        title: 'Figer et protéger',
        actions: [
          "Copiez le livre de février, le rapprochement et les pièces en lecture seule dans un dossier « Investigation_Fév2026 ».",
          "Rassemblez le classeur physique de février : aucune pièce ne doit quitter ce classeur.",
          "Informez Grace M. par écrit que vous ouvrez une investigation sur −25 USD et notez la date.",
        ],
      },
      {
        title: "Fixer la méthode et les règles",
        actions: [
          "Prévoyez une demi-journée, pas davantage : une investigation sans limite de temps s'éternise.",
          "N'accusez personne et ne partagez pas d'hypothèse avant d'avoir des preuves.",
          "Notez chaque vérification, même négative.",
        ],
      },
    ],
    example: {
      title: 'Fiche de cadrage — écart de février 2026',
      lines: [
        "Caisse principale de Goma — rapprochement du 28/02 : écart −25 USD (théorique supérieur au comptage), sans note.",
        "Source disponible : livre de février (29 lignes), classeur de pièces, rapprochement du 31/01 (comptage 1 800 USD, signé).",
        "Limites connues : pas de rapprochement quotidien en février ; mémoire d'Esther N. limitée aux deux dernières semaines.",
        "Durée prévue : une demi-journée. Information : Grace M. avisée le 02/04.",
      ],
    },
    result: "Les preuves sont figées, la période et les limites connues sont écrites, et la hiérarchie est informée avant de commencer.",
    pitfall: "Interroger la caissière en début d'investigation avec une hypothèse déjà faite. Vous obtenez une défense, pas des faits, et vous perdez la confiance dont vous aurez besoin pour que la routine change.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: "Isoler la période et reconstituer la chronologie",
    intro: "Un écart constaté lors d'un rapprochement mensuel ne s'est pas nécessairement produit ce jour-là : il a pu se constituer n'importe quand dans les 30 jours précédents. Sans rapprochements quotidiens antérieurs, vous ne pouvez pas savoir quel jour — c'est ce que la routine aurait dû empêcher.",
    steps: [
      {
        title: 'Définir la fenêtre',
        actions: [
          "Dernière date où le comptage était confirmé et signé : 31/01/2026, 1 800 USD.",
          "Première date où l'écart est constaté : 28/02/2026.",
          "La fenêtre de l'investigation est donc du 01/02 au 28/02 : 20 jours ouvrés, 29 lignes.",
        ],
      },
      {
        title: 'Reconstituer le solde jour par jour',
        actions: [
          "Dans un tableau, reportez pour chaque jour : solde d'ouverture, entrées, sorties, solde théorique de fin de journée.",
          "Notez qui avait accès à la caisse chaque jour (registre d'accès, présence, congés).",
          "Repérez les jours chargés ou les remplacements : c'est là que les écarts naissent.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la chronologie — février 2026',
      lines: [
        "01/02 : ouverture 1 800 (comptage signé du 31/01) — pas de rapprochement quotidien dans le dossier.",
        "09/02 : Esther N. en congé, Grace M. tient la caisse — 3 lignes.",
        "12/02 : per diem de 12 agents, ligne DEP-0214 de 60 USD — jour le plus chargé du mois (7 lignes).",
        "28/02 : théorique 1 625 USD, comptage 1 600 USD, écart −25 USD.",
      ],
    },
    result: "Une fenêtre bornée (01/02 – 28/02), un tableau jour par jour et une liste des personnes présentes chaque jour.",
    tip: "Repérez d'abord les jours où le volume ou le nombre d'intervenants est le plus élevé : c'est statistiquement là que se trouvent les erreurs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Reprendre les 29 lignes une à une et les confronter aux pièces',
    intro: "C'est le cœur de l'investigation : chaque ligne du livre est confrontée à sa pièce physique. Vous cherchez les écarts de montant, les pièces manquantes et les anomalies de forme.",
    steps: [
      {
        title: 'Construire le tableau de revue',
        actions: [
          "Colonnes : N°, date, référence, libellé, montant au livre, pièce trouvée (oui/non), montant de la pièce, anomalie.",
          "Faites la revue avec Esther N. présente, mais ne la laissez pas conduire la recherche.",
        ],
      },
      {
        title: 'Noter explicitement chaque anomalie',
        actions: [
          "Chaque ligne sans pièce retrouvée.",
          "Chaque montant arrondi de façon suspecte (60, 100, 250).",
          "Chaque avance encore ouverte au-delà du délai normal.",
          "Chaque pièce dont le montant diffère de celui du livre, et le sens de la différence.",
        ],
      },
      {
        title: 'Recalculer le livre',
        actions: [
          "Refaites les additions du livre avec une calculatrice, indépendamment des formules Excel.",
          "Contrôlez que les formules de la colonne F n'ont pas été écrasées par des valeurs tapées.",
        ],
      },
    ],
    example: {
      title: 'Résultats de la revue — 29 lignes de février',
      lines: [
        "27 lignes conformes : pièce retrouvée, montant identique.",
        "DEP-0214 (12/02, per diem 12 agents) : livre 60 USD, liste d'émargement signée = 78 USD → sortie sous-enregistrée de 18 USD, ce qui explique 18 USD de l'écart de −25 USD.",
        "DEP-0219 (17/02, fournitures 12 USD) : aucune pièce retrouvée → anomalie de justification, sans effet démontré sur l'écart.",
        "Formules de la colonne F intactes sur les 29 lignes.",
      ],
    },
    result: "Un tableau de revue complet : 27 lignes conformes, une erreur de saisie quantifiée à 18 USD et une pièce manquante de 12 USD.",
    pitfall: "S'arrêter à la première anomalie qui « explique » l'écart. Poursuivez la revue complète : une erreur retrouvée peut en masquer une autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Classer les hypothèses par probabilité et tester chacune',
    intro: "Documentez les hypothèses par ordre de probabilité, sans conclure sans preuve. Un écart de quelques dollars sur 29 lignes est statistiquement plus compatible avec une accumulation de petites erreurs qu'avec une fraude délibérée d'un montant rond. Convention : écart = comptage − théorique ; un écart négatif signifie qu'il manque de l'argent par rapport au livre.",
    steps: [
      {
        title: 'Tester chaque famille d\'hypothèses',
        actions: [
          "Lisez le tableau ci-dessous, du plus probable au moins probable.",
          "Pour chacune, appliquez le test et notez le résultat (confirmé, écarté, non testable).",
        ],
      },
      {
        title: 'Calculer le résiduel',
        actions: [
          "Résiduel = écart constaté − somme des erreurs établies par preuve.",
          "Février : −25 − (−18) = −7 USD restent inexpliqués.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse', 'Test', 'Sens de l\'écart', 'Résultat en février'],
      rows: [
        ['Erreur de saisie ou de lecture d\'une pièce', 'Recalculer chaque ligne contre sa pièce', 'Dans les deux sens', 'Confirmée : DEP-0214, 18 USD'],
        ['Chiffres transposés (54 saisi 45)', 'Écart divisible par 9 : chercher une ligne dont les chiffres sont inversés', 'Dans les deux sens', 'Écartée : 25 et 7 ne sont pas des multiples de 9'],
        ['Signe inversé (entrée notée en sortie)', 'Écart égal à 2 × le montant d\'une ligne', 'Dans les deux sens', 'Écartée : aucune ligne de 12,5 ni de 3,5 USD'],
        ['Sortie non enregistrée (bon oublié)', 'Chercher un bon ou une pièce sans ligne', 'Négatif', 'Non testable : aucun bon libre trouvé'],
        ['Double saisie d\'une entrée', 'Chercher deux lignes identiques', 'Négatif', 'Écartée'],
        ['Rendu de monnaie ou erreur de comptage', 'Petit montant, nombreuses petites transactions', 'Dans les deux sens', 'Plausible pour les 7 USD résiduels, non prouvable'],
        ['Prélèvement délibéré', 'Aucun test concluant sans preuve directe', 'Négatif', 'Aucune preuve ; ne pas conclure'],
      ],
    },
    result: "Un tableau des hypothèses testées avec leur résultat, et un résiduel chiffré : −7 USD inexpliqués sur −25 USD.",
    tip: "Un écart rond (50, 100) qui se répète chaque mois est plus inquiétant qu'un écart irrégulier de quelques dollars. Notez-le, sans accuser, et renforcez les contrôles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: "Écrire les limites de l'investigation et décider du traitement",
    intro: "Si l'origine exacte reste indéterminée après une revue exhaustive, dites-le clairement. C'est plus professionnel et plus honnête qu'un rapport qui invente une cause pour « clore le dossier ».",
    steps: [
      {
        title: "Séparer ce qui est établi de ce qui ne l'est pas",
        actions: [
          "Établi, avec preuve : DEP-0214 sous-enregistrée de 18 USD ; pièce DEP-0219 de 12 USD non retrouvée.",
          "Probable mais non prouvé : erreurs de rendu de monnaie sur les 29 lignes pour les 7 USD résiduels.",
          "Non établi : toute explication plus précise ou toute responsabilité individuelle.",
        ],
      },
      {
        title: "Décider du traitement comptable",
        actions: [
          "Erreur établie : régularisez dans le livre par une ligne REG de 18 USD, datée de la découverte, avec référence à DEP-0214.",
          "Résiduel de 7 USD (inférieur à 20 USD) : après approbation écrite de Grace M., enregistrez-le en « écart de caisse non expliqué », à la charge des fonds propres.",
          "Ne l'imputez jamais sur une ligne d'un projet bailleur sans accord du bailleur : c'est une charge non éligible.",
          "Pièce manquante DEP-0219 : demandez une attestation du bénéficiaire ; à défaut, la dépense est non éligible.",
        ],
      },
    ],
    example: {
      title: 'Traitement décidé — écart de février 2026',
      lines: [
        "Écart constaté : −25 USD = −18 USD (DEP-0214, établi) + −7 USD (non expliqué).",
        "REG de 18 USD au livre de mars, date de découverte 02/04 ; décision de Grace M. du 03/04 pour 7 USD en écart de caisse non expliqué sur fonds propres.",
        "DEP-0219 (12 USD) : attestation demandée le 03/04 ; à défaut, dépense inéligible.",
      ],
    },
    result: "Chaque dollar de l'écart a un statut écrit (établi, probable, non établi) et un traitement décidé par la personne habilitée.",
    pitfall: "Passer un écart non expliqué sur une ligne de projet bailleur « pour que ça passe ». Vous créez une dépense inéligible dans un rapport financier : si l'auditeur le découvre, c'est votre intégrité qui est mise en cause, pas 7 USD.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: "Corriger la pratique immédiatement et rédiger la note d'investigation",
    intro: "Corrigez la pratique sans attendre la fin de l'investigation. Puis rédigez la note à remettre à la hiérarchie : une page maximum, avec ce qui est établi, ce qui est incertain et les mesures correctives.",
    steps: [
      {
        title: 'Mettre en place les deux mesures correctives',
        actions: [
          "Mesure 1 : rapprochement quotidien avec le template, dès le lendemain, pour toutes les caisses.",
          "Mesure 2 : formation de la caissière à la routine (comptage contradictoire, enregistrement en temps réel, note d'écart du jour) ; comptage inopiné mensuel par la finance.",
          "Informez votre coordination par écrit que la routine défaillante a été identifiée et corrigée.",
        ],
      },
      {
        title: 'Rédiger la note en six rubriques',
        actions: [
          "Contexte (2 lignes) : écart, période, source.",
          "Démarche (3 lignes) : revue de 29 lignes, hypothèses testées.",
          "Établi : chiffres et preuves. Incertain : résiduel, limites. Mesures prises : les deux ci-dessus. Décision demandée : traitement du résiduel.",
          "Datez, signez, faites signer Grace M.",
        ],
      },
    ],
    example: {
      title: "Note d'investigation — écart de caisse de février 2026 (extrait)",
      lines: [
        "Contexte : rapprochement du 28/02, écart −25 USD, 29 lignes, aucun rapprochement quotidien en février.",
        "Établi : 18 USD s'expliquent par la sous-saisie de DEP-0214 (liste d'émargement = 78 USD, livre = 60). Une pièce de 12 USD (DEP-0219) est introuvable.",
        "Incertain : 7 USD restent sans cause démontrable ; l'hypothèse la plus probable est une accumulation d'erreurs de rendu de monnaie ; aucune preuve ne permet d'attribuer l'écart à une personne.",
        "Mesures : rapprochement quotidien depuis le 03/04 ; formation d'Esther N. le 03/04 ; comptage inopiné mensuel. Décision demandée : passage de 7 USD en écart non expliqué sur fonds propres.",
      ],
    },
    result: "Une note d'une page, honnête sur ses limites, qui permet à la hiérarchie de décider, et une routine corrigée avant la fin de l'enquête.",
    tip: "Gardez la note factuelle et chiffrée : une phrase comme « le caissier est suspect » n'y a pas sa place. Si vous soupçonnez une fraude, informez la hiérarchie séparément, selon la procédure d'alerte de l'organisation.",
  },

  // ─────────────── CAS COMPLET RÉSOLU ───────────────
  {
    type: 'case-study',
    title: "Cas complet résolu — Le comptage inopiné de l'antenne de Rutshuru (1/3)",
    scenario: "Mardi 14 avril 2026, 14 h. Grace M. vous demande de faire, sans prévenir, un comptage inopiné de l'antenne de Rutshuru (titulaire Amani L., plafond 500 USD, solde cible 400 USD, solde au 31/03 : 300 USD). Vous emportez le livre, le registre des avances et le classeur des pièces d'avril.",
    steps: [
      {
        title: 'Préparer et figer le livre',
        actions: [
          "Arrivez sans prévenir, demandez à Amani L. de suspendre tout mouvement et de vous remettre le livre.",
          "Tirez un trait sous la dernière ligne, notez l'heure (14 h 10) et faites signer Amani L.",
          "Lisez le solde théorique de la dernière ligne : 438,00 USD.",
        ],
        result: "Livre figé à 14 h 10 sur un solde théorique de 438,00 USD, sous le plafond de 500 USD.",
      },
      {
        title: 'Compter contradictoirement',
        actions: [
          "Faites le billetage avec Amani L., chacun comptant séparément.",
          "Écart = comptage − théorique = 396 − 438.",
        ],
        result: "Comptage physique de 396,00 USD (3 × 100 + 4 × 20 + 1 × 10 + 1 × 5 + 1 × 1) ; écart de −42,00 USD, statut À INVESTIGUER.",
      },
      {
        title: 'Inventorier le contenu de la caisse en plus des billets',
        actions: [
          "Fouillez la caisse : un bon de caisse n° 0045, signé, de 30 USD pour la réparation de la moto de l'antenne, daté du 11/04 et non enregistré au livre.",
          "Vérifiez auprès du garage : la réparation a bien eu lieu et a été payée 30 USD.",
        ],
        result: "Solde théorique corrigé = 438 − 30 = 408,00 USD ; écart résiduel = 396 − 408 = −12,00 USD.",
      },
    ],
    example: {
      title: 'Décomposition provisoire de l\'écart',
      lines: [
        "Solde théorique du livre (14 h 10) .......................... 438,00",
        "− Bon n° 0045 non enregistré (réparation moto) ........... − 30,00",
        "= Solde théorique corrigé ................................... 408,00",
        "Comptage physique ........................................... 396,00",
        "Écart résiduel ................................................ − 12,00 → À INVESTIGUER",
      ],
    },
  },
  {
    type: 'case-study',
    title: "Cas complet résolu — Le comptage inopiné de l'antenne de Rutshuru (2/3)",
    scenario: "Le comptage a expliqué 30 USD sur 42. Avant de rentrer, vous contrôlez les autres points de la politique : registre des avances, seuils de signature, sécurité.",
    steps: [
      {
        title: 'Contrôler le registre des avances',
        actions: [
          "Repérez l'avance AV-R-004 : 60 USD remis le 05/03 à Désiré M., animateur, pour un déplacement à Goma ; échéance 20/03 ; jamais justifiée.",
          "Calculez l'âge : du 05/03 au 14/04 = 40 jours, soit plus de 30 jours.",
        ],
        result: "AV-R-004 n'est plus une avance : c'est une dette de 60 USD de Désiré M. envers KAS, jamais relancée.",
      },
      {
        title: 'Rechercher les fractionnements',
        actions: [
          "Relisez les pièces du 9 avril : trois reçus de la Quincaillerie Rutshuru, de 95, 98 et 97 USD, soit 290 USD le même jour, pour de la tôle et des clous destinés au toit de l'antenne.",
          "Comparez au seuil : chaque reçu est inférieur à 100 USD, donc sans validation, alors que l'achat de 290 USD relève de la tranche de 101 à 500 USD (validation de Grace M.).",
          "Demandez par écrit une explication à Amani L. et la facture unique à la quincaillerie.",
        ],
        result: "Un fractionnement probable de 290 USD à signaler à Grace M. comme contournement possible du seuil : sans conclusion sur l'intention.",
      },
      {
        title: 'Contrôler la sécurité et le plafond',
        actions: [
          "Plafond : 438 USD pour un plafond de 500 USD, conforme.",
          "Contenant : une boîte à cadenas posée sur une étagère, la clé dans le tiroir du bureau.",
          "Exigez le jour même la fixation de la caisse au mur et le retrait de la clé du tiroir.",
        ],
        result: "Un contenant non conforme à la politique, avec une action immédiate demandée.",
      },
    ],
    tip: "Un contrôle inopiné ne se limite pas au comptage : profitez-en pour contrôler les avances, les seuils et la sécurité — c'est là que se cachent les écarts qui ne se voient pas en espèces.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu — Le comptage inopiné de l'antenne de Rutshuru (3/3)",
    scenario: "Il reste à régulariser le livre, traiter le résiduel de −12 USD avec méthode, corriger la pratique et rendre compte. Vous revoyez les lignes d'avril depuis le comptage du 31/03.",
    steps: [
      {
        title: 'Régulariser et relancer l\'investigation sur le résiduel',
        actions: [
          "Ajoutez la ligne REG-R-001 de 30 USD (sortie) : « Régularisation — bon de caisse n° 0045 non enregistré, réparation moto, 11/04 ». Théorique corrigé : 408 USD.",
          "Reprenez les 26 lignes d'avril contre leurs pièces : DEP-R-027 est saisie 22 USD alors que la pièce indique 28 USD (6 USD sous-enregistrés).",
          "Ajoutez la ligne REG-R-002 de 6 USD (sortie). Théorique corrigé : 402 USD ; résiduel : 396 − 402 = −6 USD.",
        ],
        result: "L'écart de −42 USD est décomposé : −30 (bon non enregistré), −6 (erreur de saisie), −6 non expliqué.",
      },
      {
        title: 'Décider du traitement du résiduel de −6 USD',
        actions: [
          "6 USD est supérieur à la tolérance de 1 USD et inférieur au seuil de 20 USD : pas d'information de Mireille T. sous 24 h.",
          "Rédigez la note d'écart signée par Amani L. et vous ; Grace M. approuve par écrit, le 15/04, le passage de 6 USD en écart de caisse non expliqué à la charge des fonds propres.",
          "Passez ensuite REG-R-003 de 6 USD : le livre (396) rejoint le comptage et le statut passe à OK.",
        ],
        result: "Un résiduel de 6 USD, sans cause démontrable sur 26 lignes, traité sur fonds propres avec l'accord écrit de Grace M.",
      },
      {
        title: 'Corriger la pratique et rendre compte',
        actions: [
          "Rapprochement quotidien à Rutshuru dès le 15/04 : Amani L. envoie chaque soir la photo du billetage et du rapprochement ; vous les contrôlez le matin.",
          "AV-R-004 constatée en dette (60 USD) : courrier à Désiré M., échéancier 3 × 20 USD par retenue sur salaire avec son accord écrit.",
          "Fractionnement de 290 USD : dossier remis à Grace M. ; règle rappelée aux deux antennes ; facture unique exigée.",
          "Caisse fixée au mur, clé retirée du tiroir ; comptage inopiné mensuel programmé, jours variables.",
        ],
        result: "Quatre mesures correctives écrites, datées, avec échéance, remises à Grace M. et signalées à Mireille T. dans le rapport mensuel.",
      },
    ],
    table: {
      columns: ['Élément', 'Montant', 'Statut', 'Traitement'],
      rows: [
        ['Bon de caisse n° 0045 non enregistré', '−30,00 USD', 'Établi (pièce + garage)', 'REG-R-001 dans le livre'],
        ['DEP-R-027 saisie 22 au lieu de 28', '−6,00 USD', 'Établi (pièce)', 'REG-R-002 dans le livre'],
        ['Résiduel sans cause démontrable', '−6,00 USD', 'Non expliqué', 'REG-R-003 après accord écrit de Grace M. ; fonds propres'],
        ['Écart total constaté', '−42,00 USD', 'Comptage inopiné du 14/04', 'Soldé : livre = comptage = 396,00 USD'],
      ],
    },
    result: "Livrable final du cas : livre régularisé (396 USD = comptage), note d'écart signée, avance AV-R-004 constatée en dette, fractionnement signalé, caisse sécurisée, rapprochement quotidien à distance mis en place — chaque dollar de l'écart a un statut et un traitement.",
  },

  // ─────────────── EXERCICES ───────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Reconstituer le livre de caisse de la base de N'Djaména",
    instructions: "Contexte : vous êtes Finance Officer sur la base de N'Djaména (Tchad) de l'ONG fictive « Sahel Entraide Internationale », en remplacement d'un collègue parti en urgence sans passation. Le caissier Moussa D. tient la caisse. Le rapprochement n'a jamais été fait quotidiennement depuis huit mois, seulement à la clôture mensuelle ; celui du mois précédent montre un écart de 40 USD sans note. Vous reconstituez une semaine de caisse avec le template livre-de-caisse-rapprochement-quotidien.xlsx, en USD.",
    steps: [
      { title: 'Préparer le classeur', body: "Enregistrez le template sous Caisse-Ndjamena_2026-03.xlsx ; effacez A5:E8 du livre et A5:A8, C5:C8 du rapprochement (procédure 2, étape 1)." },
      { title: "Saisir le solde d'ouverture", body: "Ligne 5 : 2026-03-02 | OUV-001 | Solde d'ouverture du mois | 1000 | 0 | USD." },
      { title: 'Saisir les 9 autres transactions', body: "Lignes 6 à 14, une ligne par transaction du tableau ci-dessous, dans l'ordre. Copiez la formule de la colonne F vers le bas." },
      { title: 'Remplir le rapprochement', body: "Pour chaque jour du 02 au 06 mars, créez la ligne du rapprochement ; B pointe la dernière ligne du jour ; saisissez les comptages : 790, 505, 492, 952, 792. Étendez la mise en forme conditionnelle." },
      { title: 'Lire les statuts', body: "Vérifiez que les quatre premiers jours affichent « OK » et que le 6 mars affiche « À INVESTIGUER » avec un écart de −40." },
    ],
    table: {
      columns: ['Date', 'Référence', 'Libellé', 'Entrée', 'Sortie'],
      rows: [
        ['2026-03-02', 'AV-001', 'Avance à justifier — carburant véhicule de base', '0', '150'],
        ['2026-03-02', 'DEP-001', 'Fournitures de bureau', '0', '60'],
        ['2026-03-03', 'DEP-002', 'Réparation de pneus', '0', '85'],
        ['2026-03-03', 'AV-002', 'Avance à justifier — mission de supervision à Mongo', '0', '200'],
        ['2026-03-04', 'DEP-003', 'Eau et café de réunion', '0', '25'],
        ['2026-03-04', 'REC-001', 'Reversement avance non utilisée AV-001', '12', '0'],
        ['2026-03-05', 'REA-001', 'Réapprovisionnement caisse — retrait banque', '500', '0'],
        ['2026-03-05', 'DEP-004', 'Recharges téléphoniques', '0', '40'],
        ['2026-03-06', 'DEP-005', 'Fournitures terrain', '0', '75'],
        ['2026-03-06', 'DEP-006', 'Per diem 3 agents', '0', '45'],
      ],
    },
    tip: "Calculez d'abord les soldes théoriques sur papier (790, 505, 492, 952, 832 en fin de journée) : vous saurez ce que le fichier doit afficher.",
    deliverable: "Le fichier Caisse-Ndjamena_2026-03.xlsx complété : les 10 lignes du livre, les 5 lignes du rapprochement quotidien, et un écart de −40 USD affichant « À INVESTIGUER » le 6 mars.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Rédiger la fiche d'avance complète (AV-002, Mongo)",
    instructions: "L'avance AV-002 de 200 USD a été remise à un agent de la base pour une mission de supervision à Mongo, du 3 au 5 mars 2026. Date limite de justification : 2026-03-18. L'agent revient le 9 mars avec les justificatifs ci-dessous. Vous remplissez fiche-avance-justification-remboursement.docx de bout en bout.",
    steps: [
      { title: 'Section 1 — Demande', body: "Demandeur (nom, fonction), Montant demandé et devise, Objet de l'avance (préfixé AV-002), Délai de justification attendu." },
      { title: 'Section 2 — Justification', body: "Trois lignes : 2026-03-04, hébergement 2 nuits à 45 USD, reçu hôtel H-114, 90,00 — 2026-03-05, carburant du véhicule de mission, reçu station S-2208, 70,00 — 2026-03-05, repas et boissons de l'équipe pendant 3 jours, liste de frais M-03 signée, 36,00." },
      { title: 'Section 3 — Solde', body: "Calculez le montant justifié (total pièces) et le solde à rembourser ou à recevoir ; précisez le sens." },
      { title: 'Section 4 — Validation et mouvement de caisse', body: "Faites apparaître les deux signatures et la date de clôture (2026-03-09). Écrivez la ligne du livre de caisse qui correspond à la clôture." },
    ],
    tip: "Vérifiez que l'approbation de la finance est datée AVANT la sortie du 3 mars, et que le titulaire est celui qui a reçu les 200 USD.",
    deliverable: "La fiche d'avance complète (sections 1 à 4) et la ligne du livre de clôture.",
  },
  {
    type: 'exercise',
    title: "Exercice 3 — Rédiger la note d'investigation de l'écart de 40 USD",
    instructions: "À partir de l'exercice 1 et du contexte de N'Djaména (écart de 40 USD sur 34 transactions et 8 mois d'activité, aucun rapprochement quotidien, caissier qui ne se souvient d'aucune transaction de plus de trois semaines), rédigez en une demi-page la note à remettre à votre coordinateur pays.",
    steps: [
      { title: 'Isoler la période', body: "Écrivez pourquoi l'écart a pu se produire n'importe quand dans les 30 jours précédents, et ce que cela implique." },
      { title: 'Planifier la revue', body: "Décrivez comment vous reprendrez les 34 transactions une à une avec le caissier, contre les pièces classées, et ce que vous noterez (pièces manquantes, montants arrondis, avances ouvertes)." },
      { title: 'Classer les hypothèses', body: "Listez trois hypothèses par ordre de probabilité (erreurs de rendu de monnaie ou d'enregistrement, sortie non enregistrée, prélèvement) sans conclure." },
      { title: 'Écrire les limites', body: "Dites noir sur blanc ce que vous pouvez établir, ce qui reste incertain, et que l'origine peut rester indéterminée." },
      { title: 'Décrire les 2 actions correctives', body: "Rapprochement quotidien dès le lendemain avec le template, formation du caissier à la procédure ; informez la coordination par écrit." },
    ],
    pitfall: "Écrire « il est probable que le caissier ait pris cet argent ». Une note qui accuse sans preuve vous expose et affaiblit l'investigation.",
    deliverable: "La note d'investigation, une page maximum : établi, incertain, 2 actions correctives.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 3)',
    items: [
      "Ex. 1 — Les 10 lignes sont saisies, F5 = 1 000 et F14 = 832, sans formule écrasée.",
      "Ex. 1 — Les comptages du 2 au 5 mars donnent un écart de 0 et le statut « OK » ; le 6 mars donne 792 − 832 = −40 et le statut « À INVESTIGUER ».",
      "Ex. 1 — La mise en forme conditionnelle couvre toutes les lignes du rapprochement (rouge pour À INVESTIGUER, vert pour OK).",
      "Ex. 2 — La section 3 donne un montant justifié de 196,00 USD et un solde de 4,00 USD à rembourser par le titulaire (200 − 196).",
      "Ex. 2 — La date de clôture est 2026-03-09 et la ligne du livre est une entrée REC-002 de 4 USD, avec libellé explicite.",
      "Ex. 2 — Les signatures de l'approbateur Finance et du titulaire sont présentes, l'approbation précédant la sortie du 3 mars.",
      "Ex. 3 — La note tient en une page, sépare l'établi de l'incertain et ne nomme aucun responsable sans preuve.",
      "Ex. 3 — Elle contient exactement 2 actions correctives datées, dont le rapprochement quotidien dès le lendemain.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice 4 — Fixer la politique de caisse de la base de N'Djaména",
    instructions: "La base de N'Djaména (titulaire : le chef de base, niveau 2) dépense en moyenne 900 USD par semaine en espèces, sur 5 jours ouvrés, avec un réapprovisionnement hebdomadaire. Son antenne de Mongo (niveau 1) dépense 200 USD par semaine, avec un réapprovisionnement hebdomadaire. Appliquez la méthode de la procédure 1, étape 2.",
    steps: [
      { title: 'Solde cible de la base', body: "Dépenses d'une semaine + une journée de réserve, arrondi à la centaine supérieure." },
      { title: 'Plafond de la base', body: "Solde cible + un tiers, arrondi à la centaine supérieure ; comparez à la fourchette du niveau 2 (1 000 à 3 000 USD)." },
      { title: 'Seuil de réapprovisionnement de la base', body: "Deux jours de dépenses, arrondi aux 50 USD supérieurs." },
      { title: "Antenne de Mongo", body: "Calculez de la même façon, puis comparez à la fourchette du niveau 1 (200 à 500 USD) et retenez le plus petit des deux." },
      { title: 'Rédiger la section 2 de la politique', body: "Une ligne par caisse : titulaire, plafond, solde cible, seuil de réapprovisionnement." },
    ],
    deliverable: "Le tableau des quatre chiffres par caisse et la section 2 de la politique, rédigée.",
  },
  {
    type: 'exercise',
    title: 'Exercice 5 — Faire le rapprochement bancaire hebdomadaire de N\'Djaména',
    instructions: "Au vendredi 6 mars 2026, le relevé de la banque (compte USD) indique 31 250,00 USD. Le livre de banque indique 30 085,00 USD. Vous constatez que le chèque n° 0231 de 1 200 USD, émis le 4 mars, n'a pas encore été débité ; que 35 USD de frais bancaires figurent sur le relevé mais pas au livre ; et que le relevé contient un retrait d'espèces de 500 USD le 5 mars (chèque n° 0229).",
    steps: [
      { title: 'Pointer les retraits', body: "Faites le triple pointage du retrait de 500 USD avec le livre de banque et la ligne REA-001 de l'exercice 1." },
      { title: 'Ajuster le solde du relevé', body: "Partez de 31 250,00 et retirez les opérations en transit." },
      { title: 'Ajuster le solde du livre', body: "Partez de 30 085,00 et ajoutez ou retirez les opérations du relevé absentes du livre." },
      { title: "Calculer l'écart et conclure", body: "Écart = solde ajusté du relevé − solde ajusté du livre ; indiquez l'action pour chaque élément (frais, chèque en transit)." },
    ],
    pitfall: "Passer le chèque en transit comme une erreur de la banque : un chèque émis et non encore présenté n'est pas une erreur, c'est un décalage de délai à suivre sur la liste des éléments en suspens.",
    deliverable: "L'état de rapprochement bancaire au 06/03/2026, avec les deux soldes ajustés, l'écart et l'action pour chaque élément.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 4 et 5)',
    items: [
      "Ex. 4 — Base : solde cible 900 + 180 = 1 080, arrondi à 1 100 USD ; plafond 1 100 + 367 = 1 467, arrondi à 1 500 USD, dans la fourchette du niveau 2 ; seuil de réapprovisionnement 2 × 180 = 360, arrondi à 400 USD (50 USD supérieurs).",
      "Ex. 4 — Antenne de Mongo : dépenses 200 par semaine, soit 40 par jour ; solde cible 240, arrondi à 300 USD ; plafond 300 + 100 = 400 USD, dans la fourchette du niveau 1 ; seuil 80, arrondi à 100 USD.",
      "Ex. 4 — La section 2 de la politique cite pour chaque caisse le titulaire, le plafond, le solde cible et le seuil de réapprovisionnement.",
      "Ex. 5 — Le retrait de 500 USD est pointé en triple : relevé, livre de banque, REA-001 du livre de caisse.",
      "Ex. 5 — Solde ajusté du relevé : 31 250,00 − 1 200,00 = 30 050,00 USD.",
      "Ex. 5 — Solde ajusté du livre : 30 085,00 − 35,00 = 30 050,00 USD ; écart 0,00.",
      "Ex. 5 — Le chèque est en transit (suivi à J+7) ; les frais de 35 USD sont enregistrés au livre avec le relevé comme pièce ; aucune ligne « ajustement » n'a été utilisée.",
    ],
  },

  // ─────────────── ERREURS DE TERRAIN ───────────────
  {
    type: 'warning',
    title: 'Pièges fréquents de terrain — et comment les éviter',
    items: [
      "Ne pas compter la caisse quotidiennement « faute de temps ». Parade : dix minutes chaque soir, sans exception. Une investigation rétroactive sur un écart vieux d'un mois en prend des heures, pour un résultat souvent incomplet.",
      "Accepter un justificatif incomplet ou tardif parce que la personne est un collègue senior ou un ami. Parade : la règle s'applique strictement de la même façon à tous, du chauffeur au chef de mission ; la première exception ouvre la porte à toutes les suivantes.",
      "Laisser une avance ouverte plus d'un mois sans relance active. Parade : le registre des avances ouvertes, relu chaque vendredi, et le calendrier de relance (échéance −3, +1, +7 jours).",
      "Fractionner une dépense en plusieurs petits reçus pour rester sous un seuil d'approbation. Parade : le seuil s'apprécie par achat, par fournisseur et par jour ; un schéma repéré se signale, il ne se laisse pas passer parce que le total reste raisonnable.",
      "Mélanger caisse professionnelle et dépannage personnel « juste pour cette fois ». Parade : la caisse ne dépanne jamais personne, pas même son responsable ; deux seules entrées légitimes, le réapprovisionnement et le reversement.",
      "Fixer un plafond « à l'œil » ou le laisser inchangé pendant des années. Parade : un plafond calculé sur le besoin réel, écrit, signé et révisé chaque année ou au changement de contexte.",
      "Adapter le comptage ou passer une ligne « ajustement » pour faire tomber un écart. Parade : la colonne C reçoit le comptage réel ; une cause se prouve par une ligne REG, jamais par un ajustement sans pièce.",
      "Corriger une ligne en l'écrasant ou en la supprimant. Parade : ligne REG qui renvoie à la pièce d'origine, rien n'est effacé.",
      "Rapprocher la banque en forçant l'équilibre. Parade : chaque écart reçoit une cause, une action et un délai ; un rapprochement qui colle sans explication n'a aucune valeur.",
      "Passer un écart non expliqué sur une ligne de projet bailleur. Parade : approbation écrite de Grace M., puis fonds propres ; jamais une charge cachée dans un rapport bailleur.",
    ],
  },

  // ─────────────── RÉCAPITULATIF + CHECKLIST ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rédigé la politique de caisse du bureau de Goma : inventaire des caisses, plafonds calculés (2 000 / 500 / 5 000 USD), solde cible, seuils de réapprovisionnement, seuils de signature et d'écart, sécurité et révision annuelle.",
      "Vous avez tenu le livre de caisse d'avril dans le template : solde d'ouverture issu du comptage, sorties et entrées en temps réel, pièces numérotées, corrections par lignes REG.",
      "Vous avez ouvert et clôturé la caisse par comptage contradictoire, rempli le rapprochement quotidien, lu les statuts OK et À INVESTIGUER et documenté l'écart de 3 USD le jour même.",
      "Vous avez conduit l'avance AV-014 de la demande au solde avec la fiche complète (sections 1 à 4), tenu le registre des avances et traité l'avance AV-013 jusqu'à la dette à 30 jours.",
      "Vous avez fait le rapprochement bancaire hebdomadaire du 10 avril : pointage, triple contrôle des retraits, état équilibré à 83 970,00 USD, éléments en suspens suivis.",
      "Vous avez clôturé avril : comptage de clôture, synthèse mensuelle, rapprochement mensuel, revue des avances, dossier signé, mai ouvert sur 1 400 USD.",
      "Vous avez investigué un écart ancien avec des données incomplètes, régularisé le comptage inopiné de Rutshuru (−42 USD décomposé) et rédigé la note d'investigation : établi, incertain, mesures correctives.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi les plafonds de caisse existent et les justifier autrement que par « c'est la procédure ».",
      "Je peux calculer un solde cible, un plafond et un seuil de réapprovisionnement pour chaque niveau de responsabilité, et ma politique est écrite, signée et diffusée.",
      "Mon livre de caisse suit les règles du template : formules de la colonne F intactes, une ligne par mouvement, une pièce par ligne, aucune ligne supprimée.",
      "Je sais ouvrir et clôturer une caisse quotidiennement avec comptage physique contradictoire et signature.",
      "J'ai complété un rapprochement quotidien avec le template fourni et je sais interpréter le statut « À INVESTIGUER » et documenter l'écart le jour même.",
      "J'ai rédigé une fiche d'avance complète, de la demande jusqu'au calcul du solde à rembourser ou à recevoir, avec ses quatre sections signées.",
      "Je tiens un registre des avances ouvertes et je relance dès l'échéance ; aucune avance ne dépasse 30 jours sans décision.",
      "Je sais faire un rapprochement bancaire hebdomadaire et mensuel dont chaque écart est expliqué, et rapprocher les retraits de la banque et les réapprovisionnements de la caisse.",
      "Je sais structurer une investigation rétroactive sur un écart de caisse, y compris avec des données incomplètes.",
      "Je peux citer au moins 5 pièges fréquents de gestion de caisse terrain et comment les éviter.",
    ],
  },

  // ─────────────── CLÔTURE ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 04 — Gestion Multi-Devises & Opérations Bancaires. Vous y étendrez la rigueur de la caisse et du rapprochement bancaire aux comptes en plusieurs devises : ouverture de comptes, gestion des signataires, transferts internationaux et pertes et gains de change.",
  },
]
