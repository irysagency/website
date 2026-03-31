'use client'

import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { useDeck } from './DeckProvider'

export function DeckNav() {
  const { currentSlide, totalSlides, navigate, isFullscreen, toggleFullscreen } =
    useDeck()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        zIndex: 50,
        background: 'rgba(13, 13, 13, 0.9)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--color-border)',
        borderRadius: '999px',
        padding: '8px 16px',
      }}
    >
      <button
        onClick={() => navigate('prev')}
        disabled={currentSlide === 0}
        aria-label="Slide précédent"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: currentSlide === 0 ? 'rgba(245,240,232,0.2)' : 'var(--color-text)',
          cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
          transition: 'color 0.2s',
        }}
      >
        <ChevronLeft size={18} />
      </button>

      <span
        style={{
          fontSize: '13px',
          color: 'var(--color-text-muted)',
          minWidth: '52px',
          textAlign: 'center',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {currentSlide + 1} / {totalSlides}
      </span>

      <button
        onClick={() => navigate('next')}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Slide suivant"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color:
            currentSlide === totalSlides - 1
              ? 'rgba(245,240,232,0.2)'
              : 'var(--color-text)',
          cursor:
            currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
          transition: 'color 0.2s',
        }}
      >
        <ChevronRight size={18} />
      </button>

      <div style={{ width: '1px', height: '16px', background: 'var(--color-border)' }} />

      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: 'var(--color-text-muted)',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
      >
        {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>
    </div>
  )
}
