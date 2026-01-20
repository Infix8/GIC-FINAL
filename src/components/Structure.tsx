import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Flip, ScrollTrigger, Observer);

const structureItems = [
    {
        number: "01",
        title: ["K", "nowledge ", "B", "ubble"],
        highlights: [0, 2],
        description: "A high-level platform for policymakers, industry leaders, and scientists.",
        details: [
            "Discuss National Deep-Tech Strategy, IndiaAI Mission, and R&D grants.",
            "Keynote addresses and policy panels enabling direct interaction between innovators and policymakers."
        ]
    },
    {
        number: "02",
        title: ["A", "lpha 2 ", "I", "nfiniti"],
        highlights: [0, 2],
        description: "\"Brighter minds for Viksith Bharath\" - A 30-hour Innovation Challenge.",
        details: [
            "Selected students randomly grouped into teams to solve real-world problem statements.",
            "Mentored by industry experts to develop solutions within 30 hours.",
            "Outcomes: PoCs, PPOs, and Internship Opportunities."
        ]
    },
    {
        number: "03",
        title: ["B", "usi", "T", "ech ", "E", "xpo"],
        highlights: [0, 2, 4],
        description: "Business Technology Expo featuring Professional and Student Innovations.",
        details: [
            "Professional Expo: Startups (early to growth stage) showcasing market-ready products and MVPs.",
            "Student Expo: Undergraduate & postgraduate teams showcasing prototypes and research-based solutions.",
            "Focus on scalability, commercialization, and problem-solving."
        ]
    },
    {
        number: "04",
        title: ["I", "nno", "V", "estors ", "B", "ootcamp"],
        highlights: [0, 2, 4],
        description: "Investment matchmaking and mentoring for startups.",
        details: [
            "1:1 Investor-Startup Meetings for due diligence.",
            "Pitch to a mixed panel of investors and domain mentors.",
            "Investment opportunities worth up to INR 10 Crores.",
            "Benefits: Capital Access, Incubation, and Global Visibility."
        ]
    },
    {
        number: "05",
        title: ["M", "asterminds ", "C", "ongregation"],
        highlights: [0, 2],
        description: "Igniting curiosity and problem-solving among school students.",
        details: [
            "School students (Classes 8-12) pitch their ideas.",
            "Safe platform to receive positive feedback from a panel of 3 judges.",
            "Focus on future-ready technologies and applied research."
        ]
    }
];

