/**
 * Official notice: GIC Event postponed indefinitely.
 * Displayed prominently on the home page.
 */

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { AlertCircle } from 'lucide-react';

const EventPostponementNotice: React.FC = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll directly to announcement when navigating via hash (e.g. Register buttons)
  useEffect(() => {
    const scrollToNotice = () => {
      const el = sectionRef.current;
      if (el && (typeof window === 'undefined' ? false : window.location.hash === '#official-notice')) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    const id = setTimeout(scrollToNotice, 150);
    window.addEventListener('hashchange', scrollToNotice);
    return () => {
      clearTimeout(id);
      window.removeEventListener('hashchange', scrollToNotice);
    };
  }, []);

  return (
    <Box
      component="section"
      ref={sectionRef}
      id="official-notice"
      sx={{
        position: 'relative',
        py: { xs: 4, sm: 5, md: 6 },
        overflow: 'visible',
        scrollMarginTop: 160,
        background: `linear-gradient(180deg, rgba(139, 123, 181, 0.08) 0%, var(--color-bg-primary) 100%)`,
        borderTop: `1px solid ${theme.palette.primary.main}30`,
        borderBottom: `1px solid ${theme.palette.primary.main}30`,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: `${theme.palette.primary.main}20`,
              border: `1px solid ${theme.palette.primary.main}40`,
              mb: 2,
            }}
          >
            <AlertCircle
              style={{
                width: 24,
                height: 24,
                color: theme.palette.primary.light,
              }}
            />
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.8125rem' },
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: theme.palette.primary.light,
              mb: 1,
            }}
          >
            Official Notice — February 6, 2026
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            Postponement of the GIC Event
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9375rem', sm: '1rem' },
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            After a comprehensive review of our current operational capacity, the organizing committee has made the difficult decision to <strong style={{ color: theme.palette.text.primary }}>postpone the event indefinitely</strong>.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9375rem', sm: '1rem' },
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            This decision stems from unforeseen internal challenges. We are committed to delivering an event that meets the highest standards. We are suspending active planning and are <strong style={{ color: theme.palette.text.primary }}>not establishing a rescheduled timeline</strong> at this juncture. We will share further updates and next steps for registered participants as soon as information becomes available.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9375rem', sm: '1rem' },
              color: theme.palette.secondary.light,
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            We deeply regret the inconvenience and thank you for your understanding and patience.
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: '0.8125rem',
              color: theme.palette.text.secondary,
              opacity: 0.9,
            }}
          >
            — Office of the Event Chair
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default EventPostponementNotice;
