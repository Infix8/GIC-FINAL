import { apiClient } from '@/lib/apiClient';

/**
 * Sponsors API service
 * Ready for future API integration
 */

export const sponsorsApi = {
  /**
   * Get all sponsors
   */
  getSponsors: async () => {
    // TODO: Implement when API is available
    // return apiClient.get('/sponsors');
    return Promise.resolve({ data: [] });
  },
};

export default sponsorsApi;
