# Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**SAGA et LINK (niveau conceptuel)** — ce module ne propose pas de prise en main licenciée d'un logiciel propriétaire précis : ni SAGA ni LINK ne sont accessibles hors du contexte d'un employeur qui en détient la licence, et un cours bouton-par-bouton sur une interface que vous n'aurez peut-être jamais entre les mains ne vous servirait à rien. Ce module vous donne le fonctionnement conceptuel commun — le workflow, la logique, ce que chaque système protège — pour que le jour où vous ouvrez le SAGA ou le LINK réel de votre employeur, vous compreniez déjà pourquoi chaque écran existe.

**Excel avec Tableaux Croisés Dynamiques (Insertion > Tableau croisé dynamique)** — c'est l'outil pratique central de ce module, disponible nativement dans toutes les versions récentes d'Excel. Il vous permet de transformer un export brut de LINK ou de SAGA en tableau de bord exploitable, sans formule complexe, actualisable à chaque nouvel export.

**Le template `tableau-de-bord-financier-tcd.xlsx`** — fourni avec ce module, il contient un export brut réaliste (projet, bailleur, rubrique budgétaire, montant, date) et un tableau de bord déjà construit à partir de ces données, avec un graphique de suivi de la consommation budgétaire par bailleur et par mois.

### Guide pratique — Le workflow conceptuel SAGA

Ce guide reprend, dans l'ordre exact où elles s'enchaînent sur le terrain, les quatre étapes déjà présentées en théorie — avec, cette fois, le réflexe concret à avoir à chacune :

**Étape 1 — Saisie codée dès la source.** Chaque pièce comptable (facture, reçu de caisse, bulletin de salaire) est saisie avec ses trois axes de codification complets — projet, bailleur, rubrique — au moment même de la saisie, jamais "à corriger plus tard". Le réflexe à prendre : ne jamais valider une saisie incomplète en se disant qu'on la complètera en fin de mois ; en fin de mois, ni vous ni personne d'autre ne se souviendra du contexte exact de cette ligne.

**Étape 2 — Validation avant clôture.** Avant de clôturer le mois, un Finance Officer ou Finance Manager relit systématiquement l'ensemble des écritures : cohérence des montants avec les pièces justificatives, codification correcte, absence de doublon. Le réflexe : bloquer physiquement son agenda pour cette relecture — c'est une tâche qui se fait mal "entre deux réunions", et qui coûte cher si elle est bâclée.

**Étape 3 — Clôture mensuelle.** Une fois la validation faite, le mois est officiellement clôturé dans le système. Le réflexe : la clôture s'accompagne toujours d'un verrouillage de période — jamais l'un sans l'autre. Une clôture "annoncée" mais non verrouillée dans le système n'empêche personne de modifier une écriture après coup, sans que cela laisse de trace visible pour votre coordination.

**Étape 4 — Édition et archivage des journaux.** SAGA édite les journaux comptables du mois clôturé. Le réflexe : ces journaux imprimés (ou exportés en PDF) rejoignent immédiatement le dossier d'archive comptable du bureau — physique et/ou numérique selon la politique de votre organisation — car c'est ce document, et non une capture d'écran du logiciel, qui fait foi devant un auditeur externe.

### Guide pratique — Le workflow conceptuel LINK

Le suivi financier de projet dans LINK suit une logique différente, plus continue que celle de SAGA :

**Étape 1 — Budget chargé.** Le budget approuvé par le bailleur est saisi dans LINK dès la signature du contrat de financement, ligne par ligne. Le réflexe : vérifier que le budget chargé correspond exactement au budget signé — un écart de saisie à cette étape fausse tout le suivi jusqu'à sa correction.

**Étape 2 — Suivi des dépenses.** Au fil du mois, les dépenses engagées et enregistrées viennent réduire le disponible affiché par LINK pour chaque rubrique. Le réflexe : consulter ce suivi régulièrement, pas seulement en fin de mois — un solde qui approche zéro sur une rubrique sensible (carburant, personnel) doit remonter à la coordination avant, pas après, qu'elle soit épuisée.

