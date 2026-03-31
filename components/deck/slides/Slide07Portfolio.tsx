'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

type TabKey = 'reels' | 'ads' | 'youtube'

interface PortfolioItem {
  id: number
  src: string
  youtubeId?: string
  typeKey: TabKey
  clientName: string
  details: string
  offerName: string
}

const VIDEO_DATA: PortfolioItem[] = [
  { id: 1,  src: '/videos/KAA_27.mp4',              youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels',   clientName: 'KILIAN.ADAM',      details: 'Business · Focus · Dynamic Edit',     offerName: 'Usine à contenu'  },
  { id: 2,  src: '/videos/LES_MATHS.mp4',           youtubeId: '5Egg356Cq30',    typeKey: 'reels',   clientName: 'QUENTIN.PRPROJ',   details: 'Coaching · Expert Edit',              offerName: 'Machine à Shorts' },
  { id: 3,  src: '/videos/Nico_Lancement.mp4',      youtubeId: 'fo_RbvFOATM',    typeKey: 'reels',   clientName: 'NICO',             details: 'Automotive · Launch · Storytelling',  offerName: 'Machine à Shorts' },
  { id: 4,  src: '/videos/Ernesto_Investir.mp4',    youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels',   clientName: 'ERNESTO.IMMO',     details: 'Real Estate · Investment',            offerName: 'Usine à contenu'  },
  { id: 5,  src: '/videos/350_ILYES.mp4',           youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels',   clientName: '350 BARBER',       details: 'Barbershop · Lifestyle · Dynamic',    offerName: 'Machine à Shorts' },
  { id: 6,  src: '/videos/KAA_Enfant.mp4',          youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels',   clientName: 'KILIAN.ADAM',      details: 'Business · Hook · Captivation',       offerName: 'Usine à contenu'  },
  { id: 7,  src: '/videos/Podcast_Versus.mp4',      youtubeId: 'GkMIQ0STBLA',    typeKey: 'reels',   clientName: 'CECCA',            details: 'Podcast · Multi-cam · Dynamic',       offerName: 'Pack Podcast'     },
  { id: 8,  src: '/videos/XEN_Mixe.mp4',            youtubeId: 'xDHijcJwJtQ',    typeKey: 'reels',   clientName: 'QUENTIN.PRPROJ',   details: 'Short Content · 16 Reels/mo',         offerName: 'Machine à Shorts' },
  { id: 9,  src: '/videos/KAA_France.mp4',          youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels',   clientName: 'KILIAN.ADAM',      details: 'Business · Storytelling',             offerName: 'Usine à contenu'  },
  { id: 10, src: '/videos/JO_PB.mp4',               youtubeId: 'bxPuaMCtnZM',    typeKey: 'reels',   clientName: 'JONATHAN KHALFA',  details: 'Business · 16 Reels + 2 YT',         offerName: 'Usine à contenu'  },
  { id: 11, src: '/videos/XEN_Gratuit.mp4',         youtubeId: '9YMhzMPxPmE',    typeKey: 'reels',   clientName: 'QUENTIN.PRPROJ',   details: 'Short Content · Psychology',          offerName: 'Machine à Shorts' },
  { id: 32, src: '/videos/Irys_VSL.mp4',            youtubeId: '1f3T_Kghmpo',    typeKey: 'ads',     clientName: 'IRYS AGENCY',      details: 'VSL · Done-For-You · Edit',           offerName: 'Conversion Max'   },
  { id: 33, src: '/videos/ADS_CECCA_Organisme.mp4', youtubeId: 'vBARPUcjvf8',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · Organisation · Performance',    offerName: 'Pack Ads'         },
  { id: 36, src: '/videos/ADS_Cahier_de_vacance.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'ads',    clientName: 'DIGITAL CAMPUS',   details: 'ADS · Education · Holiday Book',      offerName: 'Pack Ads'         },
  { id: 34, src: '/videos/ADS_CECCA_Ecom.mp4',      youtubeId: 'WfBtXbMeSxI',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · E-Commerce · Conversion',       offerName: 'Pack Ads'         },
  { id: 37, src: '/videos/ADS_DOUDOUNE.mp4',        youtubeId: 'VIDEO_ID_HERE',  typeKey: 'ads',     clientName: 'DIGITAL CAMPUS',   details: 'ADS · Fashion · Conversion',          offerName: 'Pack Ads'         },
  { id: 35, src: '/videos/ADS_CECCA_PENNYLANE.mp4', youtubeId: '1xkFD_58Cpk',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · Pennylane · SaaS',              offerName: 'Pack Ads'         },
  { id: 40, src: '/videos/VLOG_MARS_VF.mp4',        youtubeId: 'VP3nLBnMb34',    typeKey: 'youtube', clientName: 'KILIAN.ADAM',      details: 'Vlog · Build in Public · March 2025', offerName: 'Usine à contenu'  },
  { id: 43, src: '/videos/VERSUS_PODCAST_LONG_FORM.mp4', youtubeId: 'F3zZbiMty6A', typeKey: 'youtube', clientName: 'CECCA',          details: 'Podcast Complet · Versus · Full Ep.', offerName: 'Pack Podcast'     },
  { id: 42, src: '/videos/ADAM_SWIFT_VLOG.mp4',     youtubeId: '-8V4O9KHgzE',    typeKey: 'youtube', clientName: 'ADAM SWIFT',       details: 'Vlog · Lifestyle · Storytelling',     offerName: 'Pack Youtube'     },
  { id: 44, src: '/videos/FOCUS_PODCAST_LONG_FORM.mp4', youtubeId: '1YSq6zkjahc', typeKey: 'youtube', clientName: 'CECCA',           details: 'Podcast Complet · Focus · Full Ep.',  offerName: 'Pack Podcast'     },
  { id: 41, src: '/videos/VLOG_FEVRIER_KAA.mp4',    youtubeId: 'ZQcsQ8nEqsw',    typeKey: 'youtube', clientName: 'KILIAN.ADAM',      details: 'Vlog · Build in Public · Feb. 2025',  offerName: 'Usine à contenu'  },
  { id: 45, src: '/videos/MULTI_PODCAST_LONG_FORM.mp4', youtubeId: '6iO8Bj5VdZw', typeKey: 'youtube', clientName: 'CECCA',           details: 'Podcast Complet · Multi · Full Ep.',  offerName: 'Pack Podcast'     },
]

const TABS: { key: TabKey; label: string }[] = [
  { key: 'reels', label: 'Reels & Shorts' },
  { key: 'ads', label: 'Ads & VSL' },
  { key: 'youtube', label: 'YouTube & Vlogs' },
]

function VideoPlayer({
  src,
  poster,
  className,
  onError,
}: {
  src: string
  poster?: string
  className?: string
  onError?: () => void
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => null)
        else el.pause()
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      onError={onError}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function Slide07Portfolio() {
  const [activeTab, setActiveTab] = useState<TabKey>('reels')
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null)
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({})

  const filtered = VIDEO_DATA.filter((v) => v.typeKey === activeTab)
  const isVertical = activeTab === 'reels' || activeTab === 'ads'
  const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-video'

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true, dragFree: true })

  useEffect(() => { setVideoErrors({}) }, [activeTab])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const modalAspectClass =
    modalItem && (modalItem.typeKey === 'reels' || modalItem.typeKey === 'ads')
      ? 'max-w-[400px] aspect-[9/16]'
      : 'max-w-5xl aspect-video'

  useEffect(() => {
    if (!modalItem) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalItem(null) }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalItem])

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 48px 16px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '12px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 600,
            marginBottom: '6px',
          }}
        >
          <span
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '3px',
              background: 'linear-gradient(135deg, var(--color-accent), rgba(238,29,82,0.5))',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              color: '#fff',
            }}
          >
            ▶
          </span>
          RÉALISATIONS
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(20px, 2.8vw, 32px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Nos{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            réalisations
          </span>
        </h2>
      </div>

      {/* Tab switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--color-border)',
            borderRadius: '999px',
            padding: '4px',
          }}
        >
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              style={{
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 500,
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                transition: 'all 0.3s',
                background: activeTab === key ? 'var(--color-accent)' : 'transparent',
                color: activeTab === key ? '#fff' : 'var(--color-text-muted)',
                boxShadow: activeTab === key ? '0 0 20px rgba(238,29,82,0.4)' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <div style={{ overflow: 'hidden', height: '100%' }} ref={emblaRef}>
          <div style={{ display: 'flex', gap: '12px', height: '100%', alignItems: 'flex-start' }}>
            {filtered.map((item) => {
              const ytPoster =
                item.youtubeId && item.youtubeId !== 'VIDEO_ID_HERE'
                  ? `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`
                  : undefined
              const showVideo = !!(item.src && !videoErrors[item.id])

              return (
                <div
                  key={item.id}
                  style={{
                    flex: isVertical ? '0 0 14%' : '0 0 42%',
                    minWidth: 0,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setModalItem(item)}
                    style={{
                      width: '100%',
                      padding: 0,
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      className={`relative ${aspectClass} overflow-hidden flex-shrink-0`}
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      {showVideo ? (
                        <VideoPlayer
                          src={item.src}
                          poster={ytPoster}
                          className="w-full h-full object-cover"
                          onError={() => setVideoErrors((prev) => ({ ...prev, [item.id]: true }))}
                        />
                      ) : ytPoster ? (
                        <img
                          src={ytPoster}
                          alt={item.clientName}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                    <div style={{ padding: '6px 8px', textAlign: 'left' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-outfit), sans-serif',
                          fontWeight: 700,
                          fontSize: '10px',
                          color: 'var(--color-text)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.clientName}
                      </p>
                      <p
                        style={{
                          fontSize: '9px',
                          color: 'var(--color-text-muted)',
                          marginTop: '2px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          opacity: 0.7,
                        }}
                      >
                        {item.details}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} />
                        <p
                          style={{
                            fontSize: '9px',
                            color: 'var(--color-accent)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontStyle: 'italic',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.offerName}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        {filtered.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              style={{
                position: 'absolute',
                left: '-14px',
                top: '38%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              style={{
                position: 'absolute',
                right: '-14px',
                top: '38%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backdropFilter: 'blur(20px)',
            background: 'rgba(0,0,0,0.85)',
          }}
          role="dialog"
          aria-modal="true"
          onClick={() => setModalItem(null)}
        >
          <div
            className={`relative w-full ${modalAspectClass} rounded-2xl overflow-hidden`}
            style={{
              border: '1px solid rgba(255,255,255,0.05)',
              background: '#000',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {modalItem.youtubeId && modalItem.youtubeId !== 'VIDEO_ID_HERE' ? (
              <iframe
                src={`https://www.youtube.com/embed/${modalItem.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={modalItem.clientName}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0 }}
              />
            ) : (
              <video
                src={modalItem.src}
                autoPlay
                loop
                controls
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            )}
            <button
              type="button"
              onClick={() => setModalItem(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                backdropFilter: 'blur(10px)',
                zIndex: 60,
              }}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
