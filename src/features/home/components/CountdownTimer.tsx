import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { Box, Container, Typography, Stack, Grid, Paper, useTheme } from "@mui/material";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-02-27T09:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, icon: Calendar },
    { label: "Hours", value: timeLeft.hours, icon: Clock },
    { label: "Minutes", value: timeLeft.minutes, icon: Clock },
    { label: "Seconds", value: timeLeft.seconds, icon: Clock },
  ];

  return (
    <Box
      component="section"
      className="flowing-bg flowing-bg-countdown"
      sx={{
        position: 'relative',
        py: { xs: 4, sm: 5, lg: 6 },
        overflow: 'hidden',
        background: theme.palette.background.default,
      }}
    >
      {/* Background elements - static on mobile */}
      {!isMobile && (
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
              top: 0,
              left: '25%',
              width: '500px',
              height: '500px',
              background: `linear-gradient(to bottom right, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}33, ${theme.palette.secondary.light}26)`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: 0.5,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: '25%',
              width: '400px',
              height: '400px',
              background: `linear-gradient(to top right, ${theme.palette.secondary.main}40, ${theme.palette.primary.main}33, ${theme.palette.secondary.light}33)`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              opacity: 0.5,
            }}
          />
        </Box>
      )}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 }, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{
              mb: 1.5,
              width: '100%',
            }}
          >
            <Clock style={{ width: '16px', height: '16px' }} />
            <Typography
              sx={{
                color: 'secondary.light',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Mark Your Calendar
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' },
              fontWeight: 700,
              background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textAlign: 'center',
              width: '100%',
              letterSpacing: '-0.02em',
            }}
          >
            Event Starts In
          </Typography>
        </Box>

        {/* Countdown Cards */}
        <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }} sx={{ justifyContent: 'center' }}>
          {timeUnits.map((unit) => {
            const IconComponent = unit.icon;
            return (
              <Grid item xs={6} md={3} key={unit.label}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.05) translateY(-8px)',
                      transition: 'transform 0.3s ease',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {/* Glow effect - only on desktop */}
                  {!isMobile && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(to bottom right, ${theme.palette.secondary.light}66, ${theme.palette.secondary.main}4D, ${theme.palette.primary.main}33)`,
                        borderRadius: 2,
                        filter: 'blur(24px)',
                        opacity: 0.4,
                        '&:hover': {
                          opacity: 0.6,
                        },
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  )}
                  
                  {/* Card */}
                  <Paper
                    sx={{
                      position: 'relative',
                      background: `linear-gradient(to bottom right, ${theme.palette.primary.main}26, ${theme.palette.secondary.main}26, ${theme.palette.secondary.light}26)`,
                      border: `1px solid ${theme.palette.secondary.main}66`,
                      borderRadius: 2,
                      p: { xs: 3, sm: 4 },
                      textAlign: 'center',
                      boxShadow: `0 20px 25px -5px ${theme.palette.primary.main}33`,
                      '&:hover': {
                        borderColor: `${theme.palette.secondary.main}99`,
                      },
                      transition: 'all 0.3s ease',
                      ...(isMobile ? {} : { backdropFilter: 'blur(12px)' }),
                    }}
                  >
                    {/* Icon */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: `linear-gradient(to bottom right, ${theme.palette.primary.main}66, ${theme.palette.secondary.main}59, ${theme.palette.secondary.light}4D)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `1px solid ${theme.palette.secondary.main}80`,
                        }}
                      >
                        <IconComponent style={{ width: '20px', height: '20px', color: theme.palette.secondary.light }} />
                      </Box>
                    </Box>

                    {/* Number */}
                    <Typography
                      sx={{
                        display: 'block',
                        fontSize: { xs: '2.25rem', sm: '3rem', lg: '3.75rem', xl: '4.5rem' },
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        background: `linear-gradient(to bottom right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 1,
                      }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </Typography>

                    {/* Label */}
                    <Typography
                      sx={{
                        color: `${theme.palette.secondary.main}CC`,
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                      }}
                    >
                      {unit.label}
                    </Typography>

                    {/* Decorative corner accents */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        width: 12,
                        height: 12,
                        borderTop: `2px solid ${theme.palette.secondary.main}80`,
                        borderLeft: `2px solid ${theme.palette.secondary.main}80`,
                        borderTopLeftRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        width: 12,
                        height: 12,
                        borderTop: `2px solid ${theme.palette.secondary.main}80`,
                        borderRight: `2px solid ${theme.palette.secondary.main}80`,
                        borderTopRightRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: 8,
                        width: 12,
                        height: 12,
                        borderBottom: `2px solid ${theme.palette.secondary.main}80`,
                        borderLeft: `2px solid ${theme.palette.secondary.main}80`,
                        borderBottomLeftRadius: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        width: 12,
                        height: 12,
                        borderBottom: `2px solid ${theme.palette.secondary.main}80`,
                        borderRight: `2px solid ${theme.palette.secondary.main}80`,
                        borderBottomRightRadius: 1,
                      }}
                    />
                  </Paper>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Event Details */}
        <Box sx={{ mt: { xs: 6, sm: 8 }, textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{
              display: 'inline-flex',
              background: `linear-gradient(to right, ${theme.palette.primary.main}26, ${theme.palette.secondary.main}26, ${theme.palette.secondary.light}26)`,
              borderRadius: '9999px',
              px: 3,
              py: 1.5,
              border: `1px solid ${theme.palette.secondary.main}66`,
              boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}33`,
              ...(isMobile ? {} : { backdropFilter: 'blur(12px)' }),
            }}
          >
            <Calendar style={{ width: '16px', height: '16px', color: theme.palette.secondary.main }} />
            <Typography
              sx={{
                color: 'secondary.light',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              27-28 February 2026
            </Typography>
            <Box
              sx={{
                width: '1px',
                height: '16px',
                bgcolor: `${theme.palette.secondary.main}80`,
              }}
            />
            <Typography
              sx={{
                color: `${theme.palette.secondary.light}E6`,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Hyderabad, India
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CountdownTimer;

