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
            <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <motion.h1
                            className="bg-linear-to-r mb-6 from-white via-gray-200 to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            About Chizel
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            We are a digital agency focused on crafting beautiful, functional experiences
                            that help businesses grow and succeed in the modern world.
                        </motion.p>
                    </motion.div>

                    {/* Story Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass mb-20 rounded-3xl p-8 md:p-12"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Our Story</h2>
                        <div className="space-y-4 leading-relaxed text-gray-300">
                            <p>
                                Founded with a vision to bridge the gap between creativity and technology,
                                Chizel has grown from a small startup to a trusted partner for businesses
                                looking to make their mark in the digital world.
                            </p>
                            <p>
                                We believe that great design isn't just about aesthetics—it's about creating
                                meaningful experiences that resonate with users and drive real results. Our
                                approach combines strategic thinking with technical expertise to deliver
                                solutions that are both beautiful and effective.
                            </p>
                            <p>
                                Today, we work with clients across various industries, helping them transform
                                their digital presence through innovative web development, thoughtful design,
                                and strategic consulting.
                            </p>
                        </div>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mb-20"
                    >
                        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
                            What We Stand For
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                        className="glass group rounded-2xl p-8 transition-all duration-300 hover:bg-white/10"
                                    >
                                        <div className="bg-linear-to-br mb-4 flex h-12 w-12 items-center justify-center rounded-full from-blue-500 to-purple-600 transition-transform group-hover:scale-110">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-semibold text-white">
                                            {value.title}
                                        </h3>
                                        <p className="leading-relaxed text-gray-400">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                        className="text-center"
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                            Ready to Work Together?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
                            Let's collaborate to bring your vision to life and create something extraordinary.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:bg-gray-100"
                        >
                            Get in Touch
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}