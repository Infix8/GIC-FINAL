import { useViewport } from '@/hooks/useViewport';
import EventsPageDesktop from './EventsPageDesktop';
import EventsPageMobile from './EventsPageMobile';

/**
 * Main EventsPage component that conditionally renders
 * desktop or mobile view based on viewport size
 */
const EventsPage = () => {
    const { isMobile } = useViewport();

    // Render mobile view on mobile devices (< 768px)
    if (isMobile) {
        return <EventsPageMobile />;
    }

    // Render desktop view on desktop devices (>= 768px)
    return <EventsPageDesktop />;
};

export default EventsPage;
