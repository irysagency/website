import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: true, follow: true },
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 inline-block"
        >
          ← Retour
        </Link>
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-sm text-[var(--color-text-muted)] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Collecte des données
            </h2>
            <p>
              Ce site utilise Plausible Analytics, un outil d'analyse cookieless. Aucun cookie n'est déposé sur votre appareil. Aucune donnée personnelle identifiable n'est collectée.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Formulaire de contact / Calendly
            </h2>
            <p>
              Si vous réservez un appel via Calendly, vos données (nom, email, créneau) sont traitées par Calendly Inc. conformément à leur propre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous pouvez exercer vos droits en nous contactant à contact@irysagency.com. {/* TODO: REPLACE */}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
