'use client'

import { useTranslations } from 'next-intl'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'


export default function EcosystemeIrys() {
  const t = useTranslations('eco')
  const revealHeader = useScrollReveal({ staggerDelay: 80 })
  const revealItem = useScrollReveal({ staggerDelay: 120, threshold: 0.15, direction: 'left' })

  const ITEMS = [
    {
      num: '01',
      title: t('card1_title'),
      desc: t('card1_desc'),
      tags: [t('card1_tag1'), t('card1_tag2'), t('card1_tag3')],
    },
    {
      num: '02',
      title: t('card2_title'),
      desc: t('card2_desc'),
      tags: [t('card2_tag1'), t('card2_tag2'), t('card2_tag3')],
    },
    {
      num: '03',
      title: t('card3_title'),
      desc: t('card3_desc'),
      tags: [t('card3_tag1'), t('card3_tag2'), t('card3_tag3')],
    },
  ]

  return (
    <section id="ecosysteme" className="relative py-24 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(238, 29, 82, 0.06) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badgeText={t('label')}
          titlePart1={t('h2_part1')}
          titleItalic={t('h2_part2')}
          subtitle={t('subtitle')}
          revealFn={revealHeader}
          className="mb-14"
        />

        {/* Vertical numbered list */}
        <div>
          {ITEMS.map(({ num, title, desc, tags }, i) => (
            <div
              key={i}
              ref={revealItem(i)}
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '0 24px',
                padding: '40px 0',
                borderBottom:
                  i < ITEMS.length - 1
                    ? '0.5px solid rgba(255,255,255,0.08)'
                    : 'none',
              }}
            >
              {/* Number */}
              <div
                style={{
                  marginTop: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  opacity: 0.8,
                  textAlign: 'right',
                  textTransform: 'uppercase',
                }}
              >
                {num}
              </div>

              {/* Content */}
              <div>
                {/* Title */}
                <h3
                  className="font-heading text-text"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-subdued"
                  style={{
                    fontSize: '15px',
                    marginTop: '6px',
                    lineHeight: '1.7',
                    maxWidth: '560px',
                  }}
                >
                  {desc}
                </p>

                <div className="flex flex-wrap gap-1.5" style={{ marginTop: '16px' }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full text-[11px] font-medium"
                      style={{
                        padding: '6px 14px',
                        background: 'rgba(238,29,82,0.08)',
                        color: 'var(--color-accent)',
                        border: '0.5px solid rgba(238,29,82,0.3)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
