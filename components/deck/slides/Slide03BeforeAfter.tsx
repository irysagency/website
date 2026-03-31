import { motion } from 'framer-motion'

const BEFORE = [
  'Monter toi-même tes vidéos',
  'Briefer un freelance par message vocal',
  'Relancer parce que la V1 est en retard',
  'Corriger 3 allers-retours minimum',
  'Gérer Google Drive, WeTransfer, zip',
  'Publier manuellement sur chaque réseau',
  'Recommencer la semaine prochaine',
]

const AFTER = [
  'Tu filmes',
  'Tu déposes tes rushs sur Frame.io',
  'On monte, on soigne, on livre',
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

export function Slide03BeforeAfter() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 64px',
        gap: '40px',
      }}
    >
      <motion.h2
        {...fadeUp(0)}
        style={{
          fontFamily: 'var(--font-outfit), sans-serif',
          fontSize: 'clamp(24px, 3.5vw, 40px)',
          fontWeight: 700,
          color: 'var(--color-text)',
          textAlign: 'center',
          letterSpacing: '-0.02em',
        }}
      >
        La différence avec{' '}
        <span
          style={{
            fontFamily: 'IvyPresto, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--color-accent)',
          }}
        >
          Irys
        </span>
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2px 1fr',
          gap: '0',
          width: '100%',
          maxWidth: '900px',
          alignItems: 'start',
        }}
      >
        {/* Before */}
        <motion.div {...fadeUp(0.1)} style={{ paddingRight: '40px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.3)',
              marginBottom: '24px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Avant
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {BEFORE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '15px',
                  color: 'rgba(245,240,232,0.5)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: '#666', marginTop: '1px', flexShrink: 0 }}>✕</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <div
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-accent), transparent)',
            height: '100%',
            minHeight: '280px',
          }}
        />

        {/* After */}
        <motion.div {...fadeUp(0.2)} style={{ paddingLeft: '40px' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '24px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Avec Irys
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {AFTER.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  lineHeight: 1.3,
                }}
              >
                <span
                  style={{
                    color: 'var(--color-accent)',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(238,29,82,0.1)',
              border: '1px solid rgba(238,29,82,0.3)',
              borderRadius: '8px',
              padding: '10px 16px',
              fontSize: '14px',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 500,
            }}
          >
            {'<'} 1h par semaine sur ton contenu
          </div>
        </motion.div>
      </div>
    </div>
  )
}
