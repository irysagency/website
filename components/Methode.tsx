const TOOLS = [
  {
    name: 'Frame.io',
    icon: '🎬',
    description: 'Tu valides tes vidéos directement dans le player. Commentaire en temps précis, pas de mail interminable.',
  },
  {
    name: 'Notion',
    icon: '📋',
    description: 'Ton espace client : brief de style, historique, livrables. Tout est là, rien ne se perd.',
  },
  {
    name: 'Slack',
    icon: '💬',
    description: 'Canal dédié avec ton monteur. Réponse en moins de 2h en semaine.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Tu envoies tes rushs',
    description: "Upload direct via Frame.io ou Google Drive. On s'adapte à ce que t'utilises déjà.",
  },
  {
    number: '02',
    title: 'On monte',
    description: 'Ton monteur attitré connaît ton style. Il monte, les autres relisent. Double regard sur chaque vidéo.',
  },
  {
    number: '03',
    title: 'Tu valides',
    description: 'Une notification, tu ouvres Frame.io, tu laisses un commentaire si besoin. 1-2 retouches max, 24h.',
  },
  {
    number: '04',
    title: 'Tu publies',
    description: 'Fichier final dans ton Drive. Thumbnail fournie. Tu publies quand tu veux.',
  },
]

export default function Methode() {
  return (
    <section
      id="methode"
      className="bg-[var(--color-surface)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Comment ça marche ?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Simple comme{' '}
            <span className="font-display-italic font-light">
              envoyer un message.
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] max-w-xl">
            On a conçu le workflow pour que toi tu passes moins de 10 minutes par vidéo. Le reste, c'est nous.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {TOOLS.map(({ name, icon, description }) => (
            <div
              key={name}
              className="bg-[var(--color-bg)] rounded-2xl p-6 border border-[var(--color-separator)]/10"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">{name}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[var(--color-separator)]/15 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {STEPS.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col">
                {/* Number bubble */}
                <div className="w-14 h-14 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-[var(--color-accent)]">
                    {number}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--color-text)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Démarrer maintenant — appel gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