**Étape 3 — Extraction de rapport.** Pour une réunion de coordination, un comité de pilotage ou une échéance bailleur, LINK permet d'extraire un rapport de suivi budgétaire (BFU) à un instant donné. Le réflexe : toujours noter, sur le rapport extrait ou dans son nom de fichier, la date exacte d'extraction — un BFU non daté est un document dont on ne peut pas garantir la fraîcheur trois semaines plus tard.

### Guide pratique pas-à-pas — Construire un tableau de bord financier Excel avec TCD

Ce guide part d'une situation très courante : vous recevez un export brut de type LINK (colonnes projet, bailleur, rubrique, montant, date), et on vous demande un tableau de bord montrant la consommation budgétaire par bailleur et par mois. Voici exactement comment procéder, avec le template `tableau-de-bord-financier-tcd.xlsx` comme référence.

**Étape 1 — Ouvrir l'export sans le modifier.** Conservez toujours l'onglet contenant l'export brut intact, tel que reçu. Toute transformation se fait sur une copie ou dans un tableau croisé dynamique séparé, jamais en écrasant les données sources — c'est ce qui vous permet, en cas de question sur un chiffre, de revenir à la donnée d'origine.

**Étape 2 — Vérifier la codification avant de construire quoi que ce soit.** Avant même d'ouvrir l'assistant TCD, parcourez rapidement les colonnes bailleur et rubrique : y a-t-il des libellés incohérents pour le même bailleur ("ECHO", "E.C.H.O.", "Echo" traités comme trois bailleurs différents) ? Des cellules vides ? Des montants négatifs inexpliqués ? Corrigez ces incohérences dans l'export avant de poursuivre — un TCD construit sur des libellés incohérents éclate un même bailleur en plusieurs lignes distinctes dans le tableau de bord, ce qui fausse silencieusement le total par bailleur.

**Étape 3 — Transformer la plage en tableau structuré.** Sélectionnez la plage de données et utilisez `Insertion > Tableau` (Ctrl+T). Un tableau structuré s'étend automatiquement quand vous ajoutez des lignes lors d'un prochain export — un avantage direct au moment de l'actualisation mensuelle.

**Étape 4 — Insérer le tableau croisé dynamique.** `Insertion > Tableau croisé dynamique`, en sélectionnant le tableau structuré créé à l'étape précédente comme source, et en plaçant le résultat dans une nouvelle feuille dédiée au tableau de bord.

**Étape 5 — Construire la vue croisée bailleur × mois.** Glissez le champ **Bailleur** dans la zone Lignes, le champ **Date** dans la zone Colonnes (Excel le regroupe automatiquement par mois si vous le lui demandez via clic droit > Grouper), et le champ **Montant** dans la zone Valeurs, avec l'agrégation Somme. Vous obtenez immédiatement la consommation budgétaire de chaque bailleur, mois par mois.

**Étape 6 — Mettre en forme pour la lisibilité.** Appliquez un format monétaire cohérent (USD, séparateur de milliers), activez les totaux de ligne et de colonne, et renommez les en-têtes générés automatiquement ("Somme de Montant" devient "Montant dépensé (USD)"). Un tableau de bord destiné à une réunion de coordination se lit en dix secondes ou il ne sert à rien.

**Étape 7 — Insérer un graphique croisé dynamique.** À partir du TCD, `Analyse de tableau croisé dynamique > Graphique croisé dynamique`, puis choisissez un histogramme groupé par bailleur avec le mois en axe horizontal — c'est le format le plus lisible pour montrer une tendance de consommation dans le temps, en réunion comme dans un rapport écrit.

**Étape 8 — Actualiser plutôt que reconstruire, le mois suivant.** Quand un nouvel export arrive, collez les nouvelles lignes à la suite du tableau structuré existant, puis faites simplement `Données > Actualiser tout`. Le TCD et le graphique se recalculent automatiquement sur l'ensemble des données, sans que vous ayez à reconstruire quoi que ce soit — exactement le même principe de reproductibilité qu'un pipeline Power Query, appliqué ici au reporting financier.
