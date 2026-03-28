'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const revealHeader = useScrollReveal({ staggerDelay: 80 })
  const revealItems = useScrollReveal({ staggerDelay: 60 })

  const FAQS = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
  ]

  return (
    <section id="faq" className="relative py-24 px-4">
      {/* Glow bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(238, 29, 82, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        {/* Header */}
        <SectionHeader
          badgeText={t('label')}
          titlePart1={t('h2_part1')}
          titleItalic={t('h2_part2')}
          revealFn={revealHeader}
          className="mb-12"
        />

        {/* Accordion */}
        <div className="space-y-3 text-left">
          {FAQS.map(({ question, answer }, i) => (
            <div key={question} ref={revealItems(i)} className="irys-card-simple overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
              >
                <span
                  className="text-[15px] font-semibold pr-4 text-secondary"
                  style={{ wordBreak: 'break-word' }}
                >
                  {question}
                </span>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 transition-transform duration-300 text-subdued"
                  style={{
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-[15px] leading-relaxed text-subdued/80">
                        {answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            ref={revealHeader(2)}
            href="#calendly"
            className="irys-btn-accent-filled px-10 py-4 text-sm"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
