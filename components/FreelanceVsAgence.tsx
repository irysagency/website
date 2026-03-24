const COMPARISON = [
  {
    pain: 'Disponibilité aléatoire — il disparaît en vacances',
    gain: 'Une équipe dédiée, disponible 5j/7',
  },
  {
    pain: 'Tu passes 1h à briefer pour chaque vidéo',
    gain: 'On retient ton style dès la première semaine',
  },
  {
    pain: 'Rendu en 5 à 10 jours ouvrés',
    gain: 'Livraison rapide, semaine après semaine',
  },
  {
    pain: "Une seule paire d'yeux sur ton contenu",
    gain: 'Équipe de monteurs, motion designers, réviseurs',
  },
  {
    pain: 'Facturation à la vidéo — imprévisible',
    gain: "Abonnement fixe, budgétable à l'avance",
  },
  {
    pain: 'Tu gères les allers-retours, les fichiers, les deadlines',
    gain: 'Tu envoies tes rushs — on gère tout le reste',
  },
  {
    pain: 'Tu dois coordonner plusieurs prestataires (monteur, minimaker, motion designer...)',
    gain: 'Tous les talents sont chez nous — un seul interlocuteur',
  },
]

const ARGUMENTS = [
  {
    icon: '⚡',
    title: 'Livraison rapide',
    description:
      'Tes vidéos sortent quand tu en as besoin. Pas quand ton freelance daigne répondre.',
  },
  {
    icon: '🎯',
    title: 'Style mémorisé',
    description:
      'Après 3 vidéos, on connaît tes intros, tes cuts, ta musique. Zéro brief répété.',
  },
  {
    icon: '📦',
    title: 'Tout inclus',
    description:
      "Un freelance fait la vidéo YouTube. Chez nous, tu reçois la vidéo YouTube, les shorts qui vont avec, le teaser, le thumbnail — tout sort en même temps. Une seule équipe, zéro coordination de ta part.",
  },
]

export default function FreelanceVsAgence() {
  return (
    <section
      id="freelance-vs-agence"
      className="bg-[var(--color-bg)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Pourquoi pas un freelance ?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
            Ce que tu vis en ce moment.{' '}
            <span className="font-display-italic font-light">
              Et ce que ça donne avec Irys.
            </span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-separator)]/10 rounded-2xl overflow-hidden mb-16">
          {/* Headers */}
          <div className="bg-[var(--color-surface)] px-6 py-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">✕</span>
            <span className="font-semibold text-[var(--color-text)]">Seul ou avec un freelance</span>
          </div>
          <div className="bg-[var(--color-surface)] px-6 py-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">✓</span>
            <span className="font-semibold text-[var(--color-text)]">Avec Irys</span>
          </div>

          {/* Rows */}
          {COMPARISON.map(({ pain, gain }, i) => (
            <>
              <div
                key={`pain-${i}`}
                className="bg-[var(--color-surface)] px-6 py-4 flex items-start gap-3 border-t border-[var(--color-separator)]/10"
              >
                <span className="mt-0.5 text-red-400 text-sm">✕</span>
                <p className="text-sm text-[var(--color-text-muted)]">{pain}</p>
              </div>
              <div
                key={`gain-${i}`}
                className="bg-[var(--color-surface)] px-6 py-4 flex items-start gap-3 border-t border-[var(--color-separator)]/10"
              >
                <span className="mt-0.5 text-emerald-500 text-sm">✓</span>
                <p className="text-sm text-[var(--color-text)] font-medium">{gain}</p>
              </div>
            </>
          ))}
        </div>

        {/* Argument cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ARGUMENTS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-separator)]/10"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-[var(--color-text)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
