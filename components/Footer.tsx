'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.07a8.16 8.16 0 004.77 1.52V7.15a4.85 4.85 0 01-1-.46z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const SOCIAL_LINKS = [
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#', Icon: InstagramIcon },
  { label: 'TikTok', href: process.env.NEXT_PUBLIC_TIKTOK_URL ?? '#', Icon: TikTokIcon },
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '#', Icon: LinkedInIcon },
]

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const reveal = useScrollReveal()

  const NAV_LINKS = [
    { label: tNav('portfolio'), href: '#portfolio' },
    { label: tNav('methode'), href: '#methode' },
    { label: tNav('offres'), href: '#offres' },
  ]

  const LEGAL_LINKS = [
    { label: t('legal'), href: '/mentions-legales' },
    { label: t('privacy'), href: '/politique-de-confidentialite' },
    { label: t('cgv'), href: '/cgv' },
  ]

  return (
    <footer
      ref={reveal(0)}
      className="relative pt-16 pb-6 px-4"
      style={{ background: 'rgba(5,5,5,0.9)' }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        }}
      />

      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-heading text-xl font-bold tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                Irys<span style={{ color: 'var(--color-accent)' }}>.</span>
              </span>
            </div>
            <p
              className="text-[13px] max-w-[240px] mb-5 leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.50)' }}
            >
              {t('tagline')}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(245,240,232,0.45)',
                    transition: 'transform 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.9)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.45)'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[13px] font-semibold mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              {t('nav_title')}
            </h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block text-[13px] transition-colors hover:text-white/70"
                  style={{ color: 'rgba(245,240,232,0.50)' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-[13px] font-semibold mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              {t('legal_title')}
            </h4>
            <div className="space-y-2.5">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-[13px] transition-colors hover:text-white/70"
                  style={{ color: 'rgba(245,240,232,0.50)' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="text-[12px]" style={{ color: 'rgba(245,240,232,0.40)' }}>
            © {new Date().getFullYear()} {t('copyright_suffix')}
          </span>
          <a
            href="https://irysagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] transition-colors hover:text-white/50"
            style={{ color: 'rgba(245,240,232,0.40)' }}
          >
            irysagency.com
          </a>
        </div>
      </div>
    </footer>
  )
}
