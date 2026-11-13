import React from "react";
import type { Metadata } from "next";
import { BofuLandingPage } from "@/components/landing/BofuLandingPage";

export const metadata: Metadata = {
  title:
    "Generative Engine Optimization (GEO) & AI Search Agency | Rank in ChatGPT & AI Overviews | D2CORA",
  description:
    "Position your brand as the cited, recommended source in ChatGPT, Perplexity, Claude, and Google AI Overviews. D2CORA engineers Generative Engine Optimization (GEO), llms.txt, and semantic schema architectures.",
  alternates: {
    canonical: "https://www.d2cora.com/services/ai-search-geo-agency",
  },
  openGraph: {
    title: "Generative Engine Optimization (GEO) & AI Search Agency | D2CORA",
    description:
      "Dominate the post-search world. Get cited and recommended inside ChatGPT, Perplexity, and Google AI Overviews with our proven GEO framework.",
    url: "https://www.d2cora.com/services/ai-search-geo-agency",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO) and why is traditional SEO not enough?",
    answer:
      "Traditional SEO optimizes for blue links on a Google results page. Generative Engine Optimization (GEO) ensures your brand, products, and verified claims are ingested, trusted, and cited as answers inside conversational LLMs like ChatGPT, Perplexity, Claude, and Google AI Overviews. In 2026 and beyond, winning generative citations is critical as zero-click AI answers expand.",
  },
  {
    question: "What is llms.txt and how does D2CORA implement it?",
    answer:
      "llms.txt is the emerging open web standard that structures website knowledge, product specifications, and brand credentials specifically for AI scrapers and agentic search engines. We engineer customized llms.txt and llms-full.txt files (as demonstrated in our Vini Grow Holidays case study) to guide AI models accurately.",
  },
  {
    question: "How do you get our brand recommended inside ChatGPT and Perplexity?",
    answer:
      "We reverse-engineer the citation corpora used by major LLMs: authoritative industry roundups, verified third-party reviews, Reddit and community discussions, structured JSON-LD knowledge graphs, and clear semantic brand entities that AI models prioritize when generating recommendations.",
  },
  {
    question: "How do you measure ROI from AI Search & GEO?",
    answer:
      "We track direct referral traffic from AI platforms (chatgpt.com, perplexity.ai, claude.ai), monitor prompt citation frequency across targeted commercial intent prompts, and measure branded search lift resulting from AI recommendations.",
  },
  {
    question: "Does GEO replace or complement our existing Google SEO?",
    answer:
      "GEO heavily compounds traditional SEO. Modern Google search algorithms and LLM crawlers share foundational trust signals: authoritative external citations, clean schema, and direct answer authority. Our framework optimizes for both simultaneously.",
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

export default function AiSearchGeoAgencyPage() {
  return (
    <BofuLandingPage
      badge="AI Search &amp; GEO Agency"
      headlinePart1="Be the First Brand Recommended by"
      headlineHighlight="ChatGPT &amp; AI"
      headlinePart2="Overviews"
      subheadline="Consumers and B2B buyers no longer scroll through ten blue links. They ask conversational AI. We engineer your digital entity so language models cite, recommend, and trust your brand first."
      targetMarket="USA · UK · Europe"
      keyStats={[
        { value: "100%", label: "LLM Discovered", sub: "llms.txt & schema integration" },
        { value: "Page 1", label: "AI Overviews", sub: "Google & Perplexity citations" },
        { value: "$0.08", label: "CPL Proof", sub: "Vini Grow Holidays case" },
        { value: "24/7", label: "Agentic Ingestion", sub: "Structured machine-readable data" },
      ]}
      pillarsTitle="The Generative Engine Optimization Framework"
      pillarsSubtitle="We turn your brand from an invisible website into an authoritative knowledge entity that AI models rely upon."
      pillars={[
        {
          tag: "Protocol",
          title: "llms.txt Machine-Readable Files",
          description:
            "Author and host comprehensive llms.txt and llms-full.txt protocols that feed clean, structured product knowledge directly into AI crawler pipelines.",
        },
        {
          tag: "Semantic Data",
          title: "Advanced JSON-LD Knowledge Graphs",
          description:
            "Implement multi-layer schema for Organization, Product, Author, and FAQPage that connects your brand entity to the global linked data web.",
        },
        {
          tag: "Citations",
          title: "Digital PR & Citation Authority",
          description:
            "Secure mentions in the authoritative publication sources and review databases that major foundation models crawl for factual grounding.",
        },
        {
          tag: "Prompt Engineering",
          title: "Buyer Prompt Reverse-Engineering",
          description:
            "Analyze and target the exact conversational prompts your ideal customers type into ChatGPT and Claude when searching for your category solutions.",
        },
        {
          tag: "Brand Entity",
          title: "Entity Authority & Sentiment Optimization",
          description:
            "Audit and align cross-web sentiment across Reddit, Twitter/X, and review sites to ensure LLMs associate your brand with high trust and quality.",
        },
        {
          tag: "Measurement",
          title: "AI Referral Attribution & Tracking",
          description:
            "Set up custom GA4 tracking to isolate traffic and revenue driven from OpenAI, Perplexity, Anthropic, and Google AI Overview referral nodes.",
        },
      ]}
      faqs={faqs}
      faqSchemaJsonLd={faqJsonLd}
    />
  );
}

