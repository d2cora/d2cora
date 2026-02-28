"use client";

import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const HeroContent = memo(() => {
  return (
    <div className="w-full h-full z-40 relative flex flex-col justify-center items-start text-left px-4 md:px-12 lg:px-20">
      <motion.div
        className="w-full max-w-5xl flex flex-col items-start justify-center -mt-16 md:-mt-32"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[11.5rem] font-heading font-bold text-white tracking-tight leading-[1.05] pb-9"
        >
          ChizelLabs
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold md:font-semibold text-white md:text-white/90 tracking-tight md:tracking-widest mb-4 md:mb-6"
        >
          Build Smart<br />Grow Fast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-l lg:text-xl text-white/50 font-light tracking-wide mb-10 max-w-2xl leading-relaxed"
        >
          We turn good businesses into visible, scalable digital brands. Stop managing fragmented vendors—get strategy, design, and execution under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-6"
        >
          <Link href="/contact" className="w-auto">
            <button className="group relative w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-medium text-sm lg:text-base overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98] duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </Link>

          <Link href="/#services" className="w-auto">
            <button className="group relative w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-sm lg:text-base overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98] hover:border-white/40 hover:bg-white/5 duration-300">
              <span className="relative z-10">Explore Services</span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
});

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    "/assets/hero-bg-1.mp4",
    "/assets/hero-bg-2.mp4",
    "/assets/hero-bg-3.mp4",
    "/assets/hero-bg-4.mp4",
    "/assets/hero-bg-5.mp4",
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Videos with Blur & Deep Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          key={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-[6px] mix-blend-screen scale-105"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Cinematic Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* High-end cinematic grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />

      {/* Very Subtle Grid Overlay for tech/system feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50 z-10" />

      {/* Accent glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-20" />

      <HeroContent />
    </section>
  );
}
