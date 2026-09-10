// Registre du contenu pédagogique réel (théorie/outils/exercices/templates)
// vivant dans public/formations-content/<id>/. Ce fichier ne duplique jamais
// le contenu marketing de formations.js — il ne fait que pointer vers les
// fichiers statiques à charger pour chaque module.
//
// Règle d'accès : le Module 01 de chaque formation est un échantillon gratuit
// complet ; les modules suivants restent en aperçu (titre/objectifs déjà
// présents dans formations.js) tant que la personne n'est pas inscrite.
export const formationsContent = {
  'logistique-humanitaire': {
    role: { fr: 'Logisticien Humanitaire Terrain' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-fondamentaux',
        free: true,
        templates: [
          { file: 'cartographie-acteurs-logistiques.xlsx', label: 'Cartographie des acteurs logistiques (.xlsx)' },
          { file: 'fiche-positionnement-mission-j1.docx', label: 'Fiche de positionnement de mission J+1 (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-evaluation-besoins',
        free: false,
        templates: [
          { file: 'grille-evaluation-besoins-mira.xlsx', label: 'Grille d\'évaluation des besoins MIRA (.xlsx)' },
          { file: 'plan-contingence-conops-template.docx', label: 'Plan de contingence CONOPS (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-gestion-flotte',
        free: false,
        templates: [
          { file: 'carnet-de-bord-vehicule.xlsx', label: 'Carnet de bord véhicule (.xlsx)' },
          { file: 'politique-utilisation-vehicules.docx', label: 'Politique d\'utilisation des véhicules (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-entrepot-stocks',
        free: false,
        templates: [
          { file: 'fiche-inventaire-entrepot-fifo-fefo.xlsx', label: 'Fiche d\'inventaire entrepôt FIFO/FEFO (.xlsx)' },
          { file: 'rapport-ecarts-stock.docx', label: 'Rapport d\'écarts de stock (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-chaine-du-froid',
        free: false,
        templates: [
          { file: 'registre-suivi-chaine-du-froid.xlsx', label: 'Registre de suivi de la chaîne du froid (.xlsx)' },
          { file: 'procedure-rupture-chaine-froid.docx', label: 'Procédure de rupture de chaîne du froid (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-douanes-autorites',
        free: false,
        templates: [
          { file: 'checklist-dedouanement.xlsx', label: 'Checklist de dédouanement (.xlsx)' },
          { file: 'registre-relations-autorites.docx', label: 'Registre des relations avec les autorités (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-securite-acces',
        free: false,
        templates: [
          { file: 'grille-evaluation-risques-securite.xlsx', label: 'Grille d\'évaluation des risques sécuritaires (.xlsx)' },
          { file: 'fiche-reporting-incident.docx', label: 'Fiche de reporting d\'incident (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-si-reporting',
        free: false,
        templates: [
          { file: 'tableau-de-bord-kpi-logistique.xlsx', label: 'Tableau de bord KPI logistique (.xlsx)' },
          { file: 'gabarit-rapport-logistique-mensuel.docx', label: 'Gabarit de rapport logistique mensuel (.docx)' },
        ],
      },
    ],
  },

  'supply-chain-humanitaire': {
    role: { fr: 'Supply Chain Manager Humanitaire' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-introduction-scm',
        free: true,
        templates: [
          { file: 'cartographie-supply-chain-acteurs.xlsx', label: 'Cartographie des acteurs supply chain (.xlsx)' },
          { file: 'note-positionnement-scm-standards-bailleurs.docx', label: 'Note de positionnement SCM & standards bailleurs (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-cycle-achats',
        free: false,
        templates: [
          { file: 'grille-rfq-comparaison-offres-cba.xlsx', label: 'Grille RFQ & analyse comparative des offres CBA (.xlsx)' },
          { file: 'pv-comite-achats-cpc.docx', label: 'Procès-verbal de comité d\'achats CPC (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-gestion-fournisseurs',
        free: false,
        templates: [
          { file: 'fiche-qualification-evaluation-fournisseur.xlsx', label: 'Fiche de qualification & évaluation fournisseur (.xlsx)' },
          { file: 'accord-cadre-framework-agreement-template.docx', label: 'Accord-cadre / Framework Agreement (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-gestion-stocks-entrepots',
        free: false,
        templates: [
          { file: 'bon-de-reception-controle-qualite.xlsx', label: 'Bon de réception & contrôle qualité (.xlsx)' },
          { file: 'rapport-reconciliation-inventaire-erp.docx', label: 'Rapport de réconciliation inventaire/ERP (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-distribution-last-mile',
        free: false,
        templates: [
          { file: 'plan-logistique-distribution-pdm.xlsx', label: 'Plan logistique de distribution & PDM (.xlsx)' },
          { file: 'registre-plaintes-feedback-communautaire.docx', label: 'Registre des plaintes & feedback communautaire (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-transport-international-douanes',
        free: false,
        templates: [
          { file: 'comparateur-fret-international-incoterms.xlsx', label: 'Comparateur fret international & Incoterms (.xlsx)' },
          { file: 'checklist-documents-expedition-internationale.docx', label: 'Checklist documents d\'expédition internationale (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-systemes-erp',
        free: false,
        templates: [
          { file: 'guide-extraction-nettoyage-power-query.xlsx', label: 'Guide d\'extraction & nettoyage Power Query (.xlsx)' },
          { file: 'gabarit-rapport-erp-mensuel.docx', label: 'Gabarit de rapport ERP mensuel (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-kpis-reporting',
        free: false,
        templates: [
          { file: 'tableau-de-bord-kpi-supply-chain.xlsx', label: 'Tableau de bord KPI supply chain (.xlsx)' },
          { file: 'gabarit-rapport-bailleur-vs-rapport-siege.docx', label: 'Gabarit rapport bailleur vs. rapport siège (.docx)' },
        ],
      },
    ],
  },

  'gestion-financiere-ong': {
    role: { fr: 'Finance Manager / Finance Officer ONG' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-fondamentaux-comptabilite',
        free: true,
        templates: [
          { file: 'plan-comptable-codification-projets.xlsx', label: 'Plan comptable & codification projets/bailleurs (.xlsx)' },
          { file: 'note-allocation-couts-communs.docx', label: 'Note d\'allocation des coûts communs (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-budget-multi-bailleurs',
        free: false,
        templates: [
          { file: 'budget-suivi-bfu-multi-bailleurs.xlsx', label: 'Budget & suivi BFU multi-bailleurs (.xlsx)' },
          { file: 'note-demande-virement-ligne-budgetaire.docx', label: 'Note de demande de virement de ligne budgétaire (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-tresorerie-caisses-avances',
        free: false,
        templates: [
          { file: 'livre-de-caisse-rapprochement-quotidien.xlsx', label: 'Livre de caisse & rapprochement quotidien (.xlsx)' },
          { file: 'fiche-avance-justification-remboursement.docx', label: 'Fiche d\'avance, justification & remboursement (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-multidevises-operations-bancaires',
        free: false,
        templates: [
          { file: 'suivi-taux-change-impact-budgetaire.xlsx', label: 'Suivi taux de change & impact budgétaire (.xlsx)' },
          { file: 'registre-signataires-procurations-bancaires.docx', label: 'Registre des signataires & procurations bancaires (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-rapports-financiers-bailleurs',
        free: false,
        templates: [
          { file: 'gabarit-rapport-financier-bailleur.xlsx', label: 'Gabarit de rapport financier bailleur (.xlsx)' },
          { file: 'checklist-reconciliation-finance-programme.docx', label: 'Checklist de réconciliation finance/programme (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-preparation-audits',
        free: false,
        templates: [
          { file: 'checklist-preparation-dossier-audit.xlsx', label: 'Checklist de préparation du dossier d\'audit (.xlsx)' },
          { file: 'plan-action-correctif-recommandations-audit.docx', label: 'Plan d\'action correctif suite à un audit (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-systemes-gestion-financiere',
        free: false,
        templates: [
          { file: 'tableau-de-bord-financier-tcd.xlsx', label: 'Tableau de bord financier (TCD) (.xlsx)' },
          { file: 'gabarit-journal-cloture-mensuelle.docx', label: 'Gabarit de journal de clôture mensuelle (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-fraude-corruption-conformite',
        free: false,
        templates: [
          { file: 'checklist-red-flags-fraude-financiere.xlsx', label: 'Checklist des red flags de fraude financière (.xlsx)' },
          { file: 'procedure-signalement-plan-action-fraude.docx', label: 'Procédure de signalement & plan d\'action fraude (.docx)' },
        ],
      },
    ],
  },

  'audit-transparence-conformite': {
    role: { fr: 'Auditeur Interne / Compliance Officer ONG' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-fondamentaux-audit-interne',
        free: true,
        templates: [
          { file: 'lettre-de-mission-audit-interne.docx', label: 'Lettre de mission d\'audit interne (.docx)' },
          { file: 'grille-evaluation-composantes-coso.xlsx', label: 'Grille d\'évaluation des composantes COSO (.xlsx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-controles-internes-separation-taches',
        free: false,
        templates: [
          { file: 'matrice-autorisation-separation-taches.xlsx', label: 'Matrice d\'autorisation & séparation des tâches (.xlsx)' },
          { file: 'lettre-autorisation-revocation-signataire.docx', label: 'Lettre d\'autorisation/révocation de signataire (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-audit-supply-chain-achats',
        free: false,
        templates: [
          { file: 'grille-audit-echantillon-achats.xlsx', label: 'Grille d\'audit par échantillon des achats (.xlsx)' },
          { file: 'fiche-detection-collusion-fournisseurs.docx', label: 'Fiche de détection de collusion fournisseurs (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-audit-financier-comptable',
        free: false,
        templates: [
          { file: 'grille-verification-pieces-comptables.xlsx', label: 'Grille de vérification des pièces comptables (.xlsx)' },
          { file: 'rapport-rapprochement-bancaire-audit.docx', label: 'Rapport de rapprochement bancaire d\'audit (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-audit-rh-programmes',
        free: false,
        templates: [
          { file: 'grille-audit-paie-presences.xlsx', label: 'Grille d\'audit paie & présences (.xlsx)' },
          { file: 'fiche-controle-programmatique-realise-planifie.docx', label: 'Fiche de contrôle programmatique réalisé/planifié (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-prevention-fraude-anticorruption',
        free: false,
        templates: [
          { file: 'grille-typologie-fraude-red-flags.xlsx', label: 'Grille des typologies de fraude & red flags (.xlsx)' },
          { file: 'evaluation-mecanisme-signalement-culture.docx', label: 'Évaluation du mécanisme de signalement & culture (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-conformite-bailleurs',
        free: false,
        templates: [
          { file: 'checklist-conformite-bailleurs-par-type.xlsx', label: 'Checklist de conformité par bailleur (.xlsx)' },
          { file: 'note-analyse-risque-non-conformite.docx', label: 'Note d\'analyse de risque de non-conformité (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-redaction-rapports-audit',
        free: false,
        templates: [
          { file: 'gabarit-rapport-audit-interne-ccce.docx', label: 'Gabarit de rapport d\'audit interne CCCE (.docx)' },
          { file: 'grille-priorisation-recommandations.xlsx', label: 'Grille de priorisation des recommandations (.xlsx)' },
        ],
      },
      {
        number: '09',
        slug: 'module-09-preparation-audits-externes',
        free: false,
        templates: [
          { file: 'checklist-preparation-audit-externe-multi-domaines.xlsx', label: 'Checklist de préparation à l\'audit externe (.xlsx)' },
          { file: 'note-reponse-point-divergence-audit.docx', label: 'Note de réponse à un point de divergence d\'audit (.docx)' },
        ],
      },
    ],
  },

  'gestion-rh-ong': {
    role: { fr: 'HR Manager / HR Officer ONG' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-structure-organisationnelle-role-rh',
        free: true,
        templates: [
          { file: 'organigramme-cartographie-roles-rh.xlsx', label: 'Organigramme & cartographie des rôles RH (.xlsx)' },
          { file: 'fiche-interface-rh-finance-paie.docx', label: 'Fiche d\'interface RH-Finance pour la paie (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-recrutement-national-international',
        free: false,
        templates: [
          { file: 'grille-entretien-structure-evaluation.xlsx', label: 'Grille d\'entretien structuré & évaluation (.xlsx)' },
          { file: 'fiche-verification-references-antecedents.docx', label: 'Fiche de vérification des références & antécédents (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-contrats-administration-personnel',
        free: false,
        templates: [
          { file: 'checklist-dossier-individuel-personnel.xlsx', label: 'Checklist du dossier individuel du personnel (.xlsx)' },
          { file: 'gabarit-procedure-disciplinaire-avertissement.docx', label: 'Gabarit de procédure disciplinaire & avertissement (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-remuneration-avantages-sociaux',
        free: false,
        templates: [
          { file: 'grille-salariale-benchmarking-coefficients.xlsx', label: 'Grille salariale, benchmarking & coefficients (.xlsx)' },
          { file: 'note-calcul-primes-terrain-hardship.docx', label: 'Note de calcul des primes terrain & hardship (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-evaluation-performances-developpement',
        free: false,
        templates: [
          { file: 'grille-evaluation-performance-annuelle.xlsx', label: 'Grille d\'évaluation de performance annuelle (.xlsx)' },
          { file: 'plan-developpement-individuel-succession.docx', label: 'Plan de développement individuel & succession (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-droit-travail-humanitaire',
        free: false,
        templates: [
          { file: 'checklist-conformite-code-travail-rdc.xlsx', label: 'Checklist de conformité au Code du Travail RDC (.xlsx)' },
          { file: 'note-suivi-resolution-conflit-travail.docx', label: 'Note de suivi de résolution de conflit du travail (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-protection-bien-etre-burnout',
        free: false,
        templates: [
          { file: 'grille-identification-precoce-burnout.xlsx', label: 'Grille d\'identification précoce du burnout (.xlsx)' },
          { file: 'protocole-signalement-psea-protection-personnel.docx', label: 'Protocole de signalement PSEA & protection du personnel (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-gestion-conflits-mediation',
        free: false,
        templates: [
          { file: 'grille-identification-precoce-conflits-equipe.xlsx', label: 'Grille d\'identification précoce des conflits d\'équipe (.xlsx)' },
          { file: 'protocole-mediation-conflit-equipe-multiculturelle.docx', label: 'Protocole de médiation en équipe multiculturelle (.docx)' },
        ],
      },
    ],
  },

  'coaching-carriere': {
    role: { fr: 'Candidat en recherche active / Career Coach' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-audit-carriere-positionnement',
        free: true,
        templates: [
          { file: 'bilan-competences-positionnement-carriere.xlsx', label: 'Bilan de compétences & positionnement carrière (.xlsx)' },
          { file: 'feuille-de-route-carriere.docx', label: 'Feuille de route de carrière (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-cv-normes-ats',
        free: false,
        templates: [
          { file: 'gabarit-cv-ats-international.docx', label: 'Gabarit de CV ATS international (.docx)' },
          { file: 'grille-transformation-par-realisations.xlsx', label: 'Grille de transformation PAR des réalisations (.xlsx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-lettre-motivation',
        free: false,
        templates: [
          { file: 'gabarit-lettre-motivation-3-paragraphes.docx', label: 'Gabarit de lettre de motivation en 3 paragraphes (.docx)' },
          { file: 'grille-personnalisation-lettre-par-organisation.xlsx', label: 'Grille de personnalisation par organisation (.xlsx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-preparation-tests-techniques',
        free: false,
        templates: [
          { file: 'grille-entrainement-tests-techniques-chronometre.xlsx', label: 'Grille d\'entraînement aux tests techniques chronométrés (.xlsx)' },
          { file: 'gabarit-structuration-reponse-etude-de-cas.docx', label: 'Gabarit de structuration de réponse à une étude de cas (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-simulation-entretiens-star',
        free: false,
        templates: [
          { file: 'banque-histoires-star-preparation.xlsx', label: 'Banque d\'histoires STAR de préparation (.xlsx)' },
          { file: 'grille-auto-evaluation-simulation-entretien.docx', label: 'Grille d\'auto-évaluation de simulation d\'entretien (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-negociation-contrat-expatriation',
        free: false,
        templates: [
          { file: 'grille-benchmarking-salarial-negociation.xlsx', label: 'Grille de benchmarking salarial & négociation (.xlsx)' },
          { file: 'checklist-lecture-contrat-expatriation.docx', label: 'Checklist de lecture d\'un contrat d\'expatriation (.docx)' },
        ],
      },
    ],
  },

  'intelligence-artificielle': {
    role: { fr: 'Professionnel intégrant l\'IA dans son travail quotidien' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-introduction-ia-generatives',
        free: true,
        templates: [
          { file: 'grille-comparaison-5-plateformes-ia.xlsx', label: 'Grille de comparaison des 5 plateformes IA (.xlsx)' },
          { file: 'charte-utilisation-responsable-ia-professionnelle.docx', label: 'Charte d\'utilisation responsable de l\'IA (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-chatgpt-productivite-automatisation',
        free: false,
        templates: [
          { file: 'bibliotheque-prompts-rccf-chatgpt.xlsx', label: 'Bibliothèque de prompts RCCF pour ChatGPT (.xlsx)' },
          { file: 'guide-creation-gpt-personnalise.docx', label: 'Guide de création d\'un GPT personnalisé (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-claude-raisonnement-analyse-redaction',
        free: false,
        templates: [
          { file: 'gabarit-prompts-analyse-documents-longs.xlsx', label: 'Gabarit de prompts pour l\'analyse de documents longs (.xlsx)' },
          { file: 'guide-redaction-rapports-procedures-claude.docx', label: 'Guide de rédaction de rapports & procédures avec Claude (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-microsoft-copilot-office365',
        free: false,
        templates: [
          { file: 'grille-prompts-copilot-office-teams.xlsx', label: 'Grille de prompts Copilot pour Office & Teams (.xlsx)' },
          { file: 'guide-generation-rapports-presentations-copilot.docx', label: 'Guide de génération de rapports & présentations avec Copilot (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-perplexity-recherche-veille',
        free: false,
        templates: [
          { file: 'grille-veille-sectorielle-perplexity.xlsx', label: 'Grille de veille sectorielle avec Perplexity (.xlsx)' },
          { file: 'gabarit-rapport-recherche-sourcee.docx', label: 'Gabarit de rapport de recherche sourcée (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-google-gemini-multimodalite',
        free: false,
        templates: [
          { file: 'grille-prompts-multimodaux-gemini.xlsx', label: 'Grille de prompts multimodaux pour Gemini (.xlsx)' },
          { file: 'guide-automatisation-google-workspace.docx', label: 'Guide d\'automatisation Google Workspace (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-prompt-engineering-avance',
        free: false,
        templates: [
          { file: 'bibliotheque-prompts-organisationnelle-icio.xlsx', label: 'Bibliothèque de prompts organisationnelle ICIO (.xlsx)' },
          { file: 'guide-construction-prompts-chain-of-thought.docx', label: 'Guide de construction de prompts Chain-of-Thought (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-automatisation-agents-ia',
        free: false,
        templates: [
          { file: 'canevas-conception-workflow-agent-ia.xlsx', label: 'Canevas de conception d\'un workflow agent IA (.xlsx)' },
          { file: 'procedure-documentation-automatisation-ia.docx', label: 'Procédure de documentation d\'une automatisation IA (.docx)' },
        ],
      },
      {
        number: '09',
        slug: 'module-09-ia-data-analyse',
        free: false,
        templates: [
          { file: 'grille-diagnostic-nettoyage-donnees.xlsx', label: 'Grille de diagnostic & nettoyage de données (.xlsx)' },
          { file: 'gabarit-rapport-analyse-donnees.docx', label: 'Gabarit de rapport d\'analyse de données (.docx)' },
        ],
      },
      {
        number: '10',
        slug: 'module-10-developpement-outils-techniques',
        free: false,
        templates: [
          { file: 'bibliotheque-prompts-delegation-technique.xlsx', label: 'Bibliothèque de prompts de délégation technique (.xlsx)' },
          { file: 'guide-securite-verification-scripts-ia.docx', label: 'Guide de sécurité & vérification des scripts IA (.docx)' },
        ],
      },
      {
        number: '11',
        slug: 'module-11-marketing-communication',
        free: false,
        templates: [
          { file: 'comparatif-outils-generation-visuels-ia.xlsx', label: 'Comparatif des outils IA de génération de visuels (.xlsx)' },
          { file: 'gabarit-transformation-document-communication.docx', label: 'Gabarit de transformation document → communication (.docx)' },
        ],
      },
      {
        number: '12',
        slug: 'module-12-business-model-plan',
        free: false,
        templates: [
          { file: 'canevas-business-model-canvas-ia.xlsx', label: 'Canevas Business Model Canvas assisté par IA (.xlsx)' },
          { file: 'gabarit-plan-financier-pitch-simplifie.docx', label: 'Gabarit de plan financier & pitch simplifié (.docx)' },
        ],
      },
      {
        number: '13',
        slug: 'module-13-creation-sites-web-solutions-numeriques',
        free: false,
        templates: [
          { file: 'checklist-cahier-des-charges-site-ia.xlsx', label: 'Checklist de cahier des charges site/app IA (.xlsx)' },
          { file: 'bibliotheque-prompts-creation-web-iteration.docx', label: 'Bibliothèque de prompts création web & itération (.docx)' },
        ],
      },
      {
        number: '14',
        slug: 'module-14-atelier-pratique-mini-projet',
        free: false,
        templates: [
          { file: 'gabarit-brief-mini-projet-ia-par-secteur.docx', label: 'Gabarit de brief de mini-projet IA par secteur (.docx)' },
          { file: 'grille-evaluation-livrable-mini-projet.xlsx', label: 'Grille d\'évaluation du livrable de mini-projet (.xlsx)' },
        ],
      },
    ],
  },
}

export function formationContentById(id) {
  return formationsContent[id]
}

export function moduleContentByNumber(id, number) {
  const content = formationsContent[id]
  if (!content) return null
  return content.modules.find((m) => m.number === number) || null
}
