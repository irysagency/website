'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function ProcessSwimlane() {
  const t = useTranslations('process')
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const bilanRef = useRef<HTMLDivElement | null>(null)

  const STEPS = [
    { num: '01', actor: 'toi' as const, title: t('step1_title'), sub: t('step1_sub') },
    { num: '02', actor: 'irys' as const, title: t('step2_title'), sub: t('step2_sub') },
    { num: '03', actor: 'toi' as const, title: t('step3_title'), sub: t('step3_sub') },
    { num: '04', actor: 'irys' as const, title: t('step4_title'), sub: t('step4_sub') },
  ]

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'
    const transition = `opacity 0.55s ${ease}, transform 0.55s ${ease}`

    if (prefersReduced) {
      stepRefs.current.forEach(el => { if (el) { el.style.opacity = '1'; el.style.transform = 'none' } })
      nodeRefs.current.forEach(el => { if (el) { el.style.opacity = '1'; el.style.transform = 'none' } })
      if (bilanRef.current) { bilanRef.current.style.opacity = '1'; bilanRef.current.style.transform = 'none' }
      return
    }

    // Initial hidden states
    stepRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transition = transition
      if (isMobile) {
        el.style.transform = 'translateY(20px)'
      } else {
        // indices 0,2 → droite (translateX positif) ; 1,3 → gauche (translateX négatif)
        el.style.transform = i % 2 === 0 ? 'translateX(32px)' : 'translateX(-32px)'
      }
    })

    nodeRefs.current.forEach(el => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'scale(0)'
      el.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
    })

    if (bilanRef.current) {
      bilanRef.current.style.opacity = '0'
      bilanRef.current.style.transform = 'translateY(16px)'
      bilanRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    }

    // Observer pour les étapes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'none'

          // Déclencher le nœud central 200ms après l'étape
          const idx = stepRefs.current.indexOf(el as HTMLDivElement)
          if (idx !== -1) {
            setTimeout(() => {
              const node = nodeRefs.current[idx]
              if (node) { node.style.opacity = '1'; node.style.transform = 'scale(1)' }
            }, 200)
          }

          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    )

    stepRefs.current.forEach(el => { if (el) observer.observe(el) })

    // Observer pour le bilan (délai 400ms)
    if (bilanRef.current) {
      const bilanObs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            setTimeout(() => {
              if (bilanRef.current) {
                bilanRef.current.style.opacity = '1'
                bilanRef.current.style.transform = 'none'
              }
            }, 400)
            bilanObs.disconnect()
          })
        },
        { threshold: 0.25 }
      )
      bilanObs.observe(bilanRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="methode" className="relative py-24 px-4">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(232, 23, 93, 0.05) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="irys-section-badge-accent mb-6 mx-auto w-fit text-[13px]">
            {t('label')}
          </div>
          <h2
            className="font-heading text-[36px] md:text-[48px] font-bold mb-2 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            {t('h2_part1')}{' '}
            <span className="font-display-italic" style={{ color: 'var(--color-accent)' }}>
              {t('h2_part2')}
            </span>
          </h2>
          <p className="text-[14px]" style={{ color: 'rgba(245,240,232,0.5)' }}>
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale — desktop uniquement */}
          <div
            className="absolute top-0 bottom-0 left-1/2 hidden md:block"
            style={{
              width: '1px',
              borderLeft: '1px dashed rgba(255,255,255,0.1)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {STEPS.map(({ num, actor, title, sub }, i) => {
              const isRight = i % 2 === 0 // 0,2 → droite ; 1,3 → gauche
              return (
                <div key={i} className="relative">
                  {/* Nœud sur la ligne — desktop uniquement */}
                  <div
                    ref={el => { nodeRefs.current[i] = el }}
                    className="absolute hidden md:block"
                    style={{
                      left: '50%',
                      top: '36px',
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#E8175D',
                      boxShadow: '0 0 8px rgba(232,23,93,0.4)',
                      zIndex: 2,
                    }}
                  />

                  {/* Bloc contenu */}
                  <div
                    ref={el => { stepRefs.current[i] = el }}
                    className={`process-step-${isRight ? 'right' : 'left'} w-full`}
                    style={{
                      padding: 'clamp(20px, 4vw, 32px)',
                      background: 'var(--color-surface)',
                      border: '0.5px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                    }}
                  >
                    {/* Numéro + Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          color: '#E8175D',
                          opacity: 0.7,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {num}
                      </span>
                      <span
                        className="px-3 py-0.5 rounded-full text-[11px] font-medium flex-shrink-0"
                        style={
                          actor === 'irys'
                            ? { background: 'rgba(232,23,93,0.12)', color: '#E8175D', border: '0.5px solid rgba(232,23,93,0.25)' }
                            : { background: 'rgba(255,255,255,0.07)', color: 'rgba(245,240,232,0.6)', border: '0.5px solid rgba(255,255,255,0.1)' }
                        }
                      >
                        {actor === 'irys' ? t('badge_irys') : t('badge_toi')}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        lineHeight: 1.3,
                        marginTop: '6px',
                      }}
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(245,240,232,0.55)',
                        lineHeight: '1.7',
                        marginTop: '10px',
                      }}
                    >
                      {sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bilan pills */}
          <div
            ref={el => { bilanRef.current = el }}
            className="flex flex-wrap items-center justify-center gap-3 mt-12"
          >
            <span
              className="px-5 py-2.5 rounded-full text-[13px] font-medium"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                color: 'rgba(245,240,232,0.65)',
              }}
            >
              {t('bilan_you_pill')}
            </span>
            <span
              className="px-5 py-2.5 rounded-full text-[13px] font-medium"
              style={{
                background: 'rgba(232,23,93,0.08)',
                border: '0.5px solid rgba(232,23,93,0.25)',
                color: '#E8175D',
              }}
            >
              {t('bilan_irys_pill')}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href="#calendly" className="irys-btn-accent-filled px-10 py-4 text-sm">
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
