# Module 03 — Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Claude.ai (interface web ou application, plan gratuit ou Pro)** — l'outil central de ce module. Le plan gratuit permet déjà de déposer un document long et de pratiquer les méthodes ci-dessous ; le plan Pro augmente les volumes d'usage quotidien et donne accès à des limites de contexte plus confortables pour un usage professionnel soutenu.

**Zone de téléversement de documents** — le bouton trombone dans la fenêtre de conversation permet de déposer directement un PDF, un Word ou un fichier texte pour analyse. C'est le point d'entrée pour toute analyse ponctuelle d'un document long.

**Projects** — un espace de travail persistant qui conserve un ou plusieurs documents de référence et l'historique des échanges qui s'y rapportent. Utile dès qu'un dossier (un audit, une politique en cours de rédaction) s'étend sur plusieurs jours ou plusieurs sessions : vous évitez de retéléverser le même document à chaque nouvelle conversation, et Claude garde la mémoire de ce qui a déjà été validé sur ce dossier.

**Artifacts** — un panneau séparé où Claude peut produire un document structuré (texte long, tableau) que vous consultez et modifiez indépendamment du fil de conversation. Pratique pour une procédure ou un rapport en cours de rédaction : le document se construit dans l'Artifact pendant que la conversation sert à discuter des ajustements, sans mélanger les deux.

### Guide pratique étape par étape — Analyser un document long (100+ pages) et en tirer une synthèse exploitable

Ce guide part d'une situation réelle : on vous remet un document volumineux — rapport d'audit, étude sectorielle, politique institutionnelle — et on attend de vous une synthèse utile dans un délai court. Le réflexe qui échoue presque toujours est de déposer le document et de demander "fais-moi un résumé" : sans précision, Claude produit un résumé de longueur et de niveau de détail moyens, qui ne correspond ni à votre audience réelle ni à l'usage que vous en ferez.

**Étape 1 — Définissez la demande de synthèse avant de déposer le document**

Avant même d'ouvrir la conversation, répondez à trois questions par écrit : **quel est l'objectif de l'analyse** (extraire des constats, comparer deux versions, vérifier une conformité...), **à quelle audience la synthèse est-elle destinée** (direction, équipe technique, bailleur), et **quel niveau de détail** est attendu (une page de synthèse exécutive, ou une analyse détaillée point par point). Ces trois réponses déterminent entièrement la formulation de votre demande — sans elles, vous obtenez un résultat calibré pour personne en particulier.

**Étape 2 — Déposez le document et formulez la demande structurée en un seul message**

Téléversez le document, puis rédigez une demande qui combine explicitement : l'objectif, l'audience, le niveau de détail et le format de sortie attendu (nombre de points, présence d'un tableau, longueur maximale). Utilisez le template `04-templates/gabarit-prompts-analyse-documents-longs.xlsx` fourni avec ce module : il contient des exemples entièrement rédigés (synthèse de rapport bailleur, extraction de constats d'audit, comparaison de versions de politique) et des lignes vierges pour construire vos propres demandes selon ce même canevas.

**Étape 3 — Vérifiez la synthèse produite contre le document source, pas contre votre impression générale**

Une fois la synthèse obtenue, reprenez chaque point produit et vérifiez qu'il correspond réellement à un passage identifiable du document — pas à une généralisation plausible. Demandez à Claude de citer la section ou la page d'où provient chaque constat si le format du document le permet : cela transforme une synthèse "qui semble correcte" en une synthèse vérifiable.

**Étape 4 — Demandez explicitement une revue critique des constats extraits**

Avant de considérer la synthèse comme finale, demandez à Claude d'identifier les constats les moins étayés par le document, ou les conclusions qui reposent sur une hypothèse plutôt que sur une donnée confirmée. C'est le même levier de contre-argumentation vu en théorie, appliqué spécifiquement à un travail d'analyse documentaire : il révèle les faiblesses de la synthèse avant qu'un lecteur exigeant ne les trouve à votre place.

**Étape 5 — Ajustez le niveau de détail et le format si la première version ne convient pas**

Si la synthèse est trop détaillée pour une direction pressée, ou au contraire trop superficielle pour une équipe technique qui doit agir dessus, ne recommencez pas la demande depuis zéro : précisez le correctif ("condense en une demi-page, garde uniquement les constats à impact financier direct") et laissez Claude réviser la version existante.

### Guide pratique étape par étape — Rédiger un rapport ou une procédure professionnelle par itération

Ce guide s'applique dès que le livrable attendu est un document original de plusieurs pages — rapport, procédure interne, politique — plutôt qu'une synthèse d'un document existant.

**Étape 1 — Faites établir et validez le plan avant toute rédaction**

Décrivez à Claude l'objectif du document, son audience et les grandes sections attendues, puis demandez uniquement un plan détaillé (titres de sections et, pour chacune, deux à trois lignes sur ce qu'elle doit couvrir) — pas encore de texte rédigé. Validez ou corrigez ce plan avant de passer à l'étape suivante : une erreur de structure corrigée à ce stade coûte deux minutes ; corrigée après rédaction complète, elle peut obliger à tout refaire.

**Étape 2 — Rédigez une section à la fois, dans l'ordre du plan validé**

Demandez la rédaction de la première section uniquement, en rappelant le contexte et les contraintes de longueur et de ton propres à cette section. Lisez-la, corrigez ou faites corriger ce qui ne convient pas, puis seulement ensuite passez à la section suivante. Ne demandez jamais "continue avec le reste du document" sans avoir validé la section précédente : c'est le point qui distingue une rédaction maîtrisée d'une génération en un seul bloc qu'il faudra reprendre en entier.

**Étape 3 — Demandez une contre-argumentation ciblée sur les sections sensibles**

Pour les sections qui portent une recommandation, une conclusion ou une clause engageante (recommandations d'un rapport, obligations d'une procédure), demandez explicitement à Claude de challenger ce qui vient d'être rédigé : quelle objection un lecteur exigeant opposerait-il à cette recommandation ? Cette clause laisse-t-elle une zone d'interprétation qui pourrait être exploitée ? Intégrez les ajustements nécessaires avant de passer à la section suivante, pas après la rédaction complète du document.

**Étape 4 — Assemblez et faites une relecture de cohérence globale**

Une fois toutes les sections rédigées et validées individuellement, demandez une relecture d'ensemble du document assemblé : cohérence de ton entre les sections, redites à éliminer, transitions à fluidifier. Utilisez le template `04-templates/guide-redaction-rapports-procedures-claude.docx` fourni avec ce module pour cadrer cette méthode section par section, avec un tableau de suivi par section et une checklist de revue critique avant diffusion.

**Étape 5 — Effectuez la relecture critique humaine finale avant toute diffusion**

Aucune version produite par itération, aussi soignée soit-elle, ne se substitue à une relecture humaine finale avant envoi à un tiers — bailleur, direction, partenaire. Cette relecture porte spécifiquement sur ce qu'un modèle ne peut pas juger à votre place : la justesse politique du ton dans votre contexte organisationnel, l'exactitude des données chiffrées citées, et la cohérence avec des décisions ou des engagements pris ailleurs que dans cette conversation.
