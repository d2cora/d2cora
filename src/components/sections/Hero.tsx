"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

// Simplified floating element — single image that fades in and float-bobs continuously.
// Removed the heavy dual-SVG-mask path animation and infinite rotation loop.
function DrawnElement({ src, className, delay, rotationOffset }: DrawnProps) {
  return (
    <motion.div
      className={`absolute drop-shadow-xl ${className}`}
      style={{ rotate: rotationOffset, willChange: "transform" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -14, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.8, delay, type: "spring" },
        y: { duration: 6 + delay % 2 * 3, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 },
      }}
    >
      <motion.img
        src={src}
        alt=""
        className="h-full w-full object-contain opacity-85"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
        loading="eager"
      />
    </motion.div>
  );
}

// StarryBackground: static SVG stars + subtle CSS pulse — no JS-driven continuous animation.
function StarryBackground() {
  const [stars, setStars] = useState<
    Array<{ cx: string; cy: string; r: number; fill: string; duration: number }>
  >([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Reduced counts: 20 mobile / 60 desktop (was 40/150)
    const starCount = isMobile ? 20 : 60;

    setStars(
      Array.from({ length: starCount }).map(() => ({
        cx: `${Math.random() * 100}%`,
        cy: `${Math.random() * 100}%`,
        r: Math.random() * 1.5 + 0.5,
        fill: Math.random() > 0.8 ? "#fca311" : "#ffffff",
        duration: Math.random() * 3 + 2,
      }))
    );
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[#02000a] opacity-90 mix-blend-multiply transition-colors duration-1000" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
      {/* Stars rendered as plain SVG — no JS animation loop, only lightweight CSS keyframe */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill={star.fill}
            style={{
              animation: `starPulse ${star.duration}s infinite ease-in-out`,
              animationDelay: `${i % 5}s`,
            }}
          />
        ))}
      </svg>
    </>
  );
}

function FloatingSketches() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { stiffness: 40, damping: 20 };
  const smoothX = useTransform(useSpring(mouseX, springConfig), (v) => -v);
  const smoothY = useTransform(useSpring(mouseY, springConfig), (v) => -v);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
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
  }, [mouseX, mouseY, isMobile]);

  const maskStyle = isMobile
    ? {}
    : {
        maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
      };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      style={{ ...maskStyle, willChange: "opacity" }}
      className="pointer-events-auto absolute bottom-0 right-0 top-0 block w-full overflow-hidden mix-blend-screen lg:w-[65%]"
    >
      <StarryBackground />

      {/* Floating parallax container guided by mouse position */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{ x: smoothX, y: smoothY, willChange: "transform" }}
      >
        {/* 1. Camera - Bottom Left */}
        <DrawnElement src="/assets/services/content_marketing_camera-removebg-preview.png" className="h-36 w-36 bottom-[10%] left-[5%] lg:h-75 lg:w-75" delay={1.2} rotationOffset={-12} />

        {/* 2. Megaphone - Top Left */}
        <DrawnElement src="/assets/services/mic_social_media__1_-removebg-preview.png" className="h-28 w-28 left-[20%] top-[10%] lg:h-65 lg:w-65" delay={1.8} rotationOffset={15} />

        {/* 3. Money Hand - Top Right */}
        <DrawnElement src="/assets/services/Untitled_design-removebg-preview.png" className="h-52 w-52 right-[5%] top-[15%] lg:h-150 lg:w-150" delay={2.5} rotationOffset={-5} />

        {/* 4. Speaker Guy - Bottom Right */}
        <DrawnElement src="/assets/services/speaker_social_marketing-removebg-preview.png" className="h-36 w-36 bottom-[5%] right-[20%] lg:h-70 lg:w-70" delay={3.0} rotationOffset={8} />
      </motion.div>
      <div className="bg-linear-to-t pointer-events-none absolute inset-0 z-30 from-black/80 via-transparent to-transparent" />
    </motion.div>
  );
}
// ----------------------------------------

export function Hero() {
  const { scrollY } = useScroll();
  const [isCentered, setIsCentered] = useState(true);

  // GPU-composited transform only — no layout thrash
  const y = useTransform(scrollY, [0, 1000], [0, -400], { clamp: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCentered(false);
    }, 1800);
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
          ease: [0.16, 1, 0.3, 1],
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
            ease: [0.16, 1, 0.3, 1],
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
