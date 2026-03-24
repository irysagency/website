import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://irysagency.com'),
  title: {
    default: 'Irys Agency — Post-production vidéo Done-For-You pour infopreneurs',
    template: '%s | Irys Agency',
  },
  description:
    'Irys Agency prend en charge tout ton montage vidéo. Tu filmes, on livre. Réservé aux coaches, formateurs et consultants francophones qui veulent scaler sans sacrifier leur temps.',
  keywords: [
    'montage vidéo',
    'post-production vidéo',
    'agence montage vidéo',
    'infopreneur',
    'coach',
    'formateur',
    'done for you vidéo',
    'Irys Agency',
  ],
  authors: [{ name: 'Irys Agency', url: 'https://irysagency.com' }],
  creator: 'Irys Agency',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://irysagency.com',
    siteName: 'Irys Agency',
    title: 'Irys Agency — Post-production vidéo Done-For-You',
    description:
      'Tu filmes, on livre. Montage vidéo professionnel pour infopreneurs francophones. +54 clients, +1600 vidéos livrées.',
    images: [
      {
        url: '/og-image.jpg', // TODO: REPLACE
        width: 1200,
        height: 630,
        alt: 'Irys Agency — Post-production vidéo Done-For-You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irys Agency — Post-production vidéo Done-For-You',
    description:
      'Tu filmes, on livre. Montage vidéo pro pour infopreneurs francophones.',
    images: ['/og-image.jpg'], // TODO: REPLACE
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://irysagency.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Irys Agency',
  url: 'https://irysagency.com',
  description:
    'Agence de post-production vidéo Done-For-You pour infopreneurs francophones.',
  areaServed: 'FR',
  serviceType: 'Post-production vidéo',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Plausible Analytics — cookieless, pas de banner RGPD */}
        <Script
          defer
          data-domain="irysagency.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
