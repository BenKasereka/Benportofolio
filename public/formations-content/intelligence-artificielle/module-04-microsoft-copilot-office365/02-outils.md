# Module 04 — Microsoft Copilot — L'IA native dans Office 365 & Teams
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Copilot dans PowerPoint** — le volet Copilot, accessible par l'icône dédiée dans le ruban, propose entre autres l'option *"Créer une présentation à partir d'un fichier"*. C'est le point d'entrée pour transformer un document Word en diaporama structuré sans construire les slides une à une.

**Copilot dans Excel** — activé depuis le ruban Accueil, il répond en langage naturel sur la plage de données sélectionnée : construction de tableaux croisés dynamiques, formules complexes, mise en évidence de tendances. Il fonctionne uniquement sur des données organisées en tableau structuré (`Insérer > Tableau`), pas sur une feuille en vrac.

**Copilot dans Outlook** — disponible à la fois pour la rédaction (brouillon d'email à partir de quelques instructions) et pour la lecture (résumé d'un fil de discussion long avant d'y répondre).

**Copilot dans Teams** — pendant une réunion enregistrée avec transcription activée, Copilot peut produire un résumé structuré des points abordés, des décisions prises et des actions à suivre, consultable pendant la réunion ou juste après.

**Le template `grille-prompts-copilot-office-teams.xlsx`** fourni avec ce module — votre antisèche de prompts prêts à l'emploi, organisée par application, avec pour chaque exemple le résultat attendu et le point de vérification à ne pas sauter.

### Guide pratique étape par étape — "Du rapport Word à la présentation PowerPoint, et de la réunion Teams au compte-rendu actionnable"

Ce guide couvre les deux usages les plus rentables de Copilot en contexte professionnel : transformer un document existant en présentation, et exploiter Copilot pour l'analyse Excel. Les deux méthodes ci-dessous sont directement réutilisables demain matin.

**Méthode 1 — Générer une présentation PowerPoint structurée à partir d'un document Word existant**

1. **Préparez le document source avant d'ouvrir PowerPoint.** Copilot construit sa présentation à partir de la structure du Word — titres, sous-titres, listes. Un document sans hiérarchie de titres (`Titre 1`, `Titre 2`) donnera une présentation plate et mal découpée. Si votre rapport n'a pas de structure de titres claire, prenez deux minutes pour l'ajouter avant de lancer Copilot — c'est le geste qui fait toute la différence sur le résultat.
2. **Identifiez, avant de lancer la génération, les messages clés que la présentation doit porter** — pas tout le contenu du Word, une synthèse. Copilot résume, mais il ne devine pas vos priorités : une note manuscrite de 3-4 messages clés (dans le template fourni) vous fera gagner un ou deux allers-retours.
3. **Dans PowerPoint, ouvrez le volet Copilot et sélectionnez "Créer une présentation à partir d'un fichier"**, puis pointez le document Word préparé. Ajoutez en une phrase le public visé et le nombre de slides souhaité (ex. *"pour un comité de direction, 8 slides maximum"*) — Copilot ajuste la densité de contenu par slide selon cette contrainte.
4. **Relisez la structure générée slide par slide avant tout ajustement de forme.** Vérifiez d'abord le fond : est-ce que les messages clés identifiés à l'étape 2 sont bien présents et bien mis en avant ? Une slide qui reprend un détail secondaire du Word en priorité, au détriment du message principal, doit être retravaillée ou réordonnée manuellement.
5. **Ne diffusez jamais le résultat brut.** Une présentation générée par Copilot n'est jamais calée sur votre charte graphique dès la sortie — reprenez le template visuel de votre organisation avant tout envoi externe (client, bailleur, direction).

**Méthode 2 — Demander une analyse de données Excel à Copilot de façon vérifiable**

1. **Structurez vos données en tableau Excel** (`Ctrl+T` ou `Insérer > Tableau`) avant d'appeler Copilot. Sans cette structuration, Copilot ne sait pas identifier les colonnes et les types de données, et propose des analyses approximatives.
2. **Formulez une demande précise, jamais générale.** Une demande comme *"analyse mes données"* laisse Copilot deviner ce qui vous intéresse. Une demande vérifiable nomme la colonne, le calcul et le regroupement attendus : *"crée un tableau croisé dynamique du montant total par région et par mois, à partir du tableau `Ventes2026`"*.
3. **Pour une formule complexe, demandez systématiquement l'explication en plus du résultat** — ajoutez à votre prompt *"explique-moi la logique de la formule"*. Copilot génère la formule ET la décompose en langage clair ; c'est cette explication qui vous permet de la valider avant de vous en servir, plutôt que de la copier en aveugle.
4. **Vérifiez le résultat sur un échantillon connu avant de l'utiliser pour une décision.** Recalculez à la main (ou avec une formule simple de contrôle) un ou deux totaux du tableau croisé généré. Un tableau croisé dynamique mal paramétré peut agréger sur le mauvais niveau de détail sans qu'aucune erreur ne s'affiche — le seul filet de sécurité, c'est votre propre vérification croisée.
5. **Consignez le prompt qui a fonctionné** dans le template `grille-prompts-copilot-office-teams.xlsx`, colonne dédiée — la prochaine fois que vous aurez besoin du même type d'analyse, vous ne repartirez pas de zéro.

**Méthode 3 — Extraire un résumé de réunion actionnable dans Teams**

1. **Activez la transcription en début de réunion** (icône Copilot ou menu Enregistrer) — sans transcription, Copilot n'a rien à résumer après coup.
2. **Pendant ou juste après la réunion, demandez à Copilot un résumé structuré en trois blocs** : décisions prises, actions à suivre avec responsable, points non résolus à reprendre au prochain point. Cette structuration en trois blocs, plutôt qu'un résumé narratif continu, est ce qui rend le compte-rendu réellement exploitable par une équipe.
3. **Vérifiez les noms des responsables d'action avant diffusion.** Copilot attribue les actions en fonction de ce qui a été dit à l'oral ; une reformulation ambiguë en réunion ("on verra qui s'en charge") peut se traduire par une attribution erronée ou absente dans le résumé généré.
