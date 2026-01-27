import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const AboutPage = lazy(() => import('~features/about/components/AboutPage'));

export const Route = createFileRoute('/about/')({
  component: AboutPage,
  loader: () => ({ crumb: 'About' }),
});
