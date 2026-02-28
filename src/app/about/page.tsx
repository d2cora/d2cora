"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To deliver exceptional digital solutions that transform businesses and create lasting impact in the digital landscape."
        },
        {
            icon: Users,
            title: "Our Team",
            description: "A passionate group of designers, developers, and strategists dedicated to bringing your vision to life."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We stay ahead of the curve, leveraging cutting-edge technologies to build future-proof solutions."
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Quality is at the heart of everything we do, ensuring every project exceeds expectations."
        }
    ];

    return (
        <main className="bg-linear-to-br min-h-screen from-gray-900 via-black to-gray-900">
            {/* Hero Section */}
            <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-heading leading-tight">
                        We Build Digital Systems for Real Growth
                    </h1>
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        <p>
                            <span className="text-white font-medium">ChizelLabs</span> was founded on a simple belief: most businesses don't fail online because of lack of effort — they fail because their digital growth is fragmented, slow, and poorly executed.
                        </p>
                        <p className="border-l-2 border-gray-700 pl-6 italic text-gray-400">
                            Websites are built without strategy.<br />
                            Marketing runs without conversion thinking.<br />
                            Technology scales without clarity.
                        </p>
                        <p className="text-white font-medium">
                            ChizelLabs exists to bring focus, ownership, and execution into digital growth.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">From Idea to Scale — Under One Roof</h2>
                    <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                        <p>We are a digital growth agency specializing in website development, app development, and performance marketing.</p>
                        <p className="text-white">But more importantly, we build complete digital systems — not isolated services.</p>
                        <p>From strategy and UX to development, SEO, paid marketing, and ongoing maintenance, everything we do is designed around one goal: helping businesses grow faster, smarter, and more predictably.</p>
                        <p>This integrated approach allows our clients to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Launch faster without hiring a full internal team</li>
                            <li>Reduce operational complexity</li>
                            <li>Focus on growth instead of managing vendors</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 glass rounded-3xl p-8 md:p-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">Who We Work With</h2>
                    <p className="text-lg text-gray-300 mb-6">We partner with:</p>
                    <ul className="space-y-4 text-gray-300 font-light">
                        <li className="flex items-start gap-4">
                            <Target className="w-6 h-6 text-white shrink-0 mt-1" />
                            <span><strong className="text-white font-medium">Local service businesses</strong> that want consistent leads and visibility</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Lightbulb className="w-6 h-6 text-white shrink-0 mt-1" />
                            <span><strong className="text-white font-medium">Startup founders & SaaS builders</strong> who need to launch fast and scale efficiently</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Users className="w-6 h-6 text-white shrink-0 mt-1" />
                            <span><strong className="text-white font-medium">D2C and e-commerce brands</strong> looking to improve conversions and customer acquisition</span>
                        </li>
                    </ul>
                    <p className="mt-8 text-xl font-medium text-white">No matter the business model, the problem is usually the same: <br className="hidden md:block" />growth without structure doesn't scale.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Approach</h2>
                    <p className="text-xl text-white font-medium">We believe clarity beats complexity.</p>
                    <p className="text-gray-300 text-lg">Every project starts with:</p>
                    <ol className="space-y-6 text-gray-300 font-light">
                        <li className="flex gap-4">
                            <span className="text-white font-bold opacity-50 text-xl">1.</span>
                            <div>
                                <strong className="text-white block mb-1">Strategy first</strong>
                                <span>understanding business goals, users, and growth levers</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-white font-bold opacity-50 text-xl">2.</span>
                            <div>
                                <strong className="text-white block mb-1">Design with intent</strong>
                                <span>clean, modern, conversion-focused experiences</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-white font-bold opacity-50 text-xl">3.</span>
                            <div>
                                <strong className="text-white block mb-1">Scalable development</strong>
                                <span>fast, secure, future-ready technology</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-white font-bold opacity-50 text-xl">4.</span>
                            <div>
                                <strong className="text-white block mb-1">Growth execution</strong>
                                <span>SEO, performance marketing, and optimization</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-white font-bold opacity-50 text-xl">5.</span>
                            <div>
                                <strong className="text-white block mb-1">Ongoing ownership</strong>
                                <span>maintenance, iteration, and improvement</span>
                            </div>
                        </li>
                    </ol>
                    <div className="pt-6 border-t border-gray-800 text-xl font-medium text-white space-y-2">
                        <p>We don't just launch and leave.</p>
                        <p>We stay, optimize, and grow with our clients.</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Why ChizelLabs</h2>
                        <ul className="space-y-3 text-gray-300 font-light list-disc pl-5">
                            <li>End-to-end digital execution under one roof</li>
                            <li>Business-first thinking, not just technical delivery</li>
                            <li>Speed without sacrificing quality</li>
                            <li>Clear communication and measurable outcomes</li>
                        </ul>
                        <p className="text-white font-medium mt-6">We act like partners, not vendors — because long-term growth requires accountability.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Our Vision</h2>
                        <p className="text-gray-300 font-light text-lg">Our vision is to become a globally trusted digital growth partner for businesses that value speed, clarity, and results.</p>
                        <p className="text-gray-300 font-light text-lg">We're building ChizelLabs as a scalable, systems-driven company — focused on long-term value, not short-term projects.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-16 md:py-24 border-t border-b border-gray-800"
                >
                    <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-6 block">Our Belief</p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
                        Growth is not about doing more.<br />
                        <span className="font-semibold">It's about doing the right things, consistently.</span>
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12">
                        Build smart.<br />Grow fast.
                    </h3>

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