import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import gicLogo from "../assets/gic-logo.jpeg";

const slides = [
  {
    highlight: "Knowledge Bubble",
    title: "Explore cutting-edge insights from industry leaders",
    stat: "500+",
    statLabel: "Expert Mentors",
    icon: Lightbulb,
  },
  {
    highlight: "Alpha2Infiniti",
    title: "Transform your student innovation into reality",
    stat: "10,000+",
    statLabel: "Participants",
    icon: Users,
  },
  {
    highlight: "InnoVestors BootCamp",
    title: "Secure funding opportunities for your startup",
    stat: "₹10Cr",
    statLabel: "Investment Pool",
    icon: Trophy,
  },
  {
    highlight: "BusiTech Expo",
    title: "Showcase your innovations to the world",
    stat: "100+",
    statLabel: "Startups",
    icon: Rocket,
  },
  {
    highlight: "Masterminds Congregation",
    title: "Empowering the next generation of innovators",
    stat: "50+",
    statLabel: "Schools",
    icon: Lightbulb,
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);



  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-gic-dark via-gic-dark via-primary/5 to-primary/3"
    >


      {/* Grid pattern - 5% visible */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base grid - 5% visible */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#8B7BB5 1px, transparent 1px), linear-gradient(90deg, #8B7BB5 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>


      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative z-10 w-full">
        {/* Title and Badge - Above Grid */}
        <div className="mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-8 md:space-y-10">
          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border border-gic-violet/30 shadow-lg shadow-primary/15 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-gic-lavender font-semibold text-sm">27-28 February 2026</span>
            </div>
            <div className="w-px h-4 bg-gic-violet/40" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gic-violet" />
              <span className="text-gic-lavender font-semibold text-sm">Hyderabad, India</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center group"
            >
              <div className="flex flex-col mb-1 capitalize">
                <span
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-white/90 ml-1 mb-2"
                  style={{
                    fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    letterSpacing: '0.05em',
                    lineHeight: '1',
                  }}
                >
                  SMEC's
                </span>
                <div style={{ transform: 'scale(0.75)', transformOrigin: 'left center', display: 'inline-block' }}>
                  <motion.h2
                    whileHover={{
                      textShadow: "0 0 6px rgba(169, 155, 212, 0.18), 0 0 12px rgba(139, 123, 181, 0.12), 0 0 18px rgba(169, 155, 212, 0.09)",
                      filter: "drop-shadow(0 0 3px rgba(169, 155, 212, 0.15))",
                      transition: { duration: 0.3 }
                    }}
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold flex flex-wrap sm:flex-nowrap items-center cursor-pointer transition-all duration-300"
                    style={{
                      fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                      fontStyle: 'normal',
                      letterSpacing: '0.02em',
                      lineHeight: '1.1',
                      fontWeight: 700,
                      gap: '0.1875rem',
                      color: 'rgba(226, 218, 255, 0.9)'
                    }}
                  >
                    {['Global', 'Innovators', 'Conclave', '2026'].map((word, index) => (
                      <span
                        key={index}
                        className="inline-block py-1 rounded"
                        style={{
                          transformOrigin: 'center',
                          display: 'inline-block',
                          paddingLeft: '0.375rem',
                          paddingRight: '0.375rem',
                          marginLeft: index === 0 ? '0' : '0.09375rem',
                          marginRight: index === 3 ? '0' : '0.09375rem',
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </motion.h2>
                </div>
              </div>
            </motion.div>


          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Title Highlight */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight italic break-words sm:whitespace-nowrap"
                    style={{
                      fontStyle: 'italic',
                      transform: 'skewX(-8deg)',
                      fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    }}
                  >
                    <span
                      className="bg-gradient-to-r from-gic-lavender via-gic-violet via-primary to-gic-lavender bg-clip-text text-transparent animate-gradient"
                      style={{
                        textShadow: '0 0 10px rgba(139, 123, 181, 0.15), 0 0 20px rgba(169, 155, 212, 0.1), 0 0 30px rgba(139, 123, 181, 0.05)',
                        filter: 'drop-shadow(0 0 4px rgba(169, 155, 212, 0.12))',
                        fontStyle: 'italic',
                        transform: 'skewX(-8deg)',
                      }}
                    >
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-gic-lavender/80 text-lg sm:text-xl mt-4 leading-relaxed max-w-xl italic"
                    style={{
                      fontStyle: 'italic',
                      transform: 'skewX(-6deg)',
                      fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    }}
                  >
                    {slide.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stats Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">{slide.stat}</p>
                  <p className="text-gic-violet/70 text-sm">{slide.statLabel}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">2</p>
                  <p className="text-gic-violet/70 text-sm">Days Event</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">₹5L+</p>
                  <p className="text-gic-violet/70 text-sm">Prize Pool</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-gradient-to-r from-primary via-gic-violet to-primary hover:from-gic-violet hover:via-primary hover:to-gic-violet text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/events">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-gic-violet/50 text-gic-lavender hover:bg-gic-violet/20 hover:border-gic-violet hover:shadow-lg hover:shadow-primary/40 transition-all">
                    <Play className="w-4 h-4 mr-2" />
                    Explore Programs
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Carousel Dots */}
            <div className="flex gap-2 pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                    ? "w-10 bg-gradient-to-r from-gic-lavender via-gic-violet to-primary"
                    : "w-2 bg-gic-violet/30 hover:bg-gic-lavender/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center pt-10 translate-y-[5%]">
            <div className="relative w-full max-w-lg">
              {/* Main Logo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Glowing ring - dimmed violet */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-gic-violet to-primary opacity-15 blur-2xl scale-105"
                  animate={{ opacity: [0.12, 0.2, 0.12], scale: [1.05, 1.1, 1.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Logo with subtle violet border */}
                <div className="relative bg-gic-dark rounded-full p-4 shadow-lg border border-gic-violet/30 shadow-primary/15">
                  <img
                    src={gicLogo}
                    alt="GIC 2026"
                    className="w-80 h-80 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -top-4 -right-8 bg-gradient-to-br from-primary/8 via-gic-violet/8 to-primary/8 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-gic-violet to-gic-lavender flex items-center justify-center">
                    <SlideIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gic-violet/70 font-medium">Featured</p>
                    <p className="font-display font-bold text-gic-lavender">{slide.highlight}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-4 -left-8 bg-gradient-to-br from-primary/12 to-gic-violet/12 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="space-y-1">
                  <p className="text-3xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent">₹10Cr</p>
                  <p className="text-sm text-gic-lavender/90">Investment Opportunity</p>
                  <p className="text-xs text-gic-violet/70">for selected startups</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 -right-16 -translate-y-1/2 bg-gradient-to-br from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary via-gic-violet to-gic-lavender border-2 border-gic-violet/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gic-lavender">10K+ Joined</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

