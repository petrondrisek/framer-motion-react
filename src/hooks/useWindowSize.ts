"use client";

import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
}
