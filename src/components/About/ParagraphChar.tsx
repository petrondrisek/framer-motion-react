'use client';
import { motion } from "motion/react";

export default function ParagraphChar({ id, text }: { id: string, text: string }) {

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const char = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: false }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${id}-${index}`}
          variants={char}
          transition={{
            duration: 0.15,
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
