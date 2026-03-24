'use client'

import { useState } from 'react'

type Tab = 'abonnements' | 'packs'

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

const PACKS = [
  { name: 'Pack 8 Shorts (Reels / TikTok / Shorts)', standard: '360', premium: '720' },
  { name: 'Pack 4 ADS Vidéo (avec variations de hooks)', standard: '480', premium: null },
  { name: 'Pack 2 Vidéos YouTube', standard: '590', premium: '1 180' },
  { name: 'Podcast Vidéo (miniature YT + 5 Shorts + wav + teaser)', standard: '590', premium: null },
  { name: 'VSL — Vidéo de Vente', standard: '590', premium: '1 180' },
]

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
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
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
                <p
                  className={`text-sm mb-6 ${
                    recommended ? 'text-white/70' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {tagline}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{price} €</span>
                  <span
                    className={`text-sm ml-1 ${
                      recommended ? 'text-white/70' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    HT/mois
                  </span>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 text-xs ${
                          recommended ? 'text-[var(--color-accent)]' : 'text-emerald-500'
                        }`}
                      >
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

        {/* Packs One-Shot */}
        {activeTab === 'packs' && (
          <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-separator)]/10 overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-4 border-b border-[var(--color-separator)]/10">
              <span className="font-semibold text-sm text-[var(--color-text)]">Format</span>
              <span className="font-semibold text-sm text-[var(--color-text)] text-center">Standard HT</span>
              <span className="font-semibold text-sm text-[var(--color-text)] text-center">Premium HT</span>
            </div>
            {PACKS.map(({ name, standard, premium }) => (
              <div
                key={name}
                className="grid grid-cols-3 px-6 py-5 border-b border-[var(--color-separator)]/10 last:border-0 items-center"
              >
                <span className="text-sm text-[var(--color-text)] pr-4">{name}</span>
                <span className="text-sm font-bold text-[var(--color-text)] text-center">
                  {standard} €
                </span>
                <span className="text-sm font-bold text-[var(--color-text)] text-center">
                  {premium ? `${premium} €` : '—'}
                </span>
              </div>
            ))}
            <div className="px-6 py-5 bg-[var(--color-bg)] rounded-b-2xl">
              <p className="text-xs text-[var(--color-text-muted)]">
                Frame.io inclus dans tous les packs. Hub Notion, Slack dédié et programmation automatique sont exclusifs aux abonnements.
              </p>
            </div>
          </div>
        )}

        {/* Quality note */}
        {activeTab === 'abonnements' && (
          <div className="mt-8 bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-separator)]/10">
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex-1">
                <span className="font-bold text-[var(--color-text)]">⚡ STANDARD</span>
                <p className="text-[var(--color-text-muted)] mt-1">
                  Montage dynamique, sous-titres, émojis, transitions fluides et SFX légers.
                </p>
              </div>
              <div className="flex-1">
                <span className="font-bold text-[var(--color-text)]">✨ PREMIUM</span>
                <p className="text-[var(--color-text-muted)] mt-1">
                  Idem + sous-titres animés, SFX complets, B-rolls poussés, Motion Design soft. Prix doublés.
                </p>
              </div>
            </div>
          </div>
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
