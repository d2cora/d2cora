"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const DARK = "#1524ca";
const LIGHT = "#afccfb";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});


interface DrawnProps {
  src: string;
  className: string;
  delay: number;
  rotationOffset: number;
}

function DrawnElement({ src, className, delay, rotationOffset }: DrawnProps) {
  // A deliberately chaotic SVG scribble that loops back and forth to fill the 500x500 space
  // With a fat stroke-width, this acts as an eraser/revealer that paints the image
  const scribblePath1 = "M 50 100 L 450 120 L 30 180 L 480 230 L 20 300 L 460 360 L 40 430 L 450 480 L 10 520";
  const scribblePath2 = "M 480 80 L 20 150 L 460 210 L 40 280 L 450 340 L 30 400 L 470 460 L 20 500";
  const uniqueId = src.replace(/[^a-zA-Z0-9]/g, '');

  return (
    <motion.div
      className={`absolute drop-shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0], 
        rotate: [rotationOffset, rotationOffset + 3, rotationOffset - 3, rotationOffset] 
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.8, delay, type: "spring" },
        // Use delay property to create pseudo-random but deterministic animations so no hydration errors
        y: { duration: 6 + (delay % 2) * 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 8 + (delay % 1.5) * 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="relative h-full w-full">
        {/* Layer 1: Sketch stroke reveal using SVG Mask */}
        <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <mask id={`revealMask-${uniqueId}`}>
              <motion.path
                d={scribblePath1}
                fill="none"
                stroke="white"
                strokeWidth="100"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.5, delay: delay + 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d={scribblePath2}
                fill="none"
                stroke="white"
                strokeWidth="120"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.5, delay: delay + 1.2, ease: "easeInOut" }}
              />
            </mask>
          </defs>
          
          <image 
            href={src} 
            width="500" 
            height="500" 
            mask={`url(#revealMask-${uniqueId})`} 
            className="object-contain opacity-80" 
            style={{ filter: `grayscale(100%) drop-shadow(0px 10px 15px rgba(0,0,0,0.5))` }}
          />
        </svg>

        {/* Layer 2: Full Color Fade In */}
        {/* After the pencil mask finishes drawing, the original image blooms into its full color */}
        <motion.img 
          src={src}
          className="absolute inset-0 h-full w-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, delay: delay + 4.5, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.8))" }}
        />
      </div>
    </motion.div>
  );
}

function StarryBackground() {
  const [stars, setStars] = useState<Array<{ cx: string; cy: string; r: number; fill: string; duration: number }>>([]);

  useEffect(() => {
    setStars(Array.from({ length: 150 }).map(() => ({
      cx: `${Math.random() * 100}%`,
      cy: `${Math.random() * 100}%`,
      r: Math.random() * 1.5 + 0.5,
      fill: Math.random() > 0.8 ? "#fca311" : "#ffffff",
      duration: Math.random() * 3 + 2,
    })));
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[#02000a] opacity-90 mix-blend-multiply transition-colors duration-1000" />
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
      <motion.div className="pointer-events-none absolute inset-0" animate={{ y: [0, -30, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        <svg className="absolute inset-0 h-[150%] w-full">
          {stars.map((star, i) => (
            <circle
              key={i} cx={star.cx} cy={star.cy} r={star.r}
              fill={star.fill}
              style={{
                animation: `starPulse ${star.duration}s infinite ease-in-out`,
                animationDelay: `${i % 5}s`
              }}
            />
          ))}
        </svg>
      </motion.div>
    </>
  );
}

function FloatingSketches() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 20 };
  const smoothX = useTransform(useSpring(mouseX, springConfig), (v) => -v);
  const smoothY = useTransform(useSpring(mouseY, springConfig), (v) => -v);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 50);
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 50);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)" }}
      className="pointer-events-auto absolute bottom-0 right-0 top-0 hidden w-full overflow-hidden mix-blend-screen lg:block lg:w-[65%]"
    >
      <StarryBackground />

      {/* Floating parallax container guided by mouse position */}
      <motion.div 
        className="absolute inset-0 h-full w-full"
        style={{ x: smoothX, y: smoothY }}
      >
        {/* You need to save those 4 attachments inside /public/assets/services/ with these exact names! */}
        
        {/* 1. Camera - Bottom Left */}
        <DrawnElement src="/assets/services/content_marketing_camera-removebg-preview.png" className="w-75 h-75 bottom-[10%] left-[5%]" delay={1.2} rotationOffset={-12} />
        
        {/* 2. Megaphone - Top Left */}
        <DrawnElement src="/assets/services/mic_social_media__1_-removebg-preview.png" className="h-65 w-65 left-[20%] top-[10%]" delay={1.8} rotationOffset={15} />
        
        {/* 3. Money Hand - Top Right */}
        <DrawnElement src="/assets/services/Untitled_design-removebg-preview.png" className="h-150 w-150 right-[5%] top-[15%]" delay={2.5} rotationOffset={-5} />

        {/* 4. Speaker Guy - Bottom Right */}
        <DrawnElement src="/assets/services/speaker_social_marketing-removebg-preview.png" className="h-70 w-70 bottom-[5%] right-[20%]" delay={3.0} rotationOffset={8} />

      </motion.div>
      <div className="bg-linear-to-t pointer-events-none absolute inset-0 z-30 from-black/80 via-transparent to-transparent" />
    </motion.div>
  );
}
// ----------------------------------------

