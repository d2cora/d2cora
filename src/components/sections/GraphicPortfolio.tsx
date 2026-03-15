"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { 
  motion, 
  useScroll, 
  useVelocity, 
  useSpring, 
  useTransform, 
  useAnimationFrame, 
  useMotionValue 
} from "framer-motion";
import { Playfair_Display } from "next/font/google";

const funkyFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

// The 19 images from public/assets/Posters
const POSTERS = [
  "1.jpeg", "2.png", "3.png", "4.jpeg", "5.png",
  "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.png", "15.png",
  "16.png", "17.png", "_.jpeg", "image.png"
];

// Helper to shuffle or create infinite-feeling rows
const getRowItems = (startIndex: number, count: number) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(POSTERS[(startIndex + i) % POSTERS.length]);
  }
  return items;
};

// Represents a single looping continuous row
function MarqueeRow({ items, baseVelocity }: { items: string[], baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Smooth out the raw scroll velocity to prevent sudden jerks
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Calculate an extra velocity factor during scrolling
  // Maps scrolling speed linearly (1000px/s -> 5x speed boost)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  useAnimationFrame((t, delta) => {
    // Determine base distance to move this literal hardware tick depending on the loop speed
    let moveBy = baseVelocity * (delta / 1000);

    // Apply the parallax speed boost when scrolling
    moveBy += moveBy * Math.abs(velocityFactor.get());

    let newX = baseX.get() + moveBy;

    // Wrap the container seamlessly between 0% and -50% width since we double-rendered the array
    newX = newX % 50;
    if (newX > 0) newX -= 50;
    if (newX < -50) newX += 50;

    baseX.set(newX);
  });

  const doubleItems = [...items, ...items];

  // Combine calculated % value into CSS transform
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <motion.div 
      className="flex gap-4 md:gap-6 w-max pl-4 md:pl-8"
      style={{ x }}
    >
      {doubleItems.map((fileName, idx) => (
        <div 
          key={idx} 
          className="relative w-[140px] md:w-[200px] lg:w-[260px] h-[190px] md:h-[280px] lg:h-[360px] flex-shrink-0 rounded-xl overflow-hidden group shadow-xl"
        >
          <Image
            src={`/assets/Posters/${fileName}`}
            alt={`Portfolio Poster ${idx}`}
            fill
            className="object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            sizes="(max-w-768px) 300px, 500px"
          />
        </div>
      ))}
    </motion.div>
  );
}

export function GraphicPortfolio() {
  const rowConfigs = [
    { items: getRowItems(0, 7), speed: -1.7 },
    { items: getRowItems(7, 7), speed: -1.2 },
    { items: getRowItems(14, 7), speed: -1.5 },
  ];

  return (
    <section className="w-full py-20 bg-[#111111] overflow-hidden flex flex-col gap-8 md:gap-12 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Funky Heading */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 mb-4 md:mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`${funkyFont.className} text-center w-full text-5xl md:text-7xl lg:text-[7rem] text-[#FDFBF7] tracking-tighter leading-none italic font-black`}
        >
          Our Graphic <span className="text-orange-500">Portfolio</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {rowConfigs.map((config, index) => (
          <MarqueeRow key={index} items={config.items} baseVelocity={config.speed} />
        ))}
      </div>
    </section>
  );
}
