# Module 02 — Évaluation des Besoins & Planification Logistique d'Urgence
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Kobo Toolbox / ODK (Open Data Kit)** — les deux plateformes de référence pour digitaliser une évaluation de besoins sur le terrain. Vous construisez un formulaire une fois (sur ordinateur, avec des questions à choix, des scores, des photos), vous le déployez sur les téléphones de l'équipe d'évaluation, et les réponses arrivent en temps réel dans une base consultable — y compris en zone sans réseau grâce au mode de collecte hors-ligne synchronisé plus tard. C'est l'outil qui rend une grille HEAT exploitable à l'échelle d'une équipe de 4 ou 5 évaluateurs répartis sur plusieurs zones, au lieu de formulaires papier qu'il faudrait ressaisir un par un.

**Excel / Google Sheets** — l'outil de consolidation et de scoring. C'est là que les réponses collectées via Kobo/ODK (ou recueillies oralement quand la digitalisation n'est pas possible dans l'urgence immédiate) sont agrégées, pondérées et transformées en priorités de zone exploitables pour le CONOPS.

**WhatsApp Business** — le canal de coordination terrain en temps réel pendant la fenêtre des 72 heures. Un groupe dédié par évaluation, avec des messages courts et normalisés (zone, heure, score HEAT préliminaire, alerte bloquante), permet à l'équipe de consolidation de suivre l'avancement sans attendre la fin de la collecte pour réagir à une information critique — par exemple un axe qui vient de devenir infranchissable.

### Guide pratique étape par étape — "Vos premières 72 heures d'évaluation logistique d'urgence"

Ce guide part d'une situation réelle : un événement déclencheur vient de survenir (inondation, épidémie, déplacement massif), votre organisation active sa réponse d'urgence, et vous êtes le logisticien chargé de produire une évaluation des besoins et un plan de contingence exploitables avant la fin des 72 heures.

**Étape 1 — Confirmer le déclencheur et vérifier l'état du MIRA (H0 à H6)**

Dès l'alerte, confirmez précisément la nature et l'ampleur de l'événement auprès de votre coordination, puis vérifiez auprès d'OCHA ou du cluster concerné si un MIRA est déjà lancé ou prévu pour cette crise. S'il existe une version préliminaire, même incomplète, récupérez-la : elle vous donne le cadrage général (zones touchées, population estimée, premiers signalements sectoriels) sur lequel vous allez construire votre propre évaluation logistique, sans avoir à reproduire ce travail.

**Étape 2 — Construire et déployer le formulaire de terrain (H6 à H24)**

Configurez un formulaire Kobo Toolbox ou ODK reprenant les quatre axes de la grille HEAT (Hasard, Exposition, Accès, Transport), avec un score de 0 à 4 par axe et un champ commentaire obligatoire pour toute note supérieure ou égale à 3. Déployez-le auprès de votre équipe d'évaluation, répartie par zone géographique, et ouvrez un groupe WhatsApp Business dédié pour la remontée d'alertes bloquantes en temps réel — ne vous limitez pas à attendre la synchronisation Kobo si un évaluateur signale une route coupée dans l'instant.

**Étape 3 — Consolider et scorer dans le tableur dédié (H24 à H48)**

Ouvrez le template `grille-evaluation-besoins-mira.xlsx` fourni avec ce module. Reportez-y, zone par zone et secteur par secteur, les données remontées par votre équipe : les quatre scores HEAT, les besoins logistiques identifiés (transport, stockage, dernier kilomètre) et le statut de vérification de chaque information. Le tableur calcule automatiquement un score de sévérité pondéré par zone et un décompte des besoins critiques (« bloquant ») par secteur — c'est cette sortie chiffrée, et non une impression générale, qui doit fonder vos priorités dans le CONOPS.

**Étape 4 — Rédiger le CONOPS à partir des résultats consolidés (H48 à H60)**

Ouvrez le template `plan-contingence-conops-template.docx`. Renseignez le contexte et le déclencheur, fixez des objectifs logistiques mesurables pour les 72 prochaines heures (par exemple : « ouvrir un accès camion vers la zone X d'ici H+60 », pas « améliorer l'accès »), listez précisément les ressources déjà prépositionnées et mobilisables sans délai supplémentaire, clarifiez la chaîne de décision (qui valide un déblocage de stock tampon, qui valide un changement d'itinéraire en cours de route), et construisez la chronologie 0-72h en vous appuyant sur les priorités de zone sorties du tableur à l'étape 3.

**Étape 5 — Valider, diffuser et activer le prépositionnement si nécessaire (H60 à H72)**

Faites valider le CONOPS par votre coordination avant sa diffusion à l'équipe d'exécution — un CONOPS non validé n'engage personne et peut être contredit en pleine opération. Si les scores de sévérité justifient un déblocage de stock prépositionné, déclenchez-le formellement selon la chaîne de décision inscrite dans le document, pas de façon informelle sur un simple message. Diffusez enfin le CONOPS validé à l'ensemble de l'équipe engagée : chacun doit pouvoir l'exécuter à la lecture, sans appel téléphonique complémentaire pour comprendre son rôle.
