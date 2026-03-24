'use client'

import { InlineWidget } from 'react-calendly'
import Image from 'next/image'

// TODO: REPLACE — bios founders
const FOUNDERS = [
  {
    name: 'Kilian Adam',
    role: 'Co-fondateur & Directeur créatif',
    photo: '/images/kilian-placeholder.png', // TODO: REPLACE
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kilian accompagne les infopreneurs dans la construction de leur présence vidéo depuis plusieurs années.',
  },
  {
    name: 'Quentin',
    role: 'Co-fondateur & Directeur de production',
    photo: '/images/quentin-placeholder.png', // TODO: REPLACE
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quentin gère la production et s'assure que chaque livraison respecte les standards Irys.",
  },
]

export default function CalendlySection() {
  return (
    <section
      id="calendly"
      className="bg-[var(--color-surface)] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Calendly */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Prendre rendez-vous
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
              30 minutes pour{' '}
              <span className="font-display-italic font-light">te lancer.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Gratuit, sans engagement. On regarde ensemble si Irys est fait pour toi.
            </p>

            <div className="rounded-2xl overflow-hidden border border-[var(--color-separator)]/10">
              {/* TODO: REPLACE — calendly URL */}
              <InlineWidget
                url="https://calendly.com/irysagency"
                styles={{ height: '660px', minWidth: '320px' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: 'E8175D',
                  textColor: '0D0D0D',
                }}
              />
            </div>
          </div>

          {/* Right — Founders */}
          <div className="flex flex-col gap-10 lg:pt-20">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                L'équipe
              </p>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                Pas une agence anonyme.
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Tu parles directement à ceux qui vont travailler sur ton contenu.
              </p>
            </div>

            {FOUNDERS.map(({ name, role, photo, bio }) => (
              <div key={name} className="flex gap-5">
                <div className="flex-shrink-0">
                  <Image
                    src={photo}
                    alt={name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-20 h-20"
                  />
                </div>
                <div>
                  <p className="font-bold text-[var(--color-text)]">{name}</p>
                  <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">
                    {role}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {bio}
                  </p>
                </div>
              </div>
            ))}

            {/* Trust badge */}
            <div className="rounded-xl bg-[var(--color-bg)] p-5 border border-[var(--color-separator)]/10">
              <p className="text-sm font-semibold text-[var(--color-text)] mb-1">
                🎁 Première vidéo offerte
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Tu nous envoies une idée. On monte rapidement. Si c'est pas parfait, tu repars sans rien signer — et avec une vidéo gratuite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
