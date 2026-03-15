"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TrustSignal() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start 20%"]
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["#FDFBF7", "#86c6a6ff"] // Warm White to Light Mint Green
    );

    return (
        <motion.section 
            ref={containerRef}
            className="w-full py-16 md:py-24 border-b border-black/5 relative overflow-hidden z-10"
            style={{ backgroundColor }}
        >
            {/* Subtle Grain Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                }}
            />

            <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
                
                {/* Text Section - Takes ~40% space on desktop */}
                <div className="w-full lg:w-[40%] flex flex-col justify-start space-y-6 lg:space-y-8 pt-4 lg:pt-8 flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 tracking-tight leading-snug">
                            Trusted by founders and business owners who value ROI over hype.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border-l-2 border-orange-500 pl-6"
                    >
                        <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                            From local service businesses to scaling SaaS platforms, we partner with teams that demand predictable growth and clear execution.
                        </p>
                    </motion.div>
                </div>

                {/* Placeholder Section - Pushed to the right using ml-auto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full lg:w-[50%] lg:ml-auto min-h-[500px] md:min-h-[600px] lg:min-h-[800px] bg-neutral-200/80 rounded-[2rem] border border-neutral-300 flex items-center justify-center shadow-inner relative overflow-hidden flex-shrink-0"
                >
                    <div className="flex flex-col items-center justify-center text-neutral-400">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span className="text-lg font-medium tracking-wide uppercase">Stats / Wallpaper Placeholder</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
