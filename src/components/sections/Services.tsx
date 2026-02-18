"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const serviceCategories = [
    {
        id: 1,
        category: "Brand Design",
        items: ["Identity Design", "Product Design", "Brand Assets", "Packaging"],
    },
    {
        id: 2,
        category: "Video Ads & Motion Content",
        items: ["AI Video Ads", "Short-Form Video Creation", "AI UGC-Style Video Ads", "Product Demo & Explainer Videos"],
    },
    {
        id: 3,
        category: "UI/UX",
        items: ["User Research", "UI/UX Design", "Micro Interaction", "Prototyping"],
    },
    {
        id: 4,
        category: "Web",
        items: ["Website Development", "App Development", "Interactive Design", "E- commerce"],
    },
];

export function Services() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Background color transition: black -> white -> black (more gradual)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.85, 1],
        ["#000000", "#000000", "#ffffff", "#ffffff", "#000000", "#000000"]
    );

    // Text color transition: white -> black -> white (more gradual)
    const textColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.85, 1],
        ["#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff"]
    );

    // Border color transition: white/20 -> black/20 -> white/20 (more gradual)
    const borderColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.7, 0.85, 1],
        ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.2)"]
    );

    return (
        <motion.section
            id="services"
            ref={sectionRef}
            className="pt-0 pb-20 relative overflow-hidden"
            style={{ backgroundColor }}
        >
            {/* Top separator line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: borderColor }}
            />

            {/* Animated marquee text at top */}
            <div className="overflow-hidden whitespace-nowrap mb-20 relative">
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <span className="text-[120px] md:text-[200px] font-light tracking-tight">
                        <motion.span className="font-bold opacity-100" style={{ color: textColor }}>©</motion.span>
                        <motion.span className="opacity-10" style={{ color: textColor }}> services </motion.span>
                        <motion.span className="font-bold opacity-100" style={{ color: textColor }}>©</motion.span>
                        <motion.span className="opacity-10" style={{ color: textColor }}> services </motion.span>
                        <motion.span className="font-bold opacity-100" style={{ color: textColor }}>©</motion.span>
                        <motion.span className="opacity-10" style={{ color: textColor }}> services</motion.span>
                    </span>
                </motion.div>

                {/* Bottom line for marquee section */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: borderColor }}
                />
            </div>

            <div className="px-6 md:px-16 relative z-10">
                {/* Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.p 
                        className="text-sm font-semibold"
                        style={{ color: textColor }}
                    >
                        Currently focusing on web development — reach out for availability on other services.
                    </motion.p>
                </motion.div>

                {/* Services Categories */}
                <div className="space-y-0">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="relative py-12 md:py-16 border-b"
                            style={{ borderColor }}
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <div className="space-y-10 md:space-y-14">
                                {/* Category Title with typewriter animation */}
                                <motion.div className="overflow-hidden">
                                    <motion.h2
                                        className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight cursor-pointer"
                                        style={{ color: textColor }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                                    >
                                        {category.category.split("").map((char, charIndex) => (
                                            <motion.span
                                                key={charIndex}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.1,
                                                    delay: categoryIndex * 0.2 + charIndex * 0.08
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.h2>
                                </motion.div>

                                {/* Service Items */}
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg md:text-xl">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.span
                                            key={itemIndex}
                                            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                                            style={{ color: textColor }}
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Animated yellow line overlapping the border at bottom on hover */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-yellow-500 z-15"
                                initial={{ width: 0 }}
                                animate={{
                                    width: hoveredCategory === category.id ? "100%" : 0
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>



        </motion.section>
    );
}
