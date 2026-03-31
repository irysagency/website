'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useDeck } from './DeckProvider'
import { DeckNav } from './DeckNav'

const slideVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const slideTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }

interface DeckShellProps {
  slides: React.ReactNode[]
}

export function DeckShell({ slides }: DeckShellProps) {
  const { currentSlide, totalSlides } = useDeck()

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--color-border)',
          zIndex: 50,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--color-accent)',
            width: `${progressPercent}%`,
            transition: 'width 0.35s ease',
          }}
        />
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <DeckNav />
    </div>
  )
}
