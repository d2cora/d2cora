import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getHreflangAlternates } from '@/lib/i18n';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.d2cora.com',
    languages: getHreflangAlternates(),
  },
};

// FAQ items for JSON-LD structured data
const faqItems = [
  {
    question: "How will digital marketing help grow my business?",
    answer: "Digital marketing increases your brand's visibility and reach by targeting the right audience through tailored channels. By implementing data-driven strategies across search engines, social media, and paid ads, we help you generate high-quality leads and drive sustainable sales growth."
  },
  {
    question: "How long does it take to see results?",
    answer: "The timeline varies by strategy. Paid advertising (PPC) can deliver immediate traffic and leads within days. Organic growth, such as SEO and content marketing, typically requires 3 to 6 months to build momentum and deliver long-lasting, compounding results."
  },
  {
    question: "What makes your agency different from other digital marketing agencies?",
    answer: "We move beyond just 'running ads.' Our strategy-first approach involves a deep analysis of your market and competitors to make data-driven decisions. We focus on measurable ROI and sustainable long-term growth, ensuring every dollar spent contributes to your bottom line."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: "We define success through clear, measurable KPIs tailored to your goals. This includes tracking lead generation, conversion rates, organic traffic growth, and overall Return on Investment (ROI). We provide transparent reports so you always know exactly how your campaigns are performing."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is flexible and customized to your specific needs, goals, and budget. We don't believe in one-size-fits-all packages. Instead, we propose a strategy that maximizes value for your investment, ensuring you get the best possible outcome for your business."
  }
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization', 'LocalBusiness'],
  '@id': 'https://www.d2cora.com/#organization',
  name: 'd2cora',
  alternateName: 'D2CORA Digital Marketing Agency',
  description: 'd2cora is your one-stop marketing ecosystem helping D2C brands, e-commerce, clinics, and businesses scale profitably through performance marketing, Google & Meta ads, SEO, and conversion optimization.',
  url: 'https://www.d2cora.com',
  logo: 'https://www.d2cora.com/assets/d2cora%20full.svg',
  image: 'https://www.d2cora.com/assets/d2c-growth-partner.jpg',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Khatima',
    addressRegion: 'Uttarakhand',
    postalCode: '262308',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://in.linkedin.com/company/d2cora1',
    'https://www.instagram.com/d2cora.media/',
    'https://x.com/Rahul___Bora',
  ],
};

import { Hero } from "@/components/sections/Hero";
import { TrustSignal } from "@/components/sections/TrustSignal";
import { GrowthPartner } from "@/components/sections/GrowthPartner";
import { FAQ } from "@/components/sections/FAQ";

// Lazy load components
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Industries = dynamic(() => import("@/components/sections/Industries").then(mod => ({ default: mod.Industries })));
const VisionSection = dynamic(() => import("@/components/sections/VisionSection").then(mod => ({ default: mod.VisionSection })));
const GraphicPortfolio = dynamic(() => import("@/components/sections/GraphicPortfolio").then(mod => ({ default: mod.GraphicPortfolio })));
const DigitalCanvas = dynamic(() => import("@/components/sections/DigitalCanvas").then(mod => ({ default: mod.DigitalCanvas })));
const TestimonialTeaser = dynamic(() => import("@/components/sections/TestimonialTeaser").then(mod => ({ default: mod.TestimonialTeaser })));

export default function Home() {
  return (
    <main className="w-full">
      {/* Schemas for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="sr-only">d2cora: Leading Digital Marketing Agency for D2C Brands & Ecommerce Growth</h1>
      <Hero />
      <div className="relative z-10">
        <TrustSignal />
        <Industries />
        <VisionSection />
        <GraphicPortfolio />
        <DigitalCanvas />
        <Services />
        <TestimonialTeaser />
        <GrowthPartner />
        <FAQ />
      </div>
    </main>
  );
}
