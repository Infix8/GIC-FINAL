import { useEffect, useRef, useState, ReactNode, createContext, useContext, useCallback } from 'react';
import { useLocation } from '@tanstack/react-router';

/**
 * PRODUCTION-GRADE SMOOTH SCROLL
 * 
 * Desktop: Uses Lenis for buttery smooth scrolling
 * Mobile: COMPLETELY BYPASSES Lenis - uses native scroll only
 * 
 * Key insight: Lenis and mobile touch don't mix well.
 * On mobile, we want 100% native browser scrolling.
 */

// Lazy load Lenis only on desktop to reduce mobile bundle size
const loadLenis = () => import('lenis').then(m => m.default);

// Context for scroll functionality
interface SmoothScrollContextType {
  lenis: unknown | null;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProps {
  children: ReactNode;
}

// Detect if we should use native scroll (mobile/touch devices)
const shouldUseNativeScroll = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  // Check for small screen
  const isSmallScreen = window.innerWidth < 768;
  if (isSmallScreen) return true;
  
  // Check for touch-only device (no mouse/trackpad)
  const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchOnly) return true;
  
  return false;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<unknown | null>(null);
  const rafRef = useRef<number | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  
  const [useNativeScroll, setUseNativeScroll] = useState(shouldUseNativeScroll);

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setUseNativeScroll(shouldUseNativeScroll());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MOBILE: Force native scroll - clean up any Lenis artifacts
  useEffect(() => {
    if (!useNativeScroll) return;
    
    // Cleanup any existing Lenis
    if (lenisRef.current) {
      (lenisRef.current as { destroy: () => void }).destroy();
      lenisRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    
    // Force native scroll on mobile
    // Remove ALL Lenis classes
    const html = document.documentElement;
    const body = document.body;
    
    html.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
    
    // Force native scroll settings with inline styles
    // These will override any CSS
    const enableNativeScroll = () => {
      // Add mobile class for CSS targeting
      body.classList.add('is-mobile-device');
      html.classList.add('is-mobile-device');

      html.style.setProperty('overflow-y', 'auto', 'important');
      html.style.setProperty('overflow-x', 'hidden', 'important');
      html.style.setProperty('height', 'auto', 'important');
      html.style.removeProperty('position');
      html.style.removeProperty('top');
      
      body.style.setProperty('overflow-y', 'auto', 'important');
      body.style.setProperty('overflow-x', 'hidden', 'important');
      body.style.setProperty('position', 'relative', 'important');
      body.style.setProperty('height', 'auto', 'important');
      body.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
      body.style.removeProperty('top');
    };
    
    // Apply immediately
    enableNativeScroll();
    
    // Also apply after a small delay to catch any race conditions
    const raf = requestAnimationFrame(enableNativeScroll);
    const timer = setTimeout(enableNativeScroll, 150);
    
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      body.classList.remove('is-mobile-device');
      html.classList.remove('is-mobile-device');
    };
  }, [useNativeScroll]);

  // DESKTOP: Initialize Lenis
  useEffect(() => {
    if (useNativeScroll) return;
    
    let mounted = true;
    
    loadLenis().then((Lenis) => {
      if (!mounted || useNativeScroll) return;
      
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false, // CRITICAL: Disable touch handling in Lenis
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        if (lenisRef.current) {
          (lenisRef.current as { raf: (time: number) => void }).raf(time);
        }
        rafRef.current = requestAnimationFrame(raf);
      }
      rafRef.current = requestAnimationFrame(raf);
    });

    return () => {
      mounted = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (lenisRef.current) {
        (lenisRef.current as { destroy: () => void }).destroy();
        lenisRef.current = null;
      }
    };
  }, [useNativeScroll]);

  // Scroll to top on route change
  useEffect(() => {
    if (useNativeScroll) {
      // Native scroll - immediate
      window.scrollTo(0, 0);
    } else if (lenisRef.current) {
      (lenisRef.current as { scrollTo: (target: number, options?: { immediate: boolean }) => void }).scrollTo(0, { immediate: true });
    }
  }, [pathname, useNativeScroll]);

  // Scroll helper
  const scrollTo = useCallback((
    target: string | HTMLElement | number,
    options?: { offset?: number; duration?: number }
  ) => {
    if (useNativeScroll) {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (lenisRef.current) {
      (lenisRef.current as { scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void }).scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration,
      });
    }
  }, [useNativeScroll]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
