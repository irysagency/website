'use client'

import { X, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function FreelanceVsAgence() {
  const t = useTranslations('freelance')
  const revealHeader = useScrollReveal({ staggerDelay: 80 })
  const revealRows = useScrollReveal({ staggerDelay: 60 })
  const revealArgs = useScrollReveal({ staggerDelay: 80 })

  const COMPARISON = [
    { pain: t('f1'), gain: t('i1') },
    { pain: t('f3'), gain: t('i3') },
    { pain: t('f4'), gain: t('i4') },
    { pain: t('f5'), gain: t('i5') },
    { pain: t('f6'), gain: t('i6') },
  ]

  const ARGUMENTS = [
    { title: t('arg1_title'), description: t('arg1_desc') },
    { title: t('arg2_title'), description: t('arg2_desc') },
    { title: t('arg3_title'), description: t('arg3_desc') },
  ]

  return (
    <section id="freelance-vs-agence" className="relative py-24 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Header */}
        <SectionHeader
          badgeText={t('label')}
          titlePart1={t('h2_part1')}
          revealFn={revealHeader}
          className="mb-3"
        />

        <p
          ref={revealHeader(1)}
          className="text-[14px] sm:text-[16px] text-accent font-medium mb-12 sm:mb-16 tracking-tight italic"
        >
          &quot;{t('comparison_subtitle')}&quot;
        </p>

        {/* Headers outside the card */}
        <div ref={revealHeader(2)} className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 px-4 sm:px-10">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div
              className="flex-shrink-0 h-6 w-6 rounded-lg rotate-45 flex items-center justify-center border border-white/10"
              style={{ background: 'rgba(255,50,50,0.1)' }}
            >
              <X className="-rotate-45 h-3.5 w-3.5 text-red-500" aria-hidden="true" />
            </div>
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-[#666]">
              {t('col_freelance')}
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div
              className="flex-shrink-0 h-6 w-6 rounded-lg rotate-45 flex items-center justify-center border border-white/10"
              style={{ background: 'rgba(34,197,94,0.1)' }}
            >
              <CheckCircle2 className="-rotate-45 h-3.5 w-3.5 text-green-500" aria-hidden="true" />
            </div>
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-text">
              {t('col_irys')}
            </span>
          </div>
        </div>

        {/* Comparison card */}
        <div ref={revealHeader(2)} className="irys-card p-4 sm:p-10 mb-14 text-left overflow-hidden relative">
          {/* Subtle separator line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/[0.04] hidden sm:block" />

          {/* Rows */}
          <div className="space-y-0 relative z-10">
            {COMPARISON.map(({ pain, gain }, i) => (
              <div
                key={i}
                ref={revealRows(i)}
                className="grid grid-cols-2 gap-4 sm:gap-14 py-6 sm:py-8"
                style={{
                  borderBottom:
                    i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                {/* Left: Pain */}
                <div className="flex items-start gap-4 pr-1 sm:pr-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-md flex items-center justify-center bg-red-500/10 border border-red-500/20">
                    <X className="h-3 w-3 text-red-500/70" aria-hidden="true" />
                  </div>
                  <p className="text-[14px] sm:text-[16px] leading-snug text-subdued/80">
                    {pain}
                  </p>
                </div>

                {/* Right: Gain */}
                <div className="flex items-start gap-4 pl-1 sm:pl-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-md flex items-center justify-center bg-green-500/10 border border-green-500/20">
                    <CheckCircle2 className="h-3 w-3 text-green-500" aria-hidden="true" />
                  </div>
                  <p className="text-[14px] sm:text-[16px] leading-snug font-medium text-text">
                    {gain}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Argument cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {ARGUMENTS.map(({ title, description }, i) => (
            <div key={title} ref={revealArgs(i)} className="irys-card-simple p-6 text-left">
              <h3 className="font-heading text-base font-bold mb-2 text-text">
                {title}
              </h3>
              <p className="text-[14px] leading-relaxed text-subdued/90">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
