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
    { pain: t('f2'), gain: t('i2') },
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
          titleItalic={t('h2_part2')}
          revealFn={revealHeader}
          className="mb-3"
        />

        {/* Comparison card */}
        <div ref={revealHeader(2)} className="irys-card p-5 sm:p-8 md:p-10 mb-14 text-left">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div
                className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,50,50,0.15)', border: '1px solid rgba(255,50,50,0.3)' }}
              >
                <X className="h-3 w-3" style={{ color: 'var(--color-danger)' }} aria-hidden="true" />
              </div>
              <span className="text-[14px] font-semibold text-text">
                {t('col_freelance')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <CheckCircle2 className="h-3 w-3" style={{ color: 'var(--color-success)' }} aria-hidden="true" />
              </div>
              <span className="text-[14px] font-semibold text-text">
                {t('col_irys')}
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-0">
            {COMPARISON.map(({ pain, gain }, i) => (
              <div
                key={i}
                ref={revealRows(i)}
                className="grid grid-cols-2 gap-3 sm:gap-6 py-4"
                style={{
                  borderBottom:
                    i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div className="flex items-start gap-3">
                  <X
                    className="h-4 w-4 flex-shrink-0 mt-0.5"
                    style={{ color: 'rgba(255,80,80,0.7)' }}
                    aria-hidden="true"
                  />
                  <p className="text-[14px] text-subdued/90">
                    {pain}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-success)' }}
                    aria-hidden="true"
                  />
                  <p className="text-[14px] font-medium text-text">
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
