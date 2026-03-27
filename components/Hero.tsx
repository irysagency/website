'use client'

import { Fragment, type CSSProperties } from 'react'
import { useTranslations } from 'next-intl'
import DustParticles from './ui/DustParticles'
import MagneticButton from './ui/MagneticButton'

function fadeUp(delay: number): CSSProperties {
  return {
    animation: `irys-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
  }
}

export default function Hero() {
  const t = useTranslations('hero')

  const STATS = [
    { value: t('stat1_number'), label: t('stat1_label') },
    { value: t('stat2_number'), label: t('stat2_label') },
    { value: t('stat3_number'), label: t('stat3_label') },
    { value: t('stat4_number'), label: t('stat4_label') },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Particules webGL premium en parallax */}
      <DustParticles />

      {/* Radial glow rose global — animated pulse */}
      <div
        className="absolute inset-0 pointer-events-none irys-halo-animated"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 90%, rgba(238, 29, 82, 0.22) 0%, transparent 70%)',
          zIndex: 1
        }}
      />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col items-center justify-center pt-[108px] pb-4 px-4">
        <div className="relative z-10 text-center max-w-[1000px] mx-auto w-full">

          {/* Eyebrow badge */}
          <div style={fadeUp(0)} className="irys-section-badge mb-10 mx-auto w-fit text-[13px]">
            <span
              className="h-2 w-2 rounded-full inline-block flex-shrink-0"
              style={{ background: 'var(--color-accent)' }}
            />
            {t('label')}
          </div>

          {/* H1 dual-font */}
          <h1
            className="tracking-tight mb-6"
            style={{
              fontSize: 'clamp(64px, 7vw, 88px)',
              lineHeight: '1.06',
              letterSpacing: '-0.02em',
            }}
          >
            <span
              className="font-heading font-bold"
              style={{ 
                ...fadeUp(100), 
                display: 'block', 
                color: 'var(--color-text)',
                textShadow: '0 0 60px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' /* Bloom effect */
              }}
            >
              {t('h1_line1_a')}
            </span>
            <span
              className="font-display-italic"
              style={{ ...fadeUp(200), display: 'block', color: 'var(--color-accent)', fontWeight: 300 }}
            >
              {t('h1_line2')}
            </span>
          </h1>

          {/* Subline */}
          <p
            className="text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-[500px] mx-auto"
            style={{ ...fadeUp(350), color: 'rgba(245,240,232,0.55)' }}
          >
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div style={fadeUp(480)} className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap relative z-20">
            <MagneticButton href="#portfolio" className="irys-btn-outline text-[13px]">
              {t('cta_secondary')}
            </MagneticButton>
            <MagneticButton href="#calendly" className="irys-btn-accent-filled text-[13px]">
              {t('cta_primary')}
            </MagneticButton>
          </div>

        </div>
      </div>

      {/* Bandeau stats */}
      <div className="relative w-full">
        {/* Glow line top */}
        <div className="absolute top-0 left-0 right-0 irys-glow-line-top" />

        {/* Radial glow rose centré */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(238, 29, 82, 0.14) 0%, transparent 100%)',
          }}
        />

        {/* Stats */}
        <div className="relative z-10 max-w-[1000px] mx-auto px-4 py-8 flex items-center justify-center md:justify-between flex-wrap gap-x-6 gap-y-5">
          {STATS.map(({ value, label }, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <div
                  className="hidden sm:block w-px self-stretch"
                  style={{ background: 'rgba(245,240,232,0.1)' }}
                />
              )}
              <div
                className="flex flex-col items-center gap-1 w-[45%] sm:w-auto sm:flex-1"
                style={fadeUp(600 + i * 60)}
              >
                <span
                  className="font-heading tracking-tight"
                  style={{
                    color: 'var(--color-text)',
                    fontWeight: 600,
                    fontSize: 'clamp(28px, 3vw, 40px)',
                  }}
                >
                  {value}
                </span>
                <span
                  className="text-[12px] whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {label}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
