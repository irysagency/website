/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irysagency.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
    ],
  },
  exclude: ['/admin', '/admin/*'],
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    if (path === '/') {
      return { loc: path, changefreq: 'monthly', priority: 1.0, lastmod: new Date().toISOString() }
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
}
