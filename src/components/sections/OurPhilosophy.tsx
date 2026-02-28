"use client";

import { motion } from "framer-motion";

export function OurPhilosophy() {
    return (
        <section className="w-full bg-black py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-4 mb-8 justify-center">
                        <div className="h-[1px] w-8 bg-blue-500" />
                        <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">What We Stand For</span>
                        <div className="h-[1px] w-8 bg-blue-500" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-white leading-tight mb-12">
                        When strategy, design, tech, and marketing work together, businesses grow <span className="text-blue-500 font-bold italic">faster</span> and <span className="text-blue-500 font-bold italic">smarter</span>.
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto">
                        <p>
                            We believe in long-term thinking because sustainable growth is always superior to quick, hollow wins.
                        </p>
                        <p>
                            We exist to remove the stress of digital execution, giving you the absolute confidence that a competent, accountable team is driving the ship.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
