'use client';
import useAsyncViewAnimation from "@/hooks/useAsyncViewAnimation";
import { motion, Transition, useAnimation, useInView } from "motion/react";
import { useRef } from "react";

export default function Image() {
  const ref = useRef(null);

  // Framer
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const imageDesktop = useAnimation();
  const imageTablet = useAnimation();
  const imageMobile = useAnimation();
  const image = useAnimation();

  // Variants & transition
  const imageVariants = { 
    initial: { filter: "blur(10px)", x: 200, opacity: 0 },
    view: { filter: "blur(0px)", x: 0, opacity: 1 },
  };

  const imagesVariants = {
    initial: { opacity: 0 },
    view: { opacity: 1 },
  };
  
  const transition: Transition = { type: "spring", stiffness: 100, damping: 12 };

  // Animation
  useAsyncViewAnimation(isInView, 
    [image, imageMobile, imageTablet, imageDesktop],
    [
        () => image.start("view"),
        () => imageMobile.start("view"),
        () => imageTablet.start("view"), 
        () => imageDesktop.start("view"), 
    ],
    { initialVariant: "initial", hideAsync: true, hideSequential: true }
  );
  
  return (
    <motion.div ref={ref} className="relative">
        <motion.img 
            animate={imageDesktop}
            initial="initial"
            variants={imagesVariants}
            src="/assets/images/desktop.webp" 
            className="absolute left-[7%] top-[27%] rotate-[-3.5deg]"
            width={320}
            height="auto"
            alt="Desktop"
        />

        <motion.img 
            animate={imageTablet}
            initial="initial"
            variants={imagesVariants}
            src="/assets/images/tablet.webp" 
            className="absolute right-[17.5%] top-[5%] rotate-[12deg]"
            width={116}
            height="auto"
            alt="Tablet"
        />

        <motion.img 
            animate={imageMobile}
            initial="initial"
            variants={imagesVariants}
            src="/assets/images/mobile.webp" 
            className="absolute left-[16.5%] top-[5%] rotate-[-15deg]"
            width={50}
            height="auto"
            alt="Mobile"
        />

        <motion.img
            animate={image}
            initial="initial"
            variants={imageVariants}
            transition={transition}
            src="/assets/images/monitors.webp"
            width={400}
            alt="Monitor"
        />
        </motion.div>
  );
}
