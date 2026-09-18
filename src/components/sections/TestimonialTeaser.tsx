"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export function TestimonialTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-24 md:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-[#FF5722]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#FF5722]">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Client Love
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
          >
            Real results.{" "}
            <span className="text-[#FF5722]">Real stories.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg font-medium leading-relaxed text-white/60"
          >
            Don&apos;t take our word for it. Hear directly from the founders we&apos;ve helped scale.
          </motion.p>
        </div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          {/* Outer glow ring */}
          <div className="rounded-[36px] p-[1px]" style={{ background: "linear-gradient(135deg, rgba(255,87,34,0.4) 0%, rgba(255,87,34,0.05) 100%)" }}>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-[35px] bg-black shadow-2xl"
              onClick={handlePlayPause}
              role="button"
              aria-label={isPlaying ? "Pause testimonial video" : "Play testimonial video"}
            >
              <video
                ref={videoRef}
                className="w-full max-h-[520px] object-cover"
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                playsInline
              >
                <source src="/assets/Client testimonial.mov" type="video/quicktime" />
                <source src="/assets/Client testimonial.mov" type="video/mp4" />
              </video>

              {/* Play / Pause overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                {/* Overlay backdrop */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                )}

                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF5722] shadow-[0_0_60px_rgba(255,87,34,0.6)] transition-transform duration-300 group-hover:scale-110">
                  {isPlaying ? (
                    <svg className="h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="ml-1.5 h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Bottom label when paused */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 pb-7 pt-16 pointer-events-none">
                  <p className="text-sm font-bold uppercase tracking-widest text-white/60">Video Testimonial</p>
                  <p className="text-xl font-black text-white">Watch what our clients say →</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-3 border-2 border-[#FF5722] px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-[#FF5722] transition-all duration-300 hover:bg-[#FF5722] hover:text-white"
          >
            See All Testimonials
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </Link>
          <p className="text-sm font-medium text-white/30">100% real client stories. No fake reviews</p>
        </motion.div>
      </div>
    </section>
  );
}
