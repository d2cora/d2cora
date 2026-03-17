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
            className="relative z-10 w-full overflow-hidden border-b border-black/5 py-16 md:py-24"
            style={{ backgroundColor }}
        >
            {/* Subtle Grain Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                }}
            />

            <div className="max-w-350 relative z-10 mx-auto flex flex-col items-start justify-between gap-12 px-4 md:px-12 lg:flex-row lg:gap-32 lg:px-20">
                
                {/* Text Section - Takes ~40% space on desktop */}
                <div className="flex w-full shrink-0 flex-col justify-start space-y-6 pt-4 lg:w-[40%] lg:space-y-8 lg:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-3xl font-bold leading-snug tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
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
                        <p className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
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
                    className="min-h-125 rounded-4xl md:min-h-150 lg:min-h-200 relative flex w-full shrink-0 items-center justify-center overflow-hidden border border-neutral-300 bg-neutral-200/80 shadow-inner lg:ml-auto lg:w-[50%]"
                >
                    <div className="flex flex-col items-center justify-center text-neutral-400">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span className="text-lg font-medium uppercase tracking-wide">Stats / Wallpaper Placeholder</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
