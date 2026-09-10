# Module 03 — Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Extraire les 5 constats prioritaires d'un rapport d'audit de 140 pages"

**Contexte (fictif, représentatif d'une situation professionnelle courante)**

Vous êtes chargé(e) de préparer, pour la direction générale, une synthèse d'un rapport d'audit interne de 140 pages portant sur les processus d'achats et de gestion financière d'un consortium d'ONG. La direction dispose de 20 minutes lors de la prochaine réunion de comité pour prendre connaissance des résultats et décider des priorités d'action. Le rapport complet contient des dizaines de constats, de gravité et d'impact très inégaux, noyés dans un langage technique d'audit.

**Ce qui échoue** : déposer le rapport et demander "résume ce document" produit une synthèse qui reprend un peu de chaque section dans un ordre calqué sur le sommaire du rapport — sans hiérarchie de priorité, avec un niveau de détail technique inchangé, inutilisable telle quelle pour une direction qui a 20 minutes et pas de bagage d'audit.

**La demande structurée qui fonctionne**, construite selon la méthode du guide pratique :

> "Voici un rapport d'audit interne de 140 pages sur les processus d'achats et de gestion financière d'un consortium d'ONG. **Objectif** : identifier les 5 constats les plus prioritaires pour une prise de décision immédiate. **Audience** : la direction générale, qui n'a pas de formation en audit et dispose de 20 minutes en réunion de comité. **Niveau de détail** : une phrase de constat, une phrase d'impact concret, une phrase de recommandation associée — pas plus, pas de citation littérale des procédures d'audit. **Format** : liste numérotée des 5 constats classés par ordre de priorité décroissante, avec en tête un intitulé court de moins de 10 mots par constat, suivie d'une ligne de synthèse globale en une phrase pour ouvrir la présentation orale."

**Ce que cette formulation change concrètement** : Claude ne se contente plus de résumer dans l'ordre du document — il doit trier par priorité, ce qui l'oblige à évaluer la gravité relative de chaque constat plutôt qu'à les lister tous au même niveau. Le format imposé (intitulé court, une phrase d'impact, une phrase de recommandation) élimine le jargon d'audit qui ne servirait à rien pour cette audience précise.

**L'étape qu'il ne faut pas sauter** : une fois les 5 constats obtenus, demandez explicitement "des 5 constats retenus, lequel est le moins solidement étayé par le rapport, et pourquoi ?" — cette contre-vérification révèle si un constat a été retenu pour sa gravité apparente plutôt que pour la force réelle des preuves qui le soutiennent dans le document, avant que la direction ne s'appuie dessus pour décider.

### Exercice noté

1. **Demande de synthèse structurée** — Prenez un document long réel de votre propre travail (rapport, politique, étude — à défaut, un document public de plusieurs dizaines de pages sur un sujet de votre secteur). Formulez la demande de synthèse en suivant les quatre éléments de la méthode : objectif, audience, niveau de détail, format de sortie. Consignez cette demande dans le template `04-templates/gabarit-prompts-analyse-documents-longs.xlsx` fourni, dans une nouvelle ligne, en complétant chaque colonne.
2. **Test et vérification** — Soumettez cette demande à Claude avec le document déposé. Vérifiez au moins 3 des points produits contre le document source directement (pas de mémoire). Notez dans le template si le niveau de détail obtenu correspondait à ce que vous aviez demandé, ou s'il a fallu ajuster.
3. **Revue critique appliquée** — Demandez explicitement à Claude d'identifier le point le moins étayé de sa propre synthèse. Notez sa réponse : cela change-t-il votre confiance dans un des points retenus ?
4. **Rédaction itérative** — Choisissez une section courte d'un rapport ou d'une procédure que vous devez produire prochainement. Faites-la rédiger par Claude en suivant la méthode section par section du guide pratique (plan validé, une section à la fois, contre-argumentation sur la partie recommandation), en vous appuyant sur le template `04-templates/guide-redaction-rapports-procedures-claude.docx` fourni pour structurer le suivi.

**Livrable attendu** : la ligne complétée dans le gabarit de prompts d'analyse, et la fiche de suivi de rédaction du guide, avec au moins une section rédigée et sa contre-argumentation consignée.

### Pièges fréquents

- **Demander un résumé sans préciser le niveau de détail ni l'audience visée** — produit un résultat calibré pour personne : trop détaillé et trop technique pour une direction pressée, ou au contraire trop superficiel pour une équipe qui doit agir dessus point par point.
- **Accepter la première version d'un document rédigé par l'IA sans itération ni relecture critique humaine** — une version unique, même bien écrite, n'a jamais été confrontée à un regard extérieur ni vérifiée sur ses données chiffrées ; la diffuser telle quelle transfère ce risque à votre lecteur final, souvent au pire moment.
- **Ne jamais demander explicitement une contre-argumentation à l'IA** — se priver du seul mécanisme qui pousse le modèle à chercher activement les failles d'un raisonnement plutôt qu'à le valider poliment ; sans cette demande explicite, aucune revue critique réelle n'a lieu, quelle que soit la qualité apparente de la synthèse.
- **Déposer un document long en plusieurs morceaux désordonnés pour "économiser" une conversation** — fragmenter un rapport en extraits collés au fil de l'eau fait perdre à Claude la vue d'ensemble qui fait justement la valeur d'une fenêtre de contexte large ; déposez le document complet dès le départ, en un seul fichier, pour que les recoupements entre sections restent possibles.
- **Reformuler une demande de synthèse insatisfaisante en repartant de zéro plutôt qu'en corrigeant ce qui ne va pas** — perdre le fil d'une conversation déjà engagée sur un document long oblige Claude à retraiter l'ensemble sans le bénéfice des clarifications déjà apportées ; une correction ciblée ("trop de détails techniques, garde uniquement l'impact financier") est presque toujours plus rapide et plus précise qu'un nouveau prompt complet.

### Check-list de fin de module

- [ ] Je sais formuler une demande de synthèse en précisant systématiquement l'objectif, l'audience, le niveau de détail et le format de sortie attendus.
- [ ] Je sais déposer un document long complet dans Claude et vérifier au moins un échantillon des points produits contre la source.
- [ ] Je sais demander explicitement une contre-argumentation ou une revue critique, et je comprends pourquoi ce n'est jamais le comportement par défaut du modèle.
- [ ] Je sais rédiger un document professionnel par itération section par section, en validant le plan avant tout contenu.
- [ ] Je n'accepte jamais une première version d'un document rédigé par l'IA sans relecture critique humaine avant diffusion.
- [ ] J'ai complété une ligne du gabarit de prompts d'analyse de documents longs avec un cas réel de mon travail.
- [ ] J'ai rédigé au moins une section d'un document avec la méthode itérative, en consignant la contre-argumentation demandée dans le guide de rédaction.
