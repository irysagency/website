import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'

const FreelanceVsAgence = dynamic(() => import('@/components/FreelanceVsAgence'))
const EcosystemeIrys = dynamic(() => import('@/components/EcosystemeIrys'))
const ProcessSwimlaneClient = dynamic(() => import('@/components/ProcessSwimlaneClient'))
// import Offres from '@/components/Offres' — temporairement masqué
const CalendlySection = dynamic(() => import('@/components/CalendlySection'))
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
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
