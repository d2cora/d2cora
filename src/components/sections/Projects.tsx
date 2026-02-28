"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/constants/projects";
import { ProjectCard } from "./projects/ProjectCard";

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
                        <h2 className="font-heading mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl">
                            Our Work
                        </h2>
                        <p className="font-light text-gray-400">
                            Selected projects that showcase our expertise
                        </p>
                        <p className="mt-2 text-sm font-semibold text-gray-300">
                            Currently focused on landing pages and small business websites.
                        </p>
                    </div>
                    <span className="mb-2 text-sm font-light uppercase tracking-widest text-gray-500">
                        {projects.length.toString().padStart(2, '0')} Projects
                    </span>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project as typeof projects[0]} index={index} />
                    ))}
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
