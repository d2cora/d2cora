"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const POSTERS = [
  "1.jpeg", "2.png", "3.png", "4.jpeg", "5.png",
  "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.png", "15.png",
  "16.png", "17.png", "_.jpeg", "image.png"
];

const getRowItems = (startIndex: number, count: number) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(POSTERS[(startIndex + i) % POSTERS.length]);
  }
  return items;
};

function MarqueeRow({ items, baseVelocity }: { items: string[], baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    moveBy += moveBy * Math.abs(velocityFactor.get());
    let newX = baseX.get() + moveBy;
    newX = newX % 50;
    if (newX > 0) newX -= 50;
    if (newX < -50) newX += 50;
    baseX.set(newX);
  });

  const doubleItems = [...items, ...items];
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div style={{ overflow: "hidden", contain: "layout style" }}>
      <motion.div
        className="flex gap-4 md:gap-6 w-max pl-4 md:pl-8"
        style={{ x, willChange: "transform" }}
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
              sizes="(max-width: 768px) 300px, 500px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function GraphicPortfolio() {
  const rowConfigs = [
    { items: getRowItems(0, 7), speed: -1.7 },
    { items: getRowItems(7, 7), speed: -1.2 },
    { items: getRowItems(14, 7), speed: -1.5 },
  ];

  return (
    <section className="w-full bg-[#111111] overflow-hidden flex flex-col relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Graphic Portfolio heading + marquee */}
      <div className="py-20 flex flex-col gap-8 md:gap-12">
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
      </div>

      {/* Case Study spotlight */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-20 md:px-12 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4">
             <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5722] mb-3 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse"></span>
                   Featured Case Study
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3366FF] to-[#3b82f6]">Work</span></h3>
             </div>
             <Link
               href="/case-studies"
               className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white pb-2"
             >
               View All Work
               <ArrowRight className="h-4 w-4" />
             </Link>
          </div>

          <Link href="/case-studies/vini-grow-holidays" className="group block relative">
            {/* Glow effect behind the card */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#3366FF] via-[#8A2BE2] to-[#FF5722] opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-50 group-hover:blur-3xl"></div>
            
            <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2rem] border border-white/10 bg-[#161616]/90 backdrop-blur-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
              
              {/* Left Side: Visual/Branding */}
              <div className="relative lg:w-2/5 p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                 {/* Decorative background shapes */}
                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#3366FF] opacity-20 blur-[80px] mix-blend-screen transition-transform duration-1000 group-hover:scale-150"></div>
                 <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#FF5722] opacity-10 blur-[80px] mix-blend-screen transition-transform duration-1000 group-hover:scale-150"></div>
                 
                 <div className="relative z-10 flex flex-col h-full min-h-[300px]">
                    <div>
                       <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md mb-8 shadow-sm">
                         Travel & Visa Agency
                       </span>
                       <div className="flex items-center gap-5">
                         <div className="h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-white">
                           <Image
                             src="/assets/case-studies/vini-grow/logo.jpg"
                             alt="Vini Grow Holidays"
                             width={80}
                             height={80}
                             className="h-full w-full object-cover"
                           />
                         </div>
                         <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">Vini Grow<br />Holidays</h4>
                       </div>
                    </div>
                    
                    <div className="mt-auto pt-12">
                        <div className="flex flex-wrap gap-2">
                          {["Performance Marketing", "SEO", "Website Redesign", "AI Search"].map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] md:text-xs font-semibold text-gray-300 backdrop-blur-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                 </div>
              </div>

              {/* Right Side: Data/Action */}
              <div className="relative lg:w-3/5 p-8 md:p-12 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center bg-gradient-to-bl from-white/[0.02] to-transparent">
                 <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-10 lg:mb-12">
                    37 qualified leads. 155 WhatsApp conversations. Page 1 Google rankings.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FF8A65]">In record time.</span>
                 </h4>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                    {[
                      { v: "37", l: "Qualified Leads", prefix: "" },
                      { v: "6.14", l: "Cost Per Lead", prefix: "₹" },
                      { v: "26.9K", l: "Total Reached", prefix: "" },
                    ].map((s) => (
                      <div key={s.l} className="flex flex-col justify-center border border-white/5 bg-white/5 rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/10 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <p className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                          {s.prefix && <span className="text-[#3366FF] text-xl md:text-2xl mr-1 font-bold">{s.prefix}</span>}
                          {s.v}
                        </p>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{s.l}</p>
                      </div>
                    ))}
                 </div>
                 
                 <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white transition-colors group-hover:text-[#3366FF] w-max">
                    Read Full Case Study
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                 </div>
              </div>
            </div>
          </Link>
          
          {/* Mobile view all link */}
          <Link
             href="/case-studies"
             className="md:hidden mt-8 inline-flex w-full justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
           >
             View All Work
             <ArrowRight className="h-4 w-4" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
