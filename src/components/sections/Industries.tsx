"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { blockClusters } from "@/lib/constants/industries";
import { IndustryCluster } from "./industries/IndustryCluster";

export type BlockType = {
    x: number;
    y: number;
    z: number;
    clusterId: number;
    vx: number;
    vy: number;
    depth: number;
    isFirstInCluster: boolean;
    visualCenterX: number;
    visualCenterY: number;
    clusterData: typeof blockClusters[0];
    explosionMultiplier: number;
};

export function Industries() {
    const [isHovered, setIsHovered] = useState(false);

    const s = 65; // Scale of the cubes
    const dx = s * Math.sqrt(3) / 2;
    const dy = s / 2;

    // Core center of the 3x3x3 grid is at (1,1,1), which elegantly maps to (0,0) via getCenter.
    const getCenter = (x: number, y: number, z: number) => ({
        cx: (x - y) * dx,
        cy: (x + y) * dy - z * s
    });

    const allBlocks = blockClusters.flatMap(cluster => {
        let avgX = 0, avgY = 0, avgZ = 0;
        cluster.blocks.forEach(b => { avgX += b[0]; avgY += b[1]; avgZ += b[2]; });
        avgX /= cluster.blocks.length;
        avgY /= cluster.blocks.length;
        avgZ /= cluster.blocks.length;

        const center2D = getCenter(avgX, avgY, avgZ);

        // Dynamically compute vector exactly toward the label so lines NEVER cross horizontally
        const dxCoord = cluster.labelPos.x - center2D.cx;
        const dyCoord = cluster.labelPos.y - center2D.cy;
        const len = Math.sqrt(dxCoord * dxCoord + dyCoord * dyCoord) || 1;

        const vx = dxCoord / len;
        const vy = dyCoord / len;

        // Perfectly space pieces towards their specific anchor texts
        const explosionMultiplier = 2.6;
        const visualCenterX = center2D.cx + vx * s * explosionMultiplier;
        const visualCenterY = center2D.cy + vy * s * explosionMultiplier;

        return cluster.blocks.map((b, i) => ({
            x: b[0], y: b[1], z: b[2],
            clusterId: cluster.id,
            vx, vy,
            depth: b[0] + b[1] + b[2],
            isFirstInCluster: i === 0,
            visualCenterX, visualCenterY,
            clusterData: cluster,
            explosionMultiplier
        }));
    });

    // Face culling
    const hasCubeInSameCluster = (x: number, y: number, z: number, clusterId: number) =>
        allBlocks.some(b => b.x === x && b.y === y && b.z === z && b.clusterId === clusterId);

    const hasCube = (x: number, y: number, z: number) =>
        allBlocks.some(b => b.x === x && b.y === y && b.z === z);

    const checkCull = (x: number, y: number, z: number, clusterId: number) =>
        isHovered ? hasCubeInSameCluster(x, y, z, clusterId) : hasCube(x, y, z);

    // Render pass
    const sortedBlocks = [...allBlocks].sort((a, b) => a.depth - b.depth);
    const insertSphereIndex = sortedBlocks.findIndex(b => b.depth >= 3);

    const beforeSphere = sortedBlocks.slice(0, insertSphereIndex);
    const afterSphere = sortedBlocks.slice(insertSphereIndex);

    const renderBlock = (block: BlockType) => (
        <IndustryCluster
            key={block.x + "-" + block.y + "-" + block.z}
            block={block}
            isHovered={isHovered}
            checkCull={checkCull}
            getCenter={getCenter}
            s={s}
            dx={dx}
            dy={dy}
        />
    );

    return (
        <section
            id="industries"
            className="py-12 relative flex flex-col items-center justify-center overflow-hidden min-h-screen"
            style={{ backgroundColor: "#F7F6F3" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4" style={{ color: "#A8A296" }}>
                    industries we serve
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-0 w-full max-w-6xl flex justify-center items-center cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
                // We move the entire group a bit upward (-40px) as requested
                style={{ transform: "translateY(-40px)" }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="-550 -450 1100 900"
                    className="overflow-visible"
                    style={{ filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.02))" }}
                >
                    <defs>
                        <radialGradient id="orange-glow" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#FFA751" />
                            <stop offset="100%" stopColor="#E06D14" />
                        </radialGradient>
                    </defs>

                    <g transform="translate(0, 50)">
                        {beforeSphere.map(renderBlock)}

                        <motion.circle
                            cx="0" cy="0"
                            r={s * 0.9}
                            fill="url(#orange-glow)"
                            initial={false}
                            animate={{
                                scale: isHovered ? 1 : 0.8,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        />

                        {afterSphere.map(renderBlock)}

                        {/* Rendering Lines and Labels *AFTER* blocks so they overlay neatly on top! */}
                        {allBlocks.filter(b => b.isFirstInCluster).map((block) => {
                            const { clusterData, visualCenterX, visualCenterY } = block;
                            const { labelPos, name, icon: Icon } = clusterData;

                            const isLeft = labelPos.x < 0;
                            const extensionLength = 30;
                            const endX = labelPos.x + (isLeft ? -extensionLength : extensionLength);

                            return (
                                <motion.g
                                    key={`label-${clusterData.id}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isHovered ? 1 : 0 }}
                                    transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
                                    className="pointer-events-none"
                                >
                                    <line
                                        x1={visualCenterX}
                                        y1={visualCenterY}
                                        x2={labelPos.x}
                                        y2={labelPos.y}
                                        stroke="#B8B2A8"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                    />
                                    <line
                                        x1={labelPos.x}
                                        y1={labelPos.y}
                                        x2={endX}
                                        y2={labelPos.y}
                                        stroke="#B8B2A8"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                    />

                                    <foreignObject
                                        x={isLeft ? endX - 210 : endX + 10}
                                        y={labelPos.y - 14}
                                        width="200"
                                        height="30"
                                        className="overflow-visible"
                                    >
                                        <div className={`flex items-center gap-2 w-full h-full ${isLeft ? 'justify-end' : 'justify-start'}`}>
                                            {isLeft ? (
                                                <>
                                                    <span className="text-[14px] font-medium tracking-wide whitespace-nowrap text-[#444]">{name}</span>
                                                    <Icon size={16} strokeWidth={1.5} className="text-[#666]" />
                                                </>
                                            ) : (
                                                <>
                                                    <Icon size={16} strokeWidth={1.5} className="text-[#666]" />
                                                    <span className="text-[14px] font-medium tracking-wide whitespace-nowrap text-[#444]">{name}</span>
                                                </>
                                            )}
                                        </div>
                                    </foreignObject>
                                </motion.g>
                            );
                        })}
                    </g>
                </svg>
            </motion.div>
        </section>
    );
}
