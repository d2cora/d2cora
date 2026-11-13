import React from "react";
import type { Metadata } from "next";
import { BofuLandingPage } from "@/components/landing/BofuLandingPage";

export const metadata: Metadata = {
  title: "E-Commerce & Shopify CRO Agency | Turn Traffic Into Profit | D2CORA",
  description:
    "Maximize your e-commerce conversion rates, AOV, and customer lifetime value with D2CORA. We run data-driven CRO audits, iterative A/B testing, and friction-free checkout engineering for US & European brands.",
  alternates: {
    canonical: "https://www.d2cora.com/services/ecommerce-cro-agency",
  },
  openGraph: {
    title: "E-Commerce & Shopify CRO Agency | D2CORA",
    description:
      "Transform high ad traffic into profitable buyers. Strategic CRO, user research, and checkout optimization for scaling e-commerce brands.",
    url: "https://www.d2cora.com/services/ecommerce-cro-agency",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the expected lift from a dedicated CRO engagement?",
    answer:
      "Depending on baseline traffic and current friction points, clients typically see an immediate 15% to 35% lift in conversion rates within 60 to 90 days, accompanied by measurable increases in Average Order Value (AOV) and revenue per user.",
  },
  {
    question: "Do you rely on guesswork or empirical behavioral data?",
    answer:
      "Zero guesswork. Every experiment is backed by quantitative data (Google Analytics 4, heatmaps, session recordings) and qualitative feedback (user surveys, exit-intent analysis, checkout drop-off audits).",
  },
  {
    question: "How does CRO improve paid advertising performance?",
    answer:
      "When your storefront converts at 3.5% instead of 2.0%, your customer acquisition cost (CAC) drops by over 40% without spending an extra dollar on Meta or Google Ads. CRO creates the margin headroom needed to scale ad spend aggressively.",
  },
  {
    question: "Do you design and code the tests, or just provide recommendations?",
    answer:
      "D2CORA is an end-to-end technical engineering partner. We conceptualize, design, and code all A/B test variants directly in Liquid or React, ensuring lightning-fast load times and zero layout shifts.",
  },
  {
    question: "What platforms do you specialize in for conversion optimization?",
    answer:
      "We specialize primarily in Shopify, Shopify Plus, headless Next.js e-commerce storefronts, and custom transactional web apps.",
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

export default function EcommerceCroAgencyPage() {
  return (
    <BofuLandingPage
      badge="E-Commerce CRO Agency"
      headlinePart1="Stop Leaking Revenue."
      headlineHighlight="Turn Cold Traffic"
      headlinePart2="Into Loyal Buyers"
      subheadline="Every click you pay for should convert. We engineer high-converting storefront layouts, frictionless checkout funnels, and data-backed A/B testing programs that multiply your bottom-line margin."
      targetMarket="USA · UK · Europe"
      keyStats={[
        { value: "35%+", label: "Avg. Conversion Lift", sub: "Documented client gains" },
        { value: "$0.08", label: "CPL Benchmark", sub: "Vini Grow Holidays case" },
        { value: "100%", label: "Hypothesis-Driven", sub: "Data & session analytics" },
        { value: "&lt;1.2s", label: "Page Load Benchmark", sub: "Zero layout shift code" },
      ]}
      pillarsTitle="Scientific Conversion Rate Engineering"
      pillarsSubtitle="We systematically diagnose where visitors drop off and re-engineer the user journey for maximum checkout velocity."
      pillars={[
        {
          tag: "Analytics",
          title: "Full-Funnel Drop-Off Audit",
          description:
            "Deep-dive quantitative tracking of product pages, cart drawers, and checkout steps to isolate exact revenue leak points.",
        },
        {
          tag: "UX Design",
          title: "Mobile-First UX Re-Engineering",
          description:
            "Remove visual clutter, streamline sticky add-to-cart interactions, and optimize thumb-zone usability where 80%+ of transactions occur.",
        },
        {
          tag: "Testing",
          title: "Rigorous A/B Testing Programs",
          description:
            "Deploy statistically significant split tests on offer positioning, pricing display, urgency drivers, and checkout incentives.",
        },
        {
          tag: "Psychology",
          title: "Trust & Risk Reversal Triggers",
          description:
            "Integrate third-party reviews, transparent shipping clarity, guarantee badges, and social proof that eliminate buyer hesitation.",
        },
        {
          tag: "AOV Expansion",
          title: "In-Cart Upsells & Bundle Strategy",
          description:
            "Engineered cross-sell modules and tiered shipping thresholds that lift Average Order Value without adding friction.",
        },
        {
          tag: "Speed",
          title: "Zero-Lag Technical Implementation",
          description:
            "Clean, native code execution that passes Google Core Web Vitals and ensures split-second page transitions across mobile devices.",
        },
      ]}
      faqs={faqs}
      faqSchemaJsonLd={faqJsonLd}
    />
  );
}

