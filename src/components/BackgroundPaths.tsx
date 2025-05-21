"use client";

import React from "react";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "",
    flip = false,
}: {
    title?: string;
    flip?: boolean;
}) {
    return (
        <div className={"relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950"} style={flip ? { transform: 'scaleX(-1)' } : {}}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center">
                <div
                    style={{ opacity: 1, transition: 'opacity 2s' }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-7xl font-extrabold mb-8 tracking-tighter bg-gradient-to-r from-neutral-900 to-neutral-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-100 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent drop-shadow-lg">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
} 