/**
 * Site-wide strip: GIC Event postponed.
 * Shown below the main header on every page.
 */

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { AlertCircle } from 'lucide-react';

export const EVENT_POSTPONEMENT_BANNER_HEIGHT = 40;

const EventPostponementBanner: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="aside"
      role="status"
      aria-label="Event postponement notice"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 0.75,
        px: 2,
        minHeight: EVENT_POSTPONEMENT_BANNER_HEIGHT,
        boxSizing: 'border-box',
        background: `linear-gradient(90deg, ${theme.palette.primary.dark}30, ${theme.palette.primary.main}25, ${theme.palette.primary.dark}30)`,
        borderBottom: `1px solid ${theme.palette.primary.main}40`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <AlertCircle
          style={{
            width: 16,
            height: 16,
            color: theme.palette.primary.light,
            flexShrink: 0,
          }}
        />
        <Typography
          component="span"
          sx={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          GIC Event has been postponed indefinitely.
        </Typography>
        <Link
          to="/"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: theme.palette.primary.light,
            textDecoration: 'underline',
          }}
        >
          See official notice on home page
        </Link>
      </Box>
    </Box>
  );
};

export default EventPostponementBanner;
