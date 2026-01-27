import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const AccommodationPage = lazy(() => import('~features/accommodation/components/AccommodationPage'));

export const Route = createFileRoute('/accommodation/')({
  component: AccommodationPage,
  loader: () => ({ crumb: 'Accommodation' }),
});
