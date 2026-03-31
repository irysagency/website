import { motion } from 'framer-motion'

const PROBLEMS = [
  {
    icon: '⏱',
    stat: '20–25h',
    unit: '/mois',
    title: 'Perdues sur le montage',
    desc: "Tu passes ton temps à monter, briefer, relancer et corriger au lieu de créer et vendre.",
  },
  {
    icon: '📉',
    stat: '2×',
    unit: '/semaine',
    title: 'Publié au lieu de 4',
    desc: "Ton audience stagne parce que la cadence est trop lente. L'algorithme récompense la régularité.",
  },
  {
    icon: '🎭',
    stat: '0',
    unit: '',
    title: 'Cohérence visuelle',
    desc: "Chaque vidéo a son propre style. Ton identité visuelle est floue. Le prospect ne te reconnaît pas.",
  },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

export function Slide02Problem() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 64px',
        gap: '48px',
      }}
    >
      {/* Title */}
      <motion.div {...fadeUp(0)} style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            marginBottom: '16px',
            padding: '4px 12px',
            border: '1px solid rgba(238,29,82,0.3)',
            borderRadius: '999px',
          }}
        >
          Le problème
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Ce que tu vis{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            en ce moment
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          width: '100%',
          maxWidth: '960px',
        }}
      >
        {PROBLEMS.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.1 + i * 0.1)}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ fontSize: '28px' }}>{p.icon}</div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {p.stat}
              </span>
              {p.unit && (
                <span
                  style={{
                    fontSize: '18px',
                    color: 'var(--color-text-muted)',
                    marginLeft: '4px',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                  }}
                >
                  {p.unit}
                </span>
              )}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                {p.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
