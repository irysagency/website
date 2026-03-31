'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export const TOTAL_SLIDES = 11

interface DeckContextValue {
  currentSlide: number
  totalSlides: number
  navigate: (direction: 'prev' | 'next') => void
  goTo: (index: number) => void
  isFullscreen: boolean
  toggleFullscreen: () => void
}

const DeckContext = createContext<DeckContextValue | null>(null)

export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const navigate = useCallback((direction: 'prev' | 'next') => {
    setCurrentSlide((prev) => {
      if (direction === 'prev') return Math.max(0, prev - 1)
      return Math.min(TOTAL_SLIDES - 1, prev + 1)
    })
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)))
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return
      if (e.key === 'ArrowRight') navigate('next')
      if (e.key === 'ArrowLeft') navigate('prev')
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [navigate])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return (
    <DeckContext.Provider
      value={{
        currentSlide,
        totalSlides: TOTAL_SLIDES,
        navigate,
        goTo,
        isFullscreen,
        toggleFullscreen,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}

export function useDeck(): DeckContextValue {
  const ctx = useContext(DeckContext)
  if (!ctx) throw new Error('useDeck must be used inside DeckProvider')
  return ctx
}
