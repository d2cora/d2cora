import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all search engine bots to crawl the whole site
        userAgent: '*',
        allow: '/',
        // Block crawlers from hitting studio, API routes, and internal Next.js paths
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
        ],
      },
      {
        // Explicitly allow Google's AI crawler (Gemini/SGE) for GEO
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        // Allow GPTBot (ChatGPT) for AEO
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        // Allow PerplexityBot for AEO
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        // Allow ClaudeBot (Anthropic) for AEO
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://www.d2cora.com/sitemap.xml',
    host: 'https://www.d2cora.com',
  }
}
