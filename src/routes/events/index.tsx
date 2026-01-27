import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const EventsPage = lazy(() => import('~features/events/components/EventsPage'));

export const Route = createFileRoute('/events/')({
  component: EventsPage,
  loader: () => ({ crumb: 'Events' }),
});
