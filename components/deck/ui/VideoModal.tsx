'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  src: string
  onClose: () => void
}

export function VideoModal({ src, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.92)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '85vh',
        }}
      >
        <video
          src={src}
          controls
          autoPlay
          style={{
            maxWidth: '80vw',
            maxHeight: '80vh',
            borderRadius: '8px',
            display: 'block',
          }}
        />
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: 'absolute',
            top: '-40px',
            right: 0,
            background: 'transparent',
            border: 'none',
            color: 'rgba(245,240,232,0.7)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          <X size={16} /> Fermer
        </button>
      </div>
    </div>
  )
}
