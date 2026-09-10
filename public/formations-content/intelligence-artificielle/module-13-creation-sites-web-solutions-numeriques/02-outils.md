# Module 13 — IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt de cadrage ou de génération efficace repose sur la norme **CLARTE** : **C**ontexte (qui vous êtes, votre activité, le projet concerné) ; **L**ivrable attendu (le site ou l'application exact voulu — pages, fonctionnalités, format) ; **A**udience / rôle (le rôle que doit endosser l'IA, et le public cible réel du site ou de l'application) ; **R**estrictions (ce qu'il ne faut PAS faire, les contraintes techniques ou de contenu) ; **T**on & style (identité visuelle, registre attendu) ; **E**xemples (une référence de style ou de structure existante, si possible).

Pour une itération de correction, qui demande de raisonner sur un résultat déjà produit plutôt que de repartir de zéro, on utilise la méthode **STAR** appliquée au prompt : **S**ituation (ce qui existe déjà, tel qu'il apparaît actuellement, et ce qui pose problème) ; **T**âche (le résultat corrigé exact que vous attendez) ; **A**ction (ce que l'IA doit concrètement modifier, étape par étape) ; **R**ésultat (le critère précis qui permet de dire que la correction est réussie).

Chaque prompt de ce module précise entre parenthèses la méthode appliquée, suivi d'un commentaire qui associe chaque phrase à sa lettre. Copiez-collez ces prompts tels quels et remplacez les éléments entre crochets par les informations de votre propre projet.

### Outils utilisés dans ce module

**Lovable** (lovable.dev) — accessible depuis un navigateur, sans installation ; génère une interface complète à partir d'une description, avec aperçu instantané modifiable par un nouvel échange en langage courant. Un usage gratuit limité suffit pour un premier test.

**v0** (v0.dev, par Vercel) — fonctionne sur le même principe que Lovable : décrire l'écran voulu, obtenir un aperçu, itérer par la conversation. Particulièrement adapté quand le résultat final doit se rapprocher d'un standard d'interface moderne (composants, mise en page soignée).

**Bolt** (bolt.new) — génère une application complète (interface et logique associée) et propose un déploiement en un clic vers une adresse en ligne testable immédiatement, sans configuration technique préalable de votre part.

**Claude Code** — agent en ligne de commande installé sur votre machine, qui travaille directement sur les fichiers d'un projet de code réel. Plus technique que les trois outils précédents, il suppose l'aisance acquise au Module 10 de cette formation (VS Code & Copilot) ; en contrepartie, il offre le contrôle le plus fin sur le résultat et permet de modifier un projet déjà existant plutôt que de repartir d'une génération complète.

**ChatGPT ou Copilot (mention brève)** — utiles en amont pour vous aider à structurer un cahier des charges à partir d'une idée encore floue, avant de le transmettre à l'outil de génération retenu.

### Guide pratique étape par étape — Du besoin au site testé

Ce guide part d'une situation réelle : on vous demande "un site" ou "une petite application", sans autre précision. Voici le pipeline complet, dans l'ordre, avec à chaque étape le prompt exact à utiliser quand un prompt s'impose.

**Étape 1 — Choisir l'outil adapté à son besoin et à son niveau**

Avant d'ouvrir quoi que ce soit, situez votre besoin sur la grille de décision présentée dans la théorie de ce module : une page de présentation simple oriente vers Lovable ou v0, une application avec logique métier oriente vers Bolt, une modification d'un projet de code existant oriente vers Claude Code. Ce choix n'est pas définitif — vous pouvez toujours changer d'outil en cours de route — mais il évite de partir sur un outil mal dimensionné pour la tâche.

**Étape 2 — Rédiger le cahier des charges avant de générer quoi que ce soit**

C'est l'étape la plus souvent sautée, et celle qui explique le plus d'itérations inutiles ensuite. Complétez le gabarit `04-templates/checklist-cahier-des-charges-site-ia.xlsx` fourni avec ce module : il couvre l'objectif, les pages ou écrans nécessaires, les fonctionnalités indispensables séparées de celles qui peuvent attendre, le style visuel souhaité (avec référence si possible), le public cible et les contraintes éventuelles. Si votre idée de départ est encore floue, faites-vous aider par ChatGPT ou Claude pour la structurer.

> **Prompt 1 — Structuration du cahier des charges (norme CLARTE)**
> "Tu es consultant en cadrage de projets numériques. Je veux créer un site vitrine pour promouvoir mes services de [votre activité], sans savoir encore précisément comment structurer ma demande. Voici en vrac ce que je veux : [listez vos idées en vrac, par exemple présenter mes services, une page contact, des témoignages clients, un style sobre et professionnel]. Structure-moi un cahier des charges clair en cinq points : objectif du site, liste des pages nécessaires, fonctionnalités indispensables (distinctes de celles qui peuvent attendre une version 2), style visuel souhaité avec si possible une référence de site existant, et public cible précis. Limite chaque point à deux ou trois phrases maximum, dans un langage direct que je pourrai coller tel quel dans un prompt de génération. Ne me propose aucun texte de contenu rédigé à ce stade, uniquement la structure du besoin."

*Pourquoi ce prompt est structuré ainsi* : "Tu es consultant en cadrage de projets numériques" fixe l'**A**udience/rôle ; "Je veux créer un site vitrine pour... Voici en vrac ce que je veux" pose le **C**ontexte, y compris sous une forme brute et désordonnée que l'IA doit elle-même structurer ; "Structure-moi un cahier des charges clair en cinq points" fixe le **L**ivrable attendu ; "Limite chaque point à deux ou trois phrases..." cadre le **T**on ; "Ne me propose aucun texte de contenu rédigé à ce stade" est une **R**estriction qui évite que l'IA anticipe une étape qui n'est pas encore la bonne.

