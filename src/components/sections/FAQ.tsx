"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

export type FaqItem = {
  _id: string;
  question: string;
  answer: unknown; // Portable Text block array
};

// Portable Text renderer for FAQ answers — supports bold, italic, links
const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white/90">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-white/70">{children}</em>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="underline underline-offset-2 text-white/80 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-white/60">{children}</p>
    ),
  },
};

interface FAQProps {
  faqs?: FaqItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-black py-24">
      <div className="container relative z-10 mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Frequently Asked <span className="text-white/40">Questions</span>
          </h2>
          <p className="text-lg text-white/60">
            Everything you need to know about our process and how we help businesses scale through digital excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          {(faqs ?? []).map((faq, index) => (
            <motion.div
              key={faq._id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full rounded-2xl border p-6 text-left transition-all duration-300 md:p-8 ${
                  openIndex === index
                    ? "border-white/20 bg-white/5"
                    : "border-white/10 bg-transparent hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xl font-medium text-white/90 md:text-2xl">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-white" : "text-white/40"
                    }`}
                  >
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-2">
                        <PortableText
                          value={faq.answer as any}
                          components={portableTextComponents}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute -right-1/4 top-1/4 hidden h-96 w-96 rounded-full bg-white/5 blur-[100px] md:block" />
      <div className="pointer-events-none absolute -left-1/4 bottom-0 hidden h-96 w-96 rounded-full bg-white/5 blur-[100px] md:block" />
    </section>
  );
}
