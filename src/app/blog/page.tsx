import { client } from '@/sanity/lib/client'
import BlogList from './BlogList'

// Revalidate every hour
export const revalidate = 3600

export const metadata = {
  title: "Blog & Insights | d2cora",
  description: "Read our latest insights, strategies, and case studies on D2C growth, performance marketing, and digital brand building.",
};

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
