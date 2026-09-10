# Module 12 — IA pour le Business Model & le Business Plan — Structurer sans déléguer la décision
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt professionnel structuré combine six éléments, résumés par la norme **CLARTE** : **C**ontexte (qui vous êtes, votre projet, les données déjà disponibles) ; **L**ivrable attendu (le résultat exact voulu — format, longueur, structure) ; **A**udience / rôle (le rôle que doit endosser l'IA, et pour qui elle produit) ; **R**estrictions (contraintes, ce qu'il ne faut PAS faire, notamment ne pas trancher à votre place) ; **T**on & style (registre attendu — synthétique, factuel, direct...) ; **E**xemples (un exemple de format ou de sortie attendue, si possible).

Pour les cas qui demandent un raisonnement en plusieurs étapes plutôt qu'une simple restitution, on utilise la méthode **STAR** appliquée au prompting : **S**ituation (description factuelle du contexte de départ) ; **T**âche (objectif précis à atteindre) ; **A**ction (ce que l'IA doit concrètement exécuter, étape par étape) ; **R**ésultat (le livrable final et son critère de réussite).

Chaque prompt donné ci-dessous précise entre parenthèses quelle méthode il applique, et un commentaire qui suit explique quel élément correspond à quelle lettre. Vous pouvez copier-coller ces prompts tels quels et remplacer les éléments entre crochets par vos propres données.

### Outils utilisés dans ce module

**ChatGPT** — excellent partenaire de brainstorming pour remplir un premier jet des 9 blocs du Business Model Canvas à partir d'une description en vrac de votre activité, et pour générer rapidement plusieurs variantes de pitch à comparer. C'est l'outil à privilégier pour la phase de génération et de reformulation rapide.

**Claude** — sa rigueur de raisonnement structuré (déjà vue au Module 03 de cette formation) en fait le meilleur outil pour la phase de challenge critique : repérer les incohérences entre deux blocs du canevas, identifier les affirmations non étayées d'un pitch, ou relire un plan financier à la recherche d'hypothèses qui se contredisent entre elles.

**Perplexity** — vu en détail au Module 05 de cette formation, c'est l'outil à privilégier pour toute recherche de marché : il attache des sources vérifiables et actualisées à ses réponses, ce qui permet de retrouver l'origine réelle d'un chiffre cité — condition indispensable avant d'utiliser ce chiffre dans un document officiel (voir le risque des chiffres de marché halluciné, développé dans la théorie de ce module).

