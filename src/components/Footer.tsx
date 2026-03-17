"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const products = [
        { name: "PERFORMANCE MARKETING", href: "/services/performance-marketing" },
        { name: "SOCIAL MEDIA MARKETING", href: "/services/social-media-marketing" },
        { name: "CONTENT MARKETING", href: "/services/content-marketing" },
    ];

    const quickLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "SERVICES", href: "/services" },
        { name: "OUR WORK", href: "/#projects" },
        { name: "BLOGS", href: "/blogs" },
        { name: "CONTACT US", href: "/contact" },
    ];



    return (
        <footer className="w-full bg-white pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="relative w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
                                <Image
                                    src="/assets/d2cora.svg"
                                    alt="d2cora logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Links & Social Container */}
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-16 xl:gap-24 pt-4">

                        {/* Products Column */}
                        <div>
                            <h4 className="text-[#001A33] font-bold text-sm tracking-[0.15em] uppercase mb-6">Products</h4>
                            <ul className="space-y-3">
                                {products.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-[#001A33] hover:text-[#3366FF] transition-colors text-sm font-semibold tracking-wide"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="text-[#001A33] font-bold text-sm tracking-[0.15em] uppercase mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-[#001A33] hover:text-[#3366FF] transition-colors text-sm font-semibold tracking-wide"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social & Tagline Column */}
                        <div className="flex flex-col items-start">
                            <p className="text-[#001A33] font-bold text-sm tracking-widest uppercase mb-6">
                                IF IT'S D2C, IT'S d2cora
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/d2cora"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center text-[#001A33] hover:bg-[#001A33] hover:text-white transition-all duration-300"
                                >
                                    <Instagram size={15} />
                                </a>
                                <a
                                    href="https://twitter.com/d2cora"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center text-[#001A33] hover:bg-[#001A33] hover:text-white transition-all duration-300"
                                >
                                    <Twitter size={15} />
                                </a>
                                <a
                                    href="https://linkedin.com/company/d2cora"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center text-[#001A33] hover:bg-[#001A33] hover:text-white transition-all duration-300"
                                >
                                    <Linkedin size={15} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Brand Name */}
                <div className="relative pointer-events-none select-none overflow-hidden py-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="text-[15vw] lg:text-[18vw] font-bold text-[#000d1a] opacity-[0.06] tracking-tighter leading-[0.8] text-center"
                    >
                        d2cora
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="absolute inset-0 text-[15vw] lg:text-[18vw] font-bold text-[#001A33] opacity-[0.04] tracking-tighter leading-[0.8] text-center mt-4"
                    >
                        d2cora
                    </motion.h2>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-bold tracking-[0.2em] text-black uppercase">
                        © {currentYear} d2cora. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="text-sm font-bold tracking-[0.2em] text-black hover:text-[#3366FF] transition-colors uppercase">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="text-sm font-bold tracking-[0.2em] text-black hover:text-[#3366FF] transition-colors uppercase">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
