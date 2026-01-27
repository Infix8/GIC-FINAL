import { createTheme } from '@mui/material/styles';

/**
 * MUI v7 theme configuration
 * Matches the existing design system colors
 */
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B7BB5', // gic-violet
      light: '#A99BD4', // gic-lavender
      dark: '#6B5B95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F4A261', // warm amber
      light: '#F6B88A',
      dark: '#E76F51',
      contrastText: '#0a0a0f',
    },
    tertiary: {
      main: '#06B6D4', // cool cyan
      light: '#22D3EE',
      dark: '#0891B2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a12', // gic-dark
      paper: '#1a1528',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: [
      '"Manrope"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Fraunces", "Playfair Display", "Cormorant Garamond", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Fraunces", "Playfair Display", "Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Fraunces", "Playfair Display", "Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});
