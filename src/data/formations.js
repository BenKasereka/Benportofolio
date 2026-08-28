// Catalogue complet des 7 formations BK-BOOST Ltd.
// Contenu ancré sur l'expertise réelle de Benjamin KASEREKA VINYATSI.
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
// `pricePrefix` porte aussi { fr, en } : src/lib/pricing.js résout la bonne
// langue via son paramètre `lang`.

export const formations = [
  {
    id: 'intelligence-artificielle',
    number: '01',
    icon: 'Bot',
    badge: { fr: 'Tech & Innovation', en: 'Tech & Innovation' },
    duration: { fr: '4 semaines · 20 heures', en: '4 weeks · 20 hours' },
    level: { fr: 'Tous niveaux', en: 'All levels' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 100,
    title: { fr: "Maîtrise de l'Intelligence Artificielle", en: 'Artificial Intelligence Mastery' },
    subtitle: {
      fr: 'Les 5 IA de rupture pour transformer votre productivité professionnelle en 2026',
      en: 'The 5 breakthrough AI tools to transform your professional productivity in 2026',
    },
    tagline: { fr: "Ne subissez plus l'IA. Commandez-la.", en: 'Stop being run by AI. Start commanding it.' },
    intro: {
      fr: "En 2026, l'IA ne remplace pas les professionnels — elle multiplie par 5 la productivité de ceux qui savent l'utiliser. Cette formation intensive vous propulse de simple utilisateur à expert opérationnel des 5 plateformes IA les plus puissantes du marché : ChatGPT, Claude, Microsoft Copilot, Perplexity et Google Gemini. En 4 semaines chrono, vous automatisez vos tâches répétitives, maîtrisez le prompting avancé, et transformez chaque outil en assistant exécutif personnel — que vous soyez gestionnaire, logisticien, financier, RH ou entrepreneur.",
      en: "In 2026, AI doesn't replace professionals — it multiplies by 5 the productivity of those who know how to use it. This intensive training propels you from casual user to hands-on expert across the 5 most powerful AI platforms on the market: ChatGPT, Claude, Microsoft Copilot, Perplexity and Google Gemini. In 4 fast-paced weeks, you'll automate your repetitive tasks, master advanced prompting, and turn every tool into a personal executive assistant — whether you work in management, logistics, finance, HR or entrepreneurship.",
    },
    audience: {
      fr: "Professionnels des ONG et entreprises souhaitant gagner en efficacité, cadres et managers, entrepreneurs, étudiants en fin de cycle, toute personne désireuse de prendre une longueur d'avance dans son domaine grâce à l'IA.",
      en: 'Professionals from NGOs and businesses looking to boost their efficiency, executives and managers, entrepreneurs, final-year students, and anyone wanting to get ahead in their field with AI.',
    },
    objectives: [
      {
        fr: 'Maîtriser les 5 IA incontournables de 2026 en contexte professionnel',
        en: 'Master the 5 essential AI tools of 2026 in a professional context',
      },
      {
        fr: 'Concevoir des prompts avancés pour des résultats professionnels de haut niveau',
        en: 'Design advanced prompts for high-level professional results',
      },
      {
        fr: 'Automatiser des workflows complets avec des agents IA',
        en: 'Automate complete workflows with AI agents',
      },
      {
        fr: "Intégrer l'IA dans les outils Office 365, Google Workspace et ERP",
        en: 'Integrate AI into Office 365, Google Workspace and ERP tools',
      },
      {
        fr: "Développer une stratégie personnelle d'IA au service de ses objectifs métier",
        en: 'Develop a personal AI strategy in service of your professional goals',
      },
    ],
    modules: [
      {
        number: '01',
        title: {
          fr: 'Introduction aux IA génératives — Comprendre pour mieux utiliser',
          en: 'Introduction to Generative AI — Understand to Use Better',
        },
        description: {
          fr: "Panorama complet de l'écosystème IA en 2026 : modèles de langage, IA multimodales, agents autonomes. Démystification des concepts clés pour une prise en main immédiate.",
          en: 'A comprehensive overview of the AI ecosystem in 2026: language models, multimodal AI, autonomous agents. Demystifying key concepts for immediate hands-on use.',
        },
        points: [
          {
            fr: 'Histoire et fonctionnement des LLM (Large Language Models)',
            en: 'History and workings of LLMs (Large Language Models)',
          },
          {
            fr: 'Différences et complémentarités entre les principales plateformes',
            en: 'Differences and complementarities between the major platforms',
          },
          {
            fr: "Sécurité, confidentialité des données et limites éthiques de l'IA",
            en: 'Security, data privacy and the ethical limits of AI',
          },
        ],
      },
      {
        number: '02',
        title: {
          fr: 'ChatGPT (OpenAI) — Productivité maximale & automatisation',
          en: 'ChatGPT (OpenAI) — Maximum Productivity & Automation',
        },
        description: {
          fr: "Maîtrise approfondie de l'outil le plus populaire au monde : rédaction, analyse, code, résumé de documents volumineux, et création de GPT personnalisés pour votre organisation.",
          en: "In-depth mastery of the world's most popular tool: writing, analysis, code, summarizing lengthy documents, and building custom GPTs for your organization.",
        },
        points: [
          {
            fr: 'Prompting structuré : rôle, contexte, format, contraintes (RCCF)',
            en: 'Structured prompting: role, context, format, constraints (RCFC)',
          },
          {
            fr: 'Création de GPT personnalisés pour son organisation',
            en: 'Building custom GPTs for your organization',
          },
          {
            fr: 'Analyse de documents, données et rapports complexes',
            en: 'Analyzing complex documents, data and reports',
          },
        ],
      },
      {
        number: '03',
        title: {
          fr: "Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite",
          en: 'Claude (Anthropic) — Elite Reasoning, Analysis and Writing',
        },
        description: {
          fr: "L'IA la plus rigoureuse pour l'analyse de documents longs, la rédaction académique et professionnelle, et le raisonnement structuré à haut niveau — idéale pour les rapports bailleurs, audits et procédures.",
          en: 'The most rigorous AI for analyzing long documents, academic and professional writing, and high-level structured reasoning — ideal for donor reports, audits and procedures.',
        },
        points: [
          {
            fr: 'Analyse et synthèse de documents de 100+ pages',
            en: 'Analyzing and summarizing documents of 100+ pages',
          },
          {
            fr: 'Rédaction de rapports, procédures et politiques professionnelles',
            en: 'Drafting professional reports, procedures and policies',
          },
          {
            fr: 'Raisonnement complexe, revue critique et contre-argumentation',
            en: 'Complex reasoning, critical review and counter-argumentation',
          },
        ],
      },
      {
        number: '04',
        title: {
          fr: "Microsoft Copilot — L'IA native dans Office 365 & Teams",
          en: 'Microsoft Copilot — Native AI in Office 365 & Teams',
        },
        description: {
          fr: "Intégration de Copilot au cœur de Word, Excel, PowerPoint, Outlook et Teams pour multiplier votre vitesse d'exécution sans quitter votre environnement de travail habituel.",
          en: 'Integrating Copilot at the heart of Word, Excel, PowerPoint, Outlook and Teams to multiply your execution speed without leaving your usual work environment.',
        },
        points: [
          {
            fr: 'Génération automatique de présentations PowerPoint et rapports Word',
            en: 'Automatic generation of PowerPoint presentations and Word reports',
          },
          {
            fr: 'Analyse de données Excel avec Copilot — tableaux croisés, formules complexes',
            en: 'Excel data analysis with Copilot — pivot tables, complex formulas',
          },
          {
            fr: "Rédaction d'emails, résumés de réunions et planification Teams",
            en: 'Drafting emails, meeting summaries and Teams scheduling',
          },
        ],
      },
      {
        number: '05',
        title: {
          fr: 'Perplexity AI — Recherche temps réel & veille stratégique',
          en: 'Perplexity AI — Real-Time Research & Strategic Monitoring',
        },
        description: {
          fr: "L'IA de recherche la plus puissante du marché : informations sourcées, actualisées en temps réel, avec citations vérifiables — votre assistant de veille professionnelle et académique.",
          en: 'The most powerful research AI on the market: sourced information, updated in real time, with verifiable citations — your professional and academic monitoring assistant.',
        },
        points: [
          {
            fr: 'Recherche approfondie avec sources vérifiées et actualisées',
            en: 'In-depth research with verified, up-to-date sources',
          },
          {
            fr: 'Veille sectorielle, concurrentielle et réglementaire automatisée',
            en: 'Automated sector, competitive and regulatory monitoring',
          },
          {
            fr: 'Comparaisons, analyses de marché et fact-checking IA',
            en: 'Comparisons, market analysis and AI fact-checking',
          },
        ],
      },
      {
        number: '06',
        title: {
          fr: 'Google Gemini — Multimodalité & Google Workspace',
          en: 'Google Gemini — Multimodality & Google Workspace',
        },
        description: {
          fr: "Exploiter la puissance multimodale de Gemini (texte, image, audio, vidéo) et son intégration native dans l'écosystème Google : Gmail, Docs, Sheets, Slides et Google Meet.",
          en: "Harnessing Gemini's multimodal power (text, image, audio, video) and its native integration into the Google ecosystem: Gmail, Docs, Sheets, Slides and Google Meet.",
        },
        points: [
          {
            fr: "Analyse d'images, graphiques et documents visuels avec Gemini",
            en: 'Analyzing images, charts and visual documents with Gemini',
          },
          {
            fr: 'Automatisation de Google Sheets, Docs et Gmail avec IA',
            en: 'Automating Google Sheets, Docs and Gmail with AI',
          },
          {
            fr: 'Création de contenus multimodaux pour communications professionnelles',
            en: 'Creating multimodal content for professional communications',
          },
        ],
      },
      {
        number: '07',
        title: {
          fr: "Prompting Engineering avancé — L'art de commander l'IA",
          en: 'Advanced Prompt Engineering — The Art of Commanding AI',
        },
        description: {
          fr: "Techniques avancées de conception de prompts pour des résultats exceptionnels : chaîne de pensée (CoT), few-shot learning, prompt chaining et création de systèmes de prompts réutilisables.",
          en: 'Advanced prompt design techniques for exceptional results: chain of thought (CoT), few-shot learning, prompt chaining and building reusable prompt systems.',
        },
        points: [
          {
            fr: 'Chain-of-thought, tree-of-thought et méthode ICIO',
            en: 'Chain-of-thought, tree-of-thought and the ICIO method',
          },
          {
            fr: 'Construction de bibliothèques de prompts pour son organisation',
            en: 'Building prompt libraries for your organization',
          },
          {
            fr: 'Évaluation et optimisation itérative des résultats IA',
            en: 'Evaluating and iteratively optimizing AI results',
          },
        ],
      },
      {
        number: '08',
        title: {
          fr: "Automatisation & Agents IA — Travailler pendant que l'IA travaille",
          en: 'Automation & AI Agents — Work While AI Works',
        },
        description: {
          fr: "Mise en place d'agents IA autonomes et de workflows automatisés : déléguer des tâches entières à l'IA et construire des systèmes de productivité passifs pour son organisation.",
          en: 'Setting up autonomous AI agents and automated workflows: delegating entire tasks to AI and building passive productivity systems for your organization.',
        },
        points: [
          {
            fr: "Construction d'agents IA multi-étapes avec outils et mémoire",
            en: 'Building multi-step AI agents with tools and memory',
          },
          {
            fr: 'Automatisation de rapports, emails et tâches récurrentes',
            en: 'Automating reports, emails and recurring tasks',
          },
          {
            fr: 'Intégration Make/Zapier/N8N avec les APIs IA',
            en: 'Integrating Make/Zapier/N8N with AI APIs',
          },
        ],
      },
      {
        number: '09',
        title: {
          fr: 'Atelier Pratique — Mini-projet certifiant par domaine',
          en: 'Hands-On Workshop — Certifying Mini-Project by Field',
        },
        description: {
          fr: "Mise en application concrète dans votre secteur : un mini-projet IA personnalisé (logistique, finance, RH, coaching ou audit) aboutissant à un livrable professionnel réel.",
          en: 'Practical application in your sector: a personalized AI mini-project (logistics, finance, HR, coaching or audit) resulting in a real professional deliverable.',
        },
        points: [
          {
            fr: 'Projet personnalisé selon votre métier (ONG, entreprise, coaching)',
            en: 'Project tailored to your profession (NGO, business, coaching)',
          },
          {
            fr: 'Revue individuelle et retours par le formateur expert',
            en: 'Individual review and feedback from the expert trainer',
          },
          {
            fr: "Attestation de compétences IA délivrée à l'issue du projet",
            en: 'AI skills certificate awarded on completion of the project',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: 'Attestation de compétences IA délivrée par BK-BOOST Ltd.',
        en: 'AI skills certificate issued by BK-BOOST Ltd.',
      },
      {
        fr: 'Bibliothèque de prompts professionnels personnalisée',
        en: 'A personalized library of professional prompts',
      },
      {
        fr: 'Autonomie totale sur les 5 plateformes IA clés de 2026',
        en: 'Full autonomy across the 5 key AI platforms of 2026',
      },
      {
        fr: "Workflows d'automatisation opérationnels dès la formation terminée",
        en: 'Operational automation workflows as soon as training ends',
      },
      {
        fr: "Avantage concurrentiel immédiat sur le marché de l'emploi",
        en: 'An immediate competitive edge in the job market',
      },
    ],
  },

  {
    id: 'coaching-carriere',
    number: '02',
    icon: 'Target',
    badge: { fr: 'BK-BOOST Ltd.', en: 'BK-BOOST Ltd.' },
    duration: { fr: '4 à 24 semaines selon le pack', en: '4 to 24 weeks depending on the package' },
    level: { fr: 'Tous niveaux', en: 'All levels' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 60,
    pricePrefix: { fr: 'À partir de ', en: 'Starting from ' },
    title: { fr: 'Formation & Accompagnement de Carrière', en: 'Career Training & Coaching' },
    subtitle: {
      fr: 'De votre CV actuel au contrat que vous méritez — national ou international',
      en: 'From your current résumé to the contract you deserve — national or international',
    },
    tagline: {
      fr: "De 'Votre candidature a bien été reçue' à 'Quand pouvez-vous commencer ?'",
      en: "From 'Your application has been received' to 'When can you start?'",
    },
    intro: {
      fr: "Chaque année, des milliers de candidats excellents voient leur dossier ignoré non pas par manque de compétences, mais par manque de stratégie. BK-BOOST Ltd. transforme cette réalité. Construit sur 5+ ans d'expérience dans les recrutements humanitaires internationaux, ce programme vous donne les mêmes outils, techniques et stratégies que ceux utilisés par les candidats retenus dans les organisations les plus sélectives au monde — agences onusiennes, grandes Organisations Internationales Humanitaires (ONGIs) et bailleurs internationaux.",
      en: "Every year, thousands of excellent candidates see their applications ignored — not for lack of skill, but for lack of strategy. BK-BOOST Ltd. changes that. Built on 5+ years of experience in international humanitarian recruitment, this program gives you the same tools, techniques and strategies used by candidates selected by the world's most selective organizations — UN agencies, major International Humanitarian Organizations (INGOs) and international donors.",
    },
    audience: {
      fr: "Candidats aux postes nationaux et internationaux dans les ONG, agences onusiennes, entreprises privées et institutions publiques. Professionnels en transition de carrière, jeunes diplômés ambitieux et candidats à l'expatriation.",
      en: 'Candidates for national and international positions in NGOs, UN agencies, private companies and public institutions. Professionals in career transition, ambitious recent graduates and candidates seeking expatriation.',
    },
    objectives: [
      {
        fr: "Produire un CV d'exception au format ATS international qui passe tous les filtres",
        en: 'Produce an outstanding résumé in international ATS format that clears every filter',
      },
      {
        fr: 'Rédiger des lettres de motivation qui forcent le recruteur à vous convoquer',
        en: 'Write cover letters that compel recruiters to call you in',
      },
      {
        fr: 'Décrocher et réussir vos entretiens grâce à la méthode STAR maîtrisée',
        en: 'Land and ace your interviews with a mastered STAR method',
      },
      {
        fr: "Négocier votre contrat, votre salaire et vos conditions d'expatriation avec assurance",
        en: 'Negotiate your contract, salary and expatriation terms with confidence',
      },
      {
        fr: 'Construire une stratégie de candidature ciblée, efficace et mesurable',
        en: 'Build a targeted, effective and measurable application strategy',
      },
    ],
    modules: [
      {
        number: '01',
        title: {
          fr: 'Audit de Carrière & Positionnement Stratégique',
          en: 'Career Audit & Strategic Positioning',
        },
        description: {
          fr: "Diagnostic complet de votre profil : forces, axes de développement, valeur marché et positionnement idéal. Construction d'une feuille de route de carrière claire et réaliste.",
          en: 'A complete diagnostic of your profile: strengths, areas for development, market value and ideal positioning. Building a clear, realistic career roadmap.',
        },
        points: [
          {
            fr: 'Analyse de votre parcours, compétences et aspirations',
            en: 'Analysis of your background, skills and aspirations',
          },
          {
            fr: 'Identification du secteur cible : ONG, privé, onusien, institutionnel',
            en: 'Identifying your target sector: NGO, private, UN, institutional',
          },
          {
            fr: "Définition du profil de poste idéal et de la stratégie d'approche",
            en: 'Defining your ideal job profile and approach strategy',
          },
        ],
      },
      {
        number: '02',
        title: { fr: 'CV aux Normes ATS Internationales', en: 'Résumé to International ATS Standards' },
        description: {
          fr: "Rédaction et optimisation complète de votre CV selon les standards ATS des organisations internationales : structure, mots-clés sectoriels, mise en page et storytelling de vos réalisations.",
          en: "Complete writing and optimization of your résumé to the ATS standards of international organizations: structure, sector keywords, layout and storytelling of your achievements.",
        },
        points: [
          {
            fr: 'Structure optimisée ATS avec les bons mots-clés recruteurs',
            en: 'ATS-optimized structure with the right recruiter keywords',
          },
          {
            fr: 'Quantification de vos réalisations (méthode PAR : Problème → Action → Résultat)',
            en: 'Quantifying your achievements (PAR method: Problem → Action → Result)',
          },
          {
            fr: 'Format professionnel international conforme aux standards ONU et ONG',
            en: 'International professional format compliant with UN and NGO standards',
          },
        ],
      },
      {
        number: '03',
        title: { fr: 'Lettre de Motivation Percutante', en: 'High-Impact Cover Letter' },
        description: {
          fr: "La lettre de motivation qui ne se contente pas d'exister — elle convainc. Techniques de rédaction axées sur la valeur ajoutée, la connexion émotionnelle et la différenciation du candidat.",
          en: "A cover letter that doesn't just exist — it convinces. Writing techniques focused on added value, emotional connection and candidate differentiation.",
        },
        points: [
          {
            fr: 'Structure en 3 paragraphes à fort impact (Hook, Valeur, Call-to-Action)',
            en: 'High-impact 3-paragraph structure (Hook, Value, Call-to-Action)',
          },
          {
            fr: 'Personnalisation par organisation et par poste ciblé',
            en: 'Customization by organization and target position',
          },
          {
            fr: 'Éviter les formules génériques qui tuent les candidatures dès la première ligne',
            en: 'Avoiding generic phrases that kill applications from the first line',
          },
        ],
      },
      {
        number: '04',
        title: {
          fr: 'Préparation aux Tests Techniques & Études de Cas',
          en: 'Preparing for Technical Tests & Case Studies',
        },
        description: {
          fr: "Entraînement intensif aux tests écrits, études de cas et épreuves techniques utilisés par les ONG et agences internationales dans leurs processus de sélection.",
          en: 'Intensive training on the written tests, case studies and technical assessments used by NGOs and international agencies in their selection processes.',
        },
        points: [
          {
            fr: 'Tests techniques supply chain, finance, RH et gestion de projet',
            en: 'Technical tests in supply chain, finance, HR and project management',
          },
          {
            fr: 'Études de cas humanitaires : analyse, proposition et défense',
            en: 'Humanitarian case studies: analysis, proposal and defense',
          },
          {
            fr: 'Gestion du temps, présentation des résultats et argumentation sous pression',
            en: 'Time management, presenting results and arguing your case under pressure',
          },
        ],
      },
      {
        number: '05',
        title: {
          fr: "Simulation d'Entretiens — Méthode STAR Maîtrisée",
          en: 'Interview Simulation — Mastering the STAR Method',
        },
        description: {
          fr: "Entraînement intensif aux entretiens comportementaux, compétence-based interviews et panels d'entretien — avec retours détaillés et axes d'amélioration précis.",
          en: 'Intensive training in behavioral interviews, competency-based interviews and interview panels — with detailed feedback and precise areas for improvement.',
        },
        points: [
          {
            fr: 'Maîtrise de la méthode STAR (Situation, Tâche, Action, Résultat)',
            en: 'Mastering the STAR method (Situation, Task, Action, Result)',
          },
          {
            fr: 'Simulations en conditions réelles avec vidéo et analyse comportementale',
            en: 'Real-condition simulations with video and behavioral analysis',
          },
          {
            fr: 'Questions pièges, questions difficiles et stratégies de réponse gagnantes',
            en: 'Trick questions, tough questions and winning response strategies',
          },
        ],
      },
      {
        number: '06',
        title: {
          fr: "Négociation de Contrat & Conditions d'Expatriation",
          en: 'Contract Negotiation & Expatriation Terms',
        },
        description: {
          fr: "Ne jamais accepter la première offre sans connaître sa valeur marché. Techniques de négociation salariale, avantages sociaux, conditions d'expatriation et gestion de contre-offres.",
          en: 'Never accept the first offer without knowing your market value. Techniques for salary negotiation, benefits, expatriation terms and handling counter-offers.',
        },
        points: [
          {
            fr: 'Benchmarking salarial : grilles ONU, ONGI et secteur privé',
            en: 'Salary benchmarking: UN, INGO and private-sector scales',
          },
          {
            fr: 'Techniques de négociation respectueuses et efficaces',
            en: 'Respectful and effective negotiation techniques',
          },
          {
            fr: "Lire, comprendre et sécuriser un contrat international d'expatriation",
            en: 'Reading, understanding and securing an international expatriation contract',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: "CV d'exception finalisé, optimisé ATS et prêt à être soumis",
        en: 'A finished, ATS-optimized, submission-ready outstanding résumé',
      },
      {
        fr: 'Lettre de motivation personnalisée par organisation cible',
        en: 'A cover letter customized for each target organization',
      },
      {
        fr: "Capacité de répondre à toute question d'entretien avec méthode et confiance",
        en: 'The ability to answer any interview question with method and confidence',
      },
      {
        fr: 'Stratégie de candidature active avec tableau de bord de suivi',
        en: 'An active application strategy with a tracking dashboard',
      },
      {
        fr: 'Accompagnement jusqu\'à la signature du contrat (Pack Ultimate)',
        en: 'Support all the way through to signing your contract (Ultimate Package)',
      },
    ],
  },

  {
    id: 'logistique-humanitaire',
    number: '03',
    icon: 'Package',
    badge: { fr: 'Humanitaire', en: 'Humanitarian' },
    duration: { fr: '6 semaines · 30 heures', en: '6 weeks · 30 hours' },
    level: { fr: 'Débutant à Intermédiaire', en: 'Beginner to Intermediate' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 160,
    title: { fr: 'Formation en Logistique Humanitaire', en: 'Humanitarian Logistics Training' },
    subtitle: {
      fr: 'Opérer en zone de crise : maîtriser chaque maillon de la chaîne logistique terrain',
      en: 'Operating in crisis zones: mastering every link of the field logistics chain',
    },
    tagline: {
      fr: "Livrer l'aide là où personne d'autre ne va. C'est ça, la logistique humanitaire.",
      en: "Delivering aid where no one else goes. That's humanitarian logistics.",
    },
    intro: {
      fr: "La logistique humanitaire ne ressemble à aucune autre. Elle s'opère dans des contextes de conflit armé, d'épidémie et de catastrophe naturelle, avec des délais impossibles, des ressources limitées et des vies en jeu. Cette formation — construite sur 5 ans de terrain humanitaire en RDC, Tchad, Soudan du Sud, Haïti et Nigeria — vous donne les outils, les réflexes et les procédures des meilleurs logisticiens humanitaires au monde. Du transport de médicaments en zone rouge à la gestion d'un entrepôt régional, vous serez opérationnel.",
      en: "Humanitarian logistics is unlike any other. It operates in contexts of armed conflict, epidemics and natural disasters, with impossible deadlines, limited resources and lives at stake. This training — built on 5 years of humanitarian fieldwork in the DRC, Chad, South Sudan, Haiti and Nigeria — gives you the tools, instincts and procedures of the world's best humanitarian logisticians. From transporting medicines in a red zone to managing a regional warehouse, you'll be operational.",
    },
    audience: {
      fr: "Logisticiens juniors et intermédiaires des ONG, candidats aux postes de Log Admin, Log Manager ou Supply Chain dans le secteur humanitaire, étudiants en gestion de crise, tout professionnel souhaitant intégrer le secteur humanitaire.",
      en: 'Junior and mid-level NGO logisticians, candidates for Log Admin, Log Manager or Supply Chain positions in the humanitarian sector, crisis management students, and any professional wanting to enter the humanitarian sector.',
    },
    objectives: [
      {
        fr: 'Maîtriser les procédures logistiques standard des grandes Organisations Internationales Humanitaires (ONGIs)',
        en: 'Master the standard logistics procedures of major International Humanitarian Organizations (INGOs)',
      },
      {
        fr: 'Gérer une flotte de véhicules, un entrepôt et une chaîne du froid en contexte terrain',
        en: 'Manage a vehicle fleet, a warehouse and a cold chain in field conditions',
      },
      {
        fr: 'Coordonner avec les acteurs clés : autorités, douanes, transporteurs et clusters logistiques',
        en: 'Coordinate with key stakeholders: authorities, customs, carriers and logistics clusters',
      },
      {
        fr: 'Gérer les risques sécuritaires et les contraintes d\'accès en zone de crise',
        en: 'Manage security risks and access constraints in crisis zones',
      },
      {
        fr: 'Produire des rapports logistiques professionnels conformes aux standards bailleurs',
        en: 'Produce professional logistics reports compliant with donor standards',
      },
    ],
    modules: [
      {
        number: '01',
        title: { fr: 'Fondamentaux de la Logistique Humanitaire', en: 'Fundamentals of Humanitarian Logistics' },
        description: {
          fr: "Architecture et principes de la logistique humanitaire : clusters, coordination inter-agences, pipeline d'approvisionnement et positionnement du logisticien dans la réponse humanitaire.",
          en: "The architecture and principles of humanitarian logistics: clusters, inter-agency coordination, the supply pipeline and the logistician's role in the humanitarian response.",
        },
        points: [
          {
            fr: 'Architecture de la réponse humanitaire : OCHA, clusters logistiques, coordination',
            en: 'The architecture of the humanitarian response: OCHA, logistics clusters, coordination',
          },
          {
            fr: "Rôle et responsabilités du logisticien en contexte d'urgence",
            en: "The logistician's role and responsibilities in emergency contexts",
          },
          {
            fr: 'Principes humanitaires et leurs implications logistiques (neutralité, impartialité)',
            en: 'Humanitarian principles and their logistics implications (neutrality, impartiality)',
          },
        ],
      },
      {
        number: '02',
        title: {
          fr: "Évaluation des Besoins & Planification Logistique d'Urgence",
          en: 'Needs Assessment & Emergency Logistics Planning',
        },
        description: {
          fr: "Méthodes d'évaluation rapide des besoins logistiques (MIRA, HEAT) et construction de plans de contingence logistique pour des réponses d'urgence déclenchées en 72 heures.",
          en: 'Rapid logistics needs-assessment methods (MIRA, HEAT) and building logistics contingency plans for emergency responses triggered within 72 hours.',
        },
        points: [
          {
            fr: "Évaluation rapide des capacités logistiques en zone d'urgence",
            en: 'Rapid assessment of logistics capacity in an emergency zone',
          },
          {
            fr: 'Élaboration d\'un plan de contingence logistique (CONOPS)',
            en: 'Developing a logistics contingency plan (CONOPS)',
          },
          {
            fr: "Prépositionnement de stocks d'urgence et gestion des stocks tampons",
            en: 'Pre-positioning emergency stock and managing buffer stock',
          },
        ],
      },
      {
        number: '03',
        title: {
          fr: 'Gestion de Flotte & Transport en Zones Complexes',
          en: 'Fleet Management & Transport in Complex Areas',
        },
        description: {
          fr: "Gestion complète d'une flotte de véhicules en contexte humanitaire : maintenance, sécurité, fuel management, planification des missions et reporting kilométrique.",
          en: 'Full management of a vehicle fleet in a humanitarian context: maintenance, security, fuel management, mission planning and mileage reporting.',
        },
        points: [
          {
            fr: 'Politiques d\'utilisation des véhicules et carnet de bord',
            en: 'Vehicle use policies and logbooks',
          },
          {
            fr: 'Planification des missions transport et gestion des conducteurs',
            en: 'Transport mission planning and driver management',
          },
          {
            fr: 'Sécurité routière, incidents de sécurité et procédures en cas d\'accident',
            en: 'Road safety, security incidents and accident procedures',
          },
        ],
      },
      {
        number: '04',
        title: { fr: 'Entrepôt & Gestion des Stocks', en: 'Warehouse & Stock Management' },
        description: {
          fr: "Standards Sphere et procédures de gestion d'entrepôt humanitaire : réception, stockage, inventaires, gestion des FIFO/FEFO et prévention des pertes et dommages.",
          en: 'Sphere standards and humanitarian warehouse management procedures: receiving, storage, inventories, FIFO/FEFO management, and preventing loss and damage.',
        },
        points: [
          {
            fr: "Standards d'entrepôt humanitaire : disposition, sécurité, accès et contrôle",
            en: 'Humanitarian warehouse standards: layout, security, access and control',
          },
          {
            fr: 'Méthodes FIFO et FEFO pour les produits médicaux et alimentaires',
            en: 'FIFO and FEFO methods for medical and food products',
          },
          {
            fr: 'Inventaires physiques, rapports de stock et gestion des écarts',
            en: 'Physical inventories, stock reports and discrepancy management',
          },
        ],
      },
      {
        number: '05',
        title: { fr: 'Chaîne du Froid & Produits Médicaux', en: 'Cold Chain & Medical Products' },
        description: {
          fr: "Gestion spécialisée de la chaîne du froid pour vaccins, médicaments et produits biologiques : normes GDP/GSP, équipements de froid, monitoring et procédures de rupture de chaîne.",
          en: 'Specialized cold-chain management for vaccines, medicines and biological products: GDP/GSP standards, cold-chain equipment, monitoring and cold-chain break procedures.',
        },
        points: [
          {
            fr: 'Normes GDP (Good Distribution Practices) et GSP (Good Storage Practices)',
            en: 'GDP (Good Distribution Practices) and GSP (Good Storage Practices) standards',
          },
          {
            fr: 'Équipements de froid : réfrigérateurs, glacières, data loggers',
            en: 'Cold-chain equipment: refrigerators, cold boxes, data loggers',
          },
          {
            fr: "Procédures en cas de rupture de chaîne du froid et évaluation de l'impact",
            en: 'Cold-chain break procedures and impact assessment',
          },
        ],
      },
      {
        number: '06',
        title: {
          fr: 'Coordination, Autorités & Gestion des Douanes',
          en: 'Coordination, Authorities & Customs Management',
        },
        description: {
          fr: "Navigation dans les contraintes réglementaires locales : dédouanement, exonérations fiscales des ONG, autorisations d'importation et coordination avec les autorités civiles et militaires.",
          en: "Navigating local regulatory constraints: customs clearance, NGO tax exemptions, import authorizations, and coordination with civil and military authorities.",
        },
        points: [
          {
            fr: 'Accords douaniers des ONG : exonérations, franchise et procédures accélérées',
            en: 'NGO customs agreements: exemptions, duty-free status and expedited procedures',
          },
          {
            fr: 'Relations avec les autorités locales, checkpoints et accès humanitaire',
            en: 'Relations with local authorities, checkpoints and humanitarian access',
          },
          {
            fr: 'Gestion des litiges douaniers et réclamations de marchandises',
            en: 'Managing customs disputes and cargo claims',
          },
        ],
      },
      {
        number: '07',
        title: { fr: 'Sécurité, Accès & Gestion des Risques', en: 'Security, Access & Risk Management' },
        description: {
          fr: "Protocoles de sécurité logistique en contexte de conflit ou d'instabilité : évaluation des risques, planification d'itinéraires sécurisés, briefings sécurité et gestion des incidents.",
          en: 'Logistics security protocols in contexts of conflict or instability: risk assessment, secure route planning, security briefings and incident management.',
        },
        points: [
          {
            fr: 'Évaluation des risques sécuritaires sur les routes logistiques',
            en: 'Security risk assessment on logistics routes',
          },
          {
            fr: "Procédures de communication et de reporting d'incidents",
            en: 'Incident communication and reporting procedures',
          },
          {
            fr: "Négociation d'accès et relations avec les acteurs armés (principes CICR)",
            en: 'Access negotiation and relations with armed actors (ICRC principles)',
          },
        ],
      },
      {
        number: '08',
        title: {
          fr: "Systèmes d'Information & Reporting Logistique",
          en: 'Information Systems & Logistics Reporting',
        },
        description: {
          fr: "Maîtrise des outils de gestion logistique humanitaire : MIMOSA, Kobo Toolbox, ODK, LINK et Excel avancé pour le suivi des KPIs et la production de rapports de qualité.",
          en: 'Hands-on mastery of humanitarian logistics tools: MIMOSA, Kobo Toolbox, ODK, LINK and advanced Excel for KPI tracking and quality reporting.',
        },
        points: [
          {
            fr: "Utilisation de MIMOSA et LINK pour la gestion des actifs et des stocks",
            en: 'Using MIMOSA and LINK for asset and stock management',
          },
          {
            fr: 'Tableaux de bord KPI logistiques (taux de rupture, coût/bénéficiaire, délais)',
            en: 'Logistics KPI dashboards (stock-out rate, cost per beneficiary, lead times)',
          },
          {
            fr: 'Rédaction de rapports logistiques mensuels et d\'urgence pour le siège',
            en: 'Writing monthly and emergency logistics reports for headquarters',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: 'Maîtrise opérationnelle des procédures logistiques des grandes ONG internationales',
        en: 'Operational mastery of the logistics procedures of major international NGOs',
      },
      {
        fr: "Aptitude à gérer une flotte, un entrepôt et une chaîne du froid en zone de crise",
        en: 'The ability to manage a fleet, a warehouse and a cold chain in a crisis zone',
      },
      {
        fr: "Attestation de formation en Logistique Humanitaire délivrée par BK-BOOST Ltd.",
        en: 'Humanitarian Logistics training certificate issued by BK-BOOST Ltd.',
      },
      {
        fr: "Vocabulaire, outils et réflexes du logisticien humanitaire professionnel",
        en: 'The vocabulary, tools and instincts of a professional humanitarian logistician',
      },
      {
        fr: 'Profil compétitif pour les postes de Log Admin et Log Manager dans les ONG',
        en: 'A competitive profile for Log Admin and Log Manager positions in NGOs',
      },
    ],
  },

  {
    id: 'supply-chain-humanitaire',
    number: '04',
    icon: 'Truck',
    badge: { fr: 'Humanitaire', en: 'Humanitarian' },
    duration: { fr: '8 semaines · 40 heures', en: '8 weeks · 40 hours' },
    level: { fr: 'Intermédiaire à Avancé', en: 'Intermediate to Advanced' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 200,
    title: {
      fr: 'Formation en Supply Chain Management Humanitaire',
      en: 'Humanitarian Supply Chain Management Training',
    },
    subtitle: {
      fr: 'Maîtriser la chaîne complète : achats, stockage, distribution et transport en zones volatiles',
      en: 'Mastering the full chain: procurement, storage, distribution and transport in volatile areas',
    },
    tagline: { fr: 'Maîtrisez la chaîne qui sauve des vies.', en: 'Master the chain that saves lives.' },
    intro: {
      fr: "La Supply Chain humanitaire est la colonne vertébrale de toute réponse efficace à une crise. Mal gérée, elle tue les projets les plus ambitieux. Bien maîtrisée, elle multiplie l'impact de chaque dollar investi par les bailleurs. Ce programme intensif — ancré sur les standards des grandes Organisations Internationales Humanitaires (ONGIs) et sur 5 ans de terrain dans 5 pays — couvre la chaîne complète : du cycle d'achat à la distribution finale, en passant par la gestion des stocks, le transport international et les systèmes ERP. Vous serez le Supply Chain Manager que les organisations rechercheront.",
      en: "Humanitarian supply chain is the backbone of any effective crisis response. Poorly managed, it kills even the most ambitious projects. Well mastered, it multiplies the impact of every dollar donors invest. This intensive program — grounded in the standards of major International Humanitarian Organizations (INGOs) and 5 years of fieldwork across 5 countries — covers the full chain: from the procurement cycle to final distribution, including stock management, international transport and ERP systems. You'll become the Supply Chain Manager organizations are looking for.",
    },
    audience: {
      fr: "Supply Chain Officers, Procurement Officers et Log Managers en poste, candidats à des postes SCM dans les ONG internationales, professionnels de la logistique souhaitant se spécialiser dans le secteur humanitaire.",
      en: 'Supply Chain Officers, Procurement Officers and Log Managers currently in post, candidates for SCM positions in international NGOs, and logistics professionals wanting to specialize in the humanitarian sector.',
    },
    objectives: [
      {
        fr: 'Maîtriser le cycle complet des achats humanitaires (RFQ, RFP, ITB, PO, conformité CPC)',
        en: 'Master the full humanitarian procurement cycle (RFQ, RFP, ITB, PO, CPC compliance)',
      },
      {
        fr: 'Gérer les flux de marchandises de l\'achat à la distribution finale',
        en: 'Manage goods flow from procurement to final distribution',
      },
      {
        fr: 'Utiliser les ERP humanitaires (UNIFIELD, SAP, LINK) pour la gestion opérationnelle',
        en: 'Use humanitarian ERPs (UNIFIELD, SAP, LINK) for operational management',
      },
      {
        fr: 'Produire des KPIs et rapports supply chain de qualité internationale',
        en: 'Produce international-quality supply chain KPIs and reports',
      },
      {
        fr: 'Intégrer les contraintes de conformité bailleurs dans chaque étape de la chaîne',
        en: 'Integrate donor compliance requirements into every step of the chain',
      },
    ],
    modules: [
      {
        number: '01',
        title: {
          fr: 'Introduction à la SCM Humanitaire — Standards et acteurs',
          en: 'Introduction to Humanitarian SCM — Standards and Stakeholders',
        },
        description: {
          fr: "Architecture de la supply chain humanitaire internationale : acteurs, flux, standards et positionnement par rapport à la chaîne de valeur globale de la réponse humanitaire.",
          en: 'The architecture of international humanitarian supply chain: stakeholders, flows, standards, and its position within the overall value chain of the humanitarian response.',
        },
        points: [
          {
            fr: 'Cartographie des acteurs : ONG, agences onusiennes, gouvernements et secteur privé',
            en: 'Mapping stakeholders: NGOs, UN agencies, governments and the private sector',
          },
          {
            fr: "Standards internationaux : Sphère, CALP, IASC et Nexus humanitaire-développement",
            en: 'International standards: Sphere, CALP, IASC and the humanitarian-development Nexus',
          },
          {
            fr: 'Positionnement du Supply Chain Manager dans la structure organisationnelle',
            en: "The Supply Chain Manager's position within the organizational structure",
          },
        ],
      },
      {
        number: '02',
        title: {
          fr: 'Cycle Complet des Achats — De la RFQ à la PO',
          en: 'The Full Procurement Cycle — From RFQ to PO',
        },
        description: {
          fr: "Maîtrise du cycle d'achat selon les standards des grandes ONG : procédures concurrentielles, seuils d'autorisation, comités d'achat et conformité anti-fraude.",
          en: 'Mastering the procurement cycle to the standards of major NGOs: competitive procedures, authorization thresholds, procurement committees and anti-fraud compliance.',
        },
        points: [
          {
            fr: 'RFQ (Request for Quotation), RFP (Request for Proposal) et ITB (Invitation to Bid)',
            en: 'RFQ (Request for Quotation), RFP (Request for Proposal) and ITB (Invitation to Bid)',
          },
          {
            fr: 'Comités de validation des achats (CPC) et matrices d\'autorisation',
            en: 'Procurement validation committees (CPC) and authorization matrices',
          },
          {
            fr: 'Gestion des Purchase Orders, bons de commande et archivage conforme',
            en: 'Managing Purchase Orders, order forms and compliant archiving',
          },
        ],
      },
      {
        number: '03',
        title: { fr: 'Gestion des Fournisseurs & Conformité', en: 'Supplier Management & Compliance' },
        description: {
          fr: "Constitution et gestion d'un portefeuille fournisseurs de qualité : qualification, évaluation, gestion des contrats-cadres et vérification d'inéligibilité.",
          en: 'Building and managing a quality supplier portfolio: qualification, evaluation, framework contract management and ineligibility screening.',
        },
        points: [
          {
            fr: 'Processus de qualification et évaluation périodique des fournisseurs',
            en: 'Supplier qualification and periodic evaluation processes',
          },
          {
            fr: "Vérification d'inéligibilité (liste OFAC, UE, ONU) et politique anti-corruption",
            en: 'Ineligibility screening (OFAC, EU, UN lists) and anti-corruption policy',
          },
          {
            fr: 'Contrats-cadres (Framework Agreements) pour les achats récurrents',
            en: 'Framework Agreements for recurring procurement',
          },
        ],
      },
      {
        number: '04',
        title: { fr: 'Gestion des Stocks & Entrepôts', en: 'Stock & Warehouse Management' },
        description: {
          fr: "Pilotage complet de l'entrepôt humanitaire : réception, contrôle qualité, stockage, gestion des périmés, inventaires et production de rapports de stock.",
          en: 'Full management of the humanitarian warehouse: receiving, quality control, storage, expiry management, inventories and stock reporting.',
        },
        points: [
          {
            fr: 'Procédures de réception et contrôle qualité des marchandises',
            en: 'Goods receiving and quality-control procedures',
          },
          {
            fr: 'Gestion des stocks par lot et des dates de péremption (FEFO)',
            en: 'Batch stock management and expiry-date tracking (FEFO)',
          },
          {
            fr: 'Inventaires physiques périodiques et réconciliation avec le système ERP',
            en: 'Periodic physical inventories and reconciliation with the ERP system',
          },
        ],
      },
      {
        number: '05',
        title: { fr: 'Distribution & Last-Mile Delivery', en: 'Distribution & Last-Mile Delivery' },
        description: {
          fr: "Planification et exécution de distributions massives en zone de crise : ciblage des bénéficiaires, gestion des files, contrôle des distributions et gestion des réclamations.",
          en: 'Planning and executing mass distributions in crisis zones: beneficiary targeting, queue management, distribution control and complaint handling.',
        },
        points: [
          {
            fr: 'Planification logistique de la distribution (entrepôt → point de distribution)',
            en: 'Distribution logistics planning (warehouse → distribution point)',
          },
          {
            fr: 'Listes de bénéficiaires, jetons de distribution et contrôle post-distribution',
            en: 'Beneficiary lists, distribution tokens and post-distribution monitoring',
          },
          {
            fr: 'Gestion des incidents de distribution et mécanismes de feedback communautaire',
            en: 'Managing distribution incidents and community feedback mechanisms',
          },
        ],
      },
      {
        number: '06',
        title: { fr: 'Transport International & Dédouanement', en: 'International Transport & Customs Clearance' },
        description: {
          fr: "Gestion des imports/exports humanitaires : Incoterms, fret aérien/maritime/terrestre, dédouanement, transit et conformité réglementaire internationale.",
          en: 'Managing humanitarian imports/exports: Incoterms, air/sea/land freight, customs clearance, transit and international regulatory compliance.',
        },
        points: [
          {
            fr: 'Incoterms 2020 et leur application dans les achats humanitaires internationaux',
            en: 'Incoterms 2020 and their application in international humanitarian procurement',
          },
          {
            fr: 'Fret aérien (cargo), maritime et terrestre : choix, coût et délai',
            en: 'Air, sea and land freight: choice, cost and lead time',
          },
          {
            fr: 'Procédures douanières : Bill of Lading, packing list, certificat d\'origine',
            en: 'Customs procedures: Bill of Lading, packing list, certificate of origin',
          },
        ],
      },
      {
        number: '07',
        title: { fr: 'Systèmes ERP Humanitaires — UNIFIELD, SAP & LINK', en: 'Humanitarian ERP Systems — UNIFIELD, SAP & LINK' },
        description: {
          fr: "Prise en main opérationnelle des ERP utilisés par les grandes ONG pour la gestion des achats, stocks, actifs et reporting financier de la supply chain.",
          en: 'Hands-on operation of the ERPs used by major NGOs for managing procurement, stock, assets and supply chain financial reporting.',
        },
        points: [
          {
            fr: 'UNIFIELD : saisie des POs, réceptions, transferts et inventaires',
            en: 'UNIFIELD: entering POs, receipts, transfers and inventories',
          },
          {
            fr: "SAP et LINK : procédures d'achat, gestion des actifs et workflow d'approbation",
            en: 'SAP and LINK: procurement procedures, asset management and approval workflow',
          },
          {
            fr: 'Extraction de données et génération de rapports SCM depuis l\'ERP',
            en: 'Extracting data and generating SCM reports from the ERP',
          },
        ],
      },
      {
        number: '08',
        title: {
          fr: 'KPIs, Reporting & Tableau de Bord Supply Chain',
          en: 'KPIs, Reporting & Supply Chain Dashboard',
        },
        description: {
          fr: "Construction et pilotage d'un tableau de bord supply chain : indicateurs de performance, analyse des données, reporting aux bailleurs et présentation aux coordinateurs.",
          en: 'Building and managing a supply chain dashboard: performance indicators, data analysis, donor reporting and presenting to coordinators.',
        },
        points: [
          {
            fr: 'KPIs clés : taux de rupture, délai d\'approvisionnement, taux de conformité achats',
            en: 'Key KPIs: stock-out rate, procurement lead time, procurement compliance rate',
          },
          {
            fr: 'Construction de tableaux de bord KPI avec Excel ou Power BI',
            en: 'Building KPI dashboards with Excel or Power BI',
          },
          {
            fr: 'Rédaction de rapports supply chain mensuels pour le siège et les bailleurs',
            en: 'Writing monthly supply chain reports for headquarters and donors',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: "Maîtrise du cycle complet d'achat humanitaire : de la RFQ à la PO jusqu'à la distribution",
        en: 'Mastery of the full humanitarian procurement cycle: from RFQ to PO through to distribution',
      },
      {
        fr: 'Compétence opérationnelle sur UNIFIELD, SAP et LINK',
        en: 'Operational proficiency in UNIFIELD, SAP and LINK',
      },
      {
        fr: 'Attestation de formation en Supply Chain Management Humanitaire',
        en: 'Humanitarian Supply Chain Management training certificate',
      },
      {
        fr: 'Profil prêt pour des postes de Supply Chain Manager dans les grandes ONG',
        en: 'A profile ready for Supply Chain Manager positions in major NGOs',
      },
      {
        fr: 'Méthodes et outils directement applicables dès la prise de poste',
        en: 'Methods and tools directly applicable from day one on the job',
      },
    ],
  },

  {
    id: 'gestion-financiere-ong',
    number: '05',
    icon: 'Landmark',
    badge: { fr: 'Finance & Conformité', en: 'Finance & Compliance' },
    duration: { fr: '6 semaines · 30 heures', en: '6 weeks · 30 hours' },
    level: { fr: 'Intermédiaire', en: 'Intermediate' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 130,
    title: {
      fr: "Formation en Gestion Financière d'une ONG Humanitaire",
      en: 'Humanitarian NGO Financial Management Training',
    },
    subtitle: {
      fr: 'Comptabilité de projet, gestion budgétaire et rapportage aux bailleurs de fonds',
      en: 'Project accounting, budget management and donor reporting',
    },
    tagline: {
      fr: 'Les chiffres doivent parler pour vous, pas contre vous.',
      en: 'The numbers should speak for you, not against you.',
    },
    intro: {
      fr: "Dans une ONG, la rigueur financière n'est pas seulement une obligation morale — c'est une question de survie. Un rapport financier défaillant peut faire perdre un financement de plusieurs millions. Cette formation — ancrée sur les standards réels des bailleurs USAID/BHA, UE/ECHO et les procédures internes des grandes Organisations Internationales Humanitaires (ONGIs) — vous donne la maîtrise complète de la comptabilité de projet, de la gestion budgétaire multi-bailleurs et de la préparation aux audits externes. Vous serez le Finance Officer ou le Finance Manager que chaque ONG s'arrache.",
      en: "In an NGO, financial rigor isn't just a moral obligation — it's a matter of survival. A flawed financial report can cost you a multi-million-dollar grant. This training — grounded in the real standards of USAID/BHA, EU/ECHO donors and the internal procedures of major International Humanitarian Organizations (INGOs) — gives you full mastery of project accounting, multi-donor budget management and preparation for external audits. You'll become the Finance Officer or Finance Manager every NGO wants.",
    },
    audience: {
      fr: "Finance Officers, Finance Managers et Admin-Finance en poste ou en recherche, comptables souhaitant intégrer le secteur humanitaire, gestionnaires de projets ayant des responsabilités budgétaires.",
      en: 'Finance Officers, Finance Managers and Admin-Finance staff currently in post or job-seeking, accountants wanting to enter the humanitarian sector, and project managers with budget responsibilities.',
    },
    objectives: [
      {
        fr: 'Maîtriser la comptabilité de projet ONG selon les standards internationaux',
        en: 'Master NGO project accounting to international standards',
      },
      {
        fr: 'Élaborer et gérer un budget multi-bailleurs avec suivi mensuel rigoureux',
        en: 'Build and manage a multi-donor budget with rigorous monthly tracking',
      },
      {
        fr: 'Préparer les rapports financiers conformes aux exigences de chaque bailleur',
        en: "Prepare financial reports compliant with each donor's requirements",
      },
      {
        fr: 'Gérer la trésorerie, les caisses et les avances sur terrain',
        en: 'Manage cash flow, petty cash and field advances',
      },
      {
        fr: 'Préparer et réussir les audits financiers externes',
        en: 'Prepare for and pass external financial audits',
      },
    ],
    modules: [
      {
        number: '01',
        title: {
          fr: 'Fondamentaux de la Comptabilité de Projet ONG',
          en: 'Fundamentals of NGO Project Accounting',
        },
        description: {
          fr: "Bases de la comptabilité humanitaire : plan comptable ONG, comptabilité d'engagement vs de caisse, séparation des charges par projet et par bailleur.",
          en: 'The basics of humanitarian accounting: NGO chart of accounts, accrual vs. cash accounting, and separating costs by project and by donor.',
        },
        points: [
          {
            fr: 'Plan comptable ONG et codification par projet, bailleur et rubrique',
            en: 'NGO chart of accounts and coding by project, donor and budget line',
          },
          {
            fr: "Comptabilité d'engagement et comptabilité de caisse : différences et application",
            en: 'Accrual accounting and cash accounting: differences and application',
          },
          {
            fr: 'Principes de séparation des charges et d\'allocation des coûts communs',
            en: 'Principles of cost separation and shared-cost allocation',
          },
        ],
      },
      {
        number: '02',
        title: {
          fr: 'Élaboration & Gestion Budgétaire Multi-Bailleurs',
          en: 'Multi-Donor Budget Planning & Management',
        },
        description: {
          fr: "Construction d'un budget de projet réaliste et défendable : méthodes de budgétisation, gestion des lignes budgétaires, suivi des dépenses et gestion des écarts.",
          en: 'Building a realistic, defensible project budget: budgeting methods, budget-line management, expense tracking and variance management.',
        },
        points: [
          {
            fr: 'Méthodes de budgétisation : activité par activité, coût unitaire et forfait',
            en: 'Budgeting methods: activity-by-activity, unit cost and lump sum',
          },
          {
            fr: 'Tableau de suivi budgétaire (BFU — Budget Follow-Up) mensuel',
            en: 'Monthly budget-tracking table (BFU — Budget Follow-Up)',
          },
          {
            fr: 'Gestion des écarts, virements de lignes budgétaires et avenants',
            en: 'Managing variances, budget-line transfers and amendments',
          },
        ],
      },
      {
        number: '03',
        title: { fr: 'Trésorerie, Caisses & Avances Terrain', en: 'Cash Flow, Petty Cash & Field Advances' },
        description: {
          fr: "Gestion opérationnelle de la trésorerie de terrain : politiques de caisse, coffres-forts, avances aux équipes, remboursements et rapprochements quotidiens.",
          en: 'Operational management of field cash: cash-box policies, safes, staff advances, reimbursements and daily reconciliations.',
        },
        points: [
          {
            fr: 'Politiques de caisse et plafonds par niveau de responsabilité',
            en: 'Cash-box policies and ceilings by level of responsibility',
          },
          {
            fr: "Procédures d'avance et de remboursement avec justificatifs",
            en: 'Advance and reimbursement procedures with supporting documents',
          },
          {
            fr: 'Rapprochements bancaires et de caisse : quotidien, hebdomadaire, mensuel',
            en: 'Bank and cash reconciliations: daily, weekly, monthly',
          },
        ],
      },
      {
        number: '04',
        title: { fr: 'Gestion Multi-Devises & Opérations Bancaires', en: 'Multi-Currency Management & Banking Operations' },
        description: {
          fr: "Navigation dans les complexités multi-devises des ONG internationales : ouverture de comptes, gestion des signataires, transferts internationaux et pertes/gains de change.",
          en: 'Navigating the multi-currency complexities of international NGOs: opening accounts, managing signatories, international transfers and foreign-exchange gains/losses.',
        },
        points: [
          {
            fr: 'Ouverture et gestion de comptes bancaires en devises locales et USD/EUR',
            en: 'Opening and managing bank accounts in local currency and USD/EUR',
          },
          {
            fr: 'Gestion des signataires et des procurations bancaires',
            en: 'Managing signatories and banking powers of attorney',
          },
          {
            fr: 'Pertes et gains de change : enregistrement comptable et impact budgétaire',
            en: 'Foreign-exchange gains and losses: accounting entries and budget impact',
          },
        ],
      },
      {
        number: '05',
        title: { fr: 'Rapports Financiers pour Bailleurs', en: 'Donor Financial Reports' },
        description: {
          fr: "Production de rapports financiers conformes aux exigences spécifiques des grands bailleurs : USAID/BHA, UE/ECHO, DFID et bailleurs privés — formats, délais et justificatifs requis.",
          en: "Producing financial reports compliant with the specific requirements of major donors: USAID/BHA, EU/ECHO, DFID and private donors — formats, deadlines and required documentation.",
        },
        points: [
          {
            fr: 'Formats de rapportage USAID/BHA, UE/ECHO et bailleurs onusiens',
            en: 'USAID/BHA, EU/ECHO and UN donor reporting formats',
          },
          {
            fr: 'Justification des dépenses : pièces comptables, contrats et processus d\'achat',
            en: 'Justifying expenses: accounting records, contracts and procurement processes',
          },
          {
            fr: 'Réconciliation entre rapports financiers et rapports programmatiques',
            en: 'Reconciling financial reports with program reports',
          },
        ],
      },
      {
        number: '06',
        title: { fr: 'Préparation & Réussite des Audits Financiers', en: 'Preparing for and Passing Financial Audits' },
        description: {
          fr: "Préparer et traverser sereinement un audit externe : documentation requise, organisation des pièces comptables, réponses aux auditeurs et gestion des recommandations.",
          en: 'Confidently preparing for and getting through an external audit: required documentation, organizing accounting records, responding to auditors and managing recommendations.',
        },
        points: [
          {
            fr: "Dossier d'audit : liste des documents requis et organisation des archives",
            en: 'Audit file: list of required documents and archive organization',
          },
          {
            fr: 'Interaction professionnelle avec les auditeurs externes',
            en: 'Professional interaction with external auditors',
          },
          {
            fr: "Plans d'action correctifs suite aux recommandations d'audit",
            en: 'Corrective action plans following audit recommendations',
          },
        ],
      },
      {
        number: '07',
        title: {
          fr: 'Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé',
          en: 'Financial Management Systems — SAGA, LINK & Advanced Excel',
        },
        description: {
          fr: "Prise en main des logiciels comptables utilisés par les ONG : SAGA, LINK, et maîtrise avancée d'Excel pour le suivi budgétaire et le reporting.",
          en: 'Hands-on use of the accounting software used by NGOs: SAGA, LINK, and advanced Excel skills for budget tracking and reporting.',
        },
        points: [
          {
            fr: 'SAGA : saisie comptable, clôtures mensuelles et édition des journaux',
            en: 'SAGA: accounting entries, monthly closings and journal printouts',
          },
          {
            fr: 'LINK : gestion financière intégrée des projets et extraction des rapports',
            en: 'LINK: integrated project financial management and report extraction',
          },
          {
            fr: 'Excel avancé : tableaux de bord financiers, TCD et graphiques de suivi budgétaire',
            en: 'Advanced Excel: financial dashboards, pivot tables and budget-tracking charts',
          },
        ],
      },
      {
        number: '08',
        title: { fr: 'Fraude, Corruption & Conformité Financière', en: 'Fraud, Corruption & Financial Compliance' },
        description: {
          fr: "Prévention et détection de la fraude financière dans les ONG : politiques anti-corruption, signalement, vérification d'inéligibilité des partenaires et protection des lanceurs d'alerte.",
          en: "Preventing and detecting financial fraud in NGOs: anti-corruption policies, reporting, partner ineligibility screening and whistleblower protection.",
        },
        points: [
          {
            fr: 'Identification des red flags de fraude financière et détournement',
            en: 'Identifying red flags of financial fraud and embezzlement',
          },
          {
            fr: 'Politique anti-corruption et mécanismes de signalement sécurisé',
            en: 'Anti-corruption policy and secure reporting mechanisms',
          },
          {
            fr: "Vérification d'inéligibilité des partenaires et fournisseurs (OFAC, UE, ONU)",
            en: 'Ineligibility screening of partners and suppliers (OFAC, EU, UN)',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: 'Maîtrise complète de la comptabilité de projet ONG et du cycle budgétaire',
        en: 'Full mastery of NGO project accounting and the budget cycle',
      },
      {
        fr: 'Capacité à produire des rapports financiers conformes aux exigences de chaque bailleur',
        en: "The ability to produce financial reports compliant with each donor's requirements",
      },
      {
        fr: "Attestation de formation en Gestion Financière ONG délivrée par BK-BOOST Ltd.",
        en: 'NGO Financial Management training certificate issued by BK-BOOST Ltd.',
      },
      {
        fr: "Aptitude à traverser un audit externe avec confiance et professionnalisme",
        en: 'The ability to get through an external audit with confidence and professionalism',
      },
      {
        fr: 'Profil compétitif pour les postes de Finance Officer dans les ONG internationales',
        en: 'A competitive profile for Finance Officer positions in international NGOs',
      },
    ],
  },

  {
    id: 'gestion-rh-ong',
    number: '06',
    icon: 'Users',
    badge: { fr: 'Ressources Humaines', en: 'Human Resources' },
    duration: { fr: '6 semaines · 30 heures', en: '6 weeks · 30 hours' },
    level: { fr: 'Tous niveaux', en: 'All levels' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 120,
    title: {
      fr: "Formation en Gestion des Ressources Humaines d'une ONG Humanitaire",
      en: 'Humanitarian NGO Human Resources Management Training',
    },
    subtitle: {
      fr: 'Recruter, gérer et fidéliser des équipes nationales et internationales en contexte de crise',
      en: 'Recruiting, managing and retaining national and international teams in crisis contexts',
    },
    tagline: {
      fr: "Des équipes soudées en contexte de crise : votre vrai avantage concurrentiel.",
      en: 'Cohesive teams in crisis contexts: your true competitive edge.',
    },
    intro: {
      fr: "Dans une ONG humanitaire, la qualité de votre équipe définit la qualité de votre réponse. Un HR Officer incompétent peut paralyser un projet de 2 millions de dollars. Un HR Manager exceptionnel peut transformer une équipe démotivée en force de frappe efficace. Cette formation vous donne les outils RH des grandes organisations humanitaires — de la politique de recrutement international aux mécanismes de protection du personnel en zone de crise — avec une immersion dans le droit du travail humanitaire réel.",
      en: "In a humanitarian NGO, the quality of your team defines the quality of your response. An incompetent HR Officer can paralyze a $2 million project. An outstanding HR Manager can turn a demotivated team into an effective force. This training gives you the HR tools of major humanitarian organizations — from international recruitment policy to staff-protection mechanisms in crisis zones — with a hands-on grounding in real humanitarian labor law.",
    },
    audience: {
      fr: "HR Officers, Admin-RH et HR Managers en poste ou en candidature, coordinateurs de terrain ayant des responsabilités RH, managers souhaitant professionnaliser la gestion de leurs équipes.",
      en: 'HR Officers, Admin-HR staff and HR Managers currently in post or applying, field coordinators with HR responsibilities, and managers wanting to professionalize how they manage their teams.',
    },
    objectives: [
      {
        fr: 'Maîtriser le cycle RH complet dans les organisations humanitaires (recrutement → sortie)',
        en: 'Master the full HR cycle in humanitarian organizations (recruitment → exit)',
      },
      {
        fr: 'Gérer les contrats nationaux et internationaux selon les standards humanitaires',
        en: 'Manage national and international contracts to humanitarian standards',
      },
      {
        fr: 'Construire et appliquer des politiques RH conformes au droit du travail local',
        en: 'Build and apply HR policies compliant with local labor law',
      },
      {
        fr: 'Gérer les situations de crise RH : conflits, burnout, protection du personnel',
        en: 'Manage HR crisis situations: conflicts, burnout, staff protection',
      },
      {
        fr: 'Produire des rapports RH de qualité pour les sièges et les bailleurs',
        en: 'Produce quality HR reports for headquarters and donors',
      },
    ],
    modules: [
      {
        number: '01',
        title: { fr: 'Structure Organisationnelle des ONG & Rôle des RH', en: 'NGO Organizational Structure & the Role of HR' },
        description: {
          fr: "Positionnement de la fonction RH dans la structure d'une ONG humanitaire : liens hiérarchiques, responsabilités, interfaces avec la finance, la logistique et les programmes.",
          en: "Positioning the HR function within a humanitarian NGO's structure: reporting lines, responsibilities, and interfaces with finance, logistics and programs.",
        },
        points: [
          {
            fr: 'Organigrammes des ONG : structure terrain vs siège et rôles clés',
            en: 'NGO org charts: field vs. headquarters structure and key roles',
          },
          {
            fr: 'Responsabilités RH : du recrutement à la séparation du personnel',
            en: 'HR responsibilities: from recruitment to staff separation',
          },
          {
            fr: 'Interface RH-Finance pour la gestion de la paie et des avantages sociaux',
            en: 'HR-Finance interface for payroll and benefits management',
          },
        ],
      },
      {
        number: '02',
        title: { fr: 'Recrutement National & International', en: 'National & International Recruitment' },
        description: {
          fr: "Processus de recrutement complet : définition de poste, publication, shortlisting, tests techniques, entretiens structurés, vérification des références et offre de contrat.",
          en: 'The full recruitment process: job definition, posting, shortlisting, technical tests, structured interviews, reference checks and job offers.',
        },
        points: [
          {
            fr: 'Rédaction de descriptions de poste compétitives et inclusives',
            en: 'Writing competitive, inclusive job descriptions',
          },
          {
            fr: "Grilles d'entretien structuré et méthodes d'évaluation objective",
            en: 'Structured interview grids and objective evaluation methods',
          },
          {
            fr: 'Vérification des références, antécédents et protection contre la fraude documentaire',
            en: 'Reference and background checks and protection against document fraud',
          },
        ],
      },
      {
        number: '03',
        title: {
          fr: 'Contrats de Travail & Administration du Personnel',
          en: 'Employment Contracts & Personnel Administration',
        },
        description: {
          fr: "Gestion administrative du personnel : types de contrats, dossiers individuels, suivi des congés, absences, avertissements et procédures disciplinaires.",
          en: 'Administrative staff management: contract types, individual files, tracking leave and absences, warnings and disciplinary procedures.',
        },
        points: [
          {
            fr: 'Contrats nationaux (CDD, CDI) et contrats d\'expatriation : spécificités et risques',
            en: 'National contracts (fixed-term, permanent) and expatriation contracts: specifics and risks',
          },
          {
            fr: 'Dossier individuel du personnel : documents obligatoires et archivage sécurisé',
            en: 'Individual personnel files: mandatory documents and secure archiving',
          },
          {
            fr: 'Procédures disciplinaires : avertissements, mises en demeure et licenciement légal',
            en: 'Disciplinary procedures: warnings, formal notices and lawful termination',
          },
        ],
      },
      {
        number: '04',
        title: { fr: 'Politique de Rémunération & Avantages Sociaux', en: 'Compensation Policy & Employee Benefits' },
        description: {
          fr: "Construction d'une grille salariale équitable et compétitive : benchmarking, coefficients de poste, primes terrain, indemnités et avantages sociaux locaux et internationaux.",
          en: 'Building a fair, competitive salary grid: benchmarking, job coefficients, field allowances, and local and international benefits.',
        },
        points: [
          {
            fr: 'Benchmarking salarial : grilles ONU, ONG et secteur public local',
            en: 'Salary benchmarking: UN, NGO and local public-sector scales',
          },
          {
            fr: 'Calcul des primes terrain, indemnités de risque et hardship allowances',
            en: 'Calculating field bonuses, risk allowances and hardship allowances',
          },
          {
            fr: 'CNSS, cotisations sociales et obligations légales de l\'employeur',
            en: "Social security contributions and the employer's legal obligations",
          },
        ],
      },
      {
        number: '05',
        title: {
          fr: 'Évaluation des Performances & Développement des Compétences',
          en: 'Performance Evaluation & Skills Development',
        },
        description: {
          fr: "Systèmes d'évaluation professionnelle des performances : entretiens annuels, plans de développement individuel, formation continue et gestion des hauts potentiels.",
          en: 'Professional performance-evaluation systems: annual reviews, individual development plans, ongoing training and high-potential management.',
        },
        points: [
          {
            fr: 'Grilles d\'évaluation des performances basées sur les compétences et les résultats',
            en: 'Performance evaluation grids based on skills and results',
          },
          {
            fr: 'Plans de développement individuel (PDI) et plans de succession',
            en: 'Individual development plans (IDPs) and succession plans',
          },
          {
            fr: 'Gestion des formations internes et accès aux ressources de développement',
            en: 'Managing internal training and access to development resources',
          },
        ],
      },
      {
        number: '06',
        title: {
          fr: 'Droit du Travail Humanitaire — RDC & Droit International',
          en: 'Humanitarian Labor Law — DRC & International Law',
        },
        description: {
          fr: "Maîtrise des obligations légales de l'employeur humanitaire : Code du Travail RDC, accords internationaux, statuts du personnel expatrié et mécanismes de résolution des conflits.",
          en: "Mastering a humanitarian employer's legal obligations: DRC Labor Code, international agreements, expatriate staff status and conflict-resolution mechanisms.",
        },
        points: [
          {
            fr: 'Code du Travail de la RDC : droits des travailleurs, congés, heures supplémentaires',
            en: 'DRC Labor Code: workers\' rights, leave, overtime',
          },
          {
            fr: 'Statut du personnel expatrié : privilèges, immunités et obligations fiscales',
            en: 'Expatriate staff status: privileges, immunities and tax obligations',
          },
          {
            fr: 'Résolution des conflits du travail : médiation, inspection du travail et tribunal',
            en: 'Labor dispute resolution: mediation, labor inspection and the courts',
          },
        ],
      },
      {
        number: '07',
        title: { fr: 'Protection, Bien-Être & Prévention du Burnout', en: 'Protection, Well-Being & Burnout Prevention' },
        description: {
          fr: "Politiques de protection du personnel en contexte humanitaire : Code de Conduite, prévention du harcèlement, signalement PSEA, gestion du stress traumatique et soutien psychosocial.",
          en: 'Staff-protection policies in humanitarian contexts: Code of Conduct, harassment prevention, PSEA reporting, managing traumatic stress and psychosocial support.',
        },
        points: [
          {
            fr: "Code de Conduite humanitaire : prévention des abus et exploitation sexuelle (PSEA)",
            en: 'Humanitarian Code of Conduct: preventing sexual exploitation and abuse (PSEA)',
          },
          {
            fr: 'Identification précoce du burnout et mécanismes de soutien psychosocial',
            en: 'Early burnout identification and psychosocial support mechanisms',
          },
          {
            fr: "Politiques de protection des lanceurs d'alerte et canaux de signalement sécurisé",
            en: 'Whistleblower protection policies and secure reporting channels',
          },
        ],
      },
      {
        number: '08',
        title: {
          fr: 'Gestion des Conflits & Médiation en Équipe Multiculturelle',
          en: 'Conflict Management & Mediation in Multicultural Teams',
        },
        description: {
          fr: "Techniques de gestion des conflits interpersonnels et interculturels en contexte humanitaire : médiation, arbitrage et construction d'une culture d'équipe saine et performante.",
          en: 'Techniques for managing interpersonal and cross-cultural conflict in humanitarian settings: mediation, arbitration and building a healthy, high-performing team culture.',
        },
        points: [
          {
            fr: 'Identification et prévention précoce des conflits interpersonnels',
            en: 'Early identification and prevention of interpersonal conflict',
          },
          {
            fr: 'Médiation et facilitation de dialogue en équipes multiculturelles',
            en: 'Mediation and dialogue facilitation in multicultural teams',
          },
          {
            fr: "Construction d'une culture organisationnelle saine : valeurs, rituels et leadership",
            en: 'Building a healthy organizational culture: values, rituals and leadership',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: 'Maîtrise du cycle RH complet dans les organisations humanitaires',
        en: 'Mastery of the full HR cycle in humanitarian organizations',
      },
      {
        fr: 'Capacité à gérer des équipes nationales et internationales avec rigueur légale',
        en: 'The ability to manage national and international teams with legal rigor',
      },
      {
        fr: 'Attestation de formation en Gestion des Ressources Humaines ONG',
        en: 'NGO Human Resources Management training certificate',
      },
      {
        fr: 'Aptitude à construire des politiques RH conformes aux standards humanitaires',
        en: 'The ability to build HR policies compliant with humanitarian standards',
      },
      {
        fr: 'Profil compétitif pour les postes de HR Officer dans les grandes ONG internationales',
        en: 'A competitive profile for HR Officer positions in major international NGOs',
      },
    ],
  },

  {
    id: 'audit-transparence-conformite',
    number: '07',
    icon: 'ShieldCheck',
    badge: { fr: 'Audit & Conformité', en: 'Audit & Compliance' },
    duration: { fr: '6 semaines · 30 heures', en: '6 weeks · 30 hours' },
    level: { fr: 'Intermédiaire à Avancé', en: 'Intermediate to Advanced' },
    format: { fr: 'En ligne & Présentiel', en: 'Online & in-person' },
    priceUsd: 145,
    title: {
      fr: 'Formation en Audit, Transparence et Conformité des ONGs',
      en: 'NGO Audit, Transparency and Compliance Training',
    },
    subtitle: {
      fr: 'Audits internes, prévention de la fraude et conformité bailleurs pour une organisation irréprochable',
      en: 'Internal audits, fraud prevention and donor compliance for an impeccable organization',
    },
    tagline: {
      fr: "La conformité n'est pas une contrainte. C'est votre avantage concurrentiel.",
      en: "Compliance isn't a constraint. It's your competitive edge.",
    },
    intro: {
      fr: "Une organisation non-gouvernementale qui ne peut pas prouver la bonne utilisation de ses fonds est une organisation morte. Les bailleurs comme USAID/BHA, la Commission Européenne et l'ONU exigent une transparence totale — et la sanctionnent au moindre écart. Cette formation — construite sur l'expérience réelle d'audits internes chez ACTED avec une réduction de 87,2% du risque de non-conformité en 3 mois — vous donne les méthodes, les outils et les réflexes d'un auditeur interne de haut niveau. Parce que chaque organisation mérite une seconde chance, mais aucun bailleur n'en accorde une.",
      en: "A non-governmental organization that cannot prove the proper use of its funds is a dead organization. Donors such as USAID/BHA, the European Commission and the UN demand total transparency — and penalize the slightest deviation. This training — built on real internal-audit experience at ACTED that delivered an 87.2% reduction in non-compliance risk in 3 months — gives you the methods, tools and instincts of a high-level internal auditor. Because every organization deserves a second chance, but no donor grants one.",
    },
    audience: {
      fr: "Auditeurs internes, Finance Managers, Area Managers et Country Directors souhaitant renforcer les systèmes de contrôle, consultants en conformité ONG, toute personne responsable de la préparation aux audits externes.",
      en: 'Internal auditors, Finance Managers, Area Managers and Country Directors wanting to strengthen internal control systems, NGO compliance consultants, and anyone responsible for preparing for external audits.',
    },
    objectives: [
      {
        fr: "Maîtriser les techniques d'audit interne adapté au contexte humanitaire",
        en: 'Master internal audit techniques adapted to the humanitarian context',
      },
      {
        fr: "Identifier et corriger les failles de contrôle interne avant qu'elles coûtent des millions",
        en: 'Identify and fix internal-control gaps before they cost millions',
      },
      {
        fr: "Préparer un dossier d'audit externe solide, documenté et convaincant",
        en: 'Prepare a solid, well-documented and convincing external audit file',
      },
      {
        fr: 'Prévenir et détecter la fraude, la corruption et les conflits d\'intérêt',
        en: 'Prevent and detect fraud, corruption and conflicts of interest',
      },
      {
        fr: "Produire des rapports d'audit professionnels avec des plans d'action réalistes",
        en: 'Produce professional audit reports with realistic action plans',
      },
    ],
    modules: [
      {
        number: '01',
        title: { fr: "Fondamentaux de l'Audit Interne ONG", en: 'Fundamentals of NGO Internal Audit' },
        description: {
          fr: "Architecture de l'audit interne humanitaire : définition, objectifs, indépendance de l'auditeur, cadre de référence (IIA, COSO) et positionnement dans l'organisation.",
          en: "The architecture of humanitarian internal audit: definition, objectives, auditor independence, reference frameworks (IIA, COSO) and its position within the organization.",
        },
        points: [
          {
            fr: "Cadre de référence international de l'audit interne (IIA Standards)",
            en: 'The international internal audit reference framework (IIA Standards)',
          },
          {
            fr: 'COSO : composantes du contrôle interne et leur application en ONG',
            en: 'COSO: the components of internal control and their application in NGOs',
          },
          {
            fr: "Indépendance, objectivité et code d'éthique de l'auditeur interne",
            en: "Independence, objectivity and the internal auditor's code of ethics",
          },
        ],
      },
      {
        number: '02',
        title: {
          fr: "Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation",
          en: 'Internal Controls — Segregation of Duties & Authorization Matrices',
        },
        description: {
          fr: "Conception et évaluation des contrôles internes essentiels : séparation des tâches, matrices d'autorisation et délégation de pouvoir, lettres d'autorisation et de révocation.",
          en: 'Designing and evaluating essential internal controls: segregation of duties, authorization and delegation-of-authority matrices, and authorization/revocation letters.',
        },
        points: [
          {
            fr: 'Séparation des tâches : principes et application dans Finance, Achats et RH',
            en: 'Segregation of duties: principles and application in Finance, Procurement and HR',
          },
          {
            fr: "Construction d'une matrice d'autorisation par niveau et par opération",
            en: 'Building an authorization matrix by level and by transaction type',
          },
          {
            fr: 'Lettres d\'autorisation et de révocation : rédaction et archivage',
            en: 'Authorization and revocation letters: drafting and archiving',
          },
        ],
      },
      {
        number: '03',
        title: { fr: 'Audit de la Supply Chain & des Achats', en: 'Supply Chain & Procurement Audit' },
        description: {
          fr: "Audit spécialisé du cycle d'achat et de la supply chain : vérification des procédures, contrôle des seuils, détection des collusions fournisseurs et analyse des écarts d'inventaire.",
          en: 'Specialized audit of the procurement cycle and supply chain: verifying procedures, threshold controls, detecting supplier collusion and analyzing inventory discrepancies.',
        },
        points: [
          {
            fr: "Vérification du respect des seuils et procédures d'achat (RFQ, RFP, ITB)",
            en: 'Verifying compliance with procurement thresholds and procedures (RFQ, RFP, ITB)',
          },
          {
            fr: 'Détection de la collusion fournisseurs : red flags et techniques d\'analyse',
            en: 'Detecting supplier collusion: red flags and analysis techniques',
          },
          {
            fr: 'Audit des stocks : écarts d\'inventaire, produits périmés et gestion FEFO',
            en: 'Stock audits: inventory discrepancies, expired goods and FEFO management',
          },
        ],
      },
      {
        number: '04',
        title: { fr: 'Audit Financier & Comptable', en: 'Financial & Accounting Audit' },
        description: {
          fr: "Audit des opérations financières et comptables : contrôle des pièces justificatives, rapprochements bancaires, gestion des avances et conformité des charges aux lignes budgétaires.",
          en: 'Auditing financial and accounting operations: verifying supporting documents, bank reconciliations, advance management and expense eligibility against budget lines.',
        },
        points: [
          {
            fr: 'Vérification des pièces comptables : complétude, légitimité et conformité',
            en: 'Verifying accounting records: completeness, legitimacy and compliance',
          },
          {
            fr: 'Rapprochements bancaires et détection des irrégularités de caisse',
            en: 'Bank reconciliations and detecting cash irregularities',
          },
          {
            fr: "Contrôle de l'éligibilité des dépenses aux lignes budgétaires des bailleurs",
            en: 'Checking expense eligibility against donor budget lines',
          },
        ],
      },
      {
        number: '05',
        title: { fr: 'Audit des RH & Programmes', en: 'HR & Program Audit' },
        description: {
          fr: "Audit transversal des opérations RH et programmatiques : contrôle des contrats, des présences, de la paie et de la conformité des activités aux objectifs du projet.",
          en: 'Cross-functional audit of HR and program operations: checking contracts, attendance, payroll, and the compliance of activities with project objectives.',
        },
        points: [
          {
            fr: 'Audit de la paie : contrôle des salaires, cotisations et indemnités',
            en: 'Payroll audit: checking salaries, contributions and allowances',
          },
          {
            fr: 'Vérification des présences, congés et gestion des heures supplémentaires',
            en: 'Verifying attendance, leave and overtime management',
          },
          {
            fr: 'Contrôle programmatique : activités réalisées vs planifiées, ciblage des bénéficiaires',
            en: 'Program control: activities completed vs. planned, beneficiary targeting',
          },
        ],
      },
      {
        number: '06',
        title: { fr: 'Prévention de la Fraude & Politique Anti-Corruption', en: 'Fraud Prevention & Anti-Corruption Policy' },
        description: {
          fr: "Détection et prévention de la fraude financière, de la corruption et des conflits d'intérêt dans les ONG : red flags, mécanismes de signalement et cultures organisationnelles à risque.",
          en: 'Detecting and preventing financial fraud, corruption and conflicts of interest in NGOs: red flags, reporting mechanisms and at-risk organizational cultures.',
        },
        points: [
          {
            fr: 'Typologies de fraude dans les ONG : détournements, fausses factures, ghost workers',
            en: 'Types of NGO fraud: embezzlement, fake invoices, ghost workers',
          },
          {
            fr: "Construction d'un système de signalement sécurisé et protégé",
            en: 'Building a secure, protected reporting system',
          },
          {
            fr: 'Culture organisationnelle et tone-at-the-top dans la prévention de la fraude',
            en: 'Organizational culture and tone-at-the-top in fraud prevention',
          },
        ],
      },
      {
        number: '07',
        title: {
          fr: 'Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens',
          en: 'Donor Compliance — USAID/BHA, EU, ECHO & UN Donors',
        },
        description: {
          fr: "Exigences spécifiques de conformité des grands bailleurs de fonds : obligations contractuelles, reporting, restrictions et sanctions en cas de non-conformité.",
          en: 'The specific compliance requirements of major donors: contractual obligations, reporting, restrictions and penalties for non-compliance.',
        },
        points: [
          {
            fr: 'CFR 2 (USAID) et UE PRAG : règles de passation des marchés et éligibilité',
            en: 'CFR 2 (USAID) and EU PRAG: procurement rules and eligibility',
          },
          {
            fr: 'Règles USAID/BHA sur les dépenses d\'administration et les coûts indirects',
            en: 'USAID/BHA rules on administrative expenses and indirect costs',
          },
          {
            fr: 'Obligations de reporting et conséquences juridiques de la non-conformité bailleur',
            en: 'Reporting obligations and the legal consequences of donor non-compliance',
          },
        ],
      },
      {
        number: '08',
        title: { fr: "Rédaction de Rapports d'Audit Professionnels", en: 'Writing Professional Audit Reports' },
        description: {
          fr: "Produire des rapports d'audit clairs, structurés et convaincants : constats, critères, causes, effets et recommandations priorisées — le rapport qui change les choses.",
          en: 'Producing clear, structured and convincing audit reports: findings, criteria, causes, effects and prioritized recommendations — the report that changes things.',
        },
        points: [
          {
            fr: "Structure d'un rapport d'audit interne : résumé exécutif, constats et recommandations",
            en: 'The structure of an internal audit report: executive summary, findings and recommendations',
          },
          {
            fr: 'Formulation de constats CCCE (Constat, Critère, Cause, Effet)',
            en: 'Formulating CCCE findings (Condition, Criteria, Cause, Effect)',
          },
          {
            fr: "Plans d'action correctifs : rédaction, assignation et suivi des recommandations",
            en: 'Corrective action plans: drafting, assigning and tracking recommendations',
          },
        ],
      },
      {
        number: '09',
        title: {
          fr: "Préparation aux Audits Externes & Interaction avec les Auditeurs",
          en: 'Preparing for External Audits & Interacting with Auditors',
        },
        description: {
          fr: "Préparer et piloter une mission d'audit externe : constitution du dossier, interaction professionnelle avec les auditeurs, gestion des points de divergence et réponses au rapport final.",
          en: 'Preparing for and leading an external audit mission: building the audit file, professional interaction with auditors, managing points of disagreement and responding to the final report.',
        },
        points: [
          {
            fr: "Check-list de préparation à l'audit externe par domaine (Finance, SCM, RH, Prog.)",
            en: 'External audit preparation checklist by area (Finance, SCM, HR, Programs)',
          },
          {
            fr: "Communication professionnelle avec l'équipe d'audit externe",
            en: 'Professional communication with the external audit team',
          },
          {
            fr: 'Gestion des divergences : comment défendre ses positions avec des preuves',
            en: 'Managing disagreements: how to defend your position with evidence',
          },
        ],
      },
    ],
    outcomes: [
      {
        fr: 'Capacité à conduire un audit interne complet dans une ONG humanitaire',
        en: 'The ability to conduct a complete internal audit in a humanitarian NGO',
      },
      {
        fr: 'Maîtrise des exigences de conformité des grands bailleurs (USAID, UE, ONU)',
        en: 'Mastery of the compliance requirements of major donors (USAID, EU, UN)',
      },
      {
        fr: "Attestation de formation en Audit Interne et Conformité délivrée par BK-BOOST Ltd.",
        en: 'Internal Audit and Compliance training certificate issued by BK-BOOST Ltd.',
      },
      {
        fr: "Aptitude à rédiger des rapports d'audit professionnels avec plans d'action",
        en: 'The ability to write professional audit reports with action plans',
      },
      {
        fr: "Profil expert pour les postes d'Auditeur Interne, Area Manager et Compliance Officer",
        en: 'An expert profile for Internal Auditor, Area Manager and Compliance Officer positions',
      },
    ],
  },
]

export const formationById = (id) => formations.find((f) => f.id === id)
