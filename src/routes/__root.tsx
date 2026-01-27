import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { SuspenseLoader } from '~components/SuspenseLoader/SuspenseLoader';
import Footer from '@/components/Footer';
import NavigationMenu from '@/components/NavigationMenu';
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
      {/* Production-Grade Navigation - MUI Drawer (battle-tested, mobile-optimized) */}
      <NavigationMenu
        items={menuItems}
        socialItems={socialItems}
        logoUrl="/logo.png"
        displaySocials={true}
      />
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
                pt: { xs: 5, sm: 6, md: 0 },
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
