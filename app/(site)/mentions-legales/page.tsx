import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: true, follow: true },
}

export default function MentionsLegales() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 inline-block"
        >
          ← Retour
        </Link>
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">Mentions légales</h1>

        <div className="prose prose-sm text-[var(--color-text-muted)] space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Éditeur du site</h2>
            <p>
              Irys Agency — {/* TODO: REPLACE — forme juridique, SIRET, adresse */}<br />
              Responsable de publication : Kilian Adam<br />
              Contact : contact@irysagency.com {/* TODO: REPLACE */}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, graphismes) est la propriété exclusive d'Irys Agency. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Données personnelles</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
              Pour exercer ces droits : contact@irysagency.com {/* TODO: REPLACE */}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
