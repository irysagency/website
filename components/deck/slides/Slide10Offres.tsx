'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const OFFRES = [
  {
    name: 'Machine à Shorts',
    icon: '📱',
    price: '425 €',
    period: '/mois HT',
    desc: 'Idéal pour commencer à déléguer',
    recommended: false,
    features: [
      '8 Shorts / Reels par mois',
      'Frame.io dédié',
      'Hub Notion',
      'Canal Slack privé',
      'Programmation automatique',
      'Reporting mensuel',
    ],
  },
  {
    name: 'Croissance Totale',
    icon: '⚖️',
    price: '1 325 €',
    period: '/mois HT',
    desc: 'Dominer sur les deux formats',
    recommended: true,
    features: [
      '16 Shorts / Reels par mois',
      '2 vidéos YouTube par mois',
      'Miniatures A/B testing',
      'Tout ce qui est inclus dans Machine à Shorts',
    ],
  },
  {
    name: 'Conversion Max',
    icon: '🌍',
    price: '1 625 €',
    period: '/mois HT',
    desc: 'Pub, tunnels, lancements',
    recommended: false,
    features: [
      '8 Ads / Shorts par mois',
      '1 VSL complète (2–5 min)',
      'Tunnels de vente et pub',
      'Tout ce qui est inclus dans Machine à Shorts',
    ],
  },
]

export function Slide10Offres() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 48px',
        gap: '36px',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ textAlign: 'center' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Choisis ton niveau de{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            délégation
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '960px',
          alignItems: 'stretch',
        }}
      >
        {OFFRES.map((offre, i) => (
          <motion.div
            key={offre.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 + i * 0.08 }}
            style={{
              background: offre.recommended
                ? 'rgba(238,29,82,0.06)'
                : 'var(--color-surface)',
              border: offre.recommended
                ? '1px solid rgba(238,29,82,0.35)'
                : '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative',
            }}
          >
            {offre.recommended && (
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--color-accent)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 14px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Recommandé
              </div>
            )}

            <div>
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>{offre.icon}</div>
              <div
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: 'var(--color-text)',
                  marginBottom: '4px',
                }}
              >
                {offre.name}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                {offre.desc}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: offre.recommended ? 'var(--color-accent)' : 'var(--color-text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {offre.price}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                }}
              >
                {offre.period}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {offre.features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '13px',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    lineHeight: 1.4,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    color="var(--color-accent)"
                    style={{ marginTop: '1px', flexShrink: 0 }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'rgba(238,29,82,0.08)',
          border: '1px solid rgba(238,29,82,0.2)',
          borderRadius: '12px',
          padding: '14px 28px',
          fontSize: '14px',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          textAlign: 'center',
        }}
      >
        🎁{' '}
        <strong style={{ color: 'var(--color-accent)' }}>
          1ère vidéo offerte
        </strong>{' '}
        · Livrée en 48h · Zéro engagement
      </motion.div>
    </div>
  )
}
