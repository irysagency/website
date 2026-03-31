'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard'
import MagneticButton from './ui/MagneticButton'

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

// Autoplay video with per-element IntersectionObserver
// poster shows while loading → video takes over when buffered
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
        if (entry.isIntersecting) {
          el.play().catch(() => null)
        } else {
          el.pause()
        }
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

// Ordre imposé : #1 Kilian, #2 Quentin, #3 Nico, #4 Ernesto
// src vide = pas de fichier local → miniature YouTube affichée à la place
const VIDEO_DATA: PortfolioItem[] = [
  // ── Reels & Shorts ────────────────────────────────────────────────────────
  { id: 1,  src: '/videos/KAA_27.mp4',              youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Focus · Dynamic Edit',       offerName: 'Usine à contenu'    },
  { id: 2,  src: '/videos/LES_MATHS.mp4',           youtubeId: '5Egg356Cq30',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Coaching · Expert Edit',                offerName: 'Machine à Shorts'   },
  { id: 3,  src: '/videos/Nico_Lancement.mp4',      youtubeId: 'fo_RbvFOATM',    typeKey: 'reels', clientName: 'NICO',             details: 'Automotive · Launch · Storytelling',    offerName: 'Machine à Shorts'   },
  { id: 4,  src: '/videos/Ernesto_Investir.mp4',    youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'ERNESTO.IMMO',    details: 'Real Estate · Investment',              offerName: 'Usine à contenu'    },
  { id: 5,  src: '/videos/350_ILYES.mp4',           youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: '350 BARBER',      details: 'Barbershop · Lifestyle · Dynamic',      offerName: 'Machine à Shorts'   },
  { id: 6,  src: '/videos/KAA_Enfant.mp4',          youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Hook · Captivation',         offerName: 'Usine à contenu'    },
  { id: 7,  src: '/videos/Podcast_Versus.mp4',      youtubeId: 'GkMIQ0STBLA',    typeKey: 'reels', clientName: 'CECCA',           details: 'Podcast · Multi-cam · Dynamic',         offerName: 'Pack Podcast'       },
  { id: 8,  src: '/videos/XEN_Mixe.mp4',            youtubeId: 'xDHijcJwJtQ',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · 16 Reels/mo',           offerName: 'Machine à Shorts'   },
  { id: 9,  src: '/videos/KAA_France.mp4',          youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Storytelling',               offerName: 'Usine à contenu'    },
  { id: 10, src: '/videos/JO_PB.mp4',               youtubeId: 'bxPuaMCtnZM',    typeKey: 'reels', clientName: 'JONATHAN KHALFA', details: 'Business · 16 Reels + 2 YT',            offerName: 'Usine à contenu'    },
  { id: 11, src: '/videos/XEN_Gratuit.mp4',         youtubeId: '9YMhzMPxPmE',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · Psychology',            offerName: 'Machine à Shorts'   },
  { id: 12, src: '/videos/350_CONCOUR.mp4',         youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: '350 BARBER',      details: 'Event · Contest',                       offerName: 'Machine à Shorts'   },
  { id: 13, src: '/videos/KAA_M.mp4',               youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Motivation',                 offerName: 'Usine à contenu'    },
  { id: 14, src: '/videos/Podcast_Focus.mp4',       youtubeId: 'xg1dwyJs8Gw',    typeKey: 'reels', clientName: 'CECCA',           details: 'Podcast · Zoom Intro',                  offerName: 'Pack Podcast'       },
  { id: 15, src: '/videos/XEN_LOCKIN.mp4',          youtubeId: 'qi6f0WRxpJM',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · High Tempo',            offerName: 'Machine à Shorts'   },
  { id: 16, src: '/videos/Nico_Annonce.mp4',        youtubeId: 'UZ3SHFGWVV8',    typeKey: 'reels', clientName: 'NICO',            details: 'Automotive · Teaser · Announce',        offerName: 'Machine à Shorts'   },
  { id: 17, src: '/videos/KAA_Passion.mp4',         youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Mastery',                    offerName: 'Usine à contenu'    },
  { id: 18, src: '/videos/350_DINOR.mp4',           youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: '350 BARBER',      details: 'Barbershop · Celebrity ITW',            offerName: 'Machine à Shorts'   },
  { id: 19, src: '/videos/TUTO_PHONE_EFFECT.mp4',   youtubeId: 'z468TW1K_Fc',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Transitions · Creative',                offerName: 'Machine à Shorts'   },
  { id: 20, src: '/videos/Podcast_Rebond.mp4',      youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'CECCA',           details: 'Podcast · Creative Edit',               offerName: 'Pack Podcast'       },
  { id: 21, src: '/videos/KAA_De_vinci.mp4',        youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · History',                    offerName: 'Usine à contenu'    },
  { id: 22, src: '/videos/Ernesto_Podcast.mp4',     youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'ERNESTO.IMMO',    details: 'Podcast · Real Estate Tips',            offerName: 'Usine à contenu'    },
  { id: 23, src: '/videos/XEN_Facture.mp4',         youtubeId: '8EFq7PFdbSs',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · Finance',               offerName: 'Machine à Shorts'   },
  { id: 24, src: '/videos/350_SOSO.mp4',            youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: '350 BARBER',      details: 'Barbershop · Lifestyle',                offerName: 'Machine à Shorts'   },
  { id: 25, src: '/videos/KAA_PB_CREATEUR.mp4',     youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Creator Economy',            offerName: 'Usine à contenu'    },
  { id: 26, src: '/videos/TUTO_UNDERWATTER.mp4',    youtubeId: 'GSCR5mZBYiQ',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'VFX · Creative Edit',                   offerName: 'Machine à Shorts'   },
  { id: 27, src: '/videos/Podcast_Multi.mp4',       youtubeId: 'ErBezTcgYl4',    typeKey: 'reels', clientName: 'CECCA',           details: 'Podcast · Multi-transition',            offerName: 'Pack Podcast'       },
  { id: 28, src: '/videos/KAA_Unmployed.mp4',       youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: 'KILIAN.ADAM',     details: 'Business · Mindset',                    offerName: 'Usine à contenu'    },
  { id: 29, src: '/videos/Xen_Prix.mp4',            youtubeId: 'SIf133Dfd3w',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · Sales',                 offerName: 'Machine à Shorts'   },
  { id: 30, src: '/videos/350_ITW.mp4',             youtubeId: 'VIDEO_ID_HERE',  typeKey: 'reels', clientName: '350 BARBER',      details: 'Workplace · Team Spirit',               offerName: 'Machine à Shorts'   },
  { id: 31, src: '/videos/XEN_Solitude.mp4',        youtubeId: 'twjEGMEez9w',    typeKey: 'reels', clientName: 'QUENTIN.PRPROJ',  details: 'Short Content · Deep',                  offerName: 'Machine à Shorts'   },
  // Ads & VSL — alternance IRYS / CECCA / DIGITAL
  { id: 32, src: '/videos/Irys_VSL.mp4',                    youtubeId: '1f3T_Kghmpo',    typeKey: 'ads',     clientName: 'IRYS AGENCY',      details: 'VSL · Done-For-You · Edit',             offerName: 'Conversion Max'     },
  { id: 33, src: '/videos/ADS_CECCA_Organisme.mp4',         youtubeId: 'vBARPUcjvf8',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · Organisation · Performance',      offerName: 'Pack Ads'           },
  { id: 36, src: '/videos/ADS_Cahier_de_vacance.mp4',       youtubeId: 'VIDEO_ID_HERE',  typeKey: 'ads',     clientName: 'DIGITAL CAMPUS',   details: 'ADS · Education · Holiday Book',        offerName: 'Pack Ads'           },
  { id: 34, src: '/videos/ADS_CECCA_Ecom.mp4',              youtubeId: 'WfBtXbMeSxI',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · E-Commerce · Conversion',         offerName: 'Pack Ads'           },
  { id: 37, src: '/videos/ADS_DOUDOUNE.mp4',                youtubeId: 'VIDEO_ID_HERE',  typeKey: 'ads',     clientName: 'DIGITAL CAMPUS',   details: 'ADS · Fashion · Conversion',            offerName: 'Pack Ads'           },
  { id: 35, src: '/videos/ADS_CECCA_PENNYLANE.mp4',         youtubeId: '1xkFD_58Cpk',    typeKey: 'ads',     clientName: 'CECCA',            details: 'ADS · Pennylane · SaaS',                offerName: 'Pack Ads'           },
  { id: 38, src: '/videos/ADS_JPO_SOL.mp4',                 youtubeId: 'VIDEO_ID_HERE',  typeKey: 'ads',     clientName: 'DIGITAL CAMPUS',   details: 'ADS · Open Day · Recruitment',          offerName: 'Pack Ads'           },
  // YouTube & Vlogs — alternance KILIAN / CECCA / ADAM / CECCA / KILIAN / CECCA
  { id: 40, src: '/videos/VLOG_MARS_VF.mp4',                youtubeId: 'VP3nLBnMb34',    typeKey: 'youtube', clientName: 'KILIAN.ADAM',      details: 'Vlog · Build in Public · March 2025',   offerName: 'Usine à contenu'    },
  { id: 43, src: '/videos/VERSUS_PODCAST_LONG_FORM.mp4',    youtubeId: 'F3zZbiMty6A',    typeKey: 'youtube', clientName: 'CECCA',            details: 'Podcast Complet · Versus · Full Ep.',   offerName: 'Pack Podcast'       },
  { id: 42, src: '/videos/ADAM_SWIFT_VLOG.mp4',             youtubeId: '-8V4O9KHgzE',    typeKey: 'youtube', clientName: 'ADAM SWIFT',       details: 'Vlog · Lifestyle · Storytelling',       offerName: 'Pack Youtube'       },
  { id: 44, src: '/videos/FOCUS_PODCAST_LONG_FORM.mp4',     youtubeId: '1YSq6zkjahc',    typeKey: 'youtube', clientName: 'CECCA',            details: 'Podcast Complet · Focus · Full Ep.',    offerName: 'Pack Podcast'       },
  { id: 41, src: '/videos/VLOG_FEVRIER_KAA.mp4',            youtubeId: 'ZQcsQ8nEqsw',    typeKey: 'youtube', clientName: 'KILIAN.ADAM',      details: 'Vlog · Build in Public · Feb. 2025',    offerName: 'Usine à contenu'    },
  { id: 45, src: '/videos/MULTI_PODCAST_LONG_FORM.mp4',     youtubeId: '6iO8Bj5VdZw',    typeKey: 'youtube', clientName: 'CECCA',            details: 'Podcast Complet · Multi · Full Ep.',    offerName: 'Pack Podcast'       },
]

export default function Portfolio() {
  const t = useTranslations('portfolio')
  const [activeTab, setActiveTab] = useState<TabKey>('reels')
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null)
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({})
  const revealHeader = useScrollReveal({ staggerDelay: 80 })

  const TABS: { key: TabKey; label: string }[] = [
    { key: 'reels', label: t('filter_reels') },
    { key: 'ads', label: t('filter_ads') },
    { key: 'youtube', label: t('filter_youtube') },
  ]

  const filtered = VIDEO_DATA.filter((v) => v.typeKey === activeTab)
  const isVertical = activeTab === 'reels' || activeTab === 'ads'
  const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-video'

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
  })

  // Reset errors when changing tab
  useEffect(() => {
    setVideoErrors({})
  }, [activeTab])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  const modalAspectClass = modalItem && (modalItem.typeKey === 'reels' || modalItem.typeKey === 'ads')
    ? 'max-w-[400px] aspect-[9/16]'
    : 'max-w-5xl aspect-video'

  // Modal Escape key
  useEffect(() => {
    if (!modalItem) return
    const closeBtn = document.getElementById('modal-close-btn')
    closeBtn?.focus()
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalItem])

  return (
    <section id="portfolio" className="relative pb-24 px-4 overflow-hidden">
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
                background: 'linear-gradient(135deg, var(--color-accent), rgba(238,29,82,0.5))',
                color: '#fff',
              }}
              aria-hidden="true"
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
            className="irys-conic-border rounded-full inline-flex overflow-hidden p-1"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {TABS.map(({ key, label }) => (
              <MagneticButton key={key}>
                <button
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 text-[13px] font-medium rounded-full transition-all duration-300 ${activeTab === key ? 'text-white' : 'text-subdued hover:text-white'}`}
                  style={{
                    background: activeTab === key ? 'var(--color-accent)' : 'transparent',
                    boxShadow: activeTab === key ? '0 0 20px rgba(238, 29, 82, 0.4)' : 'none',
                  }}
                >
                  {label}
                </button>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Carousel */}
        {filtered.length > 0 && (
          <div className="relative group px-1 sm:px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {filtered.map((item) => {
                  const ytPoster =
                    item.youtubeId && item.youtubeId !== 'VIDEO_ID_HERE'
                      ? `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`
                      : undefined
                  const showVideo = item.src && !videoErrors[item.id]

                  return (
                    <div
                      key={item.id}
                      className={`flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_24%] min-w-0 ${!isVertical ? 'lg:flex-[0_0_45%]' : ''} group/card`}
                    >
                      <SpotlightCard
                        className="p-0.5 cursor-pointer overflow-hidden rounded-2xl relative"
                        spotlightColor="rgba(238, 29, 82, 0.15)"
                      >
                        <button
                          type="button"
                          onClick={() => setModalItem(item)}
                          className="w-full h-full flex flex-col text-left"
                        >
                          {/* Video / thumbnail wrapper */}
                          <div className={`relative ${aspectClass} overflow-hidden flex-shrink-0 rounded-xl bg-white/5`}>
                            {showVideo ? (
                              <VideoPlayer
                                src={item.src}
                                poster={ytPoster}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                onError={() => setVideoErrors((prev) => ({ ...prev, [item.id]: true }))}
                              />
                            ) : (
                              <img
                                src={ytPoster ?? ''}
                                alt={item.clientName}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                              />
                            )}

                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors duration-300 opacity-0 group-hover/card:opacity-100">
                              <span className="text-white font-semibold text-[11px] px-4 py-2 rounded-full bg-accent shadow-lg shadow-accent/20">
                                <span aria-hidden="true">▶</span> Voir
                              </span>
                            </div>
                          </div>

                          {/* Info block */}
                          <div className="px-3 py-4 mt-1">
                            <p className="font-heading font-bold text-[13.5px] text-text leading-tight truncate uppercase tracking-tight">
                              {item.clientName}
                            </p>
                            <p className="text-[10px] text-subdued mt-1 truncate uppercase opacity-60">
                              {item.details}
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <p className="text-[11px] text-accent font-bold uppercase italic tracking-wider">
                                {item.offerName}
                              </p>
                            </div>
                          </div>
                        </button>
                      </SpotlightCard>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/80 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={modalItem?.clientName}
          onClick={() => setModalItem(null)}
        >
          <div
            className={`relative w-full ${modalAspectClass} rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 border border-white/5 bg-black`}
            onClick={(e) => e.stopPropagation()}
          >
            {modalItem.youtubeId && modalItem.youtubeId !== 'VIDEO_ID_HERE' ? (
              <iframe
                src={`https://www.youtube.com/embed/${modalItem.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={modalItem.clientName}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                <video
                  src={modalItem.src}
                  autoPlay
                  loop
                  controls
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
                    Aperçu · Clip 15s High Quality
                  </span>
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none px-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
                    En attente du lien complet YouTube · {modalItem.clientName}
                  </p>
                </div>
              </div>
            )}
            <button
              id="modal-close-btn"
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-90 z-20"
              style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', backdropFilter: 'blur(10px)' }}
              aria-label="Fermer"
            >
              <span aria-hidden="true" className="text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
