import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { SuspenseLoader } from '~components/SuspenseLoader/SuspenseLoader';
import Footer from '@/components/Footer';
import StaggeredMenu from '@/components/StaggeredMenu';
import SmoothScroll from '@/components/SmoothScroll';
import BackgroundEffects from '@/components/BackgroundEffects';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

// Menu items configuration
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to Home', link: '/' },
  { label: 'About', ariaLabel: 'Go to About', link: '/about' },
  { label: 'Events', ariaLabel: 'Go to Events', link: '/events' },
  { label: 'Speakers', ariaLabel: 'Go to Speakers', link: '/speakers' },
  { label: 'Sponsors', ariaLabel: 'Go to Sponsors', link: '/sponsors' },
  { label: 'Passes', ariaLabel: 'Go to Passes', link: '/passes' },
  { label: 'Accommodation', ariaLabel: 'Go to Accommodation', link: '/accommodation' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://www.instagram.com/gic_smec?igsh=dGc0MTMyOTR2ZXBi' },
];

// Handle GSAP animations on route change
const PageAnimations = () => {
  useGSAPAnimations();
  return null;
};

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Staggered Menu Navigation - Fixed position, outside smooth scroll flow */}
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        logoUrl="/logo.png"
        colors={['#0f0c19', '#1a1528', '#2d2445', '#6B5B95']}
        accentColor="#8B7BB5"
        menuButtonColor="#EAEAEA"
        openMenuButtonColor="#EAEAEA"
        isFixed={true}
        displaySocials={true}
        displayItemNumbering={false}
      />
      <SmoothScroll>
        <Box
          className="animate-fade-up"
          sx={{
            animation: 'fadeUp 0.6s ease-out',
            '@keyframes fadeUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <PageAnimations />
          <BackgroundEffects />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Box
              sx={{
                flex: 1,
                pt: { xs: 5, sm: 6, md: 0 },
              }}
            >
              <SuspenseLoader>
                <Outlet />
              </SuspenseLoader>
            </Box>
            <Footer />
          </Box>
        </Box>
      </SmoothScroll>
    </>
  ),
});
