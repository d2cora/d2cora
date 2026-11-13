import React from "react";
import type { Metadata } from "next";
import { BofuLandingPage } from "@/components/landing/BofuLandingPage";

export const metadata: Metadata = {
  title: "D2C Marketing Agency for Scaling Brands | Paid Social, SEO & CRO | D2CORA",
  description:
    "We partner with ambitious direct-to-consumer (D2C) brands across the US, UK, and Europe to engineer profitable acquisition through Meta ads, Google PPC, technical SEO, and conversion rate optimization.",
  alternates: {
    canonical: "https://www.d2cora.com/services/d2c-marketing-agency",
  },
  openGraph: {
    title: "D2C Marketing Agency for Scaling Brands | D2CORA",
    description:
      "Scale your D2C brand profitably with full-funnel paid acquisition, organic SEO dominance, and high-converting storefront architecture.",
    url: "https://www.d2cora.com/services/d2c-marketing-agency",
    type: "website",
  },
};

const faqs = [
  {
    question: "What makes D2CORA different from other direct-to-consumer (D2C) agencies?",
    answer:
      "Most agencies run ads in isolation without touching the website or organic search. D2CORA acts as an integrated growth partner: we align high-ROAS paid media (Meta & Google Ads) with technical SEO and storefront CRO, ensuring that every paid and organic dollar works together to lower your blended Customer Acquisition Cost (CAC).",
  },
  {
    question: "What monthly revenue range of D2C brands do you typically partner with?",
    answer:
      "We primarily work with brands generating between $20,000/month to $500,000+/month in revenue that are ready to transition from fragmented spending to a scalable, predictable growth engine.",
  },
  {
    question: "How do you handle iOS attribution and post-cookie tracking?",
    answer:
      "We implement server-side tracking (Conversions API / CAPI), first-party data capture systems, and blended ROAS/MER (Marketing Efficiency Ratio) dashboards so executive teams make decisions on net profit, not platform-reported vanity metrics.",
  },
  {
    question: "Do you provide creative strategy and ad production?",
    answer:
      "Yes. Our creative team develops performance-tested static angles, high-hook UGC concepts, and iterative video creative based on deep competitor intelligence and consumer psychology.",
  },
  {
    question: "How do we get started?",
    answer:
      "We start with a thorough 30-minute growth diagnostic session where we audit your ad accounts, funnel drop-off points, and organic search opportunities to outline a clear 90-day scaling roadmap.",
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

export default function D2cMarketingAgencyPage() {
  return (
    <BofuLandingPage
      badge="D2C Marketing Agency"
      headlinePart1="Full-Stack Growth Systems for"
      headlineHighlight="High-Growth D2C"
      headlinePart2="Brands"
      subheadline="Stop burning ad budget on low-ROAS campaigns. We combine data-driven paid acquisition, technical SEO, and conversion engineering to build scalable e-commerce flywheels for US, UK & European brands."
      targetMarket="USA · UK · Europe"
      keyStats={[
        { value: "$0.08", label: "Cost Per Lead", sub: "Ultra-low CAC benchmarks" },
        { value: "155", label: "Automated Funnels", sub: "24/7 conversion cycles" },
        { value: "37+", label: "Verified Leads", sub: "Vini Grow Holidays case" },
        { value: "Page 1", label: "SEO Dominance", sub: "Compounding organic traffic" },
      ]}
      pillarsTitle="The D2CORA Growth Ecosystem"
      pillarsSubtitle="Sustainable scale requires synchronized execution across acquisition, conversion, and organic authority."
      pillars={[
        {
          tag: "Paid Media",
          title: "Meta & Google Ads Engine",
          description:
            "Profitable paid search and social campaigns engineered with aggressive creative testing and automated bid management for maximum ROAS.",
        },
        {
          tag: "Organic Search",
          title: "Technical D2C SEO & GEO",
          description:
            "Rank transactional category and product pages on Google and AI search platforms like ChatGPT to build a compounding moat of free organic traffic.",
        },
        {
          tag: "CRO",
          title: "High-Converting Storefront UX",
          description:
            "Landing page optimization, friction-free mobile checkout flows, and psychological trust architecture that increase Average Order Value (AOV).",
        },
        {
          tag: "Attribution",
          title: "Server-Side CAPI & MER Analytics",
          description:
            "Accurate first-party attribution tracking that cuts through post-iOS signal loss and proves exactly which channels drive bottom-line margin.",
        },
        {
          tag: "Creative",
          title: "Direct-Response Creative Strategy",
          description:
            "High-converting visual angles, hook testing, and static/video asset production that continually refresh fatigue and lower ad fatigue.",
        },
        {
          tag: "Automation",
          title: "Automated Retention & Qualification",
          description:
            "Klaviyo email flows and conversational AI bots that nurture prospects, recover abandoned carts, and maximize customer Lifetime Value (LTV).",
        },
      ]}
      faqs={faqs}
      faqSchemaJsonLd={faqJsonLd}
    />
  );
}

