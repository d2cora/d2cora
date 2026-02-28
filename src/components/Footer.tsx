"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
            {/* Very subtle bottom glow */}
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-[100%] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="inline-block">
                        <span className="font-heading font-bold text-2xl lg:text-3xl tracking-wide text-white">
                            ChizelLabs
                        </span>
                    </Link>
                    <p className="text-white/60 font-light text-lg">
                        Build Smart. Grow Fast.
                    </p>
                </div>

                {/* Links Column */}
                <div className="flex gap-12 sm:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-2">Navigation</h4>
                        <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm">Home</Link>
                        <Link href="/services" className="text-white/50 hover:text-white transition-colors text-sm">Services</Link>
                        <Link href="/#projects" className="text-white/50 hover:text-white transition-colors text-sm">Work</Link>
                        <Link href="/about" className="text-white/50 hover:text-white transition-colors text-sm">About</Link>
                        <Link href="/contact" className="text-white/50 hover:text-white transition-colors text-sm">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-2">Socials</h4>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Twitter (X)</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm">Instagram</a>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10 mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
                <p>© {currentYear} ChizelLabs. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
