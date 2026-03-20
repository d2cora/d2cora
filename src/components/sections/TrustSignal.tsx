"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TrustSignal() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start 20%"]
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["#FDFBF7", "#86c6a6ff"] // Warm White to Light Mint Green
    );

    return (
        <motion.section 
            ref={containerRef}
            className="relative z-10 w-full overflow-hidden border-b border-black/5 py-16 md:py-24"
            style={{ backgroundColor }}
        >
            {/* Subtle Grain Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                }}
            />

            <div className="max-w-350 relative z-10 mx-auto flex flex-col items-start justify-between gap-12 px-4 md:px-12 lg:flex-row lg:gap-32 lg:px-20">
                
                {/* Text Section - Takes ~40% space on desktop */}
                <div className="flex w-full shrink-0 flex-col justify-start space-y-6 pt-4 lg:w-[40%] lg:space-y-8 lg:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-3xl font-bold leading-snug tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
                            Trusted by founders and business owners who value ROI over hype.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border-l-2 border-orange-500 pl-6"
                    >
                        <p className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
                            From local service businesses to scaling SaaS platforms, we partner with teams that demand predictable growth and clear execution.
                        </p>
                    </motion.div>
                </div>

                {/* Dashboard Mockup Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="min-h-125 rounded-4xl md:min-h-150 lg:min-h-200 relative flex w-full shrink-0 flex-col overflow-hidden border border-neutral-200 bg-white p-6 shadow-xl lg:ml-auto lg:w-[50%]"
                >
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 3v18h18" />
                                    <path d="m19 9-5 5-4-4-3 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">Campaign Performance</h3>
                                <p className="text-xs text-gray-500">Google Ads Overview</p>
                            </div>
                        </div>
                        <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                            Last 30 Days
                        </div>
                    </div>

                    {/* Metric Scorecards */}
                    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4 whitespace-nowrap">
                        <div className="flex flex-col border-b-2 border-blue-500 pb-3">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Clicks <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            <span className="mt-2 flex items-baseline gap-2 text-2xl font-bold text-gray-900">
                                45.2K <span className="text-xs font-medium text-emerald-500">+12%</span>
                            </span>
                        </div>
                        <div className="flex flex-col border-b-2 border-transparent pb-3 opacity-70 transition-opacity hover:opacity-100 cursor-default">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Impressions
                            </span>
                            <span className="mt-2 flex items-baseline gap-2 text-2xl font-bold text-gray-900">
                                1.2M <span className="text-xs font-medium text-emerald-500">+8%</span>
                            </span>
                        </div>
                        <div className="flex flex-col border-b-2 border-transparent pb-3 opacity-70 transition-opacity hover:opacity-100 cursor-default">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Avg. CPC
                            </span>
                            <span className="mt-2 flex items-baseline gap-2 text-2xl font-bold text-gray-900">
                                $0.84 <span className="text-xs font-medium text-red-500">+2%</span>
                            </span>
                        </div>
                        <div className="flex flex-col border-b-2 border-orange-500 pb-3">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Conversions <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
                            </span>
                            <span className="mt-2 flex items-baseline gap-2 text-2xl font-bold text-gray-900">
                                2,845 <span className="text-xs font-medium text-emerald-500">+24%</span>
                            </span>
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative mt-auto flex min-h-[220px] w-full flex-1 items-end">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 z-10 flex h-full w-8 flex-col justify-between py-4 text-[10px] font-medium text-gray-400">
                            <span>4k</span>
                            <span>3k</span>
                            <span>2k</span>
                            <span>1k</span>
                            <span>0</span>
                        </div>
                        
                        {/* Grid lines */}
                        <div className="absolute inset-0 z-0 flex flex-col justify-between pl-8 py-5">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-0 w-full border-t border-dashed border-gray-200" />
                            ))}
                        </div>

                        {/* Chart SVG */}
                        <div className="absolute inset-0 z-20 overflow-hidden pl-8 pb-5 pt-5">
                            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 500 200">
                                {/* Gradient Fills */}
                                <defs>
                                    <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                    </linearGradient>
                                    
                                    {/* Drop Shadow for Lines */}
                                    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.1" />
                                    </filter>
                                </defs>
                                
                                {/* Clicks Area & Line (Blue) */}
                                <motion.path 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.4 }}
                                    d="M0,150 C50,120 100,160 150,110 C200,60 250,80 300,50 C350,20 400,60 450,30 L500,40 L500,200 L0,200 Z"
                                    fill="url(#blue-grad)" 
                                />
                                <motion.path 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d="M0,150 C50,120 100,160 150,110 C200,60 250,80 300,50 C350,20 400,60 450,30 L500,40"
                                    fill="none" 
                                    stroke="#3b82f6" 
                                    strokeWidth="3.5" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#shadow)"
                                    vectorEffect="non-scaling-stroke"
                                />

                                {/* Conversions Area & Line (Orange) */}
                                <motion.path 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.6 }}
                                    d="M0,180 C60,170 120,185 180,150 C240,115 300,130 360,90 C420,50 460,70 500,20 L500,200 L0,200 Z"
                                    fill="url(#orange-grad)" 
                                />
                                <motion.path 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                    d="M0,180 C60,170 120,185 180,150 C240,115 300,130 360,90 C420,50 460,70 500,20"
                                    fill="none" 
                                    stroke="#f97316" 
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    filter="url(#shadow)"
                                    vectorEffect="non-scaling-stroke" 
                                />
                                
                                {/* Points on the Orange Line */}
                                <circle cx="360" cy="90" r="4" fill="#fff" stroke="#f97316" strokeWidth="2" />
                                <circle cx="500" cy="20" r="4" fill="#fff" stroke="#f97316" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