const Structure = () => {
    // Add unique IDs to initial items to track instances
    const [items, setItems] = useState(() => 
        structureItems.map((item, index) => ({ ...item, uniqueId: `init-${index}` }))
    );
    const uniqueIdCounter = useRef(0);
    const sectionRef = useRef<HTMLElement>(null);
    const q = gsap.utils.selector(sectionRef);
    const flipState = useRef<Flip.FlipState | null>(null);
    const isAnimating = useRef(false);
    
    // We need to track direction for the transformOrigin logic
    const directionRef = useRef<"next" | "prev">("next");

    // Styling gradient to make it "aesthetic" - 25% reduced brightness
    const gradients = [
        "linear-gradient(135deg, #b89e4c 0%, #be7864 100%)", // Warm (dimmed)
        "linear-gradient(135deg, #63bb84 0%, #6b9eb7 100%)", // Fresh (dimmed)
        "linear-gradient(135deg, #79699d 0%, #bc91b0 100%)", // Purple-Pink (dimmed)
        "linear-gradient(135deg, #a892bd 0%, #6a94bd 100%)", // Cool Blue (dimmed)
        "linear-gradient(135deg, #b46ebc 0%, #b84151 100%)"  // Vibrant Red (dimmed)
    ];

    const rotateCards = (forward: boolean) => {
        if (isAnimating.current) return;
        
        isAnimating.current = true; // Block interaction immediately
        directionRef.current = forward ? "next" : "prev";

        // Capture specific state of visible cards
        flipState.current = Flip.getState(q(".structure-card"));
        
        setItems(prev => {
            const newItems = [...prev];
            if (forward) {
                const first = newItems.shift();
                if (first) {
                    newItems.push({ ...first, uniqueId: `new-${uniqueIdCounter.current++}` });
                }
            } else {
                const last = newItems.pop();
                if (last) {
                    newItems.unshift({ ...last, uniqueId: `new-${uniqueIdCounter.current++}` });
                }
            }
            return newItems;
        });
    };

    useLayoutEffect(() => {
        if (!flipState.current) return;

        // Demo Logic:
        // forward ? "bottom right" : "bottom left"
        const isNext = directionRef.current === "next";

        Flip.from(flipState.current, {
            duration: 0.6,
            ease: "power2.inOut",
            absolute: true, // absoluteOnLeave in demo, but absolute: true handles layout too
            
            targets: q(".structure-card"), // Explicit targets
            
            onEnter: (elements) => {
                return gsap.fromTo(elements, 
                    { 
                        opacity: 0, 
                        scale: 0, 
                    }, 
                    { 
                        opacity: 1, 
                        scale: 1, 
                        duration: 0.6,
                        transformOrigin: isNext ? "bottom right" : "bottom left"
                    }
                );
            },
            
            onLeave: (elements) => {
                return gsap.to(elements, { 
                    opacity: 0, 
                    scale: 0, 
                    duration: 0.6,
                    transformOrigin: isNext ? "bottom left" : "bottom right",
                });
            },
            
            onComplete: () => {
                isAnimating.current = false;
            }
        });
        
        flipState.current = null;
    }, [items]);

    // Auto-play Interval
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating.current) {
                rotateCards(true);
            }
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const visibleItems = items.slice(0, 3);

    // Shadow colors matching each gradient for glow effects - dimmed
    const shadowColors = [
        "rgba(184, 158, 76, 0.4)",  // Warm (dimmed)
        "rgba(99, 187, 132, 0.4)",  // Fresh (dimmed)
        "rgba(121, 105, 157, 0.4)", // Purple-Pink (dimmed)
        "rgba(168, 146, 189, 0.4)", // Cool Blue (dimmed)
        "rgba(180, 110, 188, 0.4)"  // Vibrant Red (dimmed)
    ];

    return (
        <section 
            ref={sectionRef} 
            className="min-h-screen py-16 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden relative" 
            id="structure"
            style={{
                background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)'
            }}
        >
            {/* Ambient background glow - dimmed */}
            <div 
                className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(121, 105, 157, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />
            <div 
                className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 187, 132, 0.06) 0%, transparent 70%)',
                    filter: 'blur(50px)'
                }}
            />

            {/* Section Header */}
            <div className="w-full text-center z-10 mb-10 md:mb-14 flex-shrink-0">
                <span 
                    className="font-mono text-xs tracking-[0.3em] block mb-3 uppercase"
                    style={{ color: '#8B7BB5' }}
                >
                    [04] Structure
                </span>
                <h2 
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                    style={{ color: '#EAEAEA' }}
                >
                    Event Structure
                </h2>
                <p 
                    className="mt-4 text-lg max-w-2xl mx-auto"
                    style={{ color: 'rgba(234, 234, 234, 0.6)' }}
                >
                    Five transformative tracks designed to ignite innovation
                </p>
            </div>

            {/* Container */}
            <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center gap-6 perspective-1000">
                {visibleItems.map((item, index) => {
                    const gradientIndex = parseInt(item.number) - 1;
                    const isCenter = index === 1;
                    
                    return (
                        <div 
                            key={item.uniqueId} 
                            data-flip-id={item.uniqueId}
                            className={`structure-card relative w-1/3 min-w-[300px] h-full p-6 md:p-8 rounded-3xl flex flex-col gap-4 overflow-hidden ${
                                isCenter ? 'scale-105 z-10' : 'scale-100'
                            }`}
                            style={{ 
                                cursor: 'default',
                                background: gradients[gradientIndex],
                                boxShadow: isCenter 
                                    ? `0 25px 60px ${shadowColors[gradientIndex]}, 0 10px 30px rgba(0,0,0,0.3)`
                                    : `0 15px 40px ${shadowColors[gradientIndex]}, 0 5px 20px rgba(0,0,0,0.2)`,
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        >
                            {/* Shine overlay effect */}
                            <div 
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                                    borderRadius: '1.5rem'
                                }}
                            />

                            {/* Number badge */}
                            <div 
                                className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-2xl font-bold self-start"
                                style={{ 
                                    background: 'rgba(255,255,255,0.25)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.3)'
                                }}
                            >
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 
                                className="relative text-xl md:text-2xl font-bold leading-tight"
                                style={{ 
                                    color: 'white',
                                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                }}
                            >
                                {item.title.map((part, i) => (
                                    <span 
                                        key={i}
                                        style={{ 
                                            color: item.highlights.includes(i) 
                                                ? 'rgba(255,255,255,1)' 
                                                : 'rgba(255,255,255,0.85)',
                                            fontWeight: item.highlights.includes(i) ? 800 : 700,
                                            textShadow: item.highlights.includes(i) 
                                                ? '0 0 20px rgba(255,255,255,0.5)' 
                                                : '0 2px 8px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        {part}
                                    </span>
                                ))}
                            </h3>
                            
                            {/* Description */}
                            <p 
                                className="relative text-sm md:text-base leading-relaxed"
                                style={{ 
                                    color: 'rgba(255,255,255,0.9)',
                                    textShadow: '0 1px 3px rgba(0,0,0,0.15)'
                                }}
                            >
                                {item.description}
                            </p>
                            
                            {/* Details */}
                            <div 
                                className="relative mt-auto space-y-2.5 pt-4"
                                style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                {item.details.slice(0, 2).map((detail, i) => (
                                    <p 
                                        key={i} 
                                        className="text-xs md:text-sm leading-relaxed flex items-start gap-2"
                                        style={{ color: 'rgba(255,255,255,0.8)' }}
                                    >
                                        <span style={{ color: 'rgba(255,255,255,0.9)', marginTop: '2px' }}>•</span>
                                        <span className="line-clamp-2">{detail}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls with Progress Dots */}
            <div className="mt-14 flex items-center gap-8 z-20">
                <button 
                    onClick={() => rotateCards(false)}
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{ 
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Progress dots */}
                <div className="flex gap-2">
                    {structureItems.map((_, i) => (
                        <div 
                            key={i}
                            className="w-2.5 h-2.5 rounded-full transition-all duration-500"
                            style={{
                                background: items[0].number === structureItems[i].number 
                                    ? gradients[i]
                                    : 'rgba(255,255,255,0.2)',
                                boxShadow: items[0].number === structureItems[i].number 
                                    ? `0 0 15px ${shadowColors[i]}` 
                                    : 'none',
                                transform: items[0].number === structureItems[i].number 
                                    ? 'scale(1.3)' 
                                    : 'scale(1)'
                            }}
                        />
                    ))}
                </div>

                <button 
                    onClick={() => rotateCards(true)}
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    style={{ 
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
                        <path d="M5 12h14m-7 7l7-7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Structure;
