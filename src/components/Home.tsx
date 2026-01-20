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
