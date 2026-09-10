# Module 13 — IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Landing page pour une formation courte, sans brief exploitable"

**Contexte (fictif, réaliste)**

Un formateur indépendant qui anime des sessions courtes de gestion de projet vous sollicite pour créer la landing page de présentation de sa nouvelle formation, avec pour seule consigne : *"fais-moi quelque chose qui donne envie de s'inscrire, je n'ai pas le temps de tout t'expliquer."* Il n'a ni cahier des charges, ni maquette, ni texte prêt à fournir — exactement la situation où un cadrage clair avant génération change tout le résultat obtenu, plutôt que de partir directement sur un prompt vague. Votre mission, dans l'esprit de ce que BK-BOOST Ltd. présente elle-même sur ses propres pages de formation : produire, en une session de travail, le cahier des charges, la landing page générée avec un outil no-code/IA de votre choix, puis deux corrections ciblées et réalistes.

### Exercice noté

1. **Cadrage** — Complétez le gabarit `04-templates/checklist-cahier-des-charges-site-ia.xlsx` pour cette landing page : objectif, pages ou écrans nécessaires (probablement une seule page à sections multiples), fonctionnalités indispensables séparées de celles qui peuvent attendre, style visuel avec référence si possible, public cible, contraintes éventuelles (mentions légales, formulaire de collecte de contact). Aidez-vous si besoin d'un prompt de structuration sur le modèle du Prompt 1 de la section Outils de ce module.

