'use client'

import { CheckCircle2, Star } from 'lucide-react'
import SpotlightCard from '../ui/SpotlightCard'
import MagneticButton from '../ui/MagneticButton'
import { motion } from 'framer-motion'

export interface Offre {
  name: string
  tagline: string
  price: string
  recommended: boolean
  features: string[]
}

interface OffreCardProps {
  offre: Offre
  labelHtMonth: string
  labelRecommended: string
  labelCta: string
}

export function OffreCard({ offre, labelHtMonth, labelRecommended, labelCta }: OffreCardProps) {
  const { name, tagline, price, recommended, features } = offre

  return (
    <div className="relative">
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span
            className="text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1"
            style={{ background: 'var(--color-accent)', color: '#fff' }}
          >
            <Star size={11} strokeWidth={2} />
            {labelRecommended}
          </span>
        </div>
      )}
      <SpotlightCard
        className={`p-6 sm:p-8 text-left flex flex-col h-full min-h-[550px] sm:min-h-[620px] transition-all duration-500 ${
          recommended ? '!border-[rgba(238,29,82,0.4)] shadow-[0_0_30px_rgba(238,29,82,0.15)]' : ''
        }`}
        spotlightColor={recommended ? 'rgba(238, 29, 82, 0.4)' : 'rgba(255, 255, 255, 0.1)'}
      >
        <h3 className="font-heading text-xl font-bold mb-1 text-text uppercase tracking-tight">
          {name}
        </h3>
        <p className="text-[12px] mb-8 uppercase tracking-[0.2em] opacity-60 text-subdued leading-relaxed">
          {tagline}
        </p>

        <div className="flex items-baseline gap-1 mb-8">
          <span className="font-heading text-[40px] sm:text-[48px] font-bold text-text">
            {price}
          </span>
          <span className="text-[13px] text-subdued font-medium uppercase tracking-widest">
            {labelHtMonth}
          </span>
        </div>

        <div className="irys-glow-line my-8" />

        <ul className="flex flex-col gap-4 flex-1 mb-10">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 flex-shrink-0 mt-0.5"
                style={{ color: recommended ? 'var(--color-accent)' : 'white' }}
              />
              <span className={`text-[14px] ${recommended ? 'text-text' : 'text-subdued'}`}>{f}</span>
            </li>
          ))}
        </ul>

        <MagneticButton className="w-full">
          <a
            href="#calendly"
            className={`w-full py-4 text-[13px] font-bold uppercase tracking-[0.2em] rounded-full text-center flex items-center justify-center transition-all duration-300
              ${recommended
                ? 'bg-accent text-white shadow-[0_0_25px_rgba(238,29,82,0.4)]'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
          >
            {labelCta}
          </a>
        </MagneticButton>
      </SpotlightCard>
    </div>
  )
}
