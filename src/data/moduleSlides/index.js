import module01 from './intelligence-artificielle/module-01-introduction-ia-generatives'
import module02 from './intelligence-artificielle/module-02-chatgpt-productivite-automatisation'
import module03 from './intelligence-artificielle/module-03-claude-raisonnement-analyse-redaction'
import module04 from './intelligence-artificielle/module-04-microsoft-copilot-office365'
import module05 from './intelligence-artificielle/module-05-perplexity-recherche-veille'
import module06 from './intelligence-artificielle/module-06-google-gemini-multimodalite'
import module07 from './intelligence-artificielle/module-07-prompt-engineering-avance'
import module08 from './intelligence-artificielle/module-08-automatisation-agents-ia'
import module09 from './intelligence-artificielle/module-09-ia-data-analyse'
import module10 from './intelligence-artificielle/module-10-developpement-outils-techniques'
import module11 from './intelligence-artificielle/module-11-marketing-communication'
import module12 from './intelligence-artificielle/module-12-business-model-plan'
import module13 from './intelligence-artificielle/module-13-creation-sites-web-solutions-numeriques'
import module14 from './intelligence-artificielle/module-14-big-data-analysis-claude-code'
import module15 from './intelligence-artificielle/module-15-atelier-pratique-mini-projet'

// Registre des modules disponibles en format "diapositives". Formation
// pilote uniquement (Maîtrise de l'IA) — toute formation/slug absent d'ici
// renvoie `null`, et ModuleDetailPage retombe sur l'ancien rendu markdown
// (aucun changement pour les 6 autres formations).
const REGISTRY = {
  'intelligence-artificielle': {
    'module-01-introduction-ia-generatives': module01,
    'module-02-chatgpt-productivite-automatisation': module02,
    'module-03-claude-raisonnement-analyse-redaction': module03,
    'module-04-microsoft-copilot-office365': module04,
    'module-05-perplexity-recherche-veille': module05,
    'module-06-google-gemini-multimodalite': module06,
    'module-07-prompt-engineering-avance': module07,
    'module-08-automatisation-agents-ia': module08,
    'module-09-ia-data-analyse': module09,
    'module-10-developpement-outils-techniques': module10,
    'module-11-marketing-communication': module11,
    'module-12-business-model-plan': module12,
    'module-13-creation-sites-web-solutions-numeriques': module13,
    'module-14-big-data-analysis-claude-code': module14,
    'module-15-atelier-pratique-mini-projet': module15,
  },
}

export function moduleSlidesFor(formationId, moduleSlug) {
  return REGISTRY[formationId]?.[moduleSlug] ?? null
}
