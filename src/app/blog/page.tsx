import { client } from '@/sanity/lib/client'
import BlogList from './BlogList'

// Revalidate every hour
export const revalidate = 3600

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    "imageUrl": thumbnail.asset->url
  }`)

  return <BlogList posts={posts} />
}
