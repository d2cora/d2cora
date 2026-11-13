import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { serviceCategories } from '@/lib/constants/services'
import { NON_DEFAULT_LOCALES } from '@/lib/i18n'

// Regenerate the sitemap within 60 seconds of a new post being published
export const revalidate = 60

const EXCLUDED_BLOG_SLUGS = new Set([
  'best-digital-marketing-agency-in-roorkee',
  'best-digital-marketing-agency-in-khatima',
  'history-evolution-of-d2c-india-boom',
])

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.d2cora.com'

  // Fetch all blog posts excluding pruned hyper-local Indian posts
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`)
  
  const blogUrls = posts
    .filter((post: any) => post?.slug && !EXCLUDED_BLOG_SLUGS.has(post.slug.trim()))
    .map((post: any) => {
      const isDachMoneyPost = post.slug.trim() === 'seo-agentur-kosten'
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt || new Date()),
        changeFrequency: isDachMoneyPost ? ('weekly' as const) : ('weekly' as const),
        priority: isDachMoneyPost ? 0.9 : 0.7,
      }
    })

  // Ensure /blog/seo-agentur-kosten is guaranteed in sitemap even if CMS sync is pending
  const hasSeoAgenturKosten = blogUrls.some((u: any) => u.url.includes('/blog/seo-agentur-kosten'))
  if (!hasSeoAgenturKosten) {
    blogUrls.push({
      url: `${baseUrl}/blog/seo-agentur-kosten`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  }

  // Core Service Category URLs
  const serviceUrls = serviceCategories.map((service) => ({
    url: `${baseUrl}/services/${service.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // High-Intent BOFU Commercial "Money Keyword" Landing Pages (0.95 / 0.9 Priority)
  const bofuMoneyUrls = [
    { route: '/de/seo-agentur', priority: 0.95 },
    { route: '/de/b2b-leadgenerierung-agentur', priority: 0.95 },
    { route: '/services/shopify-seo-agency', priority: 0.9 },
    { route: '/services/d2c-marketing-agency', priority: 0.9 },
    { route: '/services/ecommerce-cro-agency', priority: 0.9 },
    { route: '/services/ai-search-geo-agency', priority: 0.9 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // High-Value Portfolio & Proof URLs
  const proofUrls = [
    '/case-studies',
    '/case-studies/vini-grow-holidays',
    '/showcase',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Multilingual Homepages (excluding 'mr' Marathi; /de at 0.95 priority)
  const localizedHomeUrls = NON_DEFAULT_LOCALES.map((locale) => ({
    url: `${baseUrl}/${locale.code}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: locale.code === 'de' ? 0.95 : 0.85,
  }))

  const staticUrls = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/founder-brand-audit',
    '/testimonials',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }))

  return [
    ...staticUrls,
    ...bofuMoneyUrls,
    ...proofUrls,
    ...localizedHomeUrls,
    ...serviceUrls,
    ...blogUrls,
  ]
}
