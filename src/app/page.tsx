import dynamic from 'next/dynamic';
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
      <Hero />
      <TrustSignal />
      <Industries />
      <VisionSection />
      <GraphicPortfolio />
      <Services />
      <FAQ />
    </main>
  );
}
