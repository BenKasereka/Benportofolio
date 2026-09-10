# Module 07 — Prompting Engineering avancé — L'art de commander l'IA
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Appliquer la technique du chain-of-thought (CoT) pour fiabiliser le raisonnement d'une IA sur une tâche d'analyse complexe.
- Reconnaître les situations où le tree-of-thought (ToT) est justifié — et celles, majoritaires, où il ne fait qu'ajouter du coût et de la latence pour rien.
- Structurer n'importe quel prompt professionnel récurrent avec la méthode ICIO (Instruction / Contexte / Input / Output).
- Diagnostiquer pourquoi un prompt produit des résultats différents d'une exécution à l'autre, et le réécrire pour le rendre reproductible.
- Construire et faire vivre une bibliothèque de prompts d'organisation, avec versioning et tests de non-régression sur des cas connus.

### Le problème que ce module règle

Si vous utilisez déjà une IA générative depuis plusieurs mois, vous avez probablement vécu ceci : vous demandez la même analyse deux fois, à un jour d'intervalle, et vous obtenez deux structures différentes, deux niveaux de profondeur différents, parfois deux conclusions contradictoires. Ce n'est pas un bug du modèle. C'est un symptôme de prompt mal conçu — un prompt qui laisse le modèle deviner ce que vous attendez au lieu de le contraindre à un raisonnement explicite.

Ce module s'attaque directement à ce problème, avec deux outils complémentaires : le **chain-of-thought**, qui force le modèle à montrer et structurer son raisonnement plutôt qu'à sauter à une conclusion, et la **méthode ICIO**, qui structure l'enrobage du prompt (ce qu'on lui donne comme instruction, contexte, input et output attendu) pour qu'il n'ait plus besoin de deviner.

### Pourquoi "réfléchir étape par étape" change radicalement la qualité du résultat

Un modèle de langage génère sa réponse token par token, dans l'ordre. Concrètement : quand vous lui posez une question qui demande un raisonnement en plusieurs étapes (calculer un écart, comparer plusieurs options, diagnostiquer une cause), et que vous demandez directement la conclusion, le modèle doit produire cette conclusion en une seule passe — sans brouillon, sans étape intermédiaire visible. Il improvise un raccourci, et ce raccourci est instable : il change légèrement à chaque génération, ce qui explique l'inconsistance que vous observez.

La technique **chain-of-thought** consiste à demander explicitement au modèle de dérouler son raisonnement avant de donner la conclusion — "réfléchis étape par étape", ou mieux, une liste précise des étapes que vous voulez le voir suivre. Deux effets mesurables :

1. **La qualité du résultat final augmente**, parce que chaque étape intermédiaire sert de base solide à la suivante — le modèle ne peut plus sauter directement à une conclusion non vérifiée.
2. **Vous pouvez auditer le raisonnement.** Si la conclusion est fausse ou étrange, vous voyez à quelle étape précise ça a dérapé, au lieu de devoir deviner. C'est ce qui transforme l'IA d'une boîte noire en un outil de travail que vous pouvez corriger.

**Ce que le chain-of-thought n'est pas** : ce n'est pas juste ajouter la formule magique "think step by step" à la fin d'un prompt bancal. C'est concevoir, en amont, la séquence de raisonnement que la tâche exige réellement — et l'écrire explicitement dans le prompt. Un CoT générique et vague produit un raisonnement générique et vague. Un CoT qui liste les 4 ou 5 étapes de raisonnement réelles de votre métier (ex : "1. Identifie les postes budgétaires en écart de plus de 10%. 2. Pour chacun, distingue écart de volume et écart de prix. 3. ...") produit un raisonnement de qualité professionnelle.

### Tree-of-thought — explorer plusieurs pistes avant de trancher

Le **tree-of-thought** est une extension du chain-of-thought pour les cas où il n'y a pas UNE séquence de raisonnement évidente, mais plusieurs pistes plausibles qu'il faut explorer avant de choisir la meilleure. Au lieu de dérouler un seul raisonnement linéaire, vous demandez au modèle de générer 2 ou 3 approches distinctes, d'évaluer chacune selon des critères que vous précisez, puis de recommander la meilleure en justifiant l'élimination des autres.

