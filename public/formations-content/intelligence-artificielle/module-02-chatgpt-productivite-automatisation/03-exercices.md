# Module 02 — ChatGPT (OpenAI) — Productivité maximale & automatisation
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Du prompt vague au livrable exploitable"

**Contexte (fictif, représentatif d'une demande professionnelle courante)**

Vous êtes chargé(e) de projet dans une organisation, et votre supérieur vous demande un rapport d'avancement à envoyer à un partenaire financier d'ici la fin de journée. Pressé(e) par le temps, votre premier réflexe est d'écrire à ChatGPT :

> "Aide-moi à écrire un rapport sur notre projet."

**Ce que produit ce prompt** : un rapport générique de structure classique (introduction, développement, conclusion), sans chiffre réel, avec des formulations vagues du type "le projet avance globalement bien" — parce que le modèle n'a reçu aucune information sur le projet, aucun destinataire, aucune contrainte de longueur ni de format. Le texte est correctement écrit, mais entièrement inutilisable tel quel : il faudrait le réécrire presque entièrement pour y intégrer la réalité du projet.

**Reconstruction en RCCF**

- **Rôle** : "Tu es un chargé de suivi-évaluation de projet, habitué à rédiger des rapports d'avancement pour des partenaires financiers institutionnels."
- **Contexte** : "Ce rapport porte sur un projet d'appui à l'insertion professionnelle de jeunes diplômés, financé à hauteur de 60 000 USD, sur une durée de 6 mois dont 4 déjà écoulés. Voici les données réelles à intégrer : 85 jeunes accompagnés sur un objectif de 100 ; taux de placement en emploi ou stage de 62 % à ce stade ; principal obstacle rencontré : délais administratifs pour la validation des conventions de stage avec 3 entreprises partenaires ; budget consommé à 58 % à mi-parcours."
- **Contraintes** : "Rapport de 400 mots maximum, ton factuel et sobre, aucune formulation vague type 'le projet avance bien' sans donnée chiffrée à l'appui, aucun superlatif marketing."
- **Format** : "Structure en 4 sections avec sous-titres : Résumé exécutif (3 phrases), Résultats chiffrés à mi-parcours, Obstacle principal et mesure corrective, Prochaines étapes (2 mois restants)."

**Résultat** : un rapport directement utilisable, qui s'appuie sur les vrais chiffres du projet, respecte le format qu'un bailleur attend, et ne nécessite qu'une relecture de validation — pas une réécriture complète. La différence entre les deux résultats ne vient pas d'un modèle "plus intelligent" : c'est exactement le même modèle, avec une instruction de départ complète au lieu d'une phrase vague.

### Exercice noté

1. **Reconstruction RCCF** — Choisissez une tâche de rédaction ou d'analyse réelle et récurrente dans votre propre travail (rapport, compte rendu, note de synthèse, description de poste...). Rédigez le prompt vague que vous auriez naturellement tapé en premier réflexe, puis reconstruisez-le entièrement en RCCF en utilisant le template `04-templates/bibliotheque-prompts-rccf-chatgpt.xlsx` fourni : remplissez une nouvelle ligne avec votre Rôle, votre Contexte réel (avec de vraies données, pas des placeholders), vos Contraintes et votre Format.
2. **Test et itération** — Soumettez votre prompt RCCF à ChatGPT. Si le résultat n'est pas encore exploitable au premier essai, notez dans la colonne de suivi du template ce que vous avez dû préciser pour l'améliorer (contrainte manquante, contexte insuffisant...), sans repartir d'un prompt entièrement nouveau.
3. **Décision GPT personnalisé** — Sur la base de la règle vue en théorie (tâche récurrente au moins 3 à 4 fois par mois, rôle et contraintes stables), déterminez si cette tâche justifierait un GPT personnalisé. Si oui, complétez le `04-templates/guide-creation-gpt-personnalise.docx` fourni avec ce module : objectif du GPT, instructions rédigées, fichiers de connaissance à y attacher, et au moins 3 cas de test réels.

**Livrable attendu** : la ligne complétée dans la bibliothèque de prompts, et — si applicable — le guide de création de GPT rempli.

### Pièges fréquents

- **Prompt vague sans rôle ni format de sortie attendu** — produit une réponse générique, correcte grammaticalement mais inutilisable telle quelle, qui demande presque autant de travail de réécriture qu'une page blanche.
- **Copier-coller un document entier sans jamais préciser ce qu'on attend en retour** — coller un rapport de 20 pages en demandant simplement "qu'en penses-tu ?" laisse le modèle deviner s'il faut résumer, critiquer, corriger ou reformuler ; il choisit une option par défaut qui correspond rarement à votre besoin réel. Précisez toujours l'angle exact : résumé en X points, analyse critique des faiblesses, reformulation pour tel public.
- **Ne jamais itérer sur une réponse insatisfaisante** — accepter le premier résultat parce qu'"il vaut ce qu'il vaut" au lieu de préciser ce qui ne convient pas. Une itération ciblée ("trop technique, simplifie pour un public non spécialiste") coûte dix secondes et améliore radicalement le résultat ; recommencer tout le prompt à zéro coûte bien plus cher en temps.
- **Construire un GPT personnalisé pour une tâche ponctuelle** — passer 45 minutes à configurer un GPT pour un usage qui ne se reproduira jamais est un mauvais calcul de temps. Réservez les GPT personnalisés aux tâches réellement récurrentes et stables.
- **Laisser un GPT personnalisé connecté à un document de connaissance obsolète** — un gabarit de rapport ou une procédure interne qui change sans que le fichier attaché au GPT soit mis à jour produit des réponses obsolètes présentées avec la même assurance qu'une réponse à jour, sans aucun signal d'alerte visible pour l'utilisateur.

### Check-list de fin de module

- [ ] Je sais expliquer pourquoi un prompt vague produit systématiquement une réponse générique, avec l'exemple de la délégation à un junior sans consignes.
- [ ] Je sais construire un prompt complet selon les 4 blocs Rôle, Contexte, Contraintes, Format, dans cet ordre.
- [ ] Je sais reconnaître, dans mon propre travail, une tâche qui justifie un GPT personnalisé plutôt qu'un reprompting répété.
- [ ] J'ai créé au moins un GPT personnalisé avec des instructions RCCF permanentes et testé sur des cas réels.
- [ ] Je sais préciser explicitement ce que j'attends en retour avant de coller un document long à ChatGPT.
- [ ] Je sais itérer sur une réponse insatisfaisante en ciblant précisément le correctif, sans repartir de zéro.
- [ ] J'ai complété ma première ligne de bibliothèque de prompts RCCF avec le template fourni.
