import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle animation for the grid
            gsap.to('.bg-grid-line', {
                opacity: 0.08,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: 0.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="background-effects">
            {/* Dark background with subtle gradient */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)'
                }}
            />

            {/* Subtle grid pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
                <defs>
                    <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path 
                            d="M 100 0 L 0 0 0 100" 
                            fill="none" 
                            stroke="#8B7BB5" 
                            strokeWidth="0.5"
                            className="bg-grid-line"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Ambient glow effects */}
            <div 
                className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 123, 181, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 123, 181, 0.06) 0%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Minimal corner accents - technical aesthetic */}
            <div className="absolute top-28 left-8 text-white/20 font-mono text-xs tracking-wider">
                [GIC.2026]
            </div>
            <div className="absolute top-28 right-8 text-white/20 font-mono text-xs tracking-wider hidden md:block">
                [INNOVATE]
            </div>
            <div className="absolute bottom-8 left-8 text-white/20 font-mono text-xs tracking-wider hidden md:block">
                FEB.27-28
            </div>
            <div className="absolute bottom-8 right-8 text-white/20 font-mono text-xs tracking-wider hidden md:block">
                HYDERABAD
            </div>
        </div>
    );
};

export default BackgroundEffects;
