import {
    ShoppingCart,
    MapPin,
    Cloud,
    Building,
    GraduationCap,
} from "lucide-react";

export const blockClusters = [
    { 
        id: 0, 
        blocks: [[0, 0, 2], [1, 0, 2], [2, 0, 2]], 
        name: "D2C & Shopify E-commerce Brands", 
        icon: ShoppingCart, 
        emoji: "🛍️",
        labelPos: { x: -350, y: -220 },
        subNiches: ["Fashion & apparel", "Skincare / beauty", "Supplements", "Jewelry", "Pet products"]
    },
    { 
        id: 1, 
        blocks: [[2, 0, 1], [2, 0, 0]], 
        name: "B2B SaaS & Tech Companies", 
        icon: Cloud, 
        emoji: "💻",
        labelPos: { x: 350, y: -150 } 
    },
    { 
        id: 2, 
        blocks: [[2, 1, 0], [2, 2, 0]], 
        name: "High-Ticket Service & Travel Brands", 
        icon: MapPin, 
        emoji: "✈️",
        labelPos: { x: 350, y: 150 } 
    },
    { 
        id: 3, 
        blocks: [[2, 2, 1], [2, 2, 2]], 
        name: "Real Estate & Commercial Developers", 
        icon: Building, 
        emoji: "🏢",
        labelPos: { x: 50, y: 350 } 
    },
    { 
        id: 4, 
        blocks: [[1, 2, 2], [0, 2, 2]], 
        name: "High-Ticket Education & Advisory", 
        icon: GraduationCap, 
        emoji: "🎓",
        labelPos: { x: -250, y: 330 } 
    },
];
