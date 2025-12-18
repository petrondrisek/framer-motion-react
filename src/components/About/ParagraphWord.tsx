'use client';
import { motion } from "motion/react";
import React from "react";

export default function ParagraphWord({ id, text }: { id: string, text: string }) {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const word = {
    hidden: {
      filter: "blur(10px)",
      y: "20%",
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      y: "0%",
      opacity: 1,
    },
  };

  return (
    <motion.p
      className="p-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {text.split(" ").map((wordText, index) => (
        <motion.span
          key={`${id}-${index}`}
          variants={word}
          transition={{ duration: 0.7, ease: [.25,.1,.25,1] }}
          style={{ display: "inline-block" }}
        >
          {wordText}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}
