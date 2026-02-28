"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const audiences = [
    {
        title: "Local Service Businesses",
        description: "Stop relying on referrals alone. We build systems that generate predictable, high-quality inbound leads.",
    },
    {
        title: "Startup Founders & SaaS Builders",
        description: "When speed is survival. We build lean, high-performing MVPs and scale them into robust platforms.",
    },
    {
        title: "D2C & E-commerce Brands",
        description: "Traffic is useless without conversion. We optimize user journeys to increase retention and lifetime value.",
    },
];

export function WhoWeHelp() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="w-full bg-black py-24 md:py-32 relative overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-x-0 -top-[10%] h-[120%] z-0 pointer-events-none"
            >
                <Image
                    src="/assets/bimage.png"
                    alt="Who We Help Background"
                    fill
                    className="object-cover opacity-20 mix-blend-screen"
                />
            </motion.div>

            {/* Deep Dark Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111]/80 to-black z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3 md:sticky md:top-32 h-fit"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6 leading-tight">
                            Built for<br />Ambition.
                        </h2>
                        <p className="text-xl text-white/50 font-light leading-relaxed">
                            Growth looks different for everyone, but the formula remains the same: strategy, speed, and execution.
                        </p>
                    </motion.div>

                    {/* Cards Section */}
                    <div className="w-full md:w-2/3 flex flex-col gap-6">
                        {audiences.map((audience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group p-8 md:p-10 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors duration-300 relative overflow-hidden"
                            >
                                {/* Card internal glow on hover */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center mb-6">
                                    {/* Plus Icon indicating addition/growth */}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {audience.title}
                                </h3>
                                <p className="text-lg text-white/60 font-light leading-relaxed">
                                    {audience.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
