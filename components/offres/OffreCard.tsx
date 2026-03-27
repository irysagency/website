'use client'

import { CheckCircle2, Star } from 'lucide-react'

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
      <div
        className={`${recommended ? 'irys-card' : 'irys-card-simple'} p-4 sm:p-6 text-left flex flex-col h-full`}
        style={
          recommended
            ? {
                background: 'rgba(232,23,93,0.06)',
                border: '1px solid rgba(232,23,93,0.25)',
                boxShadow: '0 0 0 1px rgba(232,23,93,0.3)',
                transition: 'box-shadow 0.3s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
              }
            : {}
        }
        onMouseEnter={
          recommended
            ? (e) => { ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(232,23,93,0.15)' }
            : undefined
        }
        onMouseLeave={
          recommended
            ? (e) => { ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 1px rgba(232,23,93,0.3)' }
            : undefined
        }
      >
        <h3 className="font-heading text-lg font-bold mb-1 text-text">
          {name}
        </h3>
        <p className="text-[12px] mb-5 leading-relaxed text-subdued">
          {tagline}
        </p>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="font-heading text-[32px] sm:text-[40px] font-bold text-text">
            {price}
          </span>
          <span className="text-[13px] text-subdued">
            {labelHtMonth}
          </span>
        </div>

        <div className="irys-glow-line my-5" />

        <ul className="flex flex-col gap-2.5 flex-1 mb-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircle2
                className="h-4 w-4 flex-shrink-0 mt-0.5"
                style={{ color: recommended ? 'var(--color-accent)' : '#22c55e' }}
              />
              <span className="text-[13px] text-muted">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#calendly"
          className={
            recommended
              ? 'irys-btn-accent-filled w-full justify-center py-3 text-[13px]'
              : 'irys-btn-accent-outline-large text-[13px]'
          }
        >
          {labelCta}
        </a>
      </div>
    </div>
  )
}
