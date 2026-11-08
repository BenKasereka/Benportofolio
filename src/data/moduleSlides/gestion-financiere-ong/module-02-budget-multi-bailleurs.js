// Module 02 — Élaboration & Gestion Budgétaire Multi-Bailleurs
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Élaboration & Gestion Budgétaire Multi-Bailleurs',
    hook: "Un budget de projet rejeté par un bailleur, ce n'est pas toujours une question de montant — c'est souvent une question de méthode. Ce module vous apprend à construire un budget que le bailleur accepte du premier coup, et à le piloter chaque mois pour repérer un dérapage pendant qu'il est encore temps d'agir.",
  },
  {
    type: 'objectives',
    items: [
      "Construire un budget de projet en choisissant, ligne par ligne, la méthode de budgétisation adaptée : activité par activité (chiffrer chaque activité séparément), coût unitaire (prix unitaire × quantité), ou forfait (un montant fixe non détaillé).",
      "Tenir un tableau de suivi budgétaire mensuel — un BFU (Budget Follow-Up) — qui compare au budget non seulement le dépensé (l'argent réellement sorti) mais aussi l'engagé (les contrats déjà signés, pas encore payés).",
      "Détecter un écart budgétaire significatif avant qu'il ne devienne un dépassement irréversible en fin de projet.",
      "Distinguer une situation qui relève d'un simple virement de ligne budgétaire (réallocation de fonds entre deux lignes, sans changement contractuel) de celle qui exige un avenant formel (une modification contractuelle officielle de l'accord de financement) au bailleur.",
      "Rédiger une note de demande de virement de ligne défendable, avec une justification que le bailleur peut valider sans aller-retour.",
    ],
  },
  {
    type: 'concept',
    title: 'Les trois méthodes de budgétisation',
    body: [
      "Activité par activité : vous décomposez chaque activité du cadre logique (le tableau qui structure les objectifs et activités du projet) en ressources nécessaires — personnel, matériel, transport — et vous chiffrez chacune séparément. Traçabilité totale, mais illisible sur des coûts récurrents ou diffus comme le carburant d'un parc véhicule sur 18 mois.",
      "Coût unitaire : la ligne est un prix unitaire multiplié par une quantité — coût par bénéficiaire, par kit, par tonne-kilomètre. Auditable et comparable entre partenaires, c'est aussi la méthode la plus solide pour anticiper un changement d'échelle du projet (plus de bénéficiaires = recalcul mécanique, pas renégociation).",
      "Forfait : un montant fixe pour une ligne dont le coût réel est difficile à détailler, ou dont la justification exhaustive coûterait plus cher administrativement qu'elle n'apporte de rigueur. Défendable sur une petite ligne de frais divers ; risqué sur une ligne significative.",
    ],
    highlight: "Piège classique : recourir au forfait par défaut sur une ligne importante par simple facilité de chiffrage — le bailleur qui le découvre en instruction relit tout le reste du budget avec plus de suspicion.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir la bonne méthode de budgétisation',
    columns: ['Méthode', "Quand l'utiliser", 'Ce que le bailleur attend en contrepartie'],
    rows: [
      ['Activité par activité', 'Activités discrètes, ponctuelles, bien délimitées dans le temps', "Un sous-détail ligne par ligne rattaché explicitement à l'activité du cadre logique"],
      ['Coût unitaire', 'Coûts qui varient avec un volume (bénéficiaires, kits, tonnage, distance)', 'Un prix unitaire justifiable par un marché récent, un devis, ou un référentiel de coûts du secteur'],
      ['Forfait', 'Coûts partagés, frais divers, lignes à faible montant et forte dispersion', "Une note de justification expliquant pourquoi le détail n'est ni possible ni pertinent"],
    ],
  },
  {
    type: 'concept',
    title: 'La logique du BFU — comparer l\'engagé ET le dépensé',
    body: [
      "L'erreur la plus fréquente, même chez des gestionnaires compétents, est de ne comparer au budget que le dépensé — ce qui a réellement été décaissé. C'est une vision incomplète et dangereuse.",
      "Un BFU correct distingue trois états pour chaque ligne : le Budget (l'allocation initiale ou révisée), l'Engagé (bons de commande émis, contrats signés, mais pas encore payés) et le Dépensé (factures effectivement payées).",
    ],
    highlight: "Si vous ne suivez que le dépensé, une ligne peut paraître saine à 40 % de consommation alors qu'elle est en réalité engagée à 95 % — le dépassement n'apparaît que lorsqu'il est trop tard pour agir.",
  },
  {
    type: 'concept',
    title: 'Comparer au prorata temporis du projet',
    body: "Le calcul à faire apparaître sur chaque ligne du BFU : Consommé total = Engagé + Dépensé, puis Solde disponible = Budget − Consommé total, puis % consommé = Consommé total ÷ Budget. Ce pourcentage doit ensuite être comparé au prorata temporis du projet — la part de la durée totale du projet déjà écoulée.",
    highlight: "Si vous êtes au mois 6 d'un projet de 12 mois (50 % de la durée écoulée), une ligne à 75 % de consommation est un signal d'alerte même si elle reste sous 100 % : elle brûle plus vite que le rythme du projet ne le justifie.",
  },
  {
    type: 'stat-callout',
    stat: '~10 %',
    caption: 'Seuil de tolérance courant pour un virement de ligne sans avenant formel',
    context: "Un ordre de grandeur à vérifier systématiquement dans le contrat spécifique — le pourcentage exact, sa base de calcul et le délai de notification varient d'un bailleur et d'un contrat à l'autre.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'BFU (Budget Follow-Up)', definition: "Tableau de suivi comparant, ligne par ligne, le budget alloué à l'engagé et au dépensé réels." },
      { term: 'Virement de ligne budgétaire', definition: "Réallocation de fonds d'une ligne excédentaire vers une ligne déficitaire, dans les limites de tolérance du bailleur, sans modification contractuelle formelle." },
      { term: 'Avenant', definition: "Modification contractuelle formelle de l'accord de financement, requise au-delà des seuils de tolérance ou pour un changement substantiel." },
      { term: 'Prorata temporis', definition: "Proportion de la durée du projet déjà écoulée, utilisée comme référence pour juger si un taux de consommation budgétaire est cohérent." },
      { term: 'Taux de change budgété vs taux de change réel', definition: "L'écart entre le taux utilisé au chiffrage initial et le taux effectif au paiement, qui peut gonfler ou masquer un écart budgétaire sans lien avec la performance opérationnelle." },
    ],
  },
  {
    type: 'process',
    title: 'Construire et suivre un budget de projet, de A à Z',
    steps: [
      { title: 'Identifier toutes les activités du cadre logique', body: "Croisez systématiquement la liste avec l'équipe programme — une activité oubliée devient une dépense sans ligne pour l'absorber." },
      { title: 'Chiffrer chaque ligne avec la méthode adaptée', body: 'Documentez la justification (devis, référentiel, calcul de quantité) au moment du chiffrage, pas deux ans plus tard en audit.' },
      { title: 'Consolider dans le canevas budget par bailleur', body: "Chaque bailleur a son propre plafond et ses propres règles — un dépassement sur l'un n'est jamais compensable par une sous-consommation sur l'autre." },
      { title: 'Valider en interne avant soumission', body: 'Faites relire le budget consolidé par la coordination et le programme avant envoi au bailleur.' },
      { title: 'Mettre à jour le BFU chaque mois, sans exception', body: 'Comparez le % consommé de chaque ligne au prorata temporis du projet.' },
      { title: 'Déclencher un virement de ligne dès que le seuil est dépassé', body: "Rédigez une justification factuelle — jamais une reformulation vague de \"besoins opérationnels\"." },
      { title: 'Distinguer virement de ligne et avenant formel', body: "Anticipez la démarche dès que vous voyez venir le dépassement dans le BFU, jamais dans l'urgence." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Mettre à jour le BFU seulement en fin de projet — un BFU consulté une seule fois documente un problème qu'il est déjà trop tard pour corriger.",
      "Budgéter des lignes \"au forfait\" sans justification alors qu'un coût unitaire était attendu — un raccourci qui coûte cher en instruction, en audit ou lors d'une demande de virement.",
      "Confondre écart de change et dépassement opérationnel réel — ne pas isoler cet effet, c'est soit paniquer inutilement, soit laisser un vrai dépassement se cacher derrière lui.",
      "Traiter un budget multi-bailleurs comme une enveloppe unique — sous-consommer la part d'un bailleur ne compense jamais un dépassement sur la part d'un autre.",
      "Engager la dépense avant validation du virement ou de l'avenant — si le bailleur refuse, la dépense déjà engagée peut être déclarée inéligible et à la charge de l'organisation.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Écart sur la ligne transport, Haïti"',
    scenario: "Projet de réponse post-catastrophe de 12 mois en Haïti, cofinancé par ECHO (70 %) et un fonds privé (30 %). La ligne \"Transport & logistique\" est budgétée en coût unitaire à 45 000 USD. Au BFU du mois 4 (33 % de la durée écoulée), elle affiche déjà 42 % de consommation (18 900 USD engagés + dépensés) — un écart de +9 points par rapport au prorata temporis.",
    steps: [
      "Une hausse réelle du coût du carburant a fait grimper le coût unitaire du transporteur local d'environ 12 % par rapport au budget initial.",
      "Le taux de change réel appliqué aux paiements du mois 4 s'est déprécié de plus de 6 % par rapport au taux budgété, gonflant mécaniquement le montant en USD sans tonne-kilomètre supplémentaire.",
      "En combinant ces deux effets, l'écart projeté en fin de projet atteindrait environ 18 % — au-delà du seuil habituel de tolérance sans avenant pour ce contrat ECHO.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — trancher l\'écart transport',
    instructions: "Complétez l'onglet BFU du template budget-suivi-bfu-multi-bailleurs.xlsx avec les chiffres du cas (budget, engagé, dépensé du mois 4) et vérifiez que la mise en forme conditionnelle signale bien le dépassement. Tranchez ensuite par écrit : la part liée à la hausse réelle du coût du transport (12 %) relève-t-elle d'un simple virement de ligne, tandis que la part liée à l'effet de change (6 %) doit être documentée séparément comme un effet de conversion et non un dépassement opérationnel ? Rédigez enfin la note avec le template note-demande-virement-ligne-budgetaire.docx, en identifiant une ligne source plausible sur la même composante bailleur.",
    deliverable: "Le BFU complété et la note de virement rédigée, avec une justification tenant en un paragraphe clair et vérifiable par un auditeur externe.",
  },
  {
    type: 'recap',
    items: [
      "Je sais choisir, pour chaque ligne budgétaire, entre activité par activité, coût unitaire et forfait, et justifier ce choix.",
      "Je sais construire un BFU qui compare au budget l'engagé ET le dépensé, pas seulement le décaissé.",
      "Je sais comparer un taux de consommation budgétaire au prorata temporis du projet pour juger s'il est cohérent.",
      "Je sais isoler un effet de change d'un dépassement opérationnel réel dans l'analyse d'un écart.",
      "Je sais distinguer une situation qui relève d'un simple virement de ligne de celle qui exige un avenant formel.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Trésorerie, Caisses & Avances Terrain.',
  },
]
