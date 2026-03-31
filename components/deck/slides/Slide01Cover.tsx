import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

const STATS = [
  { value: '150+', label: 'clients' },
  { value: '1 600+', label: 'vidéos livrées' },
  { value: '3 ans', label: "d'expérience" },
]

export function Slide01Cover() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(238,29,82,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <motion.div {...fadeUp(0)}>
        <Image
          src="/images/Irys_logo_blanc_transparent.png"
          alt="Irys Agency"
          width={140}
          height={48}
          style={{ objectFit: 'contain', marginBottom: '40px' }}
          priority
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontFamily: 'IvyPresto, Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(48px, 7vw, 80px)',
          color: 'var(--color-text)',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: '20px',
        }}
      >
        Tu filmes.{' '}
        <span style={{ color: 'var(--color-accent)' }}>On livre.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: '18px',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
          maxWidth: '480px',
          lineHeight: 1.6,
          marginBottom: '64px',
        }}
      >
        Post-production vidéo Done-For-You pour infopreneurs
      </motion.p>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.3)}
        style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {STATS.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '12px',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '4px',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
