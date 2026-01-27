import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Box, Container, Stack, Typography, useTheme, Grid } from "@mui/material";
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
  const theme = useTheme();
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
    // Auto-slide enabled for both mobile and desktop - fast and lightweight
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Faster: 4 seconds instead of 5
    return () => clearInterval(timer);
  }, []);



  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <Box
      component="section"
      ref={sectionRef}
      className="flowing-bg flowing-bg-hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 5rem)', sm: 'calc(100vh - 6rem)', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        // CRITICAL: Remove overflow:hidden on mobile to allow touch scrolling
        overflow: { xs: 'visible', md: 'hidden' },
        background: theme.palette.background.default,
      }}
    >
      {/* Grid pattern - 5% visible */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.025,
            backgroundImage: `linear-gradient(${theme.palette.primary.main} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.primary.main} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: '100%', sm: '95%', md: '90%', lg: '85%', xl: '75%' },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          pt: { xs: 2, sm: 3, md: 7, lg: 8 },
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        {/* Title and Badge - Above Grid */}
        <Stack
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          sx={{
            mb: { xs: 2, sm: 3, md: 4, lg: 6 },
          }}
        >
          {/* Event Badge - Hidden on Mobile */}
          <Box
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
              background: `linear-gradient(to right, ${theme.palette.primary.main}1A, ${theme.palette.secondary.main}1A, ${theme.palette.primary.main}1A)`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              px: { md: 2, lg: 2.5 },
              py: 1.25,
              border: `1px solid ${theme.palette.secondary.main}4D`,
              boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}26`,
              fontSize: '0.875rem',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Calendar style={{ width: '16px', height: '16px', color: theme.palette.primary.main, flexShrink: 0 }} />
              <Typography
                sx={{
                  color: 'secondary.light',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                }}
              >
                27-28 February 2026
              </Typography>
            </Stack>
            <Box
              sx={{
                width: '1px',
                height: '16px',
                bgcolor: `${theme.palette.secondary.main}66`,
              }}
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <MapPin style={{ width: '16px', height: '16px', color: theme.palette.secondary.main, flexShrink: 0 }} />
              <Typography
                sx={{
                  color: 'secondary.light',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Hyderabad, India
              </Typography>
            </Stack>
          </Box>

          <Stack spacing={{ xs: 2, sm: 3 }}>
            <div className="flex items-center group">
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
            </div>


          </Stack>
        </Stack>

        <Grid container spacing={{ xs: 3, sm: 4, md: 6, lg: 8 }} sx={{ alignItems: 'flex-start' }}>
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={{ xs: 3, sm: 4 }}>
            {/* Main Title Highlight - Slide animation for both mobile and desktop */}
            <Stack spacing={{ xs: 1.5, sm: 2 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
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
                </motion.div>
              </AnimatePresence>
            </Stack>

            {/* Stats Grid */}
            <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={{ xs: 0.25, sm: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.875rem', lg: '2.25rem' },
                      fontWeight: 'bold',
                      background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {slide.stat}
                  </Typography>
                  <Typography
                    sx={{
                      color: `${theme.palette.secondary.main}B3`,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    {slide.statLabel}
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={{ xs: 0.25, sm: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.875rem', lg: '2.25rem' },
                      fontWeight: 'bold',
                      background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    2
                  </Typography>
                  <Typography
                    sx={{
                      color: `${theme.palette.secondary.main}B3`,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    Days Event
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={{ xs: 0.25, sm: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.875rem', lg: '2.25rem' },
                      fontWeight: 'bold',
                      background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    ₹5L+
                  </Typography>
                  <Typography
                    sx={{
                      color: `${theme.palette.secondary.main}B3`,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    Prize Pool
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link to="/passes" className="w-full sm:w-auto sm:flex-1">
                <Button size="xl" className="w-full sm:w-auto bg-gradient-to-r from-primary via-gic-violet to-primary hover:from-gic-violet hover:via-primary hover:to-gic-violet text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-200 hover:scale-105 active:scale-95">
                  Register
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/events" className="w-full sm:w-auto sm:flex-1">
                <Button size="xl" variant="outline" className="w-full sm:w-auto rounded-full font-semibold border-2 border-gic-violet/50 text-gic-lavender hover:bg-gic-violet/20 hover:border-gic-violet hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 hover:scale-105 active:scale-95">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>

          </Grid>

          {/* Right Content - Visual Element */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                position: 'relative',
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                pt: 2.5,
                transform: 'translateY(5%)',
              }}
            >
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

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

