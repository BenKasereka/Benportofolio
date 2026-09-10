# Module 02 — ChatGPT (OpenAI) — Productivité maximale & automatisation
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Structurer n'importe quelle demande à ChatGPT selon la méthode **RCCF** (Rôle, Contexte, Contraintes, Format) pour obtenir un résultat exploitable dès la première tentative, sans reformuler cinq fois.
- Distinguer les situations où reprompter suffit de celles où construire un **GPT personnalisé** est le choix rentable.
- Créer un GPT personnalisé complet (instructions, base de connaissances, tests) pour une tâche récurrente de votre organisation.
- Utiliser ChatGPT pour analyser un document long ou un rapport complexe en obtenant une réponse ciblée, pas un résumé générique de trois lignes.
- Itérer efficacement sur une réponse insatisfaisante — préciser, corriger, recadrer — au lieu de tout relancer depuis zéro.

### Pourquoi un prompt vague produit toujours une réponse moyenne

ChatGPT ne devine pas ce que vous voulez : il prédit la suite de texte la plus statistiquement probable compte tenu de ce que vous lui donnez. Si vous écrivez "aide-moi à écrire un rapport sur notre projet", le modèle n'a aucune information sur qui vous êtes, à qui s'adresse le rapport, quelle longueur est attendue, quel ton est de mise, ni quelles données inclure. Il produit donc la réponse la plus généraliste possible — celle qui pourrait vaguement convenir à n'importe quel projet, dans n'importe quel secteur, pour n'importe quel lecteur. C'est mathématiquement la réponse la moins utile qui soit, parce qu'elle est calibrée pour ne déplaire à personne plutôt que pour servir précisément votre cas.

**Ce n'est pas un défaut du modèle — c'est la conséquence directe de l'information que vous lui donnez.** Un consultant senior qui délègue une tâche à un junior sans préciser le destinataire, le format attendu ni les contraintes obtiendra le même résultat : un travail moyen, techniquement correct mais inutilisable tel quel. ChatGPT fonctionne exactement selon cette logique de délégation. La qualité de la réponse est directement proportionnelle à la qualité et à la précision de l'instruction de départ.

C'est pour cette raison qu'un professionnel qui maîtrise ChatGPT ne "discute" pas avec l'outil au fil de l'eau en espérant tomber sur la bonne réponse : il **construit** sa demande une fois, avec toute l'information nécessaire intégrée dès le premier message. C'est plus rapide, et le résultat est directement exploitable.

### La méthode RCCF — Rôle, Contexte, Contraintes, Format

RCCF est une structure de prompt en quatre blocs, à utiliser dans cet ordre, chaque fois que vous attendez un résultat professionnel plutôt qu'une simple réponse à une question factuelle.

| Bloc | Ce qu'il apporte au modèle | Exemple de formulation |
|---|---|---|
| **Rôle** | Le point de vue et le niveau d'expertise à adopter. Sans rôle assigné, le modèle répond en généraliste neutre — ni expert, ni novice, ni orienté vers votre secteur. | "Tu es un directeur financier d'ONG avec 15 ans d'expérience en reporting bailleurs." |
| **Contexte** | La situation réelle : qui est concerné, quelles données existent déjà, quelle contrainte de terrain s'applique. Sans contexte, le modèle invente ou généralise. | "Ce rapport s'adresse à un bailleur institutionnel européen, sur un projet de 8 mois déjà clôturé, budget de 240 000 USD." |
| **Contraintes** | Les limites à respecter : longueur, ce qu'il faut éviter, le niveau de langage, les éléments obligatoires. Sans contraintes, le modèle choisit à votre place — souvent mal. | "Maximum 500 mots, aucun jargon technique non expliqué, ton factuel sans superlatifs." |
| **Format** | La structure exacte de sortie : plan, tableau, liste à puces, nombre de sections. Sans format précisé, vous récupérez un bloc de texte continu qu'il faudra restructurer vous-même. | "Structure en 4 sections : Contexte, Résultats, Écarts budgétaires, Recommandations. Utilise des sous-titres." |

**Point clé souvent mal compris** : les quatre blocs ne sont pas interchangeables ni facultatifs à la carte. Un rôle sans contraintes donne un ton correct mais une longueur ou un format imprévisibles. Des contraintes sans contexte donnent un texte bien calibré mais générique, qui ne colle pas à votre situation réelle. C'est la combinaison des quatre qui élimine l'aléatoire — pas un seul des quatre isolément.

### Ce qu'est un GPT personnalisé, concrètement

Un **GPT personnalisé** (Custom GPT, accessible aux comptes ChatGPT Plus, Team ou Enterprise) n'est pas un nouveau modèle d'IA : c'est un **jeu d'instructions RCCF déjà écrites une fois pour toutes**, packagé avec — en option — des fichiers de connaissance que le GPT consulte à chaque réponse, et parfois des actions (connexions à des outils externes). Concrètement, au lieu de retaper votre rôle, votre contexte et vos contraintes à chaque nouvelle conversation, vous les écrivez une seule fois dans la configuration du GPT, et chaque membre autorisé de votre organisation les réutilise en un clic.

**À partir de quand ça vaut la peine d'en construire un plutôt que de reprompter à chaque fois ?** La règle pratique est simple : si une même tâche RCCF revient plus de 3 à 4 fois par mois, avec un rôle et des contraintes qui ne changent pas d'une fois à l'autre, le temps investi dans un GPT personnalisé (30 à 60 minutes de configuration) est rentabilisé dès la deuxième ou troisième utilisation. À l'inverse, pour une tâche ponctuelle ou qui change de nature à chaque fois, un bon prompt RCCF direct reste plus rapide qu'une configuration de GPT.

Exemples typiques de tâches qui justifient un GPT personnalisé en contexte professionnel : la relecture systématique des rapports bailleurs selon le format exigé par votre organisation, la rédaction de comptes rendus de réunion selon un gabarit fixe, l'analyse de CV selon une grille de critères propre à votre poste, ou la réponse de premier niveau aux questions récurrentes d'une équipe sur une procédure interne (à condition d'y attacher le document de procédure en base de connaissances).

**Ce qu'un GPT personnalisé ne remplace pas** : le jugement professionnel sur le résultat produit. Un GPT bien configuré réduit le temps de mise en forme et de cadrage, il ne dispense jamais de relire, corriger et valider la sortie avant de l'utiliser — exactement comme vous le feriez pour le travail d'un collaborateur junior à qui vous auriez délégué la même tâche.
