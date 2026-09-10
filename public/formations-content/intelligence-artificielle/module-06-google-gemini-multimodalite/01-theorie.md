# Module 06 — Google Gemini : Multimodalité & Google Workspace
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Analyser une image, un graphique ou un document visuel avec Gemini pour en extraire une synthèse écrite exploitable.
- Automatiser une tâche récurrente dans Google Sheets, Docs ou Gmail en formulant des instructions IA précises.
- Créer un contenu multimodal (texte + visuel) pour une communication professionnelle prête à l'envoi.
- Vérifier systématiquement une analyse générée par Gemini avant de l'intégrer à un livrable.
- Distinguer ce qui relève de l'assistance IA et ce qui nécessite la gouvernance des données de votre organisation.

### La multimodalité, concrètement

Une IA purement textuelle comme les premières versions de ChatGPT ne « voit » rien : vous décrivez, elle répond à votre description. Si vous avez un graphique à 6 courbes avec des légendes en petit texte, vous devez le transcrire vous-même en mots avant de pouvoir poser une question dessus — et transcrire un graphique complexe en texte prend souvent plus de temps que de l'analyser à l'œil.

Gemini est **nativement multimodal** : il traite texte, image, audio et vidéo dans la même conversation, sans étape de conversion intermédiaire. Concrètement, vous glissez une capture d'écran de tableau de bord, une photo prise sur le terrain, un enregistrement vocal de 3 minutes ou un extrait vidéo, et vous posez votre question directement dessus — exactement comme vous le feriez avec un collègue à qui vous montrez le document.

Ce n'est pas un gadget. C'est un changement de vitesse pour un type de tâche précis : tout ce qui est **plus rapide à montrer qu'à décrire**. Un graphique de KPI avec plusieurs séries de courbes qui se croisent, une photo d'état des stocks dans un entrepôt, un tableau scanné avec une mise en page irrégulière — dans tous ces cas, décrire fidèlement le contenu en texte prend plus de temps et introduit plus d'erreurs de retranscription que de simplement soumettre le fichier. À l'inverse, pour une tâche purement rédactionnelle (reformuler un paragraphe, structurer un plan), la multimodalité n'apporte rien : le texte brut reste la voie la plus directe.

**Le repère à retenir** : avant de décrire un contenu visuel en mots pour l'IA, demandez-vous si vous ne pourriez pas simplement le lui soumettre directement. C'est souvent plus rapide, et surtout plus fiable — vous éliminez l'étape où votre propre description introduit une erreur ou une omission.

### L'intégration native à Google Workspace — logique et limites

Gemini n'est pas seulement disponible dans une fenêtre de chat séparée : il est intégré directement dans Gmail, Docs, Sheets, Slides et Meet. Cela veut dire qu'il peut lire le contenu du document ou de l'email que vous avez sous les yeux sans que vous ayez besoin de copier-coller quoi que ce soit — vous lui demandez, depuis Gmail, de rédiger une réponse à un fil de discussion, et il a déjà accès au contexte de l'échange.

C'est la même logique que Microsoft Copilot dans l'écosystème Office 365 (vu au Module 04) : un assistant IA à accès natif à vos données de travail, plutôt qu'un outil externe auquel vous devez tout réexpliquer. L'avantage en productivité est réel — moins de copier-coller, moins de contexte à reformuler à chaque requête. Mais cet accès natif implique exactement les mêmes précautions de gouvernance des données que celles évoquées pour Copilot :

- Un document Google confidentiel reste confidentiel une fois que Gemini y a accès — vérifiez les paramètres de partage et de rétention définis par votre organisation avant de traiter des données sensibles (RH, finances, données bénéficiaires) avec l'IA intégrée.
- L'accès natif ne dispense jamais de la relecture humaine. Que Gemini lise directement votre Sheet ou que vous lui ayez collé un extrait, le niveau de vérification attendu sur le résultat produit est identique.
- Dans un contexte organisationnel (ONG, entreprise), c'est la politique IT/administrateur Workspace qui détermine ce que Gemini peut ou non traiter — pas votre seul jugement individuel. En cas de doute sur une donnée sensible, la question se pose avant l'usage, pas après.

### Où la multimodalité change réellement la donne au travail

Trois cas d'usage professionnels concrets où le levier multimodal est net :

1. **Lecture de tableaux de bord et graphiques complexes** — un dashboard KPI avec plusieurs indicateurs, des tendances croisées et des seuils d'alerte se lit et se synthétise en quelques secondes par Gemini, contre plusieurs minutes de lecture manuelle attentive pour ne rien manquer.
2. **Exploitation de photos et documents terrain** — une photo de facture froissée, un état des lieux photographié, une affiche ou un panneau photographié en déplacement : Gemini peut en extraire du texte structuré directement, sans étape de saisie manuelle.
3. **Traitement d'enregistrements audio/vidéo courts** — un mémo vocal, un extrait de réunion enregistré, une vidéo de démonstration : obtenir un compte-rendu structuré sans avoir à réécouter ou revisionner l'intégralité soi-même en premier passage.

Dans les trois cas, la vérification humaine reste obligatoire — la multimodalité accélère l'extraction de l'information, elle ne remplace pas le contrôle de son exactitude. C'est le sujet du guide pratique et de l'étude de cas qui suivent.

### Ce que la multimodalité ne change pas

Un point à garder net dans la tête, pour ne pas transformer un vrai levier de productivité en excès de confiance : Gemini reste un modèle de langage qui produit la réponse la plus plausible compte tenu de ce qu'il « voit », pas un outil de mesure certifié. Sur une image nette avec des chiffres lisibles, le taux d'erreur est faible. Sur un graphique avec une légende ambiguë, une photo prise de biais ou un enregistrement audio avec du bruit de fond, le risque de mauvaise lecture augmente — et l'IA ne signale pas systématiquement son incertitude sous forme de doute explicite dans sa réponse. Elle répond avec la même assurance apparente qu'elle ait bien ou mal interprété le document. C'est cette caractéristique, plus que la technologie elle-même, qui justifie la vérification systématique développée dans le guide pratique.

### Vocabulaire clé à maîtriser dès ce module

- **Multimodalité** : capacité d'un modèle IA à traiter plusieurs types de contenus (texte, image, audio, vidéo) au sein d'une même requête ou conversation, sans étape de conversion préalable en texte.
- **Intégration native** : accès direct d'un assistant IA aux documents et applications dans lesquels il est intégré (ici, Gmail, Docs, Sheets, Slides, Meet), par opposition à un outil externe auquel il faut copier-coller le contenu à chaque usage.
- **Gouvernance des données** : ensemble des règles définies par une organisation (souvent portées par l'IT ou l'administrateur Workspace) sur ce que les outils IA intégrés peuvent traiter, conserver ou partager — en particulier pour les données sensibles.
