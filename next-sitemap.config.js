/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irysagency.com',
  generateRobotsTxt: true,
  // FR (defaultLocale) sans prefix → '/' = canonical FR
  // EN routé sur /en
  alternateRefs: [
    { href: 'https://irysagency.com', hreflang: 'fr' },
    { href: 'https://irysagency.com/en', hreflang: 'en' },
    { href: 'https://irysagency.com', hreflang: 'x-default' },
  ],
  // Pour chaque path crawlé, génère les hreflang FR/EN/x-default
  transform: async (config, path) => {
    const isEnPath = path.startsWith('/en/') || path === '/en'
    const cleanPath = isEnPath ? path.replace(/^\/en/, '') || '/' : path
    const suffix = cleanPath === '/' ? '' : cleanPath
    const frUrl = `${config.siteUrl}${suffix}`
    const enUrl = `${config.siteUrl}/en${suffix}`

    return {
      loc: isEnPath ? enUrl : frUrl,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: frUrl, hreflang: 'fr' },
        { href: enUrl, hreflang: 'en' },
        { href: frUrl, hreflang: 'x-default' },
      ],
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
}
