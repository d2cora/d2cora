"use client"
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronDown,
  List,
  ArrowRight,
  TrendingUp,
  Target,
  ShieldCheck,
} from 'lucide-react'
import { SeoRoiCalculator } from '@/components/calculators/SeoRoiCalculator'

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function extractH2Headings(content: any[]): { id: string; text: string }[] {
  if (!content || !Array.isArray(content)) return []
  const headings: { id: string; text: string }[] = []

  content.forEach((block) => {
    if (block._type === 'block' && block.style === 'h2') {
      const text = block.children?.map((c: any) => c.text).join('') || ''
      if (text.trim()) {
        headings.push({
          id: slugify(text),
          text: text.trim(),
        })
      }
    } else if (block._type === 'imageWithText' && block.heading) {
      headings.push({
        id: slugify(block.heading),
        text: block.heading.trim(),
      })
    }
  })

  return headings
}

function FaqAccordion({ faqs, isGerman }: { faqs: any[]; isGerman: boolean }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="mt-16 pt-10 border-t border-gray-200">
      <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900">
        {isGerman ? 'Häufig gestellte Fragen (FAQ)' : 'Frequently Asked Questions'}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq: any, index: number) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg font-bold text-gray-900 leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? '1000px' : '0px' }}
              >
                <div className="px-6 pb-6 pt-1 font-serif text-[17px] text-gray-700 leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 border-t border-gray-100">
                  <PortableText value={faq.answer} components={inlineTextComponents} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

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

