'use client'

import { useState } from 'react'

const FAQS = [
  {
    question: 'Est-ce que je garde le contrôle sur mes vidéos ?',
    answer:
      "Complètement. On définit ta direction artistique ensemble au kick-off, et rien n'est lancé sans ta validation. Tu restes l'auteur de ton contenu — on est juste l'équipe derrière.",
  },
  {
    question: 'Je dois filmer avec quoi ?',
    answer:
      "Avec ton téléphone, dans ton environnement habituel. On t'accompagne sur le cadrage et les conditions de tournage si besoin. Pas besoin de studio, pas besoin de matériel pro.",
  },
  {
    question: 'Vous garantissez des résultats en vues ou en abonnés ?',
    answer:
      "Non — et on t'explique pourquoi c'est honnête. L'algorithme ne se contrôle pas. Ce qu'on garantit : la qualité des vidéos livrées, la cohérence de ta DA, et le respect des délais. C'est ce qui dépend de nous — et on l'assume à 100%.",
  },
  {
    question: "C'est quoi concrètement la première vidéo gratuite ?",
    answer:
      "Tu nous envoies une idée ou un brief. On monte, on livre rapidement. Tu demandes autant de révisions que tu veux jusqu'à ce que ce soit parfait. Si ça te convient, on signe. Sinon, tu repars avec une vidéo gratuite.",
  },
  {
    question: 'Et si je veux arrêter ?',
    answer:
      "Préavis 30 jours, c'est tout. Pas de contrat longue durée, pas de pénalité. Tu restes parce que t'es satisfait — pas parce que t'es bloqué.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="bg-[var(--color-bg)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Les questions qu&apos;on nous pose{' '}
            <span className="font-display-italic font-light">tout le temps.</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[var(--color-separator)]/10">
          {FAQS.map(({ question, answer }, i) => (
            <div key={question}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[var(--color-text)] text-base">
                  {question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-[var(--color-separator)]/20 flex items-center justify-center text-[var(--color-text-muted)] text-xs transition-transform ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-muted)] text-sm mb-4">
            Une question qui n&apos;est pas là ?
          </p>
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Pose-la directement →
          </a>
        </div>
      </div>
    </section>
  )
}