export function Hero() {
  const { scrollY } = useScroll();
  const [isCentered, setIsCentered] = useState(true);

  // We use direct `scrollY` instead of `useSpring` to perfectly sync with the scrollbar.
  const y = useTransform(scrollY, [0, 1000], [0, -400], { clamp: false });

  useEffect(() => {
    // Initial reveal in center, then move to position after a short delay
    const timer = setTimeout(() => {
      setIsCentered(false);
    }, 1800); // 1.8s delay to allow for the reveal animation to breath in center
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="h-svh min-h-150 sticky top-0 -z-10 flex w-full items-center justify-start overflow-hidden"
      style={{
        y,
        willChange: "transform",
        translateZ: 0,
        background: "linear-gradient(180deg, #1565c0 0%, #1e88e5 28%, #42a5f5 60%, #81d4fa 85%, #b3e5fc 100%)",
      }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: 0.28,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Horizon glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-1/3"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)" }}
      />

      <FloatingSketches />

      {/* Typography Container */}
      <motion.div 
        layout
        transition={{ 
          duration: 2, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`relative z-10 flex w-full items-center px-6 md:px-14 lg:px-20 ${
          isCentered ? "justify-center" : "justify-start"
        }`}
      >
        <motion.div 
          layout 
          className={`flex flex-col ${
            isCentered ? "items-center text-center" : "items-start text-left"
          }`}
          transition={{ 
            duration: 2, 
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.div className="flex items-baseline gap-[0.15em] leading-none" {...fadeUp(0.2)}>
            <span className="font-heading font-black uppercase"
              style={{ color: DARK, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Bold
            </span>
            <span className="font-heading font-bold"
              style={{ color: DARK, fontSize: "clamp(1.1rem, 2.8vw, 2.6rem)", lineHeight: 1 }}>
              ideas
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <span className="font-heading block font-black uppercase"
              style={{ color: LIGHT, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1, textShadow: "0 2px 24px rgba(21,36,202,0.30)" }}>
              Deserve
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.4)}>
            <span className="font-heading block font-black uppercase"
              style={{ color: DARK, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Flawless
            </span>
          </motion.div>

          <motion.div className="flex items-baseline gap-[0.15em] self-end leading-none" {...fadeUp(0.5)}>
            <span className="font-heading font-bold"
              style={{ color: DARK, fontSize: "clamp(1.1rem, 2.8vw, 2.6rem)", lineHeight: 1, textShadow: "0 2px 14px rgba(21,36,202,0.30)" }}>
              execution
            </span>
            <span className="font-heading font-black uppercase"
              style={{ color: "#0701a5ff", fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1, textShadow: "0 2px 24px rgba(34,197,94,0.35)" }}>
              Always
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
