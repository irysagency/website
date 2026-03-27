import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import FreelanceVsAgence from '@/components/FreelanceVsAgence'
import EcosystemeIrys from '@/components/EcosystemeIrys'
import ProcessSwimlaneClient from '@/components/ProcessSwimlaneClient'
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
        <EcosystemeIrys />
        <ProcessSwimlaneClient />
        <Offres />
        <CalendlySection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