function getSanityImageDimensions(imageObj: any) {
  if (imageObj?.asset?.metadata?.dimensions) {
    return imageObj.asset.metadata.dimensions
  }
  const ref = imageObj?.asset?._ref || imageObj?._ref
  if (typeof ref === 'string') {
    const parts = ref.split('-')
    if (parts.length >= 3) {
      const dimPart = parts[2]
      if (dimPart && dimPart.includes('x')) {
        const [w, h] = dimPart.split('x').map(Number)
        if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
          return { width: w, height: h, aspectRatio: w / h }
        }
      }
    }
  }
  return null
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      const dims = getSanityImageDimensions(value)
      const width = dims?.width || 1400
      const height = dims?.height || 800
      const imageUrl = urlFor(value).auto('format').url() as string

      return (
        <figure className="my-10 w-full">
          <div className="w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-1 md:p-2">
            <Image
              alt={value.alt || 'Blog content image'}
              loading="lazy"
              src={imageUrl}
              width={width}
              height={height}
              sizes="(max-width: 768px) 100vw, 850px"
              className="w-full h-auto object-contain rounded-xl"
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
      const headingId = value.heading ? slugify(value.heading) : undefined

      return (
        <div id={headingId} className={`flex flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 my-10 items-start scroll-mt-24`}>
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
            <div className="w-full md:w-[45%] shrink-0">
              <div className="w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-1 flex items-center justify-center">
                {(() => {
                  const dims = getSanityImageDimensions(value.image)
                  const w = dims?.width || 800
                  const h = dims?.height || 600
                  return (
                    <Image
                      alt={value.image.alt || ''}
                      src={urlFor(value.image).auto('format').url() as string}
                      width={w}
                      height={h}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="w-full h-auto object-contain rounded-xl"
                      loading="lazy"
                    />
                  )
                })()}
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
    h2: ({children}: any) => {
      const text = Array.isArray(children) ? children.join('') : String(children || '')
      const id = slugify(text)
      return (
        <h2 id={id} className="font-serif text-2xl md:text-3xl font-bold mt-12 mb-4 text-gray-900 leading-snug scroll-mt-24">
          {children}
        </h2>
      )
    },
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

export default function BlogPost({
  post,
  recentPosts,
  isGerman = false,
  slug = '',
}: {
  post: any
  recentPosts: any[]
  isGerman?: boolean
  slug?: string
}) {
  const headings = extractH2Headings(post.content)

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
            {isGerman ? 'Zurück zum Blog' : 'Back to Blog'}
          </Link>

          {/* Hero image — show full image without cropping */}
          {post.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full overflow-hidden mb-8 rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1 md:p-2"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={post.imageDimensions?.width || 1400}
                height={post.imageDimensions?.height || 700}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                className="w-full h-auto object-contain rounded-xl"
                priority
              />
            </motion.div>
          )}

          {/* Date & read time */}
          <div className="flex items-center gap-4 text-gray-500 font-sans text-sm mb-10 border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(isGerman ? 'de-DE' : 'en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {calculateReadTime()} {isGerman ? 'Min. Lesezeit' : 'min read'}
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

          {/* Dynamic Table of Contents (Inhaltsverzeichnis) */}
          {headings.length > 1 && (
            <div className="mb-12 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 md:p-8">
              <div className="flex items-center gap-2.5 font-sans text-sm font-bold uppercase tracking-wider text-gray-900">
                <List className="h-4 w-4 text-blue-600" />
                <span>{isGerman ? 'Inhaltsverzeichnis' : 'Table of Contents'}</span>
              </div>
              <nav className="mt-4">
                <ol className="space-y-2.5 text-sm font-sans">
                  {headings.map((h, i) => (
                    <li key={h.id} className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-blue-600">{String(i + 1).padStart(2, '0')}.</span>
                      <a
                        href={`#${h.id}`}
                        className="text-gray-700 hover:text-blue-600 hover:underline transition-colors leading-relaxed"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.content ? (
              <PortableText value={post.content} components={ptComponents} />
            ) : (
              <p className="font-serif text-lg text-gray-600">
                {isGerman ? 'Kein Inhalt verfügbar.' : 'No content available.'}
              </p>
            )}

            {/* Embedded Interactive ROI Calculator */}
            <div className="my-16">
              <SeoRoiCalculator locale={isGerman ? 'de' : 'en'} />
            </div>

            {/* Contextual Bottom-of-Funnel Conversion Card */}
            {isGerman ? (
              <div className="my-12 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-8 md:p-10 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                  <TrendingUp className="h-3.5 w-3.5" />
                  DACH WACHSTUMS-INITIATIVE
                </div>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  Möchten Sie Ihren organischen B2B- &amp; E-Commerce-Umsatz im DACH-Raum skalieren?
                </h3>
                <p className="mt-3 font-serif text-base text-gray-700 leading-relaxed">
                  Lassen Sie uns Ihre Website auf Herz und Nieren prüfen: Von Core Web Vitals bis hin zur Generative Engine Optimization (GEO). Vereinbaren Sie jetzt Ihre kostenlose Potenzialanalyse.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/de/seo-agentur"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
                  >
                    <span>Zur SEO Agentur DACH</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/de/b2b-leadgenerierung-agentur"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all"
                  >
                    <span>B2B Leadgenerierung</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="my-12 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-white p-8 md:p-10 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                  <TrendingUp className="h-3.5 w-3.5" />
                  GLOBAL REVENUE ARCHITECTURE
                </div>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to Turn Search Into Your Most Predictable Acquisition Channel?
                </h3>
                <p className="mt-3 font-serif text-base text-gray-700 leading-relaxed">
                  Partner with D2CORA to unlock high-intent organic positions across the US, UK, and European markets. Book your free 30-minute growth diagnostic.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/services/shopify-seo-agency"
                    className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-all"
                  >
                    <span>Shopify SEO Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all"
                  >
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            {post.faqs && post.faqs.length > 0 && (
              <FaqAccordion faqs={post.faqs} isGerman={isGerman} />
            )}
          </motion.div>
        </div>

        {/* ─── Right: Sidebar ─── */}
        <aside className="lg:col-span-1 space-y-10">

          {/* Core Money Pages Quick Box */}
          <div className="rounded-2xl border border-blue-500/20 bg-[#001026] p-6 text-white shadow-lg">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
              {isGerman ? 'Lösungen & Leitfäden' : 'Specialized Solutions'}
            </span>
            <h4 className="mt-2 text-lg font-bold text-white">
              {isGerman ? 'Strategische DACH-Dienste' : 'Commercial Search Systems'}
            </h4>
            <div className="mt-4 space-y-2.5">
              {isGerman ? (
                <>
                  <Link
                    href="/de/seo-agentur"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>SEO Agentur DACH</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/de/b2b-leadgenerierung-agentur"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>B2B Leadgenerierung</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/blog/seo-agentur-kosten"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>SEO Agentur Kosten Leitfaden</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/services/shopify-seo-agency"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>Shopify SEO Agency</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services/d2c-marketing-agency"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>D2C Marketing Agency</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services/ai-search-geo-agency"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-neutral-200 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all"
                  >
                    <span>AI Search &amp; GEO Agency</span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Contact / Consultation Box */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-7">
            <h3 className="font-sans text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
              {isGerman ? 'Kostenlose Beratung anfordern' : 'Book a Strategy Call'}
            </h3>
            <p className="text-xs text-gray-600 mb-5 leading-relaxed">
              {isGerman
                ? 'Sprechen Sie direkt mit unserem leitenden Wachstums-Architekten über Ihre Ziele im DACH-Raum.'
                : 'Schedule a tailored diagnostic call with our senior technical SEO and revenue growth leads.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-center text-xs font-semibold text-white hover:bg-black transition-colors"
            >
              <span>{isGerman ? 'Jetzt Termin buchen' : 'Schedule Strategy Session'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>100% GDPR / DSGVO Compliant</span>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-200 pb-4">
              {isGerman ? 'Aktuelle Artikel' : 'Recent Articles'}
            </h3>

            {recentPosts && recentPosts.length > 0 ? (
              <div className="space-y-6">
                {recentPosts.map((rp) => (
                  <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group block">
                    <div className="relative w-full aspect-[16/9] overflow-hidden mb-3 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                      {rp.imageUrl ? (
                        <Image
                          src={rp.imageUrl}
                          alt={rp.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 350px"
                          className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
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
              <p className="font-sans text-sm text-gray-400">
                {isGerman ? 'Keine weiteren Beiträge.' : 'No other posts yet.'}
              </p>
            )}
          </div>

        </aside>
      </div>
    </article>
  )
}
