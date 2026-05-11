import type { Metadata } from 'next'
import { Inter, DM_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
import { I18nProvider } from '@/components/I18nProvider'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://irysagency.com'),
  title: {
    default: 'Agence montage vidéo pour infopreneurs | Irys',
    template: '%s | Irys',
  },
  description:
    'Arrête de perdre du temps sur Premiere Pro. Délègue ta post-production à notre agence montage vidéo pour infopreneur. Réserve ton appel gratuit !',
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
      'Agence de montage vidéo pour infopreneurs et créateurs. +54 clients, +1 600 vidéos livrées. Première vidéo offerte.',
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
    images: [
      {
        url: '/og-image.jpg', // TODO: REPLACE
        alt: 'IRYS Agency — agence post-production vidéo pour infopreneurs francophones',
        width: 1200,
        height: 630,
      },
    ],
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
    languages: {
      'x-default': 'https://irysagency.com',
      'fr': 'https://irysagency.com',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://irysagency.com/#organization',
  name: 'Irys Agency',
  url: 'https://irysagency.com',
  logo: 'https://irysagency.com/images/logo.png',
  description:
    'Agence de montage vidéo spécialisée pour les infopreneurs, coaches et formateurs francophones. Shorts, YouTube, Ads, VSL — done-for-you.',
  founder: [
    {
      '@type': 'Person',
      name: 'Kilian Adam',
      jobTitle: 'Co-fondateur & Directeur créatif',
    },
    {
      '@type': 'Person',
      name: 'Quentin',
      jobTitle: 'Co-fondateur & Directeur de production',
    },
  ],
  serviceType: 'Video Editing',
  areaServed: ['FR', 'BE', 'CH', 'CA'],
  priceRange: '€€',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://irysagency.com/#localbusiness',
  name: 'IRYS Agency',
  url: 'https://irysagency.com',
  email: 'contact@irysagency.com',
  description:
    'Agence francophone de post-production vidéo Done-For-You pour infopreneurs (coaches, formateurs, consultants).',
  areaServed: ['FR', 'BE', 'CH', 'CA'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '', // TODO: REPLACE
    addressLocality: '', // TODO: REPLACE
    addressCountry: 'FR',
  },
  serviceType: 'Video Post-Production Services',
  knowsLanguage: ['fr-FR', 'en-US'],
}

interface VideoLdItem {
  '@type': 'VideoObject'
  name: string
  description: string
  thumbnailUrl: string
  embedUrl: string
  uploadDate: string
  contentUrl: string
}

const portfolioVideoIds: { id: string; name: string; description: string }[] = [
  {
    id: '5Egg356Cq30',
    name: 'QUENTIN.PRPROJ — Les Maths',
    description: 'Short Coaching · Expert Edit pour Quentin.PrProj.',
  },
  {
    id: 'fo_RbvFOATM',
    name: 'NICO — Lancement',
    description: 'Reel Automotive · Launch · Storytelling pour Nico.',
  },
  {
    id: 'GkMIQ0STBLA',
    name: 'CECCA — Podcast Versus',
    description: 'Podcast Multi-cam · Edit dynamique pour Cecca.',
  },
  {
    id: 'xDHijcJwJtQ',
    name: 'QUENTIN.PRPROJ — XEN Mixe',
    description: 'Short Content · 16 Reels/mois pour Quentin.PrProj.',
  },
  {
    id: 'bxPuaMCtnZM',
    name: 'JONATHAN KHALFA — Business Reel',
    description: 'Reel Business · 16 Reels + 2 YT/mois pour Jonathan Khalfa.',
  },
  {
    id: '9YMhzMPxPmE',
    name: 'QUENTIN.PRPROJ — XEN Gratuit',
    description: 'Short Content · Psychology pour Quentin.PrProj.',
  },
]

const videoJsonLd: VideoLdItem[] = portfolioVideoIds.map((v) => ({
  '@type': 'VideoObject',
  name: v.name,
  description: v.description,
  thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
  uploadDate: '2025-01-01',
  contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
}))

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Je garde le dernier mot sur mes vidéos ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. On définit ta patte visuelle ensemble au départ. Rien ne sort sans ton accord final. Tu restes le seul maître à bord.',
      },
    },
    {
      '@type': 'Question',
      name: 'J\'ai besoin d\'une caméra à 3000 euros ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Ton smartphone suffit largement pour commencer. On t\'aide à trouver la bonne lumière. Le contenu bat toujours le matériel de pointe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le montage garantit-il des millions de vues ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'algorithme décide des vues. Notre agence vidéo infopreneur garantit une rétention maximale. Une vidéo bien montée retient l\'attention et génère de la confiance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne cette fameuse vidéo offerte ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confie-nous un fichier brut. On applique notre méthode. Si le résultat te plaît, on démarre l\'abonnement. Sinon, tu gardes la vidéo gratuitement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Suis-je coincé si je m\'abonne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jamais. Tu as juste un préavis de 30 jours pour stopper. Nos clients restent pour la qualité de notre travail. Pas par obligation légale.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSans.variable} ${outfit.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          {children}
          {/* Plausible Analytics — cookieless, pas de banner RGPD */}
          <Script
            defer
            data-domain="irysagency.com"
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        </I18nProvider>
      </body>
    </html>
  )
}
