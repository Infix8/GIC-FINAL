import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface SuspenseLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const defaultFallback: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: 2,
  background: 'linear-gradient(to bottom, #0a0a12, #1a1528)',
};

const DefaultFallback: React.FC = () => (
  <Box sx={defaultFallback}>
    <CircularProgress
      size={60}
      thickness={4}
      sx={{
        color: 'primary.main',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }}
    />
    <Typography
      variant="h6"
      sx={{
        color: 'text.secondary',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontSize: '0.875rem',
      }}
    >
      Loading...
    </Typography>
  </Box>
);

export const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({
  children,
  fallback = <DefaultFallback />,
}) => {
  return (
    <React.Suspense fallback={fallback}>
      {children}
    </React.Suspense>
  );
};

export default SuspenseLoader;
