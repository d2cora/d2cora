"use client";

import { motion } from "framer-motion";

export function TrustSignal() {
    return (
        <section className="w-full bg-[#111111] py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
            {/* Subtle Grain Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.2]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                        Trusted by founders and business owners who value ROI over hype.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 border-l border-white/10 pl-6 md:pl-12"
                >
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                        From local service businesses to scaling SaaS platforms, we partner with teams that demand predictable growth and clear execution.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
