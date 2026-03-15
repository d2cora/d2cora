"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const DARK = "#1524ca";
const LIGHT = "#afccfb";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const { scrollY } = useScroll();

  // We use direct `scrollY` instead of `useSpring` to perfectly sync with the scrollbar.
  // Using a spring here creates a physical delay (the "rubber band" effect), which causes 
  // the Hero section to lag behind the actual scroll position during fast scrolls, 
  // exposing the empty body background underneath before the next section arrives.
  const y = useTransform(scrollY, [0, 1000], [0, -400], { clamp: false });

  return (
    <motion.section
      className="sticky top-0 -z-10 h-[100svh] min-h-[600px] w-full flex items-center justify-start overflow-hidden"
      style={{
        y,
        willChange: "transform",
        translateZ: 0,
        background: "linear-gradient(180deg, #1565c0 0%, #1e88e5 28%, #42a5f5 60%, #81d4fa 85%, #b3e5fc 100%)",
      }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.28,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none z-0"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)" }}
      />

      {/* Typography */}
      <div className="relative z-10 w-full flex items-center justify-start px-6 md:px-14 lg:px-20">
        <div className="flex flex-col items-start">
          <motion.div className="flex items-baseline gap-[0.15em] leading-none" {...fadeUp(0)}>
            <span className="font-heading font-black uppercase"
              style={{ color: DARK, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Bold
            </span>
            <span className="font-heading font-bold"
              style={{ color: DARK, fontSize: "clamp(1.1rem, 2.8vw, 2.6rem)", lineHeight: 1 }}>
              ideas
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <span className="font-heading font-black uppercase block"
              style={{ color: LIGHT, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1, textShadow: "0 2px 24px rgba(21,36,202,0.30)" }}>
              Deserve
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <span className="font-heading font-black uppercase block"
              style={{ color: DARK, fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Flawless
            </span>
          </motion.div>

          <motion.div className="flex items-baseline gap-[0.15em] leading-none self-end" {...fadeUp(0.3)}>
            <span className="font-heading font-bold"
              style={{ color: DARK, fontSize: "clamp(1.1rem, 2.8vw, 2.6rem)", lineHeight: 1, textShadow: "0 2px 14px rgba(21,36,202,0.30)" }}>
              execution
            </span>
            <span className="font-heading font-black uppercase"
              style={{ color: "#0701a5ff", fontSize: "clamp(3rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", lineHeight: 1, textShadow: "0 2px 24px rgba(34,197,94,0.35)" }}>
              Always
            </span>
          </motion.div>
        </div>
      </div>

    </motion.section>
  );
}
