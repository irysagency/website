/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irysagency.com',
  generateRobotsTxt: true,
  // localePrefix: 'as-needed' → FR (default) sans prefix, EN sur /en
  // exclu les paths Next.js que next-sitemap découvre mais qu'on traite via transform
  exclude: ['/server-sitemap.xml', '*/[locale]'],
  // Ajoute les pages dynamiques (non-statique au build) manuellement
  additionalPaths: async (config) => {
    const pages = ['/cgv', '/mentions-legales', '/politique-de-confidentialite']
    const paths = []
    const lastmod = new Date().toISOString()
    for (const page of pages) {
      const frUrl = `${config.siteUrl}${page}`
      const enUrl = `${config.siteUrl}/en${page}`
      const alternateRefs = [
        { href: frUrl, hreflang: 'fr', hrefIsAbsolute: true },
        { href: enUrl, hreflang: 'en', hrefIsAbsolute: true },
        { href: frUrl, hreflang: 'x-default', hrefIsAbsolute: true },
      ]
      // FR (sans prefix)
      paths.push({ loc: frUrl, changefreq: 'monthly', priority: 0.5, lastmod, alternateRefs })
      // EN (avec /en prefix)
      paths.push({ loc: enUrl, changefreq: 'monthly', priority: 0.5, lastmod, alternateRefs })
    }
    return paths
  },
  // Transforme chaque path en entrée avec hreflang FR/EN/x-default correctement croisé
  transform: async (config, path) => {
    // Détecte locale + path neutre (sans prefix)
    const match = path.match(/^\/(fr|en)(\/.*)?$/)
    const locale = match?.[1] ?? 'fr'
    const neutralPath = (match?.[2] ?? '/').replace(/\/$/, '') || '/'

    // URLs finales : FR sans prefix, EN avec /en
    const suffix = neutralPath === '/' ? '' : neutralPath
    const frUrl = `${config.siteUrl}${suffix}`
    const enUrl = `${config.siteUrl}/en${suffix}`

    const loc = locale === 'fr' ? frUrl : enUrl

    return {
      loc,
      changefreq: config.changefreq,
      priority: neutralPath === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: frUrl, hreflang: 'fr', hrefIsAbsolute: true },
        { href: enUrl, hreflang: 'en', hrefIsAbsolute: true },
        { href: frUrl, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
}
