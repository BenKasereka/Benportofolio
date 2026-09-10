# Module 07 — Prompting Engineering avancé — L'art de commander l'IA
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Votre IA générative habituelle (ChatGPT, Claude, Gemini, Copilot...)** — ce module est volontairement transversal : les techniques de chain-of-thought, tree-of-thought et ICIO fonctionnent sur n'importe quel modèle conversationnel de génération récente, pas seulement sur un outil précis. Appliquez-les avec l'outil que vous utilisez déjà au quotidien, vu dans les modules précédents.

**Excel / Google Sheets** — l'outil qui héberge votre bibliothèque de prompts d'organisation. Le template `bibliotheque-prompts-organisationnelle-icio.xlsx` fourni avec ce module est prêt à l'emploi : il suffit de le dupliquer sur un espace partagé (Drive, SharePoint) accessible à toute l'équipe.

**Word** — pour documenter, cas par cas, la transformation d'un prompt instable en prompt chain-of-thought fiable, avec le template `guide-construction-prompts-chain-of-thought.docx`.

### Guide pratique étape par étape — "Transformer un prompt instable en prompt fiable et reproductible"

Ce guide part d'une situation extrêmement fréquente : vous avez un prompt qui fonctionne "à peu près", que vous utilisez depuis des semaines pour une tâche récurrente (analyse, synthèse, classement...), mais dont le résultat varie d'une exécution à l'autre sans que vous sachiez vraiment pourquoi. Voici la méthode, dans l'ordre, pour le réparer une bonne fois pour toutes.

**Étape 1 — Diagnostiquer précisément pourquoi le prompt actuel est instable**

Avant de réécrire quoi que ce soit, exécutez votre prompt actuel 3 fois de suite sur le même input, et comparez les 3 résultats côte à côte. Posez-vous ces questions : est-ce la **structure** qui change (sections différentes, ordre différent) ? Est-ce le **niveau de détail** qui varie ? Est-ce la **conclusion elle-même** qui diffère sur le fond ? Ces trois symptômes n'ont pas la même cause : le premier vient généralement d'un Output mal spécifié (problème ICIO), le troisième vient généralement d'un raisonnement non guidé (problème CoT). Ne réécrivez jamais un prompt sans avoir identifié lequel des deux problèmes — ou les deux — vous devez traiter.

**Étape 2 — Décomposer la tâche en étapes de raisonnement explicites**

Prenez une feuille blanche et écrivez, en langage naturel, comment VOUS raisonneriez pour accomplir cette tâche si on vous la confiait sans IA. Pas dans l'abstrait — les étapes réelles que vous suivriez. Pour une analyse d'écarts budgétaires par exemple : "1. Je repère les postes en écart de plus de X%. 2. Pour chacun, je regarde si l'écart vient d'un volume différent du prévu ou d'un prix différent. 3. Je classe les écarts par urgence de correction. 4. Je formule une recommandation par écart majeur." Cette liste devient le squelette de votre section chain-of-thought — ne l'inventez pas de façon générique, elle doit refléter votre expertise métier réelle.

**Étape 3 — Structurer le prompt complet avec la méthode ICIO**

Réécrivez le prompt en respectant strictement les quatre blocs, dans cet ordre :
- **Instruction** : une phrase, un verbe d'action clair, qui inclut la mention explicite du raisonnement étape par étape ("Analyse les écarts budgétaires suivants en suivant précisément les étapes de raisonnement ci-dessous avant de conclure").
- **Contexte** : qui vous êtes, pour qui c'est destiné, le niveau de détail attendu, les contraintes de votre organisation.
- **Étapes de raisonnement** (votre CoT de l'étape 2), numérotées, explicites.
- **Input** : les données réelles, clairement délimitées (par exemple entre balises `<données>...</données>`).
- **Output** : le format exact attendu — titres de sections, longueur maximale, ce qu'il faut exclure ("ne pas inclure de recommandation générique type 'suivre l'évolution', uniquement des actions chiffrées").

**Étape 4 — Tester sur au moins 3 cas différents avant de considérer le prompt "fiable"**

Un prompt qui fonctionne bien sur un seul cas n'est pas un prompt fiable — c'est un prompt qui a eu de la chance une fois. Exécutez-le sur au moins 3 jeux de données réels et différents (pas 3 variantes du même exemple). Vérifiez que la structure de sortie reste identique, que le niveau de détail reste comparable, et que la qualité du raisonnement tient sur un cas plus complexe que les autres. Un prompt qui échoue sur le 3ème cas n'est pas prêt pour la bibliothèque — retournez à l'étape 2.

**Étape 5 — Documenter la transformation avec le template dédié**

Ouvrez le template `guide-construction-prompts-chain-of-thought.docx`. Renseignez le prompt original, les étapes de raisonnement identifiées, le prompt CoT+ICIO réécrit, et les résultats des tests sur vos différents cas. Ce document sert de preuve que le prompt est réellement validé — pas juste "ça a eu l'air de marcher" — et sert de référence si quelqu'un d'autre doit le reprendre ou le faire évoluer plus tard.

**Étape 6 — Enregistrer le prompt validé dans la bibliothèque d'organisation, jamais dans un fichier personnel**

Ouvrez le template `bibliotheque-prompts-organisationnelle-icio.xlsx`. Ajoutez une ligne avec : la catégorie/tag (pour le retrouver par usage — "Analyse financière", "Rédaction RH", "Reporting"...), le nom du prompt, ses quatre blocs ICIO, le nombre de cas sur lesquels il a été testé, un numéro de version et la date de dernière mise à jour, et son statut (Validé / En test / À réviser). Cette dernière colonne est celle qui distingue une bibliothèque professionnelle d'un simple tas de prompts empilés : un prompt "Validé" peut être utilisé sans relecture par un collègue, un prompt "En test" doit être vérifié avant tout usage sur un cas réel.

### Structurer et faire vivre la bibliothèque de prompts — au-delà du premier remplissage

Une bibliothèque de prompts n'est utile que si elle reste vivante. Trois pratiques à adopter dès la création du fichier partagé :

**Catégorisation stable par usage, pas par outil.** Classez vos prompts par ce qu'ils accomplissent (analyse financière, rédaction de compte-rendu, tri de candidatures) et non par l'IA utilisée pour les exécuter — un même prompt ICIO fonctionne généralement sur plusieurs outils, alors que classer par outil oblige à dupliquer l'entrée à chaque changement de plateforme.

**Versioning systématique à chaque modification.** Quand vous améliorez un prompt existant (par exemple pour corriger un défaut découvert sur un 4ème cas), incrémentez la version (v1 → v2) et notez la date — ne remplacez jamais silencieusement un prompt validé sans laisser de trace de ce qui a changé. Un collègue qui obtient un résultat différent de celui documenté doit pouvoir vérifier s'il utilise bien la dernière version.

**Test de régression avant toute mise à jour d'un prompt en production.** Avant de publier une nouvelle version d'un prompt déjà utilisé par l'équipe, ré-exécutez-la sur les cas qui avaient servi à valider la version précédente. Un prompt amélioré pour un cas particulier qui casse silencieusement un cas qui fonctionnait déjà est une régression — exactement comme en développement logiciel — et c'est la cause la plus fréquente de perte de confiance de l'équipe envers la bibliothèque.
