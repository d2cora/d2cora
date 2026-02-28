"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { serviceCategories } from "@/lib/constants/services";

import React from "react";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params);
    const slug = resolvedParams.slug;

    // Find the matching service category based on the slug
    const service = serviceCategories.find(
        (c) => c.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === slug
    );

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-gradient-to-br min-h-screen from-gray-900 via-black to-gray-900">
            <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <Link
                        href="/#services"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-semibold"
                    >
                        <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        All Services
                    </Link>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-heading leading-tight">
                        {service.category}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl">
                        {service.overview}
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-16"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Problems It Solves</h2>
                            <ul className="space-y-4">
                                {service.problems.map((problem, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg font-light">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                        <span>{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Business Outcomes</h2>
                            <p className="text-xl font-medium text-white italic pl-4 border-l-2 border-white/20">
                                {service.outcomes}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-16"
                    >
                        <div className="glass rounded-3xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">What's Included</h2>
                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 text-lg font-light">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Who It's Best For</h2>
                            <p className="text-lg text-gray-300 font-light leading-relaxed">
                                {service.bestFor}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 py-16 border-t border-b border-white/10"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">How We Work</h2>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                            Clarity beats complexity. Here is our proven four-step process for predictable growth:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Strategic Discovery", desc: "We start by understanding your business model, identifying growth levers, and analyzing your target audience." },
                            { step: "02", title: "Design & Architecture", desc: "We map out user journeys, build wireframes, and design premium interfaces with a solid technical foundation." },
                            { step: "03", title: "Execution & Dev", desc: "Using modern stacks, we develop, test, and deploy your project with a focus on speed and performance." },
                            { step: "04", title: "Growth & Optimization", desc: "Launch is just the beginning. We shift focus to marketing, SEO, and continuous data analysis to scale." }
                        ].map((process, i) => (
                            <div key={i} className="relative">
                                <span className="text-6xl font-bold text-white/5 absolute -top-8 -left-4 select-none">{process.step}</span>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{process.title}</h3>
                                <p className="text-gray-400 font-light relative z-10">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Ready to build something that scales?
                    </h2>
                    <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
                        Stop managing vendors and start focusing on growth. Partner with ChizelLabs for end-to-end digital execution.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                    >
                        Start Your Project
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
