export function GET() {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://watheta.com/sitemap-pages.xml</loc>
    </sitemap>
    <sitemap>
      <loc>https://watheta.com/sitemap-pricing.xml</loc>
    </sitemap>
    <sitemap>
      <loc>https://watheta.com/sitemap-blogs.xml</loc>
    </sitemap>
  </sitemapindex>`;

  return new Response(content, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}