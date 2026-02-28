import { motion } from "framer-motion";
import { ExternalLink, Github, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from 'react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    type: string;
    icon: LucideIcon;
    gradient: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => {
    const Icon = project.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-br group relative overflow-hidden rounded-2xl border border-white/10 from-zinc-900/50 to-black backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10"
        >
            {/* Gradient Overlay on Hover */}
            <div className={`bg-linear-to-br absolute inset-0 z-20 ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-30`} />

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
                <div className="bg-linear-to-br absolute inset-0 rounded-2xl from-white/5 to-transparent" />
            </div>
        </motion.div>
    );
});

ProjectCard.displayName = 'ProjectCard';
