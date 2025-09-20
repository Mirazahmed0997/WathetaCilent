export async function GET() {
  const baseUrl = 'https://watheta.com';
  const apiUrl = 'https://websiteapi.watheta.com/api/blog-published';

  const blogs = await fetch(apiUrl, { cache: 'no-store' })
    .then(res => res.json())
    .catch(() => []);

  const urls = blogs.map(blog => `
    <url>
      <loc>${baseUrl}/blog/${blog.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
