# Module 03 — Gestion des Fournisseurs & Conformité
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**OFAC Sanctions List Search (sanctionssearch.ofac.treas.gov)** — l'outil de recherche officiel du Trésor américain sur la liste SDN (Specially Designated Nationals) et les autres listes de sanctions américaines. Recherche gratuite, sans compte, par nom d'entreprise ou d'individu, avec un score de correspondance approximative réglable — utile précisément pour détecter les quasi-correspondances traitées dans l'étude de cas de ce module.

**EU Financial Sanctions Database (webgate.ec.europa.eu/fsd)** — la base consolidée officielle des sanctions financières de l'Union européenne. Recherche libre par nom, avec possibilité de filtrer par régime de sanctions (pays ou thématique). Indispensable pour tout achat impliquant une entité ou un paiement transitant par un pays membre de l'UE.

**UN Security Council Consolidated List (scsanctions.un.org)** — la liste consolidée des sanctions du Conseil de sécurité des Nations Unies, recherchable directement en ligne. Moins fréquemment mise à jour que les deux précédentes mais reste la référence pour les mesures onusiennes, particulièrement pertinentes dans les contextes où une résolution du Conseil de sécurité encadre spécifiquement le pays d'opération.

**OpenSanctions.org** — un agrégateur gratuit et indépendant qui consolide en une seule recherche les listes OFAC, UE, ONU et de nombreuses listes nationales et sectorielles supplémentaires. Ce n'est pas une source officielle — un résultat positif doit toujours être confirmé sur la liste primaire correspondante avant toute décision — mais c'est le réflexe le plus rapide pour un premier balayage large, en particulier quand le fournisseur ou ses dirigeants ont un nom courant.

**Fiche de qualification & évaluation fournisseur (`fiche-qualification-evaluation-fournisseur.xlsx`)** — le template Excel de ce module, avec trois onglets : dossier documentaire de qualification, scorecard pondéré d'évaluation périodique, et suivi des échéances de réévaluation.

**Accord-cadre / Framework Agreement (`accord-cadre-framework-agreement-template.docx`)** — le modèle de contrat-cadre prêt à l'emploi, à adapter au fournisseur et au type d'achat récurrent concerné.

### Guide pratique étape par étape — du premier contact fournisseur au contrat-cadre géré

Ce guide couvre le cycle complet : qu'il s'agisse d'un tout premier fournisseur ou d'un fournisseur de longue date dont la situation change, la séquence ci-dessous est celle à appliquer systématiquement, dans cet ordre.

**Étape 1 — Constituer le dossier documentaire de qualification (avant toute commande)**

Ouvrez l'onglet **1-Qualification** du template `fiche-qualification-evaluation-fournisseur.xlsx`. Réunissez, au minimum : preuve d'existence légale (certificat d'enregistrement / immatriculation), certificat fiscal à jour, coordonnées bancaires (RIB), au moins deux à trois références clients vérifiables, et une preuve de capacité opérationnelle réelle (visite de site si le volume d'achat le justifie). Un dossier incomplet n'est pas qualifié "sous réserve" — il n'est pas qualifié, point final, tant que les pièces manquantes ne sont pas obtenues.

**Étape 2 — Effectuer le screening d'inéligibilité avant toute signature**

Avec le nom exact du fournisseur ET le nom de ses dirigeants/propriétaires identifiés au dossier, effectuez la recherche dans cet ordre : d'abord un balayage large sur **OpenSanctions.org** pour repérer rapidement tout signal, puis, en cas de résultat — même approximatif — confirmation systématique sur la liste primaire concernée (OFAC, UE ou ONU selon l'origine du signal). Ne jamais fonder une décision de blocage ou de validation uniquement sur l'agrégateur : c'est la liste officielle qui fait foi. Consignez la date de la recherche, les listes consultées et le résultat directement dans l'onglet 1-Qualification — un screening non daté n'a aucune valeur probante en cas d'audit.

**Étape 3 — Documenter la décision de qualification**

Sur la base du dossier complet et du résultat du screening, statuez : Qualifié, Qualifié sous condition (préciser laquelle), ou Rejeté. Toute décision — y compris une validation malgré un résultat de recherche approximatif — doit être justifiée par écrit dans la fiche. C'est cette trace écrite, pas votre mémoire de la décision, qui vous protège en cas de contrôle bailleur dix-huit mois plus tard.

**Étape 4 — Évaluer le fournisseur périodiquement avec le scorecard pondéré**

Une fois le fournisseur actif, ouvrez l'onglet **2-Évaluation pondérée**. Notez chaque commande ou période de référence sur cinq critères (fiabilité/délais, qualité, prix, conformité, réactivité), chacun sur une échelle de 1 à 5. Le fichier calcule automatiquement le score pondéré global et déclenche une alerte automatique si ce score descend sous le seuil défini (3/5). Cette évaluation n'est pas un exercice ponctuel : elle doit être répétée à fréquence régulière (tous les 6 à 12 mois selon le volume d'achat), pas seulement lors d'un incident.

**Étape 5 — Suivre les échéances de réévaluation dans le temps**

L'onglet **3-Suivi réévaluation** centralise, pour l'ensemble du portefeuille, la date de dernière évaluation de chaque fournisseur et calcule automatiquement la prochaine échéance ainsi qu'un statut "À jour" / "En retard". Un fournisseur qui glisse en statut "En retard" doit être réévalué avant toute nouvelle commande significative — pas après.

**Étape 6 — Décider entre achat ponctuel et contrat-cadre**

Pour un besoin récurrent et prévisible (même catégorie d'article ou de service commandée plusieurs fois par an), établissez un contrat-cadre avec le `accord-cadre-framework-agreement-template.docx` plutôt que de relancer une procédure d'achat complète à chaque commande. Fixez dès la signature une durée précise (12 mois recommandé) et une clause de revue de performance avant tout renouvellement — jamais une reconduction tacite indéfinie.

**Étape 7 — Gérer le cycle de vie du contrat-cadre jusqu'à son échéance**

À l'approche de l'échéance fixée à l'étape 6, croisez systématiquement deux éléments avant toute décision de renouvellement : le score de la dernière évaluation périodique (étape 4) et une remise en concurrence au moins partielle (comparaison avec au minimum un ou deux autres fournisseurs qualifiés du secteur). Un renouvellement signé sans ces deux vérifications n'est pas une gestion de contrat-cadre, c'est une reconduction automatique — le piège le plus fréquent traité dans ce module.
