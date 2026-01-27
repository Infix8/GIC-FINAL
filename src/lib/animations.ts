/**
 * Reusable animation configurations and utilities
 * Provides sophisticated motion effects for scroll-triggered animations,
 * micro-interactions, and page transitions
 */

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  stagger?: number;
}

export const animationPresets = {
  // Entrance animations
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  
  // Staggered animations
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  
  // Hover animations
  hoverLift: {
    whileHover: { 
      y: -8,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    whileTap: { 
      y: -4,
      transition: { duration: 0.1 }
    },
  },
  hoverScale: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    },
  },
  hoverGlow: {
    whileHover: {
      boxShadow: '0 0 20px rgba(139, 123, 181, 0.4), 0 0 40px rgba(169, 155, 212, 0.2)',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
  },
  
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  
  // Scroll-triggered
  scrollReveal: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
  scrollRevealStagger: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-100px' },
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Generate staggered animation delays
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return baseDelay * index;
};

/**
 * Create custom animation config with overrides
 */
export const createAnimation = (
  preset: keyof typeof animationPresets,
  overrides?: Partial<typeof animationPresets.fadeInUp>
) => {
  const base = animationPresets[preset];
  return {
    ...base,
    ...overrides,
    transition: {
      ...base.transition,
      ...overrides?.transition,
    },
  };
};

// React import for hooks
import { useState, useRef, useEffect } from 'react';

/**
 * Intersection Observer utility for scroll-triggered animations
 */
export const useScrollAnimation = (threshold: number = 0.1) => {
  if (typeof window === 'undefined') return { isVisible: false, ref: { current: null } };
  
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isVisible };
};
