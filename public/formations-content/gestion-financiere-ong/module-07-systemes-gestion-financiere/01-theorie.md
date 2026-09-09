# Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Décrire le workflow comptable type SAGA — saisie, validation, clôture mensuelle, édition des journaux — et expliquer ce qu'il protège dans la comptabilité générale d'une ONG.
- Expliquer ce que LINK standardise dans le suivi financier de projet : budget chargé par bailleur, suivi des dépenses, extraction de rapports.
- Justifier pourquoi la maîtrise d'Excel et des tableaux croisés dynamiques (TCD) reste indispensable même avec SAGA et LINK correctement déployés.
- Construire, à partir d'un export financier brut, un tableau de bord Excel avec TCD montrant la consommation budgétaire par bailleur et par mois.
- Verrouiller une période comptable après sa clôture officielle et expliquer le risque encouru si ce verrouillage n'est pas fait.

### Ce que SAGA standardise : la comptabilité générale de l'ONG

SAGA est le logiciel de comptabilité générale que j'ai vu utilisé sur la quasi-totalité des bureaux pays où j'ai travaillé, de Goma à N'Djamena en passant par Port-au-Prince. Ce n'est pas un outil de gestion de projet — c'est le grand livre comptable de l'organisation, celui qui produit les états financiers officiels, ceux que le siège consolide et que l'auditeur externe examine ligne par ligne à la fin de l'exercice.

Le workflow que vous retrouverez, sous des variantes proches, dans SAGA comme dans la plupart des logiciels comptables ONG équivalents, suit toujours la même logique en quatre temps :

1. **Saisie** — chaque transaction (facture fournisseur, salaire, avance de caisse remboursée) est enregistrée par le comptable ou l'assistant comptable, avec sa codification analytique complète : projet, bailleur, rubrique budgétaire — exactement les trois axes vus au Module 01. Une saisie mal codée à cette étape reste fausse jusqu'à ce que quelqu'un la corrige, et personne ne la corrige spontanément si personne ne la relit.
2. **Validation** — un Finance Officer ou Finance Manager relit les écritures du mois avant clôture : cohérence des montants, pièces justificatives jointes, codification correcte. C'est le contrôle croisé qui protège l'organisation d'une erreur de saisie devenue définitive.
3. **Clôture mensuelle** — une fois le mois validé, la période est officiellement fermée dans le système. Après clôture, aucune écriture ne devrait plus pouvoir être modifiée sans une procédure de réouverture explicite, tracée et justifiée.
4. **Édition des journaux** — SAGA produit alors les journaux comptables du mois : la version imprimable, officielle, qui sert de référence pour tout rapprochement ultérieur et qui rejoint le dossier d'archive comptable du bureau.

**Ce qu'il faut retenir opérationnellement** : la clôture n'est pas une formalité de fin de mois qu'on bâcle un vendredi soir pour "avancer". C'est le moment où la comptabilité du mois devient une source de vérité figée. J'ai vu, en Haïti, un bureau qui rouvrait régulièrement des mois soi-disant clôturés pour "corriger une petite erreur" sans documenter la réouverture — résultat : à l'audit annuel, personne ne pouvait garantir que les chiffres présentés six mois plus tôt à un bailleur étaient encore ceux du système. Une clôture non verrouillée n'est pas une clôture.

### Ce que LINK standardise : le suivi financier par projet et par bailleur

Là où SAGA raisonne en comptabilité générale d'organisation, LINK raisonne en **suivi financier de projet**. C'est l'outil que j'ai vu utilisé, notamment dans l'écosystème du Mouvement Croix-Rouge/Croissant-Rouge, pour piloter un budget de projet au jour le jour, bailleur par bailleur, sans attendre la clôture comptable mensuelle complète.

Le principe reste simple, même si l'interface varie selon la version et la configuration de votre organisation :

