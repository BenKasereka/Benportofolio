import { Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/formations" element={<FormationsPage />} />
      <Route path="/formations/:id" element={<FormationDetailPage />} />
      <Route path="/formations/:id/formulaire" element={<PrintableFormPage />} />
    </Routes>
  )
}
