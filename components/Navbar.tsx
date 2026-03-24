'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Offres', href: '#offres' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)] shadow-sm border-b border-[var(--color-separator)]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-[var(--color-text)] font-bold text-xl tracking-tight"
            onClick={handleNavClick}
          >
            Irys<span className="text-[var(--color-accent)]">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#calendly"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Réserver un appel
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 text-[var(--color-text)]"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-px bg-current transition-all" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-separator)]/10 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-base text-[var(--color-text)] py-1"
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#calendly"
            className="block w-full text-center px-5 py-3 rounded-full bg-[var(--color-accent)] text-white font-semibold"
            onClick={handleNavClick}
          >
            Réserver un appel
          </a>
        </div>
      )}
    </header>
  )
}
