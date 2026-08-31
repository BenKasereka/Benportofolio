# Module 05 — Distribution & Last-Mile Delivery
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel / Google Sheets** — l'outil central de ce module. Vous l'utiliserez pour construire le plan logistique complet d'une journée de distribution (calcul des besoins en transport et en staff, chronologie de la journée) et pour faire tourner le suivi post-distribution (PDM), avec un taux de couverture calculé automatiquement à partir de vos données de terrain.

**Kobo Toolbox / ODK** — les deux outils de référence pour la collecte de données mobile en contexte humanitaire. Sur le point de distribution, ils permettent de vérifier l'identité d'un bénéficiaire sur liste et d'enregistrer chaque passage en temps réel, sur téléphone ou tablette, même sans connexion internet permanente (les données se synchronisent dès qu'une connexion redevient disponible). Ce module ne vous forme pas à construire un formulaire Kobo de A à Z — c'est un outil que vous rencontrerez déjà déployé sur la plupart des missions — mais vous devez savoir ce qu'il permet de faire au point de vérification : recherche rapide d'un nom sur la liste chargée, alerte automatique en cas de tentative de double-passage, export immédiat des données de présence pour votre PDM.

### Guide pratique étape par étape — "Planifier et exécuter une journée de distribution"

Ce guide part d'une situation réelle : vous devez organiser une distribution pour plusieurs centaines, voire plusieurs milliers de ménages, sur un site où l'espace est contraint et où le staff est limité. Voici exactement quoi faire, dans quel ordre, de la planification amont jusqu'au contrôle post-distribution.

**Étape 1 — Verrouiller et croiser la liste de bénéficiaires (J-7 à J-3)**

Récupérez la liste finale validée par le programme. Avant de la considérer utilisable, croisez-la systématiquement avec les listes des tours de distribution précédents sur le même site ou la même zone, et si possible avec celles des autres organisations présentes. Cherchez spécifiquement les doublons de nom, de numéro de ménage ou de numéro de téléphone. Une fois croisée et nettoyée, verrouillez la liste : au-delà de cette étape, toute modification doit être documentée et validée, jamais improvisée sur site le jour J.

**Étape 2 — Calculer les besoins logistiques amont (J-5 à J-3)**

Ouvrez le template `plan-logistique-distribution-pdm.xlsx` fourni avec ce module, onglet "Planification". À partir du nombre de ménages ciblés et du volume/poids par kit ou ration, calculez : le nombre de rotations de camion nécessaires entre l'entrepôt et le point de distribution, le nombre d'agents requis par poste (vérification, distribution, gestion de foule, premiers secours), et le chronogramme de la journée heure par heure (ouverture du site, début des rotations d'appel, pauses, clôture). Un point trop souvent sous-estimé : prévoyez toujours une marge de temps pour les imprévus (retard camion, panne, afflux plus important que prévu) — une distribution planifiée à l'heure près, sans aucune marge, échoue à la première contrariété.

**Étape 3 — Dimensionner le site et la gestion de foule (J-3 à J-1)**

Visitez le site (ou faites-le visiter par un agent local si l'accès est limité) et vérifiez : la capacité réelle d'accueil par rapport au nombre de bénéficiaires attendus au pic de la journée, l'existence de zones d'ombre et de points d'eau, un circuit à sens unique clair (entrée, vérification, distribution, sortie) pour éviter les reflux et les bousculades, et un dispositif de sécurité proportionné à la taille de la foule attendue — pas seulement à la taille du site tel qu'il a été utilisé lors d'une distribution précédente plus petite.

**Étape 4 — Organiser la vérification des bénéficiaires au point de distribution (Jour J, dès l'ouverture)**

Chaque bénéficiaire est vérifié sur la liste verrouillée avant de recevoir son aide — via Kobo Toolbox/ODK si l'outil est disponible sur le site, ou via jeton de distribution numéroté et prétabli sinon. Le principe est le même dans les deux cas : un bénéficiaire ne peut être servi que s'il apparaît sur la liste et n'a pas déjà été servi lors de ce tour. Toute anomalie détectée en cours de distribution (nom absent de la liste, tentative de double-passage, jeton en double) est immédiatement isolée — la personne est orientée vers un point de vérification secondaire, sans interrompre le flux général ni créer d'esclandre public.

**Étape 5 — Documenter la distribution en temps réel (Jour J)**

Au fil de la journée, un agent dédié — jamais celui qui distribue physiquement — enregistre : le nombre de ménages effectivement servis par rapport au nombre ciblé, les incidents survenus (y compris mineurs), et toute plainte reçue sur site, à consigner dans le template `registre-plaintes-feedback-communautaire.docx`. Ne remettez jamais ce travail de documentation à la fin de journée "de mémoire" : les détails précis (heure, nom de l'agent concerné, nature exacte du problème) se perdent vite dans le rythme d'une distribution.

**Étape 6 — Conduire le suivi post-distribution, PDM (J+2 à J+7)**

Utilisez l'onglet "PDM" du template `plan-logistique-distribution-pdm.xlsx`. Sélectionnez un échantillon de ménages parmi les bénéficiaires servis (et, si pertinent, quelques ménages non servis pour comprendre pourquoi) et vérifiez : ont-ils bien reçu la quantité et la qualité de kit prévues, dans quel délai après la distribution, et quel est leur retour sur le déroulement de la journée (attente, traitement, sécurité perçue). Le taux de couverture se calcule automatiquement dans le fichier à partir du nombre de ménages ciblés et du nombre de ménages confirmés atteints ; toute couverture sous le seuil attendu ou tout écart signalé (discrepancy flag) doit déclencher une analyse des causes, pas seulement une note dans un rapport.

**Étape 7 — Clôturer les plaintes enregistrées avec une action documentée (en continu, jusqu'à J+14)**

Reprenez chaque ligne du registre de plaintes ouvert à l'étape 5. Pour chaque plainte, une action doit être consignée avant clôture — vérification effectuée, correction apportée, ou explication documentée si la plainte s'avère non fondée après vérification. Une plainte clôturée sans ligne d'action renseignée n'est pas traitée, même si le statut affiche "résolu" : c'est le premier point que relève un auditeur bailleur ou un point focal redevabilité en visite de suivi.
