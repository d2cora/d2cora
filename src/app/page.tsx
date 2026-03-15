import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

// Lazy load heavy components


// Lazy load components
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Industries = dynamic(() => import("@/components/sections/Industries").then(mod => ({ default: mod.Industries })));
const VisionSection = dynamic(() => import("@/components/sections/VisionSection").then(mod => ({ default: mod.VisionSection })));
const GraphicPortfolio = dynamic(() => import("@/components/sections/GraphicPortfolio").then(mod => ({ default: mod.GraphicPortfolio })));

import { TrustSignal } from "@/components/sections/TrustSignal";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { TheProblem } from "@/components/sections/TheProblem";
import { WhyChizelLabs } from "@/components/sections/WhyChizelLabs";
import { OurProcess } from "@/components/sections/OurProcess";
import { OurPhilosophy } from "@/components/sections/OurPhilosophy";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <TrustSignal />
      <Industries />
      <VisionSection />
      <GraphicPortfolio />
      <Services />
      <WhoWeHelp />
      <TheProblem />
      <WhyChizelLabs />
      <Projects />
      <OurProcess />
      <OurPhilosophy />
      <CTA />
    </main>
  );
}
