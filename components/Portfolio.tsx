'use client'

import { useEffect, useRef, useState } from 'react'

interface PortfolioItem {
  id: number
  src: string
  label: string
  type: 'YouTube' | 'Short' | 'Publicité' | 'VSL'
}

// TODO: REPLACE — placeholder videos, swap with real client work
const VIDEOS: PortfolioItem[] = [
  { id: 1, src: '/videos/portfolio-1.mp4', label: 'YouTube Long Format', type: 'YouTube' },
  { id: 2, src: '/videos/portfolio-2.mp4', label: 'Short Viral', type: 'Short' },
  { id: 3, src: '/videos/portfolio-3.mp4', label: 'Publicité Meta', type: 'Publicité' },
  { id: 4, src: '/videos/portfolio-4.mp4', label: 'VSL Formation', type: 'VSL' },
  { id: 5, src: '/videos/portfolio-5.mp4', label: 'YouTube Tuto', type: 'YouTube' },
  { id: 6, src: '/videos/portfolio-6.mp4', label: 'Short Motivation', type: 'Short' },
]

const FILTERS = ['Tous', 'YouTube', 'Short', 'Publicité', 'VSL'] as const
type Filter = (typeof FILTERS)[number]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Tous')
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const filtered =
    activeFilter === 'Tous'
      ? VIDEOS
      : VIDEOS.filter((v) => v.type === activeFilter)

  // Simultaneous autoplay when section enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
        if (entry.isIntersecting) {
          // Respect data-saver preference
          const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-[var(--color-surface)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Du contenu qui{' '}
            <span className="font-display-italic font-light">convertit vraiment.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl">
            Chaque vidéo est construite pour générer de l'engagement, de la confiance, et des ventes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === f
                  ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                  : 'border-[var(--color-separator)]/20 text-[var(--color-text-muted)] hover:border-[var(--color-separator)]/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setModalSrc(item.src)}
              className="group relative aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)] cursor-pointer"
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el
                }}
                src={item.src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-text)]/0 group-hover:bg-[var(--color-text)]/50 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium text-sm bg-[var(--color-accent)] px-4 py-2 rounded-full">
                  ▶ Voir
                </span>
              </div>
              {/* Label */}
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModalSrc(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={modalSrc}
              autoPlay
              controls
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setModalSrc(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
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
