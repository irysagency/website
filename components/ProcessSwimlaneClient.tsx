'use client'

import dynamic from 'next/dynamic'

const ProcessSwimlane = dynamic(
  () => import('@/components/ProcessSwimlane'),
  { ssr: false }
)

export default function ProcessSwimlaneClient() {
  return <ProcessSwimlane />
}
