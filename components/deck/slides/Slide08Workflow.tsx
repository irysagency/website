'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Kick-off',
    desc: 'On définit ta direction artistique : couleurs, sous-titres, ton visuel.',
    actor: 'Ensemble',
  },
  {
    num: '02',
    title: 'Tu filmes',
    desc: 'Tu déposes tes rushs bruts sur Frame.io. Rien de plus.',
    actor: 'Toi',
  },
  {
    num: '03',
    title: 'On monte',
    desc: 'Ton monteur attitré gère tout : montage, sound design, sous-titres.',
    actor: 'Irys',
  },
  {
    num: '04',
    title: 'Tu valides',
    desc: 'Retours directs sur la timeline Frame.io. Révisions illimitées.',
    actor: 'Toi',
  },
  {
    num: '05',
    title: 'En ligne',
    desc: 'On programme sur tes réseaux dès que tu valides.',
    actor: 'Irys',
  },
]

export function Slide08Workflow() {
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ textAlign: 'center' }}
      >
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '12px',
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          Comment ça marche
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          De tes rushs à ta vidéo{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            en ligne
          </span>
        </h2>
      </motion.div>

      {/* Steps */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0',
          width: '100%',
          maxWidth: '1000px',
          position: 'relative',
        }}
      >
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 + i * 0.08 }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '50%',
                  width: '100%',
                  height: '1px',
                  background:
                    'linear-gradient(to right, var(--color-accent), var(--color-border))',
                  zIndex: 0,
                }}
              />
            )}

            {/* Circle */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background:
                  i === 0
                    ? 'var(--color-accent)'
                    : 'var(--color-surface)',
                border: `1px solid ${i === 0 ? 'var(--color-accent)' : 'var(--color-border)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: i === 0 ? '#fff' : 'var(--color-accent)',
                fontFamily: 'var(--font-outfit), sans-serif',
                position: 'relative',
                zIndex: 1,
                marginBottom: '20px',
              }}
            >
              {step.num}
            </div>

            {/* Content */}
            <div
              style={{
                textAlign: 'center',
                padding: '0 12px',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: step.actor === 'Irys' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                {step.actor}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5,
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                {step.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'rgba(238,29,82,0.1)',
          border: '1px solid rgba(238,29,82,0.25)',
          borderRadius: '999px',
          padding: '10px 24px',
          fontSize: '14px',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}
      >
        ⚡ Livraison en{' '}
        <strong style={{ color: 'var(--color-accent)' }}>48–72h</strong>
      </motion.div>
    </div>
  )
}
