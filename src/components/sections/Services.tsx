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
            className="pt-0 pb-20 relative overflow-hidden bg-[#f4f0e6]"
        >
            {/* Top separator line */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-black/15"
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
                        <span className="font-bold opacity-100 text-[#1a1a1a]">©</span>
                        <span className="opacity-10 text-[#1a1a1a]"> services </span>
                        <span className="font-bold opacity-100 text-[#1a1a1a]">©</span>
                        <span className="opacity-10 text-[#1a1a1a]"> services </span>
                        <span className="font-bold opacity-100 text-[#1a1a1a]">©</span>
                        <span className="opacity-10 text-[#1a1a1a]"> services</span>
                    </span>
                </motion.div>

                {/* Bottom line for marquee section */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/15"
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
