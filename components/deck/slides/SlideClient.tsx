'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Play } from 'lucide-react'
import type { ClientSlideData } from './data'

interface SlideClientProps {
  data: ClientSlideData
  slideNumber: number
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

function VideoPlayer({ src }: { src: string }) {
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
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function SlideClient({ data, slideNumber }: SlideClientProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 48px',
        gap: '20px',
      }}
    >
      {/* Slide label */}
      <motion.div
        {...fadeUp(0)}
        style={{
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          textAlign: 'center',
        }}
      >
        Transformation client {slideNumber} / 3
      </motion.div>

      {/* Main card */}
      <motion.div
        {...fadeUp(0.08)}
        style={{
          width: '100%',
          maxWidth: '1000px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
        }}
      >
        {/* Left: content */}
        <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Name + tags */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: 'clamp(20px, 2.5vw, 30px)',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              {data.name}
            </h2>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(238,29,82,0.1)',
                    border: '1px solid rgba(238,29,82,0.2)',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {data.services.map((s) => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                <CheckCircle2 size={15} color="#3B82F6" style={{ flexShrink: 0 }} />
                {s}
              </div>
            ))}
          </div>

          {/* Metrics — 2×2 grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}
          >
            {data.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              borderLeft: '2px solid rgba(238,29,82,0.35)',
              paddingLeft: '16px',
            }}
          >
            <p
              style={{
                fontFamily: 'IvyPresto, Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '14px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              {data.quote}
            </p>
          </div>
        </div>

        {/* Right: video */}
        <div
          style={{
            width: '240px',
            background: '#0a0a0a',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {data.videoSrc ? (
            <VideoPlayer src={data.videoSrc} />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--color-text-muted)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Play size={22} color="var(--color-text-muted)" />
              </div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                Vidéo à venir
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
