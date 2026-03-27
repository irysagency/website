import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://plausible.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://*.public.blob.vercel-storage.com https:",
              "media-src 'self' blob: https://*.public.blob.vercel-storage.com",
              "frame-src 'self' https://calendly.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://plausible.io https://calendly.com https://*.public.blob.vercel-storage.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
