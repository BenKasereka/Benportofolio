# Module 06 — Google Gemini : Multimodalité & Google Workspace
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — « Le tableau de bord logistique du lundi matin »

**Contexte (fictif, inspiré de situations réelles de reporting)**

Vous coordonnez les opérations logistiques d'une organisation qui gère plusieurs entrepôts régionaux. Chaque lundi, votre équipe reçoit un tableau de bord KPI généré automatiquement par votre système de gestion d'entrepôt : taux de rupture de stock par région, délai moyen de livraison, taux de retour, coût de transport par kilomètre parcouru — 4 indicateurs, chacun avec une tendance sur 8 semaines. Le tableau de bord arrive sous forme de capture d'écran, exportée depuis un outil auquel vous n'avez qu'un accès de lecture.

Votre directeur des opérations veut, chaque lundi avant 10h, un paragraphe de synthèse en français à intégrer dans son rapport hebdomadaire à la direction — pas le tableau brut, une lecture professionnelle de ce qu'il faut retenir.

**Votre mission** : produire cette synthèse avec Gemini, en respectant l'échéance et sans jamais transmettre une information non vérifiée à la direction.

### Exercice noté

1. **Formuler la demande d'analyse** — En utilisant le template `grille-prompts-multimodaux-gemini.xlsx` comme point de départ, rédigez le prompt exact que vous soumettriez à Gemini avec la capture d'écran du tableau de bord. Votre prompt doit préciser : le format de sortie attendu (longueur, ton), les éléments à identifier explicitement (chaque indicateur avec valeur et tendance), et la consigne de signaler les indicateurs qui nécessitent une attention immédiate.
2. **Simuler la vérification** — Imaginez que Gemini a produit une synthèse indiquant que le taux de rupture de stock de la région Nord a « fortement baissé » sur 8 semaines. Décrivez, en 3-4 lignes, la procédure exacte que vous suivriez pour vérifier cette affirmation avant de la transmettre à la direction — quelles données précises iriez-vous recouper, et où.
3. **Documenter l'automatisation associée** — Ce tableau de bord arrivant chaque lundi selon un format stable, remplissez le template `guide-automatisation-google-workspace.docx` pour cadrer la mise en routine de cette synthèse hebdomadaire : tâche identifiée, application concernée, approche d'automatisation, et au moins 2 lignes du journal d'essais avec un écart plausible constaté et l'ajustement apporté.

**Livrable attendu** : le prompt rédigé, le paragraphe de vérification, et le template `guide-automatisation-google-workspace.docx` complété — le tout tenant sur une page de synthèse.

### Pièges fréquents

- **Sous-utiliser la capacité multimodale par réflexe** — décrire laborieusement en texte un graphique ou une image alors qu'il suffisait de le soumettre directement à Gemini. Ce réflexe vient de l'habitude des IA purement textuelles ; il fait perdre le principal avantage de Gemini et introduit des erreurs de retranscription évitables.
- **Ne jamais vérifier une analyse d'image générée automatiquement** — une IA peut mal interpréter un graphique complexe, confondre deux séries de couleurs proches, ou mal lire une légende ambiguë, sans jamais signaler son incertitude. Une synthèse non vérifiée transmise telle quelle à un décideur peut propager une erreur de lecture invisible jusqu'à ce qu'elle cause un vrai problème.
- **Ignorer les paramètres de confidentialité Google Workspace pour des données sensibles** — traiter des données RH, financières ou bénéficiaires avec l'IA intégrée sans avoir vérifié au préalable les règles de partage et de rétention définies par votre organisation.
- **Valider une automatisation sur un seul essai réussi** — un brouillon d'email ou une synthèse qui fonctionne parfaitement une fois ne garantit rien sur le cas suivant, surtout si les données d'entrée varient légèrement (un champ vide, un format de date différent, un montant à zéro).
- **Traiter Gemini intégré comme "moins risqué" parce qu'il est natif à Workspace** — l'accès direct à vos documents ne réduit en rien le besoin de relecture humaine sur le résultat produit ; c'est un gain de rapidité d'accès aux données, pas un gain de fiabilité automatique du résultat généré.

### Check-list de fin de module

- [ ] Je sais expliquer ce qu'apporte concrètement la multimodalité par rapport à une IA purement textuelle, et dans quels cas elle change réellement la vitesse de travail.
- [ ] Je sais formuler une demande précise pour faire analyser une image, un graphique ou un document visuel par Gemini.
- [ ] Je vérifie systématiquement une analyse générée automatiquement avant de l'intégrer à un rapport ou une communication.
- [ ] J'ai identifié une tâche récurrente de mon quotidien professionnel qui est un bon candidat à l'automatisation dans Sheets, Docs ou Gmail.
- [ ] J'ai complété un journal d'essais sur au moins 3 occurrences avant de considérer une automatisation fiable.
- [ ] Je connais la checklist à valider avant de mettre une automatisation IA en routine sans relecture systématique.
- [ ] Je sais où vérifier les paramètres de confidentialité Google Workspace avant de traiter une donnée sensible avec Gemini.
