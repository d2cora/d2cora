"use client";

import { motion } from "framer-motion";

// Coordinates for the 3D interlocking continuous loop structure
const shapeBlocks = [
    [0, 0, 2], [1, 0, 2], [2, 0, 2],
    [2, 0, 1], [2, 0, 0],
    [2, 1, 0], [2, 2, 0],
    [2, 2, 1], [2, 2, 2],
    [1, 2, 2], [0, 2, 2],
    [0, 2, 1], [0, 2, 0],
    [0, 1, 0], [0, 0, 0],
    [0, 0, 1]
];

export function Industries() {
    const s = 65; // Scale of the cubes
    const dx = s * Math.sqrt(3) / 2;
    const dy = s / 2;

    const getCenter = (x: number, y: number, z: number) => ({
        cx: (x - y) * dx,
        cy: (x + y) * dy - z * s
    });

    // Sort blocks by depth (x + y + z) to ensure proper back-to-front rendering in isometric view
    const sortedBlocks = [...shapeBlocks].sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));

    const hasCube = (x: number, y: number, z: number) =>
        shapeBlocks.some(b => b[0] === x && b[1] === y && b[2] === z);

    return (
        <section
            id="industries"
            className="py-24 relative flex flex-col items-center justify-center overflow-hidden min-h-screen"
            style={{ backgroundColor: "#F7F6F3" }}
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4" style={{ color: "#A8A296" }}>
                    industries
                </h2>
            </motion.div>

            {/* 3D Structure */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-0 w-full max-w-2xl flex justify-center items-center"
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="-200 -250 400 450"
                    className="overflow-visible"
                    style={{ filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.02))" }}
                >
                    <g transform="translate(0, 50)">
                        {sortedBlocks.map((block) => {
                            const [x, y, z] = block;
                            const { cx, cy } = getCenter(x, y, z);
                            const color = "#BAB2A8"; // Dashed border color
                            const fill = "#F7F6F3"; // Background color to hide elements behind

                            // Points for isometric cube faces
                            const top = `${cx},${cy - s} ${cx + dx},${cy - dy} ${cx},${cy} ${cx - dx},${cy - dy}`;
                            const left = `${cx - dx},${cy - dy} ${cx},${cy} ${cx},${cy + s} ${cx - dx},${cy + s - dy}`;
                            const right = `${cx},${cy} ${cx + dx},${cy - dy} ${cx + dx},${cy + s - dy} ${cx},${cy + s}`;

                            // Face culling (only draw exterior faces to avoid overlapping dashes)
                            const showTop = !hasCube(x, y, z + 1);
                            const showLeft = !hasCube(x, y + 1, z);
                            const showRight = !hasCube(x + 1, y, z);

                            return (
                                <g key={`${x}-${y}-${z}`} className="transition-all duration-500 hover:brightness-95">
                                    {showTop && (
                                        <polygon
                                            points={top}
                                            fill={fill}
                                            stroke={color}
                                            strokeWidth="2"
                                            strokeDasharray="6 4"
                                            strokeLinejoin="round"
                                        />
                                    )}
                                    {showLeft && (
                                        <polygon
                                            points={left}
                                            fill={fill}
                                            stroke={color}
                                            strokeWidth="2"
                                            strokeDasharray="6 4"
                                            strokeLinejoin="round"
                                        />
                                    )}
                                    {showRight && (
                                        <polygon
                                            points={right}
                                            fill={fill}
                                            stroke={color}
                                            strokeWidth="2"
                                            strokeDasharray="6 4"
                                            strokeLinejoin="round"
                                        />
                                    )}
                                </g>
                            );
                        })}
                    </g>
                </svg>
            </motion.div>
        </section>
    );
}
