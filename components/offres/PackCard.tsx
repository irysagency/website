'use client'

import { type ReactNode, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SpotlightCard from '../ui/SpotlightCard'
import { QualityToggle } from './QualityToggle'
import MagneticButton from '../ui/MagneticButton'

type Quality = 'standard' | 'premium'

export interface Pack {
  name: string
  tagline: string
  standard: string
  premium: string | null
  features: string[]
  features_prem?: string[]
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
    <SpotlightCard className="p-4 sm:p-6 text-left flex flex-col h-full" spotlightColor="rgba(255,255,255,0.08)">
      {hasPremium && (
        <QualityToggle
          quality={quality}
          onToggle={setQuality}
          labelStandard={labelStandard}
          labelPremium={labelPremium}
        />
      )}
      <h3 className="font-heading text-lg font-bold mb-1 text-text">
        {pack.name}
      </h3>
      <p className="text-[12px] mb-5 text-subdued leading-relaxed">
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

      <div className="irys-glow-line my-5" />

      <ul className="flex flex-col gap-2.5 flex-1 mb-6 relative">
        <AnimatePresence mode="popLayout" initial={false}>
          {(isPremium && pack.features_prem ? pack.features_prem : pack.features).map((f) => (
            <motion.li
              layout
              key={isPremium ? `prem-${f}` : `std-${f}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2 
                className="h-4 w-4 flex-shrink-0 mt-0.5 transition-colors duration-300" 
                style={{ color: isPremium ? 'var(--color-accent)' : 'white' }} 
              />
              <span className={`text-[13px] transition-colors duration-300 ${isPremium ? 'text-text' : 'text-subdued'}`}>{f}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <MagneticButton className="w-full">
        <a 
          href="#calendly" 
          className={`w-full py-3.5 text-[13px] font-bold transition-all duration-300 rounded-full text-center flex items-center justify-center
            ${isPremium 
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(238,29,82,0.3)]' 
              : 'irys-btn-accent-outline-large'
            }`}
        >
          {labelOrder}
        </a>
      </MagneticButton>
    </SpotlightCard>
  )
}
