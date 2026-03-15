"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

import { serviceCategories } from "@/lib/constants/services";
import { ServiceCategory } from "./services/ServiceCategory";

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


                {/* Services Categories */}
                <div className="space-y-0">
                    {serviceCategories.map((category, categoryIndex) => (
                        <ServiceCategory
                            key={category.id}
                            category={category}
                            categoryIndex={categoryIndex}
                            hoveredCategory={hoveredCategory}
                            setHoveredCategory={setHoveredCategory}
                            textColor={textColor}
                            borderColor={borderColor}
                        />
                    ))}
                </div>
            </div>



        </motion.section>
    );
}
