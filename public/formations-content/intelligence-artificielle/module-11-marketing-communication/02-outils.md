# Module 11 — IA pour le Marketing & la Communication — Du document existant au support diffusable
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt professionnel structuré combine six éléments, résumés par la norme **CLARTE** : **C**ontexte (qui vous êtes, dans quel cadre, quel document de départ) ; **L**ivrable attendu (le résultat exact voulu — format, longueur, structure) ; **A**udience / rôle (le rôle que doit endosser l'IA, et pour qui elle produit) ; **R**estrictions (contraintes, ce qu'il ne faut PAS faire, limites de fidélité au document source) ; **T**on & style (registre attendu — institutionnel, chaleureux, synthétique...) ; **E**xemples (un exemple de format ou de sortie attendue, si possible).

Pour les cas qui demandent un raisonnement en plusieurs étapes plutôt qu'une simple reformulation, on utilise la méthode **STAR** appliquée au prompting : **S**ituation (description factuelle du document ou du besoin de départ) ; **T**âche (objectif précis à atteindre) ; **A**ction (ce que l'IA doit concrètement exécuter, étape par étape) ; **R**ésultat (le livrable final et son critère de réussite).

Chaque prompt donné ci-dessous précise entre parenthèses quelle méthode il applique, et un commentaire qui suit explique quel élément correspond à quelle ligne. Vous pouvez copier-coller ces prompts tels quels et remplacer les éléments entre crochets par vos propres données.

### Outils utilisés dans ce module

