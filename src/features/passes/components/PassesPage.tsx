import { useNavigate, useSearch } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

// Event colors matching EventsPage (same color scheme) + additional unique colors
const eventColors = {
    knowledgeBubble: {
        gradient: "linear-gradient(135deg, #b89e4c 0%, #be7864 100%)",
        shadow: "rgba(184, 158, 76, 0.4)",
        accent: "#b89e4c"
    },
    alphaToInfinity: {
        gradient: "linear-gradient(135deg, #63bb84 0%, #6b9eb7 100%)",
        shadow: "rgba(99, 187, 132, 0.4)",
        accent: "#63bb84"
    },
    businessTechExpo: {
        gradient: "linear-gradient(135deg, #79699d 0%, #bc91b0 100%)",
        shadow: "rgba(121, 105, 157, 0.4)",
        accent: "#79699d"
    },
    investorPitching: {
        gradient: "linear-gradient(135deg, #a892bd 0%, #6a94bd 100%)",
        shadow: "rgba(168, 146, 189, 0.4)",
        accent: "#a892bd"
    },
    mastermindCongregation: {
        gradient: "linear-gradient(135deg, #b46ebc 0%, #b84151 100%)",
        shadow: "rgba(180, 110, 188, 0.4)",
        accent: "#b46ebc"
    },
    hackathonProgram: {
        gradient: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
        shadow: "rgba(6, 182, 212, 0.4)",
        accent: "#06B6D4"
    }
};

/* Order: 1. Knowledge, 2. Alpha2Infiniti, 3. BusitechExpo Student, 4. BusitechExpo Professional, 5. InnoVestors BootCamp, 6. Masterminds Congregation */
const passes = [
    {
        name: "Delegate Pass",
        price: "₹1,000",
        priceLabel: "Student",
        price2: "₹2,500",
        price2Label: "Professional",
        paymentLink: "https://rzp.io/rzp/DelagtePasses",
        colorKey: "knowledgeBubble" as keyof typeof eventColors,
        features: [
            "Access to Panel Discussions",
            "Entry to Keynote Sessions",
            "Participation in Workshops",
            "Delegate Kit",
            "Access to the Networking Arena",
            "Entry to the Expo Area",
            "Invite-only access to Speaker Launch Sessions"
        ]
    },
    {
        name: "Alpha2Infiniti (Hackathon Program)",
        price: "₹1,000",
        paymentLink: "https://rzp.io/rzp/Alpha2Infiniti",
        teamPassLink: "https://rzp.io/rzp/mqY3Wsn",
        colorKey: "hackathonProgram" as keyof typeof eventColors,
        features: [
            "Participation in a competitive Hackathon",
            "Hackathon Kit for participants",
            "Mentorship from industry experts",
            "Opportunity for PPOs and internships (Terms & Conditions apply)",
            "Access to Panel Discussions",
            "Entry to Keynote Sessions",
            "Participation in Hands-on Workshops",
            "Access to the Networking Arena",
            "Entry to the Expo Area",
            "Invite-only access to Speaker Launch Sessions"
        ]
    },
    {
        name: "Student Expo",
        price: "₹3,000",
        priceLabel: "Team of 2",
        paymentLink: "https://rzp.io/rzp/StudentExpo",
        colorKey: "alphaToInfinity" as keyof typeof eventColors,
        features: [
            "Platform to showcase student projects and MVPs",
            "Opportunity to present ideas to industry experts and academicians",
            "Feedback and guidance from mentors and judges",
            "Exposure to innovation, technology, and entrepreneurship",
            "Access to interactive learning sessions",
            "Networking with peers and innovators",
            "Opportunity to gain recognition and visibility",
            "Participation certificates"
        ]
    },
    {
        name: "Professional Expo",
        price: "₹20,000",
        priceLabel: "Technical",
        price2: "₹30,000",
        price2Label: "Non Technical",
        paymentLink: "https://rzp.io/rzp/rF76tRY6",
        colorKey: "businessTechExpo" as keyof typeof eventColors,
        features: [
            "Dedicated Exhibition Space to showcase products/services",
            "Interaction with industry professionals, startups, and corporates",
            "Access to Panel Discussions",
            "Entry to Keynote Sessions",
            "Participation in Workshops",
            "High-visibility Networking Arena access",
            "Access to the Expo Floor",
            "Invite-only access to Speaker Launch Sessions",
            "Opportunity for brand visibility and lead generation"
        ]
    },
    {
        name: "InnoVestors BootCamp",
        price: "₹2,000",
        paymentLink: "https://rzp.io/rzp/InnoVestorsBootCamp",
        colorKey: "investorPitching" as keyof typeof eventColors,
        features: [
            "Access to Investor Panels",
            "Opportunity for Market Validation",
            "Exposure to Funding and Grant Opportunities",
            "Participation in Panel Discussions",
            "Entry to Keynote Sessions",
            "Access to Workshops",
            "Delegate Kit",
            "Access to the Networking Arena",
            "Entry to the Expo Area",
            "Invite-only access to Speaker Launch Sessions",
            "Access to Incubation and Startup Support Opportunities"
        ]
    },
    {
        name: "Master Minds Congregation",
        price: "₹500",
        paymentLink: "https://rzp.io/rzp/MastermindsCongregation",
        colorKey: "mastermindCongregation" as keyof typeof eventColors,
        features: [
            "Platform for school students to present ideas and projects",
            "Exposure to innovation, technology, and entrepreneurship",
            "Guidance and feedback from mentors and educators",
            "Access to interactive sessions and discussions",
            "Participation in knowledge-building activities",
            "Opportunity to build confidence, creativity, and problem-solving skills",
            "Early exposure to the startup and innovation ecosystem"
        ]
    },
];

