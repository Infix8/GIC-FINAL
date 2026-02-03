import { useState, useEffect } from 'react';

/**
 * Hook to detect viewport size and determine if we're on mobile or desktop
 * Uses 768px as the breakpoint (Tailwind's 'sm' breakpoint)
 */
export const useViewport = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useEffect(() => {
        // Set initial value
        const checkIsMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setIsDesktop(!mobile);
        };

        // Check on mount
        checkIsMobile();

        // Listen for resize events
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return { isMobile, isDesktop };
};

