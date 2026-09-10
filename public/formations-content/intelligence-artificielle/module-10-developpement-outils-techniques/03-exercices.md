# Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "150 factures fournisseurs à renommer avant la clôture comptable"

**Contexte (fictif, réaliste)**

Le service comptabilité de votre organisation vous transmet un dossier de 150 fichiers PDF de factures fournisseurs, accumulés sur l'année, avec ce seul message : *"Il faut que ces factures soient nommées pareil avant la clôture, on ne s'y retrouve plus."* En ouvrant le dossier, vous constatez que les noms de fichiers sont hétérogènes : certains contiennent une date (`facture_12032026_transco.pdf`), d'autres non (`facture_transco_2.pdf`), la casse varie (`FACTURE_KIVU.pdf`, `Facture_Kivu.pdf`), et quelques fichiers portent encore le nom d'export automatique du scanner (`scan0047.pdf`) sans aucune information exploitable dans leur nom.

Ouvrir et renommer 150 fichiers un par un prendrait une bonne partie de votre journée, pour un travail à refaire à chaque nouvelle vague de factures. Votre mission : obtenir de l'IA un script qui renomme automatiquement l'ensemble du dossier selon la convention `AAAA-MM-JJ_NomFournisseur.pdf`, testé en toute sécurité avant d'être exécuté sur les fichiers réels.

**Votre mission** : produire, avant la clôture, un dossier entièrement renommé selon la convention demandée, sans avoir ouvert un par un les 150 fichiers, et sans risquer d'endommager les fichiers originaux.

### Exercice noté

1. **Description du besoin** — En vous inspirant du Prompt 1 de la section Outils de ce module (norme CLARTE), rédigez et exécutez votre propre prompt de description adapté à ce dossier précis (150 fichiers réels, noms hétérogènes, quelques noms de scanner sans information exploitable). Obtenez un script de renommage complet.

   > **Prompt d'exercice — Description du besoin appliquée (norme CLARTE)**
   > "Tu es un assistant technique qui écrit du code pour une personne non-développeuse du service comptabilité. J'ai un dossier de 150 fichiers PDF de factures fournisseurs avec des noms hétérogènes : certains contiennent une date au format JJMMAAAA, d'autres aucune date, la casse varie, et environ 10 fichiers portent un nom générique de scanner (`scan0047.pdf`) sans aucune information exploitable. Écris-moi un script Python qui renomme chaque fichier au format `AAAA-MM-JJ_NomFournisseur.pdf` quand la date et le fournisseur sont identifiables dans le nom actuel, et qui laisse inchangés (avec un message dans le terminal) les fichiers dont le nom ne contient pas assez d'information pour être renommé automatiquement. N'utilise que des bibliothèques Python de base. Explique-moi en 3 phrases maximum, en langage courant, ce que fait le script avant de me donner le code."

   *Pourquoi ce prompt est structuré ainsi* : le **C**ontexte précise le volume réel (150 fichiers) et le cas particulier des fichiers non identifiables, ce qui évite une réponse générique qui ignorerait ce cas limite ; le **L**ivrable est fixé au format de nom exact attendu ; la **R**estriction "laisse inchangés... les fichiers dont le nom ne contient pas assez d'information" évite qu'un script trop rigide produise des noms erronés plutôt que de signaler honnêtement son incapacité à traiter un cas ; le **T**on reste "en langage courant" pour un public non-développeur.

2. **Lecture du script** — Avant toute exécution, appliquez le Prompt 2 vu plus haut dans ce module (explication section par section) au script obtenu à l'étape précédente. Identifiez dans la réponse : le nom du dossier à adapter, la boucle qui traite chaque fichier, et la ligne qui renomme réellement un fichier sur le disque.

