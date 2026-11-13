import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  TrendingUp,
  Search,
  Layers,
  Cpu,
  Globe,
  Activity,
  Award,
} from "lucide-react";
import { SeoRoiCalculator } from "@/components/calculators/SeoRoiCalculator";

export const metadata: Metadata = {
  title: "SEO Agentur für B2B, D2C & E-Commerce | Planbarer ROI | D2CORA",
  description:
    "Seriöse SEO Agentur beauftragen: Technische Suchmaschinenoptimierung, KI-Suche (GEO) & Content-Architektur für Mittelstand (KMU), B2B & Shopify. Jetzt Potenzialanalyse anfordern.",
  keywords: [
    "seo agentur beauftragen",
    "b2b seo agentur",
    "e-commerce seo agentur",
    "seo agentur kosten",
    "technical seo audit agentur",
  ],
  alternates: {
    canonical: "https://d2cora.com/de/seo-agentur",
  },
  openGraph: {
    title: "SEO Agentur für B2B, D2C & E-Commerce | Planbarer ROI | D2CORA",
    description:
      "Umsatzorientierte Suchmaschinenoptimierung für ambitionierte Marken in Deutschland, Österreich und der Schweiz. Keine leeren Rankings – messbare Leads und Verkäufe.",
    url: "https://d2cora.com/de/seo-agentur",
    type: "website",
    locale: "de_DE",
  },
};

const faqs = [
  {
    question: "Was unterscheidet D2CORA von klassischen deutschen SEO-Agenturen?",
    answer:
      "Klassische Agenturen optimieren auf Keyword-Rankings und Blog-Klicks, die selten messbaren Umsatz bringen. D2CORA fokussiert sich auf transaktionale Kaufabsichten (Bottom-of-Funnel), Kategorieseiten-Architektur und Generative Engine Optimization (GEO), damit Ihre Marke nicht nur bei Google, sondern auch in KI-Systemen wie ChatGPT, Perplexity und Google AI Overviews als Marktführer empfohlen wird.",
  },
  {
    question: "Was kostet eine professionelle SEO Agentur in Deutschland, Österreich & der Schweiz?",
    answer:
      "Seriöse monatliche SEO-Retainer für mittelständische B2B- und E-Commerce-Unternehmen bewegen sich in der DACH-Region typischerweise zwischen 1.500 € und 5.500 € pro Monat, abhängig von Wettbewerbsintensität und Zielen. Detaillierte Marktvergleiche und Kostenfaktoren finden Sie in unserem umfassenden Branchenleitfaden zu SEO-Agentur-Kosten (/blog/seo-agentur-kosten).",
  },
  {
    question: "Wie lange dauert es, bis erste messbare SEO-Ergebnisse im DACH-Markt eintreten?",
    answer:
      "Erste technische Verbesserungen, Indexierungsbereinigungen und Core Web Vitals Optimierungen greifen meist innerhalb von 30 bis 60 Tagen. Nachhaltige Seite-1-Platzierungen für hart umkämpfte kommerzielle Transaktionsbegriffe etablieren sich nach 3 bis 6 Monaten und erzeugen danach einen kontinuierlich compounding ROI ohne laufende Klickkosten.",
  },
  {
    question: "Optimieren Sie auch für ChatGPT, Perplexity und Google AI Overviews (GEO)?",
    answer:
      "Ja, absolut. Wir integrieren Generative Engine Optimization (GEO) in jede SEO-Strategie. Das umfasst maschinenlesbare llms.txt-Spezifikationen, Entity-Optimierung im Knowledge Graph, E-E-A-T-Zitierungsarchitektur und strukturierte Schema-Markup-Graphen, sodass KI-Antwortmaschinen Ihre Marke als primäre Quelle referenzieren.",
  },
  {
    question: "Bieten Sie Garantien für Platz 1 bei Google?",
    answer:
      "Nein – und jede Agentur, die dies tut, verstößt gegen die Google Webmaster Richtlinien. Google passt seine Algorithmen hunderte Male pro Jahr an. Was D2CORA garantiert, ist eine transparente, datengetriebene Methodik: 100% White-Hat-Strategien, modernste Next.js-/Shopify-Architektur und nachweisbare Steigerungen Ihres qualifizierten organischen Umsatzes.",
  },
  {
    question: "Wie läuft die Zusammenarbeit mit D2CORA ab?",
    answer:
      "Wir starten mit einer 30-minütigen, unverbindlichen Potenzialanalyse. Darin analysieren wir Ihre aktuellen Crawling- und Indexierungsblocker, vergleichen Sie mit den Top-3-Wettbewerbern und präsentieren Ihnen einen klaren 90-Tage-Fahrplan zur Skalierung Ihrer organischen Neukundengewinnung.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://d2cora.com/de/seo-agentur#service",
      name: "SEO Agentur DACH & International",
      provider: {
        "@type": "Organization",
        name: "D2CORA",
        url: "https://d2cora.com",
      },
      serviceType: "Search Engine Optimization, Technical SEO & Generative Engine Optimization (GEO)",
      areaServed: [
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Austria" },
        { "@type": "Country", name: "Switzerland" },
      ],
      description:
        "Datengetriebene SEO Agentur für B2B, D2C und E-Commerce im deutschsprachigen Raum. Technisches SEO, Core Web Vitals, semantische Content-Architektur und KI-Suchmaschinenoptimierung.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://d2cora.com/de/seo-agentur#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://d2cora.com/de/seo-agentur#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://d2cora.com/de",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Agentur DACH",
          item: "https://d2cora.com/de/seo-agentur",
        },
      ],
    },
  ],
};

