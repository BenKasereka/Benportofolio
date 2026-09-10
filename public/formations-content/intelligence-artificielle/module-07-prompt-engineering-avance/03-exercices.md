# Module 07 — Prompting Engineering avancé — L'art de commander l'IA
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Le prompt d'analyse budgétaire qui ne dit jamais la même chose deux fois"

**Contexte (fictif, inspiré de situations réelles rencontrées dans des organisations utilisant l'IA sans méthode de prompting)**

Vous êtes chargé(e) de l'analyse budgétaire mensuelle d'un département de votre organisation. Depuis 4 mois, vous utilisez le prompt suivant, copié-collé chaque mois avec un tableau de chiffres différent en dessous :

> *"Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : [tableau collé]."*

Le problème : certains mois, la réponse est une liste à puces de 3 lignes. D'autres mois, c'est un texte de 2 pages avec des sous-titres. Parfois l'IA priorise les écarts de dépenses, parfois elle se concentre sur les écarts de recettes sans le signaler. Votre supérieur vous a fait remarquer, lors de la dernière réunion, que "le format change tout le temps" et qu'il ne sait plus à quoi s'attendre en ouvrant votre analyse — ce qui l'oblige à tout relire en détail à chaque fois, ce qui annule une bonne partie du gain de temps que l'IA était censée apporter.

**Votre mission** : reconstruire ce prompt de zéro en appliquant le chain-of-thought et la méthode ICIO, pour qu'il produise un résultat de structure et de niveau de détail identiques, quel que soit le mois analysé.

### Exercice noté

1. **Diagnostic** — En une phrase, identifiez si le problème principal du prompt actuel relève d'un défaut d'Output (ICIO), d'un défaut de raisonnement guidé (CoT), ou des deux. Justifiez avec un exemple concret tiré de l'énoncé ci-dessus.
2. **Reconstruction CoT** — Écrivez, en 4 à 6 étapes numérotées, le raisonnement qu'un analyste budgétaire expérimenté suivrait réellement pour traiter cette tâche (repérage des écarts significatifs, distinction volume/prix, priorisation, formulation de recommandations...).
3. **Reconstruction ICIO complète** — Réécrivez le prompt entier avec ses quatre blocs (Instruction / Contexte / Input / Output), en intégrant les étapes de raisonnement de la question 2 et un format de sortie précis et non négociable (sections fixes, longueur maximale, ce qu'il ne faut pas inclure).
4. **Documentation** — Consignez votre travail des questions 2 et 3 dans le template `guide-construction-prompts-chain-of-thought.docx`, en incluant un test simulé sur au moins 2 jeux de chiffres fictifs différents pour vérifier que la structure de sortie reste stable.
5. **Intégration à la bibliothèque** — Ajoutez ce prompt validé au template `bibliotheque-prompts-organisationnelle-icio.xlsx`, avec la catégorie appropriée, le nombre de cas testés, une version initiale (v1) et le statut correspondant à l'état réel de vos tests.

**Livrable attendu** : les deux fichiers complétés (guide Word + ligne ajoutée dans la bibliothèque Excel), avec un prompt final qui, relu à froid, ne laisse aucune place à une interprétation différente d'un mois à l'autre.

### Pièges fréquents

- **Ne jamais documenter ni réutiliser un prompt qui fonctionne** — chaque collègue, et parfois vous-même trois mois plus tard, repart de zéro pour réinventer un prompt déjà résolu ailleurs dans l'organisation. Le coût cumulé de cette réinvention permanente dépasse largement le temps qu'aurait pris un remplissage de bibliothèque.
- **Confondre complexité du prompt et qualité du prompt** — un prompt de 40 lignes bourré d'instructions contradictoires ("sois concis" et "détaille chaque point" dans le même paragraphe) produit un résultat plus instable qu'un prompt court et clair. Ajouter des consignes n'améliore jamais un prompt mal structuré ; ça y ajoute simplement plus de bruit à interpréter.
- **Valider un prompt sur un seul cas** — un prompt qui a bien fonctionné une fois n'est pas un prompt fiable pour un usage récurrent. Il faut le tester sur plusieurs cas réels et différents avant de le marquer "Validé" dans la bibliothèque — sinon vous découvrez ses failles en production, sur un cas qui compte.
- **Oublier de spécifier l'Output et laisser l'IA choisir le format** — c'est la cause la plus fréquente et la plus facile à corriger d'inconsistance visuelle d'une exécution à l'autre. Si vous ne dites pas explicitement "réponds en exactement 3 sections : Constat, Cause, Action", le modèle changera de structure selon des variations infimes de formulation du prompt ou de contenu de l'input.
- **Modifier un prompt en production sans repasser les cas déjà validés** — améliorer un prompt pour corriger un défaut fraîchement découvert, sans revérifier qu'il fonctionne toujours sur les cas qui l'avaient validé initialement, est la meilleure façon de casser silencieusement un usage qui marchait déjà pour un autre collègue.

### Check-list de fin de module

- [ ] Je sais expliquer en une phrase pourquoi le chain-of-thought réduit les erreurs de raisonnement d'une IA.
- [ ] Je sais identifier une situation où le tree-of-thought apporte une vraie valeur, et la distinguer d'un cas où un simple chain-of-thought suffit.
- [ ] Je peux structurer n'importe quel prompt professionnel récurrent avec les 4 blocs de la méthode ICIO.
- [ ] Je sais diagnostiquer si l'inconsistance d'un prompt existant vient d'un défaut d'Output, d'un défaut de raisonnement guidé, ou des deux.
- [ ] J'ai reconstruit un prompt instable en prompt CoT + ICIO et je l'ai testé sur au moins 2 cas différents.
- [ ] J'ai documenté cette reconstruction avec le template `guide-construction-prompts-chain-of-thought.docx`.
- [ ] J'ai ajouté au moins un prompt validé à ma bibliothèque `bibliotheque-prompts-organisationnelle-icio.xlsx`, avec catégorie, version et statut.
- [ ] Je sais expliquer pourquoi un prompt "Validé" doit repasser ses tests de régression avant toute nouvelle version publiée.