3. **Mode test et vérification** — Appliquez le Prompt 3 vu plus haut dans ce module (méthode STAR) pour demander l'ajout d'un mode test au script obtenu, adapté à ce dossier de factures.

   > **Prompt d'exercice — Demande de mode test appliquée (méthode STAR)**
   > "Situation : j'ai le script de renommage de factures fournisseurs ci-dessus [coller le script], destiné à s'exécuter sur un dossier réel de 150 fichiers PDF juste avant la clôture comptable, sans possibilité de récupérer facilement un fichier mal renommé. Tâche : je veux vérifier exactement ce que le script ferait sur chacun des 150 fichiers avant qu'il ne renomme quoi que ce soit réellement. Action : ajoute une option de mode test qui affiche, pour chaque fichier, son nom actuel et son nouveau nom prévu (ou un message "non identifiable" pour les fichiers laissés inchangés), sans renommer aucun fichier sur le disque tant que ce mode est actif. Résultat attendu : le script avec ce mode test ajouté, et une phrase m'indiquant exactement comment le désactiver pour passer à l'exécution réelle une fois la vérification faite."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation rappelle l'enjeu réel et l'irréversibilité (clôture comptable, pas de récupération facile) ; la **T**âche fixe l'objectif de vérification exhaustive sur les 150 fichiers, pas un échantillon seulement, avant modification réelle ; l'**A**ction précise l'affichage attendu y compris pour le cas particulier des fichiers non identifiables ; le **R**ésultat impose un critère de réussite clair : savoir précisément comment repasser en mode réel.

   Exécutez ce mode test sur une **copie** du dossier de factures (jamais l'original), vérifiez dans le terminal que les noms proposés sont corrects pour au moins 15 à 20 fichiers répartis dans le dossier, et notez tout fichier dont le renommage proposé vous semble douteux avant de continuer.

4. **Exécution réelle et documentation** — Une fois la vérification faite, passez le script en mode réel sur le dossier de factures, vérifiez un échantillon des fichiers renommés dans l'explorateur, puis appliquez le Prompt 4 vu plus haut dans ce module pour documenter le script en vue de sa réutilisation lors de la prochaine clôture.

**Livrable attendu** : le script final documenté (avec son mode test), la liste des fichiers laissés inchangés faute d'information suffisante avec la raison, et une note de trois phrases résumant la procédure complète pour un collègue qui devra la refaire dans six mois. Consignez la tâche, le prompt final retenu et l'outil utilisé dans `04-templates/bibliotheque-prompts-delegation-technique.xlsx`, et complétez la fiche de vérification de `04-templates/guide-securite-verification-scripts-ia.docx` avant toute exécution réelle sur un futur dossier similaire.

### Pièges fréquents

- **Exécuter un script généré par l'IA directement sur les fichiers originaux, sans jamais l'avoir testé sur une copie** — même un script qui "a l'air correct" à la lecture peut se comporter différemment sur des cas particuliers du dossier réel (accents, espaces multiples, extensions en majuscules) ; le mode test sur une copie n'est jamais une étape facultative.
- **Coller des données confidentielles ou sensibles dans un outil IA public pour "juste demander un script"** — le script n'a besoin d'aucune vraie donnée pour être écrit : décrivez la structure et donnez un exemple fictif (`facture_transco_2.pdf`, un montant inventé) plutôt que de déposer un vrai fichier de factures ou un extrait de données réelles dans un outil IA grand public.
- **Accepter un script sans le lire du tout, sous prétexte de ne pas être développeur** — l'étape d'explication en langage clair (Prompt 2 de ce module) existe précisément pour éviter ce piège : ne jamais exécuter un script dont vous ne savez pas, même en une phrase par section, ce qu'il fait réellement à vos fichiers.
- **Ne pas préciser le système d'exploitation ou le format exact attendu dans le prompt de départ** — un script écrit sans préciser "Windows" peut utiliser une syntaxe de chemin de fichier incompatible, ou un script écrit sans préciser le format de date exact peut produire `12-03-2026` au lieu de `2026-03-12` attendu ; ces détails doivent figurer dans le prompt initial, pas être corrigés après coup fichier par fichier.
- **Lancer une opération de masse irréversible (renommage, fusion, suppression) sans garder de sauvegarde du dossier d'origine** — même après un mode test concluant, conservez toujours une copie du dossier avant l'exécution réelle : un script qui se comporte différemment sur un cas limite non anticipé reste possible, et une sauvegarde coûte quelques secondes contre plusieurs heures de reconstitution manuelle.

### Check-list de fin de module

- [ ] Je sais expliquer la différence de rôle entre VS Code, GitHub Copilot et Claude Code pour un usage non-développeur.
- [ ] Je sais décrire un besoin d'automatisation interne à l'IA avec un prompt structuré, plutôt qu'une demande vague.
- [ ] Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.
- [ ] J'ai utilisé au moins quatre prompts CLARTE/STAR de ce module, adaptés à mon propre besoin.
- [ ] Je sais lire un script généré par l'IA dans ses grandes lignes : repérer un chemin de dossier, une boucle "pour chaque fichier", une action de renommage ou de suppression.
- [ ] Je n'exécute jamais un script sur des données réelles sans être passé par un mode test sur une copie au préalable.
- [ ] Je sais demander à l'IA d'ajouter un mode test (dry-run) à un script qu'elle vient de générer.
- [ ] J'ai documenté au moins un script pour qu'il soit réutilisable par moi-même ou un collègue non-développeur.
- [ ] Je sais reconnaître les cinq pièges fréquents de ce module et les éviter dans ma propre pratique.
