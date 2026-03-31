import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://app.cal.eu https://plausible.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://app.cal.com https://app.cal.eu",
              "font-src 'self' https://fonts.gstatic.com https://app.cal.com https://app.cal.eu",
              "img-src 'self' data: https://i.ytimg.com https:",
              "media-src 'self'",
              "frame-src https://app.cal.com https://cal.com https://app.cal.eu https://cal.eu https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://plausible.io https://app.cal.com https://cal.com https://app.cal.eu https://cal.eu",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
