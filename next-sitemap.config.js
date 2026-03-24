/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://irysagency.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
}
