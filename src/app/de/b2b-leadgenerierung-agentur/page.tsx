import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Layers,
  Cpu,
  Shield,
  PhoneCall,
  BarChart2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Leadgenerierung Agentur | Planbare B2B Neukunden | D2CORA",
  description:
    "B2B Leadgenerierung Agentur für den DACH-Raum: Performance Marketing (Google & LinkedIn Ads), transaktionale SEO & KI-Funnels für messbare B2B-Abschlüsse. Erstgespräch vereinbaren.",
  keywords: [
    "b2b leadgenerierung agentur",
    "b2b neukundengewinnung agentur",
    "lead generierung b2b kosten",
    "b2b performance marketing agentur",
    "account based marketing agentur",
  ],
  alternates: {
    canonical: "https://d2cora.com/de/b2b-leadgenerierung-agentur",
  },
  openGraph: {
    title: "B2B Leadgenerierung Agentur | Planbare B2B Neukunden | D2CORA",
    description:
      "Automatisieren und skalieren Sie Ihre B2B-Kundengewinnung in Deutschland, Österreich und der Schweiz mit D2CORA. Keine Kaltakquise – kaufbereite Entscheider-Anfragen.",
    url: "https://d2cora.com/de/b2b-leadgenerierung-agentur",
    type: "website",
    locale: "de_DE",
  },
};

const faqs = [
  {
    question: "Was unterscheidet D2CORA von klassischen B2B-Kaltakquise- oder Call-Center-Agenturen?",
    answer:
      "Wir setzen nicht auf lästige Kaltanrufe oder generische LinkedIn-Spam-Nachrichten. D2CORA baut ein automatisiertes Inbound- und Performance-System auf: Über hochspezifische Google Search Ads, LinkedIn-Account-Targeting und SEO erreichen wir C-Level-Entscheider genau im Moment ihres akuten Bedarfs.",
  },
  {
    question: "Wie qualifizieren Sie Leads, damit unser Vertrieb nur mit echten Entscheidern spricht?",
    answer:
      "Durch mehrstufige Vorqualifizierungs-Funnels mit Budget- und Unternehmensgrößen-Filtern sortieren wir irrelevante Bewerber oder Kleinanfragen automatisch aus. Nur validierte Entscheidungsträger (Geschäftsführer, Head of IT, CMO) landen direkt im Kalender Ihres Vertriebsteams.",
  },
  {
    question: "Welche Kanäle nutzen Sie für die B2B Neukundengewinnung?",
    answer:
      "Die wirksamste Kombination für den B2B-Mittelstand im DACH-Raum ist: Google Search Ads (hohe Kaufabsicht), transaktionales SEO (nachhaltig planbarer Traffic), LinkedIn Sponsored Content (gezieltes Account-Based Marketing) und automatisierte E-Mail- / CRM-Nurturing-Sequenzen.",
  },
  {
    question: "Wie hoch sind die Kosten für eine professionelle B2B Leadgenerierung Agentur?",
    answer:
      "Unsere Partnerschaften beginnen typischerweise ab 2.000 € monatlichem Betreuungsretainer zzgl. Ihres individuellen Werbebudgets. Unser Ziel ist ein Cost-per-Acquisition (CPA), der sich bereits ab dem ersten gewonnenen B2B-Kunden mehrfach amortisiert.",
  },
  {
    question: "Wie schnell können wir mit den ersten qualifizierten Terminen rechnen?",
    answer:
      "Nach dem initialen Setup von Landingpages, Tracking und Kampagnen (ca. 10 bis 14 Tage) generieren unsere Performance-Funnel in der Regel innerhalb der ersten 2 bis 3 Wochen die ersten vorqualifizierten Entscheider-Termine.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://d2cora.com/de/b2b-leadgenerierung-agentur#service",
      name: "B2B Leadgenerierung Agentur DACH",
      provider: {
        "@type": "Organization",
        name: "D2CORA",
        url: "https://d2cora.com",
      },
      serviceType: "B2B Lead Generation, Account-Based Marketing, Performance Ads & Automated Funnels",
      areaServed: [
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Austria" },
        { "@type": "Country", name: "Switzerland" },
      ],
      description:
        "B2B Leadgenerierung Agentur für den Mittelstand (KMU) im DACH-Raum. Google & LinkedIn Ads, transaktionales B2B-SEO und automatisierte KI-Qualifizierung für planbare Termine.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://d2cora.com/de/b2b-leadgenerierung-agentur#faq",
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
      "@id": "https://d2cora.com/de/b2b-leadgenerierung-agentur#breadcrumbs",
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
          name: "B2B Leadgenerierung Agentur",
          item: "https://d2cora.com/de/b2b-leadgenerierung-agentur",
        },
      ],
    },
  ],
};

