# Module 04 — Gestion Multi-Devises & Opérations Bancaires
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Le taux officiel publié par la banque centrale du pays d'opération** (Banque Centrale du Congo pour la RDC, BEAC pour le Tchad, Bank of South Sudan, Banque de la République d'Haïti, Central Bank of Nigeria) — c'est, sauf instruction contraire explicite du siège, la source de référence légale pour fixer le taux comptable officiel mensuel de votre organisation. Réflexe à prendre en début de chaque mois : relever ce taux et le comparer au taux du mois précédent avant de le valider, pour repérer immédiatement une variation anormale plutôt que de la découvrir en fin de trimestre.

**XE.com ou OANDA** — utiles en complément quand le site de la banque centrale locale est inaccessible (connectivité limitée, page non mise à jour) ou pour vérifier un taux de marché indicatif avant une négociation de transfert avec votre banque partenaire. Ce ne sont jamais des sources de substitution pour fixer le taux comptable officiel : elles servent à croiser l'information, pas à la remplacer.

**Excel / Google Sheets** — l'outil de suivi central de ce module, via le template `suivi-taux-change-impact-budgetaire.xlsx` fourni : c'est là que vous enregistrez chaque taux mensuel, calculez le gain ou la perte de change de chaque transaction concernée, et consolidez l'impact cumulé sur le budget du projet.

### Guide pratique étape par étape

Ce guide part d'une situation réelle : votre organisation ouvre une nouvelle base terrain et vous devez, en tant que Finance Officer ou Finance Manager, mettre en place l'ensemble du dispositif bancaire multi-devises avant le premier décaissement. Voici exactement quoi faire, dans quel ordre.

**Étape 1 — Ouvrir le compte en devise locale avec le dossier complet dès le premier passage à la banque**

N'allez jamais à la banque avec un dossier incomplet : dans la plupart des contextes où j'ai travaillé, un dossier incomplet ne vous fait pas perdre une journée, il vous fait perdre deux à trois semaines, le temps de reprendre rendez-vous avec le bon interlocuteur. La documentation typiquement exigée comprend : la lettre de mission ou l'accord de siège de l'organisation dans le pays, les statuts de l'ONG, la résolution du conseil d'administration (ou du siège) désignant nommément les signataires autorisés, une copie de la pièce d'identité et du passeport de chaque signataire, un spécimen de signature de chacun, et un justificatif d'adresse du bureau local. Anticipez également les délais de vérification KYC/AML (Know Your Customer / Anti-Money Laundering) : dans plusieurs des contextes où j'ai opéré, ce contrôle prend systématiquement plus de temps pour une ONG internationale que pour une entreprise locale — planifiez l'ouverture de compte plusieurs semaines avant le premier décaissement prévu, jamais la veille.

**Étape 2 — Enregistrer immédiatement les signataires dans le registre dédié et le tenir vivant**

Dès que le compte est ouvert et les signataires confirmés par la banque, complétez le template `registre-signataires-procurations-bancaires.docx` fourni avec ce module : nom, fonction, compte concerné, date d'octroi de la procuration, statut. Ce registre n'est pas un document que vous remplissez une fois puis archivez — c'est un document que vous consultez et mettez à jour à chaque mouvement RH touchant un poste habilité à signer. La règle est simple et non négociable : dès qu'un signataire quitte son poste ou l'organisation, sa procuration doit être révoquée par écrit auprès de la banque **avant** son départ effectif, jamais après. Un appel téléphonique à la banque ne suffit jamais : exigez toujours une confirmation écrite et datée de la révocation, et conservez-la dans le registre.

**Étape 3 — Sécuriser la procédure de transfert international avant tout envoi de fonds significatif**

Avant d'initier un transfert international, vérifiez systématiquement les coordonnées bancaires du bénéficiaire (IBAN/numéro de compte, code SWIFT, nom exact de la banque) par un canal indépendant de celui par lequel elles vous ont été communiquées — un appel téléphonique sur un numéro que vous connaissiez déjà, pas celui indiqué dans le même email que les coordonnées. C'est la protection de base contre la fraude au changement de RIB (souvent appelée "Business Email Compromise"), une escroquerie qui a touché plusieurs organisations humanitaires ces dernières années, parfois pour des montants à six chiffres. Appliquez ensuite le principe de double signature vu en théorie : la personne qui initie le virement dans le système bancaire n'est jamais celle qui l'approuve seule. Conservez la preuve de transfert (avis d'exécution bancaire) et archivez-la avec la pièce justificative correspondante.

**Étape 4 — Calculer et enregistrer le gain ou la perte de change à la clôture de chaque mois**

En fin de mois, ouvrez le template `suivi-taux-change-impact-budgetaire.xlsx`. Dans l'onglet **Taux mensuels**, enregistrez le taux comptable officiel retenu pour le mois (relevé à l'Étape "Outils" ci-dessus) et le taux de marché constaté à titre de comparaison. Dans l'onglet **Calcul gain/perte par transaction**, listez chaque transaction significative convertie entre devises durant le mois : le montant en devise locale, le taux appliqué au moment réel de la transaction, et le taux comptable officiel du mois. Le template calcule automatiquement l'écart — votre perte ou gain de change réalisé — pour chaque ligne. L'onglet **Synthèse impact budgétaire** agrège ensuite ces écarts mois par mois et les rapproche du budget du projet, pour que vous puissiez répondre en un coup d'œil à la question qu'un bailleur finit toujours par poser : "quel est l'impact cumulé du change sur ce projet à ce jour ?"
