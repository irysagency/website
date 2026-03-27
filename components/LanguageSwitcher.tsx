'use client'

import { useLocale } from './I18nProvider'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

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
      }}
      aria-label="Language switcher"
    >
      {(['fr', 'en'] as const).map((lang) => {
        const isActive = locale === lang
        return (
          <button
            key={lang}
            type="button"
            onClick={() => !isActive && setLocale(lang)}
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
