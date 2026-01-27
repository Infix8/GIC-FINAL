/**
 * Sponsors feature types
 */

export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}
