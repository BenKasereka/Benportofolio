// Catalogue complet des 7 formations BK-BOOST Ltd.
// Contenu ancré sur l'expertise réelle de Benjamin KASEREKA VINYATSI.

export const formations = [
  {
    id: 'intelligence-artificielle',
    number: '01',
    icon: 'Bot',
    accent: 'gold',
    badge: 'Tech & Innovation',
    badgeColor: 'gold',
    duration: '4 semaines · 20 heures',
    level: 'Tous niveaux',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Maîtrise de l'Intelligence Artificielle",
    subtitle: 'Les 5 IA de rupture pour transformer votre productivité professionnelle en 2026',
    tagline: "Ne subissez plus l'IA. Commandez-la.",
    intro:
      "En 2026, l'IA ne remplace pas les professionnels — elle multiplie par 5 la productivité de ceux qui savent l'utiliser. Cette formation intensive vous propulse de simple utilisateur à expert opérationnel des 5 plateformes IA les plus puissantes du marché : ChatGPT, Claude, Microsoft Copilot, Perplexity et Google Gemini. En 4 semaines chrono, vous automatisez vos tâches répétitives, maîtrisez le prompting avancé, et transformez chaque outil en assistant exécutif personnel — que vous soyez gestionnaire, logisticien, financier, RH ou entrepreneur.",
    audience:
      "Professionnels des ONG et entreprises souhaitant gagner en efficacité, cadres et managers, entrepreneurs, étudiants en fin de cycle, toute personne désireuse de prendre une longueur d'avance dans son domaine grâce à l'IA.",
    objectives: [
      "Maîtriser les 5 IA incontournables de 2026 en contexte professionnel",
      "Concevoir des prompts avancés pour des résultats professionnels de haut niveau",
      "Automatiser des workflows complets avec des agents IA",
      "Intégrer l'IA dans les outils Office 365, Google Workspace et ERP",
      "Développer une stratégie personnelle d'IA au service de ses objectifs métier",
    ],
    modules: [
      {
        number: '01',
        title: "Introduction aux IA génératives — Comprendre pour mieux utiliser",
        description:
          "Panorama complet de l'écosystème IA en 2026 : modèles de langage, IA multimodales, agents autonomes. Démystification des concepts clés pour une prise en main immédiate.",
        points: [
          "Histoire et fonctionnement des LLM (Large Language Models)",
          "Différences et complémentarités entre les principales plateformes",
          "Sécurité, confidentialité des données et limites éthiques de l'IA",
        ],
      },
      {
        number: '02',
        title: "ChatGPT (OpenAI) — Productivité maximale & automatisation",
        description:
          "Maîtrise approfondie de l'outil le plus populaire au monde : rédaction, analyse, code, résumé de documents volumineux, et création de GPT personnalisés pour votre organisation.",
        points: [
          "Prompting structuré : rôle, contexte, format, contraintes (RCCF)",
          "Création de GPT personnalisés pour son organisation",
          "Analyse de documents, données et rapports complexes",
        ],
      },
      {
        number: '03',
        title: "Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite",
        description:
          "L'IA la plus rigoureuse pour l'analyse de documents longs, la rédaction académique et professionnelle, et le raisonnement structuré à haut niveau — idéale pour les rapports bailleurs, audits et procédures.",
        points: [
          "Analyse et synthèse de documents de 100+ pages",
          "Rédaction de rapports, procédures et politiques professionnelles",
          "Raisonnement complexe, revue critique et contre-argumentation",
        ],
      },
      {
        number: '04',
        title: "Microsoft Copilot — L'IA native dans Office 365 & Teams",
        description:
          "Intégration de Copilot au cœur de Word, Excel, PowerPoint, Outlook et Teams pour multiplier votre vitesse d'exécution sans quitter votre environnement de travail habituel.",
        points: [
          "Génération automatique de présentations PowerPoint et rapports Word",
          "Analyse de données Excel avec Copilot — tableaux croisés, formules complexes",
          "Rédaction d'emails, résumés de réunions et planification Teams",
        ],
      },
      {
        number: '05',
        title: "Perplexity AI — Recherche temps réel & veille stratégique",
        description:
          "L'IA de recherche la plus puissante du marché : informations sourcées, actualisées en temps réel, avec citations vérifiables — votre assistant de veille professionnelle et académique.",
        points: [
          "Recherche approfondie avec sources vérifiées et actualisées",
          "Veille sectorielle, concurrentielle et réglementaire automatisée",
          "Comparaisons, analyses de marché et fact-checking IA",
        ],
      },
      {
        number: '06',
        title: "Google Gemini — Multimodalité & Google Workspace",
        description:
          "Exploiter la puissance multimodale de Gemini (texte, image, audio, vidéo) et son intégration native dans l'écosystème Google : Gmail, Docs, Sheets, Slides et Google Meet.",
        points: [
          "Analyse d'images, graphiques et documents visuels avec Gemini",
          "Automatisation de Google Sheets, Docs et Gmail avec IA",
          "Création de contenus multimodaux pour communications professionnelles",
        ],
      },
      {
        number: '07',
        title: "Prompting Engineering avancé — L'art de commander l'IA",
        description:
          "Techniques avancées de conception de prompts pour des résultats exceptionnels : chaîne de pensée (CoT), few-shot learning, prompt chaining et création de systèmes de prompts réutilisables.",
        points: [
          "Chain-of-thought, tree-of-thought et méthode ICIO",
          "Construction de bibliothèques de prompts pour son organisation",
          "Évaluation et optimisation itérative des résultats IA",
        ],
      },
      {
        number: '08',
        title: "Automatisation & Agents IA — Travailler pendant que l'IA travaille",
        description:
          "Mise en place d'agents IA autonomes et de workflows automatisés : déléguer des tâches entières à l'IA et construire des systèmes de productivité passifs pour son organisation.",
        points: [
          "Construction d'agents IA multi-étapes avec outils et mémoire",
          "Automatisation de rapports, emails et tâches récurrentes",
          "Intégration Make/Zapier/N8N avec les APIs IA",
        ],
      },
      {
        number: '09',
        title: "Atelier Pratique — Mini-projet certifiant par domaine",
        description:
          "Mise en application concrète dans votre secteur : un mini-projet IA personnalisé (logistique, finance, RH, coaching ou audit) aboutissant à un livrable professionnel réel.",
        points: [
          "Projet personnalisé selon votre métier (ONG, entreprise, coaching)",
          "Revue individuelle et retours par le formateur expert",
          "Attestation de compétences IA délivrée à l'issue du projet",
        ],
      },
    ],
    outcomes: [
      "Attestation de compétences IA délivrée par BK-BOOST Ltd.",
      "Bibliothèque de prompts professionnels personnalisée",
      "Autonomie totale sur les 5 plateformes IA clés de 2026",
      "Workflows d'automatisation opérationnels dès la formation terminée",
      "Avantage concurrentiel immédiat sur le marché de l'emploi",
    ],
  },

  {
    id: 'coaching-carriere',
    number: '02',
    icon: 'Target',
    accent: 'gold',
    badge: 'BK-BOOST Ltd.',
    badgeColor: 'gold',
    duration: '4 à 24 semaines selon le pack',
    level: 'Tous niveaux',
    format: 'En ligne & Présentiel',
    price: 'À partir de 30 USD',
    title: "Formation & Accompagnement de Carrière",
    subtitle: 'De votre CV actuel au contrat que vous méritez — national ou international',
    tagline: "De 'Votre candidature a bien été reçue' à 'Quand pouvez-vous commencer ?'",
    intro:
      "Chaque année, des milliers de candidats excellents voient leur dossier ignoré non pas par manque de compétences, mais par manque de stratégie. BK-BOOST Ltd. transforme cette réalité. Construit sur 5+ ans d'expérience MSF, ACF et ACTED dans les recrutements humanitaires internationaux, ce programme vous donne les mêmes outils, techniques et stratégies que ceux utilisés par les candidats retenus dans les organisations les plus sélectives au monde — ONU, MSF, Mercy Corps, USAID et au-delà.",
    audience:
      "Candidats aux postes nationaux et internationaux dans les ONG, agences onusiennes, entreprises privées et institutions publiques. Professionnels en transition de carrière, jeunes diplômés ambitieux et candidats à l'expatriation.",
    objectives: [
      "Produire un CV d'exception au format ATS international qui passe tous les filtres",
      "Rédiger des lettres de motivation qui forcent le recruteur à vous convoquer",
      "Décrocher et réussir vos entretiens grâce à la méthode STAR maîtrisée",
      "Négocier votre contrat, votre salaire et vos conditions d'expatriation avec assurance",
      "Construire une stratégie de candidature ciblée, efficace et mesurable",
    ],
    modules: [
      {
        number: '01',
        title: "Audit de Carrière & Positionnement Stratégique",
        description:
          "Diagnostic complet de votre profil : forces, axes de développement, valeur marché et positionnement idéal. Construction d'une feuille de route de carrière claire et réaliste.",
        points: [
          "Analyse de votre parcours, compétences et aspirations",
          "Identification du secteur cible : ONG, privé, onusien, institutionnel",
          "Définition du profil de poste idéal et de la stratégie d'approche",
        ],
      },
      {
        number: '02',
        title: "CV aux Normes ATS Internationales",
        description:
          "Rédaction et optimisation complète de votre CV selon les standards ATS des organisations internationales : structure, mots-clés sectoriels, mise en page et storytelling de vos réalisations.",
        points: [
          "Structure optimisée ATS avec les bons mots-clés recruteurs",
          "Quantification de vos réalisations (méthode PAR : Problème → Action → Résultat)",
          "Format professionnel international conforme aux standards ONU et ONG",
        ],
      },
      {
        number: '03',
        title: "Lettre de Motivation Percutante",
        description:
          "La lettre de motivation qui ne se contente pas d'exister — elle convainc. Techniques de rédaction axées sur la valeur ajoutée, la connexion émotionnelle et la différenciation du candidat.",
        points: [
          "Structure en 3 paragraphes à fort impact (Hook, Valeur, Call-to-Action)",
          "Personnalisation par organisation et par poste ciblé",
          "Éviter les formules génériques qui tuent les candidatures dès la première ligne",
        ],
      },
      {
        number: '04',
        title: "Préparation aux Tests Techniques & Études de Cas",
        description:
          "Entraînement intensif aux tests écrits, études de cas et épreuves techniques utilisés par les ONG et agences internationales dans leurs processus de sélection.",
        points: [
          "Tests techniques supply chain, finance, RH et gestion de projet",
          "Études de cas humanitaires : analyse, proposition et défense",
          "Gestion du temps, présentation des résultats et argumentation sous pression",
        ],
      },
      {
        number: '05',
        title: "Simulation d'Entretiens — Méthode STAR Maîtrisée",
        description:
          "Entraînement intensif aux entretiens comportementaux, compétence-based interviews et panels d'entretien — avec retours détaillés et axes d'amélioration précis.",
        points: [
          "Maîtrise de la méthode STAR (Situation, Tâche, Action, Résultat)",
          "Simulations en conditions réelles avec vidéo et analyse comportementale",
          "Questions pièges, questions difficiles et stratégies de réponse gagnantes",
        ],
      },
      {
        number: '06',
        title: "Négociation de Contrat & Conditions d'Expatriation",
        description:
          "Ne jamais accepter la première offre sans connaître sa valeur marché. Techniques de négociation salariale, avantages sociaux, conditions d'expatriation et gestion de contre-offres.",
        points: [
          "Benchmarking salarial : grilles ONU, MSF, ONG et secteur privé",
          "Techniques de négociation respectueuses et efficaces",
          "Lire, comprendre et sécuriser un contrat international d'expatriation",
        ],
      },
    ],
    outcomes: [
      "CV d'exception finalisé, optimisé ATS et prêt à être soumis",
      "Lettre de motivation personnalisée par organisation cible",
      "Capacité de répondre à toute question d'entretien avec méthode et confiance",
      "Stratégie de candidature active avec tableau de bord de suivi",
      "Accompagnement jusqu'à la signature du contrat (Pack Ultimate)",
    ],
  },

  {
    id: 'logistique-humanitaire',
    number: '03',
    icon: 'Package',
    accent: 'emerald',
    badge: 'Humanitaire',
    badgeColor: 'emerald',
    duration: '6 semaines · 30 heures',
    level: 'Débutant à Intermédiaire',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Formation en Logistique Humanitaire",
    subtitle: "Opérer en zone de crise : maîtriser chaque maillon de la chaîne logistique terrain",
    tagline: "Livrer l'aide là où personne d'autre ne va. C'est ça, la logistique humanitaire.",
    intro:
      "La logistique humanitaire ne ressemble à aucune autre. Elle s'opère dans des contextes de conflit armé, d'épidémie et de catastrophe naturelle, avec des délais impossibles, des ressources limitées et des vies en jeu. Cette formation — construite sur 5 ans de terrain MSF en RDC, Tchad, Soudan du Sud, Haïti et Nigeria — vous donne les outils, les réflexes et les procédures des meilleurs logisticiens humanitaires au monde. Du transport de médicaments en zone rouge à la gestion d'un entrepôt régional, vous serez opérationnel.",
    audience:
      "Logisticiens juniors et intermédiaires des ONG, candidats aux postes de Log Admin, Log Manager ou Supply Chain dans le secteur humanitaire, étudiants en gestion de crise, tout professionnel souhaitant intégrer le secteur humanitaire.",
    objectives: [
      "Maîtriser les procédures logistiques standard des grandes ONG (MSF, ACF, IRC, CARE)",
      "Gérer une flotte de véhicules, un entrepôt et une chaîne du froid en contexte terrain",
      "Coordonner avec les acteurs clés : autorités, douanes, transporteurs et clusters logistiques",
      "Gérer les risques sécuritaires et les contraintes d'accès en zone de crise",
      "Produire des rapports logistiques professionnels conformes aux standards bailleurs",
    ],
    modules: [
      {
        number: '01',
        title: "Fondamentaux de la Logistique Humanitaire",
        description:
          "Architecture et principes de la logistique humanitaire : clusters, coordination inter-agences, pipeline d'approvisionnement et positionnement du logisticien dans la réponse humanitaire.",
        points: [
          "Architecture de la réponse humanitaire : OCHA, clusters logistiques, coordination",
          "Rôle et responsabilités du logisticien en contexte d'urgence",
          "Principes humanitaires et leurs implications logistiques (neutralité, impartialité)",
        ],
      },
      {
        number: '02',
        title: "Évaluation des Besoins & Planification Logistique d'Urgence",
        description:
          "Méthodes d'évaluation rapide des besoins logistiques (MIRA, HEAT) et construction de plans de contingence logistique pour des réponses d'urgence déclenchées en 72 heures.",
        points: [
          "Évaluation rapide des capacités logistiques en zone d'urgence",
          "Élaboration d'un plan de contingence logistique (CONOPS)",
          "Prépositionnement de stocks d'urgence et gestion des stocks tampons",
        ],
      },
      {
        number: '03',
        title: "Gestion de Flotte & Transport en Zones Complexes",
        description:
          "Gestion complète d'une flotte de véhicules en contexte humanitaire : maintenance, sécurité, fuel management, planification des missions et reporting kilométrique.",
        points: [
          "Politiques d'utilisation des véhicules et carnet de bord",
          "Planification des missions transport et gestion des conducteurs",
          "Sécurité routière, incidents de sécurité et procédures en cas d'accident",
        ],
      },
      {
        number: '04',
        title: "Entrepôt & Gestion des Stocks",
        description:
          "Standards Sphere et procédures de gestion d'entrepôt humanitaire : réception, stockage, inventaires, gestion des FIFO/FEFO et prévention des pertes et dommages.",
        points: [
          "Standards d'entrepôt humanitaire : disposition, sécurité, accès et contrôle",
          "Méthodes FIFO et FEFO pour les produits médicaux et alimentaires",
          "Inventaires physiques, rapports de stock et gestion des écarts",
        ],
      },
      {
        number: '05',
        title: "Chaîne du Froid & Produits Médicaux",
        description:
          "Gestion spécialisée de la chaîne du froid pour vaccins, médicaments et produits biologiques : normes GDP/GSP, équipements de froid, monitoring et procédures de rupture de chaîne.",
        points: [
          "Normes GDP (Good Distribution Practices) et GSP (Good Storage Practices)",
          "Équipements de froid : réfrigérateurs, glacières, data loggers",
          "Procédures en cas de rupture de chaîne du froid et évaluation de l'impact",
        ],
      },
      {
        number: '06',
        title: "Coordination, Autorités & Gestion des Douanes",
        description:
          "Navigation dans les contraintes réglementaires locales : dédouanement, exonérations fiscales des ONG, autorisations d'importation et coordination avec les autorités civiles et militaires.",
        points: [
          "Accords douaniers des ONG : exonérations, franchise et procédures accélérées",
          "Relations avec les autorités locales, checkpoints et accès humanitaire",
          "Gestion des litiges douaniers et réclamations de marchandises",
        ],
      },
      {
        number: '07',
        title: "Sécurité, Accès & Gestion des Risques",
        description:
          "Protocoles de sécurité logistique en contexte de conflit ou d'instabilité : évaluation des risques, planification d'itinéraires sécurisés, briefings sécurité et gestion des incidents.",
        points: [
          "Évaluation des risques sécuritaires sur les routes logistiques",
          "Procédures de communication et de reporting d'incidents",
          "Négociation d'accès et relations avec les acteurs armés (principes CICR)",
        ],
      },
      {
        number: '08',
        title: "Systèmes d'Information & Reporting Logistique",
        description:
          "Maîtrise des outils de gestion logistique humanitaire : MIMOSA, Kobo Toolbox, ODK, LINK et Excel avancé pour le suivi des KPIs et la production de rapports de qualité.",
        points: [
          "Utilisation de MIMOSA et LINK pour la gestion des actifs et des stocks",
          "Tableaux de bord KPI logistiques (taux de rupture, coût/bénéficiaire, délais)",
          "Rédaction de rapports logistiques mensuels et d'urgence pour le siège",
        ],
      },
    ],
    outcomes: [
      "Maîtrise opérationnelle des procédures logistiques des grandes ONG internationales",
      "Aptitude à gérer une flotte, un entrepôt et une chaîne du froid en zone de crise",
      "Attestation de formation en Logistique Humanitaire délivrée par BK-BOOST Ltd.",
      "Vocabulaire, outils et réflexes du logisticien humanitaire professionnel",
      "Profil compétitif pour les postes de Log Admin et Log Manager dans les ONG",
    ],
  },

  {
    id: 'supply-chain-humanitaire',
    number: '04',
    icon: 'Truck',
    accent: 'emerald',
    badge: 'Humanitaire',
    badgeColor: 'emerald',
    duration: '8 semaines · 40 heures',
    level: 'Intermédiaire à Avancé',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Formation en Supply Chain Management Humanitaire",
    subtitle: "Maîtriser la chaîne complète : achats, stockage, distribution et transport en zones volatiles",
    tagline: "Maîtrisez la chaîne qui sauve des vies.",
    intro:
      "La Supply Chain humanitaire est la colonne vertébrale de toute réponse efficace à une crise. Mal gérée, elle tue les projets les plus ambitieux. Bien maîtrisée, elle multiplie l'impact de chaque dollar investi par les bailleurs. Ce programme intensif — ancré sur les standards MSF-OCB, ACF et ACTED et sur 5 ans de terrain dans 6 pays — couvre la chaîne complète : du cycle d'achat à la distribution finale, en passant par la gestion des stocks, le transport international et les systèmes ERP. Vous serez le Supply Chain Manager que les organisations rechercheront.",
    audience:
      "Supply Chain Officers, Procurement Officers et Log Managers en poste, candidats à des postes SCM dans les ONG internationales, professionnels de la logistique souhaitant se spécialiser dans le secteur humanitaire.",
    objectives: [
      "Maîtriser le cycle complet des achats humanitaires (RFQ, RFP, ITB, PO, conformité CPC)",
      "Gérer les flux de marchandises de l'achat à la distribution finale",
      "Utiliser les ERP humanitaires (UNIFIELD, SAP, LINK) pour la gestion opérationnelle",
      "Produire des KPIs et rapports supply chain de qualité internationale",
      "Intégrer les contraintes de conformité bailleurs dans chaque étape de la chaîne",
    ],
    modules: [
      {
        number: '01',
        title: "Introduction à la SCM Humanitaire — Standards et acteurs",
        description:
          "Architecture de la supply chain humanitaire internationale : acteurs, flux, standards et positionnement par rapport à la chaîne de valeur globale de la réponse humanitaire.",
        points: [
          "Cartographie des acteurs : ONG, agences onusiennes, gouvernements et secteur privé",
          "Standards internationaux : Sphère, CALP, IASC et Nexus humanitaire-développement",
          "Positionnement du Supply Chain Manager dans la structure organisationnelle",
        ],
      },
      {
        number: '02',
        title: "Cycle Complet des Achats — De la RFQ à la PO",
        description:
          "Maîtrise du cycle d'achat selon les standards des grandes ONG : procédures concurrentielles, seuils d'autorisation, comités d'achat et conformité anti-fraude.",
        points: [
          "RFQ (Request for Quotation), RFP (Request for Proposal) et ITB (Invitation to Bid)",
          "Comités de validation des achats (CPC) et matrices d'autorisation",
          "Gestion des Purchase Orders, bons de commande et archivage conforme",
        ],
      },
      {
        number: '03',
        title: "Gestion des Fournisseurs & Conformité",
        description:
          "Constitution et gestion d'un portefeuille fournisseurs de qualité : qualification, évaluation, gestion des contrats-cadres et vérification d'inéligibilité.",
        points: [
          "Processus de qualification et évaluation périodique des fournisseurs",
          "Vérification d'inéligibilité (liste OFAC, UE, ONU) et politique anti-corruption",
          "Contrats-cadres (Framework Agreements) pour les achats récurrents",
        ],
      },
      {
        number: '04',
        title: "Gestion des Stocks & Entrepôts",
        description:
          "Pilotage complet de l'entrepôt humanitaire : réception, contrôle qualité, stockage, gestion des périmés, inventaires et production de rapports de stock.",
        points: [
          "Procédures de réception et contrôle qualité des marchandises",
          "Gestion des stocks par lot et des dates de péremption (FEFO)",
          "Inventaires physiques périodiques et réconciliation avec le système ERP",
        ],
      },
      {
        number: '05',
        title: "Distribution & Last-Mile Delivery",
        description:
          "Planification et exécution de distributions massives en zone de crise : ciblage des bénéficiaires, gestion des files, contrôle des distributions et gestion des réclamations.",
        points: [
          "Planification logistique de la distribution (entrepôt → point de distribution)",
          "Listes de bénéficiaires, jetons de distribution et contrôle post-distribution",
          "Gestion des incidents de distribution et mécanismes de feedback communautaire",
        ],
      },
      {
        number: '06',
        title: "Transport International & Dédouanement",
        description:
          "Gestion des imports/exports humanitaires : Incoterms, fret aérien/maritime/terrestre, dédouanement, transit et conformité réglementaire internationale.",
        points: [
          "Incoterms 2020 et leur application dans les achats humanitaires internationaux",
          "Fret aérien (cargo), maritime et terrestre : choix, coût et délai",
          "Procédures douanières : Bill of Lading, packing list, certificat d'origine",
        ],
      },
      {
        number: '07',
        title: "Systèmes ERP Humanitaires — UNIFIELD, SAP & LINK",
        description:
          "Prise en main opérationnelle des ERP utilisés par les grandes ONG pour la gestion des achats, stocks, actifs et reporting financier de la supply chain.",
        points: [
          "UNIFIELD (MSF) : saisie des POs, réceptions, transferts et inventaires",
          "SAP et LINK : procédures d'achat, gestion des actifs et workflow d'approbation",
          "Extraction de données et génération de rapports SCM depuis l'ERP",
        ],
      },
      {
        number: '08',
        title: "KPIs, Reporting & Tableau de Bord Supply Chain",
        description:
          "Construction et pilotage d'un tableau de bord supply chain : indicateurs de performance, analyse des données, reporting aux bailleurs et présentation aux coordinateurs.",
        points: [
          "KPIs clés : taux de rupture, délai d'approvisionnement, taux de conformité achats",
          "Construction de tableaux de bord KPI avec Excel ou Power BI",
          "Rédaction de rapports supply chain mensuels pour le siège et les bailleurs",
        ],
      },
    ],
    outcomes: [
      "Maîtrise du cycle complet d'achat humanitaire : de la RFQ à la PO jusqu'à la distribution",
      "Compétence opérationnelle sur UNIFIELD, SAP et LINK",
      "Attestation de formation en Supply Chain Management Humanitaire",
      "Profil prêt pour des postes de Supply Chain Manager dans les grandes ONG",
      "Méthodes et outils directement applicables dès la prise de poste",
    ],
  },

  {
    id: 'gestion-financiere-ong',
    number: '05',
    icon: 'Landmark',
    accent: 'gold',
    badge: 'Finance & Conformité',
    badgeColor: 'gold',
    duration: '6 semaines · 30 heures',
    level: 'Intermédiaire',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Formation en Gestion Financière d'une ONG Humanitaire",
    subtitle: "Comptabilité de projet, gestion budgétaire et rapportage aux bailleurs de fonds",
    tagline: "Les chiffres doivent parler pour vous, pas contre vous.",
    intro:
      "Dans une ONG, la rigueur financière n'est pas seulement une obligation morale — c'est une question de survie. Un rapport financier défaillant peut faire perdre un financement de plusieurs millions. Cette formation — ancrée sur les standards réels des bailleurs USAID/BHA, UE/ECHO et les procédures internes d'ACTED et MSF — vous donne la maîtrise complète de la comptabilité de projet, de la gestion budgétaire multi-bailleurs et de la préparation aux audits externes. Vous serez le Finance Officer ou le Finance Manager que chaque ONG s'arrache.",
    audience:
      "Finance Officers, Finance Managers et Admin-Finance en poste ou en recherche, comptables souhaitant intégrer le secteur humanitaire, gestionnaires de projets ayant des responsabilités budgétaires.",
    objectives: [
      "Maîtriser la comptabilité de projet ONG selon les standards internationaux",
      "Élaborer et gérer un budget multi-bailleurs avec suivi mensuel rigoureux",
      "Préparer les rapports financiers conformes aux exigences de chaque bailleur",
      "Gérer la trésorerie, les caisses et les avances sur terrain",
      "Préparer et réussir les audits financiers externes",
    ],
    modules: [
      {
        number: '01',
        title: "Fondamentaux de la Comptabilité de Projet ONG",
        description:
          "Bases de la comptabilité humanitaire : plan comptable ONG, comptabilité d'engagement vs de caisse, séparation des charges par projet et par bailleur.",
        points: [
          "Plan comptable ONG et codification par projet, bailleur et rubrique",
          "Comptabilité d'engagement et comptabilité de caisse : différences et application",
          "Principes de séparation des charges et d'allocation des coûts communs",
        ],
      },
      {
        number: '02',
        title: "Élaboration & Gestion Budgétaire Multi-Bailleurs",
        description:
          "Construction d'un budget de projet réaliste et défendable : méthodes de budgétisation, gestion des lignes budgétaires, suivi des dépenses et gestion des écarts.",
        points: [
          "Méthodes de budgétisation : activité par activité, coût unitaire et forfait",
          "Tableau de suivi budgétaire (BFU — Budget Follow-Up) mensuel",
          "Gestion des écarts, virements de lignes budgétaires et avenants",
        ],
      },
      {
        number: '03',
        title: "Trésorerie, Caisses & Avances Terrain",
        description:
          "Gestion opérationnelle de la trésorerie de terrain : politiques de caisse, coffres-forts, avances aux équipes, remboursements et rapprochements quotidiens.",
        points: [
          "Politiques de caisse et plafonds par niveau de responsabilité",
          "Procédures d'avance et de remboursement avec justificatifs",
          "Rapprochements bancaires et de caisse : quotidien, hebdomadaire, mensuel",
        ],
      },
      {
        number: '04',
        title: "Gestion Multi-Devises & Opérations Bancaires",
        description:
          "Navigation dans les complexités multi-devises des ONG internationales : ouverture de comptes, gestion des signataires, transferts internationaux et pertes/gains de change.",
        points: [
          "Ouverture et gestion de comptes bancaires en devises locales et USD/EUR",
          "Gestion des signataires et des procurations bancaires",
          "Pertes et gains de change : enregistrement comptable et impact budgétaire",
        ],
      },
      {
        number: '05',
        title: "Rapports Financiers pour Bailleurs",
        description:
          "Production de rapports financiers conformes aux exigences spécifiques des grands bailleurs : USAID/BHA, UE/ECHO, DFID et bailleurs privés — formats, délais et justificatifs requis.",
        points: [
          "Formats de rapportage USAID/BHA, UE/ECHO et bailleurs onusiens",
          "Justification des dépenses : pièces comptables, contrats et processus d'achat",
          "Réconciliation entre rapports financiers et rapports programmatiques",
        ],
      },
      {
        number: '06',
        title: "Préparation & Réussite des Audits Financiers",
        description:
          "Préparer et traverser sereinement un audit externe : documentation requise, organisation des pièces comptables, réponses aux auditeurs et gestion des recommandations.",
        points: [
          "Dossier d'audit : liste des documents requis et organisation des archives",
          "Interaction professionnelle avec les auditeurs externes",
          "Plans d'action correctifs suite aux recommandations d'audit",
        ],
      },
      {
        number: '07',
        title: "Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé",
        description:
          "Prise en main des logiciels comptables utilisés par les ONG : SAGA (ACF), LINK (ACTED), et maîtrise avancée d'Excel pour le suivi budgétaire et le reporting.",
        points: [
          "SAGA : saisie comptable, clôtures mensuelles et édition des journaux",
          "LINK : gestion financière intégrée des projets et extraction des rapports",
          "Excel avancé : tableaux de bord financiers, TCD et graphiques de suivi budgétaire",
        ],
      },
      {
        number: '08',
        title: "Fraude, Corruption & Conformité Financière",
        description:
          "Prévention et détection de la fraude financière dans les ONG : politiques anti-corruption, signalement, vérification d'inéligibilité des partenaires et protection des lanceurs d'alerte.",
        points: [
          "Identification des red flags de fraude financière et détournement",
          "Politique anti-corruption et mécanismes de signalement sécurisé",
          "Vérification d'inéligibilité des partenaires et fournisseurs (OFAC, UE, ONU)",
        ],
      },
    ],
    outcomes: [
      "Maîtrise complète de la comptabilité de projet ONG et du cycle budgétaire",
      "Capacité à produire des rapports financiers conformes aux exigences de chaque bailleur",
      "Attestation de formation en Gestion Financière ONG délivrée par BK-BOOST Ltd.",
      "Aptitude à traverser un audit externe avec confiance et professionnalisme",
      "Profil compétitif pour les postes de Finance Officer dans les ONG internationales",
    ],
  },

  {
    id: 'gestion-rh-ong',
    number: '06',
    icon: 'Users',
    accent: 'teal',
    badge: 'Ressources Humaines',
    badgeColor: 'teal',
    duration: '6 semaines · 30 heures',
    level: 'Tous niveaux',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Formation en Gestion des Ressources Humaines d'une ONG Humanitaire",
    subtitle: "Recruter, gérer et fidéliser des équipes nationales et internationales en contexte de crise",
    tagline: "Des équipes soudées en contexte de crise : votre vrai avantage concurrentiel.",
    intro:
      "Dans une ONG humanitaire, la qualité de votre équipe définit la qualité de votre réponse. Un HR Officer incompétent peut paralyser un projet de 2 millions de dollars. Un HR Manager exceptionnel peut transformer une équipe démotivée en force de frappe efficace. Cette formation vous donne les outils RH des grandes organisations humanitaires — de la politique de recrutement international aux mécanismes de protection du personnel en zone de crise — avec une immersion dans le droit du travail humanitaire réel.",
    audience:
      "HR Officers, Admin-RH et HR Managers en poste ou en candidature, coordinateurs de terrain ayant des responsabilités RH, managers souhaitant professionnaliser la gestion de leurs équipes.",
    objectives: [
      "Maîtriser le cycle RH complet dans les organisations humanitaires (recrutement → sortie)",
      "Gérer les contrats nationaux et internationaux selon les standards humanitaires",
      "Construire et appliquer des politiques RH conformes au droit du travail local",
      "Gérer les situations de crise RH : conflits, burnout, protection du personnel",
      "Produire des rapports RH de qualité pour les sièges et les bailleurs",
    ],
    modules: [
      {
        number: '01',
        title: "Structure Organisationnelle des ONG & Rôle des RH",
        description:
          "Positionnement de la fonction RH dans la structure d'une ONG humanitaire : liens hiérarchiques, responsabilités, interfaces avec la finance, la logistique et les programmes.",
        points: [
          "Organigrammes des ONG : structure terrain vs siège et rôles clés",
          "Responsabilités RH : du recrutement à la séparation du personnel",
          "Interface RH-Finance pour la gestion de la paie et des avantages sociaux",
        ],
      },
      {
        number: '02',
        title: "Recrutement National & International",
        description:
          "Processus de recrutement complet : définition de poste, publication, shortlisting, tests techniques, entretiens structurés, vérification des références et offre de contrat.",
        points: [
          "Rédaction de descriptions de poste compétitives et inclusives",
          "Grilles d'entretien structuré et méthodes d'évaluation objective",
          "Vérification des références, antécédents et protection contre la fraude documentaire",
        ],
      },
      {
        number: '03',
        title: "Contrats de Travail & Administration du Personnel",
        description:
          "Gestion administrative du personnel : types de contrats, dossiers individuels, suivi des congés, absences, avertissements et procédures disciplinaires.",
        points: [
          "Contrats nationaux (CDD, CDI) et contrats d'expatriation : spécificités et risques",
          "Dossier individuel du personnel : documents obligatoires et archivage sécurisé",
          "Procédures disciplinaires : avertissements, mises en demeure et licenciement légal",
        ],
      },
      {
        number: '04',
        title: "Politique de Rémunération & Avantages Sociaux",
        description:
          "Construction d'une grille salariale équitable et compétitive : benchmarking, coefficients de poste, primes terrain, indemnités et avantages sociaux locaux et internationaux.",
        points: [
          "Benchmarking salarial : grilles ONU, ONG et secteur public local",
          "Calcul des primes terrain, indemnités de risque et hardship allowances",
          "CNSS, cotisations sociales et obligations légales de l'employeur",
        ],
      },
      {
        number: '05',
        title: "Évaluation des Performances & Développement des Compétences",
        description:
          "Systèmes d'évaluation professionnelle des performances : entretiens annuels, plans de développement individuel, formation continue et gestion des hauts potentiels.",
        points: [
          "Grilles d'évaluation des performances basées sur les compétences et les résultats",
          "Plans de développement individuel (PDI) et plans de succession",
          "Gestion des formations internes et accès aux ressources de développement",
        ],
      },
      {
        number: '06',
        title: "Droit du Travail Humanitaire — RDC & Droit International",
        description:
          "Maîtrise des obligations légales de l'employeur humanitaire : Code du Travail RDC, accords internationaux, statuts du personnel expatrié et mécanismes de résolution des conflits.",
        points: [
          "Code du Travail de la RDC : droits des travailleurs, congés, heures supplémentaires",
          "Statut du personnel expatrié : privilèges, immunités et obligations fiscales",
          "Résolution des conflits du travail : médiation, inspection du travail et tribunal",
        ],
      },
      {
        number: '07',
        title: "Protection, Bien-Être & Prévention du Burnout",
        description:
          "Politiques de protection du personnel en contexte humanitaire : Code de Conduite, prévention du harcèlement, signalement PSEA, gestion du stress traumatique et soutien psychosocial.",
        points: [
          "Code de Conduite humanitaire : prévention des abus et exploitation sexuelle (PSEA)",
          "Identification précoce du burnout et mécanismes de soutien psychosocial",
          "Politiques de protection des lanceurs d'alerte et canaux de signalement sécurisé",
        ],
      },
      {
        number: '08',
        title: "Gestion des Conflits & Médiation en Équipe Multiculturelle",
        description:
          "Techniques de gestion des conflits interpersonnels et interculturels en contexte humanitaire : médiation, arbitrage et construction d'une culture d'équipe saine et performante.",
        points: [
          "Identification et prévention précoce des conflits interpersonnels",
          "Médiation et facilitation de dialogue en équipes multiculturelles",
          "Construction d'une culture organisationnelle saine : valeurs, rituels et leadership",
        ],
      },
    ],
    outcomes: [
      "Maîtrise du cycle RH complet dans les organisations humanitaires",
      "Capacité à gérer des équipes nationales et internationales avec rigueur légale",
      "Attestation de formation en Gestion des Ressources Humaines ONG",
      "Aptitude à construire des politiques RH conformes aux standards humanitaires",
      "Profil compétitif pour les postes de HR Officer dans les grandes ONG internationales",
    ],
  },

  {
    id: 'audit-transparence-conformite',
    number: '07',
    icon: 'ShieldCheck',
    accent: 'rouge',
    badge: 'Audit & Conformité',
    badgeColor: 'rouge',
    duration: '6 semaines · 30 heures',
    level: 'Intermédiaire à Avancé',
    format: 'En ligne & Présentiel',
    price: 'Sur devis',
    title: "Formation en Audit, Transparence et Conformité des ONGs",
    subtitle: "Audits internes, prévention de la fraude et conformité bailleurs pour une organisation irréprochable",
    tagline: "La conformité n'est pas une contrainte. C'est votre avantage concurrentiel.",
    intro:
      "Une organisation non-gouvernementale qui ne peut pas prouver la bonne utilisation de ses fonds est une organisation morte. Les bailleurs comme USAID/BHA, la Commission Européenne et l'ONU exigent une transparence totale — et la sanctionnent au moindre écart. Cette formation — construite sur l'expérience réelle d'audits internes chez ACTED avec une réduction de 87,2% du risque de non-conformité en 3 mois — vous donne les méthodes, les outils et les réflexes d'un auditeur interne de haut niveau. Parce que chaque organisation mérite une seconde chance, mais aucun bailleur n'en accorde une.",
    audience:
      "Auditeurs internes, Finance Managers, Area Managers et Country Directors souhaitant renforcer les systèmes de contrôle, consultants en conformité ONG, toute personne responsable de la préparation aux audits externes.",
    objectives: [
      "Maîtriser les techniques d'audit interne adapté au contexte humanitaire",
      "Identifier et corriger les failles de contrôle interne avant qu'elles coûtent des millions",
      "Préparer un dossier d'audit externe solide, documenté et convaincant",
      "Prévenir et détecter la fraude, la corruption et les conflits d'intérêt",
      "Produire des rapports d'audit professionnels avec des plans d'action réalistes",
    ],
    modules: [
      {
        number: '01',
        title: "Fondamentaux de l'Audit Interne ONG",
        description:
          "Architecture de l'audit interne humanitaire : définition, objectifs, indépendance de l'auditeur, cadre de référence (IIA, COSO) et positionnement dans l'organisation.",
        points: [
          "Cadre de référence international de l'audit interne (IIA Standards)",
          "COSO : composantes du contrôle interne et leur application en ONG",
          "Indépendance, objectivité et code d'éthique de l'auditeur interne",
        ],
      },
      {
        number: '02',
        title: "Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation",
        description:
          "Conception et évaluation des contrôles internes essentiels : séparation des tâches, matrices d'autorisation et délégation de pouvoir, lettres d'autorisation et de révocation.",
        points: [
          "Séparation des tâches : principes et application dans Finance, Achats et RH",
          "Construction d'une matrice d'autorisation par niveau et par opération",
          "Lettres d'autorisation et de révocation : rédaction et archivage",
        ],
      },
      {
        number: '03',
        title: "Audit de la Supply Chain & des Achats",
        description:
          "Audit spécialisé du cycle d'achat et de la supply chain : vérification des procédures, contrôle des seuils, détection des collusions fournisseurs et analyse des écarts d'inventaire.",
        points: [
          "Vérification du respect des seuils et procédures d'achat (RFQ, RFP, ITB)",
          "Détection de la collusion fournisseurs : red flags et techniques d'analyse",
          "Audit des stocks : écarts d'inventaire, produits périmés et gestion FEFO",
        ],
      },
      {
        number: '04',
        title: "Audit Financier & Comptable",
        description:
          "Audit des opérations financières et comptables : contrôle des pièces justificatives, rapprochements bancaires, gestion des avances et conformité des charges aux lignes budgétaires.",
        points: [
          "Vérification des pièces comptables : complétude, légitimité et conformité",
          "Rapprochements bancaires et détection des irrégularités de caisse",
          "Contrôle de l'éligibilité des dépenses aux lignes budgétaires des bailleurs",
        ],
      },
      {
        number: '05',
        title: "Audit des RH & Programmes",
        description:
          "Audit transversal des opérations RH et programmatiques : contrôle des contrats, des présences, de la paie et de la conformité des activités aux objectifs du projet.",
        points: [
          "Audit de la paie : contrôle des salaires, cotisations et indemnités",
          "Vérification des présences, congés et gestion des heures supplémentaires",
          "Contrôle programmatique : activités réalisées vs planifiées, ciblage des bénéficiaires",
        ],
      },
      {
        number: '06',
        title: "Prévention de la Fraude & Politique Anti-Corruption",
        description:
          "Détection et prévention de la fraude financière, de la corruption et des conflits d'intérêt dans les ONG : red flags, mécanismes de signalement et cultures organisationnelles à risque.",
        points: [
          "Typologies de fraude dans les ONG : détournements, fausses factures, ghost workers",
          "Construction d'un système de signalement sécurisé et protégé",
          "Culture organisationnelle et tone-at-the-top dans la prévention de la fraude",
        ],
      },
      {
        number: '07',
        title: "Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens",
        description:
          "Exigences spécifiques de conformité des grands bailleurs de fonds : obligations contractuelles, reporting, restrictions et sanctions en cas de non-conformité.",
        points: [
          "CFR 2 (USAID) et UE PRAG : règles de passation des marchés et éligibilité",
          "Règles USAID/BHA sur les dépenses d'administration et les coûts indirects",
          "Obligations de reporting et conséquences juridiques de la non-conformité bailleur",
        ],
      },
      {
        number: '08',
        title: "Rédaction de Rapports d'Audit Professionnels",
        description:
          "Produire des rapports d'audit clairs, structurés et convaincants : constats, critères, causes, effets et recommandations priorisées — le rapport qui change les choses.",
        points: [
          "Structure d'un rapport d'audit interne : résumé exécutif, constats et recommandations",
          "Formulation de constats CCCE (Constat, Critère, Cause, Effet)",
          "Plans d'action correctifs : rédaction, assignation et suivi des recommandations",
        ],
      },
      {
        number: '09',
        title: "Préparation aux Audits Externes & Interaction avec les Auditeurs",
        description:
          "Préparer et piloter une mission d'audit externe : constitution du dossier, interaction professionnelle avec les auditeurs, gestion des points de divergence et réponses au rapport final.",
        points: [
          "Check-list de préparation à l'audit externe par domaine (Finance, SCM, RH, Prog.)",
          "Communication professionnelle avec l'équipe d'audit externe",
          "Gestion des divergences : comment défendre ses positions avec des preuves",
        ],
      },
    ],
    outcomes: [
      "Capacité à conduire un audit interne complet dans une ONG humanitaire",
      "Maîtrise des exigences de conformité des grands bailleurs (USAID, UE, ONU)",
      "Attestation de formation en Audit Interne et Conformité délivrée par BK-BOOST Ltd.",
      "Aptitude à rédiger des rapports d'audit professionnels avec plans d'action",
      "Profil expert pour les postes d'Auditeur Interne, Area Manager et Compliance Officer",
    ],
  },
]

export const formationById = (id) => formations.find((f) => f.id === id)