**ChatGPT (rédaction + génération d'image DALL-E)** — pour la partie texte, ChatGPT reformate efficacement un document long en post ou en newsletter courte. Pour la partie image, son moteur DALL-E intégré produit un visuel en une demande, avec la limite connue du texte intégré souvent illisible : à réserver aux visuels sans texte critique (illustration, ambiance, image de couverture).

**Claude (reformulation fidèle + génération de code SVG/HTML)** — Claude est particulièrement fiable pour reformater un document en respectant strictement les chiffres et faits fournis, sans en inventer ni en arrondir. Pour le visuel, demandez-lui directement du code SVG ou HTML/CSS : il produit un fichier que vous pouvez ouvrir dans un navigateur, exporter en image, et dont tout le texte reste net et exact — l'inverse du défaut habituel des générateurs d'image classiques.

**Copilot Designer (visuels rapides intégrés à Microsoft 365)** — accessible depuis Copilot dans Word, PowerPoint ou directement via Designer, il génère un visuel présentable en quelques secondes sans quitter l'environnement Office. À privilégier pour un support interne diffusé rapidement (bannière de newsletter interne, visuel de diapositive), moins pour un visuel de marque qui doit être repris tel quel à l'externe.

**Gemini (génération intégrée à Google Workspace)** — depuis Google Docs ou Slides, Gemini peut générer une image directement dans le document en cours de rédaction, pratique quand tout le flux de travail (rédaction du support et création du visuel) doit rester dans le même document, sans export ni allers-retours entre outils.

### Guide pratique étape par étape — Du document existant au support diffusé

Ce guide part d'une situation réelle : vous disposez d'un document professionnel déjà rédigé (rapport, fiche, compte-rendu) et devez en tirer un support de communication et, le cas échéant, un visuel d'accompagnement. Voici le pipeline complet, dans l'ordre, avec à chaque étape le prompt exact à utiliser.

**Étape 1 — Transformer un document existant en post, newsletter ou communiqué**

Avant de demander la transformation, identifiez vous-même deux éléments : le message central du document (une phrase) et le format cible (canal, audience, ton, longueur). Fournissez ensuite le document complet à l'IA plutôt qu'un résumé que vous en auriez fait, pour qu'elle travaille sur les faits exacts.

> **Prompt 1 — Transformation document → post (norme CLARTE)**
> "Tu es responsable communication pour une organisation à but non lucratif. Voici le compte-rendu complet d'un projet que nous venons de clôturer [coller le document]. Transforme ce compte-rendu en un post LinkedIn de 120 à 150 mots maximum, destiné à nos partenaires et donateurs, qui n'ont pas lu le compte-rendu. Le message central à faire ressortir : [préciser en une phrase]. Structure attendue : une accroche en une phrase, deux ou trois résultats chiffrés tirés exclusivement du document fourni, une phrase de conclusion ouvrant sur la suite du projet. N'invente aucun chiffre ni aucun résultat qui ne figure pas dans le document source. Adopte un ton chaleureux mais factuel, sans superlatif ni jargon interne."

*Pourquoi ce prompt est structuré ainsi* : "Tu es responsable communication..." pose l'**A**udience/rôle ; "Voici le compte-rendu complet..." fournit le **C**ontexte réel (le document source, pas un résumé) ; "Transforme ce compte-rendu en un post LinkedIn de 120 à 150 mots..." fixe le **L**ivrable attendu avec un format et une longueur précis ; "N'invente aucun chiffre..." est une **R**estriction non négociable pour un support de communication externe ; "ton chaleureux mais factuel" cadre le **T**on. L'**E**xemple est implicite dans la structure en trois temps décrite.

**Étape 2 — Générer un visuel marketing avec ChatGPT (DALL-E)**

Utilisez ChatGPT quand le visuel n'a pas besoin de texte lisible intégré — une illustration de couverture, une image d'ambiance pour accompagner le post rédigé à l'étape précédente.

> **Prompt 2 — Visuel ChatGPT/DALL-E (méthode STAR)**
> "Situation : je viens de rédiger un post LinkedIn annonçant la clôture réussie d'un projet de distribution logistique humanitaire dans une zone rurale. Tâche : je veux un visuel d'accompagnement qui illustre l'idée d'une chaîne logistique efficace et humaine, sans aucun texte à l'intérieur de l'image. Action : génère une image au style professionnel et chaleureux, format paysage adapté à un post LinkedIn (1200x627), représentant des camions ou des équipes logistiques en action dans un contexte humanitaire, sans texte, sans logo, sans visage identifiable en gros plan. Résultat attendu : une image prête à publier telle quelle, dont je n'ai qu'à vérifier l'absence d'éléments visuels incohérents avant diffusion."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation rappelle le contexte du post déjà rédigé pour que le visuel soit cohérent avec le texte ; la **T**âche fixe l'objectif et anticipe la limite connue de l'outil en excluant explicitement tout texte dans l'image ; l'**A**ction précise le format technique exact (dimensions, style, ce qu'il ne faut pas représenter) ; le **R**ésultat fixe le critère de réussite et rappelle la vérification obligatoire avant publication, développée dans les pièges fréquents de ce module.

**Étape 3 — Générer un visuel simple ou une infographie avec Claude (code SVG/HTML)**

Dès que le visuel doit contenir du texte exact, des chiffres ou une structure précise (infographie, bannière avec un titre), passez par Claude et du code plutôt que par un générateur d'image classique.

> **Prompt 3 — Infographie SVG avec Claude (norme CLARTE)**
> "Tu es designer de supports de communication pour une organisation à but non lucratif. Voici trois chiffres clés d'un projet clôturé : 4 200 bénéficiaires atteints, 18 tonnes de matériel distribuées, 6 zones couvertes. Génère le code SVG complet d'une infographie horizontale simple présentant ces trois chiffres sous forme de trois blocs alignés, chacun avec un grand chiffre, un intitulé court en dessous, et une icône ou une forme géométrique simple associée. Utilise une palette de deux couleurs maximum, un fond blanc, une police lisible. Le texte doit être exact et net, sans aucune approximation typographique. Fournis uniquement le code SVG, prêt à être ouvert dans un navigateur ou collé dans un éditeur, sans explication superflue autour."

*Pourquoi ce prompt est structuré ainsi* : "Tu es designer de supports de communication..." fixe l'**A**udience/rôle ; les trois chiffres fournis posent le **C**ontexte exact et vérifiable ; "Génère le code SVG complet d'une infographie..." fixe le **L**ivrable précis ; "Le texte doit être exact et net" est la **R**estriction centrale qui justifie le choix de Claude plutôt qu'un générateur d'image classique pour ce besoin ; "palette de deux couleurs maximum, fond blanc, police lisible" cadre le **T**on visuel de façon sobre et professionnelle.

**Étape 4 — Générer un visuel rapide avec Copilot Designer pour un support interne**

Pour un visuel diffusé en interne rapidement (bannière de newsletter d'équipe, visuel de diapositive de réunion), Copilot Designer reste le choix le plus rapide puisqu'il s'utilise sans quitter Office ou Teams.

> **Prompt 4 — Visuel interne Copilot Designer (méthode STAR)**
> "Situation : je dois envoyer avant la fin de journée une newsletter interne annonçant la clôture du projet aux équipes de l'organisation, sans budget ni délai pour un visuel travaillé. Tâche : je veux une bannière simple pour l'en-tête de cette newsletter interne. Action : génère un visuel horizontal sobre reprenant les couleurs de notre organisation (bleu marine et vert), avec un espace visuel dégagé en haut à gauche où j'ajouterai moi-même le titre dans Word. Résultat attendu : un visuel exploitable immédiatement dans le gabarit de newsletter interne, sans retouche complexe nécessaire avant l'envoi de ce soir."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation pose une contrainte réelle et fréquente (délai serré, pas de budget créatif) qui justifie le choix de l'outil le plus rapide plutôt que le plus créatif ; la **T**âche cadre un besoin interne, pas un visuel de marque externe ; l'**A**ction précise les couleurs et anticipe l'ajout ultérieur du texte en dehors de l'outil de génération — méthode qui évite justement le piège du texte halluciné dans l'image ; le **R**ésultat fixe un critère de réussite réaliste : exploitable tel quel, sans retouche lourde, compte tenu du délai.

**Étape 5 — Générer un visuel intégré à un document Google Workspace avec Gemini**

Quand le support final est rédigé directement dans Google Docs ou Google Slides, Gemini permet de générer le visuel sans sortir du document, ce qui évite un aller-retour d'export/import.

> **Prompt 5 — Visuel intégré Gemini (norme CLARTE)**
> "Tu es assistant de mise en page pour un document Google Slides de présentation interne. Je rédige une diapositive de synthèse sur la clôture d'un projet logistique. Génère directement dans ce document une image d'illustration au style sobre et institutionnel, sans texte intégré, qui accompagnera un titre et trois chiffres clés que je saisirai moi-même à côté de l'image. Limite-toi à une seule proposition d'image par demande pour rester dans le temps imparti à cette diapositive. N'ajoute aucun élément graphique superflu (cadre, filigrane, bordure décorative) qui compliquerait l'intégration dans la mise en page existante."

*Pourquoi ce prompt est structuré ainsi* : "Tu es assistant de mise en page..." pose l'**A**udience/rôle dans le contexte précis de Google Slides ; le **C**ontexte rappelle que le titre et les chiffres seront ajoutés séparément, donc l'image ne doit pas les anticiper en texte intégré ; "Limite-toi à une seule proposition..." et "N'ajoute aucun élément graphique superflu" sont des **R**estrictions qui gardent le **L**ivrable simple et directement intégrable ; le ton sobre et institutionnel est explicitement cadré.

### Tableau de synthèse — quel outil pour quel besoin marketing

| Besoin marketing | Outil recommandé | Pourquoi |
|---|---|---|
| Visuel rapide pour un support interne (newsletter d'équipe, diapositive de réunion) | Copilot Designer | Rapidité et intégration directe à Office/Teams, sans exigence de précision créative élevée |
| Infographie de données avec chiffres exacts | Claude (code SVG/HTML) | Texte et chiffres toujours nets, pas d'approximation typographique |
| Post réseau social avec image d'illustration sans texte intégré | ChatGPT (DALL-E) | Créativité et rapidité, sur un usage qui évite justement sa limite connue |
| Visuel de présentation intégré à un document Google déjà en cours de rédaction | Gemini | Génération sans sortir du document, flux de travail continu |

Ce tableau reprend les mêmes quatre outils que ceux comparés en détail dans ce module : le bon choix dépend toujours du besoin réel, pas d'une préférence par défaut.
