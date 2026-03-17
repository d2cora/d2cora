"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { serviceCategories } from "@/lib/constants/services";
import { ServiceCategory } from "./services/ServiceCategory";

export function Services() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#f4f0e6] pb-20 pt-0"
        >
            {/* Top separator line */}
            <div
                className="bg-black/15 absolute left-0 right-0 top-0 h-0.5"
            />

            {/* Animated marquee text at top */}
            <div className="relative mb-20 overflow-hidden whitespace-nowrap">
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <span className="text-[120px] font-light tracking-tight md:text-[200px]">
                        <span className="font-bold text-[#1a1a1a] opacity-100">©</span>
                        <span className="text-[#1a1a1a] opacity-10"> services </span>
                        <span className="font-bold text-[#1a1a1a] opacity-100">©</span>
                        <span className="text-[#1a1a1a] opacity-10"> services </span>
                        <span className="font-bold text-[#1a1a1a] opacity-100">©</span>
                        <span className="text-[#1a1a1a] opacity-10"> services</span>
                    </span>
                </motion.div>

                {/* Bottom line for marquee section */}
                <div
                    className="bg-black/15 absolute bottom-0 left-0 right-0 h-0.5"
                />
            </div>

            <div className="relative z-10 px-6 md:px-16">
                {/* Services Categories */}
                <div className="space-y-0">
                    {serviceCategories.map((category, categoryIndex) => (
                        <ServiceCategory
                            key={category.id}
                            category={category}
                            categoryIndex={categoryIndex}
                            hoveredCategory={hoveredCategory}
                            setHoveredCategory={setHoveredCategory}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
