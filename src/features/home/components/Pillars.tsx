import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const checkIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

const pillars = [
    {
        number: "01",
        title: "Showcase",
        description: "Feature professional startups and student innovators with prototypes and live demos"
    },
    {
        number: "02",
        title: "Invest",
        description: "Create curated investment opportunities with potential funding up to INR 10 Crores"
    },
    {
        number: "03",
        title: "Educate",
        description: "Inform founders on policy, IP, regulations, and scaling deep-tech businesses"
    },
    {
        number: "04",
        title: "Connect",
        description: "Strengthen collaborations between government, industry, and startups"
    }
];

const Pillars = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isMobile] = useState(checkIsMobile);

    useEffect(() => {
        // On mobile, skip GSAP animations entirely - use CSS instead
        if (isMobile) {
            const cards = document.querySelectorAll('.pillar-card-new');
            cards.forEach(card => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
            });
            return;
        }

        const ctx = gsap.context(() => {
            // Simple fade-in animation on scroll - only on desktop
            gsap.fromTo('.pillar-card-new',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.pillars-grid-new',
                        start: 'top 90%',
                    }
                }
            );
        }, sectionRef);

        // Fallback: Show content after a delay if animation doesn't trigger
        const fallback = setTimeout(() => {
            const cards = document.querySelectorAll('.pillar-card-new');
            cards.forEach(card => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
            });
        }, 1500);

        return () => {
            ctx.revert();
            clearTimeout(fallback);
        };
    }, [isMobile]);

    return (
        <section ref={sectionRef} className="flowing-bg flowing-bg-pillars py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12" id="pillars" style={{ background: 'var(--color-bg-primary)' }}>
            {/* Section header */}
            <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 
                    className="pillar-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" 
                    style={{ 
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    KEY PILLARS
                </h2>
            </div>

            {/* Pillars grid */}
            <div className="pillars-grid-new grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="pillar-card-new p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl card-hover-effect"
                        style={{
                            background: 'var(--color-bg-secondary)',
                            border: '1px solid rgba(139, 123, 181, 0.15)',
                            fontFamily: 'var(--font-primary)',
                        }}
                    >
                        <span
                            className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold block mb-3 sm:mb-4"
                            style={{
                                color: 'rgba(139, 123, 181, 1)',
                                textShadow: '0 0 20px rgba(139, 123, 181, 0.3)'
                            }}
                        >
                            {pillar.number}
                        </span>
                        <h3
                            className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-muted)' }}>
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pillars;

