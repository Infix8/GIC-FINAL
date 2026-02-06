import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { SuspenseLoader } from '~components/SuspenseLoader/SuspenseLoader';
import Footer from '@/components/Footer';
import NavigationMenu from '@/components/NavigationMenu';
import TopBanner from '@/components/TopBanner';
import EventPostponementBanner, { EVENT_POSTPONEMENT_BANNER_HEIGHT } from '@/components/EventPostponementBanner';
import SmoothScroll from '@/components/SmoothScroll';
import BackgroundEffects from '@/components/BackgroundEffects';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

// Menu items configuration - simplified for MUI NavigationMenu
const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Events', link: '/events' },
  { label: 'Speakers', link: '/speakers' },
  { label: 'Sponsors', link: '/sponsors' },
  { label: 'Passes', link: '/passes' },
  { label: 'Accommodation', link: '/accommodation' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com', icon: 'linkedin' as const },
  { label: 'Instagram', link: 'https://www.instagram.com/gic_smec?igsh=dGc0MTMyOTR2ZXBi', icon: 'instagram' as const },
];

// Handle GSAP animations on route change - optimized to prevent re-initialization
const PageAnimations = () => {
  // Always call the hook (React rules), but hook handles mobile detection internally
  useGSAPAnimations();
  return null;
};

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Fixed header (banner + nav) - excluded from mobile scroll reset so fixed works on mobile */}
      <Box className="app-header" component="header" sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200 }}>
        <TopBanner />
        <EventPostponementBanner />
        <NavigationMenu
          items={menuItems}
          socialItems={socialItems}
          logoUrl="/logo.png"
          displaySocials={true}
        />
      </Box>
      <SmoothScroll>
        {/* Main content wrapper - CRITICAL: No overflow restrictions on mobile */}
        <Box
          component="main"
          sx={{
            // Explicit mobile-safe styles
            position: 'relative',
            width: '100%',
            minHeight: { xs: 'auto', md: '100vh' },
            // NEVER use overflow:hidden on this container
            overflow: 'visible',
          }}
        >
          <PageAnimations />
          <BackgroundEffects />
          {/* Content area */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: { xs: 'auto', md: '100vh' },
              // Ensure content can grow naturally
              overflow: 'visible',
            }}
          >
            <Box
              sx={{
                flex: '1 0 auto',
                // Content starts just below header (banner 36px + toolbar 64px = 100px on desktop)
                // Mobile: Increased padding to account for event name below logo (banner + toolbar + event name)
                pt: { xs: 25, sm: 25, md: `calc(100px + ${EVENT_POSTPONEMENT_BANNER_HEIGHT}px)` },
                overflow: 'visible',
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
