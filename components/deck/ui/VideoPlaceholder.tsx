import { Play } from 'lucide-react'

interface VideoPlaceholderProps {
  label?: string
}

export function VideoPlaceholder({ label = 'Témoignage client — à venir' }: VideoPlaceholderProps) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '9/16',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        color: 'var(--color-text-muted)',
        maxWidth: '240px',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(238, 29, 82, 0.12)',
          border: '1px solid rgba(238, 29, 82, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-accent)',
        }}
      >
        <Play size={20} fill="currentColor" />
      </div>
      <span
        style={{
          fontSize: '11px',
          textAlign: 'center',
          padding: '0 16px',
          lineHeight: 1.4,
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}
      >
        {label}
      </span>
    </div>
  )
}
