'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard'

type TabKey = 'reels' | 'ads' | 'youtube'

interface PortfolioItem {
  id: number
  src: string
  youtubeId?: string // Link to the full video on YouTube
  typeKey: TabKey
  clientName: string
  details: string
  offerName: string
}

import MagneticButton from './ui/MagneticButton'

// Expanded data to better showcase the carousel
// Expanded data to reflect the new Vercel Blob storage
const VIDEO_DATA: PortfolioItem[] = [
  // ── First 4 Priority (Imposés)
  { id: 1, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_27.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Focus · Edit Dynamique', offerName: 'Offre Starter + 8' },
  { id: 2, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/LES%20MATHS.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Accompagnement · Montage Expert', offerName: 'Offre Starter + 16' },
  { id: 3, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Nico_Lancement.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'ads', clientName: 'NICO', details: 'E-commerce · Lancement · Storytelling', offerName: 'One-Shot' },
  { id: 4, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Ernesto_Investir.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'youtube', clientName: 'ERNESTO.IMMO', details: 'Immobilier · Investissement', offerName: 'Offre Scale' },

  // ── Remaining interweaving
  { id: 5, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/XEN_Mixe.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · 16 Reels/mois', offerName: 'Offre Starter + 8' },
  { id: 6, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/350_ILYES.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: '350 BARBER', details: 'Coiffure · Lifestyle · Dynamic', offerName: 'Offre Starter + 8' },
  { id: 7, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Podcast_Versus.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'CECCA', details: 'Podcast · Multi-cam · Dynamic', offerName: 'Pack Podcast' },
  { id: 8, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/JO_PB.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'youtube', clientName: 'JONATHAN KHALFA', details: 'Business · 16 Reels + 2 YT', offerName: 'Offre Scale' },
  { id: 9, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_Enfant.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Hook Captivation', offerName: 'Offre Starter + 8' },
  { id: 10, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/XEN_Gratuit.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · Psychology', offerName: 'Offre Starter + 8' },
  { id: 11, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/350_CONCOUR.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'ads', clientName: '350 BARBER', details: 'Event · Jeu Concours', offerName: 'Offre Starter + 8' },
  { id: 12, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Podcast_Focus.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'CECCA', details: 'Podcast · Zoom Intro', offerName: 'Pack Podcast' },
  { id: 13, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Nico_Annonce.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'ads', clientName: 'NICO', details: 'Automobile · Teasing Annonce', offerName: 'One-Shot' },
  { id: 14, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Ernesto_Podcast.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'youtube', clientName: 'ERNESTO.IMMO', details: 'Podcast · Immobilier Tips', offerName: 'Offre Scale' },
  { id: 15, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_France.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Storytelling', offerName: 'Offre Starter + 8' },
  { id: 16, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/XEN_LOCKIN.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · High Temp', offerName: 'Offre Starter + 8' },
  { id: 17, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/350_DINOR.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: '350 BARBER', details: 'Coiffure · Celebrity ITW', offerName: 'Offre Starter + 8' },
  { id: 18, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Podcast_Rebond.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'CECCA', details: 'Podcast · Montage CC', offerName: 'Pack Podcast' },
  { id: 19, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/TUTO_PHONE%20EFFECT.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'IRYS TUTO', details: 'Transitions · Creative', offerName: 'Mastery' },
  { id: 20, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Nico_Main.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'ads', clientName: 'NICO', details: 'E-commerce · Lancement · Storytelling', offerName: 'One-Shot' }, // Original ID 3, moved to 20
  { id: 21, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_M.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Motivation', offerName: 'Offre Starter + 8' },
  { id: 22, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/XEN_Facture%20.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · Finance', offerName: 'Offre Starter + 8' },
  { id: 23, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/350_SOSO.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: '350 BARBER', details: 'Coiffure · Lifestyle 2', offerName: 'Offre Starter + 8' },
  { id: 24, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Podcast_Multi.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'CECCA', details: 'Podcast · Transition multi', offerName: 'Pack Podcast' },
  { id: 25, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/TUTO_UNDERWATTER.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'IRYS TUTO', details: 'VFX · Creative Edit', offerName: 'Mastery' },
  { id: 26, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_Passion.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Mastery', offerName: 'Offre Starter + 8' },
  { id: 27, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/Xen_Prix.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · Sales', offerName: 'Offre Starter + 8' },
  { id: 28, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/350_ITW.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: '350 BARBER', details: 'Workplace · Team Spirit', offerName: 'Offre Starter + 8' },
  { id: 29, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_De%20vinci.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · History', offerName: 'Offre Starter + 8' },
  { id: 30, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/XEN_Solitude.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'QUENTIN.PRPRO', details: 'Short Content · Deep', offerName: 'Offre Starter + 8' },
  { id: 31, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_PB_CREATEUR.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Creator Economy', offerName: 'Offre Starter + 8' },
  { id: 32, src: 'https://atkeqzzhhtmu8syd.public.blob.vercel-storage.com/KAA_%20Unmployed.mp4', youtubeId: 'VIDEO_ID_HERE', typeKey: 'reels', clientName: 'KILIAN.ADAM', details: 'Business · Mindset', offerName: 'Offre Starter + 8' },
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  useEffect(() => {
    if (emblaApi) emblaApi.reInit()
  }, [emblaApi, filtered])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()
  const modalAspectClass = modalItem && (modalItem.typeKey === 'reels' || modalItem.typeKey === 'ads')
    ? 'max-w-[400px] aspect-[9/16]'
    : 'max-w-5xl aspect-video'

  // Simultaneous autoplay when section enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
        if (entry.isIntersecting) {
          videos.forEach((v) => {
            v.muted = true;
            v.play().catch((err) => {
              console.warn("Autoplay was blocked or failed:", err);
            });
          });
        } else {
          videos.forEach((v) => v.pause())
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Re-trigger autoplay when tab changes
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
    videos.forEach((v) => v.play().catch(() => null))
  }, [activeTab])

  // Modal focus trap + Escape key
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
          subtitleClassName="text-lg text-white/80 max-w-2xl mx-auto"
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

        {/* Carousel Viewport */}
        <div className="relative group px-1 sm:px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {filtered.map((item, idx) => (
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
                      {/* Video wrapper */}
                      <div className={`relative ${aspectClass} overflow-hidden flex-shrink-0 rounded-xl bg-white/5`}>
                        <video
                          ref={(el) => {
                            videoRefs.current[idx] = el
                          }}
                          src={item.src}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        />
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
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {filtered.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-0"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-0"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Button with white glow */}
      <div className="flex justify-center mt-12 pb-12">
        <MagneticButton>
          <a
            href="https://youtube.com/@irysagency"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-sm font-bold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            <span aria-hidden="true">▶</span> {t('cta')}
          </a>
        </MagneticButton>
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
                
                {/* Premium Fallback Overlay */}
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