**Gemini** — utile en complément pour analyser un support visuel existant (une capture d'écran de canevas concurrent, un tableau de prix scanné, un pitch deck déjà en forme) grâce à sa lecture multimodale, et pour transposer directement une trame de plan financier dans Google Sheets si votre suivi budgétaire vit déjà dans cet écosystème.

### Guide pratique étape par étape — Du canevas vierge au pitch resserré

Ce guide part d'une situation réelle : vous avez une idée de projet ou d'activité déjà en tête, mais rien de formalisé — ni canevas, ni étude de marché, ni chiffres, ni pitch stable. Voici le pipeline complet, dans l'ordre, avec à chaque étape le prompt exact à utiliser et le gabarit `04-templates/` correspondant.

**Étape 1 — Construction du Business Model Canvas assisté par IA**

Remplissez d'abord les 9 blocs avec l'IA comme partenaire de brainstorming à partir d'une description libre de votre activité, en vous appuyant sur le gabarit `04-templates/canevas-business-model-canvas-ia.xlsx` (feuille "Canevas BMC"). Une fois un premier jet obtenu, ne vous arrêtez jamais là : demandez explicitement à l'IA de challenger chaque bloc.

> **Prompt 1 — Remplissage et challenge du BMC (norme CLARTE)**
> "Tu es consultant en stratégie d'entreprise spécialisé dans les modèles économiques de petites structures. Voici la description libre de mon projet : [coller votre description en 5 à 10 lignes]. Remplis les 9 blocs du Business Model Canvas (segments de clientèle, proposition de valeur, canaux, relations clients, flux de revenus, ressources clés, activités clés, partenaires clés, structure de coûts) à partir de cette description, un paragraphe court par bloc. Puis, dans une seconde partie clairement séparée, challenge chaque bloc individuellement : identifie les incohérences entre blocs, les hypothèses non testées, et les blocs qui restent vagues ou génériques. Ne me propose aucune décision de positionnement à ma place — signale uniquement les problèmes et les questions à trancher moi-même. Reste concis, un maximum de 3 points de challenge par bloc."

*Pourquoi ce prompt est structuré ainsi* : "Tu es consultant en stratégie..." fixe l'**A**udience/rôle ; la description du projet et le format en 9 blocs posent le **C**ontexte ; "Remplis les 9 blocs... un paragraphe court par bloc" puis "dans une seconde partie clairement séparée" fixent le **L**ivrable en deux temps distincts (remplissage, puis challenge) ; "Ne me propose aucune décision de positionnement à ma place" est la **R**estriction centrale de ce module, qui empêche l'IA de glisser du challenge vers la décision ; "Reste concis, un maximum de 3 points de challenge par bloc" cadre le **T**on et borne le livrable.

Reportez le résultat validé dans le gabarit `04-templates/canevas-business-model-canvas-ia.xlsx`, en utilisant la feuille "Questions de challenge IA" pour noter, bloc par bloc, les questions de challenge que vous avez effectivement posées et la décision que vous avez prise en réponse — pas celle suggérée par l'IA, la vôtre.

**Étape 2 — Étude de marché synthétisée par IA, avec vérification des sources**

Ne demandez jamais une taille de marché sans demander dans le même mouvement la source exacte. Perplexity est l'outil à privilégier ici parce qu'il attache des citations à ses réponses, mais l'étape de vérification manuelle reste obligatoire quel que soit l'outil utilisé.

> **Prompt 2 — Étude de marché sourcée (méthode STAR)**
> "Situation : je prépare un business plan pour [décrire votre activité et votre marché géographique en une phrase]. Je n'ai aujourd'hui aucune donnée chiffrée sur la taille de ce marché. Tâche : produire une synthèse de marché exploitable dans un business plan, avec des chiffres uniquement s'ils sont sourcés. Action : (1) recherche une estimation de taille de marché (TAM) pour ce secteur et cette zone géographique, avec la source exacte (nom de l'organisme, année de publication, lien si disponible) ; (2) identifie 3 tendances récentes du secteur, chacune avec sa source ; (3) identifie 2 à 3 concurrents ou acteurs comparables déjà présents sur ce marché. Résultat attendu : un tableau à trois colonnes (donnée ou tendance, source précise, année) plutôt qu'un texte rédigé ; si aucune source fiable n'existe pour un chiffre demandé, indique-le explicitement au lieu d'estimer un chiffre par défaut."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation précise le secteur et la zone géographique réels, condition pour obtenir une réponse pertinente plutôt que générique ; la **T**âche fixe l'objectif (une synthèse exploitable, pas une liste de faits isolés) ; l'**A**ction découpe la demande en trois livrables ordonnés (taille de marché, tendances, concurrents), chacun avec l'exigence de source ; le **R**ésultat impose un format tableau qui rend la vérification plus facile, et interdit explicitement l'estimation par défaut en cas d'absence de source — le garde-fou le plus important de ce prompt.

Une fois la réponse obtenue, ouvrez chaque source citée une par une : si un lien ne mène à rien, si l'organisme cité n'existe pas, ou si le chiffre trouvé sur la source réelle diverge de celui annoncé par l'IA, ce chiffre est écarté du business plan — sans exception. Consignez chaque vérification dans la feuille "Suivi des hypothèses" du gabarit `04-templates/canevas-business-model-canvas-ia.xlsx` (colonnes hypothèse / source ou preuve / statut).

**Étape 3 — Structuration d'un plan financier simplifié**

L'IA aide à structurer les hypothèses d'un compte de résultat prévisionnel, jamais à garantir l'exactitude d'un calcul financier complexe. Utilisez la Partie A du gabarit `04-templates/gabarit-plan-financier-pitch-simplifie.docx` comme trame d'arrivée.

> **Prompt 3 — Trame de plan financier simplifié (norme CLARTE)**
> "Tu es conseiller en création d'entreprise, spécialisé dans l'accompagnement de petites structures qui n'ont pas de service financier dédié. Voici mon activité : [décrire l'activité, le modèle de revenu et les coûts principaux connus]. Construis une trame de compte de résultat prévisionnel sur 12 mois avec : une ligne par source de revenu, une ligne par catégorie de coût fixe, une ligne par catégorie de coût variable, et une ligne de calcul du seuil de rentabilité. Pour chaque ligne, indique explicitement l'hypothèse sous-jacente entre crochets (ex. [hypothèse : 10 clients par mois à partir du mois 3]) plutôt qu'un chiffre présenté comme acquis. Ne calcule aucun total avec des hypothèses que je n'ai pas fournies moi-même — si une donnée manque, laisse la ligne en placeholder à compléter. Présente le résultat sous forme de tableau structuré, prêt à transposer dans un tableur."

*Pourquoi ce prompt est structuré ainsi* : "Tu es conseiller en création d'entreprise..." fixe l'**A**udience/rôle adapté à une structure sans service financier dédié ; la description de l'activité pose le **C**ontexte ; "Construis une trame... une ligne par..." fixe précisément le **L**ivrable ; "indique explicitement l'hypothèse sous-jacente entre crochets" est la **R**estriction la plus importante du prompt, puisqu'elle empêche l'IA de présenter une supposition comme un chiffre validé ; "Ne calcule aucun total avec des hypothèses que je n'ai pas fournies" renforce cette même restriction ; "prêt à transposer dans un tableur" cadre le **T**on et le format final.

Reportez chaque ligne de cette trame dans la Partie A du gabarit `04-templates/gabarit-plan-financier-pitch-simplifie.docx`, en tenant à jour le journal d'hypothèses explicites qui l'accompagne : aucune hypothèse financière ne doit rester implicite dans le document final.

**Étape 4 — Resserrement du pitch et de l'executive summary**

Ne demandez jamais à l'IA d'écrire votre pitch depuis une page blanche si vous avez déjà une version, même imparfaite : demandez-lui de la challenger et de la resserrer, pas de la remplacer. Utilisez la Partie B du gabarit `04-templates/gabarit-plan-financier-pitch-simplifie.docx` comme structure d'arrivée.

> **Prompt 4 — Challenge et resserrement d'un pitch existant (méthode STAR)**
> "Situation : voici mon pitch actuel de [durée visée, ex. 3 minutes ou 1 page] pour présenter mon projet [nom et une phrase de description] à des investisseurs ou partenaires potentiels : [coller le texte actuel du pitch]. Tâche : resserrer ce pitch sans en changer le fond ni la voix de son auteur, en le rendant plus direct et plus crédible. Action : (1) identifie les phrases ou paragraphes trop longs qui peuvent être coupés sans perte d'information ; (2) repère chaque affirmation non étayée par un chiffre ou un fait vérifiable et signale-la comme telle ; (3) identifie les 2 ou 3 points que poserait un investisseur sceptique en premier ; (4) propose une version resserrée, mais garde certaines formulations originales quand elles sont déjà fortes plutôt que de tout reformuler par défaut. Résultat attendu : la liste des coupes et affirmations à étayer d'abord, puis la version resserrée ensuite — jamais l'inverse, pour que je garde le contrôle sur ce qui change."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation fournit le texte réel du pitch, condition indispensable pour un travail de resserrement plutôt que de création ; la **T**âche "sans en changer le fond ni la voix de son auteur" est la restriction qui protège contre le piège de l'authenticité perdue (voir les pièges fréquents de ce module) ; l'**A**ction découpe le travail en quatre opérations distinctes et ordonnées, dont l'anticipation des questions d'un investisseur sceptique ; le **R**ésultat impose que le diagnostic soit livré avant la réécriture, pour que vous restiez décideur de chaque changement plutôt que spectateur d'une réécriture intégrale.

Complétez ensuite la Partie B du gabarit `04-templates/gabarit-plan-financier-pitch-simplifie.docx` avec la version resserrée et la checklist de questions de challenge cochée point par point : c'est ce document, et non la conversation avec l'IA, qui doit être présenté à un tiers.
