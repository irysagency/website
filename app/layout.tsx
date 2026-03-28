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
  weight: ['300', '400', '500', '600', '700', '800'],
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
      'Agence de montage vidéo pour infopreneurs et créateurs. +150 clients, +1 600 vidéos livrées. Première vidéo offerte.',
    // TODO: Créer /public/og-image.jpg (1200×630) avant le lancement
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Irys Agency — Post-production vidéo Done-For-You' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irys Agency — Post-production vidéo Done-For-You',
    description:
      'Tu filmes, on livre. Montage vidéo pro pour infopreneurs francophones.',
    // TODO: Créer /public/og-image.jpg avant le lancement
    // images: ['/og-image.jpg'],
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
      'fr': 'https://irysagency.com',
      'en': 'https://irysagency.com',
      'x-default': 'https://irysagency.com',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://irysagency.com/#organization',
  name: 'Irys Agency',
  url: 'https://irysagency.com',
  logo: 'https://irysagency.com/images/logo-irys.svg',
  description:
    'Agence de montage vidéo spécialisée pour les infopreneurs, coaches et formateurs francophones. Shorts, YouTube, Ads, VSL — done-for-you.',
  founder: [
    {
      '@type': 'Person',
      name: 'Kilian Adam',
      jobTitle: 'Co-fondateur · Expert Viralité & Contenu Organique',
    },
    {
      '@type': 'Person',
      name: 'Quentin',
      jobTitle: 'Co-fondateur · Expert Montage Vidéo & Production',
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
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${dmSans.variable} ${outfit.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
