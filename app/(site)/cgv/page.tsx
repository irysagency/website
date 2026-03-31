import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  robots: { index: true, follow: true },
}

export default function CGV() {
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
          Conditions Générales de Vente
        </h1>

        <div className="prose prose-sm text-[var(--color-text-muted)] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Objet
            </h2>
            <p>
              Les présentes CGV régissent les relations contractuelles entre Irys Agency et ses clients dans le cadre de la fourniture de services de post-production vidéo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Prestations
            </h2>
            <p>
              Irys Agency propose des abonnements de montage vidéo et des packs one-shot tels que décrits sur le site irysagency.com. Les tarifs sont indiqués en euros HT.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Résiliation
            </h2>
            <p>
              Les abonnements sont résiliables avec un préavis de 30 jours. Aucune pénalité de résiliation n'est appliquée.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige sera soumis aux tribunaux compétents.
            </p>
          </section>

          {/* TODO: REPLACE — add complete legal CGV with lawyer review before launch */}
        </div>
      </div>
    </main>
  )
}
