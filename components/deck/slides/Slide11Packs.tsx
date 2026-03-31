'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

type Quality = 'standard' | 'premium'

interface Pack {
  name: string
  tagline: string
  standard: string
  premium: string | null
  features: string[]
  features_prem?: string[]
}

const PACKS: Pack[] = [
  {
    name: 'Pack 8 Shorts',
    tagline: 'Le test idéal pour ton agence de montage vidéo.',
    standard: '360',
    premium: '720',
    features: ['8 shorts avec montage dynamique', 'Sous-titres basic', 'Sound design léger et B-roll léger'],
    features_prem: ['8 shorts avec montage dynamique', 'Motion design léger et sous-titres animés', 'Sound design et B-roll poussé'],
  },
  {
    name: 'Pack 4 Vidéos ADS',
    tagline: 'Explose ton ROAS avec des vidéos qui vendent.',
    standard: '480',
    premium: null,
    features: ['4 Ads pensées pour la conversion', '2 hooks testés par ad inclus', '2 CTA testés par ad inclus'],
  },
  {
    name: 'Pack 2 Vidéos YouTube',
    tagline: 'Fidélise ton audience sur le long terme.',
    standard: '590',
    premium: '1 180',
    features: ['2 montages format long', 'Chapitrage et structure optimisée', 'Export haute qualité 4K'],
    features_prem: ['2 montages format long qualité premium', 'Motion design léger et assets premium', 'Storytelling avancé et rétention optimisée'],
  },
  {
    name: 'Podcast Vidéo',
    tagline: 'Recycle ton audio pour les réseaux sociaux.',
    standard: '590',
    premium: null,
    features: ['Épisode complet multi-caméra', '1 teaser + 5 shorts extraits du podcast', 'Nettoyage audio, mastering et color grading', 'Miniature + A/B testing inclus'],
  },
  {
    name: 'VSL Vidéo de Vente',
    tagline: "L'arme fatale de ton tunnel de vente.",
    standard: '590',
    premium: '1 180',
    features: ['Script VSL persuasif (optionnel)', "Montage dynamique orienté psychologie d'achat", 'Structure éprouvée pour convertir'],
    features_prem: ['Script VSL persuasif (optionnel)', 'Motion design avancé inclus', 'Structure optimisée pour conversion maximale'],
  },
]

function PackCard({ pack }: { pack: Pack }) {
  const [quality, setQuality] = useState<Quality>('standard')
  const isPremium = quality === 'premium' && pack.premium !== null
  const price = isPremium && pack.premium ? pack.premium : pack.standard
  const currentFeatures = isPremium && pack.features_prem ? pack.features_prem : pack.features

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '14px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: '100%',
      }}
    >
      {/* Quality toggle for packs with premium */}
      {pack.premium !== null && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border)',
              borderRadius: '999px',
              overflow: 'hidden',
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            <button
              type="button"
              onClick={() => setQuality('standard')}
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: !isPremium ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: !isPremium ? '#fff' : 'rgba(245,240,232,0.5)',
              }}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setQuality('premium')}
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: isPremium ? 'var(--color-accent)' : 'transparent',
                color: isPremium ? '#fff' : 'rgba(245,240,232,0.5)',
              }}
            >
              Premium ✦
            </button>
          </div>
        </div>
      )}

      {/* Name + tagline */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: 'var(--color-text)',
            marginBottom: '3px',
          }}
        >
          {pack.name}
        </h3>
        <p
          style={{
            fontSize: '10px',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            lineHeight: 1.4,
          }}
        >
          {pack.tagline}
        </p>
      </div>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span
          style={{
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          € HT
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--color-border)' }} />

      {/* Features */}
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '7px',
          flex: 1,
          margin: 0,
          padding: 0,
          listStyle: 'none',
          position: 'relative',
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {currentFeatures.map((f) => (
            <motion.li
              layout
              key={`${isPremium ? 'prem' : 'std'}-${f}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}
            >
              <CheckCircle2
                size={13}
                style={{
                  flexShrink: 0,
                  marginTop: '1px',
                  color: isPremium ? 'var(--color-accent)' : '#fff',
                  transition: 'color 0.3s',
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  color: isPremium ? 'var(--color-text)' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  lineHeight: 1.4,
                  transition: 'color 0.3s',
                }}
              >
                {f}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* CTA */}
      <a
        href="https://calendly.com/irysagency"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '999px',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          textDecoration: 'none',
          transition: 'all 0.3s',
          background: isPremium ? 'var(--color-accent)' : 'transparent',
          color: '#fff',
          border: isPremium ? 'none' : '1px solid rgba(255,255,255,0.15)',
          boxShadow: isPremium ? '0 0 20px rgba(238,29,82,0.3)' : 'none',
        }}
      >
        Commander le pack
      </a>
    </div>
  )
}

export function Slide11Packs() {
  const premiumPacks = PACKS.filter((p) => p.premium !== null)
  const standardPacks = PACKS.filter((p) => p.premium === null)

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px 48px',
        gap: '20px',
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
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 600,
            marginBottom: '6px',
          }}
        >
          PACKS ONE-SHOT
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(20px, 2.8vw, 32px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Pas prêt à t'abonner ?{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            Commence par un pack.
          </span>
        </h2>
      </motion.div>

      {/* Row 1: 3 premium packs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          width: '100%',
          maxWidth: '980px',
        }}
      >
        {premiumPacks.map((pack, i) => (
          <motion.div
            key={pack.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
          >
            <PackCard pack={pack} />
          </motion.div>
        ))}
      </div>

      {/* Row 2: 2 standard packs centered */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '14px',
          width: '100%',
          maxWidth: '650px',
        }}
      >
        {standardPacks.map((pack, i) => (
          <motion.div
            key={pack.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 + i * 0.06 }}
          >
            <PackCard pack={pack} />
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '10px',
          padding: '10px 20px',
          width: '100%',
          maxWidth: '980px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          Le hub Notion et le canal Slack sont réservés aux abonnés. Frame.io est inclus pour tous.
        </p>
      </motion.div>
    </div>
  )
}
