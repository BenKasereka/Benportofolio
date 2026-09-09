# Module 02 — Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Matrice d'autorisation & séparation des tâches (`matrice-autorisation-separation-taches.xlsx`)** — le fichier de travail central de ce module. Elle croise, dans un même tableau, les types d'opérations les plus courants d'un cycle Achats-Finance (émission de bon de commande, approbation de paiement, réception de marchandise, tenue de caisse...) et les rôles/postes existant réellement dans votre structure. Une formule intégrée détecte automatiquement les cumuls à risque : dès qu'un même rôle apparaît coché sur deux fonctions incompatibles pour un même type d'opération, une alerte "cumul à risque" se déclenche. C'est un outil de diagnostic autant qu'un outil de formalisation.

**Lettre d'autorisation / révocation de signataire (`lettre-autorisation-revocation-signataire.docx`)** — le document officiel qui formalise, à un instant T, qu'une personne précise est habilitée (ou n'est plus habilitée) à engager l'organisation sur un périmètre et un plafond donnés. Ce document doit exister en version papier signée et archivée pour chaque signataire actif de votre structure — et surtout, être émis en révocation le jour même du départ ou du changement de poste d'un ancien signataire, jamais après.

**Grille d'évaluation COSO (`grille-evaluation-composantes-coso.xlsx`, vue au Module 01)** — utile en complément ici : les contrôles construits dans ce module (séparation des tâches, matrice d'autorisation) relèvent directement de la composante "Activités de contrôle" du référentiel COSO. Si vous avez déjà réalisé votre auto-évaluation COSO au Module 01, relisez la partie "Activités de contrôle" avant de démarrer ce module : elle vous donne déjà une première photographie des faiblesses à corriger ici.

### Guide pratique étape par étape — "Construire une matrice d'autorisation qui correspond à votre effectif réel, pas à un modèle de siège"

L'erreur la plus fréquente en matière de séparation des tâches n'est pas l'absence de volonté, c'est l'application mécanique d'une matrice conçue pour un bureau de 40 personnes dans une petite base qui en compte 5. Ce guide part de l'hypothèse réaliste du terrain : un effectif limité, et l'obligation de faire des choix de priorisation des cumuls que vous tolérez, en les compensant.

**Étape 1 — Cartographier qui fait RÉELLEMENT quoi aujourd'hui (pas l'organigramme théorique)**

Avant de construire quoi que ce soit, passez une demi-journée avec l'équipe finance et l'équipe achats pour lister, poste par poste, qui détient chaque accès concret : qui a la clé du coffre, qui a les codes de la banque en ligne, qui signe les bons de commande, qui réceptionne physiquement le stock, qui a accès au logiciel comptable en écriture. Ne partez jamais du descriptif de poste officiel — il décrit rarement la réalité d'une petite base sous-staffée. Notez tout, y compris les cumuls que "tout le monde sait" mais que personne n'a jamais écrit noir sur blanc.

**Étape 2 — Lister les cycles de transactions et leurs fonctions constitutives**

Pour chaque cycle clé (achats, paiements/décaissements, gestion de la caisse, gestion du stock, recrutement et paie), décomposez les quatre fonctions vues en théorie : initiation, approbation, exécution, enregistrement/contrôle. C'est cette décomposition qui alimente les lignes de votre matrice.

**Étape 3 — Reporter la cartographie réelle dans le template et laisser la formule détecter les cumuls à risque**

Ouvrez `matrice-autorisation-separation-taches.xlsx` et reportez, pour chaque type d'opération, quel rôle assure quelle fonction. Dès qu'un même rôle se retrouve coché sur deux fonctions incompatibles pour la même ligne, la colonne d'alerte le signale automatiquement. Ne corrigez rien à ce stade : listez d'abord TOUS les cumuls réels, même ceux qui vous semblent embarrassants à écrire.

**Étape 4 — Prioriser les cumuls à corriger en fonction du risque financier réel, pas de la gêne qu'ils procurent**

Un cumul sur une petite caisse d'avance de 200 dollars n'a pas le même poids qu'un cumul sur la validation des paiements fournisseurs à six chiffres. Classez vos cumuls détectés par ordre de risque financier et de fréquence d'occurrence, et concentrez votre plan de correction sur les trois ou quatre cumuls les plus critiques d'abord — vouloir tout corriger d'un coup avec un effectif limité est le meilleur moyen de ne rien corriger du tout.

**Étape 5 — Pour chaque cumul qui ne peut pas être éliminé faute de personnel, documenter un contrôle compensatoire explicite**

Si vous ne pouvez pas recruter, ne laissez jamais un cumul non traité "parce qu'on n'a pas le choix". Documentez précisément la mesure de supervision renforcée qui compense : par exemple, une contre-signature systématique du coordinateur sur chaque décaissement de caisse au-delà d'un certain montant, ou un audit de caisse surprise mensuel au lieu de trimestriel. Un cumul assumé et compensé par écrit protège l'organisation ; un cumul silencieux ne protège personne.

**Étape 6 — Construire la matrice de délégation de pouvoir par seuil, cohérente avec les postes réellement pourvus**

Une fois les fonctions correctement réparties, définissez les plafonds d'approbation par niveau hiérarchique réellement présent sur votre base (voir le tableau de seuils dans la partie 01. Théorie de ce module). Vérifiez que chaque seuil correspond à un poste effectivement occupé sur votre structure au moment où vous écrivez la matrice — pas à un poste vacant depuis six mois.

**Étape 7 — Formaliser chaque signataire avec une lettre d'autorisation, et chaque départ avec une lettre de révocation immédiate**

Pour chaque personne identifiée comme signataire dans votre matrice de délégation, émettez une lettre d'autorisation avec `lettre-autorisation-revocation-signataire.docx`, signée par l'autorité délégante, précisant le périmètre exact et le plafond accordé. Le jour même où un signataire quitte son poste ou change de fonction, émettez la lettre de révocation correspondante avec le même template — avant même la fin de son préavis si son accès aux systèmes financiers n'est plus nécessaire à ses nouvelles tâches.

**Étape 8 — Planifier la revue périodique de la matrice**

Fixez une date de revue systématique de la matrice d'autorisation — au minimum tous les six mois, et à chaque mouvement de personnel touchant un poste signataire. Une matrice construite avec soin mais jamais mise à jour se dégrade en quelques mois jusqu'à devenir aussi peu fiable qu'un organigramme théorique jamais consulté.