export default function GermanSeoAgencyPage() {
  return (
    <div className="relative min-h-screen bg-[#000814] text-neutral-100 selection:bg-blue-500/30">
      {/* Schema.org Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent blur-[130px]" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <Globe className="h-3.5 w-3.5" />
              DATENGETRIEBENE SEO &amp; KI-SUCHE (GEO) FÜR DEN DACH-RAUM
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
              Die SEO Agentur für <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">messbaren Umsatz</span> statt leerer Ranking-Versprechen.
            </h1>

            <p className="mt-6 text-base text-neutral-300 sm:text-lg sm:leading-relaxed">
              Wir verbinden moderne Next.js- &amp; Shopify-Architektur, conversion-starke Content Hubs und Generative Engine Optimization (GEO), um planbare B2B-Anfragen und D2C-Verkäufe im DACH-Raum zu generieren.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?source=de-seo-agentur"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40 sm:w-auto"
              >
                <span>Kostenlose Potenzialanalyse anfordern</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#roi-rechner"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-neutral-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                <span>ROI-Rechner öffnen</span>
                <TrendingUp className="h-4 w-4 text-blue-400" />
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% DSGVO &amp; GDPR konform
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Core Web Vitals &lt; 1,2s
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> KI-Suche fähig (llms.txt)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="relative border-t border-white/5 bg-[#000d1a]/60 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              ARCHITEKTUR &amp; METHODIK
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Das D2CORA Performance-SEO-System
            </h2>
            <p className="mt-3 text-sm text-neutral-400 sm:text-base">
              Wir optimieren nicht für Zufallsklicks, sondern für kaufbereite Entscheider und maximale Deckungsbeiträge.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-blue-500/40 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Technisches SEO &amp; Headless Performance</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Beseitigung von Crawling-Blockern, Behebung kanonischer Duplikate, Ladezeiten unter 1,2 Sekunden und semantische JSON-LD-Strukturen für Next.js und Shopify.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-blue-500/40 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Kommerzielle Intent-Architektur (BOFU)</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Gezielte Eroberung hochtransaktionaler Bottom-of-Funnel-Suchbegriffe mit dedizierten Leistungs- und Kategorieseiten statt wertlosem Info-Traffic.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-blue-500/40 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Generative Engine Optimization (GEO)</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Vorbereitung Ihrer Markenarchitektur für ChatGPT, Perplexity und Google AI Overviews mit standardisierten llms.txt-Dateien und Knowledge-Graph-Signalen.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-blue-500/40 hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">E-E-A-T &amp; Digital PR Autoritätsaufbau</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Nachweisbare Fachkompetenz und renommierte Branchenverlinkungen ohne manipulative PBNs oder Spam-Netzwerke – für maximale algorithmische Sicherheit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Proof Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              NACHWEISBARE ERGEBNISSE
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Echte Kennzahlen. Verifizierte Kundenerfolge.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 sm:text-base">
              Wie wir Marken mit strategischer Search Architecture zu profitablen Lead- und Umsatzkanälen entwickeln.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Vini Grow Holidays Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#001428] to-[#000a16] p-8 transition-all hover:border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Featured Case Study
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white">Vini Grow Holidays</h3>
                </div>
                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  Global Travel Platform
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
                Skalierung einer modernen Buchungs- und Anfrage-Plattform über automatisierte Funnels, Core Web Vitals Optimierung und transaktionale Suchmaschinenrankings.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-white">37+ Leads</div>
                  <div className="text-xs text-neutral-400">Qualifizierte Buchungsanfragen</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-emerald-400">0,08 $ CPL</div>
                  <div className="text-xs text-neutral-400">Kosten pro qualifiziertem Lead</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-blue-400">155 Funnels</div>
                  <div className="text-xs text-neutral-400">Automatisierte Konversationen</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-sky-400">Seite 1</div>
                  <div className="text-xs text-neutral-400">Google Top-Rankings in Rekordzeit</div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <Link
                  href="/case-studies/vini-grow-holidays"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Fallstudie im Detail ansehen</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Tattoos Delhi Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#001428] to-[#000a16] p-8 transition-all hover:border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Live Client Showcase
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white">Tattoos Delhi</h3>
                </div>
                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  Luxury Brand Storefront
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
                High-Contrast Web-Experience mit maximaler mobiler Geschwindigkeit, lokaler Autorität und optimierter Lead-Erfassung für Premium-Kundschaft.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-white">1.000+</div>
                  <div className="text-xs text-neutral-400">Monatliche organische Besuche</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-emerald-400">&lt; 1.0s</div>
                  <div className="text-xs text-neutral-400">Core Web Vitals Ladezeit</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-blue-400">Top 3</div>
                  <div className="text-xs text-neutral-400">Platzierung in Google Maps &amp; Search</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-sky-400">100%</div>
                  <div className="text-xs text-neutral-400">DSGVO &amp; Mobile Responsive</div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Showcase &amp; Portfolio ansehen</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section className="relative py-24 bg-[#000d1a]/80 border-y border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SeoRoiCalculator locale="de" />
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              TRANSPARENTE INVESTITIONEN
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Klare SEO-Pakete für planbares Wachstum
            </h2>
            <p className="mt-3 text-sm text-neutral-400 sm:text-base">
              Keine versteckten Gebühren. Keine Knebelverträge. Transparente monatliche Retainer mit monatlicher Kündbarkeit.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Tier 1 */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#001026] p-8 transition-all hover:border-white/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Wachstum (KMU / B2B)
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-extrabold text-white">1.500 €</span>
                  <span className="text-xs text-neutral-400">/ Monat</span>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  Ideal für mittelständische Unternehmen, die Google als planbare B2B-Anfragequelle etablieren wollen.
                </p>
                <ul className="mt-6 space-y-3 text-xs text-neutral-300 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Technisches SEO &amp; Indexierungs-Audit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> 2 transaktionale BOFU Content Hubs / Mo.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Schema.org JSON-LD Implementierung
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Monatliches Performance- &amp; ROI-Reporting
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact?source=tier-growth"
                  className="block w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 text-center text-xs font-semibold text-white transition-all hover:bg-white/[0.1]"
                >
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-blue-500 bg-gradient-to-b from-[#001836] to-[#000f24] p-8 shadow-2xl shadow-blue-500/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Empfohlene Wahl
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Skalierung (Shopify / E-Commerce)
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-extrabold text-white">2.900 €</span>
                  <span className="text-xs text-neutral-400">/ Monat</span>
                </div>
                <p className="mt-3 text-xs text-neutral-300">
                  Für ambitionierte E-Commerce-Marken und B2B-Unternehmen im wettbewerbsintensiven DACH-Umfeld.
                </p>
                <ul className="mt-6 space-y-3 text-xs text-neutral-200 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Alles aus &quot;Wachstum&quot; inklusive
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Kategorieseiten- &amp; Filter-SEO-Architektur
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Generative Engine Optimization (GEO &amp; llms.txt)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> 4 strategische BOFU Artikel pro Monat
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> 14-tägige Strategie-Sprints &amp; Slack-Kanal
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact?source=tier-scale"
                  className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                >
                  Jetzt Skalierung starten
                </Link>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#001026] p-8 transition-all hover:border-white/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Enterprise &amp; Marktführer
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-extrabold text-white">ab 5.500 €</span>
                  <span className="text-xs text-neutral-400">/ Monat</span>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  Maßgeschneiderte internationale SEO-Architektur für Großunternehmen und Marktführer im DACH- und US-Raum.
                </p>
                <ul className="mt-6 space-y-3 text-xs text-neutral-300 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Vollständige mehrsprachige Hreflang-Architektur
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Dedizierter Senior SEO Engineer &amp; Tech Lead
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Kontinuierliche Digital PR &amp; Autoritätsaufbau
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" /> Wöchentliche KPI-Reviews &amp; Conversion CRO
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact?source=tier-enterprise"
                  className="block w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 text-center text-xs font-semibold text-white transition-all hover:bg-white/[0.1]"
                >
                  Enterprise-Anfrage stellen
                </Link>
              </div>
            </div>
          </div>

          {/* Contextual Link to Cost Guide */}
          <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <h4 className="text-sm font-semibold text-white">
                Sie möchten verstehen, wie sich SEO-Preise im Markt zusammensetzen?
              </h4>
              <p className="mt-1 text-xs text-neutral-400">
                Lesen Sie unseren unabhängigen Leitfaden mit Stundensätzen, Fixpreis-Modellen und ROI-Vergleichen.
              </p>
            </div>
            <Link
              href="/blog/seo-agentur-kosten"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 sm:mt-0"
            >
              <span>Leitfaden: SEO Agentur Kosten 2026</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* German SEO FAQs */}
      <section className="relative py-24 border-t border-white/5 bg-[#000a16]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              HÄUFIG GESTELLTE FRAGEN
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Fragen &amp; Antworten zur Beauftragung einer SEO Agentur
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20"
              >
                <h3 className="text-base font-bold text-white sm:text-lg">{faq.question}</h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-[#001428] to-cyan-950/40 p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Bereit für planbare Neukunden aus Google &amp; KI-Suche?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-300">
              Sichern Sie sich jetzt Ihre kostenlose 30-minütige Potenzialanalyse mit unserem leitenden SEO-Architekten.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact?source=seo-agentur-bottom"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>Jetzt Potenzialanalyse anfordern</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
