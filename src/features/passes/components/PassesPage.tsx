import { useNavigate } from '@tanstack/react-router';

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

const passes = [
    {
        name: "Delegate Pass",
        price: "₹1,000",
        priceLabel: "Student",
        price2: "₹2,500",
        price2Label: "Professional",
        paymentLink: "https://rzp.io/rzp/2fN43enK",
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
        name: "Student Expo",
        price: "₹3,000",
        priceLabel: "Team of 2",
        paymentLink: "https://rzp.io/rzp/NLhIGBLh",
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
        name: "Master Minds Congregation",
        price: "₹500",
        paymentLink: "https://rzp.io/rzp/dRZxNYCF",
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
    {
        name: "Alpha2Infiniti (Hackathon Program)",
        price: "₹1,000",
        paymentLink: "https://rzp.io/rzp/i2HdCsgB",
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
        name: "InnoVestors BootCamp",
        price: "₹2,000",
        paymentLink: "https://rzp.io/rzp/SKcZTfe",
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
];

const PassesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container" style={{ paddingTop: '8.4px' }}>
            <section className="section" style={{ paddingTop: '14.4px', paddingLeft: '83.2px', paddingRight: '83.2px' }}>
                <div className="section-header-new" style={{ marginBottom: '16.8px' }}>
                    <h1 className="section-title-new">GET YOUR PASS</h1>
                </div>

                <p className="text-base mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
                    Early bird pricing available! Secure your spot at India's biggest
                    innovation summit.
                </p>

                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {passes.map((pass, index) => {
                            const color = eventColors[pass.colorKey];
                            return (
                        <div
                            key={index}
                                    className="pass-card-item relative flex flex-col h-full group cursor-pointer rounded-xl overflow-hidden"
                                    style={{ 
                                        padding: '1.5rem', 
                                        height: '100%',
                                        maxHeight: '600px',
                                        background: color.gradient,
                                        opacity: 0.9,
                                        boxShadow: `0 15px 40px ${color.shadow}`,
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                        e.currentTarget.style.opacity = '1';
                                        e.currentTarget.style.boxShadow = `0 25px 60px ${color.shadow}, 0 10px 30px rgba(0,0,0,0.3)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.opacity = '0.9';
                                        e.currentTarget.style.boxShadow = `0 15px 40px ${color.shadow}`;
                                    }}
                                >
                                    {/* Shine overlay effect */}
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                                        }}
                                    />
                                    
                                    <h3 
                                        className="text-xl font-bold mb-3 relative z-10 flex-shrink-0" 
                                        style={{ 
                                            color: '#fff',
                                            lineHeight: '1.2',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        {pass.name}
                                    </h3>
                                    
                                    {/* Price Section */}
                                    <div className="mb-3 relative z-10 flex-shrink-0">
                                        {pass.price === "Contact Us" ? (
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing:</span>
                                                <span className="text-xl font-bold" style={{ color: '#fff' }}>{pass.price}</span>
                                            </div>
                                        ) : pass.price2 ? (
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.priceLabel}</span>
                                                    <span className="text-2xl font-bold" style={{ color: '#fff' }}>{pass.price}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{pass.price2Label}</span>
                                                    <span className="text-2xl font-bold" style={{ color: '#fff' }}>{pass.price2}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col">
                                                <span className="text-3xl font-bold" style={{ color: '#fff' }}>{pass.price}</span>
                                            </div>
                                        )}
                            </div>
                                    
                                    {/* Features List */}
                                    <ul className="mt-2 space-y-1.5 flex-grow relative z-10 overflow-y-auto pr-1" style={{ 
                                        maxHeight: '300px',
                                        minHeight: '180px',
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                                    }}>
                                {pass.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span 
                                                    className="text-sm mt-0.5 flex-shrink-0 font-bold" 
                                                    style={{ color: '#fff' }}
                                                >
                                                    ✓
                                                </span>
                                                <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                        {feature}
                                                </span>
                                    </li>
                                ))}
                            </ul>
                                    
                                    {/* CTA Button */}
                                    {pass.paymentLink ? (
                                        <a
                                            href={pass.paymentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-center block text-base relative z-10 flex-shrink-0"
                                            style={{ 
                                                background: 'rgba(255,255,255,0.95)', 
                                                color: '#1a1a2e',
                                                border: 'none', 
                                                textDecoration: 'none',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                            }}
                                        >
                                            Buy Now
                                        </a>
                                    ) : (
                            <button
                                onClick={() => navigate('/about')}
                                            className="mt-4 w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-base relative z-10 flex-shrink-0"
                                            style={{ 
                                                background: 'rgba(255,255,255,0.95)', 
                                                color: '#1a1a2e',
                                                border: 'none',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                            }}
                            >
                                            Contact Us
                            </button>
                                    )}
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

