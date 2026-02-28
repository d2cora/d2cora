"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroContent = memo(() => {
  const text = "ChizelLabs";

  return (
    <div className="w-full z-40 relative animate-fade-in pl-0 md:pl-2 lg:pl-4 mt-20 md:mt-24">
      <div className="">
        <h1 className="text-4xl sm:text-7xl md:text-9xl lg:text-[11.5rem] tracking-tight leading-none relative flex items-center font-heading font-bold text-white overflow-hidden pb-4">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: index * 0.08,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl space-y-6 pt-4 md:pt-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white/90 leading-tight">
            Digital systems for real growth
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Websites, performance marketing, and apps built to convert and scale.
          </p>

          <div className="pt-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gray-700/80" />
            <p className="text-[11px] sm:text-xs text-gray-500 font-light tracking-[0.2em] uppercase">
              Built for startups, founders, and growing brands
            </p>
          </div>
        </motion.div>
      </div>
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
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-start items-start text-left pt-24 pb-8 w-full px-4 lg:px-8">

      {/* Background Videos with Blur & Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          key={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm mix-blend-screen"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Gradient Overlay: Black on left/bottom fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Simplified grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\")",
          filter: "contrast(170%) brightness(1000%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-20" />

      <HeroContent />
    </section>
  );
}
