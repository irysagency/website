// Frame.io n'est PAS juste pour les retours.
// C'est le hub central : stockage des rushs en haute qualité, livraison des vidéos finales,
// ET retours directement sur la timeline vidéo (commentaires horodatés).

interface GanttBar {
  id: string
  label: string
  sublabel: string
  start: number   // position % sur la ligne du temps
  width: number   // largeur % sur la ligne du temps
  accent?: boolean
}

const MARKERS = [
  { label: 'Jour 1', pos: 0 },
  { label: 'Jour 3', pos: 18 },
  { label: 'Jour 7', pos: 38 },
  { label: 'Jour 15', pos: 60 },
  { label: 'Semaine 3', pos: 80 },
  { label: 'En continu', pos: 100 },
]

const BARS: GanttBar[] = [
  {
    id: 'kickoff',
    label: 'Premier appel + Formulaire stratégique',
    sublabel: 'On définit tes objectifs, ton audience, ton style.',
    start: 0,
    width: 12,
    accent: true,
  },
  {
    id: 'onboarding',
    label: 'Onboarding + Setup Frame.io',
    sublabel: 'Ton espace dédié est créé. Stockage rushs haute qualité + espace de travail.',
    start: 0,
    width: 22,
  },
  {
    id: 'da',
    label: 'Kick-off direction artistique',
    sublabel: 'Typographies, couleurs, style de coupe, ambiance sonore. Fixé une fois, appliqué partout.',
    start: 18,
    width: 28,
    accent: true,
  },
  {
    id: 'rushs',
    label: 'Dépôt des rushs sur Frame.io',
    sublabel: 'Upload haute qualité en continu. Frame.io = ton hub de stockage central, pas juste un outil de retours.',
    start: 0,
    width: 100,
  },
  {
    id: 'montage',
    label: 'Montage + Livraison + Retours',
    sublabel: 'Livraison sur Frame.io. Retours via commentaires directement sur la timeline vidéo.',
    start: 38,
    width: 62,
    accent: true,
  },
  {
    id: 'publication',
    label: 'Publication sur tes réseaux',
    sublabel: 'Fichier final + thumbnail dans ton Drive. Tu publies quand tu veux.',
    start: 55,
    width: 45,
  },
]

const TOOLS = [
  {
    name: 'Frame.io',
    icon: '🎬',
    description:
      "Le hub central : tu déposes tes rushs en haute qualité, tu retrouves tes vidéos livrées, et tu laisses tes retours directement sur la timeline. Pas de mail, pas de fichiers perdus.",
  },
  {
    name: 'Notion',
    icon: '📋',
    description:
      'Suivi des tâches, base de données de tes scripts, deadlines visibles. Tu sais exactement où en est chaque vidéo.',
  },
  {
    name: 'Slack',
    icon: '💬',
    description:
      "Canal dédié avec ton monteur. Questions, validations, retours — tout au même endroit.",
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
            Un workflow conçu pour que toi tu passes moins de 10 minutes par vidéo. Le reste, c'est nous.
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

        {/* Gantt timeline */}
        <div className="bg-[var(--color-bg)] rounded-2xl p-6 sm:p-8 border border-[var(--color-separator)]/10 overflow-x-auto">
          <h3 className="font-bold text-[var(--color-text)] mb-8 text-lg">
            Ton calendrier de démarrage
          </h3>

          {/* Time markers */}
          <div className="relative mb-6 min-w-[560px]">
            <div className="flex justify-between">
              {MARKERS.map(({ label }) => (
                <span key={label} className="text-xs text-[var(--color-text-muted)] font-medium">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-4 min-w-[560px]">
            {BARS.map(({ id, label, sublabel, start, width, accent }) => (
              <div key={id} className="flex flex-col gap-1">
                <div className="relative h-9">
                  {/* Track */}
                  <div className="absolute inset-y-0 left-0 right-0 bg-[var(--color-surface)] rounded-full" />
                  {/* Bar */}
                  <div
                    className={`absolute inset-y-0 rounded-full flex items-center px-3 ${
                      accent
                        ? 'bg-[var(--color-accent)] text-white'
                        : 'bg-[var(--color-separator)]/15 text-[var(--color-text)]'
                    }`}
                    style={{
                      left: `${start}%`,
                      width: `${width}%`,
                    }}
                  >
                    <span className="text-xs font-semibold truncate">{label}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-1">
                  {sublabel}
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
