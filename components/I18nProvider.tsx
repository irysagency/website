'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import type { AbstractIntlMessages } from 'next-intl'
import frMessages from '@/messages/fr.json'
import enMessages from '@/messages/en.json'

export type Locale = 'fr' | 'en'

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'fr',
  setLocale: () => {},
})

export function useLocale() {
  return useContext(I18nContext)
}

const MESSAGES: Record<Locale, AbstractIntlMessages> = {
  fr: frMessages as AbstractIntlMessages,
  en: enMessages as AbstractIntlMessages,
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')

  useEffect(() => {
    // 1. Check localStorage for saved preference
    const saved = localStorage.getItem('irys-locale')
    if (saved === 'fr' || saved === 'en') {
      setLocaleState(saved)
      return
    }
    // 2. Check navigator.language
    const lang = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase()
    setLocaleState(lang.startsWith('en') ? 'en' : 'fr')
  }, [])

  // Sync lang attribute on html element
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('irys-locale', next)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={MESSAGES[locale]} timeZone="Europe/Paris">
        {children}
      </NextIntlClientProvider>
    </I18nContext.Provider>
  )
}
