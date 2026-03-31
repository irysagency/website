'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { VideoModal } from '../ui/VideoModal'

type Tab = 'reels' | 'ads' | 'youtube'

const VIDEOS: Record<Tab, string[]> = {
  reels: [
    '/videos/KAA_Passion.mp4',
    '/videos/KAA_France.mp4',
    '/videos/XEN_Gratuit.mp4',
    '/videos/XEN_Solitude.mp4',
  ],
  ads: [
    '/videos/ADS_CECCA_Ecom.mp4',
    '/videos/ADS_CECCA_Organisme.mp4',
  ],
  youtube: [
    '/videos/FOCUS_PODCAST_LONG_FORM.mp4',
    '/videos/ADAM_SWIFT_VLOG.mp4',
  ],
}

const TAB_LABELS: Record<Tab, string> = {
  reels: 'Reels / Shorts',
  ads: 'Ads',
  youtube: 'YouTube',
}

function VideoCard({ src, onExpand }: { src: string; onExpand: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        aspectRatio: '9/16',
      }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
      onClick={onExpand}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )
}

export function Slide07Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('reels')
  const [modalSrc, setModalSrc] = useState<string | null>(null)

  const videos = VIDEOS[activeTab]

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 64px 80px',
        gap: '32px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '8px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Portfolio
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: 'clamp(22px, 3vw, 36px)',
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
                color: 'var(--color-accent)',
              }}
            >
              réalisations
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '10px',
            padding: '4px',
          }}
        >
          {(Object.keys(TAB_LABELS) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: '7px',
                border: 'none',
                background: activeTab === tab ? 'var(--color-accent)' : 'transparent',
                color: activeTab === tab ? '#fff' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: activeTab === tab ? 600 : 400,
                fontFamily: 'var(--font-dm-sans), sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Video grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(videos.length, 4)}, 1fr)`,
          gap: '16px',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        {videos.map((src) => (
          <VideoCard key={src} src={src} onExpand={() => setModalSrc(src)} />
        ))}
      </motion.div>

      {/* Hint */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'rgba(245,240,232,0.2)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}
      >
        Survole pour lire · Clic pour agrandir
      </div>

      {/* Modal */}
      {modalSrc && (
        <VideoModal src={modalSrc} onClose={() => setModalSrc(null)} />
      )}
    </div>
  )
}
