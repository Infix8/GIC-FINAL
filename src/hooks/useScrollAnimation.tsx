/**
 * Production-grade scroll animations using Framer Motion
 * Replaces custom GSAP ScrollTrigger code with industry-standard React solution
 * 
 * Benefits:
 * - Built for React (no manual cleanup needed)
 * - Automatic performance optimization
 * - TypeScript support
 * - Smaller bundle size than GSAP
 * - Better mobile performance
 */

import { useInView } from 'framer-motion';
import { useRef, RefObject } from 'react';

/**
 * Hook for scroll-triggered animations
 * Returns a ref to attach to any element and whether it's in view
 * 
 * @param once - If true, animation only triggers once
 * @param margin - Viewport margin (e.g., "-100px" to trigger 100px before entering viewport)
 * @param amount - How much of the element should be visible (0-1 or "some"/"all")
 * 
 * @example
 * const { ref, inView } = useScrollAnimation({ once: true });
 * 
 * <motion.div
 *   ref={ref}
 *   initial={{ opacity: 0, y: 50 }}
 *   animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 *   transition={{ duration: 0.6 }}
 * >
 *   Content
 * </motion.div>
 */
export function useScrollAnimation(options?: {
  once?: boolean;
  margin?: string;
  amount?: number | 'some' | 'all';
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-100px',
    amount: options?.amount ?? 0.3,
  });

  return { ref: ref as RefObject<any>, inView };
}

/**
 * Preset animation variants for common patterns
 */
export const scrollVariants = {
  // Fade in from below
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  // Fade in from left
  fadeLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  // Fade in from right
  fadeRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  // Scale up
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  // Stagger children (use with motion.div parent)
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

/**
 * Example usage in a component:
 * 
 * import { motion } from 'framer-motion';
 * import { useScrollAnimation, scrollVariants } from '@/hooks/useScrollAnimation';
 * 
 * function MyComponent() {
 *   const { ref, inView } = useScrollAnimation({ once: true });
 *   
 *   return (
 *     <motion.div
 *       ref={ref}
 *       initial={scrollVariants.fadeUp.initial}
 *       animate={inView ? scrollVariants.fadeUp.animate : scrollVariants.fadeUp.initial}
 *       transition={scrollVariants.fadeUp.transition}
 *     >
 *       Content that animates on scroll
 *     </motion.div>
 *   );
 * }
 * 
 * // Or use whileInView for even simpler code:
 * <motion.div
 *   initial={{ opacity: 0, y: 50 }}
 *   whileInView={{ opacity: 1, y: 0 }}
 *   viewport={{ once: true, margin: "-100px" }}
 *   transition={{ duration: 0.6 }}
 * >
 *   Content
 * </motion.div>
 */
