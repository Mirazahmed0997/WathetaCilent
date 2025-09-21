/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://watheta.com/',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [
        '/images/svg.png',       // static image
        '/admin/*',              // hide admin
        '/dashboard/*',          // hide dashboard
        '/api/*',                // hide API routes
    ],
    alternateRefs: [
        {
            href: 'https://es.watheta.com',
            hreflang: 'es',
        },
        {
            href: 'https://fr.watheta.com',
            hreflang: 'fr',
        },
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
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
                    'https://platform.openai.com/',
                    'https://webhook.site/',
                    'https://docs.google.com/document/d/1WqvyMpAJ04r6LztFCC7wczeCuijdO9rIj90hLxhFFG4/edit?usp=sharing',
                    'https://static.xx.fbcdn.net/rsrc.php/yv/r/B8BxsscfVBr.ico',
                    'https://dash.watheta.com/',
                    '/images/svg.png',
                    'https://websiteapi.watheta.com/',
                ],
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/'], // fully block them
            },
        ],
        additionalSitemaps: [
            //   'https://watheta.com/my-custom-sitemap-1.xml',
            //   'https://watheta.com/my-custom-sitemap-2.xml',
        ],
    },
}