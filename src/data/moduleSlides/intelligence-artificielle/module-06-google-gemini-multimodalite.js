// Module 06 — Google Gemini : Multimodalité & Google Workspace
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Google Gemini — Multimodalité & Google Workspace',
    hook: "Arrêter de décrire en mots ce qu'une IA peut voir directement — et savoir vérifier ce qu'elle en tire avant de le transmettre.",
  },
  {
    type: 'objectives',
    items: [
      'Analyser une image, un graphique ou un document visuel avec Gemini pour en extraire une synthèse écrite exploitable.',
      'Automatiser une tâche récurrente dans Google Sheets, Docs ou Gmail en formulant des instructions IA précises.',
      'Créer un contenu multimodal (texte + visuel) pour une communication professionnelle prête à l\'envoi.',
      'Vérifier systématiquement une analyse générée par Gemini avant de l\'intégrer à un livrable.',
      'Distinguer ce qui relève de l\'assistance IA et ce qui nécessite la gouvernance des données de votre organisation.',
    ],
  },
  {
    type: 'concept',
    title: 'La multimodalité, concrètement',
    body: [
      "Une IA purement textuelle ne \"voit\" rien : vous décrivez, elle répond à votre description. Transcrire un graphique complexe à 6 courbes en mots prend souvent plus de temps que de l'analyser à l'œil.",
      "Gemini est nativement multimodal : il traite texte, image, audio et vidéo dans la même conversation, sans étape de conversion intermédiaire. Vous glissez une capture, une photo, un enregistrement vocal ou une vidéo, et vous posez votre question directement dessus.",
    ],
    highlight: "Le repère à retenir : avant de décrire un contenu visuel en mots pour l'IA, demandez-vous si vous ne pourriez pas simplement le lui soumettre directement.",
  },
  {
    type: 'concept',
    title: "Ce n'est pas un gadget — mais ce n'est pas non plus universel",
    body: "La multimodalité change la vitesse de travail pour tout ce qui est plus rapide à montrer qu'à décrire : un dashboard KPI aux courbes croisées, une photo de stock en entrepôt, un tableau scanné à la mise en page irrégulière. À l'inverse, pour une tâche purement rédactionnelle (reformuler un paragraphe, structurer un plan), la multimodalité n'apporte rien : le texte brut reste la voie la plus directe.",
  },
  {
    type: 'concept',
    title: "L'intégration native à Google Workspace",
    body: "Gemini est intégré directement dans Gmail, Docs, Sheets, Slides et Meet : il peut lire le contenu du document ou de l'email sous vos yeux sans copier-coller. Depuis Gmail, vous lui demandez de rédiger une réponse à un fil, et il a déjà accès au contexte de l'échange — la même logique que Microsoft Copilot dans Office 365 (Module 04).",
  },
  {
    type: 'warning',
    title: "Les précautions de gouvernance liées à l'accès natif",
    items: [
      'Un document Google confidentiel reste confidentiel une fois que Gemini y a accès — vérifiez les paramètres de partage et de rétention avant de traiter des données sensibles (RH, finances, bénéficiaires).',
      "L'accès natif ne dispense jamais de la relecture humaine : le niveau de vérification attendu est identique, que Gemini lise directement votre Sheet ou que vous lui ayez collé un extrait.",
      "C'est la politique IT/administrateur Workspace qui détermine ce que Gemini peut traiter — pas votre seul jugement individuel. En cas de doute, la question se pose avant l'usage, pas après.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 cas',
    caption: "où le levier multimodal est net",
    context: "Tableaux de bord et graphiques complexes, photos et documents terrain, enregistrements audio/vidéo courts — dans les trois cas, la vérification humaine reste obligatoire.",
  },
  {
    type: 'concept',
    title: "Ce que la multimodalité ne change pas",
    body: "Gemini reste un modèle de langage qui produit la réponse la plus plausible compte tenu de ce qu'il \"voit\", pas un outil de mesure certifié. Sur une image nette, le taux d'erreur est faible. Sur un graphique à légende ambiguë, une photo prise de biais ou un audio bruité, le risque de mauvaise lecture augmente — et l'IA ne signale pas systématiquement son incertitude : elle répond avec la même assurance apparente qu'elle ait bien ou mal interprété le document.",
  },
  {
    type: 'process',
    title: 'Faire analyser un graphique ou un tableau par Gemini',
    steps: [
      { title: 'Préparer le contenu visuel', body: "Capture nette (pas floue ni coupée) — ou lecture directe si le contenu est déjà dans un Sheets/Docs ouvert." },
      { title: 'Formuler une demande précise', body: "Format de sortie attendu, éléments spécifiques à identifier, public destinataire — jamais juste \"analyse ce graphique\"." },
      { title: 'Vérifier systématiquement le résultat', body: 'Recouper les chiffres, vérifier légende et unités, recalculer un total avant tout usage.' },
      { title: 'Intégrer la synthèse vérifiée', body: 'Une fois l\'exactitude confirmée, copier directement dans le rapport, email ou présentation.' },
    ],
  },
  {
    type: 'process',
    title: 'Automatiser un brouillon d\'email récurrent dans Gmail',
    steps: [
      { title: 'Identifier une tâche vraiment répétitive', body: 'Format stable, pas de jugement complexe à chaque occurrence (suivi de statut, relance de facture).' },
      { title: 'Donner le contexte source, pas seulement l\'instruction', body: 'Préciser les informations du fil que le brouillon doit reprendre — Gemini a accès au fil, votre instruction guide ce qu\'il en retient.' },
      { title: 'Tester sur plusieurs occurrences réelles', body: 'Au moins 3 cas réels différents avant de généraliser, en notant ce qui a nécessité une correction manuelle.' },
      { title: 'Fiabiliser avant de mettre en routine', body: 'Relecture intégrale, recoupement des chiffres et noms propres, test d\'un cas limite, vérification de la confidentialité, second regard.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Multimodalité', definition: "Capacité d'un modèle IA à traiter plusieurs types de contenus (texte, image, audio, vidéo) au sein d'une même requête, sans conversion préalable en texte." },
      { term: 'Intégration native', definition: "Accès direct d'un assistant IA aux documents et applications dans lesquels il est intégré, par opposition à un outil externe auquel il faut copier-coller le contenu." },
      { term: 'Gouvernance des données', definition: "Règles définies par une organisation sur ce que les outils IA intégrés peuvent traiter, conserver ou partager." },
    ],
  },
  {
    type: 'case-study',
    title: 'Étude de cas — "Le tableau de bord logistique du lundi matin"',
    scenario: "Vous coordonnez la logistique de plusieurs entrepôts régionaux. Chaque lundi, un tableau de bord KPI arrive en capture d'écran (rupture de stock, délai de livraison, taux de retour, coût transport). Votre directeur veut, avant 10h, un paragraphe de synthèse en français pour son rapport à la direction — sans jamais transmettre une information non vérifiée.",
    steps: [
      "Formuler la demande d'analyse avec la grille de prompts multimodaux : format de sortie, éléments à identifier, alertes à signaler.",
      'Simuler la vérification : si Gemini annonce une "forte baisse" d\'un indicateur, recouper les données précises avant transmission.',
      "Documenter l'automatisation associée dans le guide dédié : tâche, application, approche, journal d'essais avec écarts constatés.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Sous-utiliser la capacité multimodale par réflexe — décrire laborieusement en texte ce qu'il suffisait de soumettre directement à Gemini.",
      "Ne jamais vérifier une analyse d'image générée automatiquement, alors que l'IA peut confondre deux séries de couleurs proches sans signaler son incertitude.",
      "Ignorer les paramètres de confidentialité Google Workspace pour des données RH, financières ou bénéficiaires.",
      "Traiter Gemini intégré comme \"moins risqué\" parce qu'il est natif à Workspace — l'accès direct ne réduit en rien le besoin de relecture humaine.",
    ],
  },
  {
    type: 'exercise',
    title: 'Synthèse du tableau de bord logistique',
    instructions: "En utilisant la grille de prompts multimodaux comme point de départ, rédigez le prompt exact que vous soumettriez à Gemini avec la capture du tableau de bord (format de sortie, éléments à identifier, alertes). Puis décrivez en 3-4 lignes la procédure de vérification d'une affirmation comme \"forte baisse\" avant transmission à la direction. Enfin, remplissez le guide d'automatisation Google Workspace pour cadrer la mise en routine hebdomadaire, avec au moins 2 lignes de journal d'essais.",
    deliverable: "Le prompt rédigé, le paragraphe de vérification, et le guide d'automatisation complété — le tout sur une page de synthèse.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qu'apporte la multimodalité par rapport à une IA purement textuelle, et dans quels cas elle change la vitesse de travail.",
      'Je sais formuler une demande précise pour faire analyser une image ou un graphique par Gemini.',
      "Je vérifie systématiquement une analyse générée automatiquement avant de l'intégrer à un rapport.",
      "J'ai complété un journal d'essais sur au moins 3 occurrences avant de considérer une automatisation fiable.",
      "Je sais où vérifier les paramètres de confidentialité Google Workspace avant de traiter une donnée sensible avec Gemini.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Prompting Engineering avancé — L\'art de commander l\'IA.',
  },
]
