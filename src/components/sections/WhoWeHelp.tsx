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

const AnimatedCard = ({ audience, index, totalCards }: { audience: { title: string, description: string }, index: number, totalCards: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        // The card becomes active when it hits 30% from the top, and stays active for a long scroll
        offset: ["start 30%", "end -100%"]
    });

    // Intense 3D transform that makes cards "stack" and tilt heavily as others come up
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * index]);

    // Calculate top sticky position so they stack beautifully
    const topPosition = `calc(30vh + ${index * 40}px)`;

    return (
        <motion.div
            ref={cardRef}
            style={{
                top: topPosition,
                scale,
                opacity,
                rotateX,
                y,
                transformPerspective: 1500,
                transformOrigin: "top center",
                zIndex: totalCards - index, // Keep top cards above when they tilt back
            }}
            className="group sticky p-8 md:p-12 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]"
        >
            {/* Radical sweeping gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Ambient liquid glow inside card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold font-heading">0{index + 1}</span>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                        {audience.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl">
                        {audience.description}
                    </p>
                </div>
            </div>

            {/* Bottom progress bar effect on hover */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>
    );
};

export function WhoWeHelp() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax background map
    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} className="w-full bg-black py-24 md:py-48 relative overflow-visible">
            {/* Parallax Background */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-x-0 -top-[20%] h-[140%] z-0 pointer-events-none"
            >
                <Image
                    src="/assets/bimage.png"
                    alt="Who We Help Background"
                    fill
                    className="object-cover opacity-10 mix-blend-screen"
                />
            </motion.div>

            {/* Deep Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 relative">

                    {/* Header Section - Sticky */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full xl:w-1/3 xl:sticky xl:top-[30vh] h-fit z-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-8 leading-tight">
                            Built for<br />Ambition.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                            Growth looks different for everyone, but the formula remains the same: strategy, speed, and execution.
                        </p>
                    </motion.div>

                    {/* Cards Section - Stacking */}
                    <div className="w-full xl:w-2/3 flex flex-col gap-16 pb-[30vh]" style={{ perspective: "2000px" }}>
                        {audiences.map((audience, index) => (
                            <AnimatedCard
                                key={index}
                                audience={audience}
                                index={index}
                                totalCards={audiences.length}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
