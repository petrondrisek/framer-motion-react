"use client";

import { motion } from "motion/react";

export default function SliderTitle({ children }: { children: React.ReactNode }) {
    return <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
        className="text-6xl font-bold p-2 uppercase whitespace-nowrap z-40 text-shadow-lg text-neutral-700"
    >
        {children}
    </motion.h1>
}