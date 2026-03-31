'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NAV_LINKS = [
    { label: t('portfolio'), href: '#portfolio' },
    { label: t('methode'), href: '#methode' },
    { label: t('offres'), href: '#offres' },
    { label: t('faq'), href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4 pt-4">
        {/* Pill */}
        <div
          className="flex items-center justify-between rounded-full px-6 py-3"
          style={{
            background: scrolled ? 'rgba(13, 13, 13, 0.92)' : 'rgba(13, 13, 13, 0.85)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
            transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              aria-label="Irys Agency, Accueil"
            >
              <Image
                src="/images/Irys_logo_blanc_transparent.png"
                alt="Irys Agency"
                width={596}
                height={298}
                priority
                style={{ height: '28px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: 'rgba(245,240,232,0.65)' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(245,240,232,0.65)'
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right: lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#calendly"
              className="irys-btn-accent text-[13px] py-2 px-5"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden transition-colors"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="irys-glass-strong mt-2 rounded-2xl p-6 lg:hidden">
            <ul className="flex flex-col gap-4 mb-5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block text-sm transition-colors"
                    style={{ color: 'rgba(245,240,232,0.8)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#calendly"
              className="irys-btn-accent-filled w-full justify-center py-3 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {t('cta')}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
