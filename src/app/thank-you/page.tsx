"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
    useEffect(() => {
        // Push event to dataLayer for Google Tag Manager
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'form_submission_success',
                form_name: 'contact_form',
                page_path: '/thank-you'
            });
        }
    }, []);

    return (
        <main
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
            data-page-type="thank-you"
            data-conversion="true"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center justify-center"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-500/30 bg-green-500/10"
                        >
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                        </motion.div>
                        <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="absolute inset-0 rounded-full border-2 border-green-500"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl"
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 text-lg text-gray-400 md:text-xl"
                >
                    Your message has been successfully received. We'll get back to you within 24 hours.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8"
                >
                    <h2 className="mb-3 text-xl font-semibold">What happens next?</h2>
                    <ul className="space-y-3 text-left text-gray-400">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">1</span>
                            <span>We'll review your message and project requirements</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">2</span>
                            <span>Our team will reach out to discuss your project in detail</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">3</span>
                            <span>We'll provide a customized proposal and timeline</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <Link
                        href="/"
                        className="group flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 font-medium text-black transition-all hover:bg-transparent hover:text-white"
                    >
                        Continue to Website
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/contact"
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium transition-all hover:border-white/40 hover:bg-white/10"
                    >
                        Send Another Message
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-sm text-gray-500"
                >
                    Need immediate assistance? Email us at{" "}
                    <a
                        href="mailto:info@d2cora.com"
                        className="text-gray-400 underline transition-colors hover:text-white"
                    >
                        info@d2cora.com
                    </a>
                </motion.p>
            </div>
        </main>
    );
}
