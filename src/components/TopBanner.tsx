/**
 * TopBanner - "St. Martin's Engineering College Presents"
 * Renders above the navbar on desktop and mobile.
 * Styling matches site: dark theme, purple accents, display font.
 */

import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const BANNER_HEIGHT_XS = 32; // mobile
const BANNER_HEIGHT_MD = 36; // desktop

export const TOP_BANNER_HEIGHT_XS = BANNER_HEIGHT_XS;
export const TOP_BANNER_HEIGHT_MD = BANNER_HEIGHT_MD;

const TopBanner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const height = isMobile ? BANNER_HEIGHT_XS : BANNER_HEIGHT_MD;

  return (
    <Box
      component="header"
      role="banner"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: height,
        zIndex: 1200, // above AppBar (1100)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1.5,
        py: 0,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        borderBottom: `1px solid ${theme.palette.primary.main}20`,
        boxSizing: 'border-box',
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: '"Playfair Display", "Fraunces", "Cormorant Garamond", serif',
          fontSize: isMobile ? '0.75rem' : '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: theme.palette.secondary.light,
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        St. Martin&apos;s Engineering College Presents
      </Typography>
    </Box>
  );
};

export default TopBanner;