**Exemple concret d'usage justifié** : "Propose 3 stratégies différentes pour réduire de 15% les coûts logistiques du dernier trimestre, en explorant à chaque fois un angle différent (renégociation fournisseurs, mutualisation de transport, réduction de volume). Pour chaque stratégie, liste 2 risques et 2 bénéfices. Recommande celle qui a le meilleur rapport impact/risque et justifie ton choix."

**Ce que le tree-of-thought coûte** : plus de tokens, plus de temps de génération, un prompt plus long à concevoir et à relire. Pour une tâche où le chemin de raisonnement est déjà connu et unique (calculer un écart, résumer un compte-rendu, classer des candidatures selon une grille fixe), le tree-of-thought n'apporte rien — un chain-of-thought bien construit suffit et coûte moins cher. Réservez le tree-of-thought aux décisions à enjeu réel où plusieurs options méritent objectivement d'être comparées avant de trancher.

### La méthode ICIO — le cadre qui rend un prompt réutilisable

Le chain-of-thought règle le problème du raisonnement. La méthode **ICIO** règle un problème différent, tout aussi courant : un prompt qui marche "à peu près" une fois, mais que personne — pas même son auteur trois semaines plus tard — ne sait comment réutiliser correctement pour un autre cas. ICIO structure systématiquement quatre éléments dans n'importe quel prompt professionnel récurrent :

| Élément | Ce qu'il contient | Erreur fréquente si absent |
|---|---|---|
| **I — Instruction** | L'action précise demandée à l'IA, au mode impératif : "analyse", "compare", "rédige", "classe". Une seule instruction principale, pas trois mélangées. | Le modèle devine ce qu'on veut vraiment parmi plusieurs demandes vagues empilées dans un seul paragraphe. |
| **C — Contexte** | Les informations de fond nécessaires pour interpréter correctement la tâche : rôle de l'utilisateur, secteur, contraintes, ton attendu, destinataire final. | Le modèle produit un résultat techniquement correct mais inadapté à l'audience réelle (trop technique pour un board, trop vague pour un expert). |
| **I — Input** | Les données concrètes sur lesquelles travailler : le texte à analyser, le tableau de chiffres, le brief à synthétiser — clairement délimité, idéalement entre balises ou guillemets. | Le modèle confond les instructions et les données quand tout est mélangé dans un même bloc de texte. |
| **O — Output** | Le format de sortie attendu : structure, longueur, sections obligatoires, ce qu'il ne faut PAS inclure. | Le modèle choisit un format différent à chaque exécution — c'est la cause la plus fréquente d'inconsistance visuelle d'une réponse à l'autre. |

**Ce qu'il faut retenir opérationnellement** : un prompt ICIO n'est pas plus long qu'un prompt mal structuré — il est simplement organisé dans un ordre stable et complet. Une fois qu'un prompt ICIO fonctionne pour un cas, il fonctionne pour tous les cas similaires, parce que seul l'Input change d'une exécution à l'autre — l'Instruction, le Contexte et l'Output restent fixes. C'est cette stabilité qui rend un prompt réutilisable en bibliothèque, plutôt que jetable après un seul usage.

### Vocabulaire clé à maîtriser dès ce module

- **Chain-of-thought (CoT)** : technique consistant à faire dérouler explicitement au modèle les étapes de son raisonnement avant sa conclusion finale.
- **Tree-of-thought (ToT)** : extension du CoT où plusieurs pistes de raisonnement sont explorées en parallèle puis comparées avant de choisir la meilleure.
- **Méthode ICIO** : cadre de structuration d'un prompt en quatre blocs — Instruction, Contexte, Input, Output.
- **Prompt réutilisable** : prompt dont seul l'Input change d'un usage à l'autre, l'Instruction/Contexte/Output restant stables — condition nécessaire pour l'intégrer à une bibliothèque d'organisation.
- **Test de régression (appliqué à un prompt)** : ré-exécuter un prompt révisé sur les mêmes cas qui avaient servi à le valider la première fois, pour vérifier qu'une modification n'a pas cassé un cas qui fonctionnait déjà.
