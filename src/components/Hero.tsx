import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Countdown timer
    useEffect(() => {
        const targetDate = new Date('2026-02-27T00:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title reveal animation
            gsap.from('.hero-title-line', {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out',
                delay: 0.2,
            });

            // Metadata fade in
            gsap.from('.hero-meta', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                delay: 0.6,
            });

            // Stats cards stagger
            gsap.from('.stat-card', {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                delay: 1,
            });

            // CTA buttons
            gsap.from('.hero-cta', {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.8,
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { label: "Visitors", value: "10K+", number: "01" },
        { label: "Startups", value: "1K+", number: "02" },
        { label: "Investors", value: "100+", number: "03" },
        { label: "Speakers", value: "200+", number: "04" },
    ];

    return (
        <section ref={heroRef} className="hero-section-light" id="hero">
            {/* Main content area */}
            <div className="hero-content-light">
                {/* Massive title */}
                <h1 ref={titleRef} className="hero-title-light">
                    <span className="hero-title-line overflow-hidden block">
                        <span className="inline-block">GLOBAL</span>
                    </span>
                    <span className="hero-title-line overflow-hidden block">
                        <span className="inline-block">INNOVATORS</span>
                    </span>
                    <span className="hero-title-line overflow-hidden block">
                        <span className="inline-block text-accent">CONCLAVE</span>
                    </span>
                </h1>

                {/* Tagline */}
                <p className="hero-tagline hero-meta">
                    Innovating for India, Scaling to the world
                </p>

                {/* Event details - horizontal */}
                <div className="hero-details-light">
                    <div className="hero-meta detail-item">
                        <span className="detail-label">Date</span>
                        <span className="detail-value">Feb 27-28, 2026</span>
                    </div>
                    <span className="detail-divider">•</span>
                    <div className="hero-meta detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">St. Martin's Engineering College</span>
                    </div>
                    <span className="detail-divider">•</span>
                    <div className="hero-meta detail-item">
                        <span className="detail-label">Countdown</span>
                        <span className="detail-value font-mono">
                            {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M
                        </span>
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="hero-cta-group-light">
                    <button
                        onClick={() => navigate('/events')}
                        className="hero-cta cta-primary-light"
                    >
                        Explore Events
                        <span className="cta-arrow">→</span>
                    </button>
                    <a href="#about" className="hero-cta cta-secondary-light">
                        Learn More
                    </a>
                </div>
            </div>

            {/* Stats row - bottom */}
            <div className="hero-stats-light">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card stat-card-light">
                        <span className="stat-value-light">{stat.value}</span>
                        <span className="stat-label-light">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
