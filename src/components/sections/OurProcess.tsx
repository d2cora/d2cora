"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Strategic Discovery",
        description: "We align on business goals, map your growth levers, and define exactly what success looks like.",
    },
    {
        number: "02",
        title: "Design & Architecture",
        description: "We build the blueprint—crafting user journeys and premium interfaces rooted in conversion logic.",
    },
    {
        number: "03",
        title: "Execution & Development",
        description: "We write clean, scalable code to bring the vision to life, deploying fast without cutting corners.",
    },
    {
        number: "04",
        title: "Growth & Optimization",
        description: "Launch is day one. We shift to data analysis, SEO, and performance marketing to actively drive retention and revenue.",
    },
];

export function OurProcess() {
    return (
        <section className="w-full bg-[#111111] py-24 md:py-32 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-4 mb-6 justify-center">
                        <div className="h-[1px] w-8 bg-blue-500" />
                        <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Our Process</span>
                        <div className="h-[1px] w-8 bg-blue-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
                        How We Execute.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                        A predictable, four-step system designed to remove uncertainty and accelerate growth.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">

                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[1px] bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 relative transition-colors duration-500 group-hover:border-blue-500/50 group-hover:bg-blue-900/10">
                                <span className="text-2xl font-bold font-heading text-white">{step.number}</span>
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-lg text-white/60 font-light leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
