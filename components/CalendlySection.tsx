'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'

const CAL_NAMESPACE = 'appel-de-decouverte'
const CAL_LINK = 'irys-agency/appel-de-decouverte'
const CAL_ORIGIN = 'https://app.cal.com'

export default function CalendlySection() {
  const t = useTranslations('booking')
  // Injecte l'IIFE exact de Cal.com qui configure la queue puis charge embed.js
  useEffect(() => {
    const bootstrap = document.createElement('script')
    bootstrap.textContent = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init");
      Cal("init", "${CAL_NAMESPACE}", {origin:"${CAL_ORIGIN}"});
      Cal.ns["${CAL_NAMESPACE}"]("inline", {
        elementOrSelector:"#my-cal-inline-${CAL_NAMESPACE}",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "${CAL_LINK}"
      });
      Cal.ns["${CAL_NAMESPACE}"]("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
    `
    document.head.appendChild(bootstrap)

    // Auto-resize : écoute les changements de hauteur de l'iframe Cal.com
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === '__dimensionChanged' && e.data?.namespace === CAL_NAMESPACE) {
        const el = document.getElementById(`my-cal-inline-${CAL_NAMESPACE}`)
        if (el && e.data?.data?.height) {
          el.style.height = e.data.data.height + 'px'
        }
      }
    }
    window.addEventListener('message', handleMessage)

    return () => {
      if (document.head.contains(bootstrap)) document.head.removeChild(bootstrap)
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const FOUNDERS = [
    {
      name: t('kilian_name'),
      role: t('kilian_title'),
      photo: '/images/KAA_PP.jpg',
      bio: t('kilian_bio'),
      instagramUrl: 'https://instagram.com/kilian.adam',
    },
    {
      name: t('quentin_name'),
      role: t('quentin_title'),
      photo: '/images/XEN_PP.jpeg',
      bio: t('quentin_bio'),
      instagramUrl: 'https://instagram.com/quentin.prproj',
    },
  ]

  return (
    <section id="calendly" className="relative py-24 px-4">
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

            {/* Cal.com inline embed — wrapper clips hidden event-details top space */}
            <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
              <div
                id={`my-cal-inline-${CAL_NAMESPACE}`}
                style={{ width: '100%', height: '950px', overflow: 'hidden', marginTop: '-200px' }}
              />
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
                const { name, role, photo, bio, instagramUrl } = founder
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
                  {/* Photo + infos */}
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
                        width={96}
                        height={96}
                        className="rounded-full object-cover"
                        style={{
                          width: '96px',
                          height: '96px',
                          border: '2px solid rgba(238,29,82,0.3)',
                          objectPosition: 'center center',
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.2 }}>
                          {name}
                        </p>
                        {/* Instagram verified badge */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#3897f0" aria-label="Vérifié" role="img">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.293 7.293l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10.586 12.172l4.293-4.293a1 1 0 011.414 1.414z"/>
                        </svg>
                      </div>
                      <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)', letterSpacing: '0.02em', marginTop: '4px' }}>
                        {role}
                      </p>
                    </div>
                  </a>

                  {/* Bio */}
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(245,240,232,0.65)', marginTop: '14px' }}>
                    {bio}
                  </p>
                </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
