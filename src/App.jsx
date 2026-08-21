import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesHub from './components/sections/ServicesHub'
import HumanitarianGallery from './components/sections/HumanitarianGallery'
import BkBoost from './components/sections/BkBoost'
import AuditSection from './components/sections/AuditDataSection'
import DataAnalysisSection from './components/sections/DataAnalysisSection'
import LanguagesSection from './components/sections/LanguagesSection'
import FormationsPage from './pages/FormationsPage'
import FormationDetailPage from './pages/FormationDetailPage'
import PrintableFormPage from './pages/PrintableFormPage'

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-night">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesHub />
        <HumanitarianGallery />
        <BkBoost />
        <AuditSection />
        <DataAnalysisSection />
        <LanguagesSection />
      </main>
      <Footer />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/formations/:id" element={<FormationDetailPage />} />
        <Route path="/formations/:id/formulaire" element={<PrintableFormPage />} />
      </Routes>
    </>
  )
}
