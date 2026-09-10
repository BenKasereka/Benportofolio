# Module 06 — Google Gemini : Multimodalité & Google Workspace
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Gemini (gemini.google.com et intégration native Workspace)** — l'assistant IA de Google, accessible en fenêtre de chat autonome ou directement depuis Gmail, Docs, Sheets, Slides et Meet via l'icône Gemini présente dans chaque application. C'est cette double disponibilité (chat séparé + intégration in-app) qui détermine votre méthode de travail : pour analyser un fichier isolé (image, PDF, enregistrement), le chat autonome suffit ; pour automatiser une tâche sur un document déjà ouvert, l'intégration native est plus rapide.

**Google Sheets, Docs, Gmail** — les trois applications Workspace couvertes par ce module pour l'automatisation de tâches récurrentes. Aucune connaissance avancée n'est nécessaire : l'essentiel de la valeur vient de la formulation de la demande à Gemini, pas de la maîtrise technique de l'application elle-même.

**Grille de prompts multimodaux (`grille-prompts-multimodaux-gemini.xlsx`)** — le template fourni avec ce module : une bibliothèque de formulations éprouvées pour chaque type de contenu (image, graphique, audio, vidéo), avec le point de vérification associé à chacune.

### Guide pratique étape par étape — Faire analyser un graphique ou un tableau de données par Gemini

**Étape 1 — Préparer le contenu visuel**

Prenez une capture d'écran nette du graphique ou du tableau (évitez les captures floues ou coupées — Gemini ne peut analyser que ce qu'il peut lire). Si le contenu est déjà dans un document Sheets ou Docs ouvert, l'intégration native peut le lire directement sans capture séparée.

**Étape 2 — Formuler une demande précise sur ce que vous voulez extraire**

C'est l'étape qui détermine 90 % de la qualité du résultat. Ne demandez jamais simplement « analyse ce graphique » — précisez ce que vous cherchez à en tirer :
- Le **format de sortie** attendu (une synthèse de 5 lignes, un tableau, une liste d'alertes).
- Les **éléments spécifiques** à identifier (chaque indicateur avec sa valeur et sa tendance, la série avec la plus forte variation, toute anomalie visible).
- Le **public destinataire** de la synthèse si pertinent (un rapport pour la direction n'a pas le même niveau de détail qu'une note technique interne).

Consultez le template `grille-prompts-multimodaux-gemini.xlsx` pour des formulations déjà testées sur 4 types de contenu (image, graphique, audio, vidéo) — adaptez-les à votre cas plutôt que de repartir de zéro.

**Étape 3 — Vérifier systématiquement le résultat avant de l'utiliser**

Ouvrez le template et notez, pour chaque analyse produite, le **point de vérification** correspondant : recouper les chiffres cités avec les valeurs réelles de l'image, vérifier la légende et les unités d'un graphique, recalculer un total à partir des lignes extraites. Une analyse d'image ou de graphique non vérifiée est une source d'erreur silencieuse — l'IA peut mal interpréter une légende ambiguë ou confondre deux séries de couleurs proches sans jamais signaler son incertitude.

**Étape 4 — Intégrer la synthèse vérifiée dans votre livrable**

Une fois l'exactitude confirmée, la synthèse produite par Gemini peut être copiée directement dans votre rapport, email ou présentation — c'est là que le gain de temps se matérialise : vous ne rédigez plus la synthèse depuis zéro, vous validez et ajustez celle déjà produite.

### Guide pratique étape par étape — Automatiser un brouillon d'email récurrent dans Gmail

**Étape 1 — Identifier une tâche vraiment répétitive**

Une bonne candidate à l'automatisation a un format stable d'une fois sur l'autre (même structure, mêmes types d'information à inclure) et ne demande pas de jugement complexe à chaque occurrence. Un email hebdomadaire de suivi de statut à un partenaire, une réponse standard à une demande d'information récurrente, une relance de facture impayée sont de bons candidats. Une négociation délicate ou un email à fort enjeu politique ne le sont pas.

**Étape 2 — Donner à Gemini le contexte source, pas seulement l'instruction**

Depuis Gmail, ouvrez le fil concerné et utilisez l'icône Gemini pour demander un brouillon de réponse. Précisez explicitement les informations que le brouillon doit reprendre du fil existant (référence à la dernière question posée, chiffres mentionnés) — Gemini a accès au fil, mais votre instruction guide ce qu'il doit en retenir.

**Étape 3 — Tester sur plusieurs occurrences réelles avant de généraliser**

Ne validez jamais une automatisation sur un seul essai réussi. Répétez l'exercice sur au moins 3 cas réels différents et notez, pour chacun, ce qui a bien fonctionné et ce qui a nécessité une correction manuelle — c'est exactement la logique du **journal d'essais** du template `guide-automatisation-google-workspace.docx` fourni avec ce module.

**Étape 4 — Fiabiliser avant de mettre en routine**

Avant de laisser l'automatisation tourner sans relecture systématique, passez par la checklist de vérification du même template : relecture intégrale d'un résultat, recoupement des chiffres et noms propres, test d'un cas limite (donnée manquante, format inhabituel), vérification des paramètres de confidentialité Workspace, et second regard d'une autre personne. Une automatisation qui « marche » sur le cas standard peut échouer silencieusement sur le premier cas atypique — cette checklist existe pour l'attraper avant que ça arrive en production.
