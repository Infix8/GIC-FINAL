import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import CountdownTimer from './CountdownTimer';
import About from './About';
import Pillars from './Pillars';
import Themes from './Themes';
import Structure from './Structure';
import Contact from './Contact';

const Home: React.FC = () => {
    useEffect(() => {
        // re-trigger initial animations if needed when navigating back
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => el.classList.add('fade-init'));
    }, []);

    return (
        <>
            <div
                className="w-full text-center px-4 sm:px-6 md:px-8 pt-4 pb-2"
                style={{ background: 'transparent' }}
            >
                <div className="max-w-7xl mx-auto">
                    <h1
                        className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase"
                        style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            letterSpacing: '0.25em'
                        }}
                    >
                        ST. MARTIN&apos;S ENGINEERING COLLEGE
                    </h1>
                </div>
            </div>
            <HeroSection />
            <CountdownTimer />
            <About />
            <Pillars />
            <Themes />
            <Structure />
            {/* Agenda removed from here as it has its own page now */}
            <Contact />
        </>
    );
};

export default Home;
