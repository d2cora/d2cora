import { client } from '@/sanity/lib/client'
import BlogList from './BlogList'

// Revalidate every 60 seconds so new posts appear quickly
export const revalidate = 60

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
