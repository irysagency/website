'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { MetricBadge } from '../ui/MetricBadge'
import { VideoPlaceholder } from '../ui/VideoPlaceholder'
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

export function SlideClient({ data, slideNumber }: SlideClientProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 64px',
        gap: '32px',
      }}
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            marginBottom: '8px',
          }}
        >
          Transformation client {slideNumber} / 3
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
          {data.name}
        </h2>
      </motion.div>

      {/* Main card */}
      <motion.div
        {...fadeUp(0.1)}
        style={{
          width: '100%',
          maxWidth: '960px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '40px',
          alignItems: 'start',
        }}
      >
        {/* Left: content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {data.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '12px',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(238,29,82,0.12)',
                  border: '1px solid rgba(238,29,82,0.25)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.services.map((s) => (
              <div
                key={s}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '15px',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                <CheckCircle2 size={16} color="var(--color-accent)" />
                {s}
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {data.metrics.map((m) => (
              <MetricBadge key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              borderLeft: '2px solid rgba(238,29,82,0.4)',
              paddingLeft: '16px',
            }}
          >
            <p
              style={{
                fontFamily: 'IvyPresto, Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '15px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              {data.quote}
            </p>
          </div>
        </div>

        {/* Right: video */}
        <VideoPlaceholder />
      </motion.div>
    </div>
  )
}
