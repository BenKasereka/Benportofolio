# Module 02 — ChatGPT (OpenAI) — Productivité maximale & automatisation
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**ChatGPT (interface web ou application, plan Plus/Team recommandé pour ce module)** — l'outil central. Le plan gratuit permet déjà de pratiquer la méthode RCCF ; la création de GPT personnalisés et l'attachement de fichiers de connaissance volumineux nécessitent un plan payant (Plus, Team ou Enterprise).

**GPT Builder (onglet "Explorer les GPT" → "Créer un GPT")** — l'interface de configuration d'un GPT personnalisé. Deux modes y coexistent : le mode "Créer", conversationnel, où vous décrivez ce que vous voulez et l'outil rédige une première version des instructions ; et le mode "Configurer", direct, où vous écrivez vous-même le champ Instructions, attachez des fichiers, et définissez les paramètres de conversation. En usage professionnel, préférez le mode "Configurer" : le mode conversationnel produit des instructions correctes mais génériques, qu'il faut de toute façon retravailler.

**Fichiers de connaissance (Knowledge)** — des documents (PDF, Word, Excel, texte) que vous attachez à un GPT personnalisé, et que le modèle consulte pour répondre. Utile pour transformer une procédure interne, un gabarit de rapport ou une grille de critères en référence systématique — sans devoir la coller manuellement à chaque conversation.

**Zone de téléversement de documents (trombone dans la fenêtre de conversation)** — permet d'attacher un document existant (rapport, contrat, tableau de données) directement dans une conversation ponctuelle, pour analyse, sans passer par un GPT dédié. C'est l'usage à privilégier pour une analyse ponctuelle plutôt que récurrente.

### Guide pratique étape par étape — Construire un prompt RCCF complet

Ce guide part d'une situation réelle : vous devez obtenir de ChatGPT un livrable professionnel — pas juste une réponse à une question — et vous voulez l'obtenir bon du premier coup.

**Étape 1 — Formulez d'abord la demande brute, sans structure (30 secondes)**

Écrivez en une phrase ce que vous voulez obtenir, sans vous soucier du format. Exemple : "je veux un rapport sur l'avancement de notre projet." Cette phrase brute est votre point de départ — elle n'est jamais le prompt final, elle sert seulement à clarifier l'objectif dans votre propre tête avant de le structurer.

**Étape 2 — Définissez le Rôle à assigner au modèle**

Demandez-vous : quel professionnel, avec quelle expertise précise, serait le mieux placé pour produire ce livrable si c'était un humain ? Écrivez ce rôle en une phrase, avec un niveau d'expérience si pertinent. Un rôle trop vague ("tu es un expert") n'apporte presque rien ; un rôle précis ("tu es un chef de projet humanitaire qui rédige des rapports d'avancement pour des bailleurs institutionnels") oriente réellement le vocabulaire, la structure et les priorités du texte produit.

**Étape 3 — Rassemblez et donnez le Contexte réel**

Listez les faits que le modèle doit connaître pour ne pas généraliser : à qui s'adresse le livrable, quelles données ou quels chiffres existent déjà (collez-les, ne les résumez pas de mémoire), quelle est la situation exacte (durée du projet, budget, avancement réel, obstacles rencontrés). Plus le contexte collé est concret et chiffré, moins le modèle a de raisons d'inventer des généralités pour combler les vides.

**Étape 4 — Fixez les Contraintes**

Précisez : la longueur attendue (en mots ou en pages), le ton (factuel, formel, synthétique...), ce qui est explicitement à éviter (jargon non expliqué, superlatifs marketing, sections trop longues), et toute règle propre à votre organisation ou à votre secteur (terminologie imposée, éléments obligatoires par un bailleur, normes de présentation).

**Étape 5 — Précisez le Format de sortie attendu**

Donnez la structure exacte : nombre de sections et leurs titres, présence ou non d'un tableau, d'une liste à puces, d'un résumé exécutif en tête de document. Un format précisé à l'avance vous évite de restructurer manuellement une réponse qui arrive sous une forme inexploitable.

**Étape 6 — Assemblez les quatre blocs en un seul message et envoyez**

Combinez Rôle → Contexte → Contraintes → Format dans cet ordre, dans un seul message structuré (des retours à la ligne ou des puces suffisent, pas besoin de mise en forme complexe). Utilisez le template `04-templates/bibliotheque-prompts-rccf-chatgpt.xlsx` fourni avec ce module : il contient des exemples RCCF entièrement rédigés pour la rédaction, l'analyse, le résumé et le code, et des lignes vierges pour construire votre propre bibliothèque de prompts réutilisables.

**Étape 7 — Évaluez la réponse et itérez si nécessaire, sans repartir de zéro**

Si le résultat n'est pas satisfaisant, ne réécrivez pas tout le prompt : indiquez précisément ce qui ne convient pas ("trop long, coupe la section Contexte à 3 phrases" ou "reformule sans jargon financier") et laissez le modèle corriger sa propre réponse. C'est presque toujours plus rapide et plus précis qu'un nouveau prompt complet.

### Guide pratique étape par étape — Créer un GPT personnalisé pour une tâche récurrente

**Étape 1 — Validez que la tâche justifie un GPT (avant d'ouvrir le GPT Builder)**

Vérifiez que la tâche revient au moins 3 à 4 fois par mois, avec un rôle et des contraintes globalement stables d'une fois à l'autre. Si ce n'est pas le cas, un bon prompt RCCF direct reste plus efficace — ne construisez pas un GPT pour une tâche ponctuelle.

**Étape 2 — Rédigez les instructions comme un prompt RCCF permanent**

Ouvrez "Créer un GPT" → mode "Configurer". Dans le champ Instructions, écrivez le Rôle et les Contraintes qui doivent s'appliquer à *toutes* les futures conversations avec ce GPT — c'est l'équivalent d'un prompt RCCF où Rôle et Contraintes sont fixés une fois pour toutes, et où seul le Contexte variera à chaque utilisation future (chaque utilisateur l'apportera au moment de poser sa question).

**Étape 3 — Attachez les fichiers de connaissance nécessaires**

Si la tâche s'appuie sur un document de référence stable (gabarit de rapport, procédure interne, grille de critères), attachez-le dans la section Knowledge. Le GPT le consultera automatiquement à chaque réponse, sans que l'utilisateur ait besoin de le rejoindre manuellement à chaque conversation.

**Étape 4 — Testez avec 3 à 5 cas réels avant diffusion**

Avant de partager le GPT avec votre équipe, testez-le avec des exemples réels tirés de votre travail effectif — pas des exemples fictifs simplifiés. Un GPT qui fonctionne sur un cas d'école simplifié échoue souvent sur la complexité réelle d'un cas de terrain.

**Étape 5 — Itérez sur les instructions à partir des échecs de test**

Chaque réponse insatisfaisante lors des tests est un signal qu'il manque une contrainte ou une précision de contexte dans les instructions permanentes du GPT — pas un signal que l'outil est défaillant. Ajoutez la précision manquante directement dans le champ Instructions, puis retestez le même cas.

**Étape 6 — Diffusez et fixez une règle de mise à jour**

Une fois validé, partagez le lien du GPT avec les personnes concernées de votre organisation. Fixez qui est responsable de mettre à jour les fichiers de connaissance quand le gabarit ou la procédure source change — un GPT connecté à un document obsolète produit des réponses obsolètes en toute confiance, sans le signaler.
