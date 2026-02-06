import { useState, useEffect } from "react";
import { Clock, CalendarOff } from "lucide-react";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";

/** Set to true when the event is postponed; countdown is hidden and a notice is shown. */
const EVENT_POSTPONED = true;

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
    seconds: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (EVENT_POSTPONED) return;
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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (EVENT_POSTPONED) {
    return (
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 4, sm: 5, lg: 6 },
          overflow: { xs: 'visible', md: 'hidden' },
          background: 'var(--color-bg-primary)',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1.5 }}>
            <CalendarOff style={{ width: 20, height: 20, color: theme.palette.primary.light }} />
            <Typography
              sx={{
                color: 'secondary.light',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Event status
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: { xs: '1.5rem', sm: '1.75rem', lg: '2rem' },
              fontWeight: 700,
              color: theme.palette.text.primary,
              textAlign: 'center',
            }}
          >
            New dates to be announced
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            We will share updates and next steps for registered participants as soon as information becomes available.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 4, sm: 5, lg: 6 },
        overflow: { xs: 'visible', md: 'hidden' },
        background: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 }, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1.5, width: '100%' }}>
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
        <Stack
          direction="row"
          spacing={{ xs: 3, sm: 4, md: 6, lg: 8 }}
          sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, sm: 3 } }}
        >
          {timeUnits.map((unit) => (
            <Box key={unit.label} sx={{ textAlign: 'center', minWidth: { xs: '60px', sm: '80px' } }}>
              <Typography
                sx={{
                  display: 'block',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  background: `linear-gradient(to bottom right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 0.5,
                  lineHeight: 1.2,
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}CC`,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {unit.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CountdownTimer;

