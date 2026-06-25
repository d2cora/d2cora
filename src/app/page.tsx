import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

import { Hero } from "@/components/sections/Hero";

// Lazy load heavy components


// Lazy load components
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Industries = dynamic(() => import("@/components/sections/Industries").then(mod => ({ default: mod.Industries })));
const VisionSection = dynamic(() => import("@/components/sections/VisionSection").then(mod => ({ default: mod.VisionSection })));
const GraphicPortfolio = dynamic(() => import("@/components/sections/GraphicPortfolio").then(mod => ({ default: mod.GraphicPortfolio })));

import { TrustSignal } from "@/components/sections/TrustSignal";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">d2cora: Leading Digital Marketing Agency for D2C Brands & Ecommerce Growth</h1>
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

      <FAQ />
    </main>
  );
}
