import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

// Lazy load heavy components


const Process = dynamic(() => import("@/components/sections/Process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="min-h-[50vh] bg-black" />
});
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-[50vh] bg-black" />
});
const Technologies = dynamic(() => import("@/components/sections/Technologies").then(mod => ({ default: mod.Technologies })));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Industries = dynamic(() => import("@/components/sections/Industries").then(mod => ({ default: mod.Industries })));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      
      <Technologies />
      <Services />
      <Industries />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
