'use client'

import { type ReactNode, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { QualityToggle } from './QualityToggle'

type Quality = 'standard' | 'premium'

export interface Pack {
  icon: ReactNode
  name: string
  tagline: string
  standard: string
  premium: string | null
  features: string[]
}

interface PackCardProps {
  pack: Pack
  premiumMention: string
  labelStandard: string
  labelPremium: string
  labelHt: string
  labelOrder: string
}

export function PackCard({ pack, premiumMention, labelStandard, labelPremium, labelHt, labelOrder }: PackCardProps) {
  const [quality, setQuality] = useState<Quality>('standard')
  const isPremium = quality === 'premium'
  const price = isPremium && pack.premium ? pack.premium : pack.standard
  const hasPremium = pack.premium !== null

  return (
    <div className="irys-card p-4 sm:p-6 text-left flex flex-col">
      {hasPremium && (
        <QualityToggle
          quality={quality}
          onToggle={setQuality}
          labelStandard={labelStandard}
          labelPremium={labelPremium}
        />
      )}

      <div className="mb-3 text-muted">{pack.icon}</div>
      <h3 className="font-heading text-lg font-bold mb-1 text-text">
        {pack.name}
      </h3>
      <p className="text-[12px] mb-5 text-subdued">
        {pack.tagline}
      </p>

      <div className="flex items-baseline gap-1 mb-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-heading text-[32px] sm:text-[40px] font-bold text-text"
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span className="text-[13px] text-subdued">
          {labelHt}
        </span>
      </div>

      {isPremium && (
        <p className="text-[11px] font-medium mb-4 leading-relaxed" style={{ color: 'var(--color-accent)' }}>
          {premiumMention}
        </p>
      )}

      <div className="irys-glow-line my-5" />

      <ul className="flex flex-col gap-2.5 flex-1 mb-6">
        {pack.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
            <span className="text-[13px] text-muted">{f}</span>
          </li>
        ))}
      </ul>

      <a href="#calendly" className="irys-btn-accent-outline-large text-[13px]">
        {labelOrder}
      </a>
    </div>
  )
}
