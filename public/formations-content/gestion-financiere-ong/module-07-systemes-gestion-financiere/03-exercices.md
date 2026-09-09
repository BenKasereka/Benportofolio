# Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Le comité de pilotage, bureau de Bentiu, Soudan du Sud"

**Contexte (fictif, inspiré de situations réelles rencontrées au Soudan du Sud et au Tchad)**

Vous êtes Finance Officer pour une ONG internationale sur le bureau de Bentiu. Votre Finance Manager vous demande, un mardi en fin de journée, de préparer pour le lendemain matin un tableau de bord de consommation budgétaire par bailleur et par mois, en vue d'un comité de pilotage avec trois bailleurs présents (ECHO, UNICEF, USAID/BHA). Vous extrayez de LINK un export brut couvrant les six premiers mois de l'année : projet, bailleur, rubrique budgétaire, montant, date. Le fichier contient 52 lignes. En le parcourant, vous repérez déjà plusieurs points d'attention :

- Le bailleur "ECHO" apparaît sous trois libellés différents selon l'agent qui a saisi la ligne dans SAGA en amont : "ECHO", "Echo" et "E.C.H.O."
- Une ligne de 18 400 USD sur la rubrique "Transport" n'a aucun bailleur renseigné.
- Deux lignes semblent dupliquées (même projet, même rubrique, même montant, même date à un jour près) — possiblement une double saisie, possiblement deux dépenses réellement distinctes.
- Le mois de juin ne contient que 2 lignes, alors que les autres mois en comptent 8 à 10 — potentiellement un mois pas encore complètement clôturé dans SAGA au moment de votre export.

**Votre mission** : produire, avant le comité de pilotage du lendemain matin, un tableau de bord fiable de consommation budgétaire par bailleur et par mois, avec ses limites clairement signalées.

### Exercice noté

1. **Construction du tableau de bord** — Ouvrez `tableau-de-bord-financier-tcd.xlsx`, reprenez la logique du guide pratique sur un jeu de données équivalent à celui décrit ci-dessus : harmonisez les libellés de bailleur incohérents avant de construire le TCD, puis construisez la vue croisée bailleur × mois avec son graphique. Documentez, dans une note courte jointe à votre livrable, comment vous traitez la ligne sans bailleur (l'exclure du tableau de bord en la signalant explicitement, ou la classer en "à confirmer" — justifiez votre choix), et comment vous traitez les deux lignes potentiellement dupliquées.
2. **Lecture critique du mois incomplet** — Expliquez, dans la même note, pourquoi présenter le mois de juin sur le même graphique que les mois complets, sans réserve, risquerait d'induire le comité de pilotage en erreur sur le rythme réel de consommation budgétaire de fin de projet.

**Livrable attendu** : le classeur `tableau-de-bord-financier-tcd.xlsx` complété avec votre tableau de bord et son graphique, accompagné d'une note d'une demi-page maximum signalant vos choix de traitement et les points restant à vérifier avant diffusion officielle aux bailleurs.

### Pièges fréquents (25 ans de terrain condensés)

- **Ressaisir manuellement des données déjà disponibles dans SAGA ou LINK** — reconstruire à la main, cellule par cellule, un tableau que l'export brut contient déjà est une perte de temps et une source d'erreur de saisie supplémentaire. Le réflexe professionnel est toujours d'extraire, jamais de recopier.
- **Construire un TCD sur des données mal codées en amont** — un tableau croisé dynamique impeccablement mis en forme, bâti sur des libellés de bailleur incohérents ou une codification approximative, produit un résultat trompeur avec la même assurance visuelle qu'un résultat juste. "Garbage in, garbage out" : le lien direct avec la rigueur de codification vue au Module 01 ne se relâche jamais, même une fois l'outil Excel maîtrisé.
- **Ne pas verrouiller une période comptable après sa clôture officielle** — une clôture annoncée mais non verrouillée dans SAGA laisse la porte ouverte à des modifications a posteriori non tracées. J'ai vu ce trou de procédure exploité, parfois sans mauvaise intention, simplement parce qu'un agent pressé "corrige vite" une écriture d'un mois censé être clos — et personne ne le découvre avant l'audit.
- **Perdre ou écraser le fichier d'export brut d'origine une fois le tableau de bord construit** — si vous ne conservez pas, quelque part, l'export exact qui a servi de base à votre TCD, vous n'avez plus aucun moyen de justifier un chiffre précis si un bailleur le conteste trois mois plus tard. L'export brut se range et se date, il ne se supprime jamais après usage.
- **Diffuser un tableau de bord Excel sans le rapprocher des chiffres officiels de SAGA avant envoi** — un TCD construit rapidement pour une réunion peut diverger des journaux comptables officiels si l'export utilisé n'était pas à jour ou couvrait un périmètre légèrement différent. Envoyer ce tableau à un bailleur sans ce rapprochement préalable, c'est risquer de faire exister deux vérités financières différentes sur le même projet — une situation qu'aucun auditeur n'apprécie.

### Check-list de fin de module

- [ ] Je sais décrire, dans l'ordre, les quatre étapes du workflow SAGA (saisie, validation, clôture mensuelle, édition des journaux).
- [ ] Je sais expliquer ce qu'est un verrouillage de période et pourquoi il doit toujours accompagner une clôture.
- [ ] Je sais décrire ce que LINK standardise (budget chargé, suivi des dépenses, extraction de rapport BFU) et son lien de dépendance avec la qualité de la saisie SAGA.
- [ ] Je comprends pourquoi aucun système, même bien configuré, ne remplace la compétence Excel/TCD pour produire un tableau de bord ad hoc.
- [ ] Je sais construire un tableau croisé dynamique croisant bailleur et mois à partir d'un export brut.
- [ ] Je sais harmoniser des libellés incohérents (ex. variantes du nom d'un même bailleur) avant de construire un TCD.
- [ ] Je sais insérer et mettre en forme un graphique croisé dynamique de suivi budgétaire.
- [ ] Je sais actualiser un tableau de bord existant plutôt que le reconstruire à chaque nouvel export.
- [ ] J'ai complété le tableau de bord avec le template fourni et rédigé ma note de choix de traitement des anomalies.
