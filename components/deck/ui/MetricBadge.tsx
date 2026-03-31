interface MetricBadgeProps {
  value: string
  label: string
}

export function MetricBadge({ value, label }: MetricBadgeProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span
        style={{
          fontSize: '36px',
          fontWeight: 700,
          color: 'var(--color-text)',
          fontFamily: 'var(--font-outfit), sans-serif',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: '12px',
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}
      >
        {label}
      </span>
    </div>
  )
}
