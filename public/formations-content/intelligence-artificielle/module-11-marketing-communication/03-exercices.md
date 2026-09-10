# Module 11 — IA pour le Marketing & la Communication — Du document existant au support diffusable
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Compte-rendu de clôture de projet logistique, à transformer en post LinkedIn"

**Contexte (fictif, réaliste)**

Le service communication de votre organisation vous transmet le compte-rendu de fin de projet suivant, rédigé par le coordinateur logistique terrain, avec pour seule consigne : *"On a besoin d'un post LinkedIn pour annoncer ça cette semaine, et si possible un visuel qui va avec."*

> **Compte-rendu de clôture — Projet d'appui logistique, zone de Tine-Ourécassoni (janvier-juin 2026)**
> Le projet d'appui logistique mené sur six mois dans la zone de Tine-Ourécassoni s'est achevé le 28 juin 2026. Il visait à sécuriser l'acheminement de matériel médical et de première nécessité vers six sites de distribution répartis sur la zone frontalière. Sur la période, 18 tonnes de matériel ont été livrées, sans rupture de stock supérieure à 48h sur aucun site. 4 200 bénéficiaires ont été atteints, contre un objectif initial de 3 500, grâce à une coordination renforcée avec le point focal Logistics Cluster local, mise en place au deuxième mois du projet. Un défi majeur a été la période des pluies d'avril, qui a rendu deux axes routiers impraticables pendant dix jours ; un itinéraire de contournement identifié avec l'appui du Logistics Cluster a permis de maintenir les livraisons sans interruption totale. Le projet a mobilisé une équipe de 6 personnes et un budget logistique de 42 000 USD. La coordination recommande de reconduire le dispositif de contournement routier en anticipation de la prochaine saison des pluies.

Ce document est complet, chiffré et vérifié — exactement le type de matière première que ce module vous apprend à transformer plutôt qu'à réécrire de mémoire.

### Exercice noté

