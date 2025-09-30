/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://watheta.com/',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [
        '/images/svg.png',
        '/admin/*',
        '/dashboard/*',
        '/api/*',
    ],
    alternateRefs: [
        { href: 'https://es.watheta.com', hreflang: 'es' },
        { href: 'https://fr.watheta.com', hreflang: 'fr' },
    ],
    transform: async (config, path) => ({
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
    }),
    additionalPaths: async (config) => [
        await config.transform(config, '/additional-page'),
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/dashboard',
                    '/api',
                    '/images/svg.png',
                ],
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/'], // block everything for this bot
            },
        ],
    }
}
