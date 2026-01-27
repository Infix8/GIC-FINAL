import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const BackgroundEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Skip animations on mobile for better performance
        if (isMobile) return;

        const ctx = gsap.context(() => {
            // Subtle animation for the grid - only on desktop
            gsap.to('.bg-grid-line', {
                opacity: 0.04,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: 0.5,
            });

            // Animate gradient mesh orbs
            gsap.to('.gradient-orb', {
                x: '+=20',
                y: '+=15',
                duration: 8,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: 2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <div ref={containerRef} className="background-effects">
            {/* Base dark background with gradient mesh */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(circle at 20% 50%, rgba(139, 123, 181, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(244, 162, 97, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
                        linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)
                    `
                }}
            />

            {/* Noise texture overlay */}
            {!isMobile && (
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px',
                    }}
                />
            )}

            {/* Animated gradient orbs */}
            {!isMobile && (
                <>
                    <div
                        className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(139, 123, 181, 0.2) 0%, rgba(169, 155, 212, 0.1) 40%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                    />
                    <div
                        className="gradient-orb absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(244, 162, 97, 0.15) 0%, rgba(230, 111, 81, 0.08) 40%, transparent 70%)',
                            filter: 'blur(80px)',
                        }}
                    />
                    <div
                        className="gradient-orb absolute top-1/2 right-1/3 w-72 h-72 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(34, 211, 238, 0.06) 40%, transparent 70%)',
                            filter: 'blur(70px)',
                        }}
                    />
                </>
            )}

            {/* Geometric pattern overlay */}
            {!isMobile && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.015 }}>
                    <defs>
                        <pattern id="geometric-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                            <path
                                d="M 0 60 L 60 0 L 120 60 L 60 120 Z"
                                fill="none"
                                stroke="rgba(139, 123, 181, 0.3)"
                                strokeWidth="0.5"
                                className="bg-grid-line"
                            />
                            <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(244, 162, 97, 0.2)" strokeWidth="0.3" />
                        </pattern>
                        <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path
                                d="M 100 0 L 0 0 0 100"
                                fill="none"
                                stroke="rgba(139, 123, 181, 0.2)"
                                strokeWidth="0.5"
                                className="bg-grid-line"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.5" />
                </svg>
            )}

            {/* Layered transparency effects */}
            {!isMobile && (
                <>
                    <div
                        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
                        style={{
                            background: 'linear-gradient(90deg, rgba(139, 123, 181, 0.05) 0%, transparent 100%)',
                        }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none"
                        style={{
                            background: 'linear-gradient(270deg, rgba(244, 162, 97, 0.04) 0%, transparent 100%)',
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default BackgroundEffects;
