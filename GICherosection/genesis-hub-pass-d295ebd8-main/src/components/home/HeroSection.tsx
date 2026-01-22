import { useState, useEffect } from "react";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import gicLogo from "@/assets/gic-logo.jpeg";

const slides = [
  {
    highlight: "Knowledge Hub",
    title: "Explore cutting-edge insights from industry leaders",
    stat: "500+",
    statLabel: "Expert Mentors",
    icon: Lightbulb,
  },
  {
    highlight: "Alpha to Infinite",
    title: "Transform your student innovation into reality",
    stat: "10,000+",
    statLabel: "Participants",
    icon: Users,
  },
  {
    highlight: "Investors Boot Camp",
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
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gic-dark via-gic-dark to-primary/10">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 via-gic-violet/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-gic-lavender/20 via-primary/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-white font-semibold text-sm">27-28 February 2026</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white font-semibold text-sm">Hyderabad, India</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-semibold text-lg tracking-wide uppercase flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Global Innovators Conclave 2026
              </motion.p>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                    <span className="text-gradient-purple">{slide.highlight}</span>
                  </h1>
                  <p className="text-white/70 text-xl sm:text-2xl mt-4 leading-relaxed max-w-xl">
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
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold text-primary">{slide.stat}</p>
                  <p className="text-white/50 text-sm">{slide.statLabel}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold text-white">2</p>
                  <p className="text-white/50 text-sm">Days Event</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold text-white">₹5L+</p>
                  <p className="text-white/50 text-sm">Prize Pool</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/programs">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-primary">
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
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-10 bg-primary"
                      : "w-2 bg-white/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Logo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-gic-violet to-gic-lavender opacity-60 blur-2xl scale-110"
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.1, 1.2, 1.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Logo */}
                <div className="relative bg-gic-dark rounded-full p-4 shadow-2xl border border-white/10">
                  <img 
                    src={gicLogo} 
                    alt="GIC 2026" 
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -top-4 -right-8 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-gic-violet flex items-center justify-center">
                    <SlideIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Featured</p>
                    <p className="font-display font-bold text-foreground">{slide.highlight}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-4 -left-8 bg-gradient-to-br from-primary/20 to-gic-violet/20 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/10 z-20"
              >
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">₹10Cr</p>
                  <p className="text-sm text-white/80">Investment Opportunity</p>
                  <p className="text-xs text-white/50">for selected startups</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 -right-16 -translate-y-1/2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-primary/30 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-gic-violet border-2 border-card"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">10K+ Joined</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gic-violet/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
