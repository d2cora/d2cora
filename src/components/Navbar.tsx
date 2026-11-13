"use client";

import Image from "next/image";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

import React, { useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = React.memo(function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRootElement(document.body);
        }
    }, []);

    useEffect(() => {
        const detectBackgroundBrightness = () => {
            setScrolled(window.scrollY > 50);

            // Get the element at the navbar position (center of viewport, top area)
            const navbarHeight = 100; // Approximate navbar area
            const centerX = window.innerWidth / 2;
            const checkY = navbarHeight; // Check just below the navbar

            // Get the element at that position
            const element = document.elementFromPoint(centerX, checkY);

            if (element) {
                // Get computed background color
                let currentElement: Element | null = element;
                let backgroundColor = 'transparent';

                // Traverse up the DOM tree to find a non-transparent background
                while (currentElement && currentElement !== document.body) {
                    const style = window.getComputedStyle(currentElement);
                    const bgColor = style.backgroundColor;

                    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                        backgroundColor = bgColor;
                        break;
                    }
                    currentElement = currentElement.parentElement;
                }

                // Parse RGB values and calculate brightness
                const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (rgbMatch) {
                    const r = parseInt(rgbMatch[1]);
                    const g = parseInt(rgbMatch[2]);
                    const b = parseInt(rgbMatch[3]);

                    // Calculate perceived brightness (YIQ formula)
                    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

                    // If brightness is above 128 (out of 255), it's a light background
                    setIsDarkBackground(brightness < 128);
                } else {
                    // Default to dark if we can't determine
                    setIsDarkBackground(true);
                }
            }
        };

        window.addEventListener("scroll", detectBackgroundBrightness);
        // Add a small delay on mount to ensure DOM is ready
        const timer = setTimeout(detectBackgroundBrightness, 100);

        return () => {
            window.removeEventListener("scroll", detectBackgroundBrightness);
            clearTimeout(timer);
        };
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

    const navLinks = useMemo(() => [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/case-studies", label: "Our Work" },
        { href: "/blog", label: "Blog" },
    ], []);

    const handleLinkClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

    if (pathname?.startsWith('/studio')) return null;

    return (
        <>
            {/* Mobile Navbar - Simple flat design */}
            <div className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 md:hidden ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className="flex h-16 items-center justify-between px-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="z-50 flex items-center transition-opacity hover:opacity-90"
                        onClick={handleLinkClick}
                    >
                        <Image
                            src="/assets/d2cora full.svg"
                            alt="d2cora"
                            width={110}
                            height={110}
                            className="cursor-pointer"
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-2 z-50">
                        <Link
                            href="/contact"
                            className="rounded-full bg-[#1524ca] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-600"
                        >
                            Book a Call
                        </Link>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white/70 transition-colors hover:text-white p-1"
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
            </div>

            {/* Desktop Navbar - Seamless Full Width */}
            <div className="fixed left-0 right-0 top-0 z-50 hidden w-full md:block">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className={`relative w-full overflow-hidden px-4 transition-all duration-500 lg:px-8 ${!scrolled
                        ? "bg-transparent"
                        : isDarkBackground
                            ? "bg-black/60 backdrop-blur-2xl"
                            : "bg-white/60 backdrop-blur-2xl"
                        }`}
                    style={
                        scrolled
                            ? {
                                backdropFilter: "blur(20px) saturate(180%)",
                                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                            }
                            : {}
                    }
                >
                    {/* Grain texture overlay */}
                    <div
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-10" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundSize: '100px 100px',
                            mixBlendMode: 'overlay',
                        }}
                    />
                    <div className="mx-auto relative z-10 flex h-16 max-w-7xl items-center lg:h-20">

                        {/* Left — d2cora Logo */}
                        <div className="flex-1 flex items-center">
                            <Link href="/">
                                <Image
                                    src="/assets/d2cora full.svg"
                                    alt="d2cora"
                                    width={130}
                                    height={130}
                                    className="rounded-full cursor-pointer hover:opacity-90 transition-opacity"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Centre — Navigation links */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-xs font-normal transition-colors duration-300 md:text-sm ${isDarkBackground
                                        ? "text-white/80 hover:text-white"
                                        : "text-black/80 hover:text-black"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right — CTAs */}
                        <div className="flex-1 hidden items-center justify-end gap-3 md:flex lg:gap-4">
                            <Link
                                href="/founder-brand-audit"
                                className={`hidden xl:inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${isDarkBackground
                                    ? "border-white/20 text-white/80 hover:border-white hover:text-white hover:bg-white/5"
                                    : "border-black/20 text-black/80 hover:border-black hover:text-black hover:bg-black/5"
                                    }`}
                            >
                                <span>Free Growth Audit</span>
                            </Link>
                            {/* Primary CTA Button */}
                            <Link
                                href="/contact"
                                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold backdrop-blur-sm transition-all duration-300 md:px-5 md:py-2.5 md:text-sm lg:gap-2 ${isDarkBackground
                                    ? "border-white/30 bg-white text-black hover:bg-white/90 shadow-sm"
                                    : "border-black/30 bg-black text-white hover:bg-neutral-800 shadow-sm"
                                    }`}
                            >
                                <span>Book a Call</span>
                                <svg className="hidden h-4 w-4 lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.nav>
            </div>

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
                            <div className="flex h-full flex-col px-6 pt-24 relative">
                                {/* Close Menu Button */}
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="absolute right-6 top-6 text-white/70 p-2 transition-colors hover:text-white"
                                    aria-label="Close menu"
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
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

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

                                {/* Multiple Call Booking CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 flex flex-col gap-3"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={handleLinkClick}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1524ca] px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-600"
                                    >
                                        <span>Book a 30-Min Strategy Call</span>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/founder-brand-audit"
                                        onClick={handleLinkClick}
                                        className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white/90 transition-all hover:bg-white/10 hover:text-white"
                                    >
                                        <span>Get Free Growth &amp; SEO Audit</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {isCalendlyOpen && rootElement && (
                <PopupModal
                    url="https://calendly.com/d2cora22"
                    onModalClose={() => setIsCalendlyOpen(false)}
                    open={isCalendlyOpen}
                    rootElement={rootElement}
                />
            )}
        </>
    );
});
