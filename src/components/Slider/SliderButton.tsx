'use client';
import { motion } from "motion/react";

interface SliderButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    alignment: 'left' | 'right';
    disabled?: boolean;
}

export default function SliderButton({ children, onClick, alignment, disabled = false }: SliderButtonProps) {
    return (
        <motion.button 
            onClick={onClick}
            disabled={disabled}
            className={`
                absolute top-1/2 transform -translate-y-1/2 z-20
                ${alignment === 'left' ? 'left-4' : 'right-4'} 
                backdrop-blur-sm text-white bg-black/40 
                hover:bg-black/60 
                disabled:bg-black/20 disabled:text-gray-400 disabled:cursor-not-allowed
                transition-colors duration-300 ease-in-out 
                py-3 px-4 rounded-full 
                focus:outline-none focus:ring-2 focus:ring-white/50
                text-xl font-bold
                select-none
                ${disabled ? 'pointer-events-none' : 'cursor-pointer'}
            `}
            initial={{ scale: 1, rotate: 0 }}
            whileHover={disabled ? {} : { scale: 1.2, rotate: alignment === 'left' ? -15 : 15 }}
            whileTap={disabled ? {} : { scale: 0.8 }}
            transition={{ 
                duration: 0.2, 
                ease: 'easeInOut',
                scale: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileFocus={{ scale: 1.1 }}
            aria-label={`${alignment === 'left' ? 'Previous' : 'Next'} slide`}
        >
            {children}
        </motion.button>
    );
}