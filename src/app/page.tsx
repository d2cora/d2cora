import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { client } from '@/sanity/lib/client';
import { Hero } from '@/components/sections/Hero';
import { TrustSignal } from '@/components/sections/TrustSignal';
import { FAQ, FaqItem } from '@/components/sections/FAQ';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// Revalidate home page every hour to pick up new FAQs from Sanity
export const revalidate = 3600;

// Lazy load heavy components
const Services = dynamic(() => import('@/components/sections/Services').then(mod => ({ default: mod.Services })));
const Industries = dynamic(() => import('@/components/sections/Industries').then(mod => ({ default: mod.Industries })));
const VisionSection = dynamic(() => import('@/components/sections/VisionSection').then(mod => ({ default: mod.VisionSection })));
const GraphicPortfolio = dynamic(() => import('@/components/sections/GraphicPortfolio').then(mod => ({ default: mod.GraphicPortfolio })));

/** Extracts plain text from a Portable Text block array for JSON-LD */
function toPlainText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child: any) => child.text ?? '').join('');
    })
    .join('\n');
}

export default async function Home() {
  // Fetch FAQs from Sanity, ordered by the 'order' field
  const faqs: FaqItem[] = await client.fetch(
    `*[_type == "faq"] | order(order asc, _createdAt asc) {
      _id,
      question,
      answer
    }`
  );

  // Build FAQPage JSON-LD from live Sanity data
  const faqJsonLd =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: toPlainText(faq.answer as any[]),
            },
          })),
        }
      : null;

  return (
    <main className="w-full">
      {/* FAQ JSON-LD structured data — built from live Sanity content */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <h1 className="sr-only">d2cora: Leading Digital Marketing Agency for D2C Brands &amp; Ecommerce Growth</h1>
      <Hero />
      <TrustSignal />
      <Industries />
      <VisionSection />
      <GraphicPortfolio />
      <Services />

      {/* SEO Copy Section */}
      <section className="bg-black py-16 px-6 md:px-16 text-white/70">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Your Partner in D2C Ecommerce Growth</h2>
          <p className="mb-4">
            At d2cora, we understand that scaling a direct-to-consumer brand requires more than just basic advertising. It demands a holistic, data-driven approach to performance marketing, conversion rate optimization (CRO), and customer retention. As a premier digital marketing agency for D2C brands, our mission is to turn your traffic into loyal customers and your marketing spend into measurable profit.
          </p>
          <p>
            Whether you need to overhaul your paid social strategy, optimize your website for higher conversion rates, or build a scalable growth engine, our team of experts is here to help. We combine creative excellence with rigorous analytics to ensure every campaign we run is optimized for maximum ROI.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} />
    </main>
  );
}
