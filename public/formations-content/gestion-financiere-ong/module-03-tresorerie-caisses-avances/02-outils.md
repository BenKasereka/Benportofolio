# Module 03 — Trésorerie, Caisses & Avances Terrain
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Livre de caisse Excel (`livre-de-caisse-rapprochement-quotidien.xlsx`)** — c'est le document central de ce module, à utiliser tous les jours sans exception dès qu'une caisse existe sur une base. Il enregistre chaque mouvement (entrée, sortie) avec calcul automatique du solde théorique, intègre un onglet de rapprochement quotidien qui compare ce solde théorique au comptage physique et signale automatiquement tout écart dépassant le seuil de tolérance, et se clôture par une synthèse mensuelle consolidée. Ne le remplacez jamais par un simple carnet papier non structuré : la formule de solde théorique est précisément ce qui vous permet de détecter un écart le jour même, pas un mois plus tard.

**Fiche d'avance, justification et remboursement (`fiche-avance-justification-remboursement.docx`)** — le document qui encadre chaque avance terrain, de la demande initiale jusqu'au solde final. Une avance sans cette fiche remplie et signée dès l'octroi n'est pas une avance encadrée : c'est une sortie de caisse sans traçabilité, exactement la situation qu'une politique de trésorerie sérieuse doit exclure.

**Coffre-fort ou caisse métallique verrouillée** — l'équipement physique n'est pas un détail secondaire. Toute caisse dépassant le plafond du plus bas niveau de responsabilité doit être conservée dans un contenant verrouillé, idéalement fixé ou difficile à emporter, avec un accès limité à un nombre minimal de personnes identifiées. Un plafond de caisse bien défini perd une grande partie de son utilité si l'argent reste dans un tiroir de bureau non fermé à clé.

### Guide pratique étape par étape — la routine quotidienne d'une caisse terrain

Ce guide part d'une situation très concrète : vous êtes responsable d'une caisse sur une base, seul(e) ou avec un(e) caissier(ère) sous votre supervision. Voici, dans l'ordre, ce qui doit se passer chaque jour ouvré, sans exception.

**Étape 1 — Ouverture de caisse le matin**

Avant toute transaction de la journée, comptez la caisse billet par billet et pièce par pièce. Ce comptage matinal doit correspondre exactement au solde théorique de clôture de la veille dans le `livre-de-caisse-rapprochement-quotidien.xlsx` (onglet **Livre de caisse**). S'il y a un écart dès l'ouverture, ne commencez aucune transaction avant de l'avoir compris — un écart non expliqué le matin ne se résout jamais tout seul dans la journée, il ne fait que se diluer dans les mouvements suivants.

**Étape 2 — Enregistrement en temps réel de chaque mouvement**

Chaque sortie de caisse s'enregistre au moment où elle a lieu, dans l'onglet **Livre de caisse**, avec un numéro de pièce, un libellé précis et le montant — jamais "en fin de journée de mémoire". Le solde théorique se recalcule automatiquement à chaque ligne : c'est cette actualisation en continu qui rend le rapprochement du soir fiable. Une caisse où l'on note les dépenses "plus tard dans la journée quand on a un moment" est une caisse où les erreurs et les oublis s'accumulent invisiblement.

**Étape 3 — Clôture de caisse le soir**

En fin de journée, recomptez physiquement la caisse et reportez le montant dans l'onglet **Rapprochement quotidien**, colonne "Comptage physique", en face de la date du jour. Le fichier calcule automatiquement l'écart et affiche un statut ("OK" ou "ÉCART À INVESTIGUER") dès que l'écart dépasse le seuil de tolérance défini en haut de l'onglet. Toute clôture avec un statut "ÉCART À INVESTIGUER" doit être documentée le jour même — une note manuscrite au dos du registre ou un commentaire dans le fichier ne suffit jamais : il faut une explication écrite datée et, si l'écart est significatif, une double signature (personne tenant la caisse + superviseur).

**Étape 4 — Procédure complète d'avance : demande, justification, remboursement**

1. Le membre du personnel remplit la section "Demande" de la `fiche-avance-justification-remboursement.docx` : objet précis de l'avance, montant demandé, date de justification attendue (jamais au-delà de 15 jours pour une avance opérationnelle courante, jamais au-delà de 30 jours pour une avance de mission plus longue).
2. Le superviseur valide et signe avant toute sortie de caisse — jamais après. La sortie s'enregistre dans le **Livre de caisse** avec un libellé explicite ("Avance à justifier — [nom] — échéance [date]").
3. À la date de justification, le membre du personnel remplit la section "Justification" avec le détail des dépenses réelles et les pièces justificatives associées, ligne par ligne.
4. Le solde se calcule automatiquement sur la fiche : si les dépenses justifiées sont inférieures au montant avancé, la différence est remboursée en caisse par la personne ; si elles sont supérieures (avec accord préalable), l'organisation rembourse la différence. Dans les deux cas, ce mouvement de clôture s'enregistre à son tour dans le **Livre de caisse**.

**Étape 5 — Rapprochement bancaire hebdomadaire**

Une fois par semaine, comparez le relevé bancaire de la base ou du bureau pays aux mouvements enregistrés dans vos outils de suivi (réapprovisionnements de caisse, dépenses payées directement par virement). Chaque écart — délai de traitement bancaire, frais bancaires non anticipés, virement non encore reçu — doit être expliqué ligne par ligne, jamais simplement "ajusté" pour faire correspondre les deux montants. Un rapprochement bancaire qui "colle" artificiellement sans explication des écarts n'a aucune valeur de contrôle : il masque le problème au lieu de le révéler.
