"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export function NewsletterSignup() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");

        if (!email) return;

        setStatus("loading");
        setMessage("");

        try {
            const result = await subscribeToNewsletter(formData);

            if (result.error) {
                setStatus("error");
                setMessage(result.error);
            } else {
                setStatus("success");
                setMessage("Thanks for subscribing! Check your inbox soon.");
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-white mb-2">Join our Newsletter</h3>
                <p className="text-sm text-gray-400">
                    Get practical tips on websites, SEO, and local business growth. No spam.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <div className="relative flex items-center">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all pr-12"
                        disabled={status === "loading" || status === "success"}
                    />
                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="absolute right-1 top-1 bottom-1 aspect-square rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Subscribe"
                    >
                        {status === "loading" ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Send className="w-4 h-4 ml-0.5" />
                        )}
                    </button>
                </div>

                <div className="mt-4 flex items-start gap-3 px-2 text-left">
                    <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                            type="checkbox"
                            id="newsletter-consent"
                            required
                            className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            disabled={status === "loading" || status === "success"}
                        />
                        <div className="w-5 h-5 rounded-md border border-white/30 bg-white/5 transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-white/50 peer-checked:bg-[#2eaa31] peer-checked:border-[#2eaa31]">
                        </div>
                        <svg className="absolute inset-x-auto inset-y-auto w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none stroke-[3.5px] z-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <label htmlFor="newsletter-consent" className="text-xs text-gray-400 cursor-pointer leading-relaxed select-none">
                        I agree to receive emails from ChizelLabs. You can unsubscribe at any time.
                    </label>
                </div>

                <AnimatePresence mode="wait">
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            className={`mt-4 flex items-center justify-center gap-2 text-sm ${status === "success" ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            {status === "success" ? (
                                <CheckCircle2 className="w-4 h-4" />
                            ) : (
                                <AlertCircle className="w-4 h-4" />
                            )}
                            <span className="text-center">{message}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}
