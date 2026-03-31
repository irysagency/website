import { DeckProvider } from '@/components/deck/DeckProvider'
import { DeckShell } from '@/components/deck/DeckShell'
import { Slide01Cover } from '@/components/deck/slides/Slide01Cover'
import { Slide02Problem } from '@/components/deck/slides/Slide02Problem'
import { Slide03BeforeAfter } from '@/components/deck/slides/Slide03BeforeAfter'
import { SlideClient } from '@/components/deck/slides/SlideClient'
import { Slide07Portfolio } from '@/components/deck/slides/Slide07Portfolio'
import { Slide08Workflow } from '@/components/deck/slides/Slide08Workflow'
import { Slide09Kit } from '@/components/deck/slides/Slide09Kit'
import { Slide10Offres } from '@/components/deck/slides/Slide10Offres'
import { Slide11Packs } from '@/components/deck/slides/Slide11Packs'
import { CLIENT_SLIDES } from '@/components/deck/slides/data'

const SLIDES = [
  <Slide01Cover key="cover" />,
  <Slide02Problem key="problem" />,
  <Slide03BeforeAfter key="before-after" />,
  <SlideClient key="client-1" data={CLIENT_SLIDES[0]} slideNumber={1} />,
  <SlideClient key="client-2" data={CLIENT_SLIDES[1]} slideNumber={2} />,
  <SlideClient key="client-3" data={CLIENT_SLIDES[2]} slideNumber={3} />,
  <Slide07Portfolio key="portfolio" />,
  <Slide08Workflow key="workflow" />,
  <Slide09Kit key="kit" />,
  <Slide10Offres key="offres" />,
  <Slide11Packs key="packs" />,
]

export default function DeckPage() {
  return (
    <DeckProvider>
      <DeckShell slides={SLIDES} />
    </DeckProvider>
  )
}
