import React, { useEffect, lazy, Suspense } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SuspenseLoader } from '~components/SuspenseLoader/SuspenseLoader';

// Lazy load heavy components for code splitting
const HeroSection = lazy(() => import('./HeroSection'));
const CountdownTimer = lazy(() => import('./CountdownTimer'));
const About = lazy(() => import('./About'));
const Pillars = lazy(() => import('./Pillars'));
const Themes = lazy(() => import('./Themes'));
const Structure = lazy(() => import('./Structure'));
const Contact = lazy(() => import('./Contact'));

const Home: React.FC = () => {
    useEffect(() => {
        // re-trigger initial animations if needed when navigating back
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => el.classList.add('fade-init'));
    }, []);

    return (
        <div className="relative" style={{ background: 'var(--color-bg-primary)' }}>
            <SuspenseLoader>
                <HeroSection />
            </SuspenseLoader>
            <SuspenseLoader>
                <CountdownTimer />
            </SuspenseLoader>
            <SuspenseLoader>
                <About />
            </SuspenseLoader>
            <SuspenseLoader>
                <Pillars />
            </SuspenseLoader>
            <SuspenseLoader>
                <Themes />
            </SuspenseLoader>
            <SuspenseLoader>
                <Structure />
            </SuspenseLoader>
            <SuspenseLoader>
                <Contact />
            </SuspenseLoader>
        </div>
    );
};

export default Home;
