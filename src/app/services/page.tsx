"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/lib/constants/services";

const cardStyles = [
    {
        bg: "bg-[#3366FF]",
        images: [
            "/assets/services/hand_holding_money-removebg-preview.png",
            "/assets/services/Ideas-removebg-preview.png",
        ],
    },
    {
        bg: "bg-[#FF5722]",
        images: [
            "/assets/services/content_marketing_camera-removebg-preview.png",
            "/assets/services/lights_camrea_action-removebg-preview.png",
        ],
    },
    {
        bg: "bg-[#1a1a2e]",
        images: [
            "/assets/services/mic_social_media__1_-removebg-preview.png",
            "/assets/services/speaker_social_marketing-removebg-preview.png",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white pb-20">

            {/* Header Section */}
            <section className="max-w-350 mx-auto px-6 pb-12 pt-40 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                     <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter text-black md:text-7xl lg:text-[90px]">
                        We Don't Sell <span className="text-[#3366FF]">Services</span><br />
                        We Build <span className="text-[#3366FF]">Growth Engines</span>
                    </h1>
                    <p className="mb-16 text-xl font-medium text-gray-600 md:text-2xl">
                        Strategy. Technology. Marketing. Working as one system.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
                    {serviceCategories.map((service, idx) => {
                        const style = cardStyles[idx] ?? cardStyles[0];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="group flex flex-col"
                            >
                                {/* Card */}
                                <Link
                                    href={`/services/${service.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                    className={`relative block w-full ${service.templateImage ? 'aspect-video' : 'aspect-4/3'} overflow-hidden rounded-3xl ${style.bg} cursor-pointer`}
                                >
                                    {/* Template Poster Image */}
                                    {service.templateImage ? (
                                        <Image
                                            src={service.templateImage}
                                            alt={service.category}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <>
                                            {/* Floating service images fallback */}
                                            {style.images.map((src, i) => (
                                                <div
                                                    key={i}
                                                    className="pointer-events-none absolute inset-0"
                                                    style={{
                                                        right: i === 0 ? 0 : 'auto',
                                                        left: i === 1 ? '10%' : 'auto',
                                                    }}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt=""
                                                        fill
                                                        className="object-contain opacity-30 transition-transform duration-700 group-hover:scale-105"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            ))}

                                            {/* Text overlay fallback */}
                                            <div className="relative z-10 flex h-full items-end p-8 md:p-10">
                                                <p className="text-2xl font-black leading-tight text-white drop-shadow-lg md:text-3xl">
                                                    {service.quote
                                                        ? service.quote.split(/(\*.*?\*)/g).map((part, i) =>
                                                            part.startsWith('*') && part.endsWith('*')
                                                                ? <span key={i} className="text-yellow-300">{part.slice(1, -1)}</span>
                                                                : <span key={i}>{part}</span>
                                                        )
                                                        : service.category
                                                    }
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {/* Hover scale overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                                </Link>

                                {/* Below card details */}
                                <div className="mt-6">
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">{service.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                className="rounded-lg bg-gray-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-700"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
