'use client';
import { motion } from "motion/react";
import Review from "./Review";
import useWindowSize from "@/hooks/useWindowSize";

// Type for review data
type ReviewType = {
    id: number;
    name: string;
    description: string;
}

interface ReviewsComponentProps {
    id: string;
    reviews: ReviewType[];
    direction?: "left" | "right";   // scroll direction
    duration?: number;              // animation duration in seconds
    delay?: number;                 // animation delay in seconds
    reviewWidth?: number;           // optional fixed review width (minimum 400)
    gap?: number;                   // gap between reviews
}

/**
 * Horizontal scroll of reviews, seamless loop.
 * Supports scrolling left-to-right or right-to-left.
 */
export default function ReviewsComponent({
    id, 
    reviews, 
    duration, 
    delay, 
    direction, 
    reviewWidth, 
    gap
} : ReviewsComponentProps) {
    const { width } = useWindowSize();

    // Responsive review width
    const REQUESTED_WIDTH = reviewWidth && reviewWidth >= 400 ? reviewWidth : 460;
    const REVIEW_WIDTH = width ? Math.min(width, REQUESTED_WIDTH) : 0;
    const GAP = gap ?? 20;
    const DURATION = duration ?? 10;
    const DELAY = delay ?? 0;
    const DIRECTION = direction ?? "left";

    // Total distance to scroll (one set of reviews)
    const totalWidth = reviews.length * (REVIEW_WIDTH + GAP);

    return (
        <section className="block bg-gray-100 w-full overflow-hidden relative z-10">
            <motion.div
                className="flex flex-nowrap"
                style={{ gap: GAP }}
                animate={{
                    x: DIRECTION === "left"
                        ? [0, -totalWidth]   // left: move from 0 to -totalWidth
                        : [-totalWidth, 0]   // right: move from -totalWidth to 0
                }}
                transition={{
                    duration: DURATION,  // total duration of one loop
                    delay: DELAY,
                    ease: "linear",      // constant speed
                    repeat: Infinity,    // infinite loop
                    repeatType: "loop",  // seamless looping
                }}
            >
                {/* Double the reviews to create a seamless loop */}
                {Array.from({ length: reviews.length * 2 }).map((_, index) => (
                    <Review
                        key={`${id}_review_${index}`}
                        width={REVIEW_WIDTH}
                        content={reviews[index % reviews.length]}
                    />
                ))}
            </motion.div>
        </section>
    );
}
