import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
// ProcessSwimlaneClient est déjà un wrapper dynamic() en interne
import ProcessSwimlaneClient from '@/components/ProcessSwimlaneClient'

// Below-the-fold — code split, chargés séparément du bundle initial
const Portfolio = dynamic(() => import('@/components/Portfolio'))
const FreelanceVsAgence = dynamic(() => import('@/components/FreelanceVsAgence'))
const EcosystemeIrys = dynamic(() => import('@/components/EcosystemeIrys'))
const Offres = dynamic(() => import('@/components/Offres'))
const CalendlySection = dynamic(() => import('@/components/CalendlySection'))
const AvisClients = dynamic(() => import('@/components/AvisClients'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const Footer = dynamic(() => import('@/components/Footer'))

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
        {/* <Offres /> — temporairement masqué */}
        <CalendlySection />
        <AvisClients />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
