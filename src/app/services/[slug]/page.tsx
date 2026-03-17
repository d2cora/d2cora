"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
        <main className="min-h-screen bg-[#f4f0e6] text-[#1a1a1a] selection:bg-black/10">
            {/* Top Border Line */}
            <div className="h-0.5 w-full bg-black/10" />

            {/* Floating Background Images (Thematic Elements) */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                {service.images?.map((src, i) => (
                    <div
                        key={i}
                        className="absolute opacity-[0.05] grayscale"
                        style={{
                            top: `${20 + i * 30}%`,
                            left: i % 2 === 0 ? '5%' : 'auto',
                            right: i % 2 !== 0 ? '5%' : 'auto',
                            width: '300px',
                            height: '300px',
                        }}
                    >
                        <img src={src} alt="" className="h-full w-full object-contain" />
                    </div>
                ))}
            </div>

            <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-12 lg:px-20">
                {/* Navigation Back */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/#services"
                        className="group inline-flex items-center gap-1 text-sm font-medium uppercase tracking-widest saturate-0 transition-all hover:gap-2 hover:saturate-100"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Services
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="mb-20 border-b-2 border-black/10 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-heading mb-8 text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl">
                            {service.category}
                        </h1>
                        <div className="max-w-4xl">
                            <p className="text-2xl font-light leading-snug text-black/80 md:text-3xl">
                                {service.overview}
                            </p>
                        </div>
                    </motion.div>

                    {/* Service Quote (Thematic Element) */}
                    {service.quote && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-12 max-w-3xl border-l-4 border-[#FF5722]/50 pl-6"
                        >
                            <p className="font-heading text-2xl font-light italic leading-relaxed text-black/90 md:text-3xl">
                                "{service.quote.split(/(\*.*?\*)/g).map((part, i) => {
                                    if (part.startsWith('*') && part.endsWith('*')) {
                                        return <span key={i} className="font-semibold not-italic text-[#FF5722]">{part.slice(1, -1)}</span>;
                                    }
                                    return <span key={i} style={{ fontFamily: 'var(--font-space-grotesk)' }}>{part}</span>;
                                })}"
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Content Grid */}
                <div className="mb-32 grid gap-16 lg:grid-cols-12">
                    {/* Left Side: Problems & Outcomes */}
                    <div className="space-y-20 lg:col-span-7">
                        <section>
                            <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.2em] text-black/40">Problems We Solve</h2>
                            <div className="grid gap-8 sm:grid-cols-2">
                                {service.problems.map((problem, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-black/2 rounded-2xl border border-black/5 p-6"
                                    >
                                        <p className="text-lg font-medium leading-tight">{problem}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section className="rounded-3xl border border-black/5 bg-white/40 p-10 backdrop-blur-sm">
                            <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-black/40">Expected Outcomes</h2>
                            <p className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                                {service.outcomes}
                            </p>
                        </section>
                    </div>

                    {/* Right Side: What's Included & Who it's for */}
                    <div className="space-y-12 lg:col-span-5">
                        <div className="group relative overflow-hidden rounded-3xl bg-black p-10 text-white shadow-2xl">
                            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                            <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] opacity-60">Service Scope</h2>
                            <ul className="space-y-6">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-light">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-2">
                            <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-black/40">Ideal For</h2>
                            <p className="text-xl font-medium leading-relaxed text-black/70">
                                {service.bestFor}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process Section - Newspaper Style */}
                <div className="mb-32 border-t-2 border-black/10 pt-24">
                    <div className="mb-20 grid items-end gap-12 md:grid-cols-12">
                        <div className="md:col-span-8">
                            <h2 className="mb-4 text-4xl font-bold tracking-tighter md:text-6xl">Our Methodology</h2>
                            <p className="max-w-2xl text-xl font-light text-black/60">
                                We've perfected a four-step framework designed to eliminate guesswork and deliver measurable, data-driven growth.
                            </p>
                        </div>
                        <div className="hidden text-right md:col-span-4 md:block">
                            <span className="select-none text-8xl font-black opacity-[0.03]">d2cora</span>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { step: "01", title: "Strategic Discovery", desc: "Granular analysis of your business model, market position, and growth levers." },
                            { step: "02", title: "Creative Architecture", desc: "Mapping high-impact user journeys and designing premium interfaces." },
                            { step: "03", title: "Precision Execution", desc: "Rigorous development and deployment using cutting-edge technologies." },
                            { step: "04", title: "Scale & Optimization", desc: "Continuous performance monitoring and aggressive growth scaling." }
                        ].map((process, i) => (
                            <div key={i} className="rounded-4xl group border border-black/10 p-8 transition-all duration-500 hover:bg-black hover:text-white">
                                <span className="mb-10 block text-sm font-bold tracking-widest text-[#FF5722]">{process.step}</span>
                                <h3 className="mb-4 text-2xl font-bold tracking-tight">{process.title}</h3>
                                <p className="font-light leading-relaxed text-black/60 group-hover:text-white/70">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[3rem] bg-black p-12 text-center text-white md:p-24"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,87,34,0.15),transparent)]" />
                    <h2 className="relative z-10 mb-10 text-4xl font-bold tracking-tighter md:text-7xl">
                        Let's Engineering Your <br className="hidden md:block" /> Scaling Story.
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative z-10 inline-flex items-center gap-4 rounded-full bg-[#FF5722] px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Schedule a Audit
                        <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
