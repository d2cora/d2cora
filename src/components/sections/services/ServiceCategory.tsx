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
    quote?: string;
    images?: string[];
}

interface ServiceCategoryProps {
    category: ServiceCategoryType;
    categoryIndex: number;
    hoveredCategory: number | null;
    setHoveredCategory: (id: number | null) => void;
    
    
}

export const ServiceCategory = React.memo(({
    category,
    categoryIndex,
    hoveredCategory,
    setHoveredCategory,
    
    
}: ServiceCategoryProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="relative py-12 md:py-16 border-b border-black/15 overflow-hidden"
            style={{  }}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
        >
            {/* Floating Background Images */}
            {category.images && category.images.map((src, i) => (
                <div
                    key={i}
                    className="absolute top-0 bottom-0 pointer-events-none z-0"
                    style={{
                        right: i === 0 ? '1%' : 'auto',
                        left: i === 1 
                            ? (category.id === 3 ? '52%' : (category.id === 1 ? '45%' : '28%')) 
                            : (i === 2 ? '8%' : 'auto'),
                        width: category.id === 1 ? '20%' : '22%',
                        maxWidth: category.id === 1 ? '280px' : '300px',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain opacity-[0.15] select-none"
                        style={{ filter: 'drop-shadow(0 8px 32px rgba(255,87,34,0.15))' }}
                    />
                </div>
            ))}
            <div className="space-y-10 md:space-y-14">
                {/* Category Title & Quote */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <motion.div className="overflow-hidden pb-2 md:pb-4">
                        <motion.h2
                            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight cursor-pointer text-[#1a1a1a]"
                            
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

                    {/* Premium, Minimalist Quote Design */}
                    {category.quote && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.4 }}
                            className="pl-4 md:pl-6 border-l-2 max-w-3xl mt-4"
                            style={{  }}
                        >
                            <motion.p 
                                className="text-xl md:text-2xl font-light italic leading-relaxed opacity-90"
                                style={{ 
                                    fontFamily: 'var(--font-space-grotesk)',
                                    color: "#1a1a1a" 
                                }}
                            >
                                "{category.quote.split(/(\*.*?\*)/g).map((part, i) => {
                                    if (part.startsWith('*') && part.endsWith('*')) {
                                        return <span key={i} className="text-[#FF5722] font-medium not-italic">{part.slice(1, -1)}</span>;
                                    }
                                    return <span key={i}>{part}</span>;
                                })}"
                            </motion.p>
                        </motion.div>
                    )}
                </div>

                {/* Service Items & Link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg md:text-xl text-[#1a1a1a]">
                        {category.items.map((item, itemIndex) => (
                            <motion.span
                                key={itemIndex}
                                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                                
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                    <motion.a
                        href={`/services/${category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="group inline-flex items-center gap-2 font-medium text-lg whitespace-nowrap mt-4 md:mt-0 opacity-70 hover:opacity-100 transition-opacity text-[#1a1a1a]"
                        
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
