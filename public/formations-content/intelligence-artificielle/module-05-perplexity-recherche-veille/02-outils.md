# Module 05 — Perplexity AI — Recherche temps réel & veille stratégique
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Perplexity (perplexity.ai, app web et mobile)** — l'outil central du module. La version gratuite couvre déjà l'essentiel des usages de veille ponctuelle ; l'abonnement Pro débloque un nombre plus élevé de recherches Pro Search par jour et l'accès à des modèles de synthèse plus poussés, ce qui devient pertinent dès que la veille devient hebdomadaire ou quotidienne sur plusieurs sujets en parallèle.

**Pro Search** — le mode de recherche approfondie décrit dans la théorie. C'est le mode par défaut à utiliser pour toute recherche de ce module : il prend quelques secondes de plus qu'une recherche rapide, mais croise systématiquement plusieurs sources au lieu de s'arrêter à la première réponse plausible.

**Focus modes** — les filtres de type de source (Web, Académique, Actualités...), accessibles depuis la barre de recherche. À combiner avec les critères de sourcing explicites de l'étape 1 du guide ci-dessous.

**Espaces (Collections)** — le mécanisme qui transforme une recherche ponctuelle en veille récurrente. Un Espace conserve un fil de recherches liées et peut porter des instructions par défaut (ex. "toujours répondre en citant la date de publication de chaque source, et signaler les sources de plus de 6 mois comme potentiellement obsolètes").

**Excel / Google Sheets** — l'outil de suivi de votre veille, via le template `grille-veille-sectorielle-perplexity.xlsx` fourni avec ce module.

**Word** — pour la mise en forme finale d'une recherche sourcée destinée à être partagée, via le template `gabarit-rapport-recherche-sourcee.docx`.

### Guide pratique étape par étape

Ce guide part d'une situation réelle : vous devez produire une information fiable et datée sur un sujet professionnel — un point réglementaire, une donnée de marché, la position d'un acteur — et être capable de justifier chaque affirmation devant un collègue ou un bailleur qui vous demanderait "d'où vient ce chiffre ?".

**Étape 1 — Structurer la requête de recherche approfondie avec des critères de sourcing explicites**

Ne posez jamais une question nue à Perplexity si le résultat doit être fiable. Une requête de recherche approfondie bien construite précise trois choses dans le prompt lui-même :
1. **Le type de source recherché** — "en priorité des rapports officiels et communiqués du bailleur, pas des articles de blog" ou "des données gouvernementales et de la presse spécialisée reconnue".
2. **La période concernée** — "les évolutions publiées au cours des 6 derniers mois", pas "les informations disponibles" sans borne temporelle.
3. **Le niveau d'exigence de citation** — "cite chaque affirmation avec la date de publication de la source, et signale explicitement si une information n'a pas pu être confirmée par une source primaire".

Exemple concret : plutôt que *"Quelles sont les règles de conformité d'USAID/BHA ?"*, écrivez *"Quelles sont les évolutions des règles de conformité et de reporting financier d'USAID/BHA publiées au cours des 6 derniers mois ? Priorise les communiqués officiels et la documentation BHA elle-même, cite la date de publication de chaque source, et signale si une information provient uniquement de presse spécialisée sans confirmation officielle."* Activez le mode Pro Search avant d'envoyer cette requête — une question qui demande de croiser plusieurs évolutions réglementaires sur plusieurs mois est exactement le cas d'usage pour lequel ce mode existe.

**Étape 2 — Cliquer sur chaque source citée avant de considérer une information comme fiable**

Une réponse Perplexity n'est pas fiable parce qu'elle est sourcée — elle est fiable une fois que vous avez vérifié que les sources citées disent réellement ce que la synthèse leur attribue, et qu'elles sont à jour. Pour chaque affirmation qui compte dans votre usage professionnel (un chiffre, une date d'entrée en vigueur, une obligation réglementaire), ouvrez la source citée et vérifiez trois choses : l'affirmation y figure bien telle quelle (pas déformée par la synthèse), la source a une date identifiable, et cette date est cohérente avec le niveau d'actualité dont vous avez besoin. Une réponse dont vous n'avez vérifié aucune source ne doit jamais être transmise telle quelle à un tiers.

**Étape 3 — Mettre en place une veille récurrente avec une requête réutilisable**

Une veille efficace n'est pas une recherche que vous refaites de mémoire chaque semaine en espérant formuler la même chose : c'est une requête écrite une fois, réutilisée à l'identique (ou dans un Espace dédié), avec une fréquence et des critères de pertinence définis à l'avance. Trois éléments à figer dès la mise en place :
- **La requête type**, formulée selon la méthode de l'étape 1 (type de source, période glissante, exigence de citation).
- **La fréquence** adaptée à la vitesse d'évolution réelle du sujet — hebdomadaire pour une réglementation de bailleur qui évolue par cycles de notes de service, mensuelle pour une tendance de marché plus lente.
- **Les critères de pertinence** qui déterminent si un résultat mérite une action (ex. "toute évolution touchant les seuils de reporting financier ou les règles d'éligibilité des dépenses" vs "simple rappel de règles déjà connues, à ignorer").

Consignez ces trois éléments dans le template `grille-veille-sectorielle-perplexity.xlsx` : une ligne par sujet de veille, avec la requête exacte utilisée, la date de la dernière recherche, les sources trouvées, votre évaluation de leur fiabilité, et l'action à prendre. La colonne d'alerte du fichier calcule automatiquement, à partir de la date du jour, si une ligne n'a pas été revue depuis plus de 30 jours — un signal simple pour ne jamais laisser une veille "s'endormir" sans que vous vous en rendiez compte.

**Étape 4 — Formaliser une recherche sourcée avec le gabarit de rapport**

Quand une recherche approfondie doit être partagée avec un collègue, un responsable ou un bailleur, ne renvoyez jamais un lien vers un fil de conversation Perplexity brut. Reformulez-la dans le template `gabarit-rapport-recherche-sourcee.docx` : la question de recherche exacte, la méthodologie et les sources consultées, les constats clés avec leur citation et leur niveau de confiance individuel, et une conclusion qui distingue clairement ce qui est confirmé de ce qui reste à vérifier. Ce format d'une à deux pages est ce qui transforme une recherche IA en document professionnel présentable, avec une traçabilité que le destinataire peut vérifier lui-même s'il le souhaite.
