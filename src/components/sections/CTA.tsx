"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="w-full bg-[#111111] py-24 md:py-32 relative border-t border-white/5 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/40 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-[2.5rem]"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
                        Ready to stop managing vendors?
                    </h2>

                    <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                        Partner with the digital growth agency that actually cares about your ROI. Let's build a system that scales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
                                Get Started Today
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>

                        <Link href="/services" className="w-full sm:w-auto text-white/60 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white font-medium">
                            Or view our services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