1. **Extraction du message central** — Avant tout prompt, formulez en une phrase le message central de ce compte-rendu (indice : ce n'est pas "le projet est terminé", mais le résultat le plus marquant à mettre en avant pour une audience externe). Notez également le format cible : canal (LinkedIn), audience (partenaires et donateurs externes), ton (chaleureux mais factuel), longueur (120-150 mots).

2. **Transformation en post LinkedIn** — En vous inspirant du Prompt 1 de la section Outils de ce module (norme CLARTE), rédigez et exécutez votre propre prompt adapté à ce compte-rendu précis.

   > **Prompt d'exercice — Transformation appliquée (norme CLARTE)**
   > "Tu es responsable communication pour une organisation à but non lucratif. Voici le compte-rendu complet du projet d'appui logistique dans la zone de Tine-Ourécassoni [coller le compte-rendu ci-dessus]. Transforme ce compte-rendu en un post LinkedIn de 120 à 150 mots maximum, destiné à nos partenaires et donateurs qui n'ont pas suivi le projet au quotidien. Le message central à faire ressortir : l'objectif de bénéficiaires atteints a été dépassé malgré un obstacle logistique majeur pendant le projet. Structure attendue : une accroche en une phrase, les résultats chiffrés exacts du compte-rendu (bénéficiaires, tonnage, zones), une mention du défi surmonté sans le dramatiser, une phrase de conclusion sur la suite recommandée. N'invente et n'arrondis aucun chiffre absent du document source. Adopte un ton chaleureux mais factuel, sans superlatif ni jargon logistique interne (pas de sigle non expliqué)."

   *Pourquoi ce prompt est structuré ainsi* : le **C**ontexte fournit le document source complet, pas un résumé qui risquerait de perdre un chiffre ; le message central identifié à l'étape 1 est explicitement injecté dans le prompt plutôt que laissé à l'appréciation de l'IA ; le **L**ivrable fixe une structure en quatre temps précise ; "N'invente et n'arrondis aucun chiffre" est la **R**estriction non négociable pour un contenu destiné à des donateurs ; "sans jargon logistique interne" adapte le **T**on à une audience externe qui ne connaît pas le vocabulaire du secteur.

3. **Génération du visuel d'accompagnement — comparatif d'au moins deux outils** — Sur la base du post rédigé à l'étape 2, générez un visuel d'accompagnement avec au moins deux des quatre outils vus dans ce module (par exemple ChatGPT/DALL-E et Claude en SVG, ou Copilot Designer et Gemini), puis comparez les deux résultats à l'aide de la grille `04-templates/comparatif-outils-generation-visuels-ia.xlsx` fournie avec ce module.

   > **Prompt d'exercice — Visuel comparatif (méthode STAR)**
   > "Situation : j'ai rédigé un post LinkedIn annonçant la clôture d'un projet logistique humanitaire ayant dépassé son objectif de bénéficiaires malgré un obstacle climatique. Tâche : je veux comparer deux options de visuel d'accompagnement pour ce post, l'une avec une image d'illustration, l'autre avec une infographie chiffrée. Action : (1) génère une image d'illustration sans texte intégré représentant une chaîne logistique humanitaire efficace, format 1200x627 ; (2) génère en parallèle, avec un outil différent, une infographie présentant les trois chiffres clés du projet (4 200 bénéficiaires, 18 tonnes, 6 sites) avec un texte parfaitement lisible. Résultat attendu : deux visuels distincts à comparer sur la grille fournie selon leur pertinence pour ce post précis, avant de choisir lequel publier."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation résume le post déjà rédigé pour que les deux visuels restent cohérents avec son message ; la **T**âche fixe explicitement une comparaison entre deux options plutôt qu'un choix par défaut ; l'**A**ction découpe la demande en deux générations distinctes avec un outil adapté à chacune (image sans texte critique / infographie avec texte exact), appliquant directement le tableau de synthèse de ce module ; le **R**ésultat impose une comparaison avant publication plutôt qu'une validation automatique du premier visuel obtenu.

4. **Choix final et relecture** — Remplissez la grille comparative avec vos deux visuels, sélectionnez celui qui correspond le mieux au post et à l'audience visée, et vérifiez-le selon les pièges fréquents ci-dessous avant de considérer l'exercice terminé.

**Livrable attendu** : le post LinkedIn final (120-150 mots), les deux visuels générés, et la grille comparative complétée avec la justification du choix retenu.

### Pièges fréquents

- **Demander à une IA de générer une image avec du texte lisible dedans** — c'est la limite la plus documentée des générateurs d'image comme DALL-E : titres déformés, lettres qui ne forment pas de mots réels, chiffres faux. Si le visuel doit porter un message écrit précis, générez-le en SVG avec Claude ou ajoutez le texte après coup dans un outil de retouche léger, jamais en comptant sur le générateur d'image pour l'écrire correctement du premier coup.
- **Utiliser toujours le même outil par habitude sans comparer sur le besoin réel** — un visuel de présentation Google généré dans ChatGPT puis importé manuellement, ou une infographie chiffrée demandée à un générateur d'image classique plutôt qu'en SVG à Claude, sont deux détours évitables une fois le tableau de synthèse de ce module connu.
- **Publier un visuel généré par IA sans vérifier qu'il ne contient pas d'éléments visuels étranges ou inappropriés** — mains mal formées, objets dupliqués, texte halluciné qui imite l'écriture sans former de mots : un visuel destiné à une publication externe doit toujours être regardé en grand format avant diffusion, jamais validé sur la seule vignette de prévisualisation.
- **Recopier tel quel le ton du document source dans le nouveau canal** — un compte-rendu de projet rédigé pour une coordination interne a un ton neutre et technique ; un post LinkedIn destiné à des donateurs a besoin d'une accroche et d'un ton plus direct. Transformer un document, ce n'est pas le raccourcir en gardant son registre d'origine : c'est aussi adapter le ton à l'audience du nouveau canal.
- **Ignorer les contraintes de format du canal avant de lancer la génération** — demander un visuel sans préciser ses dimensions (portrait pour une story, paysage pour un post, carré pour une vignette) ou rédiger un texte deux fois trop long pour le canal visé oblige à tout recadrer ou raccourcir après coup ; ces contraintes doivent être fixées dans le prompt, pas corrigées après la génération.

### Check-list de fin de module

- [ ] Je sais extraire le message central d'un document existant avant de le transformer, plutôt que de partir d'une page blanche.
- [ ] Je sais fixer les paramètres du format cible (canal, audience, ton, longueur) avant de demander une transformation à l'IA.
- [ ] Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.
- [ ] J'ai utilisé au moins deux prompts CLARTE/STAR de ce module, adaptés à mes propres documents.
- [ ] Je connais les forces et les limites concrètes des quatre outils de génération visuelle comparés dans ce module, et je sais dire lequel utiliser pour un besoin marketing donné.
- [ ] Je sais pourquoi le texte intégré dans une image générée par ChatGPT ou Gemini est peu fiable, et je connais l'alternative SVG avec Claude.
- [ ] J'ai généré un visuel avec au moins deux outils différents sur un même besoin et je les ai comparés avant de choisir.
- [ ] Je vérifie systématiquement un visuel généré par IA en grand format avant toute publication externe.
- [ ] J'ai complété le gabarit de transformation document → communication et la grille comparative des outils fournis avec ce module.
