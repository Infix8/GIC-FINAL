import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

const PassesPage = lazy(() => import('~features/passes/components/PassesPage'));

export const Route = createFileRoute('/passes/')({
  component: PassesPage,
  loader: () => ({ crumb: 'Passes' }),
  validateSearch: (search: Record<string, unknown>): { event?: string } => {
    return {
      event: search.event as string | undefined,
    };
  },
});
