"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const websites = [
  {
    name: 'Vini Grow Holidays',
    url: 'https://vinigrowholidays.com',
    description: 'Travel & Tourism Experience',
    category: 'Travel & Visa Assistance',
    color: '#f0fdf4',
    hoverColor: 'hover:bg-emerald-50',
    useScreenshot: true,
  },
  {
    name: 'Tattoos Delhi',
    url: 'https://www.tattoosdelhi.com',
    description: 'Tattoo Studio Portfolio',
    category: 'Lifestyle & Art',
    color: '#f3f4f6',
    hoverColor: 'hover:bg-gray-100',
    useScreenshot: false,
  },
  {
    name: 'Your Brand Next',
    url: '/contact',
    description: 'Premium Digital Experience',
    category: 'Growth & Scaling',
    color: '#f8fafc',
    hoverColor: 'hover:bg-blue-50',
    useScreenshot: true,
    placeholder: true,
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-[90rem] mx-auto px-6 pb-16 pt-36 md:px-12 lg:px-20 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mx-auto max-w-4xl">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#3366FF]">
            Our Portfolio
          </span>
          <h1 className="mt-3 text-5xl font-black leading-[1] tracking-tighter text-black md:text-7xl lg:text-[80px]">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1524ca] to-[#3b82f6]">Canvas</span>
          </h1>
          <p className="mt-6 text-xl font-medium text-gray-500 max-w-2xl mx-auto">
            A curated showcase of the high-performance digital experiences we've crafted for ambitious brands.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Grid */}
      <section className="max-w-[90rem] mx-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {websites.map((site, i) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl p-8 md:p-12 border border-gray-200 transition-all duration-300 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white ${site.hoverColor}`}
            >
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{site.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{site.name}</h3>
                  <p className="text-gray-600 font-medium text-lg">{site.description}</p>
                </div>
                {site.placeholder ? (
                  <Link 
                    href={site.url} 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1524ca] hover:text-blue-600 transition-colors"
                  >
                    Start Project
                  </Link>
                ) : (
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1524ca] hover:text-blue-600 transition-colors"
                  >
                    Visit Live
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl bg-gray-50 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="text-gray-400 font-mono text-sm animate-pulse tracking-widest uppercase">
                    {site.placeholder ? 'Your Website Here' : 'Loading preview...'}
                  </span>
                </div>
                
                {!site.placeholder && (
                  site.useScreenshot ? (
                     <img 
                       src={`https://api.microlink.io/?url=${site.url}&screenshot=true&meta=false&embed=screenshot.url`}
                       alt={`${site.name} preview`}
                       className="absolute inset-0 w-full h-full object-cover object-top border-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                       loading="lazy"
                     />
                  ) : (
                    <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25]">
                      <iframe 
                        src={site.url} 
                        title={site.name}
                        className="absolute inset-0 w-full h-full border-0 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-[#f8f9fa] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3366FF]">Ready for growth?</p>
          <h2 className="mb-6 text-3xl font-black tracking-tighter text-black md:text-5xl">
            Let's build your success story.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#3366FF]"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
