import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Loader from './components/Loader';
import StaggeredMenu from './components/StaggeredMenu';
import SmoothScroll from './components/SmoothScroll';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';

// Pages
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import SpeakersPage from './pages/SpeakersPage';
import SponsorsPage from './pages/SponsorsPage';
import PassesPage from './pages/PassesPage';
import AccommodationPage from './pages/AccommodationPage';

import './index.css';

// Menu items configuration
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to Home', link: '/' },
  { label: 'About', ariaLabel: 'Go to About', link: '/about' },
  { label: 'Events', ariaLabel: 'Go to Events', link: '/events' },
  { label: 'Speakers', ariaLabel: 'Go to Speakers', link: '/speakers' },
  { label: 'Sponsors', ariaLabel: 'Go to Sponsors', link: '/sponsors' },
  { label: 'Passes', ariaLabel: 'Go to Passes', link: '/passes' },
  { label: 'Stay', ariaLabel: 'Go to Accommodation', link: '/accommodation' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://www.instagram.com/gic_smec?igsh=dGc0MTMyOTR2ZXBi' },
];

// Handle GSAP animations on route change
const PageAnimations = () => {
  // Use GSAP hook for scroll animations
  useGSAPAnimations();
  return null;
};

// Main app content wrapped with SmoothScroll
const AppContent = () => {
  return (
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
        <div className="animate-fade-up">

          <PageAnimations />
          <BackgroundEffects />




          <div className="main-container flex flex-col min-h-screen">
            <div className="flex-1 pt-0">
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/speakers" element={<SpeakersPage />} />
                <Route path="/sponsors" element={<SponsorsPage />} />
                <Route path="/passes" element={<PassesPage />} />
                <Route path="/accommodation" element={<AccommodationPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      {!loading && <AppContent />}
    </Router>
  );
}

export default App;
