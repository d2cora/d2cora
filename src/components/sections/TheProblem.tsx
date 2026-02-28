"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function TheProblem() {
    return (
        <section className="w-full bg-[#111111] py-24 md:py-32 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: The "Scattered" Reality */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                            Digital growth shouldn't be fragmented.
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg">
                            Most businesses struggle online not because they lack effort, but because their approach is scattered.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                "One vendor for websites.",
                                "Another for marketing.",
                                "Another for maintenance.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60 font-medium">
                                    <XCircle className="w-5 h-5 text-red-500/80 shrink-0" />
                                    <span className="text-lg tracking-wide">{item}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 text-red-400 font-bold tracking-widest uppercase text-sm mt-8 pt-4 border-t border-white/10 w-fit">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                No ownership. No clarity. No growth.
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The ChizelLabs Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            {/* Subtle glow inside the box */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 relative z-10">
                                We were built to fix that.
                            </h3>

                            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 relative z-10">
                                We bring everything together so you can stop worrying about execution and focus on scaling.
                            </p>

                            <div className="space-y-4 relative z-10">
                                {[
                                    "Unified strategy & design.",
                                    "Scalable engineering.",
                                    "Performance-driven marketing.",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
