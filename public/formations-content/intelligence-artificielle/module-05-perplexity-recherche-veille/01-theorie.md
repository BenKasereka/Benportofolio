# Module 05 — Perplexity AI — Recherche temps réel & veille stratégique
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Mener une recherche approfondie sur Perplexity en formulant des critères de sourcing explicites (type de source, période, origine).
- Structurer une requête de veille sectorielle ou réglementaire réutilisable, avec une fréquence et des critères de pertinence définis à l'avance.
- Mettre en place une veille récurrente sur un sujet donné (bailleur, réglementation, marché) sans repartir de zéro à chaque session.
- Utiliser Perplexity pour du fact-checking rigoureux, en vérifiant systématiquement la fiabilité et la date de chaque source citée avant de la considérer comme fiable.
- Identifier les situations où Perplexity n'est PAS le bon outil, et basculer vers Claude ou ChatGPT en connaissance de cause.

### Ce qui distingue Perplexity des quatre autres IA de cette formation

ChatGPT, Claude, Copilot et Gemini répondent avant tout à partir de ce qu'ils ont appris pendant leur entraînement — un stock de connaissances figé à une date de coupure ("knowledge cutoff"). Ils peuvent avoir un module de navigation web activable en option, mais ce n'est pas leur mode de fonctionnement par défaut, et ce n'est pas ce pour quoi ils sont optimisés. Demandez à l'un d'eux un fait récent sans activer explicitement la recherche web, et vous obtenez soit un refus prudent, soit — plus dangereux — une réponse assurée qui date en réalité de plusieurs mois ou années.

Perplexity fonctionne à l'envers : chaque requête déclenche une recherche web réelle au moment où vous posez la question, puis un modèle de langage synthétise une réponse à partir des pages effectivement trouvées — pas à partir de sa mémoire d'entraînement. Chaque affirmation de la réponse est reliée à un numéro de citation cliquable, qui pointe vers la page source exacte. C'est un système dit "RAG" (retrieval-augmented generation) poussé à son maximum : la recherche n'est pas une fonctionnalité additionnelle, c'est le cœur du produit.

**Ce que ça change concrètement pour vous** : dès qu'une information doit être datée, sourcée et vérifiable — un chiffre de marché, une actualité réglementaire, le prix actuel d'un service, la position récente d'un concurrent — Perplexity est l'outil de choix de cette formation. Pas parce qu'il est "plus intelligent" que Claude ou ChatGPT, mais parce qu'il est construit pour ça, avec une traçabilité que les autres outils n'offrent pas nativement.

**Ce que ça ne change pas** : Perplexity reste un moteur de réponse à des questions factuelles avec sources, pas un outil de raisonnement complexe, de rédaction longue ou de création. Un rapport de 15 pages, une stratégie argumentée en plusieurs étapes, une relecture juridique fine — ce sont des tâches où Claude ou ChatGPT, qui tiennent un raisonnement cohérent sur un contexte long, sont nettement plus adaptés. Utiliser le bon outil pour la bonne tâche fait partie du métier ; ce point revient en détail dans les pièges fréquents du module.

### Sourcing : la hiérarchie que Perplexity ne fait pas à votre place

Perplexity affiche des sources, mais il ne juge pas leur fiabilité relative à votre place — il retourne ce que le web récent lui donne, classé par pertinence algorithmique, pas par autorité réelle. Un communiqué officiel d'un bailleur, un article de presse spécialisée, un post de blog non signé et un forum de discussion peuvent apparaître les uns à côté des autres dans la même liste de citations. C'est à vous d'établir la hiérarchie :

| Niveau de fiabilité | Type de source | Exemple |
|---|---|---|
| **Élevé** | Source primaire officielle | Site institutionnel du bailleur (USAID/BHA, ECHO), texte réglementaire publié, rapport officiel |
| **Moyen-élevé** | Presse spécialisée reconnue | Devex, ReliefWeb, revues sectorielles avec ligne éditoriale identifiable |
| **Moyen** | Presse généraliste | Grands médias sans expertise sectorielle particulière sur le sujet précis |
| **Faible** | Blog, forum, réseau social non vérifié | Contenu sans auteur identifiable, sans date claire, ou clairement orienté |

Cette hiérarchie n'est pas théorique : elle conditionne directement la méthode pratique du module suivant (02. Outils & Guide Pratique), où chaque requête de recherche approfondie doit préciser le type de source recherché, et chaque veille mise en place doit inclure une étape explicite de vérification de fiabilité avant que l'information soit considérée comme actionnable.

### Vocabulaire clé à maîtriser dès ce module

- **Pro Search** : le mode de recherche approfondie de Perplexity, qui décompose une question complexe en plusieurs sous-recherches successives avant de synthétiser une réponse — à privilégier pour toute recherche qui nécessite de croiser plusieurs sources, par opposition à la recherche rapide par défaut.
- **Focus mode** : un filtre qui restreint la recherche à un type de source (Web général, Académique, Actualités, Réseaux sociaux...) — utile pour orienter la recherche vers le registre de sourcing pertinent.
- **Citation** : le numéro cliquable associé à chaque affirmation de la réponse, qui renvoie à la page web exacte utilisée — la trace de vérifiabilité qui distingue Perplexity d'une génération de texte non sourcée.
- **Espace (Collection)** : un dossier de travail persistant dans Perplexity qui regroupe des recherches liées à un même sujet de veille, avec des instructions par défaut réutilisables — le mécanisme qui rend une veille récurrente réellement pratique d'un jour sur l'autre.
- **Fraîcheur de l'information (recency)** : le critère de date d'une source, distinct de sa fiabilité — une source très fiable mais ancienne sur un sujet qui évolue vite (réglementation, marché) doit être signalée comme potentiellement obsolète, jamais traitée comme actuelle par défaut.
