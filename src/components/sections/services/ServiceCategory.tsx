import { motion, MotionValue } from "framer-motion";
import React from 'react';

interface ServiceCategoryType {
    id: number;
    category: string;
    items: string[];
    overview: string;
    problems: string[];
    outcomes: string;
    bestFor: string;
}

interface ServiceCategoryProps {
    category: ServiceCategoryType;
    categoryIndex: number;
    hoveredCategory: number | null;
    setHoveredCategory: (id: number | null) => void;
    textColor: MotionValue<string>;
    borderColor: MotionValue<string>;
}

export const ServiceCategory = React.memo(({
    category,
    categoryIndex,
    hoveredCategory,
    setHoveredCategory,
    textColor,
    borderColor
}: ServiceCategoryProps) => {
    return (
        <motion.div
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
                <motion.div className="overflow-hidden pb-4 md:pb-6">
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

                {/* Service Items & Link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
                    <motion.a
                        href={`/services/${category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="group inline-flex items-center gap-2 font-medium text-lg whitespace-nowrap mt-4 md:mt-0 opacity-70 hover:opacity-100 transition-opacity"
                        style={{ color: textColor }}
                    >
                        Learn More
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
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
    );
});

ServiceCategory.displayName = 'ServiceCategory';
