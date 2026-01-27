import { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Agenda', path: '/agenda' },
        { name: 'Themes', path: '/#themes' },
    ];

    const getActivePath = () => {
        const path = location.pathname;
        const hash = location.hash || '';

        if (path === '/' && !hash) return 'Home';
        if (path === '/' && hash === '#about') return 'About';
        if (path === '/agenda') return 'Agenda';
        if (path === '/' && hash === '#themes') return 'Themes';
        return 'Home';
    };

    const activeTab = getActivePath();

    const isHome = location.pathname === '/';
    const showBackground = scrolled || !isHome || isMenuOpen;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${showBackground ? 'bg-bg-primary/95 shadow-lg backdrop-blur-lg' : 'bg-transparent'
            }`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                {/* Logo */}
                <div className="z-50">
                    <Link to="/" className="block">
                        <img
                            src={logo}
                            alt="GIC Logo"
                            className="h-12 md:h-14 w-auto hover:scale-105 transition-all duration-300 drop-shadow-lg"
                            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation - Centered Floating Pill */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-gic-violet/10 border border-gic-violet/20 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-2xl shadow-gic-violet/20">
                        {navItems.map((item) => {
                            const isActive = activeTab === item.name;
                            const isLink = item.path.startsWith('/') && !item.path.includes('#');

                            return isLink ? (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${isActive
                                        ? 'text-gic-lavender'
                                        : 'text-gic-violet/70 hover:text-gic-lavender'
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-lamp"
                                            className="absolute inset-0 bg-gic-violet/20 rounded-full -z-10"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        >
                                            {/* Lamp glow effect */}
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-gic-lavender via-gic-violet to-primary rounded-t-full shadow-lg shadow-gic-violet/50">
                                                <div className="absolute w-12 h-8 bg-gic-lavender/30 rounded-full blur-lg -top-3 -left-1" />
                                                <div className="absolute w-8 h-6 bg-gic-violet/40 rounded-full blur-md -top-2" />
                                                <div className="absolute w-6 h-4 bg-primary/30 rounded-full blur-sm -top-1 left-2" />
                                            </div>
                                        </motion.div>
                                    )}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className={`relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${isActive
                                        ? 'text-gic-lavender'
                                        : 'text-gic-violet/70 hover:text-gic-lavender'
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-lamp"
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        >
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-gic-lavender via-gic-violet to-primary rounded-t-full shadow-lg shadow-primary/50">
                                                <div className="absolute w-12 h-8 bg-gic-lavender/30 rounded-full blur-lg -top-3 -left-1" />
                                                <div className="absolute w-8 h-6 bg-gic-violet/40 rounded-full blur-md -top-2" />
                                                <div className="absolute w-6 h-4 bg-primary/30 rounded-full blur-sm -top-1 left-2" />
                                            </div>
                                        </motion.div>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gic-lavender z-50 focus:outline-none relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-8 h-8 flex items-center justify-center">
                        <motion.div
                            animate={isMenuOpen ? "open" : "closed"}
                            className="relative w-6 h-5"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 8 }
                                }}
                                className="absolute top-0 left-0 w-full h-0.5 bg-gic-lavender rounded-full"
                                style={{ transformOrigin: "center" }}
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                className="absolute top-2 left-0 w-full h-0.5 bg-gic-lavender rounded-full"
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -8 }
                                }}
                                className="absolute top-4 left-0 w-full h-0.5 bg-gic-lavender rounded-full"
                                style={{ transformOrigin: "center" }}
                            />
                        </motion.div>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={false}
                    animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed inset-0 bg-bg-primary/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center gap-6"
                >
                    {navItems.map((item, index) => {
                        const isLink = item.path.startsWith('/') && !item.path.includes('#');

                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {isLink ? (
                                    <Link
                                        to={item.path}
                                        className={`text-3xl font-display font-medium transition-colors ${activeTab === item.name
                                            ? 'text-gic-lavender'
                                            : 'text-gic-violet/80 hover:text-gic-lavender'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.path}
                                        className={`text-3xl font-display font-medium transition-colors ${activeTab === item.name
                                            ? 'text-gic-lavender'
                                            : 'text-gic-violet/80 hover:text-gic-lavender'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}

                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
