# Module 08 — Automatisation & Agents IA
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Le rapport hebdomadaire d'équipe terrain qui prend deux heures chaque lundi"

**Contexte (fictif, inspiré de situations réelles rencontrées dans des organisations à équipes déconcentrées)**

Chaque vendredi, cinq chefs d'équipe terrain envoient par email un rapport hebdomadaire à leur coordinateur — format libre, longueur variable, parfois un simple paragraphe, parfois trois pages. Chaque lundi matin, le coordinateur passe environ deux heures à lire les cinq rapports, en extraire les points clés (avancées, blocages, besoins), et rédiger un résumé structuré qu'il envoie à la direction et aux autres départements. Cette tâche est identique chaque semaine dans sa structure, même si le contenu change.

**Votre mission** : concevoir, avec les méthodes et templates de ce module, le workflow qui automatise cette synthèse — de la réception des cinq emails jusqu'à l'envoi du résumé structuré à la liste de diffusion de direction — en identifiant clairement ce qui reste sous contrôle humain avant la mise en production.

**Éléments à intégrer dans votre conception** :
- Le déclencheur ne peut pas être « un rapport arrive » au singulier : il faut décider comment le workflow gère l'arrivée de cinq emails distincts, à des heures différentes, et à partir de quel moment (ex. lundi 8h) il lance la synthèse groupée.
- Le format libre des rapports d'origine (un paragraphe ou trois pages) veut dire que l'instruction IA doit être robuste face à des entrées très inégales, et prévoir explicitement le cas d'un rapport manquant (un chef d'équipe qui n'a pas envoyé le sien).
- Le résumé final part vers la direction — un lectorat externe à l'équipe immédiate. C'est typiquement le genre de sortie qui justifie un point de vérification humaine avant le premier envoi automatique, le temps de valider la fiabilité du résumé sur plusieurs semaines réelles.

### Exercice noté

1. **Canevas de conception** — Remplissez le template `canevas-conception-workflow-agent-ia.xlsx` pour ce workflow précis : détaillez chaque étape (déclencheur ou entrée, outil ou IA utilisé, sortie attendue, point de vérification humaine) depuis la réception des cinq rapports jusqu'à l'envoi du résumé structuré. Complétez également la section d'évaluation des risques en identifiant explicitement quelles étapes nécessitent une supervision humaine et pourquoi.
2. **Fiche de documentation** — Rédigez la documentation complète de ce workflow avec le template `procedure-documentation-automatisation-ia.docx`, en précisant notamment : que se passe-t-il si un chef d'équipe n'envoie pas son rapport à temps, qui est responsable de la maintenance du workflow, et selon quelle fréquence il doit être retesté.

**Livrable attendu** : les deux fichiers complétés, avec une documentation ne dépassant pas 2 pages.

### Pièges fréquents

- **Déployer un workflow sans l'avoir testé sur des cas limites** — un rapport vide, un format inattendu, une pièce jointe au lieu d'un texte dans le corps de l'email. Un workflow validé uniquement sur le cas idéal échoue en silence dès la première semaine réelle, souvent sans que personne ne s'en rende compte avant que l'absence de résumé soit remarquée bien plus tard.
- **Automatiser une tâche qui nécessite en réalité un jugement humain sensible** — une décision RH (évaluation de performance, gestion d'un conflit d'équipe) ou une communication de crise ne doivent jamais être déléguées à un envoi automatique, même si l'IA peut techniquement en rédiger une version. L'IA prépare un brouillon, l'humain décide et signe.
- **Ne documenter son workflow nulle part** — un workflow qui existe uniquement dans la tête de son concepteur devient impossible à maintenir dès qu'il change de poste ou quitte l'organisation. Le collègue qui hérite du problème découvre une automatisation qui « marchait bien avant » sans savoir pourquoi elle s'est arrêtée, ni comment la corriger.
- **Confondre un workflow qui fonctionne avec un workflow qui fonctionne encore** — une automatisation validée une fois n'est pas validée pour toujours : un changement de format côté source (l'équipe terrain change sa façon de rédiger), une mise à jour d'API, ou un renouvellement de clé d'accès expiré peuvent casser silencieusement un workflow qui tournait sans problème depuis des mois. Sans date de dernier test documentée, personne ne sait si le résultat actuel est encore fiable.
- **Donner à l'IA un accès plus large que nécessaire à vos outils pour "simplifier la configuration"** — connecter un agent à une boîte email complète ou à un tableur entier alors que la tâche ne nécessite qu'un accès limité à un dossier ou une plage de données précise multiplie inutilement les risques en cas d'erreur de configuration ou de faille de sécurité sur la plateforme d'automatisation.

### Check-list de fin de module

- [ ] Je sais expliquer en une phrase la différence entre un agent IA et une conversation avec un chatbot.
- [ ] Je sais identifier les trois caractéristiques qui définissent un agent IA (outils, autonomie multi-étapes, mémoire d'état).
- [ ] Je sais décider, pour une tâche donnée, si elle mérite un prompt ponctuel, un workflow automatisé, ou ni l'un ni l'autre.
- [ ] Je sais décomposer un besoin métier en déclencheur → traitement IA → action de sortie.
- [ ] J'ai conçu un workflow complet avec le template `canevas-conception-workflow-agent-ia.xlsx`, y compris son évaluation des risques.
- [ ] J'ai documenté un workflow avec le template `procedure-documentation-automatisation-ia.docx` de façon à ce qu'un collègue puisse le reprendre.
- [ ] Je sais identifier, dans une automatisation envisagée, les étapes qui nécessitent un point de vérification humaine avant la mise en production.
