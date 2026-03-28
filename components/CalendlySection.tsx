'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Video } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function CalendlySection() {
  const t = useTranslations('booking')
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Charge Calendly seulement quand la section entre dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Injecte le script et initialise le widget
  useEffect(() => {
    if (!shouldLoad) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url:
            process.env.NEXT_PUBLIC_CALENDLY_URL ||
            'https://calendly.com/contact-irysagency/30min',
          parentElement: containerRef.current,
        })
        setIsLoaded(true)
      }
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [shouldLoad])

  const FOUNDERS = [
    {
      name: t('kilian_name'),
      role: t('kilian_title'),
      photo: '/images/kilian-placeholder.png', // TODO: REPLACE
      bio: t('kilian_bio'),
      stat: '1,7M',
      statLabel: 'vues générées en 3 mois',
      instagramUrl: 'https://instagram.com/kilian.adam',
    },
    {
      name: t('quentin_name'),
      role: t('quentin_title'),
      photo: '/images/quentin-placeholder.png', // TODO: REPLACE
      bio: t('quentin_bio'),
      instagramUrl: 'https://instagram.com/quentin.prproj',
    },
  ]

  return (
    <section id="calendly" className="relative py-24 px-4" ref={sectionRef}>
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(238, 29, 82, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left — Calendly ── */}
          <div>
            <SectionHeader
              badgeText={t('label')}
              badgeIcon={
                <span
                  className="h-2 w-2 rounded-full flex-shrink-0 bg-accent"
                />
              }
              titlePart1={t('h2_part1')}
              titleItalic={t('h2_part2')}
              subtitle={t('subtitle')}
              align="left"
              className="mb-8"
            />

            {/* Native Calendly embed — chargé lazy via IntersectionObserver */}
            <div
              ref={containerRef}
              className="w-full overflow-hidden"
              style={{
                minWidth: '320px',
                height: 'var(--calendly-height)',
                borderRadius: '16px',
              }}
            >
              {!isLoaded && (
                <div
                  style={{
                    height: '700px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.4,
                    fontSize: '14px',
                    color: 'var(--color-text)',
                  }}
                >
                  Chargement du calendrier...
                </div>
              )}
            </div>
          </div>

          {/* ── Right — Founders ── */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <div className="irys-section-badge mb-4 w-fit text-[13px]">
                {t('team_label')}
              </div>
              <h3
                className="font-heading text-2xl font-bold mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                {t('team_title')}
              </h3>
              <p className="text-[14px] text-subdued">
                {t('team_subtitle')}
              </p>
            </div>

            {/* Founder cards */}
            <div className="flex flex-col gap-4">
              {FOUNDERS.map((founder) => {
                const { name, role, photo, bio, stat, statLabel, instagramUrl } = founder as { name: string; role: string; photo: string; bio: string; stat?: string; statLabel?: string; instagramUrl?: string }
                return (
                <div
                  key={name}
                  style={{
                    padding: '24px',
                    background: 'var(--color-surface)',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    transition: 'border-color 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(238,29,82,0.25)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  {/* Photo + infos — cliquable si Instagram URL disponible */}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 cursor-pointer"
                    aria-label={`Voir le profil Instagram de ${name}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={photo}
                        alt={name}
                        width={72}
                        height={72}
                        className="rounded-full object-cover"
                        style={{
                          width: '72px',
                          height: '72px',
                          border: '2px solid rgba(238,29,82,0.3)',
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.2 }}>
                        {name}
                      </p>
                      <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)', letterSpacing: '0.02em', marginTop: '3px' }}>
                        {role}
                      </p>
                      <p style={{ fontSize: '10px', color: 'var(--color-accent)', opacity: 0.8, marginTop: '4px', letterSpacing: '0.05em' }}>
                        <span aria-hidden="true">★★★★★</span>
                      </p>
                    </div>
                  </a>

                  {/* Bio */}
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(245,240,232,0.65)', marginTop: '12px' }}>
                    {bio}
                  </p>

                  {/* Stat clé — affichée uniquement si présente */}
                  {stat && statLabel && (
                    <>
                      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', margin: '16px 0' }} />
                      <div>
                        <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>
                          {stat}
                        </p>
                        <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>
                          {statLabel}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                )
              })}
            </div>

            {/* Trust badge */}
            <div
              className="rounded-2xl mt-4"
              style={{
                padding: '20px 24px',
                background: 'rgba(238,29,82,0.06)',
                border: '1px solid rgba(238,29,82,0.2)',
              }}
            >
              <p className="text-sm font-semibold mb-1 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Video
                  size={16}
                  strokeWidth={1.5}
                  className="irys-pulse-video"
                  aria-hidden="true"
                />
                {t('first_video_title')}
              </p>
              <p className="text-[12px] text-subdued">
                {t('first_video_desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
