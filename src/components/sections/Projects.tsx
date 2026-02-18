"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "B4CKTR4C3",
        description: "Modern web application built with cutting-edge technologies, featuring a clean design and seamless user experience.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://b4cktr4c3.tech",
        github: "https://github.com/b4cktr4c3/b4cktr4c3",
        type: "web",
        icon: Globe,
        gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
        title: "Statistic",
        description: "Cross-platform mobile application with native performance, delivering beautiful UI and smooth animations for tracking and analyzing data.",
        tags: ["Flutter", "Dart", "Firebase"],
        link: "#",
        github: "https://github.com/Rahul-Singh-Bora/Statistic",
        type: "mobile",
        icon: Smartphone,
        gradient: "from-cyan-600/20 to-blue-600/20"
    }
];

export function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-black px-4 py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-end justify-between border-b border-white/10 pb-8 md:flex-row"
                >
                    <div>
                        <h2 className="mb-4 font-heading text-4xl font-bold uppercase tracking-tighter md:text-6xl">
                            Our Work
                        </h2>
                        <p className="text-gray-400 font-light">
                            Selected projects that showcase our expertise
                        </p>
                    </div>
                    <span className="mb-2 text-sm font-light uppercase tracking-widest text-gray-500">
                        {projects.length.toString().padStart(2, '0')} Projects
                    </span>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10"
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 z-20 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-30`} />

                                {/* Content */}
                                <div className="relative z-30 p-8 md:p-10">
                                    {/* Icon & Type */}
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10">
                                            <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-gray-500">
                                            {project.type}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="mb-6 space-y-4">
                                        <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="leading-relaxed text-gray-400">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-400 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:text-white"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        {project.link !== "#" && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-400 transition-all duration-300 hover:gap-3 hover:text-white"
                                            >
                                                View Project
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        )}
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-400 transition-all duration-300 hover:gap-3 hover:text-white"
                                        >
                                            GitHub
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center pt-8"
                >
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium uppercase tracking-wider transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
                    >
                        <span className="relative z-10">Have a Project in Mind?</span>
                        <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
