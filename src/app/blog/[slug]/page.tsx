import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import BlogPost from './BlogPost'

// Revalidate every 60 seconds so new posts appear quickly
export const revalidate = 60

const EXCLUDED_SLUGS = new Set([
  'best-digital-marketing-agency-in-roorkee',
  'best-digital-marketing-agency-in-khatima',
  'history-evolution-of-d2c-india-boom',
]);

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts
    .filter((post: any) => post?.slug && !EXCLUDED_SLUGS.has(post.slug.trim()))
    .map((post: any) => ({
      slug: post.slug.trim(),
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug || '';
  const slug = decodeURIComponent(rawSlug).trim();

  const post = await client.fetch(`*[_type == "post" && (slug.current == $slug || slug.current match $slug)][0]{
    title,
    description,
    "imageUrl": thumbnail.asset->url
  }`, { slug })

  if (!post) {
    return {}
  }

  // Set noindex on hyper-local Indian town blog posts to preserve US/EU topical authority
  const isLocalIndianPost = EXCLUDED_SLUGS.has(slug) || /roorkee|khatima|uttarakhand|haridwar/i.test(slug + ' ' + (post.title || ''));

  return {
    title: `${post.title} | d2cora Blog`,
    description: post.description,
    alternates: {
      canonical: `https://d2cora.com/blog/${slug}`,
    },
    ...(isLocalIndianPost ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://d2cora.com/blog/${slug}`,
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
  const rawSlug = resolvedParams.slug || '';
  const slug = decodeURIComponent(rawSlug).trim();

  const post = await client.fetch(`*[_type == "post" && (slug.current == $slug || slug.current match $slug)][0]{
    _id,
    title,
    description,
    publishedAt,
    content,
    faqs,
    language,
    "imageUrl": thumbnail.asset->url,
    "imageDimensions": thumbnail.asset->metadata.dimensions,
    "authorName": author->name,
    "authorImage": author->image.asset->url
  }`, { slug })

  if (!post) {
    notFound()
  }

  const isGerman =
    post.language === 'de' ||
    /agentur|kosten|preis|leadgenerierung|beauftragen|suchmaschinenoptimierung/i.test(slug + ' ' + (post.title || ''));

  const recentPosts = await client.fetch(`*[_type == "post" && slug.current != $slug && !(slug.current match $slug)] | order(publishedAt desc)[0...3]{
    title,
    "slug": slug.current,
    "imageUrl": thumbnail.asset->url,
    "imageDimensions": thumbnail.asset->metadata.dimensions
  }`, { slug })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.imageUrl ? [post.imageUrl] : [],
    datePublished: post.publishedAt,
    mainEntityOfPage: `https://d2cora.com/blog/${slug}`,
    author: [{
      '@type': 'Organization',
      name: post.authorName || 'D2CORA Team',
      url: 'https://d2cora.com'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'D2CORA',
      url: 'https://d2cora.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://d2cora.com/assets/d2cora.png'
      }
    }
  }

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isGerman ? 'Startseite' : 'Home',
        item: isGerman ? 'https://d2cora.com/de' : 'https://d2cora.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://d2cora.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://d2cora.com/blog/${slug}`,
      },
    ],
  };

  // Extract plain text from a Portable Text block array for JSON-LD
  const toPlainText = (blocks: any): string => {
    if (typeof blocks === 'string') return blocks
    if (!blocks || !Array.isArray(blocks)) return ''
    return blocks
      .map((block) => {
        if (block._type !== 'block' || !block.children) return ''
        return block.children.map((child: any) => child.text ?? '').join('')
      })
      .filter(Boolean)
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPost post={post} recentPosts={recentPosts} isGerman={isGerman} slug={slug} />
    </>
  )
}
