import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import FreelanceVsAgence from '@/components/FreelanceVsAgence'
import Methode from '@/components/Methode'
import Offres from '@/components/Offres'
import CalendlySection from '@/components/CalendlySection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <FreelanceVsAgence />
        <Methode />
        <Offres />
        <CalendlySection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
