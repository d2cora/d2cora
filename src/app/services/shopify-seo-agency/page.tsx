import React from "react";
import type { Metadata } from "next";
import { BofuLandingPage } from "@/components/landing/BofuLandingPage";

export const metadata: Metadata = {
  title: "Shopify & D2C E-Commerce SEO Agency | Revenue-Driven Organic Growth | D2CORA",
  description:
    "Scale your Shopify store organic revenue with D2CORA. We engineer technical Shopify architecture, high-intent product collection ranking, and AI search (GEO) optimization for US, UK & European brands.",
  alternates: {
    canonical: "https://www.d2cora.com/services/shopify-seo-agency",
  },
  openGraph: {
    title: "Shopify & D2C E-Commerce SEO Agency | D2CORA",
    description:
      "Revenue-driven Shopify SEO agency for scaling D2C brands in the US, UK & Europe. Eliminate wasted spend and dominate high-intent buyer searches.",
    url: "https://www.d2cora.com/services/shopify-seo-agency",
    type: "website",
  },
};

const faqs = [
  {
    question: "How is D2CORA's Shopify SEO different from traditional SEO agencies?",
    answer:
      "Most agencies focus on blog traffic that never converts. We focus strictly on bottom-of-funnel (BOFU) collection page architecture, high-intent product variant indexing, faceted navigation crawl optimization, and Generative Engine Optimization (GEO) so your products appear directly inside ChatGPT and Google AI Overviews.",
  },
  {
    question: "How fast can an established Shopify store expect organic revenue growth?",
    answer:
      "Technical audits and indexation fixes (canonical tags, duplicate collection trees, speed optimizations) typically show crawl and ranking improvements in 30 to 45 days. Compounding revenue gains and Page 1 keyword dominance for high-volume commercial queries usually take 90 to 180 days.",
  },
  {
    question: "Do you handle Shopify headless and custom Liquid theme optimization?",
    answer:
      "Yes. Whether your store is built on Shopify Plus, Hydrogen, Next.js headless, or standard Liquid themes, our technical team audits Core Web Vitals, JSON-LD Product Schema, and server-side rendering to ensure flawless search engine crawlability.",
  },
  {
    question: "How do you protect Shopify stores from duplicate content caused by collection tags?",
    answer:
      "Shopify creates duplicate product URLs within collection sub-paths by default (e.g., /collections/mens/products/shoe vs /products/shoe). We restructure internal linking and canonical directives so Google consolidates 100% of link equity into your primary product URLs.",
  },
  {
    question: "What is your pricing and engagement model for Shopify brands?",
    answer:
      "We operate on customized monthly growth retainers tailored to your catalog size, market competition, and aggressive revenue targets. Every engagement is tied to concrete revenue KPIs and transparent attribution.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ShopifySeoAgencyPage() {
  return (
    <BofuLandingPage
      badge="Shopify SEO Agency"
      headlinePart1="Turn Shopify Search Into Your"
      headlineHighlight="Most Profitable"
      headlinePart2="Acquisition Channel"
      subheadline="We partner with ambitious US, UK & European Shopify and D2C brands to capture high-intent commercial buyers through advanced technical SEO, collection architecture, and AI-era search optimization."
      targetMarket="USA · UK · Europe (DACH)"
      keyStats={[
        { value: "37+", label: "Qualified Leads", sub: "Vini Grow Holidays Case" },
        { value: "$0.08", label: "Cost Per Lead", sub: "Record-low CAC" },
        { value: "Page 1", label: "Google Rankings", sub: "High-intent queries" },
        { value: "100%", label: "Shopify Aligned", sub: "Plus, Liquid & Headless" },
      ]}
      pillarsTitle="Engineered for Scalable E-Commerce Growth"
      pillarsSubtitle="We discard low-intent informational filler. Every technical sprint is built around transaction-ready buyer intent."
      pillars={[
        {
          tag: "Architecture",
          title: "Collection & Tag Hierarchy",
          description:
            "Restructure faceted navigation and canonical paths to eliminate index bloat while ranking category hubs for high-volume searches.",
        },
        {
          tag: "AI Search",
          title: "Generative Engine Optimization (GEO)",
          description:
            "Format your product catalog and authority citations with llms.txt and rich schema to become the cited choice in ChatGPT and AI Overviews.",
        },
        {
          tag: "Performance",
          title: "Core Web Vitals & Liquid Speed",
          description:
            "Strip unneeded third-party scripts, optimize asset delivery, and achieve green Core Web Vitals to boost conversion rates and mobile rankings.",
        },
        {
          tag: "Revenue",
          title: "Commercial Bottom-of-Funnel Keywords",
          description:
            "Target high-intent transactional search queries that attract immediate buyers ready to purchase, not passive window shoppers.",
        },
        {
          tag: "Authority",
          title: "Digital PR & E-Commerce Link Building",
          description:
            "Secure natural, high-authority editorial links from tier-1 industry publications that compound your domain rating and organic trust.",
        },
        {
          tag: "CRO Synergy",
          title: "Organic Traffic Conversion Optimization",
          description:
            "Align landing page UX, social proof, and mobile checkout triggers to convert search visitors into paying customers on the first session.",
        },
      ]}
      faqs={faqs}
      faqSchemaJsonLd={faqJsonLd}
    />
  );
}

