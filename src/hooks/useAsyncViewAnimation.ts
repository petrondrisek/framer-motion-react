import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

type AnimationControl = ReturnType<typeof useAnimation>;

interface AsyncViewAnimationOptions {
  // Which variant to use when component is not in view
  initialVariant?: string;    

  // If true, controls are hidden asynchronously when component leaves view
  // If false, controls are reset immediately to initialVariant
  hideAsync?: boolean;         

  // Determines how async hiding is performed (only relevant if hideAsync = true):
  // true  = hide controls one by one (sequentially)
  // false = hide all controls at the same time (parallel)
  hideSequential?: boolean;    
}

/**
 * Hook to animate a list of Framer Motion controls when entering/leaving the viewport.
 * Supports asynchronous sequential or parallel hiding and sequential showing of steps.
 *
 * @param isInView - whether the component is currently visible
 * @param controls - array of Framer Motion animation controls
 * @param steps - array of async functions representing animation steps
 * @param options - configuration options for initial variant, hide behavior
 */
export default function useAsyncViewAnimation(
  isInView: boolean,
  controls: AnimationControl[],
  steps: (() => Promise<any>)[],
  options: AsyncViewAnimationOptions = {}
) {
  const { initialVariant = "initial", hideAsync = false, hideSequential = true } = options;

  // Cancel token to abort previous animations if isInView changes quickly
  const seq = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    seq.current += 1;
    const id = seq.current;

    // Async hide function
    const asyncHide = async () => {
      setIsAnimating(true);

      if (hideSequential) {
        // Sequentially hide controls one by one, waiting for each to finish
        for (const c of [...controls].reverse()) {
          await c.start(initialVariant);
          if (seq.current !== id) return; // cancel if view changed
        }
      } else {
        // Hide all controls in parallel
        await Promise.all(controls.map(c => c.start(initialVariant)));
        if (seq.current !== id) return; // cancel if view changed
      }

      setIsAnimating(false);
    };

    // Async show function
    const asyncShow = async () => {
      setIsAnimating(true);

      controls.forEach(c => c.stop()); // Stop any previous animations to avoid overlap

      for (const step of steps) {
        await step();
        if (seq.current !== id) return; // cancel if view changed
      }

      setIsAnimating(false);
    };

    if (!isInView) {
      if (hideAsync) {
        // perform asynchronous hiding
        asyncHide(); 
      } else {
        // immediately reset all controls
        controls.forEach(c => {
          c.stop();
          c.start(initialVariant);
        });
      }
      return;
    }

    // Component entered view
    asyncShow();

  }, [isInView, controls, steps, initialVariant, hideAsync, hideSequential]);

  return { isAnimating };
}