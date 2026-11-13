"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export interface BofuFaq {
  question: string;
  answer: string;
}

export interface BofuPillar {
  title: string;
  description: string;
  tag?: string;
}

export interface BofuLandingPageProps {
  badge: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2?: string;
  subheadline: string;
  targetMarket?: string;
  keyStats: { value: string; label: string; sub?: string }[];
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: BofuPillar[];
  caseStudyTitle?: string;
  caseStudyDescription?: string;
  faqs: BofuFaq[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
  lang?: string;
  faqSchemaJsonLd: any;
}

export function BofuLandingPage({
  badge,
  headlinePart1,
  headlineHighlight,
  headlinePart2 = "",
  subheadline,
  targetMarket = "USA · UK · Europe (DACH)",
  keyStats,
  pillarsTitle,
  pillarsSubtitle,
  pillars,
  caseStudyTitle = "Real Verified Results",
  caseStudyDescription = "We do not deal in vanity traffic. We partner with leadership teams that demand measurable profit, lower customer acquisition costs, and compounding market authority.",
  faqs,
  primaryCtaText = "Book a 30-Min Discovery Session",
  secondaryCtaText = "Get Free Growth & SEO Audit",
  lang = "en",
  faqSchemaJsonLd,
}: BofuLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#001026] text-white selection:bg-[#3366FF]/30 selection:text-white">
      {/* Schema injection */}
      {faqSchemaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 lg:px-20 border-b border-white/10">
        {/* Glow ambient backgrounds */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#3366FF]/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-[#1524ca]/20 blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Target market badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-8 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>{badge}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">{targetMarket}</span>
          </motion.div>

          {/* Main H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white mb-8"
          >
            {headlinePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3366FF] via-[#60a5fa] to-[#93c5fd]">
              {headlineHighlight}
            </span>{" "}
            {headlinePart2}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 font-normal max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {subheadline}
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#3366FF] px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:scale-105 active:scale-95"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/founder-brand-audit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>{secondaryCtaText}</span>
            </Link>
          </motion.div>

          {/* Real verified stats banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 mt-1">
                  {stat.label}
                </span>
                {stat.sub && (
                  <span className="text-[11px] text-white/50 mt-0.5">{stat.sub}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Proof: Vini Grow Holidays & Tattoos Delhi */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 block mb-3">
            Proof Over Promises
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {caseStudyTitle}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {caseStudyDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Vini Grow Holidays */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                SEO &amp; Funnel Overhaul
              </span>
              <a
                href="https://vinigrowholidays.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                vinigrowholidays.com <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Vini Grow Holidays
            </h3>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Full redesign, technical SEO indexing, AI search (llms.txt) integration, and automated qualification funnels delivering record efficiency.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">37+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Qualified Leads</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-emerald-400">$0.08</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Cost Per Lead (CPL)</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">155</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Funnel Convos</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-blue-400">Page 1</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Google Rankings</p>
              </div>
            </div>
            <Link
              href="/case-studies/vini-grow-holidays"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read full breakdown →
            </Link>
          </div>

          {/* Card 2: Tattoos Delhi */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Brand &amp; High-Contrast Storefront
              </span>
              <a
                href="https://www.tattoosdelhi.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                tattoosdelhi.com <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Tattoos Delhi
            </h3>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              High-contrast visual design engineered for direct client acquisition, premium studio positioning, and frictionless mobile booking flows.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Custom UI/UX</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-emerald-400">0%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Generic Templates</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">&lt;1.2s</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Page Load Time</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-2xl font-black text-blue-400">Direct</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Lead Funnel</p>
              </div>
            </div>
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Explore our portfolio showcase →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Pillars / Why D2CORA */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 block mb-3">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            {pillarsTitle}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
            >
              <div>
                {pillar.tag && (
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md mb-4 inline-block">
                    {pillar.tag}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-white/80">
                <CheckCircle2 className="h-4 w-4 text-[#3366FF]" />
                <span>Revenue-aligned delivery</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 block mb-3">
            Clarifications
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-base">
            Everything you need to know about partnering with D2CORA.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-white/70 text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#002244] to-[#001026] border border-blue-500/30 p-10 md:p-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 block mb-3">
            Scale Smarter
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to drive predictable revenue?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Book a complimentary 30-minute discovery session with our senior growth architects. We will audit your current funnel and present a clear roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#3366FF] px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:scale-105"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/90 hover:bg-white/5 transition-colors"
            >
              <span>Explore All Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

