"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
    });

    const [isFlipping, setIsFlipping] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const cardRef2 = useRef<HTMLDivElement>(null);

    // First card motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 90,
        damping: 30
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 90,
        damping: 30
    });

    // Second card motion values
    const mouseX2 = useMotionValue(0);
    const mouseY2 = useMotionValue(0);

    const rotateX2 = useSpring(useTransform(mouseY2, [-0.5, 0.5], [10, -10]), {
        stiffness: 90,
        damping: 30
    });
    const rotateY2 = useSpring(useTransform(mouseX2, [-0.5, 0.5], [-10, 10]), {
        stiffness: 90,
        damping: 30
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef2.current) return;
        const rect = cardRef2.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX2.set(x);
        mouseY2.set(y);
    };

    const handleMouseLeave2 = () => {
        mouseX2.set(0);
        mouseY2.set(0);
    };

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            // Web3Forms expects specific field names
            const form = new FormData();
            form.append("access_key", "fae0e850-8311-4ef3-b39b-081e3f5197f7");
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("message", formData.message);
            form.append("subject", formData.subject || "New Inquiry from Website");
            
            // Add optional fields
            if (formData.whatsapp) {
                form.append("phone", formData.whatsapp);
            }
            
            // Important: Tell Web3Forms not to redirect (for API usage)
            form.append("redirect", "false");
            
            // Add botcheck (honeypot field for spam prevention)
            form.append("botcheck", "");

            console.log("Submitting form with data:", {
                name: formData.name,
                email: formData.email,
                hasPhone: !!formData.whatsapp,
                subject: formData.subject || "New Inquiry from Website"
            });

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form
            });

            // Parse response first
            const result = await response.json();

            // Check if request was successful
            if (!response.ok) {
                // Web3Forms returns error details in the response
                const errorMessage = result.message || `HTTP error! status: ${response.status}`;
                console.error("API Error:", result);
                throw new Error(errorMessage);
            }

            if (result.success) {
                // Push event to dataLayer for Google Tag Manager
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: 'form_submission_success',
                        form_name: 'contact_form',
                        form_data: {
                            name: formData.name,
                            email: formData.email,
                            subject: formData.subject
                        }
                    });
                }
                
                // Redirect to thank you page
                router.push('/thank-you');
            } else {
                console.error("Failed to send message:", result);
                const errorMessage = result.message || "Something went wrong";
                alert(`${errorMessage}. Please try again or email us directly at chizel.dev@gmail.com`);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMsg = error instanceof Error ? error.message : "Unknown error";
            alert(`Connection error: ${errorMsg}. Please try again or email us directly at chizel.dev@gmail.com`);
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-black pb-16 pt-24 text-white">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl">
                        Get In Touch
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Have a project in mind? Let's discuss how we can bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid items-start gap-12 md:grid-cols-2">
                    {/* Contact Form with Liquid Glass Effect and Book Animation */}
                    <motion.div
                        ref={cardRef}
                        initial={{ opacity: 0, rotateY: -15 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{
                            duration: 2.67,
                            ease: "easeOut"
                        }}
                        style={{
                            perspective: 1000,
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="group relative"
                    >
                        {/* Contact Form Card */}
                        <div 
                            className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-xl md:p-10"
                            data-form-type="contact"
                        >
                            <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                    data-form-name="contact_form"
                                    id="contact-form"
                                >
                                    <div className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.33 }}
                                        >
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-1000 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                                                placeholder="Your name"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.67 }}
                                        >
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-1000 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                                                placeholder="your@email.com"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.8 }}
                                        >
                                            <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-gray-300">
                                                WhatsApp Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="whatsapp"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-1000 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.0 }}
                                        >
                                            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-1000 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                                                placeholder="Project inquiry"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 2.33 }}
                                        >
                                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 transition-all duration-1000 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSending}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.67 }}
                                        whileHover={{ scale: isSending ? 1 : 1.02 }}
                                        whileTap={{ scale: isSending ? 1 : 0.98 }}
                                        className={`bg-linear-to-r group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl from-white via-white to-gray-100 px-8 py-4 font-medium text-black transition-all duration-1000 hover:shadow-2xl hover:shadow-white/20 ${isSending ? 'cursor-wait opacity-70' : ''}`}
                                    >
                                        <Send className={`relative z-10 h-5 w-5 ${!isSending && 'group-hover:translate-x-1'} transition-transform`} />
                                        <span className="relative z-10">{isSending ? "Sending..." : "Send Message"}</span>
                                    </motion.button>
                                </motion.form>
                        </div>
                    </motion.div>

                    {/* Contact Information - Also with Glass Effect */}
                    <motion.div
                        ref={cardRef2}
                        initial={{ opacity: 0, rotateY: 15 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{
                            duration: 2.67,
                            ease: "easeOut",
                            delay: 0.67
                        }}
                        style={{
                            perspective: 1000,
                            rotateX: rotateX2,
                            rotateY: rotateY2,
                            transformStyle: "preserve-3d"
                        }}
                        onMouseMove={handleMouseMove2}
                        onMouseLeave={handleMouseLeave2}
                        className="space-y-8"
                    >
                        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-xl md:p-10">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.67 }}
                                >
                                    <h2 className="mb-6 text-2xl font-bold uppercase tracking-tighter">
                                        Contact Information
                                    </h2>
                                    <p className="mb-8 text-gray-400">
                                        Feel free to reach out through any of these channels. We typically respond within 24 hours.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.0 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-1000 hover:border-white/20 hover:bg-white/10"
                                    >
                                        <div className="rounded-xl bg-white/10 p-3">
                                            <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Email</h3>
                                            <a
                                                href="mailto:chizel.dev@gmail.com"
                                                className="text-gray-400 transition-colors hover:text-white"
                                            >
                                                chizel.dev@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.33 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-1000 hover:border-white/20 hover:bg-white/10"
                                    >
                                        <div className="rounded-xl bg-white/10 p-3">
                                            <Phone className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Phone</h3>
                                            <a
                                                href="tel:+91 9635710104 / +91 8218116900"
                                                className="text-gray-400 transition-colors hover:text-white"
                                            >
                                                +91 9635710104 / +91 8218116900
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.67 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-1000 hover:border-white/20 hover:bg-white/10"
                                    >
                                        <div className="rounded-xl bg-white/10 p-3">
                                            <MapPin className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold">Location</h3>
                                            <p className="text-gray-400">
                                                Working remotely worldwide
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 3.0 }}
                                    className="mt-8 border-t border-white/10 pt-8"
                                >
                                    <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide">
                                        Follow Us
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <motion.a
                                            href="https://www.linkedin.com/company/chizel-dev/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            LinkedIn
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/Rahul-Singh-Bora"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Back to Home Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    >
                        <span>←</span> Back to Home
                    </Link>
                </motion.div>
            </div>

            <footer className="mt-24 text-center text-[10px] uppercase tracking-[0.2em] text-gray-600">
                © {new Date().getFullYear()} Chizel. All rights reserved.
            </footer>
        </main>
    );
}
