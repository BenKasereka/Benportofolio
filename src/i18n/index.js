import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonFr from './locales/fr/common.json'
import commonEn from './locales/en/common.json'
import heroFr from './locales/fr/hero.json'
import heroEn from './locales/en/hero.json'
import trustedByFr from './locales/fr/trustedBy.json'
import trustedByEn from './locales/en/trustedBy.json'
import servicesHubFr from './locales/fr/servicesHub.json'
import servicesHubEn from './locales/en/servicesHub.json'
import humanitarianGalleryFr from './locales/fr/humanitarianGallery.json'
import humanitarianGalleryEn from './locales/en/humanitarianGallery.json'
import auditFr from './locales/fr/audit.json'
import auditEn from './locales/en/audit.json'
import dataFr from './locales/fr/data.json'
import dataEn from './locales/en/data.json'
import parcoursFr from './locales/fr/parcours.json'
import parcoursEn from './locales/en/parcours.json'
import portfolioFr from './locales/fr/portfolio.json'
import portfolioEn from './locales/en/portfolio.json'
import bkBoostFr from './locales/fr/bkBoost.json'
import bkBoostEn from './locales/en/bkBoost.json'
import pricingFr from './locales/fr/pricing.json'
import pricingEn from './locales/en/pricing.json'
import languagesFr from './locales/fr/languages.json'
import languagesEn from './locales/en/languages.json'
import contactFr from './locales/fr/contact.json'
import contactEn from './locales/en/contact.json'
import footerFr from './locales/fr/footer.json'
import footerEn from './locales/en/footer.json'
import formationsFr from './locales/fr/formations.json'
import formationsEn from './locales/en/formations.json'
import printableFormFr from './locales/fr/printableForm.json'
import printableFormEn from './locales/en/printableForm.json'
import mentionsLegalesFr from './locales/fr/mentionsLegales.json'
import mentionsLegalesEn from './locales/en/mentionsLegales.json'
import caseStudyActedFr from './locales/fr/caseStudyActed.json'
import caseStudyActedEn from './locales/en/caseStudyActed.json'
import caseStudyBoostdukaFr from './locales/fr/caseStudyBoostduka.json'
import caseStudyBoostdukaEn from './locales/en/caseStudyBoostduka.json'

const STORAGE_KEY = 'bk-lang'

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default
  }
  return 'fr'
}

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      common: commonFr,
      hero: heroFr,
      trustedBy: trustedByFr,
      servicesHub: servicesHubFr,
      humanitarianGallery: humanitarianGalleryFr,
      audit: auditFr,
      data: dataFr,
      parcours: parcoursFr,
      portfolio: portfolioFr,
      bkBoost: bkBoostFr,
      pricing: pricingFr,
      languages: languagesFr,
      contact: contactFr,
      footer: footerFr,
      formations: formationsFr,
      printableForm: printableFormFr,
      mentionsLegales: mentionsLegalesFr,
      caseStudyActed: caseStudyActedFr,
      caseStudyBoostduka: caseStudyBoostdukaFr,
    },
    en: {
      common: commonEn,
      hero: heroEn,
      trustedBy: trustedByEn,
      servicesHub: servicesHubEn,
      humanitarianGallery: humanitarianGalleryEn,
      audit: auditEn,
      data: dataEn,
      parcours: parcoursEn,
      portfolio: portfolioEn,
      bkBoost: bkBoostEn,
      pricing: pricingEn,
      languages: languagesEn,
      contact: contactEn,
      footer: footerEn,
      formations: formationsEn,
      printableForm: printableFormEn,
      mentionsLegales: mentionsLegalesEn,
      caseStudyActed: caseStudyActedEn,
      caseStudyBoostduka: caseStudyBoostdukaEn,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'fr',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore write failures — language just won't persist across reloads
  }
  document.documentElement.lang = lng
})

document.documentElement.lang = i18n.language

export default i18n
