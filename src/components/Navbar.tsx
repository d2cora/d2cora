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
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="z-50 flex items-center gap-2 text-white transition-opacity hover:opacity-90"
                            onClick={handleLinkClick}
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white">
                                <span className="text-lg font-bold text-black">C</span>
                            </div>
                            <span className="text-lg font-semibold">Chizel</span>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-10 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-normal text-white/80 transition-colors duration-300 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side - CTA */}
                        <div className="hidden items-center gap-4 md:flex">
                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                Let's Connect
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="z-50 text-white/70 transition-colors hover:text-white md:hidden"
                            aria-label="Menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <svg
                                className="h-6 w-6"
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
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="w-70 fixed bottom-0 right-0 top-0 z-50 border-l border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
                        >
                            <div className="flex h-full flex-col px-6 pt-24">
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
                                                className="block rounded-lg px-4 py-3 font-normal text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
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
                                        className="block w-full rounded-full border border-white/30 px-6 py-3 text-center text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
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
