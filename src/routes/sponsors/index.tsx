import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const SponsorsPage = lazy(() => import('~features/sponsors/components/SponsorsPage'));

export const Route = createFileRoute('/sponsors/')({
  component: SponsorsPage,
  loader: () => ({ crumb: 'Sponsors' }),
});
