
import React from 'react';

const Themes = () => {
    return (
        <section className="flowing-bg flowing-bg-themes pt-12 sm:pt-16 md:pt-20 pb-0 sm:pb-0 md:pb-1 px-4 sm:px-6 md:px-12" id="themes" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 sm:mb-10 md:mb-12 text-center">
                    <h2 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2" 
                        style={{ 
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-display)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Key Themes
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                <div
                    className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl card-hover-effect"
                    style={{
                        background: 'var(--color-bg-secondary)',
                        border: '1px solid rgba(139, 123, 181, 0.15)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Startup Theme</h3>
                    <p className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: 'var(--color-text-muted)' }}>Building, scaling, and commercializing startups from idea to global markets.</p>
                    <ul className="text-xs sm:text-sm space-y-1 opacity-80 list-disc pl-4" style={{ color: 'var(--color-text-secondary)' }}>
                        <li>Ideation, Mindset & Leadership</li>
                        <li>Go-to-Market & Product-Market Fit</li>
                        <li>Fundraising, Investments & Scaling</li>
                        <li>Commercialization, Operations & Legal</li>
                        <li>Branding, Sales & Global Expansion</li>
                    </ul>
                </div>
                <div
                    className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl card-hover-effect"
                    style={{
                        background: 'var(--color-bg-secondary)',
                        border: '1px solid rgba(139, 123, 181, 0.15)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Deep Tech Theme</h3>
                    <p className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: 'var(--color-text-muted)' }}>Advancing frontier technologies that shape national and global innovation.</p>
                    <ul className="text-xs sm:text-sm space-y-1 opacity-80 list-disc pl-4" style={{ color: 'var(--color-text-secondary)' }}>
                        <li>AI, Machine Learning & Data Centers</li>
                        <li>Quantum Technologies & Robotics</li>
                        <li>Space, Defence & Semiconductors</li>
                        <li>Biotechnology & Life Sciences</li>
                        <li>Clean Energy & Climate Technologies</li>
                    </ul>
                </div>
                </div>
                <div className="w-full flex flex-nowrap justify-center items-center gap-2 sm:gap-3 overflow-hidden">
                    {['Artificial Intelligence', 'Quantum Tech', 'Robotics', 'Space & Defence', 'Biotech', 'Clean Energy', 'Semiconductors', 'Advanced Materials', 'Smart Mobility'].map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
                            style={{
                                background: 'rgba(107, 91, 149, 0.1)',
                                color: 'var(--color-accent)',
                                border: '1px solid rgba(107, 91, 149, 0.2)'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;

