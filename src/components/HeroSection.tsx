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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client side to avoid hydration issues
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Disable auto-slide on mobile for better performance
    if (isMobile) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);



  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gic-dark via-gic-dark via-primary/5 to-primary/3"
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


      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative z-10 w-full">
        {/* Title and Badge - Above Grid */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {/* Event Badge - Hidden on Mobile */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={isMobile ? {} : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="hidden md:inline-flex flex-row items-center gap-3 bg-gradient-to-r from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-4 md:px-5 py-2.5 border border-gic-violet/30 shadow-lg shadow-primary/15 text-sm"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-gic-lavender font-semibold text-sm whitespace-nowrap">27-28 February 2026</span>
            </div>
            <div className="w-px h-4 bg-gic-violet/40" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gic-violet flex-shrink-0" />
              <span className="text-gic-lavender font-semibold text-sm whitespace-nowrap">Hyderabad, India</span>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={isMobile ? {} : { delay: 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center group"
            >
              <div className="flex flex-col mb-1 capitalize w-full">
                <span
                  className="font-bold text-white/90 ml-1 mb-1 sm:mb-2"
                  style={{
                    fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    letterSpacing: '0.05em',
                    lineHeight: '1.1',
                    fontSize: 'clamp(0.6rem, 1.2vw, 1.35rem)',
                    display: 'inline-block'
                  }}
                >
                  SMEC's
                </span>
                <div 
                  style={{ transform: 'scale(0.75)', transformOrigin: 'left center', display: 'inline-block', width: '100%' }}
                >
                  <h2
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold flex flex-wrap items-center cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_3px_rgba(169,155,212,0.15)]"
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
                        className="inline-block py-0.5 sm:py-1 rounded"
                        style={{
                          transformOrigin: 'center',
                          display: 'inline-block',
                          paddingLeft: '0.25rem',
                          paddingRight: '0.25rem',
                          marginLeft: index === 0 ? '0' : '0.09375rem',
                          marginRight: index === 3 ? '0' : '0.09375rem',
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </h2>
                </div>
              </div>
            </motion.div>


          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Title Highlight */}
            <div className="space-y-3 sm:space-y-4">
              {isMobile ? (
                /* Static content on mobile - no animations */
                <div>
                  <h1 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight italic break-words"
                    style={{
                      fontStyle: 'italic',
                      transform: 'skewX(-8deg)',
                      fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    }}
                  >
                    <span
                      className="bg-gradient-to-r from-gic-lavender via-gic-violet via-primary to-gic-lavender bg-clip-text text-transparent"
                      style={{
                        fontStyle: 'italic',
                        transform: 'skewX(-8deg)',
                      }}
                    >
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-gic-lavender/80 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-xl italic"
                    style={{
                      fontStyle: 'italic',
                      transform: 'skewX(-6deg)',
                      fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                    }}
                  >
                    {slide.title}
                  </p>
                </div>
              ) : (
                /* Animated content on desktop */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <h1 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight italic break-words"
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
                    <p className="text-gic-lavender/80 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-xl italic"
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
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">{slide.stat}</p>
                <p className="text-gic-violet/70 text-xs sm:text-sm">{slide.statLabel}</p>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">2</p>
                <p className="text-gic-violet/70 text-xs sm:text-sm">Days Event</p>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">₹5L+</p>
                <p className="text-gic-violet/70 text-xs sm:text-sm">Prize Pool</p>
              </div>
            </div>

            {/* Register for Event Button - Prominent */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20, scale: 0.95 }}
              animate={isMobile ? {} : { opacity: 1, y: 0, scale: 1 }}
              transition={isMobile ? {} : { delay: 0.35, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="pt-4 sm:pt-6"
            >
              <Link to="/passes" className="block w-full">
                <div 
                  className="relative w-full hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-xl shadow-primary/30"
                  >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-gic-violet via-primary to-gic-violet opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gic-lavender/20 via-transparent to-primary/20" />
                    
                    {/* Static shine effect on desktop only */}
                    {!isMobile && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"
                        style={{ width: "50%", transform: "skewX(-20deg)" }}
                      />
                    )}
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center justify-center text-center">
                      <Button size="xl" className="w-full bg-transparent hover:bg-transparent border-0 text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                        Register for Event
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto bg-gradient-to-r from-primary via-gic-violet to-primary hover:from-gic-violet hover:via-primary hover:to-gic-violet text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-200 hover:scale-105 active:scale-95">
                  Learn More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/events" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full font-semibold border-2 border-gic-violet/50 text-gic-lavender hover:bg-gic-violet/20 hover:border-gic-violet hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 hover:scale-105 active:scale-95">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 pt-4 sm:pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 min-w-[8px] min-h-[8px] hover:scale-110 active:scale-90 ${index === currentSlide
                    ? "w-8 sm:w-10 bg-gradient-to-r from-gic-lavender via-gic-violet to-primary"
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
                  <p className="text-3xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent">₹10Cr</p>
                  <p className="text-sm text-gic-lavender/90">Investment Opportunity</p>
                  <p className="text-xs text-gic-violet/70">for selected startups</p>
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
                  <span className="text-sm font-semibold text-gic-lavender">10K+ Joined</span>
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

