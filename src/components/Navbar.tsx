"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#services", label: "Services" },
        { href: "/#projects", label: "Work" },
        { href: "/#process", label: "Process" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity z-50"
                            onClick={handleLinkClick}
                        >
                            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                                <span className="text-black font-bold text-lg">C</span>
                            </div>
                            <span className="text-lg font-semibold">Chizel</span>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-normal"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side - CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 border border-white/30 rounded-full text-sm text-white hover:bg-white hover:text-black transition-all duration-300 font-normal"
                            >
                                Let's Connect
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white/70 hover:text-white transition-colors z-50"
                            aria-label="Menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 px-6">
                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={handleLinkClick}
                                                className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-normal"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={handleLinkClick}
                                        className="block w-full px-6 py-3 border border-white/30 rounded-full text-center text-sm text-white hover:bg-white hover:text-black transition-all duration-300 font-normal"
                                    >
                                        Let's Connect
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
