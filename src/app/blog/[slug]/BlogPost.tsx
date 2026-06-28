"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

// Lightweight portable text components used inside imageWithText blocks
const inlineTextComponents = {
  block: {
    normal: ({children}: any) => <p className="font-serif text-[19px] font-normal leading-[1.85] text-[#1a1a1a] mb-5">{children}</p>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({children}: any) => <em className="italic text-gray-800">{children}</em>,
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-blue-700 hover:text-blue-900 underline underline-offset-2 transition-colors">
          {children}
        </a>
      )
    },
  },
}

const ptComponents = {

  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-10 w-full">
          <div className="relative w-full h-[400px] overflow-hidden bg-gray-100">
            <Image
              alt={value.alt || 'Blog content image'}
              loading="lazy"
              src={urlFor(value).fit('max').auto('format').url() as string}
              fill
              className="object-cover"
            />
          </div>
          {value.alt && <figcaption className="mt-3 text-center text-sm text-gray-500 italic font-serif">{value.alt}</figcaption>}
        </figure>
      )
    },
    imageWithText: ({ value }: any) => {
      if (!value) return null
      const isRight = value.imagePosition !== 'left'
      const hasImage = value.image?.asset?._ref

      return (
        <div className={`flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 my-10 items-start`}>
          {/* Text side */}
          <div className="flex-1 min-w-0">
            {value.heading && (
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-snug">
                {value.heading}
              </h2>
            )}
            {value.text && (
              <PortableText value={value.text} components={inlineTextComponents} />
            )}
          </div>

          {/* Image side */}
          {hasImage && (
            <div className="w-full md:w-[42%] shrink-0">
              <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
                <Image
                  alt={value.image.alt || ''}
                  src={urlFor(value.image).fit('max').auto('format').url() as string}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {value.image.alt && (
                <p className="mt-2 text-center text-sm text-gray-500 italic font-serif">{value.image.alt}</p>
              )}
            </div>
          )}
        </div>
      )
    },
  },

  block: {
    h1: ({children}: any) => <h1 className="font-serif text-3xl md:text-4xl font-bold mt-10 mb-5 text-gray-900 leading-tight">{children}</h1>,
    h2: ({children}: any) => <h2 className="font-serif text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900 leading-snug">{children}</h2>,
    h3: ({children}: any) => <h3 className="font-serif text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 leading-snug">{children}</h3>,
    h4: ({children}: any) => <h4 className="font-serif text-lg md:text-xl font-bold mt-6 mb-4 text-gray-900">{children}</h4>,
    normal: ({children}: any) => <p className="font-serif text-[19px] font-normal leading-[1.85] text-[#1a1a1a] mb-7">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-6 my-8 font-serif italic text-gray-600 text-xl leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-8 mb-7 space-y-2 font-serif text-[19px] text-[#1a1a1a] leading-[1.85]">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-8 mb-7 space-y-2 font-serif text-[19px] text-[#1a1a1a] leading-[1.85]">{children}</ol>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({children}: any) => <em className="italic text-gray-800">{children}</em>,
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-blue-700 hover:text-blue-900 underline underline-offset-2 transition-colors">
          {children}
        </a>
      )
    },
  },
}

export default function BlogPost({ post, recentPosts }: { post: any, recentPosts: any[] }) {
  const calculateReadTime = () => {
    if (!post.content) return 1;
    const textStr = post.content
      .filter((block: any) => block._type === 'block')
      .map((block: any) => block.children?.map((child: any) => child.text).join(' '))
      .join(' ');
    const words = textStr.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* ─── Left: Main Article ─── */}
        <div className="lg:col-span-2">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Hero image — sharp corners */}
          {post.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[300px] md:h-[450px] overflow-hidden mb-6"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Date & read time */}
          <div className="flex items-center gap-4 text-gray-500 font-sans text-sm mb-10 border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {calculateReadTime()} min read
            </span>
            {post.authorName && (
              <>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2">
                  {post.authorImage && (
                    <Image src={post.authorImage} alt={post.authorName} width={22} height={22} className="rounded-full object-cover" />
                  )}
                  {post.authorName}
                </span>
              </>
            )}
          </div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.content ? (
              <PortableText value={post.content} components={ptComponents} />
            ) : (
              <p className="font-serif text-lg text-gray-600">No content available.</p>
            )}

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-200">
                <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8">
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <div className="font-serif text-lg text-gray-700 leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0">
                        <PortableText value={faq.answer} components={ptComponents} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* ─── Right: Sidebar ─── */}
        <aside className="lg:col-span-1 space-y-12">

          {/* Contact Form */}
          <div className="border border-gray-200 p-7">
            <h3 className="font-sans text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Contact Us</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Name', type: 'text', placeholder: 'Enter your name' },
                { label: 'Email', type: 'email', placeholder: 'Enter your Email' },
                { label: 'Phone', type: 'tel', placeholder: 'Enter your phone number' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block font-sans text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-3 py-2 font-sans text-sm bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-sans text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-3 py-2 font-sans text-sm bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-900 hover:bg-black text-white font-sans font-semibold py-2 px-6 text-sm transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-sans text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-200 pb-4">
              Recent Posts
            </h3>

            {recentPosts && recentPosts.length > 0 ? (
              <div className="space-y-6">
                {recentPosts.map((rp) => (
                  <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group block">
                    <div className="relative w-full h-44 overflow-hidden mb-3 bg-gray-100">
                      {rp.imageUrl ? (
                        <Image
                          src={rp.imageUrl}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-sans text-sm">No Image</div>
                      )}
                    </div>
                    <h4 className="font-serif font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="font-sans text-sm text-gray-400">No other posts yet.</p>
            )}
          </div>

        </aside>
      </div>
    </article>
  )
}