**Étape 3 — Générer une première version avec un prompt complet**

Une fois le cahier des charges rempli, ne le laissez pas dans un coin : transcrivez-le directement dans le prompt de génération envoyé à l'outil choisi (Lovable, v0, Bolt ou Claude Code). Un cahier des charges qui reste dans un fichier séparé du prompt ne sert à rien — c'est le fait de le reprendre intégralement dans le prompt qui évite le résultat générique décrit dans la théorie de ce module.

> **Prompt 2 — Génération complète d'une première version (norme CLARTE)**
> "Tu es un générateur de site web professionnel. Objectif du site : présenter mon activité de conseil en [secteur] et générer des prises de contact qualifiées. Pages nécessaires : une page d'accueil, une page « Services » détaillant trois offres, une page « À propos », une page « Contact » avec un formulaire (nom, email, message). Fonctionnalités indispensables : formulaire de contact fonctionnel, menu de navigation clair entre les quatre pages, affichage correct sur mobile. Fonctionnalités secondaires qui peuvent attendre une version 2 : blog, prise de rendez-vous en ligne. Style visuel : sobre et professionnel, dominante bleu marine et blanc, typographie lisible, dans l'esprit d'un cabinet de conseil (référence de style : [nom d'un site que vous aimez]). Public cible : dirigeants de petites organisations à la recherche d'un accompagnement ponctuel, qui consultent le site principalement depuis un smartphone. Ne génère aucune des fonctionnalités listées comme secondaires dans cette première version."

*Pourquoi ce prompt est structuré ainsi* : le **C**ontexte précise l'activité et le secteur réels ; "Pages nécessaires... Fonctionnalités indispensables..." fixe le **L**ivrable de façon exhaustive plutôt que par une demande vague ; "Public cible : dirigeants... consultent le site principalement depuis un smartphone" fixe l'**A**udience, avec une information directement actionnable pour la priorité mobile ; "Style visuel : sobre et professionnel... référence de style" couvre à la fois le **T**on et l'**E**xemple ; "Ne génère aucune des fonctionnalités listées comme secondaires" est une **R**estriction qui évite qu'une première version parte dans trop de directions à la fois.

**Étape 4 — Itérer en langage courant : formuler une demande de correction efficace**

Une fois la première version générée, elle ne sera presque jamais parfaite — et ce n'est pas le problème. Le problème apparaît quand la demande de correction est trop vague : "améliore le design" ne donne à l'IA aucune direction exploitable, elle ne peut que deviner, et le résultat suivant a autant de chances d'être pire que meilleur. À l'inverse, "le bouton principal doit être plus visible, en haut à droite" donne une direction précise, vérifiable, et qui produit un résultat prévisible.

> **Prompt 3 — Itération de correction ciblée (méthode STAR)**
> "Situation : mon site généré affiche actuellement le bouton « Prendre contact » en bas de la page d'accueil, en gris clair, peu visible au premier coup d'œil. Tâche : je veux que ce bouton devienne l'élément le plus visible de la page d'accueil, sans changer le reste de la mise en page. Action : déplace ce bouton en haut de la page, dans la barre de navigation à droite, change sa couleur pour un contraste fort avec le fond (par exemple orange ou bleu vif selon la charte), et augmente légèrement sa taille par rapport aux autres liens du menu. Résultat attendu : le bouton doit être visible sans faire défiler la page, sur ordinateur comme sur mobile, et rester cliquable sans chevaucher les autres éléments du menu."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation décrit l'état actuel exact, avec sa position et sa couleur réelles, plutôt qu'un jugement général ("c'est moche") ; la **T**âche fixe l'objectif précis (le bouton le plus visible) et une contrainte de non-régression (sans changer le reste) ; l'**A**ction décompose la correction en trois gestes concrets et réalisables un par un ; le **R**ésultat fixe un critère vérifiable par vous-même — visible sans défilement, sur les deux formats d'écran, sans chevauchement — qui vous permet de valider ou refuser la correction sans ambiguïté.

Pour d'autres cas fréquents de correction (mise en page, couleur ou style, contenu, fonctionnalité), utilisez le gabarit `04-templates/bibliotheque-prompts-creation-web-iteration.docx` fourni avec ce module : il reprend le prompt de génération complet ci-dessus sous forme de modèle à remplir, et une bibliothèque de formulations d'itération classées par type de correction, avec pour chacune un exemple vague à éviter et sa version précise à utiliser.

**Étape 5 — Tester le résultat soi-même avant de le diffuser**

Dernière étape, non négociable : l'IA ne teste pas à votre place. Avant de partager un lien ou de mettre un site en ligne, vérifiez vous-même, un par un : chaque lien du menu mène à la bonne page ; le formulaire de contact affiche une confirmation ou envoie réellement un message quand vous le testez ; l'affichage sur mobile ne casse pas la mise en page (réduisez la fenêtre du navigateur ou ouvrez le lien depuis votre téléphone) ; aucun texte de remplacement ("lorem ipsum" ou placeholder générique) ne subsiste dans la version que vous vous apprêtez à diffuser. Un site généré en quelques minutes qui n'a jamais été cliqué une seule fois par un humain avant sa mise en ligne est le scénario le plus courant d'incident évitable de ce type de projet.
