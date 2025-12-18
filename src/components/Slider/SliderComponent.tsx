'use client';
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import SliderButton from "./SliderButton";
import { Product } from "../../types/SliderProduct";
import styles from "@/components/Slider/slider.module.css";
import SliderComponentSlide from "./SliderComponentSlide";
import SliderTitle from "./SliderTitle";
import SliderDescription from "./SliderDescription";
import { useSlider } from "@/hooks/useSlider";

interface SliderComponentProps {
    products: Product[];
}

export default function SliderComponent({ products }: SliderComponentProps) {
    const { activeIndex, prevIndex, nextSlide, 
            prevSlide, isAnimating, setIsAnimating,
            reachedStart, reachedEnd
    } = useSlider(products);

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

    return (
        <section className={`${styles.backgroundGradient} overflow-hidden sticky top-0 h-[90vh]`}>
            <motion.div 
                className={`${styles.grid} mx-auto w-[1366px] max-w-full text-black relative`}
                style={{ opacity, y }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
            >
                <div className="row-start-2 row-span-2 col-start-2 col-span-2 max-sm:col-span-8 flex flex-col justify-center items-start">
                    <SliderTitle key={`product_${activeIndex}`}>
                        {products[activeIndex].name}
                    </SliderTitle>
                    <SliderDescription key={`product_description_${activeIndex}`}>
                        {products[activeIndex].description}
                    </SliderDescription>
                </div>

                <div className="row-start-1 row-span-5 col-start-4 col-span-4 max-sm:col-start-1 max-sm:col-span-8 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            className="flex items-center gap-2"
                            initial={{ x: 0 }}
                            animate={{ x: `calc(${-activeIndex * 600}px + 0.5rem)` }}
                            transition={{ duration: 0.5 }}
                            onAnimationComplete={() => setIsAnimating(false)}
                        >
                            {products.map((product, index) => (
                                <SliderComponentSlide 
                                    key={`product_slider_${product.id}`} 
                                    product={product} 
                                    className={`
                                        ${index === activeIndex ? 'active scale-100 opacity-100 ' : 
                                            index === prevIndex ? 'scale-200 opacity-0 ' : 
                                            'scale-60 blur-sm '
                                        }
                                        ${index < prevIndex ? 'opacity-0 ' : ''}
                                        flex-shrink-0 transform transition-all duration-300 ease-in-out
                                    `} 
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <SliderButton alignment="left" onClick={prevSlide} disabled={isAnimating || reachedStart.current}>&larr;</SliderButton>
                <SliderButton alignment="right" onClick={nextSlide} disabled={isAnimating || reachedEnd.current}>&rarr;</SliderButton>
            </motion.div>
        </section>
    );
}