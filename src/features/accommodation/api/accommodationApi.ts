import { apiClient } from '@/lib/apiClient';

/**
 * Accommodation API service
 * Ready for future API integration
 */

export const accommodationApi = {
  /**
   * Get accommodation options
   */
  getAccommodations: async () => {
    // TODO: Implement when API is available
    // return apiClient.get('/accommodation');
    return Promise.resolve({ data: [] });
  },
};

export default accommodationApi;
