import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SEO from './components/ui/SEO'
import WhatsAppFab from './components/ui/WhatsAppFab'
import HeroSection from './components/sections/HeroSection'
import TrustedBySection from './components/sections/TrustedBySection'
import ServicesHub from './components/sections/ServicesHub'
import HumanitarianGallery from './components/sections/HumanitarianGallery'
import AuditSection from './components/sections/AuditDataSection'
import DataAnalysisSection from './components/sections/DataAnalysisSection'
import ParcoursSection from './components/sections/ParcoursSection'
import BkBoost from './components/sections/BkBoost'
import PortfolioSection from './components/sections/PortfolioSection'
import PricingSection from './components/sections/PricingSection'
import LanguagesSection from './components/sections/LanguagesSection'
import ContactSection from './components/sections/ContactSection'

// Chargées à la demande : la plupart des visiteurs de l'accueil ne visitent
// jamais /formations, et le formulaire de 32 champs n'a aucune raison d'alourdir
// le chargement initial de tout le monde (FIN-08 de l'audit).
const FormationsPage = lazy(() => import('./pages/FormationsPage'))
const FormationDetailPage = lazy(() => import('./pages/FormationDetailPage'))
const ModuleDetailPage = lazy(() => import('./pages/ModuleDetailPage'))
const PrintableFormPage = lazy(() => import('./pages/PrintableFormPage'))
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'))
const CaseStudyActedPage = lazy(() => import('./pages/CaseStudyActedPage'))
const CaseStudyBoostDukaPage = lazy(() => import('./pages/CaseStudyBoostDukaPage'))

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustedBySection />
        <ServicesHub />
        <HumanitarianGallery />
        <AuditSection />
        <DataAnalysisSection />
        <ParcoursSection />
        <BkBoost />
        <PricingSection />
        <PortfolioSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

// React Router doesn't reset scroll on route change — without this, navigating
// to a new page keeps whatever scroll position the previous page was at.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Defer to the next tick so the new page's layout has settled before we
    // measure/scroll to it — scrolling synchronously on mount can target a
    // position that then shifts under it once everything has rendered.
    const id = setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) {
          el.scrollIntoView({ block: 'start' })
          return
        }
      }
      window.scrollTo(0, 0)
    }, 0)
    return () => clearTimeout(id)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/formations/:id" element={<FormationDetailPage />} />
          <Route path="/formations/:id/module/:moduleNumber" element={<ModuleDetailPage />} />
          <Route path="/formations/:id/formulaire" element={<PrintableFormPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/etudes-de-cas/acted" element={<CaseStudyActedPage />} />
          <Route path="/etudes-de-cas/boostduka" element={<CaseStudyBoostDukaPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
    </div>
  )
}
