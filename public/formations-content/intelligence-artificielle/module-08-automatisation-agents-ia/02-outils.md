# Module 08 — Automatisation & Agents IA
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Make (make.com)** — plateforme d'automatisation visuelle, sous forme de scénario où chaque module est représenté par une bulle reliée aux autres. Interface la plus flexible des trois pour des workflows avec plusieurs branches conditionnelles (« si le rapport contient un mot-clé X, alors... »). Offre gratuite limitée en nombre d'opérations mensuelles, suffisante pour tester un premier workflow avant de passer à un plan payant.

**Zapier (zapier.com)** — la plateforme la plus ancienne et la plus simple à prendre en main, organisée en « Zaps » linéaires (un déclencheur, une ou plusieurs actions à la suite). Catalogue d'intégrations le plus large du marché (plus de 6 000 applications connectées). Recommandée pour un premier workflow simple, avant d'envisager Make ou N8N pour des besoins plus complexes.

**N8N (n8n.io)** — alternative open source, installable sur vos propres serveurs (auto-hébergement) ou utilisable en version cloud. Pertinente quand votre organisation a des contraintes de confidentialité des données qui empêchent de faire transiter des informations sensibles par une plateforme tierce américaine — un critère qui revient souvent pour une ONG traitant des données bénéficiaires.

**API d'un modèle IA (OpenAI/ChatGPT, Anthropic/Claude, Google/Gemini)** — le point de connexion technique que votre plateforme d'automatisation utilise pour envoyer du texte à un modèle et récupérer sa réponse. Toutes les plateformes citées ci-dessus intègrent nativement ces trois fournisseurs — vous n'avez pas besoin de compétences en programmation pour les connecter, seulement une clé API (obtenue depuis le compte développeur du fournisseur choisi).

### Guide pratique étape par étape — concevoir un workflow d'automatisation simple

Ce guide part d'un besoin réel et récurrent dans la plupart des organisations : un rapport qui arrive régulièrement par email, qu'il faut lire, synthétiser selon un format standard, et transmettre à une liste de personnes. Voici la méthode, dans l'ordre, pour transformer ce besoin en workflow fonctionnel.

**Étape 1 — Cartographier la tâche manuelle actuelle avant de toucher à un seul outil**

Avant d'ouvrir Make ou Zapier, décrivez sur papier (ou dans le template `canevas-conception-workflow-agent-ia.xlsx` fourni avec ce module) ce que vous faites aujourd'hui, manuellement, étape par étape : d'où vient l'information, ce que vous en faites, à qui vous l'envoyez, sous quel format. Un workflow automatisé qui reproduit une tâche manuelle mal définie automatise le désordre — pas la solution. Cette étape prend 15 à 20 minutes et évite des heures de reconfiguration plus tard.

**Étape 2 — Identifier précisément le déclencheur**

Un déclencheur doit être un événement observable et sans ambiguïté : « un email arrive dans telle boîte, avec tel objet ou de tel expéditeur » est un bon déclencheur. « Quand le rapport est prêt » ne l'est pas — une machine ne sait pas juger qu'un rapport est « prêt ». Reformulez systématiquement votre déclencheur en un critère technique vérifiable (adresse d'expéditeur, mot-clé dans l'objet, jour et heure fixes, nouvelle ligne dans un tableur).

**Étape 3 — Rédiger l'instruction IA une seule fois, comme un prompt RCCF figé**

Le module de traitement IA de votre workflow doit contenir des instructions aussi précises qu'un prompt RCCF (Rôle, Contexte, Contraintes, Format — voir Module 02) : rôle assigné, format de sortie exact attendu (titres, longueur, structure), et ce qu'il faut faire si une information attendue manque dans l'email reçu. Cette instruction n'est écrite qu'une fois, mais elle s'applique à chaque exécution automatique — une imprécision ici se répète à l'infini, contrairement à un prompt ponctuel que vous pouvez corriger dans l'instant.

**Étape 4 — Définir l'action de sortie et son format exact**

Précisez exactement ce que le workflow fait du résultat produit par l'IA : un envoi d'email à une liste de diffusion nommée, l'ajout d'une ligne dans un tableur de suivi, la publication dans un canal d'équipe. Vérifiez que le format de sortie (objet de l'email, mise en forme du texte) correspond à ce qu'attendent les destinataires — un résumé techniquement correct mais mal formaté finit ignoré.

**Étape 5 — Insérer au moins un point de vérification humaine avant la mise en production**

Pour toute automatisation qui produit un envoi visible à l'extérieur de votre équipe immédiate (email à une liste large, publication, communication externe), prévoyez un point d'arrêt où un humain valide le contenu avant diffusion effective — au minimum pendant les premières semaines d'utilisation du workflow. Concrètement, cela peut être une étape intermédiaire qui place le résumé en brouillon plutôt qu'en envoi direct, le temps de vérifier la fiabilité du workflow sur des cas réels.

**Étape 6 — Tester sur au moins trois cas, dont un cas limite, avant le déploiement**

Ne validez jamais un workflow sur son seul cas nominal. Testez-le avec : un email standard (cas normal), un email incomplet ou mal formaté (cas limite), et un email qui ne correspond pas du tout au format attendu (cas d'erreur). Un workflow qui échoue silencieusement sur un cas limite en production — sans que personne ne s'en aperçoive — cause plus de dégâts qu'une tâche restée manuelle.

**Étape 7 — Documenter le workflow avec le template dédié**

Une fois le workflow testé et validé, complétez le template `procedure-documentation-automatisation-ia.docx` fourni avec ce module : objectif de l'automatisation, déclencheur exact, étapes et outils impliqués, sources de données utilisées, points de vérification humaine prévus, personne responsable de sa maintenance, date du dernier test, limites connues. Ce document est ce qui permet à un collègue de reprendre, corriger ou faire évoluer le workflow si son concepteur d'origine quitte l'organisation — une automatisation non documentée devient, tôt ou tard, une boîte noire que plus personne n'ose toucher.
