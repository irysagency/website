import Link from 'next/link'

const STATS = [
  { value: '+54', label: 'clients actifs' },
  { value: '+1 600', label: 'vidéos livrées' },
  { value: '+2 500h', label: 'de rushs traités' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[var(--color-bg)] pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-6">
          Agence DFY · Post-production vidéo
        </p>

        {/* H1 dual-font */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Le montage,{' '}
          <span className="font-display-italic font-light text-[var(--color-accent)]">
            c'est notre problème.
          </span>
          <br />
          Pas le tien.
        </h1>

        {/* Subline */}
        <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mb-10 leading-relaxed">
          Tu filmes, tu envoies, on livre.{' '}
          sans engagement, sans brief de 12 pages. Ton contenu publie, ton audience grandit, ton CA décolle — toi tu fais ce que t'as toujours voulu faire.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#calendly"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Réserver mon appel gratuit
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--color-separator)]/30 text-[var(--color-text)] font-medium text-base hover:border-[var(--color-separator)] transition-colors"
          >
            Voir le portfolio →
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] tracking-tight">
                {value}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
