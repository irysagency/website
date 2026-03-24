'use client'

import { useState } from 'react'

type Tab = 'abonnements' | 'packs'
type Quality = 'standard' | 'premium'

const ABONNEMENTS = [
  {
    icon: '📱',
    name: 'Machine à Shorts',
    tagline: 'Le minimum vital pour inonder les algorithmes.',
    price: '425',
    recommended: false,
    features: [
      '8 Reels/Shorts par mois',
      'Espace Frame.io dédié',
      'Hub Notion (suivi & scripts)',
      'Canal Slack privé',
      'Programmation auto sur tes réseaux',
      'Reporting mensuel',
      'Retours illimités (3 allers-retours)',
    ],
  },
  {
    icon: '⚖️',
    name: 'Croissance Totale',
    tagline: 'Le combo parfait : viralité Shorts + rétention YouTube.',
    price: '1 325',
    recommended: true,
    features: [
      '16 Reels/Shorts par mois',
      '2 Vidéos YouTube par mois',
      'Miniatures YouTube A/B Testing (2 + 4 variantes)',
      "Tout l'écosystème Frame.io + Notion + Slack",
      'Programmation auto + Reporting mensuel',
      "Jusqu'à 3 AR courts / 5 AR longs",
    ],
  },
  {
    icon: '🌍',
    name: 'Conversion Max',
    tagline: 'Pour les créateurs qui veulent dominer leur niche.',
    price: '1 625',
    recommended: false,
    features: [
      '8 Ads/Shorts par mois',
      '1 VSL (Vidéo de Vente — 2 à 5 min.)',
      "Tout l'écosystème Frame.io + Notion + Slack",
      'Programmation auto + Reporting mensuel',
      "Jusqu'à 3 AR courts / 5 AR VSL",
    ],
  },
]

interface Pack {
  icon: string
  name: string
  tagline: string
  standard: string
  premium: string | null
  features: string[]
}

const PACKS: Pack[] = [
  {
    icon: '📱',
    name: 'Pack 8 Shorts',
    tagline: 'Reels / TikTok / Shorts',
    standard: '360',
    premium: '720',
    features: [
      '8 vidéos courtes format vertical',
      'Frame.io inclus',
      'Sous-titres + transitions',
    ],
  },
  {
    icon: '📣',
    name: 'Pack 4 ADS Vidéo',
    tagline: 'Avec variations de hooks',
    standard: '480',
    premium: null,
    features: [
      '4 publicités vidéo',
      'Variations de hooks testables',
      'Frame.io inclus',
    ],
  },
  {
    icon: '▶️',
    name: 'Pack 2 Vidéos YouTube',
    tagline: 'Long format, rétention optimisée',
    standard: '590',
    premium: '1 180',
    features: [
      '2 vidéos YouTube longue durée',
      'Frame.io inclus',
      'Chapitres + sous-titres',
    ],
  },
  {
    icon: '🎙️',
    name: 'Podcast Vidéo',
    tagline: 'Miniature YT + 5 Shorts + wav + teaser',
    standard: '590',
    premium: null,
    features: [
      '1 épisode podcast monté',
      '5 shorts extraits',
      'Fichier wav + teaser',
      'Frame.io inclus',
    ],
  },
  {
    icon: '🎯',
    name: 'VSL — Vidéo de Vente',
    tagline: '2 à 5 minutes, conçue pour convertir',
    standard: '590',
    premium: '1 180',
    features: [
      'Script vidéo optimisé conversion',
      'Montage structuré par étapes de vente',
      'Frame.io inclus',
    ],
  },
]

const PREMIUM_MENTION = '+ sous-titres animés, SFX complets, B-rolls poussés, Motion Design soft'

