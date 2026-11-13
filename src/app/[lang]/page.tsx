import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  NON_DEFAULT_LOCALES,
  isSupportedLocale,
  getHreflangAlternates,
} from '@/lib/i18n';
import { getLocaleData } from '@/lib/locales';
import { LocaleSync } from '@/components/LocaleSync';

// Pre-render all 20 localized homepages statically at build time (SSG)
export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({
    lang: locale.code,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    return {};
  }

  const data = getLocaleData(lang);
  const alternates = getHreflangAlternates();

  let title = data.seo.title;
  let description = data.seo.description;

  if (lang === 'de') {
    title = 'D2CORA | Performance Marketing & SEO Agentur für D2C, E-Commerce & B2B';
    description = 'Skalieren Sie Ihren Umsatz mit D2CORA: Ihre datengetriebene Performance Marketing, Shopify SEO & Leadgenerierung Agentur für den DACH-Raum. Jetzt Erstgespräch buchen.';
  } else if (lang === 'fr') {
    title = 'D2CORA | Agence de Marketing Digital, SEO & Performance (D2C & B2B)';
    description = 'Accélérez votre croissance e-commerce et B2B avec D2CORA : agence experte en SEO technique, acquisition payante (Google & Meta Ads), CRO et automatisation IA.';
  }

  return {
    title,
    description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: `https://www.d2cora.com/${lang}`,
      languages: alternates,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `https://www.d2cora.com/${lang}`,
      siteName: 'D2CORA',
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.title,
      description: data.seo.description,
    },
  };
}

// Components
import { Hero } from '@/components/sections/Hero';
import { TrustSignal } from '@/components/sections/TrustSignal';
import { GrowthPartner } from '@/components/sections/GrowthPartner';
import { FAQ } from '@/components/sections/FAQ';

// Lazy load heavy components
const Services = dynamic(() =>
  import('@/components/sections/Services').then((mod) => ({ default: mod.Services }))
);
const Industries = dynamic(() =>
  import('@/components/sections/Industries').then((mod) => ({ default: mod.Industries }))
);
const VisionSection = dynamic(() =>
  import('@/components/sections/VisionSection').then((mod) => ({ default: mod.VisionSection }))
);
const GraphicPortfolio = dynamic(() =>
  import('@/components/sections/GraphicPortfolio').then((mod) => ({ default: mod.GraphicPortfolio }))
);
const DigitalCanvas = dynamic(() =>
  import('@/components/sections/DigitalCanvas').then((mod) => ({ default: mod.DigitalCanvas }))
);
const TestimonialTeaser = dynamic(() =>
  import('@/components/sections/TestimonialTeaser').then((mod) => ({ default: mod.TestimonialTeaser }))
);

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const data = getLocaleData(lang);

  // Schema.org FAQPage structured data in native language
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: data.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Rich Multi-Entity Schema.org Graph for International Ranking
  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `https://www.d2cora.com/${lang}#organization`,
    name: 'd2cora',
    alternateName: data.seo.title,
    description: data.seo.description,
    url: `https://www.d2cora.com/${lang}`,
    logo: 'https://www.d2cora.com/assets/d2cora%20full.svg',
    image: 'https://www.d2cora.com/assets/d2c-growth-partner.jpg',
    inLanguage: lang,
    areaServed: ["US", "GB", "DE", "NL", "EU"],
    knowsLanguage: [lang, 'en'],
    priceRange: '$$$',
    sameAs: [
      'https://www.linkedin.com/company/d2cora1',
      'https://www.instagram.com/d2cora.media/',
      'https://x.com/Rahul___Bora',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Growth Services',
      itemListElement: data.services.categories.map((cat, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cat.category,
          description: cat.overview,
        },
        position: idx + 1,
      })),
    },
  };

  const isRtl = data.dir === 'rtl';

  return (
    <main
      className={`w-full ${isRtl ? 'font-sans text-right' : 'text-left'}`}
      dir={data.dir}
      lang={lang}
    >
      <LocaleSync lang={lang} dir={data.dir} />

      {/* JSON-LD Schemas for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="sr-only">{data.seo.h1}</h1>

      <Hero content={data.hero} />
      {lang === 'de' && (
        <div className="relative z-20 mx-auto max-w-6xl px-4 pt-6">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-[#001428] via-[#001026] to-[#000a18] p-6 text-white shadow-xl sm:flex sm:items-center sm:justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                DACH WACHSTUMS-LÖSUNGEN
              </span>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                Spezialisierte Agentur-Leistungen für Deutschland, Österreich &amp; Schweiz
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
              <Link
                href="/de/seo-agentur"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
              >
                SEO Agentur DACH →
              </Link>
              <Link
                href="/de/b2b-leadgenerierung-agentur"
                className="rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/[0.1] transition-colors"
              >
                B2B Leadgenerierung →
              </Link>
              <Link
                href="/blog/seo-agentur-kosten"
                className="rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/[0.1] transition-colors"
              >
                SEO Kosten Leitfaden →
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="relative z-10">
        <TrustSignal content={data.trustSignal} />
        <Industries />
        <VisionSection content={data.vision} />
        <GraphicPortfolio content={data.graphicPortfolio} />
        <DigitalCanvas content={data.digitalCanvas} />
        <Services content={data.services} />
        <TestimonialTeaser content={data.testimonials} />
        <GrowthPartner content={data.growthPartner} />
        <FAQ content={data.faq} />
      </div>
    </main>
  );
}
