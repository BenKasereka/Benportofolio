import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesHub from './components/sections/ServicesHub'
import HumanitarianGallery from './components/sections/HumanitarianGallery'
import BkBoost from './components/sections/BkBoost'
import AuditSection from './components/sections/AuditDataSection'
import DataAnalysisSection from './components/sections/DataAnalysisSection'
import LanguagesSection from './components/sections/LanguagesSection'

export default function App() {
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
