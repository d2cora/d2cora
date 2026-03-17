"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Award, CheckCircle2, Rocket, Briefcase, Zap, ShieldCheck } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Header Section */}
            <section className="max-w-350 mx-auto px-6 pb-12 pt-40 md:px-12 lg:px-20 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-black md:text-7xl lg:text-[80px]">
                        We Build Digital Systems for <span className="text-[#3366FF]">Real Growth</span>
                    </h1>
                    <div className="space-y-6 text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto text-balance">
                        <p>
                            <span className="text-black font-bold">d2cora</span> was founded on a simple belief: most businesses don't fail online because of lack of effort — they fail because their digital growth is fragmented, slow, and poorly executed.
                        </p>
                        <div className="py-6 px-4 md:px-10 my-8 border-l-4 border-[#3366FF] bg-blue-50/50 rounded-r-3xl text-left italic text-gray-700">
                            <p className="mb-2">Websites are built without strategy.</p>
                            <p className="mb-2">Marketing runs without conversion thinking.</p>
                            <p>Technology scales without clarity.</p>
                        </div>
                        <p className="text-black font-bold text-2xl">
                            d2cora exists to bring focus, ownership, and execution into digital growth.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* From Idea to Scale */}
            <section className="max-w-350 mx-auto px-6 py-16 md:px-12 lg:px-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-8 leading-[1.1]">
                            From Idea to Scale — <br /><span className="text-[#FF5722]">Under One Roof</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg md:text-xl font-medium">
                            <p>We are a digital growth agency specializing in website development, app development, and performance marketing.</p>
                            <p className="text-black font-bold">But more importantly, we build complete digital systems — not isolated services.</p>
                            <p>From strategy and UX to development, SEO, paid marketing, and ongoing maintenance, everything we do is designed around one goal: helping businesses grow faster, smarter, and more predictably.</p>
                        </div>
                    </div>
                    
                    {/* Benefits Card Info-graphic */}
                    <div className="bg-[#1a1a2e] rounded-[40px] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                        <h3 className="text-2xl font-bold mb-8">This integrated approach allows our clients to:</h3>
                        <div className="space-y-6 relative z-10">
                            {[
                                "Launch faster without hiring a full internal team",
                                "Reduce operational complexity",
                                "Focus on growth instead of managing vendors"
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/5 backdrop-blur-sm"
                                >
                                    <CheckCircle2 className="text-[#3366FF] w-8 h-8 shrink-0" />
                                    <span className="text-lg font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Who We Work With */}
            <section className="bg-gray-50 py-24 mt-12">
                <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-6">Who We Work With</h2>
                        <p className="text-xl text-gray-600 font-medium">We partner with ambitious teams to drive real results.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Local service businesses",
                                desc: "that want consistent leads and visibility",
                                bg: "bg-[#3366FF]",
                                textClass: "text-blue-100"
                            },
                            {
                                icon: Rocket,
                                title: "Startup founders & SaaS builders",
                                desc: "who need to launch fast and scale efficiently",
                                bg: "bg-[#FF5722]",
                                textClass: "text-orange-100"
                            },
                            {
                                icon: Briefcase,
                                title: "D2C & e-commerce brands",
                                desc: "looking to improve conversions and customer acquisition",
                                bg: "bg-[#1a1a2e]",
                                textClass: "text-gray-300"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className={`${item.bg} rounded-4xl p-8 md:p-10 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
                            >
                                <div className="absolute -right-6 -top-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-48 h-48" />
                                </div>
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 leading-tight">{item.title}</h3>
                                    <p className={`font-medium text-lg leading-relaxed ${item.textClass}`}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                    >
                        <p className="text-2xl font-bold text-black border-l-4 border-black pl-6 text-left inline-block">
                            No matter the business model, the problem is usually the same: <br className="hidden md:block" />
                            <span className="text-[#FF5722]">growth without structure doesn't scale.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach (Infographic Timeline) */}
            <section className="max-w-350 mx-auto px-6 py-24 md:px-12 lg:px-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-6">Our Approach</h2>
                    <p className="text-2xl text-black font-bold mb-2">We believe clarity beats complexity.</p>
                    <p className="text-xl text-gray-500 font-medium">Every project starts with:</p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="space-y-6">
                        {[
                            { step: "1", title: "Strategy first", desc: "understanding business goals, users, and growth levers", icon: Lightbulb },
                            { step: "2", title: "Design with intent", desc: "clean, modern, conversion-focused experiences", icon: Target },
                            { step: "3", title: "Scalable development", desc: "fast, secure, future-ready technology", icon: Zap },
                            { step: "4", title: "Growth execution", desc: "SEO, performance marketing, and optimization", icon: Rocket },
                            { step: "5", title: "Ongoing ownership", desc: "maintenance, iteration, and improvement", icon: ShieldCheck }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group items-center md:items-start text-center md:text-left"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-gray-900 flex items-center justify-center font-black text-2xl shrink-0 group-hover:bg-[#3366FF] group-hover:text-white transition-colors duration-300">
                                    {item.step}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold text-black mb-2 flex flex-col md:flex-row items-center gap-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-lg text-gray-600 font-medium">{item.desc}</p>
                                </div>
                                <div className="hidden md:flex w-16 h-16 rounded-full bg-blue-50 items-center justify-center text-[#3366FF] shrink-0">
                                    <item.icon className="w-7 h-7" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 bg-[#f8f9fa] rounded-3xl border border-gray-200 text-center"
                    >
                        <p className="text-2xl font-black text-black mb-2">We don't just launch and leave.</p>
                        <p className="text-xl text-gray-600 font-medium">We stay, optimize, and grow with our clients.</p>
                    </motion.div>
                </div>
            </section>

            {/* Why d2cora & Vision */}
            <section className="bg-black py-24 text-white">
                <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 text-white">Why d2cora</h2>
                            <div className="space-y-4 text-white">
                                {[
                                    "End-to-end digital execution under one roof",
                                    "Business-first thinking, not just technical delivery",
                                    "Speed without sacrificing quality",
                                    "Clear communication and measurable outcomes"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <Award className="w-6 h-6 text-[#3366FF] shrink-0 mt-0.5" />
                                        <span className="text-lg font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-xl font-bold text-[#FF5722]">
                                    We act like partners, not vendors — because long-term growth requires accountability.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ delay: 0.2 }}
                            className="bg-[#1a1a2e] rounded-[40px] p-10 md:p-12 border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#3366FF]/20 rounded-full blur-[80px]"></div>
                            <Users className="w-12 h-12 text-[#3366FF] mb-8" />
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-white">Our Vision</h2>
                            <div className="space-y-6 text-gray-300 font-medium text-lg relative z-10">
                                <p className="leading-relaxed">
                                    Our vision is to become a globally trusted digital growth partner for businesses that value speed, clarity, and results.
                                </p>
                                <p className="leading-relaxed">
                                    We're building d2cora as a scalable, systems-driven company — focused on long-term value, not short-term projects.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 block bg-blue-50 px-4 py-2 rounded-full">Our Belief</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-8">
                            Growth is not about doing more.<br />
                            <span className="text-[#3366FF]">It's about doing the right things, consistently.</span>
                        </h2>
                        <h3 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-12 uppercase leading-[0.9]">
                            Build smart.<br />Grow fast.
                        </h3>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-black/20 text-lg hover:bg-[#3366FF]"
                        >
                            Start Your Project
                            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}