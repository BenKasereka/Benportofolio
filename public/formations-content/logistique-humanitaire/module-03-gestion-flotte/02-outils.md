# Module 03 — Gestion de Flotte & Transport en Zones Complexes
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel avancé (tableaux croisés dynamiques, RECHERCHEX, Power Query)** — c'est l'outil central de ce module. Une flotte de moins d'une vingtaine de véhicules ne justifie généralement pas un système dédié : un classeur Excel bien construit, avec des formules qui calculent automatiquement la consommation et signalent les anomalies, suffit à un suivi rigoureux. Le template fourni avec ce module utilise des formules actives (pas des valeurs figées) pour que vos chiffres se mettent à jour dès que vous saisissez un nouveau trajet.

**Google Sheets** — la version collaborative du même principe, utile quand plusieurs personnes (chauffeurs, dispatcheur, logisticien) doivent alimenter le même fichier depuis des lieux différents avec une connexion internet instable. Le classeur Excel de ce module s'importe directement dans Google Sheets sans perte de formules.

**Google Maps / suivi GPS** — utilisé pour deux choses distinctes en contexte humanitaire : la planification d'itinéraire (identifier les tracés alternatifs, estimer un temps de trajet réaliste sur piste plutôt que le temps optimiste donné par défaut) et le suivi de sécurité en temps réel quand l'organisation dispose de balises GPS sur ses véhicules ou d'un partage de position par téléphone. Ce n'est pas un outil de calcul de flotte : c'est votre outil de décision avant départ et de suivi pendant la mission.

**WhatsApp Business** — devenu, de fait, l'outil de coordination terrain le plus utilisé entre dispatcheurs et conducteurs dans la plupart des contextes humanitaires, parce qu'il fonctionne avec une connexion faible et que les chauffeurs le maîtrisent déjà. Utilisé correctement (groupes dédiés par véhicule ou par mission, message de check-in obligatoire à des points clés du trajet), il devient un outil de sécurité à part entière — pas seulement un moyen de communication informel.

### Guide pratique étape par étape — "Mettre en place un système de gestion de flotte fiable en zone complexe"

Ce guide part d'une situation fréquente : vous arrivez sur une mission qui dispose déjà de plusieurs véhicules, mais sans système de suivi structuré — les chauffeurs notent (ou pas) leurs trajets sur des bouts de papier, personne ne sait avec certitude combien un véhicule donné coûte réellement à faire rouler. Voici comment reprendre le contrôle, dans l'ordre.

**Étape 1 — Recenser la flotte existante et ouvrir un onglet dédié par véhicule (Jour 1)**

Ouvrez le template `carnet-de-bord-vehicule.xlsx` fourni avec ce module. Dans l'onglet "Véhicules", listez chaque véhicule de la flotte avec son immatriculation, son modèle, sa date de mise en service et sa consommation théorique constructeur (litres/100 km) — cette dernière donnée sert de référence de base avant même d'avoir des données terrain. Ne cherchez pas à être exhaustif dès le premier jour sur les champs secondaires : l'immatriculation, le modèle et la consommation théorique suffisent pour démarrer.

**Étape 2 — Former les conducteurs à la saisie du carnet de bord AVANT de l'exiger (Jour 1-2)**

Un carnet de bord mal rempli parce que mal expliqué est pire qu'un carnet de bord absent : il donne une fausse impression de contrôle. Réunissez les conducteurs, montrez-leur concrètement l'onglet "Trajets" du template, et expliquez sans ambiguïté ce qui est attendu à chaque trajet : date, kilométrage de départ, kilométrage d'arrivée, litres de carburant pris (le cas échéant), motif du trajet, conducteur. Insistez sur un point : le kilométrage se relève sur le compteur au moment exact du départ et de l'arrivée, jamais estimé après coup en fin de journée.

**Étape 3 — Saisir les trajets au fil de l'eau dans l'onglet "Trajets" (en continu)**

Chaque trajet est ajouté comme une nouvelle ligne dans l'onglet "Trajets" du template. Les colonnes de calcul (kilométrage parcouru, consommation aux 100 km, écart par rapport à la consommation théorique) se remplissent automatiquement par formule dès que vous saisissez les kilomètres et le carburant — vous n'avez jamais à calculer une consommation à la main. Une mise en forme conditionnelle signale en rouge toute ligne dont l'écart de consommation dépasse le seuil d'alerte : c'est votre premier niveau de détection d'anomalie, à vérifier chaque semaine, pas seulement en fin de mois.

**Étape 4 — Consulter le tableau de bord pour le suivi mensuel et le reporting (chaque fin de mois)**

L'onglet "Tableau de bord" agrège automatiquement, par véhicule et par conducteur, le kilométrage total, le carburant total consommé et le coût par kilomètre du mois, grâce à des formules de synthèse construites sur les données de l'onglet "Trajets". C'est ce tableau que vous présentez en réunion de coordination et que vous utilisez pour le reporting bailleur — jamais besoin de reconstruire un calcul depuis zéro.

**Étape 5 — Rédiger ou adapter la politique d'utilisation des véhicules de la mission (Semaine 1)**

Ouvrez le template `politique-utilisation-vehicules.docx`. Complétez les sections surlignées en gris italique avec les spécificités de votre mission : qui a autorité pour réquisitionner un véhicule, quel est le délai de préavis pour une demande non urgente, quelles sont les règles de conduite (heures maximales, interdiction de conduite de nuit hors urgence documentée, nombre de conducteurs par trajet long). Faites signer ce document par chaque conducteur et par les responsables de programme habilités à réquisitionner un véhicule : une politique non signée n'a aucune force face à un conflit d'usage.

**Étape 6 — Planifier chaque mission transport avec une vérification d'itinéraire préalable (avant chaque départ significatif)**

Avant tout trajet vers une zone que vous ne parcourez pas de façon routinière, vérifiez l'itinéraire sur Google Maps pour identifier les tracés alternatifs et estimer un temps de trajet réaliste, puis croisez cette estimation avec la dernière information sécuritaire disponible (briefing sécurité, alertes du Logistics Cluster vues au Module 01). Si l'organisation dispose d'un suivi GPS ou d'un protocole de check-in WhatsApp, activez-le pour ce trajet avant le départ, pas après un doute apparu en cours de route.
