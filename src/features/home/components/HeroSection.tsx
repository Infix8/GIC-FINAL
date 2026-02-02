import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import gicLogo from "@/assets/gic-logo.jpeg";

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

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [investmentValue, setInvestmentValue] = useState(0);
  const investmentValues = ["₹10Cr", "₹5L"];

  // Detect mobile on client side to avoid hydration issues
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Auto-slide enabled for both mobile and desktop - fast and lightweight
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Faster: 4 seconds instead of 5
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cycle between ₹10Cr and ₹5L
    const timer = setInterval(() => {
      setInvestmentValue((prev) => (prev + 1) % investmentValues.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);



  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-100px)] flex items-center overflow-hidden bg-gic-dark flowing-bg flowing-bg-hero"
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


      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 pb-6 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 pt-6 sm:pt-12 md:pt-6 lg:pt-8 relative z-10 w-full">
        {/* Title and Badge - Centered */}
        <div className="mb-6 sm:mb-6 md:mb-8 lg:mb-12 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 flex flex-col items-center text-center">
          {/* Event Badge - Centered, Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border border-gic-violet/30 shadow-lg shadow-primary/15 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-gic-lavender font-semibold whitespace-nowrap">27-28 Feb 2026</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gic-violet/40" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gic-violet flex-shrink-0" />
              <span className="text-gic-lavender font-semibold whitespace-nowrap">Hyderabad</span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-6 w-full flex flex-col items-center px-2">
            <div className="flex items-center justify-center group w-full">
              <div className="flex flex-col items-center mb-1 capitalize w-full">
                <span
                  className="font-bold text-white/90 mb-1 sm:mb-2"
                  style={{
                    fontFamily: 'var(--font-elegant)',
                    letterSpacing: '0.05em',
                    lineHeight: '1.1',
                    fontSize: 'clamp(0.55rem, 2vw, 1.35rem)',
                    display: 'inline-block'
                  }}
                >
                  SMEC's
                </span>
                <div 
                  className="w-full overflow-hidden"
                  style={{ transform: 'scale(1)', transformOrigin: 'center', display: 'inline-block' }}
                >
                  <h2
                    className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold flex flex-wrap sm:flex-nowrap items-center justify-center cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_3px_rgba(169,155,212,0.15)] gap-0.5 sm:gap-1.5"
                    style={{
                      fontFamily: 'var(--font-elegant)',
                      fontStyle: 'normal',
                      letterSpacing: '0.02em',
                      lineHeight: '1.1',
                      fontWeight: 700,
                      color: 'rgba(226, 218, 255, 0.9)'
                    }}
                  >
                    {['Global', 'Innovators', 'Conclave', '2026'].map((word, index) => (
                      <span
                        key={index}
                        className="inline-block py-0.5 sm:py-1 rounded px-0.5 sm:px-1"
                        style={{
                          transformOrigin: 'center',
                          display: 'inline-block',
                          marginLeft: index === 0 ? '0' : '0.125rem',
                          marginRight: index === 3 ? '0' : '0.125rem',
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Main Title Highlight - Slide animation for both mobile and desktop */}
            <div className="space-y-2 sm:space-y-4 w-full px-2 sm:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex flex-col items-center lg:items-start w-full"
                >
                  <h1 className="font-display text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.15] sm:leading-[1.05] tracking-tight break-words text-center lg:text-left px-2 sm:px-0"
                    style={{
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    <span
                      className="bg-gradient-to-r from-gic-lavender via-gic-violet via-primary to-gic-lavender bg-clip-text text-transparent"
                    >
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-gic-lavender/80 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
                    style={{
                      fontFamily: 'var(--font-primary)',
                    }}
                  >
                    {slide.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              <div className="space-y-0.5 sm:space-y-1 flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">{slide.stat}</p>
                <p className="text-gic-violet/70 text-[10px] xs:text-xs sm:text-sm text-center lg:text-left leading-tight">{slide.statLabel}</p>
              </div>
              <div className="space-y-0.5 sm:space-y-1 flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">2</p>
                <p className="text-gic-violet/70 text-[10px] xs:text-xs sm:text-sm text-center lg:text-left leading-tight">Days Event</p>
              </div>
              <div className="space-y-0.5 sm:space-y-1 flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">₹5L+</p>
                <p className="text-gic-violet/70 text-[10px] xs:text-xs sm:text-sm text-center lg:text-left leading-tight">Prize Pool</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              <Link to="/passes" className="w-full">
                <Button size="xl" className="w-full bg-gradient-to-r from-primary via-gic-violet to-primary hover:from-gic-violet hover:via-primary hover:to-gic-violet text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-200 hover:scale-105 active:scale-95 text-base sm:text-lg py-6 sm:py-7">
                  Register
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/events" className="w-full">
                <Button size="xl" variant="outline" className="w-full rounded-full font-semibold border-2 border-gic-violet/50 text-gic-lavender hover:bg-gic-violet/20 hover:border-gic-violet hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 hover:scale-105 active:scale-95 text-base sm:text-lg py-6 sm:py-7">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center pt-10 translate-y-[5%]">
            <div className="relative w-full max-w-lg">
              {/* Main Logo Container */}
              <div className="relative z-10">
                {/* Glowing ring - static on load */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-gic-violet to-primary opacity-15 blur-2xl scale-105"
                />

                {/* Logo with subtle violet border */}
                <div className="relative bg-gic-dark rounded-full p-4 shadow-lg border border-gic-violet/30 shadow-primary/15">
                  <img
                    src={gicLogo}
                    alt="GIC 2026"
                    className="w-80 h-80 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards - CSS transitions only */}
              <div
                className="absolute -top-4 -right-8 bg-gradient-to-br from-primary/8 via-gic-violet/8 to-primary/8 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
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
              </div>

              <div
                className="absolute -bottom-4 -left-8 bg-gradient-to-br from-primary/12 to-gic-violet/12 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10 hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent h-10 flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={investmentValue}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent"
                      >
                        {investmentValues[investmentValue]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`label-${investmentValue}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm text-gic-lavender/90"
                    >
                      {investmentValue === 0 ? "Investment Opportunity" : "Prize Pool"}
                    </motion.p>
                  </AnimatePresence>
                  {investmentValue === 0 && (
                    <AnimatePresence>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs text-gic-violet/70"
                      >
                        for selected startups
                      </motion.p>
                    </AnimatePresence>
                  )}
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-16 -translate-y-1/2 bg-gradient-to-br from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary via-gic-violet to-gic-lavender border-2 border-gic-violet/30"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gic-lavender">Register Now</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