2. **Génération** — Choisissez un outil no-code/IA (Lovable, v0, Bolt, ou Claude Code si vous êtes déjà à l'aise avec le terminal depuis le Module 10 de cette formation) et rédigez le prompt de génération complet reprenant votre cahier des charges.

   > **Prompt d'exercice — Génération de la landing page (norme CLARTE)**
   > "Tu es un générateur de site web professionnel. Objectif de la page : présenter en une seule page la formation courte « Piloter un projet en 3 jours » et convaincre un visiteur de s'inscrire avant la date limite. Sections nécessaires sur cette unique page : un en-tête avec le titre de la formation et un bouton d'inscription visible dès l'arrivée sur la page, une section décrivant en trois points ce que le participant repart en sachant faire, une section présentant le formateur en quelques lignes, une section pratique (dates, durée, lieu ou modalité à distance, tarif), et un formulaire d'inscription simple (nom, email, téléphone) en bas de page. Fonctionnalités indispensables : bouton d'inscription visible en permanence pendant le défilement, formulaire fonctionnel, affichage correct sur mobile puisque la majorité des inscriptions viendront d'un lien partagé sur téléphone. Fonctionnalités secondaires qui peuvent attendre une version 2 : témoignages vidéo, chat en direct. Style visuel : dynamique mais professionnel, couleurs vives sans excès, dans l'esprit d'une page de formation courte plutôt que d'un site institutionnel classique. Public cible : professionnels en activité qui décident de s'inscrire en moins de deux minutes de lecture, souvent depuis leur téléphone entre deux réunions. Ne génère aucune des fonctionnalités listées comme secondaires dans cette version."

   *Pourquoi ce prompt est structuré ainsi* : le **C**ontexte précise l'objectif exact de la page (convaincre avant une date limite) ; "Sections nécessaires..." fixe un **L**ivrable détaillé section par section plutôt qu'une demande générale de "landing page" ; "Public cible : professionnels... souvent depuis leur téléphone entre deux réunions" fixe l'**A**udience avec une information directement exploitable pour la priorité mobile et la longueur du texte ; "Style visuel : dynamique mais professionnel..." couvre le **T**on ; "Ne génère aucune des fonctionnalités listées comme secondaires" est la **R**estriction qui borne la première version.

3. **Itération** — Rédigez deux prompts de correction ciblée (méthode STAR), sur deux problèmes distincts et réalistes constatés en testant vous-même le résultat généré.

   > **Prompt d'exercice — Itération 1, appel à l'action peu clair (méthode STAR)**
   > "Situation : sur la version générée, le bouton d'inscription n'apparaît qu'une fois, tout en haut de la page ; un visiteur qui a lu jusqu'à la section pratique doit remonter en haut de la page pour s'inscrire. Tâche : je veux que le bouton d'inscription reste accessible à tout moment pendant la lecture, sans obliger à remonter. Action : ajoute une barre fixe en haut ou en bas de l'écran contenant le bouton d'inscription, visible en permanence pendant le défilement de la page, sur ordinateur comme sur mobile, sans masquer le contenu au moment du chargement initial. Résultat attendu : je dois pouvoir cliquer sur le bouton d'inscription depuis n'importe quelle section de la page sans avoir à faire défiler vers le haut, sans que cette barre ne cache un titre ou un bloc de texte important."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation constate un problème précis et observé (le bouton disparaît après le premier défilement) ; la **T**âche fixe l'objectif (accessibilité permanente du bouton) ; l'**A**ction précise le mécanisme concret à ajouter (barre fixe) et une contrainte de non-régression (ne pas masquer le contenu) ; le **R**ésultat fixe un critère de test que vous pouvez vérifier vous-même en faisant défiler la page.

   > **Prompt d'exercice — Itération 2, texte de section illisible sur mobile (méthode STAR)**
   > "Situation : sur mobile, la section « Ce que vous saurez faire » affiche trois blocs de texte côte à côte, ce qui les rend écrasés et difficiles à lire sur un petit écran, alors qu'ils s'affichent correctement côte à côte sur ordinateur. Tâche : je veux que cette section reste lisible sur mobile sans changer son apparence sur ordinateur. Action : fais en sorte que les trois blocs s'empilent verticalement l'un au-dessus de l'autre uniquement sur les écrans de taille mobile, en conservant la disposition côte à côte actuelle sur les écrans plus larges. Résultat attendu : sur un écran de smartphone, chaque bloc doit occuper toute la largeur disponible et rester entièrement lisible sans avoir besoin de zoomer, sans que la version ordinateur ne soit modifiée."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation compare explicitement le comportement mobile défaillant et le comportement ordinateur correct, ce qui évite à l'IA de casser ce qui fonctionne déjà ; la **T**âche fixe une contrainte de non-régression claire ; l'**A**ction précise le mécanisme exact attendu (empilement uniquement sur petit écran) ; le **R**ésultat donne un critère de test simple — lisible sans zoomer sur smartphone — vérifiable en quelques secondes sur votre propre téléphone.

**Livrable attendu** : le cahier des charges complété, le prompt de génération utilisé, les deux prompts d'itération, et une courte note (5 à 8 lignes) expliquant ce que chaque itération a concrètement corrigé et comment vous l'avez vérifié vous-même avant de considérer la page prête à partager.

### Pièges fréquents

- **Demander un site « complet » en un seul prompt vague au lieu de cadrer d'abord** — "fais-moi un site pour mon activité" sans cahier des charges produit un résultat générique qu'il faut ensuite reprendre presque intégralement ; le temps gagné par la génération instantanée est perdu dans les reprises qui suivent.
- **Formuler une demande de correction trop vague** — "améliore le design" ne donne à l'IA aucune direction exploitable ; elle ne peut que deviner, et le résultat suivant n'a pas plus de chances d'être meilleur que le précédent. Une demande de correction doit toujours nommer l'élément concerné, l'état actuel constaté et le résultat attendu.
- **Ne jamais tester soi-même le résultat généré avant de le partager ou de le mettre en ligne** — cliquer sur chaque lien, vérifier que le formulaire fonctionne réellement et regarder l'affichage sur mobile ne prend que quelques minutes ; ne pas le faire revient à diffuser un lien dont vous ne savez pas réellement s'il fonctionne.
- **Ignorer la version mobile alors que la majorité du trafic web y passe** — un site validé uniquement sur l'écran large de votre ordinateur peut afficher un menu illisible, un bouton inaccessible ou un texte écrasé sur un téléphone, précisément le format depuis lequel la plupart des visiteurs le découvriront.
- **Ne pas vérifier les mentions légales et la collecte de données personnelles avant de publier un formulaire généré automatiquement** — un formulaire de contact ou d'inscription généré par l'IA collecte des données personnelles (nom, email, téléphone) sans mention légale ni information sur leur usage par défaut ; avant toute mise en ligne réelle, vérifiez qu'une mention minimale sur l'usage de ces données est présente, faute de quoi le formulaire lui-même devient un risque de conformité.

### Check-list de fin de module

- [ ] Je sais choisir l'outil no-code/IA adapté à mon besoin selon la grille de décision de ce module (Lovable, v0, Bolt, Claude Code).
- [ ] J'ai rédigé un cahier des charges complet (objectif, pages, fonctionnalités indispensables vs secondaires, style, public cible) avant toute génération.
- [ ] Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.
- [ ] J'ai utilisé au moins quatre prompts CLARTE/STAR de ce module, adaptés à mon propre projet.
- [ ] Je sais formuler une demande de correction précise (élément concerné, état actuel, résultat attendu) plutôt qu'un jugement vague comme "améliore le design".
- [ ] J'ai testé moi-même chaque lien, bouton et formulaire du résultat généré avant de le partager.
- [ ] J'ai vérifié l'affichage mobile de mon site ou de mon application, pas uniquement l'affichage sur ordinateur.
- [ ] J'ai complété le gabarit `checklist-cahier-des-charges-site-ia.xlsx` pour mon propre projet.
- [ ] J'ai utilisé la bibliothèque de prompts d'itération `bibliotheque-prompts-creation-web-iteration.docx` pour au moins une correction réelle.
- [ ] J'ai vérifié qu'un formulaire généré collectant des données personnelles porte une mention minimale sur leur usage avant toute mise en ligne.

### Vers la suite

Le site ou l'application que vous avez cadrés, générés et corrigés dans ce module peuvent devenir la base d'un livrable plus large : le Module 15, mini-projet capstone de cette formation, vous demandera de produire un livrable réel à partir d'un problème réel de votre métier — une landing page ou un outil interne construit avec la méthode de ce module en est un candidat tout à fait légitime.
