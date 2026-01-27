import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const Home = lazy(() => import('~features/home/components/Home'));

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => ({ crumb: 'Home' }),
});
