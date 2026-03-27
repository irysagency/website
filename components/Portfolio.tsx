'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

type TabKey = 'reels' | 'ads' | 'youtube'

interface PortfolioItem {
  id: number
  src: string
  typeKey: TabKey
  clientName: string
  details: string
  offerName: string
}

// TODO: REPLACE — placeholder data, swap with real client work
const VIDEO_DATA: PortfolioItem[] = [
  // ── Reels & Shorts
  {
    id: 1,
    src: '/videos/portfolio-1.mp4',
    typeKey: 'reels',
    clientName: 'PIMP MY BRAND',
    details: 'E-commerce · 12 Reels/mois · hooks + CC',
    offerName: 'Offre Starter Growth',
  },
  {
    id: 2,
    src: '/videos/portfolio-2.mp4',
    typeKey: 'reels',
    clientName: 'MAXIME COACH',
    details: 'Coaching · 8 Shorts/mois · montage + musique',
    offerName: 'Offre Starter Growth',
  },
  {
    id: 3,
    src: '/videos/portfolio-3.mp4',
    typeKey: 'reels',
    clientName: 'LA FORMULE',
    details: 'Formation · 15 Reels/mois · full pack',
    offerName: 'Offre Scale',
  },
  // ── Ads & VSL
  {
    id: 4,
    src: '/videos/portfolio-4.mp4',
    typeKey: 'ads',
    clientName: 'CHATIFY',
    details: 'SaaS · 3 ads Meta · tournage + montage',
    offerName: 'Offre One-Shot',
  },
  {
    id: 5,
    src: '/videos/portfolio-5.mp4',
    typeKey: 'ads',
    clientName: 'ALEX VENTES',
    details: 'Formation · VSL 8 min · €997 funnel',
    offerName: 'Offre One-Shot',
  },
  // ── YouTube & Vlogs
  {
    id: 6,
    src: '/videos/portfolio-6.mp4',
    typeKey: 'youtube',
    clientName: 'NICOLAS FINTECH',
    details: 'Finance · 4 vidéos/mois · full edit',
    offerName: 'Offre Scale',
  },
  {
    id: 7,
    src: '/videos/portfolio-6.mp4',
    typeKey: 'youtube',
    clientName: 'CLÉMENT BUILD',
    details: 'Tech · 2 vidéos/mois · talking head',
    offerName: 'Offre Starter Growth',
  },
]

export default function Portfolio() {
  const t = useTranslations('portfolio')
  const [activeTab, setActiveTab] = useState<TabKey>('reels')
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const revealHeader = useScrollReveal({ staggerDelay: 80 })

  const TABS: { key: TabKey; label: string }[] = [
    { key: 'reels', label: t('filter_reels') },
    { key: 'ads', label: t('filter_ads') },
    { key: 'youtube', label: t('filter_youtube') },
  ]

  const filtered = VIDEO_DATA.filter((v) => v.typeKey === activeTab)

  const isVertical = activeTab === 'reels' || activeTab === 'ads'
  const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-video'
  const gridClass = isVertical
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const modalAspectClass = modalItem && (modalItem.typeKey === 'reels' || modalItem.typeKey === 'ads')
    ? 'max-w-sm aspect-[9/16]'
    : 'max-w-3xl aspect-video'

  // Simultaneous autoplay when section enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
        if (entry.isIntersecting) {
          const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
            .connection
          if (connection?.saveData) return
          videos.forEach((v) => v.play().catch(() => null))
        } else {
          videos.forEach((v) => v.pause())
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Re-trigger autoplay when tab changes
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
    videos.forEach((v) => v.play().catch(() => null))
  }, [activeTab])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative pb-24 px-4 overflow-hidden"
    >
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 irys-glow-line-top" />

      <div className="max-w-[1200px] mx-auto text-center pt-12">
        {/* Header */}
        <SectionHeader
          badgeText={t('label')}
          badgeIcon={
            <span
              className="h-4 w-4 rounded-sm flex items-center justify-center text-[10px] font-bold"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), rgba(232,23,93,0.5))',
                color: '#fff',
              }}
            >
              ▶
            </span>
          }
          titlePart1={t('h2_part1')}
          titleItalic={t('h2_part2')}
          subtitle={t('subtitle')}
          revealFn={revealHeader}
          className="mb-10"
        />

        {/* Tab switcher */}
        <div ref={revealHeader(3)} className="flex items-center justify-center mt-4 mb-10">
          <div
            className="irys-conic-border rounded-full inline-flex overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className="px-5 py-2.5 text-[13px] font-medium rounded-full transition-all duration-200 text-white"
                style={{
                  background: activeTab === key ? 'var(--color-accent)' : 'transparent',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={`grid ${gridClass} gap-4 mb-6`}>
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setModalItem(item)}
              className="irys-card group flex flex-col cursor-pointer overflow-hidden text-left"
            >
              {/* Video wrapper */}
              <div className={`relative ${aspectClass} overflow-hidden flex-shrink-0`}>
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el
                  }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white font-semibold text-sm px-4 py-2 rounded-full bg-accent">
                    ▶ Voir
                  </span>
                </div>
              </div>

              {/* Info block */}
              <div className="px-3 py-2.5">
                <p className="font-heading font-bold text-[13px] text-text leading-tight truncate">
                  {item.clientName}
                </p>
                <p className="text-[11px] text-subdued mt-0.5 truncate">
                  {item.details}
                </p>
                <p className="text-[11px] text-accent font-semibold mt-1.5">
                  {item.offerName}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setModalItem(null)}
        >
          <div
            className={`relative w-full ${modalAspectClass} rounded-2xl overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <video src={modalItem.src} autoPlay controls className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
