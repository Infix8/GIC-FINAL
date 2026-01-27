import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const TermsPage = lazy(() => import('~features/terms/components/TermsPage'));

export const Route = createFileRoute('/terms/')({
  component: TermsPage,
  loader: () => ({ crumb: 'Terms' }),
});
