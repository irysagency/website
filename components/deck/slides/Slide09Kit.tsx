'use client'

import { motion } from 'framer-motion'

const KIT_ITEMS = [
  {
    icon: '📥',
    title: 'Frame.io dédié',
    desc: 'Dépôt des rushs et retours directs sur ta timeline',
  },
  {
    icon: '📋',
    title: 'Hub Notion',
    desc: 'Tableau de bord : avancement, scripts, deadlines',
  },
  {
    icon: '💬',
    title: 'Canal Slack privé',
    desc: 'Communication directe avec ton monteur attitré',
  },
  {
    icon: '🎉',
    title: 'Welcome Kit',
    desc: 'Guide de démarrage, vidéo de bienvenue, checklist',
  },
  {
    icon: '🎨',
    title: 'Brand Board',
    desc: 'Couleurs, typos, sous-titres définis au kick-off',
  },
  {
    icon: '🎬',
    title: 'Ressources Tournage',
    desc: "Guides pour optimiser ta prise de son et d'image",
  },
  {
    icon: '📊',
    title: 'Reporting mensuel',
    desc: 'Stats et suivi de performance de tes contenus',
  },
  {
    icon: '📅',
    title: 'Programmation auto',
    desc: 'Dès ta validation Frame.io, on publie sur tes réseaux',
  },
]

export function Slide09Kit() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 64px',
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
          Inclus dès le départ
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Le{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            Kit du Créateur
          </span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          width: '100%',
          maxWidth: '960px',
        }}
      >
        {KIT_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.05 + i * 0.05 }}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '22px' }}>{item.icon}</span>
            <div
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--color-text)',
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: '12px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.5,
                fontFamily: 'var(--font-dm-sans), sans-serif',
              }}
            >
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          fontFamily: 'IvyPresto, Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '18px',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
        }}
      >
        "Tu filmes, tu déposes.{' '}
        <span style={{ color: 'var(--color-text)' }}>
          Tout le reste, c'est nous.
        </span>
        "
      </motion.p>
    </div>
  )
}
