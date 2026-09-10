# Module 01 — Introduction aux IA génératives
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Expliquer simplement comment un LLM (Large Language Model) génère du texte, et pourquoi ce mécanisme explique à la fois sa puissance et ses erreurs.
- Distinguer les 5 plateformes couvertes dans cette formation (ChatGPT, Claude, Copilot, Perplexity, Gemini) et savoir laquelle choisir selon la tâche.
- Identifier, avant de coller un texte dans une IA, les catégories de données qui ne doivent jamais y être soumises sans validation.
- Appliquer une politique personnelle de confidentialité et d'éthique avant toute utilisation professionnelle de l'IA.

### Comment un LLM génère du texte — et pourquoi ça explique ses erreurs

Un modèle de langage (LLM) ne "sait" rien au sens où un humain sait quelque chose. Ce qu'il fait, techniquement, c'est prédire le mot (ou plutôt le "token", un fragment de mot) le plus probable pour continuer une séquence de texte, un token après l'autre. Ce modèle a été entraîné sur des volumes massifs de texte — livres, sites web, code, documents publics — en apprenant des régularités statistiques : après "la capitale de la France est", le token le plus probable est "Paris". Il n'y a pas de base de données interne consultée en temps réel, pas de "recherche" par défaut : c'est un calcul de probabilité, répété token après token, extrêmement rapide.

**C'est cette mécanique qui explique à la fois pourquoi l'IA est si utile et pourquoi elle peut se tromper avec un aplomb total.** Un LLM ne fait pas de distinction interne entre "je suis sûr de ce fait" et "je complète une phrase de façon plausible" — les deux processus sont, du point de vue du modèle, la même opération de prédiction. Quand l'information demandée est bien représentée dans les données d'entraînement (un fait très documenté, une formule connue), la prédiction est fiable. Quand l'information est rare, récente, très spécifique, ou absente des données d'entraînement, le modèle produit quand même la suite la plus plausible statistiquement — et cette suite peut être entièrement inventée. C'est ce qu'on appelle une **hallucination** : une statistique qui n'existe pas, une citation jamais prononcée, une référence d'article qui n'a jamais été publiée — présentées avec exactement le même ton de confiance qu'une réponse correcte.

**Ce qu'il faut retenir opérationnellement** : le niveau de confiance affiché dans le ton d'une réponse IA n'a **aucun lien** avec sa fiabilité réelle. Un LLM ne dit quasiment jamais "je ne sais pas" spontanément — il continue la prédiction la plus probable, même quand l'information sous-jacente n'existe pas. C'est pour cette raison que toute donnée factuelle précise (chiffre, date, nom, citation, référence) produite par une IA doit être vérifiée à la source avant d'être utilisée dans un travail professionnel — ce réflexe est développé en détail dans le guide pratique de ce module.

### Panorama comparatif des 5 IA de cette formation

Les 5 plateformes couvertes dans ce parcours ne sont pas interchangeables : chacune a été construite avec des priorités différentes, et un professionnel efficace choisit l'outil selon la tâche, pas par habitude.

| Plateforme | Ce qui la distingue | Meilleur usage |
|---|---|---|
| **ChatGPT** (OpenAI) | La plus répandue, écosystème de GPTs personnalisés et de plugins très développé, forte polyvalence | Généraliste, automatisation de tâches, brainstorming rapide, réponse multi-domaine |
| **Claude** (Anthropic) | Fenêtre de contexte très large, rigueur et fidélité aux instructions, bonne tenue sur du texte long et structuré | Rédaction professionnelle, analyse de documents longs (rapports, contrats) |
| **Copilot** (Microsoft) | Intégré nativement à Office 365 — accès direct aux fichiers déjà présents dans l'environnement de travail | Travail quotidien dans Word, Excel, Outlook, Teams |
| **Perplexity** | Recherche web en temps réel avec sources systématiquement citées et vérifiables | Recherche d'information récente, veille sectorielle, question d'actualité |
| **Gemini** (Google) | Gestion multimodale native (texte, image, tableur) et intégration à Google Workspace | Contenu multimodal, travail dans Docs/Sheets/Gmail |

**Ce qu'il faut retenir** : ChatGPT et Claude se recoupent largement en usage généraliste, mais Claude tient mieux la distance sur un document long et complexe, tandis que ChatGPT a l'écosystème le plus large pour automatiser des tâches répétitives. Copilot et Gemini ne sont pas d'abord des "IA" au sens autonome — ce sont des couches d'IA intégrées à un écosystème bureautique déjà utilisé (Microsoft ou Google), avec l'avantage direct de travailler sur vos fichiers réels sans copier-coller. Perplexity, enfin, n'est pas un concurrent direct des autres : c'est l'outil à réflexe quand la question porte sur une information récente et qu'une source vérifiable est nécessaire.

### Ce qu'il ne faut JAMAIS soumettre à une IA grand public

Les plateformes IA grand public (comptes gratuits ou individuels de ChatGPT, Claude, Copilot, Perplexity, Gemini) traitent vos requêtes sur leur infrastructure, selon leurs propres conditions d'utilisation — qui ne sont pas celles de votre organisation. Sauf accord d'entreprise spécifique (licence professionnelle avec garanties contractuelles de non-réutilisation des données), il faut considérer que **tout ce que vous collez dans une IA grand public quitte le périmètre de contrôle de votre organisation**.

Trois catégories ne doivent jamais y être soumises sans validation explicite de la politique de votre structure :

- **Données confidentielles de bailleurs** — contrats, montants budgétaires non publiés, rapports financiers internes, correspondance sensible avec un donateur.
- **Données personnelles de bénéficiaires ou de collègues** — noms, coordonnées, situations individuelles (santé, statut, vulnérabilité), tout ce qui relève de la protection des données personnelles.
- **Informations sécuritaires sensibles** — mouvements de personnel, localisation d'équipes sur le terrain, détails d'un incident en cours ou non encore rendu public.

**Ce qu'il faut retenir opérationnellement** : le réflexe n'est pas "l'IA est dangereuse, il ne faut jamais l'utiliser" — c'est l'inverse d'une utilisation efficace. Le réflexe correct est : **avant de coller un document ou une donnée, se demander si son organisation a validé une politique d'usage de l'IA, et si cette donnée précise entre dans une des trois catégories ci-dessus.** Ce point est repris sous forme de checklist opérationnelle dans le guide pratique qui suit.

### Vocabulaire clé à maîtriser dès ce module

- **LLM (Large Language Model)** : modèle de langage entraîné sur de grands volumes de texte, qui génère du texte en prédisant le token suivant le plus probable.
- **Token** : unité de texte (mot ou fragment de mot) manipulée par le modèle — la brique de base de la génération.
- **Hallucination** : information inventée par une IA (statistique, citation, référence) présentée avec le même niveau de confiance qu'une information exacte.
- **Prompt** : l'instruction donnée à une IA générative — sa formulation influence directement la qualité de la réponse (approfondi au Module 03).
