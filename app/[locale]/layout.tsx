import type { Metadata } from 'next'
import { Inter, DM_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing, type Locale } from '@/i18n/routing'
import '../globals.css'

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const SITE_URL = 'https://irysagency.com'

// localePath retourne l'URL en respectant `localePrefix: 'as-needed'`
// FR (default) reste sur '/', EN sur '/en'
function localePath(locale: Locale): string {
  return locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale

  const isEn = validLocale === 'en'

  const title = isEn
    ? 'Video editing agency for content creators | Irys'
    : 'Agence montage vidéo pour infopreneurs | Irys'

  const description = isEn
    ? 'Stop wasting time on Premiere Pro. Delegate your post-production to our done-for-you video editing agency. Book your free call.'
    : 'Arrête de perdre du temps sur Premiere Pro. Délègue ta post-production à notre agence montage vidéo pour infopreneur. Réserve ton appel gratuit !'

  const ogTitle = isEn
    ? 'Irys Agency — Done-For-You video post-production'
    : 'Irys Agency — Post-production vidéo Done-For-You'

  const ogDescription = isEn
    ? 'Video editing agency for content creators. +54 clients, +1,600 videos delivered. First video free.'
    : 'Agence de montage vidéo pour infopreneurs et créateurs. +54 clients, +1 600 vidéos livrées. Première vidéo offerte.'

  const ogAlt = isEn
    ? 'IRYS Agency — video post-production agency for content creators'
    : 'IRYS Agency — agence post-production vidéo pour infopreneurs francophones'

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: '%s | Irys',
    },
    description,
    keywords: isEn
      ? [
          'video editing',
          'video post-production',
          'video editing agency',
          'content creator',
          'coach',
          'course creator',
          'done for you video',
          'Irys Agency',
        ]
      : [
          'montage vidéo',
          'post-production vidéo',
          'agence montage vidéo',
          'infopreneur',
          'coach',
          'formateur',
          'done for you vidéo',
          'Irys Agency',
        ],
    authors: [{ name: 'Irys Agency', url: SITE_URL }],
    creator: 'Irys Agency',
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'fr_FR',
      alternateLocale: isEn ? ['fr_FR'] : ['en_US'],
      url: localePath(validLocale as Locale),
      siteName: 'Irys Agency',
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: '/og-image.jpg', // TODO: REPLACE
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: isEn
        ? 'You film, we deliver. Pro video editing for content creators.'
        : 'Tu filmes, on livre. Montage vidéo pro pour infopreneurs francophones.',
      images: [
        {
          url: '/og-image.jpg', // TODO: REPLACE
          alt: ogAlt,
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
      canonical: localePath(validLocale as Locale),
      languages: {
        'x-default': SITE_URL,
        fr: SITE_URL,
        en: `${SITE_URL}/en`,
      },
    },
  }
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${dmSans.variable} ${outfit.variable} h-full`}>
      <head>
        {/* Preconnect : economie ~100-200ms LCP sur tiers critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          {/* Plausible Analytics — cookieless, pas de banner RGPD */}
          <Script
            defer
            data-domain="irysagency.com"
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
