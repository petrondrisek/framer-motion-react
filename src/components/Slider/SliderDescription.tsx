import { motion } from "motion/react";

export default function SliderDescription({ children }: { children: React.ReactNode }) {
    return <motion.p
        initial={{ opacity: 0, y: -20, rotate: -30 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.5, type: "spring", stiffness: 100, damping: 10 }}
        className="text-md p-2 max-md:text-neutral-500 text-shadow-lg z-40"
    >
        {children}
    </motion.p>
}