export default function GermanB2bLeadGenerationPage() {
  return (
    <div className="relative min-h-screen bg-[#000814] text-neutral-100 selection:bg-blue-500/30">
      {/* Schema.org Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-transparent blur-[130px]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <Target className="h-3.5 w-3.5" />
              B2B LEADGENERIERUNG &amp; PERFORMANCE FUNNELS DACH
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
              Die B2B Leadgenerierung Agentur für <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">planbare Termine</span> mit echten Entscheidern.
            </h1>

            <p className="mt-6 text-base text-neutral-300 sm:text-lg sm:leading-relaxed">
              Schluss mit unqualifizierten Klicks und leeren Kalendern. Wir verbinden Account-Based Targeting, Google &amp; LinkedIn Ads, transaktionales SEO und automatisierte Funnels zu einer skalierbaren B2B-Neukunden-Maschine.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact?source=de-b2b-leads"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 sm:w-auto"
              >
                <span>B2B Wachstumsanalyse anfordern</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/de/seo-agentur"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-neutral-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                <span>Zur SEO Agentur Übersicht</span>
                <TrendingUp className="h-4 w-4 text-cyan-400" />
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div>
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">100%</div>
                <div className="text-xs text-neutral-400">Vorqualifizierte Leads</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-cyan-400 sm:text-3xl">&lt; 14 Tage</div>
                <div className="text-xs text-neutral-400">Bis zum ersten Termin</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-emerald-400 sm:text-3xl">0,08 $</div>
                <div className="text-xs text-neutral-400">Benchmark Lead-Kosten</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">DSGVO</div>
                <div className="text-xs text-neutral-400">Rechtssicher in DE/AT/CH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Pipeline Section */}
      <section className="relative border-t border-white/5 bg-[#000d1a]/60 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              DAS 4-STUFEN B2B-AKQUISE-SYSTEM
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Wie wir Ihre Vertriebs-Pipeline füllen
            </h2>
            <p className="mt-3 text-sm text-neutral-400 sm:text-base">
              Vom ersten Touchpoint bis zum unterschriftsreifen Verkaufsgespräch: Ein systematischer Akquiseprozess für erklärungsbedürftige Produkte und Dienstleistungen.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/40">
              <span className="font-mono text-xs font-bold text-cyan-400">STUFE 01</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Ideal Customer Profile (ICP)</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Präzise Definition der Zielunternehmen nach Branche, Umsatz, Mitarbeiterzahl und Technologie-Stack für maximale Relevanz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/40">
              <span className="font-mono text-xs font-bold text-cyan-400">STUFE 02</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Multi-Channel Inbound Engine</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Kombination aus kaufbereiten Google Search Ads, gezieltem LinkedIn ABM und transaktionalen SEO-Rankings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/40">
              <span className="font-mono text-xs font-bold text-cyan-400">STUFE 03</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">High-Converting Landing Pages</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Next.js Landingpages mit Ladezeiten unter 1 Sekunde, messbarem Mehrwert und interaktiven Rechnern zur Lead-Maximierung.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/40">
              <span className="font-mono text-xs font-bold text-cyan-400">STUFE 04</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Automatisierte Vorqualifizierung</h3>
              <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed">
                Aussortierung unpassender Anfragen via smarter Funnel-Logik – Ihr Vertrieb spricht ausschließlich mit entscheidungsbereiten Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Case Study Cross-link */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-[#001428] to-blue-950/30 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  VERIFIZIERTE CASE STUDY
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  37+ qualifizierte B2B-Leads bei 0,08 $ Kosten pro Lead
                </h3>
                <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                  Für unseren Kunden <strong>Vini Grow Holidays</strong> haben wir ein automatisiertes Funnel-System implementiert: 155 automatisierte Beratungsgespräche, Seite-1-Google-Rankings für Kernsuchbegriffe und maximale Abschlussquoten.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/case-studies/vini-grow-holidays"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Vollständige Fallstudie lesen</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-neutral-600">·</span>
                  <Link
                    href="/blog/seo-agentur-kosten"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-neutral-200"
                  >
                    <span>Leitfaden zu Marketing-Kosten</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-[#000a16] p-6">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    D2CORA B2B Pipeline Benchmark
                  </div>
                  <div className="mt-4 space-y-3 font-mono text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Lead-Filter:</span>
                      <span className="text-white">C-Level / GF / Leitung</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-neutral-400">Reaktionszeit:</span>
                      <span className="text-emerald-400">&lt; 2 Minuten (KI-Funnel)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Termin-Show-Up-Rate:</span>
                      <span className="text-cyan-400">84% Durchschnitt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* German B2B Lead Gen FAQs */}
      <section className="relative py-24 border-t border-white/5 bg-[#000a16]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              HÄUFIG GESTELLTE FRAGEN
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Fragen zur B2B Leadgenerierung
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
          <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-[#001428] to-blue-950/40 p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Füllen Sie Ihre B2B-Pipeline mit qualifizierten Abschlüssen
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-300">
              Buchen Sie ein unverbindliches 30-minütiges Erstgespräch mit unserem Lead-Architekten.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact?source=b2b-bottom"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <span>Jetzt Erstgespräch vereinbaren</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
