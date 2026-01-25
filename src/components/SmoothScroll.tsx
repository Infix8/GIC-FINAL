import { useEffect, useRef, ReactNode, createContext, useContext, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useLocation } from 'react-router-dom';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Check if device is mobile/touch
const checkIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Context to share smoother instance
interface SmoothScrollContextType {
  smoother: ScrollSmoother | null;
  scrollTo: (target: string | HTMLElement, smooth?: boolean, position?: string) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  smoother: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const { pathname } = useLocation();
  const [isMobile] = useState(checkIsMobile);

  useEffect(() => {
    // COMPLETELY DISABLE ScrollSmoother on mobile for native scrolling
    if (isMobile) {
      // Ensure native scrolling works
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    // Create ScrollSmoother instance only on desktop
    if (wrapperRef.current && contentRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        effects: true,
        normalizeScroll: false,
        smoothTouch: false,
      });
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [isMobile]);

  // Scroll to top on route change
  useEffect(() => {
    if (isMobile) {
      // Use native scroll for mobile
      window.scrollTo(0, 0);
    } else if (smootherRef.current) {
      smootherRef.current.scrollTo(0, false);
    }
  }, [pathname, isMobile]);

  // Refresh ScrollTrigger when route changes (only on desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, isMobile]);

  const scrollTo = (target: string | HTMLElement, smooth = true, position = 'top top') => {
    if (isMobile) {
      // Use native scroll for mobile
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
      }
    } else if (smootherRef.current) {
      smootherRef.current.scrollTo(target, smooth, position);
    }
  };

  // On mobile, render children without the wrapper divs to avoid any interference
  if (isMobile) {
    return (
      <SmoothScrollContext.Provider value={{ smoother: null, scrollTo }}>
        <div className="mobile-scroll-container">
          {children}
        </div>
      </SmoothScrollContext.Provider>
    );
  }

  return (
    <SmoothScrollContext.Provider value={{ smoother: smootherRef.current, scrollTo }}>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
