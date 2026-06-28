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
    faqs,
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

  // Extract plain text from a Portable Text block array for JSON-LD
  const toPlainText = (blocks: any[]): string => {
    if (!blocks || !Array.isArray(blocks)) return ''
    return blocks
      .map((block) => {
        if (block._type !== 'block' || !block.children) return ''
        return block.children.map((child: any) => child.text ?? '').join('')
      })
      .join('\n')
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: toPlainText(faq.answer)
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPost post={post} recentPosts={recentPosts} />
    </>
  )
}
