"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const reasons = [
    {
        title: "Outcome Over Activity",
        description: "We don't sell hours; we sell results. Every technical and design decision maps directly to a business goal.",
    },
    {
        title: "Speed With Precision",
        description: "Fast, but never sloppy. We deploy modern tech stacks to get you to market quicker without sacrificing quality.",
    },
    {
        title: "Complete Ownership",
        description: "We act like partners, not just vendors. You get one dedicated team handling the entire lifecycle of your digital product.",
    },
];

export function WhyChizelLabs() {
    return (
        <section className="w-full bg-black py-24 md:py-32 relative overflow-hidden">

            {/* Background styling elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24">

                {/* Header Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-[40%] md:sticky md:top-32 h-fit"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-blue-500" />
                        <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Why ChizelLabs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-8 leading-tight">
                        Clarity Beats<br />Complexity.
                    </h2>
                    <p className="text-xl text-white/50 font-light leading-relaxed max-w-sm">
                        Why growing businesses choose us as their accountable growth partner.
                    </p>
                </motion.div>

                {/* List Column */}
                <div className="w-full md:w-[60%] flex flex-col">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 * index }}
                            className="group border-b border-white/10 py-10 md:py-16 first:pt-0 last:border-0 relative"
                        >
                            {/* Subtle hover line */}
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full z-10" />

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                                <div className="text-3xl md:text-5xl font-heading font-bold text-white/10 shrink-0 group-hover:text-blue-500/20 transition-colors duration-500">
                                    0{index + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                                        {reason.title}
                                        <MoveRight className="w-6 h-6 text-blue-500 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
