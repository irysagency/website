'use client'

type Quality = 'standard' | 'premium'

interface QualityToggleProps {
  quality: Quality
  onToggle: (q: Quality) => void
  labelStandard: string
  labelPremium: string
}

export function QualityToggle({ quality, onToggle, labelStandard, labelPremium }: QualityToggleProps) {
  const isPremium = quality === 'premium'

  return (
    <div className="flex justify-end mb-4">
      <div
        className="irys-conic-border rounded-full inline-flex overflow-hidden text-[11px] font-semibold"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <button
          type="button"
          onClick={() => onToggle('standard')}
          className="px-3 py-1 rounded-full transition-all duration-200"
          style={{
            background: !isPremium ? 'rgba(255,255,255,0.12)' : 'transparent',
            color: !isPremium ? '#fff' : 'rgba(245,240,232,0.5)',
          }}
        >
          {labelStandard}
        </button>
        <button
          type="button"
          onClick={() => onToggle('premium')}
          className="px-3 py-1 rounded-full transition-all duration-200"
          style={{
            background: isPremium ? 'var(--color-accent)' : 'transparent',
            color: isPremium ? '#fff' : 'rgba(245,240,232,0.5)',
          }}
        >
          {labelPremium}
        </button>
      </div>
    </div>
  )
}
