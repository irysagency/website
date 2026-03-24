import Link from 'next/link'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'IG' }, // TODO: REPLACE href
  { label: 'TikTok', href: '#', icon: 'TT' },    // TODO: REPLACE href
  { label: 'LinkedIn', href: '#', icon: 'LI' },  // TODO: REPLACE href
]

const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'CGV', href: '/cgv' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <span className="text-xl font-bold tracking-tight">
            Irys<span className="text-[var(--color-accent)]">.</span>
          </span>

          {/* Social */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Irys Agency — Tous droits réservés
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