- **Un budget chargé** — le budget approuvé par le bailleur est saisi dans LINK, ligne par ligne, rubrique par rubrique, avec le montant total alloué pour chaque poste.
- **Un suivi des dépenses en continu** — au fur et à mesure que les dépenses sont engagées et enregistrées (souvent en lien avec les écritures de SAGA), LINK les rapproche du budget chargé et affiche un solde disponible, mis à jour bien plus fréquemment que la clôture mensuelle.
- **Une extraction de rapports** — LINK permet de sortir, pour un bailleur donné ou pour une réunion de coordination interne, un rapport de suivi budgétaire (souvent appelé BFU — Budget Follow-Up) : dépensé à date, engagé, disponible, taux de consommation par rubrique.

**Le lien direct avec SAGA — et pourquoi il est vital de le comprendre** : LINK n'invente aucune donnée. Il reflète, avec un niveau de détail projet que SAGA n'affiche pas toujours aussi lisiblement, exactement ce qui a été saisi et codé en amont. Si une dépense a été mal codée à la saisie dans SAGA — mauvais bailleur, mauvaise rubrique — LINK affichera un solde disponible faux, avec la même conviction qu'il afficherait un solde juste. Un coordinateur qui prend une décision d'engagement sur la base d'un solde LINK erroné parce que la codification amont était fausse ne le découvre généralement pas avant la clôture suivante — parfois seulement à l'audit.

| | SAGA | LINK |
|---|---|---|
| **Niveau de raisonnement** | comptabilité générale de l'organisation | suivi financier par projet et par bailleur |
| **Fréquence de référence** | mensuelle (clôture) | continue, entre deux clôtures |
| **Produit typique** | journaux comptables, états financiers | rapport de suivi budgétaire (BFU), extraction bailleur |
| **Dépend de** | la qualité de la saisie initiale | la qualité de la codification faite en amont dans SAGA |

### Pourquoi la compétence Excel/TCD reste indispensable

C'est le point que les Finance Officers juniors sous-estiment le plus souvent, et il mérite d'être dit clairement : **aucun système, ni SAGA ni LINK, ne produira jamais exactement le tableau de bord dont vous avez besoin un jour donné**. Un coordinateur pays qui vous demande, un mardi après-midi, la consommation budgétaire du bailleur ECHO croisée par mois pour une réunion de comité de pilotage le lendemain matin n'attend pas que vous configuriez un nouveau rapport LINK — il attend un tableau clair, dans l'heure.

C'est là qu'intervient l'export vers Excel et le **Tableau Croisé Dynamique (TCD)** : à partir d'une extraction brute de LINK ou de SAGA (colonnes projet, bailleur, rubrique, montant, date), un TCD reconstruit en quelques clics n'importe quelle vue croisée — par bailleur, par mois, par rubrique, ou toute combinaison — sans écrire une seule formule, et actualisable en un clic dès qu'un nouvel export arrive. C'est exactement la même logique que celle du nettoyage de données ERP vue en Supply Chain : le système source standardise la donnée, mais c'est votre compétence Excel qui transforme cette donnée en décision exploitable, dans le format et le délai que le terrain impose réellement.

**Ce qu'il faut retenir opérationnellement** : un TCD n'est fiable que si les données sources sont propres et correctement codées. Un tableau croisé dynamique magnifiquement mis en forme, construit sur des données mal codées en amont, produit un résultat trompeur avec la même assurance visuelle qu'un résultat juste — c'est le principe "garbage in, garbage out" déjà rencontré au Module 01, et il s'applique ici avec la même force.

### Vocabulaire clé à maîtriser dès ce module

- **SAGA** : logiciel de comptabilité générale ONG — saisie, validation, clôture mensuelle, édition des journaux comptables officiels.
- **LINK** : outil de suivi financier de projet — budget chargé par bailleur, suivi continu des dépenses, extraction de rapports (BFU).
- **BFU (Budget Follow-Up)** : rapport de suivi budgétaire comparant dépensé, engagé et disponible pour un projet ou une rubrique donnée.
- **Clôture mensuelle** : opération qui fige officiellement les écritures comptables d'un mois ; doit être suivie d'un verrouillage de période.
- **Verrouillage de période** : mesure empêchant toute modification d'une période comptable clôturée sans procédure de réouverture tracée.
- **TCD (Tableau Croisé Dynamique)** : outil Excel permettant de résumer et croiser un grand volume de données (ex. bailleur × mois) sans formule, actualisable à chaque nouvel export.
