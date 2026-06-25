import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { serviceCategories } from '@/lib/constants/services'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.d2cora.com'

  // Fetch all blog posts
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`)
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const serviceUrls = serviceCategories.map((service) => ({
    url: `${baseUrl}/services/${service.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticUrls, ...serviceUrls, ...blogUrls]
}
