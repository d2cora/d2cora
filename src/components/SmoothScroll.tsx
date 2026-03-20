"use client";

import { useEffect } from "react";

export function SmoothScroll() {
    useEffect(() => {
        let lenisInstance: any = null;
        let rafId: number;

        // Dynamically import Lenis to avoid SSR issues
        (async () => {
            // Disable Lenis on touch devices for better mobile performance
            const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
            if (isTouchDevice) {
                return;
            }

            const Lenis = (await import("lenis")).default;

            lenisInstance = new Lenis({
                duration: 1,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 0.8,
                touchMultiplier: 1.5,
                infinite: false,
            });

            function raf(time: number) {
                lenisInstance.raf(time);
                rafId = requestAnimationFrame(raf);
            }

            rafId = requestAnimationFrame(raf);
        })();

        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            if (lenisInstance) {
                lenisInstance.destroy();
            }
        };
    }, []);

    return null;
}
