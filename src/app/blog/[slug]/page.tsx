import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import BlogPost from './BlogPost'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    "imageUrl": thumbnail.asset->url
  }`, { slug: resolvedParams.slug })

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | d2cora Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : [],
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    publishedAt,
    content,
    "imageUrl": thumbnail.asset->url,
    "authorName": author->name,
    "authorImage": author->image.asset->url
  }`, { slug: resolvedParams.slug })

  if (!post) {
    notFound()
  }

  const recentPosts = await client.fetch(`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
    title,
    "slug": slug.current,
    "imageUrl": thumbnail.asset->url
  }`, { slug: resolvedParams.slug })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.imageUrl ? [post.imageUrl] : [],
    datePublished: post.publishedAt,
    author: [{
      '@type': 'Organization',
      name: post.authorName || 'd2cora Team',
    }]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} recentPosts={recentPosts} />
    </>
  )
}
