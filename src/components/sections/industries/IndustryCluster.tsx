import { motion } from "framer-motion";

import { BlockType } from "../Industries";

interface IndustryClusterProps {
    block: BlockType;
    isHovered: boolean;
    checkCull: (x: number, y: number, z: number, clusterId: number) => boolean;
    getCenter: (x: number, y: number, z: number) => { cx: number, cy: number };
    s: number;
    dx: number;
    dy: number;
}

export function IndustryCluster({ block, isHovered, checkCull, getCenter, s, dx, dy }: IndustryClusterProps) {
    const { x, y, z, cx, cy, explosionMultiplier } = { ...block, ...getCenter(block.x, block.y, block.z) };
    const color = "#BAB2A8";
    const fill = "#F7F6F3";

    const top = [cx, ",", cy - s, " ", cx + dx, ",", cy - dy, " ", cx, ",", cy, " ", cx - dx, ",", cy - dy].join("");
    const left = [cx - dx, ",", cy - dy, " ", cx, ",", cy, " ", cx, ",", cy + s, " ", cx - dx, ",", cy + s - dy].join("");
    const right = [cx, ",", cy, " ", cx + dx, ",", cy - dy, " ", cx + dx, ",", cy + s - dy, " ", cx, ",", cy + s].join("");

    const showTop = !checkCull(x, y, z + 1, block.clusterId);
    const showLeft = !checkCull(x, y + 1, z, block.clusterId);
    const showRight = !checkCull(x + 1, y, z, block.clusterId);

    return (
        <motion.g
            initial={false}
            animate={{
                x: isHovered ? block.vx * s * explosionMultiplier : 0,
                y: isHovered ? block.vy * s * explosionMultiplier : 0
            }}
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
        >
            {showTop && <polygon points={top} fill={fill} stroke={color} strokeWidth="2" strokeDasharray="6 4" strokeLinejoin="round" />}
            {showLeft && <polygon points={left} fill={fill} stroke={color} strokeWidth="2" strokeDasharray="6 4" strokeLinejoin="round" />}
            {showRight && <polygon points={right} fill={fill} stroke={color} strokeWidth="2" strokeDasharray="6 4" strokeLinejoin="round" />}
        </motion.g>
    );
}
