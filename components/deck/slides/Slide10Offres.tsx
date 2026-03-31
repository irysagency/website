'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Star } from 'lucide-react'

const OFFRES = [
  {
    name: 'Machine à Shorts',
    tagline: 'Inonde TikTok, Reels et Shorts sans lever le petit doigt.',
    price: '425',
    recommended: false,
    features: [
      '8 vidéos courtes montées et livrées',
      'Espace dédié Frame.IO',
      'Espace dédié Notion',
      "Communication directe avec l'équipe",
      'Publication automatique sur tes réseaux',
      'Rapport de performance mensuel',
      '3 allers-retours (A/R) inclus',
    ],
  },
  {
    name: "L'Usine \u00e0 Contenu",
    tagline: 'Domine les réseaux avec un mix Shorts + YouTube long format.',
    price: '1 325',
    recommended: true,
    features: [
      '16 vidéos courtes montées et livrées',
      '2 vidéos YouTube long format',
      'Miniatures YouTube (A/B testing inclus)',
      'Écosystème Frame + Notion + Slack complet',
      'Automatisation totale des publications',
      'Priorité maximale sur les livraisons',
    ],
  },
  {
    name: 'Conversion Max',
    tagline: 'Transforme ton audience en clients fidèles avec des Ads & VSL.',
    price: '1 625',
    recommended: false,
    features: [
      '8 publicités vidéo (Ads) orientées ROI',
      '1 VSL (Vidéo de Vente) haute conversion',
      'Scripts publicitaires optimisés inclus',
      'Espace Frame.io dédié, tes rushs et vidéos au même endroit',
      'Accompagnement stratégique sur tes hooks',
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
        padding: '32px 48px',
        gap: '24px',
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
            marginBottom: '8px',
          }}
        >
          OFFRES & TARIFS
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
          La machine de guerre{' '}
          <span
            style={{
              fontFamily: 'IvyPresto, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--color-accent)',
            }}
          >
            pour ton personal branding.
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
              background: offre.recommended ? 'rgba(238,29,82,0.06)' : 'var(--color-surface)',
              border: offre.recommended ? '1px solid rgba(238,29,82,0.4)' : '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              boxShadow: offre.recommended ? '0 0 30px rgba(238,29,82,0.15)' : 'none',
            }}
          >
            {offre.recommended && (
              <div
                style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--color-accent)',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '3px 14px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Star size={10} strokeWidth={2} />
                LE PLUS POPULAIRE
              </div>
            )}

            {/* Name + tagline */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--color-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  marginBottom: '4px',
                }}
              >
                {offre.name}
              </h3>
              <p
                style={{
                  fontSize: '11px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  lineHeight: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  minHeight: '36px',
                }}
              >
                {offre.tagline}
              </p>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {offre.price}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                € HT/mois
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: offre.recommended ? 'rgba(238,29,82,0.2)' : 'var(--color-border)',
              }}
            />

            {/* Features */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, margin: 0, padding: 0, listStyle: 'none' }}>
              {offre.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2
                    size={15}
                    style={{
                      flexShrink: 0,
                      marginTop: '1px',
                      color: offre.recommended ? 'var(--color-accent)' : '#fff',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      color: offre.recommended ? 'var(--color-text)' : 'var(--color-text-muted)',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      lineHeight: 1.4,
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
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
                padding: '14px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                textDecoration: 'none',
                transition: 'all 0.3s',
                background: offre.recommended ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                color: '#fff',
                border: offre.recommended ? 'none' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: offre.recommended ? '0 0 25px rgba(238,29,82,0.4)' : 'none',
              }}
            >
              Prendre ce plan
            </a>
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
          padding: '12px 24px',
          fontSize: '13px',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          textAlign: 'center',
        }}
      >
        🎁{' '}
        <strong style={{ color: 'var(--color-accent)' }}>1ère vidéo offerte</strong>
        {' '}· Livrée en 48h · Zéro engagement
      </motion.div>
    </div>
  )
}
