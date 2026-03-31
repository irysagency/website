'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'

const COMPARISON = [
  {
    pain: 'Ghosting et vacances imprévues.',
    gain: 'Accompagnement 7j/7 sans coupure.',
  },
  {
    pain: 'Gérer plusieurs monteurs, les aligner, les relancer.',
    gain: 'Une seule équipe coordonnée, un seul interlocuteur.',
  },
  {
    pain: 'Tu montes toi-même — 20 à 25h perdues par mois.',
    gain: 'Tu filmes, on monte. Zéro heure de montage de ton côté.',
  },
  {
    pain: 'Toujours en flux tendu et stressé.',
    gain: "Dors tranquille avec de l'avance sur ton contenu.",
  },
  {
    pain: 'Une seule vision créative limitée.',
    gain: 'Monteur + Manager dédiés à ton ADN.',
  },
  {
    pain: 'Tarifs variables et surprises.',
    gain: 'Tarif fixe mensuel, zéro frais caché.',
  },
  {
    pain: 'Relances et technique pénible.',
    gain: 'Tu balances tes rushs, on gère la technique.',
  },
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
        padding: '32px 64px',
        gap: '28px',
      }}
    >
      <motion.h2
        {...fadeUp(0)}
        style={{
          fontFamily: 'var(--font-outfit), sans-serif',
          fontSize: 'clamp(22px, 3vw, 36px)',
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

      {/* Column headers */}
      <motion.div
        {...fadeUp(0.05)}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          width: '100%',
          maxWidth: '860px',
          padding: '0 8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              flexShrink: 0,
              width: '24px',
              height: '24px',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,50,50,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <X size={12} color="#ef4444" style={{ transform: 'rotate(-45deg)' }} />
          </div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Travailler seul ou avec un freelance
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              flexShrink: 0,
              width: '24px',
              height: '24px',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <CheckCircle2 size={12} color="#22c55e" style={{ transform: 'rotate(-45deg)' }} />
          </div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Déléguer à Irys Agency
          </span>
        </div>
      </motion.div>

      {/* Comparison card */}
      <motion.div
        {...fadeUp(0.1)}
        style={{
          width: '100%',
          maxWidth: '860px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '8px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Vertical separator */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            background: 'rgba(255,255,255,0.04)',
          }}
        />

        {/* Irys side glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '50%',
            background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(238,29,82,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {COMPARISON.map(({ pain, gain }, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                padding: '12px 0',
                borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              {/* Left: Pain */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingRight: '16px' }}>
                <div
                  style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    width: '18px',
                    height: '18px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.2)',
                  }}
                >
                  <X size={10} color="rgba(239,68,68,0.7)" />
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.45,
                    color: 'rgba(245,240,232,0.5)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                  }}
                >
                  {pain}
                </p>
              </div>

              {/* Right: Gain */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingLeft: '16px' }}>
                <div
                  style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    width: '18px',
                    height: '18px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}
                >
                  <CheckCircle2 size={10} color="#22c55e" />
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.45,
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                  }}
                >
                  {gain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
