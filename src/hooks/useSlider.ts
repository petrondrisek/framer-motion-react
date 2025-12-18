import { useCallback, useRef, useState } from "react";

export function useSlider(items: any[]) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const reachedEnd = useRef<boolean>(false);
    const reachedStart = useRef<boolean>(true);

    const prevIndex = activeIndex > 0 ? activeIndex - 1 : -1;

    const nextSlide = useCallback(() => {
        if (isAnimating || items.length <= 1) return;
        
        reachedStart.current = false;
        if(activeIndex + 1 === items.length - 1) 
            reachedEnd.current = true;

        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, [isAnimating, items.length]);

    const prevSlide = useCallback(() => {
        if (isAnimating || items.length <= 1) return;

        reachedEnd.current = false;
        if(activeIndex -1 === 0) 
            reachedStart.current = true;
        
        setIsAnimating(true);
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [isAnimating, items.length]);

    return { activeIndex, prevIndex, isAnimating, setIsAnimating, nextSlide, prevSlide, reachedEnd, reachedStart };
}