const PassesPage = () => {
    const navigate = useNavigate();
    const search = useSearch({ from: '/passes/' });
    const highlightedRef = useRef<HTMLDivElement>(null);
    
    // Map event IDs to pass indices (can be single index or array for multiple highlights)
    const eventToPassIndex: Record<string, number | number[]> = {
        'knowledge-bubble': 0,      // Delegate Pass
        'alpha-to-infinity': 1,     // Alpha2Infiniti
        'business-tech-expo': [2, 3],    // Student Expo (2) and Professional Expo (3)
        'investor-pitching': 4,    // InnoVestors BootCamp
        'mastermind-congregation': 5, // Master Minds Congregation
    };
    
    const highlightedPassIndices = search?.event 
        ? (Array.isArray(eventToPassIndex[search.event]) 
            ? eventToPassIndex[search.event] as number[]
            : [eventToPassIndex[search.event] as number])
        : null;

    // Scroll to first highlighted pass on mount and enlarge it
    useEffect(() => {
        if (highlightedPassIndices && highlightedPassIndices.length > 0 && highlightedRef.current) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                highlightedRef.current?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'nearest'
                });
            }, 300);
        }
    }, [highlightedPassIndices]);

    return (
        <div className="page-container" style={{ paddingTop: '8.4px' }}>
            <section className="section" style={{ paddingTop: '14.4px', paddingLeft: '83.2px', paddingRight: '83.2px' }}>
                <div className="section-header-new" style={{ marginBottom: '16.8px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <h1 className="section-title-new" style={{ textAlign: 'center' }}>GET YOUR PASS</h1>
                </div>

                <p className="text-base mb-8 max-w-2xl mx-auto text-center" style={{ color: 'var(--color-text-secondary)' }}>
                    Early bird pricing available! Secure your spot at India's biggest
                    innovation summit.
                </p>

                <div className="w-full">
                    <div className="flex flex-col gap-6 mb-8">
                        {passes.map((pass, index) => {
                            const color = eventColors[pass.colorKey];
                            const isHighlighted = highlightedPassIndices ? highlightedPassIndices.includes(index) : false;
                            
                            return (
                        <div
                            key={index}
                            ref={isHighlighted && index === (highlightedPassIndices?.[0] ?? -1) ? highlightedRef : null}
                                    className="pass-card-item relative flex flex-col h-full group cursor-pointer rounded-xl overflow-hidden"
                                    style={{ 
                                        padding: isHighlighted ? '4rem 3rem' : '1.5rem', 
                                        height: '100%',
                                        maxHeight: isHighlighted ? '70vh' : '600px',
                                        width: isHighlighted ? '90%' : '80%',
                                        maxWidth: isHighlighted ? '56rem' : '80%',
                                        margin: '0.5rem auto',
                                        marginTop: '0.5rem',
                                        marginBottom: '0.5rem',
                                        background: color.gradient,
                                        opacity: isHighlighted ? 1 : 0.9,
                                        boxShadow: isHighlighted ? `0 30px 80px ${color.shadow}, 0 15px 40px rgba(0,0,0,0.5)` : `0 15px 40px ${color.shadow}`,
                                        border: isHighlighted ? '3px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
                                        transform: isHighlighted ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease, padding 0.5s ease, width 0.5s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        zIndex: isHighlighted ? 10 : 1,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isHighlighted) {
                                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                            e.currentTarget.style.opacity = '1';
                                            e.currentTarget.style.boxShadow = `0 25px 60px ${color.shadow}, 0 10px 30px rgba(0,0,0,0.3)`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isHighlighted) {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.opacity = '0.9';
                                            e.currentTarget.style.boxShadow = `0 15px 40px ${color.shadow}`;
                                        } else {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                >
                                    {/* Shine overlay effect */}
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                                        }}
                                    />
                                    
                                    {/* Mobile: Single column, Desktop: Two-column layout */}
                                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                                        {/* Mobile: Pass Name, Desktop: Left Column */}
                                        <div className="flex flex-col flex-shrink-0 md:w-[40%]">
                                            <h3 
                                                className={`font-bold mb-4 md:mb-6 ${isHighlighted ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}
                                                style={{ 
                                                    color: '#fff',
                                                    lineHeight: '1.3',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                                }}
                                            >
                                                {pass.name}
                                            </h3>
                                            
                                            {/* Price Section - Mobile only */}
                                            <div className="mb-4 md:hidden flex-shrink-0">
                                                {pass.price === "Contact Us" ? (
                                                    <div className="flex flex-col">
                                                        <span className={`font-semibold mb-1 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing:</span>
                                                        <span className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                    </div>
                                                ) : pass.price2 ? (
                                                    <div className="flex flex-row gap-4">
                                                        <div className="flex flex-col">
                                                            <span className={`font-semibold mb-0.5 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.priceLabel}</span>
                                                            <span className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className={`font-semibold mb-0.5 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.price2Label}</span>
                                                            <span className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`} style={{ color: '#fff' }}>{pass.price2}</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col">
                                                        <span className={`font-bold ${isHighlighted ? 'text-3xl' : 'text-2xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* CTA Buttons */}
                                            {pass.paymentLink ? (
                                                <div className="md:mt-auto space-y-3 md:space-y-4">
                                                    <a
                                                        href={pass.paymentLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`w-full md:w-auto rounded-lg font-bold transition-all duration-300 hover:scale-105 text-center block ${isHighlighted ? 'py-3 md:py-4 text-base md:text-lg' : 'py-2.5 md:py-3 text-sm md:text-base'}`}
                                                        style={{ 
                                                            background: 'rgba(255,255,255,0.95)', 
                                                            color: '#1a1a2e',
                                                            border: 'none', 
                                                            textDecoration: 'none',
                                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                            minWidth: '140px'
                                                        }}
                                                    >
                                                        Buy Now
                                                    </a>
                                                    {(pass as any).teamPassLink && (
                                                        <a
                                                            href={(pass as any).teamPassLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`w-full md:w-auto rounded-lg font-bold transition-all duration-300 hover:scale-105 text-center block ${isHighlighted ? 'py-3 md:py-4 text-base md:text-lg' : 'py-2.5 md:py-3 text-sm md:text-base'}`}
                                                            style={{ 
                                                                background: 'rgba(255,255,255,0.7)', 
                                                                color: '#1a1a2e',
                                                                border: '2px solid rgba(255,255,255,0.5)', 
                                                                textDecoration: 'none',
                                                                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                                                                minWidth: '140px'
                                                            }}
                                                        >
                                                            Team Pass
                                                        </a>
                                                    )}
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => navigate({ to: '/about' })}
                                                    className={`md:mt-auto w-full md:w-auto rounded-lg font-bold transition-all duration-300 hover:scale-105 ${isHighlighted ? 'py-3 md:py-4 text-base md:text-lg' : 'py-2.5 md:py-3 text-sm md:text-base'}`}
                                                    style={{ 
                                                        background: 'rgba(255,255,255,0.95)', 
                                                        color: '#1a1a2e',
                                                        border: 'none',
                                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                        minWidth: '140px'
                                                    }}
                                                >
                                                    Contact Us
                                                </button>
                                            )}
                                        </div>
                                        
                                        {/* Desktop: Right Column: Price and Features */}
                                        <div className="hidden md:flex flex-col flex-grow md:w-[60%]">
                                            {/* Price Section */}
                                            <div className="mb-6 flex-shrink-0">
                                                {pass.price === "Contact Us" ? (
                                                    <div className="flex flex-col">
                                                        <span className={`font-semibold mb-1 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing:</span>
                                                        <span className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                    </div>
                                                ) : pass.price2 ? (
                                                    <div className="flex flex-row gap-6">
                                                        <div className="flex flex-col">
                                                            <span className={`font-semibold mb-0.5 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.priceLabel}</span>
                                                            <span className={`font-bold ${isHighlighted ? 'text-3xl' : 'text-2xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className={`font-semibold mb-0.5 ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.price2Label}</span>
                                                            <span className={`font-bold ${isHighlighted ? 'text-3xl' : 'text-2xl'}`} style={{ color: '#fff' }}>{pass.price2}</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col">
                                                        <span className={`font-bold ${isHighlighted ? 'text-4xl' : 'text-3xl'}`} style={{ color: '#fff' }}>{pass.price}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Features List */}
                                            <ul className="flex-grow overflow-y-auto pr-1 mt-1 space-y-2" style={{ 
                                                maxHeight: isHighlighted ? 'calc(70vh - 250px)' : 'calc(100% - 100px)',
                                                minHeight: '200px',
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                                            }}>
                                                {pass.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span 
                                                            className={`mt-0.5 flex-shrink-0 font-bold ${isHighlighted ? 'text-base' : 'text-sm'}`}
                                                            style={{ color: '#fff' }}
                                                        >
                                                            ✓
                                                        </span>
                                                        <span className={`leading-relaxed ${isHighlighted ? 'text-sm' : 'text-xs'}`} style={{ color: 'rgba(255,255,255,0.9)' }}>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Mobile: Features List */}
                                        <div className="md:hidden">
                                            <ul className="overflow-y-auto pr-1 space-y-2" style={{ 
                                                maxHeight: '300px',
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                                            }}>
                                                {pass.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span 
                                                            className="mt-0.5 flex-shrink-0 font-bold text-sm"
                                                            style={{ color: '#fff' }}
                                                        >
                                                            ✓
                                                        </span>
                                                        <span className="leading-relaxed text-xs" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                        </div>
                            );
                        })}
                </div>
                </div>
            </section>
        </div>
    );
};

export default PassesPage;

