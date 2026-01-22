import React from 'react';

const About = () => {
    return (
        <section className="py-20" id="about">
            <div className="max-w-[75%] mx-auto px-6 md:px-2">
                {/* Section header */}
                <div className="mb-12">
                    <h2 className="about-title text-4xl md:text-5xl font-bold mt-2" style={{ color: 'var(--color-text-primary)' }}>ABOUT THE CONCLAVE</h2>
                </div>

                <div className="about-content space-y-8">
                    {/* Mission statement - large text */}
                    <div
                        className="about-block p-8 rounded-xl card-hover-effect"
                        style={{
                            background: 'var(--color-bg-secondary)',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>Mission</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-justify w-full" style={{ color: 'var(--color-text-primary)' }}>
                            The primary mission of <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>SMEC’s Global Innovators Conclave 2026</span> is to foster <span style={{ fontWeight: 600 }}>deep-tech innovation and entrepreneurship</span> by creating a robust ecosystem that connects high-potential teams with funding opportunities, expert mentorship, and strategic industry partnerships.
                        </p>
                    </div>

                    {/* Info cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="about-block p-6 rounded-xl card-hover-effect"
                            style={{
                                background: 'var(--color-bg-secondary)',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                        >
                            <h3 className="text-lg font-bold mt-2" style={{ color: 'var(--color-text-primary)' }}>Vision</h3>
                            <p className="mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                                To make campus innovation a <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>launchpad</span> that strengthens India's Deep-tech ecosystem and scales ideas to the world.
                            </p>
                        </div>

                        <div
                            className="about-block p-6 rounded-xl card-hover-effect"
                            style={{
                                background: 'var(--color-bg-secondary)',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                        >
                            <h3 className="text-lg font-bold mt-2" style={{ color: 'var(--color-text-primary)' }}>Objectives</h3>
                            <ul className="mt-2 space-y-2 text-sm list-disc pl-4" style={{ color: 'var(--color-text-secondary)' }}>
                                <li>Foster Innovation and Entrepreneurship culture</li>
                                <li>Promote Deep-Tech and Problem-Driven Innovation</li>
                                <li>Connect talent with incubators & global industry</li>
                                <li>Enable mentorship and market access</li>
                                <li>Contribute to India's innovation leadership</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