function PackCard({ pack }: { pack: Pack }) {
  const [quality, setQuality] = useState<Quality>('standard')
  const isPremium = quality === 'premium'
  const price = isPremium && pack.premium ? pack.premium : pack.standard
  const hasPremium = pack.premium !== null

  return (
    <div className="relative rounded-2xl p-8 border flex flex-col bg-[var(--color-surface)] border-[var(--color-separator)]/10 text-[var(--color-text)]">
      {/* Toggle Standard / Premium */}
      {hasPremium && (
        <div className="absolute top-5 right-5 flex rounded-full border border-[var(--color-separator)]/15 overflow-hidden text-xs font-semibold">
          <button
            type="button"
            onClick={() => setQuality('standard')}
            className={`px-3 py-1 transition-colors ${
              !isPremium
                ? 'bg-[var(--color-text)] text-white'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
          >
            Standard
          </button>
          <button
            type="button"
            onClick={() => setQuality('premium')}
            className={`px-3 py-1 transition-colors ${
              isPremium
                ? 'bg-[var(--color-accent)] text-white'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
            }`}
          >
            Premium ✦
          </button>
        </div>
      )}

      <div className="text-3xl mb-4">{pack.icon}</div>
      <h3 className="text-xl font-bold mb-1 pr-32">{pack.name}</h3>
      <p className="text-sm mb-6 text-[var(--color-text-muted)]">{pack.tagline}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price} €</span>
        <span className="text-sm ml-1 text-[var(--color-text-muted)]">HT</span>
      </div>

      {isPremium && (
        <p className="text-xs text-[var(--color-accent)] font-medium mb-4 leading-relaxed">
          ✦ {PREMIUM_MENTION}
        </p>
      )}

      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {pack.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 text-xs text-emerald-500">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#calendly"
        className="block text-center py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 border border-[var(--color-separator)]/20 text-[var(--color-text)] hover:border-[var(--color-separator)]/50"
      >
        Commander
      </a>
    </div>
  )
}

export default function Offres() {
  const [activeTab, setActiveTab] = useState<Tab>('abonnements')

  return (
    <section
      id="offres"
      className="bg-[var(--color-bg)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Offres
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Des offres pensées{' '}
            <span className="font-display-italic font-light">pour scaler.</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] max-w-xl">
            Tu choisis ton niveau d'engagement — on s'adapte. Tous les prix sont en HT.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="inline-flex rounded-full bg-[var(--color-surface)] border border-[var(--color-separator)]/10 p-1 mb-12">
          {(['abonnements', 'packs'] as Tab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {tab === 'abonnements' ? 'Abonnements' : 'Packs One-Shot'}
            </button>
          ))}
        </div>

        {/* Abonnements */}
        {activeTab === 'abonnements' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABONNEMENTS.map(({ icon, name, tagline, price, recommended, features }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-8 border flex flex-col ${
                  recommended
                    ? 'bg-[var(--color-text)] border-[var(--color-text)] text-white'
                    : 'bg-[var(--color-surface)] border-[var(--color-separator)]/10 text-[var(--color-text)]'
                }`}
              >
                {recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      ⭐ RECOMMANDÉ
                    </span>
                  </div>
                )}

                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className={`text-sm mb-6 ${recommended ? 'text-white/70' : 'text-[var(--color-text-muted)]'}`}>
                  {tagline}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{price} €</span>
                  <span className={`text-sm ml-1 ${recommended ? 'text-white/70' : 'text-[var(--color-text-muted)]'}`}>
                    HT/mois
                  </span>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 text-xs ${recommended ? 'text-[var(--color-accent)]' : 'text-emerald-500'}`}>
                        ✓
                      </span>
                      <span className={recommended ? 'text-white/90' : ''}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#calendly"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 ${
                    recommended
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'border border-[var(--color-separator)]/20 text-[var(--color-text)] hover:border-[var(--color-separator)]/50'
                  }`}
                >
                  Démarrer
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Packs One-Shot — même format card que les abonnements */}
        {activeTab === 'packs' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PACKS.map((pack) => (
                <PackCard key={pack.name} pack={pack} />
              ))}
            </div>
            <div className="mt-6 bg-[var(--color-surface)] rounded-xl px-5 py-4 border border-[var(--color-separator)]/10">
              <p className="text-xs text-[var(--color-text-muted)]">
                Frame.io inclus dans tous les packs. Hub Notion, Slack dédié et programmation automatique sont exclusifs aux abonnements.
              </p>
            </div>
          </>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-muted)] mb-4 text-sm">
            Tu ne sais pas quelle offre choisir ?
          </p>
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            On en parle — appel gratuit 30 min
          </a>
        </div>
      </div>
    </section>
  )
}
