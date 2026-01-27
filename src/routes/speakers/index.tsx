import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const SpeakersPage = lazy(() => import('~features/speakers/components/SpeakersPage'));

export const Route = createFileRoute('/speakers/')({
  component: SpeakersPage,
  loader: () => ({ crumb: 'Speakers' }),
});
