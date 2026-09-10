# Module 11 — IA pour le Marketing & la Communication — Du document existant au support diffusable
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Transformer un document professionnel existant (rapport, fiche technique, compte-rendu) en support de communication adapté à un canal précis (post réseau social, newsletter, communiqué), en identifiant d'abord le message central et les paramètres du nouveau format.
- Choisir le bon outil d'IA pour générer un visuel marketing en fonction du besoin réel — visuel rapide interne, infographie de données, post réseau social, visuel de présentation — plutôt que d'utiliser toujours le même outil par habitude.
- Connaître les forces et les limites concrètes des quatre outils de génération visuelle comparés dans ce module (ChatGPT/DALL-E, Claude, Copilot Designer, Gemini), au-delà de leur réputation générale.
- Repérer, avant toute publication, les défauts caractéristiques d'un visuel généré par IA (texte illisible ou halluciné, éléments visuels incohérents) et savoir quand corriger dans un outil de retouche plutôt que de régénérer en boucle.
- Appliquer la norme CLARTE et la méthode STAR, présentées en détail dans la partie Outils & Guide Pratique de ce module, à des prompts de transformation de contenu et de génération d'image.

### Pourquoi la transformation document → communication est un cas d'usage à fort rendement

Une organisation produit en permanence des documents de fond : rapports d'activité, fiches techniques, comptes-rendus de projet, notes de synthèse. Ce contenu a déjà demandé le travail le plus coûteux — rassembler les faits, les vérifier, les structurer — et il reste presque toujours enfermé dans son format d'origine, un document interne de plusieurs pages que personne en dehors de l'équipe ne lira jamais.

Le réflexe le plus fréquent face à un besoin de communication est de repartir de zéro : ouvrir une page blanche et rédiger un post ou une newsletter comme s'il n'existait aucune matière préalable. C'est une perte de temps et souvent une perte de précision, parce que le document source contient déjà les chiffres exacts, les faits vérifiés et la structure logique que l'auteur du post improvisé devra reconstituer de mémoire, avec le risque d'approximation que cela comporte.

La bonne approche est inverse : partir du document existant et le **reformater** pour une audience et un canal différents. Le contenu de fond ne change pas ; ce qui change, c'est la longueur, le ton, l'angle d'accroche et la structure de lecture. Un compte-rendu de projet de trois pages destiné à un comité de pilotage et un post LinkedIn de cent mots destiné à un réseau professionnel peuvent reposer sur exactement les mêmes faits, présentés différemment. C'est précisément ce travail de reformatage ciblé — pas de création de contenu ex nihilo — que l'IA exécute le mieux, à condition de lui fournir le document source et de préciser le format cible avec la même rigueur que pour toute autre demande professionnelle.

### Panorama réaliste des quatre outils de génération d'image

Le second axe de ce module porte sur la génération de visuels marketing. Les quatre outils comparés ne se valent pas sur tous les usages ; les connaître précisément évite de choisir par défaut ou par habitude.

- **ChatGPT (moteur DALL-E)** — l'outil le plus créatif et le plus rapide à produire une image originale à partir d'une simple description : illustration, visuel d'ambiance, image de couverture. Sa limite la plus connue et la plus systématique : le texte intégré à l'image (titre, slogan, chiffre) est très souvent déformé, mal orthographié ou illisible. Il ne faut jamais compter sur DALL-E pour produire un visuel dont le message passe par du texte lisible dans l'image elle-même.
- **Claude** — ne génère pas d'image nativement, ce qui est souvent perçu à tort comme une absence totale de capacité visuelle. Claude peut en réalité écrire du code SVG ou HTML/CSS qui produit directement un visuel simple, net et à texte parfaitement lisible : bannière, infographie de données, schéma de comparaison. C'est une alternative peu connue mais très efficace dès que le visuel doit contenir du texte exact, des chiffres ou une structure géométrique précise — exactement ce que DALL-E rate le plus souvent.
- **Copilot Designer** — intégré à l'écosystème Microsoft 365 (Office, Teams), il produit rapidement des visuels d'allure professionnelle pour des supports internes (diapositive, bannière de communication interne, visuel Teams) sans quitter les outils déjà utilisés au quotidien. Sa force est la rapidité d'intégration plus que la précision créative.
- **Gemini** — directement intégré à Google Workspace (Docs, Slides), il permet de générer un visuel sans sortir du document ou de la présentation en cours de rédaction. Pratique pour illustrer un document Google en une étape, avec les mêmes limites de fiabilité du texte intégré que les autres générateurs d'image classiques.

Le fil conducteur de ce module n'est donc pas "quel est le meilleur outil de génération d'image" — la réponse dépend du besoin — mais "quel outil correspond à ce besoin marketing précis". Le guide pratique et le tableau de synthèse de ce module donnent une méthode pour trancher à chaque fois plutôt que par habitude.

### Vocabulaire clé à maîtriser dès ce module

- **Message central** : l'idée unique et prioritaire qu'un document source doit transmettre une fois réduit à sa version la plus courte — le point de départ obligatoire de toute transformation vers un nouveau format, avant même de penser au ton ou à la longueur.
- **Format cible** : l'ensemble des contraintes du canal de diffusion choisi (longueur maximale, ton attendu, présence ou non d'un visuel, audience réelle) qui doit être fixé avant de demander la transformation, pas après.
- **SVG (Scalable Vector Graphics)** : un format d'image vectorielle décrit par du code plutôt que par des pixels ; c'est ce que Claude génère pour produire un visuel simple, redimensionnable sans perte et avec un texte toujours net.
- **Hallucination visuelle** : un élément incohérent ou physiquement impossible produit par un générateur d'image (une main à six doigts, un objet dupliqué, un texte qui ressemble à de l'écriture sans former de mots réels) — à vérifier systématiquement avant toute publication externe.
