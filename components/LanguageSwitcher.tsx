'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchTo = (target: (typeof routing.locales)[number]): void => {
    if (target === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: target })
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '3px',
        borderRadius: '20px',
        border: '0.5px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.06)',
        opacity: isPending ? 0.6 : 1,
      }}
      aria-label="Language switcher"
    >
      {routing.locales.map((lang) => {
        const isActive = locale === lang
        return (
          <button
            key={lang}
            type="button"
            onClick={() => switchTo(lang)}
            disabled={isActive || isPending}
            style={{
              padding: '5px 12px',
              borderRadius: '16px',
              border: 'none',
              cursor: isActive ? 'default' : 'pointer',
              fontSize: '12px',
              fontWeight: isActive ? 500 : 400,
              background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: isActive ? 'var(--color-text)' : 'rgba(245,240,232,0.45)',
              boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive)
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)'
            }}
            onMouseLeave={(e) => {
              if (!isActive)
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(245,240,232,0.45)'
            }}
          >
            {lang.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
